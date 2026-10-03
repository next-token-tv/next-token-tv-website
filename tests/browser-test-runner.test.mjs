import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

for (const [name, suite, env, expected, status] of [
  ['build precedes visual tests and forwards filters', 'visual', {}, ['npm run build', 'npx playwright test --grep card'], 0],
  ['performance reuses an explicit build', 'performance', { PLAYWRIGHT_SKIP_BUILD: '1' }, ['npx playwright test --config playwright.performance.config.ts --grep card'], 0],
  ['visual tests support an existing server', 'visual', { PLAYWRIGHT_USE_EXISTING_SERVER: '1' }, ['npx playwright test --grep card'], 0],
  ['build failure prevents browser tests', 'visual', { MOCK_BUILD_EXIT: '7' }, ['npm run build'], 7],
]) test(name, async t => {
  const root = await mkdtemp(join(tmpdir(), 'browser-runner-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const log = join(root, 'calls');
  for (const command of ['npm', 'npx']) await writeFile(join(root, command), `#!/bin/sh\necho "${command} $*" >> "$MOCK_CALLS"\n${command === 'npm' ? 'exit "${MOCK_BUILD_EXIT:-0}"' : ''}\n`, { mode: 0o755 });
  const result = spawnSync(process.execPath, [resolve(import.meta.dirname, '../scripts/run-browser-tests.mjs'), suite, '--grep', 'card'], { env: { ...process.env, PLAYWRIGHT_SKIP_BUILD: '', PLAYWRIGHT_USE_EXISTING_SERVER: '', MOCK_BUILD_EXIT: '0', ...env, PATH: `${root}:${process.env.PATH}`, MOCK_CALLS: log }, encoding: 'utf8' });
  assert.equal(result.status, status, result.stderr);
  assert.deepEqual((await readFile(log, 'utf8')).trim().split('\n'), expected);
});
