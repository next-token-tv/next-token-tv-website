import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { load } from 'js-yaml';
export async function filesUnder(root) {
  const files = [];
  for (const entry of (await readdir(root, { withFileTypes: true })).sort((a,b) => a.name.localeCompare(b.name))) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}
export function parseProse(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) throw new Error('Markdown frontmatter required');
  return { data: load(match[1]), body: text.slice(match[0].length) };
}
export async function readLibrary(root) {
  const entries = [];
  for (const [directory, type] of [['brands','brand'],['products','product'],['people','person']]) {
    for (const file of await filesUnder(join(root, 'src/content/data', directory))) {
      if (!file.endsWith('.yaml')) continue;
      entries.push({ type, id: file.split('/').at(-1).replace(/\.yaml$/, ''), path: relative(root,file), data: load(await readFile(file,'utf8')) });
    }
  }
  const prose = [];
  for (const file of await filesUnder(join(root,'src/content/prose'))) {
    if (!file.endsWith('.md')) continue;
    prose.push({path:relative(root,file), ...parseProse(await readFile(file,'utf8'))});
  }
  return { entries, prose };
}
