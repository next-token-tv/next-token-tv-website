import { test, expect } from '@playwright/test';
import { unzipSync } from 'fflate';

for (const prefix of ['', '/en']) {
  for (const kind of ['brand-kit', 'friends']) {
    test(`${prefix}/${kind} bundles every displayed asset`, async ({ page, request }) => {
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.goto(`${prefix}/${kind}`);
      const download = page.locator(`main a[href="/downloads/next-token-${kind}.zip"]`);
      await expect(download).toHaveAttribute('download', '');
      const response = await request.get(await download.getAttribute('href') as string);
      expect(response.status()).toBe(200);
      const entries = unzipSync(await response.body());
      const urls = await page.locator('main img, main a[download]').evaluateAll(nodes => nodes.map(n => n.getAttribute('src') ?? n.getAttribute('href')!).filter(url => url.startsWith('/assets/')));
      for (const url of new Set(urls)) {
        expect(entries[url.slice(1)], `Missing bundled asset: ${url}`).toBeDefined();
        const original = await request.get(url);
        expect(Buffer.from(entries[url.slice(1)]!)).toEqual(await original.body());
      }
      expect(Object.keys(entries).filter(name => name.includes('next-token-media-lockup'))).toHaveLength(8);
      await expect(page.locator('.kit-lockup-variant')).toHaveCount(4);
      expect(await page.locator('.kit-lockup-grid').evaluate(n => getComputedStyle(n).gridTemplateColumns.split(' ').length)).toBe(4);
      if (kind === 'brand-kit') {
        await expect(page.locator('[aria-labelledby="kit-logo"] #kit-host-lockup')).toHaveCount(1);
        expect(Object.keys(entries).filter(name => name.startsWith('introductions/'))).toHaveLength(12);
      } else {
        await expect(page.locator('main > .friends-grid a[href="https://agi.bar/"]')).toHaveCount(1);
        await expect(page.locator(`.friends-partners a[href="${prefix}/partners/agi-bar"]`)).toHaveCount(1);
        expect(entries['links.json']).toBeDefined();
      }
      await page.setViewportSize({ width: 390, height: 844 });
      await expect.poll(() => page.locator('.kit-lockup-grid').evaluate(n => getComputedStyle(n).gridTemplateColumns.split(' ').length)).toBe(1);
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    });
  }
}
