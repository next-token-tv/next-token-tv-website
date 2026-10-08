import sharp from 'sharp';
import {readFile} from 'node:fs/promises';
import {resolve,sep} from 'node:path';
import {parseDocument} from 'htmlparser2';
export async function artworkErrors(root,images,dimensions) {
 const errors=[];
 if(!dimensions || !(dimensions.width>0) || dimensions.width!==dimensions.height)errors.push('declared cover dimensions must be square');
 if(!images || !images['960'])errors.push('missing 960px cover');
 for(const [width,url] of Object.entries(images??{})) {
  if(!url)continue;
  const file=resolve(root,'.'+url);
  if(!url.startsWith('/assets/') || !file.startsWith(resolve(root)+sep)){errors.push(`invalid cover path: ${url}`);continue;}
  try {
   const image=await sharp(await readFile(file)).metadata();
   if(image.width!==image.height)errors.push(`${url}: actual image is ${image.width}×${image.height}, expected square`);
   if(image.width!==Number(width))errors.push(`${url}: actual width ${image.width} disagrees with ${width}w descriptor`);
   if(image.format!=='webp')errors.push(`${url}: delivery cover must be WebP`);
  }catch(error){errors.push(`${url}: unreadable image (${error.message})`);}
 }
 return errors;
}
// Inspect only episode hero/card images; unrelated brand visuals and OG cards keep their own ratios.
export function renderedArtworkImages(html,number,detail=false) {
 const result=[];
 function visit(node,selected=false) {
  const a=node.attribs??{},classes=(a.class??'').split(/\s+/);
  const active=selected || (detail && classes.includes('episode-detail-image')) || a['data-episode-number']===number;
  if(active && node.name==='img' && (detail || classes.includes('episode-image') || a.src?.includes('weekly-')))result.push(a);
  for(const child of node.children??[])visit(child,active);
 }
 visit(parseDocument(html));return result;
}
export function renderedArtworkErrors(images,expected) {
 if(!images.length)return ['missing rendered episode cover'];
 const allowed=new Set(Object.values(expected));const errors=[];
 for(const image of images){
  if(!allowed.has(image.src))errors.push(`rendered cover uses an unapproved variant: ${image.src}`);
  for(const variant of (image.srcset??'').split(',').filter(Boolean)){
   const [url,width]=variant.trim().split(/\s+/);
   if(expected[width?.replace(/w$/,'')]!==url)errors.push(`rendered srcset disagrees with cover variants: ${variant}`);
  }
  if(!image.width || Number(image.width)!==Number(image.height))errors.push('rendered image dimensions must be square');
 }
 return errors;
}
