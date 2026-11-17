import { expect, type Page } from '@playwright/test';

export function recordDeepLinkAppearance(targetId: string) {
  document.addEventListener('DOMContentLoaded', () => {
    if (location.hash !== `#${targetId}`) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    // The zero threshold treats edge contact as intersection with no visible area.
    const threshold = 0.001;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.find(entry => entry.intersectionRatio >= threshold);
      if (!visible) return;
      observer.disconnect();
      target.setAttribute('data-audit-anchor-ms', String(visible.time));
    }, { threshold });
    observer.observe(target);
  }, { once: true });
}

export async function measureTranscriptInteractions(page: Page, path: string) {
  const input = page.getByRole('searchbox');
  const results = page.locator('[data-search-results]');
  await expect(input).toBeVisible();
  await input.evaluate(el => {
    const results = document.querySelector('[data-search-results]')!;
    el.addEventListener('input', event => {
      const observer = new MutationObserver(() => {
        if (!results.querySelector('a')) return;
        observer.disconnect();
        // The second animation frame follows a rendering opportunity for the results.
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.setAttribute('data-audit-search-ms', String(performance.now() - event.timeStamp));
        }));
      });
      observer.observe(results, { childList: true });
    }, { capture: true, once: true });
  });
  await input.fill('Agent');
  await expect(results.locator('a').first()).toBeVisible();
  await expect(input).toHaveAttribute('data-audit-search-ms', /^\d/);
  const firstSearchResultMs = Number(await input.getAttribute('data-audit-search-ms'));

  const id = await page.locator('.transcript-quote-paragraph').last().getAttribute('id');
  expect(id).toMatch(/^quote-/);
  await page.addInitScript(recordDeepLinkAppearance, id!);
  // A query string forces a fresh navigation so this measures the cold deep link.
  const response = await page.goto(`${path}?performance=deep-link#${id}`);
  expect(response?.status()).toBe(200);
  const target = page.locator(`#${id}`);
  await expect(target).toBeInViewport();
  await expect(target).toHaveAttribute('data-audit-anchor-ms', /^\d/);
  const deepLinkVisibleMs = Number(await target.getAttribute('data-audit-anchor-ms'));
  return { firstSearchResultMs, deepLinkVisibleMs };
}
