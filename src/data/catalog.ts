import { getCollection, type CollectionEntry } from "astro:content";
import type { Host } from "./site";
import type { Locale } from "./types";

type Catalog = {
  people: CollectionEntry<"people">[];
  shows: CollectionEntry<"shows">[];
  hostMemberships: CollectionEntry<"hostMemberships">[];
  partners: CollectionEntry<"partners">[];
  venues: CollectionEntry<"venues">[];
  brands: CollectionEntry<"brands">[];
  products: CollectionEntry<"products">[];
  episodes: CollectionEntry<"episodes">[];
  episodeImports: CollectionEntry<"episodeImports">[];
  prose: CollectionEntry<"prose">[];
};

function indexById<T extends { id: string }>(entries: T[]) {
  return new Map(entries.map((entry) => [entry.id, entry]));
}

function requireId<T>(index: Map<string, T>, id: string, relation: string): T {
  const entry = index.get(id);
  if (!entry) throw new Error(`Unknown ${relation}: ${id}`);
  return entry;
}

function proseParagraphs(body: string | undefined) {
  return (body ?? "")
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

function validateCatalog(catalog: Catalog) {
  const people = indexById(catalog.people);
  const shows = indexById(catalog.shows);
  const partners = indexById(catalog.partners);
  const venues = indexById(catalog.venues);
  const brands = indexById(catalog.brands);
  const products = indexById(catalog.products);
  const episodes = indexById(catalog.episodes);
  const episodeImports = indexById(catalog.episodeImports);

  for (const membership of catalog.hostMemberships) {
    requireId(people, membership.data.person, `person referenced by host membership ${membership.id}`);
    requireId(shows, membership.data.show, `show referenced by host membership ${membership.id}`);
    const expectedId = `${membership.data.show}--${membership.data.person}`;
    if (membership.id !== expectedId) {
      throw new Error(`Host membership ${membership.id} must use ID ${expectedId}`);
    }
  }

  for (const show of catalog.shows) {
    requireId(brands, show.data.ownerBrand, `owner brand referenced by show ${show.id}`);
  }

  for (const venue of catalog.venues) {
    requireId(partners, venue.data.partner, `partner referenced by venue ${venue.id}`);
    const expectedId = `${venue.data.partner}--${venue.data.slug}`;
    if (venue.id !== expectedId) {
      throw new Error(`Venue ${venue.id} must use ID ${expectedId}`);
    }
  }

  for (const partner of catalog.partners) {
    const featuredVenue = requireId(venues, partner.data.featuredVenue, `featured venue referenced by partner ${partner.id}`);
    if (featuredVenue.data.partner !== partner.id) {
      throw new Error(`Featured venue ${featuredVenue.id} does not belong to partner ${partner.id}`);
    }
  }

  for (const product of catalog.products) {
    requireId(brands, product.data.brand, `brand referenced by product ${product.id}`);
    if (product.data.parent) {
      const parent = requireId(products, product.data.parent, `parent referenced by product ${product.id}`);
      if (parent.id === product.id) throw new Error(`Product ${product.id} cannot be its own parent`);
    }
  }

  for (const episode of catalog.episodes) {
    requireId(shows, episode.data.show, `show referenced by episode ${episode.id}`);
    const expectedEpisodeId = `${episode.data.show}--${episode.data.number}`;
    if (episode.id !== expectedEpisodeId) {
      throw new Error(`Episode ${episode.id} must use ID ${expectedEpisodeId}`);
    }

    if (episode.data.status === "published") {
      const production = requireId(
        episodeImports,
        episode.data.productionImport,
        `production import referenced by episode ${episode.id}`,
      );
      if (production.data.episodeId !== episode.id) {
        throw new Error(`Production import ${production.id} belongs to ${production.data.episodeId}, not ${episode.id}`);
      }
      if (production.data.show !== episode.data.show || production.data.number !== episode.data.number) {
        throw new Error(`Production import ${production.id} identity does not match episode ${episode.id}`);
      }
      if (production.id !== `${episode.id}.production`) {
        throw new Error(`Production import ${production.id} must use ID ${episode.id}.production`);
      }
      requireId(venues, production.data.recordingVenue, `venue referenced by episode ${episode.id}`);

      const participantIds = production.data.participants.map(({ person }) => person);
      if (new Set(participantIds).size !== participantIds.length) {
        throw new Error(`Episode ${episode.id} contains duplicate participants`);
      }
      participantIds.forEach((person) => requireId(people, person, `person referenced by episode ${episode.id}`));
    } else {
      requireId(venues, episode.data.recordingVenue, `venue referenced by announced episode ${episode.id}`);
      const participantIds = episode.data.participants.map(({ person }) => person);
      if (new Set(participantIds).size !== participantIds.length) {
        throw new Error(`Announced episode ${episode.id} contains duplicate participants`);
      }
      participantIds.forEach((person) => requireId(people, person, `person referenced by announced episode ${episode.id}`));
    }

    episode.data.mentions.brands.forEach((brand) => requireId(brands, brand, `brand mentioned by episode ${episode.id}`));
    episode.data.mentions.products.forEach((product) => requireId(products, product, `product mentioned by episode ${episode.id}`));
    episode.data.mentions.people.forEach((person) => requireId(people, person, `person mentioned by episode ${episode.id}`));
  }

  for (const entry of catalog.prose) {
    const relation = `${entry.data.entityType} referenced by prose ${entry.id}`;
    switch (entry.data.entityType) {
      case "brand": requireId(brands, entry.data.entity, relation); break;
      case "product": requireId(products, entry.data.entity, relation); break;
      case "person": requireId(people, entry.data.entity, relation); break;
      case "partner": requireId(partners, entry.data.entity, relation); break;
      case "venue": requireId(venues, entry.data.entity, relation); break;
      case "show": requireId(shows, entry.data.entity, relation); break;
      case "episode": requireId(episodes, entry.data.entity, relation); break;
    }
  }

  for (const partner of catalog.partners) {
    for (const locale of ["zh-Hans", "en"] as const) {
      const prose = catalog.prose.filter((entry) =>
        entry.data.entityType === "partner"
        && entry.data.entity === partner.id
        && entry.data.locale === locale
        && entry.data.slot === "introduction");
      if (prose.length !== 1) {
        throw new Error(`Partner ${partner.id} must have exactly one ${locale} introduction`);
      }
    }
  }


  for (const show of catalog.shows) {
    for (const locale of ["zh-Hans", "en"] as const) {
      const prose = catalog.prose.filter((entry) =>
        entry.data.entityType === "show"
        && entry.data.entity === show.id
        && entry.data.locale === locale
        && entry.data.slot === "overview");
      if (prose.length !== 1) {
        throw new Error(`Show ${show.id} must have exactly one ${locale} overview`);
      }
    }
  }

  for (const episode of catalog.episodes) {
    if (episode.data.status !== "published") continue;
    for (const locale of ["zh-Hans", "en"] as const) {
      const prose = catalog.prose.filter((entry) =>
        entry.data.entityType === "episode"
        && entry.data.entity === episode.id
        && entry.data.locale === locale
        && entry.data.slot === "show-notes");
      if (prose.length !== 1) {
        throw new Error(`Published episode ${episode.id} must have exactly one ${locale} show-notes entry`);
      }
    }
  }
}

export async function getContentCatalog(): Promise<Catalog> {
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
    getCollection("prose"),
  ]).then(([people, shows, hostMemberships, partners, venues, brands, products, episodes, episodeImports, prose]) => {
    const catalog = { people, shows, hostMemberships, partners, venues, brands, products, episodes, episodeImports, prose };
    validateCatalog(catalog);
    return catalog;
  });

  return catalog;
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
        profilePath: `${locale === "en" ? "/en" : ""}/people/${person.id}/`,
        name: displayName,
        bio: person.data.bio[locale],
        photo: person.data.photo,
        width: person.data.width,
        height: person.data.height,
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

export async function getPublishedEpisode(episodeId = "next-token-weekly--001") {
  const catalog = await getContentCatalog();
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
    profilePath: `${locale === "en" ? "/en" : ""}/people/${personId}/`,
    name: person.data.name[locale], bio: person.data.bio[locale],
    photo: person.data.photo, width: person.data.width, height: person.data.height,
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
