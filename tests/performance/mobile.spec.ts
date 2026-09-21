import { expect, test } from '@playwright/test';
import { writeFile } from 'node:fs/promises';

// Local regression budgets, not Lighthouse scores or field Core Web Vitals.
const routes = ['/', '/weekly/002', '/weekly/002/transcript', '/weekly/003', '/weekly/003/transcript', '/wiki/brands'];
const median = (values: number[]) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];

for (const path of routes) test(`mobile cold-load budget: ${path}`, async ({ browser, baseURL }, testInfo) => {
  const samples: { lcp: number; cls: number; largestImageBytes: number }[] = [];
  for (let run = 0; run < 3; run++) {
    const context = await browser.newContext({
      baseURL, viewport: { width: 390, height: 844 }, deviceScaleFactor: 2,
      isMobile: true, hasTouch: true, locale: 'zh-CN', reducedMotion: 'reduce',
    });
    try {
      const page = await context.newPage();
      const cdp = await context.newCDPSession(page);
      await cdp.send('Network.enable');
      await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
      await cdp.send('Network.emulateNetworkConditions', {
        offline: false, latency: 150, downloadThroughput: 1_600_000 / 8,
        uploadThroughput: 750_000 / 8, connectionType: 'cellular4g',
      });
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
      await page.addInitScript(() => {
        const metrics = { lcp: 0, cls: 0 };
        Object.assign(window, { __performanceBudget: metrics });
        new PerformanceObserver(list => {
          for (const entry of list.getEntries()) metrics.lcp = entry.startTime;
        }).observe({ type: 'largest-contentful-paint', buffered: true });
        let windowStart = 0, previous = 0, windowScore = 0;
        new PerformanceObserver(list => {
          for (const entry of list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[]) {
            if (entry.hadRecentInput) continue;
            if (entry.startTime - previous > 1000 || entry.startTime - windowStart > 5000) {
              windowStart = entry.startTime;
              windowScore = 0;
            }
            previous = entry.startTime;
            windowScore += entry.value;
            metrics.cls = Math.max(metrics.cls, windowScore);
          }
        }).observe({ type: 'layout-shift', buffered: true });
      });
      const response = await page.goto(path, { waitUntil: 'load' });
      expect(response?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      // Fixed observation window includes delayed initial rendering and font swaps.
      await page.waitForTimeout(3000);
      const sample = await page.evaluate(() => {
        const metrics = (window as Window & { __performanceBudget?: { lcp: number; cls: number } }).__performanceBudget!;
        const images = (performance.getEntriesByType('resource') as PerformanceResourceTiming[])
          .filter(entry => entry.initiatorType === 'img');
        return { ...metrics, largestImageBytes: Math.max(0, ...images.map(entry => entry.encodedBodySize)) };
      });
      expect(sample.lcp, 'LCP must be observed, not silently reported as zero').toBeGreaterThan(0);
      expect(sample.largestImageBytes, 'image byte measurements must be available').toBeGreaterThan(0);
      samples.push(sample);
    } finally { await context.close(); }
  }
  const reportPath = testInfo.outputPath('mobile-performance.json');
  await writeFile(reportPath, JSON.stringify({ path, samples }, null, 2));
  await testInfo.attach('mobile-performance.json', { path: reportPath, contentType: 'application/json' });
  console.log(path, { medianLcp: median(samples.map(s => s.lcp)), maxCls: Math.max(...samples.map(s => s.cls)) });
  expect(median(samples.map(s => s.lcp)), 'median local mobile LCP').toBeLessThanOrEqual(2500);
  expect(Math.max(...samples.map(s => s.cls)), 'initial-load CLS').toBeLessThanOrEqual(0.1);
  expect(Math.max(...samples.map(s => s.largestImageBytes)), 'largest initially loaded image').toBeLessThanOrEqual(200 * 1024);
});
