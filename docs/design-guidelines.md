# Website Design Guidelines

## CSS architecture

- Shared design values live in `src/styles/tokens.css`; shared typography roles live in `src/styles/typography.css`; page and component composition remains in `src/styles/global.css` or the owning Astro component.
- The cascade order is `reset`, `tokens`, `base`, `layouts`, `components`, `utilities`, then `overrides`. Shared role classes own their font family, size, and line height; component styles may control layout and spacing but must not redefine those properties.
- Promote a value to a global token only when the same semantic role occurs across page templates. Keep genuinely page-specific display treatments scoped to their owning page.
- Homepage, show, and episode viewing-platform lists share `PlatformList.astro`, including numbered rows, colored logos, localized actions, and unavailable states. Platform metadata remains the source of names, destinations, and actions; pages control the surrounding section layout.
- Homepage, show, and episode participant cards share `PersonCard.astro`. Portrait and name link to the same localized person profile; page composition controls spacing and supplies either the biography or episode role. `HostCard.astro` adds homepage social accounts through the shared card slot.
- `/design-system/` and `/en/design-system/` are non-indexed reference pages for inspecting shared typography, color, and spacing tokens. They are not part of public navigation or the sitemap.

## Content width and alignment

- Shared page containers use `.shell` with `--site-max-width: 100rem`, including responsive inline padding from `--gutter`. Containers are centered; the maximum width includes padding.
- Navigation, homepage section headings, card grids, subscription content, and footer content share the same outer content edges in both languages. Internal columns and readable prose may be narrower.
- Full-width backgrounds are independent of content width. The homepage Weekly section wraps its content in `.shell`; its background and the topic rail remain full bleed. Do not nest padded shells or add a second inline gutter to their parents.
- The homepage hero uses the same shell: text aligns with its left content edge and the photograph ends at its right content edge. Neither column bleeds beyond the shared content area.
- The Weekly landing-page and episode-announcement heroes follow the same rule: their two-column blocks use `.shell`, and neither column extends beyond the shared desktop content area. At stacked breakpoints, a background panel may reach the shell edge while its text retains the shared gutter.
- Published episode heroes use `.episode-detail-hero-inner.shell` for both image and copy; only the outer dark background spans the viewport.
- On wide desktop screens, the Weekly landing hero stays within the first viewport below the header. Its vertical poster lettering scales with viewport height so it cannot force the hero taller; the copy H1 remains the dominant element in the left column.
- The episode-announcement venue and map block also uses `.shell`. Preserve its two-column composition: the partner logo remains in the left panel, while the venue copy, actions, and embedded map stay together in the right panel. The full block shares the same outer edges as the announcement details and participant grid.
- Display type inside a constrained hero column scales against that column, not the viewport. Changing a hero's container width requires checking every large display element for added wrapping or overflow.
- Hero H1 sizing follows the available text column rather than the viewport: `clamp(3rem, 14cqi, 6rem)`. This prevents oversized headings after the layout reaches its maximum width. Other heading sizes remain unchanged.
- Validate alignment and overflow at 390, 768, 1280, 1440, 1920, and 2560 CSS pixels. Background edges need not match content edges; navigation, section content, and footer content must align.
- Brand and product directory heroes, directory rows, detail heroes, fact grids, related entities, and related episodes all use `.shell`. Their internal column ratios may differ, but their outer edges align with the header and footer.
- Brand/product is the primary library switch. The secondary filter row uses the entity `kind` taxonomy, displays only categories present in the current collection, and keeps the active category in the `type` query parameter. On narrow screens the filter row scrolls horizontally inside the shell without causing page overflow.
- Brand and product detail heroes use an editorial identity panel: the entity class is the dominant graphic element, while the name, summary, and aliases remain readable content. Verification dates are provenance metadata, shown as one quiet line beneath the official links rather than as a primary fact card.
- Full-episode transcripts use a compact long-form editorial layout rather than chat bubbles. The article header and chapter headings use blog-scale typography so the first viewport reaches the table of contents and transcript body; the title should take the available horizontal space before wrapping, and the table of contents is open by default. Speaker portraits are 1.5–1.75rem circles with one subtle light-gray ring and no white inner ring or shadow. Speaker names and turn rules use stable accents sampled from their grid portraits: Yangpan sky blue (`#318fbd`), Guizang ochre (`#a96a00`), Orange orange (`#f06a31`), and Xiangyang Qiaomu deep black (`#171717`). Candidate attribution markers remain visible beside the name with one concise explanation in the article header; do not repeat that explanation beside the table of contents. Narration uses a quieter size than participant dialogue.

