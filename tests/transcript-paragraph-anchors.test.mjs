import assert from "node:assert/strict";
import test from "node:test";
import { getParagraphAnchorIds } from "../src/data/transcript-paragraph-anchors.ts";

const turn = (speaker, text, speakerId = speaker) => ({
  speaker, speakerId, paragraphs: [[{ value: text }]],
});
const chapter = (...turns) => ({ turns });

test("inserting an unrelated paragraph or chapter preserves existing IDs", () => {
  const first = chapter(turn("person-a", "First paragraph"));
  const second = chapter(turn("person-b", "Second paragraph"));
  const original = getParagraphAnchorIds([first, second]);
  const inserted = getParagraphAnchorIds([chapter(turn("person-c", "New paragraph")), first, second]);
  assert.equal(inserted[1][0][0], original[0][0][0]);
  assert.equal(inserted[2][0][0], original[1][0][0]);
});

test("identical speaker and text receive unique, deterministic occurrence suffixes", () => {
  const chapters = [chapter(turn("person-a", "Same"), turn("person-a", "Same")), chapter(turn("person-a", "Same"))];
  const ids = getParagraphAnchorIds(chapters);
  assert.equal(ids[0][1][0], `${ids[0][0][0]}-2`);
  assert.equal(ids[1][0][0], `${ids[0][0][0]}-3`);
  assert.deepEqual(ids, getParagraphAnchorIds(chapters));
});

test("segment markup and whitespace changes do not change paragraph ID", () => {
  const plain = [{ turns: [{ speaker: "A", speakerId: "a", paragraphs: [[{ value: "Hello world" }]] }] }];
  const linked = [{ turns: [{ speaker: "A", speakerId: "a", paragraphs: [[{ value: "Hello " }, { value: "world", type: "entity-link", href: "/wiki/products/example" }]] }] }];
  assert.deepEqual(getParagraphAnchorIds(plain), getParagraphAnchorIds(linked));
  const whitespace = [{ turns: [turn("A", "  Hello \n world  ", "a")] }];
  assert.deepEqual(getParagraphAnchorIds(plain), getParagraphAnchorIds(whitespace));
});
