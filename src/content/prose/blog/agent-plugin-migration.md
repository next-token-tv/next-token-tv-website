---
locale: zh-Hans
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
  - next-token-weekly--003
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'Agent 插件迁移，难在能力不对等'
description: '把插件从一个 Agent 搬到另一个，格式转换已经不是难点；真正的门槛是各家暴露的能力不一样，而且上游还在快速变动。'
updatedAt: '2026-10-10'
publishedAt: '2026-10-09'
---

一次顺利的插件迁移是这样的：把一批 [Obsidian](/wiki/products/obsidian) 插件迁到 [DeepSeek Harness](/wiki/products/deepseek-harness) 里，让 Agent 自己判断哪些功能与笔记无关并去掉，一次完成，人工几乎不介入。这次迁移成立有一个前提——这批插件用到的能力，目标宿主恰好都有。换成另一批插件、另一个宿主，结果未必相同。

插件迁移的难点因此不在搬运，而在搬运之后还剩下什么。

## 共识在标准层，分裂在实现层

Agent 插件生态里被普遍接受的，其实只有标准层：MCP 规定了工具怎么接入，AGENTS.md 和 Agent Skills 规定了说明与技能怎么写。再往上，各家插件体系各不相同：Codex 的插件可以固定在侧边栏与用户双向交互，Claude Code 有 Mods，Pi 有 Codemode，DeepSeek Harness 有自己的插件系统。同一个功能，放进不同宿主就是不同格式、不同接口。

这说明生态正在按人群分化：面向普通用户的 Personal Agent 越做越简单，面向生产力场景的 Agent 则不断扩充插件体系，自由度越来越高。插件作为后者的重要扩展方式，天然长在每个平台自己的土壤里。

## 门槛是宿主暴露了哪些能力

迁移真正的检验是能力对等。有的宿主支持某项能力，有的完全不支持——迁过去功能就被阉割。这种不对等出现在多个层面：

界面层，做 GUI 的插件最脆弱，宿主界面一挪动插件就失效，所以很多适配干脆放弃界面，改做 MCP 或 CLI 这种更稳定的暴露面。更基础的执行能力——宿主是否提供代码运行、能否持久化——决定了插件迁过去是完整功能还是空壳。细粒度功能同样参差，连接器多账号这类能力目前只有部分平台具备。差异未必来自技术限制，很多只是宿主没有做：插件依赖本地执行的那部分功能，在不提供运行环境的宿主里无法落地。

评估迁移时值得先列能力清单：目标宿主暴露了哪些接口、支持哪些文件与执行能力，再决定哪些插件值得跟。清单对不上，格式转换做得再好也没有意义。

## 上游不稳定，迁移就不是一次性的

即使这次迁成功了，上游一次更新就可能作废。DeepSeek Harness 更新频繁，之前装好的插件多半失效；有插件作者直言自己的库不更新，因为追不上上游。问题的一部分在设计：插件系统把复杂度转嫁给开发者，再配上高速迭代，兼容就成了持续性的成本，而不是一次性投入。

规范层同样需要多线维护：AGENTS.md 之外再维护一份 CLAUDE.md，两边一起改；Agent Skills 则还有宿主没有支持。维护负担直接落在每一个想跨平台的开发者身上。

## 迁移成本在下降，能力差异不会消失

模型能力让"搬运"本身越来越便宜。一个实际案例是 Markdown 编辑器更换内核：从 Milkdown 迁到 CodeMirror 6，目的是让渲染结果和源码成为同一份事实，而不是两套需要同步的状态。按开发者的估计，这样的工作量原本要以周计；交给模型执行，一次就产出了可用的结果，只需修掉一些遗留 Bug。Obsidian 插件迁移甚至可以整个交给 Agent 判断和执行。

这解决的是怎么搬的问题，不解决搬过去还有没有的问题——能力差异是宿主的产品设计决定的，不会因为转换工具变强而消失。

## 现成的分发生态

对想分发插件的个人开发者来说，Obsidian 展示了 Agent 官方生态之外的机会：插件上架机制简单，社区插件以开源形式分发，用户社区活跃。一位开发者的 Obsidian 插件两周获得两千多下载，用户群里的反馈直接而具体。

这种机会有它的结构原因。Obsidian 是一个上架的成熟应用，覆盖桌面和手机；插件接上它，等于同时继承了它的用户基数、数据组织和分发通道，不必自己从零积累。有人把它称作"小操作系统"——它自带一套完整的分发生态，开发者接上即可。

这是一次个人体验，规模和速度未必能复制到其他插件或平台。但它说明插件分发的入口不只有各家 Agent 官方市场：成熟的软件生态本身就是渠道，尤其当插件服务的正是这个生态用户的日常。

## 相关资料

- [Obsidian 插件迁移到 DeepSeek Harness 的经历](/weekly/005/transcript#quote-4aee9820b94a95b919f3)
- [Skill 和 MCP 是共识、插件各不相同](/weekly/005/transcript#quote-1b57b961c7f6b53c09f0)与[生产力 Agent 插件体系的分化](/weekly/005/transcript#quote-15476bf2887cbc4df949)
- [插件多半失效的更新体验](/weekly/002/transcript#quote-4b12f7533b43dcc76981)及[GUI 适配的脆弱性](/weekly/002/transcript#quote-7edaa117295025939d89)、[改做 MCP 或 CLI 的取舍](/weekly/002/transcript#quote-d87e3ed0d117548ed084)
- [插件系统的复杂度转嫁](/weekly/001/transcript#quote-56c9a7a492758084740a)与[追不上上游更新](/weekly/001/transcript#quote-9b223772ff9194051c4d)
- [维护多套规范文件的负担](/weekly/003/transcript#quote-a9d56612ddffc9ec9752)与[Agent Skills 的支持缺口](/weekly/003/transcript#quote-6ad8b7648df2fb790c1a)
- [连接器多账号这类细粒度能力差异](/weekly/003/transcript#quote-35655c31266543e58538)
- [Obsidian 插件的上架与下载](/weekly/004/transcript#quote-4fe3a02b88da55501408)及[真人社区的正反馈](/weekly/004/transcript#quote-c2bba111e07ec0a377fc)、[小操作系统式的生态](/weekly/005/transcript#quote-0a15d730dfec59bb92b8)
- [编辑器内核迁移的成本下降](/weekly/005/transcript#quote-a26a210c2315f9a66446)
