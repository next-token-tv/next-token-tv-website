---
entityType: product
entity: threejs
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Three.js：浏览器 3D 图形库、安装与使用边界｜Next Token Wiki'
seoDescription: '了解 Three.js 这个 JavaScript 3D 库的定位、WebGL/WebGPU 渲染器、npm 安装方式与官方资源，以及节目中提到 Three.js 的两处讨论。'
---

## Three.js 是什么

Three.js 是一个用于在浏览器中创建与显示 3D 图形的 JavaScript 库，官方网站为 [threejs.org](https://threejs.org/)，代码仓库为 GitHub 上的 [mrdoob/three.js](https://github.com/mrdoob/three.js/)。仓库由 Ricardo Cabello（GitHub 用户 mrdoob）于 2010 年 3 月创建，采用 MIT 许可证，以开源方式公开开发。官方 README 将其目标概括为"create an easy-to-use, lightweight, cross-browser, general-purpose 3D library"（易用、轻量、跨浏览器、通用）。

## 用途与使用边界

Three.js 面向的是在网页里做 3D 渲染：当前构建包含 WebGL 与 WebGPU 渲染器，SVG 和 CSS3D 渲染器以插件（addons）形式提供。它在项目中通过 npm 包 `three` 引入，也可以用官方提供的[在线编辑器](https://threejs.org/editor/)直接试验场景。官方还维护着[示例库](https://threejs.org/examples/)、[文档](https://threejs.org/docs/)和社区论坛，版本发布记录见 GitHub Releases。

作为渲染库，Three.js 只负责图形本身；模型资产、交互逻辑、后端服务和模型推理都由使用者的项目自行组织。它常被用于数据可视化、产品展示、网页游戏等场景，也在 AI 模型的演示与评测中被用作视觉能力的展示载体。

## 节目中的讨论

Weekly #001 有两处提到 Three.js。在"GLM 5.3 Flash 与 MiniMax H3，便宜模型为何更容易进入真实使用"章节中，[歸藏说现在大家做 Benchmark 都用 3D、Three.js，"给 Three.js 玩烂了"](/weekly/001/transcript#quote-17d1425cd292d5904826)，以此讨论视觉类演示在模型营销上的优势——C 端用户对视觉有感知，对 Agent 能力数字没有。在"原生模型加原生 Agent，会不会成为默认组合"章节中，[歸藏提到他在 ZCode 里尝试做一个类似 Three.js 的多模态东西](/weekly/001/transcript#quote-10a029bbadfcaf889bc2)，发现多模态部分 Token 消耗较高，导致订阅额度不够用。这两处都是节目参与者的使用观察。

## 常见问题

### Three.js 是什么？

一个运行在浏览器里的 JavaScript 3D 库，提供场景、相机、材质、渲染器等图形能力，由 mrdoob（Ricardo Cabello）创建，见[官网](https://threejs.org/)。

### Three.js 免费吗？可以商用吗？

Three.js 采用 MIT 许可证，可以在遵守许可条款的前提下免费使用，包括商业项目；条款见仓库中的 [LICENSE 文件](https://github.com/mrdoob/three.js/blob/dev/LICENSE)。

### 怎么在项目里安装 Three.js？

通过 npm 安装，包名为 `three`（`npm install three`），然后在代码中 `import * as THREE from 'three'`。官方 README 提供了入门说明。

### Three.js 有官方示例和文档吗？

有。官方维护[示例库](https://threejs.org/examples/)、[文档](https://threejs.org/docs/)和[在线编辑器](https://threejs.org/editor/)，入门教程"creating a scene"也在官方文档中。

## 来源

- [Three.js 官方网站](https://threejs.org/)
- [GitHub：mrdoob/three.js](https://github.com/mrdoob/three.js/)
- [Three.js 在线编辑器](https://threejs.org/editor/)
- [npm：three](https://www.npmjs.com/package/three)
