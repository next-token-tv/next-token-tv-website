---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
  - next-token-weekly--003
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'Agent Plugin Migration Is Hard Because Capabilities Are Unequal'
description: 'Moving plugins from one agent to another, format conversion is no longer the hard part; the real threshold is that each platform exposes different capabilities, and upstream keeps changing fast.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-09'
---

A smooth plugin migration looks like this: a batch of [Obsidian](/en/wiki/products/obsidian) plugins is moved into the [DeepSeek Harness](/en/wiki/products/deepseek-harness), with the agent itself judging which features have nothing to do with note-taking and dropping them—completed in a single pass with almost no human intervention. That migration worked on one premise: the capabilities these plugins relied on happened to all be present in the target host. Try a different batch of plugins or a different host, and the outcome may not be the same.

The difficulty of plugin migration is therefore not in the moving, but in what is left once the move is done.

## Consensus at the Standards Layer, Fragmentation at the Implementation Layer

What the agent plugin ecosystem broadly agrees on is really only the standards layer: MCP specifies how tools plug in, while AGENTS.md and Agent Skills specify how instructions and skills are written. Above that, each platform's plugin system is its own thing: Codex plugins can be pinned to the sidebar and interact back and forth with the user; Claude Code has Mods; Pi has Codemode; DeepSeek Harness has its own plugin system. The same feature, dropped into a different host, becomes a different format and a different interface.

This shows an ecosystem splitting by audience: Personal Agents aimed at ordinary users keep getting simpler, while agents aimed at productivity keep expanding their plugin systems and gaining freedom. Plugins, as an important extension mechanism for the latter, naturally grow in each platform's own soil.

## The Threshold Is Which Capabilities the Host Exposes

The real test of a migration is capability parity. One host supports a given capability; another does not support it at all—migrate over and the feature is crippled. This inequality appears at multiple levels:

At the interface layer, GUI-based plugins are the most fragile: the host moves its interface and the plugin breaks, so many adaptations simply give up on the interface and build against more stable exposure surfaces like MCP or the CLI. More fundamental execution capabilities—whether the host provides code execution, and whether it persists—determine whether a plugin arrives as a full-featured port or an empty shell. Fine-grained features are just as uneven: capabilities like multi-account connectors currently exist on only some platforms. Nor do the differences necessarily come from technical limits—often the host simply has not built it: the part of a plugin that depends on local execution cannot land in a host that provides no runtime environment.

When evaluating a migration, it is worth listing the capability inventory first: which interfaces the target host exposes and which file and execution capabilities it supports, and only then deciding which plugins are worth bringing along. If the checklists do not line up, the best format conversion in the world is meaningless.

## With an Unstable Upstream, Migration Is Never One-and-Done

Even if the migration succeeds this time, a single upstream update can void it. DeepSeek Harness updates frequently, and previously installed plugins mostly break; one plugin author has said outright that their library no longer updates because they cannot keep up with upstream. Part of the problem is design: the plugin system offloads complexity onto developers, and paired with rapid iteration, compatibility becomes a continuous cost rather than a one-time investment.

The standards layer demands multi-track maintenance too: keeping a CLAUDE.md alongside the AGENTS.md and updating both together; and Agent Skills still lacks support on some hosts. The maintenance burden lands directly on every developer who wants to go cross-platform.

## Migration Costs Are Falling; Capability Differences Will Not Disappear

Model capability is making the "moving" itself ever cheaper. A concrete case is a Markdown editor swapping kernels: migrating from Milkdown to CodeMirror 6, with the goal of making the rendered output and the source a single source of truth rather than two states that have to be kept in sync. By the developer's estimate, that work would originally have been measured in weeks; handed to a model, one pass produced a usable result, needing only some leftover bugs fixed. Obsidian plugin migration can even be handed over to the agent to judge and execute in its entirety.

But this solves the question of how to move, not the question of whether anything is left after the move—capability differences are decided by the hosts' product design, and they will not vanish because conversion tools get stronger.

## A Ready-Made Distribution Ecosystem

For an individual developer who wants to distribute plugins, Obsidian shows there is an opportunity outside the official agent ecosystems: the listing process is simple, community plugins are distributed as open source, and the user community is active. One developer's Obsidian plugin drew more than two thousand downloads in two weeks, with feedback in the user group that was direct and specific.

This opportunity has structural reasons behind it. Obsidian is a mature, listed application spanning desktop and mobile; attach a plugin to it, and you simultaneously inherit its user base, its data organization, and its distribution channels, without having to build an audience from zero. Some call it a "small operating system"—it ships with a complete distribution ecosystem, and developers just plug in.

This is one person's experience, and the scale and speed may not be replicable for other plugins or platforms. But it shows that the entry points for plugin distribution are not limited to the official marketplaces of the various agents: a mature software ecosystem is itself a channel, especially when the plugin serves the everyday work of that ecosystem's own users.

## Sources

- [The experience of migrating Obsidian plugins to DeepSeek Harness](/en/weekly/005/transcript#quote-4aee9820b94a95b919f3)
- [Skill and MCP as the consensus while plugins differ everywhere](/en/weekly/005/transcript#quote-1b57b961c7f6b53c09f0), and [the divergence of productivity agents' plugin systems](/en/weekly/005/transcript#quote-15476bf2887cbc4df949)
- [Updates leaving most plugins broken](/en/weekly/002/transcript#quote-4b12f7533b43dcc76981), [the fragility of GUI adaptations](/en/weekly/002/transcript#quote-7edaa117295025939d89), and [the tradeoff of switching to MCP or CLI](/en/weekly/002/transcript#quote-d87e3ed0d117548ed084)
- [How plugin systems offload complexity](/en/weekly/001/transcript#quote-56c9a7a492758084740a) and [failing to keep up with upstream updates](/en/weekly/001/transcript#quote-9b223772ff9194051c4d)
- [The burden of maintaining multiple spec files](/en/weekly/003/transcript#quote-a9d56612ddffc9ec9752) and [the support gap for Agent Skills](/en/weekly/003/transcript#quote-6ad8b7648df2fb790c1a)
- [Fine-grained capability differences like multi-account connectors](/en/weekly/003/transcript#quote-35655c31266543e58538)
- [Listing Obsidian plugins and the downloads that followed](/en/weekly/004/transcript#quote-4fe3a02b88da55501408), [the positive feedback from a real community](/en/weekly/004/transcript#quote-c2bba111e07ec0a377fc), and [the small-operating-system ecosystem](/en/weekly/005/transcript#quote-0a15d730dfec59bb92b8)
- [Falling costs of the editor kernel migration](/en/weekly/005/transcript#quote-a26a210c2315f9a66446)
