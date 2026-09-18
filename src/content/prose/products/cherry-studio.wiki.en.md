---
entityType: product
entity: cherry-studio
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Cherry Studio: the open-source multi-model AI desktop client | Next Token Wiki'
seoDescription: 'What Cherry Studio is, which model providers and local models it supports, MCP setup, licensing and the enterprise edition, plus the Next Token discussion.'
---

## What Cherry Studio is

Cherry Studio is an open-source AI desktop client that brings multiple model providers and local models into a single desktop application. The community edition is released under the AGPL-3.0 license, and a privately deployable enterprise edition is offered separately. Development is open at [GitHub (CherryHQ/cherry-studio)](https://github.com/CherryHQ/cherry-studio); the official site is [cherry-ai.com](https://www.cherry-ai.com/) and the documentation lives at [docs.cherry-ai.com](https://docs.cherry-ai.com/).

## Usage and boundaries

- Multi-provider access: per the official README, it supports major cloud providers such as OpenAI, Gemini and Anthropic, selected web AI services, and local models through Ollama and LM Studio; a single conversation can compare answers from several models side by side.
- Assistants and knowledge: over 300 preconfigured assistants, custom assistants, and processing for text, images, Office and PDF documents, plus topic management, WebDAV backup, AI translation, Mermaid diagrams and code highlighting.
- Tooling: support for MCP (Model Context Protocol) servers; setup is documented in the [official documentation](https://docs.cherry-ai.com/).
- Platforms: the official repository ships desktop builds for Windows, macOS and Linux; mobile apps (Android/iOS) are listed as planned items on the official roadmap, and published releases are on [GitHub Releases](https://github.com/CherryHQ/cherry-studio/releases).

Specific steps for MCP setup, model connections and backups follow the official documentation.

## Discussion in the show

In the "Agent API：还需要自己维护一套 Harness 吗" (Agent APIs: do you still need to maintain your own harness?) chapter of Weekly #002, Guizang describes how client-style products have to adapt to multiple agent frameworks whose API formats differ, creating a lot of redundant work. [Yang Pan then asks whether Cherry Studio is one of the products that already did this work](/weekly/002/transcript#quote-c13afae3d14869fd480e); Guizang replies that many have, and continues with T3 Code as an example while discussing the adaptation cost of these "shell" products. This is a discussion of the participants' own development experience, not a feature-by-feature confirmation of Cherry Studio. See the [Chinese transcript](/weekly/002/transcript#chapter-14); an English transcript is not available.

## Frequently asked questions

### What is Cherry Studio?

An open-source AI desktop client that puts multiple model providers and local models in one application, with assistants, document handling and MCP support. See the [official site](https://www.cherry-ai.com/) and the [GitHub repository](https://github.com/CherryHQ/cherry-studio).

### Which models does Cherry Studio support?

Per the official README: major cloud providers such as OpenAI, Gemini and Anthropic, selected web AI services, and local models via Ollama and LM Studio; one conversation can compare several models at once. The current provider list is in the official documentation.

### Is Cherry Studio free?

The community edition is open source under AGPL-3.0 and free to use, provided the license terms are followed for commercial use; a separately licensed, privately deployable enterprise edition is also offered. Licensing details are in the repository.

### Is there a mobile version of Cherry Studio?

The official README lists Android/iOS apps as roadmap items; released desktop builds cover Windows, macOS and Linux. Available versions are on [GitHub Releases](https://github.com/CherryHQ/cherry-studio/releases).

### How do I configure MCP in Cherry Studio?

The official documentation covers MCP configuration. Because model and MCP connection details can change between versions, follow the current instructions at [docs.cherry-ai.com](https://docs.cherry-ai.com/).

## Sources

- [Cherry Studio official website](https://www.cherry-ai.com/)
- [GitHub: CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)
- [Cherry Studio official documentation](https://docs.cherry-ai.com/)
