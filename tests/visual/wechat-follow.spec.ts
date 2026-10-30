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

test('older browsers disclose QR codes without navigating away', async ({ page }) => {
  await page.addInitScript(() => { Object.defineProperty(HTMLElement.prototype, 'showPopover', { value: undefined, configurable: true }); });
  await page.goto('/community');
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  const row = page.locator('.platform-qr-row').first();
  await expect(row.locator('.platform-qr')).not.toBeVisible();
  await row.locator('button').click();
  await expect(page).toHaveURL(/\/community$/);
  await expect(row.locator('.platform-qr img')).toBeVisible();
  await row.locator('button').click();
  await expect(row.locator('.platform-qr')).not.toBeVisible();
});

for (const prefix of ['', '/en']) for (const number of ['003', '004', '005', '006', '007']) {
  test(`published episode podcast QR disclosure ${prefix || 'zh'} ${number}`, async ({ page }) => {
    await page.goto(`${prefix}/weekly/${number}`);
    const rows = page.locator('.platform-qr-row');
    await expect(rows).toHaveCount(2);
    const ids = await rows.locator('.platform-qr').evaluateAll(items => items.map(item => item.id));
    expect(new Set(ids).size).toBe(2);
    for (const row of await rows.all()) {
      await expect(row.locator('a')).toHaveCount(0);
      await row.locator('button').hover();
      await expect(row.locator('.platform-qr')).toBeVisible();
      await expect(row.locator('.platform-qr img')).toHaveCount(1);
      await expect(row.locator('.platform-qr img')).toHaveAttribute('src', '/assets/follow/wechat-official.jpg');
      await page.keyboard.press('Escape');
      await expect(row.locator('.platform-qr')).not.toBeVisible();
    }
    if (number === '007') {
      await expect(page.locator('.episode-actions a[href*="1000798141712"]')).toHaveCount(1);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await rows.first().locator('button').click();
    await expect(rows.first().locator('.platform-qr')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
for (const number of ['001', '002']) {
  test(`unconfirmed episode podcast has no entrance ${number}`, async ({ page }) => {
    await page.goto(`/weekly/${number}`);
    await expect(page.locator('.platform-qr-row')).toHaveCount(0);
  });
}

test('header logo restores breathing border and respects reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const logo = page.locator('.wordmark img');
  await expect(logo).toHaveCSS('animation-name', 'logo-border-breathe');
  await expect(logo).toHaveCSS('border-top-width', '1px');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(logo).toHaveCSS('animation-name', 'none');
});

for (const prefix of ['', '/en']) for (const width of [390, 1440]) {
  test(`episode platform sizing ${prefix || 'zh'} ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${prefix}/weekly/006`);
    const geometry = await page.locator('.episode-actions .episode-platform').evaluateAll(items => items.map(item => {
      const rect = item.getBoundingClientRect();
      const brand = item.querySelector('.platform-brand')!.getBoundingClientRect();
      const style = getComputedStyle(item);
      return { width: rect.width, height: rect.height, centerOffset: brand.y + brand.height / 2 - rect.y - rect.height / 2, color: style.backgroundColor, padding: style.padding };
    }));
    expect(geometry.length).toBeGreaterThan(1);
    const first = geometry[0];
    if (!first) throw new Error('Episode platform controls are missing');
    for (const item of geometry) {
      expect([160, 192, 224]).toContain(item.width);
      expect(item.height).toBe(50);
      expect(Math.abs(item.centerOffset)).toBeLessThan(0.1);
      expect(item.color).toBe(first.color);
      expect(item.padding).toBe(first.padding);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
