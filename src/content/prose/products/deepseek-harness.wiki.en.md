---
entityType: product
entity: deepseek-harness
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'DeepSeek Harness: open-source plugin-based agent framework and boundaries | Next Token Wiki'
seoDescription: 'What DeepSeek Harness is, its plugin architecture, run modes, installation, developer-preview status, and how the Weekly show discussed its evaluation and iteration.'
---

## What is DeepSeek Harness

DeepSeek Harness (officially shortened to dsh) is an open-source agent framework from DeepSeek for coding-agent workflows, published under the MIT license in its [GitHub repository](https://github.com/deepseek-ai/deepseek-harness). The official site describes its core idea as "everything is a plugin": agent capabilities such as models, tools, skills, sessions, sandboxes, storage, loops, scheduling, and the UI are all composed of plugins, on top of the Cordis kernel, which only handles plugin mounting, unloading, and dependencies.

It sits on a different layer from DeepSeek models: models provide the intelligence, the Harness provides the execution environment and tool orchestration. It is officially released as a developer preview, and the [official site](https://www.deepseek.com/harness/en/) states that core plugins and base APIs will keep evolving; the repository README likewise warns of compatibility-breaking changes.

## Usage and boundaries

The Harness starts from the command line. The official [quick start](https://www.deepseek.com/harness/en/) gives `npx @deepseek-ai/dsh web` (Node.js required), which launches a local Web UI; you can also clone the repository and build from source. The official site lists four run modes:

- **Standard**: a full-featured coding agent with file editing, shell, search, skills, subagents, and workflows.
- **Code**: a Code Mode SDK that lets the model write TypeScript to orchestrate multi-step tool calls.
- **Minimal**: only a persistent bash and str_replace_editor, positioned by the official site for benchmarking models.
- **Creator**: adds runtime inspection, in-memory plugin experimentation, and preset authoring.

Boundaries: it is a self-hosted developer tool, and its plugin ecosystem must be adapted by you as versions move; the repository's [SAFETY.md](https://github.com/deepseek-ai/deepseek-harness) is required reading before running it. How it differs from other agent forms: DeepSeek Harness is an open framework for building agents, [OpenClaw](/en/wiki/products/openclaw) is a personal assistant you install on your own devices, [WorkBuddy](/en/wiki/products/workbuddy) is Tencent's desktop office agent product, and [Grok Bot](/en/wiki/products/grok-bot) makes a persistent cloud computer the product itself — framework, self-hosted assistant, desktop product, and cloud environment respectively.

## Discussion in the show

In Weekly #001's chapter [Harness evaluation: completion rates, token cost, and the "kill line"](/weekly/001/transcript#chapter-06), Yang Pan describes the Harness Eval benchmark published by Runta, says DeepSeek Harness scored highly with different token consumption across its three evaluated modes, and [recounts how it retrieved full WeChat official-account articles](/weekly/001/transcript#quote-786597a8b2d26974dc6a) from his own experience; he also offers the view that the Harness exists for joint training of models and agents. In the same chapter, Xiangyang Qiaomu argues it suits developer DIY better than Pi.

In Weekly #001's chapter [WorkBuddy, Qoder, OpenClaw, and DeepSeek Harness](/weekly/001/transcript#chapter-14), Yang Pan observes that it kept releasing versions after the hype faded; [Guizang complains that the plugin system pushes complexity onto developers and that frequent updates break plugin compatibility](/weekly/001/transcript#quote-9b223772ff9194051c4d), while Orange calls the updates breaking changes. Weekly #002's chapter [Harness updates move too fast: keeping plugins and workflows current](/weekly/002/transcript#chapter-10) continues that thread. In ["Trying DeepSeek Flash and Harness"](/weekly/002/transcript#chapter-08), [Yang Pan strongly recommends the combination for Chinese-language information retrieval](/weekly/002/transcript#quote-8316bc20929e3c03de42) while admitting he cannot explain why the pairing works — these are participant experiences and opinions, not official endorsements or independent benchmarks. These chapters are in the Chinese transcript; an English transcript is not available.

## Frequently asked questions

### How do I install DeepSeek Harness?

Per the official documentation, run `npx @deepseek-ai/dsh web` after installing Node.js to start the local Web UI; to modify the source, clone the [GitHub repository](https://github.com/deepseek-ai/deepseek-harness) and build with pnpm. Requirements and steps are on the [official site](https://www.deepseek.com/harness/en/).

### Is DeepSeek Harness open source, and does it cost money?

The framework is open source under the MIT license, and the official site does not charge for the framework itself; your real costs come from the model you connect and its API usage.

### Does DeepSeek Harness require DeepSeek models?

The official architecture lists models as one of the swappable plugin types, and the documentation does not restrict usage to DeepSeek models. The experiences shared on the show all used the DeepSeek Flash plus Harness combination, so those judgments reflect personal experience.

### How does DeepSeek Harness relate to Claude Code and Codex?

They are different categories: DeepSeek Harness is a self-hostable, plugin-based open framework with replaceable models, while Claude Code and Codex are vendor-provided coding agent products. Weekly #001's evaluation chapter compared several coding agents within one harness-evaluation framework; that is the participants' discussion of a third-party benchmark, not a verdict.

### Is DeepSeek Harness stable enough for production?

The official position is developer preview, with core plugins and base APIs expected to keep changing, including compatibility-breaking changes. Show participants also repeatedly noted that rapid updates left plugins behind. Evaluate version pinning and adaptation costs before building production workflows on it.

### What versioning scheme does DeepSeek Harness follow?

Yang Pan observed on Weekly #001 that it releases continuously under Semantic Versioning, which confused some users. The official README only emphasizes rapid iteration and possible breaking changes and makes no formal version promises; check the [repository releases](https://github.com/deepseek-ai/deepseek-harness).

## Sources

- [DeepSeek Harness official site (English)](https://www.deepseek.com/harness/en/)
- [DeepSeek Harness official site (Chinese)](https://www.deepseek.com/harness/)
- [DeepSeek Harness GitHub repository](https://github.com/deepseek-ai/deepseek-harness)
