import { pruneObsoleteOgImages } from './lib/og-retention.mjs';
import {restoreOgCache,saveOgCache} from './lib/og-cache.mjs';
import {mapConcurrent} from './lib/concurrent-map.mjs';
import {availableParallelism} from 'node:os';
import {rendererFingerprint,renderOgCard} from './lib/og-renderer.mjs';
import { announcementCopy } from '../src/data/announcement-copy.mjs';
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { chromium } from '@playwright/test';
import { load } from 'js-yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'public/assets/og');
const started=Date.now();
const concurrency=Number(process.env.NEXTTOKEN_OG_CONCURRENCY??Math.min(4,availableParallelism()));
if(!Number.isInteger(concurrency)||concurrency<1||concurrency>8)throw new Error('NEXTTOKEN_OG_CONCURRENCY must be an integer from 1 to 8');
const cache=resolve(process.env.NEXTTOKEN_OG_CACHE_DIR??resolve(root,'.cache/og'));
let restored=0,generated=0;
await mkdir(out, { recursive: true });
const read = async (path) => load(await readFile(resolve(root, path), 'utf8'));
const collection = async (name) => Promise.all((await readdir(resolve(root, `src/content/data/${name}`))).filter(n => n.endsWith('.yaml')).map(async n => ({ id: n.slice(0, -5), ...await read(`src/content/data/${name}/${n}`) })));
const [people, episodes, show, brands, products] = await Promise.all([collection('people'), collection('episodes'), read('src/content/data/shows/next-token-weekly.yaml'), collection('brands'), collection('products')]);
const cards = [];
const hostIds = new Set((await collection('host-memberships')).map(m => m.person));
for (const locale of ['zh-Hans', 'en']) {
  const en = locale === 'en'; const prefix = en ? '/en' : '';
  cards.push({ route: prefix || '/', locale, label: 'NEXT TOKEN', title: en ? 'Beyond the next token.' : '不只预测\n下一个词元。', subtitle: en ? 'AI · Products · People' : 'AI 技术 · 产品 · 现实影响' });
  cards.push({ route: `${prefix}/weekly`, locale, label: 'NEXT TOKEN WEEKLY', title: show.page[locale].heading.join('\n'), subtitle: en ? 'Four co-hosts. Every week.' : '四位联合主理人 · 每周圆桌对谈' });
  for (const p of people) cards.push({ route: `${prefix}/wiki/people/${p.id}`, locale, label: hostIds.has(p.id) ? (en ? 'CO-HOST' : '联合主理人') : (en ? 'PEOPLE' : '人物库'), title: p.name[locale], subtitle: p.bio[locale], photo: p.photo });
  for (const [directory, entities, label] of [['brands', brands, en ? 'BRAND' : '品牌'], ['products', products, en ? 'PRODUCT' : '产品']]) {
    for (const entity of entities) cards.push({ route: `${prefix}/wiki/${directory}/${entity.id}`, locale, label, collection: directory, title: entity.name[locale], subtitle: (entity.socialSummary ?? entity.summary)[locale] });
  }
  for (const e of episodes) {
    cards.push({ route: `${prefix}/weekly/${e.number}`, locale, label: `WEEKLY #${e.number} · ${e.status === 'published' ? (e.media.audio && !e.media.video ? (en ? 'AUDIO OUT NOW' : '音频已上线') : !e.media.audio && !e.media.video ? (en ? 'TRANSCRIPT OUT NOW' : '文字稿已上线') : (en ? 'EPISODE' : '本期节目')) : announcementCopy(e, locale).label}`, title: e.status === 'published' ? e.homepage[locale].heading.join(en ? ' ' : '') : e.preview.heading[locale].join(en ? ' ' : ''), subtitle: en ? 'Next Token｜词元之外' : 'Next Token Weekly · 词元之外' });
  }
}
for (const name of await readdir(resolve(root, 'src/content/imported/transcripts'))) {
  if (!name.endsWith('.json')) continue;
  const t = JSON.parse(await readFile(resolve(root, 'src/content/imported/transcripts', name), 'utf8'));
  if (t.publicationStatus !== 'published') continue;
  const episode = episodes.find(e => e.id === t.episodeId);
  if (!episode) throw new Error(`Unknown transcript episode ${t.episodeId}`);
  cards.push({ route: `${t.locale === 'en' ? '/en' : ''}/weekly/${episode.number}/transcript`, locale: t.locale, label: `WEEKLY #${episode.number} · ${t.locale === 'en' ? 'TRANSCRIPT' : '文字稿'}`, title: t.title.replace(/^.*?[｜|]/, '').trim(), subtitle: t.locale === 'en' ? `${t.chapters.length} chapters · Read & search` : `${t.chapters.length} 个章节 · 完整对谈 · 全文搜索` });
}
const font = (await readFile(resolve(root, 'public/assets/league-spartan-black.ttf'))).toString('base64');
const version = await readFile(resolve(root, 'scripts/lib/standard-og.mjs'));
const entityTemplate = await readFile(resolve(root, 'scripts/lib/entity-og.mjs'));
const logo = (await readFile(resolve(root, 'public/assets/brand-kit/logo-next-token.svg'))).toString('base64');
let manifest;
let browser;
try {
  browser = await chromium.launch({channel:'chrome',headless:true});
  const renderer=await rendererFingerprint(browser.version());
  const entries=await mapConcurrent(cards,concurrency,async card=>{
    const photo = card.photo ? await readFile(resolve(root, 'public', `.${card.photo}`)) : null;
    const hash = createHash('sha256').update(renderer).update(card.collection ? entityTemplate : version).update(card.collection ? logo : '').update(font).update(JSON.stringify(card)).update(photo ?? '').digest('hex').slice(0, 12);
    const file = `${card.route.replaceAll('/', '-').replace(/^-|-$/g, '') || 'home'}-${hash}.png`;
    const entry=[card.route,{ image: `/assets/og/${file}`, alt: `${card.label} — ${card.title.replaceAll('\n', ' ')}` }];
    if(await restoreOgCache(cache,file,resolve(out,file))){restored++;return entry;}
    await renderOgCard(browser,card,{font,logo,photo},resolve(out,file));
    await saveOgCache(cache,file,resolve(out,file));
    generated++;
    return entry;
  });
  manifest=Object.fromEntries(entries);
} finally { await browser?.close(); }
await writeFile(resolve(out, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${cards.length} Open Graph cards (1200 × 630): ${generated} generated, ${restored} restored, concurrency ${concurrency}; ${((Date.now()-started)/1000).toFixed(2)}s.`);
const cleanup = await pruneObsoleteOgImages(root, manifest);
console.log(`Removed ${cleanup.removed} obsolete OG images (${(cleanup.bytes / 1048576).toFixed(2)} MiB).`);
