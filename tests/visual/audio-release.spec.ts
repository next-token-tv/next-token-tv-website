import { expect, test } from '@playwright/test';

for (const width of [390, 768, 1280, 1320, 1440, 1920, 2560]) {
  for (const prefix of ['', '/en']) {
    test(`published audio and video ${prefix || 'zh'} at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      for (const path of ['/', '/weekly']) {
        await page.goto(path === '/' ? (prefix || '/') : `${prefix}${path}`);
        await expect(page.locator('.status-pill')).toHaveAttribute('href', `${prefix}/weekly/002`);
        await expect(page.locator('.status-pill')).toContainText(prefix ? '#002 out now' : '#002 已上线');
        await expect(page.locator('.upcoming-episode-link')).toHaveAttribute('href', `${prefix}/weekly/003`);
        const primary = page.locator(path === '/' ? '.hero-copy .button.primary' : '.weekly-latest-actions > a').first();
        await expect(primary).toHaveAttribute('href', `${prefix}/weekly/002`);
        const cards = page.locator('[data-episode-number]');
        await expect(page.locator('[data-episode-number="002"] .weekly-image .label')).toContainText(prefix ? 'Audio & video' : '音频 / 视频');
        const cover = page.locator('[data-episode-number="002"] .weekly-image img');
        await expect(cover).toHaveAttribute('src', '/assets/weekly-002-cover-square.jpg');
        const coverRect = await cover.boundingBox();
        expect(coverRect!.width / coverRect!.height).toBeCloseTo(1, 2);
        const frameRect = await page.locator('[data-episode-number="002"] .weekly-image').boundingBox();
        expect(frameRect!.width / frameRect!.height).toBeCloseTo(1, 2);
        expect(Math.abs(frameRect!.height - coverRect!.height)).toBeLessThan(1);
        expect(Math.abs(frameRect!.y - coverRect!.y)).toBeLessThan(1);
        if (width >= 1280) {
          const cardBox = await page.locator('[data-episode-number="002"]').boundingBox();
          expect(Math.abs(cardBox!.y + cardBox!.height - coverRect!.y - coverRect!.height)).toBeLessThanOrEqual(1.1);
        }
        if (path === '/') {
          await expect(page.locator('[data-brand-visual="weekly-001"] img')).toHaveAttribute('src', '/assets/weekly-001-960.webp');
          await expect(page.locator('.visual-caption strong')).toHaveText('24 signalsone open table');
        }
        expect(await cards.evaluateAll(nodes => nodes.map(n => n.getAttribute('data-episode-number')))).toEqual(path === '/' ? ['002'] : ['002', '001']);
        await expect(page.locator('a[href*="/002/transcript"]')).toHaveCount(prefix ? 0 : 2);
        await expect(page.locator('.platform-list a[href*="spotify.com"]')).toHaveAttribute('href', /\/show\//);
        if (!prefix) await expect(page.locator('main > section').first().locator('a[href="/weekly/002/transcript"]')).toContainText('#002');
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      }
      await page.goto(`${prefix}/weekly/002`);
      const links = page.locator('.episode-detail-platforms .platform-list a');
      await expect(links).toHaveCount(5);
      for (const url of [
        'https://www.xiaoyuzhoufm.com/episode/6aa68040492687f6aad92b15',
        'https://open.spotify.com/episode/0TgZM7cjwGXlNyTH1rbJK0',
        'https://podcasts.apple.com/us/podcast/id6809305832?i=1000789331360',
        'https://www.bilibili.com/video/BV1tWYC6HEqM/',
        'https://youtu.be/hsppRLQF3wc',
      ]) expect(await links.evaluateAll(nodes => nodes.map(n => n.getAttribute('href')))).toContain(url);
      await expect(page.locator('.episode-detail-hero-copy')).toContainText(prefix ? 'Audio & video out now' : '音视频已上线');
      await expect(page.locator('.episode-detail-hero-copy')).not.toContainText(prefix ? 'Video not yet available' : '视频版尚未上线');
      await expect(page.locator('.episode-detail-meta')).toContainText('1:42:44');
      await expect(page.locator('.episode-detail-meta')).toContainText('2026-09-13');
      await expect(page.locator('.episode-guest-names')).toHaveCount(0);
      await expect(page.locator('.episode-preview-hero')).toHaveCount(0);
      await expect(page.locator('.episode-transcript-cta')).toHaveCount(prefix ? 0 : 1);
      expect(await page.locator('.episode-detail-image img').evaluate(n => getComputedStyle(n).objectFit)).toBe('contain');
      const detailCover = page.locator('.episode-detail-image img');
      await expect(detailCover).toHaveAttribute('width', '3000');
      await expect(detailCover).toHaveAttribute('height', '3000');
      const coverBox = await detailCover.boundingBox();
      expect(coverBox!.width / coverBox!.height).toBeCloseTo(1, 2);
      const detailFrame = await page.locator('.episode-detail-image').boundingBox();
      expect(detailFrame!.width / detailFrame!.height).toBeCloseTo(1, 2);
      expect(Math.abs(detailFrame!.height - coverBox!.height)).toBeLessThan(1);
      expect(Math.abs(detailFrame!.y - coverBox!.y)).toBeLessThan(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.screenshot({ path: `/tmp/audio-published-${prefix ? 'en' : 'zh'}-${width}.png` });
    });
  }
}
