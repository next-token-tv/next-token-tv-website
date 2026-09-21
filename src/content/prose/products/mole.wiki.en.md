---
entityType: product
entity: mole
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Mole: the open-source macOS cleanup and maintenance tool | Next Token Wiki'
seoDescription: 'What Mole by Tw93 does — cleaning, uninstalling, disk analysis, and monitoring on macOS — how to install it, and the Next Token show discussion.'
---

## What Mole is

Mole is an open-source macOS maintenance tool maintained by developer Tw93. The official README describes it as "Clean, uninstall, analyze, optimize, and monitor your Mac. Free open-source CLI, plus a native Mac app." The project lives at [github.com/Tw93/Mole](https://github.com/Tw93/Mole), and the code is licensed under GPL-3.0.

## Features and boundaries

The README describes Mole as an "All-in-one CLI toolkit" combining workflows familiar from CleanMyMac, AppCleaner, DaisyDisk, and iStat Menus. The main commands cover:

- **Deep cleaning**: removing caches, logs, leftovers, and orphaned app data.
- **Smart uninstaller**: removing apps along with launch agents, preferences, and hidden remnants.
- **Disk insights**: `mo analyze` visualizes usage and finds large files.
- **Live monitoring**: `mo status` shows real-time CPU, GPU, memory, disk, and network stats.
- **More**: `mo optimize`, `mo purge` for project artifacts like node_modules, and `mo installer` for DMG/PKG cleanup.

Installation is `brew install mole` via Homebrew, or the official install script. The README lists macOS 12+ on Intel and Apple Silicon. As a command-line tool, its interface is the terminal rather than graphical windows — a real boundary for users who prefer GUI apps; the native Mac app is a separate product, with its own availability described in the project. For background on the Mac side, see the [macOS entry](/en/wiki/products/macos).

## Discussion in the show

In Weekly #003's chapter “常驻 Agent 与多平台内容分发” (the resident-agent chapter of the [Chinese transcript](/weekly/003/transcript#chapter-19)), discussing real use cases for resident agents, [Xiangyang Qiaomu mentions meeting Tw93 in Hangzhou and asking how he uses Grok Bot: Tw93 has Grok Bot run multi-platform marketing that promotes his Mole cleanup software, with a dedicated computer visiting niche forums in Europe and the US on a schedule and posting based on each forum's tone](/weekly/003/transcript#quote-13cbd1a894a6c7b2bc1e). The focus there is the resident-agent capability of [Grok Bot](/en/wiki/products/grok-bot); Mole is the product being promoted.

## Frequently asked questions

### What is Mole, and who develops it?

Mole is a macOS maintenance tool open sourced by Tw93. It combines cleaning, uninstallation, disk analysis, optimization, and monitoring in one CLI, and the code is published under GPL-3.0 on [GitHub](https://github.com/Tw93/Mole).

### How do I install Mole?

Run `brew install mole` with Homebrew, or use the install script from the official README. System requirements are in the [project README](https://github.com/Tw93/Mole).

### Is Mole free?

The open-source CLI is free under GPL-3.0. The README also mentions a separate native Mac app ("plus a native Mac app"), which is a distinct product; its availability and licensing are described in the project's official notes.

### How does Mole relate to tools like CleanMyMac?

Per the README, Mole bundles workflows known from CleanMyMac, AppCleaner, DaisyDisk, and iStat Menus into a single open-source CLI; the difference is that it is a free, open-source command-line tool.

## Sources

- [Tw93/Mole repository](https://github.com/Tw93/Mole)
