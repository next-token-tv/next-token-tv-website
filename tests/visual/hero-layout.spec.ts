import { expect, test } from '@playwright/test';

const fixtureBase = `http://127.0.0.1:${process.env.PLAYWRIGHT_FIXTURE_PORT ?? 4177}`;
for (const viewport of [{ name: 'mobile', width: 390, height: 844 }, { name: 'wide', width: 1920, height: 840 }]) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });
    for (const locale of ['zh-Hans', 'en']) for (const surface of ['home', 'weekly']) {
      for (const state of ['with-preview', 'without-preview']) {
        test(`fixed ${locale} ${surface} ${state}`, async ({ page }) => {
          await page.goto(`${fixtureBase}/__visual/${locale}/${surface}/${state}`);
          await page.evaluate(() => document.fonts.ready);
          const hero = page.locator(surface === 'home' ? '.hero-grid' : '.weekly-show-hero');
          await expect(hero.locator('.upcoming-episode-link')).toHaveCount(state === 'with-preview' ? 1 : 0);
          await expect(hero.locator(surface === 'home' ? '.button.primary' : '.weekly-latest-actions > a').first())
            .toHaveAttribute('href', `${locale === 'en' ? '/en' : ''}/weekly/006`);
          await expect(hero.locator('.episode-transcript-cta')).toContainText(locale === 'en' ? '#005' : '#006');
          expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
          if (surface === 'weekly') await page.locator('.site-header').evaluate(header => { header.style.visibility = 'hidden'; });
          await expect(hero).toHaveScreenshot(`${locale}-${surface}-${state}-${viewport.name}.png`);
        });
      }
    }
  });
}
