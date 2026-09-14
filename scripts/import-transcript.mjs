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
const [episodeId, sourceArgument, ...flags] = process.argv.slice(2);
const reviewPreview = flags.includes("--review-preview");

if (!episodeId || !sourceArgument) {
  throw new Error("Usage: npm run import:transcript -- <episode-id> <source-markdown> [--review-preview]");
}
if (flags.some((flag) => flag !== "--review-preview")) {
  throw new Error(`Unknown import flag: ${flags.find((flag) => flag !== "--review-preview")}`);
}

const sourcePath = resolve(sourceArgument);
const source = await readFile(sourcePath, "utf8");
const sourceSha256 = sha256(source);
const manifestPath = resolve(dirname(sourcePath), reviewPreview ? "manifest.json" : "transcript-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const manifestSourceSha256 = reviewPreview ? manifest.reading_markdown_sha256 : manifest.output_sha256;
if (manifestSourceSha256 !== sourceSha256) {
  throw new Error(`Source hash does not match ${manifestPath}`);
}
if (reviewPreview) {
  if (manifest.status !== "complete_review_draft" || manifest.transcript_approved || manifest.publication_approved) {
    throw new Error(`Transcript is not an eligible review draft: ${manifest.status}`);
  }
} else if (manifest.status !== "approved-for-publication") {
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
      ...(entityType === "show" ? { href: data.pagePath } : {}),
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
  ...(await readEntities("people", "person")),
  ...(await readEntities("shows", "show")),
];
const tree = unified().use(remarkParse).parse(source);
const episode = load(await readFile(resolve(websiteRoot, `src/content/data/episodes/${episodeId}.yaml`), "utf8"));
const membershipsRoot = resolve(websiteRoot, "src/content/data/host-memberships");
const memberships = await Promise.all((await readdir(membershipsRoot)).filter(file => file.endsWith(".yaml"))
  .map(async file => load(await readFile(resolve(membershipsRoot, file), "utf8"))));
const excludedEntities = memberships.filter(m => m.show === episode.show).map(m => `person:${m.person}`);
for (const { entityType, id, alias } of rules.scopedAliases ?? []) {
  const entity = entities.find(item => item.entityType === entityType && item.id === id);
  if (!entity || !alias?.trim()) throw new Error(`Invalid scoped alias: ${id}`);
  entity.aliases.push(alias);
}
const { snapshot, report } = convertTranscript(tree, {
  episodeId,
  locale: rules.locale,
  ...sourceProvenance,
  sourceSha256,
  entities,
  resolutions: rules.resolutions,
  excludedEntities,
});
if (!reviewPreview && snapshot.provenance.sourceState !== "committed") {
  throw new Error(`Published transcript source must be committed, got ${snapshot.provenance.sourceState}: ${snapshot.provenance.sourcePath}`);
}
const imported = {
  ...snapshot,
  publicationStatus: reviewPreview ? "review-draft" : "published",
};

if (report.unknownSpeakers.length) {
  throw new Error(`Unknown transcript speakers: ${report.unknownSpeakers.join(", ")}`);
}
if (report.ambiguousAliases.length) {
  throw new Error(`Ambiguous transcript aliases require explicit resolutions: ${report.ambiguousAliases.map(item => item.alias).join(", ")}`);
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
  report,
}, null, 2));
