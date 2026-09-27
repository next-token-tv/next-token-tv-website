import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/content/imported/transcripts/next-token-weekly--004.zh-Hans.json', import.meta.url), 'utf8'));
const paragraphs = snapshot.chapters.flatMap((c: any) => c.turns.flatMap((t: any) => t.paragraphs.map((p: any[]) => p.map(s => s.value).join(''))));

test('004 renders every paragraph, speaker and literal mask without timestamps', async ({ page }) => {
  await page.goto('/weekly/004/transcript');
    await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('.transcript-chapter')).toHaveCount(17);
  await expect(page.locator('.transcript-turn')).toHaveCount(792);
  expect(await page.locator('.transcript-quote-paragraph').evaluateAll(nodes => nodes.map(node => { const clone = node.cloneNode(true) as HTMLElement; clone.querySelectorAll('.transcript-paragraph-link').forEach(a => a.remove()); return clone.textContent; }))).toEqual(paragraphs);
  expect(await page.locator('.transcript-turn').evaluateAll(nodes => nodes.map(n => n.getAttribute('data-speaker')))).toEqual(snapshot.chapters.flatMap((c: any) => c.turns.map((t: any) => t.speakerId)));
  expect((await page.locator('.transcript-body').innerText()).match(/__/g)).toHaveLength(8);
  await expect(page.locator('.transcript-paragraph-time')).toHaveCount(0);
  await expect(page.locator('main')).toContainText('章节标题由编辑添加，非嘉宾原话。');
  await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
  await expect(page.locator('.transcript-review-banner')).toHaveCount(0);
});

test('004 reading stays within mobile and desktop bounds; search and chapter navigation work', async ({ page }) => {
  for (const width of [390, 768, 1280, 1440, 1920, 2560]) {
    await page.setViewportSize({width, height: 900});
    await page.goto('/weekly/004/transcript');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('.transcript-toc')).toHaveAttribute('open', '');
    const headings = await page.locator('h2').evaluateAll(nodes => nodes.filter(node => node.getBoundingClientRect().height > 0).map(node => {
      const s = getComputedStyle(node); return parseFloat(s.lineHeight) / parseFloat(s.fontSize);
    }));
    for (const ratio of headings) expect(ratio).toBeCloseTo(1.25, 2);
  }
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/weekly/004');
  await page.getByRole('link', {name: /阅读.*文字稿/}).click();
  await expect(page.locator('h1')).toContainText('Opus 5.5');
  await page.getByRole('searchbox', {name: '搜索文字稿'}).fill('Muse');
  await expect(page.locator('[data-search-results] a').first()).toBeVisible();
  await page.locator('[data-search-results] a').first().click();
  await expect(page).toHaveURL(/#chapter-/);
  await page.getByRole('searchbox', {name: '搜索文字稿'}).fill('');
  await page.locator('.transcript-toc a').last().click();
  await expect(page).toHaveURL(/#chapter-17$/);
  await expect(page.locator('#chapter-17')).toBeInViewport();
});
