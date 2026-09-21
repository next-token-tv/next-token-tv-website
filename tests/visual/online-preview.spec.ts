import { expect, test } from '@playwright/test';
for (const width of [390, 768, 1440, 1920]) for (const prefix of ['', '/en']) {
  test(`published online episode replaces preview ${prefix || 'zh'} ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const path of ['/', '/weekly']) {
      await page.goto(path === '/' ? (prefix || '/') : prefix + path);
      const preview = page.locator('.upcoming-episode-link');
      await expect(preview).toHaveCount(0);
      await expect(page.locator('.status-pill')).toContainText('#003');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    await page.goto(prefix + '/weekly/003');
    await expect(page.locator('h1')).toContainText('Jev');
    await expect(page.locator('.episode-detail-meta')).toContainText(prefix ? 'September 19, 2026' : '2026年9月19日');
    await expect(page.locator('.episode-detail-meta')).toContainText(prefix ? 'Online' : '线上');
    await expect(page.locator('.episode-preview-hero, .episode-preview-map, .episode-preview-venue')).toHaveCount(0);
    await expect(page.locator('.episode-detail-platforms a[href*="xiaoyuzhoufm.com/episode/"]')).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({path: `/tmp/nt003-${prefix ? 'en' : 'zh'}-${width}.png`});
  });
}
