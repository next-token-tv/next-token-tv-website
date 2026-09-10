# Transcript entity links

- Brand, product, person and show YAML names and aliases form the deterministic matching dictionary. The importer does not call an AI model to decide links.
- Matching uses literal strings, English word boundaries, earliest occurrence and longest-name precedence. Dots and other punctuation in names are literal, not regular-expression syntax. A rejected substring does not prevent matching later valid occurrences.
- Every eligible entity occurrence in body text is linked, including repetitions in the same paragraph and chapter. Existing Markdown links and inline code are preserved. Automatic links apply to body text, not speaker labels or chapter headings. Report `chapterCount` remains the number of distinct chapters mentioning an entity, not its link count.
- Names must be present in the catalog or episode-specific `scopedAliases`. Ambiguous aliases require an explicit `resolutions` entry. Factual identity and classification are editorial decisions; the program must not invent entities from unfamiliar capitalized words.
- Co-host membership excludes that show's hosts from automatic person links. Membership and episode participant records are not removed.
- Every conversion rejects eligible known entities left in plain text. Regression tests cover longest names, punctuation, word boundaries, excluded hosts, aliases, repeated links, distinct-chapter reporting and required Weekly #001 entities.
- Entity links retain the body text color with a very pale background: warm amber for brands, blue for products (including models), and lavender for people. Inline backgrounds use 0.1875rem vertical and 0.25rem horizontal padding, a 0.25rem corner radius, and cloned decoration across wrapped lines; vertical padding does not increase the line box. A legend and Highlight switch appear below transcript search. The switch defaults off: background opacity is 8% (16% on keyboard focus); when enabled it is 22% (30% on keyboard focus). Hover changes only the cursor, without an underline or background change. Keyboard focus retains the global outline and a fine matching underline. External links retain their separate treatment.
- `unlinkedCandidates` is a discovery heuristic, not a claim that every candidate is an entity. It can include generic terms, incomplete names and transcription errors.
- The standalone Mac umbrella entry is excluded from this site's product catalog. Mac mini, Mac Studio and macOS retain their own records.
- OpenAI API is not a separate product record. The OpenAI name in that phrase links to the OpenAI brand while the visible API suffix is preserved.
- `Luna` maps to GPT-5.6 Luna and `K3` to Kimi K3. Qwen 3.8 Max 0902 is a distinct snapshot product whose parent is Qwen 3.8 Max, not an alias of the parent.
- Model entries are products with `kind: model`; model families and publisher brands remain separate records. `H3` maps to MiniMax H3; `Astra` maps to GPT-6 Astra in Weekly #001's catalog.
- Published transcript corrections belong in the approved content-repository Markdown and its release manifest. Website imported JSON is regenerated with `npm run import:transcript`, never edited by hand.

Show links use the show entry’s `pagePath`; Next Token Weekly links to `/weekly/`.
