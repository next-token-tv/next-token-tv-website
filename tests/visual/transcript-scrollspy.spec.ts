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

test('times reveal on hover, chapter times scroll to paragraphs, and platforms use their own timing', async ({ page }) => {
  await page.setViewportSize({width:1233,height:897});
  await page.goto('/weekly/003/transcript');
  const item = page.locator('.transcript-toc-chapter').first();
  const before = await item.locator('span').evaluate(el => el.getBoundingClientRect().left);
  const chapterTime = page.locator('.transcript-toc-time').first();
  await expect(chapterTime).toHaveCSS('opacity', '0');
  await item.hover();
  expect(await item.locator('span').evaluate(el => el.getBoundingClientRect().left)).toBe(before);
  await expect(chapterTime).toHaveCSS('opacity', '1');
  await expect(chapterTime).toHaveText(/^\d+(?::\d{2}){1,2}$/);
  const fragment = (await chapterTime.getAttribute('href'))!;
  expect(fragment).toMatch(/^#quote-/);
  await chapterTime.click();
  await expect(page).toHaveURL(url => url.hash === fragment);
  await page.mouse.move(1, 1);
  await expect(chapterTime).toHaveCSS('opacity', '0');
  const paragraph = page.locator('.transcript-quote-paragraph')
    .filter({ has: page.locator('.transcript-playback a[href*="bilibili.com"]') })
    .filter({ has: page.locator('.transcript-playback a[href*="youtube.com"]') }).first();
  const bilibili = paragraph.locator('.transcript-playback a[href*="bilibili.com"]');
  const youtube = paragraph.locator('.transcript-playback a[href*="youtube.com"]');
  await expect(paragraph).toHaveAttribute('id', fragment.slice(1));
  await expect(paragraph).toBeInViewport();
  const playback = paragraph.locator('.transcript-playback');
  await expect(playback).toHaveCSS('opacity', '0');
  await paragraph.hover();
  await expect(playback).toHaveCSS('opacity', '1');
  await expect(bilibili).toHaveText("B 站↗");
  await expect(youtube).toHaveText("YouTube↗");
  await expect(playback.locator('a .transcript-playback-time')).toHaveCount(0);
  await expect(playback.locator('.transcript-playback-time')).toHaveCount(2);
  const bilibiliStart = new URL((await bilibili.getAttribute('href'))!).searchParams.get('t');
  const youtubeStart = new URL((await youtube.getAttribute('href'))!).searchParams.get('t');
  expect(bilibiliStart).toMatch(/^\d+$/);
  expect(youtubeStart).toMatch(/^\d+s$/);
  expect(Number(bilibiliStart)).not.toBe(parseInt(youtubeStart!, 10));

  await page.context().route('https://www.bilibili.com/**', route => route.fulfill({ body: '' }));
  const [popup] = await Promise.all([page.waitForEvent('popup'), bilibili.click()]);
  await popup.close();
  await page.mouse.move(1, 1);
  await expect(playback).toHaveCSS('opacity', '0');
  await page.keyboard.press('Tab');
  await expect(youtube).toBeFocused();
  await expect(playback).toHaveCSS('opacity', '1');
});

test('playback aligns to the right of the last text line or wraps as a group', async ({ page }) => {
  await page.setViewportSize({ width: 1233, height: 897 });
  await page.goto('/weekly/003/transcript');
  await page.evaluate(() => document.fonts.ready.then(() => undefined));
  const layouts = await page.locator('.transcript-quote-paragraph:has(.transcript-playback)').evaluateAll(paragraphs =>
    paragraphs.slice(0, 80).map(paragraph => {
      const textEnd = paragraph.querySelector('.transcript-paragraph-link')!.getBoundingClientRect();
      const playback = paragraph.querySelector('.transcript-playback')!;
      const group = playback.getBoundingClientRect();
      const bounds = paragraph.getBoundingClientRect();
      const lineHeight = parseFloat(getComputedStyle(paragraph).lineHeight);
      return {
        singleLine: textEnd.top - bounds.top < lineHeight / 2,
        room: bounds.right - textEnd.right - group.width,
        sameLine: group.top < textEnd.bottom && group.bottom > textEnd.top,
        rightGap: Math.abs(bounds.right - group.right),
        oneGroup: [...playback.children].every(item => Math.abs(item.getBoundingClientRect().top - playback.firstElementChild!.getBoundingClientRect().top) < 1),
      };
    }),
  );
  expect(layouts.some(layout => layout.singleLine && layout.room >= 1 && layout.sameLine)).toBe(true);
  expect(layouts.some(layout => !layout.singleLine && layout.room >= 1 && layout.sameLine)).toBe(true);
  expect(layouts.some(layout => layout.room < -1 && !layout.sameLine)).toBe(true);
  for (const layout of layouts) {
    expect(layout.rightGap).toBeLessThan(1);
    expect(layout.oneGroup).toBe(true);
    if (Math.abs(layout.room) >= 1) expect(layout.sameLine).toBe(layout.room > 0);
  }
});

test('touch reveals right-aligned paragraph playback', async ({ browser, baseURL }) => {
  const page = await browser.newPage({ baseURL, viewport: { width: 320, height: 740 }, hasTouch: true, isMobile: true });
  try {
    await page.goto('/weekly/003/transcript');
    const paragraph = page.locator('.transcript-quote-paragraph:has(.transcript-playback)').first();
    const playback = paragraph.locator('.transcript-playback');
    await expect(playback).toHaveCSS('opacity', '0');
    await paragraph.tap({ position: { x: 2, y: 2 } });
    await expect(playback).toHaveCSS('opacity', '1');
    const paragraphBox = (await paragraph.boundingBox())!;
    const playbackBox = (await playback.boundingBox())!;
    expect(playbackBox.x + playbackBox.width).toBeCloseTo(paragraphBox.x + paragraphBox.width, 0);
    expect(playbackBox.y + playbackBox.height).toBeLessThanOrEqual(paragraphBox.y + paragraphBox.height + 1);
    await paragraph.tap({ position: { x: 2, y: 2 } });
    await expect(playback).toHaveCSS('opacity', '0');
  } finally {
    await page.close();
  }
});
