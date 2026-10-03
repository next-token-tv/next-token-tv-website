import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,chmod,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {releaseInputDigest,validateCheckpoint} from '../scripts/lib/release-checkpoint.mjs';

test('resume reuses passed build, reruns failed browser gate, and rejects changed inputs or artifacts',async()=>{
 const root=await mkdtemp(join(tmpdir(),'release-resume-'));
 try {
  for(const dir of ['dist','worker','test-results','node_modules/example'])await mkdir(join(root,dir),{recursive:true});
  for(const [file,content] of [['dist/index.html','page'],['worker/index.js','worker'],['wrangler.jsonc','{}'],['source.txt','source'],['node_modules/example/index.js','dependency']])await writeFile(join(root,file),content);
  await writeFile(join(root,'npm'),'#!/bin/sh\nprintf "%s\\n" "$2" >> test-results/calls\nif [ "$2" = test:visual ] && [ ! -f test-results/retry ]; then touch test-results/retry; exit 1; fi\n');
  await chmod(join(root,'npm'),0o755);
  const invoke=(...args)=>spawnSync(process.execPath,[join(import.meta.dirname,'../scripts/release-check.mjs'),...args],{cwd:root,encoding:'utf8',env:{...process.env,PATH:root+':'+process.env.PATH}});
  assert.equal(invoke().status,1);
  const checkpoint=JSON.parse(await readFile(join(root,'reports/maintenance/release-check.json'),'utf8'));
  assert.equal(checkpoint.status,'failed');assert.equal(checkpoint.stages.at(-1).name,'test:visual');
  const resumed=invoke('--resume');assert.equal(resumed.status,0,resumed.stderr);
  assert.deepEqual((await readFile(join(root,'test-results/calls'),'utf8')).trim().split('\n'),['check','build:assets','test:visual','test:visual','check:release']);
  for(const file of ['source.txt','node_modules/example/index.js','dist/index.html']) {
   const original=await readFile(join(root,file));await writeFile(join(root,file),'changed');
   const rejected=invoke('--resume');assert.notEqual(rejected.status,0);assert.match(rejected.stderr,/changed/);
   await writeFile(join(root,file),original);
  }
  const before=await releaseInputDigest(root);await writeFile(join(root,'test-results/log'),'ignored');assert.equal(await releaseInputDigest(root),before);
  assert.equal(invoke('--resume').status,0);
  assert.equal((await readFile(join(root,'test-results/calls'),'utf8')).trim().split('\n').at(-1),'check:release');
 }finally{await rm(root,{recursive:true,force:true});}
});
test('checkpoint rejects missing and out-of-order stages',()=>{
 for(const stages of [[{name:'test:visual',status:'passed'}],[{name:'check',status:'failed'},{name:'build:assets',status:'passed'}]])assert.throws(()=>validateCheckpoint({schemaVersion:1,inputDigest:'same',stages},'same',null),/stage order/);
});

test('checkpoint includes public build variables and distinguishes unset from empty without storing values',async()=>{
 const root=await mkdtemp(join(tmpdir(),'release-build-env-'));
 try {
  await writeFile(join(root,'source.txt'),'source');
  const baseline=await releaseInputDigest(root,{});
  for(const key of ['PUBLIC_GOOGLE_ANALYTICS_ID','PUBLIC_APPLE_MAPS_EMBED_TOKEN','PUBLIC_FUTURE_SETTING','NODE_ENV']) {
   const first=await releaseInputDigest(root,{[key]:'first'});
   assert.notEqual(first,baseline);
   assert.notEqual(await releaseInputDigest(root,{[key]:'second'}),first);
   assert.notEqual(await releaseInputDigest(root,{[key]:''}),baseline);
   assert.throws(()=>validateCheckpoint({schemaVersion:1,inputDigest:first,stages:[]},baseline,null),/inputs changed/);
  }
  assert.equal(await releaseInputDigest(root,{NEXTTOKEN_OG_CONCURRENCY:'8'}),baseline);
  assert.equal(await releaseInputDigest(root,{PUBLIC_B:'b',PUBLIC_A:'a'}),await releaseInputDigest(root,{PUBLIC_A:'a',PUBLIC_B:'b'}));
 }finally{await rm(root,{recursive:true,force:true});}
});

