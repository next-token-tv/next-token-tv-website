import type { CollectionEntry } from "astro:content";

type Transcript = CollectionEntry<"transcriptImports">["data"];
type Segment = Transcript["chapters"][number]["turns"][number]["paragraphs"][number][number];

function escapeMarkdown(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/([`*_[\]<>])/g, "\\$1")
    .replace(/^([#>+-])/gm, "\\$1")
    .replace(/^(\d+)\./gm, "$1\\.");
}

function markdownCode(value: string) {
  const longestFence = Math.max(0, ...[...value.matchAll(/`+/g)].map(([match]) => match.length));
  const fence = "`".repeat(longestFence + 1);
  const padding = value.startsWith("`") || value.endsWith("`") ? " " : "";
  return `${fence}${padding}${value}${padding}${fence}`;
}

function markdownHref(href: string, site: URL) {
  return href.startsWith("/") ? new URL(href, site).toString() : href;
}

function renderSegment(segment: Segment, site: URL) {
  if (segment.type === "code") return markdownCode(segment.value);

  let content = escapeMarkdown(segment.value);
  if ((segment.type === "entity-link" || segment.type === "external-link") && segment.href) {
    content = `[${content}](${markdownHref(segment.href, site)})`;
  }
  if (segment.marks?.includes("strong")) return `**${content}**`;
  if (segment.marks?.includes("emphasis")) return `*${content}*`;
  return content;
}

export function renderTranscriptMarkdown(transcript: Transcript, episodeNumber: string, site: URL) {
  const lines = [
    `# ${escapeMarkdown(transcript.title)}`,
    "",
    transcript.byline,
    "",
    ...transcript.notices.flatMap((notice) => [`> ${escapeMarkdown(notice)}`, ""]),
    `[${transcript.locale === "en" ? "Read on the website" : "阅读网页版"}](${new URL(`/weekly/${episodeNumber}/transcript/`, site)})`,
    "",
  ];

  transcript.chapters.forEach((chapter, chapterIndex) => {
    lines.push(`## ${String(chapterIndex + 1).padStart(2, "0")} / ${escapeMarkdown(chapter.title)}`, "");
    chapter.turns.forEach((turn) => {
      const speaker = `${escapeMarkdown(turn.speaker)}${turn.candidate ? "†" : ""}：`;
      lines.push(`**${speaker}**`);
      turn.paragraphs.forEach((paragraph) => {
        lines.push("", paragraph.map((segment) => renderSegment(segment, site)).join(""));
      });
      lines.push("");
    });
  });

  // A BOM keeps standalone Markdown readable in browsers even when a generic
  // static server omits the UTF-8 charset from text/markdown.
  return `\uFEFF${lines.join("\n").trimEnd()}\n`;
}
