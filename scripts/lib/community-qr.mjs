import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import jsQR from 'jsqr';
import QRCode from 'qrcode';

export async function decodeQr(image) {
  const { data, info } = await sharp(image).rotate().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  return jsQR(new Uint8ClampedArray(data), info.width, info.height)?.data;
}
// Delivery copy of next-token/people/hosts/group/hosts-grid-white-background-512.png.
const hostsGrid = (await sharp(readFileSync(new URL('../../public/assets/community/hosts-grid-white-background-512.png', import.meta.url)))
  .resize(128, 128).png().toBuffer()).toString('base64');
const xml = value => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);
export function validateInvite(payload) {
  const url = new URL(payload);
  if (url.protocol !== 'https:' || url.hostname !== 'weixin.qq.com' || !url.pathname.startsWith('/g/') || url.username || url.password || url.port) {
    throw new Error('Expected a WeChat group invitation URL at https://weixin.qq.com/g/.');
  }
}
export function createCommunitySvg(payload, { groupName, validBefore }) {
  validateInvite(payload);
  if (!groupName || [...groupName].length > 24) throw new Error('Group name must contain 1–24 characters.');
  const date = new Date(`${validBefore}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(validBefore) || !Number.isFinite(date.valueOf()) || date.toISOString().slice(0, 10) !== validBefore) throw new Error('Expected a real YYYY-MM-DD expiry date.');
  const qr = QRCode.create(payload, { errorCorrectionLevel: 'H' });
  const size = qr.modules.size;
  // Keep the four-module quiet zone; limit the central badge to 23% of the symbol.
  const badgeSize = Math.min(13, size * 0.23);
  const badgeStart = (size + 8 - badgeSize) / 2;
  const logoSize = badgeSize * 0.88;
  const logoStart = (size + 8 - logoSize) / 2;
  const paths = [];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    if (qr.modules.get(y, x)) paths.push(`M${x + 4} ${y + 4}h1v1h-1z`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="720" viewBox="0 0 ${size + 8} ${size + 8}" role="img" aria-labelledby="title desc" shape-rendering="crispEdges">
<title id="title">词元之外 · ${xml(groupName)}</title>
<desc id="desc">微信扫码入群，${validBefore} 前有效。</desc>
<rect width="${size + 8}" height="${size + 8}" fill="#f1eee5"/>
<path d="${paths.join('')}" fill="#171717"/>
<g data-hosts-grid="true" shape-rendering="geometricPrecision">
<rect x="${badgeStart}" y="${badgeStart}" width="${badgeSize}" height="${badgeSize}" rx="1" fill="#fff"/>
<image href="data:image/png;base64,${hostsGrid}" x="${logoStart}" y="${logoStart}" width="${logoSize}" height="${logoSize}"/>
</g>
</svg>\n`;

}
export async function verifyCommunitySvg(svg, payload) {
  for (const width of [144, 156, 176, 280, 320, 720]) {
    const png = await sharp(Buffer.from(svg)).resize({ width }).png().toBuffer();
    if (await decodeQr(png) !== payload) throw new Error(`Generated QR failed decode at ${width}px; no metadata was updated.`);
  }
}
