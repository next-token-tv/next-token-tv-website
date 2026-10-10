import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { parseArgs } from 'node:util';
import sharp from 'sharp';
import { load } from 'js-yaml';
import { decodeQr, createCommunitySvg, verifyCommunitySvg } from './lib/community-qr.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { values } = parseArgs({ options: { input: { type: 'string' }, 'valid-before': { type: 'string' }, group: { type: 'string' }, help: { type: 'boolean' } } });
if (values.help) {
  console.log('npm run community:qr -- --input <image> --valid-before YYYY-MM-DD --group "听友 2 群"');
  process.exit(0);
}
if (!values.input || !values['valid-before'] || !values.group) throw new Error('Required: --input, --valid-before, --group. Use --help for usage.');
const original = await readFile(resolve(values.input));
const payload = await decodeQr(original);
if (!payload) throw new Error('No readable QR code found in the input image.');
const svg = createCommunitySvg(payload, { groupName: values.group, validBefore: values['valid-before'] });
await verifyCommunitySvg(svg, payload);
const digest = createHash('sha256').update(svg).digest('hex').slice(0, 12);
const name = `wechat-${values['valid-before']}-${digest}`;
const asset = `/assets/community/${name}`;
const configPath = resolve(root, 'src/content/data/shows/next-token-weekly.yaml');
const source = await readFile(configPath, 'utf8');
const current = load(source).community;
if (!current) throw new Error('Missing Weekly community configuration.');
const fields = {
  ...current, qrImage: `${asset}.svg`, qrPngImage: `${asset}.png`, qrValidBefore: values['valid-before'],
  width: 720, height: 720,
  description: {
    'zh-Hans': `欢迎加入 Next Token Weekly ${values.group}，一起聊 AI 工具、节目选题与真实使用体验。`,
    en: 'Join the Next Token Weekly WeChat community to discuss AI tools, episode ideas and real workflows.',
  },
  imageAlt: { 'zh-Hans': `Next Token Weekly ${values.group}入群二维码`, en: 'Next Token Weekly WeChat group invitation QR code' },
};
// Patch only community fields, preserving the rest of the human-authored YAML.
const lines = ['community:'];
for (const [key, value] of Object.entries(fields)) {
  if (typeof value === 'object') {
    lines.push(`  ${key}:`);
    for (const [locale, text] of Object.entries(value)) lines.push(`    ${locale}: ${JSON.stringify(text)}`);
  } else lines.push(`  ${key}: ${JSON.stringify(value)}`);
}
const updated = source.replace(/^community:\n[\s\S]*?(?=^\S|$(?![\s\S]))/m, `${lines.join('\n')}\n`);
if (updated === source && current.qrImage !== fields.qrImage) throw new Error('Could not update community metadata.');
await mkdir(resolve(root, 'public/assets/community'), { recursive: true });
await writeFile(resolve(root, `public${asset}.svg`), svg);
await sharp(Buffer.from(svg)).png().toFile(resolve(root, `public${asset}.png`));
await writeFile(configPath, updated);
console.log(`Generated ${asset}.svg and PNG download. Scan verification passed at 144, 156, 176, 280, 320 and 720px; invitation payload is unchanged.\nExpiry is copied from the supplied date, not extended. Homepage and episode pages share this asset.`);
