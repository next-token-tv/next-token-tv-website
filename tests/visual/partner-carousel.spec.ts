import {test, expect} from '@playwright/test';
for (const prefix of ['', '/en']) test(`partner carousel ${prefix || 'zh'}`, async ({page}) => {
  await page.goto(`${prefix}/partners/citic-books`);
  const root = page.locator('[data-partner-carousel]');
  await expect(root.locator('[data-slide]').first()).toHaveAttribute('src', /service.webp$/);
  await root.hover();
  await root.locator('[data-next]').click();
  await expect(root.locator('[data-count]')).toHaveText('2 / 3');
  await expect(root.locator('.partner-carousel-outgoing')).toHaveCount(0);
  await expect(root.locator('[data-slide]:visible')).toHaveCount(1);
  await page.emulateMedia({reducedMotion:'reduce'});
  await root.locator('[data-next]').click();
  await expect(root.locator('[data-count]')).toHaveText('3 / 3');
  await expect(root.locator('.partner-carousel-outgoing')).toHaveCount(0);
  await page.goto(`${prefix}/partners`);
  for (const row of await page.locator('.partner-row').all()) {
    const href = await row.locator('.partner-row-action').getAttribute('href');
    await expect(row.locator('.partner-row-link')).toHaveCount(3);
    for (const link of await row.locator('.partner-row-link').all()) await expect(link).toHaveAttribute('href', href!);
  }
});
