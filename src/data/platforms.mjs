export const platformAssets = {
  wechat: { file: 'wechat-official.svg', kind: 'official', source: 'https://mp.weixin.qq.com/cgi-bin/registermidpage?action=index&lang=zh_CN', size: 1.75 },
  'wechat-channels': { file: 'wechat-channels.svg', kind: 'official-adapted', source: 'https://channels.weixin.qq.com/', size: 2 },
  xiaoyuzhou: { file: 'xiaoyuzhou.svg', kind: 'official-adapted', source: 'https://www.xiaoyuzhoufm.com/safari-pinned-tab.svg', size: 1.75 },
  bilibili: { file: 'bilibili.svg', kind: 'official-adapted', source: 'https://app.bilibili.com/', size: 1.75 },
  xiaohongshu: { file: 'xiaohongshu.png', kind: 'official', source: 'https://www.xiaohongshu.com/explore', size: 2 },
  youtube: { file: 'youtube.svg', kind: 'official', source: 'https://developers.google.com/youtube/terms/branding-guidelines', size: 1.75 },
  spotify: { file: 'spotify.svg', kind: 'official', source: 'https://developer.spotify.com/documentation/design', size: 1.5 },
  'apple-podcasts': { file: 'apple-podcasts.png', kind: 'official', source: 'https://marketing.services.apple/apple-podcasts-identity-guidelines', size: 1.5 },
};
export const platformIcon = id => platformAssets[id] ? `/assets/platforms/${platformAssets[id].file}` : undefined;
const define = (zh, en, icon, hosts, media) => ({
  label: { 'zh-Hans': zh, en }, icon: platformIcon(icon), hosts, media,
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
