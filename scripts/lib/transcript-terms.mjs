import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { load } from 'js-yaml';

// Episode rules select reviewed spellings; generic aliases need not be linked.
export async function readTranscriptTerms(root, references = []) {
  const seen = new Set();
  return Promise.all(references.map(async ({ id, aliases }) => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id ?? '') || seen.has(id)) throw Error(`Invalid transcript term: ${id}`);
    seen.add(id);
    const term = load(await readFile(resolve(root, 'src/content/data/terms', `${id}.yaml`), 'utf8'));
    if (term.status !== 'published') throw Error(`Transcript term is not published: ${id}`);
    const known = [...Object.values(term.name), ...(term.aliases ?? [])];
    if (!Array.isArray(aliases) || !aliases.length || aliases.some(alias => !known.includes(alias))) throw Error(`Unverified transcript term alias: ${id}`);
    return { entityType: 'term', id, aliases };
  }));
}
