const define = (zh, en, icon, hosts, media) => ({
  label: { 'zh-Hans': zh, en }, icon: `/assets/platforms/${icon}.svg`, hosts, media,
});

export const platforms = {
  xiaoyuzhou: define('小宇宙', 'Xiaoyuzhou', 'xiaoyuzhou', ['www.xiaoyuzhoufm.com'], 'mixed'),
  'apple-podcasts': define('Apple Podcasts', 'Apple Podcasts', 'apple-podcasts', ['podcasts.apple.com'], 'audio'),
  spotify: define('Spotify', 'Spotify', 'spotify', ['open.spotify.com'], 'mixed'),
  bilibili: define('哔哩哔哩', 'Bilibili', 'bilibili', ['www.bilibili.com', 'b23.tv'], 'video'),
  youtube: define('YouTube', 'YouTube', 'youtube', ['www.youtube.com', 'youtube.com', 'youtu.be'], 'video'),
  xiaohongshu: define('小红书', 'RedNote', 'xiaohongshu', ['www.xiaohongshu.com', 'xiaohongshu.com', 'xhslink.com', 'xhslink.cn'], 'video'),
};
export const platformIds = Object.keys(platforms);
export const mediaActions = {
  audio: { 'zh-Hans': '立即收听', en: 'Listen now' },
  video: { 'zh-Hans': '立即观看', en: 'Watch now' },
  both: { 'zh-Hans': '收听 / 收看', en: 'Listen / watch' },
};
export function platformAction(media) {
  return mediaActions[media.audio && media.video ? 'both' : media.video ? 'video' : 'audio'];
}
export function validPlatformUrl(id, href) {
  try {
    const url = new URL(href);
    return url.protocol === 'https:' && !!platforms[id]?.hosts.includes(url.hostname);
  } catch { return false; }
}
