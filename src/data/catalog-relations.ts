import { indexById, type Catalog } from './catalog-core.ts';

type EntityType = 'brand' | 'product' | 'person' | 'term';
type Episode = Catalog['episodes'][number];

// The show name is spoken in every episode's intro; those self-references must
// never become back-references on the entity's own page. Keep in sync with
// scripts/check-episode-backlinks.mjs, which fails on unknown self-references.
const selfReferences = new Set(['show:next-token-weekly', 'brand:next-token']);

function createRelations(catalog: Catalog) {
  const productsByBrand = new Map<string, Catalog['products']>();
  const episodesByEntity = new Map<string, Episode[]>();
  const imports = indexById(catalog.episodeImports);
  const products = indexById(catalog.products);
  const routedEpisodes = indexById(catalog.episodes);
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
    for (const term of episode.data.mentions.terms ?? []) keys.add(`term:${term}`);
    const data = episode.data;
    const participants = data.status === 'announced' ? data.participants : imports.get(data.productionImport)?.data.participants ?? [];
    for (const { person } of participants) keys.add(`person:${person}`);
    for (const key of keys) {
      const group = episodesByEntity.get(key) ?? [];
      group.push(episode); episodesByEntity.set(key, group);
    }
  }
  // Transcript entity links cite the library directly, so every cited entity
  // back-references the episode even when hand-curated mentions missed it.
  // Review-draft transcripts stay dev-only, mirroring transcript page routing.
  for (const transcript of catalog.transcriptImports ?? []) {
    if (transcript.data.locale !== 'zh-Hans') continue;
    if (!(import.meta.env?.DEV || transcript.data.publicationStatus === 'published')) continue;
    const episode = routedEpisodes.get(transcript.data.episodeId);
    if (!episode) continue;
    const keys = new Set<string>();
    for (const chapter of transcript.data.chapters) for (const turn of chapter.turns) for (const paragraph of turn.paragraphs) for (const span of paragraph) {
      if (span.type !== 'entity-link' || !span.entityType || !span.entityId) continue;
      const key = `${span.entityType}:${span.entityId}`;
      if (!selfReferences.has(key)) keys.add(key);
    }
    for (const key of keys) {
      const group = episodesByEntity.get(key) ?? [];
      if (!group.includes(episode)) group.push(episode);
      episodesByEntity.set(key, group);
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
