# 新产品批次 C（7 实体）Wiki FAQ 研究记录

## 范围与口径

本记录支持 `arrow`、`bug-say`、`helix`、`instinct`、`atlas`、`ego-lite`、`hyperos` 的 Wiki 正文。研究日期为 2026-09-21，面向中文和英文读者。公开 SERP 采样使用 Google 公开联想接口（`suggestqueries.google.com`，Firefox client，`hl=zh-CN` / `hl=en`），用于确认问题形态和官方答案入口；没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**，联想顺序不是热度排名。短名实体（arrow、helix、instinct、atlas、ego）一律带品牌或用途修饰词采样，避免射箭、DNA、词典、Garmin 手表、星座等同名歧义。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| Arrow | `quiver ai arrow`（en）、`arrow svg ai`、`arrow 1 ai svg`、`arrow 1.0 svg ai`、`arrow ai svg model` | 定义、版本、API | 是（"Arrow 1 还能用吗"来自 1.x 停用说明与 `arrow 1 ai svg` 变体；API 与区别题为编辑补充） | [QuiverAI 模型页](https://quiver.ai/models/)、[QuiverAI 官网](https://quiver.ai/) |
| Bug Say（叭哥说） | `叭哥 有道`、`叭哥说 app`（zh）；`叭哥说`（zh）返回空 | 厂商归属、下载、定义 | 是（归属与设备题来自采样；收费题为编辑补充，官方页无价格） | [bug.youdao.com](https://bug.youdao.com/)、[有道官网](https://www.youdao.com/) |
| Helix | `figure helix`（en）、`figure helix 02`、`figure helix 2`、`figure helix paper`、`figure helix price`、`helix 2.5 figure`（en，1 条） | 定义、版本差异、价格 | 是（版本差异题来自 `figure helix 02`；`figure helix price` 未采用——官方无售价信息；"能否对外使用""数据可信吗"为编辑补充） | [Figure Helix 2.5 新闻稿](https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization) |
| Instinct | `instinct ai assistant`、`instinct ai personal assistant`（en）；其余为泛化 AI 助手问题，非本产品 | 定义、交互方式 | 是（定义与 personal assistant 变体对应"是什么""有 App 吗"；"谁开发""免费吗"为编辑补充，官方页未披露） | [instinct.com](https://instinct.com/) |
| ChatGPT Atlas | `chatgpt atlas`、`chatgpt atlas download`、`chatgpt atlas browser`、`chatgpt atlas windows`、`chatgpt atlas for macos`（en）；`chatgpt atlas 浏览器`、`chatgpt atlas 下载`、`chatgpt atlas是什么`、`chatgpt atlas windows 下载`（zh） | 定义、下载、平台、使用 | 是（下载、平台、定义题直接采用；Agent 模式限制题来自官方页面内容） | [OpenAI：Introducing ChatGPT Atlas](https://openai.com/index/introducing-chatgpt-atlas/) |
| ego (lite) | `ego lite browser`、`ego lite browser github`、`ego lite browser review`、`ego lite browser windows`（en） | 定义、仓库、平台 | 是（Windows 支持题来自 `ego lite browser windows`；免费与 Chrome 关系题为编辑补充，出自官方 README） | [GitHub：citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)、[文档](https://lite.ego.app/document/) |
| 小米澎湃 OS | `小米澎湃os 4`、`澎湃os 4发布时间`、`澎湃os4升级名单`、`澎湃os4 支持机型`、`澎湃os 4官网`（zh）；`hyperos 4`、`hyperos 4 release date`、`hyperos 4 features`、`hyperos 4 eligible devices`（en） | 机型、推送时间、功能、导航 | 是（机型、推送时间、功能题直接采用；与 macOS 的区别题为编辑补充，来自本批任务要求） | [小米澎湃 OS 4 官方页面](https://hyperos.mi.com/) |

裸词采样的歧义记录：`quiver ai arrow` 返回射箭类问题（"how to make a quiver for arrows"），已排除；`instinct ai assistant` 混入泛化的"AI 助手排行"类联想，仅采用含品牌意图的前两条。`叭哥说` 裸词返回空，改用带品牌修饰的种子。

## 事实边界（逐实体）

- **Arrow（QuiverAI）**：官方模型页列 Arrow 2 与 Arrow 2 Telos 为正式可用（5 种操作、最多 14 张参考图、按 Token 计费），Arrow 2 Telos 为官方描述中能力最强型号；Arrow 1.x（含 `arrow-1`、`arrow-preview`、`arrow-1.1`、`arrow-1.1-max`）标注于 10 月 16 日停止服务并迁移到 `arrow-2`。官网博客显示 Arrow 2 / Arrow 2 Telos 于 2026-09-07 发布；API 含 text-to-SVG、image-to-SVG、OpenResponses 兼容流式端点、MCP 服务器（2026-06-09 宣布）、CLI 与 Node.js SDK；"为 Timbal AI 提供 SVG 生成"（2026-05-19）。未核实公司融资与团队背景，正文不写。
- **Bug Say（网易叭哥说）**：官方页 `bug.youdao.com` 仅有一句宣传语"AI语音Agent，比打字快5倍"，无功能清单、平台、价格；有道官网产品列表未收录该产品。iTunes Search API（country=cn）以"叭哥说""叭哥"检索未返回该应用，App Store 上架信息未能核验，正文与 FAQ 均不断言支持平台和上架渠道。厂商归属依据官方域名（youdao.com 子域）与节目发言（杨攀称"网易有道的……叭哥"）。
- **Helix（Figure）**：官方新闻稿（2026-09-17）核心主张：30 个真实家庭零样本全身自主、无数据采集/微调/适配；Index 预训练使零样本成功率 9%→56%；行为规范数据成本减半、范围扩大 30 倍；Helix 2.5 从随机初始化完全在 Index 预训练（区别于 Helix 02 的 VLM 起步）；湾区家庭、单一检查点、不给部分得分；承诺 35 亿美元算力投入。均为厂商自评口径，正文已标注。对外授权/开放使用未提供。 humanoid 机型绑定（Figure 03）未在正文文本确认，未写。
- **Instinct**：官方页仅有产品描述（连接 email、messaging、screen、audio、location；text or call；"no new interfaces"；例子若干）、"Text Instinct to get started"入口与 "© 2026 Instinct" 署名；无公司主体、平台、价格、发布日期。相关报道检索（Bing）未命中可用结果，产品历史一律不写。
- **ChatGPT Atlas（OpenAI）**：官方发布页（2025-10-21）确认发布日期、macOS 全球首发与套餐范围、Agent 模式边界（不能运行代码/下载文件/装扩展/访问其他应用或文件系统，敏感站点暂停）、浏览器记忆、隐私默认项；页面现含 "has since been deprecated" 标注并指向 ChatGPT Work 与发布说明。弃用日期与原因官方页面未说明，正文不写；Windows/iOS/Android 仅写"发布时列为即将推出"。
- **ego (lite)（citrolabs）**：README 确认定位（人机并行、Spaces 隔离工作区）、`ego-browser` 技能与 `npx skills add citrolabs/ego-lite`、页面内 JavaScript 工具（snapshot/fill/click/wait/navigate/capture）、Chrome 数据迁移、macOS（arm64/x64 DMG）+ Windows 封闭测试"即将推出"+ Linux 路线图、仓库 MIT、浏览器单独免费下载。"基于 Chromium"未在 README 中出现（仅有"浏览器引擎内定制"表述），正文回避了 Chromium 断言（实体 YAML 摘要中该表述未经本轮原文核验）。对 Vercel agent-browser 的 2.5 倍基准对比为厂商自述，未采用。星标数等仓库动态数据未写入正文。
- **小米澎湃 OS**：官方页面确认 HyperOS 4 主推地位、柔光玻璃及平台限制（骁龙 8 至尊版/天玑 9500/玄戒 O1 及以上）、超级小爱 2.0 基于 MiMo、任务上岛/灵感球/专家模式、人车家互联功能（部分支持 Windows 与 macOS）、AI 通话与超级小爱输入法仅限中国大陆、Beta 推送时间线（2026-08-14 首批、08-27、09-17 扩大）与"机型和时间可能调整"声明。页面未标注推送年份，2026 年系依据页面当前在售机型（Xiaomi 17 系列）与今日日期推定，已在正文采用。MIUI 替代关系、HyperOS 发布史未在本轮来源中核验，未写。

## 节目证据

三期本地中文逐字稿中，上述 7 个实体的提及全部集中在 Weekly #003（001、002 无命中）：

- Arrow：#003 chapter-10（章末引入）、chapter-11（"SVG、图标与设计工作流"），歸藏演示描述、杨攀 MCP 提议、向阳乔木出版印刷视角；引用 `quote-99e82db7b58fb55934a2`。
- Bug Say：#003 chapter-17（"语音输入产品与实时反馈"），杨攀品类归并（`quote-5c87d0e8760938933ef2`）与装后即卸的体验（`quote-f627091715d2a8075cfa`）。
- Helix：#003 chapter-13 末尾引入（orange 确认 Figure，`quote-df52af1cc466b145a221`）、chapter-14（"具身智能与零样本任务"），歸藏 `quote-b90ae9a54b67a67f92e5`、orange `quote-5083d6a0a3149fbd372b`。
- Instinct：#003 chapter-18 末尾，杨攀 `quote-ceb3f269c22c8bca74cc`、`quote-d25a7460d8d1de505aed`，orange `quote-5b32024757ab068f6eb0`。
- Atlas：#003 chapter-18，歸藏 `quote-92df942f6c8987289008`（Dia 设计师加入 OpenAI、此前做 Atlas 的转述）。
- ego (lite)：#003 chapter-17，向阳乔木 `quote-929a931e475be5e2bc48`（Codex 内置浏览器后不再需要第三方浏览器的取舍）。
- 小米澎湃 OS：#003 chapter-16（"用代码做宣传片和配乐"），歸藏 `quote-69c1cef1e1d75f6b37c3`（陈抱一的 HyperOS 4 演示视频与"传达问题"判断）。

以上链接承载节目参与者的体验、转述或判断，不构成官方背书或独立测评。英文正文链接中文章节并标注 Chinese transcript，未生成不存在的英文逐字稿链接。

## 采样局限与未知项

- `叭哥说`（zh）与 `helix 2.5 figure`（en）返回空或仅 1 条，样本量小；相关 FAQ 问题保留了真实问法形态，答案依托官方页面。
- Bug Say 的平台、价格、上架渠道，Instinct 的公司主体、平台、价格，Atlas 的弃用日期均为官方未披露项，FAQ 答案如实说明并指向官方入口。
- 搜索量、难度、曝光、CTR、GEO 效果：N/A。后续接入 Search Console 后按 28 天窗口记录。
