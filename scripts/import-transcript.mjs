import { readFile, readdir, writeFile, mkdir, rename } from "node:fs/promises";
import { execFile } from "node:child_process";
import { basename, dirname, relative, resolve } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { load } from "js-yaml";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { convertTranscript, sha256 } from "./lib/transcript-converter.mjs";

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const execFileAsync = promisify(execFile);
const [episodeId, sourceArgument] = process.argv.slice(2);

if (!episodeId || !sourceArgument) {
  throw new Error("Usage: npm run import:transcript -- <episode-id> <source-markdown>");
}

const sourcePath = resolve(sourceArgument);
const source = await readFile(sourcePath, "utf8");
const sourceSha256 = sha256(source);
const manifestPath = resolve(dirname(sourcePath), "transcript-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
if (manifest.output_sha256 !== sourceSha256) {
  throw new Error(`Source hash does not match ${manifestPath}`);
}
if (manifest.status !== "approved-for-publication") {
  throw new Error(`Transcript is not approved for publication: ${manifest.status}`);
}

async function inspectSourceProvenance(path) {
  let sourceRoot;
  try {
    ({ stdout: sourceRoot } = await execFileAsync("git", ["-C", dirname(path), "rev-parse", "--show-toplevel"]));
  } catch {
    throw new Error("Transcript source must live inside a Git repository");
  }

  const repositoryRoot = sourceRoot.trim();
  const repositoryPath = relative(repositoryRoot, path).replaceAll("\\", "/");
  if (!repositoryPath || repositoryPath.startsWith("../") || repositoryPath.startsWith("/")) {
    throw new Error("Transcript source path must resolve inside its repository");
  }

  let tracked = true;
  try {
    await execFileAsync("git", ["-C", repositoryRoot, "ls-files", "--error-unmatch", "--", repositoryPath]);
  } catch {
    tracked = false;
  }

  const { stdout: statusOutput } = await execFileAsync("git", [
    "-C",
    repositoryRoot,
    "status",
    "--porcelain",
    "--",
    repositoryPath,
  ]);
  const sourceState = !tracked ? "untracked" : statusOutput.trim() ? "modified" : "committed";
  const sourceRevision = sourceState === "committed"
    ? (await execFileAsync("git", ["-C", repositoryRoot, "rev-parse", "HEAD"])).stdout.trim()
    : null;

  return {
    sourceRepository: basename(repositoryRoot),
    sourceRevision,
    sourceState,
    sourcePath: repositoryPath,
  };
}

async function readEntities(directory, entityType) {
  const root = resolve(websiteRoot, `src/content/data/${directory}`);
  const files = (await readdir(root)).filter((file) => /\.ya?ml$/i.test(file)).sort();
  return Promise.all(files.map(async (file) => {
    const data = load(await readFile(resolve(root, file), "utf8"));
    const id = file.replace(/\.ya?ml$/i, "");
    return {
      entityType,
      id,
      aliases: [data.name?.["zh-Hans"], data.name?.en, ...(data.aliases ?? [])],
    };
  }));
}

const rulesPath = resolve(websiteRoot, `src/content/transcript-rules/${episodeId}.json`);
const rules = JSON.parse(await readFile(rulesPath, "utf8"));
const sourceProvenance = await inspectSourceProvenance(sourcePath);
const entities = [
  ...(await readEntities("brands", "brand")),
  ...(await readEntities("products", "product")),
];
const tree = unified().use(remarkParse).parse(source);
const imported = convertTranscript(tree, {
  episodeId,
  locale: rules.locale,
  ...sourceProvenance,
  sourceSha256,
  entities,
  resolutions: rules.resolutions,
});

if (imported.report.unknownSpeakers.length) {
  throw new Error(`Unknown transcript speakers: ${imported.report.unknownSpeakers.join(", ")}`);
}

const outputPath = resolve(websiteRoot, `src/content/imported/transcripts/${episodeId}.${rules.locale}.json`);
await mkdir(dirname(outputPath), { recursive: true });
const temporaryPath = `${outputPath}.tmp`;
await writeFile(temporaryPath, `${JSON.stringify(imported, null, 2)}\n`, "utf8");
await rename(temporaryPath, outputPath);

console.log(JSON.stringify({
  output: relative(websiteRoot, outputPath),
  provenance: imported.provenance,
  conversionVersion: imported.conversionVersion,
  report: imported.report,
}, null, 2));
