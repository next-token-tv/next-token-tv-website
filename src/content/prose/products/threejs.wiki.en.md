---
entityType: product
entity: threejs
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Three.js: browser 3D graphics library, installation, and boundaries | Next Token Wiki'
seoDescription: 'What Three.js is: its JavaScript 3D library positioning, WebGL/WebGPU renderers, npm installation, official resources, and two show discussions mentioning it.'
---

## What Three.js is

Three.js is a JavaScript library for creating and displaying 3D graphics in the browser. The official site is [threejs.org](https://threejs.org/), and the code lives in the GitHub repository [mrdoob/three.js](https://github.com/mrdoob/three.js/). Ricardo Cabello (GitHub user mrdoob) created the repository in March 2010; it is developed in the open under the MIT license. The official README summarizes the aim as creating "an easy-to-use, lightweight, cross-browser, general-purpose 3D library."

## Usage and boundaries

Three.js targets 3D rendering on the web: current builds include WebGL and WebGPU renderers, while SVG and CSS3D renderers are available as addons. Projects import it through the npm package `three`, or you can experiment with scenes in the official [web editor](https://threejs.org/editor/). The project also maintains an [examples gallery](https://threejs.org/examples/), [documentation](https://threejs.org/docs/), and community forums; release history is on GitHub Releases.

As a rendering library, Three.js covers the graphics layer only. Model assets, interaction logic, backend services, and model inference are organized by the projects using it. It is commonly used for data visualization, product showcases, and web games, and AI model demos and benchmarks often use it as the visual showcase layer.

## Discussion in the show

Weekly #001 mentions Three.js twice. In the chapter “GLM 5.3 Flash 与 MiniMax H3，便宜模型为何更容易进入真实使用” (GLM 5.3 Flash and MiniMax H3: why cheaper models reach real usage sooner), [Guizang said everyone now builds benchmarks with 3D and Three.js, "wearing Three.js out"](/weekly/001/transcript#quote-17d1425cd292d5904826) in the Chinese transcript, while arguing that visual demos work for model marketing because ordinary users perceive visuals, not agent metrics. In the chapter “原生模型加原生 Agent，会不会成为默认组合” (Native models plus native agents: the default pairing?), [Guizang described trying to build a Three.js-like multimodal demo in ZCode](/weekly/001/transcript#quote-10a029bbadfcaf889bc2) and finding multimodal token consumption high enough to strain his subscription quota. Both are participants' observations.

## Frequently asked questions

### What is Three.js?

A JavaScript 3D library that runs in the browser, providing scenes, cameras, materials, renderers, and related graphics capabilities. It was created by mrdoob (Ricardo Cabello); see the [official site](https://threejs.org/).

### Is Three.js free? Can it be used commercially?

Three.js is MIT licensed and can be used freely, including in commercial projects, provided the license terms are followed; the terms are in the repository's [LICENSE file](https://github.com/mrdoob/three.js/blob/dev/LICENSE).

### How do I install Three.js in a project?

Install it via npm — the package name is `three` (`npm install three`) — then use `import * as THREE from 'three'` in code. The official README covers the basics.

### Does Three.js have official examples and documentation?

Yes. The project maintains an [examples gallery](https://threejs.org/examples/), [documentation](https://threejs.org/docs/), and a [web editor](https://threejs.org/editor/); the "creating a scene" tutorial is part of the official docs.

## Sources

- [Three.js official website](https://threejs.org/)
- [GitHub: mrdoob/three.js](https://github.com/mrdoob/three.js/)
- [Three.js web editor](https://threejs.org/editor/)
- [npm: three](https://www.npmjs.com/package/three)
