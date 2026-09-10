import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const cards = JSON.parse(readFileSync('public/assets/og/manifest.json', 'utf8'));
test('every social card has a working PNG and complete matching head metadata', async ({ page, request }) => {
  for (const [path, card] of Object.entries(cards) as [string, {image: string; alt: string}][]) {
    await page.goto(path);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', `https://nexttoken.tv${card.image}`);
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', `https://nexttoken.tv${card.image}`);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute('content', card.alt);
    const response = await request.get(card.image);
    expect(response.status()).toBe(200);
    const png = await response.body();
    expect(png.subarray(1, 4).toString()).toBe('PNG');
    expect(png.readUInt32BE(16)).toBe(1200);
    expect(png.readUInt32BE(20)).toBe(630);
  }
});
