import {readFile, writeFile, readdir, rm, lstat, realpath} from 'node:fs/promises';
import {resolve, basename} from 'node:path';
import {readHistory} from './performance-status.mjs';

// All release CLI operations share this lock, including cleanup.
export async function withReleaseLock(directory, action) {
  const lock = resolve(directory, '.release-lock');
  for (;;) {
    try { await writeFile(lock, String(process.pid), {flag: 'wx'}); break; }
    catch (error) {
      if (error.code !== 'EEXIST') throw error;
      let owner;
      try { owner = Number(await readFile(lock, 'utf8')); }
      catch (readError) { if (readError.code === 'ENOENT') continue; throw readError; }
      if (!Number.isSafeInteger(owner) || owner <= 0) throw new Error('Release lock is incomplete; retry later');
      try { process.kill(owner, 0); }
      catch (probeError) {
        if (probeError.code === 'ESRCH') throw new Error(`Stale release lock from exited PID ${owner}; remove ${lock} before retrying`);
        throw probeError;
      }
      throw new Error(`Release operation already running (PID ${owner})`);
    }
  }
  try { return await action(); }
  finally { await rm(lock, {force: true}); }
}

export async function cleanReleaseBundles(directory) {
  const root = await realpath(directory);
  // Parse the entire history before deleting anything; corrupt history fails closed.
  const history = await readHistory(resolve(root, 'history.jsonl'));
  const deployments = history.filter(row => row.deployedAt && row.version && row.bundle);
  if (!deployments.length) return [];
  const keep = new Set();
  for (const row of [...deployments].reverse()) {
    if (await realpath(resolve(row.bundle, '..')) !== root) throw new Error('Release history points outside release directory');
    keep.add(basename(row.bundle));
    if (keep.size === 2) break;
  }
  const last = history.at(-1);
  if (last?.rolledBackAt) {
    const target = deployments.findLast(row => row.version === last.version);
    if (!target) throw new Error('Unknown rollback version; skipping cleanup');
    keep.add(basename(target.bundle));
  }
  const bundles = (await readdir(root, {withFileTypes: true}))
    .filter(entry => entry.isDirectory() && /^[a-f0-9]{12}-\d{13}$/.test(entry.name))
    .map(entry => entry.name);
  // Keep the newest unfinished/unpublished attempt available for resume or publish.
  const published = new Set(deployments.map(row => basename(row.bundle)));
  const pending = bundles.filter(name => !published.has(name)).sort((a,b) => Number(b.slice(13))-Number(a.slice(13)));
  if (pending[0]) keep.add(pending[0]);
  const removed = [];
  for (const name of bundles) {
    if (keep.has(name)) continue;
    const path = resolve(root, name);
    if (!(await lstat(path)).isDirectory()) throw new Error(`Bundle changed during cleanup: ${name}`);
    await rm(path, {recursive: true});
    removed.push(name);
  }
  return removed;
}
