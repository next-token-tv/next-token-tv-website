# URL conventions

- Public page URLs do not end with `/`. The site root `/` is the only exception.
- Query strings and fragments attach directly to the slashless path, such as `/weekly/001/transcript#chapter-01`.
- File endpoints keep their extensions, including `.md`, `.txt`, `.json`, and `.xml`.
- Canonical, alternate-language, Open Graph, structured-data, sitemap, `llms.txt`, Markdown, and public API URLs follow the same rule.
- `src/data/internal-url.ts` owns URL normalization. Source links use slashless URLs directly; Astro middleware normalizes rendered text responses. The release check rejects trailing slashes in maintained source URLs, documentation, redirect destinations and published internal URLs.
- Cloudflare Workers Static Assets uses `drop-trailing-slash`, so legacy requests with a trailing slash redirect to the canonical slashless URL.
