# Next Token design system

## Identity

Next Token is an editorial media site grounded in first-hand conversations. Its visual identity combines warm paper, ink, signal orange, a square mark, the League Spartan wordmark and documentary photography. Large display type introduces the brand; browsing and reading use a compact, quiet hierarchy.

- Official logo geometry, naming and source assets belong to the sibling `next-token` repository. Website files under `public/assets/` are delivery copies.
- The homepage brand photograph remains the original Weekly #001 recording, with its monochrome treatment, “Weekly” stamp, “AI signals / one open table” caption and “Since 2026.09.03” date. It is independent of the latest episode. The surrounding layout uses the shared layout tokens.
- Episode artwork is shown intact, in its original square aspect ratio, using responsive WebP delivery assets. Never crop, stretch, pan or apply grayscale to designed covers. Legacy photographic episodes retain their photo treatment.
- Signal orange is used for graphic accents and small square markers. Links and small accent text use the darker text token on paper and the lighter text token on inverse surfaces.
- Rectilinear composition, fine rules and consistent alignment organize the site. Buttons, inputs and the mobile menu trigger use `--control-radius: 1px`. Circular portraits and switches retain their semantic shapes. Avoid decorative enclosing grids where spacing and row dividers suffice.

## Shared architecture

- `src/styles/tokens.css` owns reusable semantic values. `typography.css` owns typography roles. `form-controls.css` owns shared input, button and native select styling. `.button` links and `.control-button` controls share the same geometry, type and primary/secondary state rules; episode actions retain their documented dark-surface variants. `tables.css` owns reusable data tables and prose-table styles. Domain stylesheets own composition.
- `global.css` contains layer order and imports only. Every stylesheet and Astro style block declares the layer order before its rules: `reset`, `tokens`, `base`, `layouts`, `components`, `utilities`, `overrides`.
- Shared role classes own font family, size and line height; components control their spacing and placement. Page-specific typography remains local only when it has a distinct semantic purpose.
- `/design-system` and `/en/design-system` are public, indexable reference pages linked from the footer's About group. Their specimens use production tokens, controls and the real episode card. Type specimens show declared rem ranges, baseline px equivalents at a 16px root, unitless leading and weights. Live fractional viewport measurements are not specification labels. Color values are read from the shared token source and displayed as six-digit HEX with opacity separate.
- `PlatformList.astro` owns platform rows; metadata owns names, destinations and availability. `PersonCard.astro` owns shared participant cards; `HostCard.astro` adds social accounts. `EpisodeCard.astro` owns episode cards. Published episodes share `EpisodeDetailPage.astro`.

### Localized page ownership

- Localized routes select a locale and resolve static paths; shared page components own markup, interaction and scoped styles. `ApiPage`, `BlogIndexPage`, `BlogEpisodeIndexPage`, `BlogEpisodePage` and `BlogArticlePage` serve both Chinese and English routes.
- `ArticleReadingLayout` owns the article header, format links, outline, prose container and footer. Blog and episode articles supply their contextual navigation, attribution and source links through named slots. `article-reading.css` scopes shared reading styles to `.episode-article-page`, including slotted content.
- Locale differences belong in content and explicit template variants. Blog filtering uses one implementation with a localized count label. Avoid copying page CSS or client scripts into language-specific routes.
- Domain components keep their own composition when geometry differs. Shared ownership does not require one universal card, a new utility-class framework or identical navigation across languages.

## Color

Standard colors are defined once; identity, category, inverse, border and overlay tokens must alias a standard token, with optional opacity. Usage specimens show the source name and a link to its definition. Public labels use the standard color plus its application or opacity, without displaying additional alias names or another color value. Color has three roles: brand accents, neutral foundations and semantic states. Paper and ink carry most of the interface. Signal is the primary brand accent; Sky is supporting color. Components use semantic tokens rather than adding local shades.

- Website color values come from `src/styles/tokens.css`; public bilingual names come from `src/data/design-colors.ts`. The design system and Brand Kit share both sources. Brand Kit metadata references tokens rather than copying names or hex values.
- Public names are 暖纸 / Warm Paper, 墨黑 / Ink Black, 信号橙 / Signal Orange, 远空蓝 / Distant Sky, 暖白 / Warm White, 纸影 / Paper Shadow, 淡墨 / Soft Ink and 暖姜 / Warm Ginger. Token identifiers describe roles and remain stable when public names change.
- Logo colors are fixed to paper, ink and base signal, matching the canonical exports. Website surface, text and display variants are purpose-specific colors, not replacements for logo colors. Interface icons inherit their control's text color; platform and partner marks retain their own asset colors.

