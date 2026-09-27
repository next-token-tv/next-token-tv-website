import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { load } from 'js-yaml';
import { renderArticleMarkdown } from '../src/data/article-markdown.ts';
import { getParagraphAnchorIds } from '../src/data/transcript-paragraph-anchors.ts';

test('article Markdown preserves prose and collects deduplicated absolute references at the end', () => {
  const output = renderArticleMarkdown({ title: '文章', description: '介绍', status: 'draft', updatedAt: '2026-09-27' }, '## 测试\n\n[中文 **观点**](/wiki/products/jev)和[Jev](/wiki/products/jev)。\n\n[原话](/weekly/003/transcript#quote-example)', '003', new URL('https://nexttoken.tv'));
  const [prose, references] = output.split('## 引用与相关资料');
  assert.ok(prose.includes('中文 观点和Jev。'));
  assert.ok(prose.includes('审阅稿'));
  assert.ok(!/\]\(/.test(prose));
  assert.equal(references.match(/https:\/\/nexttoken.tv\/wiki\/products\/jev/g).length, 1);
  assert.ok(references.includes('https://nexttoken.tv/weekly/003/transcript#quote-example'));
});

test('003 local draft links resolve to source paragraphs and existing Wiki entries', { skip: !existsSync('src/content/prose/episode-articles/next-token-weekly--003.zh-Hans.md') && 'Optional unpublished local draft is not part of the release' }, () => {
  const source = readFileSync('src/content/prose/episode-articles/next-token-weekly--003.zh-Hans.md', 'utf8');
  const [, frontmatter, body] = source.split(/^---\s*$/m);
  const data = load(frontmatter);
  assert.equal(data.status, 'draft');
  const transcript = JSON.parse(readFileSync('src/content/imported/transcripts/next-token-weekly--003.zh-Hans.json', 'utf8'));
  const anchors = new Set(getParagraphAnchorIds(transcript.chapters).flat(2));
  for (const [, href] of body.matchAll(/\]\(([^)]+)\)/g)) {
    assert.ok(!href.split('#')[0].endsWith('/'));
    if (href.startsWith('/weekly/003/transcript#')) assert.ok(anchors.has(href.split('#')[1]), href);
    if (href.startsWith('/wiki/')) assert.ok(readFileSync(`src/content/data/${href.slice('/wiki/'.length)}.yaml`, 'utf8'));
  }
});
