---
entityType: product
entity: milkdown
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Milkdown: a plugin-driven WYSIWYG Markdown editor framework | Next Token Wiki'
seoDescription: 'What Milkdown is, how its plugin architecture and ProseMirror foundation work, how it differs from finished editors, and what the Weekly show said about migrating away from it.'
---

## What Milkdown is

Milkdown is an open-source framework for building WYSIWYG Markdown editors, released under the MIT license with its source hosted on GitHub. The official site describes it as "a plugin driven framework to build WYSIWYG Markdown editor" and notes that it is built on top of libraries such as ProseMirror, Y.js, and Remark, so developers can draw on those projects' communities and ecosystems.

## Positioning and usage

Milkdown targets developers who want to embed Markdown editing in their own applications, not end users looking for a finished writing app. Three claims from the official site define it:

- **Plugin driven**: "Everything in Milkdown are plugins" — syntax, themes, and UI are all extended as plugins.
- **Headless**: the framework ships without any CSS; the host application controls the editor's appearance.
- **Collaboration**: with Y.js, Milkdown supports multiple users editing the same document in real time.

That draws the boundary against finished editors: for simply writing Markdown, a finished app like [Typora](/en/wiki/products/typora) or [Obsidian](/en/wiki/products/obsidian) fits better; for embedding a WYSIWYG editor with custom behavior and styling, Milkdown provides the framework and plugin system. The npm package is `@milkdown/kit`, and the official Get Started guide is the entry point.

## Discussion in the show

In Weekly #005's chapter “迁移插件、替换编辑器内核” (migrating plugins, replacing the editor kernel), Orange mentions [recently refactoring his Markdown editor, migrating it from Milkdown to a CodeMirror 6 kernel, per the Chinese transcript](/weekly/005/transcript#quote-a26a210c2315f9a66446). He explains the reason: under the old setup, "what is rendered and the original source are two separate things" — an edit could look applied while the source never changed — and he wanted [the source to be the single source of truth, consistent with mainstream editors like Typora](/weekly/005/transcript#quote-3ac4fb63746949f2b615); after the migration, a pile of detail bugs disappeared. This is a participant's trade-off from his own project: how the WYSIWYG rendering layer relates to the source can lead to replacing the kernel entirely. See the [episode 005 chapter](/weekly/005/transcript#chapter-09) (Chinese transcript; no English transcript is available).

## Frequently asked questions

### What is Milkdown?

An open-source framework for building WYSIWYG Markdown editors, based on ProseMirror, Y.js, and Remark, with syntax, themes, and UI handled as plugins. It is aimed at developer integration, not at being a ready-to-use writing app.

### Is Milkdown free?

Yes. It is MIT-licensed and the source is public on [GitHub](https://github.com/Milkdown/milkdown), so it can be used freely in your own projects.

### How is Milkdown different from Typora?

[Typora](/en/wiki/products/typora) is a finished editor you install and use; Milkdown is a framework that developers bring into their own applications, configure with plugins, and style themselves. They serve different audiences: writers versus developers building editor features.

### How do I add Milkdown to a project?

Install `@milkdown/kit` via npm, then follow the [official Get Started guide](https://milkdown.dev/docs/getting-started) to create an editor instance and load the plugins you need. It is headless with no bundled CSS, so styling is up to you.

## Sources

- [Milkdown official site](https://milkdown.dev/)
- [Milkdown GitHub repository](https://github.com/Milkdown/milkdown)
