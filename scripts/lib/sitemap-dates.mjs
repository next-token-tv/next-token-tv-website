import { readFile } from 'node:fs/promises';
import { basename, join, relative } from 'node:path';
import { filesUnder, parseProse } from './content-files.mjs';

// Dates describe substantive editorial updates, never a build or filesystem time.
export async function readSitemapDates(root) {
  const dates = new Map();
  const proseRoot = join(root, 'src/content/prose');
  for (const file of await filesUnder(proseRoot)) {
    if (!file.endsWith('.md')) continue;
    const { data } = parseProse(await readFile(file, 'utf8'));
    if (!data.updatedAt) continue;
    const date = data.updatedAt;
    if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) {
      throw new Error(`Invalid sitemap updatedAt in ${file}`);
    }
    const prefix = data.locale === 'en' ? '/en' : '';
    let path;
    if (relative(proseRoot, file).startsWith('blog/') && data.status === 'published') {
      path = `${prefix}/blog/${basename(file).replace(/(?:\.en)?\.md$/, '')}`;
    } else if (data.slot === 'wiki') {
      const collection = { brand: 'brands', product: 'products', person: 'people' }[data.entityType];
      if (collection) path = `${prefix}/wiki/${collection}/${data.entity}`;
    }
    if (path) dates.set(path, date);
  }
  return dates;
}
