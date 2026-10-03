import { indexById, type Catalog } from './catalog-core.ts';

type EntityType = 'brand' | 'product' | 'person';
type Episode = Catalog['episodes'][number];
function createRelations(catalog: Catalog) {
  const productsByBrand = new Map<string, Catalog['products']>();
  const episodesByEntity = new Map<string, Episode[]>();
  const imports = indexById(catalog.episodeImports);
  const products = indexById(catalog.products);
  for (const product of catalog.products) {
    if (!product.data.brand) continue;
    const group = productsByBrand.get(product.data.brand) ?? [];
    group.push(product); productsByBrand.set(product.data.brand, group);
  }
  for (const episode of catalog.episodes) {
    const keys = new Set<string>();
    for (const brand of episode.data.mentions.brands) keys.add(`brand:${brand}`);
    for (const product of episode.data.mentions.products) {
      keys.add(`product:${product}`);
      const brand = products.get(product)?.data.brand;
      if (brand) keys.add(`brand:${brand}`);
    }
    for (const person of episode.data.mentions.people) keys.add(`person:${person}`);
    const data = episode.data;
    const participants = data.status === 'announced' ? data.participants : imports.get(data.productionImport)?.data.participants ?? [];
    for (const { person } of participants) keys.add(`person:${person}`);
    for (const key of keys) {
      const group = episodesByEntity.get(key) ?? [];
      group.push(episode); episodesByEntity.set(key, group);
    }
  }
  return {
    brandProducts: (id: string) => productsByBrand.get(id) ?? [],
    episodes: (type: EntityType, id: string) => episodesByEntity.get(`${type}:${id}`) ?? [],
  };
}
const cache = new WeakMap<Catalog, ReturnType<typeof createRelations>>();
export function getCatalogRelations(catalog: Catalog) {
  let relations = cache.get(catalog);
  if (!relations) { relations = createRelations(catalog); cache.set(catalog, relations); }
  return relations;
}
