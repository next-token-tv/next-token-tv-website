---
entityType: product
entity: autoglm
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'AutoGLM：智谱的设备操作智能体与开源手机 Agent｜Next Token Wiki'
seoDescription: 'AutoGLM 的定位、Open-AutoGLM 开源框架与模型、支持的设备与应用范围、部署与下载入口，以及 Next Token 节目中的相关讨论。'
---

## AutoGLM 是什么

AutoGLM 是[智谱](/wiki/brands/zhipu)面向设备操作与任务执行的智能体方向：模型读取屏幕截图、理解界面内容，然后规划并执行具体操作，可以代替用户操作手机完成任务。官方开源项目 Open-AutoGLM 提供了 AutoGLM-Phone-9B 模型与配套框架，按 Apache-2.0 许可证发布，模型架构与 GLM-4.1V-9B-Thinking 相同；同名研究论文于 2024 年在 arXiv 发布（[arXiv:2411.00820](https://arxiv.org/abs/2411.00820)）。代码与说明见 [GitHub（zai-org/Open-AutoGLM）](https://github.com/zai-org/Open-AutoGLM)。

## 使用方式与边界

- 支持的设备：通过 ADB、HDC 与 WebDriverAgent 分别控制 Android、HarmonyOS 与 iOS 设备，支持 WiFi 远程调试；接入方式可以是 CLI、Python API 或环境变量配置。
- 支持的应用：官方 README 列出 50 多个 Android 应用与 60 多个鸿蒙应用，包括微信、淘宝、京东、美团、抖音等。
- 操作与安全：动作类型包括启动应用、点按、输入、滑动、返回、长按等；设有敏感操作确认机制，登录与验证码场景提供 Take_over 人工接管。
- 模型下载：AutoGLM-Phone-9B 与面向英文场景的 AutoGLM-Phone-9B-Multilingual 在 Hugging Face 与 ModelScope 提供。

该开源框架面向开发与自部署场景；智谱也在输入法等消费产品中使用相关的设备操作能力，消费端功能范围以智谱官方产品页为准。

## 节目中的讨论

在 Weekly #001"Computer Use 正在怎样改变 Vibe Coding 的验收"章节，几位主理人在讨论 Computer Use 路线时，[杨攀提到智谱此前发过 AutoGLM，并认为这条设备操作路线一直有人在推进](/weekly/001/transcript#quote-47121f247d1a66b31225)。这是参与者对行业脉络的回忆与归纳，不是对产品现状的说明。

## 常见问题

### AutoGLM 是什么？

智谱的设备操作智能体：模型读取屏幕截图、规划动作并代替用户操作手机完成任务。研究论文见 [arXiv:2411.00820](https://arxiv.org/abs/2411.00820)，开源实现在 [GitHub](https://github.com/zai-org/Open-AutoGLM)。

### Open-AutoGLM 是开源的吗？

是。框架与模型按 Apache-2.0 许可证开源，代码在 zai-org/Open-AutoGLM 仓库，模型权重可在 Hugging Face 与 ModelScope 下载。

### Open-AutoGLM 支持哪些手机和系统？

按官方 README：Android（经 ADB）、HarmonyOS（经 HDC）与 iOS（经 WebDriverAgent），覆盖 50 多个 Android 应用与 60 多个鸿蒙应用。具体清单以仓库文档为准。

### AutoGLM 模型在哪里下载？

AutoGLM-Phone-9B 与 AutoGLM-Phone-9B-Multilingual 在 Hugging Face 与 ModelScope 提供，下载链接见[官方 README](https://github.com/zai-org/Open-AutoGLM)。

## 来源

- [GitHub: zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM)
- [arXiv: AutoGLM: Autonomous Foundation Agents for GUIs（2024）](https://arxiv.org/abs/2411.00820)
