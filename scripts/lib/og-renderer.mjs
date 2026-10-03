import sharp from 'sharp';
import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {platform,arch,release} from 'node:os';
import {standardCardHtml,fitStandardCard} from './standard-og.mjs';
import {entityCardHtml,fitEntityCard} from './entity-og.mjs';
const require=createRequire(import.meta.url);

// Scheduling/cache policy and unrelated lockfile changes do not affect pixels.
export async function rendererFingerprint(browserVersion) {
  return createHash('sha256').update(await readFile(new URL('./og-renderer.mjs',import.meta.url)))
    .update(JSON.stringify({browserVersion,playwright:require('playwright-core/package.json').version,sharp:sharp.versions,platform:platform(),arch:arch(),os:release()})).digest('hex');
}
export async function renderOgCard(browser,card,{font,logo,photo},destination) {
  const page=await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
  try {
    if(card.collection){await page.setContent(entityCardHtml(card,{font,logo}));await page.evaluate(fitEntityCard);}
    else {await page.setContent(standardCardHtml(card,{font,photo}));await page.evaluate(fitStandardCard);}
    await sharp(await page.screenshot()).png({compressionLevel:9}).toFile(destination);
  }catch(error){throw new Error(`${card.route}: ${error.message}`,{cause:error});}
  finally{await page.close();}
}
