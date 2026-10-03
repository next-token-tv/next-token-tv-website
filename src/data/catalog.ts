import { getCollection, type CollectionEntry } from "astro:content";
import type { Host } from "./site";
import type { Locale } from "./types";

import { indexById, requireId, type Catalog } from "./catalog-core";
import { validateCatalog } from "./catalog-validation";
import { getCatalogRelations } from "./catalog-relations";

function proseParagraphs(body: string | undefined) {
  return (body ?? "")
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}


async function loadContentCatalog(): Promise<Catalog> {
  const catalog = await Promise.all([
    getCollection("people"),
    getCollection("shows"),
    getCollection("hostMemberships"),
    getCollection("partners"),
    getCollection("venues"),
    getCollection("brands"),
    getCollection("products"),
    getCollection("episodes"),
    getCollection("episodeImports"),
    getCollection("transcriptImports"),
    getCollection("prose"),
  ]).then(([people, shows, hostMemberships, partners, venues, brands, products, episodes, episodeImports, transcriptImports, prose]) => {
    const catalog = { people, shows, hostMemberships, partners, venues, brands, products, episodes, episodeImports, transcriptImports, prose };
    validateCatalog(catalog);
    return catalog;
  });

  return catalog;
}

let buildCatalog: Promise<Catalog> | undefined;
export function getContentCatalog(): Promise<Catalog> {
  // Development deliberately reloads so Astro content edits are never hidden.
  if (!import.meta.env.PROD) return loadContentCatalog();
  return buildCatalog ??= loadContentCatalog().catch(error => {
    buildCatalog = undefined;
    throw error;
  });
}

const platformLabels = {
  x: { "zh-Hans": "X", en: "X" },
  github: { "zh-Hans": "GitHub", en: "GitHub" },
  jike: { "zh-Hans": "即刻", en: "Jike" },
  weibo: { "zh-Hans": "微博", en: "Weibo" },
  wechat: { "zh-Hans": "公众号", en: "WeChat" },
  "wechat-channels": { "zh-Hans": "视频号", en: "Channels" },
  rednote: { "zh-Hans": "小红书", en: "RedNote" },
  linkedin: { "zh-Hans": "LinkedIn", en: "LinkedIn" },
  blog: { "zh-Hans": "博客", en: "Blog" },
  podcast: { "zh-Hans": "播客", en: "Podcast" },
} as const;

const socialOrder: (keyof typeof platformLabels)[] = [
  "podcast", "x", "github", "jike", "wechat", "wechat-channels", "rednote", "weibo", "linkedin", "blog",
];

function getSocials(socials: CollectionEntry<"people">["data"]["socials"], locale: Locale): Host["socials"] {
  return [...socials].sort((a, b) => socialOrder.indexOf(a.platform) - socialOrder.indexOf(b.platform)).map(social => ({
    platform: platformLabels[social.platform][locale],
    handle: social.handle,
    href: social.href,
    note: social.href ? undefined : ["wechat", "wechat-channels"].includes(social.platform)
      ? (locale === "zh-Hans" ? "微信内搜索" : "Search in WeChat")
      : (locale === "zh-Hans" ? "App 内搜索" : "Search in app"),
  }));
}

export async function getHostsForShow(showId: string, locale: Locale): Promise<Host[]> {
  const catalog = await getContentCatalog();
  const people = indexById(catalog.people);

  return catalog.hostMemberships
    .filter(({ data }) => data.show === showId && data.active)
    .sort((a, b) => a.data.displayOrder - b.data.displayOrder)
    .map(({ data }) => {
      const person = requireId(people, data.person, `person referenced by ${showId}`);
      const displayName = person.data.name[locale];

      return {
        id: person.id,
        profilePath: `${locale === "en" ? "/en" : ""}/wiki/people/${person.id}`,
        name: displayName,
        bio: person.data.bio[locale],
        photo: person.data.photo!,
        width: person.data.width!,
        height: person.data.height!,
        alt: person.data.alt[locale],
        socialsLabel: person.data.socialsLabel[locale],
        socials: getSocials(person.data.socials, locale),
      };
    });
}

export async function getShowPageData(showId: string, locale: Locale) {
  const catalog = await getContentCatalog();
  const show = requireId(indexById(catalog.shows), showId, "show");
  const overview = catalog.prose.find(({ data }) =>
    data.entityType === "show"
    && data.entity === showId
    && data.locale === locale
    && data.slot === "overview");

  if (!overview) {
    throw new Error(`Show ${showId} is missing its ${locale} overview`);
  }

  return {
    ...show,
    overview: proseParagraphs(overview.body),
  };
}

