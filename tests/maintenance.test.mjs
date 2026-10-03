import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {artifactDigest} from '../scripts/lib/release-artifact.mjs';
import {resolveMigrations,redirectLines,updateRedirects,migrateReferences,replaceEntityLinks} from '../scripts/lib/entity-migrations.mjs';
test('migration chains resolve directly and cycles fail',()=>{
 const records=[{from:'product:a',to:'product:b'},{from:'product:b',to:'product:c'}];
 assert.equal(resolveMigrations(records)[0].to,'product:c');
 assert.equal(redirectLines(records).length,16);
 assert.throws(()=>resolveMigrations([...records,{from:'product:c',to:'product:a'}]),/cycle/);
});
test('redirect generation preserves unrelated rules and is idempotent',()=>{
 const records=[{from:'brand:old',to:'product:new'}];
 const text='/brands/old /wiki/brands/old 301\n/brands/* /wiki/brands/:splat 301\n';
 const generated=updateRedirects(text,records);
 assert.ok(generated.includes('/en/wiki/brands/old/ /en/wiki/products/new 301'));
 assert.ok(generated.includes('/brands/* /wiki/brands/:splat 301'));
 assert.equal(updateRedirects(generated,records),generated);
});
test('entity references move across categories without rewriting dialogue',()=>{
 const data={mentions:{brands:['old'],products:['new'],people:[]},resolutions:{Old:{entityType:'brand',id:'old'}},excludedEntities:['brand:old'],text:'old'};
 const next=migrateReferences(data,'brand:old','product:new');
 assert.deepEqual(next.mentions,{brands:[],products:['new'],people:[]});
 assert.deepEqual(next.resolutions.Old,{entityType:'product',id:'new'});
 assert.equal(next.text,'old');assert.deepEqual(data.mentions.brands,['old']);
 assert.throws(()=>migrateReferences({brand:'old'},'brand:old','product:new'),/ownership/);
 assert.equal(replaceEntityLinks('[old](/wiki/brands/old) /wiki/brands/older','brand:old','product:new'),'[old](/wiki/products/new) /wiki/brands/older');
});
test('brand migration updates show ownership and refuses cross-category ownership',()=>{
 const show={ownerBrand:'old',name:{en:'Show'}};
 assert.deepEqual(migrateReferences(show,'brand:old','brand:new'),{...show,ownerBrand:'new'});
 assert.equal(show.ownerBrand,'old');
 assert.throws(()=>migrateReferences(show,'brand:old','product:new'),/Cannot reinterpret ownerBrand/);
});
test('merged relations deduplicate equal attributes independent of key order and reject conflicts',()=>{
 const original={relations:[
  {entityType:'brand',entity:'old',role:{en:'Founder','zh-Hans':'创始人'}},
  {role:{'zh-Hans':'创始人',en:'Founder'},entity:'new',entityType:'product'},
  {entityType:'brand',entity:'unrelated',role:{en:'Advisor','zh-Hans':'顾问'}},
 ]};
 const next=migrateReferences(original,'brand:old','product:new');
 assert.equal(next.relations.length,2);
 assert.equal(next.relations[0].entity,'new');
 assert.equal(next.relations[0].entityType,'product');
 assert.equal(next.relations[1].entity,'unrelated');
 assert.equal(original.relations.length,3);
 assert.equal(original.relations[0].entity,'old');
 const conflicting=structuredClone(original);conflicting.relations[1].role.en='Advisor';
 assert.throws(()=>migrateReferences(conflicting,'brand:old','product:new'),/Conflicting relations for product:new/);
});
test('release hashes cover assets, worker, and configuration',async()=>{
 const root=await mkdtemp(join(tmpdir(),'release-hash-'));
 try {
  await mkdir(join(root,'dist'));await mkdir(join(root,'worker'));
  await writeFile(join(root,'dist/index.html'),'one');await writeFile(join(root,'worker/index.js'),'worker');await writeFile(join(root,'wrangler.jsonc'),'{}');
  const first=await artifactDigest(root);assert.equal(await artifactDigest(root),first);
  for(const file of ['dist/index.html','worker/index.js','wrangler.jsonc']){const before=await artifactDigest(root);await writeFile(join(root,file),'changed');assert.notEqual(await artifactDigest(root),before);}
 }finally{await rm(root,{recursive:true,force:true});}
});

