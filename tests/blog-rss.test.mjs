import assert from 'node:assert/strict';
import test from 'node:test';
import { blogRss } from '../src/data/blog-rss.ts';
import { parseDocument } from 'htmlparser2';

const site = new URL('https://nexttoken.tv');
const post = (id, status = 'published', publishedAt = '2026-10-10') => ({ id, data: {
  title: '标题 < & >', description: '描述 & 内容', status, publishedAt, updatedAt: '2026-10-11',
}, rendered: { html: '<p>全文 &amp; 内容 <a href="/weekly/003?x=1&amp;y=2">来源</a><img src="/assets/test.png"></p>' } });
const texts = (node, tag) => {
  const found = [];
  function visit(n) { if (n.name === tag) found.push(n.children?.map(c => c.data ?? '').join('')); for (const c of n.children ?? []) visit(c); }
  visit(node); return found;
};
test('RSS excludes drafts, escapes XML, includes full HTML and absolute links', () => {
  const feed = blogRss([post('draft', 'draft'), post('older', 'published', '2026-10-09'), post('newer')], site);
  const doc = parseDocument(feed, { xmlMode: true });
  assert.equal(texts(doc, 'item').length, 2);
  assert.deepEqual(texts(doc, 'guid'), ['https://nexttoken.tv/blog/newer', 'https://nexttoken.tv/blog/older']);
  assert.equal(texts(doc, 'title')[1], '标题 < & >');
  assert.match(texts(doc, 'content:encoded')[0], /https:\/\/nexttoken.tv\/weekly\/003\?x=1&amp;y=2/);
  assert.match(texts(doc, 'content:encoded')[0], /https:\/\/nexttoken.tv\/assets\/test.png/);
  assert.match(texts(doc, 'content:encoded')[0], /全文/);
  assert.ok(!feed.includes('/blog/draft'));
});
test('edits preserve GUID and original pubDate; all-draft feed is valid and empty', () => {
  const a = post('stable'); const before = parseDocument(blogRss([a], site), { xmlMode: true });
  a.data.updatedAt = '2026-10-12'; a.data.title = '新标题';
  const after = parseDocument(blogRss([a], site), { xmlMode: true });
  for (const tag of ['guid', 'pubDate']) assert.deepEqual(texts(before, tag), texts(after, tag));
  assert.notDeepEqual(texts(before, 'atom:updated'), texts(after, 'atom:updated'));
  assert.equal(texts(parseDocument(blogRss([post('draft', 'draft')], site), { xmlMode: true }), 'item').length, 0);
});
