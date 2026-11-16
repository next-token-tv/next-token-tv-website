const normalize = text => text.normalize('NFKC').replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
const seconds = text => {
  const [h, m, s] = text.replace(',', '.').split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

// Only unambiguous full-text matches are accepted. Times are subtitle cue bounds,
// not word-level alignment.
export function alignTranscriptTimings(chapters, srt, { includeShortCues = false } = {}) {
  let text = '';
  const cues = srt.trim().split(/\r?\n\s*\r?\n/).map(block => {
    const lines = block.split(/\r?\n/);
    const match = lines[1]?.match(/^(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})$/);
    if (!match) throw new Error('Invalid subtitle timing');
    const start = text.length;
    text += normalize(lines.slice(2).join(''));
    return { start, end: text.length, startSeconds: seconds(match[1]), endSeconds: seconds(match[2]) };
  });
  let matched = 0;
  for (const chapter of chapters) for (const turn of chapter.turns) {
    turn.paragraphTimings = turn.paragraphs.map(paragraph => {
      const value = normalize(paragraph.map(segment => segment.value).join(''));
      if (value.length < (includeShortCues ? 6 : 12)) return null;
      const start = text.indexOf(value);
      if (start < 0 || text.indexOf(value, start + 1) !== -1) return null;
      const first = cues.find(cue => cue.start <= start && cue.end > start);
      const last = cues.find(cue => cue.start < start + value.length && cue.end >= start + value.length);
      if (!first || !last || last.endSeconds < first.startSeconds) return null;
      if (value.length < 12 && (first.start !== start || last.end !== start + value.length)) return null;
      matched++;
      return { startSeconds: first.startSeconds, endSeconds: last.endSeconds };
    });
  }
  return matched + (includeShortCues ? alignBoundedRepeats(chapters, cues, text) : 0);
}

function alignBoundedRepeats(chapters, cues, text) {
  const paragraphs = chapters.flatMap(({turns}) => turns.flatMap(turn => turn.paragraphs.map((paragraph, index) => ({
    value: normalize(paragraph.map(segment => segment.value).join('')),
    timing: turn.paragraphTimings[index],
    timings: turn.paragraphTimings,
    index,
  }))));
  let matched = 0;
  for (let first = 0; first < paragraphs.length;) {
    const {value} = paragraphs[first];
    let next = first + 1;
    while (paragraphs[next]?.value === value && !paragraphs[next].timing) next++;
    const before = paragraphs[first - 1]?.timing;
    const after = paragraphs[next]?.timing;
    if (next - first > 1 && value.length >= 4 && !paragraphs[first].timing && before && after) {
      // The neighboring matches define the window. A repeated phrase is only
      // safe to align when its complete cues account for the entire window.
      const window = cues.filter(cue => cue.startSeconds < after.startSeconds && cue.endSeconds > before.endSeconds);
      if (window.length === next - first && window.every((cue, index) =>
        cue.startSeconds >= (window[index - 1]?.endSeconds ?? before.endSeconds) &&
        cue.endSeconds <= after.startSeconds && text.slice(cue.start, cue.end) === value
      )) {
        for (const [offset, {startSeconds, endSeconds}] of window.entries()) {
          const {timings, index} = paragraphs[first + offset];
          timings[index] = {startSeconds, endSeconds};
          matched++;
        }
      }
    }
    first = next;
  }
  return matched;
}
