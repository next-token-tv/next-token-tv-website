import { expect, test } from '@playwright/test';
import { headingClippingViolations } from './helpers/heading-clipping';

const fixture = (css: string) => `<style>
body {margin: 0;} .frame {width: 260px;} h1 {margin: 0; font: 32px/1.25 sans-serif;}
${css}</style><main><section class="frame"><h1>A long reading title that needs several lines to stay readable</h1></section></main>`;
for (const [name, css] of [
  ['heading hidden overflow', 'h1 {height: 32px; overflow: hidden;}'],
  ['heading clipped overflow', 'h1 {max-height: 32px; overflow: clip;}'],
  ['ancestor hidden overflow', '.frame {height: 32px; overflow: hidden;}'],
  ['ancestor clipped overflow', '.frame {max-height: 32px; overflow: clip;}'],
  ['ancestor horizontal clipping', '.frame {width: 100px; overflow: hidden;} h1 {width: 260px;}'],
  ['line clamp', 'h1 {display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;}'],
]) test(`clipping gate catches ${name}`, async ({page}) => {
  await page.setContent(fixture(css));
  expect(await page.evaluate(headingClippingViolations)).toHaveLength(1);
});
for (const [name, css] of [
  ['normal wrapping', ''],
  ['below viewport', '.frame {margin-top: 2000px;}'],
  ['scrollable ancestor', '.frame {height: 32px; overflow: auto;}'],
  ['overflow remains visible', 'h1 {height: 32px; overflow: visible;}'],
]) test(`clipping gate allows ${name}`, async ({page}) => {
  await page.setContent(fixture(css));
  expect(await page.evaluate(headingClippingViolations)).toEqual([]);
});

for (const scale of [.5, 1.5]) {
  test(`clipping gate catches scaled ancestor at ${scale}`, async ({page}) => {
    await page.setContent(fixture(`.frame {height: 100px; overflow: hidden; transform: scale(${scale}); transform-origin: top left; border: 3px solid; padding: 4px;}`));
    expect(await page.evaluate(headingClippingViolations)).toHaveLength(1);
  });
  test(`clipping gate allows scaled unclipped ancestor at ${scale}`, async ({page}) => {
    await page.setContent(fixture(`.frame {overflow: hidden; transform: scale(${scale}); transform-origin: top left; border: 3px solid; padding: 4px;}`));
    expect(await page.evaluate(headingClippingViolations)).toEqual([]);
  });
}
for (const scrollTop of [0, 80]) {
  test(`clipping gate allows nested scrolling at offset ${scrollTop}`, async ({page}) => {
    await page.setContent(fixture('.frame {height: 60px; overflow: hidden;} .scroller {height: 60px; overflow: auto;}').replace('<h1>', '<div class="scroller"><h1>').replace('</h1>', '</h1></div>'));
    await page.locator('.scroller').evaluate((el, offset) => { el.scrollTop = offset; }, scrollTop);
    expect(await page.evaluate(headingClippingViolations)).toEqual([]);
  });
}
test('outer clipping of the scrollport is still rejected', async ({page}) => {
  await page.setContent(fixture('.frame {height: 30px; overflow: hidden;} .scroller {height: 60px; overflow: auto;}').replace('<h1>', '<div class="scroller"><h1>').replace('</h1>', '</h1></div>'));
  expect(await page.evaluate(headingClippingViolations)).toHaveLength(1);
});
test('scaled nested scrolling stays reachable', async ({page}) => {
  await page.setContent(fixture('.frame {height: 60px; overflow: hidden; transform: scale(.5, 1.5); transform-origin: top left;} .scroller {height: 60px; overflow: auto;}').replace('<h1>', '<div class="scroller"><h1>').replace('</h1>', '</h1></div>'));
  expect(await page.evaluate(headingClippingViolations)).toEqual([]);
});
for (const outerWidth of [60, 120]) {
  test(`horizontal scrollport with outer width ${outerWidth}`, async ({page}) => {
    await page.setContent(fixture(`.frame {width: ${outerWidth}px; overflow: hidden;} .scroller {width: 120px; overflow: auto;} h1 {width: 260px;}`).replace('<h1>', '<div class="scroller"><h1>').replace('</h1>', '</h1></div>'));
    await page.locator('.scroller').evaluate(el => { el.scrollLeft = 80; });
    expect(await page.evaluate(headingClippingViolations)).toHaveLength(outerWidth === 120 ? 0 : 1);
  });
}
