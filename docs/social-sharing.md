# Social sharing and following

## Open Graph

`npm run generate:og` renders 1200 × 630 PNG cards from the website YAML metadata, transcript imports, and existing portraits. It runs before the production build. `public/assets/og/manifest.json` and PNGs are generated delivery assets; do not edit them manually.

The renderer uses local Chrome, the bundled League Spartan font, and the system Chinese font (PingFang SC on the current macOS build host). Typography uses rem; the fixed raster canvas is 1200 × 630 pixels. Cards include a page-type label, title, and site identity. People cards include the existing portrait; transcripts use a distinct transcript label and chapter count.

Chinese and English home, Weekly, episode, and person routes receive their own card. Transcript cards are generated only for available transcript locales. Other routes receive the localized brand fallback. Content-derived filenames change when inputs or the template change. Obsolete generated PNGs are removed during generation.

The base layout emits absolute OG/Twitter image URLs, alt text, PNG type and dimensions, and `summary_large_image`. Existing titles, descriptions, and canonical URLs remain authoritative; this change does not rewrite their copy. Social platforms may retain cached previews until their next crawl after deployment.

## Subscription versus playback

Show-level `subscriptions` live in `src/content/data/shows/next-token-weekly.yaml`. Home and Weekly footer sections open show/channel homepages through `ShowSubscriptions.astro`. Episode-level `platforms` remain single-episode playback links. Following happens on the external platform; clicking a website link does not itself subscribe the visitor.

Subscription destinations were checked against the content repository's `platforms/{platform}/account.json` public URL records. Current public-page fetches were unavailable during implementation; authentication, geographic restrictions and playback require live platform confirmation. Do not infer a show URL from an episode ID.

The social-card test checks every generated route's OG/Twitter fields, PNG response and exact dimensions. Platform-list tests distinguish show destinations from episode destinations in both locales.
