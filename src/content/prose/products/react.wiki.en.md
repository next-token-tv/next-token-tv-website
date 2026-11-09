---
entityType: product
entity: react
locale: en
slot: wiki
updatedAt: '2026-11-09'
seoTitle: "React: Meta's open-source UI component library | Next Token Wiki"
seoDescription: "What React is: Meta's component-based UI library open-sourced in 2013, its relations with Next.js, Solid and Astro, and the episode 009 discussion of framework choice."
---

## React

React is a JavaScript library for building user interfaces out of components. It was developed by Jordan Walke, then at Facebook, open-sourced on May 29, 2013, and has since been maintained by Meta (formerly Facebook) and the community under the MIT license (per [English Wikipedia](https://en.wikipedia.org/wiki/React_(software))). The official site is [react.dev](https://react.dev), which describes it as the library for web and native user interfaces — the native part being carried by React Native.

## Usage and distinctions

React itself only handles components and rendering; routing, data fetching and similar capabilities come from ecosystem libraries, which is why several higher-level frameworks build on it. [Next.js](/en/wiki/products/nextjs), maintained by [Vercel](/en/wiki/brands/vercel), is the representative example; [Astro](/en/wiki/products/astro) targets content-driven sites and can also use React components selectively inside its pages.

[Solid](/en/wiki/products/solid) is the easiest to confuse with React: both write components in JSX and look similar, but their update mechanisms differ — React re-renders per component, while Solid uses fine-grained reactive updates. Component code usually cannot be copied across directly.

## Discussion in the show

In episode 009's chapter on the harness and plugin ecosystem ("Harness 与插件生态", [English gloss](/weekly/009/transcript#chapter-01) in the Chinese transcript), Yang Pan recounts a case that struck him: a company used Solid, but after adopting AI coding, the AI kept writing React syntax into Solid code, and the company eventually switched back to React. He sums it up as "if you are not the biggest consensus the AI knows, not the best practice the AI knows, you are basically eliminated by the market" (see [the passage](/weekly/009/transcript#quote-8cd6074f74c9128671c4)). He adds that this Matthew effect in framework choice is "very obvious" (see [the passage](/weekly/009/transcript#quote-633b0bade23857fa1959)), and revisits it in the chapter "软件和游戏网文化与实践" ([software and games going web-native](/weekly/009/transcript#chapter-04) in the Chinese transcript). These are the participants' personal views and secondhand accounts, not verified statements about any company.

## Frequently asked questions

### Is React a framework or a library?

React is a UI library: it handles components and rendering, while routing and builds come from ecosystem libraries and higher-level frameworks such as [Next.js](/en/wiki/products/nextjs).

### Who developed React?

Jordan Walke developed React at Facebook; it was open-sourced in May 2013 and is maintained by Meta and the open-source community (per English Wikipedia).

### How does Solid differ from React?

Both use JSX, but Solid updates the UI through fine-grained reactivity without a virtual DOM, while React re-renders components. The similar syntax and different mechanics also make the two easy for AI coding tools to mix up; see the [Solid entry](/en/wiki/products/solid).

### Is React free?

Yes, it is open source under the MIT license with the code public on [GitHub](https://github.com/facebook/react); there is no fee for commercial use.

## Sources

- [React official website](https://react.dev)
- [Wikipedia: React (software)](https://en.wikipedia.org/wiki/React_(software))
- [facebook/react repository](https://github.com/facebook/react)
