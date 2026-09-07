# Website Design Guidelines

## Content width and alignment

- Shared page containers use `.shell` with `--site-max-width: 1600px`, including responsive inline padding from `--gutter`. Containers are centered; the maximum width includes padding.
- Navigation, homepage section headings, card grids, subscription content, and footer content share the same outer content edges in both languages. Internal columns and readable prose may be narrower.
- Full-width backgrounds are independent of content width. The homepage Weekly section wraps its content in `.shell`; its background and the topic rail remain full bleed. Do not nest padded shells or add a second inline gutter to their parents.
- The homepage hero uses the same shell: text aligns with its left content edge and the photograph ends at its right content edge. Neither column bleeds beyond the shared content area.
- The Weekly landing-page and episode-announcement heroes follow the same rule: their two-column blocks use `.shell`, and neither column extends beyond the shared desktop content area. At stacked breakpoints, a background panel may reach the shell edge while its text retains the shared gutter.
- On wide desktop screens, the Weekly landing hero stays within the first viewport below the header. Its vertical poster lettering scales with viewport height so it cannot force the hero taller; the copy H1 remains the dominant element in the left column.
- The episode-announcement venue and map block also uses `.shell`. Preserve its two-column composition: the partner logo remains in the left panel, while the venue copy, actions, and embedded map stay together in the right panel. The full block shares the same outer edges as the announcement details and participant grid.
- Display type inside a constrained hero column scales against that column, not the viewport. Changing a hero's container width requires checking every large display element for added wrapping or overflow.
- Hero H1 sizing follows the available text column rather than the viewport: `clamp(3rem, 14cqi, 6rem)`. This prevents oversized headings after the layout reaches its maximum width. Other heading sizes remain unchanged.
- Validate alignment and overflow at 390, 768, 1280, 1440, 1920, and 2560 CSS pixels. Background edges need not match content edges; navigation, section content, and footer content must align.
- Brand and product directory heroes, directory rows, detail heroes, fact grids, related entities, and related episodes all use `.shell`. Their internal column ratios may differ, but their outer edges align with the header and footer.
- Brand/product is the primary library switch. The secondary filter row uses the entity `kind` taxonomy, displays only categories present in the current collection, and keeps the active category in the `type` query parameter. On narrow screens the filter row scrolls horizontally inside the shell without causing page overflow.
- Brand and product detail heroes use an editorial identity panel: the entity class is the dominant graphic element, while the name, summary, and aliases remain readable content. Verification dates are provenance metadata, shown as one quiet line beneath the official links rather than as a primary fact card.
- Full-episode transcripts use a compact long-form editorial layout rather than chat bubbles. The article header and chapter headings use blog-scale typography so the first viewport reaches the table of contents and transcript body; the title should take the available horizontal space before wrapping, and the table of contents is open by default. Speaker portraits are 24–28 px circles with one subtle light-gray ring and no white inner ring or shadow. Speaker names and turn rules use stable accents sampled from their grid portraits: Yangpan sky blue (`#318fbd`), Guizang ochre (`#a96a00`), Orange orange (`#f06a31`), and Xiangyang Qiaomu deep black (`#171717`). Candidate attribution markers remain visible beside the name with one concise explanation in the article header; do not repeat that explanation beside the table of contents. Narration uses a quieter size than participant dialogue.

## Heading line height

- All H2 section headings use `--section-heading-leading: 1.25`, defined in `src/styles/global.css` and applied by the global `h2` rule.
- This rule applies to both languages, all page templates, and all viewport sizes. Component styles and media queries must not override H2 line height.
- Explicit line breaks follow the same line-height rule. Do not simulate line spacing with margins, padding, or empty lines between title fragments.
- Eyebrow-to-heading spacing is separate from heading line height and must leave visible whitespace.
- H1, H3, body text, and compact labels retain their own typography rules; consistency means shared rules for equivalent roles, not one line height for every text element.

## Validation

- Check every rendered H2 on Chinese and English pages at desktop, tablet, and mobile widths. Its computed line height divided by font size must equal 1.25 (allowing browser rounding).
- Inspect multiline headings visually for readable spacing, unintended word breaks, clipping, and overlap with adjacent content.
- `npm run test:visual` is the required geometry and screenshot regression check. It covers Chinese and English pages at 390, 768, 1280, 1440, 1920, and 2560 CSS pixels; screenshot baselines are stored for mobile and wide layouts.
- Snapshot baselines represent an approved visual outcome. Update them only when the rendered change is intentional and has been inspected.

## Display typography and letter spacing

- League Spartan display text uses `--display-tracking: 0em`. H1, H2, and H3 inherit this shared rule; other display labels, wordmarks, captions, and numerals reference the same token.
- The rule applies in both locales, including English words inside Chinese or mixed-language headings. Do not reintroduce per-page negative tracking to fit a title into a column.
- Preserve the display font, font sizes, and heading line heights. Let headings wrap at word boundaries; adjust available layout space when an intentionally unbroken brand name needs more room.
- Body copy, navigation, and non-display fact labels retain their own typography rules. Intentional positive tracking for eyebrows, tickers, and compact metadata labels is independent of display tracking.
- Validate Chinese and English pages at mobile, tablet, and desktop widths. Headings and display text using the shared token must have zero computed tracking; H2 leading remains 1.25. Check glyph separation visually as well as overflow, including the shared footer and mixed-language profile names.

## Compact captions and separators

- Recording captions may wrap between the recording date and the combined partner-and-venue label. Keep the complete partner-and-venue label together, without splitting its words. Preserve the visual headline's existing line breaks and side-by-side caption layout on desktop.
- At 1001–1300px, the English hero caption stacks below the visual headline so the complete venue label is not clipped. Chinese and wider desktop layouts retain the side-by-side arrangement.
- Topic-rail separators are CSS squares centered by flex alignment, not font glyphs whose baselines vary between Chinese and Latin fonts.
- Topic-rail labels preserve the display font and its Chinese fallback. Apply the optical adjustment only to the inner `.rail-label` text (`translateY(0.08em)`); the outer item, separator, and rail geometry remain unchanged.

## Profile account order

- Homepage cards and profile pages share the same account ordering: Podcast, X, GitHub, Jike, WeChat official account, WeChat Channels, RedNote, Weibo, LinkedIn. Omit platforms without account data.
- Accounts without a supplied URL display their names and an in-app search hint, not a fabricated link. WeChat official accounts and Channels use the WeChat search hint.
