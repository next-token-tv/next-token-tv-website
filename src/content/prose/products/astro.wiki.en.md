---
entityType: product
entity: astro
locale: en
slot: wiki
updatedAt: '2026-11-09'
seoTitle: "Astro: the web framework for content-driven sites | Next Token Wiki"
seoDescription: "What Astro is: the content-driven site framework open-sourced in 2021 and at 1.0 in 2022, its Islands architecture and React component support, and the episode 009 discussion."
---

## Astro

Astro is an open-source web framework for content-driven sites. It was publicly launched in June 2021 (as recalled in its [official blog](https://astro.build/blog/the-astro-technology-company/)) and reached version 1.0 on August 9, 2022 (per the [official announcement](https://astro.build/blog/astro-1/)). The project was created by the team around Fred Schott, who had earlier maintained Snowpack and other tools; in January 2022 the team announced The Astro Technology Company with seed funding to maintain Astro full-time, and the project is open source under the MIT license.

## Usage and distinctions

Astro's default output is a static page with almost no client-side script, with interactivity loaded on demand: each interactive component — written with React, Solid, Vue and more — is hydrated individually, an approach the project calls Islands architecture. That positioning suits blogs, documentation and marketing sites, complementing [Next.js](/en/wiki/products/nextjs) as the framework for general web applications; interactive components inside a page can also reuse the [React](/en/wiki/products/react) ecosystem.

## Discussion in the show

In episode 009's chapter on the harness and plugin ecosystem ("Harness 与插件生态", [English gloss](/weekly/009/transcript#chapter-01) in the Chinese transcript), Yang Pan lists [Next.js](/en/wiki/products/nextjs), Astro and [Tailwind CSS](/en/wiki/products/tailwind-css) as the common frontend frameworks (see [the passage](/weekly/009/transcript#quote-1015d384978ae7a10e49)), and argues that choosing Next.js or Astro as the base of a website belongs to the "Lego components" that AI models call directly instead of rewriting (see [the passage](/weekly/009/transcript#quote-02ab560177ba9cacb0fb)). These are the participants' personal views.

## Frequently asked questions

### How does Astro differ from Next.js?

Astro targets content-first sites, outputting static pages by default and loading interactive components on demand; Next.js targets general web applications organized around React. Content sites and highly interactive apps are the two typical routes.

### Can Astro use React components?

Yes. Astro pages can include components written with React, Solid, Vue and other frameworks, loading scripts only where interaction is needed.

### Who develops Astro?

The team led by Fred Schott created it, launched in June 2021, and announced The Astro Technology Company with seed funding in January 2022 to maintain it (per the official blog announcement).

### Is Astro free?

Yes, it is open source under the MIT license with the code public on [GitHub](https://github.com/withastro/astro).

## Sources

- [Astro official website](https://astro.build)
- [Astro 1.0 announcement (August 9, 2022)](https://astro.build/blog/astro-1/)
- [Announcing The Astro Technology Company (January 12, 2022)](https://astro.build/blog/the-astro-technology-company/)
- [withastro/astro repository](https://github.com/withastro/astro)
