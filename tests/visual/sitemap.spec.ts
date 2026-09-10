import { test, expect } from '@playwright/test';

for (const width of [390, 1440]) {
  for (const prefix of ['', '/en']) {
    test(`HTML sitemap ${prefix || 'zh'} at ${width}`, async ({ page, request }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${prefix}/sitemap/`);
      await expect(page.locator('h1')).toHaveText(prefix ? 'Sitemap' : '网站地图');
      await expect(page.locator(`footer a[href="${prefix}/sitemap/"]`)).toBeVisible();
      await expect(page.locator('#brands li')).not.toHaveCount(0);
      await expect(page.locator('#products li')).not.toHaveCount(0);
      await expect(page.locator('#people li')).toHaveCount(10);
      await expect(page.locator('main a[href*="/transcript/"]')).toHaveCount(prefix ? 0 : 1);
      const hrefs = await page.locator('main section a').evaluateAll(links => links.map(a => a.getAttribute('href')!));
      for (const href of hrefs) expect((await request.get(href)).status()).toBe(200);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      if (!prefix && width === 1440) {
        const episode = await page.locator('#episodes a[href="/weekly/001/"]').boundingBox();
        const transcript = await page.locator('#transcripts a').boundingBox();
        expect(Math.abs(episode!.y - transcript!.y)).toBeLessThan(1);
        expect(transcript!.x).toBeGreaterThan(episode!.x);
      }
      await expect(page.locator('.sitemap-episodes')).toHaveScreenshot(`sitemap-episodes-${prefix ? 'en' : 'zh'}-${width}.png`);
      await expect(page.locator('.sitemap-intro')).toHaveScreenshot(`sitemap-${prefix ? 'en' : 'zh'}-${width}.png`);
      await expect(page.locator('.footer-bottom')).toHaveScreenshot(`sitemap-footer-${prefix ? 'en' : 'zh'}-${width}.png`);
      const xml = await request.get('/sitemap-index.xml');
      expect(xml.status()).toBe(200);
      expect(await xml.text()).toContain('<sitemapindex');
    });
  }
}
