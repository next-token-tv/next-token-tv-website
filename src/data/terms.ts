import { getCollection } from "astro:content";
import type { Locale } from "./types";

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

export async function getEpisodeTerms(episodeId: string, locale: Locale) {
  const [transcripts, terms] = await Promise.all([getCollection("transcriptImports"), getTerms(locale)]);
  const available = transcripts.filter(({ data }) =>
    data.episodeId === episodeId && (import.meta.env.DEV || data.publicationStatus === "published"),
  );
  const transcript = available.find(({ data }) => data.locale === locale)
    ?? available.find(({ data }) => data.locale === "zh-Hans");
  if (!transcript) return [];
  const ids = new Set<string>();
  for (const chapter of transcript.data.chapters) {
    for (const turn of chapter.turns) {
      for (const paragraph of turn.paragraphs) {
        for (const segment of paragraph) {
          if (segment.type === "entity-link" && segment.entityType === "term" && segment.entityId) {
            ids.add(segment.entityId);
          }
        }
      }
    }
  }
  const byId = new Map(terms.map(term => [term.id, term]));
  return [...ids].flatMap(id => {
    const term = byId.get(id);
    return term ? [term] : [];
  });
}
