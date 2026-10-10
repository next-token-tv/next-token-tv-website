import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import { load } from 'js-yaml';
import { getParagraphAnchorIds } from '../src/data/transcript-paragraph-anchors.ts';

for (const file of readdirSync('src/content/prose/blog').filter(file => file.endsWith('.md'))) {
  test(`Blog ${file}: source links resolve and direct quotations match the transcript`, () => {
    const [, frontmatter, body] = readFileSync(`src/content/prose/blog/${file}`, 'utf8').split(/^---\s*$/m);
    const data = load(frontmatter);
    const isEnglish = file.endsWith('.en.md');
    assert.equal(data.locale, isEnglish ? 'en' : 'zh-Hans');
    // Transcripts are published in Chinese only; anchors are locale-independent.
    const sources = data.episodes.map(id => JSON.parse(readFileSync(`src/content/imported/transcripts/${id}.zh-Hans.json`, 'utf8')));
    const sourceText = sources.flatMap(source => source.chapters.flatMap(chapter => chapter.turns.flatMap(turn => turn.paragraphs.map(p => p.map(s => s.value).join(''))))).join('\n');
    const normalize = text => text.replace(/[\s，。！？、：；“”]/gu, '');
    assert.equal(new Set(data.episodes).size, data.episodes.length);
    assert.ok(!/^# /m.test(body), 'Only page template supplies H1');
    for (const source of sources) {
      assert.equal(source.publicationStatus, 'published');
      assert.equal(source.provenance.sourceState, 'committed');
    }
    for (const [, href] of body.matchAll(/\]\(([^)]+)\)/g)) {
      const match = href.match(/^(?:\/en)?\/weekly\/(\d+)\/transcript#(.+)$/);
      if (match) {
        const source = sources.find(s => s.episodeId.endsWith(`--${match[1]}`));
        assert.ok(source, href);
        assert.ok(new Set(getParagraphAnchorIds(source.chapters).flat(2)).has(match[2]), href);
      } else if (href.startsWith('/wiki/') || href.startsWith('/en/wiki/')) {
        const yamlPath = href.replace(/^\/en/, '').slice(1);
        assert.ok(existsSync(`src/content/data/${yamlPath.slice('wiki/'.length)}.yaml`), href);
      }
    }
    // Direct quotations are checked against the Chinese transcript; English editions translate freely.
    if (!isEnglish) for (const [, quote] of body.matchAll(/“([^”]{12,})”/gu)) assert.ok(normalize(sourceText).includes(normalize(quote)), quote);
  });
}
