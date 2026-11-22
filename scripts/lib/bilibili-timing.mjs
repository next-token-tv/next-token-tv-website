// Verified pairs of public Bilibili parts and release captions. A BV can keep
// its public URL when a replacement changes the part CID and the video clock.
const editions = {
  "003": {
    BV1zQhv6VEwj: {
      43534387211: {
        filename: "subtitles.zh-Hans.srt",
        sha256: "635dc5a818e9d8b67366bd251b79cdc12e911845e230e1b53985f56acf1bafd8",
      },
    },
  },
  "009": {
    BV1Z6W46AEwr: {
      43453909280: {
        filename: "subtitles.bilibili.zh-Hans.srt",
        sha256: "2f0e5c00b3e55c1ab915df7dcd781b5e423898d653d3d5eb306d37feb9bae1a0",
      },
    },
  },
  "010": {
    BV1oJsF6dEsL: {
      43640751668: {
        sourcePath: "05-qa/typography-correction-20261116/release.zh-Hans.srt",
        sha256: "bfa9f5547a96a8b995e9eeb6be8ad825bb9073669743d51c51c04c1763e4994b",
      },
    },
  },
  "011": {
    BV147yVz5EXS: {
      43821698552: {
        sourcePath: "03-post-production/transcripts/speaker-aligned/release-reference.zh-Hans.srt",
        sourceRevision: "eed41769af8015773d8c5896b4375bd110f77a86",
        sha256: "72d888ff2c9395dc3b3e8bffe91c85095d8065497be698614da8e47dcaa8d627",
      },
    },
  },
};

export const hasBilibiliTimingEditions = number => Object.hasOwn(editions, number);

export async function publicBilibiliTiming(number, href, fetchView = fetch) {
  const url = new URL(href);
  const bvid = url.pathname.split("/")[2];
  const variants = editions[number]?.[bvid];
  if (!variants) return null;

  const view = new URL("https://api.bilibili.com/x/web-interface/view");
  view.searchParams.set("bvid", bvid);
  const response = await fetchView(view, {
    headers: { "User-Agent": "Mozilla/5.0", Referer: href },
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) throw new Error(`Bilibili returned HTTP ${response.status}`);
  const { code, data } = await response.json();
  if (code !== 0 || data?.bvid !== bvid || !Array.isArray(data.pages)) {
    throw new Error(`Bilibili did not confirm the public parts for ${bvid}`);
  }
  const partNumber = Number(url.searchParams.get("p") ?? "1");
  const cid = data.pages.find(part => part.page === partNumber)?.cid;
  const timing = variants[cid];
  return timing ? { ...timing, cid } : null;
}
