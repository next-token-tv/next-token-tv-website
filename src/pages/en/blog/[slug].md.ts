import type { APIRoute } from "astro";
import { getBlogPosts } from "../../../data/blog";
import { getDetailEpisode } from "../../../data/catalog";
export async function getStaticPaths() {
  return (await getBlogPosts("en")).map(article => ({ params: { slug: article.id }, props: { article } }));
}
export const GET: APIRoute = async ({ props, site }) => {
  const { article } = props;
  const episodes = await Promise.all(article.data.episodes.map((id: string) => getDetailEpisode(id)));
  const body = (article.body ?? "").replace(/\]\(\/(.*?)\)/g, (_: string, path: string) => `](${new URL(`/${path}`, site).href})`);
  return new Response([
    `# ${article.data.title}`, "", `Next Token Blog${article.data.status === "draft" ? " · Under review" : ""}`, "",
    article.data.description, "",
    ...(article.data.publishedAt && article.data.publishedAt !== article.data.updatedAt
      ? [`Published: ${article.data.publishedAt}`, `Updated: ${article.data.updatedAt}`]
      : [`Published: ${article.data.publishedAt ?? article.data.updatedAt}`]),
    "", body.trim(), "", "## Sources and related links", "",
    `- [Web version article](${new URL(`/en/blog/${article.id}`, site).href})`,
    ...episodes.map(entry => `- [Weekly #${entry.data.number} full transcript](${new URL(`/en/weekly/${entry.data.number}/transcript`, site).href})`), "",
  ].join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
