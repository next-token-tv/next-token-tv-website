import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { copyFile, mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const rawArguments = process.argv.slice(2);
const force = rawArguments.includes("--force");
const positional = rawArguments.filter((argument) => argument !== "--force");

if (positional.length !== 1) {
  throw new Error("Usage: npm run import:episode -- <episode-directory> [--force]");
}

const episodeRoot = resolve(positional[0]);
const productionRoot = resolve(episodeRoot, "../../../..");

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function sha256(path) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest("hex");
}

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

async function copyVerified(source, destination, expected) {
  const sourceStat = await stat(source);
  if (sourceStat.size !== expected.bytes) {
    throw new Error(`Size mismatch for ${source}: expected ${expected.bytes}, got ${sourceStat.size}`);
  }
  const sourceHash = await sha256(source);
  if (sourceHash !== expected.sha256) {
    throw new Error(`SHA-256 mismatch for ${source}`);
  }

  if (await fileExists(destination)) {
    const destinationHash = await sha256(destination);
    if (destinationHash === sourceHash) return "unchanged";
    if (!force) {
      throw new Error(`Refusing to replace ${destination}; rerun with --force after review`);
    }
  }

  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
  return "copied";
}

const episodePath = resolve(episodeRoot, "episode.json");
const manifestPath = resolve(episodeRoot, "05-qa/release-manifest.json");
const [episode, manifest, manifestSource] = await Promise.all([
  readJson(episodePath),
  readJson(manifestPath),
  readFile(manifestPath),
]);

if (!/^\d{3}$/.test(episode.id) || manifest.episode_id !== episode.id) {
  throw new Error("Episode and manifest identifiers must be the same three-digit value");
}

const manifestFiles = new Map(manifest.files.map((file) => [file.role, file]));
const webCovers = [960, 1440, 1920].map((width) => {
  const role = `cover-web-${width}`;
  const file = manifestFiles.get(role);
  if (!file) throw new Error(`Release manifest is missing ${role}`);
  return { width, file };
});

const copyResults = [];
for (const { width, file } of webCovers) {
  const destination = resolve(websiteRoot, `public/assets/weekly-${episode.id}-${width}.webp`);
  const result = await copyVerified(resolve(episodeRoot, file.path), destination, file);
  copyResults.push({ width, result });
}

let sourceCommit = null;
try {
  sourceCommit = execFileSync("git", ["-C", productionRoot, "rev-parse", "HEAD"], {
    encoding: "utf8",
  }).trim();
} catch {
  // A manifest hash still provides provenance outside a Git checkout.
}

const publicEpisode = {
  schema_version: 1,
  id: episode.id,
  show: episode.show,
  status: episode.status,
  language: episode.language,
  title: episode.title,
  recorded_at: episode.recorded_at,
  release_date: episode.release_date,
  editorial_window: episode.editorial_window,
  participants: episode.participants,
  images: Object.fromEntries(
    webCovers.map(({ width }) => [width, `/assets/weekly-${episode.id}-${width}.webp`]),
  ),
  provenance: {
    production_commit: sourceCommit,
    release_manifest_sha256: createHash("sha256").update(manifestSource).digest("hex"),
  },
};

const dataPath = resolve(websiteRoot, `src/data/episodes/${episode.id}.json`);
const serialized = `${JSON.stringify(publicEpisode, null, 2)}\n`;
const existingData = (await fileExists(dataPath)) ? await readFile(dataPath, "utf8") : null;
if (existingData !== serialized) {
  if (existingData !== null && !force) {
    throw new Error(`Refusing to replace ${dataPath}; rerun with --force after review`);
  }
  await mkdir(dirname(dataPath), { recursive: true });
  const temporaryPath = `${dataPath}.tmp`;
  await writeFile(temporaryPath, serialized, "utf8");
  await rename(temporaryPath, dataPath);
}

console.log(JSON.stringify({ episode: episode.id, data: dataPath, assets: copyResults }, null, 2));
