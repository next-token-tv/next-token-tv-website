import {readFile, stat} from 'node:fs/promises';
import {resolve, sep} from 'node:path';
import {parseDocument} from 'htmlparser2';

function documentIds(html) {
  const ids=new Set();
  const visit=node=>{
    if(node.attribs && Object.hasOwn(node.attribs,'id'))ids.add(node.attribs.id);
    // Template contents are inert and do not provide document anchors.
    if(node.name!=='template')for(const child of node.children??[])visit(child);
  };
  visit(parseDocument(html));
  return ids;
}

// Check the generated site only; external availability needs a separate audit.
export function createLocalLinkChecker(dist) {
  const root=resolve(dist), cache=new Map();
  return async function check(raw, pagePath='/') {
    let url;
    try {url=new URL(raw.replaceAll('&amp;', '&'),`https://nexttoken.tv${pagePath}`);}
    catch {return `invalid URL ${raw}`;}
    if(url.origin!=='https://nexttoken.tv')return null;
    let pathname;
    try {pathname=decodeURIComponent(url.pathname);}
    catch {return `invalid URL encoding ${raw}`;}
    const target=resolve(root,`.${pathname}`);
    if(target!==root && !target.startsWith(root+sep))return `destination outside build ${raw}`;
    if(!cache.has(target))cache.set(target,(async()=>{
      try {
        const file=(await stat(target)).isDirectory()?resolve(target,'index.html'):target;
        if(!(await stat(file)).isFile())return null;
        return {ids:file.endsWith('.html')?documentIds(await readFile(file,'utf8')):null};
      }catch(error){if(['ENOENT','ENOTDIR'].includes(error.code))return null;throw error;}
    })());
    const result=await cache.get(target);
    if(!result)return `missing destination ${raw}`;
    if(url.hash && result.ids!==null) {
      let id;
      try {id=decodeURIComponent(url.hash.slice(1));}catch{return `invalid anchor encoding ${raw}`;}
      if(!result.ids.has(id))return `missing anchor ${raw}`;
    }
    return null;
  };
}
