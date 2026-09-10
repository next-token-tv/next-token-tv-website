import { test, expect } from '@playwright/test';

for (const width of [390, 1440]) for (const prefix of ['', '/en']) {
  test(`people library ${prefix || 'zh'} ${width}`, async ({ page, request }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${prefix}/wiki/people/`);
    await expect(page.locator('.entity-directory-row')).toHaveCount(10);
    for (const id of ['yangpan', 'guizang', 'orange', 'xiangyang-qiaomu', 'dhh', 'guanlan-dai', 'chen-mian', 'luo-fuli', 'wang-le', 'aj']) {
      expect((await request.get(`${prefix}/wiki/people/${id}/`)).status()).toBe(200);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('.entity-directory-row').first()).toHaveScreenshot(`people-row-${prefix ? 'en' : 'zh'}-${width}.png`);
    await page.locator('[data-entity-filter="co-host"]').click();
    await expect(page.locator('.entity-directory-row:visible')).toHaveCount(4);
    await expect(page).toHaveURL(/type=co-host/);
    await expect(page.locator('.entity-directory-row:visible').first()).toContainText(prefix ? '2 related episodes' : '2 期相关节目');
    await page.locator('[data-entity-filter="mentioned"]').click();
    await expect(page.locator('.entity-directory-row:visible')).toHaveCount(6);
    expect(await page.locator('.entity-directory-row:visible').last().evaluate(el => parseFloat(getComputedStyle(el).borderBottomWidth))).toBeGreaterThan(0);
    await page.reload();
    await expect(page.locator('.entity-directory-row:visible')).toHaveCount(6);
    await page.goBack();
    await expect(page.locator('.entity-directory-row:visible')).toHaveCount(4);
    await page.locator('[data-entity-filter="all"]').click();
    await expect(page.locator('.entity-directory-row:visible')).toHaveCount(10);
    await page.goto(`${prefix}/wiki/people/dhh/`);
    await expect(page.locator('h1')).toHaveText('David Heinemeier Hansson');
    await expect(page.locator('title')).not.toContainText(/Co-host|联合主理人/);
    if (!prefix) {
      await page.goto('/weekly/001/transcript/#chapter-12');
      await expect(page.locator('#chapter-12 a[href="/wiki/products/ruby-on-rails/"]')).toBeVisible();
      await expect(page.locator('#chapter-12 a[href="/wiki/people/dhh/"]')).toHaveCount(0);
    }
    await page.goto(`${prefix}/wiki/brands/`);
    await expect(page.locator(`.entity-library-switch a[href="${prefix}/wiki/people/"]`)).toBeVisible();
  });
}
