---
entityType: product
entity: stable-diffusion
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Stable Diffusion：开放权重图像生成模型家族、版本与许可｜Next Token Wiki'
seoDescription: '了解 Stable Diffusion 模型家族的定位与历史、当前版本与获取方式、社区许可条件，以及它与 Midjourney 等图像生成产品的区别。'
---

## Stable Diffusion 是什么

Stable Diffusion 是 Stability AI 提供的开放权重图像生成模型家族：用户输入文字描述，模型生成对应图像。它由 CompVis（慕尼黑大学）、Runway 与 Stability AI 等团队合作研发，2022 年 8 月 22 日公开发布；因为权重公开可下载，它成了图像生成领域被广泛研究和二次开发的一族模型。维基百科条目记录了这段早期历史与后续版本脉络（见[来源](#来源)）。

## 版本与获取方式

这个家族的版本边界值得注意：2022 年发布的是 1.x 系列（由 CompVis 发布），2023 年 7 月推出 SDXL，Stable Diffusion 3 在 2024 年 2 月提供早期预览，2024 年 10 月 22 日发布 Stable Diffusion 3.5。当前官方[图像模型页](https://stability.ai/stable-image)列出 Stable Diffusion 3.5（Large、Turbo、Medium）、SDXL（35 亿参数）与 SDXL Turbo 等成员，具体在售模型与能力以该页为准。

获取方式主要有三类：在[官方许可页](https://stability.ai/license)取得许可后自托管模型；通过 Stability AI API（Platform）按用量调用；或使用官方云伙伴与 Stable Assistant 等托管入口。常见的第三方图形界面（如各类 WebUI 发行版）不属于 Stability AI 的官方产品，加载哪个版本、如何配置，以对应项目的说明为准。

许可方面，早期版本采用 CreativeML OpenRAIL-M；Stable Diffusion 3.5 采用 Stability AI Community License。官方许可页写明：Community License 面向年营收低于 100 万美元的研究者、开发者、小企业与创作者，年营收超过 100 万美元的企业适用 Enterprise License；生成图像的权利归属与商用细节以[官方许可文本](https://stability.ai/community-license)为准。

## 与其他图像生成产品的区别

与同为图像生成的 [Midjourney](/wiki/products/midjourney) 相比，两者路线不同：Midjourney 是闭源的研究实验室产品，通过其官网服务使用；Stable Diffusion 的特点是权重开放下载，可以自托管、微调并接入自己的流程。选择时主要看是否需要本地部署与自定义，以及对许可条件的接受程度。

## 节目中的讨论

Weekly #003 的"把新模型接入现有 Agent"章节里，歸藏在介绍一个新模型的社区玩法时提到：[有人给它画了 24×24 或 30×30 的格，让它并行预测每个像素该填什么颜色，实现类似于 Stable Diffusion 或者 Diffusion 模型那种画图，确实能画出挺像样的东西](/weekly/003/transcript#quote-95f3eddc0464471e29dd)。这里 Stable Diffusion 是作为类比出现的，用于说明另一种图像生成思路，讨论对象并不是 Stable Diffusion 本身。

## 常见问题

### Stable Diffusion 是什么？

一个开放权重的图像生成模型家族，由 Stability AI 等机构研发，输入文字描述即可生成图像，可自托管或通过官方 API 使用。见[官方图像模型页](https://stability.ai/stable-image)。

### Stable Diffusion 官网在哪，在哪里下载？

官方入口是 [stability.ai](https://stability.ai/)，模型与部署信息见[图像模型页](https://stability.ai/stable-image)。模型权重与许可通过[官方许可页](https://stability.ai/license)获取；网上流传的下载站与整合包不是官方渠道。

### Stable Diffusion 免费吗？开源吗？

它是开放权重模型而不是无条件的免费服务。官方许可页写明：自托管核心模型在非商用、或使用方年营收不超过 100 万美元时免费（Community License）；年营收超过 100 万美元的企业需要 Enterprise License；API 按用量计费。条件以[官方许可页](https://stability.ai/license)为准。

### Stable Diffusion 现在有哪些版本？

截至 2026 年 9 月，官方图像模型页列出的家族成员包括 Stable Diffusion 3.5（Large、Turbo、Medium）、SDXL 与 SDXL Turbo。历史上还有 2022 年的 1.x 系列等；第三方工具默认加载的版本各不相同，使用前先确认实际版本。版本信息见[官方页面](https://stability.ai/stable-image)。

### Stable Diffusion 和 Midjourney 有什么区别？

Stable Diffusion 开放权重，可自托管、微调，接受 Community License 条件即可使用；Midjourney 是闭源服务，通过其官网使用。前者胜在可控与可定制，后者胜在开箱即用，具体差异见两者官方页面与[本站 Midjourney 条目](/wiki/products/midjourney)。

## 来源

- [Stability AI 图像模型页](https://stability.ai/stable-image)
- [Stability AI 许可选择页](https://stability.ai/license)
- [Stability AI Community License](https://stability.ai/community-license)
- [Stable Diffusion 3.5 发布公告](https://stability.ai/news-updates/introducing-stable-diffusion-3-5)
- [Wikipedia: Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion)
