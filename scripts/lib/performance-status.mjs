import {readFile} from 'node:fs/promises';

export async function readHistory(path) {
  try {return (await readFile(path,'utf8')).split('\n').filter(Boolean).map(line=>JSON.parse(line));}
  catch(error){if(error.code==='ENOENT')return [];throw error;}
}
export function performanceStatus(release, audits) {
  const matching=audits.filter(a=>a.revision===release.revision && a.digest===release.digest);
  const latest=matching.at(-1);
  return latest ? {status:latest.status,auditId:latest.auditId,checkedAt:latest.completedAt??null,startedAt:latest.startedAt,report:latest.report??null}
    : {status:'not-run',checkedAt:null};
}
export function summarizePerformance(releases, audits) {
  const deployed=releases.filter(r=>r.deployedAt && r.revision);
  // Rollbacks select an existing deployed version, not a new untested artifact.
  const lastEvent=releases.at(-1);
  const current=lastEvent?.rolledBackAt ? [...deployed].reverse().find(r=>r.version===lastEvent.version) : deployed.at(-1);
  const entries=deployed.map(r=>({revision:r.revision,digest:r.digest,version:r.version,deployedAt:r.deployedAt,...performanceStatus(r,audits)}));
  return {current:current?{revision:current.revision,version:current.version,...performanceStatus(current,audits)}:null,
    lastAudit:audits.at(-1)??null,lastPassed:audits.findLast(a=>a.status==='passed')??null,
    uncheckedReleases:entries.filter(r=>r.status!=='passed').length,releases:entries};
}
