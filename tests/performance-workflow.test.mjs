import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,cp,rm} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {spawnSync} from 'node:child_process';
import {performanceStatus,summarizePerformance} from '../scripts/lib/performance-status.mjs';
import {artifactDigest} from '../scripts/lib/release-artifact.mjs';
import {restoreOgCache,saveOgCache} from '../scripts/lib/og-cache.mjs';

test('performance results belong to exact release artifacts and rollback selects its original release',()=>{
 const a={revision:'a',digest:'1',version:'v1',deployedAt:'2026-10-01'},b={revision:'b',digest:'2',version:'v2',deployedAt:'2026-10-02'};
 const audits=[{revision:'a',digest:'1',status:'passed',completedAt:'2026-10-01'}];
 assert.equal(performanceStatus(b,audits).status,'not-run');
 assert.equal(performanceStatus({...a,digest:'changed'},audits).status,'not-run');
 assert.equal(summarizePerformance([a,b],audits).uncheckedReleases,1);
 assert.equal(summarizePerformance([a,b,{rolledBackAt:'2026-10-03',version:'v1'}],audits).current.status,'passed');
 assert.equal(performanceStatus(a,[...audits,{...a,status:'failed'}]).status,'failed');
 assert.equal(performanceStatus(a,[...audits,{...a,status:'running'}]).status,'running');
});

test('shared OG cache restores across builds and rejects corruption or missing keys',async t=>{
 const root=await mkdtemp(join(tmpdir(),'og-cache-'));t.after(()=>rm(root,{recursive:true,force:true}));
 const cache=join(root,'cache'),source=join(root,'source.png'),destination=join(root,'new-build/card.png');
 await writeFile(source,'rendered-card');await saveOgCache(cache,'key.png',source);
 assert.equal(await restoreOgCache(cache,'key.png',destination),true);
 assert.equal(await readFile(destination,'utf8'),'rendered-card');
 assert.equal(await restoreOgCache(cache,'different-renderer.png',destination),false);
 await writeFile(join(cache,'key.png'),'corrupted');assert.equal(await restoreOgCache(cache,'key.png',destination),false);
 await writeFile(join(cache,'key.png.json'),'broken-json');assert.equal(await restoreOgCache(cache,'key.png',destination),false);
});

test('independent audit records passing, failed and invalid runs without rebuilding or altering a release',async t=>{
 const root=await mkdtemp(join(tmpdir(),'performance-workflow-'));t.after(()=>rm(root,{recursive:true,force:true}));
 const project=resolve(import.meta.dirname,'..'),bundle=join(root,'bundle');
 for(const dir of ['scripts/lib','.releases','bin','bundle/dist','bundle/worker'])await mkdir(join(root,dir),{recursive:true});
 for(const file of ['scripts/performance.mjs','scripts/lib/performance-status.mjs','scripts/lib/release-artifact.mjs'])await cp(join(project,file),join(root,file));
 await writeFile(join(bundle,'dist/index.html'),'release');await writeFile(join(bundle,'worker/index.js'),'worker');await writeFile(join(bundle,'wrangler.jsonc'),'{}');
 const manifest={checks:'passed',revision:'a'.repeat(40),digest:await artifactDigest(bundle)};
 await writeFile(join(bundle,'release.json'),JSON.stringify(manifest));
 await writeFile(join(root,'.releases/history.jsonl'),JSON.stringify({...manifest,bundle,version:'v1',deployedAt:'2026-10-03'})+'\n');
 await writeFile(join(root,'bin/npx'),`#!${process.execPath}
const fs=require('node:fs');
if(process.env.PLAYWRIGHT_SKIP_BUILD!=='1'||process.env.PLAYWRIGHT_USE_EXISTING_SERVER!=='0')process.exit(4);
if(process.argv.slice(2).join(' ') .includes('--grep'))process.exit(5);
const mode=process.env.AUDIT_FIXTURE_CASE;
if(mode==='error')process.exit(2);
fs.writeFileSync(process.env.PLAYWRIGHT_JSON_OUTPUT_FILE,JSON.stringify({stats:{expected:mode==='empty'?0:8,unexpected:mode==='failed'?1:0,skipped:0},errors:[]}));
process.exit(mode==='failed'?1:0);
`,{mode:0o755});
 const invoke=(mode,command='audit')=>spawnSync(process.execPath,[join(root,'scripts/performance.mjs'),command],{encoding:'utf8',env:{...process.env,PATH:join(root,'bin')+':'+process.env.PATH,AUDIT_FIXTURE_CASE:mode,PLAYWRIGHT_USE_EXISTING_SERVER:'1'}});
 for(const [mode,status] of [['passed','passed'],['failed','failed'],['empty','failed'],['error','error']]) {
  const result=invoke(mode);assert.equal(result.status,status==='passed'?0:1,result.stderr);
  const events=(await readFile(join(root,'.releases/performance-history.jsonl'),'utf8')).trim().split('\n').map(JSON.parse);
  assert.equal(events.at(-2).status,'running');assert.equal(events.at(-1).status,status);
  assert.equal(await artifactDigest(bundle),manifest.digest);
 }
 assert.equal(invoke('','report').status,0);
 const report=JSON.parse(await readFile(join(root,'reports/maintenance/performance.json'),'utf8'));
 assert.equal(report.current.status,'error');assert.equal(report.lastPassed.status,'passed');
 // Changing the artifact must reject a later audit before it can record a pass.
 await writeFile(join(bundle,'dist/index.html'),'changed');
 assert.match(invoke('passed').stderr,/not a verified/);
});