## Section heading scale and line height

- Large repeated editorial sections use `.heading-section-display`: `3.1rem` below `48rem`, `4.25rem` from `48rem`, and `5.25rem` from `80rem`.
- Repeated content sections use `.heading-section-content`: `2.25rem` below `48rem`, `2.65rem` from `48rem`, and `3rem` from `80rem`. This role includes episode mentions, participants, viewing platforms, entity facts, entity links, and related episodes.
- Repeated compact sections use `.heading-section-compact`: `1.8rem` below `48rem`, `2.15rem` from `48rem`, and `2.5rem` from `80rem`. This role includes profile details and Brand Kit sections.
- Shared section headings use discrete responsive steps and remain fixed between breakpoints. They stop growing after the `80rem` desktop breakpoint, regardless of viewport width.
- Featured-episode cards on the homepage and Weekly landing page use the content-section size for both the episode number and episode title. Neither element may exceed the corresponding section H2 at any breakpoint.
- Published episode hero H1 titles use the page-scoped `--episode-title-size` (2.65 / 3.25 / 3.75rem at the shared 48rem and 80rem breakpoints). The episode number uses the page-scoped `--episode-number-size` (2.5 / 3 / 3.5rem), slightly smaller than the H1. Both stop growing between breakpoints; preserve H1 headline leading and use 1 for the number.
- Published episode titles explicitly use `.episode-hero-title`; episode numbers use `.episode-hero-number`. These semantic classes own their styles, rather than tag or child selectors. Their responsive variables are scoped to `.episode-detail-hero-copy`.
- Page-specific display headings remain local to their page template. The Weekly landing page uses `--weekly-display-heading-size: clamp(2.75rem, 4.5vw, 4.75rem)` for its large editorial statements.
- Card titles, transcript chapter titles, article subheadings, and large display slogans are separate typographic roles. Keep a page-only role in its component; promote it to a shared token only when the same semantic role appears across page templates.
- Typography tokens and breakpoints use `rem`. Do not define font sizes in `px`; genuinely fluid, page-specific display treatments may use viewport- or container-relative units inside bounded `clamp()` values.
- All H2 section headings use `--section-heading-leading: 1.25`, defined in `src/styles/tokens.css` and applied by the base typography layer.
- This rule applies to both languages, all page templates, and all viewport sizes. Component styles and media queries must not override H2 line height.
- Explicit line breaks follow the same line-height rule. Do not simulate line spacing with margins, padding, or empty lines between title fragments.
- Eyebrow-to-heading spacing is separate from heading line height and must leave visible whitespace.
- H1, H3, body text, and compact labels retain their own typography rules; consistency means shared rules for equivalent roles, not one line height for every text element.

## Validation

- Check every rendered H2 on Chinese and English pages at desktop, tablet, and mobile widths. Its computed line height divided by font size must equal 1.25 (allowing browser rounding).
- At the same viewport width, headings within each shared role must resolve to the same computed font size.
- Shared role sizes must match their documented breakpoint values and remain unchanged above the desktop breakpoint.
- Featured-episode numbers and titles must be no larger than their enclosing section H2 on both the homepage and Weekly landing page.
- Inspect multiline headings visually for readable spacing, unintended word breaks, clipping, and overlap with adjacent content.
- `npm run lint:styles` rejects pixel-based font sizes. `npm run check` includes this rule.
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
