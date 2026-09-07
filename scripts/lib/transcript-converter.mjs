import { createHash } from "node:crypto";

const SPEAKERS = new Map([
  ["杨攀", "yangpan"],
  ["歸藏", "guizang"],
  ["橘子", "orange"],
  ["向阳乔木", "xiangyang-qiaomu"],
]);

const GENERIC_CANDIDATES = new Set([
  "AI", "API", "Agent", "Agents", "ASR", "Benchmark", "Browser Use", "C", "Computer Use",
  "CTO", "Demo", "Flash", "Harness", "HR", "JSON", "Kill Time", "Lightning", "Memory", "MCP",
  "OPC", "Plan", "Preview", "QA", "Review", "ROI", "Session", "Skill", "Skills", "SOTA", "Sub Agents",
  "Token", "Token Maxxing", "TPS", "TTS", "UX", "Vibe Coding", "Web", "Web 2.0",
]);

export const CONVERSION_VERSION = "1.0.0";

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function plainText(node) {
  if (node.type === "text" || node.type === "inlineCode") return node.value;
  return (node.children ?? []).map(plainText).join("");
}

function isEnglishWord(value) {
  return /[A-Za-z0-9]/.test(value);
}

function isWordCharacter(value) {
  return Boolean(value && /[A-Za-z0-9_]/.test(value));
}

function hasWordBoundary(text, start, value) {
  if (!isEnglishWord(value)) return true;
  const before = text[start - 1] ?? "";
  const after = text[start + value.length] ?? "";
  return !isWordCharacter(before) && !isWordCharacter(after);
}

export function createEntityMatcher(entities, resolutions = {}) {
  const aliases = new Map();

  for (const entity of entities) {
    for (const alias of new Set(entity.aliases.filter(Boolean))) {
      const values = aliases.get(alias) ?? [];
      values.push(entity);
      aliases.set(alias, values);
    }
  }

  const ambiguousAliases = [];
  const candidates = [];
  for (const [alias, matches] of aliases) {
    const resolution = resolutions[alias];
    let entity = matches.length === 1 ? matches[0] : undefined;
    if (resolution) {
      entity = matches.find(({ entityType, id }) => entityType === resolution.entityType && id === resolution.id);
      if (!entity) throw new Error(`Transcript entity resolution for ${alias} does not match the catalog`);
    }
    if (!entity) {
      ambiguousAliases.push({
        alias,
        matches: matches.map(({ entityType, id }) => `${entityType}:${id}`),
      });
      continue;
    }
    candidates.push({ alias, entity });
  }

  candidates.sort((a, b) => b.alias.length - a.alias.length || a.alias.localeCompare(b.alias));
  return { candidates, ambiguousAliases };
}

function nextEntityMatch(text, cursor, candidates) {
  let best;
  for (const candidate of candidates) {
    const index = text.indexOf(candidate.alias, cursor);
    if (index < 0 || !hasWordBoundary(text, index, candidate.alias)) continue;
    if (!best || index < best.index || (index === best.index && candidate.alias.length > best.candidate.alias.length)) {
      best = { index, candidate };
    }
  }
  return best;
}

function linkifyText(text, matcher, linkedInChapter, linkCounts) {
  const segments = [];
  let cursor = 0;

  while (cursor < text.length) {
    const match = nextEntityMatch(text, cursor, matcher.candidates);
    if (!match) {
      segments.push({ type: "text", value: text.slice(cursor) });
      break;
    }

    const { alias, entity } = match.candidate;
    const end = match.index + alias.length;
    const entityKey = `${entity.entityType}:${entity.id}`;
    if (linkedInChapter.has(entityKey)) {
      segments.push({ type: "text", value: text.slice(cursor, end) });
      cursor = end;
      continue;
    }

    if (match.index > cursor) segments.push({ type: "text", value: text.slice(cursor, match.index) });
    segments.push({
      type: "entity-link",
      value: alias,
      entityType: entity.entityType,
      entityId: entity.id,
      href: `/${entity.entityType === "brand" ? "brands" : "products"}/${entity.id}/`,
    });
    linkedInChapter.add(entityKey);
    linkCounts.set(entityKey, (linkCounts.get(entityKey) ?? 0) + 1);
    cursor = end;
  }

  return segments.filter(({ value }) => value.length > 0);
}

function convertInline(nodes, matcher, linkedInChapter, linkCounts, marks = []) {
  const segments = [];
  for (const node of nodes) {
    if (node.type === "text") {
      const linked = linkifyText(node.value, matcher, linkedInChapter, linkCounts);
      segments.push(...linked.map((segment) => marks.length ? { ...segment, marks } : segment));
    } else if (node.type === "link") {
      segments.push({ type: "external-link", value: plainText(node), href: node.url, ...(marks.length ? { marks } : {}) });
    } else if (node.type === "inlineCode") {
      segments.push({ type: "code", value: node.value });
    } else if (node.type === "strong" || node.type === "emphasis") {
      segments.push(...convertInline(
        node.children ?? [],
        matcher,
        linkedInChapter,
        linkCounts,
        [...marks, node.type],
      ));
    } else if (node.type === "break") {
      segments.push({ type: "text", value: "\n" });
    } else {
      segments.push({ type: "text", value: plainText(node), ...(marks.length ? { marks } : {}) });
    }
  }
  return segments;
}

function convertParagraph(nodes, matcher, linkedInChapter, linkCounts) {
  const segments = convertInline(nodes, matcher, linkedInChapter, linkCounts);
  const sourceText = plainText({ children: nodes });
  const convertedText = segments.map(({ value }) => value).join("");
  if (sourceText !== convertedText) throw new Error("Inline conversion changed visible transcript text");
  return segments;
}

