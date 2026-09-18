---
entityType: product
entity: omarchy
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Omarchy: DHH’s agent-first Linux distribution | Next Token Wiki'
seoDescription: 'What Omarchy is, how to install it, which AI agents it ships with, its limits, and how the Next Token podcast discussed it.'
---

## What Omarchy is

Omarchy is a Linux distribution created by David Heinemeier Hansson ([DHH](/en/wiki/people/dhh)). Its official site describes it as “Beautiful, fun & agentic Linux” and “the malleable OS for the age of agents.” It is built on [Arch Linux](https://omarchy.org/), with Hyprland, Quickshell, and a keyboard-first workflow preconfigured. The project was incubated at 37signals, is funded by the nonprofit [Omacom Foundation](/en/wiki/brands/omacom), and is developed in the open at [GitHub (omacom/omarchy)](https://github.com/omacom/omarchy). The downloadable ISO is available from the [official site](https://omarchy.org/).

## Usage and boundaries

Omarchy is meant to give developers and Linux-curious users a working computer that is ready out of the box: installation, drivers, window management, terminal, and development tools are chosen for you, with the freedom to change everything yourself or hand the change to an agent.

- Installation: write the [official ISO](https://omarchy.org/#install) to a USB stick and choose a full-disk install or a free-space install (the latter supports dual booting alongside Windows). Installation defaults to full-disk encryption, and Secure Boot/TPM must be turned off in the BIOS first. The [installation manual](https://omarchy.org/manual/getting-started/) notes that a Bluetooth keyboard cannot type the encryption password at boot; use a wired or 2.4 GHz keyboard.
- Agent-first: on first boot the system invites you to pick a default agent. Major coding-agent CLIs (Claude Code, Codex, OpenCode, GitHub Copilot CLI, Grok CLI, and others) come pre-wired as lazy-loaded launchers that download on first run. The default agent can be launched with a keyboard shortcut or sent a task directly with `omarchy agent prompt`, in which case it runs unattended in auto-approving mode; app crashes can be handed to the default agent for diagnosis. See the [official AI manual](https://omarchy.org/manual/ai/).
- Everyday customization: themes restyle the terminal, bar, notifications, and wallpaper at once; a large community [plugin catalog](https://plugins.omarchy.org) provides extensions; system updates run through `omarchy update`.
- Local models: the system menu offers LM Studio and Ollama for running local LLMs, with LM Studio recommended for beginners.
- Boundaries: the agents’ auto-approving mode means they can change the system directly. The manual recommends running the bundled Omarchy Skill in plan mode first and being ready to roll back. Users in China may also face network reachability issues; an official [Simplified Chinese site](https://zh.omarchy.org/) exists.

## Discussion in the show

The main discussion is in Weekly #001’s chapter “Omarchy：一个 Agent 优先的 Linux 是什么体验” (“Omarchy: what an agent-first Linux feels like”) in the [Chinese transcript](/weekly/001/transcript#chapter-12); an English transcript is not available. The speakers describe first-hand experience and personal opinions. [Xiangyang Qiaomu says he could not configure the system after installing it and had no working network](/weekly/001/transcript#quote-996a84fc2d1e3ab6e38f), so he installed [ZCode](/en/wiki/products/zcode) and let the agent operate the machine. He judges version 4.0 far more complete than 3.0 and [describes how the system decides what may be changed and hands crashes to the agent to fix](/weekly/001/transcript#quote-87b8cb106894349cb85f), along with its full-screen, auto-tiling window management. Guizang calls it an “AI Native OS” and likes how self-evolution makes writing software easy. Yang Pan frames it as a “giant harness” and later uses it to illustrate [how AI-native software and on-device smaller models may split the work](/weekly/001/transcript#quote-9a65193887dd7397f52d). On China-specific support, Xiangyang Qiaomu relays a plan for a Chinese website and domestic mirrors; that is a participant’s statement at recording time, not an official commitment.

These are participant experiences and opinions, not an independent evaluation or an endorsement.

## Frequently asked questions

### What is Omarchy, and how does it relate to Arch Linux?

Omarchy is a Linux distribution by DHH, based on Arch Linux, with Hyprland, Quickshell, and a set of default development and agent tools preconfigured. The official metaphor is omakase: Omarchy picks the tools and tunes the details, but you can change everything. See the [official website](https://omarchy.org/) and the [Omarchy Doctrine](https://omarchy.org/doctrine/).

### How do I install Omarchy, and what hardware does it need?

Download the ISO from the [official site](https://omarchy.org/#install), write it to a USB stick, and choose a full-disk or dual-boot install. Secure Boot/TPM must be disabled in the BIOS. The project claims the fastest machines finish in as little as 35 seconds, most computers in under two minutes, and older machines in under five minutes, and it demonstrates a 2011 ThinkPad X220 with 2 GB of RAM running Omarchy. Step-by-step instructions are in the [full installation guide](https://omarchy.org/manual/getting-started/).

### Which AI agents does Omarchy include?

Claude Code, OpenAI Codex, OpenCode, GitHub Copilot CLI, Grok CLI, and other major coding-agent CLIs ship as launchers that download on first use; you pick a default agent on first boot, and app crashes can be handed to the agent for diagnosis. The menu also offers LM Studio and Ollama for local models. The full list is in the [official AI manual](https://omarchy.org/manual/ai/).

### Can Omarchy run on a Mac with Apple Silicon?

You can try it first: the official [Try Omarchy](https://github.com/omacom/try-omarchy) app runs the real Omarchy desktop on Apple Silicon Macs. For native support, the project announced the [Omarchy M team](https://omarchy.org/news/2026/09/introducing-omarchy-m/) in September 2026 to finish Apple Silicon support, targeting M1 and M2 machines in its first release.

### Is Omarchy free, and who maintains it?

The ISO is a free download from the official site, which describes the project as free and open code. Development is funded by the nonprofit [Omacom Foundation](https://omarchy.org/foundation/), the code is maintained publicly on [GitHub](https://github.com/omacom/omarchy), and the site lists individual and corporate patrons.

## Sources

- [Omarchy official website](https://omarchy.org/)
- [Omarchy manual: Getting Started](https://omarchy.org/manual/getting-started/)
- [Omarchy manual: AI](https://omarchy.org/manual/ai/)
- [Omarchy news: Introducing Omarchy M](https://omarchy.org/news/2026/09/introducing-omarchy-m/)
- [Omacom Foundation](https://omarchy.org/foundation/)
- [GitHub: omacom/omarchy](https://github.com/omacom/omarchy)
