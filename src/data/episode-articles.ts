import { getCollection } from "astro:content";
import type { Locale } from "./types";

// Drafts are available for local review only, never in a production build.
export async function getEpisodeArticles(locale: Locale) {
  const [articles, episodes, transcripts] = await Promise.all([
    getCollection("episodeArticles"), getCollection("episodes"), getCollection("transcriptImports"),
  ]);
  const seen = new Set<string>();
  return articles.filter(article => article.data.locale === locale).flatMap(article => {
    const episode = episodes.find(entry => entry.id === article.data.episode);
    if (!episode) throw new Error(`Unknown article episode: ${article.data.episode}`);
    if (seen.has(episode.id)) throw new Error(`Duplicate ${locale} article for ${episode.id}`);
    seen.add(episode.id);
    const transcript = transcripts.find(entry => entry.data.episodeId === episode.id && entry.data.locale === locale);
    if (!transcript) throw new Error(`Missing article source transcript: ${episode.id}`);
    if (article.data.status === "published" && (episode.data.status !== "published" || transcript.data.publicationStatus !== "published")) {
      throw new Error(`Article requires a published episode and transcript: ${episode.id}`);
    }
    if (article.data.status === "draft" && !import.meta.env.DEV) return [];
    return [{ article, number: episode.data.number }];
  });
}

export async function getEpisodeArticle(episodeId: string, locale: Locale) {
  return (await getEpisodeArticles(locale)).find(entry => entry.article.data.episode === episodeId);
}
