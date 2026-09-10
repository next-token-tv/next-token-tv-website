import { readFile, readdir, mkdir, writeFile, access, unlink } from 'node:fs/promises';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { chromium } from '@playwright/test';
import { load } from 'js-yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'public/assets/og');
await mkdir(out, { recursive: true });
const read = async (path) => load(await readFile(resolve(root, path), 'utf8'));
const collection = async (name) => Promise.all((await readdir(resolve(root, `src/content/data/${name}`))).filter(n => n.endsWith('.yaml')).map(async n => ({ id: n.slice(0, -5), ...await read(`src/content/data/${name}/${n}`) })));
const [people, episodes, show] = await Promise.all([collection('people'), collection('episodes'), read('src/content/data/shows/next-token-weekly.yaml')]);
const cards = [];
const hostIds = new Set((await collection('host-memberships')).map(m => m.person));
for (const locale of ['zh-Hans', 'en']) {
  const en = locale === 'en'; const prefix = en ? '/en' : '';
  cards.push({ route: `${prefix}/`, locale, label: 'NEXT TOKEN', title: en ? 'Beyond the next token.' : '不只预测\n下一个词元。', subtitle: en ? 'AI · Products · People' : 'AI 技术 · 产品 · 现实影响' });
  cards.push({ route: `${prefix}/weekly/`, locale, label: 'NEXT TOKEN WEEKLY', title: show.page[locale].heading.join('\n'), subtitle: en ? 'Four co-hosts. Every week.' : '四位联合主理人 · 每周圆桌对谈' });
  for (const p of people) cards.push({ route: `${prefix}/wiki/people/${p.id}/`, locale, label: hostIds.has(p.id) ? (en ? 'CO-HOST' : '联合主理人') : (en ? 'PEOPLE' : '人物库'), title: p.name[locale], subtitle: p.bio[locale], photo: p.photo });
  for (const e of episodes) {
    cards.push({ route: `${prefix}/weekly/${e.number}/`, locale, label: `WEEKLY #${e.number} · ${en ? (e.status === 'published' ? 'EPISODE' : 'PREVIEW') : (e.status === 'published' ? '本期节目' : '录制预告')}`, title: e.status === 'published' ? e.homepage[locale].heading.join(en ? ' ' : '') : e.preview.heading[locale].join(''), subtitle: en ? 'Next Token | 词元之外' : 'Next Token Weekly · 词元之外' });
  }
}
for (const name of await readdir(resolve(root, 'src/content/imported/transcripts'))) {
  if (!name.endsWith('.json')) continue;
  const t = JSON.parse(await readFile(resolve(root, 'src/content/imported/transcripts', name), 'utf8'));
  const episode = episodes.find(e => e.id === t.episodeId);
  if (!episode) throw new Error(`Unknown transcript episode ${t.episodeId}`);
  cards.push({ route: `${t.locale === 'en' ? '/en' : ''}/weekly/${episode.number}/transcript/`, locale: t.locale, label: `WEEKLY #${episode.number} · ${t.locale === 'en' ? 'TRANSCRIPT' : '文字稿'}`, title: t.title.replace(/^.*?[｜|]/, '').trim(), subtitle: t.locale === 'en' ? `${t.chapters.length} chapters · Read & search` : `${t.chapters.length} 个章节 · 完整对谈 · 全文搜索` });
}
const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const font = (await readFile(resolve(root, 'public/assets/league-spartan-black.ttf'))).toString('base64');
const version = await readFile(fileURLToPath(import.meta.url));
const manifest = {};
let browser;
try {
  for (const card of cards) {
    const photo = card.photo ? await readFile(resolve(root, 'public', `.${card.photo}`)) : null;
    const hash = createHash('sha256').update(version).update(font).update(JSON.stringify(card)).update(photo ?? '').digest('hex').slice(0, 12);
    const file = `${card.route.replaceAll('/', '-').replace(/^-|-$/g, '') || 'home'}-${hash}.png`;
    manifest[card.route] = { image: `/assets/og/${file}`, alt: `${card.label} — ${card.title.replaceAll('\n', ' ')}` };
    try { await access(resolve(out, file)); continue; } catch {}
    browser ??= await chromium.launch({ channel: 'chrome', headless: true });
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    await page.setContent(`<html lang="${card.locale}"><style>
      @font-face{font-family:Display;src:url(data:font/ttf;base64,${font})}*{box-sizing:border-box}body{margin:0;background:#f1eee5;color:#111;font-family:Arial,'PingFang SC',sans-serif}main{height:39.375rem;padding:3rem 3.5rem;display:flex;flex-direction:column;border-top:1rem solid #ff4b0a}.brand{font-family:Display;font-size:1.7rem}.label{margin-top:2.8rem;color:#c83200;font-size:1.1rem;font-weight:bold;letter-spacing:.08em}.content{display:flex;gap:3rem;align-items:center;flex:1;min-height:0}.copy{flex:1;min-width:0}h1{font-family:Display,'PingFang SC',sans-serif;font-size:3.8rem;line-height:1.2;margin:1rem 0 1.5rem;white-space:pre-line;overflow-wrap:break-word}p{font-size:1.15rem;line-height:1.6;margin:0;color:#56534d}img{width:19rem;height:19rem;object-fit:cover}footer{font-size:.95rem;border-top:.0625rem solid #aaa;padding-top:1rem;display:flex;justify-content:space-between}
      </style><main><div class="brand">Next Token | 词元之外</div><div class="content"><div class="copy"><div class="label">${escape(card.label)}</div><h1>${escape(card.title)}</h1><p>${escape(card.subtitle)}</p></div>${photo ? `<img src="data:image/${extname(card.photo).slice(1)};base64,${photo.toString('base64')}">` : ''}</div><footer><span>nexttoken.tv</span><span>${escape(card.route)}</span></footer></main></html>`);
    await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode())); const h = document.querySelector('h1'); while(h.getBoundingClientRect().height > 235 && parseFloat(getComputedStyle(h).fontSize) > 32) h.style.fontSize = `${parseFloat(getComputedStyle(h).fontSize) / 16 - 0.125}rem`; });
    await page.screenshot({ path: resolve(out, file) });
    await page.close();
  }
} finally { await browser?.close(); }
await writeFile(resolve(out, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
const active = new Set(Object.values(manifest).map(c => c.image.split('/').at(-1)));
for (const name of await readdir(out)) {
  if (/^[a-z0-9-]+-[a-f0-9]{12}\.png$/.test(name) && !active.has(name)) await unlink(resolve(out, name));
}
console.log(`Prepared ${cards.length} Open Graph cards (1200 × 630).`);
