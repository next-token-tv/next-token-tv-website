---
entityType: product
entity: nvidia-dlss
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'NVIDIA DLSS：神经渲染技术系列｜Next Token Wiki'
seoDescription: '了解 DLSS 技术系列的组成（超分辨率、帧生成、光线重建、DLAA 与 DLSS 5 的 3D 引导神经渲染）、开启方式，以及节目中的相关讨论。'
---

## 定义

NVIDIA DLSS 是 NVIDIA 的神经渲染技术系列：官方页面描述为一套利用 AI 提升 FPS、降低延迟并改善画质的神经渲染技术，应用于游戏图形。详见[官方 DLSS 页面](https://www.nvidia.com/en-us/geforce/technologies/dlss/)。

## 工作方式

官方页面列出系列的主要成员：Super Resolution（超分辨率）用 AI 从较低分辨率输入生成更高分辨率帧以提升性能；Frame Generation、Multi Frame Generation 与 Dynamic Multi Frame Generation（DLSS 4.5 引入动态多帧生成与第二代 Transformer 模型）负责生成更多帧；Ray Reconstruction（光线重建）为重度光追场景用 AI 生成更高质量的像素；DLAA 使用与超分辨率相同的技术在原生分辨率下构建高质量画面；DLSS 5 新增 3D-Guided Neural Rendering，用 AI 为游戏场景注入逼真的光照与材质，面向 GeForce RTX 50 系列 GPU，最终画面由开发者逐游戏调校。这些功能需要游戏集成后才生效，可用性取决于游戏与 GPU 型号。

## 使用场景

在支持 DLSS 的游戏中，玩家按需开启超分辨率、帧生成等功能来提升帧率或画质；开发者面向 RTX 显卡优化游戏时可以把 DLSS 组件集成进渲染管线。各功能在游戏内图形设置中作为独立选项出现，哪些游戏支持哪些功能以官方页面与游戏说明为准。

## 易混概念

- DLSS 5 与 DLSS 系列：DLSS 5 是系列中的成员（3D-Guided Neural Rendering），不是独立产品；游戏对 DLSS 4.5、DLSS 5 等各版本功能的支持各不相同。
- DLSS 与光追（Ray Tracing）：光追是计算光照的渲染方式，DLSS 是 AI 神经渲染技术；Ray Reconstruction 是 DLSS 中与光追配合的成员，两者属于不同层面。
- DLAA 与 DLSS Super Resolution：两者用同一套 AI 技术，DLAA 在原生分辨率下做高质量抗锯齿画面，不以提升帧率为目标。

## 节目中的讨论

在 Weekly #007 的"AI 游戏破圈：移植、网页游戏与上瘾机制"章节中，歸藏提到社区玩家为《血源诅咒》的 PC 移植版[适配了 DLSS 5 和帧生成](/weekly/007/transcript#quote-652b44db3666d879be65)。这是参与者对社区移植动态的转述，不代表 NVIDIA 或游戏官方信息；DLSS 5 的官方定义见[官方 DLSS 页面](https://www.nvidia.com/en-us/geforce/technologies/dlss/)。可阅读[第 007 期对应章节](/weekly/007/transcript#chapter-06)。

## 常见问题

### DLSS 是什么？

NVIDIA 的神经渲染技术系列，用 AI 提升 FPS、降低延迟并改善画质；具体成员包括超分辨率、帧生成、光线重建、DLAA 与 DLSS 5 的 3D 引导神经渲染等。

### DLSS 是一款游戏吗？

不是。它是一组需要游戏集成的图形技术，功能支持取决于游戏和 [NVIDIA](/wiki/brands/nvidia) 显卡型号。

### DLSS 5 是什么？

官方页面说明 DLSS 5 新增 3D-Guided Neural Rendering：用 AI 为游戏场景注入逼真的光照与材质，面向 GeForce RTX 50 系列 GPU，最终画面由开发者逐游戏调校。

### DLSS 怎么开？

取决于游戏：支持 DLSS 的游戏通常在其图形设置中提供 Super Resolution、Frame Generation 等开关，且部分功能需要 RTX 显卡；具体支持范围见[官方 DLSS 页面](https://www.nvidia.com/en-us/geforce/technologies/dlss/)与游戏自身说明。（开启路径为编辑归纳，无统一入口。）

## 来源

- [NVIDIA DLSS 官方页面](https://www.nvidia.com/en-us/geforce/technologies/dlss/)
- [NVIDIA 品牌条目](/wiki/brands/nvidia)
