export function episodeReleaseErrors(episode, snapshot, hasPublishedTranscript, now = Date.now()) {
  const errors = [];
  const transcriptOnly = !episode.media?.audio && !episode.media?.video;
  if (transcriptOnly && !hasPublishedTranscript) errors.push('published episode has no released medium or committed published transcript');
  const date = transcriptOnly ? episode.transcriptPublishedAt : snapshot.releaseDate;
  if (!date || !Number.isFinite(Date.parse(date)) || Date.parse(date) > now) {
    errors.push(`missing or future ${transcriptOnly ? 'transcript publication' : 'release'} date`);
  }
  return errors;
}
