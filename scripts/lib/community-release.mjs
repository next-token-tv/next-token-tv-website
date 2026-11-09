import {readFile, readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {load} from 'js-yaml';
import {decodeQr, verifyCommunitySvg, validateInvite} from './community-qr.mjs';

export function assertCommunityDate(validBefore, now = new Date()) {
  const date = new Date(`${validBefore}T00:00:00Z`);
  const today = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(validBefore ?? '') || !Number.isFinite(+date) || date.toISOString().slice(0,10) !== validBefore || today >= validBefore) {
    throw new Error(`Community QR expired or invalid (${validBefore}); update the actual WeChat invitation before publishing.`);
  }
}

export async function assertCommunityRelease(root, productionRoot, now = new Date()) {
  const {community:c} = load(await readFile(resolve(root,'src/content/data/shows/next-token-weekly.yaml'),'utf8'));
  assertCommunityDate(c.qrValidBefore, now);
  for (const field of ['qrImage','qrPngImage']) if (!/^\/assets\/community\/[\w.-]+$/.test(c[field] ?? '')) throw new Error(`Invalid community ${field}`);
  const payload = await decodeQr(await readFile(resolve(root,`public${c.qrPngImage}`)));
  if (!payload) throw new Error('Community PNG cannot be decoded');
  validateInvite(payload);
  if (createHash('sha256').update(payload).digest('hex') !== c.qrPayloadSha256) throw new Error('Community QR payload does not match its recorded identity');
  const svg = await readFile(resolve(root,`public${c.qrImage}`),'utf8');
  if (!svg.includes(`${c.qrValidBefore} 前有效`)) throw new Error('Community SVG expiry does not match metadata');
  await verifyCommunitySvg(svg,payload);
  if (productionRoot) {
    const episodes = resolve(productionRoot,'shows/weekly/episodes');
    const candidates=[];
    for (const ep of await readdir(episodes)) {
      if (!/^\d{3}$/.test(ep)) continue;
      const folder=resolve(episodes,ep,'04-release/artwork');
      let files;try {files=await readdir(folder);} catch(error) {if(error.code==='ENOENT')continue;throw error;}
      for (const name of files) {
        const match=/^community-qr-(\d{8})\.(?:png|jpe?g|webp)$/i.exec(name);
        if(match)candidates.push({date:match[1],path:resolve(folder,name)});
      }
    }
    if (!candidates.length) throw new Error('No dated production community QR source found');
    const latest=candidates.map(x=>x.date).sort().at(-1);
    for (const source of candidates.filter(x=>x.date===latest)) {
      if(await decodeQr(await readFile(source.path))!==payload) throw new Error(`Website community QR is not the latest production invitation: ${source.path}`);
    }
  }
}
