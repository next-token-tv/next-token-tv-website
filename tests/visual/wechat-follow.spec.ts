import { test, expect } from '@playwright/test';

for (const width of [390, 1440]) for (const prefix of ['', '/en']) {
  test(`WeChat follow codes ${prefix || 'zh'} ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['', '/weekly', '/community']) {
      await page.goto(`${prefix}${route}` || '/');
      await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
      const entries = page.locator('.platform-qr-row');
      await expect(entries).toHaveCount(2);
      for (const [index, name, asset] of [
        [0, 'Next Token 词元之外', '/assets/follow/wechat-official.jpg'],
        [1, 'NextToken词元之外', '/assets/follow/wechat-channels.jpg'],
      ] as const) {
        const entry = entries.nth(index);
        await expect(entry).toContainText(name);
        if (width === 1440) {
          const list = page.locator('.platform-list').filter({ has: entry });
          const before = await list.evaluate(el => el.getBoundingClientRect().height);
          await entry.locator('button').hover();
          await expect(entry.locator('.platform-qr img')).toBeVisible();
          expect(await list.evaluate(el => el.getBoundingClientRect().height)).toBe(before);
          await page.keyboard.press('Escape');
          await expect(entry.locator('.platform-qr img')).not.toBeVisible();
        }
        await entry.locator('button').click();
        const img = entry.locator('.platform-qr img');
        await expect(img).toBeVisible();
        await expect(img).toHaveAttribute('src', asset);
        await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        expect(await img.evaluate(el => { const r = el.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth; })).toBe(true);
        await entry.locator('button').click();
        await expect(img).not.toBeVisible();
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  });
}

test('touch users can press the QR image without dismissing it', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  await page.goto('/community');
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  const row = page.locator('.platform-qr-row').first();
  await row.locator('button').tap();
  await row.locator('.platform-qr img').tap();
  await expect(row.locator('.platform-qr')).toBeVisible();
  await page.locator('main h1').tap();
  await expect(row.locator('.platform-qr')).not.toBeVisible();
  await context.close();
});

test('older browsers can open the original QR image', async ({ page }) => {
  await page.addInitScript(() => { Object.defineProperty(HTMLElement.prototype, 'showPopover', { value: undefined, configurable: true }); });
  await page.goto('/community');
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  const row = page.locator('.platform-qr-row').first();
  await expect(row.locator('.platform-qr')).not.toBeVisible();
  await row.locator('button').click();
  await expect(page).toHaveURL(/\/assets\/follow\/wechat-official\.jpg$/);
});
