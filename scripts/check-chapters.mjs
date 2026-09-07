import { readdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const snapshots = resolve(root, 'src/content/imported/chapters');
const checked = new Set();
for (const filename of await readdir(snapshots)) {
  if (!filename.endsWith('.json')) continue;
  const data = JSON.parse(await readFile(resolve(snapshots, filename), 'utf8'));
  if (data.schemaVersion !== 1 || filename !== `${data.episodeId}.json` || !/^[a-z0-9-]+--\d{3}$/.test(data.episodeId) || !/^[a-f0-9]{64}$/.test(data.sourceSha256)) {
    throw new Error(`Invalid chapter snapshot: ${filename}`);
  }
  for (const language of ['zh-Hans', 'en']) {
    const name = `${data.episodeId}.${language}.md`;
    const text = await readFile(resolve(root, 'src/content/prose/episodes', name), 'utf8');
    const start = `<!-- chapters:website-${language}:start -->`;
    const end = `<!-- chapters:website-${language}:end -->`;
    if (text.split(start).length !== 2 || text.split(end).length !== 2 || text.indexOf(end) < text.indexOf(start)) {
      throw new Error(`Missing or duplicate chapter markers: ${name}`);
    }
    const body = text.slice(text.indexOf(start) + start.length, text.indexOf(end));
    if (typeof data.sections[language] !== 'string' || body !== `\n${data.sections[language]}\n`) {
      throw new Error(`Stale chapters: ${name}. Run npm run import:chapters -- <production-episode-directory>`);
    }
    checked.add(name);
  }
}
for (const name of await readdir(resolve(root, 'src/content/prose/episodes'))) {
  if (!name.endsWith('.md')) continue;
  const text = await readFile(resolve(root, 'src/content/prose/episodes', name), 'utf8');
  if (text.includes('<!-- chapters:') && !checked.has(name)) throw new Error(`Missing chapter snapshot: ${name}`);
}
if (!checked.size) throw new Error('No chapter snapshots found');
console.log(`Verified ${checked.size} episode chapter sections against production snapshots`);
