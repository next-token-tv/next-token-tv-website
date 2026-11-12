// Use canonical watch URLs so timestamp links retain each platform's full player.
export function timestampVideoUrl(platform, href, seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return null;
  let input;
  try { input = new URL(href); } catch { return null; }
  if (input.protocol !== "https:" || input.username || input.password || input.port) return null;

  let output;
  const start = Math.floor(seconds);
  if (platform === "youtube") {
    const id = input.hostname === "youtu.be"
      ? input.pathname.slice(1)
      : ["youtube.com", "www.youtube.com"].includes(input.hostname) && input.pathname === "/watch"
        ? input.searchParams.get("v")
        : null;
    if (!id || !/^[A-Za-z0-9_-]{11}$/.test(id)) return null;
    output = new URL("https://www.youtube.com/watch");
    output.searchParams.set("v", id);
    if (start) output.searchParams.set("t", `${start}s`);
  } else if (platform === "bilibili") {
    const id = input.hostname === "www.bilibili.com" && input.pathname.match(/^\/video\/(BV[A-Za-z0-9]+)\/?$/)?.[1];
    if (!id) return null;
    output = new URL(`https://www.bilibili.com/video/${id}`);
    const part = input.searchParams.get("p");
    if (part && /^[1-9]\d*$/.test(part) && part !== "1") output.searchParams.set("p", part);
    if (start) output.searchParams.set("t", String(start));
  } else {
    return null;
  }
  return output.href;
}
