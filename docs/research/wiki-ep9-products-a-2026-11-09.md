# 第 9 期产品批 A（前端框架与工具链）研究记录

日期：2026-11-09。范围：`typescript`、`react`、`nextjs`、`astro`、`solid`、`remotion`、`hyperframes` 七个产品的双语 Wiki 正文。节目来源：`src/content/imported/transcripts/next-token-weekly--009.zh-Hans.json`（第 9 期，中文逐字稿，已发布）。

## FAQ 需求线索口径

本批未做搜索联想采样，无 Search Console 数据。各页 FAQ 为编辑补充，问题对应官方文档结构中的常见入口（是什么／谁开发的／许可与免费／相近工具区别），答案全部有下列来源支撑。不使用搜索量、难度等任何指标。

## 事实核验（均为 2026-11-09 获取）

| 实体 | 采用的事实 | 来源与依据 |
| --- | --- | --- |
| typescript | 微软开发，2012 年 10 月 1 日首次发布，设计者含 Anders Hejlsberg、Luke Hoban，Apache 2.0 | 英文维基百科 TypeScript 条目（infobox `released 2012|10|01`）；GitHub microsoft/TypeScript |
| react | Jordan Walke 在 Facebook 开发，2013 年 5 月 29 日开源，Meta 与社区维护，MIT | 英文维基百科 React (software) infobox；GitHub facebook/react（API 返回 MIT，仓库现 301 至 github.com/react/react） |
| nextjs | Vercel 创建，2016 年 10 月 25 日首发，React 基础，服务端渲染与静态渲染，MIT | 英文维基百科 Next.js infobox（`released 2016|10|25`）；GitHub vercel/next.js（MIT） |
| astro | 2021 年 6 月公开发布（官方博客 2021-11-19 文回顾“launched in June 2021”）；2022 年 8 月 9 日 1.0；2021 年 11 月 19 日宣布成立 The Astro Technology Company（Fred Schott 署名，$7M 种子轮）；MIT | astro.build/blog/astro-1/（datetime=2022-08-09）、astro.build/blog/the-astro-technology-company/、GitHub withastro/astro |
| solid | Ryan Carniato 开发，仓库 2018 年创建（最早提交 2018-06-10，作者 Ryan Carniato），v1.0.0 发布于 2021-06-28；细粒度响应式、JSX；MIT | GitHub solidjs/solid 仓库元数据与 releases/tags/v1.0.0（“v1.0.0 - Solid grows up”）；docs.solidjs.com |
| remotion | Jonny Burger 创建（2020 年早期提交作者），仓库 2020-06-23 创建，v1.0.0 发布于 2021-02-06；用 React 写视频；许可为自定义：个人与不超过 3 人的公司免费、更大公司需 Company License | GitHub remotion-dev/remotion 元数据、commits、releases/tags/v1.0.0；remotion.dev/license 正文（“completely free to use for any individual or small company… companies of up to 3 people”） |
| hyperframes | HeyGen 开源，GitHub heygen-com/hyperframes 创建于 2026-03-10，Apache 2.0，仓库描述“Write HTML. Render video. Built for agents.”；官网称 free and open source，提供 Mac/Windows/Linux 的 HyperFrames Studio | GitHub heygen-com/hyperframes；hyperframes.heygen.com 首页正文 |

未知项：HyperFrames 官方未声明其与 Remotion 的技术关系；正文中只以“参与者说法”引用，不作事实断言。React 仓库组织名变更（facebook/react → react/react 301）未写入正文，源码链接沿用 facebook/react（可跳转）。

## 节目引用

第 9 期相关讨论集中在 chapter-01“Harness 与插件生态”，另有 chapter-04“软件和游戏网文化与实践”的一次回顾。段落锚点按 `src/data/transcript-paragraph-anchors.ts` 算法（speakerId + "\0" + NFC 归一化合并空白，sha256 前 20 位）用 node + crypto 复算，均在首次出现（无 -N 后缀）：

| 锚点 | 发言人 | 内容 |
| --- | --- | --- |
| quote-f532968167318dcc8271 | 向阳乔木 | Obsidian 插件迁移为 Harness 插件：同为 Electron、同为 TypeScript，让 Codex 迁移“完全顺滑” |
| quote-1015d384978ae7a10e49 | 杨攀 | 公司用 Solid、AI 混写 React 语法后换回 React；“不是 AI 了解的最大共识……就被市场淘汰” |
| quote-633b0bade23857fa1959 | 杨攀 | 框架选择的马太效应“非常明显” |
| quote-02ab560177ba9cacb0fb | 杨攀 | Next.js／Astro／Hyperframes 属于“乐高组件”，模型直接调用 |
| quote-d54f0ea51c642151a619 | 向阳乔木 | HyperFrames 集合 Remotion 底层、由 HeyGen 打包；不到半年成为 HTML 渲染视频首选 |
| quote-8d8d1aef3dbc66335abc | 歸藏 | Remotion“确实是一个半成品”；HeyGen 赢在更早且更完善 |
| quote-6f9b68be1b07750b38c0 | 歸藏 | 用 Claude 做视频会优先使用内置的 HyperFrames |
| quote-646db397bb0765bb6ec3 | 歸藏 | 模型会把 HyperFrames 与视频任务关联，“一旦涉及到视频，模型就会调 HyperFrames” |

所有讨论结论在正文中标注为参与者观点、个人评价或传闻转述；歸藏提到的公司名称节目未给出，正文不写具体公司。

## 采用范围与遗留问题

- 未更新各产品 YAML 的 `lastVerifiedAt`（本次任务不授权改动元数据）。
- 未链接 `renoise-ai`（仅有 YAML，无 Wiki 正文页面），向阳乔木提到 Renoise 的话未据此添加链接。
- en 正文无英文逐字稿，全部按规范链接中文逐字稿 `/weekly/009/transcript#...` 并标注 in the Chinese transcript。
- 未验证 Astro Islands 文档的具体 URL，正文仅使用“Islands（岛屿）架构”的官方术语并链接官方博客公告。
