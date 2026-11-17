import { defineConfig, devices } from '@playwright/test';

const port = Number(process.env.WEBKIT_PORT ?? 4179);
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: './tests/webkit',
  outputDir: 'test-results/webkit',
  workers: 1,
  reporter: 'line',
  use: { ...devices['iPhone 15'], baseURL, locale: 'zh-CN', reducedMotion: 'reduce' },
  webServer: {
    command: `npx wrangler dev --local --ip 127.0.0.1 --port ${port}`,
    url: baseURL,
    timeout: 120_000,
  },
});
