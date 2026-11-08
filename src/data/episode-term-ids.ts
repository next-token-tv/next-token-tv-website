/** Explicit, subtitle-reviewed mentions precede deduplicated transcript references. */
export function episodeTermIds(explicit: readonly string[] = [], transcript?: {
  chapters: { turns: { paragraphs: { type: string; entityType?: string; entityId?: string }[][] }[] }[];
}): string[] {
  const ids = new Set(explicit);
  for (const chapter of transcript?.chapters ?? []) {
    for (const turn of chapter.turns) for (const paragraph of turn.paragraphs) for (const segment of paragraph) {
      if (segment.type === 'entity-link' && segment.entityType === 'term' && segment.entityId) ids.add(segment.entityId);
    }
  }
  return [...ids];
}
