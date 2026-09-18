import { expect, test } from '@playwright/test';

test('paragraph link copies the canonical URL and highlights the target', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/weekly/001/transcript');
  const paragraph = page.locator('.transcript-quote-paragraph').first();
  const id = await paragraph.getAttribute('id');
  expect(id).toMatch(/^quote-[0-9a-f]{20}$/);
  await paragraph.locator('[data-paragraph-copy]').click();
  await expect(page).toHaveURL(new RegExp(`#${id}$`));
  await expect(paragraph).toHaveCSS('background-color', 'rgb(255, 241, 221)');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(`https://nexttoken.tv/weekly/001/transcript#${id}`);

  await page.evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error('denied'); }; });
  await paragraph.locator('[data-paragraph-copy]').click();
  await expect(paragraph.getByRole('textbox', { name: '段落链接' })).toHaveValue(`https://nexttoken.tv/weekly/001/transcript#${id}`);
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('paragraph permalink is rendered in HTML and locates its paragraph', async ({ page }) => {
    await page.goto('/weekly/001/transcript');
    const paragraph = page.locator('.transcript-quote-paragraph').first();
    const id = await paragraph.getAttribute('id');
    const link = paragraph.getByRole('link', { name: '引用此段' });
    await expect(link).toHaveAttribute('href', `/weekly/001/transcript#${id}`);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(paragraph).toHaveCSS('background-color', 'rgb(255, 241, 221)');
  });
});
