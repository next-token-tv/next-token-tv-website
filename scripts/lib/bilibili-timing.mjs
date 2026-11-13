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
