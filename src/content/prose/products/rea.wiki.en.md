---
entityType: product
entity: rea
locale: en
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'REA (Reverse Engineer Anything): Reverse-Engineering Tools for AI Agents | Next Token Wiki'
seoDescription: 'What REA is, which targets and AI coding agents it supports, how to install it, and the Next Token Weekly #006 discussion of REA and AI reverse engineering.'
---

## What REA is

REA (Reverse Engineer Anything) is an open-source project, hosted at GitHub (morluto/rea), that gives AI coding agents reverse-engineering tools. Its official description is "One MCP for reverse engineering across binaries, applications, and runtime behavior" — analysis capabilities spanning binaries, applications, and runtime behavior, exposed to agents through an MCP interface. REA’s own code is MIT-licensed, and the project ships a standalone CLI plus the website [rea.tools](https://rea.tools).

## Uses and boundaries

REA’s core scenario is analyzing software without source code: pick a feature you like, have an agent work out how it operates down to the binary level, and get code, references, and unknowns back with evidence and stated limitations. According to the official README, supported targets include native binaries (pseudocode, assembly, symbols), JavaScript/Electron apps, .NET assemblies, websites, WASM, Android APKs and devices, firmware, SQLite databases, HAR/SAZ network captures, and process behavior.

REA does not reimplement a reverse-engineering engine; it orchestrates existing toolchains for the agent. Deep native analysis can call Hopper, Ghidra, or IDA (commercial tools must be legally licensed by the user), with support for external tools such as objdump, Rizin, JADX, Apktool, Binwalk, and mitmdump; static JavaScript and .NET analysis are built in.

Setup runs `npx rea-agents setup` to register an MCP server for agents such as Claude Code, Codex, Cursor, and Gemini CLI; it requires Node.js 22 or later. Analysis runs locally. The project is intended for lawful research, education, interoperability, and analysis of software you own or are authorized to examine. Requirements and the current tool catalog are in the [official repository README](https://github.com/morluto/rea).

## In the show

In Weekly #006’s chapter “REA 与 AI 逆向：给怒喵鼠标补一个 macOS 驱动” (REA and AI reverse engineering: adding a macOS driver for an Angry Miao mouse), [Xiangyang Qiaomu opened with the observation that as models get stronger, it feels like everything can be reverse-engineered and "all hardware and software are forced open-source"](/weekly/006/transcript#quote-e163f25f5667f2010006). [Guizang said he had not used REA, finding it "a bit heavy," preferring to let AI try directly first](/weekly/006/transcript#quote-b55c73e9c9d26550fb59); he then told the story of using an [Angry Miao](/en/wiki/brands/angry-miao) mouse with no macOS driver and asking someone to reverse it and build a native driver — [written overnight, with DPI switching, key remapping, lighting effects, and three connection modes all working](/weekly/006/transcript#quote-b79ec8065580ad28d3a6). Responding to the community claim (relayed by Xiangyang Qiaomu) that REA is "just a wrapper" around a few common cracking projects, [Guizang argued REA is genuinely powerful because it integrates many obscure cracking tools](/weekly/006/transcript#quote-1972ff8f5c4a5ffea27b), and [Yang Pan summed the tool up as a typical Skill pattern](/weekly/006/transcript#quote-327453006a4f9300b48b). These are the participants’ experiences and judgments. Chinese transcript: [the chapter](/weekly/006/transcript#chapter-02).

## FAQ

### What is REA?

REA (Reverse Engineer Anything) is an open-source project that gives AI agents reverse-engineering tools over MCP, so an agent can explain how a piece of software works down to the binary level and back its claims with evidence. See the [GitHub repository morluto/rea](https://github.com/morluto/rea).

### Who publishes REA?

REA is open-sourced on GitHub (morluto/rea) under the MIT license for its own code, with the website rea.tools; no official channel states a company affiliation.

### How do I install REA, and which AI coding tools does it support?

Per the official README, run `npx rea-agents setup` to register the MCP server for agents such as Claude Code, Codex, Cursor, and Gemini CLI; Node.js 22 or later is required. A standalone CLI is also available. See the [official repository](https://github.com/morluto/rea).

### Which targets can REA analyze? Does it support APKs?

Per the official README, supported targets include native binaries, JavaScript/Electron apps, .NET assemblies, websites, WASM, Android APKs and devices, firmware, SQLite databases, network captures, and process behavior — APKs are on the list.

### Is REA just a wrapper?

REA’s design is to orchestrate existing reverse-engineering toolchains (Hopper, Ghidra, IDA) for agents, while JavaScript and .NET static analysis are built in; commercial tools require the user’s own license. "Wrapper" is a community framing that also came up in the show; the project’s actual capabilities are best judged from the official README and hands-on use.

## Sources

- [GitHub — morluto/rea (REA: Reverse Engineer Anything)](https://github.com/morluto/rea)
- [REA website](https://rea.tools)
