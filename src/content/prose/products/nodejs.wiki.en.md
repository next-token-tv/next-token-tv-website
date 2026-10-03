---
entityType: product
entity: nodejs
locale: en
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Node.js: the open-source JavaScript runtime and its ecosystem | Next Token Wiki'
seoDescription: 'Learn what Node.js is: the V8-based open-source JavaScript runtime, its event-driven model, the npm ecosystem, OpenJS Foundation governance, and official entry points.'
---

## Node.js

Node.js is an open-source, cross-platform JavaScript runtime that runs JavaScript outside the browser. Built on Chrome’s V8 engine, it uses an event-driven, non-blocking I/O model; the official documentation describes it as “designed to build scalable network applications,” with HTTP as a first-class citizen. The project is maintained by the OpenJS Foundation together with contributors worldwide.

## Project and ecosystem

Node.js was created by Ryan Dahl in 2009; the first release came on May 27, 2009, and Dahl presented the project at the inaugural European JSConf on November 8, 2009. In January 2010, the npm package manager followed, and a large server-side JavaScript ecosystem grew around Node.js — the foundation for many web applications, command-line tools, and deployment platforms. For the wider ecosystem, see also [Vercel](/en/wiki/brands/vercel).

On governance, the Node.js Foundation was announced in February 2015, ending the governance dispute behind the io.js fork; in 2019, the Node.js Foundation and the JS Foundation merged to form the OpenJS Foundation, and Node.js became one of its projects. Node.js follows date-based release lines with an LTS (Long Term Support) mechanism; the current release status should be read from the [official release page](https://nodejs.org/).

## Discussion in the show

In Weekly #004’s chapter “Muse Charm、手机与 AI 的入口” (Muse Charm, phones, and the AI entry point), while discussing the limits of on-device agents, Guizang argues that locked-down phone systems leave local models with nothing to do: “[无论安卓还是 iOS，Node 对吧，我们那些代码常用的那个脚手架和组件](/weekly/004/transcript#quote-457b2d9a74e293ccd011)” — on both Android and iOS, Node and the scaffolding and components our code usually relies on cannot run at all. He then mentions a community library that uses iOS’s built-in browser component to “[去执行 Node.js 这些东西，执行命令行](/weekly/004/transcript#quote-da23fdb168780567fd4c)” — run Node.js and the command line — noting it brings phones close to a real development environment but is unlikely to pass app review. These are the hosts’ observations about running Node.js on devices, not statements from the Node.js project. The chapter is in the Chinese transcript.

## Frequently asked questions

### What is Node.js?

Node.js is an open-source JavaScript runtime for building servers, command-line tools, and other programs outside the browser. The official definition is “an asynchronous event-driven JavaScript runtime, designed to build scalable network applications”; see the [About page](https://nodejs.org/en/about).

### Where is the Node.js website, and where can I download it?

The official website is [nodejs.org](https://nodejs.org/), and the official download page is [nodejs.org/en/download](https://nodejs.org/en/download), which offers installers for the LTS and Current release lines.

### Who created Node.js?

Node.js was created by Ryan Dahl in 2009. The first release came on May 27, 2009, and the project was publicly demonstrated at the European JSConf in November 2009.

### How is Node.js different from JavaScript in the browser?

Both execute JavaScript, but Node.js runs in servers and local environments, without browser objects like the DOM and window. Instead, it provides system capabilities such as the file system, networking, and processes, with the event loop built into the runtime itself.

## Sources

- [Node.js official website](https://nodejs.org/)
- [Node.js About page](https://nodejs.org/en/about)
- [Node.js official download page](https://nodejs.org/en/download)
- [Wikipedia: Node.js](https://en.wikipedia.org/wiki/Node.js)
