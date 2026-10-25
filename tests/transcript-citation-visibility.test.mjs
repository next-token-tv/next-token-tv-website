import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { transcriptCitationPlugin } from '../scripts/lib/transcript-citation-links.mjs';

async function transform(options) {
  const processor = await createSatteriMarkdownProcessor({ hastPlugins: [transcriptCitationPlugin(options)] });
  return (await processor.render('[已发布](/weekly/006/transcript#quote-a) [本地](/weekly/007/transcript#chapter-02) [英文](/en/weekly/006/transcript) [绝对](https://nexttoken.tv/weekly/007/transcript.md#chapter-02) [外部](https://example.com/weekly/007/transcript) [引用][draft]\n\n[draft]: /weekly/007/transcript#quote-b')).code;
}
test('production citations retain labels while excluding unavailable locale and draft destinations', async () => {
  const html = await transform({ publishedPaths: ['/weekly/006/transcript'] });
  assert.deepEqual([...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]), [
    '/weekly/006/transcript#quote-a', 'https://example.com/weekly/007/transcript',
  ]);
  assert.equal(html.replace(/<[^>]+>/g, '').trim(), '已发布 本地 英文 绝对 外部 引用');
});
test('local preview keeps citations and publication enables them without prose edits', async () => {
  const local = await transform({ includePreview: true });
  assert.equal([...local.matchAll(/href=/g)].length, 6);
  const published = await transform({ publishedPaths: ['/weekly/006/transcript', '/en/weekly/006/transcript', '/weekly/007/transcript'] });
  assert.equal([...published.matchAll(/href=/g)].length, 6);
});
