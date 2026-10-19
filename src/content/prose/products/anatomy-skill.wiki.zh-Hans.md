---
entityType: product
entity: anatomy-skill
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'Anatomy Skill：把技术概念画成等距机械示意图的开源智能体技能｜Next Token Wiki'
seoDescription: '了解 Anatomy 这个开源 Agent Skill 的用途、安装方式、兼容工具与使用边界，以及 Next Token 节目中的相关讨论。'
---

## Anatomy Skill 是什么

Anatomy 是由 Ryan（GitHub 用户 [wheresryan22](https://github.com/wheresryan22)）维护的开源智能体技能（Agent Skill），采用 MIT 许可，仓库为 [github.com/wheresryan22/anatomy](https://github.com/wheresryan22/anatomy)。它的作用是把技术概念的解释转换成可交互的等距（isometric）机械示意图：按 README 的描述，当用户让模型解释一个概念时，该技能会让模型构想一个能演示这个概念的机械装置，再用几十个带明暗的部件把它画出来——例如把"缓存键"画成弹子锁。

## 用途与使用边界

按 README，输出分三类图形：纯 SVG（四色明暗、动态读数与缓动动画）、SVG 加 WebGL（在等距相机中叠加火焰、水、光晕等着色器）与 3D（beta，真实转动的 3D 部件逐帧重投影）。成品可以是独立 HTML、单个 SVG 文件或 React/Next.js 组件。

安装方式是 `npx skills add wheresryan22/anatomy -g`，或把仓库克隆、解压到 skills 目录，然后以 `/anatomy` 调用。它为 [Claude Code](/wiki/products/claude-code) 编写，但遵循开放的 Agent Skills 格式，README 称也可在 [Antigravity](/wiki/products/antigravity)、[OpenCode](/wiki/products/opencode)、[Codex](/wiki/products/codex)（以 `$anatomy` 调用）与 MiniMax Code 中使用。运行只依赖 Node.js 20.10+ 的内置能力；自检环节（无头截图、几何审查）需要 Chrome/Chromium。

README 同时写明边界：它不是图表库，画的是机器与仪器而非人物，构建过程刻意缓慢以保证质量。

## 节目中的讨论

在 Weekly #006 的"Prompt 套 Skill，Skill 再套 Prompt：能力变强后，还要封装什么？"章节中，向阳乔木提到[前段时间有个很火的 Skill，名字就是"解剖学"的 Anatomy，"它是很适合把各种机械类的东西变成科普视频，反正效果非常好"](/weekly/006/transcript#quote-ec23d06b40bba533ceb0)，并由此引出 Skill 能力逐渐被模型内化之后，Prompt 与 Skill 如何互相封装的讨论。这是参与者对当时传播情况的转述。参见[对应章节](/weekly/006/transcript#chapter-18)。

## 常见问题

### Anatomy skill 怎么安装？

按 README，运行 `npx skills add wheresryan22/anatomy -g`，或把仓库克隆/解压到 skills 目录，然后以 `/anatomy` 加提示词调用。详见[仓库 README](https://github.com/wheresryan22/anatomy)。

### Anatomy skill 可以在哪些工具里使用？

它为 Claude Code 编写，遵循开放的 Agent Skills 格式；README 列出的兼容环境还包括 Antigravity、OpenCode、Codex（`$anatomy`）与 MiniMax Code。

### Anatomy skill 是免费的吗？

是开源项目，采用 MIT 许可，代码在 [GitHub](https://github.com/wheresryan22/anatomy) 上公开。

### Anatomy skill 能画什么？

按 README 的定位，它画机器、仪器与复杂系统的交互式等距示意图，不面向人物，也不是数据图表库。

## 来源

- [wheresryan22/anatomy 仓库（GitHub）](https://github.com/wheresryan22/anatomy)
