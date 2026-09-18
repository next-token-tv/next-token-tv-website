---
entityType: product
entity: herdr
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Herdr: the always-on terminal runtime for coding agents — install and agent hosting | Next Token Wiki'
seoDescription: 'Learn what Herdr is: a background runtime that hosts multiple coding-agent sessions, with status detection, an agent API, install methods, and how the Weekly show discussed it.'
---

## What Herdr is

Herdr is a terminal runtime for coding agents — the official positioning is "the runtime coding agents run on." It is developed by Herdr, Inc., open-sourced under the Apache 2.0 license, with code on GitHub (herdrdev/herdr). Rather than an app you keep open, the [official site](https://herdr.dev/) describes a server running in the background with terminals living inside it: close the lid or drop the network and the agents keep working.

## Capabilities and how to use it

Per official material, Herdr hosts sessions from many agent CLIs — Claude Code, Codex, Cursor, opencode, and more, with 22 agent CLIs listed as supported out of the box. It reads every pane and marks each agent as working, blocked, or idle, so stuck sessions are easy to spot. It also ships an agent-native CLI and socket API — agents can split panes, start each other, and prompt each other — plus multi-machine management over SSH. Herdr Cloud (SSH-free machine connection) is listed on the official site as coming soon and is not a shipping feature.

For installation, macOS and Linux use a one-line install script (see the [official docs](https://herdr.dev/docs/)), Windows has a PowerShell script, and Homebrew, Nix, and manual options exist; plugins are distributed through the plugins page. Herdr does not wrap or replace the agent CLIs; it owns their terminals.

## Discussion in the show

At the end of Weekly #001's chapter “Harness 评测：完成率、Token 成本与“斩杀线”” (harness evaluation: completion, token cost, and the "kill line"), Guizang proposed using Herdr for exactly this kind of multi-agent play, finding [the idea fun and playful](/weekly/001/transcript#quote-3a2ed4b1d2652e5ee560), and [explained the workflow: start Herdr in the terminal first, then launch the CLIs inside it — they can talk to each other, and you can dispatch work to DeepSeek Harness](/weekly/001/transcript#quote-23b5fd89af3826486e6d). Xiangyang Qiaomu called it [extremely geeky — start it first, then tune everything — the kind of thing many hackers would enjoy](/weekly/001/transcript#quote-0448d269678329000e34). That discussion reflects how participants saw Herdr's positioning around September 2026 and matches the official "agents start each other" design, though actual experience varies.

## Frequently asked questions

### What is Herdr?

A background terminal runtime that hosts coding-agent sessions: the agents' terminals live inside Herdr's always-on server, agents keep running through disconnects, and each session is marked working, blocked, or idle. See the [official site](https://herdr.dev/).

### How is Herdr different from tmux?

tmux is a general terminal multiplexer. Herdr is purpose-built for agent sessions: beyond persistence and session survival, it detects each agent's working status and gives agents a CLI and socket API so they can start other agents and prompt each other. The two serve different purposes; combining them is up to your workflow.

### How do I install Herdr?

On macOS and Linux use the official install script (`curl -fsSL https://herdr.dev/install.sh | sh`); on Windows use the official PowerShell script; Homebrew, Nix, and manual installs are also documented. See the [official docs](https://herdr.dev/docs/).

### Which coding agents does Herdr support?

The official site lists 22 agent CLIs supported out of the box, including Claude Code, Codex, Cursor, and opencode; Herdr hosts their terminals without replacing them. Check the [official page](https://herdr.dev/) for the current list.

## Sources

- [Herdr website](https://herdr.dev/)
- [Herdr docs](https://herdr.dev/docs/)
- [Herdr GitHub repository](https://github.com/herdrdev/herdr)
