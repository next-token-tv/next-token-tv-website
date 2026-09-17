import { getContentCatalog } from "./catalog";
import { absoluteSiteUrl } from "./internal-url";

const schemaVersion = 1;

function absolute(path: string, site: URL) {
  return absoluteSiteUrl(path, site);
}

function byId<T extends { id: string }>(entries: T[]) {
  return entries.slice().sort((a, b) => a.id.localeCompare(b.id));
}

export async function createWikiApi(site: URL) {
  const catalog = await getContentCatalog();

  const brands = byId(catalog.brands).map((brand) => {
    const brandProducts = catalog.products.filter((entry) => entry.data.brand === brand.id);
    const productIds = new Set(brandProducts.map((entry) => entry.id));
    return {
      schemaVersion,
      entityType: "brand" as const,
      id: brand.id,
      url: absolute(`/wiki/brands/${brand.id}`, site),
      apiUrl: absolute(`/api/v1/wiki/brands/${brand.id}.json`, site),
      kind: brand.data.kind,
      parentBrand: brand.data.parentBrand ?? null,
      name: brand.data.name,
      summary: brand.data.summary,
      aliases: brand.data.aliases,
      official: brand.data.official ?? null,
      sources: brand.data.sources,
      lastVerifiedAt: brand.data.lastVerifiedAt ?? null,
      relationships: {
        parentBrand: brand.data.parentBrand ?? null,
        childBrands: byId(catalog.brands.filter((entry) => entry.data.parentBrand === brand.id)).map((entry) => entry.id),
        products: byId(brandProducts).map((entry) => entry.id),
        people: byId(catalog.people.filter((person) => person.data.relations.some((relation) => relation.entityType === "brand" && relation.entity === brand.id))).map((person) => person.id),
        episodes: byId(catalog.episodes.filter((episode) =>
          episode.data.mentions.brands.includes(brand.id)
          || episode.data.mentions.products.some((productId) => productIds.has(productId)),
        )).map((episode) => episode.id),
      },
    };
  });

  const products = byId(catalog.products).map((product) => ({
    schemaVersion,
    entityType: "product" as const,
    id: product.id,
    url: absolute(`/wiki/products/${product.id}`, site),
    apiUrl: absolute(`/api/v1/wiki/products/${product.id}.json`, site),
    kind: product.data.kind,
    brand: product.data.brand ?? null,
    parent: product.data.parent ?? null,
    name: product.data.name,
    summary: product.data.summary,
    aliases: product.data.aliases,
    status: product.data.status ?? null,
    releasedAt: product.data.releasedAt ?? null,
    official: product.data.official ?? null,
    sources: product.data.sources,
    lastVerifiedAt: product.data.lastVerifiedAt ?? null,
    relationships: {
      brand: product.data.brand ?? null,
      parent: product.data.parent ?? null,
      children: byId(catalog.products.filter((entry) => entry.data.parent === product.id)).map((entry) => entry.id),
      people: byId(catalog.people.filter((person) => person.data.relations.some((relation) => relation.entityType === "product" && relation.entity === product.id))).map((person) => person.id),
      episodes: byId(catalog.episodes.filter((episode) => episode.data.mentions.products.includes(product.id))).map((episode) => episode.id),
    },
  }));

  const people = byId(catalog.people).map((person) => ({
    schemaVersion,
    entityType: "person" as const,
    id: person.id,
    url: absolute(`/wiki/people/${person.id}`, site),
    apiUrl: absolute(`/api/v1/wiki/people/${person.id}.json`, site),
    name: person.data.name,
    bio: person.data.bio,
    aliases: person.data.aliases,
    sources: person.data.sources,
    relations: person.data.relations,
    lastVerifiedAt: person.data.lastVerifiedAt ?? null,
    photo: person.data.photo ? absolute(person.data.photo, site) : null,
    image: person.data.photo ? {
      url: absolute(person.data.photo, site),
      width: person.data.width ?? null,
      height: person.data.height ?? null,
      alt: person.data.alt,
    } : null,
    socials: person.data.socials,
    relationships: {
      brands: person.data.relations.filter((relation) => relation.entityType === "brand").map((relation) => relation.entity),
      products: person.data.relations.filter((relation) => relation.entityType === "product").map((relation) => relation.entity),
      shows: byId(catalog.hostMemberships.filter((membership) => membership.data.person === person.id)).map((membership) => membership.data.show),
      episodes: byId(catalog.episodes.filter((episode) => {
        if (episode.data.mentions.people.includes(person.id)) return true;
        if (episode.data.status === "announced") return episode.data.participants.some((participant) => participant.person === person.id);
        if (!("productionImport" in episode.data)) return false;
        const productionImport = episode.data.productionImport;
        const production = catalog.episodeImports.find((entry) => entry.id === productionImport);
        return production?.data.participants.some((participant) => participant.person === person.id) ?? false;
      })).map((episode) => episode.id),
    },
  }));

  return { brands, products, people };
}

export function collectionResponse(collection: "brands" | "products" | "people", data: unknown[]) {
  return { schemaVersion, collection, count: data.length, data };
}

export function jsonResponse(data: unknown) {
  return new Response(`${JSON.stringify(data, null, 2)}\n`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export function wikiIndex(site: URL, collections: Awaited<ReturnType<typeof createWikiApi>>) {
  return {
    schemaVersion,
    name: "Next Token Wiki API",
    description: "Public, read-only brand, product and person data from Next Token｜词元之外.",
    documentation: absolute("/api", site),
    collections: (["brands", "products", "people"] as const).map((id) => ({
      id,
      count: collections[id].length,
      url: absolute(`/api/v1/wiki/${id}.json`, site),
    })),
  };
}
