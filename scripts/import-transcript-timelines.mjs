import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, posix, resolve } from "node:path";
import { hasBilibiliTimingEditions, publicBilibiliTiming } from "./lib/bilibili-timing.mjs";
import { alignTranscriptTimings } from "./lib/transcript-timing.mjs";
import { getParagraphAnchorIds } from "../src/data/transcript-paragraph-anchors.ts";
import { timestampVideoUrl } from "../src/data/video-timestamps.mjs";

const website = resolve(import.meta.dirname, "..");
const production = resolve(website, "../next-token");
const args = process.argv.slice(2);
const publicationFlags = args.filter(arg => arg.startsWith("--publication="));
const episodes = args.filter(arg => !arg.startsWith("--publication="));
if (!episodes.length || episodes.some(number => !/^\d{3}$/.test(number)) ||
    (publicationFlags.length && (publicationFlags.length !== 1 || episodes.length !== 1 || !publicationFlags[0].slice(14)))) {
  throw new Error("Usage: node --experimental-strip-types scripts/import-transcript-timelines.mjs NNN [NNN ...] [--publication=path]");
}

const git = (...args) => execFileSync("git", ["-C", production, ...args], { encoding: "utf8" }).trim();
const readJson = async path => JSON.parse(await readFile(path, "utf8"));
const revision = git("rev-parse", "HEAD");

async function committedSource(path, sourceRevision = revision) {
  if (sourceRevision !== revision) {
    const text = execFileSync("git", ["-C", production, "show", `${sourceRevision}:${path}`], { encoding: "utf8" });
    return { text, source: { path, revision: sourceRevision, sha256: createHash("sha256").update(text).digest("hex") } };
  }
  git("ls-files", "--error-unmatch", "--", path);
  if (git("status", "--porcelain", "--", path)) {
    throw new Error(`Timing source must be committed: ${path}`);
  }
  const text = await readFile(resolve(production, path), "utf8");
  return { text, source: { path, revision, sha256: createHash("sha256").update(text).digest("hex") } };
}

async function youtubeCaptionSource(episodeDir, record) {
  const defaultPath = "04-release/video/subtitles.zh-Hans.srt";
  const publishedPath = record.source_subtitle_zh ?? defaultPath;
  if (publishedPath === defaultPath) return { path: `${episodeDir}/${defaultPath}` };

  const release = await readJson(resolve(production, episodeDir, "04-release/release.json"));
  const observed = release.platforms.youtube?.observed;
  const asset = release.assets[observed?.subtitle_zh?.value];
  if (observed?.public_url?.state !== "known" || observed.public_url.value !== record.public_url ||
      observed.subtitle_zh?.state !== "known" || asset?.kind !== "subtitle" || asset.path !== publishedPath ||
      !/^[0-9a-f]{64}$/.test(asset.sha256)) {
    throw new Error(`Cannot verify the published YouTube captions for ${episodeDir}`);
  }
  const findCommittedCaption = candidates => candidates
    .filter(candidate => typeof candidate === "string" && candidate.endsWith(".srt") &&
      !posix.isAbsolute(candidate) && posix.normalize(candidate) === candidate && !candidate.startsWith("../"))
    .map(candidate => `${episodeDir}/${candidate}`)
    .find(candidate => git("ls-files", "--", candidate));
  let path = findCommittedCaption([publishedPath, ...(asset.aliases ?? [])]);
  if (!path) {
    // The delivery copy can be outside Git. Check the committed equivalent
    // from the reading-transcript release, then verify its digest below.
    const manifest = await readJson(resolve(production, episodeDir, "04-release/copy/transcript-manifest.json"));
    path = findCommittedCaption([manifest.typography_correction?.release_srt]);
  }
  if (!path) throw new Error(`No committed copy of the published YouTube captions for ${episodeDir}`);
  return { path, sha256: asset.sha256 };
}

for (const number of new Set(episodes)) {
  const episodeId = `next-token-weekly--${number}`;
  const episodeDir = `shows/weekly/episodes/${number}`;
  const releaseDir = `${episodeDir}/04-release`;
  const transcript = await readJson(resolve(website, `src/content/imported/transcripts/${episodeId}.zh-Hans.json`));
  const publication = await readJson(publicationFlags.length
    ? resolve(publicationFlags[0].slice(14))
    : resolve(production, releaseDir, "platforms/publication.json"));
  if (publication.episode_id !== number) throw new Error(`Publication evidence is for a different episode: ${number}`);
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
    const { path, sha256 } = platform === "youtube"
      ? await youtubeCaptionSource(episodeDir, record)
      : { path: `${episodeDir}/${edition?.sourcePath ?? `04-release/video/${edition?.filename ?? "subtitles.zh-Hans.srt"}`}` };
    const { text, source } = tracks.get(path) ?? await committedSource(path, edition?.sourceRevision);
    if (sha256 && source.sha256 !== sha256) throw new Error(`Published YouTube caption digest changed: ${path}`);
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
