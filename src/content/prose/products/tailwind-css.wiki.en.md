---
entityType: product
entity: tailwind-css
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Tailwind CSS: the utility-first CSS framework | Next Token Wiki'
seoDescription: 'Learn what Tailwind CSS is: how the utility-first approach works, how it differs from Bootstrap, its open-source license, and FAQs.'
---

## Tailwind CSS

Tailwind CSS is an open-source, utility-first CSS framework. Instead of offering predefined component classes for buttons or tables, it provides a large set of single-purpose utility classes (such as `flex`, `pt-4`, and `text-center`) that developers compose directly in their HTML markup to build designs. The project is developed by Tailwind Labs; its original authors are Adam Wathan, Jonathan Reinink, David Hemphill, and Steve Schoger, and version 1.0 was released on May 13, 2019.

## How it works and where it fits

Tailwind breaks styling into fine-grained utilities: responsive breakpoints, dark mode, and state variants (hover, focus, and more) are expressed as prefixes on class names. Design consistency is constrained through configuration — design tokens for colors, spacing, and fonts. This approach suits teams that build interfaces directly in HTML and want styling governed by configuration; choosing it is a workflow preference, and the framework handles only the styling layer, independent of any JavaScript framework. Current installation instructions and documentation live at [the official docs](https://tailwindcss.com/docs/).

Tailwind CSS is open source under the MIT license, with its code on [GitHub](https://github.com/tailwindlabs/tailwindcss).

## Discussion in the show

In Weekly #005's chapter "迁移插件、替换编辑器内核" (migrating plugins, replacing editor kernels), on how AI makes rewriting software trivial, Yang Pan says [that while refreshing his personal site he "casually made a Yang Pan version of Tailwind CSS — it came out in one go"](/weekly/005/transcript#quote-1d2a57aa06e20b940e31) ([paragraph in the Chinese transcript](/weekly/005/transcript#chapter-09)), and Guizang adds that "you just extract the tokens and you're done." The "Yang Pan version of Tailwind CSS" refers to having AI generate a set of class-name styles based on his personal design tokens — a host's experience of AI coding speed, not a product release by Tailwind Labs.

## Frequently asked questions

### What is Tailwind CSS?

Tailwind CSS is an open-source, utility-first CSS framework: it provides a large set of single-purpose utility classes that developers compose directly in HTML to build interfaces, per [the official site](https://tailwindcss.com/).

### Is Tailwind CSS free?

Yes. Tailwind CSS is open source under the MIT license and can be used freely in personal and commercial projects; the license is on the [GitHub repository](https://github.com/tailwindlabs/tailwindcss).

### How is Tailwind CSS different from Bootstrap?

The two take different approaches: Bootstrap provides ready-made component classes (buttons, cards, tables, and so on), while Tailwind provides single-purpose utility classes that developers compose in HTML to produce their own design. Bootstrap works out of the box; Tailwind is more flexible but requires composing the styles yourself. See [Wikipedia's Tailwind CSS entry](https://en.wikipedia.org/wiki/Tailwind_CSS) and [the official docs](https://tailwindcss.com/docs/).

### Where is the Tailwind CSS documentation?

The official documentation is at [tailwindcss.com/docs](https://tailwindcss.com/docs/); installation instructions change with versions, so read the current documentation.

## Sources

- [Tailwind CSS official website](https://tailwindcss.com/)
- [Tailwind CSS official documentation](https://tailwindcss.com/docs/)
- [GitHub: tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [Wikipedia: Tailwind CSS](https://en.wikipedia.org/wiki/Tailwind_CSS) (accessed 2026-10-08)
