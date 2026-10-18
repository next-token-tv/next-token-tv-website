export function episodeReleaseErrors(episode, snapshot, hasPublishedTranscript, now = Date.now()) {
  const errors = [];
  const transcriptOnly = !episode.media?.audio && !episode.media?.video;
  if (transcriptOnly && !hasPublishedTranscript) errors.push('published episode has no released medium or committed published transcript');
  const date = transcriptOnly ? episode.transcriptPublishedAt : snapshot.releaseDate;
  // Episode publication dates are calendar dates in the show's Asia/Shanghai timezone.
  const publicationStart = /^\d{4}-\d{2}-\d{2}$/.test(date ?? '') ? Date.parse(`${date}T00:00:00+08:00`) : NaN;
  if (!Number.isFinite(publicationStart) || publicationStart > now) {
    errors.push(`missing or future ${transcriptOnly ? 'transcript publication' : 'release'} date`);
  }
  return errors;
}
