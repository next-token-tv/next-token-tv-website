import {test,expect} from '@playwright/test';
for(const width of [390,1440])for(const prefix of ['','/en'])test(`005 published audio page ${prefix || 'zh'} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});
 await page.goto(`${prefix}/weekly/005`);
 const cover=page.locator('.episode-detail-image img');
 await expect.poll(()=>cover.evaluate((img:HTMLImageElement)=>img.complete && img.naturalWidth>0)).toBe(true);
 const size=await cover.evaluate((img:HTMLImageElement)=>({width:img.naturalWidth,height:img.naturalHeight,rect:img.getBoundingClientRect().toJSON()}));
 expect(size.width).toBe(size.height);
 expect(size.rect.width/size.rect.height).toBeCloseTo(1,2);
 await expect(page.locator('h1')).toContainText(prefix?'personal agent':'PA');
 await expect(page.locator('.episode-detail-meta')).toContainText(prefix?'Wenyu River Park':'温榆河公园');
 await expect(page.locator('.episode-show-notes')).toContainText('1:12:54');
 await expect(page.locator('.episode-detail-platforms a[href*="xiaoyuzhoufm.com/episode/"]')).toHaveAttribute('href','https://www.xiaoyuzhoufm.com/episode/6ac6dabe195d838e2aee61a0');
 await expect(page.locator('img[src*="community-qr"]')).toHaveAttribute('src','/assets/weekly-005/community-qr-20261008.webp');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.screenshot({path:`/tmp/weekly005-${prefix?'en':'zh'}-${width}.png`,fullPage:true});
});
