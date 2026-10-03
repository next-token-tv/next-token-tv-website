import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, writeFile, readdir, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pruneObsoleteOgImages } from '../scripts/lib/og-retention.mjs';

const active = 'active-aaaaaaaaaaaa.png';
const old = 'old-bbbbbbbbbbbb.png';
const manifest = { '/': { image: `/assets/og/${active}` } };

test('archive builds prune obsolete images while preserving current cards and other files', async t => {
  const root = await mkdtemp(join(tmpdir(), 'og-retention-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const out = join(root, 'public/assets/og');
  await mkdir(out, { recursive: true });
  for (const name of [active, old, 'manual.png', 'manifest.json']) await writeFile(join(out, name), 'fixture');
  await symlink(join(out, active), join(out, 'link-dddddddddddd.png'));
  assert.deepEqual(await pruneObsoleteOgImages(root, manifest), { removed: 1, bytes: 7 });
  assert.deepEqual((await readdir(out)).sort(), [active, 'manual.png', 'manifest.json', 'link-dddddddddddd.png'].sort());
  assert.deepEqual(await pruneObsoleteOgImages(root, manifest), { removed: 0, bytes: 0 });
});
