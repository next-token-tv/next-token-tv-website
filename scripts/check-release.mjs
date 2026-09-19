import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'js-yaml';
import { hasRecordingDatePassed } from './lib/announcement-schedule.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const errors = [];
const pages = new Map();
const publishedText = new Map();
const sourceExtensions = /\.(?:astro|ts|mjs|yaml)$/;
const sourceUrlPattern = /https?:\/\/[^\s"'`<>]+|\/[^\s"'`<>]+/g;
const internalPathPattern = /^\/(?:en\/)?(?:weekly|wiki|partners|brand-kit|design-system|sitemap|api|people|brands|products)(?:\/|[?#]|$)|^\/en(?:\/|[?#]|$)/;
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (/\.(?:html|json|md|txt|xml)$/.test(entry.name)) {
      const content = await readFile(path, 'utf8');
      publishedText.set(path, content);
      if (entry.name.endsWith('.html')) pages.set(path, content);
    }
  }
}
await walk(dist);
if (!pages.size) throw new Error('Build the website before running check:release');

async function checkSourceUrls(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      await checkSourceUrls(file);
      continue;
    }
    if (!sourceExtensions.test(entry.name)) continue;
    const content = await readFile(file, 'utf8');
    for (const [raw] of content.matchAll(sourceUrlPattern)) {
      if (!raw.startsWith('https://nexttoken.tv/') && !internalPathPattern.test(raw)) continue;
      const path = raw.startsWith('https://') ? new URL(raw).pathname : raw.split(/[?#]/, 1)[0].replace(/[),}\]]+$/, '');
      if (path !== '/' && path.endsWith('/')) errors.push(`${file.slice(root.length + 1)}: trailing slash in source URL ${raw}`);
    }
  }
}
for (const directory of ['src/components', 'src/data', 'src/pages', 'src/layouts', 'src/content/data', 'scripts/lib']) {
  await checkSourceUrls(resolve(root, directory));
}
const docs = (await readdir(resolve(root, 'docs'))).filter((name) => name.endsWith('.md')).map((name) => `docs/${name}`);
for (const file of ['README.md', ...docs]) {
  const content = await readFile(resolve(root, file), 'utf8');
  for (const [raw] of content.matchAll(/https:\/\/nexttoken\.tv\/[^\s"'`<>()[\]{}]*/g)) {
    if (new URL(raw).pathname !== '/' && new URL(raw).pathname.endsWith('/')) errors.push(`${file}: trailing slash in documented URL ${raw}`);
  }
  for (const [, raw] of content.matchAll(/`(\/(?:en(?:\/|$)|(?:en\/)?(?:weekly|wiki|partners|brand-kit|design-system|sitemap|api|people|brands|products))[^`]*)`/g)) {
    if (raw.includes('<')) continue;
    if (raw.split(/[?#]/, 1)[0].endsWith('/')) errors.push(`${file}: trailing slash in documented path ${raw}`);
  }
}

let llms = '';
try {
  llms = (await readFile(resolve(dist, 'llms.txt'), 'utf8')).replace(/^\uFEFF/, '');
} catch {
  errors.push('missing /llms.txt');
}
if (llms) {
  if (!llms.startsWith('# Next Token｜词元之外\n\n> ')) errors.push('/llms.txt: invalid title or summary');
  for (const [, raw] of llms.matchAll(/\]\((https:\/\/nexttoken\.tv\/[^)]+)\)/g)) {
    const url = new URL(raw);
    const target = resolve(dist, `.${decodeURIComponent(url.pathname)}`);
    let destination = target;
    try {
      if ((await stat(target)).isDirectory()) destination = resolve(target, 'index.html');
      await stat(destination);
    } catch { errors.push(`/llms.txt: missing destination ${raw}`); }
  }
}

const transcriptDirectory = resolve(root, 'src/content/imported/transcripts');
for (const name of await readdir(transcriptDirectory)) {
  if (!name.endsWith('.json')) continue;
  const transcript = JSON.parse(await readFile(resolve(transcriptDirectory, name), 'utf8'));
  const number = transcript.episodeId?.match(/--(\d{3})$/)?.[1];
  if (!number) {
    errors.push(`${name}: invalid transcript episode ID`);
    continue;
  }
  const markdownPath = resolve(dist, `weekly/${number}/transcript.md`);
  const markdownUrl = `https://nexttoken.tv/weekly/${number}/transcript.md`;
  let markdownExists = true;
  try { await stat(markdownPath); } catch { markdownExists = false; }
  if (transcript.publicationStatus === 'published' && !markdownExists) {
    errors.push(`${name}: published transcript is missing Markdown output`);
  }
  if (transcript.publicationStatus === 'review-draft' && (markdownExists || llms.includes(markdownUrl))) {
    errors.push(`${name}: review draft is exposed through a public machine-readable route`);
  }
}

const apiPayloads = new Map();
for (const collection of ['brands', 'products', 'people']) {
  const collectionPath = resolve(dist, `api/v1/wiki/${collection}.json`);
  let payload;
  try {
    payload = JSON.parse(await readFile(collectionPath, 'utf8'));
  } catch {
    errors.push(`missing or invalid /api/v1/wiki/${collection}.json`);
    continue;
  }
  apiPayloads.set(collection, payload);
  if (payload.schemaVersion !== 1 || payload.collection !== collection || payload.count !== payload.data?.length) {
    errors.push(`/api/v1/wiki/${collection}.json: invalid collection envelope`);
    continue;
  }
  for (const record of payload.data) {
    if (!record.id || !record.name?.['zh-Hans'] || !record.name?.en || !record.relationships) {
      errors.push(`/api/v1/wiki/${collection}.json: incomplete record ${record.id ?? '(missing id)'}`);
      continue;
    }
    const detailPath = resolve(dist, `api/v1/wiki/${collection}/${record.id}.json`);
    try {
      const detail = JSON.parse(await readFile(detailPath, 'utf8'));
      if (detail.id !== record.id || detail.apiUrl !== `https://nexttoken.tv/api/v1/wiki/${collection}/${record.id}.json`) {
        errors.push(`/api/v1/wiki/${collection}/${record.id}.json: invalid detail record`);
      }
    } catch {
      errors.push(`missing or invalid /api/v1/wiki/${collection}/${record.id}.json`);
    }
  }
  const serialized = JSON.stringify(payload);
  for (const forbidden of ['productionImport', 'transcriptImports', 'episodeImports', 'unlinkedCandidates']) {
    if (serialized.includes(forbidden)) errors.push(`/api/v1/wiki/${collection}.json: exposes internal field ${forbidden}`);
  }
}
try {
  const index = JSON.parse(await readFile(resolve(dist, 'api/v1/wiki.json'), 'utf8'));
  if (index.schemaVersion !== 1 || index.collections?.map((entry) => entry.id).join(',') !== 'brands,products,people') {
    errors.push('/api/v1/wiki.json: invalid API index');
  }
  if (index.documentation !== 'https://nexttoken.tv/api') errors.push('/api/v1/wiki.json: invalid documentation URL');
} catch {
  errors.push('missing or invalid /api/v1/wiki.json');
}
const apiBrands = apiPayloads.get('brands')?.data ?? [];
const apiProducts = apiPayloads.get('products')?.data ?? [];
for (const brand of apiBrands) {
  const expectedEpisodes = new Set([
    ...brand.relationships.episodes,
    ...apiProducts.filter((product) => product.brand === brand.id).flatMap((product) => product.relationships.episodes),
  ]);
  if (expectedEpisodes.size !== brand.relationships.episodes.length) {
    errors.push(`/api/v1/wiki/brands/${brand.id}.json: missing episodes related through products`);
  }
}

const redirectLines = (await readFile(resolve(root, 'public/_redirects'), 'utf8'))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'));
const redirectsBySource = new Map(redirectLines.map((line) => {
  const [source, target, status] = line.split(/\s+/);
  return [source, `${target} ${status}`];
}));
for (const line of redirectLines) {
  const [source, target, status] = line.split(/\s+/);
  if (source !== '/' && source.endsWith('/') && !source.includes('*')) {
    const slashlessSource = source.slice(0, -1);
    if (redirectsBySource.get(slashlessSource) !== `${target} ${status}`) {
      errors.push(`redirect is missing matching slashless source: ${line}`);
    }
  }
  if (!target?.startsWith('/')) {
    errors.push(`redirect has invalid destination: ${line}`);
    continue;
  }
  if (target !== '/' && target.endsWith('/')) errors.push(`redirect destination has trailing slash: ${line}`);
  if (target.includes(':')) continue;
  const targetPath = resolve(dist, `.${target}`);
  let destination = targetPath;
  try {
    if ((await stat(targetPath)).isDirectory()) destination = resolve(targetPath, 'index.html');
    await stat(destination);
  } catch {
    errors.push(`redirect has missing destination: ${line}`);
  }
}

for (const [file, content] of publishedText) {
  for (const [, raw] of content.matchAll(/\b(?:href|action)="([^"]+)"/g)) {
    if (!raw.startsWith('/')) continue;
    const url = new URL(raw, 'https://nexttoken.tv');
    if (url.pathname !== '/' && url.pathname.endsWith('/')) errors.push(`${file.slice(dist.length)}: trailing slash in ${raw}`);
  }
  for (const [raw] of content.matchAll(/https:\/\/nexttoken\.tv[^\s"<>()[\]{}]*/g)) {
    const url = new URL(raw);
    if (url.pathname !== '/' && url.pathname.endsWith('/')) errors.push(`${file.slice(dist.length)}: trailing slash in ${raw}`);
  }
}

for (const [file, html] of pages) {
  const pagePath = file.slice(dist.length).replace(/index\.html$/, '');
  for (const [, raw] of html.matchAll(/\bhref="([^"]+)"/g)) {
    const url = new URL(raw.replaceAll('&amp;', '&'), `https://nexttoken.tv${pagePath}`);
    if (url.origin !== 'https://nexttoken.tv') continue;
    const target = resolve(dist, `.${decodeURIComponent(url.pathname)}`);
    let destination = target;
    try {
      if ((await stat(target)).isDirectory()) destination = resolve(target, 'index.html');
      await stat(destination);
      if (url.hash && pages.has(destination)) {
        const id = decodeURIComponent(url.hash.slice(1));
        if (!pages.get(destination).includes(`id="${id}"`)) errors.push(`${pagePath}: missing anchor ${raw}`);
      }
    } catch { errors.push(`${pagePath}: missing destination ${raw}`); }
  }
}
const hosts = {
  xiaoyuzhou: ['www.xiaoyuzhoufm.com'], 'apple-podcasts': ['podcasts.apple.com'],
  spotify: ['open.spotify.com'], bilibili: ['www.bilibili.com', 'b23.tv'], youtube: ['www.youtube.com', 'youtube.com', 'youtu.be'],
};
const directory = resolve(root, 'src/content/data/episodes');
let episodes = 0;
const published = [];
const announced = [];
for (const name of await readdir(directory)) {
  if (!name.endsWith('.yaml')) continue;
  const data = load(await readFile(resolve(directory, name), 'utf8'));
  episodes++;
  if (data.status === 'published') published.push(data);
  if (data.status === 'published') {
    if (!data.media?.audio && !data.media?.video) errors.push(`${name}: published episode has no released medium`);
    const snapshot = JSON.parse(await readFile(resolve(root, `src/content/imported/episodes/${data.productionImport}.json`), 'utf8'));
    if (!snapshot.releaseDate || Date.parse(snapshot.releaseDate) > Date.now()) errors.push(`${name}: missing or future release date`);
  }
  if (data.status === 'announced') announced.push(data);
  for (const prefix of ['', '/en']) {
    const route = resolve(dist, `.${prefix}/weekly/${data.number}/index.html`);
    if (!pages.has(route)) errors.push(`${name}: missing ${prefix || 'Chinese'} episode route`);
  }
  if (data.status === 'announced' && hasRecordingDatePassed(data.scheduledAt, data.timeZone)) {
    errors.push(`${name}: recording date has passed; review the announcement status before release`);
  }
  for (const platform of data.platforms ?? []) {
    if (!platform.href) continue;
    const url = new URL(platform.href);
    if (url.protocol !== 'https:' || !hosts[platform.platform]?.includes(url.hostname)) errors.push(`${name}: invalid ${platform.platform} destination`);
    if (!platform.action?.['zh-Hans'] || !platform.action?.en) errors.push(`${name}: missing bilingual platform action`);
    for (const prefix of ['', '/en']) {
      const html = pages.get(resolve(dist, `.${prefix}/weekly/${data.number}/index.html`)) ?? '';
      if (!html.includes(platform.href.replaceAll('&', '&amp;'))) errors.push(`${name}: missing platform episode link in ${prefix || 'Chinese'} page`);
    }
  }
}
const latest = published.filter((data) => data.show === 'next-token-weekly').sort((a, b) => Number(b.number) - Number(a.number))[0];
const next = announced.filter((data) => data.show === 'next-token-weekly').sort((a, b) => Date.parse(a.scheduledAt) - Date.parse(b.scheduledAt))[0];
for (const prefix of ['', '/en']) {
  for (const suffix of ['/', '/weekly/']) {
    const html = pages.get(resolve(dist, `.${prefix}${suffix}index.html`)) ?? '';
    if (latest && !html.includes(`href="${prefix}/weekly/${latest.number}"`)) errors.push(`${prefix}${suffix}: latest published episode is not linked`);
    const preview = html.match(/<a\b[^>]*class="upcoming-episode-link[^>]*>/)?.[0];
    if (next && !preview?.includes(`href="${prefix}/weekly/${next.number}"`)) errors.push(`${prefix}${suffix}: missing or stale next-episode preview`);
    if (!next && preview) errors.push(`${prefix}${suffix}: preview remains without an announced episode`);
  }
}
if (errors.length) throw new Error(errors.join('\n'));
console.log(`Release checks passed: ${pages.size} pages, ${episodes} episodes; redirects, slashless internal URLs, links, anchors, localized episode routes, public Wiki API, announcement dates and platform URL hosts.`);
console.log('External platform availability is not inferred from URL validation; confirm playback before publication.');
