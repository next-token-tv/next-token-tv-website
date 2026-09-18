import { expect, test } from '@playwright/test';

for (const prefix of ['', '/en']) {
  test(`wiki home connects all three collections ${prefix || 'zh'}`, async ({ page }) => {
    await page.setViewportSize({ width: 1327, height: 897 });
    await page.goto(`${prefix}/wiki`);
    await expect(page.locator('.wiki-home-overview a')).toHaveCount(3);
    for (const section of ['brands', 'products', 'people']) {
      await expect(page.locator(`.wiki-home-overview a[href="${prefix}/wiki/${section}"]`)).toBeVisible();
      const heading = page.locator(`.wiki-home-columns section[aria-labelledby="wiki-home-${section}"] .wiki-home-column-heading`);
      await expect(heading).toHaveAttribute('href', `${prefix}/wiki/${section}`);
      await expect(page.locator(`.wiki-home-columns section[aria-labelledby="wiki-home-${section}"] a[href^="${prefix}/wiki/${section}/"]`)).toHaveCount(4);
      await heading.click();
      await expect(page).toHaveURL(new RegExp(`${prefix}/wiki/${section}$`));
      await page.goBack();
    }
    for (const [section, ids] of [
      ['brands', ['openai', 'apple', 'zhipu', 'bytedance']],
      ['products', ['zcode', 'iphone', 'blender', 'omarchy']],
    ] as const) {
      expect(await page.locator(`.wiki-home-columns section[aria-labelledby="wiki-home-${section}"] .wiki-home-entry-list a`)
        .evaluateAll(links => links.map(link => link.getAttribute('href'))))
        .toEqual(ids.map(id => `${prefix}/wiki/${section}/${id}`));
    }
    const counts = await page.locator('.wiki-home-overview strong').allTextContents();
    expect(counts.every(count => Number(count) > 0)).toBe(true);
  });
}

for (const section of ['brands', 'products', 'people']) {
  test(`${section} library remains filterable in its compact layout`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/wiki/${section}`);
    const all = await page.locator('.entity-directory-row').count();
    const filter = page.locator('[data-entity-filter]:not([data-entity-filter="all"])').first();
    const kind = await filter.getAttribute('data-entity-filter');
    const filteredCount = Number(await filter.locator('strong').innerText());
    await filter.click();
    await expect(page.locator('.entity-directory-row:visible')).toHaveCount(filteredCount);
    await expect(page).toHaveURL(new RegExp(`type=${kind}`));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator('[data-entity-filter="all"]').click();
    await expect(page.locator('.entity-directory-row:visible')).toHaveCount(all);
  });
}
