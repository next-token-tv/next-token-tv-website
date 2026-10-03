import { createSearchIndex } from '../../data/search-index';
import type { Locale } from '../../data/types';
export function getStaticPaths() { return ['zh-Hans','en'].map(locale=>({params:{locale}})); }
export async function GET({params}: {params:{locale:Locale}}) {
  return new Response(JSON.stringify(await createSearchIndex(params.locale)),{headers:{'Content-Type':'application/json; charset=utf-8'}});
}
