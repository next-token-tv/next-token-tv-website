---
entityType: product
entity: codemirror
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'CodeMirror: the extensible code editor component for the web | Next Token Wiki'
seoDescription: 'What CodeMirror is, how CodeMirror 6 differs from Version 5, how to install it, how it compares with Monaco, and the Weekly show’s editor-kernel migration story.'
---

## What CodeMirror is

CodeMirror is a code editor component for the web: embed it in a web application and you get an editing surface with syntax highlighting, line numbers, autocompletion, code folding, search and replace, multiple selections, bidirectional text, collaborative editing, and accessibility support, extensible further through its public programming interface. It is open source under the MIT license and developed by Marijn Haverbeke.

## Versions and boundaries

CodeMirror was first released in 2007; the current major system, CodeMirror 6, was released in 2022, with the core split into independently published packages. Documentation for the older Version 5 remains available. Installation is via npm: the `codemirror` package provides the basic configuration, while language support, themes, and other features are added as separate packages as needed — see the [official guide](https://codemirror.net/docs/guide/).

CodeMirror is a component library, not a finished editor: it targets applications that need editing capability (note-taking apps, low-code platforms, online IDEs), and integration requires front-end work. The common comparison is Monaco, the editor component behind VS Code; the two differ in positioning and size trade-offs, so evaluate them against their own official documentation.

## Discussion in the show

In Weekly #005’s chapter "迁移插件、替换编辑器内核" (migrating plugins, replacing the editor kernel), [Orange said he migrated his Markdown editor’s kernel from Milkdown to CodeMirror 6, per the Chinese transcript](/weekly/005/transcript#quote-a26a210c2315f9a66446), [motivated by making the source the single source of truth and fixing a class of bugs caused by rendered content and source being two separate states](/weekly/005/transcript#quote-3ac4fb63746949f2b615). He noted the work was done by DeepSeek Flash and that "after the swap it felt great." This is a participant’s migration experience, not an evaluation of the component. The [episode 005 chapter](/weekly/005/transcript#chapter-09) has the full context; an English transcript is not available.

## Frequently asked questions

### What is CodeMirror, and how does it relate to VS Code?

CodeMirror is an embeddable web editor component and has no connection to VS Code; Monaco, the component it is often compared with, is the one VS Code uses.

### Should I use CodeMirror 6 or CodeMirror 5?

New projects generally start with CodeMirror 6: it is the rewritten architecture with a core split into independently published npm packages. Version 5 still has official documentation, but as of October 2026, 6 is the mainline.

### How do I install CodeMirror?

Install the `codemirror` package with npm and configure it following the [official guide](https://codemirror.net/docs/guide/); add language packages, themes, and other features as separate packages as needed.

### Is CodeMirror free?

Yes. It is open source under the MIT license; the official site notes a social (but not legal) expectation that commercial users help fund maintenance.

## Sources

- [CodeMirror website](https://codemirror.net/)
- [CodeMirror guide](https://codemirror.net/docs/guide/)
- [CodeMirror development repository](https://github.com/codemirror/dev)
- [Wikipedia: CodeMirror](https://en.wikipedia.org/wiki/CodeMirror)
