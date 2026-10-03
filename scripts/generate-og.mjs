import { pruneObsoleteOgImages } from './lib/og-retention.mjs';
import { standardCardHtml, fitStandardCard } from './lib/standard-og.mjs';
import { entityCardHtml, fitEntityCard } from './lib/entity-og.mjs';
import sharp from 'sharp';
import { announcementCopy } from '../src/data/announcement-copy.mjs';
import { readFile, readdir, mkdir, writeFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { chromium } from '@playwright/test';
import { load } from 'js-yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'public/assets/og');
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
  const episode = episodes.find(e => e.id === t.episodeId);
  if (!episode) throw new Error(`Unknown transcript episode ${t.episodeId}`);
  cards.push({ route: `${t.locale === 'en' ? '/en' : ''}/weekly/${episode.number}/transcript`, locale: t.locale, label: `WEEKLY #${episode.number} · ${t.locale === 'en' ? 'TRANSCRIPT' : '文字稿'}`, title: t.title.replace(/^.*?[｜|]/, '').trim(), subtitle: t.locale === 'en' ? `${t.chapters.length} chapters · Read & search` : `${t.chapters.length} 个章节 · 完整对谈 · 全文搜索` });
}
const font = (await readFile(resolve(root, 'public/assets/league-spartan-black.ttf'))).toString('base64');
const version = await readFile(resolve(root, 'scripts/lib/standard-og.mjs'));
const entityTemplate = await readFile(resolve(root, 'scripts/lib/entity-og.mjs'));
const logo = (await readFile(resolve(root, 'public/assets/brand-kit/logo-next-token.svg'))).toString('base64');
const manifest = {};
let browser;
const layoutErrors = [];
try {
  for (const card of cards) {
    const photo = card.photo ? await readFile(resolve(root, 'public', `.${card.photo}`)) : null;
    const hash = createHash('sha256').update(card.collection ? entityTemplate : version).update(card.collection ? logo : '').update(font).update(JSON.stringify(card)).update(photo ?? '').digest('hex').slice(0, 12);
    const file = `${card.route.replaceAll('/', '-').replace(/^-|-$/g, '') || 'home'}-${hash}.png`;
    manifest[card.route] = { image: `/assets/og/${file}`, alt: `${card.label} — ${card.title.replaceAll('\n', ' ')}` };
    try { await access(resolve(out, file)); continue; } catch {}
    browser ??= await chromium.launch({ channel: 'chrome', headless: true });
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    if (card.collection) {
      await page.setContent(entityCardHtml(card, { font, logo }));
      try { await page.evaluate(fitEntityCard); }
      catch (error) { layoutErrors.push(`${card.route}: ${error.message}`); await page.close(); continue; }
    } else {
      await page.setContent(standardCardHtml(card, { font, photo }));
      await page.evaluate(fitStandardCard);
    }
    const screenshot = await page.screenshot();
    await sharp(screenshot).png({ compressionLevel: 9 }).toFile(resolve(out, file));
    await page.close();
  }
} finally { await browser?.close(); }
if (layoutErrors.length) throw new Error(layoutErrors.join('\n'));
await writeFile(resolve(out, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${cards.length} Open Graph cards (1200 × 630).`);
const cleanup = await pruneObsoleteOgImages(root, manifest);
console.log(`Removed ${cleanup.removed} obsolete OG images (${(cleanup.bytes / 1048576).toFixed(2)} MiB).`);
