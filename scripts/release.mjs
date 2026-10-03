import { spawnSync } from 'node:child_process';
import { readFile, writeFile, mkdir, appendFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { artifactDigest } from './lib/release-artifact.mjs';

const root = resolve(import.meta.dirname, '..');
const [command, argument] = process.argv.slice(2);
const run = (cmd, args, cwd = root, capture = false) => {
  const result = spawnSync(cmd, args, { cwd, encoding: 'utf8', stdio: capture ? 'pipe' : 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${cmd} failed (${result.status}): ${capture ? result.stderr : 'see output'}`);
  return result.stdout?.trim();
};
const directory = resolve(root, '.releases');
await mkdir(directory, { recursive: true });
if (command === 'prepare' || command === 'deploy') {
  const revision = run('git', ['rev-parse', '--verify', `${argument ?? 'HEAD'}^{commit}`], root, true);
  const bundle = resolve(directory, `${revision.slice(0, 12)}-${Date.now()}`);
  await mkdir(bundle);
  const archive = resolve(bundle, 'source.tar');
  run('git', ['archive', revision, '-o', archive]);
  run('tar', ['-xf', archive, '-C', bundle]);
  run('npm', ['ci'], bundle);
  run('npm', ['run', 'release:check'], bundle);
  const manifest = { schemaVersion: 1, revision, verifiedAt: new Date().toISOString(), digest: await artifactDigest(bundle), checks: 'passed' };
  await writeFile(resolve(bundle, 'release.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Verified release: ${bundle}\nPublish: npm run release:publish -- ${bundle}`);
  if (command === 'deploy') run(process.execPath, [resolve(root, 'scripts/release.mjs'), 'publish', bundle]);
} else if (command === 'publish') {
  if (!argument) throw new Error('Usage: npm run release:publish -- <verified-bundle>');
  const bundle = resolve(argument);
  const manifest = JSON.parse(await readFile(resolve(bundle, 'release.json'), 'utf8'));
  if (manifest.schemaVersion !== 1 || manifest.checks !== 'passed' || !/^[a-f0-9]{40}$/.test(manifest.revision)) throw new Error('Invalid release manifest');
  if (await artifactDigest(bundle) !== manifest.digest) throw new Error('Release artifact changed after checks; prepare again');
  const output = run('npx', ['wrangler', 'deploy'], bundle, true);
  console.log(output);
  const version = output.match(/Current Version ID:\s*([a-f0-9-]+)/)?.[1];
  await appendFile(resolve(directory, 'history.jsonl'), JSON.stringify({ ...manifest, bundle, deployedAt: new Date().toISOString(), version: version ?? null }) + '\n');
  if (!version) throw new Error('Deployment command succeeded but version could not be parsed; inspect Cloudflare before retrying');
} else if (command === 'rollback') {
  if (!/^[a-f0-9-]{36}$/.test(argument ?? '')) throw new Error('Usage: npm run release:rollback -- <Cloudflare-version-id>');
  run('npx', ['wrangler', 'rollback', argument]);
  await appendFile(resolve(directory, 'history.jsonl'), JSON.stringify({ rolledBackAt: new Date().toISOString(), version: argument }) + '\n');
} else throw new Error('Expected prepare, publish, deploy or rollback');
