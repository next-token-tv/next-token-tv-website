---
entityType: product
entity: nextjs
locale: en
slot: wiki
updatedAt: '2026-11-09'
seoTitle: "Next.js: Vercel's React web application framework | Next Token Wiki"
seoDescription: "What Next.js is: Vercel's React framework first released in 2016 with server-side and static rendering, and the episode 009 discussion calling it a Lego component."
---

## Next.js

Next.js is an open-source web application framework based on [React](/en/wiki/products/react), created by [Vercel](/en/wiki/brands/vercel), first released on October 25, 2016, and since maintained by Vercel and the open-source community under the MIT license (per [English Wikipedia](https://en.wikipedia.org/wiki/Next.js)). The official site is [nextjs.org](https://nextjs.org).

## Usage and distinctions

React itself only handles components and rendering; Next.js adds the full web application layer on top, including server-side rendering, static generation, routing, and build and deployment tooling. A React component can be rendered on the server or at build time depending on the page.

Compared with [Astro](/en/wiki/products/astro), Next.js targets general web applications, while Astro targets content-driven sites with little client-side JavaScript by default and selectively loaded React components. [Tailwind CSS](/en/wiki/products/tailwind-css) is not the same kind of tool: Next.js is an application framework and Tailwind is a styling system, though the two are often used in the same project.

## Discussion in the show

In episode 009's chapter on the harness and plugin ecosystem ("Harness 与插件生态", [English gloss](/weekly/009/transcript#chapter-01) in the Chinese transcript), Yang Pan lists Next.js, [Astro](/en/wiki/products/astro) and [Tailwind CSS](/en/wiki/products/tailwind-css) as the common frontend frameworks (see [the passage](/weekly/009/transcript#quote-1015d384978ae7a10e49)), and argues that choosing Next.js or Astro as the base of a website belongs to the "Lego components" that AI models call directly instead of rewriting (see [the passage](/weekly/009/transcript#quote-02ab560177ba9cacb0fb)). These are the participants' personal views.

## Frequently asked questions

### How do Next.js and React relate?

Next.js is built on React: React provides the component model, and Next.js provides routing, server-side rendering, static generation and other application-level capabilities. See the [React entry](/en/wiki/products/react).

### Who develops Next.js?

Vercel created it, first released and open-sourced in October 2016. Vercel also runs a commercial cloud hosting platform of the same name, but Next.js itself is an open-source project under the MIT license.

### How do Next.js and Astro compare?

General web applications commonly use Next.js; content-driven sites that want minimal JavaScript by default commonly use Astro. The positioning comparison is in the [Astro entry](/en/wiki/products/astro).

### Is Next.js free?

The framework itself is open source under the MIT license with the code public on [GitHub](https://github.com/vercel/next.js); Vercel's hosting platform is billed separately, with prices on the [official pricing page](https://vercel.com/pricing).

## Sources

- [Next.js official website](https://nextjs.org)
- [vercel/next.js repository](https://github.com/vercel/next.js)
- [Wikipedia: Next.js](https://en.wikipedia.org/wiki/Next.js)
