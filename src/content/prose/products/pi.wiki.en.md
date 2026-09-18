---
entityType: product
entity: pi
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Pi: the minimal terminal coding agent | Next Token Wiki'
seoDescription: 'What the Pi terminal coding agent is, its extension mechanisms and install paths, and how the Next Token show discussed it.'
---

## What Pi is

Pi is a minimal coding agent that runs in the terminal, built by Earendil Inc. and contributors under the MIT license. Its website is [pi.dev](https://pi.dev/) and its documentation lives at [pi.dev/docs/latest](https://pi.dev/docs/latest). The official tagline is "There are many agent harnesses but this one is yours": the core stays small so users adapt Pi to their workflows through extensions, not the other way around. Note the naming: this entry covers the terminal coding agent at pi.dev, not Raspberry Pi or other products called Pi.

## Uses and boundaries

- Extension mechanisms: TypeScript extensions (custom tools, commands, events, and UI), skills for reusable on-demand capabilities, prompt templates triggered via slash commands, themes, and pi packages that bundle and share extensions, skills, prompts, and themes.
- Models and providers: officially 15+ providers and hundreds of models, switchable mid-session with `/model`; local models are also supported via llama.cpp.
- Sessions and context: sessions are stored as trees with branching and sharing; context engineering includes AGENTS.md, SYSTEM.md, compaction, and skills.
- Integration modes: interactive, print/JSON, RPC, and SDK usage, embeddable in Node.js applications through the SDK.
- Design tradeoff: officially "Primitives, not features" — the core deliberately omits MCP, sub-agents, plan mode, and permission popups; add them as extensions or packages when needed.
- Installation: an official curl installer script, or the npm package `@earendil-works/pi-coding-agent`.

## Discussion in the show

- Weekly #001’s chapter “Harness 评测：完成率、Token 成本与'斩杀线'” ([Chinese transcript](/weekly/001/transcript#chapter-06)) compares agent harnesses: Xiangyang Qiaomu says [many developers like Pi’s harness](/weekly/001/transcript#quote-07a0f0977ece93cefb08); Yang Pan relays a third-party evaluation published that day (Runta’s Harness Eval) saying [Pi sat inside the “kill line,” overshadowed by DeepSeek Harness](/weekly/001/transcript#quote-2208a16d6d07cfce6493); Orange adds that [Pi is lightweight but much weaker in extensibility, with poor MCP support](/weekly/001/transcript#quote-9f35641f5154b777458c). Note: the evaluation figures are relayed through the show, not official Pi data; and omitting MCP from the core is, per official wording, a deliberate design choice — the two assessments come from different angles.
- In Weekly #002’s chapter “Agent API：还需要自己维护一套 Harness 吗”, while discussing growing harness complexity, Xiangyang Qiaomu says [Pi was said to be very minimal already, but it has accumulated a lot](/weekly/002/transcript#quote-4b64d0f0dd8c42c340c3).

## Frequently asked questions

### What is Pi?

Pi is the terminal coding agent from pi.dev: a minimal core customized through TypeScript extensions, skills, prompt templates, and themes, MIT-licensed and embeddable via an SDK. It is unrelated to Raspberry Pi or other products named Pi.

### How do I install Pi?

The official one-line installer is `curl -fsSL https://pi.dev/install.sh | sh`; alternatively install the npm package `@earendil-works/pi-coding-agent`. After installing, run `pi` and authenticate with `/login` or an API key. See the [official documentation](https://pi.dev/docs/latest).

### Does Pi support MCP?

The core deliberately omits MCP, sub-agents, and plan mode — official wording is "Primitives, not features." Add MCP support through extensions or community packages when needed.

### How does Pi differ from terminal agents like Claude Code or OpenCode?

Per its official positioning, Pi’s differentiator is a minimal core plus user-defined extensions: a very small system prompt, a deliberately narrow core, and workflows built by the user through extensions. Feature comparisons change with versions, so treat the [official documentation](https://pi.dev/docs/latest) as the reference and try it yourself.

## Sources

- [Pi website](https://pi.dev/)
- [Pi official documentation](https://pi.dev/docs/latest)
