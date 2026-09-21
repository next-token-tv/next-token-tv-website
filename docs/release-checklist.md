# Release gates

`npm run release:check` runs schema/content checks, stylesheet lint, a production build, Chrome interaction and responsive regression tests, and the built-site audit. It does not commit, push, or deploy. `npm run deploy` runs these gates before Wrangler publishes the site.

`npm run check:release` audits the existing `dist` output. Run a fresh build first when using it separately.

`npm run test:performance` runs serial mobile cold-load checks against a fresh local production build. Each representative route (home, episode, transcript and brand directory) receives three fresh-browser samples at 390 × 844, 2× density, 4× CPU slowdown, 150 ms latency and 1.6 Mbps download throughput. Budgets are median LCP ≤ 2.5 seconds, initial-load CLS ≤ 0.1 in every sample, and each initially loaded image ≤ 200 KiB. The three-second post-load observation includes font readiness but not later user interaction. Reports stay in ignored `test-results/performance`. These checks exclude production-only analytics and Internet/CDN latency; they are regression gates, not official PageSpeed scores or real-user Core Web Vitals. Use `PERFORMANCE_PORT` to override the default local port 4178.

Retired entity URLs with a known successor have explicit 301 rules before generic migrations. Both locales, legacy and Wiki prefixes, and slash/no-slash forms resolve directly to the current canonical page. Browser regression checks require a single redirect followed by a 200 destination with matching canonical metadata.

The built-site audit requires:

- Published episode and transcript snapshots come from committed production sources. Importers reject dirty or untracked release inputs and do not serialize raw working-tree status into website data.
- Internal destinations and fragment anchors exist, including entity links.
- Each episode has Chinese and English detail routes.
- Published episode metadata titles use `Weekly #<number> | <topic>` semantics without a site-name suffix. HTML sitemap rows show the number once and use the localized hero heading for the topic.
- Published Chinese and English Show Notes include opening context, episode questions, the generated timeline, references, people/products/terms, and production credits. `npm run check:chapters` confirms both timeline blocks against their imported chapter snapshot.
- Home and Weekly pages in both languages link to the latest published episode and the next announced recording. A preview must not remain when no announced recording exists.
- Announced recording dates have not passed. A date-only announcement remains current through the entire calendar day in its configured time zone; an announcement with an exact time expires after that timestamp. After recording, editorial review must resolve the status before the next release; do not label an episode published solely to pass the gate.
- Configured platform URLs use HTTPS and the expected platform hostname, with Chinese and English action labels.

External playback, regional restrictions, and account permissions require manual confirmation. Valid URL syntax and hostname do not prove an episode is playable. Review the deployed pages after publishing.

# Transcript reader

- Search matches chapter titles and dialogue case-insensitively, showing up to 50 result links and the total match count. Selecting a result locates the corresponding chapter or turn without hiding or rewriting the transcript.
- Chapter sharing copies the canonical production URL with the existing chapter anchor. If clipboard permission is unavailable, a selectable URL is shown.
- Without JavaScript, the full transcript, expanded table of contents, and per-paragraph permalink remain available; interactive tools are not displayed.
- Each published paragraph has a `quote-` anchor based on its speaker identity and normalized plain text. The paragraph link copies its canonical URL when JavaScript and clipboard access are available; otherwise it remains a native link. Opening the fragment highlights that paragraph. Inserting unrelated paragraphs or chapters does not change its anchor. Text edits and inserting an identical speaker/text paragraph before an existing duplicate can change an anchor, so editorial references must be checked when transcript text changes.
- Turn anchors are generated from chapter IDs and turn order. They remain local search targets, not editorially stable share identifiers. Chapter anchors remain the stable chapter sharing interface.
- Paragraphs with an unambiguous full-text subtitle match may show the enclosing video subtitle cue range on hover or keyboard focus. Timing labels are excluded from search text. Unmatched paragraphs remain untimed; timed video links are not generated.