test('migration CLI previews without writes, applies references, and restores on importer failure',async()=>{
 const {cp,readFile,symlink,chmod,access}=await import('node:fs/promises');
 const {spawnSync}=await import('node:child_process');
 const project=join(import.meta.dirname,'..');const base=await mkdtemp(join(tmpdir(),'entity-migrate-'));const root=join(base,'website');
 try {
  for(const folder of ['scripts/lib','src/data','src/content/data/products','src/content/data/episodes','src/content/prose/products','src/content/transcript-rules','src/content/imported/transcripts','public','bin'])await mkdir(join(root,folder),{recursive:true});
  for(const file of ['scripts/entity-migrate.mjs','scripts/lib/content-files.mjs','scripts/lib/entity-migrations.mjs','src/data/entity-kind-labels.ts'])await cp(join(project,file),join(root,file));
  await symlink(join(project,'node_modules'),join(root,'node_modules'));
  const fakeNpx=join(root,'bin/npx');await writeFile(fakeNpx,'#!/bin/sh\nexit 0\n');await chmod(fakeNpx,0o755);
  const source='kind: application\nname:\n  en: Old\n  zh-Hans: 旧产品\naliases: []\n';
  const episode='mentions:\n  products: [old]\n  brands: []\n  people: []\n';
  await writeFile(join(root,'src/content/data/products/old.yaml'),source);
  await writeFile(join(root,'src/content/data/episodes/e.yaml'),episode);
  await writeFile(join(root,'public/_redirects'),'/legacy /weekly 301\n');
  const invoke=(...flags)=>spawnSync(process.execPath,['--experimental-strip-types',join(root,'scripts/entity-migrate.mjs'),'product:old','product:new',...flags],{encoding:'utf8',env:{...process.env,PATH:join(root,'bin')+':'+process.env.PATH}});
  assert.equal(invoke().status,0);assert.equal(await readFile(join(root,'src/content/data/products/old.yaml'),'utf8'),source);
  const registryPath=join(root,'src/content/entity-migrations.json');
  const targetPath=join(root,'src/content/data/products/new.yaml');
  await writeFile(registryPath,JSON.stringify([{from:'product:new',to:'product:successor'}]));
  for(const flags of [[],['--apply']])assert.match(invoke(...flags).stderr,/Retired migration target/);
  await assert.rejects(access(targetPath));
  await rm(registryPath);
  await writeFile(targetPath,source+'parent: old\n');
  for(const flags of [[],['--apply']])assert.match(invoke(...flags).stderr,/self-parent/);
  assert.equal(await readFile(targetPath,'utf8'),source+'parent: old\n');
  assert.equal(await readFile(join(root,'src/content/data/products/old.yaml'),'utf8'),source);
  await assert.rejects(access(join(root,'reports/maintenance')));
  await rm(targetPath);
  const unexpectedProse=join(root,'src/content/prose/products/custom-name.md');
  const article='---\nentityType: product\nentity: old\nlocale: en\nslot: wiki\nupdatedAt: "2026-10-03"\n---\nOriginal article.\n';
  await writeFile(unexpectedProse,article);
  for(const flags of [[],['--apply']]) {
   const rejected=invoke(...flags);
   assert.notEqual(rejected.status,0);assert.match(rejected.stderr,/Cannot derive migration destination for prose/);
   assert.equal(await readFile(unexpectedProse,'utf8'),article);
   assert.equal(await readFile(join(root,'src/content/data/products/old.yaml'),'utf8'),source);
   await assert.rejects(access(targetPath));
   await assert.rejects(access(join(root,'reports/maintenance')));
  }
  await rm(unexpectedProse);
  await writeFile(join(root,'src/content/prose/products/old.wiki.en.md'),article);
  await mkdir(join(root,'src/content/data/people'));
  const personPath=join(root,'src/content/data/people/example.yaml');
  const conflicting='relations:\n  - {entityType: product, entity: old, role: {en: Founder}}\n  - {entityType: product, entity: new, role: {en: Advisor}}\n';
  await writeFile(personPath,conflicting);
  const conflict=invoke('--apply');
  assert.notEqual(conflict.status,0);assert.match(conflict.stderr,/Conflicting relations for product:new/);
  assert.equal(await readFile(personPath,'utf8'),conflicting);
  assert.equal(await readFile(join(root,'src/content/data/products/old.yaml'),'utf8'),source);
  await assert.rejects(access(join(root,'src/content/data/products/new.yaml')));
  await assert.rejects(access(join(root,'reports/maintenance')));
  await writeFile(personPath,conflicting.replace('Advisor','Founder'));
  // Force a reimport failure after writes to exercise rollback, including new files.
  await mkdir(join(base,'production'));await writeFile(join(base,'production/transcript.md'),'source');
  await writeFile(join(root,'src/content/imported/transcripts/e.json'),JSON.stringify({episodeId:'e',provenance:{sourceRepository:'production',sourcePath:'transcript.md'},segments:[{entityId:'old'}]},null,2));
  await writeFile(join(root,'scripts/import-transcript.mjs'),'process.exit(1);');
  assert.notEqual(invoke('--apply').status,0);
  assert.equal(await readFile(join(root,'src/content/data/products/old.yaml'),'utf8'),source);
  assert.equal(await readFile(join(root,'src/content/data/episodes/e.yaml'),'utf8'),episode);
  await assert.rejects(access(join(root,'src/content/data/products/new.yaml')));
  await rm(join(root,'src/content/imported/transcripts/e.json'));
  const applied=invoke('--apply');assert.equal(applied.status,0,applied.stderr);
  assert.match(await readFile(join(root,'src/content/prose/products/new.wiki.en.md'),'utf8'),/Original article/);
  await assert.rejects(access(join(root,'src/content/prose/products/old.wiki.en.md')));
  await assert.rejects(access(join(root,'src/content/data/products/old.yaml')));
  assert.match(await readFile(join(root,'src/content/data/episodes/e.yaml'),'utf8'),/- new/);
  const {load}=await import('js-yaml');
  assert.deepEqual(load(await readFile(personPath,'utf8')).relations,[{entityType:'product',entity:'new',role:{en:'Founder'}}]);
  assert.match(await readFile(join(root,'public/_redirects'),'utf8'),/\/en\/wiki\/products\/old\/ \/en\/wiki\/products\/new 301/);
 }finally{await rm(base,{recursive:true,force:true});}
});

