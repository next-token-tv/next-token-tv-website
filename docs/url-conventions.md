# URL conventions

- Public page URLs do not end with `/`. The site root `/` is the only exception.
- Query strings and fragments attach directly to the slashless path, such as `/weekly/001/transcript#chapter-01`.
- File endpoints keep their extensions, including `.md`, `.txt`, `.json`, and `.xml`.
- Canonical, alternate-language, Open Graph, structured-data, sitemap, `llms.txt`, Markdown, and public API URLs follow the same rule.
- `src/data/internal-url.ts` owns URL normalization. Source links use slashless URLs directly; Astro middleware normalizes rendered text responses. The release check rejects trailing slashes in maintained source URLs, documentation, redirect destinations and published internal URLs.
- Cloudflare Workers Static Assets uses `drop-trailing-slash`, so page requests with a trailing slash redirect to the canonical slashless URL. `npm run preview` and browser tests use the same static-asset router.

## Markdown canonical

- Successful known Markdown exports (`/blog/<slug>.md`, `/weekly/<number>/transcript.md`, `/weekly/<number>/article.md`, and their existing `/en` counterparts) carry `Link: <https://nexttoken.tv/<matching-html-path>>; rel="canonical"`. The target is absolute, retains the language prefix and excludes query parameters.
- `worker/index.js` adds the hint to 200 responses with a Markdown MIME type. Missing pages, redirects, unrelated exports and non-Markdown responses retain their original behavior. Conditional 304 responses retain asset-router behavior; the canonical accompanies the full representation.
- Existing `describedby` links, content types, cache validators and bodies are preserved. `describedby` and links in Markdown prose do not replace the canonical relation.
- Response-header verification uses the actual local Worker or the production domain. A generic static file server does not exercise this contract.
