import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const locale = z.enum(["zh-Hans", "en"]);
const localizedText = z.object({
  "zh-Hans": z.string(),
  en: z.string(),
});
const assetPath = z.string().regex(/^\/assets\//, "Expected an absolute /assets/ path");
const source = z.object({
  label: localizedText,
  href: z.url(),
});
const yamlLoader = (base: string) => glob({
  pattern: "**/*.yaml",
  base,
  generateId: ({ entry }) => entry.replace(/\.ya?ml$/i, ""),
});
const markdownLoader = (base: string) => glob({
  pattern: "**/*.md",
  base,
  generateId: ({ entry }) => entry.replace(/\.md$/i, ""),
});
const jsonLoader = (base: string) => glob({
  pattern: "**/*.json",
  base,
  generateId: ({ entry }) => entry.replace(/\.json$/i, ""),
});

const showPage = z.object({
  eyebrow: z.string(),
  heading: z.tuple([z.string(), z.string()]),
  lede: z.string(),
  formatHeading: z.tuple([z.string(), z.string()]),
  facts: z.array(z.object({
    value: z.string(),
    label: z.string(),
  })).length(4),
});

const people = defineCollection({
  loader: yamlLoader("./src/content/data/people"),
  schema: z.object({
    name: localizedText,
    bio: localizedText,
    photo: assetPath,
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    alt: localizedText,
    socialsLabel: localizedText,
    socials: z.array(z.object({
      platform: z.enum(["x", "github", "jike", "weibo", "wechat", "wechat-channels", "rednote", "linkedin", "blog", "podcast"]),
      handle: z.string(),
      href: z.url().optional(),
    })),
  }),
});

const shows = defineCollection({
  loader: yamlLoader("./src/content/data/shows"),
  schema: z.object({
    name: localizedText,
    ownerBrand: z.string(),
    type: z.enum(["weekly-roundtable", "interview", "special"]),
    status: z.enum(["active", "paused", "archived"]),
    flagship: z.boolean().default(false),
    cadence: z.enum(["weekly", "biweekly", "monthly", "irregular"]),
    defaultLocale: locale,
    page: z.object({ "zh-Hans": showPage, en: showPage }),
  }),
});

const hostMemberships = defineCollection({
  loader: yamlLoader("./src/content/data/host-memberships"),
  schema: z.object({
    person: z.string(),
    show: z.string(),
    role: z.enum(["co-host"]),
    active: z.boolean(),
    displayOrder: z.number().int().nonnegative(),
  }),
});

const partners = defineCollection({
  loader: yamlLoader("./src/content/data/partners"),
  schema: z.object({
    name: z.string(),
    englishName: z.string(),
    role: localizedText,
    summary: localizedText,
    logo: assetPath,
    featuredVenue: z.string(),
    displayOrder: z.number().int().nonnegative(),
    sources: z.array(source),
  }),
});

const venues = defineCollection({
  loader: yamlLoader("./src/content/data/venues"),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    partner: z.string(),
    name: localizedText,
    summary: localizedText,
    heroImage: assetPath.optional(),
    heroAlt: localizedText.optional(),
    gallery: z.array(z.object({ src: assetPath, alt: localizedText })).optional(),
    location: z.object({
      label: localizedText,
      address: localizedText,
      transport: localizedText.optional(),
      mapUrl: z.url(),
      appleMap: z.object({
        placeId: z.string().regex(/^[A-Za-z0-9]+$/),
        latitude: z.number().min(-90).max(90),
        longitude: z.number().min(-180).max(180),
      }).optional(),
    }),
    facts: z.array(z.object({ value: z.string(), label: localizedText })).optional(),
    spaces: z.array(z.object({ title: localizedText, copy: localizedText })).optional(),
    displayOrder: z.number().int().nonnegative(),
  }),
});

const brands = defineCollection({
  loader: yamlLoader("./src/content/data/brands"),
  schema: z.object({
    kind: z.enum(["company-brand", "media-brand", "model-brand", "product-brand", "platform-brand", "open-source-brand"]),
    name: localizedText,
    aliases: z.array(z.string()).default([]),
    official: z.object({
      website: z.url().optional(),
      documentation: z.url().optional(),
      repository: z.url().optional(),
    }).optional(),
    lastVerifiedAt: z.iso.date().optional(),
  }),
});

