/** Release candidates participate in local site navigation without changing publication state. */
type EpisodeVisibility = {
  status: string;
  releasePreview?: boolean;
  detailLayout?: boolean;
  preview?: { images?: Record<string, string> };
};
export function isReleasePreview(data: EpisodeVisibility, includePreview = false) {
  return includePreview && data.status === 'announced' && data.releasePreview === true
    && data.detailLayout === true && Boolean(data.preview?.images?.['960']);
}
export function isVisibleEpisode(data: EpisodeVisibility, includePreview = false) {
  return data.status === 'published' || isReleasePreview(data, includePreview);
}
