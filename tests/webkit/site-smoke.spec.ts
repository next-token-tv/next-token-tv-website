import { expect, test } from '@playwright/test';
import { recordDeepLinkAppearance } from '../performance/transcript-interactions';

test('home content is visible with JavaScript disabled', async ({ browser, baseURL }) => {
  const page = await browser.newPage({ baseURL, javaScriptEnabled: false, reducedMotion: 'no-preference' });
  try {
    await page.goto('/');
    const sections = page.locator('[data-reveal]');
    expect(await sections.count()).toBeGreaterThan(0);
    expect(await sections.evaluateAll(elements => elements.every(el => getComputedStyle(el).opacity === '1'))).toBe(true);
    await expect(page.locator('.rail-track')).toHaveCSS('animation-name', 'none');
  } finally {
    await page.close();
  }
});

test('topic ticker can pause by keyboard and resume by touch', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const ticker = page.locator('.rail-track');
  const control = page.getByRole('button', { name: '暂停主题滚动' });
  await expect(ticker).toHaveCSS('animation-play-state', 'running');
  await control.press('Enter');
  await expect(ticker).toHaveCSS('animation-play-state', 'paused');
  await page.getByRole('button', { name: '继续主题滚动' }).tap();
  await expect(ticker).toHaveCSS('animation-play-state', 'running');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(ticker).toHaveCSS('animation-name', 'none');
  await expect(control).toBeHidden();
});

test('mobile navigation opens and follows a link', async ({ page }) => {
  await page.goto('/weekly/004');
  const menu = page.locator('.mobile-navigation');
  await menu.locator('summary').tap();
  await expect(menu.locator('nav')).toBeVisible();
  await menu.locator('a[href="/community"]').tap();
  await expect(page).toHaveURL(/\/community$/);
  await expect(menu.locator('nav')).toBeHidden();
});

test('touch QR closes when its trigger is covered by the header or leaves the viewport', async ({ page }) => {
  await page.goto('/community');
  const trigger = page.locator('.platform-qr-trigger').first();
  const panel = page.locator('.platform-qr').first();
  await trigger.tap();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await expect(panel.getByRole('img')).toBeVisible();
  await trigger.evaluate(button => {
    const headerBottom = document.querySelector('.site-header')!.getBoundingClientRect().bottom;
    window.scrollBy(0, button.getBoundingClientRect().bottom - headerBottom + 3);
  });
  await expect.poll(() => trigger.evaluate(button => {
    const buttonBottom = button.getBoundingClientRect().bottom;
    const headerBottom = document.querySelector('.site-header')!.getBoundingClientRect().bottom;
    return buttonBottom > 0 && buttonBottom <= headerBottom;
  })).toBe(true);
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(panel).toBeHidden();
  await trigger.tap();
  await expect(panel).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(trigger).not.toBeInViewport();
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(panel).toBeHidden();
  await trigger.tap();
  await expect(panel).toBeVisible();
});

test('pausing cancels a pending automatic slide and leaves manual controls usable', async ({ page }) => {
  await page.addInitScript(() => {
    const decode = HTMLImageElement.prototype.decode;
    HTMLImageElement.prototype.decode = function () {
      if (!this.matches('[data-slide]:nth-child(2)')) return decode.call(this);
      this.setAttribute('data-test-decoding', '');
      return new Promise<void>((resolve, reject) => {
        this.addEventListener('test-release-decode', () => {
          decode.call(this).then(() => {
            resolve();
            requestAnimationFrame(() => this.setAttribute('data-test-decoded', ''));
          }, reject);
        }, { once: true });
      });
    };
  });
  await page.goto('/partners/citic-books');
  const gallery = page.locator('[data-partner-carousel]');
  const toggle = gallery.locator('[data-pause]');
  const second = gallery.locator('[data-slide]').nth(1);
  await toggle.press('Enter');
  await expect(second).toHaveAttribute('data-test-decoding', '');
  await toggle.press('Enter');
  await expect(toggle).toHaveText('播放');
  await expect(gallery.locator('[data-count]')).toHaveText('1 / 3');
  await gallery.getByRole('button', { name: '上一张照片' }).tap();
  await expect(gallery.locator('[data-count]')).toHaveText('3 / 3');
  await second.dispatchEvent('test-release-decode');
  await expect(second).toHaveAttribute('data-test-decoded', '');
  await expect(second).toBeHidden();
  await expect(gallery.locator('[data-count]')).toHaveText('3 / 3');
});

test('carousel starts playing with focus on the control and announces manual changes', async ({ page }) => {
  await page.goto('/partners/citic-books');
  const gallery = page.locator('[data-partner-carousel]');
  const play = gallery.getByRole('button', { name: '播放', exact: true });
  await play.press('Enter');
  await expect(gallery.getByRole('button', { name: '暂停', exact: true })).toBeFocused();
  await expect(gallery.locator('[data-count]')).toHaveText('2 / 3');
  await gallery.getByRole('button', { name: '下一张照片' }).tap();
  await expect(gallery.getByRole('status')).toHaveText('第 3 张照片，共 3 张');
});

test('transcript opens a paragraph permalink and reveals its video links on touch', async ({ page }) => {
  const route = '/weekly/009/transcript';
  await page.goto(route);
  const timed = page.locator('.transcript-quote-paragraph:has(.transcript-playback a)').nth(20);
  const id = await timed.getAttribute('id');
  expect(id).toMatch(/^quote-/);
  await page.goto(`${route}#${id}`);
  const paragraph = page.locator(`#${id}`);
  await expect(paragraph).toBeInViewport();
  const playback = paragraph.locator('.transcript-playback');
  await paragraph.tap({ position: { x: 1, y: 1 } });
  await expect(playback).toHaveCSS('opacity', '1');
  await expect(playback.locator('a').first()).toHaveAttribute('href', /^https:\/\//);
});

test('deep-link timing records entry after zero-area viewport edge contact', async ({ page }) => {
  await page.addInitScript(recordDeepLinkAppearance, 'edge');
  await page.route('**/observer-edge', route => route.fulfill({
    contentType: 'text/html',
    body: '<meta name="viewport" content="width=device-width, initial-scale=1"><p id="edge" style="position:fixed;top:100vh;left:0;width:100px;height:100px;margin:0">Paragraph</p>',
  }));
  await page.goto('/observer-edge#edge');
  const edge = page.locator('#edge');
  const initial = await edge.evaluate(el => new Promise(resolve => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      observer.disconnect();
      resolve({ intersects: entry.isIntersecting, ratio: entry.intersectionRatio });
    });
    observer.observe(el);
  }));
  expect(initial).toEqual({ intersects: true, ratio: 0 });
  await expect(edge).not.toHaveAttribute('data-audit-anchor-ms');
  await edge.evaluate(el => { el.style.top = 'calc(100vh - 10px)'; });
  await expect(edge).toHaveAttribute('data-audit-anchor-ms', /^\d/);
});