### Brand colors

Both color families use the same three roles: base for graphics, soft for surfaces, text for readable foregrounds on light surfaces.

| Family | Base | Soft surface | Text |
| --- | --- | --- | --- |
| Signal | `--signal: #ff4b18` | `--signal-soft: #f9dfd2` | `--signal-text: #b8320d` |
| Sky | `--sky: #caddee` | `--sky-soft: #e8f1f8` | `--sky-text: #285d7a` |

- Warm Ginger (`--gold: #d7a878`) supplies a soft ginger-brown identification accent. Signal Light (`--signal-light: #ff9473`), Soft Ink Light (`--muted-light: #b7b3ac`) and Soft Ink Border (`--muted-border: #7b7770`) are standard family variants.
- Signal establishes brand recognition and selected controls. Sky supports information panels, highlighted table rows and occasional editorial graphics.
- `--signal-display: #f24816` is a contrast-adjusted variant reserved for large brand headlines on paper, with at least 3:1 contrast. It belongs to the Signal family.
- Orange and blue have distinct roles; avoid equal competing areas and small orange text on blue surfaces.

### Neutral foundations

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#f1eee5` | Page background |
| `--white` | `#fffdf6` | Input and reading surfaces |
| `--surface` | `#e8e4da` | Secondary and disabled surfaces |
| `--ink` | `#111111` | Primary text, primary actions and inverse surfaces |
| `--muted` | `#635f58` | Supporting text and metadata on light surfaces |

Border tokens follow a separate functional scale described under Units, rules and borders: content dividers, structural rules and control boundaries.

### Semantic states and pairings

- Information reuses `--sky-text`; success uses `--success: #356247`; errors use `--error: #a62d28`. Brand orange does not imply a warning. Status and selection include labels or symbols, never color alone.
- Default reading pairs paper with ink. Information panels pair Sky soft with Sky text. Inverse sections pair ink with warm white.
- Inverse sections use `#b7b3ac` for supporting text and `#ff9473` for accent text. Light-surface text tokens are not applied unchanged to inverse surfaces.

## Typography

- Brand Latin: local League Spartan Black, weight 900 only, for the wordmark, display headings and selected numerals. The font has no Chinese glyphs; Chinese display text falls back to system Chinese fonts. Official logos use outlined artwork.
- Chinese: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, Noto Sans SC, then sans-serif. The installed font and its supported weights determine rendering; no Chinese webfont is downloaded.
- English body and interface: -apple-system, BlinkMacSystemFont, Segoe UI, then the shared stack’s sans-serif fallback. Apple uses its system sans-serif; Windows uses Segoe UI where available. Chinese and English share `--sans`, with selection by glyph coverage.
- Code: ui-monospace, SFMono-Regular, Consolas, monospace. Tabular numbers in tables do not require a monospace font for all text.
- Body weight is 400, emphasis 600, headings 700 and entry headings 650; system fonts match available weights. Brand display requests 900. Mixed-script body copy uses natural spacing.
- Sizes use `rem`. The table below assumes the browser's default 16px root size; user font preferences remain supported.

| Role | Below 48rem | From 48rem |
| --- | --- | --- |
| Brand hero | Bounded fluid size, 36–64px | Bounded fluid size, 36–64px |
| Page / reading title | 30px | 40px |
| Display section | 28px | 32px |
| Content section | 24px | 28px |
| Compact section | 22px | 24px |
| Follow section | 28px | 32px |
| Entry title | 20px | 20px |
| Body | 17px | 17px |
| UI / metadata | 14px / 13px | 14px / 13px |

- All rendered H2s and `.heading-reading-title` use 1.25 line height. Body copy uses approximately 1.8–1.85. Display type retains zero letter spacing; short uppercase metadata may use positive tracking.
- H1s use their full column width, balanced natural wrapping and intentional content line breaks. Reading-width restrictions apply to prose, not titles. Do not force long brand names into a clipped line.
- Shared section sizes stop growing above the 48rem breakpoint. Featured episode titles and numbers do not exceed their enclosing section heading.
- Published episode H1s use `--type-title` through `.type-title` and numbers use `1.5rem`, with explicit `.episode-hero-title` and `.episode-hero-number` classes.