export async function getEpisode(episodeId: string) {
  const catalog = await getContentCatalog();
  return requireId(indexById(catalog.episodes), episodeId, "episode");
}

export async function getEpisodesForShow(showId: string) {
  const catalog = await getContentCatalog();
  return catalog.episodes
    .filter(({ data }) => data.show === showId)
    .sort((a, b) => a.data.number.localeCompare(b.data.number));
}

export async function getEpisodeShowNotes(episodeId: string, locale: Locale) {
  const catalog = await getContentCatalog();
  requireId(indexById(catalog.episodes), episodeId, "episode");
  const showNotes = catalog.prose.find(({ data }) =>
    data.entityType === "episode"
    && data.entity === episodeId
    && data.locale === locale
    && data.slot === "show-notes");

  if (!showNotes) {
    throw new Error(`Episode ${episodeId} is missing its ${locale} show notes`);
  }

  return showNotes;
}

export async function getPublishedEpisode(episodeId?: string) {
  const catalog = await getContentCatalog();
  episodeId ??= catalog.episodes.filter(({ data }) => data.status === "published" && data.show === "next-token-weekly")
    .sort((a, b) => Number(b.data.number) - Number(a.data.number))[0]?.id;
  if (!episodeId) throw new Error("No published Weekly episode");
  const episode = requireId(indexById(catalog.episodes), episodeId, "episode");
  if (episode.data.status !== "published") {
    throw new Error(`Episode ${episodeId} is not published`);
  }
  const production = requireId(
    indexById(catalog.episodeImports),
    episode.data.productionImport,
    `production import referenced by episode ${episodeId}`,
  );

  return {
    ...episode,
    data: {
      ...production.data,
      ...episode.data,
    },
  };
}

/** Final page composition before verified media and production imports are available. */
export async function getDetailEpisode(episodeId: string) {
  const episode = await getEpisode(episodeId);
  if (episode.data.status === "published") return getPublishedEpisode(episodeId);
  const data = episode.data;
  if (!data.detailLayout || !data.preview.images?.["960"]) throw new Error(`Episode ${episodeId} has no prepared detail layout`);
  const homepageFor = (locale: Locale) => ({
    eyebrow: `Next Token Weekly #${data.number}`,
    heading: data.preview.heading[locale],
    lede: data.preview.summary[locale],
    imageAlt: data.preview.heading[locale].join(" "),
  });
  const homepage = { "zh-Hans": homepageFor("zh-Hans"), en: homepageFor("en") };
  const platforms = ([
    ["xiaoyuzhou", "小宇宙", "Xiaoyuzhou"], ["apple-podcasts", "Apple Podcasts", "Apple Podcasts"],
    ["spotify", "Spotify", "Spotify"], ["bilibili", "哔哩哔哩", "Bilibili"], ["youtube", "YouTube", "YouTube"],
  ] as const).map(([platform, zh, en]) => ({ platform, label: { "zh-Hans": zh, en }, href: undefined as string | undefined, action: undefined as Record<Locale, string> | undefined }));
  return { ...episode, data: { ...data, homepage, platforms,
    recordedAt: data.scheduledAt.slice(0, 10), releaseDate: undefined,
    editorialWindow: undefined, durationSeconds: undefined,
    images: data.preview.images, imageKind: "artwork" as const,
    imageDimensions: data.preview.imageDimensions ?? { width: 1920, height: 1080 },
    media: { audio: false, video: false }, guestNames: [] as Record<Locale, string>[],
  } };
}

export async function getPublishedEpisodes(showId = "next-token-weekly") {
  const catalog = await getContentCatalog();
  return Promise.all(catalog.episodes.filter(({ data }) => data.status === "published" && data.show === showId)
    .sort((a, b) => Number(b.data.number) - Number(a.data.number)).map(({ id }) => getPublishedEpisode(id)));
}

export async function getEpisodeTranscript(episodeId: string, locale: Locale) {
  const catalog = await getContentCatalog();
  requireId(indexById(catalog.episodes), episodeId, "transcript episode");
  return requireId(
    indexById(catalog.transcriptImports),
    `${episodeId}.${locale}`,
    `${locale} transcript for ${episodeId}`,
  );
}

