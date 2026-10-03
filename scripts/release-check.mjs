import { spawnSync } from 'node:child_process';
const run = (script, env = {}) => {
  const result = spawnSync('npm', ['run', script], { stdio: 'inherit', env: { ...process.env, ...env, PLAYWRIGHT_USE_EXISTING_SERVER: '0' } });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
};
run('check');
run('build');
run('test:visual', { PLAYWRIGHT_SKIP_BUILD: '1' });
run('test:performance', { PLAYWRIGHT_SKIP_BUILD: '1' });
run('check:release');
