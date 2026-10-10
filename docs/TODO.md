# TODO

- [x] Add the 36 English blog editions, including titles, summaries and article bodies.
- [x] Add English blog routes with reciprocal language switching and language metadata.
- [x] Include English articles in the English search index and `/en/blog/rss.xml`.
- [x] Translate the Data API documentation page and add `/en/api` with language switching.
- [x] Provide English transcripts for episodes 001–005. Current transcript sources and paragraph links are Chinese only.
- [x] Review English blog translations for editorial quality; route and publication checks do not establish translation accuracy.

Notes (2026-10-10):

- English transcripts live in `src/content/imported/transcripts/next-token-weekly--00N.en.json`. They are paragraph-aligned translations of the committed Chinese transcript sources: provenance, `timingSource`, and paragraph timings are unchanged. Anchor IDs hash speaker and text, so the English transcript pages reuse the Chinese anchors via the `anchorIds` prop — deep links from any locale resolve on both pages. The zh and en transcript pages cross-link via hreflang.
- English blog `Sources` links point at `/en/weekly/NNN/transcript`; Chinese posts keep pointing at `/weekly/NNN/transcript`.
- Translation review found and fixed wording and certainty-level issues (e.g. overstated assertions, mistranslated terms); the passage-level spots flagged as transcription noise in the source (muted words `__`, broken sentences) were translated literally and may deserve a human pass.