test('release gates disable inherited preview reuse and build only once',async()=>{
 const {readFile,chmod}=await import('node:fs/promises');
 const {spawnSync}=await import('node:child_process');
 const root=await mkdtemp(join(tmpdir(),'release-env-'));
 try {
  const log=join(root,'calls');
  await writeFile(join(root,'npm'),'#!/bin/sh\nprintf "%s %s %s\\n" "$2" "$PLAYWRIGHT_USE_EXISTING_SERVER" "$PLAYWRIGHT_SKIP_BUILD" >> "$REVIEW_TEST_LOG"\n');
  await chmod(join(root,'npm'),0o755);
  const result=spawnSync(process.execPath,[join(import.meta.dirname,'../scripts/release-check.mjs')],{encoding:'utf8',env:{...process.env,PATH:root+':'+process.env.PATH,REVIEW_TEST_LOG:log,PLAYWRIGHT_USE_EXISTING_SERVER:'1',PLAYWRIGHT_SKIP_BUILD:''}});
  assert.equal(result.status,0,result.stderr);
  const calls=(await readFile(log,'utf8')).trim().split('\n');
  assert.equal(calls.filter(line=>line.startsWith('build ')).length,1);
  assert.ok(calls.includes('test:visual 0 1'));
  assert.ok(calls.includes('test:performance 0 1'));
 }finally{await rm(root,{recursive:true,force:true});}
});