test('release CLI accepts complete legacy preparations but rejects legacy resume and malformed modern reports',async()=>{
 const {cp}=await import('node:fs/promises');
 const root=await mkdtemp(join(tmpdir(),'release-report-'));
 try {
  for(const dir of ['scripts/lib','bin'])await mkdir(join(root,dir),{recursive:true});
  for(const file of ['scripts/release.mjs','scripts/lib/release-artifact.mjs','scripts/lib/performance-status.mjs'])await cp(join(import.meta.dirname,'..',file),join(root,file));
  await writeFile(join(root,'bin/git'),'#!/bin/sh\nif [ "$1" = rev-parse ]; then echo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa; fi\n',{mode:0o755});
  await writeFile(join(root,'bin/tar'),'#!/bin/sh\nexit 0\n',{mode:0o755});
  await writeFile(join(root,'bin/npm'),`#!${process.execPath}
const fs=require('node:fs');
(async()=>{
 if(process.argv[2]==='ci') {
  for(const dir of ['dist','worker','reports/maintenance'])fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync('dist/index.html','page');fs.writeFileSync('worker/index.js','worker');fs.writeFileSync('wrangler.jsonc','{}');return;
 }
 const stages=['check','build:assets','test:visual','check:release'].map(name=>({name,status:'passed'}));
 const report={status:'passed',stages};
 const mode=process.env.REPORT_FIXTURE_MODE;
 if(mode==='failed')stages[2].status='failed';
 if(mode==='missing')stages.pop();
 if(mode==='duplicate')stages[2].name='check';
 if(mode.startsWith('modern')) {
  report.schemaVersion=1;
  if(mode!=='modern-missing')report.artifactDigest=await (await import(${JSON.stringify(new URL('../scripts/lib/release-artifact.mjs',import.meta.url).href)})).artifactDigest(process.cwd());
  if(mode==='modern-tampered')fs.writeFileSync('dist/index.html','changed');
 }
 fs.writeFileSync('reports/maintenance/release-check.json',JSON.stringify(report));
})();
`,{mode:0o755});
  const invoke=(mode,...args)=>spawnSync(process.execPath,[join(root,'scripts/release.mjs'),...args],{encoding:'utf8',env:{...process.env,PATH:join(root,'bin')+':'+process.env.PATH,REPORT_FIXTURE_MODE:mode}});
  for(const mode of ['legacy','modern','modern-missing','modern-tampered','failed','missing','duplicate']) {
   const result=invoke(mode,'prepare','HEAD');
   const success=['legacy','modern'].includes(mode);
   assert.equal(result.status===0,success,result.stderr);
   if(success) {
    const bundle=result.stdout.match(/Verified release: (.+)/)[1];
    const manifest=JSON.parse(await readFile(join(bundle,'release.json'),'utf8'));
    assert.equal(manifest.checks,'passed');assert.match(manifest.digest,/^[a-f0-9]{64}$/);
    if(mode==='legacy') {
     const resumed=invoke(mode,'resume',bundle);
     assert.notEqual(resumed.status,0);assert.match(resumed.stderr,/does not support checkpoints/);
     assert.match(resumed.stderr,/release:prepare/);assert.doesNotMatch(resumed.stderr,/Retry unchanged bundle/);
    }
   }
  }
 }finally{await rm(root,{recursive:true,force:true});}
});


test('generated Astro and Miniflare caches do not change release inputs, installed code does', async () => {
  const root = await mkdtemp(join(tmpdir(), 'release-generated-cache-'));
  try {
    await mkdir(join(root, 'node_modules/example'), {recursive: true});
    await writeFile(join(root, 'node_modules/example/index.js'), 'original');
    const baseline = await releaseInputDigest(root, {});
    for (const cache of ['.astro', '.mf']) {
      await mkdir(join(root, 'node_modules', cache));
      await writeFile(join(root, 'node_modules', cache, 'cache.json'), 'generated');
    }
    assert.equal(await releaseInputDigest(root, {}), baseline);
    await writeFile(join(root, 'node_modules/example/index.js'), 'changed');
    assert.notEqual(await releaseInputDigest(root, {}), baseline);
  } finally { await rm(root, {recursive: true, force: true}); }
});
