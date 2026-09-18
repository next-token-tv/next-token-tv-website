---
entityType: product
entity: t3-code
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'T3 Code: the open-source control plane for coding agents | Next Token Wiki'
seoDescription: 'What T3 Code is: an open-source control surface for orchestrating coding agents such as Claude Code and Codex, its bring-your-own-subscription model, installation, and show discussion.'
---

## What T3 Code is

T3 Code is an open-source control plane for coding agents (the official wording is "the open-source control plane for coding agents"), bringing the management of multiple coding-agent sessions into one graphical surface. It is developed by T3 Tools Inc., with code hosted under the pingdotgg GitHub organization ([pingdotgg/t3code](https://github.com/pingdotgg/t3code/), created February 2026, MIT licensed), and its website is [t3.codes](https://t3.codes/). The T3 name is associated with the team's Theo; it is not the same thing as other same-named terms such as the T3 Stack.

## Usage and boundaries

Per the official description, T3 Code orchestrates coding agents including Claude Code, Codex, Antigravity, OpenCode, Cursor, and Grok from one surface, with a desktop app (macOS, Windows, Linux), mobile apps (iOS and Android), and web access. It uses a "bring your own subscription" model: it does not resell tokens or impose quotas; usage draws on the user's own subscriptions with each agent. At least one supported agent must be installed and authenticated on the machine. Installation options include the official install script, Homebrew, winget, or `npx t3@latest`; see the official repository README.

T3 Code is a session-orchestration and control layer, not a model and not a replacement for Claude Code or Codex themselves; each agent's capability boundaries remain set by its provider. The official README also states the project is very early.

## Discussion in the show

In Weekly #002's chapter “Agent API：还需要自己维护一套 Harness 吗” (Agent API: do you still need to maintain your own harness?), while discussing wrapper products that adapt to multiple coding agents, [Guizang mentioned that T3 Code is very popular and said its developer has a sharp tongue but a large user base](/weekly/002/transcript#quote-fbd594a31a1f660943e8) (Chinese transcript). He also explained the position of such products: agent frameworks bind to their own models and API formats, pushing adaptation costs ever higher. These were the participants' observations and judgments at the time, not official statements.

## Frequently asked questions

### What is T3 Code?

An open-source control plane and GUI for orchestrating multiple coding agents, described at [t3.codes](https://t3.codes/). It manages sessions such as Claude Code and Codex; it is not a model itself.

### Which coding agents does T3 Code support?

The official list covers Claude Code, Codex, Antigravity, OpenCode, Cursor, and Grok, with at least one agent installed and authenticated on the machine. Check the [official repository README](https://github.com/pingdotgg/t3code/) for the current list.

### Does T3 Code cost money?

T3 Code itself is MIT-licensed open source and free; it does not resell tokens, and model usage runs through your own subscriptions with each agent (bring your own subscription).

### How do I install T3 Code?

The official site provides an install script (see [t3.codes](https://t3.codes/)) plus desktop channels such as Homebrew cask (`t3-code`) and winget (`T3Tools.T3Code`); iOS and Android apps are available, and `npx t3@latest` runs it directly.

## Sources

- [T3 Code official website](https://t3.codes/)
- [GitHub: pingdotgg/t3code](https://github.com/pingdotgg/t3code/)