const products = defineCollection({
  loader: yamlLoader("./src/content/data/products"),
  schema: z.object({
    kind: z.enum(["model-family", "model", "application", "agent", "developer-tool", "platform", "api-service", "hardware", "framework", "open-source-project"]),
    brand: z.string(),
    parent: z.string().optional(),
    name: localizedText,
    aliases: z.array(z.string()).default([]),
    status: z.enum(["announced", "preview", "available", "deprecated", "discontinued"]).optional(),
    releasedAt: z.iso.date().optional(),
    official: z.object({
      website: z.url().optional(),
      documentation: z.url().optional(),
      repository: z.url().optional(),
    }).optional(),
    lastVerifiedAt: z.iso.date().optional(),
  }),
});

const episodeHomepage = z.object({
  lede: z.string(),
  imageAlt: z.string(),
  eyebrow: z.string(),
  heading: z.tuple([z.string(), z.string()]),
  copy: z.string(),
  topicsLabel: z.string(),
  topics: z.array(z.string()),
  listenAction: z.string(),
  watchAction: z.string(),
});

const localizedHeading = z.object({
  "zh-Hans": z.tuple([z.string(), z.string()]),
  en: z.tuple([z.string(), z.string()]),
});

const episodeCore = {
  schemaVersion: z.number().int().positive(),
  number: z.string().regex(/^\d{3}$/),
  show: z.string(),
  title: localizedText,
  mentions: z.object({
    brands: z.array(z.string()).default([]),
    products: z.array(z.string()).default([]),
    people: z.array(z.string()).default([]),
  }),
};

const episodes = defineCollection({
  loader: yamlLoader("./src/content/data/episodes"),
  schema: z.discriminatedUnion("status", [
    z.object({
      ...episodeCore,
      status: z.literal("published"),
      productionImport: z.string(),
      homepage: z.object({ "zh-Hans": episodeHomepage, en: episodeHomepage }),
      platforms: z.array(z.object({
        platform: z.enum(["xiaoyuzhou", "apple-podcasts", "spotify", "bilibili", "youtube"]),
        label: localizedText,
        href: z.url().optional(),
        action: localizedText.optional(),
      })),
    }),
    z.object({
      ...episodeCore,
      status: z.literal("announced"),
      scheduledAt: z.iso.datetime({ offset: true }),
      timeZone: z.string(),
      recordingVenue: z.string(),
      participants: z.array(z.object({
        person: z.string(),
        role: z.enum(["duty-host", "co-host", "guest"]),
      })),
      preview: z.object({
        eyebrow: localizedText,
        heading: localizedHeading,
        summary: localizedText,
        note: localizedText,
      }),
    }),
  ]),
});

const episodeImports = defineCollection({
  loader: jsonLoader("./src/content/imported/episodes"),
  schema: z.object({
    schemaVersion: z.number().int().positive(),
    episodeId: z.string(),
    number: z.string().regex(/^\d{3}$/),
    show: z.string(),
    status: z.enum(["draft", "recorded", "scheduled", "published", "archived"]),
    language: locale,
    recordedAt: z.iso.date(),
    recordingVenue: z.string(),
    releaseDate: z.iso.date().optional(),
    editorialWindow: z.object({ start: z.iso.date(), end: z.iso.date() }),
    participants: z.array(z.object({
      person: z.string(),
      role: z.enum(["duty-host", "co-host", "guest"]),
    })),
    images: z.object({
      "960": assetPath,
      "1440": assetPath,
      "1920": assetPath,
    }),
    provenance: z.object({
      productionCommit: z.string().regex(/^[0-9a-f]{40}$/),
      releaseManifestSha256: z.string().regex(/^[0-9a-f]{64}$/),
    }),
  }),
});

const prose = defineCollection({
  loader: markdownLoader("./src/content/prose"),
  schema: z.object({
    entityType: z.enum(["brand", "product", "person", "partner", "venue", "show", "episode"]),
    entity: z.string(),
    locale,
    slot: z.enum(["introduction", "profile", "overview", "show-notes"]),
  }),
});

export const collections = {
  people,
  shows,
  hostMemberships,
  partners,
  venues,
  brands,
  products,
  episodes,
  episodeImports,
  prose,
};
