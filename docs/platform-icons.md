# Platform icons

The website uses local SVG and PNG delivery assets in `public/assets/platforms/`. `platformAssets` in `src/data/platforms.mjs` is the shared registry for file paths, source links, provenance categories and optical sizes. The design-system specimen and production platform links use the same registry and `PlatformBrand.astro` component.

## Sources

Official source pages were checked on 2026-10-23. “Official artwork · adapted” identifies an official vector packaged or colored for web delivery; it does not imply an unmodified downloadable brand asset. Bilibili uses the official download page’s header sprite; RedNote uses its official homepage header wordmark. These are official website delivery assets, not a separately published brand package.

| Asset | Source | Delivery treatment |
| --- | --- | --- |
| `wechat-official.svg` | <https://res.wx.qq.com/mpres/htmledition/images/icon/login/official_accounts_new818f37.svg> | Official registration-page SVG, copied unchanged; `#1485EE`. |
| `wechat-channels.svg` | <https://res.wx.qq.com/t/wx_fed/finder/helper/finder-helper-web/res/static/js/chunk-common.7dbff146.js> | Official `icon-logo` symbol extracted as a standalone SVG; original viewBox and path retained; platform orange `#FA9D3B`. |
| `xiaoyuzhou.svg` | <https://www.xiaoyuzhoufm.com/safari-pinned-tab.svg> | Official pinned-tab vector; XML metadata removed; filled with the official website blue `#25B4E1`. |
| `bilibili.svg` | <https://s1.hdslb.com/bfs/seed/jinkela/header-v2/header.js> | `bili-bilibili-tv` symbol from the header loaded by <https://app.bilibili.com/>; standalone SVG with original geometry and the same bundle’s `#FB7299` platform pink. |
| `xiaohongshu.png` | <https://fe-static.xhscdn.com/formula-static/xhs-pc-web/public/resource/js/index.a9f61821.js> | Official homepage `mainLogo` embedded PNG; decoded without altering its bytes. |
| `youtube.svg` | <https://developers.google.com/static/site-assets/logo-youtube.svg> | Official Google YouTube developer-site SVG, copied unchanged. |
| `spotify.svg` | <https://developer-assets.spotifycdn.com/images/guidelines/design/2024-spotify-logo-icon.zip> | Official developer brand package member `Primary_Logo_Green_RGB.svg`, copied unchanged. |
| `apple-podcasts.png` | <https://apple.box.com/s/be82lvt43yrha9c55nfxmm10l9bnp6am> | Official `Apple_Podcasts_Icon_RGB_CI_082526.png`; proportionally reduced from 2048px to 112px for web delivery; original artwork, colors and transparency retained. |

The WeChat Official Account SVG is linked by the registration page's `account_type818f37.css`. The Channels symbol comes from the public helper site's JavaScript bundle; `#FA9D3B` is its platform orange, also present in its chart theme and interface styles. Xiaoyuzhou's blue is present in the official homepage styles. These platform colors are independent of Next Token's color tokens.

The YouTube SVG is served by <https://developers.google.com/youtube/terms/branding-guidelines>; the Spotify SVG package is linked from <https://developer.spotify.com/documentation/design>; the Apple folder is linked from <https://marketing.services.apple/apple-podcasts-identity-guidelines>. Delivery hashes, Apple original hash and rights are recorded in `ASSET-LICENSES.md`.

## Layout

- All subscription icons use a `1.75rem` square slot with a `0.65rem` gap before the localized name.
- Spotify and Apple Podcasts render at `1.5rem` to balance their solid color areas with open and line-based marks.
- WeChat Channels renders at `2rem` and RedNote at `2rem` including their built-in whitespace; the visible artwork stays within the common slot.
- The remaining marks render at `1.75rem`, preserving aspect ratio and native whitespace. All marks retain their native proportions.
- No CSS recoloring, clipping, stretching, added background tile or redrawing is applied. Colors, gradients and native shapes belong to each platform.
- Icons are decorative for assistive technology because the adjacent visible name supplies their meaning. Platform links retain shared typography, spacing, rules and interaction states.

PNG or SVG is selected according to the supplied artwork. Apple Podcasts uses a 112px delivery for its 24px default display; YouTube and Spotify preserve their official SVG bytes. Official standalone SVGs for the current Apple Podcasts app icon and RedNote header wordmark have not been verified; these marks retain the official PNG deliveries.
