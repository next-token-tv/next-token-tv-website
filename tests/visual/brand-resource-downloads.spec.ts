import { test, expect } from '@playwright/test';
import { unzipSync } from 'fflate';

for (const prefix of ['', '/en']) {
  for (const kind of ['brand-kit', 'friends']) {
    test(`${prefix}/${kind} bundles every displayed asset`, async ({ page, request }) => {
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.goto(`${prefix}/${kind}`);
      const download = page.locator(`main a[href="/downloads/next-token-${kind}.zip"]`);
      await expect(download).toHaveAttribute('download', '');
      const response = await request.get(await download.getAttribute('href') as string);
      expect(response.status()).toBe(200);
      const entries = unzipSync(await response.body());
      const urls = await page.locator('main img, main a[download]').evaluateAll(nodes => nodes.map(n => n.getAttribute('src') ?? n.getAttribute('href')!).filter(url => url.startsWith('/assets/')));
      for (const url of new Set(urls)) {
        expect(entries[url.slice(1)], `Missing bundled asset: ${url}`).toBeDefined();
        const original = await request.get(url);
        expect(Buffer.from(entries[url.slice(1)]!)).toEqual(await original.body());
      }
      expect(Object.keys(entries).filter(name => name.includes('next-token-media-lockup'))).toHaveLength(8);
      await expect(page.locator('.kit-lockup-panel')).toHaveCount(2);
      for (const panel of await page.locator('.kit-lockup-panel').all()) {
        await expect(panel.locator('.kit-lockup-example')).toHaveCount(4);
      }
      await checkLockupGeometry(page);
      expect(await page.locator('.kit-lockup-grid').evaluate(n => getComputedStyle(n).gridTemplateColumns.split(' ').length)).toBe(2);
      if (kind === 'brand-kit') {
        await expect(page.locator('[aria-labelledby="kit-logo"] #kit-host-lockup')).toHaveCount(1);
        expect(Object.keys(entries).filter(name => name.startsWith('introductions/'))).toHaveLength(12);
        await expect(page.locator('.kit-logo-theme')).toHaveCount(3);
        const dividers = await page.locator('.kit-logo-theme').evaluateAll(nodes => nodes.map(n => n.children[1]!.getBoundingClientRect().top));
        expect(Math.max(...dividers) - Math.min(...dividers)).toBeLessThan(0.1);
      } else {
        await expect(page.locator('main > .friends-grid a[href="https://agi.bar/"]')).toHaveCount(1);
        await expect(page.locator(`.friends-partners a[href="${prefix}/partners/agi-bar"]`)).toHaveCount(1);
        expect(entries['links.json']).toBeDefined();
      }
      await page.setViewportSize({ width: 390, height: 844 });
      await expect.poll(() => page.locator('.kit-lockup-grid').evaluate(n => getComputedStyle(n).gridTemplateColumns.split(' ').length)).toBe(1);
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await checkLockupGeometry(page);
    });
  }
}

async function checkLockupGeometry(page: import('@playwright/test').Page) {
  for (const panel of await page.locator('.kit-lockup-panel').all()) {
    const images = panel.locator('.kit-lockup-canvas img');
    await images.evaluateAll(nodes => Promise.all(nodes.map(n => {
      const img = n as HTMLImageElement;
      img.loading = 'eager';
      return img.decode();
    })));
    await expect(images.nth(2)).toHaveAttribute('src', /media-lockup-hosts(?:-dark)?\.svg$/);
    const geometry = await panel.locator('figure').evaluateAll(nodes => nodes.map(n => {
      const img = n.querySelector('img')!;
      const rect = img.getBoundingClientRect();
      const label = n.querySelector('figcaption span')!.getBoundingClientRect();
      return { height: rect.height, inset: label.left - rect.left - 6 * rect.width / Number(img.getAttribute('width')) };
    }));
    expect(Math.max(...geometry.map(g => g.height)) - Math.min(...geometry.map(g => g.height))).toBeLessThan(0.1);
    for (const item of geometry) expect(Math.abs(item.inset)).toBeLessThan(0.1);
  }
}
