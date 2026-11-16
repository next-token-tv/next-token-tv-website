---
entityType: product
entity: tripo
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-16'
seoTitle: 'Tripo：AI 3D 模型生成服务｜Next Token Wiki'
seoDescription: '了解 Tripo 是什么、文生 3D 与图生 3D、自动骨骼绑定与 AI 贴图等制作功能，以及第十期节目对用 Tripo 生成模型并打包进单文件 HTML 游戏的讨论。'
---

## Tripo

Tripo（也称 Tripo AI）是一个在线 3D 模型生成服务，[官方页面](https://www.tripo3d.ai/)将其描述为"把文字提示或图片即时转成 3D 模型"的 AI 3D 模型生成器，产品形态包括网页版 Tripo Studio、开发者 API 与移动应用。服务条款显示 Tripo 由香港的 Holymolly Limited 运营；该团队的开源研究以 VAST-AI 组织名义发布，例如 2024 年 3 月与 Stability AI 联合发布的单图 3D 重建模型 TripoSR（见[其官方代码库](https://github.com/VAST-AI-Research/TripoSR)）。

## 主要功能

- 文生 3D 与图生 3D：从文字提示或单张图片生成 3D 模型。
- AI 贴图：生成完整 PBR 贴图集，官方标注最高 8K，并说明可用于 Unreal Engine、Unity 和 [Blender](/wiki/products/blender)。
- 自动骨骼绑定（Auto Rigging）：为人形或生物角色生成骨架与动作。
- 模型处理与导出：Smart Mesh 四边面网格、Smart UV、高模细节，导出格式包括 GLB、FBX、OBJ、USD 与用于 3D 打印的 STL/3MF，另提供 Blender、Unity、Unreal 等软件的插件。

生成模型是否可商用，官方 FAQ 写明"使用 Tripo AI 生成的模型一般可供商业用途"，具体条件以[官方条款](https://www.tripo3d.ai/terms)为准。

## 节目中的讨论

第十期在"[把模型、动作和音乐装进一个 HTML 游戏](/weekly/010/transcript#chapter-05)"章节里，[歸藏](/wiki/people/guizang)介绍他为自己演示的游戏"[接的 Tripo](/weekly/010/transcript#quote-0473aafcc337a28c2cd5)"：Tripo 生成出的 3D 模型存在破面、比较参差，但仍然在这些模型上完成了骨骼绑定，人物动作由模型自身骨骼做出来；剑招等则是一整只先生成、再逐个绑定。他还说整个过程"[Blender 用了。但是没有启动过](/weekly/010/transcript#quote-e9db8c0b955c057a09b6)"——绑定由 AI 操作完成。同一章节中，[向阳乔木](/wiki/people/xiangyang-qiaomu)说他把这个 HTML 从 100 兆下载下来、后来压缩到 30 兆，部署时 AI 告诉他里面存了大量音频与 3D 模型；歸藏补充其中包含 20 多个模型、人物动作、贴图、3 首音乐和大量音效。这些是参与者的使用记录与描述，不代表官方工作流说明。

## 常见问题

### Tripo 是什么？

一个在线 3D 模型生成服务，从文字提示或图片生成 3D 模型，并提供贴图、骨骼绑定等制作功能，入口见[官方网站](https://www.tripo3d.ai/)。

### Tripo 生成的模型可以商用吗？

官方 FAQ 写明生成模型一般可供商业用途，具体条件见[官方条款](https://www.tripo3d.ai/terms)。

### Tripo 和 Blender 是什么关系？

Tripo 是独立的 3D 模型生成服务，不是 Blender 的功能；两者通过导出格式（GLB、FBX、OBJ 等）和官方 Blender 插件衔接。第十期节目中歸藏描述的工作流是先用 Tripo 生成模型、再做骨骼绑定，最后打包进单文件 HTML。

### Tripo 有 API 吗？

有。官方提供开发者 API（developers.tripo3d.ai）与 CLI，产品页另有 Tripo API 板块。

## 来源

- [Tripo 官方网站](https://www.tripo3d.ai/)
- [Tripo 服务条款](https://www.tripo3d.ai/terms)
- [TripoSR 官方代码库（GitHub）](https://github.com/VAST-AI-Research/TripoSR)
- [TripoSR 技术报告（arXiv:2403.02151）](https://arxiv.org/abs/2403.02151)