function trimSpeakerGap(nodes) {
  const result = structuredClone(nodes);
  const first = result[0];
  if (first?.type === "text") first.value = first.value.replace(/^\s+/, "");
  return result;
}

function speakerFromParagraph(node) {
  const first = node.children?.[0];
  if (first?.type !== "strong") return null;
  const marker = plainText(first);
  if (!marker.endsWith("：")) return null;
  const markedName = marker.slice(0, -1);
  const candidate = markedName.endsWith("†");
  const name = candidate ? markedName.slice(0, -1) : markedName;
  const kind = name === "片头旁白" ? "narration" : name === "编者注" ? "editor-note" : "speech";
  return {
    name,
    candidate,
    kind,
    speakerId: kind === "speech" ? SPEAKERS.get(name) ?? null : null,
    content: trimSpeakerGap(node.children.slice(1)),
  };
}

function collectUnlinkedCandidates(chapters, knownAliases) {
  const counts = new Map();
  const expression = /\b[A-Z][A-Za-z0-9.+-]*(?:\s+[A-Z0-9][A-Za-z0-9.+-]*){0,3}\b/g;
  for (const chapter of chapters) {
    for (const turn of chapter.turns) {
      for (const paragraph of turn.paragraphs) {
        for (const segment of paragraph) {
          if (segment.type !== "text") continue;
          for (const match of segment.value.matchAll(expression)) {
            const value = match[0].trim();
            if (!GENERIC_CANDIDATES.has(value) && !knownAliases.has(value)) {
              counts.set(value, (counts.get(value) ?? 0) + 1);
            }
          }
        }
      }
    }
  }
  return [...counts]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
}

export function convertTranscript(tree, { episodeId, locale, sourcePath, sourceSha256, entities, resolutions = {} }) {
  const matcher = createEntityMatcher(entities, resolutions);
  const linkCounts = new Map();
  const unknownSpeakers = new Set();
  const chapters = [];
  const notices = [];
  let title = "";
  let byline = "";
  let chapter = null;
  let turn = null;

  for (const node of tree.children) {
    if (node.type === "heading" && node.depth === 1) {
      title = plainText(node);
      continue;
    }
    if (node.type === "heading" && node.depth === 2) {
      const number = chapters.length + 1;
      chapter = { id: `chapter-${String(number).padStart(2, "0")}`, title: plainText(node), turns: [] };
      chapters.push(chapter);
      turn = null;
      continue;
    }
    if (node.type === "blockquote" && !chapter) {
      notices.push(plainText(node));
      continue;
    }
    if (node.type !== "paragraph") continue;
    if (!chapter) {
      if (!byline) byline = plainText(node);
      continue;
    }

    const speaker = speakerFromParagraph(node);
    if (speaker) {
      if (speaker.kind === "speech" && !speaker.speakerId) unknownSpeakers.add(speaker.name);
      turn = {
        kind: speaker.kind,
        speaker: speaker.name,
        speakerId: speaker.speakerId,
        candidate: speaker.candidate,
        paragraphs: [],
      };
      chapter.turns.push(turn);
      if (speaker.content.length) {
        turn.paragraphs.push(convertParagraph(speaker.content, matcher, chapter.linkedEntities ??= new Set(), linkCounts));
      }
    } else {
      if (!turn) throw new Error(`Paragraph before the first speaker in ${chapter.title}`);
      turn.paragraphs.push(convertParagraph(node.children, matcher, chapter.linkedEntities ??= new Set(), linkCounts));
    }
  }

  if (!title || !chapters.length) throw new Error("Transcript must include one H1 and at least one H2 chapter");
  for (const current of chapters) delete current.linkedEntities;

  const paragraphs = chapters.reduce(
    (sum, current) => sum + current.turns.reduce((turnSum, currentTurn) => turnSum + currentTurn.paragraphs.length, 0),
    0,
  );
  const turns = chapters.reduce((sum, current) => sum + current.turns.length, 0);
  const candidates = chapters.reduce(
    (sum, current) => sum + current.turns.filter(({ candidate }) => candidate).length,
    0,
  );

  const result = {
    schemaVersion: 1,
    conversionVersion: CONVERSION_VERSION,
    episodeId,
    locale,
    title,
    byline,
    notices,
    chapters,
    provenance: { sourcePath, sourceSha256 },
    report: {
      chapters: chapters.length,
      turns,
      paragraphs,
      candidateSpeakerMarkers: candidates,
      linkedEntities: [...linkCounts]
        .map(([entity, chapterCount]) => ({ entity, chapterCount }))
        .sort((a, b) => a.entity.localeCompare(b.entity)),
      ambiguousAliases: matcher.ambiguousAliases,
      unknownSpeakers: [...unknownSpeakers].sort(),
      unlinkedCandidates: collectUnlinkedCandidates(
        chapters,
        new Set(matcher.candidates.map(({ alias }) => alias)),
      ),
    },
  };

  const visibleParagraphs = chapters.flatMap(({ turns: chapterTurns }) =>
    chapterTurns.flatMap(({ paragraphs: turnParagraphs }) =>
      turnParagraphs.map((segments) => segments.map(({ value }) => value).join(""))),
  );
  if (visibleParagraphs.some((paragraph) => paragraph.includes("5.1 担心"))) {
    throw new Error("The approved omission is still present in the public transcript");
  }

  return result;
}
