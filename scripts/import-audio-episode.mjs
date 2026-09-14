import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { load } from 'js-yaml';

// Editorial mapping is YAML; this command produces the delivery snapshot, never the reverse.
const [mappingPath, sourceRoot] = process.argv.slice(2);
if (!mappingPath || !sourceRoot) throw new Error('Usage: node scripts/import-audio-episode.mjs <mapping.yaml> <production-root>');
const mapping = load(await readFile(mappingPath, 'utf8'));
const sources = [];
for (const path of mapping.sources) {
  const bytes = await readFile(resolve(sourceRoot, path));
  sources.push({ path, sha256: createHash('sha256').update(bytes).digest('hex') });
}
if (!mapping.sources.includes(mapping.cover)) throw new Error('Cover must be among verified sources');
const square = mapping.imageDimensions?.width === mapping.imageDimensions?.height && !!mapping.imageDimensions;
const image = `/assets/weekly-${mapping.number}-cover${square ? "-square" : ""}.jpg`;
await copyFile(resolve(sourceRoot, mapping.cover), resolve(`public${image}`));
const { cover, sources: sourcePaths, ...data } = mapping;
const snapshot = {
  ...data, images: { '960': image, '1440': image, '1920': image },
  provenance: {
    productionCommit: execFileSync('git', ['-C', sourceRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
    sourceGitStatus: execFileSync('git', ['-C', sourceRoot, 'status', '--porcelain', '--', ...sourcePaths], { encoding: 'utf8' }).trim(),
    sources,
  },
};
await writeFile(`src/content/imported/episodes/${data.episodeId}.production.json`, JSON.stringify(snapshot, null, 2) + '\n');
console.log(`Imported ${data.episodeId}: ${sources.length} hashed production sources, original cover copied without modification.`);
