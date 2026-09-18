---
entityType: product
entity: hermes-agent
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Hermes Agent: the Nous Research open-source agent, install, capabilities, and OpenClaw migration | Next Token Wiki'
seoDescription: 'Learn what Hermes Agent by Nous Research is: its self-improving loop, run backends, messaging gateways, installation and Windows support, plus how the Weekly show discussed it.'
---

## What Hermes Agent is

Hermes Agent is an open-source AI agent from [Nous Research](https://www.nousresearch.com/), officially described as an "open-source, self-improving AI agent," released under the MIT license. It runs from the terminal, messaging platforms, and IDE workflows, and is positioned as a personal agent that accumulates experience the longer you use it. The product site is [hermes-agent.ai](https://hermes-agent.ai/), and the code lives on GitHub under the NousResearch organization.

## Capabilities and how it runs

Per the official README and docs, Hermes provides persistent memory, reusable skills, tool use, cron jobs, browser automation, code execution, and multi-agent delegation; it creates skills from experience and improves them during use. It is model-agnostic: the `hermes model` command switches between model endpoints (the README lists Nous Portal, OpenRouter, OpenAI, or a custom endpoint).

There are several ways to run it. A single gateway process can connect Telegram, Discord, Slack, WhatsApp, Signal, and the CLI at once. Execution backends include local, Docker, SSH, Daytona, Singularity, and Modal — from a cheap always-on VPS to serverless backends that hibernate and wake on demand. Supported systems are Linux, macOS, WSL2, and Android via Termux; native Windows is not supported and requires WSL2. Installation is covered in the [official how-to](https://hermes-agent.ai/how-to), with docs at hermes-agent.nousresearch.com.

## Discussion in the show

In Weekly #001's chapter “OpenClaw 和 Coding Agent 正在双向融合” (OpenClaw and coding agents are converging), the panel placed Hermes in a comparison of personal-agent products: Xiangyang Qiaomu argued [OpenClaw's experience still trails Hermes](/weekly/001/transcript#quote-2c157f56d0d44685bbd5), and Guizang said [Hermes at least behaves like a product team](/weekly/001/transcript#quote-ef96ad2caa39a9c3c681). Yang Pan offered the opposite direction of experience: he switched from [OpenClaw](/en/wiki/products/openclaw) to Hermes the month before, and [found the gap significant — when he assigned a task over several consecutive messages, Hermes often stopped mid-way, less smooth than OpenClaw](/weekly/001/transcript#quote-bf6243fb3300e77ecd47). These are individual impressions; the same product can behave differently under different usage patterns.

In “产品迭代速度，正在成为新的组织能力” (iteration speed as an organizational capability), Guizang used the Hermes team as a benchmark, [arguing that teams unable to match Hermes-class iteration speed cannot keep up](/weekly/001/transcript#quote-2c9c980d4a92d113a2e7). That is a participant's view on team pace, not official information.

## Frequently asked questions

### What is Hermes Agent?

An open-source personal AI agent developed by [Nous Research](https://www.nousresearch.com/) under the MIT license, usable from the terminal, messaging platforms, and IDE, with persistent memory, skill accumulation, cron jobs, browser automation, and multi-agent delegation. See the [official README](https://github.com/NousResearch/hermes-agent).

### How do I install Hermes Agent? Does it support Windows?

The official [how-to](https://hermes-agent.ai/how-to) provides a one-line install script. Supported systems are Linux, macOS, WSL2, and Android via Termux. Native Windows is not supported — Windows users should install WSL2 first.

### How does Hermes Agent relate to OpenClaw?

They are peer products in the personal-agent category. Hermes officially supports migrating from OpenClaw with `hermes claw migrate`, which imports existing configuration, memories, and skills. In Weekly #001, Yang Pan, Xiangyang Qiaomu, and Guizang each described their own experiences with the two products — and did not all agree.

### Which models can Hermes Agent use?

It is model-agnostic: `hermes model` switches between Nous Portal, models on OpenRouter, or a custom endpoint with no code changes, per the [official site](https://hermes-agent.ai/). Check the docs for currently supported options.

## Sources

- [Hermes Agent website](https://hermes-agent.ai/)
- [Hermes Agent GitHub repository (NousResearch)](https://github.com/NousResearch/hermes-agent)
- [Hermes Agent how-to docs](https://hermes-agent.ai/how-to)
