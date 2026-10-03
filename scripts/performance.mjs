import {spawnSync} from 'node:child_process';
import {readFile,writeFile,mkdir,appendFile} from 'node:fs/promises';
import {resolve,relative} from 'node:path';
import {randomUUID} from 'node:crypto';
import {artifactDigest} from './lib/release-artifact.mjs';
import {readHistory,performanceStatus,summarizePerformance} from './lib/performance-status.mjs';
const root=resolve(import.meta.dirname,'..'),directory=resolve(root,'.releases');
const historyPath=resolve(directory,'performance-history.jsonl');
const [command,argument]=process.argv.slice(2);
const releases=await readHistory(resolve(directory,'history.jsonl'));
if(command==='report') {
  const summary=summarizePerformance(releases,await readHistory(historyPath));
  const out=resolve(root,'reports/maintenance');await mkdir(out,{recursive:true});
  await writeFile(resolve(out,'performance.json'),JSON.stringify(summary,null,2)+'\n');
  const markdown=`# Mobile performance\n\nCurrent release: ${summary.current?.revision??'unknown'}\n\nCurrent status: ${summary.current?.status??'unknown'}\n\nLatest audit: ${summary.lastAudit?.completedAt??summary.lastAudit?.startedAt??'none'} (${summary.lastAudit?.status??'not-run'})\n\nLast passed audit: ${summary.lastPassed?.completedAt??'none'}\n\nReleases without a matching passing audit: ${summary.uncheckedReleases}\n\n| Commit | Deployment time | Performance | Checked at |\n| --- | --- | --- | --- |\n`+summary.releases.map(r=>`| ${r.revision.slice(0,12)} | ${r.deployedAt} | ${r.status} | ${r.checkedAt??'—'} |`).join('\n')+'\n';
  await writeFile(resolve(out,'performance.md'),markdown);
  console.log(markdown);console.log(`Reports: ${out}/performance.{json,md}`);
} else if(command==='audit') {
  const current=summarizePerformance(releases,[]).current;
  const latest=releases.findLast(r=>r.version===current?.version && r.bundle);
  const bundle=argument?resolve(argument):latest?.bundle;
  if(!bundle)throw new Error('No deployed bundle found. Use performance:audit -- <verified-bundle>.');
  const manifest=JSON.parse(await readFile(resolve(bundle,'release.json'),'utf8'));
  if(manifest.checks!=='passed' || await artifactDigest(bundle)!==manifest.digest)throw new Error('Bundle is not a verified, unchanged release');
  const auditId=randomUUID(),out=resolve(directory,'performance',auditId);
  await mkdir(out,{recursive:true});
  const event={auditId,revision:manifest.revision,digest:manifest.digest,bundle,startedAt:new Date().toISOString(),report:relative(root,out)};
  await appendFile(historyPath,JSON.stringify({...event,status:'running'})+'\n');
  let status='error',errorMessage;
  try {
    const result=spawnSync('npx',['playwright','test','--config','playwright.performance.config.ts','--reporter=line,json','--output',resolve(out,'results')],{cwd:bundle,stdio:'inherit',env:{...process.env,PLAYWRIGHT_SKIP_BUILD:'1',PLAYWRIGHT_USE_EXISTING_SERVER:'0',PLAYWRIGHT_JSON_OUTPUT_FILE:resolve(out,'results.json')}});
    if(result.error)throw result.error;
    const report=JSON.parse(await readFile(resolve(out,'results.json'),'utf8'));
    if(await artifactDigest(bundle)!==manifest.digest)throw new Error('Release artifact changed during performance audit');
    const expected=8; // Full route suite, three cold-load samples per route.
    status=result.status===0 && report.stats.expected===expected && report.stats.unexpected===0 && report.stats.skipped===0 && !report.errors?.length?'passed':'failed';
  }catch(error){errorMessage=error.message;}
  const completed={...event,status,completedAt:new Date().toISOString(),...(errorMessage?{error:errorMessage}:{})};
  await appendFile(historyPath,JSON.stringify(completed)+'\n');
  await writeFile(resolve(out,'audit.json'),JSON.stringify(completed,null,2)+'\n');
  console.log(JSON.stringify(performanceStatus(manifest,[completed]),null,2));
  if(status!=='passed')process.exitCode=1;
} else throw new Error('Expected audit or report');
