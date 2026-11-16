---
entityType: product
entity: open-design
locale: en
slot: wiki
updatedAt: '2026-11-16'
seoTitle: "OpenDesign: the open-source AI design agent workspace | Next Token Wiki"
seoDescription: "What OpenDesign is: an open-source collaborative AI design workspace that connects coding agents such as Claude Code and Codex to build prototypes and websites, plus the episode 010 discussion on open-source moats."
---

## OpenDesign

OpenDesign is an open-source (Apache-2.0 license) collaborative AI design workspace that its site calls "The First Collaborative Design Agent Workspace." It is available at [open-design.ai](https://open-design.ai/), with source code on [GitHub](https://github.com/nexu-io/open-design). It ships no model of its own; instead, coding agents you already use act as the design engine: you describe a screen in plain language, an agent generates a working HTML prototype, and the tool is where you preview, refine and share it.

## Features and workflow

Per the official site and repository:

- Agent connections: works with coding agents such as [Claude Code](/en/wiki/products/claude-code), [Codex](/en/wiki/products/codex) and [Cursor](/en/wiki/products/cursor); you can also bring your own API key or use the hosted service.
- Design systems: ships with 150-plus open-source design system packages governed by a shared DESIGN.md brand contract, and you can generate your own design system from a website, a GitHub repository or a Figma file.
- Editing and collaboration: generated prototypes can be moved, resized and restyled directly instead of being regenerated; teammates comment in a shared workspace, and comments can be sent back to the agent as one revision task.
- Output: exports to HTML, PDF, PNG and PowerPoint, covering prototypes, websites, dashboards, decks, images and motion graphics.
- Runtime: local-first, with desktop apps for macOS and Windows; it can also run from source or Docker.

## Discussion in the show

In episode 010, in the chapter "持续迭代与开源生态：代码之外还能留下什么" ([sustainable iteration and the open-source ecosystem](/weekly/010/transcript#chapter-13) in the Chinese transcript), [Xiangyang Qiaomu](/en/wiki/people/xiangyang-qiaomu) says he once asked OpenDesign's developer about the product and felt that "[这好像没有壁垒，别人也都可以抄](/weekly/010/transcript#quote-b084c5c2a0dd9e856d79)" (this seems to have no moat — anyone could copy it); the answer was that precisely because it is open source, it has attracted many contributors and formed an ecosystem: "[你只能抄我的代码，你抄不了我的生态](/weekly/010/transcript#quote-64ec7f37c8a54cd77118)" (you can only copy my code, you cannot copy my ecosystem), nor the team's sustained iteration. Xiangyang Qiaomu takes this as one viable path: genuinely caring about a product, iterating on it continuously, and bringing a group of people along. This is a participant's retelling of the developer's view plus his own judgment; the show did not review OpenDesign itself.

## Frequently asked questions

### What is OpenDesign?

An open-source collaborative AI design workspace: coding agents generate HTML prototypes, websites and other design assets from natural-language prompts, and a team previews, comments on and iterates on them in one workspace; see the [official site](https://open-design.ai/).

### Which models does OpenDesign use?

It provides no models of its own. It connects to coding agents you already have, such as Claude Code, Codex and Cursor, and also supports bringing your own API key or the hosted service; see the [project documentation](https://github.com/nexu-io/open-design).

### Is OpenDesign free and open source?

Yes. The desktop app and source code are published on [GitHub](https://github.com/nexu-io/open-design) under the Apache-2.0 license; the hosted service is a paid option, while connecting your own agent or API key locally requires no account.

### Which platforms does OpenDesign support?

Official desktop apps exist for macOS and Windows; no official Linux desktop build is offered, and Linux runs from source. See the [repository documentation](https://github.com/nexu-io/open-design) for specifics.

## Sources

- [OpenDesign official website](https://open-design.ai/)
- [nexu-io/open-design repository](https://github.com/nexu-io/open-design)
