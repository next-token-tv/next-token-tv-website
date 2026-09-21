import { defineConfig } from '@playwright/test';

const port = Number(process.env.PERFORMANCE_PORT ?? 4178);
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: './tests/performance',
  workers: 1,
  retries: 0,
  timeout: 90_000,
  reporter: 'line',
  outputDir: 'test-results/performance',
  use: { baseURL, channel: 'chrome' },
  webServer: {
    command: `npm run build && npx wrangler dev --local --ip 127.0.0.1 --port ${port}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
