import type { APIRoute } from "astro";
import { getEpisodesForShow, getPublishedEpisode } from "../../data/catalog";
import { episodeRss } from "../../data/episode-rss";

export const GET: APIRoute = async ({ site }) => {
  const episodes = await getEpisodesForShow("next-token-weekly");
  const items = await Promise.all(episodes.filter(episode => episode.data.status === "published").map(async episode => {
    const { data } = await getPublishedEpisode(episode.id);
    const publishedAt = [data.releaseDate, data.transcriptPublishedAt].filter((date): date is string => !!date).sort()[0];
    if (!publishedAt) throw new Error(`Episode RSS requires a publication date: ${episode.id}`);
    return { number: data.number, title: data.title["zh-Hans"], summary: data.homepage["zh-Hans"].copy, publishedAt };
  }));
  return new Response(episodeRss(items, site!), { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
