import {test, expect} from '@playwright/test';
for (const prefix of ['', '/en']) {
  for (const width of [320, 390, 1440]) test(`Wiki tags wrap and filter ${prefix || 'zh'} ${width}`, async ({page}) => {
    await page.setViewportSize({width, height: 900});
    await page.goto(`${prefix}/wiki/people`);
    await expect(page.locator('.entity-directory-row .tag')).toHaveCount(0);
    const tags = page.locator('[data-entity-filters] .tag');
    expect(await tags.count()).toBeGreaterThan(0);
    await expect(tags.first()).toHaveCSS('border-radius', '1px');
    const filter = page.locator('[data-entity-filters] .tag--filter').nth(1);
    const key = await filter.getAttribute('data-entity-filter');
    await filter.click();
    await expect(filter).toHaveAttribute('aria-pressed', 'true');
    await expect(filter).toHaveCSS('background-color', 'rgb(249, 223, 210)');
    await filter.hover();
    await expect(filter).toHaveCSS('background-color', 'rgb(249, 223, 210)');
    await expect(filter).toHaveCSS('border-color', 'rgb(184, 50, 13)');
    await expect(page).toHaveURL(new RegExp(`type=${key}`));
    expect(await page.locator('.entity-directory-row:visible').count()).toBeGreaterThan(0);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
    const overflow = await tags.evaluateAll(elements => elements.filter(el => {
      const r=el.getBoundingClientRect(), parent=el.parentElement!.getBoundingClientRect();
      return r.width > 0 && (r.right > parent.right+1 || r.left < parent.left-1);
    }).length);
    expect(overflow).toBe(0);
    const all = tags.first();
    await all.press('Space');
    await expect(all).toHaveAttribute('aria-pressed', 'true');
    await expect(filter).toHaveAttribute('aria-pressed', 'false');
    await expect(page).not.toHaveURL(/type=/);
    await page.goBack();
    await expect(filter).toHaveAttribute('aria-pressed', 'true');
    await expect(filter).toHaveCSS('background-color', 'rgb(249, 223, 210)');
  });
  test(`Tag specimens share production styles ${prefix || 'zh'}`, async ({page}) => {
    const style = (selector:string) => page.locator(selector).first().evaluate(el => {
      const s=getComputedStyle(el);return [s.backgroundColor,s.color,s.borderRadius,s.borderColor,s.padding,s.fontSize,s.minHeight];
    });
    await page.goto(`${prefix}/design-system#tags`);
    const selectedStyle = await style('#tags [aria-pressed="true"]');
    const example = page.locator('#tags [data-entity-filter="models"]');
    await example.click();
    await expect(example).toHaveCSS('background-color', 'rgb(249, 223, 210)');
    await expect(example).toHaveCSS('border-color', 'rgb(184, 50, 13)');
    await example.press('Tab');
    const next = page.locator('#tags [data-entity-filter="tools"]');
    await expect(next).toBeFocused();
    await expect(next).toHaveCSS('outline-width', '2px');
    await expect(next).toHaveCSS('outline-offset', '1px');
    await next.press('Enter');
    await expect(next).toHaveAttribute('aria-pressed', 'true');
    await expect(example).toHaveAttribute('aria-pressed', 'false');
    await expect(next).toHaveCSS('background-color', 'rgb(249, 223, 210)');
    await expect(page.locator('#tags button:disabled')).toBeDisabled();
    await page.goto(`${prefix}/wiki/products`);
    expect(await style('[data-entity-filters] [aria-pressed="true"]')).toEqual(selectedStyle);
  });
}

test('touch filter tags meet control size and preserve selected color', async ({browser}) => {
  const context = await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page = await context.newPage();
  await page.goto('/wiki/products');
  const tag = page.locator('[data-entity-filter="agent"]');
  await tag.tap();
  await expect(tag).toHaveAttribute('aria-pressed','true');
  await expect(tag).toHaveCSS('background-color','rgb(249, 223, 210)');
  expect((await tag.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  await context.close();
});
