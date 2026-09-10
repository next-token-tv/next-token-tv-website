import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { convertTranscript } from "../scripts/lib/transcript-converter.mjs";

test("deterministic matching skips invalid substrings, prefers full names and excludes hosts", () => {
  const source = `# Test\n\n## First\n\n**杨攀：** xH3 H3 H3。Next Token Weekly，Next Token。Three.js，three.js。ZCodeX ZCode。杨攀，橘子，DHH。\n\n## Second\n\n**橘子：** H3，DHH。`;
  const options = {
    episodeId: "show--001", locale: "zh-Hans", entities: [
      { entityType: "product", id: "minimax-h3", aliases: ["MiniMax H3", "H3"] },
      { entityType: "brand", id: "next-token", aliases: ["Next Token"] },
      { entityType: "show", id: "next-token-weekly", href: "/weekly/", aliases: ["Next Token Weekly"] },
      { entityType: "product", id: "threejs", aliases: ["Three.js", "three.js"] },
      { entityType: "product", id: "zcode", aliases: ["ZCode"] },
      { entityType: "person", id: "yangpan", aliases: ["杨攀"] },
      { entityType: "person", id: "orange", aliases: ["橘子"] },
      { entityType: "person", id: "dhh", aliases: ["DHH"] },
    ], excludedEntities: ["person:yangpan", "person:orange"],
  };
  const tree = unified().use(remarkParse).parse(source);
  const result = convertTranscript(tree, options);
  assert.deepEqual(result, convertTranscript(tree, options));
  const first = result.chapters[0].turns[0].paragraphs[0];
  assert.deepEqual(first.filter(s => s.type === "entity-link").map(s => s.entityId),
    ["minimax-h3", "minimax-h3", "next-token-weekly", "next-token", "threejs", "threejs", "zcode", "dhh"]);
  assert.equal(first.map(s => s.value).join(""), source.split("**杨攀：** ")[1].split("\n")[0]);
  assert.equal(result.chapters[1].turns[0].paragraphs[0].filter(s => s.type === "entity-link").length, 2);
});

test("conversion preserves turns and links every entity occurrence", () => {
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
    ["product-pro", "product-pro"],
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

  assert.equal(snapshot.provenance.sourceSha256, "d00e05645eaf2ebc7c467956b12328d84c94aac0e2a4259d631a0905f6dcbf77");
  assert.equal(snapshot.provenance.sourceRepository, "next-token");
  assert.equal(snapshot.provenance.sourceRevision, null);
  assert.equal(snapshot.provenance.sourceState, "modified");
  assert.equal(snapshot.provenance.sourcePath, "shows/weekly/episodes/001/04-release/copy/transcript.zh-Hans.md");
  assert.equal(snapshot.provenance.sourcePath.startsWith("../"), false);
  assert.equal(snapshot.report.chapters, 37);
  assert.equal(snapshot.report.turns, 917);
  assert.equal(snapshot.report.paragraphs, 977);
  assert.equal(snapshot.report.candidateSpeakerMarkers, 180);
  assert.equal(snapshot.report.unknownSpeakers.length, 0);
  assert.equal(snapshot.report.ambiguousAliases.length, 0);
  const showLinks = snapshot.chapters.flatMap(c => c.turns.flatMap(t => t.paragraphs.flat())).filter(s => s.entityType === 'show');
  assert.ok(showLinks.length > 0);
  assert.ok(showLinks.every(s => s.href === '/weekly/' && s.entityId === 'next-token-weekly'));
  const people = snapshot.report.linkedEntities.filter(({ entity }) => entity.startsWith("person:"));
  assert.equal(people.length, 5);
  const links = snapshot.report.linkedEntities.map(({ entity }) => entity);
  for (const id of ['yangpan', 'guizang', 'orange', 'xiangyang-qiaomu']) assert.equal(links.includes(`person:${id}`), false);
  assert.equal(links.includes('product:mac'), false);
  assert.equal(links.includes('product:openai-api'), false);
  for (const id of ['herdr', 'youtube', 'opencode', 'gpt', 'kimi', 'qwen', 'pi', 'dia', 'mimo', 'xiaomi-smart-storage', 'synology-nas', 'ugreen-nas']) assert.ok(links.includes(`product:${id}`), id);
  const paragraphs = snapshot.chapters.flatMap(c => c.turns.flatMap(t => t.paragraphs));
  const texts = paragraphs.map(p => p.map(s => s.value).join(''));
  assert.ok(texts.some(t => t.startsWith('Seedance 2.5 的供应也不够。')));
  assert.ok(!texts.includes('Seedan'));
  assert.ok(!texts.some(t => t.startsWith('ce 2.5')));
  const apiParagraph = paragraphs.find(p => p.map(s => s.value).join('').includes('8 折的 OpenAI API'));
  assert.ok(apiParagraph.some(s => s.type === 'entity-link' && s.entityType === 'brand' && s.entityId === 'openai' && s.value === 'OpenAI'));
  const railsParagraph = paragraphs.find(p => p.map(s => s.value).join('').includes('Ruby on Rails 那个连，作者'));
  assert.ok(railsParagraph.some(s => s.type === 'entity-link' && s.value === 'Ruby on Rails' && s.entityId === 'ruby-on-rails' && s.entityType === 'product'));
  assert.ok(railsParagraph.some(s => s.type === 'text' && s.value.includes(' 那个连，作者')));
  assert.ok(!railsParagraph.some(s => s.entityId === 'dhh'));
  const versionLink = paragraphs.flat().find(s => s.type === 'entity-link' && s.value === 'Qwen 3.8 Max 0902');
  assert.equal(versionLink.entityId, 'qwen');
  for (const key of ['show:next-token-weekly', 'product:fal-ai', 'product:openrouter', 'product:threejs', 'product:zcode', 'product:autoglm', 'product:qwen', 'product:hunyuan', 'product:gemini', 'product:gpt', 'product:minimax']) assert.ok(links.includes(key), key);
  assert.equal(serialized.includes('Gemini 3.5 的 Transcribe'), false);
  const personLinks = snapshot.chapters.flatMap(c => c.turns.flatMap(t => t.paragraphs.flat())).filter(s => s.entityType === "person");
  assert.equal(personLinks.every(s => s.href === `/wiki/people/${s.entityId}/`), true);
  assert.equal(personLinks.some(s => s.value === "冕神" && s.entityId === "chen-mian"), true);
  assert.equal(personLinks.some(s => s.value === "Ruby on Rails 那个连，作者" && s.entityId === "dhh"), false);
  assert.equal(personLinks.some(s => s.value === "栋哥" || s.value === "Runta"), false);
  assert.equal(serialized.includes("5.1 担心"), false);
  assert.equal(snapshot.chapters.some(({ turns }) => turns.some(({ kind }) => kind === "editor-note")), true);

  for (const { entity, chapterCount } of snapshot.report.linkedEntities) {
    const chapters = snapshot.chapters.filter(c => c.turns.flatMap(t => t.paragraphs.flat()).some(s => s.type === 'entity-link' && `${s.entityType}:${s.entityId}` === entity));
    assert.equal(chapters.length, chapterCount);
  }
  const repeated = paragraphs.find(p => p.map(s => s.value).join('').includes('Codex 那时候已经比较轻松了'));
  assert.deepEqual(repeated.filter(s => s.type === 'entity-link').map(s => s.entityId), ['codex', 'deepseek', 'deepseek']);
});
