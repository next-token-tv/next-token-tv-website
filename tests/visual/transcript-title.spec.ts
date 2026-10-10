import { expect, test } from "@playwright/test";

for (const viewport of [
  { width: 390, height: 844 }, { width: 768, height: 1024 },
  { width: 1210, height: 887 }, { width: 1280, height: 720 },
  { width: 1440, height: 900 }, { width: 1920, height: 1080 },
  { width: 2560, height: 1080 },
]) {
  test(`transcript title leading at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    for (const path of ["/weekly/001/transcript", "/weekly/005/transcript"]) {
      await page.goto(path);
      const title = page.locator(".transcript-hero h1 > span:last-child");
      await expect(title).toBeVisible();
      const geometry = await title.evaluate(el => {
        const style = getComputedStyle(el);
        return {
          leading: parseFloat(style.lineHeight) / parseFloat(style.fontSize),
          overflow: el.scrollWidth - el.clientWidth,
          pageOverflow: document.documentElement.scrollWidth - innerWidth,
        };
      });
      expect(geometry.leading).toBeCloseTo(1.25, 2);
      expect(geometry.overflow).toBeLessThanOrEqual(1);
      expect(geometry.pageOverflow).toBeLessThanOrEqual(0);
    }
  });
}
