---
entityType: product
entity: typescript
locale: en
slot: wiki
updatedAt: '2026-11-09'
seoTitle: "TypeScript: Microsoft's JavaScript static typing language | Next Token Wiki"
seoDescription: "What TypeScript is: Microsoft's 2012 statically typed superset of JavaScript, and the episode 009 discussion of migrating Electron plugins written in TypeScript."
---

## TypeScript

TypeScript is a programming language developed by Microsoft, first released in October 2012 and led by Anders Hejlsberg and colleagues, open source under the Apache 2.0 license (per [English Wikipedia](https://en.wikipedia.org/wiki/TypeScript)). It adds static type checking on top of JavaScript, and the code is still transpiled down to JavaScript to run. The official site is [typescriptlang.org](https://www.typescriptlang.org).

## Usage and distinctions

TypeScript targets JavaScript applications at scale: type annotations let the editor catch typos and interface mismatches while writing code, and make it easier for generative AI coding tools to read and modify existing code. Its relationship to [JavaScript](/en/wiki/products/javascript) is that of a superset — JavaScript code can usually be compiled as TypeScript directly.

Many desktop app plugin ecosystems are written in TypeScript. The example mentioned in episode 009: [Obsidian](/en/wiki/products/obsidian) and DeepSeek Harness are both built on [Electron](/en/wiki/products/electron), and their plugins are both written in TypeScript, so the shared syntax keeps migration work between the two small.

## Discussion in the show

In episode 009's chapter on the harness and plugin ecosystem ("Harness 与插件生态", [English gloss](/weekly/009/transcript#chapter-01) in the Chinese transcript), Xiangyang Qiaomu describes migrating his [Obsidian](/en/wiki/products/obsidian) plugins wholesale into Harness plugins: because both sides are Electron and both use TypeScript, he had Codex perform the migration and it went through "completely smoothly" (see [the passage](/weekly/009/transcript#quote-f532968167318dcc8271)). This is his personal experience.

## Frequently asked questions

### How does TypeScript relate to JavaScript?

TypeScript is a superset of JavaScript: the syntax is compatible with JavaScript, with static type annotations added, and the output is transpiled back to JavaScript to run. See the [JavaScript entry](/en/wiki/products/javascript) for the language itself.

### Who develops TypeScript?

Microsoft develops and maintains it. It was first released in October 2012, with the language designed under the lead of Anders Hejlsberg and colleagues (per English Wikipedia).

### Is TypeScript open source?

Yes, it is open source under the Apache 2.0 license on [GitHub](https://github.com/microsoft/TypeScript).

### Should I learn JavaScript or TypeScript first for frontend work?

The syntaxes are the same, so it is common to learn how JavaScript runs first and then pick up TypeScript's type system; the official handbook's [getting-started chapter](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) teaches TypeScript from a JavaScript base.

## Sources

- [TypeScript official website](https://www.typescriptlang.org)
- [TypeScript handbook: TypeScript from scratch](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Wikipedia: TypeScript](https://en.wikipedia.org/wiki/TypeScript)
- [microsoft/TypeScript repository](https://github.com/microsoft/TypeScript)