## Units, rules and borders

- Adjacent regions share one divider; only one region owns the border at their shared edge. Platform lists use `1px solid var(--line)` for both the top edge and every row divider, whether a row opens a QR code or an external destination.
- Text-link underlines include a shared `--link-underline-gap: 1px` in addition to their type-relative offset. Underline thickness and line height are independent of this gap.

- Type, spacing, padding, control dimensions and reading widths use `rem`. A root size of 16px is an example conversion, not a forced root font size. The design-system type specimens show declared rem and baseline px equivalents.
- Border thickness uses `--stroke-thin: 1px` and `--stroke-emphasis: 2px`; focus outlines use 2px with a 1px offset for buttons and form controls, and a 3px offset for ordinary links. CSS pixels are reference pixels, not necessarily physical device pixels. Page zoom still scales these lines; changing only the root font size does not change their CSS thickness.
- `em` can size text-adjacent icons and underline offsets; `%` and `fr` size fluid columns; line height stays unitless.
- `1px --line` (ink at 16%) separates table rows and secondary content. `1px --line-strong` (ink at 38%) defines headers and sections. These are decorative structure, not sufficient interactive boundaries.
- `1px --line-control` (`#7b7770`) defines input and secondary-button boundaries on paper and white. `2px --signal-text` identifies focus; 2px ink or accent rules provide deliberate emphasis. Inverse surfaces use corresponding light colors.
- Prefer solid rules and whitespace. Avoid 0.5px hairlines, ornamental dashed lines and enclosing grids without a grouping purpose.

## Tables

- `.data-table` uses 0.875rem text, 0.8125rem column headers, 1.6 line height and 0.75rem × 1rem cell padding. `.data-table--compact` reduces padding to 0.5rem × 0.75rem without reducing type or touch targets.
- Default tables have horizontal 1px rules: `--line-strong` below headers and before summaries, `--line` between data rows. There is no enclosing frame or vertical grid. `.data-table--matrix` adds vertical rules when column comparisons require them.
- Text aligns left; `.numeric` aligns numbers right with tabular figures and consistent units. Cells align at the top. Missing values use an explained dash.
- Captions name the table; headers use `scope="col"` or `scope="row"`. `.is-highlighted` pairs `--sky-soft` with a written marker, not color alone. Static rows do not show click affordances.
- Wide tables sit inside `.table-scroll`, a labelled, keyboard-focusable region with an overflow hint. Preserve column comparison through internal horizontal scrolling rather than smaller type or page overflow. Narrow relational summaries may retain their labelled stacked layout.

## Layout and density

- `.shell` has a maximum border-box width of `88rem`, centered with responsive `--gutter` padding. Header, footer, page heroes and content share the same outer edges. Do not nest padded shells.
- Full-bleed backgrounds are independent of content alignment. Home, Weekly, episode and partner hero copy and images remain inside the shared shell.
- `--section-space` is `clamp(3rem, 5vw, 5rem)`. The spacing scale is 4, 8, 12, 16, 24, 32, 48 and 64px at the default root size.
- Main reading columns target at most `46rem`; transcript composition includes speaker identity and dialogue columns. Directories prioritize compact rows with light horizontal rules and quiet metadata.
- Brand presentation, content browsing and long-form reading share foundations but use different compositions. Brand pages retain strong images; directories use filters and lists; articles pair an outline with readable prose.
- Hero and information panels grow with content. Avoid fixed minimum heights that create empty mobile panels. Square artwork containers retain their source aspect ratio.
- Footer branding is a compact signature followed by grouped navigation. The footer includes the design system and Brand Kit.

## Icons and marks

