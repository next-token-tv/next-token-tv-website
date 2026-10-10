# Episode articles

- Chinese article source: `src/content/prose/episode-articles/<episode-id>.zh-Hans.md`. This is the single source for the HTML page and Markdown export; do not maintain a second copy.
- Routes: `/weekly/NNN/article` and `/weekly/NNN/article.md`. Internal links have no trailing slash. Markdown responses use UTF-8 headers and the shared middleware's UTF-8 BOM.
- `episode`, `locale`, `title`, `description`, `status`, and `updatedAt` are required metadata. `publishedAt` is also required when `status` is `published`. One article per episode and locale is allowed.
- Draft articles and their links exist only in Astro development mode and have `noindex`. Production builds omit draft HTML, Markdown, and entry links. Publishing requires editorial approval and a published episode and transcript, followed by a rebuild. Article status is independent of transcript status.
- The first sample is 003 in Chinese. English article routes are not available yet; do not add English article records until localized routes exist.
- The episode and transcript pages expose an article link only when an article is available. Articles link back to both formats and expose their Markdown alternative in the page head.
- Article titles preserve the episode title's meaning and its separate topics. Do not invent a unifying thesis or causal relationship between unrelated topics.
- Articles use third-person editorial prose about the subjects themselves, not a meeting recap or repeated speaker-by-speaker narration. Names are retained only when attribution is necessary, such as a direct quote or a personal claim whose identity matters. Concrete examples, disagreements, and uncertainty remain intact; anonymous personal examples must still be identified as individual experiences, not general findings.
- Articles do not represent independent verification of claims made during the recording. Do not turn predictions, reported examples, or incomplete experiments into established facts.
- Use stable transcript paragraph anchors for key claims and quotes. Add selected Wiki links where they help understanding. HTML retains inline links; the Markdown export removes inline links and collects deduplicated, absolute reference URLs at the end.
- The page uses `.article-title`, `.article-outline`, `.episode-article-prose`, and `.article-actions` for its typography and layout. Sizes use rem and fixed breakpoints; H2 inherits the shared 1.25 line height. The reading column is capped at 46rem. Mobile outlines flow above the article; desktop outlines are sticky.
