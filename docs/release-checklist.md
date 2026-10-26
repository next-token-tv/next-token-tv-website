# Release gates

## Source and episode state

- Human-authored YAML metadata, localized Markdown prose and generated imported JSON have separate ownership. Import snapshots record source repository, repository-relative path, SHA-256, source state and committed revision when available. Published snapshots require committed sources; conversion QA stays command output, not embedded production notes. Builds read imported snapshots, never editorial working files.
- A venue belongs to one partner, and a production snapshot identifies its exact physical venue when applicable. Announcements may record confirmed dates and venue before a snapshot exists. Date-only schedules preserve unknown recording times; `recordingMode: online` does not imply a physical venue, meeting URL, public access or attendees.
- `published` begins with the first released medium or approved published transcript. Transcript-first release requires committed transcript content and `transcriptPublishedAt`; it does not enable audio/video links. Published audio-only episodes use an imported audio snapshot with hashed release sources. Audio/video availability and localized transcript availability are independent.
- Select the latest published episode from metadata by descending episode number. Do not hardcode an episode ID or infer publication from a passed scheduled date.
- Local review copy uses intended final reader-facing wording. Drafts stay excluded from production and noindex; production filenames, review-stage labels and agent reasoning are not public copy.
- Episode release preparation covers home/latest cards, show ordering, navigation, both locales, transcript and Markdown links, search, sitemap, host profiles and entity relations. Verify navigation from home as well as direct URLs.

## Website validation

`npm run release:check` runs schema/content checks, stylesheet lint, a production build, Chrome interaction and responsive regression tests, and the built-site audit. It does not commit, push, or deploy. `npm run deploy` runs these gates before Wrangler publishes the site.

A production release is a complete website snapshot: episode pages, published transcripts, Wiki entries and their saved articles, navigation, APIs, and generated assets ship together. Episode or platform-link updates must not silently omit current Wiki content. Explicitly unpublished drafts remain excluded by their publication status.

`npm run check:release` audits the existing `dist` output. Run a fresh build first when using it separately. SEO metadata and audit evidence follow [Technical SEO](seo-technical.md); Markdown response headers follow the [URL contract](url-conventions.md#markdown-canonical). Local checks establish artifact behavior; verify the public routes, sitemap and response headers separately after deployment.

`npm run test:performance` runs serial mobile cold-load checks against a fresh local production build. Each representative route (home, episode, transcript and brand directory) receives three fresh-browser samples at 390 × 844, 2× density, 4× CPU slowdown, 150 ms latency and 1.6 Mbps download throughput. Budgets are median LCP ≤ 2.5 seconds, initial-load CLS ≤ 0.1 in every sample, and each initially loaded image ≤ 200 KiB. The three-second post-load observation includes font readiness but not later user interaction. Reports stay in ignored `test-results/performance`. These checks exclude production-only analytics and Internet/CDN latency; they are local regression checks, not official PageSpeed scores or real-user Core Web Vitals. Use `PERFORMANCE_PORT` to override the default local port 4178.

Retired entity URLs with a known successor have explicit 301 rules before generic migrations. Both locales, legacy and Wiki prefixes, and slash/no-slash forms resolve directly to the current canonical page. Browser regression checks require a single redirect followed by a 200 destination with matching canonical metadata.

The built-site audit requires:

- Published episode and transcript snapshots come from committed production sources. Importers reject dirty or untracked release inputs and do not serialize raw working-tree status into website data.
- Internal destinations and fragment anchors exist, including entity links.
- Each episode has Chinese and English detail routes.
- Published episode metadata titles use `#NNN <topic>` under the [shared naming standard](../../next-token/docs/brand/naming.zh-Hans.md#跨平台完整单集标题), preserving three digits and one space without a Weekly prefix or site-name suffix. HTML sitemap rows show the number once and use the localized hero heading for the topic.
- Published Chinese and English Show Notes include opening context, episode questions, the generated timeline, references, people/products/terms, and production credits. `npm run check:chapters` confirms both timeline blocks against their imported chapter snapshot.
- Home and Weekly pages in both languages link to the latest published episode and the next announced recording. A preview must not remain when no announced recording exists.
- Recording previews use time-stable “录制安排 · 进度待确认 / Recording schedule · Status unconfirmed” wording until editorial confirmation; dates remain scheduled dates, not evidence that recording happened. HTML, OG and llms.txt share this state wording. This protects a deployed static page when the date passes without a rebuild.
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

# Platform release synchronization

`node scripts/sync-episode-release.mjs NNN` plans platform changes before writing. Platform names, icons, allowed hosts, and action labels are defined in `src/data/platforms.mjs`. Audio and video availability are evaluated per platform; uploaded or review-pending video does not establish public availability. Mixed-media platforms resolve audio and video evidence independently. Missing medium fields may inherit website-confirmed availability only for the same platform and exact public URL. Legacy `audio-only` records still establish audio when published video is added. Historical aggregate `video-reviewing` records may preserve an existing live URL, but cannot introduce a new one. Explicit medium statuses take precedence over compatibility fallbacks.

Synchronization rejects removal of an existing live link or a downgrade of confirmed media. Reconcile the production publication record against actual publication evidence before retrying; do not change website action labels just to bypass a conflict. Conflicts leave episode metadata and production snapshots untouched. Source hashes are not refreshed by platform synchronization.

Mobile performance is not a release-blocking gate. Run `npm run performance:audit` separately against the current deployed, verified bundle, or supply a bundle path. This records the exact revision, artifact digest and result. `npm run performance:report` summarizes pending and completed checks; a previous version passing does not mark a new release passed. `test:performance` remains a development test command and does not update this release audit ledger. See [site maintenance](site-maintenance.md) for status storage and reports.

# Validation and delivery controls

- Development: `npm run test:visual:quick` runs control, tag and design-system checks; `npm run test:visual -- tests/visual/<file>.spec.ts` selects a changed feature. Both build by default. These commands do not certify a production release.
- Home and Weekly hero snapshots use [fixed visual inputs](visual-regression.md); real routes retain geometry and current-publication behavior checks. The separate fixture build stays under `.cache/visual-fixtures/` and never replaces the release artifact in `dist/`.
- Release: `release:prepare` runs all gates once in an immutable revision bundle. Browser tests stop after five failures and default to two workers; `PLAYWRIGHT_WORKERS=1` selects serial execution. Performance measurements remain serial and separate.
- `release:resume` verifies source and artifact digests before reusing passed stages. A failed browser stage reruns the full browser suite; test-level results are not reused. Preparation timings include earlier gate attempts and dependency installation; invocation timing records the current attempt only.
- `release:publish -- <bundle>` verifies and uploads the existing artifact without rebuilding. Wrangler output streams immediately. `NEXTTOKEN_PUBLISH_TIMEOUT_MS` sets the total timeout (default 600000 milliseconds); termination includes the child process group.
- `.releases/publish-attempts.jsonl` records each completed upload attempt, duration, revision, artifact digest and confirmation status. Successful deployment history records the publish duration separately from preparation.
- A timeout, interruption or missing version confirmation is an unconfirmed deployment. Inspect `npx wrangler deployments list` from that bundle before retrying. The tool does not automatically retry ambiguous deployments. The verified bundle remains reusable.
