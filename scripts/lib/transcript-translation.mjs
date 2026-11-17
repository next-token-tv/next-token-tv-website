import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { sha256 } from './transcript-converter.mjs';

// Markers identify stable Chinese paragraph positions without exposing IDs in rendered prose.
export function convertTranslationMarkdown(markdown, manifest, chinese, provenance) {
  if (sha256(markdown) !== manifest.markdownSha256) throw new Error('Translation Markdown hash mismatch');
  if (manifest.locale !== 'en' || manifest.review.status !== 'reviewed') throw new Error('Translation review is incomplete');
  const seen = new Set();
  const blocks = new Map();
  const pattern = /<!-- translation-unit: ([\w:-]+) -->\n([\s\S]*?)\n<!-- \/translation-unit -->/g;
  for (const match of markdown.matchAll(pattern)) {
    if (seen.has(match[1])) throw new Error(`Duplicate translation unit: ${match[1]}`);
    seen.add(match[1]); blocks.set(match[1], match[2]);
  }
  if (blocks.size !== manifest.units.length) throw new Error('Translation unit coverage mismatch');
  const result = structuredClone(manifest.structure);
  const inline = (nodes, marks = []) => nodes.flatMap(node => {
    const style = marks.length ? {marks} : {};
    if (node.type === 'text') return [{type: 'text', value: node.value, ...style}];
    if (node.type === 'inlineCode') return [{type: 'code', value: node.value, ...style}];
    if (node.type === 'strong' || node.type === 'emphasis') return inline(node.children, [...marks, node.type]);
    if (node.type === 'link') {
      const value = inline(node.children).map(segment => segment.value).join('');
      const meta = manifest.links[node.url];
      if (!meta) throw new Error(`Unknown translation link: ${node.url}`);
      return [{...meta, value, href: node.url, ...style}];
    }
    throw new Error(`Unsupported translation inline node: ${node.type}`);
  });
  const paths = new Set();
  for (const unit of manifest.units) {
    const keyPath = JSON.stringify(unit.path);
    if (paths.has(keyPath) || unit.path.some(key => ["__proto__", "constructor", "prototype"].includes(key))) throw new Error("Invalid or duplicate translation path");
    paths.add(keyPath);
    const content = blocks.get(unit.id);
    if (content === undefined) throw new Error(`Missing translation unit: ${unit.id}`);
    const tree = unified().use(remarkParse).parse(content);
    if (tree.children.length !== 1 || !['paragraph', 'heading'].includes(tree.children[0].type)) throw new Error(`Invalid translation unit: ${unit.id}`);
    const segments = inline(tree.children[0].children);
    const text = segments.map(s => s.value).join('');
    if (!text.trim() || sha256(text) !== unit.reviewedTextSha256) throw new Error(`Unreviewed translation text: ${unit.id}`);
    let target = result;
    for (const key of unit.path.slice(0, -1)) {
      if (!Object.hasOwn(target, key)) throw new Error(`Invalid translation path: ${unit.id}`);
      target = target[key];
    }
    const key = unit.path.at(-1);
    if (!Object.hasOwn(target, key)) throw new Error(`Invalid translation target: ${unit.id}`);
    target[key] = Array.isArray(target[key]) ? segments : text;
  }
  const shape = data => data.chapters.map(c => ({id:c.id, turns:c.turns.map(t => ({kind:t.kind, speakerId:t.speakerId, candidate:t.candidate, paragraphs:t.paragraphs.length, timings:t.paragraphTimings}))}));
  if (JSON.stringify(shape(result)) !== JSON.stringify(shape(chinese))) throw new Error('Translation changed Chinese structure or speaker attribution');
  return {...result, conversionVersion: 'translation-markdown-1', locale:'en', publicationStatus:'review-draft', provenance};
}
