import { readFile, writeFile, mkdir, rm, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { load, dump } from 'js-yaml';
import { filesUnder, parseProse } from './lib/content-files.mjs';
import { entityKey, collections, migrateReferences, replaceEntityLinks, resolveMigrations, updateRedirects } from './lib/entity-migrations.mjs';
import { brandKind, productKind } from '../src/data/entity-kind-labels.ts';
const root=resolve(import.meta.dirname,'..');
const [fromKey,toKey,...flags]=process.argv.slice(2);
if(!fromKey || !toKey)throw new Error('Usage: npm run entity:migrate -- brand:old product:new [--kind=application] [--apply]');
if(flags.some(f=>f!=='--apply'&&!f.startsWith('--kind=')))throw new Error('Unknown migration flag');
const from=entityKey(fromKey),to=entityKey(toKey);
if(fromKey===toKey)throw new Error('Source and target must differ');
const source=`src/content/data/${collections[from.type]}/${from.id}.yaml`;
const destination=`src/content/data/${collections[to.type]}/${to.id}.yaml`;
const read=async p=>{try{return await readFile(resolve(root,p),'utf8');}catch(e){if(e.code==='ENOENT')return null;throw e;}};
const originals=new Map(),changes=new Map();
async function change(path,content){if(!originals.has(path))originals.set(path,await read(path));if(originals.get(path)!==content)changes.set(path,content);}
const sourceText=await read(source);if(!sourceText)throw new Error(`Missing ${source}`);
const registry='src/content/entity-migrations.json';
const records=JSON.parse(await read(registry)??'[]');
if(records.some(record=>record.from===toKey))throw new Error(`Retired migration target: ${toKey}; choose an active identity before migration`);
// Production identities belong to their source repositories. Refuse before any
// writes instead of editing generated snapshots or discovering this at build time.
if(from.type==='person') {
  const blocked=[];
  for(const file of await filesUnder(resolve(root,'src/content/imported'))) {
    if(!file.endsWith('.json'))continue;
    const snapshot=JSON.parse(await readFile(file,'utf8'));
    const referencesPerson=value=>value && typeof value==='object' && (
      value.person===from.id || value.speakerId===from.id || Object.values(value).some(referencesPerson));
    if(referencesPerson(snapshot))blocked.push(file.slice(root.length+1));
  }
  if(blocked.length)throw new Error(`Person migration requires production-source and speaker mapping reconciliation, then reimport, before retrying. No files changed. Referenced by:\n${blocked.join('\n')}`);
}
const sourceData=load(sourceText),targetText=await read(destination);
let targetData=targetText ? load(targetText) : {...sourceData};
if(!targetText && from.type!==to.type) {
  if(from.type==='person'||to.type==='person')throw new Error('Person reclassification requires an authored target entity');
  const kind=flags.find(f=>f.startsWith('--kind='))?.slice(7);
  if(!kind || !(kind in (to.type==='brand'?brandKind:productKind)))throw new Error('A valid target --kind is required for reclassification');
  targetData.kind=kind;
  if(to.type==='product')delete targetData.parentBrand;
  else for(const key of ['brand','parent','status','releasedAt'])delete targetData[key];
}
targetData.aliases=[...new Set([...(targetData.aliases??[]),...(sourceData.aliases??[]),...Object.values(sourceData.name??{})])].filter(x=>!Object.values(targetData.name??{}).includes(x));
targetData=migrateReferences(targetData,fromKey,toKey);
if((to.type==='product' && targetData.parent===to.id) || (to.type==='brand' && targetData.parentBrand===to.id))
  throw new Error(`Migration creates a self-parent on ${toKey}; reconcile target ownership before migration`);
await change(destination,dump(targetData,{lineWidth:-1,noRefs:true}));await change(source,null);
for(const file of await filesUnder(resolve(root,'src/content/data'))) {
  const path=file.slice(root.length+1);if(path===source || path===destination || !path.endsWith('.yaml'))continue;
  const text=await read(path),data=load(text),next=migrateReferences(data,fromKey,toKey);
  if(path.startsWith('src/content/data/host-memberships/') && data.person!==next.person) {
    const targetPath=`src/content/data/host-memberships/${next.show}--${next.person}.yaml`;
    if(await read(targetPath)!==null)throw new Error(`Host membership already exists: ${targetPath}; reconcile before migration`);
    await change(targetPath,dump(next,{lineWidth:-1,noRefs:true}));
    await change(path,null);
    continue;
  }
  if(JSON.stringify(data)!==JSON.stringify(next))await change(path,dump(next,{lineWidth:-1,noRefs:true}));
}
for(const file of await filesUnder(resolve(root,'src/content/transcript-rules'))) {
  const path=file.slice(root.length+1),text=await read(path),data=JSON.parse(text),next=migrateReferences(data,fromKey,toKey);
  if(JSON.stringify(data)!==JSON.stringify(next))await change(path,JSON.stringify(next,null,2)+'\n');
}
for(const file of await filesUnder(resolve(root,'src/content/prose'))) {
  if(!file.endsWith('.md'))continue;
  const path=file.slice(root.length+1),text=await read(path),{data,body}=parseProse(text);
  const next=migrateReferences(data,fromKey,toKey),newBody=replaceEntityLinks(body,fromKey,toKey);
  if(data.entityType===from.type && data.entity===from.id) {
    const targetPath=path.replace(`/prose/${collections[from.type]}/${from.id}.`,`/prose/${collections[to.type]}/${to.id}.`);
    if(targetPath===path)throw new Error(`Cannot derive migration destination for prose ${path}; reconcile its filename with ${fromKey} before migration. No files changed.`);
    if(!await read(targetPath))await change(targetPath,`---\n${dump(next,{lineWidth:-1})}---\n${newBody}`);
    await change(path,null);
  } else if(body!==newBody)await change(path,text.replace(body,newBody));
}
records.push({from:fromKey,to:toKey});resolveMigrations(records);
await change(registry,JSON.stringify(records,null,2)+'\n');
await change('public/_redirects',updateRedirects(await read('public/_redirects'),records));
// Rebuild imported links with the normal importer; do not patch generated snapshots.
const reimports=[];
for(const file of await filesUnder(resolve(root,'src/content/imported/transcripts'))) {
  const path=file.slice(root.length+1),text=await read(path),snapshot=JSON.parse(text);
  if(!text.includes(`"entityId": "${from.id}"`) && !changes.has(`src/content/transcript-rules/${snapshot.episodeId}.json`))continue;
  const sourcePath=resolve(root,'..',snapshot.provenance.sourceRepository,snapshot.provenance.sourcePath);
  await access(sourcePath);
  originals.set(path,text);
  reimports.push({path,episodeId:snapshot.episodeId,sourcePath,reviewPreview:snapshot.publicationStatus!=='published'});
}
console.log(JSON.stringify({from:fromKey,to:toKey,mode:targetText?'merge':'move',changes:[...changes].map(([path,value])=>({path,operation:value===null?'remove':'write'})),reimports},null,2));
if(flags.includes('--apply')) {
  const backup=resolve(root,'reports/maintenance',`migration-${Date.now()}.json`);await mkdir(dirname(backup),{recursive:true});await writeFile(backup,JSON.stringify([...originals],null,2));
  for(const [path,original] of originals) { if(await read(path)!==original)throw new Error(`File changed during migration planning: ${path}`); }
  try {
    for(const [path,value] of changes){const full=resolve(root,path);if(value===null)await rm(full);else{await mkdir(dirname(full),{recursive:true});await writeFile(full,value);}}
    for(const {episodeId,sourcePath,reviewPreview} of reimports){const result=spawnSync('node',['scripts/import-transcript.mjs',episodeId,sourcePath,'--preserve-timings',...(reviewPreview?['--review-preview']:[])],{cwd:root,stdio:'inherit'});if(result.status!==0)throw new Error('Transcript reimport failed');}
    for (const args of [['astro','check'], ['astro','build']]) { const check=spawnSync('npx',args,{cwd:root,stdio:'inherit'});if(check.status!==0)throw new Error('Migration validation failed'); }
    console.log(`Applied. Original bytes retained in ${backup}. Run release:check before publishing.`);
  } catch(error) {
    for(const [path,value] of originals){const full=resolve(root,path);if(value===null)await rm(full,{force:true});else{await mkdir(dirname(full),{recursive:true});await writeFile(full,value);}}
    throw error;
  }
}
