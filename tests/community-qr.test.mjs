import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { load } from 'js-yaml';
import { decodeQr, createCommunitySvg, verifyCommunitySvg, validateInvite } from '../scripts/lib/community-qr.mjs';

test('branded QR preserves the invitation at mobile and full resolution', async () => {
  const community = load(await readFile('src/content/data/shows/next-token-weekly.yaml', 'utf8')).community;
  const original = await decodeQr(await readFile('public/assets/weekly-005/community-qr-20261008.webp'));
  const generated = createCommunitySvg(original, {groupName: 'Test group', validBefore: '2026-10-15'});
  assert.ok(generated.includes('data-wechat-logo="true"'));
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
