---
entityType: product
entity: hyperframes
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-09'
seoTitle: 'HyperFrames：HeyGen 开源的 AI Agent 视频制作工具｜Next Token Wiki'
seoDescription: 'HyperFrames 是什么：HeyGen 2026 年开源的写 HTML 渲染视频工具，面向 AI Agent，与 Remotion 的关系及第 9 期节目讨论。'
---

## HyperFrames

HyperFrames 是 [HeyGen](/wiki/brands/heygen) 开源的视频制作工具，核心是把 HTML 动画渲染成视频，官方 GitHub 仓库的自我描述是"写 HTML，渲染视频，为 Agent 而建"，仓库创建于 2026 年 3 月，采用 Apache 2.0 许可。官网称其为"免费开源"，同时提供运行在 Mac、Windows 和 Linux 上的 HyperFrames Studio 桌面应用，入口见[官方网站](https://hyperframes.heygen.com)。

## 用途与区别

HyperFrames 面向由 AI Agent 驱动的视频生产：Agent 生成或修改 HTML 合成（composition），工具负责预览与渲染成片，官方仓库与文档围绕 Agent 工作流组织。这与面向人类剪辑软件的定位不同，也与用 React 组件写视频的 [Remotion](/wiki/products/remotion) 在使用方式上有差异。

## 节目中的讨论

第九期在"[Harness 与插件生态](/weekly/009/transcript#chapter-01)"里多次聊到 HyperFrames。歸藏称现在用 Claude 做视频时 Claude 会优先使用内置的 HyperFrames（见[该段落](/weekly/009/transcript#quote-6f9b68be1b07750b38c0)）。向阳乔木提出疑问：HyperFrames 整合了 Remotion 的部分底层能力、由 HeyGen 打包成框架，不到半年就成为 HTML 渲染视频的共识首选，这归功于大模型还是营销（见[该段落](/weekly/009/transcript#quote-d54f0ea51c642151a619)）。歸藏认为模型会逐渐把 HyperFrames 与视频任务关联起来，"一旦涉及到视频，模型就会调 HyperFrames"（见[该段落](/weekly/009/transcript#quote-646db397bb0765bb6ec3)）。杨攀则把它与 Next.js、Astro 归为不会被模型替代的"乐高组件"（见[该段落](/weekly/009/transcript#quote-02ab560177ba9cacb0fb)）。橘子在讨论中询问其商业化方式。以上都是参与者的观点与猜测，不是 HeyGen 的官方说法。

## 常见问题

### HyperFrames 是什么？

[HeyGen](/wiki/brands/heygen) 开源的 HTML 转视频工具，写 HTML 合成后由工具渲染成视频，面向 AI Agent 的工作流，见[官方网站](https://hyperframes.heygen.com)。

### HyperFrames 是免费开源的吗？

是，官方标注免费开源，代码以 Apache 2.0 许可在 [GitHub](https://github.com/heygen-com/hyperframes) 公开；同名的 HyperFrames Studio 桌面应用从官网下载。

### HyperFrames 和 Remotion 是什么关系？

两者都用网页技术渲染视频。[Remotion](/wiki/products/remotion) 用 React 组件写视频；第九期节目中向阳乔木称 HyperFrames 整合了 Remotion 的部分底层能力，这是参与者的说法，未见双方官方声明。

### 怎么在 Agent 里使用 HyperFrames？

官方文档从 Agent 工作流角度组织，见[文档入口](https://hyperframes.heygen.com)；第九期节目里歸藏提到 Claude 的视频工作流内置优先使用 HyperFrames，这是参与者的使用观察。

## 来源

- [HyperFrames 官方网站](https://hyperframes.heygen.com)
- [heygen-com/hyperframes 仓库](https://github.com/heygen-com/hyperframes)
