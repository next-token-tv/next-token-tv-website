import { Parser } from "htmlparser2";

type FeedPost = {
  id: string;
  data: { title: string; description: string; status: string; publishedAt?: string; updatedAt: string };
  rendered?: { html: string };
};
const xml = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

/** RSS readers need absolute links, including links relative to an article. */
export function feedHtml(html: string, articleUrl: string) {
  let result = "";
  const parser = new Parser({
    onopentag(name, attributes) {
      const attrs = Object.entries(attributes).map(([key, value]) => {
        if (["href", "src", "poster"].includes(key)) value = new URL(value, articleUrl).href;
        return ` ${key}="${xml(value)}"`;
      }).join("");
      result += `<${name}${attrs}>`;
    },
    ontext(text) { result += xml(text); },
    onclosetag(name) { if (!voidTags.has(name)) result += `</${name}>`; },
  }, { decodeEntities: true });
  parser.write(html);
  parser.end();
  return result;
}

export function blogRss(posts: FeedPost[], site: URL, locale: "zh-Hans" | "en" = "zh-Hans") {
  // Deliberately exclude drafts even in development, where article pages expose them.
  const published = posts.filter(post => post.data.status === "published").sort((a, b) =>
    (b.data.publishedAt ?? "").localeCompare(a.data.publishedAt ?? "") || a.id.localeCompare(b.id));
  const basePath = locale === "en" ? "/en/blog" : "/blog";
  const items = published.map(post => {
    if (!post.data.publishedAt || !post.rendered?.html) throw new Error(`RSS requires publication date and rendered content: ${post.id}`);
    const url = new URL(`${basePath}/${post.id}`, site).href;
    const publishedAt = new Date(`${post.data.publishedAt}T00:00:00+08:00`).toUTCString();
    const updatedAt = new Date(`${post.data.updatedAt}T00:00:00+08:00`).toISOString();
    return `<item><title>${xml(post.data.title)}</title><link>${xml(url)}</link><guid isPermaLink="true">${xml(url)}</guid><pubDate>${publishedAt}</pubDate><atom:updated>${updatedAt}</atom:updated><description>${xml(post.data.description)}</description><content:encoded>${xml(feedHtml(post.rendered.html, url))}</content:encoded></item>`;
  });
  const latest = published.map(p => p.data.updatedAt > p.data.publishedAt! ? p.data.updatedAt : p.data.publishedAt!).sort().at(-1);
  const en = locale === "en";
  const channelTitle = en ? "Next Token · Blog" : "Next Token｜词元之外 · 博客";
  const channelDescription = en ? "Long-form articles on AI technology, products, and their real-world impact." : "关于 AI 技术、产品与现实影响的主题文章。";
  const feedPath = en ? "/en/blog/rss.xml" : "/blog/rss.xml";
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel><title>${channelTitle}</title><link>${xml(new URL(en ? "/en/blog" : "/blog", site).href)}</link><description>${xml(channelDescription)}</description><language>${en ? "en" : "zh-CN"}</language><atom:link href="${xml(new URL(feedPath, site).href)}" rel="self" type="application/rss+xml"/>${latest ? `<lastBuildDate>${new Date(`${latest}T00:00:00+08:00`).toUTCString()}</lastBuildDate>` : ""}${items.join("\n")}</channel></rss>`;
}
