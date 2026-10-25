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

export const CONVERSION_VERSION = "1.4.7";

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

function nextEntityMatch(text, cursor, candidates, boundary = hasWordBoundary) {
  let best;
  for (const candidate of candidates) {
    let index = text.indexOf(candidate.alias, cursor);
    while (index >= 0 && !boundary(text, index, candidate.alias)) {
      index = text.indexOf(candidate.alias, index + 1);
    }
    if (index < 0) continue;
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
    let start = match.index;
    let end = match.index + alias.length;
    if (entity.entityType === "product" && start > cursor && text[start - 1] === "《" && text[end] === "》") {
      start -= 1;
      end += 1;
    }
    const entityKey = `${entity.entityType}:${entity.id}`;
    if (start > cursor) segments.push({ type: "text", value: text.slice(cursor, start) });
    segments.push({
      type: "entity-link",
      value: text.slice(start, end),
      entityType: entity.entityType,
      entityId: entity.id,
      href: entity.href ?? `/wiki/${{ brand: "brands", product: "products", person: "people", term: "terms" }[entity.entityType]}/${entity.id}`,
    });
    // Report chapter coverage, not occurrence count, while linking every occurrence.
    if (!linkedInChapter.has(entityKey)) {
      linkCounts.set(entityKey, (linkCounts.get(entityKey) ?? 0) + 1);
      linkedInChapter.add(entityKey);
    }
    cursor = end;
  }

  return segments.filter(({ value }) => value.length > 0);
}

