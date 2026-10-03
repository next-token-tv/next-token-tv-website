import {readFile,writeFile,mkdir,rename} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {createHash,randomUUID} from 'node:crypto';
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
export async function restoreOgCache(cache,file,destination) {
  try {
    const bytes=await readFile(resolve(cache,file));
    const metadata=JSON.parse(await readFile(resolve(cache,file+'.json'),'utf8'));
    if(metadata.sha256!==digest(bytes))return false;
    await mkdir(dirname(destination),{recursive:true});
    await writeFile(destination,bytes);
    return true;
  }catch(error){if(error.code==='ENOENT' || error instanceof SyntaxError)return false;throw error;}
}
export async function saveOgCache(cache,file,source) {
  const bytes=await readFile(source);
  await mkdir(cache,{recursive:true});
  const temporary=resolve(cache,`${file}.${randomUUID()}.tmp`);
  await writeFile(temporary,bytes);
  await rename(temporary,resolve(cache,file));
  const metadata=temporary+'.json';
  await writeFile(metadata,JSON.stringify({sha256:digest(bytes)}));
  await rename(metadata,resolve(cache,file+'.json'));
}
