import { createHash } from "node:crypto";

type Chapter = {
  turns: Array<{
    speaker: string;
    speakerId: string | null;
    paragraphs: Array<Array<{ value: string }>>;
  }>;
};

function normalizedText(value: string) {
  return value.normalize("NFC").replace(/\s+/gu, " ").trim();
}

/** IDs are independent of chapter and turn positions; identical speaker/text pairs use occurrence suffixes. */
export function getParagraphAnchorIds(chapters: readonly Chapter[]): string[][][] {
  const occurrences = new Map<string, number>();
  return chapters.map((chapter) => chapter.turns.map((turn) => turn.paragraphs.map((paragraph) => {
    const speaker = normalizedText(turn.speakerId ?? turn.speaker);
    const text = normalizedText(paragraph.map((segment) => segment.value).join(""));
    const fingerprint = createHash("sha256").update(`${speaker}\u0000${text}`).digest("hex").slice(0, 20);
    const base = `quote-${fingerprint}`;
    const occurrence = (occurrences.get(base) ?? 0) + 1;
    occurrences.set(base, occurrence);
    return occurrence === 1 ? base : `${base}-${occurrence}`;
  })));
}
