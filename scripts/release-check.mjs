import { spawnSync } from 'node:child_process';
import {mkdir,writeFile} from 'node:fs/promises';
const started=Date.now(),stages=[];
let exitCode=0;
const run = (script, env = {}) => {
  const start=Date.now();
  const result = spawnSync('npm', ['run', script], { stdio: 'inherit', env: { ...process.env, ...env, PLAYWRIGHT_USE_EXISTING_SERVER: '0' } });
  stages.push({name:script,seconds:(Date.now()-start)/1000,status:result.status===0?'passed':'failed'});
  console.log(`[timing] ${script}: ${stages.at(-1).seconds.toFixed(2)}s`);
  if (result.error) throw result.error;
  if (result.status !== 0) {exitCode=result.status??1;throw new Error(`${script} failed`);}
};
try {
  run('check');
  run('build:assets');
  run('test:visual', { PLAYWRIGHT_SKIP_BUILD: '1' });
  run('check:release');
} catch(error) {console.error(error.message);exitCode ||= 1;}
await mkdir('reports/maintenance',{recursive:true});
await writeFile('reports/maintenance/release-check.json',JSON.stringify({status:exitCode?'failed':'passed',seconds:(Date.now()-started)/1000,stages,performance:{status:'not-run',policy:'separate-audit'}},null,2)+'\n');
console.log('Mobile performance: not run in release gates; use performance:audit and performance:report.');
process.exitCode=exitCode;
