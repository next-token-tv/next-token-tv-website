import { expect, test } from '@playwright/test';

for (const width of [390, 1233]) {
  test(`transcript directory follows reading at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 897 });
    await page.goto('/weekly/003/transcript#chapter-20');
    const active = page.locator('.transcript-toc a[aria-current="location"]');
    await expect(active).toHaveAttribute('href', '#chapter-20');
    for (const id of ['chapter-03', 'chapter-22']) {
      await page.locator(`#${id}`).evaluate(el => {
        window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(el).scrollMarginTop), behavior: 'instant' });
      });
      await expect(active).toHaveAttribute('href', `#${id}`);
      expect(await active.evaluate(el => {
        const list = el.closest('ol')!.getBoundingClientRect();
        const item = el.getBoundingClientRect();
        return item.top >= list.top - 1 && item.bottom <= list.bottom + 1;
      })).toBe(true);
    }
    if (width > 1000) {
      const bottom = await page.locator('.transcript-toc ol').evaluate(el => el.getBoundingClientRect().bottom);
      expect(bottom).toBeLessThanOrEqual(897);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  });
}

test('directory markers do not shift numbers and paragraph time is hover-only', async ({ page }) => {
  await page.setViewportSize({width:1233,height:897});
  await page.goto('/weekly/003/transcript');
  const item = page.locator('.transcript-toc a').first();
  const before = await item.locator('span').evaluate(el => el.getBoundingClientRect().left);
  await item.hover();
  expect(await item.locator('span').evaluate(el => el.getBoundingClientRect().left)).toBe(before);
  const time = page.locator('.transcript-paragraph-time').first();
  await expect(time).toHaveCSS('opacity','0');
  await time.locator('..').hover();
  await expect(time).toHaveCSS('opacity','1');
  await expect(time).toContainText(/视频 · \d\d:\d\d:\d\d–\d\d:\d\d:\d\d/);
});
