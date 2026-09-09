import { expect, test } from '@playwright/test';

for (const width of [390, 1440]) {
  test(`reader tools fit at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/weekly/001/transcript/');
    await expect(page.locator('[data-reader-tools]')).toBeVisible();
    await expect(page.getByRole('button', { name: '清除', exact: true })).toBeHidden();
    await page.getByRole('searchbox').focus();
    await expect(page.locator('[data-reader-tools]')).toHaveScreenshot(`reader-search-focus-${width}.png`);
    await expect(page.locator('.transcript-sidebar')).toHaveScreenshot(`reader-sidebar-${width}.png`);
    await expect(page.locator('.transcript-chapter').first()).toHaveScreenshot(`reader-chapter-${width}.png`);
  });
}

test('search finds dialogue without altering transcript and clear restores empty results', async ({ page }) => {
  await page.goto('/weekly/001/transcript/');
  const body = await page.locator('.transcript-turns').allTextContents();
  const input = page.getByRole('searchbox', { name: '搜索文字稿' });
  await input.fill('Token');
  await expect(page.getByRole('button', { name: '清除', exact: true })).toBeVisible();
  await expect(page.locator('[data-search-results] a').first()).toBeVisible();
  await expect(page.locator('[data-search-results] mark').first()).toHaveText(/token/i);
  expect(await page.locator('[data-search-results] mark').allTextContents()).toEqual(
    expect.arrayContaining(['Token']),
  );
  await input.fill('圆桌');
  await expect(page.locator('[data-search-results] mark').first()).toHaveText('圆桌');
  await page.locator('[data-search-results] a').first().click();
  await expect(page).toHaveURL(/#chapter-/);
  await input.fill('unfindable-xyz-123');
  await expect(page.locator('[data-search-status]')).toHaveText('0 处匹配');
  await expect(page.locator('[data-search-results] a')).toHaveCount(0);
  await page.getByRole('button', { name: '清除', exact: true }).click();
  await expect(input).toHaveValue('');
  await expect(page.getByRole('button', { name: '清除', exact: true })).toBeHidden();
  expect(await page.locator('.transcript-turns').allTextContents()).toEqual(body);
});

test('chapter sharing uses canonical URL and handles clipboard denial', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/weekly/001/transcript/');
  await page.getByRole('button', { name: '复制章节链接' }).first().click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('https://nexttoken.tv/weekly/001/transcript/#chapter-01');
  await page.evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error('denied'); }; });
  await page.getByRole('button', { name: '复制章节链接' }).first().click();
  await expect(page.getByRole('textbox', { name: '章节链接' })).toHaveValue('https://nexttoken.tv/weekly/001/transcript/#chapter-01');
});
