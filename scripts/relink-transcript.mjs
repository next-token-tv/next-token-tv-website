import {readFile,readdir,writeFile,rename} from 'node:fs/promises';
import {resolve} from 'node:path';
import {load} from 'js-yaml';
import {relinkTranscript} from './lib/transcript-converter.mjs';
const root=resolve(import.meta.dirname,'..');
const [id]=process.argv.slice(2);
if(!/^[a-z0-9-]+--\d{3}$/.test(id??''))throw Error('Usage: node scripts/relink-transcript.mjs <episode-id>');
const rules=JSON.parse(await readFile(resolve(root,`src/content/transcript-rules/${id}.json`),'utf8'));
const path=resolve(root,`src/content/imported/transcripts/${id}.${rules.locale}.json`);
const snapshot=JSON.parse(await readFile(path,'utf8'));
const entities=[];
for(const [directory,entityType]of [['brands','brand'],['products','product'],['people','person'],['shows','show']]){
 for(const file of await readdir(resolve(root,'src/content/data',directory))){
  if(!file.endsWith('.yaml'))continue;
  const data=load(await readFile(resolve(root,'src/content/data',directory,file),'utf8'));
  entities.push({entityType,id:file.slice(0,-5),...(entityType==='show'?{href:data.pagePath}:{}),aliases:[...Object.values(data.name),...(data.aliases??[])]});
 }
}
for(const {entityType,id,alias}of rules.scopedAliases??[]){
 const entity=entities.find(e=>e.id===id&&e.entityType===entityType);
 if(!entity||!alias?.trim())throw Error(`Invalid alias ${alias}`);
 entity.aliases.push(alias);
}
const episode=load(await readFile(resolve(root,`src/content/data/episodes/${id}.yaml`),'utf8'));
const excludedEntities=[...(rules.excludedEntities??[])];
for(const file of await readdir(resolve(root,'src/content/data/host-memberships'))){
 if(!file.endsWith('.yaml'))continue;
 const membership=load(await readFile(resolve(root,'src/content/data/host-memberships',file),'utf8'));
 if(membership.show===episode.show)excludedEntities.push(`person:${membership.person}`);
}
const result=relinkTranscript(snapshot,{entities,resolutions:rules.resolutions,excludedEntities});
const text=s=>s.chapters.map(c=>c.turns.map(t=>t.paragraphs.map(p=>p.map(s=>s.value).join(''))));
if(JSON.stringify(text(snapshot))!==JSON.stringify(text(result)))throw Error('Transcript text changed');
await writeFile(path+'.tmp',JSON.stringify(result,null,2)+'\n');await rename(path+'.tmp',path);
console.log(`${id}: entity links refreshed; text, speaker attribution, timings and source provenance unchanged`);
