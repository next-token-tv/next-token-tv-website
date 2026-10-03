import { readFile, writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { updateRedirects, resolveMigrations, entityKey, collections } from './lib/entity-migrations.mjs';
const root=resolve(import.meta.dirname,'..');
const records=JSON.parse(await readFile(resolve(root,'src/content/entity-migrations.json'),'utf8'));
for(const {from} of records){
  const {type,id}=entityKey(from);
  try {await access(resolve(root,`src/content/data/${collections[type]}/${id}.yaml`));}
  catch(error){if(error.code==='ENOENT')continue;throw error;}
  throw new Error(`Active entity occupies retired redirect source: ${from}`);
}
for(const {to} of resolveMigrations(records)){const {type,id}=entityKey(to);await access(resolve(root,`src/content/data/${collections[type]}/${id}.yaml`));}
const path=resolve(root,'public/_redirects'),text=await readFile(path,'utf8'),next=updateRedirects(text,records);
if(process.argv.includes('--check')){if(next!==text)throw new Error('Entity redirects are stale; run npm run generate:redirects');}
else await writeFile(path,next);
console.log(`${records.length} entity migrations validated`);
