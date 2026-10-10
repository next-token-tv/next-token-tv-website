import { getCollection } from "astro:content";

export async function getBlogPosts() {
  const [posts, episodes, transcripts] = await Promise.all([
    getCollection("blog"), getCollection("episodes"), getCollection("transcriptImports"),
  ]);
  for (const post of posts) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.id)) throw new Error(`Invalid blog slug: ${post.id}`);
    for (const id of post.data.episodes) {
      const episode = episodes.find(entry => entry.id === id);
      const transcript = transcripts.find(entry => entry.data.episodeId === id && entry.data.locale === post.data.locale);
      if (episode?.data.status !== "published" || transcript?.data.publicationStatus !== "published") {
        throw new Error(`Blog ${post.id} requires published episode and transcript: ${id}`);
      }
    }
  }
  return posts.filter(post => post.data.status === "published" || import.meta.env.DEV)
    .sort((a, b) => (b.data.publishedAt ?? b.data.updatedAt).localeCompare(a.data.publishedAt ?? a.data.updatedAt) || a.id.localeCompare(b.id));
}
