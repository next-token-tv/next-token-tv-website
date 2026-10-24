import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, mkdir, writeFile, readFile, readdir, rm, symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {cleanReleaseBundles, withReleaseLock} from '../scripts/lib/release-retention.mjs';

const name = n => `${String(n).padStart(12,'a')}-${1700000000000+n}`;
async function fixture(fn) {
 const root=await mkdtemp(join(tmpdir(),'release-retention-'));
 try {await fn(root);} finally {await rm(root,{recursive:true,force:true});}
}
test('cleanup retains two distinct deployments, latest pending bundle and unrelated reports',()=>fixture(async root=>{
 for(let i=1;i<=6;i++)await mkdir(join(root,name(i)));
 await mkdir(join(root,'performance'));
 await symlink(tmpdir(),join(root,name(7)));
 const rows=[1,2,3,3].map(i=>({bundle:join(root,name(i)),version:`v${i}`,deployedAt:'today'}));
 const history=rows.map(row=>JSON.stringify(row)).join('\n');
 await writeFile(join(root,'history.jsonl'),history);
 await writeFile(join(root,'performance-history.jsonl'),'audit');
 assert.deepEqual((await cleanReleaseBundles(root)).sort(),[name(1),name(4),name(5)].sort());
 for(const item of [name(2),name(3),name(6),name(7),'performance','performance-history.jsonl'])assert.ok((await readdir(root)).includes(item));
 assert.equal(await readFile(join(root,'history.jsonl'),'utf8'),history);
 assert.deepEqual(await cleanReleaseBundles(root),[]);
}));
test('rollback target is retained and malformed history prevents deletion',()=>fixture(async root=>{
 for(let i=1;i<=4;i++)await mkdir(join(root,name(i)));
 const rows=[1,2,3].map(i=>({bundle:join(root,name(i)),version:`v${i}`,deployedAt:'today'}));
 rows.push({rolledBackAt:'today',version:'v1'});
 await writeFile(join(root,'history.jsonl'),rows.map(row=>JSON.stringify(row)).join('\n'));
 assert.deepEqual(await cleanReleaseBundles(root),[]);
 await writeFile(join(root,'history.jsonl'),'invalid');
 await assert.rejects(cleanReleaseBundles(root));
 assert.ok((await readdir(root)).includes(name(1)));
}));
test('release lock rejects concurrent operations and is removed after failures',()=>fixture(async root=>{
 await assert.rejects(withReleaseLock(root,async()=>{
  await assert.rejects(withReleaseLock(root,async()=>{}),/already running/);
  throw new Error('build failed');
 }),/build failed/);
 await withReleaseLock(root,async()=>{});
 assert.ok(!(await readdir(root)).includes('.release-lock'));
}));

test('publishing cleans only after confirmed deployment; failed publish retains every bundle',()=>fixture(async root=>{
 const {cp}=await import('node:fs/promises');
 const {spawnSync}=await import('node:child_process');
 const {artifactDigest}=await import('../scripts/lib/release-artifact.mjs');
 for(const dir of ['scripts/lib','bin','.releases'])await mkdir(join(root,dir),{recursive:true});
 for(const file of ['release.mjs','lib/release-artifact.mjs','lib/release-process.mjs','lib/release-retention.mjs','lib/performance-status.mjs'])await cp(new URL('../scripts/'+file,import.meta.url),join(root,'scripts',file));
 const releases=join(root,'.releases');
 for(let i=1;i<=4;i++)await mkdir(join(releases,name(i)));
 await writeFile(join(releases,'history.jsonl'),[1,2].map(i=>JSON.stringify({bundle:join(releases,name(i)),version:`v${i}`,deployedAt:'today'})).join('\n')+'\n');
 const bundle=join(releases,name(4));
 for(const dir of ['dist','worker'])await mkdir(join(bundle,dir));
 await writeFile(join(bundle,'dist/index.html'),'page');
 await writeFile(join(bundle,'worker/index.js'),'worker');
 await writeFile(join(bundle,'wrangler.jsonc'),'{}');
 await writeFile(join(bundle,'release.json'),JSON.stringify({schemaVersion:1,revision:'a'.repeat(40),checks:'passed',digest:await artifactDigest(bundle)}));
 const executable=join(root,'bin/npx');
 await writeFile(executable,'#!/bin/sh\nexit 1\n',{mode:0o755});
 const invoke=()=>spawnSync(process.execPath,[join(root,'scripts/release.mjs'),'publish',bundle],{encoding:'utf8',env:{...process.env,PATH:join(root,'bin')+':'+process.env.PATH}});
 assert.notEqual(invoke().status,0);
 assert.ok((await readdir(releases)).includes(name(1)));
 const failedAttempt=JSON.parse((await readFile(join(releases,'publish-attempts.jsonl'),'utf8')).trim());
 assert.equal(failedAttempt.status,'unconfirmed');
 assert.equal(failedAttempt.exitCode,1);
 assert.equal((await readFile(join(releases,'history.jsonl'),'utf8')).trim().split('\n').length,2);
 await writeFile(executable,'#!/bin/sh\necho "Current Version ID: 12345678-1234-1234-1234-123456789abc"\n',{mode:0o755});
 const result=invoke();assert.equal(result.status,0,result.stderr);
 const attempts=(await readFile(join(releases,'publish-attempts.jsonl'),'utf8')).trim().split('\n').map(JSON.parse);
 assert.equal(attempts.at(-1).status,'passed');
 assert.equal(typeof attempts.at(-1).seconds,'number');
 assert.equal(attempts.at(-1).revision,'a'.repeat(40));
 assert.ok(!(await readdir(releases)).includes(name(1)));
 assert.ok((await readdir(releases)).includes(name(3)));
}));
