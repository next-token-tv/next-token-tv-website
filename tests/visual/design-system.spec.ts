import { test, expect } from '@playwright/test';
const fullHex = (value: string) => /^#[\da-f]{3}$/i.test(value) ? `#${[...value.slice(1)].map(digit => digit + digit).join('')}` : value;

for (const prefix of ['', '/en']) test(`public design system ${prefix || 'zh'}`, async ({page}) => {
  await page.goto(`${prefix}/design-system`);
  await expect(page.locator('.site-footer a[href$="/design-system"]')).toHaveAttribute('href', `${prefix}/design-system`);
  await expect(page.locator('.ds-section')).toHaveCount(10);
  await page.locator('.ds-nav a[href="#icons"]').click();
  await expect(page).toHaveURL(/#icons$/);
  await expect(page.locator('#icons [data-interface-icon]')).toHaveCount(2);
  const productionIcons = await page.locator('.site-header [data-interface-icon]').evaluateAll(icons => icons.map(icon => icon.outerHTML));
  for (const icon of await page.locator('#icons [data-interface-icon]').evaluateAll(icons => icons.map(icon => icon.outerHTML))) {
    expect(productionIcons).toContain(icon);
  }
  await expect(page.locator('#icons [data-icon-group="platform"] img')).toHaveCount(8);
  await expect(page.locator('#icons [data-icon-group="platform"] img[src$=".png"]')).toHaveCount(2);
  for (const src of await page.locator('#icons img').evaluateAll(images => images.map(image => image.getAttribute('src')!))) {
    expect((await page.request.get(src)).ok(), src).toBe(true);
  }
  await expect(page.locator('[data-type-metric]').first()).toContainText('36–64px');
  await expect(page.locator('[data-color-token="--signal"]')).toHaveText('#ff4b18');
  await expect(page.locator('[data-color-token="--ink"]')).toHaveText('#111111');
  const toggle = page.locator('[data-demo-toggle] button');
  await toggle.nth(1).click();
  await expect(toggle.nth(0)).toHaveAttribute('aria-pressed', 'false');
  await expect(toggle.nth(1)).toHaveAttribute('aria-pressed', 'true');
  await page.locator('.ds-nav a[href="#controls"]').click();
  await expect(page).toHaveURL(/#controls$/);
  const input = page.locator('#controls input[type="search"]');
  await input.fill('Next Token');
  await expect(input).toHaveValue('Next Token');
  await page.locator('[data-search-clear]').click();
  await expect(input).toHaveValue('');
  await expect(page.locator('#controls .ds-control-row button:disabled')).toBeDisabled();
  await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
  await expect(page.locator('[data-color-token="--sky"]')).toHaveText('#caddee');
  await expect(page.locator('[data-type-metric]').first()).toContainText('rem');
  // The specimen and ordinary reading pages remain usable at enlarged browser text size.
  await page.setViewportSize({width: 390, height: 844});
  await page.addStyleTag({content: 'html { font-size: 20px; }'});
  await expect(page.locator('#controls input[type="search"]')).toHaveCSS('border-top-width', '1px');
  await expect(page.locator('#controls input[type="search"]')).toHaveCSS('font-size', '17.5px');
  await expect(page.locator('.ds-rule-sample.emphasis')).toHaveCSS('border-bottom-width', '2px');
  await expect(page.locator('[data-space-token="--space-4"]')).toHaveText('20px');
  const tableRegion = page.getByRole('region', { name: /尺寸对照|Size reference/ });
  await tableRegion.focus();
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => tableRegion.evaluate(el => el.scrollLeft)).toBeGreaterThan(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

for (const prefix of ['', '/en']) {
  test(`standard color roles and interaction specimens ${prefix || 'zh'}`, async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'clipboard', { value: { writeText: async () => { throw new Error('Unavailable'); } }, configurable: true });
    });
    await page.goto(`${prefix}/design-system#controls`);
    await expect(page.locator('#transcripts, #patterns, [data-reader-specimen], [data-icon-group="brand"]')).toHaveCount(0);
    for (const text of await page.locator('[data-color-token]').allTextContents()) expect(text).toMatch(/^#[0-9a-f]{6}( · [\d.]+%)?$/);
    await expect(page.locator('#identity-colors [data-color-alias]')).toHaveCount(5);
    await expect(page.locator('#color [data-color-alias]')).toHaveCount(3);
    await expect(page.locator('#reading #identity-colors')).toHaveCount(1);
    await expect(page.locator('#rules #overlay-colors')).toHaveCount(1);
    await expect(page.locator('#controls [data-color-alias="--switch-track"]')).toHaveCount(1);
    const categoryColors = await page.locator('.category-link').evaluateAll(links => links.map(link => getComputedStyle(link).backgroundColor));
    expect(new Set(categoryColors).size).toBe(3);
    for (const reference of await page.locator('[data-color-alias] [data-color-source]').evaluateAll(links => links.map(link => ({href:link.getAttribute('href')!,source:link.getAttribute('data-color-source')!})))) {
      await expect(page.locator(reference.href)).toHaveCount(1);
      await expect(page.locator(reference.href)).toHaveAttribute('data-color-token', reference.source);
    }
    const identities = await page.locator('#identity-colors .identity-marker').evaluateAll(marks => marks.map(mark => getComputedStyle(mark).borderLeftColor));
    expect(new Set(identities).size).toBe(5);
    await expect(page.locator('[data-color-alias="--identity-gold"] [data-color-source]')).toHaveAttribute('data-color-source', '--gold');
    await expect(page.locator('[data-color-alias="--identity-blue"] [data-color-source]')).toHaveAttribute('data-color-source', '--sky');
    const toggle = page.locator('[data-highlight-switch]');
    await expect(toggle).toHaveAttribute('aria-checked', 'false');
    const link = page.locator('.category-link[data-entity-type="product"]');
    const normal = await link.evaluate(el => getComputedStyle(el).backgroundColor);
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-checked', 'true');
    await expect(link).toHaveCSS('background-color', 'color(srgb 0.156863 0.364706 0.478431 / 0.22)');
    await toggle.click();
    await expect(link).toHaveCSS('background-color', normal);
    await page.locator('[data-copy-example]').click();
    await expect(page.locator('.ds-copy input')).toBeVisible();
    await expect(page.locator('.ds-copy input')).toHaveValue(new RegExp(`${prefix}/design-system#reading$`));
    await page.locator('.ds-disclosure summary').click();
    await expect(page.locator('.ds-disclosure')).toHaveAttribute('open', '');
  });

  test(`brand palette matches the design system and official logo ${prefix || 'zh'}`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ baseURL, javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(`${prefix}/design-system`);
    const palette = await page.locator('[data-color-name]').evaluateAll(labels => labels.map(label => {
      const token = label.getAttribute('data-color-name')!;
      return { token, name: label.textContent, hex: document.querySelector(`[data-color-token="${token}"]`)!.textContent!.trim(), css: getComputedStyle(label).getPropertyValue(token).trim() };
    }));
    expect(palette).toHaveLength(8);
    await page.goto(`${prefix}/brand-kit`);
    await expect(page.locator('[data-kit-color]')).toHaveCount(palette.length);
    for (const color of palette) {
      expect(color.hex).toBe(fullHex(color.css));
      const swatch = page.locator(`[data-kit-color="${color.token}"]`);
      await expect(swatch.locator('h4')).toHaveText(color.name!);
      await expect(swatch.locator('code')).toHaveText(color.hex);
      expect(fullHex(await swatch.evaluate((node, token) => getComputedStyle(node).getPropertyValue(token).trim(), color.token))).toBe(color.hex);
    }
    for (const path of ['/assets/logo-next-token.svg', '/assets/brand-kit/logo-next-token.svg']) {
      const logo = (await (await page.request.get(path)).text()).toLowerCase();
      for (const token of ['--paper', '--ink', '--signal']) expect(logo).toContain(`fill="${palette.find(color => color.token === token)!.hex}"`);
    }
    await context.close();
  });

  test(`design-system error state survives hover and focus ${prefix || 'zh'}`, async ({ page }) => {
    await page.goto(`${prefix}/design-system`);
    const field = page.locator('input[aria-invalid="true"]');
    const errorColor = await field.evaluate(el => getComputedStyle(el).borderTopColor);
    await field.hover();
    await expect(field).toHaveCSS('border-top-color', errorColor);
    await field.focus();
    await expect(field).toHaveCSS('border-top-color', errorColor);
    await expect(field).toHaveAttribute('aria-describedby', 'ds-error-hint');
    await expect(page.locator('#ds-error-hint')).toBeVisible();
  });

  for (const width of [320, 768, 1024, 1440]) {
    test(`design-system reflows with doubled text ${prefix || 'zh'} ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 960 });
      await page.goto(`${prefix}/design-system`);
      await page.addStyleTag({ content: 'html { font-size: 32px; }' });
      await page.evaluate(() => document.fonts.ready);
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
      await expect(page.locator('#controls .control-button').first()).toHaveCSS('border-radius', '4px');
      await expect(page.locator('#components .episode-listen')).toHaveCSS('border-radius', '4px');
    });
  }
}

for (const prefix of ['', '/en']) test(`production primitives match specimens ${prefix || 'zh'}`, async ({ page }) => {
  const linkStyle = async (selector: string) => page.locator(selector).first().evaluate(el => {
    const s = getComputedStyle(el);
    return [s.color, s.backgroundColor, s.textDecorationStyle, s.textDecorationThickness, s.textUnderlineOffset, s.borderRadius];
  });
  const switchStyle = async () => page.locator('.control-switch').evaluate(el => {
    const track = el.querySelector('.control-switch-track')!;
    const s = getComputedStyle(el), t = getComputedStyle(track), thumb = getComputedStyle(track, '::before');
    return [s.minHeight, s.fontSize, t.width, t.height, t.backgroundColor, thumb.transform];
  });
  await page.goto(`${prefix}/design-system`);
  const prose = await linkStyle('.ds-reading a');
  const off = await switchStyle();
  await page.locator('.control-switch').click();
  const on = await switchStyle();
  await page.locator('.ds-reading a').focus();
  const focused = await linkStyle('.ds-reading a');
  for (const [route, selector] of [['/wiki/products/workbuddy', '.wiki-prose'], ['/blog/agent-browser-ultrawide', '.episode-article-prose']]) {
    await page.goto(`${prefix}${route}`);
    await expect(page.locator(selector!)).toHaveCSS('font-size', '17px');
    expect(await linkStyle(`${selector} a`)).toEqual(prose);
    await page.locator(`${selector} a`).first().focus();
    expect(await linkStyle(`${selector} a`)).toEqual(focused);
  }
  // Transcript locales follow their published availability, while its control primitive is shared.
  await page.goto('/weekly/005/transcript');
  expect(await switchStyle()).toEqual(off);
  await page.locator('.control-switch').click();
  expect(await switchStyle()).toEqual(on);
});
