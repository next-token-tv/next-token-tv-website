import {spawnSync} from 'node:child_process';
import {mkdir,writeFile,readFile,rename} from 'node:fs/promises';
import {artifactDigest} from './lib/release-artifact.mjs';
import {releaseInputDigest,validateCheckpoint} from './lib/release-checkpoint.mjs';
const started=Date.now(),resume=process.argv.includes('--resume');
const reportPath='reports/maintenance/release-check.json';
const inputDigest=await releaseInputDigest(process.cwd());
let stages=[],attempts=[],builtDigest=null,exitCode=0;
if(resume) {
  const previous=JSON.parse(await readFile(reportPath,'utf8'));
  const built=previous.stages?.some(s=>s.name==='build:assets'&&s.status==='passed');
  validateCheckpoint(previous,inputDigest,built?await artifactDigest(process.cwd()):null);
  stages=previous.stages;attempts=previous.attempts??[];builtDigest=previous.artifactDigest;
}
async function save(status) {
  await mkdir('reports/maintenance',{recursive:true});
  await writeFile(reportPath+'.tmp',JSON.stringify({schemaVersion:1,status,inputDigest,artifactDigest:builtDigest,seconds:(Date.now()-started)/1000,stages,attempts,performance:{status:'not-run',policy:'separate-audit'}},null,2)+'\n');
  await rename(reportPath+'.tmp',reportPath);
}
async function run(name,env={}) {
  const before=Date.now();
  const result=spawnSync('npm',['run',name],{stdio:'inherit',env:{...process.env,...env,PLAYWRIGHT_USE_EXISTING_SERVER:'0'}});
  const stage={name,seconds:(Date.now()-before)/1000,status:result.status===0?'passed':'failed'};
  stages=stages.filter(s=>s.name!==name);stages.push(stage);attempts.push({...stage,at:new Date().toISOString()});
  console.log(`[timing] ${name}: ${stage.seconds.toFixed(2)}s`);
  if(name==='build:assets'&&result.status===0)builtDigest=await artifactDigest(process.cwd());
  await save('running');
  if(result.error)throw result.error;
  if(result.status!==0){exitCode=result.status??1;throw new Error(`${name} failed`);}
}
try {
  await save('running');
  for(const name of ['check','build:assets','test:visual','check:release']) {
    // Output/date audits run again even after an interrupted successful audit.
    if(resume && name!=='check:release' && stages.some(s=>s.name===name && s.status==='passed'))continue;
    await run(name,name==='test:visual'?{PLAYWRIGHT_SKIP_BUILD:'1'}:{});
  }
  if(await releaseInputDigest(process.cwd())!==inputDigest)throw new Error('Release inputs changed during checks; prepare a new bundle');
  if(await artifactDigest(process.cwd())!==builtDigest)throw new Error('Release artifact changed during checks; prepare a new bundle');
}catch(error){console.error(error.message);exitCode ||= 1;}
await save(exitCode?'failed':'passed');
console.log('Mobile performance: not run in release gates; use performance:audit and performance:report.');
process.exitCode=exitCode;
