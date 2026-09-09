# Release gates

`npm run release:check` runs schema/content checks, stylesheet lint, a production build, Chrome interaction and responsive regression tests, and the built-site audit. It does not commit, push, or deploy. `npm run deploy` runs these gates before Wrangler publishes the site.

`npm run check:release` audits the existing `dist` output. Run a fresh build first when using it separately.

The built-site audit requires:

- Internal destinations and fragment anchors exist, including entity links.
- Each episode has Chinese and English detail routes.
- Home and Weekly pages in both languages link to the latest published episode and the next announced recording. A preview must not remain when no announced recording exists.
- Announced recording dates have not passed. After recording, editorial review must resolve the status before the next release; do not label an episode published solely to pass the gate.
- Configured platform URLs use HTTPS and the expected platform hostname, with Chinese and English action labels.

External playback, regional restrictions, and account permissions require manual confirmation. Valid URL syntax and hostname do not prove an episode is playable. Review the deployed pages after publishing.

# Transcript reader

- Search matches chapter titles and dialogue case-insensitively, showing up to 50 result links and the total match count. Selecting a result locates the corresponding chapter or turn without hiding or rewriting the transcript.
- Chapter sharing copies the canonical production URL with the existing chapter anchor. If clipboard permission is unavailable, a selectable URL is shown.
- Without JavaScript, the full transcript and expanded table of contents remain available; interactive tools are not displayed.
- Turn anchors are generated from chapter IDs and turn order. They are local search targets, not editorially stable share identifiers. Chapter links are the sharing interface.
- The current transcript snapshot has no verified turn timestamps. Timed video links are not generated.
