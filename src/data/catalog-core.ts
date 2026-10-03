import type { CollectionEntry } from "astro:content";
export type Catalog = {
  people: CollectionEntry<"people">[];
  shows: CollectionEntry<"shows">[];
  hostMemberships: CollectionEntry<"hostMemberships">[];
  partners: CollectionEntry<"partners">[];
  venues: CollectionEntry<"venues">[];
  brands: CollectionEntry<"brands">[];
  products: CollectionEntry<"products">[];
  episodes: CollectionEntry<"episodes">[];
  episodeImports: CollectionEntry<"episodeImports">[];
  transcriptImports: CollectionEntry<"transcriptImports">[];
  prose: CollectionEntry<"prose">[];
};

const indices = new WeakMap<object, Map<string, unknown>>();
export function indexById<T extends { id: string }>(entries: T[]): Map<string, T> {
  let index = indices.get(entries);
  if (!index) { index = new Map(entries.map(entry => [entry.id, entry])); indices.set(entries, index); }
  return index as Map<string, T>;
}

export function requireId<T>(index: Map<string, T>, id: string, relation: string): T {
  const entry = index.get(id);
  if (!entry) throw new Error(`Unknown ${relation}: ${id}`);
  return entry;
}

