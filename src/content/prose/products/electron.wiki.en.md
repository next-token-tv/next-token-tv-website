---
entityType: product
entity: electron
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Electron: the cross-platform desktop app framework, entry points, and ecosystem | Next Token Wiki'
seoDescription: 'What the Electron framework is, how it bundles Chromium and Node.js, where its docs and tools live, notable apps built with it, and a Weekly podcast mention.'
---

## What Electron is

Electron is an open-source framework maintained under the OpenJS Foundation for building cross-platform desktop applications with JavaScript, HTML, and CSS, running on macOS, Windows, and Linux. It bundles the Chromium browser engine and the Node.js runtime, so each app ships with a complete web runtime. The project was originally built for the Atom editor, first released on July 15, 2013 under the name Atom Shell, and renamed Electron in 2015. The official site lists applications built with it, including VS Code, Slack, Discord, Figma, Notion, Obsidian, 1Password, and the Claude desktop app.

## Uses and boundaries

Electron suits teams with an existing web stack that want a desktop product, or desktop tools that need a consistent interface across operating systems. Official entry points include the [website](https://www.electronjs.org/), the [documentation](https://www.electronjs.org/docs/latest/), Electron Forge for scaffolding and publishing, and Electron Fiddle for experiments; dependencies install through npm. Current versions and the release cadence are on the [official releases page](https://releases.electronjs.org/). One technical boundary matters: because an Electron app embeds Chromium and Node.js, its UI capabilities are essentially those of the web, and system-level capabilities come from the Node.js side and native modules. Deep operating-system integration should be evaluated against what the framework is comfortable with.

## Discussion in the show

In Weekly #002’s chapter “Blender and code: giving the model the right tools,” Orange described his experience developing ColaMD, a Markdown compiler: [with earlier models, they would spin up an Electron version by themselves to test it](/weekly/002/transcript#quote-b2b0a48179812ca8f3c8), while DeepSeek Flash tested differently, sometimes finishing without launching an interface at all. The context of the discussion is the infrastructure agents use to operate software, and Electron appears there as a class of desktop apps that models can build and run. It is also a facet of Electron in the AI coding context: it is common enough that a model can simply “run an Electron build” to verify its work; see the [Chinese transcript chapter](/weekly/002/transcript#chapter-04).

## Frequently asked questions

### What is Electron?

An open-source framework for building cross-platform desktop apps with JavaScript, HTML, and CSS, maintained under the OpenJS Foundation. It renders the UI with Chromium and provides system capabilities through Node.js, on macOS, Windows, and Linux.

### Which apps are built with Electron?

The official site lists VS Code, Slack, Discord, Figma, Notion, Obsidian, 1Password, the Claude desktop app, and others; see the [official website](https://www.electronjs.org/) for current examples.

### How do I start building an Electron app?

Start from the [official documentation](https://www.electronjs.org/docs/latest/) and install dependencies via npm; for real projects use Electron Forge to scaffold and package, and Electron Fiddle for quick experiments.

### How do Electron and Tauri differ?

Both build cross-platform desktop apps. Electron embeds Chromium and Node.js inside the app, shipping a full runtime; Tauri is a separate framework with a different technical approach. Compare the architecture descriptions in each project’s official documentation against your project’s needs.

## Sources

- [Electron official website](https://www.electronjs.org/)
- [Electron documentation](https://www.electronjs.org/docs/latest/)
- [Electron releases](https://releases.electronjs.org/)
- [Electron (software framework) — Wikipedia](https://en.wikipedia.org/wiki/Electron_(software_framework))
