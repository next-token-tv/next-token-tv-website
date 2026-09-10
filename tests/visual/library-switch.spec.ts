import { test, expect } from '@playwright/test';

for (const width of [390, 1440]) for (const prefix of ['', '/en']) for (const section of ['brands', 'products', 'people']) {
  test(`library switch ${prefix || 'zh'} ${section} ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${prefix}/wiki/${section}/`);
    const tabs = page.locator('.entity-library-switch a');
    await expect(tabs).toHaveCount(3);
    const boxes = await tabs.evaluateAll(nodes => nodes.map(n => {
      const r = n.getBoundingClientRect();
      return { y: r.y, width: r.width, fits: n.scrollWidth <= n.clientWidth };
    }));
    expect(new Set(boxes.map(b => b.y)).size).toBe(1);
    expect(Math.max(...boxes.map(b => b.width)) - Math.min(...boxes.map(b => b.width))).toBeLessThan(1);
    expect(boxes.every(b => b.fits)).toBe(true);
    await expect(page.locator('.entity-library-switch [aria-current="page"]')).toHaveAttribute('href', `${prefix}/wiki/${section}/`);
    await expect(page.locator('.entity-library-switch')).toHaveScreenshot(`library-switch-${prefix ? 'en' : 'zh'}-${section}-${width}.png`);
  });
}