function hasExternalReferenceBoundary(text, start, value) {
  if (!hasWordBoundary(text, start, value)) return false;
  const before = text[start - 1] ?? '';
  const after = text.slice(start + value.length);
  // Do not turn a fragment of a longer address into a different destination.
  return !/[.@/:-]/.test(before) && !/^(?:[/@:#?_-]|\.[A-Za-z0-9])/.test(after);
}

function linkExternalReferences(chapters, references) {
  if (!references.length) return;
  const candidates = references.map(({ text, href }) => {
    if (!text?.trim() || !/^https?:\/\//.test(href) || !new URL(href).hostname) throw new Error('Invalid external transcript reference');
    return { alias: text, href };
  });
  for (const chapter of chapters) for (const turn of chapter.turns) {
    turn.paragraphs = turn.paragraphs.map(paragraph => paragraph.flatMap(segment => {
      if (segment.type !== 'text') return [segment];
      const output = [];
      let cursor = 0;
      while (cursor < segment.value.length) {
        const match = nextEntityMatch(segment.value, cursor, candidates, hasExternalReferenceBoundary);
        if (!match) { output.push({ ...segment, value: segment.value.slice(cursor) }); break; }
        if (match.index > cursor) output.push({ ...segment, value: segment.value.slice(cursor, match.index) });
        output.push({ ...segment, type: 'external-link', value: match.candidate.alias, href: match.candidate.href });
        cursor = match.index + match.candidate.alias.length;
      }
      return output;
    }));
  }
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
  const hasColon = marker.endsWith("：");
  const rawName = marker.replace(/：$/, "");
  const unresolved = rawName === "说话人待核"
    || (/／说话人待核$/.test(rawName) && SPEAKERS.has(rawName.replace(/／说话人待核$/, "")))
    || (/及其他主持人（待核）$/.test(rawName) && SPEAKERS.has(rawName.replace(/及其他主持人（待核）$/, "")));
  // A standalone bold name is also a speaker heading. Bold prose is not.
  if (!hasColon && (node.children.length !== 1 || !unresolved && !SPEAKERS.has(marker.replace(/(?:†|（待核）)$/, "")))) return null;
  const markedName = hasColon ? marker.slice(0, -1) : marker;
  const candidate = unresolved || /(?:†|（待核）)$/.test(markedName);
  const name = markedName.replace(/(?:†|（待核）)$/, "");
  const kind = ["片头旁白", "片头解说"].includes(name) ? "narration" : name === "编者注" ? "editor-note" : "speech";
  return {
    name,
    candidate,
    unresolved,
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

function chapterMatcherFactory(entities, resolutions, excludedEntities, chapterAliases) {
  const excluded = new Set(excludedEntities);
  const eligible = entities.filter(entity => !excluded.has(`${entity.entityType}:${entity.id}`));
  for (const rule of chapterAliases) {
    if (!rule.alias?.trim() || !rule.chapters?.length || !rule.chapters.every(id => /^chapter-\d{2}$/.test(id))
      || !eligible.some(entity => entity.entityType === rule.entityType && entity.id === rule.id)) {
      throw new Error(`Invalid chapter alias: ${rule.alias}`);
    }
  }
  const cache = new Map();
  return (chapterId) => {
    if (!cache.has(chapterId)) {
      const scoped = eligible.map(entity => ({...entity, aliases: [...entity.aliases,
        ...chapterAliases.filter(rule => rule.chapters.includes(chapterId) && rule.entityType === entity.entityType && rule.id === entity.id).map(rule => rule.alias),
      ]}));
      cache.set(chapterId, createEntityMatcher(scoped, resolutions));
    }
    return cache.get(chapterId);
  };
}

export function convertTranscript(tree, {
  episodeId,
  locale,
  sourceRepository,
  sourceRevision,
  sourceState,
  sourcePath,
  sourceSha256,
  entities,
  resolutions = {},
  excludedEntities = [],
  chapterAliases = [],
  externalLinks = [],
}) {
  const matcherForChapter = chapterMatcherFactory(entities, resolutions, excludedEntities, chapterAliases);
  const matcher = matcherForChapter(undefined);
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
      if (speaker.kind === "speech" && !speaker.speakerId && !speaker.unresolved) unknownSpeakers.add(speaker.name);
      turn = {
        kind: speaker.kind,
        speaker: speaker.name,
        speakerId: speaker.speakerId,
        candidate: speaker.candidate,
        paragraphs: [],
      };
      chapter.turns.push(turn);
      if (speaker.content.length) {
        turn.paragraphs.push(convertParagraph(speaker.content, matcherForChapter(chapter.id), chapter.linkedEntities ??= new Set(), linkCounts));
      }
    } else {
      if (!turn) throw new Error(`Paragraph before the first speaker in ${chapter.title}`);
      turn.paragraphs.push(convertParagraph(node.children, matcherForChapter(chapter.id), chapter.linkedEntities ??= new Set(), linkCounts));
    }
  }

  if (!title || !chapters.length) throw new Error("Transcript must include one H1 and at least one H2 chapter");
  for (const current of chapters) {
    // No eligible known entity may remain unlinked in body text.
    for (const segment of current.turns.flatMap(turn => turn.paragraphs.flat())) {
      if (segment.type !== "text") continue;
      const match = nextEntityMatch(segment.value, 0, matcherForChapter(current.id).candidates);
      if (match) {
        const { entity, alias } = match.candidate;
        throw new Error(`Known entity missing link in ${current.id}: ${entity.entityType}:${entity.id} (${alias})`);
      }
    }
    delete current.linkedEntities;
  }

  linkExternalReferences(chapters, externalLinks);
  const paragraphs = chapters.reduce(
    (sum, current) => sum + current.turns.reduce((turnSum, currentTurn) => turnSum + currentTurn.paragraphs.length, 0),
    0,
  );
  const turns = chapters.reduce((sum, current) => sum + current.turns.length, 0);
  const candidates = chapters.reduce(
    (sum, current) => sum + current.turns.filter(({ candidate }) => candidate).length,
    0,
  );

  const snapshot = {
    schemaVersion: 1,
    conversionVersion: CONVERSION_VERSION,
    episodeId,
    locale,
    title,
    byline,
    notices,
    chapters,
    provenance: {
      sourceRepository,
      sourceRevision,
      sourceState,
      sourcePath,
      sourceSha256,
    },
    chapterCount: chapters.length,
  };
  const report = {
    chapters: chapters.length,
    turns,
    paragraphs,
    candidateSpeakerMarkers: candidates,
    linkedEntities: [...linkCounts]
      .map(([entity, chapterCount]) => ({ entity, chapterCount }))
      .sort((a, b) => a.entity.localeCompare(b.entity)),
    ambiguousAliases: [...new Map([matcher, ...chapters.map(chapter => matcherForChapter(chapter.id))].flatMap(item => item.ambiguousAliases).map(item => [item.alias, item])).values()],
    unknownSpeakers: [...unknownSpeakers].sort(),
    unlinkedCandidates: collectUnlinkedCandidates(
      chapters,
      new Set(matcher.candidates.map(({ alias }) => alias)),
    ),
  };

  const visibleParagraphs = chapters.flatMap(({ turns: chapterTurns }) =>
    chapterTurns.flatMap(({ paragraphs: turnParagraphs }) =>
      turnParagraphs.map((segments) => segments.map(({ value }) => value).join(""))),
  );
  if (visibleParagraphs.some((paragraph) => paragraph.includes("5.1 担心"))) {
    throw new Error("The approved omission is still present in the public transcript");
  }

  return { snapshot, report };
}

// Rebuild annotations on the imported text without rereading an editorial source.
export function relinkTranscript(snapshot, {entities, resolutions = {}, excludedEntities = [], chapterAliases = [], externalLinks = []}) {
  const result = structuredClone(snapshot);
  const matcherForChapter = chapterMatcherFactory(entities, resolutions, excludedEntities, chapterAliases);
  const counts = new Map();
  for (const chapter of result.chapters) {
    const matcher = matcherForChapter(chapter.id);
    if (matcher.ambiguousAliases.length) throw new Error(`Ambiguous aliases: ${matcher.ambiguousAliases.map(a=>a.alias).join(', ')}`);
    const linked = new Set();
    for (const turn of chapter.turns) turn.paragraphs = turn.paragraphs.map(paragraph => {
      // Existing external links remain editorial content, not entity annotations.
      const output = [];
      let text = '';
      let marks;
      const flush = () => {
        if(text) output.push(...linkifyText(text, matcher, linked, counts).map(s => marks ? {...s, marks} : s));
        text='';
      };
      for (const segment of paragraph) {
        if(segment.type === 'text' || segment.type === 'entity-link') {
          if(JSON.stringify(marks)!==JSON.stringify(segment.marks)) flush();
          marks=segment.marks; text += segment.value;
        }
        else {flush(); output.push(segment);}
      }
      flush();return output;
    });
  }
  linkExternalReferences(result.chapters, externalLinks);
  return result;
}
