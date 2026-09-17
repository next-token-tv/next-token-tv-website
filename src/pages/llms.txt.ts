import type { APIRoute } from "astro";
import { getEpisodesForShow, getPublishedTranscriptEpisodes } from "../data/catalog";
import { absoluteSiteUrl } from "../data/internal-url";

function absolute(path: string, site: URL) {
  return absoluteSiteUrl(path, site);
}

export const GET: APIRoute = async ({ site }) => {
  const [episodes, transcripts] = await Promise.all([
    getEpisodesForShow("next-token-weekly"),
    getPublishedTranscriptEpisodes("zh-Hans"),
  ]);
  const transcriptNumbers = new Set(transcripts.map((entry) => entry.data.number));
  const episodeLines = episodes
    .slice()
    .sort((a, b) => Number(b.data.number) - Number(a.data.number))
    .flatMap((episode) => {
      const number = episode.data.number;
      const title = episode.data.title["zh-Hans"];
      const status = episode.data.status === "published" ? "已发布节目" : "录制预告";
      const lines = [`- [${title}](${absolute(`/weekly/${number}`, site!)}): ${status}页面`];
      if (transcriptNumbers.has(number)) {
        lines.push(
          `- [Weekly #${number} Markdown 文字稿](${absolute(`/weekly/${number}/transcript.md`, site!)}): 完整中文文字稿，保留章节与发言顺序，并在文末汇总已核实的站内实体链接`,
        );
      }
      return lines;
    });

  const content = [
    "# Next Token｜词元之外",
    "",
    "> 一档关注 AI 技术、产品、创业与创作的视频播客，从中文世界的一手经验出发，讨论 AI 正在改变什么，以及接下来真正值得关注什么。",
    "",
    "本站主要编辑内容使用中文，并为部分页面提供英文版本。节目文字稿是内容引用的首选来源；品牌、产品与人物资料使用站内 Wiki 的稳定实体 URL。",
    "",
    "## 主要入口",
    "",
    `- [Next Token 首页](${absolute("/", site!)}): 品牌介绍、最新节目、联合主理人与订阅入口`,
    `- [Next Token Weekly](${absolute("/weekly", site!)}): 每周 AI 圆桌节目的节目与录制预告`,
    `- [网站地图](${absolute("/sitemap", site!)}): 全站页面的人工浏览入口`,
    "",
    "## 节目与文字稿",
    "",
    ...episodeLines,
    "",
    "## Wiki",
    "",
    `- [品牌](${absolute("/wiki/brands", site!)}): 对谈涉及的公司、组织与媒体品牌`,
    `- [产品](${absolute("/wiki/products", site!)}): 对谈涉及的产品、平台、模型与项目`,
    `- [人物](${absolute("/wiki/people", site!)}): 联合主理人与对谈涉及的人物`,
    "",
    "## Data API",
    "",
    `- [API documentation](${absolute("/api", site!)}): 资料库 API 的端点、字段契约、版本策略与调用示例`,
    `- [Wiki API index](${absolute("/api/v1/wiki.json", site!)}): 公开只读资料库 API 的集合入口`,
    `- [Brands JSON](${absolute("/api/v1/wiki/brands.json", site!)}): 品牌数据与实体关系`,
    `- [Products JSON](${absolute("/api/v1/wiki/products.json", site!)}): 产品数据与实体关系`,
    `- [People JSON](${absolute("/api/v1/wiki/people.json", site!)}): 人物数据与实体关系`,
    "",
    "## Optional",
    "",
    `- [合作伙伴](${absolute("/partners", site!)}): 节目录制场地与合作伙伴`,
    `- [品牌素材](${absolute("/brand-kit", site!)}): Next Token 官方品牌素材`,
    `- [XML Sitemap](${absolute("/sitemap-index.xml", site!)}): 面向搜索引擎的完整机器可读 URL 清单`,
    "",
  ].join("\n");

  return new Response(`\uFEFF${content}`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
