import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readSitemapDates } from '../scripts/lib/sitemap-dates.mjs';

test('sitemap dates keep localized editorial dates and omit drafts and undated pages', async t => {
  const root = await mkdtemp(join(tmpdir(), 'sitemap-dates-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const write = async (name, fields) => {
    const path = join(root, 'src/content/prose', name);
    await mkdir(join(path, '..'), { recursive: true });
    await writeFile(path, `---\n${fields}\n---\nBody\n`);
  };
  await write('blog/example.md', "locale: zh-Hans\nstatus: published\nupdatedAt: '2026-10-01'");
  await write('blog/example.en.md', "locale: en\nstatus: published\nupdatedAt: '2026-10-02'");
  await write('blog/draft.md', "locale: zh-Hans\nstatus: draft\nupdatedAt: '2026-10-03'");
  await write('products/example.md', "locale: en\nslot: wiki\nentityType: product\nentity: example\nupdatedAt: '2026-09-01'");
  await write('people/example.md', 'locale: zh-Hans\nslot: wiki\nentityType: person\nentity: example');
  const dates = await readSitemapDates(root);
  assert.deepEqual(Object.fromEntries(dates), {
    '/en/blog/example': '2026-10-02', '/blog/example': '2026-10-01', '/en/wiki/products/example': '2026-09-01',
  });
  assert.deepEqual(await readSitemapDates(root), dates, 'Repeat builds must retain editorial dates');
  await write('blog/invalid.md', "locale: zh-Hans\nstatus: published\nupdatedAt: '2026-02-30'");
  await assert.rejects(readSitemapDates(root), /Invalid sitemap updatedAt/);
});
