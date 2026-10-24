import {spawn} from 'node:child_process';

// Stream both channels immediately; retain only a bounded tail for version parsing.
export function streamCommand(command, args, {cwd, env = process.env, timeoutMs = 600_000, graceMs = 5_000, stdout = process.stdout, stderr = process.stderr} = {}) {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) throw new Error('Command timeout must be a positive number');
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const child = spawn(command, args, {cwd, env, stdio: ['ignore', 'pipe', 'pipe'], detached: process.platform !== 'win32'});
    let output = '', timedOut = false, interrupted = false, forceTimer;
    const signalGroup = signal => {
      try { process.platform === 'win32' ? child.kill(signal) : process.kill(-child.pid, signal); }
      catch (error) { if (error.code !== 'ESRCH') throw error; }
    };
    const stop = () => {
      signalGroup('SIGTERM');
      forceTimer ??= setTimeout(() => signalGroup('SIGKILL'), graceMs);
    };
    const interrupt = () => { interrupted = true; stop(); };
    process.once('SIGINT', interrupt);
    process.once('SIGTERM', interrupt);
    const timer = setTimeout(() => { timedOut = true; stop(); }, timeoutMs);
    const capture = target => chunk => {
      target.write(chunk);
      output = (output + chunk.toString()).slice(-2_000_000);
    };
    child.stdout.on('data', capture(stdout));
    child.stderr.on('data', capture(stderr));
    const cleanup = () => {
      clearTimeout(timer); clearTimeout(forceTimer);
      process.removeListener('SIGINT', interrupt); process.removeListener('SIGTERM', interrupt);
    };
    child.on('error', error => {cleanup(); reject(error);});
    child.on('close', (code, signal) => {
      cleanup();
      resolve({code, signal, output, timedOut, interrupted, seconds: (Date.now() - started) / 1000});
    });
  });
}
