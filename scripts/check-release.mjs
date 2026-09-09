import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'js-yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const errors = [];
const pages = new Map();
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) pages.set(path, await readFile(path, 'utf8'));
  }
}
await walk(dist);
if (!pages.size) throw new Error('Build the website before running check:release');
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
  if (data.status === 'announced') announced.push(data);
  for (const prefix of ['', '/en']) {
    const route = resolve(dist, `.${prefix}/weekly/${data.number}/index.html`);
    if (!pages.has(route)) errors.push(`${name}: missing ${prefix || 'Chinese'} episode route`);
  }
  if (data.status === 'announced' && Date.parse(data.scheduledAt) < Date.now()) {
    errors.push(`${name}: recording date has passed; review the announcement status before release`);
  }
  for (const platform of data.platforms ?? []) {
    if (!platform.href) continue;
    const url = new URL(platform.href);
    if (url.protocol !== 'https:' || !hosts[platform.platform]?.includes(url.hostname)) errors.push(`${name}: invalid ${platform.platform} destination`);
    if (!platform.action?.['zh-Hans'] || !platform.action?.en) errors.push(`${name}: missing bilingual platform action`);
  }
}
const latest = published.filter((data) => data.show === 'next-token-weekly').sort((a, b) => Number(b.number) - Number(a.number))[0];
const next = announced.filter((data) => data.show === 'next-token-weekly').sort((a, b) => Date.parse(a.scheduledAt) - Date.parse(b.scheduledAt))[0];
for (const prefix of ['', '/en']) {
  for (const suffix of ['/', '/weekly/']) {
    const html = pages.get(resolve(dist, `.${prefix}${suffix}index.html`)) ?? '';
    if (latest && !html.includes(`href="${prefix}/weekly/${latest.number}/"`)) errors.push(`${prefix}${suffix}: latest published episode is not linked`);
    const preview = html.match(/<a\b[^>]*class="upcoming-episode-link[^>]*>/)?.[0];
    if (next && !preview?.includes(`href="${prefix}/weekly/${next.number}/"`)) errors.push(`${prefix}${suffix}: missing or stale next-episode preview`);
    if (!next && preview) errors.push(`${prefix}${suffix}: preview remains without an announced episode`);
  }
}
if (errors.length) throw new Error(errors.join('\n'));
console.log(`Release checks passed: ${pages.size} pages, ${episodes} episodes; internal links, anchors, localized episode routes, announcement dates and platform URL hosts.`);
console.log('External platform availability is not inferred from URL validation; confirm playback before publication.');
