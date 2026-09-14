import { expect, test } from '@playwright/test';
for (const width of [390, 768, 1440, 1920]) for (const prefix of ['', '/en']) {
  test(`online preview ${prefix || 'zh'} ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const path of ['/', '/weekly/']) {
      await page.goto(prefix + path);
      const preview = page.locator('.upcoming-episode-link');
      await expect(preview).toContainText('#003');
      await expect(preview).toContainText(prefix ? 'Online recording' : '线上录制');
      await expect(preview).not.toContainText(/00:00|12:00/);
      await expect(page.locator('.status-pill')).toContainText('#002');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    await page.goto(prefix + '/weekly/003/');
    await expect(page.locator('h1')).toContainText(prefix ? 'online' : '线上见');
    await expect(page.locator('.episode-preview-facts')).toContainText(prefix ? 'September 19, 2026' : '2026年9月19日');
    await expect(page.locator('.episode-preview-map, .episode-preview-venue, .episode-platform')).toHaveCount(0);
    await expect(page.locator('.episode-preview-copy')).toContainText(prefix ? 'once confirmed' : '确认后更新');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({path: `/tmp/nt003-${prefix ? 'en' : 'zh'}-${width}.png`});
  });
}
