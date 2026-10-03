import { spawnSync } from 'node:child_process';

const [suite, ...args] = process.argv.slice(2);
if (!['visual', 'performance'].includes(suite)) throw new Error('Expected visual or performance suite');
const run = (command, argv) => {
  const result = spawnSync(command, argv, { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
};
// Build before Playwright starts its webServer timer. Release checks can reuse
// an explicitly prepared build, and visual tests can target an existing server.
if (process.env.PLAYWRIGHT_SKIP_BUILD !== '1' &&
    !(suite === 'visual' && process.env.PLAYWRIGHT_USE_EXISTING_SERVER === '1')) run('npm', ['run', 'build']);
run('npx', ['playwright', 'test', ...(suite === 'performance' ? ['--config', 'playwright.performance.config.ts'] : []), ...args]);
