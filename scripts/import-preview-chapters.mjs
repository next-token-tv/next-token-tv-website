import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { load } from 'js-yaml';

// Local review only: production chapter imports retain their release gates.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceFile = process.argv[2];
if (!sourceFile) throw new Error('Usage: node scripts/import-preview-chapters.mjs <preview-source.yaml>');
const config = load(readFileSync(resolve(sourceFile), 'utf8'));
if (config.status !== 'local-review' || !/^[a-z0-9-]+--\d{3}$/.test(config.episodeId)) throw new Error('Expected a local review source');
const repository = resolve(root, '..', config.sourceRepository);
const raw = readFileSync(resolve(repository, config.chapters.path));
const data = JSON.parse(raw);
if (data.episode_id !== config.episodeId || data.schema_version !== 1 || data.timeline !== 'release') throw new Error('Mismatched chapter source');
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const episodeRoot = resolve(repository, dirname(config.chapters.path), '../..');
if (sha256(readFileSync(resolve(episodeRoot, data.source.srt))) !== data.source.srt_sha256) throw new Error('Stale chapter SRT');
const english = config.chapters.english;
if (english.chapters.length !== data.chapters.length || english.sections.length !== data.sections.length) throw new Error('Incomplete chapter translations');
let previous = -1;
const ids = new Set();
for (const c of data.chapters) {
  if (ids.has(c.id) || !Number.isInteger(c.start_seconds) || c.start_seconds <= previous || c.start_seconds >= data.duration_seconds) throw new Error('Invalid chapter sequence');
  ids.add(c.id); previous = c.start_seconds;
}
if (data.chapters[0].start_seconds !== 0) throw new Error('Chapters must start at zero');
const timestamp = seconds => {
  const h = Math.floor(seconds / 3600), m = Math.floor(seconds % 3600 / 60), s = seconds % 60;
  return (h ? [h, m, s] : [m, s]).map(n => String(n).padStart(2, '0')).join(':');
};
const sections = {};
for (const language of ['zh-Hans', 'en']) {
  const groups = new Map(data.sections.map((s, i) => [s.id, language === 'en' ? english.sections[i] : s.titles[language]]));
  let group = null;
  const lines = [];
  data.chapters.forEach((c, i) => {
    if (c.section !== group) {
      if (!groups.has(c.section)) throw new Error('Unknown chapter section');
      lines.push('', `### ${groups.get(c.section)}`, ''); group = c.section;
    }
    const title = language === 'en' ? english.chapters[i] : c.titles[language];
    if (typeof title !== 'string' || !title.trim() || /[\n\r]/.test(title)) throw new Error('Invalid chapter title');
    lines.push(`- ${timestamp(c.start_seconds)} ${title}`);
  });
  sections[language] = lines.join('\n');
  const file = resolve(root, `src/content/prose/episodes/${config.episodeId}.${language}.md`);
  let text = readFileSync(file, 'utf8');
  const start = `<!-- chapters:website-${language}:start -->`, end = `<!-- chapters:website-${language}:end -->`;
  if (!text.includes(start)) text = text.replace(/(## ⏱️ [^\n]+\n)[\s\S]*?(?=\n## )/, `$1\n${start}\n${end}\n`);
  if (text.split(start).length !== 2 || text.split(end).length !== 2) throw new Error('Missing or duplicate timeline markers');
  const a = text.indexOf(start) + start.length, b = text.indexOf(end);
  if (b < a) throw new Error('Reversed timeline markers');
  writeFileSync(file, text.slice(0, a) + '\n' + sections[language] + '\n' + text.slice(b));
}
writeFileSync(resolve(root, `src/content/imported/chapters/${config.episodeId}.json`), JSON.stringify({schemaVersion:1, episodeId:config.episodeId, source:config.chapters.path, sourceSha256:sha256(raw), publicationStatus:'prepared', sourceRepository:config.sourceRepository, sections}, null, 2) + '\n');
console.log(`Imported local review chapters for ${config.episodeId}`);
