import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const manifest = JSON.parse(await readFile(resolve(root, 'public/assets/og/manifest.json'), 'utf8'));
const readPage = (path) => readFile(resolve(root, 'dist', `.${path === '/' ? '' : path}/index.html`), 'utf8');
const tag = (html, attribute, value) => {
  const tags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(match => match[0]);
  const found = tags.filter(item => item.includes(`${attribute}="${value}"`));
  assert.equal(found.length, 1, `Expected one ${value}`);
  return found[0].match(/(?:content|href)="([^"]+)"/)?.[1];
};
let checked = 0;
for (const prefix of ['', '/en']) {
  const home = await readPage(prefix || '/');
  const description = tag(home, 'name', 'description');
  assert.ok(description?.length, 'Home description required');
  assert.doesNotMatch(description, /#\d{3}|Weekly #|本期/);
  assert.equal(tag(home, 'property', 'og:description'), description);
  for (const collection of ['brands', 'products']) {
    const { data } = JSON.parse(await readFile(resolve(root, `dist/api/v1/wiki/${collection}.json`), 'utf8'));
    for (const entity of data) {
      const route = `${prefix}/wiki/${collection}/${entity.id}`;
      const card = manifest[route];
      assert.ok(card, `Missing dedicated card: ${route}`);
      assert.notEqual(card.image, manifest[prefix || '/'].image, `Home fallback: ${route}`);
      const html = await readPage(route);
      assert.equal(tag(html, 'rel', 'canonical'), `https://nexttoken.tv${route}`);
      assert.equal(tag(html, 'property', 'og:image'), `https://nexttoken.tv${card.image}`);
      assert.ok(tag(html, 'name', 'description')?.length, `Missing description: ${route}`);
      const image = resolve(root, 'dist', `.${card.image}`);
      const { size } = await stat(image);
      assert.ok(size <= 500 * 1024, `Entity card exceeds 500 KiB: ${route}`);
      const { width, height, format } = await sharp(image).metadata();
      assert.deepEqual([width, height, format], [1200, 630, 'png'], `Invalid card: ${route}`);
      checked++;
    }
  }
}
console.log(`SEO checks passed: bilingual homepage metadata and ${checked} dedicated entity cards.`);
