# Visual regression

The website separates layout references from current publication state. Both use the production components and styles; tests do not replace text in the browser, mask dynamic regions, or relax screenshot tolerances.

| Coverage | Input | Assertion |
| --- | --- | --- |
| Real routes in `layout.spec.ts` | Current website build | Shell alignment, overflow and H2 geometry at 390, 768, 1280, 1440, 1920 and 2560 px; existing screenshots for non-dynamic heroes |
| Home / Weekly heroes in `hero-layout.spec.ts` | Frozen `fixtures/hero-content.ts` | 16 snapshots: Chinese / English × home / Weekly × mobile / wide × preview present / absent |
| Real routes in `episode-state.spec.ts` | Current episode YAML and published transcript imports | Latest episode number, title and destination; locale-specific transcript destination; preview visibility and destination; fixture routes absent from the production server |

The fixed heroes use episode 006, the Chinese 006 / English 005 transcript links, and the episode 007 announcement in post-production. The fixed title, media flags and announcement metadata live in the fixture, independent of future episode publication. Historical episode 006 data supplies the rest of the page outside the captured hero. Brand copy, shared components, styles and assets stay live so their changes remain detectable.

`scripts/run-visual-fixtures.mjs` builds with `tests/visual/astro.config.mjs` into `.cache/visual-fixtures/dist`, then serves that output on loopback. It does not change the normal `dist` or use a developer's running Astro server. The normal Astro configuration does not include fixture routes. Fixtures carry `noindex` and use production rendering semantics, without hot reload or the development toolbar.

## Run and review

```bash
# Builds the real site, then runs all browser tests with both local servers.
npm run test:visual

# Focus on fixed layout and current publication behavior.
npm run test:visual -- tests/visual/hero-layout.spec.ts tests/visual/episode-state.spec.ts

# Only after inspecting the intended change, update the fixed hero references.
npm run test:visual -- tests/visual/hero-layout.spec.ts --update-snapshots=all
```

`PLAYWRIGHT_PORT` selects the production preview port (default 4176). `PLAYWRIGHT_FIXTURE_PORT` selects the isolated fixture preview port (default 4177); choose distinct unused ports. `PLAYWRIGHT_USE_EXISTING_SERVER=1` reuses only the explicitly prepared production preview. The test fixture server is still built and managed by Playwright. `PLAYWRIGHT_SKIP_BUILD=1` reuses a prepared production build, including during the release gate; it does not skip the fixture build. Run commands involving Wrangler outside the sandbox.

Publishing a new episode updates the behavior assertions through metadata and leaves the fixed hero inputs unchanged. Review failures in real geometry or destinations directly; do not move the fixed episode forward to make them pass. Changes to a fixed input or shared design require inspecting the actual, expected and difference images before updating the relevant baseline.

The eight existing `home`, `en`, `weekly` and `en-weekly` mobile/wide PNGs under `layout.spec.ts-snapshots/` are historical references and remain preserved. Those real routes retain geometry checks but no longer compare publication-dependent hero text to these old files. New references live under `hero-layout.spec.ts-snapshots/`. Existing approved visual versions are not deleted or overwritten by this transition.
