import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { hasBilibiliTimingEditions, publicBilibiliTiming } from "./lib/bilibili-timing.mjs";
import { alignTranscriptTimings } from "./lib/transcript-timing.mjs";
import { getParagraphAnchorIds } from "../src/data/transcript-paragraph-anchors.ts";
import { timestampVideoUrl } from "../src/data/video-timestamps.mjs";

const website = resolve(import.meta.dirname, "..");
const production = resolve(website, "../next-token");
const episodes = process.argv.slice(2);
if (!episodes.length || episodes.some(number => !/^\d{3}$/.test(number))) {
  throw new Error("Usage: node --experimental-strip-types scripts/import-transcript-timelines.mjs NNN [NNN ...]");
}

const git = (...args) => execFileSync("git", ["-C", production, ...args], { encoding: "utf8" }).trim();
const readJson = async path => JSON.parse(await readFile(path, "utf8"));
const revision = git("rev-parse", "HEAD");

async function committedSource(path) {
  git("ls-files", "--error-unmatch", "--", path);
  if (git("status", "--porcelain", "--", path)) {
    throw new Error(`Timing source must be committed: ${path}`);
  }
  const text = await readFile(resolve(production, path), "utf8");
  return { text, source: { path, revision, sha256: createHash("sha256").update(text).digest("hex") } };
}

for (const number of new Set(episodes)) {
  const episodeId = `next-token-weekly--${number}`;
  const releaseDir = `shows/weekly/episodes/${number}/04-release`;
  const transcript = await readJson(resolve(website, `src/content/imported/transcripts/${episodeId}.zh-Hans.json`));
  const publication = await readJson(resolve(production, releaseDir, "platforms/publication.json"));
  if (transcript.publicationStatus !== "published") throw new Error(`No published transcript for ${episodeId}`);
  const ids = getParagraphAnchorIds(transcript.chapters);
  const tracks = new Map();
  let withheldBilibili = false;

  for (const platform of ["youtube", "bilibili"]) {
    const record = publication.platforms[platform];
    if (!record?.status?.startsWith("published") || !record.public_url) continue;
    const href = timestampVideoUrl(platform, record.public_url, 0);
    if (!href) throw new Error(`Unexpected ${platform} video URL for ${episodeId}`);
    let edition;
    if (platform === "bilibili" && hasBilibiliTimingEditions(number)) {
      try {
        edition = await publicBilibiliTiming(number, href);
      } catch (error) {
        console.warn(`${number}: ${error.message}`);
      }
      if (!edition) {
        console.warn(`${number}: Bilibili timing withheld until the public part is matched to release captions`);
        withheldBilibili = true;
        continue;
      }
    }
    const path = `${releaseDir}/video/${edition?.filename ?? "subtitles.zh-Hans.srt"}`;
    const { text, source } = tracks.get(path) ?? await committedSource(path);
    if (edition && edition.sha256 !== source.sha256) {
      console.warn(`${number}: Bilibili timing withheld because the release caption digest changed`);
      withheldBilibili = true;
      continue;
    }
    if (!tracks.has(path)) {
      const count = alignTranscriptTimings(transcript.chapters, text, { includeShortCues: true });
      if (!count) throw new Error(`No aligned paragraphs: ${path}`);
      const aligned = transcript.chapters.flatMap((chapter, c) => chapter.turns.flatMap((turn, t) =>
        turn.paragraphTimings.flatMap((timing, p) => timing ? [[ids[c][t][p], timing]] : []),
      ));
      const times = {};
      for (const [index, [id, timing]] of aligned.entries()) {
        const previous = aligned[index - 1]?.[1];
        const next = aligned[index + 1]?.[1];
        // A unique match can still point to an earlier excerpt in the teaser.
        if (previous && timing.startSeconds < previous.startSeconds ||
            next && timing.startSeconds > next.startSeconds) continue;
        times[id] = [timing.startSeconds, timing.endSeconds];
      }
      tracks.set(path, { source, videos: {}, times });
    }
    const track = tracks.get(path);
    if (edition) track.bilibiliCid = edition.cid;
    track.videos[platform] = href;
  }

  // For these shared video editions the release chapter list uses the same clock
  // as the SRT and supplies headings whose edited prose has no exact cue match.
  if (["001", "002"].includes(number)) {
    const { text, source } = await committedSource(`${releaseDir}/copy/chapters.json`);
    const chapterList = JSON.parse(text);
    if (chapterList.timeline !== "release" || chapterList.episode_id !== episodeId || tracks.size !== 1) {
      throw new Error(`Unexpected release chapter timeline for ${episodeId}`);
    }
    for (const track of tracks.values()) {
      track.chapterSource = source;
      track.chapterStarts = {};
      for (const [index, chapter] of transcript.chapters.entries()) {
        if (ids[index].flat().some(id => Object.hasOwn(track.times, id))) continue;
        const matches = chapterList.chapters.filter(item => item.titles["zh-Hans"] === chapter.title);
        const start = matches[0]?.start_seconds;
        if (matches.length === 1 && Number.isFinite(start) && start >= 0 && start < chapterList.duration_seconds) {
          track.chapterStarts[chapter.id] = start;
        }
      }
    }
  }

  const output = resolve(website, `src/content/imported/transcript-timelines/${episodeId}.json`);
  await mkdir(dirname(output), { recursive: true });
  const data = { episodeId, tracks: [...tracks.values()] };
  if (!data.tracks.length && !withheldBilibili) throw new Error(`No public video timeline for ${episodeId}`);
  await writeFile(`${output}.tmp`, JSON.stringify(data) + "\n");
  await rename(`${output}.tmp`, output);
  console.log(number, data.tracks.map(track => `${Object.keys(track.videos).join("/")}: ${Object.keys(track.times).length}`).join(", "));
}
