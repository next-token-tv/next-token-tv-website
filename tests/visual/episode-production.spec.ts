import { expect, test } from '@playwright/test';

for (const locale of ['', '/en']) {
  for (const width of [390, 768, 1280, 1440, 1920, 2560]) {
    test(`003 published audio ${locale || 'zh'} ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`${locale}/weekly/003`);
      await expect(page.locator('main.episode-detail-page')).toBeVisible();
      await expect(page.locator('.episode-preview-hero')).toHaveCount(0);
      await expect(page.locator('main h1')).toContainText('Jev');
      const cover = page.locator('.episode-detail-image img');
      await expect(cover).toBeVisible();
      await expect(cover).toHaveCSS('object-fit', 'contain');
      expect(await cover.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
      await expect(page.locator('.episode-detail-participant-grid article')).toHaveCount(4);
      await expect(page.locator('.episode-show-notes')).toContainText('Jev');
      await expect(page.locator('.episode-show-notes img')).toHaveCount(1);
      await expect(page.locator('a[href="https://www.xiaoyuzhoufm.com/episode/6ab0646bac389df82734ef3f"]').first()).toBeVisible();
      await expect(page.locator('main')).not.toContainText(locale ? 'In production' : '制作中');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
      for (const h2 of await page.locator('main h2').all()) {
        const ratio = await h2.evaluate(el => { const s = getComputedStyle(el); return parseFloat(s.lineHeight) / parseFloat(s.fontSize); });
        expect(ratio).toBeCloseTo(1.25, 2);
      }
    });
  }
}

test('latest episode and square cards expose the published transcript', async ({ page, request }) => {
  await page.setViewportSize({ width: 1233, height: 897 });
  for (const path of ['/', '/weekly']) {
    await page.goto(path);
    await expect(page.locator('a[href="/weekly/003/transcript"]').first()).toBeVisible();
    const card = page.locator('.weekly-card').first();
    await expect(card).toHaveAttribute('data-episode-number', '003');
    const image = card.locator('.weekly-image img');
    const box = await image.boundingBox();
    expect(box!.width / box!.height).toBeCloseTo(1, 2);
  }
  await page.goto('/weekly/003/transcript');
  await expect(page.locator('main')).not.toContainText('审阅版');
  const markdown = await request.get('/weekly/003/transcript.md');
  expect(markdown.ok()).toBe(true);
  expect(await markdown.text()).toContain('Jev');
});
