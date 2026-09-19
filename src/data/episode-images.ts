/** Delivery variants from the production snapshot, in ascending width order. */
export function episodeImageSrcset(images: Record<string, string | undefined>): string {
  return Object.entries(images)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([width, path]) => `${path} ${width}w`)
    .join(", ");
}
