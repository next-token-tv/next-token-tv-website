import { test, expect } from '@playwright/test';

for (const width of [390, 1440]) for (const prefix of ['', '/en']) for (const section of ['brands', 'products', 'people', 'terms']) {
  test(`library switch ${prefix || 'zh'} ${section} ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${prefix}/wiki/${section}`);
    const tabs = page.locator('.entity-library-switch a');
    await expect(tabs).toHaveCount(4);
    const boxes = await tabs.evaluateAll(nodes => nodes.map(n => {
      const r = n.getBoundingClientRect();
      return { y: r.y, width: r.width, height: r.height, fits: n.scrollWidth <= n.clientWidth };
    }));
    expect(new Set(boxes.map(b => b.y)).size).toBe(1);
    // Content-width tabs retain aligned baselines and a full touch target.
    expect(boxes.every(b => b.height >= 44)).toBe(true);
    expect(await page.locator('.entity-library-switch').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    expect(boxes.every(b => b.fits)).toBe(true);
    await expect(page.locator('.entity-library-switch [aria-current="page"]')).toHaveAttribute('href', `${prefix}/wiki/${section}`);
    await expect(page.locator('.entity-library-switch')).toHaveScreenshot(`library-switch-${prefix ? 'en' : 'zh'}-${section}-${width}.png`);
  });
}
