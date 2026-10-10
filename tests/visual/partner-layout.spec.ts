import { expect, test } from "@playwright/test";

for (const width of [390, 768, 1280, 1440, 1920, 2560]) {
  for (const prefix of ["", "/en"]) {
    for (const slug of ["agi-bar", "xiangwai"]) {
      test(`partner ${prefix}/${slug} aligns at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`${prefix}/partners/${slug}`);
        const geometry = await page.evaluate(() => {
          const header = document.querySelector(".nav.shell")!;
          const rect = header.getBoundingClientRect();
          const style = getComputedStyle(header);
          const left = rect.left + parseFloat(style.paddingLeft);
          const right = rect.right - parseFloat(style.paddingRight);
          const selectors = [".partner-profile-copy", ".partner-profile-image", ".partner-gallery-grid figure", ".partner-venue", ".partner-fact-grid", ".partner-space-list"];
          return {
            overflow: document.documentElement.scrollWidth - innerWidth,
            left, right,
            blocks: selectors.flatMap(selector => [...document.querySelectorAll(selector)].map(el => {
              const box = el.getBoundingClientRect();
              return { selector, left: box.left, right: box.right, overflow: el.scrollWidth - el.clientWidth };
            })),
          };
        });
        expect(geometry.blocks.length).toBeGreaterThan(4);
        expect(geometry.overflow).toBeLessThanOrEqual(0);
        for (const block of geometry.blocks) {
          expect(block.left, block.selector).toBeGreaterThanOrEqual(geometry.left - 1);
          expect(block.right, block.selector).toBeLessThanOrEqual(geometry.right + 1);
          expect(block.overflow, block.selector).toBeLessThanOrEqual(1);
        }
        const copy = geometry.blocks.find(block => block.selector === ".partner-profile-copy");
        const image = geometry.blocks.find(block => block.selector === ".partner-profile-image");
        expect(copy, "Partner copy must exist").toBeDefined();
        expect(image, "Partner image must exist").toBeDefined();
        if (!copy || !image) throw new Error("Missing partner hero blocks");
        expect(copy.left).toBeCloseTo(geometry.left, 0);
        expect(image.right).toBeCloseTo(geometry.right, 0);
      });
    }
  }
}
