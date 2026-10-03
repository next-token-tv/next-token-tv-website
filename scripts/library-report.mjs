import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { load } from 'js-yaml';
import { readLibrary, filesUnder } from './lib/content-files.mjs';
import { resolveMigrations } from './lib/entity-migrations.mjs';
const root = resolve(import.meta.dirname, '..');
const today = process.argv.find(x => x.startsWith('--as-of='))?.slice(8) ?? new Date().toISOString().slice(0,10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(today) || !Number.isFinite(Date.parse(today))) throw new Error('Invalid --as-of date');
const {entries, prose} = await readLibrary(root);
const keys = new Set(entries.map(e => `${e.type}:${e.id}`));
const migrations = new Map(resolveMigrations(JSON.parse(await readFile(resolve(root,'src/content/entity-migrations.json'),'utf8'))).map(item=>[item.from,item.to]));
const findings = [];
const add = (severity, code, path, detail) => findings.push({severity,code,path,detail});
const checkRef = (type,id,path) => { if(id && !keys.has(`${type}:${id}`)) add('blocker','missing-reference',path,`${type}:${id}`); };
for (const e of entries) {
  const key = `${e.type}:${e.id}`;
  for (const locale of ['zh-Hans','en']) {
    if (!(e.data.summary ?? e.data.bio)?.[locale]?.trim()) add('editorial','missing-summary',e.path,locale);
    const article = prose.find(p=>p.data.entityType===e.type && p.data.entity===e.id && p.data.locale===locale && p.data.slot==='wiki' && p.data.status!=='draft');
    if (!article || article.body.replace(/\s/g,'').length<100) add('editorial','incomplete-article',e.path,locale);
  }
  if (!e.data.sources?.length) add('editorial','missing-sources',e.path,key);
  for (const source of e.data.sources ?? []) {
    try { if (!['https:','http:'].includes(new URL(source.href).protocol)) throw Error(); }
    catch { add('blocker','invalid-source-url',e.path,String(source.href)); }
  }
  const age = (Date.parse(today)-Date.parse(e.data.lastVerifiedAt))/86400000;
  if (!e.data.lastVerifiedAt || !Number.isFinite(age) || age>90) add('editorial','verification-due',e.path,e.data.lastVerifiedAt ?? 'not recorded');
  if(e.type==='product') {checkRef('brand',e.data.brand,e.path);checkRef('product',e.data.parent,e.path);}
  if(e.type==='brand') checkRef('brand',e.data.parentBrand,e.path);
  for(const r of e.data.relations ?? []) checkRef(r.entityType,r.entity,e.path);
  if(e.type==='brand' && keys.has(`product:${e.id}`)) add('editorial','classification-review',e.path,'Company/product share an ID; verify distinct referents and independent sources');
}
for(const p of prose) {
  if(p.data.status==='draft') continue;
  for(const match of p.body.matchAll(/\]\(\/(?:en\/)?wiki\/(brands|products|people)\/([a-z0-9-]+)(?:[/#?][^)]*)?\)/g)) {
    const type = {brands:'brand',products:'product',people:'person'}[match[1]];
    const key = `${type}:${match[2]}`;
    if(migrations.has(key)) add('editorial','retired-entity-link',p.path,`${key} → ${migrations.get(key)}`);
    else checkRef(type,match[2],p.path);
  }
  if(['brand','product','person'].includes(p.data.entityType)) checkRef(p.data.entityType,p.data.entity,p.path);
}
for(const file of await filesUnder(resolve(root,'src/content/data/episodes'))) {
  const episode = load(await readFile(file,'utf8'));
  for(const [plural,type] of [['brands','brand'],['products','product'],['people','person']])
    for(const id of episode.mentions?.[plural] ?? []) checkRef(type,id,file.slice(root.length+1));
}
for(const file of await filesUnder(resolve(root,'src/content/imported/transcripts'))) {
  const transcript=JSON.parse(await readFile(file,'utf8'));
  if(transcript.publicationStatus!=='published') continue;
  for(const c of transcript.chapters) for(const t of c.turns) for(const p of t.paragraphs) for(const segment of p)
    if(segment.type==='entity-link' && ['brand','product','person'].includes(segment.entityType)) checkRef(segment.entityType,segment.entityId,file.slice(root.length+1));
}
const unique = [...new Map(findings.map(f=>[JSON.stringify(f),f])).values()];
const report = {asOf:today,entities:entries.length,blockers:unique.filter(f=>f.severity==='blocker').length,editorial:unique.filter(f=>f.severity==='editorial').length,externalLinks:'Not fetched; URL syntax and internal entity references checked',findings:unique};
const out = resolve(root,'reports/maintenance');await mkdir(out,{recursive:true});
await writeFile(resolve(out,'library.json'),JSON.stringify(report,null,2)+'\n');
const escape = s=>String(s).replaceAll('|','\\|').replaceAll('\n',' ');
await writeFile(resolve(out,'library.md'),`# Library maintenance\n\nAs of ${today}: ${report.entities} entities, ${report.blockers} blockers, ${report.editorial} editorial tasks.\n\nExternal links are not fetched; this report does not assert remote availability.\n\n| Severity | Issue | File | Detail |\n| --- | --- | --- | --- |\n`+unique.map(f=>`| ${f.severity} | ${f.code} | ${escape(f.path)} | ${escape(f.detail)} |`).join('\n')+'\n');
console.log(JSON.stringify({ ...report, findings:undefined, report:resolve(out,'library.md') },null,2));
if(process.argv.includes('--strict') && report.blockers) process.exitCode=1;