export async function getEpisodeTranscriptOrNull(episodeId: string, locale: Locale) {
  const catalog = await getContentCatalog();
  return catalog.transcriptImports.find(({ data }) => data.episodeId === episodeId && data.locale === locale) ?? null;
}

export async function getTranscriptEpisodes(locale: Locale) {
  const catalog = await getContentCatalog();
  const episodeIds = new Set(
    catalog.transcriptImports.filter(({ data }) => data.locale === locale).map(({ data }) => data.episodeId),
  );
  return catalog.episodes.filter(({ id }) => episodeIds.has(id));
}

export async function getPublishedTranscriptEpisodes(locale: Locale) {
  const catalog = await getContentCatalog();
  const episodeIds = new Set(
    catalog.transcriptImports
      .filter(({ data }) => data.locale === locale && data.publicationStatus === "published")
      .map(({ data }) => data.episodeId),
  );
  return catalog.episodes.filter(({ id, data }) => data.status === "published" && episodeIds.has(id));
}

export async function getAnnouncedEpisodes() {
  const catalog = await getContentCatalog();
  return catalog.episodes.filter((episode) => episode.data.status === "announced");
}

export async function getAnnouncedEpisode(episodeId: string) {
  const episode = await getEpisode(episodeId);
  const data = episode.data;
  if (data.status !== "announced") {
    throw new Error(`Episode ${episodeId} is not announced`);
  }
  return { ...episode, data };
}

export async function getPeopleByIds(personIds: string[]) {
  const catalog = await getContentCatalog();
  const people = indexById(catalog.people);
  return personIds.map((personId) => requireId(people, personId, "person"));
}

export async function getEntityPeopleRelations(entityType: "person" | "brand" | "product", entityId: string, locale: Locale) {
  const catalog = await getContentCatalog();
  const prefix = locale === "en" ? "/en" : "";
  if (entityType === "person") {
    const person = requireId(indexById(catalog.people), entityId, "person relationships");
    return person.data.relations.map(relation => {
      const entity = relation.entityType === "brand"
        ? requireId(indexById(catalog.brands), relation.entity, "related brand")
        : requireId(indexById(catalog.products), relation.entity, "related product");
      return { name: entity.data.name[locale], role: relation.role[locale], href: `${prefix}/wiki/${relation.entityType === "brand" ? "brands" : "products"}/${entity.id}`, sources: relation.sources };
    });
  }
  return catalog.people.flatMap(person => person.data.relations
    .filter(relation => relation.entityType === entityType && relation.entity === entityId)
    .map(relation => ({ name: person.data.name[locale], role: relation.role[locale], href: `${prefix}/wiki/people/${person.id}`, sources: relation.sources })));
}

export async function getPeopleDirectory(locale: Locale) {
  const catalog = await getContentCatalog();
  const hostOrder = (id: string) => catalog.hostMemberships.find(m => m.data.person === id)?.data.displayOrder ?? Number.MAX_SAFE_INTEGER;
  return catalog.people.slice().sort((a, b) =>
    hostOrder(a.id) - hostOrder(b.id)
    || a.data.name[locale].localeCompare(b.data.name[locale], locale)
    || a.id.localeCompare(b.id)
  ).map(person => ({
    person,
    isHost: catalog.hostMemberships.some(m => m.data.person === person.id),
    episodesCount: getCatalogRelations(catalog).episodes("person", person.id).length,
  }));
}

export async function getHostProfileIds() {
  const catalog = await getContentCatalog();
  return [...new Set(catalog.hostMemberships.map(({ data }) => data.person))];
}

export async function getHostProfile(personId: string, locale: Locale) {
  const catalog = await getContentCatalog();
  const memberships = catalog.hostMemberships.filter(({ data }) => data.person === personId);
  if (!memberships.length) throw new Error(`No host membership for ${personId}`);
  const person = requireId(indexById(catalog.people), personId, "profile person");
  const host: Host = {
    id: personId,
    profilePath: `${locale === "en" ? "/en" : ""}/wiki/people/${personId}`,
    name: person.data.name[locale], bio: person.data.bio[locale],
    photo: person.data.photo!, width: person.data.width!, height: person.data.height!,
    alt: person.data.alt[locale], socialsLabel: person.data.socialsLabel[locale],
    socials: getSocials(person.data.socials, locale),
  };
  const imports = indexById(catalog.episodeImports);
  const episodes = catalog.episodes.filter(({ data }) => {
    const participants = data.status === "announced" ? data.participants
      : requireId(imports, data.productionImport, "episode production").data.participants;
    return participants.some(({ person }) => person === personId);
  }).sort((a, b) => b.data.number.localeCompare(a.data.number));
  const shows = memberships.map(({ data }) => ({
    ...requireId(indexById(catalog.shows), data.show, "host show"), active: data.active,
  }));
  const profiles = catalog.prose.filter(({ data }) => data.entityType === "person"
    && data.entity === personId && data.locale === locale && data.slot === "profile");
  if (profiles.length !== 1) throw new Error(`Expected one ${locale} profile for ${personId}`);
  return { host, shows, episodes, profile: profiles[0]! };
}

