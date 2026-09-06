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

## Profile account order

- Homepage cards and profile pages share the same account ordering: Podcast, X, GitHub, Jike, WeChat official account, WeChat Channels, RedNote, Weibo, LinkedIn. Omit platforms without account data.
- Accounts without a supplied URL display their names and an in-app search hint, not a fabricated link. WeChat official accounts and Channels use the WeChat search hint.
