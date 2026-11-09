---
entityType: product
entity: solid
locale: en
slot: wiki
updatedAt: '2026-11-09'
seoTitle: "Solid: the fine-grained reactive JavaScript UI framework | Next Token Wiki"
seoDescription: "What Solid is: Ryan Carniato's fine-grained reactive UI framework at 1.0 in 2021, how it differs from React, and the episode 009 framework-choice discussion."
---

## Solid

Solid is a JavaScript user interface framework created by Ryan Carniato: the project repository on GitHub dates to 2018, and version 1.0 was released on June 28, 2021 (per the [GitHub release record](https://github.com/solidjs/solid/releases/tag/v1.0.0)), open source under the MIT license. The official documentation is at [docs.solidjs.com](https://docs.solidjs.com).

## Usage and distinctions

Solid writes components in JSX and uses fine-grained reactive updates: a state change updates only the parts of the interface that depend on it, without re-rendering whole components and without a virtual DOM. [React](/en/wiki/products/react), by contrast, re-renders per component.

This is exactly why Solid is easy to confuse with React: the component syntax looks similar while the update mechanics differ, and handing one framework's component code to a model or developer trained on the other invites mistakes. Around Solid there is also SolidStart, the official meta-framework for applications with routing and server capabilities.

## Discussion in the show

In episode 009's chapter on the harness and plugin ecosystem ("Harness 与插件生态", [English gloss](/weekly/009/transcript#chapter-01) in the Chinese transcript), Yang Pan recounts a case that struck him: a company used Solid, but after adopting AI coding, the AI kept writing React syntax into Solid code, and the company eventually switched back to React (see [the passage](/weekly/009/transcript#quote-1015d384978ae7a10e49)). He calls the Matthew effect in framework choice "very obvious" (see [the passage](/weekly/009/transcript#quote-633b0bade23857fa1959)) and revisits the example in the chapter "软件和游戏网文化与实践" ([software and games going web-native](/weekly/009/transcript#chapter-04) in the Chinese transcript). These are the participants' personal views and secondhand accounts; the show does not name the company.

## Frequently asked questions

### How does Solid differ from React?

Both write components in JSX and look similar, but Solid uses fine-grained reactive updates without a virtual DOM while React re-renders per component. The mechanical difference means the code cannot be mixed directly; see the [React entry](/en/wiki/products/react).

### Who develops Solid?

Ryan Carniato started it in 2018, and version 1.0 was released on June 28, 2021 (per the GitHub release record).

### What is SolidStart?

The official meta-framework for Solid, adding routing, server-side rendering and other application-level capabilities; see the [SolidStart guide](https://docs.solidjs.com/solid-start).

### Is Solid free?

Yes, it is open source under the MIT license with the code public on [GitHub](https://github.com/solidjs/solid).

## Sources

- [Solid official documentation](https://docs.solidjs.com)
- [solidjs/solid repository](https://github.com/solidjs/solid)
- [Solid v1.0.0 release record (June 28, 2021)](https://github.com/solidjs/solid/releases/tag/v1.0.0)
