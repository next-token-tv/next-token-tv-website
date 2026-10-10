import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Locale } from "./types";

export type BlogPost = CollectionEntry<"blog"> | CollectionEntry<"blogEn">;

export async function getBlogPosts(locale: Locale = "zh-Hans"): Promise<BlogPost[]> {
  const [posts, episodes, transcripts] = await Promise.all([
    getCollection(locale === "zh-Hans" ? "blog" : "blogEn"), getCollection("episodes"), getCollection("transcriptImports"),
  ]);
  for (const post of posts) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.id)) throw new Error(`Invalid blog slug: ${post.id}`);
    for (const id of post.data.episodes) {
      const episode = episodes.find(entry => entry.id === id);
      // Transcripts exist in Chinese only; they are the source of truth for every locale.
      const transcript = transcripts.find(entry => entry.data.episodeId === id && entry.data.locale === "zh-Hans");
      if (episode?.data.status !== "published" || transcript?.data.publicationStatus !== "published") {
        throw new Error(`Blog ${post.id} requires published episode and transcript: ${id}`);
      }
    }
  }
  return posts.filter(post => post.data.status === "published" || import.meta.env.DEV)
    .sort((a, b) => (b.data.publishedAt ?? b.data.updatedAt).localeCompare(a.data.publishedAt ?? a.data.updatedAt) || a.id.localeCompare(b.id));
}