function newestEpisodeFirst(
  a: CollectionEntry<"episodes">,
  b: CollectionEntry<"episodes">,
) {
  return b.data.number.localeCompare(a.data.number);
}

export async function getBrandDirectory(locale: Locale) {
  const catalog = await getContentCatalog();
  return catalog.brands
    .map((brand) => {
      const relations = getCatalogRelations(catalog);
      const products = relations.brandProducts(brand.id);
      const episodes = relations.episodes("brand", brand.id);
      return { brand, productsCount: products.length, episodesCount: episodes.length };
    })
    .sort((a, b) => a.brand.data.name[locale].localeCompare(b.brand.data.name[locale], locale));
}

export async function getProductDirectory(locale: Locale) {
  const catalog = await getContentCatalog();
  const brands = indexById(catalog.brands);
  return catalog.products
    .map((product) => ({
      product,
      brand: product.data.brand ? requireId(brands, product.data.brand, `brand referenced by product ${product.id}`) : undefined,
      episodesCount: getCatalogRelations(catalog).episodes("product", product.id).length,
    }))
    .sort((a, b) => a.product.data.name[locale].localeCompare(b.product.data.name[locale], locale));
}

export async function getBrandProfile(brandId: string) {
  const catalog = await getContentCatalog();
  const brands = indexById(catalog.brands);
  const brand = requireId(indexById(catalog.brands), brandId, "brand");
  const parentBrand = brand.data.parentBrand
    ? requireId(brands, brand.data.parentBrand, `parent brand referenced by ${brandId}`)
    : undefined;
  const childBrands = catalog.brands
    .filter(({ data }) => data.parentBrand === brandId)
    .sort((a, b) => a.data.name.en.localeCompare(b.data.name.en));
  const relations = getCatalogRelations(catalog);
  const products = relations.brandProducts(brandId).slice().sort((a, b) => a.data.name.en.localeCompare(b.data.name.en));
  const episodes = relations.episodes("brand", brandId).slice().sort(newestEpisodeFirst);
  return { brand, parentBrand, childBrands, products, episodes };
}

export async function getProductProfile(productId: string) {
  const catalog = await getContentCatalog();
  const products = indexById(catalog.products);
  const brands = indexById(catalog.brands);
  const product = requireId(products, productId, "product");
  const brand = product.data.brand ? requireId(brands, product.data.brand, `brand referenced by product ${productId}`) : undefined;
  const parent = product.data.parent
    ? requireId(products, product.data.parent, `parent referenced by product ${productId}`)
    : undefined;
  const children = catalog.products
    .filter(({ data }) => data.parent === productId)
    .sort((a, b) => a.data.name.en.localeCompare(b.data.name.en));
  const episodes = getCatalogRelations(catalog).episodes("product", productId).slice().sort(newestEpisodeFirst);
  return { product, brand, parent, children, episodes };
}

export async function getEpisodeMentionEntities(episodeId: string) {
  const catalog = await getContentCatalog();
  const episode = requireId(indexById(catalog.episodes), episodeId, "episode");
  const brands = indexById(catalog.brands);
  const products = indexById(catalog.products);
  return {
    people: episode.data.mentions.people.map((id) => requireId(indexById(catalog.people), id, `person mentioned by ${episodeId}`)),
    brands: episode.data.mentions.brands.map((id) => requireId(brands, id, `brand mentioned by ${episodeId}`)),
    products: episode.data.mentions.products.map((id) => requireId(products, id, `product mentioned by ${episodeId}`)),
  };
}

export async function getWikiArticle(entityType: "brand" | "product" | "person", entityId: string, locale: Locale) {
  const catalog = await getContentCatalog();
  return catalog.prose.find(({ data }) => data.slot === "wiki"
    && data.entityType === entityType && data.entity === entityId && data.locale === locale) ?? null;
}
