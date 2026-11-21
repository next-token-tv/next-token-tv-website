---
entityType: product
entity: subcast
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-21'
seoTitle: '声渡 SubCast：开源播客与 YouTube 双语字幕桌面播放器｜Next Token Wiki'
seoDescription: '声渡 SubCast 是什么：向阳乔木开发的开源桌面应用，聚合播客与 YouTube 订阅、双语字幕、AI 导读与问答，支持的平台、字幕来源与开源许可。'
---

## 声渡 SubCast 是什么

声渡 SubCast 是[向阳乔木](/wiki/people/xiangyang-qiaomu)开发的开源桌面应用（AGPL-3.0 许可，仓库为 [joeseesun/subcast](https://github.com/joeseesun/subcast)）。它把播客和 [YouTube](/wiki/products/youtube) 订阅、播放、双语字幕与 AI 问答放在一起，方便听众阅读和回看长节目。应用基于 Tauri 构建（Rust 与 React），数据存储在本地。

## 订阅与播放

- 订阅来源：[YouTube](/wiki/products/youtube) 频道、Apple Podcasts、[小宇宙](/wiki/products/xiaoyuzhou)或任意 RSS 源；新单集自动下载，可以按名称搜索播客。
- 平台：提供 macOS（Apple 芯片与 Intel）、Windows 10/11 和 Linux（AppImage、deb、rpm）版本，macOS 版本已签名公证；Windows 安装包未签名，首次运行需绕过 SmartScreen 警告。

## 双语字幕

字幕优先使用节目官方字幕；没有官方字幕的单集可以本机识别——默认使用本地运行的语音识别模型，音频不离开设备——也可以配置豆包、Groq、OpenAI 等云端服务，翻译默认经由 Google 翻译。界面提供双语、中文、原文三种显示方式。其他用户识别过的单集打开即有字幕，共享的只有文本、不上传音频，也可以关闭共享。

## AI 导读与问答

对单集可以生成导读（摘要、时间线、要点和时间戳），也可以基于完整逐字稿提问，回答附可点击的时间戳引用。AI 服务商可以自行配置（DeepSeek、Kimi、Claude、OpenAI、Gemini、Ollama 等），API Key 存放在系统钥匙串。

## 节目中的讨论

第 011 期介绍了订阅 Next Token 视频播客和剪辑高光片段的用法。

## 常见问题

### 声渡 SubCast 是谁开发的？

[向阳乔木](/wiki/people/xiangyang-qiaomu)开发并开源，代码在 [GitHub](https://github.com/joeseesun/subcast)，官网是 [subcast.qiaomu.ai](https://subcast.qiaomu.ai/)。

### SubCast 支持哪些平台？

macOS（Apple 芯片与 Intel）、Windows 10/11 和 Linux（AppImage、deb、rpm）。

### SubCast 的双语字幕是怎么来的？

优先取节目官方字幕；没有时用本机语音识别（音频留在本地）或自行配置的云端服务，再翻译成双语；其他用户识别过的单集打开即有字幕。

### SubCast 收费吗？AI 功能要额外付费吗？

应用开源免费；AI 功能接入使用者自己配置的服务商，API Key 存在系统钥匙串，费用取决于所用服务商。

### SubCast 的开源许可是什么？

AGPL-3.0：可以自由使用、修改和再分发，但分发修改版本或将其作为网络服务提供时，需按同一许可开放完整源码。

## 来源

- [joeseesun/subcast 仓库与 README](https://github.com/joeseesun/subcast)
- [SubCast 官网](https://subcast.qiaomu.ai/)
