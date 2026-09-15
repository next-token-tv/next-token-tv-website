import type { CollectionEntry } from "astro:content";

type Transcript = CollectionEntry<"transcriptImports">["data"];
type Segment = Transcript["chapters"][number]["turns"][number]["paragraphs"][number][number];
type RelatedEntityType = "brand" | "product" | "person";

type RelatedEntity = {
  label: string;
  href: string;
};

function isRelatedEntityType(value: string | undefined): value is RelatedEntityType {
  return value === "brand" || value === "product" || value === "person";
}

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
  if (segment.type === "external-link" && segment.href) {
    content = `[${content}](${markdownHref(segment.href, site)})`;
  }
  if (segment.marks?.includes("strong")) return `**${content}**`;
  if (segment.marks?.includes("emphasis")) return `*${content}*`;
  return content;
}

function collectRelatedEntities(transcript: Transcript, site: URL) {
  const groups: Record<RelatedEntityType, RelatedEntity[]> = {
    brand: [],
    product: [],
    person: [],
  };
  const seen = new Set<string>();

  transcript.chapters.forEach((chapter) => {
    chapter.turns.forEach((turn) => {
      turn.paragraphs.forEach((paragraph) => {
        paragraph.forEach((segment) => {
          if (
            segment.type !== "entity-link" ||
            !segment.href ||
            !segment.entityId ||
            !isRelatedEntityType(segment.entityType)
          ) {
            return;
          }

          const entityType = segment.entityType;
          const key = `${entityType}:${segment.entityId}`;
          if (seen.has(key)) return;

          seen.add(key);
          groups[entityType].push({
            label: segment.value,
            href: markdownHref(segment.href, site),
          });
        });
      });
    });
  });

  return groups;
}

export function renderTranscriptMarkdown(transcript: Transcript, episodeNumber: string, site: URL) {
  const relatedEntities = collectRelatedEntities(transcript, site);
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

  const relatedHeading = transcript.locale === "en" ? "Related resources" : "相关资料";
  const groupHeadings: Record<RelatedEntityType, string> = transcript.locale === "en"
    ? { brand: "Brands", product: "Products", person: "People" }
    : { brand: "品牌", product: "产品", person: "人物" };

  lines.push(`## ${relatedHeading}`, "");
  (["brand", "product", "person"] as const).forEach((entityType) => {
    const entities = relatedEntities[entityType];
    if (entities.length === 0) return;

    lines.push(`### ${groupHeadings[entityType]}`, "");
    entities.forEach((entity) => {
      lines.push(`- [${escapeMarkdown(entity.label)}](${entity.href})`);
    });
    lines.push("");
  });

  // A BOM keeps standalone Markdown readable in browsers even when a generic
  // static server omits the UTF-8 charset from text/markdown.
  return `\uFEFF${lines.join("\n").trimEnd()}\n`;
}
