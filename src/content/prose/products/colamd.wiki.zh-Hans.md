---
entityType: product
entity: colamd
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'ColaMD：面向人与 AI Agent 的开源 Markdown 编辑器｜Next Token Wiki'
seoDescription: '了解 ColaMD 的实时同步机制、开源协议与下载方式，它与同名排序算法的区别，以及 Next Token 节目中主理人橘子的开发讨论。'
---

## ColaMD 是什么

ColaMD 是一个免费开源的 Markdown 编辑器，官方口号是"写作就应该这么简单"（Writing should be this simple）。由 Cola.app 出品、orange2ai 维护，源码以 MIT 协议发布在 [GitHub 仓库](https://github.com/marswaveai/colamd)，支持 macOS、Windows 与 Linux。它的特色是把"人在写"和"AI Agent 在改文件"这两个场景合到同一个编辑器里。

## 使用方式与边界

ColaMD 主打所见即所得编辑，不需要分栏预览；同时提供源码模式、文件浏览器与大纲。官方说明的核心机制是实时同步："当磁盘上的文件发生变化时——无论是 AI Agent、脚本还是另一个编辑器改的——编辑器立即更新"，Agent 新建的文件也会自动出现在列表中。这一设计让它适合作为人机协作写 Markdown 的界面：Agent 负责改文件，人负责读和改。

功能上还包括 12 套主题、任务列表、高亮、KaTeX 公式、Mermaid 图、PDF/HTML/Word 导出与 VS Code 集成。下载走 [GitHub Releases](https://github.com/marswaveai/colamd/releases)（macOS dmg、Windows exe 与免安装 zip、Linux AppImage/deb）。需要注意的是，搜索"colamd"时常混入同名的 COLAMD 稀疏矩阵排序算法（MATLAB 等工具使用），与这款编辑器无关。

## 节目中的讨论

ColaMD 与节目主理人[橘子](/wiki/people/orange)直接相关，他在节目里多次以开发者身份谈及。Weekly #002 的"Blender 与代码：给模型合适的工具"章节中，橘子说开发 ColaMD 时观察到不同模型的测试方式差异：[以前的模型会自己启动一个 Electron 版本来测试，DeepSeek Flash 则有时不启动界面、自己就把测试做完](/weekly/002/transcript#quote-b2b0a48179812ca8f3c8)。同期"能力够用之后，测试与交付成为瓶颈"章节中，他提到[iOS 版 ColaMD 开发版暂时只放在仓库里，谁愿意装自己装](/weekly/002/transcript#quote-39a13ec8d097e89591a3)。这些是开发者本人在节目中的自述，项目细节以官方仓库为准。

## 常见问题

### ColaMD 是什么？

一款免费开源、所见即所得的 Markdown 编辑器，特点是实时同步外部修改，供人和 AI Agent 共同编辑文件；与 MATLAB 等工具中的 COLAMD 排序算法同名但无关。见[官网](https://colamd.com/)。

### ColaMD 免费吗？开源协议是什么？

官方说明"永久免费"（free forever），采用 MIT 协议，源码在 GitHub 上开放。

### ColaMD 怎么下载？

三个平台的安装包都发布在 [GitHub Releases 页面](https://github.com/marswaveai/colamd/releases)：macOS 提供 Apple Silicon 与 Intel 版本，Windows 提供安装器与免安装 zip，Linux 提供 AppImage 与 deb。

### ColaMD 和 AI Agent 有什么关系？

编辑器实时显示磁盘文件的最新内容，Agent、脚本或其他编辑器的修改会立即反映出来，Agent 新建的文件也会自动出现；官方定位是"无论谁在写文件，编辑器总是显示最新内容"。

## 来源

- [ColaMD 官网](https://colamd.com/)
- [ColaMD GitHub 仓库](https://github.com/marswaveai/colamd)
- [ColaMD Releases 页面](https://github.com/marswaveai/colamd/releases)
