type Episode = {
  number: string;
  title: string;
  summary: string;
  publishedAt: string;
};
const xml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function episodeRss(episodes: Episode[], site: URL) {
  const items = [...episodes].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.number.localeCompare(a.number)).map(episode => {
    const url = xml(new URL(`/weekly/${episode.number}`, site).href);
    const date = new Date(`${episode.publishedAt}T00:00:00+08:00`).toUTCString();
    return `<item><title>${xml(episode.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${date}</pubDate><description>${xml(episode.summary)}</description></item>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Next Token Weekly｜词元之外</title><link>${xml(new URL("/weekly", site).href)}</link><description>词元之外每期节目更新，前往官网查看节目详情。</description><language>zh-CN</language><atom:link href="${xml(new URL("/weekly/rss.xml", site).href)}" rel="self" type="application/rss+xml"/>${items.join("\n")}</channel></rss>`;
}
