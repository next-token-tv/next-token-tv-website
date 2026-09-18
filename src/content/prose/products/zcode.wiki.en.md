---
entityType: product
entity: zcode
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'ZCode: Z.ai’s coding agent, GLM pairing, and install entry points | Next Token Wiki'
seoDescription: 'What ZCode by Z.ai does as a coding agent, how it pairs with GLM models, desktop downloads, and GLM Coding Plan billing.'
---

## What ZCode is

ZCode is an agentic development environment provided by Z.ai, officially billed as the “Official Harness for GLM-5.3.” It targets development workflows that involve planning, coding, debugging, and multi-agent collaboration, and it is tuned together with GLM models: the official page states “GLM is tuned for ZCode,” and GLM-5.3-Flash is built in for multimodal tasks such as screenshot understanding and image analysis.

ZCode sits in the same coding-agent (harness) category as Anthropic's Claude Code and OpenAI's Codex, but it comes from a different provider: Z.ai and its GLM model family, with a different model–tool pairing.

## Entry points and boundaries

ZCode ships as a desktop application for macOS (Apple Silicon and Intel), Windows (x64 and ARM64), and Linux (Beta, with .deb, .rpm, and .AppImage packages), all downloadable from the [official page](https://zcode.z.ai/en). The official site also describes starting and steering ZCode remotely from WeChat, Feishu, or Telegram so long-running work continues while you are away from the machine.

For workflow, the official page uses Goals to manage complex work with continuous planning, execution, and verification; in the examples the agent writes code, runs its own checks, and summarizes changes. Billing goes through Z.ai's GLM Coding Plan with Lite, Pro, and Max tiers; the official page says these plans support more than 20 agent tools, including ZCode and Claude Code. Current pricing belongs to the [official plan page](https://z.ai).

As with any coding agent, code, dependency changes, and command execution produced by ZCode need developer review. Show participants also noted that multimodal tasks consume noticeably more tokens, which matters for plan quotas.

## Discussion in the show

ZCode comes up repeatedly in Weekly #001. In the chapter on how Computer Use is changing vibe-coding acceptance, Yang Pan said Z.ai's ZCode is [“completely a Codex alternative” and that switching from Codex was nearly seamless](/weekly/001/transcript#quote-400de0647fad0667ff00), and Xiangyang Qiaomu mentioned that [many people recommending a domestic harness recommend ZCode](/weekly/001/transcript#quote-85224455276d8af6f798). In the chapter on native models with native agents, Yang Pan said [ZCode iterates fast and was becoming his daily driver](/weekly/001/transcript#quote-5e34ac6d6b04cf3299d9), while Guizang noted that [multimodal work consumed enough tokens in ZCode to strain his plan quota](/weekly/001/transcript#quote-10a029bbadfcaf889bc2).

In the chapter on Omarchy, an agent-first Linux, Xiangyang Qiaomu said that after installing [Omarchy](/en/wiki/products/omarchy) he could not even get the network configured, and [ZCode configured the whole system for him, connecting smoothly from China](/weekly/001/transcript#quote-996a84fc2d1e3ab6e38f). In the chapter on OpenClaw and coding agents converging, Yang Pan observed that coding agents like Codex and ZCode [were absorbing capabilities from OpenClaw](/weekly/001/transcript#quote-6da3490b335d2ae6828d). All of these are the participants' experiences; see the [Chinese transcript chapter](/weekly/001/transcript#chapter-04).

## Frequently asked questions

### What is ZCode?

ZCode is Z.ai's (Z.ai) agentic development environment, positioned as the official harness for GLM-5.3, supporting planning, coding, debugging, and multi-agent collaboration, with desktop apps for macOS, Windows, and Linux.

### Where do I download and install ZCode?

Download platform installers from the [official page](https://zcode.z.ai/en): macOS builds for Apple Silicon and Intel, Windows builds for x64 and ARM64, and a Linux Beta with .deb, .rpm, and .AppImage packages.

### Which models does ZCode use?

Officially, ZCode is tuned together with GLM models, and the page states that GLM-5.3-Flash is built in for multimodal tasks such as screenshot understanding and image analysis. GLM Coding Plan subscriptions also cover other agent tools such as Claude Code. Verify actual behavior yourself when pairing other models.

### How much does ZCode cost?

ZCode is billed through Z.ai's GLM Coding Plan with Lite, Pro, and Max tiers. Current prices and quotas are on Z.ai's official plan page; this page does not reproduce numbers.

### How is ZCode different from Claude Code or Codex?

All three are coding agents, provided by Z.ai, Anthropic, and OpenAI respectively. ZCode's distinguishing points are its joint tuning with GLM models, smooth connectivity from mainland China, and remote-control entries via WeChat, Feishu, and Telegram. Show participants described it as a “Codex alternative” — an experience report. Compare completion quality, cost, and workflow on your own tasks when choosing.

## Sources

- [ZCode official page](https://zcode.z.ai/en)
- [Z.ai official website](https://z.ai)
- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview) (for the coding-agent comparison)
