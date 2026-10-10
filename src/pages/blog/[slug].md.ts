import type { APIRoute } from "astro";
import { getBlogPosts } from "../../data/blog";
import { getDetailEpisode } from "../../data/catalog";
export async function getStaticPaths() {
  return (await getBlogPosts()).map(article => ({ params: { slug: article.id }, props: { article } }));
}
export const GET: APIRoute = async ({ props, site }) => {
  const { article } = props;
  const episodes = await Promise.all(article.data.episodes.map((id: string) => getDetailEpisode(id)));
  const body = (article.body ?? "").replace(/\]\(\/(.*?)\)/g, (_: string, path: string) => `](${new URL(`/${path}`, site).href})`);
  return new Response([
    `# ${article.data.title}`, "", `Next Token 博客${article.data.status === "draft" ? " · 审阅稿" : ""}`, "",
    article.data.description, "",
    ...(article.data.publishedAt && article.data.publishedAt !== article.data.updatedAt
      ? [`发布：${article.data.publishedAt}`, `更新：${article.data.updatedAt}`]
      : [`发布：${article.data.publishedAt ?? article.data.updatedAt}`]),
    "", body.trim(), "", "## 来源与相关链接", "",
    `- [网页版文章](${new URL(`/blog/${article.id}`, site).href})`,
    ...episodes.map(entry => `- [Weekly #${entry.data.number} 完整文字稿](${new URL(`/weekly/${entry.data.number}/transcript`, site).href})`), "",
  ].join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
