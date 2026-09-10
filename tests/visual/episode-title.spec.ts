import { test, expect } from '@playwright/test';

for (const prefix of ['', '/en']) test(`published episode title scale ${prefix || 'zh'}`, async ({ page }) => {
  for (const width of [390, 768, 1280, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${prefix}/weekly/001/`);
    const title = page.locator('h1.episode-hero-title');
    const size = await title.evaluate(el => parseFloat(getComputedStyle(el).fontSize) / parseFloat(getComputedStyle(document.documentElement).fontSize));
    expect(size).toBeCloseTo(width < 768 ? 2.65 : width < 1280 ? 3.25 : 3.75, 2);
    const numberSize = await page.locator('.episode-hero-number').evaluate(el => parseFloat(getComputedStyle(el).fontSize) / parseFloat(getComputedStyle(document.documentElement).fontSize));
    expect(numberSize).toBeCloseTo(width < 768 ? 2.5 : width < 1280 ? 3 : 3.5, 2);
    expect(numberSize).toBeLessThan(size);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (width === 390 || width === 1440) await page.screenshot({ path: `/tmp/episode-title-${prefix ? 'en' : 'zh'}-${width}.png` });
  }
});
