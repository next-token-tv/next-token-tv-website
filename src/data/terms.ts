import { episodeTermIds } from "./episode-term-ids";
import { getCollection } from "astro:content";
import type { Locale } from "./types";
import { getContentCatalog } from "./catalog";
import { getCatalogRelations } from "./catalog-relations";

export async function getTerms(locale: Locale = "zh-Hans") {
  const [terms, articles] = await Promise.all([getCollection("terms"), getCollection("termArticles")]);
  for (const article of articles) {
    if (!terms.some(term => term.id === article.data.term)) throw new Error(`Unknown term: ${article.data.term}`);
    if (articles.filter(item => item.data.term === article.data.term && item.data.locale === article.data.locale).length !== 1) {
      throw new Error(`Duplicate term article: ${article.data.term}/${article.data.locale}`);
    }
  }
  const published = terms.filter(term => term.data.status === "published");
  for (const term of published) {
    for (const language of ["zh-Hans", "en"] as const) {
      const article = articles.find(item => item.data.term === term.id && item.data.locale === language);
      if (!article?.body?.replace(/<!--[\s\S]*?-->/g, "").trim()) throw new Error(`Missing published term article: ${term.id}/${language}`);
    }
  }
  return published.sort((a, b) => a.data.name[locale].localeCompare(b.data.name[locale], locale) || a.id.localeCompare(b.id));
}

export async function getTermArticle(id: string, locale: Locale) {
  const articles = await getCollection("termArticles");
  const article = articles.find(item => item.data.term === id && item.data.locale === locale);
  if (!article) throw new Error(`Missing term article: ${id}/${locale}`);
  return article;
}

export async function getTermEpisodes(id: string) {
  const catalog = await getContentCatalog();
  return getCatalogRelations(catalog).episodes("term", id)
    .slice().sort((a, b) => b.data.number.localeCompare(a.data.number));
}

export async function getEpisodeTerms(episodeId: string, locale: Locale) {
  const [transcripts, terms, episodes] = await Promise.all([getCollection("transcriptImports"), getTerms(locale), getCollection("episodes")]);
  const byId = new Map(terms.map(term => [term.id, term]));
  for (const episode of episodes) {
    for (const id of episode.data.mentions.terms) {
      if (!byId.has(id)) throw new Error(`Episode ${episode.id} references an unknown or unpublished term: ${id}`);
    }
  }
  const episode = episodes.find(episode => episode.id === episodeId);
  const available = transcripts.filter(({ data }) =>
    data.episodeId === episodeId && (import.meta.env.DEV || data.publicationStatus === "published"),
  );
  const transcript = available.find(({ data }) => data.locale === locale)
    ?? available.find(({ data }) => data.locale === "zh-Hans");
  const ids = episodeTermIds(episode?.data.mentions.terms, transcript?.data);
  return [...ids].flatMap(id => {
    const term = byId.get(id);
    return term ? [term] : [];
  });
}
