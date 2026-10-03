# Website maintenance

## Verified releases

`npm run release:check` runs content/type/style checks once, builds once with `build:assets`, then runs browser tests and output audits against that build. Mobile performance is a separate audit and does not block publishing. Standalone `build` retains its own chapter, transcript and type checks. Standalone browser test commands continue to build by default. `PLAYWRIGHT_SKIP_BUILD=1` is reserved for an already-built artifact.

`npm run release:prepare -- HEAD` exports the selected Git commit into `.releases/`, installs its locked dependencies and runs all release gates there. Uncommitted edits are excluded. A successful bundle contains `release.json` with the exact commit, verification time and SHA-256 of assets, Worker code and Wrangler configuration. It also records per-stage durations and an explicit mobile performance status of `not-run`. Preparation does not publish.

`npm run release:resume -- <failed-bundle>` retries an unchanged prepared bundle without reinstalling dependencies. A checkpoint verifies source and installed dependency contents, Node runtime, `PUBLIC_*` build variables and `NODE_ENV`, and the built artifact before reusing passed stages. The failed stage and remaining stages run again; output audits always rerun. Changed inputs or artifacts require a fresh preparation. Stage attempts are retained in the report. Historical revisions with the original report format remain supported through a full preparation; they do not support checkpoint resume.

`npm run release:publish -- <bundle-directory>` verifies that hash again and deploys the same bundle without rebuilding. The deployment version, commit and digest are retained in `.releases/history.jsonl`. `npm run deploy` prepares the current commit and then publishes that verified bundle; use it only when deployment is intended. Run Wrangler-backed commands in the authorized host context.

`npm run release:rollback -- <Cloudflare-version-id>` restores a previously deployed Cloudflare version and records the rollback locally. Rollback does not modify source files or Git commits. A successful CLI result still requires checking the live pages. Release bundles and history are local ignored files; preserve the selected bundle when moving machines.

## Independent mobile performance

`npm run performance:audit` audits the current deployed bundle recorded in `.releases/history.jsonl`, including a recorded rollback. `npm run performance:audit -- <verified-bundle>` selects another verified bundle. The audit runs all eight routes with three cold-load samples per route against a local server for the immutable release artifact, without rebuilding or deploying. These are local regression budgets, not live user measurements or a production-network test. A failed or incomplete audit exits unsuccessfully but does not retract or block a release.

`.releases/performance-history.jsonl` records `running`, `passed`, `failed` or `error`, exact commit and artifact digest, timestamps and report location. A release with no matching audit is `not-run`; a pass on an older commit or different artifact is never inherited. A terminated process remains `running` until another audit is performed and is never reported as passed. Reports and samples remain under `.releases/performance/<audit-id>/`. Publishing records the matching performance state at that time; subsequent audits are reflected by the report without rewriting release history.

`npm run performance:report` generates `reports/maintenance/performance.md` and `.json`, listing current release state, the latest audit, the last passing audit, and every deployment without a matching passing result. Prior releases without audit records remain `not-run`. This command supports periodic manual summaries; no automatic schedule is configured. These records and release bundles are local ignored files and must be retained or transferred together when changing machines.

## Build timing and OG cache

`reports/maintenance/release-check.json` records stage durations and outcomes. Verified bundles retain these durations in `release.json`. The OG generator reports newly generated and restored card counts and elapsed seconds. Cold rendering uses up to four concurrent jobs by default, bounded by available CPU parallelism. Set `NEXTTOKEN_OG_CONCURRENCY` to an integer from 1 to 8 to override it. Each job owns one browser page; manifest order stays deterministic. A failure stops scheduling new jobs, waits for in-flight jobs to close, and fails without publishing a new manifest or pruning old output.

`.cache/og/` is a shared local content-addressed image cache. Release preparation passes its absolute location to the isolated bundle using `NEXTTOKEN_OG_CACHE_DIR`. Keys cover card content, templates, font/photo/logo data, renderer source, installed Playwright and Sharp versions, Chrome version and operating-system identity. Scheduling code, concurrency settings and unrelated lockfile changes do not invalidate rendered images. Cache entries include a SHA-256 checksum; missing or corrupt entries regenerate. Cache retention is separate from pruning obsolete public images, so deleting a release bundle does not remove the reusable cache. The cache may be deleted to reclaim space or force rendering, including after a system-font change. A new renderer or cache key requires one cold generation before later releases can reuse it.

