---
entityType: product
entity: openclaw
locale: en
slot: wiki
updatedAt: '2026-09-17'
seoTitle: 'OpenClaw: self-hosted open-source personal AI assistant and boundaries | Next Token Wiki'
seoDescription: 'What OpenClaw is, its self-hosted gateway architecture, supported chat channels, skills and plugins, model providers, and how the Weekly show discussed it.'
---

## What is OpenClaw

OpenClaw is an open-source personal AI assistant maintained by the [independent nonprofit OpenClaw Foundation](https://openclaw.ai/), released under the MIT license. Created by Peter Steinberger and the community, the foundation employs the core team and signs releases. It is self-hosted: you run a Gateway process on your own computer or server as the bridge between messaging channels, models, and tools. State, memory, and credentials live on your own hardware, and the official docs say OpenClaw phones home by default for nothing but a daily version check.

It occupies the "self-hosted personal assistant" layer, unlike vendor-hosted cloud agents: [DeepSeek Harness](/en/wiki/products/deepseek-harness) is an open framework for building coding agents, [Grok Bot](/en/wiki/products/grok-bot) makes a vendor-run persistent cloud computer the product, and [WorkBuddy](/en/wiki/products/workbuddy) is Tencent's desktop office agent product, while OpenClaw puts the assistant on your own devices and inside the chat apps you already use.

## Usage and boundaries

The [official documentation](https://docs.openclaw.ai/) describes the Gateway as the single source of truth for sessions, routing, and channel connections. After installing, run `openclaw onboard` to initialize and `openclaw gateway install` to set up the background service; there are also native apps for macOS, iOS, Android, Windows, and Linux, plus a browser Control UI. Node 24.16+ or 26.1+ is required.

- **Chat channels**: the official channel list covers Discord, Google Chat, iMessage, Matrix, Microsoft Teams, Signal, Slack, Telegram, WhatsApp, Zalo, WebChat, Nostr, Twitch, and more via channel plugins; one Gateway serves every configured channel. WeChat is not on the official channel list.
- **Skills and plugins**: skills load repeatable procedures on demand; plugins extend channels, model providers, and tools. The community marketplace is ClawHub.
- **Models**: model providers are swappable, with official documentation covering providers such as Claude, Codex, and local models. Usage costs follow the provider you choose.

Boundaries: you carry the operations burden yourself — the machine must stay online and configuration is yours to manage. Multiple show participants pointed to configuration changes and frequent updates as the most fragile parts (see below), which matches the fully self-hosted shape of the product.

## Discussion in the show

In Weekly #001's chapter [WorkBuddy, Qoder, OpenClaw, and DeepSeek Harness](/weekly/001/transcript#chapter-14), [Yang Pan mentions that OpenClaw 2.0 shipped that week to little attention and continued complaints](/weekly/001/transcript#quote-2a6de0adc8a7bfe6095e), and Orange [recalls that OpenClaw updates used to leave everyone repairing their setups](/weekly/001/transcript#quote-9fc5c848dee6a2f8ce52) — participants recounting community state at the time.

In [OpenClaw and coding agents are converging in both directions](/weekly/001/transcript#chapter-15), Yang Pan observes that OpenClaw absorbed capabilities such as Feishu while Codex and ZCode absorbed OpenClaw-style features, a two-way convergence; [from his own experience, he used OpenClaw for half a year without a crash and details how switching to Hermes changed multi-message task handling](/weekly/001/transcript#quote-625d7960654bcfcabcea). Guizang and Xiangyang Qiaomu are less sanguine about updates and stability. These are personal experiences and opinions. In Weekly #002's chapter [In-platform AI assistants: simple entry, complete experience](/weekly/002/transcript#chapter-17), Orange relays feedback from the developer of The One that the WeChat-provided OpenClaw QR code failed to receive messages about 10% of the time — a third-party integration anecdote. All chapters linked are in the Chinese transcript; an English transcript is not available.

## Frequently asked questions

### How do I install OpenClaw?

Three official entry points: on macOS/Linux/WSL2 run `curl -fsSL https://openclaw.ai/install.sh | bash`, on Windows use the PowerShell script, and if you manage Node yourself use `npm install -g openclaw@latest`. Then run `openclaw onboard`; see the [official documentation](https://docs.openclaw.ai/).

### Which chat channels does OpenClaw support?

The official documentation lists Discord, Google Chat, iMessage, Matrix, Microsoft Teams, Signal, Slack, Telegram, WhatsApp, Zalo, WebChat, Nostr, Twitch, and extensions via channel plugins. WeChat is not on the official list; the WeChat integration discussed on the show is a third-party practice without official support.

### Which models can OpenClaw use?

Model providers are swappable: the documentation covers providers such as Claude, Codex, and local models. You configure the credentials for the provider you pick, and billing follows that provider.

### Is OpenClaw free?

The software is open source (MIT) with no paid tier, available from the [GitHub repository](https://github.com/openclaw/openclaw). Your costs are your own hardware and the API usage of whatever model provider you connect.

### How does OpenClaw differ from Hermes Agent and Claude Code?

OpenClaw is a self-hosted personal assistant framework running on your own devices and connected to your chat channels. Hermes Agent is an open-source agent from Nous Research that runs locally or in the cloud. Claude Code is Anthropic's coding agent product and does not handle personal-assistant channel integration. Weekly #001's convergence chapter includes a personal comparison of OpenClaw and Hermes by a participant — opinion, not a benchmark.

### Where does OpenClaw keep my data?

Per the official docs, state, memory, and credentials live on the hardware where your Gateway runs, and default telemetry is only a daily version check. Backups, security, and availability are your responsibility in exchange.

## Sources

- [OpenClaw official website](https://openclaw.ai/)
- [OpenClaw documentation](https://docs.openclaw.ai/)
- [OpenClaw GitHub repository](https://github.com/openclaw/openclaw)
