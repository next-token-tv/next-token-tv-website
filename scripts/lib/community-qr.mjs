import sharp from 'sharp';
import jsQR from 'jsqr';
import QRCode from 'qrcode';

export async function decodeQr(image) {
  const { data, info } = await sharp(image).rotate().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  return jsQR(new Uint8ClampedArray(data), info.width, info.height)?.data;
}
// WeChat mark: Simple Icons (CC0), https://github.com/simple-icons/simple-icons/blob/develop/icons/wechat.svg
const wechatPath = 'M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z';
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
<g data-wechat-logo="true" shape-rendering="geometricPrecision">
<rect x="${badgeStart}" y="${badgeStart}" width="${badgeSize}" height="${badgeSize}" rx="1" fill="#fff"/>
<path d="${wechatPath}" transform="translate(${logoStart} ${logoStart}) scale(${logoSize / 24})" fill="#07c160"/>
</g>
</svg>\n`;

}
export async function verifyCommunitySvg(svg, payload) {
  for (const width of [144, 156, 176, 280, 320, 720]) {
    const png = await sharp(Buffer.from(svg)).resize({ width }).png().toBuffer();
    if (await decodeQr(png) !== payload) throw new Error(`Generated QR failed decode at ${width}px; no metadata was updated.`);
  }
}
