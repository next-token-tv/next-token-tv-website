---
entityType: product
entity: opencode
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'OpenCode: the open-source AI coding agent and model access | Next Token Wiki'
seoDescription: 'What OpenCode is, how it runs in the terminal and desktop, which model providers it supports, and what the Next Token show said about neutral coding agents.'
---

## What OpenCode is

OpenCode is an open-source AI coding agent, described by its makers as "an open source agent that helps you write code in your terminal, IDE, or desktop." The project is maintained by Anomaly and the source code is published under the MIT license in the [GitHub repository](https://github.com/anomalyco/opencode). Unlike coding tools tied to one vendor's models, OpenCode does not produce models itself; the focus is on the agent layer.

## Usage and model access

OpenCode comes in three forms: a terminal CLI, a desktop app (labeled beta, for macOS, Windows, and Linux), and an editor extension. The [official website](https://opencode.ai/) provides an install script, with npm, bun, brew, and paru as alternatives.

Model access is its signature feature: you can connect models from providers such as Claude, GPT, and Gemini, sign in with a GitHub Copilot or ChatGPT Plus/Pro account to reuse existing subscriptions, or use Zen, the official curated model set. The site also states that OpenCode does not store your code or context data. Current models and sign-in options are documented on the [official site](https://opencode.ai/).

## Discussion in the show

In Weekly #002's chapter "Agent API：还需要自己维护一套 Harness 吗" (Agent APIs: do you still need your own harness?), Yang Pan argued that vendors are binding their agent products ever more tightly to their own models and [described OpenCode in the Chinese transcript as the neutral, fully model-agnostic player — an independent niche in his view](/weekly/002/transcript#quote-27d8be325d660d54cd9d). This is a participant's judgment about market structure, not a product review.

In Weekly #001's chapter "当所有模型都差不多，用户该如何选择" (When all models look alike, how should users choose), [Qiaomu mentions in passing, in the Chinese transcript, that someone has kept using OpenCode](/weekly/001/transcript#quote-472e5afec5b9fd11f24c), without further detail. For comparable coding agents, see the entries for [Claude Code](/en/wiki/products/claude-code) and [Codex](/en/wiki/products/codex).

## Frequently asked questions

### What is OpenCode?

An open-source AI coding agent maintained by Anomaly under the MIT license, used in the terminal, IDE, and desktop, with swappable models. See the [official website](https://opencode.ai/) and the [GitHub repository](https://github.com/anomalyco/opencode).

### How do I install OpenCode?

The official site offers a one-line install script (`curl -fsSL https://opencode.ai/install | bash`) plus npm, bun, brew, and paru options; the beta desktop app is available on the site's download page.

### Is OpenCode free, and which models does it use?

The software itself is open source and free, and the site says free models are included; using paid models depends on the corresponding provider's account or subscription. Access options are described on the [official site](https://opencode.ai/).

### How does OpenCode differ from Claude Code?

Both are coding agents. OpenCode is an open-source project whose selling point is model neutrality; Claude Code is Anthropic's coding agent (see the [Claude Code entry](/en/wiki/products/claude-code)). Neither official page publishes a comparison; check the official documentation on licensing, model access, and interfaces before choosing.

## Sources

- [OpenCode website](https://opencode.ai/)
- [OpenCode GitHub repository](https://github.com/anomalyco/opencode)
