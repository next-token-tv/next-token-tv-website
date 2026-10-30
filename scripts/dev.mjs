import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
const management = ['stop', 'status', 'logs'].includes(args[0]);
const hasOption = name => args.some(arg => arg === name || arg.startsWith(`${name}=`));
const defaults = [
  '--force',
  ...(hasOption('--host') ? [] : ['--host', '127.0.0.1']),
  ...(hasOption('--port') ? [] : ['--port', '4321']),
];
// A production/test shell must not disable Vite HMR or enable catalog memoization.
const child = spawn(process.execPath, [
  fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url)), 'dev',
  ...(management ? args : [...defaults, ...args]),
], { cwd: root, env: { ...process.env, NODE_ENV: 'development' }, stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('error', error => { console.error(error); process.exitCode = 1; });
child.on('exit', (code, signal) => { process.exitCode = code ?? (signal ? 1 : 0); });
