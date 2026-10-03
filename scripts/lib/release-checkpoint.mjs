import {createHash} from 'node:crypto';
import {readdir,readFile,readlink,realpath} from 'node:fs/promises';
import {join,relative,resolve,sep} from 'node:path';
const excluded=new Set(['.git','.releases','.cache','.astro','.wrangler','dist','test-results','playwright-report','reports/maintenance','public/assets/og','worker-configuration.d.ts','release.json','source.tar','node_modules/.cache','node_modules/.vite','node_modules/.astro','node_modules/.mf']);
export async function releaseInputDigest(root, env=process.env) {
  root=resolve(root);const hash=createHash('sha256');
  async function visit(directory) {
    for(const entry of (await readdir(directory,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))) {
      const path=join(directory,entry.name),name=relative(root,path).split(sep).join('/');
      if(excluded.has(name))continue;
      if(entry.isDirectory()){await visit(path);continue;}
      hash.update(name).update('\0');
      if(entry.isSymbolicLink()) {
        const target=await realpath(path);
        if(!target.startsWith(root+sep))throw new Error(`Input symlink leaves release bundle: ${name}`);
        hash.update(await readlink(path));
      } else hash.update(await readFile(path));
      hash.update('\0');
    }
  }
  await visit(root);
  // Public Astro variables affect emitted HTML; retain unset versus empty values.
  const buildEnvironment=Object.fromEntries(Object.keys(env).filter(key=>key.startsWith('PUBLIC_') || ['NODE_ENV','TZ','CI','NODE_OPTIONS'].includes(key)).sort().map(key=>[key,env[key]]));
  hash.update(JSON.stringify({node:process.version,platform:process.platform,arch:process.arch,buildEnvironment}));
  return hash.digest('hex');
}
export function validateCheckpoint(checkpoint,inputDigest,artifactDigest) {
  const names=['check','build:assets','test:visual','check:release'];
  if(checkpoint.schemaVersion!==1 || checkpoint.inputDigest!==inputDigest)throw new Error('Release inputs changed or checkpoint is unsupported; prepare a new bundle');
  if(!Array.isArray(checkpoint.stages)||checkpoint.stages.length>names.length)throw new Error('Invalid release checkpoint');
  for(const [index,stage] of checkpoint.stages.entries()) {
    if(stage.name!==names[index] || !['passed','failed'].includes(stage.status) || (stage.status==='failed' && index!==checkpoint.stages.length-1))throw new Error('Invalid release checkpoint stage order');
  }
  if(checkpoint.stages.some(s=>s.name==='build:assets' && s.status==='passed') && checkpoint.artifactDigest!==artifactDigest)throw new Error('Release artifact changed; prepare a new bundle');
}
