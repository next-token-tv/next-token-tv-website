---
entityType: product
entity: qiaomu-ai-rss
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-02'
seoTitle: '乔木 AI RSS：向阳乔木的 Obsidian RSS 阅读插件｜Next Token Wiki'
seoDescription: '了解乔木 AI RSS 的定位、中文 AI 改写与翻译功能、安装方式，以及第八期节目中关于稳定性的讨论。'
---

## 乔木 AI RSS 是什么

乔木 AI RSS 是[向阳乔木](/wiki/people/xiangyang-qiaomu)（GitHub 账号 joeseesun）开发的 RSS 阅读工具，形态是 [Obsidian](/wiki/products/obsidian) 插件：在 Obsidian 中阅读乔木精选的资讯源和自己订阅的 RSS/Atom 源，支持中文 AI 改写与翻译，并把文章保存为 Markdown 笔记。项目以 GPL-3.0 许可证开源在 [GitHub 仓库 joeseesun/qiaomu-ai-rss](https://github.com/joeseesun/qiaomu-ai-rss)。

## 用途与功能

按仓库 README 的说明：

- 阅读与保存：阅读乔木精选源与自订阅源，文章可保存为 Markdown 笔记，并把链接加入每日笔记。
- 中文阅读：原文、中文翻译与乔木 AI 改写三种版本可切换；README 说明改写与翻译仅针对已发布的 AI 资产，不新请求 AI 生成。
- 附加能力：播客播放、YouTube 内嵌、OPML 导入导出、离线缓存、朗读（TTS），以及可选的链接捕获/转录实验功能。
- 桌面端支持导出 Markdown 与 PDF；移动端可阅读。

README 还说明该插件基于作者自己的 QMReader iOS 应用及其公开 API 独立开发，不是其他 Obsidian RSS 插件的 fork。

## 使用与区别

安装走 Obsidian 的常规路径：官方社区插件库、BRAT 或手动下载 Release 文件放入 `.obsidian/plugins/qiaomu-ai-rss/` 后启用。与一般 RSS 阅读器的区别在于它把阅读与 Obsidian 知识库打通：文章直接落到自己的 Markdown 仓库，配合中文翻译与改写，降低中文读者阅读英文资讯的成本。

## 节目中的讨论

第八期（2026 年 11 月 1 日录制）["折叠屏适配：AI 编程变强，体验为何还没跟上？"](/weekly/008/transcript#chapter-12)章节中，向阳乔木在聊自己最近购买的虚拟服务时提到：[他买了一台 VPS，希望 AI RSS 站点在用的人多了以后依然稳定，并有容灾备份](/weekly/008/transcript#quote-e46a92701a3d4b6e987a)。这是参与者对自己服务安排的说明，不是对产品功能的介绍。

## 常见问题

### 乔木 AI RSS 是什么？

它是向阳乔木开发的 Obsidian RSS 阅读插件：阅读乔木精选源与自订阅源，支持中文 AI 改写与翻译，文章保存为 Markdown 笔记。项目见 [GitHub 仓库](https://github.com/joeseesun/qiaomu-ai-rss)。

### 乔木 AI RSS 怎么安装？

可以从 Obsidian 官方社区插件库安装，或通过 BRAT，或手动下载 Release 中的 main.js、manifest.json 和 styles.css 放入 `.obsidian/plugins/qiaomu-ai-rss/` 后启用。具体步骤见 [README](https://github.com/joeseesun/qiaomu-ai-rss)。

### 乔木 AI RSS 免费吗？

公开功能无需账号或付费，项目以 GPL-3.0 许可证开源；作者另提供单独的商业授权，详见 [GitHub 仓库](https://github.com/joeseesun/qiaomu-ai-rss)。

### 乔木 AI RSS 和其他 Obsidian RSS 插件有什么区别？

按 README 的说明，它基于作者自己的 QMReader iOS 应用及其公开 API 独立开发，不是其他 Obsidian RSS 插件的 fork；差异点包括乔木精选源、中文 AI 改写与翻译三版本切换，以及与 Obsidian 笔记流程的深度结合。

## 来源

- [GitHub 仓库 joeseesun/qiaomu-ai-rss](https://github.com/joeseesun/qiaomu-ai-rss)
