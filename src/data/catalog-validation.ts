import { indexById, requireId, type Catalog } from "./catalog-core";

export function validateCatalog(catalog: Catalog) {
  const people = indexById(catalog.people);
  const shows = indexById(catalog.shows);
  const partners = indexById(catalog.partners);
  const venues = indexById(catalog.venues);
  const brands = indexById(catalog.brands);
  const products = indexById(catalog.products);
  const episodes = indexById(catalog.episodes);
  const episodeImports = indexById(catalog.episodeImports);

  for (const person of catalog.people) {
    const seen = new Set<string>();
    for (const relation of person.data.relations) {
      const key = `${relation.entityType}:${relation.entity}`;
      if (seen.has(key)) throw new Error(`Duplicate person relation ${person.id}: ${key}`);
      seen.add(key);
      if (relation.entityType === "brand") requireId(brands, relation.entity, `brand related to ${person.id}`);
      else requireId(products, relation.entity, `product related to ${person.id}`);
    }
  }

  for (const membership of catalog.hostMemberships) {
    const hostPerson = requireId(people, membership.data.person, "host portrait");
    if (!hostPerson.data.photo || !hostPerson.data.width || !hostPerson.data.height) throw new Error(`Host ${hostPerson.id} requires portrait dimensions`);
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

  for (const brand of catalog.brands) {
    if (brand.data.parentBrand) {
      const parentBrand = requireId(brands, brand.data.parentBrand, `parent brand referenced by brand ${brand.id}`);
      if (parentBrand.id === brand.id) throw new Error(`Brand ${brand.id} cannot be its own parent`);
    }
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
    if (product.data.brand) requireId(brands, product.data.brand, `brand referenced by product ${product.id}`);
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
      if (production.data.recordingMode === "online") {
        if (production.data.recordingVenue) throw new Error(`Online episode ${episode.id} must not have a physical venue`);
      } else {
        if (!production.data.recordingVenue && !production.data.recordingLocation) throw new Error(`In-person episode ${episode.id} requires a venue or recording location`);
        if (production.data.recordingVenue) requireId(venues, production.data.recordingVenue, `venue referenced by episode ${episode.id}`);
      }

      const participantIds = production.data.participants.map(({ person }) => person);
      if (new Set(participantIds).size !== participantIds.length) {
        throw new Error(`Episode ${episode.id} contains duplicate participants`);
      }
      participantIds.forEach((person) => requireId(people, person, `person referenced by episode ${episode.id}`));
    } else {
      if (episode.data.recordingMode === "in-person") {
        if (!episode.data.recordingVenue && !(episode.data.detailLayout && episode.data.recordingLocation)) throw new Error(`In-person episode ${episode.id} requires a venue or a prepared recording location`);
        if (episode.data.recordingVenue) requireId(venues, episode.data.recordingVenue, `venue referenced by announced episode ${episode.id}`);
      } else if (episode.data.recordingVenue) {
        throw new Error(`Online episode ${episode.id} must not reference a physical venue`);
      }
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

  for (const transcript of catalog.transcriptImports) {
    requireId(episodes, transcript.data.episodeId, `episode referenced by transcript ${transcript.id}`);
    const expectedId = `${transcript.data.episodeId}.${transcript.data.locale}`;
    if (transcript.id !== expectedId) {
      throw new Error(`Transcript import ${transcript.id} must use ID ${expectedId}`);
    }
    if (transcript.data.chapterCount !== transcript.data.chapters.length) {
      throw new Error(`Transcript import ${transcript.id} chapter count does not match its chapters`);
    }
    transcript.data.chapters.flatMap(({ turns }) => turns).forEach((turn) => {
      if (turn.speakerId) requireId(people, turn.speakerId, `speaker referenced by transcript ${transcript.id}`);
    });
  }

  const wikiKeys = new Set<string>();
  for (const entry of catalog.prose) {
    if (entry.data.slot === "wiki") {
      const key = `${entry.data.entityType}:${entry.data.entity}:${entry.data.locale}`;
      if (wikiKeys.has(key)) throw new Error(`Duplicate Wiki prose: ${key}`);
      wikiKeys.add(key);
      if (!["brand", "product", "person"].includes(entry.data.entityType) || !entry.data.updatedAt) {
        throw new Error(`Wiki prose ${entry.id} requires an entity and updatedAt`);
      }
    }
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

