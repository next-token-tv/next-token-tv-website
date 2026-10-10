export type SearchDocument = { title: string; text: string; href: string; kind: 'entity' | 'episode' | 'transcript' | 'blog'; aliases?: string[] };
export function normalizeSearch(value: string) {
  return value.normalize('NFKC').toLocaleLowerCase().replace(/\s+/gu, ' ').trim();
}
export function searchDocuments(documents: SearchDocument[], query: string, kind = 'all') {
  const normalized = normalizeSearch(query.slice(0,120));
  if (!normalized) return [];
  const tokens = normalized.split(' ');
  return documents.flatMap((document, index) => {
    if (kind !== 'all' && document.kind !== kind) return [];
    const title = normalizeSearch(document.title);
    const aliases = (document.aliases ?? []).map(normalizeSearch);
    const haystack = `${document.kind === 'transcript' ? '' : title} ${aliases.join(' ')} ${normalizeSearch(document.text)}`;
    if (!tokens.every(token => haystack.includes(token))) return [];
    const score = title === normalized || aliases.includes(normalized) ? 100
      : title.includes(normalized) ? 60 : document.kind === 'entity' ? 30 : document.kind === 'episode' ? 20 : 10;
    return [{document,score,index}];
  }).sort((a,b)=>b.score-a.score || a.index-b.index).map(({document})=>document);
}
export function searchSnippet(text: string, query: string) {
  const offset = normalizeSearch(text).indexOf(normalizeSearch(query).split(' ')[0] ?? '');
  const start = Math.max(0, offset-50);
  return `${start ? '…' : ''}${text.slice(start,start+180)}${text.length>start+180 ? '…' : ''}`;
}
