import { test, expect } from '@playwright/test';

for (const prefix of ['', '/en']) {
  test(`mobile navigation opens, navigates and closes ${prefix || 'zh'}`, async ({ page }) => {
    for (const width of [320, 390, 768, 900]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(`${prefix}/weekly/004`);
      const menu = page.locator('.mobile-navigation');
      const toggle = menu.locator('summary');
      const nav = menu.locator('nav');
      await expect(toggle).toBeVisible();
      await expect(nav).not.toBeVisible();
      await toggle.click();
      await expect(nav).toBeVisible();
      await expect(nav.locator(`a[href="${prefix}/search"]`)).toBeVisible();
      await expect(nav.locator(`a[href="${prefix}/wiki"]`)).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.keyboard.press('Escape');
      await expect(nav).not.toBeVisible();
      await expect(toggle).toBeFocused();
      await toggle.click();
      await page.mouse.click(5, 20);
      await expect(nav).not.toBeVisible();
      await toggle.click();
      await page.setViewportSize({ width: 1280, height: 900 });
      await expect(menu).not.toBeVisible();
      await expect(page.locator('.nav-links')).toBeVisible();
      await expect(menu).not.toHaveAttribute('open', '');
      await page.setViewportSize({ width, height: 844 });
      await expect(nav).not.toBeVisible();
    }
    await page.goto(prefix || '/');
    const menu = page.locator('.mobile-navigation');
    await menu.locator('summary').click();
    await menu.locator(`a[href="${prefix}/community"]`).click();
    await expect(page).toHaveURL(new RegExp(`${prefix}/community$`));
    await expect(menu).not.toHaveAttribute('open', '');
    await menu.locator('summary').click();
    await menu.locator(`a[href="${prefix}/wiki"]`).click();
    await expect(page).toHaveURL(new RegExp(`${prefix}/wiki$`));
  });
}

test('mobile navigation works without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(`${baseURL}/weekly/004`);
  const menu = page.locator('.mobile-navigation');
  await menu.locator('summary').click();
  await expect(menu.locator('nav')).toBeVisible();
  await menu.locator('a[href="/wiki"]').click();
  await expect(page).toHaveURL(/\/wiki$/);
  await context.close();
});
