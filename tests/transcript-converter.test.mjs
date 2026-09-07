import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { convertTranscript } from "../scripts/lib/transcript-converter.mjs";

test("conversion preserves turns and links only the first entity occurrence per chapter", () => {
  const source = `# Sample\n\nHost line.\n\n> † means pending.\n\n## First\n\n**Test Host†：** Product Pro and Product Pro.\n\nContinued paragraph with [an existing link](https://example.com).\n\n**编者注：** Editorial note.\n`;
  const tree = unified().use(remarkParse).parse(source);
  const result = convertTranscript(tree, {
    episodeId: "show--001",
    locale: "zh-Hans",
    sourceRepository: "content",
    sourceRevision: "b".repeat(40),
    sourceState: "committed",
    sourcePath: "source.md",
    sourceSha256: "a".repeat(64),
    entities: [
      { entityType: "product", id: "product", aliases: ["Product"] },
      { entityType: "product", id: "product-pro", aliases: ["Product Pro"] },
    ],
  });

  assert.equal(result.chapters.length, 1);
  assert.equal(result.chapters[0].turns.length, 2);
  assert.equal(result.chapters[0].turns[0].candidate, true);
  assert.equal(result.chapters[0].turns[0].paragraphs.length, 2);
  assert.deepEqual(
    result.chapters[0].turns[0].paragraphs[0].filter(({ type }) => type === "entity-link").map(({ entityId }) => entityId),
    ["product-pro"],
  );
  assert.equal(result.chapters[0].turns[0].paragraphs[1].some(({ type }) => type === "external-link"), true);
  assert.equal(result.chapters[0].turns[1].kind, "editor-note");
});

test("published transcript snapshot retains approved content and deterministic structure", async () => {
  const snapshot = JSON.parse(await readFile(
    new URL("../src/content/imported/transcripts/next-token-weekly--001.zh-Hans.json", import.meta.url),
    "utf8",
  ));
  const serialized = JSON.stringify(snapshot);

  assert.equal(snapshot.provenance.sourceSha256, "19335764e405b2bfcc171efa3831a46cbad51218c84d1183aebaa5e02fc56f23");
  assert.equal(snapshot.provenance.sourceRepository, "next-token");
  assert.equal(snapshot.provenance.sourceRevision, null);
  assert.equal(snapshot.provenance.sourceState, "untracked");
  assert.equal(snapshot.provenance.sourcePath, "shows/weekly/episodes/001/04-release/copy/transcript.zh-Hans.md");
  assert.equal(snapshot.provenance.sourcePath.startsWith("../"), false);
  assert.equal(snapshot.report.chapters, 37);
  assert.equal(snapshot.report.turns, 918);
  assert.equal(snapshot.report.paragraphs, 978);
  assert.equal(snapshot.report.candidateSpeakerMarkers, 179);
  assert.equal(snapshot.report.unknownSpeakers.length, 0);
  assert.equal(snapshot.report.ambiguousAliases.length, 0);
  assert.equal(serialized.includes("5.1 担心"), false);
  assert.equal(snapshot.chapters.some(({ turns }) => turns.some(({ kind }) => kind === "editor-note")), true);

  for (const chapter of snapshot.chapters) {
    const linked = chapter.turns.flatMap(({ paragraphs }) => paragraphs.flat()).filter(({ type }) => type === "entity-link");
    assert.equal(new Set(linked.map(({ entityType, entityId }) => `${entityType}:${entityId}`)).size, linked.length);
  }
});
