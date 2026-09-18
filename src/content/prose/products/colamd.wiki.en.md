---
entityType: product
entity: colamd
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'ColaMD: an open-source Markdown editor for people and AI agents | Next Token Wiki'
seoDescription: 'How ColaMD live-syncs external file changes, its MIT license and downloads, how it differs from the same-named COLAMD algorithm, and the Next Token discussion by its developer.'
---

## What ColaMD is

ColaMD is a free, open-source Markdown editor whose official tagline is "Writing should be this simple." It is built by Cola.app and maintained by orange2ai, with source code under the MIT license in the [GitHub repository](https://github.com/marswaveai/colamd) for macOS, Windows, and Linux. Its distinguishing idea is putting "a human writing" and "an AI agent editing files" into the same editor.

## Usage and boundaries

ColaMD focuses on true WYSIWYG editing without a split-pane preview, alongside a source mode, a file browser, and an outline. The officially described core mechanism is live sync: "when the file changes on disk — whether by an AI agent, a script or another editor — the editor updates right away," and files created by an agent appear automatically. This makes it a natural interface for human-agent Markdown collaboration: the agent edits the file, the person reads and revises.

Features also include 12 themes, task lists, highlights, KaTeX formulas, Mermaid diagrams, PDF/HTML/Word export, and VS Code integration. Downloads go through [GitHub Releases](https://github.com/marswaveai/colamd/releases) (macOS dmg, Windows installer and no-install zip, Linux AppImage/deb). One caution: searching for "colamd" often surfaces the same-named COLAMD sparse-matrix ordering algorithm used in tools like MATLAB, which is unrelated to this editor.

## Discussion in the show

ColaMD is directly tied to [Orange](/en/wiki/people/orange), one of the show's hosts, who discusses it as its developer. In Weekly #002's chapter "Blender 与代码：给模型合适的工具" (Blender and code: giving models the right tools), he described how models differ when testing ColaMD: [per the Chinese transcript, earlier models would spin up an Electron build to test, while DeepSeek Flash sometimes finishes testing without ever launching the interface](/weekly/002/transcript#quote-b2b0a48179812ca8f3c8). In the same episode's chapter "能力够用之后，测试与交付成为瓶颈" (Once capability suffices, testing and delivery become the bottleneck), he said [the iOS development build of ColaMD simply lives in the repository — anyone who wants it can install it](/weekly/002/transcript#quote-39a13ec8d097e89591a3). These are the developer's own statements on the show; project details follow the official repository.

## Frequently asked questions

### What is ColaMD?

A free, open-source WYSIWYG Markdown editor whose signature feature is live-syncing external changes so people and AI agents can edit files together; it shares a name with, but is unrelated to, the COLAMD ordering algorithm in MATLAB and similar tools. See [colamd.com](https://colamd.com/).

### Is ColaMD free, and what is the license?

The official materials say "free forever," released under the MIT license with source code on GitHub.

### How do I download ColaMD?

Installers for all three platforms are published on the [GitHub Releases page](https://github.com/marswaveai/colamd/releases): macOS (Apple Silicon and Intel), Windows (installer and a no-install zip), and Linux (AppImage and deb).

### How does ColaMD relate to AI agents?

The editor always shows the newest on-disk content: changes by agents, scripts, or other editors appear immediately, and files created by an agent show up automatically — the official framing is "no matter who writes the file, the editor always shows the newest content."

## Sources

- [ColaMD website](https://colamd.com/)
- [ColaMD GitHub repository](https://github.com/marswaveai/colamd)
- [ColaMD Releases page](https://github.com/marswaveai/colamd/releases)
