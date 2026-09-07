# Platform icons

The website uses local SVG delivery assets in `public/assets/platforms/`.

| Platform | Source | Delivery treatment |
| --- | --- | --- |
| Xiaoyuzhou | https://www.xiaoyuzhoufm.com/safari-pinned-tab.svg | Official pinned-tab vector, recolored to the website's brand blue `#25B4E1`; XML metadata removed. |
| Apple Podcasts | https://github.com/simple-icons/simple-icons/blob/develop/icons/applepodcasts.svg | Brand-purple fill `#9933CC`. |
| Spotify | https://github.com/pheralb/svgl/blob/main/static/library/spotify.svg | Original colored vector. |
| Bilibili | https://github.com/simple-icons/simple-icons/blob/develop/icons/bilibili.svg | Brand-pink fill `#FB7299`. |
| YouTube | https://github.com/pheralb/svgl/blob/main/static/library/youtube.svg | Original colored vector. |

Platform trademarks belong to their respective owners. Apple Podcasts usage guidance: https://marketing.services.apple/apple-podcasts-identity-guidelines.

`PlatformBrand.astro` pairs each icon with a visible localized platform name. Icons are decorative for assistive technology because the adjacent name supplies their meaning. Episode platform buttons use a light background to preserve colored-icon contrast; other primary actions retain the site's orange treatment.
