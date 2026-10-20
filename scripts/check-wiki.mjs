import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const root = new URL("..", import.meta.url).pathname;
const base = join(root, "src", "content", "prose");
const problems = [];
const note = (message) => problems.push(message);

// Quote/chapter anchors, recomputed with the algorithm in src/data/transcript-paragraph-anchors.ts.
const anchors = new Set();
const chapters = new Set();
const englishTranscripts = new Set();
const norm = (value) => value.normalize("NFC").replace(/\s+/gu, " ").trim();
const transcriptDirectory = join(root, "src", "content", "imported", "transcripts");
for (const file of readdirSync(transcriptDirectory)) {
  if (!file.endsWith(".json")) continue;
  const data = JSON.parse(readFileSync(join(transcriptDirectory, file), "utf8"));
  if (file.endsWith(".en.json")) englishTranscripts.add(data.episodeId);
  const occurrences = new Map();
  for (const chapter of data.chapters) {
    chapters.add(chapter.id);
    for (const turn of chapter.turns) for (const paragraph of turn.paragraphs) {
      const speaker = norm(turn.speakerId ?? turn.speaker);
      const text = norm(paragraph.map((segment) => segment.value).join(""));
      const fingerprint = createHash("sha256").update(`${speaker}\u0000${text}`).digest("hex").slice(0, 20);
      const baseId = `quote-${fingerprint}`;
      const occurrence = (occurrences.get(baseId) ?? 0) + 1;
      occurrences.set(baseId, occurrence);
      anchors.add(occurrence === 1 ? baseId : `${baseId}-${occurrence}`);
    }
  }
}

const entityTypeOf = new Map();
for (const dir of ["products", "brands", "people"]) {
  for (const file of readdirSync(join(root, "src", "content", "data", dir))) {
    if (!file.endsWith(".yaml")) continue;
    const id = file.slice(0, -5);
    if (!entityTypeOf.has(id)) entityTypeOf.set(id, new Set());
    entityTypeOf.get(id).add(dir);
  }
}
const termIds = new Set(readdirSync(join(root, "src", "content", "data", "terms"))
  .filter(file => file.endsWith(".yaml")).map(file => file.slice(0, -5)));

const nameVariants = [/归藏/g, /鬼藏/g, /向陽/g, /喬木/g, /楊攀/g];
const processPhrases = [/本页不固定/, /本页未核/, /本条目未核对/, /this page does not fix/, /this page does not reproduce/, /has not independently verified/, /at the time of this entry/];
const seoTitles = new Map();
let links = 0, quotes = 0, chapterRefs = 0;

for (const dir of ["products", "brands", "people", "terms"]) {
  for (const file of readdirSync(join(base, dir))) {
    if (!file.endsWith(".md")) continue;
    const label = `${dir}/${file}`;
    const text = readFileSync(join(base, dir, file), "utf8");
    if (/^# /m.test(text)) note(`H1 in ${label}`);
    for (const variant of nameVariants) if (variant.test(text)) note(`name variant ${variant} in ${label}`);
    for (const phrase of processPhrases) if (phrase.test(text)) note(`process phrase ${phrase} in ${label}`);
    const isTerm = dir === "terms";
    const [id, locale] = isTerm ? file.replace(/\.md$/, "").split(".") : file.replace(/\.md$/, "").split(".wiki.");
    if (isTerm) {
      const yaml = text.startsWith("---\n") ? text.slice(4, text.indexOf("\n---", 4)) : "";
      if (/status: published/.test(yaml)) {
        for (const locale2 of ["zh-Hans", "en"]) {
          const article = join(base, dir, `${id}.${locale2}.md`);
          try {
            const body = readFileSync(article, "utf8");
            if (/^# /m.test(body)) note(`H1 in ${dir}/${id}.${locale2}.md`);
            if (/<!--/.test(body)) note(`stub comment in ${dir}/${id}.${locale2}.md`);
          } catch { note(`missing published term article ${id}/${locale2}`); }
        }
        if (/summary:\s*\n\s+zh-Hans: ['"]{2}/.test(yaml) || /summary:\s*\n\s+en: ['"]{2}/.test(yaml)) note(`empty published summary in ${label}`);
        if (!/lastVerifiedAt/.test(yaml) || !/sources:/.test(yaml)) note(`published term without sources/date: ${label}`);
      }
      continue;
    }
    const frontmatter = text.startsWith("---\n") ? text.slice(4, text.indexOf("\n---", 4)) : "";
    if (!/^slot: wiki$/m.test(frontmatter)) continue;
    const updatedAt = frontmatter.match(/^updatedAt: ['"]?(\d{4}-\d{2}-\d{2})['"]?$/m)?.[1];
    if (updatedAt && !/^\d{4}-\d{2}-\d{2}$/.test(updatedAt)) note(`bad updatedAt in ${label}`);
    const seoTitle = frontmatter.match(/^seoTitle: ['"]?(.+?)['"]?$/m)?.[1];
    if (seoTitle) {
      if (seoTitles.has(seoTitle)) note(`duplicate seoTitle ${JSON.stringify(seoTitle)}: ${seoTitles.get(seoTitle)} and ${label}`);
      else seoTitles.set(seoTitle, label);
      if (locale === "zh-Hans" && seoTitle.length > 4 && !/[\u4e00-\u9fff]/.test(seoTitle)) note(`English-only zh seoTitle in ${label}`);
    }
    const h2Headings = [...text.matchAll(/^## (.+)$/gm)].map(match => match[1].trim());
    if (new Set(h2Headings).size !== h2Headings.length) note(`duplicate H2 in ${label}`);
    if (/## (常见问题|Frequently asked questions)\s*\n\s*## /.test(text)) note(`empty FAQ in ${label}`);
    for (const match of text.matchAll(/\[([^\]]*)\]\((\/[^)]+)\)/g)) {
      const href = match[2]; links++;
      if (href.startsWith("/weekly/")) {
        if (href.startsWith("/en/weekly/")) {
          const episode = `next-token-weekly--${href.match(/\/weekly\/(\d{3})/)?.[1]}`;
          if (!englishTranscripts.has(episode)) note(`English transcript does not exist: ${href} in ${label}`);
          continue;
        }
        if (!/\/weekly\/\d{3}\/transcript/.test(href)) continue;
        const hash = href.split("#")[1]; if (!hash) continue;
        if (hash.startsWith("chapter-")) { chapterRefs++; if (!chapters.has(hash)) note(`missing chapter ${hash} in ${label}`); }
        else if (hash.startsWith("quote-")) { quotes++; if (!anchors.has(hash)) note(`missing quote ${hash} in ${label}`); }
        else note(`unknown anchor ${href} in ${label}`);
      } else if (href.startsWith("/wiki/") || href.startsWith("/en/wiki/")) {
        const match = href.match(/^\/(en\/)?wiki\/(products|brands|people|terms)\/([a-z0-9-]+)$/);
        if (!match) { note(`bad internal link ${href} in ${label}`); continue; }
        if (match[2] === "terms") { if (!termIds.has(match[3])) note(`unknown term ${href} in ${label}`); continue; }
        if (!entityTypeOf.has(match[3])) note(`unknown entity ${href} in ${label}`);
        else if (!entityTypeOf.get(match[3]).has(match[2])) note(`wrong entity type ${href} in ${label}`);
      }
    }
  }
}
console.log(`wiki check: ${links} links, ${quotes} quotes, ${chapterRefs} chapter refs`);
if (problems.length) { for (const problem of problems) console.error(`✖ ${problem}`); process.exit(1); }
console.log("wiki check: all ok");
