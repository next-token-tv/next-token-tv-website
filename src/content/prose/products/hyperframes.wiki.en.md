---
entityType: product
entity: hyperframes
locale: en
slot: wiki
updatedAt: '2026-11-09'
seoTitle: "HyperFrames: HeyGen's open-source video tool for AI agents | Next Token Wiki"
seoDescription: "What HyperFrames is: HeyGen's open-source tool that renders HTML into video, built for agents, its relation to Remotion, and the episode 009 discussion."
---

## HyperFrames

HyperFrames is an open-source video creation tool from [HeyGen](/en/wiki/brands/heygen) that turns HTML animation into video; its official GitHub repository describes itself as "Write HTML. Render video. Built for agents." The repository was created in March 2026 and the code is licensed under Apache 2.0. The official site calls it free and open source and offers the HyperFrames Studio desktop app for Mac, Windows and Linux; see the [official site](https://hyperframes.heygen.com).

## Usage and distinctions

HyperFrames targets video production driven by AI agents: the agent generates or edits HTML compositions, and the tooling handles previewing and rendering to video, with the repository and documentation organized around agent workflows. That differs from human-oriented editing software and also from [Remotion](/en/wiki/products/remotion), which writes videos as React components.

## Discussion in the show

Episode 009 discusses HyperFrames repeatedly in the chapter on the harness and plugin ecosystem ("Harness 与插件生态", [English gloss](/weekly/009/transcript#chapter-01) in the Chinese transcript). Guizang notes that when you make any video with Claude, Claude now reaches for the built-in HyperFrames first (see [the passage](/weekly/009/transcript#quote-6f9b68be1b07750b38c0)). Xiangyang Qiaomu raises the question of whether HyperFrames — which bundles several of Remotion's underlying pieces, packaged by HeyGen into a framework — became the consensus first choice for HTML video rendering within about half a year thanks to large language models or to marketing (see [the passage](/weekly/009/transcript#quote-d54f0ea51c642151a619)). Guizang argues models will gradually associate HyperFrames with video tasks, so that "as soon as video is involved, the model calls HyperFrames" (see [the passage](/weekly/009/transcript#quote-646db397bb0765bb6ec3)). Yang Pan classifies it with Next.js and Astro as "Lego components" that models use rather than replace (see [the passage](/weekly/009/transcript#quote-02ab560177ba9cacb0fb)). Orange asks about its commercialization during the discussion. All of these are the participants' views and guesses, not statements from HeyGen.

## Frequently asked questions

### What is HyperFrames?

An open-source HTML-to-video tool from [HeyGen](/en/wiki/brands/heygen): you write HTML compositions and the tooling renders them into video, organized around AI agent workflows; see the [official site](https://hyperframes.heygen.com).

### Is HyperFrames free and open source?

Yes, the official site marks it free and open source, and the code is public on [GitHub](https://github.com/heygen-com/hyperframes) under the Apache 2.0 license; the HyperFrames Studio desktop app is downloaded from the official site.

### How do HyperFrames and Remotion relate?

Both render video with web technology. [Remotion](/en/wiki/products/remotion) writes videos as React components; in episode 009 Xiangyang Qiaomu said HyperFrames integrated parts of Remotion's underlying work — a participant claim, with no official statement from either side.

### How do agents use HyperFrames?

The official documentation is organized from the agent workflow perspective, starting at the [site](https://hyperframes.heygen.com); in episode 009 Guizang observed that Claude's video workflow uses HyperFrames by default — a participant observation.

## Sources

- [HyperFrames official website](https://hyperframes.heygen.com)
- [heygen-com/hyperframes repository](https://github.com/heygen-com/hyperframes)