- `/design-system#icons` and `/en/design-system#icons` display current interface SVGs and platform marks. Partner identities remain on their own pages and are not part of the design-system icon library. PNG and SVG formats follow the official source assets. QR codes are content images; arrows and status characters remain text glyphs.
- `InterfaceIcon.astro` renders the search and menu icons from `src/data/interface-icons.ts`. The header and specimens share this component. Search uses a 24-unit viewBox at `1.125rem`; menu uses a 20-unit viewBox at `1.25rem`. Both have a 1.5px rendered stroke at a 16px root, flat ends and `currentColor`.
- `platformIcon()` in `src/data/platforms.mjs` resolves platform assets for both production rows and the specimen. Platform marks occupy `1.75rem` square slots with `0.65rem` text spacing and retain their aspect ratio. `platformAssets` records source, provenance category and optical size: Spotify and Apple Podcasts use `1.5rem`, WeChat Channels uses `2rem` and RedNote uses `2rem` including their built-in whitespace, and the other marks use `1.75rem`. The specimen links each asset to its source and distinguishes official deliveries from adapted official artwork. Prefer official assets; preserve brand shapes and colors. Sources and local treatments are recorded in `ASSET-LICENSES.md` and `docs/platform-icons.md`.
- Brand and partner marks preserve their full composition, backgrounds and clear space. Interface stroke rules do not apply to them. Decorative SVGs are hidden from assistive technology; the enclosing control supplies its accessible name.

## Controls and motion

- Controls use `--control-height: 2.5rem` on fine pointers and `2.75rem` on coarse pointers. Buttons may grow for wrapping labels. Primary actions use ink; secondary actions use a light surface; ordinary text links remain lightweight.
- Native selects, `.control-input`, `.control-button` and `.control-choice` share type and state rules. Pages set widths and layout. Native keyboard and mobile picker behavior remains intact.
- Inputs, selects, disclosure triggers and action buttons retain the shared 1px corner radius in resting and focused states. Their focus outline is 2px with a 1px offset.
- Input text selection uses Distant Sky with Ink Black text. The controls specimen previews the shared focus outline and provides a button that focuses and selects the input contents.
- Error borders remain visible during hover and focus. Focus uses an explicit offset outline. Disabled controls retain readable labels; errors include explanatory text. Inline prose links are underlined. Active navigation uses an underline; selected filters expose `aria-pressed`.
- Search shortcuts reveal and focus the search input below the sticky header without losing the query. Mobile navigation supports Escape, outside-click dismissal and native details semantics.
- Color and border transitions are brief. Reduced-motion preferences disable animation. The permanent brand photograph retains conditional panning.
- The document remains the native scroll container. `overscroll-behavior-y: none` suppresses boundary bounce where supported; wheel, touch, keyboard, zoom and hash navigation remain native.

## Content-specific rules

- The public system has ten sections: identity, typography, color, layout, rules and layers, tables, icons, controls, reading and composition examples. A production episode card is a composition example of the established primitives; page-type links and dedicated feature walkthroughs are not separate specification chapters.
- The Color section contains standard swatches, variants, semantic states and light/dark pairing examples. `DesignSystemColorUse.astro` renders source references within the relevant specimens: identity, categories, highlights and notes in `DesignSystemAnnotations.astro`; borders in Rules and layers; menus, popovers and scrims in `DesignSystemLayers.astro`; switches in `DesignSystemControlStates.astro`. Usage roles are not presented as additional palettes.
- `tokens.css` defines `--identity-*`, `--highlight-*`, `--annotation-surface`, `--note-surface` and `--switch-track`. Production transcripts reference these tokens; they do not own a parallel palette. Body text uses `--ink` and `--type-body` on all screens.
- Identity mapping uses standard-color aliases: Yang Pan → Distant Sky (`--sky`); Guizang → Warm Ginger (`--gold`); Orange → Signal Orange (`--signal`); Xiangyang Qiaomu → Ink Black (`--ink`); unassigned → Soft Ink (`--muted`). Names remain Ink Black; identity marks retain distinct colors.
- Category aliases map brand → Warm Ginger, product/show → Distant Sky Text, person → Signal Orange Text. `content-markers.css` uses 8% / 16% opacity for normal / keyboard focus, and 22% / 30% in emphasis mode. Labels and destinations also identify categories. Keyboard focus adds an underline and outline.
- Search matches and navigation targets share `--signal-soft`. Matches use `0.125em 0.2em` padding with cloned decoration at line breaks. Targets extend their background by `0.375rem` without changing layout, with a 2px Signal Orange outline another 3px outside. Production transcripts and design specimens share these rules. Highlighted annotations reuse `--sky-soft`; ordinary notes reuse `--surface`. Semantic aliases reference existing colors rather than defining additional shades.
- Annotation blocks use 4px side rules; identity markers use 2px. Color labels consistently use six-digit HEX; transparent overlays append a separate opacity percentage, never raw RGB channel tuples or RGBA expressions. Highlight and annotation colors are defined in the Color section and referenced by the Reading examples.

