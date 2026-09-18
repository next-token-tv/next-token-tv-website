---
entityType: product
entity: godot-engine
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Godot Engine：开源 2D/3D 游戏引擎、许可与语言｜Next Token Wiki'
seoDescription: '了解 Godot Engine 的开源定位、MIT 许可与跨平台导出、GDScript 等脚本语言，以及 Weekly 节目中与 AI 编程工作流相关的讨论。'
---

## Godot Engine 是什么

Godot Engine 是一个免费开源的游戏引擎，用于制作二维与三维游戏，也可以用于制作非游戏类应用。引擎由社区驱动开发，由非营利组织 Godot Foundation 支持，源代码以宽松的 MIT 许可发布：官方文档写明"完全免费开源，无附加条件、无版税"，用 Godot 制作的游戏完全属于开发者。搜索"Godot"时也会命中贝克特的戏剧《等待戈多》（Waiting for Godot），属于同名歧义。

技术上，Godot 采用节点（Node）与场景（Scene）系统组织游戏，提供独立的 2D 渲染引擎与 3D 渲染管线，内置 OpenXR 与 WebXR 支持等 XR 能力。脚本可用引擎自带的 GDScript、C# 或 C++，也可通过 GDExtension 接入其他语言；官方页面注明自 Godot 4.2 起 C# 仅支持桌面与移动平台。

## 用途与使用边界

编辑器可从[官方下载页](https://godotengine.org/download)获取，覆盖 Windows、macOS 与 Linux，官方还提供浏览器中的 Web 编辑器。游戏可以一键导出到主流桌面（Linux、macOS、Windows）、移动（Android、iOS）与 Web 平台；主机平台则通过第三方发行商完成移植，官方文档说明这是主机固有的授权流程，而非引擎本身的限制。

引擎之外的一切——美术资源、音效、代码与发行——由开发者自行准备或选择第三方服务。Godot 的版本演进较快，新项目选择哪个版本、何时升级，官方[发布策略文档](https://docs.godotengine.org/en/stable/about/release_policy.html)有专门说明；当前最新版本以下载页为准。

## 节目中的讨论

Weekly #002 的"Blender 与代码：给模型合适的工具"一章中，歸藏谈到 AI 用 [Blender](/wiki/products/blender) 的 bpy 接口以纯代码建模、界面上看不到操作过程，并[提到自己制作游戏使用的 Godot Engine 也有类似的做法——做完之后自己一开就有结果，没有操作界面的过程](/weekly/002/transcript#quote-74af9f2569f40800b725)。杨攀顺着补充：接下来的软件需要为 Agent 的调用效率做一套接口基建，再为人做一套交互界面。这段讨论的语境是"给模型合适的工具、提高 Token 效率"，属于参与者的工作方式举例，不是对引擎功能的评测。

## 常见问题

### Godot Engine 是免费的吗？商用要付版税吗？

免费。官方文档写明 Godot 在 MIT 许可下完全免费开源，没有版税，"用户的游戏完全属于用户，直到引擎的最后一行代码"。商业发行同样不向引擎付费。

### Godot Engine 在哪里下载？

在[官方下载页](https://godotengine.org/download)选择对应操作系统的版本；不想安装也可以直接使用[官方文档](https://docs.godotengine.org/)介绍的 Web 编辑器。旧版本与实验版本在下载页的发布存档中。

### Godot 用什么编程语言？

引擎自带 GDScript，也支持 C# 与 C++，并可通过 GDExtension 接入其他语言。注意自 Godot 4.2 起 C# 仅覆盖桌面与移动平台；语言选择对比见[官方文档](https://docs.godotengine.org/en/stable/about/introduction.html)。

### Godot 和 Unity、Unreal 有什么区别？

最直接的区别在授权模式：Godot 是 MIT 许可的开源引擎，无版税、可自由修改引擎本身；Unity 与 Unreal 是商业引擎，各有自己的订阅与分成条款。引擎能力、生态与适配场景各有取舍，建议按项目需求比较。

### 用 Godot 做的游戏能上主机吗？

可以，但路径不同：Godot 支持一键导出到桌面、移动与 Web 平台，主机平台需要通过官方授权的第三方移植与发行商完成，这属于主机厂商的授权流程。

## 来源

- [Godot Engine 官方网站](https://godotengine.org/)
- [Godot 文档：Introduction（含许可与常见问题）](https://docs.godotengine.org/en/stable/about/introduction.html)
- [Godot 官方下载页](https://godotengine.org/download)
- [Godot 文档：发布策略](https://docs.godotengine.org/en/stable/about/release_policy.html)
