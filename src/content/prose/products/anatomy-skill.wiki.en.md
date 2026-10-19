---
entityType: product
entity: anatomy-skill
locale: en
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'Anatomy Skill: open-source agent skill for isometric machine illustrations | Next Token Wiki'
seoDescription: 'What the Anatomy agent skill does, how to install it, which agent tools support it, its limits, and how the Next Token show discussed it.'
---

## What the Anatomy skill is

Anatomy is an open-source agent skill maintained by Ryan (GitHub user [wheresryan22](https://github.com/wheresryan22)) under the MIT license, at [github.com/wheresryan22/anatomy](https://github.com/wheresryan22/anatomy). It turns explanations of technical concepts into interactive isometric illustrations of machines: per the README, when you ask a model to explain a concept, the skill has it invent a physical object whose mechanism demonstrates the idea, then build that object from dozens of shaded parts — a cache key becomes a pin-tumbler lock, for example.

## Uses and boundaries

The README describes three figure types: plain SVG (four-tone shading, live readouts, eased motion), SVG plus WebGL (fire, water, caustics, and glow shaders layered into the same isometric camera), and 3D (beta, true 3D parts re-projected each frame). Output ships as standalone HTML, a lone SVG file, or React/Next.js components.

Installation is `npx skills add wheresryan22/anatomy -g`, or cloning/unzipping the repository into a skills folder, then invoking it as `/anatomy`. It is written for [Claude Code](/en/wiki/products/claude-code) but follows the open Agent Skills format; the README says it also runs in [Antigravity](/en/wiki/products/antigravity), [OpenCode](/en/wiki/products/opencode), [Codex](/en/wiki/products/codex) (as `$anatomy`), and MiniMax Code. It depends only on Node.js 20.10+ built-ins, and its self-verification checks (headless screenshots, geometry audits) need Chrome/Chromium.

The README also states its limits: it is not a chart library, it draws machines and instruments rather than people, and builds are intentionally slow in the name of quality.

## Discussion in the show

In Weekly #006's chapter "Prompt 套 Skill，Skill 再套 Prompt：能力变强后，还要封装什么？" (Prompts wrapping skills, skills wrapping prompts), Xiangyang Qiaomu mentions [a skill that went viral a while back, named Anatomy after the anatomical sense of the word, saying it "fits turning all kinds of machines into explainer videos, and the results are very good" (Chinese transcript)](/weekly/006/transcript#quote-ec23d06b40bba533ceb0). He uses that popularity to open the question of how prompts and skills wrap each other once models internalize skill abilities. This is a host relaying how widely the skill spread at the time. See the [corresponding chapter (Chinese transcript)](/weekly/006/transcript#chapter-18).

## Frequently asked questions

### How do I install the Anatomy skill?

Per the README, run `npx skills add wheresryan22/anatomy -g`, or clone/unzip the repository into a skills folder, then invoke it as `/anatomy` with your prompt. See the [repository README](https://github.com/wheresryan22/anatomy).

### Which tools can run the Anatomy skill?

It is written for Claude Code and follows the open Agent Skills format; the README lists Antigravity, OpenCode, Codex (`$anatomy`), and MiniMax Code as compatible environments.

### Is the Anatomy skill free?

Yes — it is open source under the MIT license, with the code public on [GitHub](https://github.com/wheresryan22/anatomy).

### What can the Anatomy skill draw?

Per the README's own positioning: interactive isometric illustrations of machines, instruments, and complex systems — not people, and not a data-chart library.

## Sources

- [wheresryan22/anatomy repository (GitHub)](https://github.com/wheresryan22/anatomy)
