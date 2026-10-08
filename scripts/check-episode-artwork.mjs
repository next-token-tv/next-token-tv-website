import {readdir,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {load} from 'js-yaml';
import {artworkErrors,renderedArtworkImages,renderedArtworkErrors} from './lib/episode-artwork.mjs';
const root=resolve(import.meta.dirname,'..'),built=process.argv.includes('--dist'),assets=resolve(root,built?'dist':'public');
const errors=[],episodes=[];
for(const file of await readdir(resolve(root,'src/content/data/episodes'))){
 if(!file.endsWith('.yaml'))continue;
 const data=load(await readFile(resolve(root,'src/content/data/episodes',file),'utf8'));
 const snapshot=data.status==='published'?JSON.parse(await readFile(resolve(root,'src/content/imported/episodes',data.productionImport+'.json'),'utf8')):null;
 if(snapshot && data.number==='001' && snapshot.imageKind!=='artwork')continue;
 if(!snapshot && !(data.status==='announced'&&data.detailLayout))continue;
 const cover=snapshot??data.preview;
 episodes.push({data,cover});
 for(const error of await artworkErrors(assets,cover.images,cover.imageDimensions))errors.push(`#${data.number}: ${error}`);
 if(built)for(const prefix of ['','en/']){
  const html=await readFile(resolve(assets,`${prefix}weekly/${data.number}/index.html`),'utf8');
  for(const error of renderedArtworkErrors(renderedArtworkImages(html,data.number,true),cover.images))errors.push(`${prefix}weekly/${data.number}: ${error}`);
 }
}
if(built)for(const prefix of ['','en/'])for(const path of ['index.html','weekly/index.html']){
 const html=await readFile(resolve(assets,prefix+path),'utf8');
 for(const {data,cover} of episodes){
  const images=renderedArtworkImages(html,data.number);
  if(!images.length)continue;
  for(const error of renderedArtworkErrors(images,cover.images))errors.push(`${prefix}${path} #${data.number}: ${error}`);
 }
}
if(errors.length)throw new Error('Episode artwork gate failed:\n'+errors.join('\n'));
console.log(`Episode artwork gate passed: ${episodes.length} published/prepared square covers${built?', including rendered heroes and cards':''}.`);
