import { test, expect } from '@playwright/test';

for (const width of [390, 1440]) for (const prefix of ['', '/en']) {
  test(`WeChat follow codes ${prefix || 'zh'} ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['', '/weekly', '/community']) {
      await page.goto(`${prefix}${route || '/'}`);
      const entries = page.locator('.platform-qr');
      await expect(entries).toHaveCount(2);
      for (const [index, name, asset] of [
        [0, 'Next Token 词元之外', '/assets/follow/wechat-official.jpg'],
        [1, 'NextToken词元之外', '/assets/follow/wechat-channels.jpg'],
      ] as const) {
        const entry = entries.nth(index);
        await expect(entry.locator('..')).toContainText(name);
        await entry.locator('summary').click();
        const img = entry.locator('img');
        await expect(img).toBeVisible();
        await expect(img).toHaveAttribute('src', asset);
        await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        expect(await img.evaluate(el => { const r = el.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth; })).toBe(true);
        await entry.locator('summary').click();
        await expect(img).not.toBeVisible();
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  });
}
