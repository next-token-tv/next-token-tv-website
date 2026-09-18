---
entityType: product
entity: codepilot
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'CodePilot: a desktop workspace for Claude Code, Codex, and beyond | Next Token Wiki'
seoDescription: 'What CodePilot is, the agents and model providers it supports, its BSL license and downloads, and the Weekly episode where its builder explained the underlying framework.'
---

## What CodePilot is

CodePilot is a desktop AI-agent workspace built by Guizang (GitHub user op7418). The official site is [codepilot.sh](https://www.codepilot.sh/), and the source is published under the BSL 1.1 license in the GitHub repository [op7418/CodePilot](https://github.com/op7418/CodePilot). It brings command-line coding agents such as Claude Code and Codex together with a built-in CodePilot agent in one desktop workspace for project work and everyday tasks; despite the similar name, it is unrelated to GitHub Copilot. The repository description says it is built with Electron and Next.js (see [Electron](/en/wiki/products/electron)).

## Uses and boundaries

Capabilities listed on the official site include: multiple chat sessions with independent contexts; permission controls and approval settings; a visual project workspace for reviewing files and changes; a personal assistant with preferences and memories; and Skills, MCP, and CLI tool extensions, with sessions persisting across restarts. Model access is supplied by the user: the app connects to Anthropic, OpenRouter, DeepSeek, GLM, Kimi, OpenAI-compatible APIs, and local Ollama; using Claude Code and Codex requires installing their CLIs and signing in, and agents cannot be swapped mid-conversation. Platforms cover macOS (Apple Silicon and Intel), Windows, and Linux. Under BSL 1.1, personal, educational, nonprofit, and evaluation use is free, while commercial use (in paid products, or at companies over 100 employees) requires a separate license; version updates are on the official release channels.

## Discussion in the show

In Weekly #002’s chapter “Agent API: do you still need to maintain your own harness?”, Xiangyang Qiaomu asked Guizang [how he built CodePilot’s underlying framework in the earliest version](/weekly/002/transcript#quote-02143b2e529a69172809). Guizang answered that early on, everyone built a “shell” — the core agent loop and model adaptation were left to upstream projects, and his own work only adapted Claude Code. As each vendor bound its agents and models more tightly, the product had to grow a runtime router that directed user input to different CLIs and agent frameworks, and adaptation costs kept climbing. The exchange uses CodePilot as a case study in the route and costs of building an agent workspace as a small team. See the [Chinese transcript chapter](/weekly/002/transcript#chapter-14).

## Frequently asked questions

### What is CodePilot, and who built it?

A desktop AI-agent workspace that puts Claude Code, Codex, and a built-in agent in one interface, built by designer Guizang (GitHub user op7418); the official site is [codepilot.sh](https://www.codepilot.sh/).

### Is CodePilot related to GitHub Copilot?

No — the names are just similar. GitHub Copilot is Microsoft GitHub’s coding assistant; this CodePilot is an independent open-source desktop workspace. Search with terms like “codepilot.sh” or “Guizang” to avoid the mix-up.

### Which agents and models does CodePilot support?

Claude Code and Codex (install their CLIs and sign in) plus a built-in agent; model providers include Anthropic, OpenRouter, DeepSeek, GLM, Kimi, OpenAI-compatible APIs, and local Ollama. See the [official site](https://www.codepilot.sh/) for the latest list.

### Is CodePilot free?

The app itself is free under BSL 1.1 for personal, educational, nonprofit, and evaluation use; commercial use (paid products, or companies over 100 employees) needs a separate license. Model usage is billed by whichever provider you connect.

### Where do I download CodePilot?

Installers for macOS, Windows, and Linux are available from the [official site](https://www.codepilot.sh/) or its [GitHub repository](https://github.com/op7418/CodePilot); version notes are on the official release channels.

## Sources

- [CodePilot official website](https://www.codepilot.sh/)
- [CodePilot GitHub repository (op7418/CodePilot)](https://github.com/op7418/CodePilot)
