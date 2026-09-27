import type { APIRoute } from "astro";
import { getEpisodeArticles } from "../../../data/episode-articles";
import { renderArticleMarkdown } from "../../../data/article-markdown";

export async function getStaticPaths() {
  return (await getEpisodeArticles("zh-Hans")).map(({ article, number }) => ({ params: { number }, props: { article } }));
}

export const GET: APIRoute = ({ props, params, site }) => new Response(
  renderArticleMarkdown(props.article.data, props.article.body ?? "", params.number!, site!),
  { headers: { "Content-Type": "text/markdown; charset=utf-8" } },
);
