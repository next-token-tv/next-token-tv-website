# Website Design Guidelines

## Heading line height

- All H2 section headings use `--section-heading-leading: 1.25`, defined in `src/styles/global.css` and applied by the global `h2` rule.
- This rule applies to both languages, all page templates, and all viewport sizes. Component styles and media queries must not override H2 line height.
- Explicit line breaks follow the same line-height rule. Do not simulate line spacing with margins, padding, or empty lines between title fragments.
- Eyebrow-to-heading spacing is separate from heading line height and must leave visible whitespace.
- H1, H3, body text, and compact labels retain their own typography rules; consistency means shared rules for equivalent roles, not one line height for every text element.

## Validation

- Check every rendered H2 on Chinese and English pages at desktop, tablet, and mobile widths. Its computed line height divided by font size must equal 1.25 (allowing browser rounding).
- Inspect multiline headings visually for readable spacing, unintended word breaks, clipping, and overlap with adjacent content.

## Display typography and letter spacing

- League Spartan display text uses `--display-tracking: 0em`. H1, H2, and H3 inherit this shared rule; other display labels, wordmarks, captions, and numerals reference the same token.
- The rule applies in both locales, including English words inside Chinese or mixed-language headings. Do not reintroduce per-page negative tracking to fit a title into a column.
- Preserve the display font, font sizes, and heading line heights. Let headings wrap at word boundaries; adjust available layout space when an intentionally unbroken brand name needs more room.
- Body copy, navigation, and non-display fact labels retain their own typography rules. Intentional positive tracking for eyebrows, tickers, and compact metadata labels is independent of display tracking.
- Validate Chinese and English pages at mobile, tablet, and desktop widths. Headings and display text using the shared token must have zero computed tracking; H2 leading remains 1.25. Check glyph separation visually as well as overflow, including the shared footer and mixed-language profile names.

## Profile account order

- Homepage cards and profile pages share the same account ordering: Podcast, X, GitHub, Jike, WeChat official account, WeChat Channels, RedNote, Weibo, LinkedIn. Omit platforms without account data.
- Accounts without a supplied URL display their names and an in-app search hint, not a fabricated link. WeChat official accounts and Channels use the WeChat search hint.
