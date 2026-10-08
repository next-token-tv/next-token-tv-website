import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
import {episodeData} from './episode-fixture';
const numbers=episodeData.filter(data=>data.status==='published'
 ? (data.number!=='001' || JSON.parse(readFileSync(`src/content/imported/episodes/${data.productionImport}.json`,'utf8')).imageKind==='artwork')
 : data.detailLayout).map(data=>data.number);
for(const width of [390,1440])for(const prefix of ['','/en'])test(`all episode artwork stays square ${prefix||'zh'} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});
 async function check(selector:string){
  for(const img of await page.locator(selector).all()){
   await img.scrollIntoViewIfNeeded();
   await expect.poll(()=>img.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0)).toBe(true);
   const shape=await img.evaluate((el:HTMLImageElement)=>({natural:el.naturalWidth/el.naturalHeight,rendered:el.getBoundingClientRect().width/el.getBoundingClientRect().height,fit:getComputedStyle(el).objectFit}));
   expect(shape.natural).toBe(1);expect(shape.rendered).toBeCloseTo(1,2);expect(shape.fit).toBe('contain');
  }
 }
 for(const number of numbers){
  await page.goto(`${prefix}/weekly/${number}`);await expect(page.locator('.episode-detail-image img')).toHaveCount(1);await check('.episode-detail-image img');
 }
 for(const path of [prefix||'/',`${prefix}/weekly`]){
  await page.goto(path);
  for(const number of numbers)await check(`[data-episode-number="${number}"] .weekly-image img`);
 }
});
