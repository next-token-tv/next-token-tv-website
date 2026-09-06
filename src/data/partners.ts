import { getContentCatalog } from "./catalog";
import type { Locale, LocalizedText } from "./types";

export type PartnerVenueRef = {
  partnerSlug: string;
  venueSlug: string;
};

export type PartnerVenue = {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  heroImage?: string;
  heroAlt?: LocalizedText;
  gallery?: Array<{
    src: string;
    alt: LocalizedText;
  }>;
  location: {
    label: LocalizedText;
    address: LocalizedText;
    transport?: LocalizedText;
    mapUrl: string;
    appleMap?: { placeId: string; latitude: number; longitude: number };
  };
  facts?: Array<{
    value: string;
    label: LocalizedText;
  }>;
  spaces?: Array<{
    title: LocalizedText;
    copy: LocalizedText;
  }>;
};

export type Partner = {
  slug: string;
  name: string;
  englishName: string;
  role: LocalizedText;
  summary: LocalizedText;
  introduction: Record<Locale, string[]>;
  logo: string;
  featuredVenueSlug: string;
  venues: PartnerVenue[];
  sources: Array<{
    label: LocalizedText;
    href: string;
  }>;
};

function proseParagraphs(body: string | undefined) {
  return (body ?? "")
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

export async function getPartners(): Promise<Partner[]> {
  const catalog = await getContentCatalog();

  return catalog.partners
    .slice()
    .sort((a, b) => a.data.displayOrder - b.data.displayOrder)
    .map((entry) => {
      const venues = catalog.venues
        .filter(({ data }) => data.partner === entry.id)
        .sort((a, b) => a.data.displayOrder - b.data.displayOrder)
        .map(({ data }) => ({
          slug: data.slug,
          name: data.name,
          summary: data.summary,
          heroImage: data.heroImage,
          heroAlt: data.heroAlt,
          gallery: data.gallery,
          location: data.location,
          facts: data.facts,
          spaces: data.spaces,
        }));
      const featuredVenueEntry = catalog.venues.find(({ id }) => id === entry.data.featuredVenue);
      if (!featuredVenueEntry) throw new Error(`Featured venue ${entry.data.featuredVenue} is missing`);

      const introduction = Object.fromEntries(
        (["zh-Hans", "en"] as const).map((locale) => {
          const prose = catalog.prose.find(({ data }) =>
            data.entityType === "partner"
            && data.entity === entry.id
            && data.locale === locale
            && data.slot === "introduction");
          return [locale, proseParagraphs(prose?.body)];
        }),
      ) as Record<Locale, string[]>;

      return {
        slug: entry.id,
        name: entry.data.name,
        englishName: entry.data.englishName,
        role: entry.data.role,
        summary: entry.data.summary,
        introduction,
        logo: entry.data.logo,
        featuredVenueSlug: featuredVenueEntry.data.slug,
        venues,
        sources: entry.data.sources,
      };
    });
}

export function partnerPath(partner: Partner, locale: Locale) {
  return locale === "en" ? `/en/partners/${partner.slug}/` : `/partners/${partner.slug}/`;
}

export function partnersPath(locale: Locale) {
  return locale === "en" ? "/en/partners/" : "/partners/";
}

export function featuredVenue(partner: Partner) {
  const venue = partner.venues.find(({ slug }) => slug === partner.featuredVenueSlug);

  if (!venue) {
    throw new Error(`Featured venue ${partner.featuredVenueSlug} is missing from partner ${partner.slug}`);
  }

  return venue;
}

export async function resolvePartnerVenue(ref: PartnerVenueRef) {
  const partners = await getPartners();
  const partner = partners.find(({ slug }) => slug === ref.partnerSlug);
  const venue = partner?.venues.find(({ slug }) => slug === ref.venueSlug);

  if (!partner || !venue) {
    throw new Error(`Unknown partner venue ${ref.partnerSlug}/${ref.venueSlug}`);
  }

  return { partner, venue };
}

export async function resolveVenueId(venueId: string) {
  const catalog = await getContentCatalog();
  const venueEntry = catalog.venues.find(({ id }) => id === venueId);
  if (!venueEntry) throw new Error(`Unknown venue ${venueId}`);

  return resolvePartnerVenue({
    partnerSlug: venueEntry.data.partner,
    venueSlug: venueEntry.data.slug,
  });
}
