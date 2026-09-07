# Brand Kit

- Public routes: `/brand-kit/` and `/en/brand-kit/`, linked from the shared footer.
- Logo and visual-identity source authority: `../next-token/assets/brand/README.md` and its `exports/` directory.
- Naming authority: `../next-token/docs/brand/naming.zh-Hans.md`.
- `public/assets/brand-kit/` contains byte-for-byte delivery copies of the six official logo exports, not editable sources.
- Structured delivery metadata: `src/content/data/brand-kits/next-token.yaml`. Its `brand` field references the `next-token` brand entry.
- Localized usage guidance: `src/content/prose/brands/next-token.brand-kit.{zh-Hans,en}.md`.
- Reusable introductions: `src/content/brand-copy/`, validated by the `brandCopy` collection. Each language has one-line, short, and detailed copy for both the `next-token` brand and the `next-token-weekly` show. Entity IDs reference the existing catalog.
- Copy is based on the sibling naming guide and the website show metadata and overview. The site hosts the reusable copy; the Logo/VI source authority is unchanged.
- Copy bodies contain public-facing introductions only. Naming instructions and usage guidance remain outside the copied text. Displayed program URLs in copy omit the trailing slash; route canonical URLs are unchanged.
- The page presents logo downloads first, reusable copy second, then naming, colors, typography, and usage guidance. The introduction links directly to both downloads and copy. Logo delivery formats share one preview instead of repeating large previews.
- Usage labels are suggestions, not platform-specific character limits. Character counts include spaces, punctuation, and paragraph breaks. Copy buttons copy only the introduction body, preserving paragraphs; if clipboard access fails, the text is selected for manual copying.
- The page does not distribute historical logo candidates or font binaries.
- When canonical exports or naming rules change, the delivery copies, YAML, and both language guides must remain consistent with those sources.
