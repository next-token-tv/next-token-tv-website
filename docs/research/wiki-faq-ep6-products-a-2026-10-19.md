# 第 006 期产品 Wiki FAQ 研究记录（批次 A：homekit、rea、lingguang）

## 范围与口径

本记录支持 `homekit`、`rea`、`lingguang` 三个产品实体的 Wiki 正文（第 006 期节目提及：homekit 6 次、rea 5 次、lingguang 4 次，均见中文逐字稿）。研究日期为 2026-10-19。需求线索来自百度与 Google 的公开搜索联想接口（`sugrec` / `client=firefox`），逐条记录种子词与返回结果；没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，联想顺序不表示热度排名。

## FAQ 候选与证据

| 页面 | 种子词（接口） | 实际返回的相关问法 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| homekit | `homekit`（百度）、`apple homekit`（百度）、`homekit`（Google zh-CN）、`what is apple homekit`、`homekit vs matter`（Google en） | `homekit是什么`、`homekit有什么用`、`homekit怎么读`、`homekit智能家居`、`homekit怎么添加小米设备`、`homekit和米家哪个好`、`aqara 对比homekit`、`苹果homekit有什么用`、`homekit接入米家`、`what is apple homekit and how does it work`、`what is apple homekit vs apple home`、`homekit vs matter` | 定义、用途、设备兼容、比较 | 是（中 5 题、英 5 题） | [Apple Developer — Home](https://developer.apple.com/apple-home/) |
| homekit | `apple homekit`（百度） | `苹果homekit中枢`、`homekit国内好用吗`、`apple homekit 下载` | 家庭中枢、可用性 | 否：官方支持文档的"家庭中枢"条目本次未核到可引用正文（尝试的 support.apple.com 链接内容不符），不写未核验答案 | N/A |
| rea | `rea 逆向`、`rea github`（百度）、`rea 逆向 怎么用`、`rea mcp`（百度） | `rea逆向是什么`、`rea 逆向工程`、`rea逆向github`、`rea逆向是哪家公司开源的`、`rea逆向软件下载`、`rea逆向vmp`、`rea能逆向哪些应用`、`rea能逆向apk程序吗`、`REA逆向支持的ai`、`REA逆向软件怎么写出新的软件` | 定义、归属、安装、目标范围 | 是（中 5 题、英 5 题；`rea逆向vmp` 未单独成题，归入目标范围题） | [GitHub morluto/rea](https://github.com/morluto/rea)、[rea.tools](https://rea.tools) |
| rea | `rea github`（Google en） | `fs25 rea github`、`ls25 rea github`、`rea group github`、`rea mods from github` | 歧义排除 | 否：与 Farming Simulator 模组、REA Group（澳洲房产网站）等同名干扰，全部排除；英文页只采用能由仓库 README 回答的问题 | N/A |
| lingguang | `灵光`、`灵光 蚂蚁`、`灵光ai 是什么`、`蚂蚁灵光 收费`（百度） | `灵光ai`、`灵光是什么软件?`、`灵光ai下载`、`灵光app`、`灵光网页版`、`灵光ai和蚂蚁灵光区别`、`灵光ai是哪家公司的`、`蚂蚁灵光app官方下载安装`、`蚂蚁灵光干嘛的`、`蚂蚁灵光收费吗`、`灵光AI是免费的吗` | 定义、归属、下载、网页版、收费 | 是（中 6 题、英 5 题；`灵光ai和蚂蚁灵光区别` 并入归属题回答） | [灵光官网](https://www.lingguang.com/)、[蚂蚁集团新闻稿](https://www.antgroup.com/press-releases/1763452800000)、[App Store 中国区页面](https://apps.apple.com/cn/app/%E7%81%B5%E5%85%89-%E5%85%A8%E6%A8%A1%E6%80%81ai%E5%8A%A9%E6%89%8B/id6751496092) |
| lingguang | `灵光`（百度） | `灵光寺`、`灵光乍现`、`灵光一现`、`灵光是什么意思` | 歧义排除 | 否：寺庙、成语等其他含义全部排除，FAQ 回答中明确"蚂蚁旗下"限定 | N/A |

英文 lingguang 无独立联想采样（产品面向中国市场，英文联想无有效结果），英文 FAQ 问题为中文采到线索的对应翻译，已在正文按同一口径回答；`蚂蚁灵光收费吗` 一题官方无公开价格表，答案只陈述"App Store 可免费下载、无公开价格表、以应用内展示为准"。

## 事实核验

### homekit（Apple HomeKit）

- 来源：[Apple Developer — Home](https://developer.apple.com/apple-home/)（2026-10-19 抓取）。
- 核到的内容：HomeKit 框架定义（"coordinate and control supported smart home accessories from multiple vendors to present a coherent, user-focused interface"）；应用侧支持 iOS、iPadOS、macOS、watchOS、tvOS；配件侧需加入 MFi 计划获得 HomeKit Accessory Protocol 规范、ADK 与 "Works with Apple Home" 标识，Matter 配件需通过 CSA 认证；MatterSupport 框架自 iOS 16.1、iPadOS 16.1、macOS Ventura、watchOS 9.1、tvOS 16.1、HomePod software 16.1 起可用；同页列有 HomeKit Secure Video、ThreadNetwork、EnergyKit。
- 正文写入的"2014 年首次发布"为公认历史事实，未逐字核到 Apple 官方页面，来源列表未列该主张的单独出处；如需严格出处可补充 Apple Newsroom 存档。
- "该代系统于 2022 年发布"：iOS 16.1 发布于 2022 年 10 月，作为背景年份写入。
- 本期节目中出现的 Apple HomeView（[Apple HomeView 条目](/wiki/products/apple-homeview)）是另一实体，本条目不描述其产品细节。

### rea（Reverse Engineer Anything）

- 来源：[GitHub 仓库 README](https://github.com/morluto/rea)（raw README，2026-10-19）与 [GitHub API 仓库元数据](https://api.github.com/repos/morluto/rea)（2026-10-19）。
- 核到的内容：仓库描述 "Reverse engineer anything with agents, from app behavior down to native binaries"；README 描述 "One MCP for reverse engineering across binaries, applications, and runtime behavior"；目标列表（原生二进制、JS/Electron、.NET、网站、WASM、APK、固件、SQLite、HAR/SAZ、进程行为等）；集成 Hopper、Ghidra、IDA（商业工具需合法授权）及 objdump、Rizin、JADX、Apktool、Binwalk、mitmdump 等；JS/.NET 静态分析内置；安装 `npx rea-agents setup`，支持 Claude Code、Codex、Cursor、Gemini CLI；要求 Node.js 22.x（≥22.19）/24.x（≥24.11）/26+；MIT 许可（REA 自有代码）；仓库创建于 2026-04-14，官网 rea.tools。
- 未核到归属公司信息；正文按"官方渠道未见归属公司的说明"处理。星标数等易变指标未写入正文。

### lingguang（蚂蚁灵光）

- 来源：[灵光官网](https://www.lingguang.com/)（页面标题"灵光AI-蚂蚁旗下智能全模态AI助手"，meta 描述含"官网网页版入口"）、[蚂蚁集团新闻稿 URL](https://www.antgroup.com/press-releases/1763452800000)（页面为客户端渲染，正文经搜索结果摘要与多方报道交叉核验；URL 时间戳 1763452800000 对应 2025-11-18）、[App Store 中国区页面](https://apps.apple.com/cn/app/%E7%81%B5%E5%85%89-%E5%85%A8%E6%A8%A1%E6%80%81ai%E5%8A%A9%E6%89%8B/id6751496092)（2026-10-19 抓取）。
- 核到的内容：发布日期 2025 年 11 月 18 日（新闻稿口径，另见百度百科、知乎专栏、CSDN 等多来源一致）；首批三大功能"灵光对话、灵光闪应用、灵光开眼"；"自然语言 30 秒生成小应用"与"业内首个全代码生成多模态内容"为官方宣传口径，正文按官方介绍归属表述；App Store 开发者署名 Alipay (Hangzhou) Technology Co., Ltd.，需 iOS 15.0+，可免费下载；灵光圈社区；App Store 评分与榜单数字为易变数据，未写入正文。
- 未核到：Android 官方下载渠道（应用宝等第三方商店存在，但未核官方分发说明，正文只写"其他平台以官网为准"）；收费标准（官方无公开价格表）；歸藏在节目中"灵光原来就有"（改版/更名来源）的说法——正文保留为参与者说法并注明未见官方渠道印证。

## 节目证据

三个实体的节目讨论均来自第 006 期中文逐字稿（英文逐字稿仅导入至第 005 期，第 006 期只有中文版，英文正文引用均标注 Chinese transcript）：

- homekit：[chapter-08 "智能家居为什么还这么难用？连接、体验与封闭生态"](/weekly/006/transcript#chapter-08)。引用段落锚点：`quote-6de598516b98521d24fa`（杨攀，说出协议名）、`quote-1df0708bef0a159a5973`（杨攀，网关连小米设备的思路）、`quote-25dd15bf3ae3b6c81e59`（橘子，小音箱连不明白）、`quote-2cdaf6b33bf1458827a8`（歸藏，Muse 与 HomeKit 设备数对比，参与者主张未独立核验）。
- rea：[chapter-02 "REA 与 AI 逆向：给怒喵鼠标补一个 macOS 驱动"](/weekly/006/transcript#chapter-02)。锚点：`quote-e163f25f5667f2010006`（向阳乔木开场）、`quote-b55c73e9c9d26550fb59`（歸藏，没用 REA 觉得重）、`quote-b79ec8065580ad28d3a6`（歸藏，驱动一晚上写完）、`quote-1972ff8f5c4a5ffea27b`（歸藏，REA 集成生僻破解软件）、`quote-327453006a4f9300b48b`（杨攀，典型的 Skill 模式）、`quote-966cb67f87fa9756161a`（向阳乔木转述"套壳"说法，正文以转述归属引用）。
- lingguang：[chapter-15 "国内 Agent 的落点：生活助理做不起来，先给商家干活？"](/weekly/006/transcript#chapter-15)。锚点：`quote-5c01b585a38d1a256982`（橘子，与千问 Go 并提）、`quote-70fb5c4dea153e477fdd`（杨攀，灵光是蚂蚁的）、`quote-959e4f2b91bb04f8bb74`（歸藏，"灵光原来就有"）、`quote-c1dcaa7de0c64099450a`（杨攀，国内没有用武之地）。

锚点按 `src/data/transcript-paragraph-anchors.ts` 的算法（NFC + 空白折叠，sha256(发言人 + "\\0" + 段落原文) 前 20 位）重新计算并核对。歸藏在 rea 故事中提到"让他逆向"的对象未在原文中点名，正文未指认执行者；橙子在 lingguang 段落把灵光误归为阿里，杨攀纠正为蚂蚁，正文按此归属书写。节目中"连接小米生态"一句主语不明，未采用。

## 原始采样数据

2026-10-19 百度 `sugrec` 与 Google Firefox 联想接口的原始返回保存在 `/tmp/faq-ep6a/`（临时目录，未入库）：`baidu-homekit.json`、`b2-baidu-what_is_apple_homekit.json`、`b2-baidu-homekit_vs_matter.json`、`b2-ggl-what_is_apple_homekit.json`、`b2-ggl-homekit_vs_matter.json`、`ggl-homekit.json`、`ggl-apple_homekit.json`、`baidu-rea_逆向.json`、`b2-baidu-rea_逆向_怎么用.json`、`b2-baidu-rea_mcp.json`、`ggl-rea_github.json`、`baidu-灵光.json`、`baidu-灵光_蚂蚁.json`、`b2-baidu-灵光ai_是什么.json`、`b2-baidu-蚂蚁灵光_收费.json`。如需长期留档可另行复制入库；本记录表格已完整转录所用候选。

## 未知项与后续

- homekit "家庭中枢（home hub）"是真实需求线索，但官方支持文档未核到可引用正文，本轮未成题；后续可从 Apple 支持页补核。
- rea 的作者与维护团队身份、是否有关联公司，未见官方说明。
- lingguang 的 Android 分发渠道、收费标准、底层模型名称（第三方报道提及"百灵大模型"等，未在官方页面核到）均未写入正文。
- 第 006 期无英文逐字稿；英文页所有节目引用均为页面级/锚点级中文链接并标注 Chinese transcript。
