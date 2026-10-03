import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { chromium } from '@playwright/test';
import { load } from 'js-yaml';
import { entityCardHtml } from '../../../scripts/lib/entity-og.mjs';
const out = dirname(fileURLToPath(import.meta.url));
const root = resolve(out, '../../..');
const logoBytes = (await readFile(resolve(root, 'public/assets/brand-kit/logo-next-token.svg'))).toString('base64');
const logo = `data:image/svg+xml;base64,${logoBytes}`;
const font = (await readFile(resolve(root, 'public/assets/league-spartan-black.ttf'))).toString('base64');
const manifest = JSON.parse(await readFile(resolve(root, 'public/assets/og/manifest.json'), 'utf8'));
const cards = [];
for (const [id, collection, entityId, locale, prefix] of [
 ['claude-code-zh', 'products', 'claude-code', 'zh-Hans', ''],
 ['anthropic-en', 'brands', 'anthropic', 'en', '/en'],
]) {
 const entity = load(await readFile(resolve(root, `src/content/data/${collection}/${entityId}.yaml`), 'utf8'));
 const card = { id, collection, locale, route: `${prefix}/wiki/${collection}/${entityId}`, title: entity.name[locale], subtitle: (entity.socialSummary ?? entity.summary)[locale] };
 await copyFile(resolve(root, 'public', `.${manifest[card.route].image}`), resolve(out, `${id}.png`));
 await writeFile(resolve(out, `${id}.html`), entityCardHtml(card, {font, logo:logoBytes}));
 cards.push(card);
}
const browser=await chromium.launch({channel:'chrome',headless:true});
try {
 const thumbnails=await Promise.all(cards.map(async c=>({...c,image:`data:image/png;base64,${(await readFile(resolve(out,`${c.id}.png`))).toString('base64')}`})));
 const preview=`<!doctype html><html lang="zh-Hans"><meta charset="utf-8"><title>Next Token 分享图 · 时间线尺寸预览</title><style>*{box-sizing:border-box}body{margin:0;background:#e7e8ea;color:#111;font:15px Arial,'PingFang SC',sans-serif;padding:32px}h1{font-size:23px;margin:0 0 8px}body>p{color:#555;margin:0 0 24px}.grid{display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap}.post{width:400px;background:white;border:1px solid #d3d6d9;border-radius:16px;padding:18px}.author{display:flex;align-items:center;gap:10px;font-size:14px}.author img{width:38px;height:38px;border-radius:50%}.author span{color:#637080;font-size:13px;display:block;margin-top:3px}.text{line-height:1.6;margin:14px 0}.link{border:1px solid #ddd;border-radius:12px;overflow:hidden}.cover{display:block;width:100%;height:auto}.caption{padding:10px 12px;font-size:13px;color:#666}.caption b{display:block;color:#111;font-size:15px;margin-top:5px}</style><h1>时间线尺寸预览</h1><p>卡片宽 400 px，图片实际显示约 362 px；示意布局，非平台发布截图。</p><div class="grid">${thumbnails.map((c,i)=>`<article class="post"><div class="author"><img src="${logo}"><div><b>Next Token｜词元之外</b><span>@nexttoken · 示例</span></div></div><p class="text">${i?'Anthropic: the company behind Claude.':'Claude Code：面向软件开发的编码 Agent。'}</p><div class="link"><img class="cover" src="${c.image}" alt="${c.title}"><div class="caption">nexttoken.tv<b>${c.title} · Next Token Wiki</b></div></div></article>`).join('')}</div></html>`;
 await writeFile(resolve(out,'preview.html'),preview);
 const page=await browser.newPage({viewport:{width:888,height:535},deviceScaleFactor:1});await page.setContent(preview);await page.evaluate(async()=>await Promise.all([...document.images].map(i=>i.decode())));await page.screenshot({path:resolve(out,'timeline-preview.png'),fullPage:true});await page.close();
 console.log('Created two 1200×630 cards and a 400px timeline preview in '+out);
}finally{await browser.close()}
