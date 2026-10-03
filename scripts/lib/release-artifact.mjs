import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

export async function artifactDigest(root) {
  const hash = createHash('sha256');
  async function visit(path) {
    for (const entry of (await readdir(path, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = join(path, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`Release artifact contains symlink: ${file}`);
      if (entry.isDirectory()) await visit(file);
      else hash.update(relative(root, file)).update('\0').update(await readFile(file)).update('\0');
    }
  }
  await visit(join(root, 'dist'));
  // Worker code and configuration are part of the deployed artifact too.
  await visit(join(root, 'worker'));
  hash.update(await readFile(join(root, 'wrangler.jsonc')));
  return hash.digest('hex');
}
