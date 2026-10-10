import { getBlogPosts } from "./blog";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { getContentCatalog } from './catalog';
import { getParagraphAnchorIds } from './transcript-paragraph-anchors';
import type { SearchDocument } from './search-engine';
import type { Locale } from './types';
type TextNode = { type: string; value?: string; children?: TextNode[] };
function proseText(source: string) {
  const walk = (node: TextNode): string => {
    if (['text', 'inlineCode', 'code'].includes(node.type)) return node.value ?? '';
    const text = (node.children ?? []).map(walk).join('');
    return ['paragraph','heading','listItem'].includes(node.type) ? text+' ' : text;
  };
  return walk(unified().use(remarkParse).parse(source)).replace(/\s+/gu,' ').trim();
}
export async function createSearchIndex(locale: Locale): Promise<SearchDocument[]> {
  const catalog = await getContentCatalog();
  const prefix = locale === 'en' ? '/en' : '';
  const documents: SearchDocument[] = [];
  for (const [type,collection] of [['brand','brands'],['product','products'],['person','people']] as const) {
    for (const entry of catalog[collection]) {
      const article = catalog.prose.find(p=>p.data.entityType===type && p.data.entity===entry.id && p.data.locale===locale && p.data.slot==='wiki');
      const summary = 'summary' in entry.data ? entry.data.summary[locale] : entry.data.bio[locale];
      documents.push({kind:'entity',title:entry.data.name[locale],aliases:entry.data.aliases,href:`${prefix}/wiki/${collection}/${entry.id}`,text:`${summary} ${proseText(article?.body ?? '')}`});
    }
  }
  for (const episode of catalog.episodes) {
    if (episode.data.status!=='published') continue;
    const notes = catalog.prose.find(p=>p.data.entityType==='episode' && p.data.entity===episode.id && p.data.locale===locale && p.data.slot==='show-notes');
    documents.push({kind:'episode',title:episode.data.title[locale],href:`${prefix}/weekly/${episode.data.number}`,text:`${episode.data.homepage[locale].lede} ${proseText(notes?.body ?? '')}`});
  }
  for (const {data} of catalog.transcriptImports) {
    if(data.locale!==locale || data.publicationStatus!=='published') continue;
    const episode=catalog.episodes.find(e=>e.id===data.episodeId && e.data.status==='published');
    if(!episode) continue;
    const anchors=getParagraphAnchorIds(data.chapters);
    data.chapters.forEach((chapter,i)=>chapter.turns.forEach((turn,j)=>turn.paragraphs.forEach((paragraph,k)=>{
      documents.push({kind:'transcript',aliases:[turn.speaker],title:`${episode.data.title[locale]} · ${chapter.title} · ${turn.speaker}`,text:paragraph.map(s=>s.value).join(''),href:`${prefix}/weekly/${episode.data.number}/transcript#${anchors[i]![j]![k]}`});
    })));
  }
  if (locale === 'zh-Hans') for (const post of await getBlogPosts()) {
    documents.push({kind:'blog',title:post.data.title,href:`/blog/${post.id}`,text:`${post.data.description} ${proseText(post.body ?? '')}`});
  }
  return documents;
}
