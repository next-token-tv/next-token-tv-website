---
locale: zh-Hans
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
status: published
title: '小团队还要从零写一套 Agent 框架吗？'
description: 'Agent 的基础执行能力正在被托管服务和成熟框架接管。应用团队要回答的问题不是要不要自研，而是把哪些责任交出去、把哪些留下来。'
updatedAt: '2026-10-10'
publishedAt: '2026-09-16'
---

拆开一个小团队的 Agent 应用，真正差异化的部分通常只在很薄的一层。任务循环、工具调用、上下文拼接这些基础能力，如今已经有多种现成来源：厂商的 Agent API、持续迭代的开源 Harness、可以嵌入自己产品的 CLI。从零写一套框架还剩多少是值得做的，取决于这些替代品各自接管了什么。

## loop 很容易，长期用很难

一个能跑的 Agent 循环并不复杂：把任务交给模型，解析它要调用的工具，执行，把结果拼回上下文，再来一轮。真正拉开差距的是长期使用中沉淀下来的细节。Agent 看起来简单，长期使用会发现很难——会话和项目的组织、缓存的命中、与模型协同的优化，都藏在"能跑"之后。

[Codex](/wiki/products/codex) 是这种细节积累的一个样本：它提供专门的工具，可以拉出自己所有的 Project 和 Session、查看进展状态，甚至能定位到某个长对话里出现过的重连问题。这类能力来自架构设计时就为模型训练保留的完整记录，以及长时间的持续迭代。小团队即使写出同样形态的循环，也很难在所有这些细节上投入同等的维护。

复杂度还在增加。自建的 Harness 通常从最简单的 loop 起步，随后不断往里加功能，复杂到一定程度就需要被封装起来——这也正是厂商把它做成托管服务的动机之一。

## 壳上要做的事，比想象中多

把执行能力交给成熟框架之后，应用团队剩下的部分常被概括为"做壳"。这个概括低估了壳的工作量，一个实际开发过的案例可以说明问题：[CodePilot](/wiki/products/codepilot) 最早只适配 [Claude Code](/wiki/products/claude-code) 一家，那时候 Agent SDK 把其他事情做得很好，团队只需要管 UI。但随着各家框架此消彼长，用户今天用这家、明天用那家，壳不得不适配所有后端：做 runtime 路由，把用户输入分发到不同的 CLI 和框架上；处理各家互不相同的 API 格式、返回数据和计费方式；再叠加产品自己的独特功能和历史债务，适配工作越滚越大。

厂商绑定加深让这个问题更严重。Agent 与自家模型越绑越死，各家 Coding Plan 互不兼容，适配成本持续上升。"全都适配"的壳因此越做越难受，却也不敢只适配一家——今天被嘲讽的那家，过几天可能又因为额度或能力翻盘。

## 三种选择，三种责任范围

可选的路线至少有三种，责任范围各不相同。

第一种是托管服务。Agent API 或官方 Harness 把模型、工具和执行环境打包成闭环，团队只调用服务。代价是深度绑定：模型与 Agent 的组合优化是成对的，支持官方组合的人常举缓存率的例子——同一个模型在官方宿主里的缓存命中更好，尽管具体数字各有说法。组合的优势还包括整合范围——中文信息检索场景里，[DeepSeek](/wiki/products/deepseek) 官方组合的插件能拿到外部工具拿不到的内容，比如公众号全文。

第二种是 SDK 与 CLI。把执行引擎嵌进自己的产品，模型和基础循环由上游维护，运行形态、界面和数据由自己控制。这是折中方案，但跟随上游本身就是负担：[DeepSeek Harness](/wiki/products/deepseek-harness) 一天发十几个版本，插件底层一动全部失效；做 GUI 的适配，宿主界面一挪就废，社区因此形成的共识是改做 MCP 或 CLI 这种更稳定的暴露面；想要稳定，就得像 Linux 早期一样等别人打包好的发行版。

第三种才是从零自研。它并没有变得毫无用处——执行环境特殊、安全边界严格，或者产品本身就是框架研究时，自研仍然合理。但对多数面向用户的应用来说，基础执行能力已经有更便宜的来源，自研的判断标准从"别人没有"变成了"这一层是否真的构成产品的差异"。

## 交给基础设施之后

更进一步的设想是把整个执行层当作基础设施：过去做互联网服务是从云厂商租一台主机部署程序，以后租的可能是"Agent 主机"或 Agent 环境，大量业务由它驱动。这个类比目前还是设想，但方向上的信号已经出现——Agent 越来越被当作技术而非产品，用户不再关心背后是什么模型，服务只暴露自己特殊的部分。

对应用团队，真正留下来的部分因此反而清晰：产品定义、界面、垂直数据与上下文、评测与交付。过去一年许多团队自研 Harness 的投入，事后看更像是交了学费，学费换来的是一个可以据实回答的问题——把可以外包的执行能力外包出去，资源集中在别人替代不了的那一层。至于哪一层对自己不可替代，每个团队要用各自的场景来回答。

## 相关资料

- [Agent 做起来简单、长期用难的观察](/weekly/001/transcript#quote-846174adad06252d10f9)及[Codex 对自身项目的感知能力](/weekly/001/transcript#quote-3f25f5a9fcd109253c54)、[模型与 Agent 的组合偏好](/weekly/001/transcript#quote-23bda31a804e49123ef0)
- [插件系统的复杂度转嫁](/weekly/001/transcript#quote-56c9a7a492758084740a)与[更新频繁导致无法兼容](/weekly/001/transcript#quote-9b223772ff9194051c4d)
- [Coding Agent 的双向融合](/weekly/001/transcript#quote-6da3490b335d2ae6828d)
- [官方组合的中文检索体验](/weekly/002/transcript#quote-8316bc20929e3c03de42)及[插件能拿到微信内容](/weekly/002/transcript#quote-a805ea92e1226e6adb67)
- [更新太快插件跟不上](/weekly/002/transcript#quote-4b12f7533b43dcc76981)与[一天十几个版本](/weekly/002/transcript#quote-1802555fa13ce80c462b)、[GUI 适配的脆弱性](/weekly/002/transcript#quote-7edaa117295025939d89)、[改做 MCP 或 CLI](/weekly/002/transcript#quote-d87e3ed0d117548ed084)、[发行版策略](/weekly/002/transcript#quote-1aa8c2eff59cd4bedee9)
- [壳与 loop 的分工](/weekly/002/transcript#quote-041481ffa5caf66f905d)及[适配成本的来源](/weekly/002/transcript#quote-22236d8ec47c9a407d78)、[复杂到需要封装](/weekly/002/transcript#quote-b42bc119a014f52e3342)
- [Agent API 与官方 Harness 打包](/weekly/002/transcript#quote-0208154e94365b78f6c6)与[自建 Harness 收敛的判断](/weekly/002/transcript#quote-a2f65ad7e3c155d5d55b)
- [Agent 服务作为新基础设施的设想](/weekly/002/transcript#quote-aa01ef206e5d60d944ed)与[租 Agent 主机的类比](/weekly/002/transcript#quote-1efc17893c72c8d331b4)、[Agent 是技术不是产品](/weekly/002/transcript#quote-ae057ee823546313680c)
