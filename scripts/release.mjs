import { spawnSync } from 'node:child_process';
import { readFile, writeFile, mkdir, appendFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { artifactDigest } from './lib/release-artifact.mjs';
import {readHistory,performanceStatus} from './lib/performance-status.mjs';

const root = resolve(import.meta.dirname, '..');
const preparationStarted=Date.now(),timings=[];
const [command, argument] = process.argv.slice(2);
const run = (cmd, args, cwd = root, capture = false) => {
  const started=Date.now();
  const result = spawnSync(cmd, args, { cwd, encoding: 'utf8', stdio: capture ? 'pipe' : 'inherit',env:{...process.env,NEXTTOKEN_OG_CACHE_DIR:resolve(root,'.cache/og')} });
  timings.push({command:[cmd,...args].join(' '),seconds:(Date.now()-started)/1000,status:result.status===0?'passed':'failed'});
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
  const gates=JSON.parse(await readFile(resolve(bundle,'reports/maintenance/release-check.json'),'utf8'));
  const manifest = { schemaVersion: 1, revision, verifiedAt: new Date().toISOString(), digest: await artifactDigest(bundle), checks: 'passed',performance:{status:'not-run',policy:'separate-audit'},timing:{seconds:(Date.now()-preparationStarted)/1000,commands:timings,stages:gates.stages} };
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
  const performance=performanceStatus(manifest,await readHistory(resolve(directory,'performance-history.jsonl')));
  await appendFile(resolve(directory, 'history.jsonl'), JSON.stringify({ ...manifest, performance, bundle, deployedAt: new Date().toISOString(), version: version ?? null }) + '\n');
  console.log(`Mobile performance for this release: ${performance.status}`);
  if (!version) throw new Error('Deployment command succeeded but version could not be parsed; inspect Cloudflare before retrying');
} else if (command === 'rollback') {
  if (!/^[a-f0-9-]{36}$/.test(argument ?? '')) throw new Error('Usage: npm run release:rollback -- <Cloudflare-version-id>');
  run('npx', ['wrangler', 'rollback', argument]);
  await appendFile(resolve(directory, 'history.jsonl'), JSON.stringify({ rolledBackAt: new Date().toISOString(), version: argument }) + '\n');
} else throw new Error('Expected prepare, publish, deploy or rollback');
