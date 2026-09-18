# 创作者工具与硬件 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `esp32`、`electron`、`doubao-input-method`、`dji-pocket-4`、`devin`、`deepswe`、`davinci-resolve` 和 `codepilot` 的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。搜索需求线索来自 2026-09-18 的 Google Autocomplete 公开联想接口（`suggestqueries.google.com`，`client=firefox`，分别用 `hl=en` 与 `hl=zh-CN` 采样，中文结果按 GBK 解码）；官方事实核验使用各产品官方页面、GitHub 仓库与 Wikipedia 相关条目。本次没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想候选的出现与顺序不等于热度排名，也不构成效果承诺。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 语言 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| esp32 | `esp32 s3`、`esp32-p4`、`esp32 c3`、`esp32-c6`、`esp32 cam`、`esp32 board`、`esp32 projects`、`esp32 cyd` | en | 选型、用途、项目 | 是（选型 FAQ 采纳 S3/C3/C6/P4 候选） | [Espressif ESP32 产品页](https://www.espressif.com/en/products/socs/esp32) |
| esp32 | `esp32是什么`、`esp32 开发板 教学`、`esp32开发板原理图`、`esp32 开发板 选择` | zh | 定义、入门、选型 | 是（"是什么""怎么入门""选哪个"） | 同上；[ESP-IDF GitHub](https://github.com/espressif/esp-idf) |
| electron | `electron framework tutorial`、`electron framework vs react`、`electron framework vs tauri`、`electron framework examples`、`electron framework download` | en | 定义、对比、上手 | 是（"是什么""怎么开始""vs Tauri"） | [electronjs.org](https://www.electronjs.org/)、[文档](https://www.electronjs.org/docs/latest/) |
| electron | `electron中文文档`、`electron 中文 教程`、`electron 中文 官网`、`electron 桌面应用` | zh | 入口、上手 | 是（入口类 FAQ） | 同上 |
| 裸词歧义 | `electron` 的联想被电负性、电子配置、电子回收等淹没 | en | — | 排除同名歧义，仅采用带 framework/js/中文文档 修饰的候选 | — |
| doubao-input-method | `豆包输入法 mac`、`豆包输入法windows`、`豆包输入法电脑版`、`豆包输入法windows内测`、`豆包输入法下载`、`豆包输入法 pc`、`豆包输入法 win`、`豆包输入法 linux`、`豆包输入法pc版什么时候上线`、`豆包输入法pc内测` | zh | 下载、平台、桌面版 | 是（官网与平台 FAQ；`linux` 与 `pc版什么时候上线` 采纳进平台边界说明，不写成支持承诺） | [ime.doubao.com](https://ime.doubao.com) |
| dji-pocket-4 | `dji pocket 4 pro`、`dji pocket 4p`、`dji pocket 4 pro release date`、`dji pocket 4 release date`、`dji pocket 4 vs 3` | en | 版本分支、发布时间、比较 | 部分（"是什么""参数"采用；`release date` 与 `vs 3` 因官方页面无固定发布时间与官方对比页，未采用断言式回答） | [DJI 产品页](https://www.dji.com/osmo-pocket-4)、[支持页](https://www.dji.com/support/product/osmo-pocket-4) |
| dji-pocket-4 | `大疆pocket4价格`、`大疆pocket4参数`、`大疆pocket 4发布时间`、`大疆pocket 4 lut`、`大疆pocket4随心换` | zh | 价格、参数、配件 | 部分（"参数""在哪买"采用；价格指向官方商城实时页） | [DJI 商城](https://store.dji.com/) |
| devin | `devin ai agent`、`devin ai valuation`、`devin ai vs claude code`、`devin ai pricing`、`devin ai software engineer`、`devin ai reviews`、`devin ai login` | en | 定义、定价、比较、入口 | 是（"是什么""怎么用""怎么收费""区别"） | [devin.ai](https://devin.ai/)、[价格页](https://devin.ai/pricing)、[文档](https://docs.devin.ai/) |
| devin | `devin是什么`、`devin desktop`、`devin cli`、`devin pro` | zh/en 混合 | 定义、形态、套餐 | 是（入口与形态写入"怎么用"；`devin pro` 并入收费 FAQ 的档位指针） | 同上 |
| devin | `devin vassall`、`devin booker` 等人名联想 | en | — | 排除同名歧义 | — |
| deepswe | `deepswe benchmark score`、`deepswe benchmark minimax`、`deepswe benchmark deepseek`、`deepswe benchmark grok`、`deepswe benchmark leaderboard`、`deepswe benchmark datacurve`、`deepswe benchmark fable` | en | 榜单、分数、厂商表现 | 是（"是什么""谁做的""在哪看榜单"）；具体模型分数未逐项核验，不写入正文 | [deepswe.datacurve.ai](https://deepswe.datacurve.ai/)、[Datacurve research](https://datacurve.ai/research) |
| davinci-resolve | `davinci resolve download`、`davinci resolve free`、`davinci resolve studio`、`davinci resolve price`、`davinci resolve 免费 付费 差异`、`davinci resolve 免费版 限制`、`davinci resolve 21` | en/zh | 下载、版本差异、价格 | 是（"免费版和 Studio 区别""在哪下载"） | [官方产品页](https://www.blackmagicdesign.com/products/davinciresolve) |
| davinci-resolve | `davinci resolve mcp`、`davinci resolve mcp official`、`davinci resolve mcp server claude` | en | AI/Agent 接入 | 采到但未采用为独立 FAQ 断言：官方产品页未列出 MCP 细节，外部核验只找到社区实现；正文以节目转述口径呈现 | 官方文档（未能定位到官方 MCP 页面） |
| codepilot | `codepilot` 的联想全部为 `copilot` 系（GitHub Copilot 语境） | en | — | 命名歧义本身成为 FAQ（"和 GitHub Copilot 有什么关系"，标注编辑补充） | [codepilot.sh](https://www.codepilot.sh/)、[GitHub 仓库](https://github.com/op7418/CodePilot) |

`豆包输入法和微信输入法哪个好`、`devin ai vs manus`、`大疆 pocket 4 价格` 等中文查询在联想接口中无候选或仅回显原词；相关 FAQ（豆包输入法 vs 微信输入法、Devin vs Manus、DJI 价格指针）按编辑归纳处理，答案内容以官方页面或节目原文为据。

## 事实边界

- **esp32**：Espressif 官方产品页确认芯片家族、S/C/H/P 系列导航、模组与 DevKit 分层、ESP-IDF 及 Arduino/Zephyr 支持；2016 年 9 月发布日期来自 Espressif 2016-09-07 新闻（经 Wikipedia 引用核对）。未写供货状态（节目"卖断货"仅为参与者说法）。
- **electron**：官方站点确认框架定位、Chromium+Node.js 架构、OpenJS Foundation 归属、应用列表与 Forge/Fiddle 工具；2013-07-15 首次发布（Atom Shell）与 2015 更名来自 Wikipedia 引用的 GitHub release 与官方博客。版本号不写入正文。
- **doubao-input-method**：官方站点 ime.doubao.com 确认产品名、标语、开发公司（北京春田知韵科技有限公司）、能力（方言/中英混说语音识别、大模型补全纠错、智能排版、超级互传）与五平台入口。YAML 原指向 doubao.com，官方输入法站点为本次核验新定位。
- **dji-pocket-4**：官方产品页与支持页确认产品名"Osmo Pocket 4"、1 英寸 CMOS、4K/240fps、14 档动态范围、10-bit D-Log、2 英寸 1000 尼特旋转屏、ActiveTrack 7.0、107GB 存储、OsmoAudio 与 DJI Mimo App。**发布日期未能在官方页面或可靠报道中确认，正文与 FAQ 均不写发布时间**；`pro`/`4p` 等版本分支有联想线索但未逐一核验，不写入。
- **devin**：Cognition 博客《Introducing Devin》确认 2024-03-12 发布、"first AI software engineer"定位与沙箱工具；devin.ai 确认用途、集成与接入面；devin.ai/pricing 确认免费层与 Pro/Max/Teams/Enterprise 档位结构（正文不复制具体价格）。**2026 年新融资轮次未能独立核验，正文保留为 Weekly #002 中橘子的转述**。
- **deepswe**：Datacurve 官方资料确认其为基准（非 Agent）、2026-05-18 发布、长周期任务定位、参考解平均约 668 行、对现有基准验证器的 8% 假阳性/25% 假阴性审计、新模型重跑机制。注意 "DeepSWE" 一名在 2025 年亦被其他项目使用过，本页按 YAML 与官方站点确认指代为 Datacurve 基准。
- **davinci-resolve**：官方产品页确认模块划分、免费版与 Studio 版差异、Neural Engine AI 能力与三平台支持（当前大版本 21）。**官方页面未列出 MCP；DaVinci MCP 的存在与"付费版才能用"仅来自 Weekly #002 中歸藏的转述，正文与 FAQ 均按转述口径标注**。
- **codepilot**：官方站点确认产品定位、支持 Claude Code/Codex/内置 Agent、Skills/MCP/CLI 扩展、模型供应商列表、三平台下载与 BSL 1.1 许可（个人/教育/非营利/评估免费，商业或 100 人以上公司需授权）；GitHub API 确认仓库 op7418/CodePilot（6463 stars）及所有者身份为歸藏，仓库描述注明"Built with Electron + Next.js"。

## 节目证据

本地已发布的中文逐字稿有直接相关章节与段落（引用锚点已按段落指纹脚本核对）：

- esp32：[Weekly #001 chapter-20](/weekly/001/transcript#chapter-20)（章节名"ESP32 成为"新乐高"，全民发明家时代来了"），歸藏 [quote-fd8b64bb3e29bbdc9c33](/weekly/001/transcript#quote-fd8b64bb3e29bbdc9c33)。
- electron：[Weekly #002 chapter-04](/weekly/002/transcript#chapter-04)，橘子 [quote-b2b0a48179812ca8f3c8](/weekly/002/transcript#quote-b2b0a48179812ca8f3c8)。
- davinci-resolve：[Weekly #002 chapter-04](/weekly/002/transcript#chapter-04)，歸藏 [quote-88e066d70994208c2f85](/weekly/002/transcript#quote-88e066d70994208c2f85)。
- devin：[Weekly #002 chapter-13](/weekly/002/transcript#chapter-13)，橘子 [quote-19300ab15820236763c2](/weekly/002/transcript#quote-19300ab15820236763c2)。
- deepswe：[Weekly #002 chapter-06](/weekly/002/transcript#chapter-06)，橘子 [quote-dd24c125cfe948d0caa7](/weekly/002/transcript#quote-dd24c125cfe948d0caa7)、杨攀 [quote-187fd0124b30c8c736f8](/weekly/002/transcript#quote-187fd0124b30c8c736f8)。
- codepilot：[Weekly #002 chapter-14](/weekly/002/transcript#chapter-14)，向阳乔木 [quote-02143b2e529a69172809](/weekly/002/transcript#quote-02143b2e529a69172809)。
- dji-pocket-4：[Weekly #002 chapter-17](/weekly/002/transcript#chapter-17)，杨攀 [quote-dc7d0bbb900981555418](/weekly/002/transcript#quote-dc7d0bbb900981555418)。
- doubao-input-method：[Weekly #002 chapter-21](/weekly/002/transcript#chapter-21)，向阳乔木 [quote-ac088b26a16e66465ab3](/weekly/002/transcript#quote-ac088b26a16e66465ab3)；[Weekly #002 chapter-25](/weekly/002/transcript#chapter-25)，歸藏 [quote-fcd8072ea8d43c45fbe5](/weekly/002/transcript#quote-fcd8072ea8d43c45fbe5) 与 [quote-8988b6ddafa8517d6e43](/weekly/002/transcript#quote-8988b6ddafa8517d6e43)。

这些链接承载节目参与者在具体语境中的讨论或体验，不是独立测评或官方背书。英文正文链接到中文章节与段落，标注 Chinese transcript，未生成不存在的英文逐字稿 URL。

## 省略与未知项

- DJI Osmo Pocket 4 的发布日期、价格与 `pro`/`4p` 版本分支：无可靠官方来源，未写入。
- DaVinci Resolve MCP：外部核验仅见社区实现，官方状态未知；只保留节目转述口径。
- Devin 2026 年融资：只有节目转述，未写入事实性陈述（FAQ 中明确标注信息边界）。
- 豆包输入法的 Linux 支持、价格：官方站点未列出，不写。
- DeepSWE 榜单上的具体模型分数：未逐项核验，不写。
- codepilot 的搜索需求线索几乎全部被 GitHub Copilot 吸收，其 FAQ 以下载、许可等编辑补充为主，并已标注。