- Published episode order is hero, production facts and Show Notes, mentions, participants, then platforms. Audio/video availability and content length do not change this sequence. `detailLayout: true` allows release preparation without asserting publication.
- Show Notes retain opening context, questions, timeline, references, people/products/terms and credits. Generated chapter markers remain authoritative; no page-only shortened timeline.
- Latest episode links and cards derive from metadata, ordered by descending episode number. Announcements remain separate. Transcript availability is localized and independent of audio/video availability; an older transcript link shows its own episode number.
- Cover links include visible date and media label in their accessible names. Delivery assets use 480, 720, 960, 1440 and 1920-width WebP variants with truthful `srcset` descriptors and responsive `sizes`.
- Wiki directories share the primary entity switch. Filters use actual taxonomy categories and the `type` query parameter. Narrow screens scroll filters within the shell.
- Wiki identity panels are 10rem high on desktop and 9rem below 760px.
- `WikiDetailHeader.astro`, `WikiIdentityCard.astro` and `wiki-detail.css` own the shared Wiki header, identity card and support-section geometry. Hero, reading and supporting sections each have their own shell. Sidebars and main content align across sections.
- Wiki article FAQs remain expanded. Aliases are visible. Article-updated and fact-verification dates remain distinct, quiet metadata. Supporting relationships use grouped rows without decorative inner boxes.
- Transcripts use editorial paragraphs with small circular speaker portraits and stable per-speaker accents defined by the transcript presentation configuration. Candidate attribution remains visible with one header explanation. Narration has quieter typography. The chapter outline opens by default.
- Profile account order is Podcast, X, GitHub, Jike, WeChat official account, WeChat Channels, RedNote, Weibo, LinkedIn. Accounts without URLs show search guidance, never invented links.
- HTML sitemap episode titles come from localized hero content, with the number once as metadata. Episode and transcript links remain paired on wide screens.

## Shared primitive details

- Small-text sizes share tokens: captions 12px, metadata 13px, interface 14px, short copy 16px, body 17px and minor headings 18px at a 16px root. Public type metrics derive from the CSS token values; poster lettering and decorative numerals may scale with their containers.
- Inverse compositions use shared supporting text and three border roles (`--inverse-line`, `--inverse-line-strong`, `--inverse-line-control`). Navigation surfaces, image scrims and overlay shadows are documented under Rules and layers and reference standard colors. Component CSS references color tokens instead of declaring local literal colors.
- Blockquotes in Wiki, articles and the Reading specimen share 2px Signal Orange rules, paper backgrounds and 1rem × 1.5rem padding. Transcript annotation blocks share the standard annotation colors and 4px rule treatment.
- `.control-switch` and `.control-switch-track` provide the same switch geometry, state and touch target in production and specimens. Inactive tracks use Ink Black at 18%; active tracks use Signal Orange Text. Circular switch tracks are an explicit shape exception.
- `reading-links.css` shares prose link rendering between Wiki, articles, ordinary transcript links and the Reading specimen: 1px dashed structural-color underlines at `0.3em + 1px`, Signal Orange surface on hover/focus, no layout shift.

## Validation

- `npm run lint:styles` enforces token-owned colors, layers, rem typography, shared heading ownership, H2 leading and no layout/typography `!important`.
- `npm run check` validates content contracts, styles, types and metadata. `npm run build` verifies the static output.
- `npm run test:visual` covers real bilingual templates at 390, 768, 1280, 1440, 1920 and 2560 CSS pixels. Design contracts additionally cover 1210×887 and short desktop 1280×720.
- Validate shell alignment, page overflow, horizontal and vertical heading clipping, reading/H2 line height, semantic type scales, intact artwork, keyboard controls and mobile navigation. Scrollable containers remain valid within their bounds.
- Screenshot baselines reflect the inspected design. Update them only for intentional, visually reviewed changes.
