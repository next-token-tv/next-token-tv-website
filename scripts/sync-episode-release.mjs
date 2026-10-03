import fs from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load, dump } from 'js-yaml';
import { planPlatformSync } from './lib/platform-release.mjs';

const number = process.argv[2];
if (!/^\d{3}$/.test(number ?? '')) {
  throw new Error('Usage: node scripts/sync-episode-release.mjs NNN');
}
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const productionRoot = resolve(root, `../next-token/shows/weekly/episodes/${number}`);
const episodePath = resolve(root, `src/content/data/episodes/next-token-weekly--${number}.yaml`);
const episode = load(await fs.readFile(episodePath, 'utf8'));
const snapshotPath = resolve(root, `src/content/imported/episodes/${episode.productionImport}.json`);
const snapshot = JSON.parse(await fs.readFile(snapshotPath, 'utf8'));
const publication = JSON.parse(await fs.readFile(resolve(productionRoot, '04-release/platforms/publication.json'), 'utf8'));
const metadata = JSON.parse(await fs.readFile(resolve(productionRoot, 'episode.json'), 'utf8'));

// Finish reconciliation before writing either file.
const plan = planPlatformSync(episode, publication);
if (plan.platforms.length) {
  episode.platforms = plan.platforms;
  episode.media = plan.media;
  const dates = [metadata.release_date, ...plan.platforms.map(({ platform }) => {
    const record = publication.platforms[platform];
    return record.published_at ?? record.public_display_time;
  })].filter(Boolean).map(date => date.slice(0, 10)).sort();
  if (dates.length) snapshot.releaseDate = dates[0];
  await fs.writeFile(episodePath, dump(episode, { lineWidth: -1, noRefs: true }));
  await fs.writeFile(snapshotPath, JSON.stringify(snapshot, null, 2) + '\n');
}
console.log({ number, platforms: plan.platforms.map(entry => entry.platform), releaseDate: snapshot.releaseDate ?? null });
