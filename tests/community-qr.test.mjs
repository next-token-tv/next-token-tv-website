import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { load } from 'js-yaml';
import { decodeQr, createCommunitySvg, verifyCommunitySvg, validateInvite } from '../scripts/lib/community-qr.mjs';

test('branded QR preserves the invitation at mobile and full resolution', async () => {
  const community = load(await readFile('src/content/data/shows/next-token-weekly.yaml', 'utf8')).community;
  const original = await decodeQr(await readFile('public/assets/weekly-005/community-qr-20261008.webp'));
  const generated = createCommunitySvg(original, {groupName: 'Test group', validBefore: '2026-10-15'});
  assert.ok(generated.includes('data-hosts-grid="true"'));
  await verifyCommunitySvg(generated, original);
  const svg = await readFile(`public${community.qrImage}`, 'utf8');
  const currentPayload = await decodeQr(await readFile(`public${community.qrPngImage}`));
  assert.ok(currentPayload);
  await verifyCommunitySvg(svg, currentPayload);
  assert.ok(svg.includes(community.qrValidBefore));
});
test('generator rejects unrelated destinations, invalid dates and escapes labels', () => {
  for (const url of ['https://example.com/g/a', 'https://weixin.qq.com.evil.com/g/a', 'http://weixin.qq.com/g/a']) assert.throws(() => validateInvite(url));
  const url = 'https://weixin.qq.com/g/test';
  assert.throws(() => createCommunitySvg(url, {groupName: 'Test', validBefore: '2026-02-30', logo: '<svg></svg>'}));
  const svg = createCommunitySvg(url, {groupName: 'A & <B>', validBefore: '2026-10-15', logo: '<svg></svg>'});
  assert.ok(svg.includes('A &amp; &lt;B&gt;'));
});

import {assertCommunityDate, assertCommunityRelease} from '../scripts/lib/community-release.mjs';
import {mkdtemp, mkdir, writeFile, rm, copyFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import sharp from 'sharp';
test('expiry uses Shanghai midnight and rejects impossible dates',()=>{
 assertCommunityDate('2026-11-15',new Date('2026-11-14T15:59:59Z'));
 assert.throws(()=>assertCommunityDate('2026-11-15',new Date('2026-11-14T16:00:00Z')),/expired/);
 assert.throws(()=>assertCommunityDate('2026-02-30',new Date('2026-01-01')),/invalid/);
 validateInvite('https://c.weixin.com/g/test');
 assert.throws(()=>validateInvite('https://c.weixin.com.evil.example/g/test'));
});
test('release rejects an unreadable image, payload mismatch and newer production invitation',async()=>{
 const root=await mkdtemp(join(tmpdir(),'community-gate-'));
 try {
  const config=load(await readFile('src/content/data/shows/next-token-weekly.yaml','utf8'));
  await mkdir(join(root,'src/content/data/shows'),{recursive:true});await mkdir(join(root,'public/assets/community'),{recursive:true});
  for(const field of ['qrImage','qrPngImage'])await copyFile(`public${config.community[field]}`,join(root,`public${config.community[field]}`));
  const {dump}=await import('js-yaml');const save=()=>writeFile(join(root,'src/content/data/shows/next-token-weekly.yaml'),dump(config));await save();
  const now=new Date('2026-11-09T00:00:00Z');await assertCommunityRelease(root,undefined,now);
  const prod=join(root,'production'),dir=join(prod,'shows/weekly/episodes/010/04-release/artwork');await mkdir(dir,{recursive:true});
  const other=createCommunitySvg('https://c.weixin.com/g/different',{groupName:'Test',validBefore:'2026-11-15'});
  await sharp(Buffer.from(other)).png().toFile(join(dir,'community-qr-20261110.png'));
  await assert.rejects(()=>assertCommunityRelease(root,prod,now),/not the latest/);
  config.community.qrPayloadSha256='wrong';await save();await assert.rejects(()=>assertCommunityRelease(root,undefined,now),/identity/);
  await writeFile(join(root,`public${config.community.qrPngImage}`),'invalid image');await assert.rejects(()=>assertCommunityRelease(root,undefined,now));
 }finally{await rm(root,{recursive:true,force:true});}
});
