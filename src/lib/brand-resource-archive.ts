import { getCollection, getEntry } from 'astro:content';
import { readFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { zipSync, strToU8 } from 'fflate';
import { namedColor } from '../data/design-colors';

export async function brandResourceArchive(kind: 'brand-kit' | 'friends') {
  const kit = await getEntry('brandKits', 'next-token');
  if (!kit) throw new Error('Missing brand kit');
  const paths = new Set(kit.data.mediaLockups.flatMap(item => [item.light, item.dark]));
  const files: Record<string, Uint8Array> = {};
  if (kind === 'brand-kit') {
    paths.add(kit.data.preview);
    for (const item of kit.data.downloads) paths.add(item.href);
    for (const id of ['yangpan', 'xiangyang-qiaomu', 'guizang', 'orange']) paths.add(`/assets/hosts/${id}-1024.webp`);
    const copy = await getCollection('brandCopy', ({data}) => data.entity === 'next-token' || data.entity === 'next-token-weekly');
    for (const item of copy) files[`introductions/${item.data.locale}/${item.data.entity}-${item.data.format}.md`] = strToU8((item.body ?? '').trim() + '\n');
    const guidelines = await getCollection('prose', ({data}) => data.entityType === 'brand' && data.entity === 'next-token' && data.slot === 'brand-kit');
    for (const item of guidelines) files[`guidelines/${item.data.locale}.md`] = strToU8(item.body ?? '');
    files['brand-colors.json'] = strToU8(JSON.stringify(kit.data.colors.map(namedColor), null, 2) + '\n');
  } else {
    const directory = await getEntry('friendDirectories', 'directory');
    if (!directory) throw new Error('Missing friend directory');
    for (const item of [...directory.data.links, ...directory.data.partners]) paths.add(item.logo);
    files['links.json'] = strToU8(JSON.stringify(directory.data, null, 2) + '\n');
  }
  const publicRoot = resolve('public');
  for (const href of [...paths].sort()) {
    const path = resolve(publicRoot, `.${href}`);
    if (!href.startsWith('/assets/') || !path.startsWith(publicRoot + sep)) throw new Error(`Invalid resource: ${href}`);
    files[href.slice(1)] = await readFile(path);
  }
  files['README.txt'] = strToU8(`Next Token｜词元之外\nhttps://nexttoken.tv/\n\n请保留标识的比例、颜色和留白。浅底版用于浅色背景，深底版用于深色背景。\n四位主理人头像顺序：左上杨攀、右上向阳乔木、左下歸藏、右下橘子。\n\nPreserve logo proportions, colors and clear space. Use light-background variants on light surfaces and dark-background variants on dark surfaces.\nCo-host portrait order: Yang Pan top left, Xiangyang Qiaomu top right, Guizang bottom left, Orange bottom right.\n\n品牌及人物素材仅供品牌识别和经授权的宣传使用。第三方 Logo 权利归各自所有者，不因收录于本包而转授。\nBrand and portrait assets are for brand identification and authorized promotional use. Third-party marks remain the property of their respective owners; inclusion does not grant additional rights.\n`);
  const sorted = Object.fromEntries(Object.entries(files).sort(([a], [b]) => a.localeCompare(b)));
  const bytes = zipSync(sorted, { level: 6, mtime: new Date(2000, 0, 1) });
  return new Response(new Uint8Array(bytes), { headers: {
    'Content-Type': 'application/zip',
    'Content-Disposition': `attachment; filename="next-token-${kind}.zip"`,
  }});
}
