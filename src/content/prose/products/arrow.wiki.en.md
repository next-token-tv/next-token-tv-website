---
entityType: product
entity: arrow
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Arrow: QuiverAI’s SVG vector-graphics model family | Next Token Wiki'
seoDescription: 'What QuiverAI’s Arrow model family does, how Arrow 2 and Arrow 2 Telos differ, how to access the API, and what the Weekly show said about SVG generation.'
---

## What Arrow is

Arrow is a model family from [QuiverAI](/en/wiki/brands/quiver-ai) for generating, editing, and animating SVG vector graphics. The official models page summarizes it as "Every Arrow model writes editable SVG, not pixels." The current models are Arrow 2 and Arrow 2 Telos, both marked generally available on the official page: Arrow 2 is positioned as the flagship balancing quality and speed, and Arrow 2 Telos as the most capable model. Both support 5 operations and up to 14 reference images, priced per token.

The earlier Arrow 1.x line (Arrow 1.1, Arrow 1.1 Max, and the `arrow-1`, `arrow-preview` endpoints) is marked as retiring on the official models page: it states that `arrow-1`, `arrow-preview`, `arrow-1.1`, and `arrow-1.1-max` stop serving on October 16, 2026, at 08:00 UTC, and directs generation, vectorization, editing, and animation workloads to `arrow-2`.

## Usage and boundaries

QuiverAI positions Arrow in the vector-asset step of product, brand, and marketing workflows; the website lists production-ready SVG logos from text or references and illustrations as typical uses. The output is SVG code that can keep being edited in design tools and scaled to any size — a different kind of output from bitmap image generators, and the dividing line between this model family and design applications.

Developers can use Arrow through QuiverAI’s API: the documentation lists text-to-SVG and image-to-SVG endpoints plus an OpenResponses-compatible streaming endpoint backed by Arrow 2, with an MCP server, a CLI, and Node.js SDKs also available. The company blog dates the Arrow 2 and Arrow 2 Telos announcement to September 7, 2026; capabilities, plans, and rates are on the [official models page](https://quiver.ai/models/).

## Discussion in the show

In Weekly #003’s chapter “SVG、图标与设计工作流” (SVG, icons, and design workflows), [Guizang introduces Arrow 2 and describes its pelican-on-a-bicycle demo: feather outlines drawn stroke by stroke, with a great amount of detail in the Chinese transcript](/weekly/003/transcript#quote-99e82db7b58fb55934a2). He describes interface icon design as time-consuming work for designers and argues that general-purpose models at the time could not draw icons well. Yang Pan suggests exposing such a model through something like MCP, while Xiangyang Qiaomu stresses the value of vector formats for print publishing and compares it with tools like Napkin that turn text into vector graphics. These are participant impressions of a demo, not an independent capability evaluation. The [episode 003 chapter](/weekly/003/transcript#chapter-11) has the full context; an English transcript is not available.

## Frequently asked questions

### What is QuiverAI’s Arrow?

A model family for vector graphics that outputs editable SVG across generation, vectorization, editing, and animation. See the [official models page](https://quiver.ai/models/) for the current lineup.

### How do Arrow 2 and Arrow 2 Telos differ?

The official models page lists both as generally available: Arrow 2 is the flagship balancing quality and speed, Arrow 2 Telos the most capable model. Both support the same number of operations and reference images and are priced per token.

### How do I access Arrow through an API?

The official documentation provides text-to-SVG and image-to-SVG endpoints plus an OpenResponses-compatible streaming endpoint, along with an MCP server, a CLI, and Node.js SDKs. See the developer entry points on [quiver.ai](https://quiver.ai/).

### Is Arrow 1 still available?

The official models page states that Arrow 1.x (including the `arrow-1`, `arrow-1.1`, and `arrow-1.1-max` endpoints) stops serving on October 16, 2026, at 08:00 UTC, with workloads directed to `arrow-2`. See the [migration notes on the models page](https://quiver.ai/models/).

### What is Arrow good for?

Per the official positioning, vector assets in design workflows: logos and illustrations from text or references, vectorization, and animation, producing SVG that stays editable. In the show’s discussion, the mentioned scenarios were interface icons and print-publishing figures.

## Sources

- [QuiverAI models page: Arrow 2, Arrow 2 Telos, and the Arrow 1.x retirement notes](https://quiver.ai/models/)
- [QuiverAI website (blog and developer API documentation)](https://quiver.ai/)
