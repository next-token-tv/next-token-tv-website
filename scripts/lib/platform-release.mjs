import { platforms, mediaActions, platformAction, validPlatformUrl } from '../../src/data/platforms.mjs';

const published = status => typeof status === 'string' && status.startsWith('published');

export function publishedMedia(id, record, previous) {
  const kind = platforms[id].media;
  if (record.media_release) {
    const result = {};
    for (const medium of ['audio', 'video']) {
      const release = record.media_release[medium];
      if (!release || !['unavailable', 'uploaded', 'reviewing', 'published'].includes(release.state))
        throw new Error(`${id}: explicit ${medium} release state is required`);
      if (release.state === 'published' && (!release.evidence?.kind || !release.evidence?.description))
        throw new Error(`${id}: ${medium} publication requires evidence`);
      result[medium] = release.state === 'published';
    }
    if (!result.audio && !result.video) throw new Error(`${id}: no published medium; reconcile before syncing`);
    return result;
  }
  if (kind === 'audio') return { audio: true, video: false };
  if (kind === 'video') return { audio: record.mode === 'audio-only', video: record.mode !== 'audio-only' };
  // Resolve each medium independently. Only missing evidence may inherit the
  // same live URL's previously confirmed availability; explicit status wins.
  const audio = record.audio_status != null ? published(record.audio_status)
    : record.mode === 'audio-only' ? true : previous?.audio;
  const video = record.video_status != null ? published(record.video_status)
    : record.mode === 'audio-only' ? false : previous?.video;
  if (audio === undefined && video === undefined)
    throw new Error(`${id}: published audio/video evidence is missing`);
  if (!audio && !video)
    throw new Error(`${id}: no published medium; reconcile before syncing`);
  return { audio: audio ?? false, video: video ?? false };
}

function currentMedia(entry) {
  for (const [key, labels] of Object.entries(mediaActions)) {
    if (entry.action?.['zh-Hans'] === labels['zh-Hans'] && entry.action?.en === labels.en)
      return { audio: key !== 'video', video: key !== 'audio' };
  }
  throw new Error(`${entry.platform}: current action is unknown; reconcile before syncing`);
}

export function planPlatformSync(episode, publication) {
  const next = [];
  const media = { audio: false, video: false };
  for (const [id, definition] of Object.entries(platforms)) {
    const record = publication.platforms[id];
    const existing = episode.platforms?.find(entry => entry.platform === id && entry.href);
    const sameUrl = existing && existing.href === record?.public_url;
    // Historical aggregate review status describes an upload, not a retraction
    // of the existing episode. It may preserve a link, never introduce one.
    const legacyReview = record?.status === 'video-reviewing' && sameUrl;
    if ((!published(record?.status) && !Object.values(record?.media_release ?? {}).some(value => value.state === 'published') && !legacyReview) || !record.public_url) continue;
    if (!validPlatformUrl(id, record.public_url)) throw new Error(`${id}: invalid public URL`);
    const available = publishedMedia(id, record, sameUrl ? currentMedia(existing) : undefined);
    media.audio ||= available.audio;
    media.video ||= available.video;
    next.push({ platform: id, label: definition.label, href: record.public_url, action: platformAction(available) });
  }
  for (const existing of episode.platforms ?? []) {
    if (!existing.href) continue;
    const replacement = next.find(entry => entry.platform === existing.platform);
    if (!replacement) throw new Error(`${existing.platform}: source would remove a live link; reconcile before syncing`);
    const before = currentMedia(existing);
    const after = currentMedia(replacement);
    if (before.audio && !after.audio || before.video && !after.video)
      throw new Error(`${existing.platform}: source would downgrade published media; reconcile before syncing`);
  }
  if (episode.media.audio && !media.audio || episode.media.video && !media.video)
    throw new Error('Source would downgrade episode media; reconcile before syncing');
  return { platforms: next, media };
}
