import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import sharp from 'sharp';
import {artworkErrors,renderedArtworkImages,renderedArtworkErrors} from '../scripts/lib/episode-artwork.mjs';
test('artwork gate checks actual pixels, declarations, widths and missing variants',async()=>{
 const root=await mkdtemp(join(tmpdir(),'square-gate-'));
 try {
  await mkdir(join(root,'assets'));
  const file=join(root,'assets/cover.webp'),images={'960':'/assets/cover.webp'},dimensions={width:3000,height:3000};
  const render=(width,height)=>sharp({create:{width,height,channels:3,background:'white'}}).webp().toFile(file);
  await render(960,960);assert.deepEqual(await artworkErrors(root,images,dimensions),[]);
  assert.match((await artworkErrors(root,images,{width:1920,height:1080})).join(),/declared/);
  await render(960,540);assert.match((await artworkErrors(root,images,dimensions)).join(),/actual image/);
  await render(720,720);assert.match((await artworkErrors(root,images,dimensions)).join(),/descriptor/);
  await rm(file);assert.match((await artworkErrors(root,images,dimensions)).join(),/unreadable/);
  assert.match((await artworkErrors(root,{},dimensions)).join(),/missing 960/);
 }finally{await rm(root,{recursive:true,force:true});}
});
test('rendered gate rejects landscape substitutions and ignores permanent brand visuals',()=>{
 const expected={'960':'/assets/square.webp'};
 const html='<img src="/assets/brand-landscape.webp"><a data-episode-number="005"><img src="/assets/weekly-005-wrong.webp" width="960" height="540"></a>';
 const selected=renderedArtworkImages(html,'005');assert.equal(selected.length,1);
 assert.match(renderedArtworkErrors(selected,expected).join(),/unapproved/);
 assert.match(renderedArtworkErrors(selected,expected).join(),/dimensions/);
 assert.deepEqual(renderedArtworkErrors([{src:expected['960'],width:'960',height:'960',srcset:'/assets/square.webp 960w'}],expected),[]);
 assert.match(renderedArtworkErrors([{src:expected['960'],width:'960',height:'960',srcset:'/assets/landscape.webp 960w'}],expected).join(),/srcset/);
 assert.match(renderedArtworkErrors([],expected).join(),/missing/);
});