## Publication evidence

Production publication records may contain `media_release.audio` and `media_release.video`, each with a `state`: `unavailable`, `uploaded`, `reviewing`, or `published`. Both fields must be explicit when using this representation. Published states require evidence with `kind` and `description`; record the observation date and distinguish user confirmation from independent playback verification.

This representation takes precedence over legacy `mode` and medium status fields. Legacy records continue to work with the existing conflict protection. Website synchronization never changes public platform media.

## Library maintenance

`npm run library:report -- --as-of=2026-10-03` writes JSON and Markdown reports under `reports/maintenance/`. Missing summaries/articles/sources, verification older than 90 days, and same-name company/product entries are editorial tasks. Same-name entries are review candidates, not automatic classification errors. Invalid source URLs and missing referenced entities are blockers. `--strict` exits unsuccessfully only for blockers.

External websites are not fetched by this report; syntax validation does not prove external availability. Use the report as a bounded writing queue, with source verification required before updating factual claims.

## Entity migration

`npm run entity:migrate -- brand:old product:new --kind=application` previews a move; add `--apply` to execute. If the target exists, it is a merge: its metadata and prose remain authoritative, while source aliases are retained. Original files, including displaced source prose, are backed up under `reports/maintenance/migration-*.json`.

The tool updates episode mentions, person relations, show ownership, transcript resolution/exclusion rules and prose links. Identical person relations created by a merge are deduplicated; conflicting relationship attributes stop the migration before writing. Cross-category ownership references require reconciliation instead of guessing a new relationship. Generated transcript snapshots are rebuilt using the original importer and committed source, preserving timings. Failed import or build validation restores original files. Review the diff and run release gates before publishing.

Person migrations rename host membership files together with their person references. An existing destination membership requires reconciliation. People referenced as production participants or transcript speakers cannot be migrated by this website-only tool: it reports every affected snapshot and refuses before writing. Reconcile the authoritative production identities and speaker mappings and reimport through the original importers first; generated snapshots must not be edited manually.

`src/content/entity-migrations.json` records retired identities. `npm run generate:redirects` generates both language variants, legacy/Wiki routes and slash variants before generic rules. Chains resolve directly to the final destination; cycles, duplicate sources and missing destinations fail validation. `npm run check:redirects` detects stale generated output.

## Content queries and search

Catalog loading, validation and relationship queries are separate modules. Production builds share one validated catalog promise and relation indexes. Development reloads the catalog so edits stay visible; no persistent content cache is used. Wiki API and page episode counts use the same relationship index.

`/search` and `/en/search` cover Wiki names/aliases/articles, published episode notes and published transcript paragraphs. Draft episode articles and unpublished transcripts are excluded. Paragraph results use the existing `quote-` anchors. Search normalizes case and Unicode width, requires every query term, ranks exact titles/aliases first, supports type filters, and shows results in batches of 30. Query URLs are shareable.

Indexes load only after a query, separately for each language. A failed index load can be retried. Without JavaScript, the search page links to the sitemap. Search pages are noindex and excluded from the XML sitemap; their navigation entry remains available in both languages.

## Link release gate

After building, `npm run check:links` runs the output release audit, including local HTML links and anchors, `src`/`poster`/`action` destinations, both search indexes and their paragraph anchors, and concrete redirect destinations. Missing targets fail the command. The same checks run in `check:release`, which is required by `release:check` and verified release preparation before deployment. This checks the existing `dist` output; build first after content changes.

External HTTP links are not fetched. Platform URL validation checks allowed hosts and URL syntax, not availability or playback. CSS URLs, `srcset` candidates and arbitrary JavaScript-generated addresses are not covered by this static check; browser tests provide additional coverage.

Migration targets must not be retired IDs. Redirect validation rejects an active entity occupying a retired source. Target metadata participates in reference migration; self-parent relationships and cross-category ownership conflicts stop the operation before writing.

Prose filenames must match their source entity prefix for automatic migration. An unrecognized filename stops planning before any files are written; reconcile the filename first. Anchor checks parse actual HTML `id` attributes, including character references. Comments, script text, `data-id` attributes and inert template contents do not count as document anchors.
