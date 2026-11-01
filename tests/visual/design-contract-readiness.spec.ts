import {test, expect} from '@playwright/test';
import {designContractViolations} from './helpers/design-contract';

const specimen = `<style>:root {font-size:16px;--heading-section-display-size:1.75rem}</style>
  <nav class="nav shell"></nav><main><p class="heading-section-display">Heading</p></main>`;

test('design measurement waits for applied styles without reloading', async ({page}) => {
  await page.setContent(specimen);
  expect(await page.evaluate(designContractViolations)).toEqual([
    'role size: heading-section-display actual=16px expected=28px token=1.75rem',
  ]);
  await page.evaluate(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const style = document.createElement('style');
      style.textContent = '.heading-section-display {font-size:var(--heading-section-display-size)}';
      document.head.append(style);
    }));
  });
  await expect.poll(() => page.evaluate(designContractViolations)).toEqual([]);
});

test('persistent wrong typography still fails the polled contract', async ({page}) => {
  await page.setContent(specimen);
  await expect(expect.poll(() => page.evaluate(designContractViolations), {
    timeout: 300, intervals: [50],
  }).toEqual([])).rejects.toThrow('actual=16px expected=28px');
});

test('a missing typography token cannot silently pass as NaN', async ({page}) => {
  await page.setContent(specimen.replace('--heading-section-display-size:1.75rem', ''));
  expect(await page.evaluate(designContractViolations)).toEqual([
    'role size: heading-section-display actual=16px expected=NaNpx token=',
  ]);
});
