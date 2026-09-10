import { test, expect } from '@playwright/test';

const pairs = [
  ['dhh', 'products', 'omarchy'], ['dhh', 'brands', 'omacom'],
  ['orange', 'brands', 'marswave'], ['orange', 'products', 'listenhub'],
  ['orange', 'products', 'colaos'], ['aj', 'brands', 'waytoagi'],
  ['chen-mian', 'brands', 'evoken'], ['guanlan-dai', 'products', 'runta'],
  ['luo-fuli', 'brands', 'xiaomi'], ['wang-le', 'brands', 'folotoy'],
];
for (const prefix of ['', '/en']) test(`entity relationships ${prefix || 'zh'}`, async ({ page }) => {
  for (const [person, type, entity] of pairs) {
    await page.goto(`${prefix}/wiki/people/${person}/`);
    await expect(page.locator(`.entity-people-relations a[href="${prefix}/wiki/${type}/${entity}/"]`)).toHaveCount(1);
    await page.goto(`${prefix}/wiki/${type}/${entity}/`);
    await expect(page.locator(`.entity-people-relations a[href="${prefix}/wiki/people/${person}/"]`)).toHaveCount(1);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${prefix}/wiki/people/dhh/`);
  await expect(page.locator('h1')).toHaveText('David Heinemeier Hansson');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: `/tmp/dhh-relations-${prefix ? 'en' : 'zh'}.png`, fullPage: true });
  await page.goto(`${prefix}/wiki/brands/evoken/`);
  for (const id of ['liblib', 'libtv', 'lovart']) await expect(page.locator(`a[href="${prefix}/wiki/products/${id}/"]`)).toHaveCount(1);
});
test('direct transcript links and no inferred mentions', async ({ page }) => {
  await page.goto('/weekly/001/transcript/');
  for (const href of ['/wiki/products/omarchy/', '/wiki/products/colaos/', '/wiki/products/runta/', '/wiki/brands/xiaomi/'])
    expect(await page.locator(`.transcript-turn a[href="${href}"]`).count()).toBeGreaterThan(0);
  await page.goto('/weekly/001/');
  for (const id of ['waytoagi', 'evoken', 'folotoy', 'marswave', 'omacom'])
    await expect(page.locator(`.episode-mentions a[href="/wiki/brands/${id}/"]`)).toHaveCount(0);
});
