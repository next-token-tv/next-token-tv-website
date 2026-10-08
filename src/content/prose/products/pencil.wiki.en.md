---
entityType: product
entity: pencil
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Pencil (pen.dev): an agentic design canvas for software｜Next Token Wiki'
seoDescription: 'What Pencil (now pen.dev) is: a design canvas connected to coding workflows, MCP and CLI agent access, the open .pen format, and how it came up on Next Token.'
---

## What Pencil is

Pencil is an interface design tool that connects a visual design canvas with coding workflows: designers can draw and refine interfaces by hand, or let AI agents design directly on the canvas. It is developed by High Agency Inc. The official site carries the banner "pencil.dev is now pen.dev", and the product now presents itself as [pen.dev](https://www.pen.dev/) — "an agentic canvas" for building software interfaces. This page keeps the original name, Pencil.

## What it does and how it is used

- **Canvas design**: the official site lists standard design capabilities — layers, components and variables, gradients, a pixel grid, a pen tool — with shortcuts matching Figma and Sketch. The canvas renders through WebGL, which the site says keeps thousands of layers smooth while panning and zooming.
- **Import and export**: .fig files can be imported; webpages can be brought in as editable layers through a built-in browser or a Chrome extension. Any frame can be exported as HTML/CSS/Tailwind in one click.
- **Agent access**: besides agents running inside the canvas, the official site says external agents such as Claude Code, Codex or Cursor can connect through MCP, and a CLI supports designing headlessly from the terminal. IDE extensions cover Cursor, VS Code and others.
- **File format**: a .pen file is JSON with a fully open schema, according to the official site, so agents can read and write it directly.
- **Platforms**: the desktop app runs on macOS (Apple Silicon and Intel), Windows and Linux (AppImage/Tarball), alongside a Chrome extension and IDE extensions; see the [official downloads page](https://www.pen.dev/downloads).

Whether the product charges money is a question for the [official pricing page](https://www.pen.dev/pricing).

## Discussion in the show

In Weekly #005's chapter "从 Descript 到软件成为 Agent 插件" (From Descript to software as agent plugins), the discussion was about whether software should expose itself to external agents or serve only its own. [Guizang brought up Pencil](/weekly/005/transcript#quote-646fcd1e063b1ad42c77) as an example that "has its own interface and broadcasts an MCP" — Chinese transcript, no English transcript is available for this episode. That matches the official description of connecting external agents through MCP. The same chapter also covers [Descript](/en/wiki/products/descript) and its closed ecosystem, and [MagicPath](/en/wiki/products/magicpath).

## Frequently asked questions

### Are Pencil and pen.dev the same product?

Yes. The official site states "pencil.dev is now pen.dev": the product formerly called Pencil is now served under the pen.dev domain.

### Can Pencil connect to Claude Code or Codex?

Yes. The official site says agents like Claude Code, Codex and Cursor connect through MCP, and a CLI plus a bundled agent skill are provided. See the [official documentation](https://docs.pen.dev).

### Does Pencil cost money?

The official pricing page lists Free, Pro and Ultra tiers; as of October 2026 the page notes the product stays free until paid plans launch. Current rates and quotas are on the [official pricing page](https://www.pen.dev/pricing).

### Is Pencil open source?

The official site emphasizes that .pen files are JSON with an open schema, but does not label the code as open source or link a public repository. An open file format is not the same thing as open source software.

## Sources

- [pen.dev official site](https://www.pen.dev/)
- [pen.dev downloads](https://www.pen.dev/downloads)
- [pen.dev pricing](https://www.pen.dev/pricing)
- [pen.dev documentation](https://docs.pen.dev)
