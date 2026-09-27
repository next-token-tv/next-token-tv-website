import { unified } from "unified";
import remarkParse from "remark-parse";

type Article = { title: string; description: string; status: string; updatedAt: string };

/** Keep prose link-free; collect Markdown links once in a final reference list. */
export function renderArticleMarkdown(data: Article, body: string, number: string, site: URL) {
  const tree = unified().use(remarkParse).parse(body);
  const refs: Array<{ label: string; url: string }> = [];
  const edits: Array<{ start: number; end: number; text: string }> = [];
  const textOf = (node: any): string => node.value ?? node.children?.map(textOf).join("") ?? "";
  const walk = (node: any) => {
    if (node.type === "link") {
      const url = new URL(node.url, site).href;
      const label = textOf(node);
      if (!refs.some(ref => ref.url === url)) refs.push({ label, url });
      edits.push({ start: node.position.start.offset, end: node.position.end.offset, text: label });
      return;
    }
    node.children?.forEach(walk);
  };
  walk(tree);
  let prose = body;
  for (const edit of edits.sort((a, b) => b.start - a.start)) prose = prose.slice(0, edit.start) + edit.text + prose.slice(edit.end);
  const path = `/weekly/${number}`;
  return [
    `# ${data.title}`, "", `第 ${number} 期 · 精读文章${data.status === "draft" ? " · 审阅稿" : ""}`, "",
    data.description, "", `更新：${data.updatedAt}`, "", prose.trim(), "", "## 引用与相关资料", "",
    `- [网页版文章](${new URL(`${path}/article`, site).href})`,
    `- [本期节目](${new URL(path, site).href})`,
    `- [完整文字稿](${new URL(`${path}/transcript`, site).href})`,
    ...refs.map(ref => `- [${ref.label}](${ref.url})`), "",
  ].join("\n");
}
