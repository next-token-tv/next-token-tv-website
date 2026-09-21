const normalize = text => text.normalize('NFKC').replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
const seconds = text => {
  const [h, m, s] = text.replace(',', '.').split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

// Only unambiguous full-text matches are accepted. Times are subtitle cue bounds,
// not word-level alignment; edited, missing and repeated passages remain untimed.
export function alignTranscriptTimings(chapters, srt) {
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
      if (value.length < 12) return null;
      const start = text.indexOf(value);
      if (start < 0 || text.indexOf(value, start + 1) !== -1) return null;
      const first = cues.find(cue => cue.start <= start && cue.end > start);
      const last = cues.find(cue => cue.start < start + value.length && cue.end >= start + value.length);
      if (!first || !last || last.endSeconds < first.startSeconds) return null;
      matched++;
      return { startSeconds: first.startSeconds, endSeconds: last.endSeconds };
    });
  }
  return matched;
}
