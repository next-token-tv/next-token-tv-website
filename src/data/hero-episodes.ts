import type { CollectionEntry } from "astro:content";
import type { getLatestVisibleEpisode } from "./catalog";

/** Explicit presentation inputs; omitted inputs use the current catalog. */
export interface HeroEpisodes {
  latest: Awaited<ReturnType<typeof getLatestVisibleEpisode>>;
  transcript: CollectionEntry<"episodes"> | null;
  upcoming: CollectionEntry<"episodes"> | null;
}