test('publishing records missing or failed performance audits without blocking the release',async t=>{
 const root=await mkdtemp(join(tmpdir(),'publish-performance-'));t.after(()=>rm(root,{recursive:true,force:true}));
 const project=resolve(import.meta.dirname,'..'),bundle=join(root,'bundle');
 for(const dir of ['scripts/lib','.releases','bin','bundle/dist','bundle/worker'])await mkdir(join(root,dir),{recursive:true});
 for(const file of ['scripts/release.mjs','scripts/lib/performance-status.mjs','scripts/lib/release-artifact.mjs'])await cp(join(project,file),join(root,file));
 await writeFile(join(bundle,'dist/index.html'),'release');await writeFile(join(bundle,'worker/index.js'),'worker');await writeFile(join(bundle,'wrangler.jsonc'),'{}');
 const manifest={schemaVersion:1,checks:'passed',revision:'b'.repeat(40),digest:await artifactDigest(bundle)};
 await writeFile(join(bundle,'release.json'),JSON.stringify(manifest));
 await writeFile(join(root,'bin/npx'),'#!/bin/sh\necho "Current Version ID: 12345678-1234-1234-1234-123456789abc"\n',{mode:0o755});
 const invoke=()=>spawnSync(process.execPath,[join(root,'scripts/release.mjs'),'publish',bundle],{encoding:'utf8',env:{...process.env,PATH:join(root,'bin')+':'+process.env.PATH}});
 assert.equal(invoke().status,0);
 let history=(await readFile(join(root,'.releases/history.jsonl'),'utf8')).trim().split('\n').map(JSON.parse);
 assert.equal(history.at(-1).performance.status,'not-run');
 await writeFile(join(root,'.releases/performance-history.jsonl'),JSON.stringify({...manifest,status:'failed',completedAt:'2026-10-03',auditId:'failed-audit'})+'\n');
 assert.equal(invoke().status,0);
 history=(await readFile(join(root,'.releases/history.jsonl'),'utf8')).trim().split('\n').map(JSON.parse);
 assert.equal(history.at(-1).performance.status,'failed');
});

test('bounded rendering overlaps tasks but preserves manifest order',async()=>{
 const {mapConcurrent}=await import('../scripts/lib/concurrent-map.mjs');
 let active=0,peak=0;
 const result=await mapConcurrent([0,1,2,3,4,5],3,async item=>{
  active++;peak=Math.max(peak,active);
  await new Promise(resolve=>setTimeout(resolve,item===0?20:1));
  active--;return `card-${item}`;
 });
 assert.equal(peak,3);assert.equal(active,0);
 assert.deepEqual(result,['card-0','card-1','card-2','card-3','card-4','card-5']);
});

test('render failure stops scheduling and drains open tasks before rejection',async()=>{
 const {mapConcurrent}=await import('../scripts/lib/concurrent-map.mjs');
 const started=[];let active=0;
 await assert.rejects(mapConcurrent([0,1,2,3,4],2,async item=>{
  started.push(item);active++;
  try {
   if(item===0)throw new Error('render failed');
   await new Promise(resolve=>setTimeout(resolve,20));
  }finally{active--;}
 }),/render failed/);
 assert.deepEqual(started,[0,1]);assert.equal(active,0);
 for(const limit of [0,-1,1.5,9,NaN])await assert.rejects(mapConcurrent([],limit,async()=>{}),/Concurrency/);
});
