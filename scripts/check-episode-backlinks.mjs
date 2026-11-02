// Guard for the entity ↔ episode back-reference mechanism.
//
// src/data/catalog-relations.ts derives an entity's "在 Next Token 中出现" list
// from episode mentions PLUS the entity links inside the transcript. This check
// validates the data that mechanism depends on, source-level (no build):
//   1. every entity a transcript cites must exist in the library (a citation
//      to a missing id would silently produce a dead back-reference);
//   2. self-references ("欢迎来到 Next Token") must stay inside the declared
//      exclusion set shared with catalog-relations.ts — a new self-referencing
//      entity must be added there deliberately, in both files;
//   3. every cited entity type must be one the back-reference mechanism covers.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const transcriptDirectory = join(root, "src", "content", "imported", "transcripts");
const problems = [];

// Keep in sync with `selfReferences` in src/data/catalog-relations.ts.
const selfReferences = new Set(["show:next-token-weekly", "brand:next-token"]);
const collections = { brand: "brands", product: "products", person: "people", term: "terms" };

const library = new Map();
for (const [type, directory] of Object.entries(collections)) {
  const ids = readdirSync(join(root, "src", "content", "data", directory))
    .filter(name => name.endsWith(".yaml")).map(name => name.replace(/\.yaml$/, ""));
  library.set(type, new Set(ids));
}

const episodeSummaries = [];
for (const file of readdirSync(transcriptDirectory)) {
  if (!file.endsWith(".zh-Hans.json")) continue;
  const transcript = JSON.parse(readFileSync(join(transcriptDirectory, file), "utf8"));
  const number = transcript.episodeId?.match(/--(\d{3})$/)?.[1];
  if (!number) {
    problems.push(`${file}: invalid transcript episode ID`);
    continue;
  }
  const cited = new Map();
  let backrefs = 0;
  for (const chapter of transcript.chapters) for (const turn of chapter.turns) for (const paragraph of turn.paragraphs) for (const span of paragraph) {
    if (span.type !== "entity-link" || !span.entityType || !span.entityId) continue;
    cited.set(`${span.entityType}:${span.entityId}`, span.value ?? span.entityId);
  }
  for (const [key, label] of cited) {
    const [type, id] = key.split(":");
    if (selfReferences.has(key)) continue;
    backrefs++;
    if (type === "show") {
      problems.push(`${file}: unhandled self-reference ${key} ("${label}") — extend selfReferences in catalog-relations.ts and check-episode-backlinks.mjs`);
      continue;
    }
    if (!collections[type]) {
      problems.push(`${file}: citation type "${type}" (${key}) is not covered by the back-reference mechanism`);
      continue;
    }
    if (!library.get(type)?.has(id)) {
      problems.push(`${file}: cites missing ${type} "${id}" ("${label}") — add the library entry or fix the transcript link`);
    }
  }
  episodeSummaries.push({ number, citations: backrefs, draft: transcript.publicationStatus === "review-draft" });
}

episodeSummaries.sort((a, b) => a.number.localeCompare(b.number));
for (const { number, citations, draft } of episodeSummaries) {
  console.log(`episode ${number}: ${citations} cited entities back-referenced${draft ? " (review draft — dev-only until published)" : ""}`);
}
if (problems.length) {
  for (const problem of problems) console.error(`✖ ${problem}`);
  console.error(`backlink check: ${problems.length} problem(s)`);
  process.exit(1);
}
console.log("backlink check: all ok");
