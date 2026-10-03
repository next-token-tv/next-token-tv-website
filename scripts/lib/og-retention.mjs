import { readdir, unlink, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const generatedImage = /^[a-z0-9-]+-[a-f0-9]{12}\.png$/;

export async function pruneObsoleteOgImages(root, manifest) {
  const active = new Set(Object.values(manifest).map(card => card.image));
  const directory = resolve(root, 'public/assets/og');
  let removed = 0, bytes = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isFile() || !generatedImage.test(entry.name) ||
        active.has(`/assets/og/${entry.name}`)) continue;
    const file = resolve(directory, entry.name);
    const { size } = await stat(file);
    await unlink(file);
    removed++;
    bytes += size;
  }
  return { removed, bytes };
}
