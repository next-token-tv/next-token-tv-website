import { expect, test } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { load } from 'js-yaml';

const directory = new URL('../../src/content/data/terms/', import.meta.url);
const drafts = readdirSync(directory).filter(file => file.endsWith('.yaml')).filter(file => {
  const data = load(readFileSync(new URL(file, directory), 'utf8')) as { status?: string };
  return data.status !== 'published';
}).map(file => file.replace(/\.yaml$/, ''));

for (const prefix of ['', '/en']) {
  test(`term framework and draft isolation ${prefix || 'zh'}`, async ({ page, request }) => {
    const data = await (await request.get('/api/v1/wiki/terms.json')).json();
    expect(data.collection).toBe('terms');
    expect(data.count).toBe(data.data.length);
    await page.goto(`${prefix}/wiki/terms`);
    await expect(page.locator('h1')).toHaveText(prefix ? 'Terms' : '术语');
    await expect(page.locator('.entity-library-switch [aria-current="page"]')).toHaveAttribute('href', `${prefix}/wiki/terms`);
    await expect(page.locator('.entity-directory-row')).toHaveCount(data.count);
    if (!data.count) await expect(page.locator('.entity-directory')).toContainText(prefix ? 'No terms published yet.' : '暂无已发布的术语。');
    const search = await (await request.get(`/search/${prefix ? 'en' : 'zh-Hans'}.json`)).json();
    for (const id of drafts) {
      expect((await request.get(`${prefix}/wiki/terms/${id}`)).status()).toBe(404);
      expect((await request.get(`/api/v1/wiki/terms/${id}.json`)).status()).toBe(404);
      expect(data.data.some((term: {id: string}) => term.id === id)).toBe(false);
      expect(search.some((entry: {href: string}) => entry.href === `${prefix}/wiki/terms/${id}`)).toBe(false);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