test('person migration rejects generated identities before writes and renames standalone host membership',async()=>{
 const {cp,readFile,symlink,chmod,access}=await import('node:fs/promises');
 const {spawnSync}=await import('node:child_process');
 const project=join(import.meta.dirname,'..'),root=await mkdtemp(join(tmpdir(),'person-migrate-'));
 try {
  for(const folder of ['scripts/lib','src/data','src/content/data/people','src/content/data/host-memberships','src/content/prose/people','src/content/transcript-rules','src/content/imported/transcripts','src/content/imported/episodes','public','bin'])await mkdir(join(root,folder),{recursive:true});
  for(const file of ['scripts/entity-migrate.mjs','scripts/lib/content-files.mjs','scripts/lib/entity-migrations.mjs','src/data/entity-kind-labels.ts'])await cp(join(project,file),join(root,file));
  await symlink(join(project,'node_modules'),join(root,'node_modules'));
  await writeFile(join(root,'bin/npx'),'#!/bin/sh\nexit 0\n');await chmod(join(root,'bin/npx'),0o755);
  const source='name:\n  en: Old\n  zh-Hans: 旧人物\naliases: []\n';
  const membership='show: demo\nperson: old\n';
  const sourcePath=join(root,'src/content/data/people/old.yaml');
  const membershipPath=join(root,'src/content/data/host-memberships/demo--old.yaml');
  await writeFile(sourcePath,source);await writeFile(membershipPath,membership);
  await writeFile(join(root,'public/_redirects'),'');
  const invoke=(...flags)=>spawnSync(process.execPath,['--experimental-strip-types',join(root,'scripts/entity-migrate.mjs'),'person:old','person:new',...flags],{encoding:'utf8',env:{...process.env,PATH:join(root,'bin')+':'+process.env.PATH}});
  for(const [file,data] of [['episodes/e.json',{participants:[{person:'old'}]}],['transcripts/e.json',{chapters:[{turns:[{speakerId:'old'}]}]}]]) {
   const snapshot=join(root,'src/content/imported',file);const bytes=JSON.stringify(data);
   await writeFile(snapshot,bytes);
   for(const flags of [[],['--apply']]) {
    const result=invoke(...flags);assert.notEqual(result.status,0);assert.match(result.stderr,/production-source and speaker mapping reconciliation/);assert.ok(result.stderr.includes(file));
    assert.equal(await readFile(sourcePath,'utf8'),source);assert.equal(await readFile(membershipPath,'utf8'),membership);
    assert.equal(await readFile(snapshot,'utf8'),bytes);
    await assert.rejects(access(join(root,'reports/maintenance')));
    await assert.rejects(access(join(root,'src/content/data/people/new.yaml')));
   }
   await rm(snapshot);
  }
  const targetMembership=join(root,'src/content/data/host-memberships/demo--new.yaml');
  await writeFile(targetMembership,'existing');
  assert.match(invoke('--apply').stderr,/Host membership already exists/);
  assert.equal(await readFile(targetMembership,'utf8'),'existing');
  await rm(targetMembership);
  const result=invoke('--apply');assert.equal(result.status,0,result.stderr);
  await assert.rejects(access(membershipPath));
  assert.match(await readFile(targetMembership,'utf8'),/person: new/);
 }finally{await rm(root,{recursive:true,force:true});}
});

test('built-site link gate catches missing pages, resources and search anchors',async()=>{
 const {createLocalLinkChecker}=await import('../scripts/lib/local-link-check.mjs');
 const root=await mkdtemp(join(tmpdir(),'link-gate-'));
 try {
  await mkdir(join(root,'weekly/004/transcript'),{recursive:true});
  await mkdir(join(root,'assets'));
  await writeFile(join(root,'weekly/004/transcript/index.html'),`<p id="quote-1">Text</p>
    <p data-id="data-only">No anchor</p>
    <!-- <p id="comment-only">No anchor</p> -->
    <script>const example = '<p id="script-only">';</script>
    <p>&lt;p id="text-only"&gt;</p>
    <template id="template-element"><p id="template-content">Inert</p></template>
    <p ID = 'single-quoted'>Real</p><p id=unquoted>Real</p><p id="a&amp;b">Real</p>`);
  await writeFile(join(root,'assets/qr.webp'),'fixture');
  const check=createLocalLinkChecker(root);
  assert.equal(await check('/weekly/004/transcript#quote-1'),null);
  assert.equal(await check('#quote-1','/weekly/004/transcript'),null);
  for(const id of ['data-only','comment-only','script-only','text-only','template-content'])
    assert.match(await check(`/weekly/004/transcript#${id}`),/missing anchor/);
  for(const id of ['template-element','single-quoted','unquoted','a%26b'])
    assert.equal(await check(`/weekly/004/transcript#${id}`),null);
  assert.equal(await check('/assets/qr.webp'),null);
  assert.match(await check('/weekly/004/transcript#missing'),/missing anchor/);
  assert.match(await check('/weekly/missing'),/missing destination/);
  assert.match(await check('/assets/missing.webp'),/missing destination/);
  assert.match(await check('/bad%zz'),/invalid URL encoding/);
  assert.equal(await check('https://external.example/unverified'),null);
  assert.equal(await check('mailto:hi@example.com'),null);
 }finally{await rm(root,{recursive:true,force:true});}
});
