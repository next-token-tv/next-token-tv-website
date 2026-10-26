import { defineConfig } from "@playwright/test";

const port = Number(process.env.PLAYWRIGHT_PORT ?? 4176);
const baseURL = `http://127.0.0.1:${port}`;
const fixturePort = Number(process.env.PLAYWRIGHT_FIXTURE_PORT ?? 4177);

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  maxFailures: 5,
  workers: Number(process.env.PLAYWRIGHT_WORKERS ?? 2),
  reporter: [["line"], ["html", { open: "never" }]],
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      maxDiffPixelRatio: 0.01,
    },
  },
  use: {
    baseURL,
    channel: "chrome",
    colorScheme: "light",
    locale: "zh-CN",
    reducedMotion: "reduce",
  },
  webServer: [...(process.env.PLAYWRIGHT_USE_EXISTING_SERVER === "1" ? [] : [{
    command: `npx wrangler dev --local --ip 127.0.0.1 --port ${port}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
  }]), {
    command: 'node scripts/run-visual-fixtures.mjs',
    url: `http://127.0.0.1:${fixturePort}/__visual/zh-Hans/home/with-preview`,
    reuseExistingServer: false,
    timeout: 120_000,
  }],
});
