# 消费应用与平台 Wiki FAQ 研究记录

## 范围与口径

本记录支持 8 个产品的 Wiki 正文：`youware`、`xianyu`、`vampire-survivors`、`tiktok`、`terminal-bench`、`suno`、`spotify`、`runta`。研究日期为 2026-09-18，面向中文和英文读者。需求线索来自 Google Autocomplete（`suggestqueries.google.com/complete/search?client=firefox`，中文 `hl=zh-CN`、英文 `hl=en`，`ie=utf-8&oe=utf-8`），采样时间为 2026-09-18。本次没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想顺序不表示热度。原始联想数据直接内嵌于下表（本批次不另建 JSON）。

## FAQ 候选与证据

| 页面 | 种子词（语言） | 实际返回的联想候选 | 歧义处理 | FAQ 采用 | 官方答案入口 |
| --- | --- | --- | --- | --- | --- |
| YouWare | `youware`（en） | youware; youware ai; youware app; youware website; youware ai skin maker; youware login; youware birthday card; youware tumbler; youware letter | `ai skin maker`、`birthday card`、`tumbler`、`letter` 为模板类长尾，不采 | 是（官网/登录入口、是什么、有无 App） | [YouWare](https://www.youware.com/) |
| YouWare | —（—） | — | — | 计费问题为编辑补充（联想未出现 pricing 种子） | [YouWare Pricing](https://www.youware.com/pricing)（页面为 JS 渲染，正文只写“有免费试用入口、方案见官方定价页”） |
| 闲鱼 Xianyu | `闲鱼`（zh-CN） | 闲鱼; 闲鱼网页版; 闲鱼下载; 闲鱼app; 闲鱼电脑版; 闲鱼电脑; 闲鱼自动发货; 闲鱼违禁词检测; 闲鱼手续费; 闲鱼国际版 | `自动发货`、`违禁词检测`、`国际版` 未能用官方来源核验，不采 | 是（是什么、网页版入口） | [Goofish.com（闲鱼网页端）](https://www.goofish.com/)、[阿里巴巴集团业务介绍](https://www.alibabagroup.com/zh-HK/about-alibaba-businesses-1747081802473799680) |
| 闲鱼 Xianyu | `闲鱼网页版`（zh-CN） | 闲鱼网页版; 登录; 入口; 下载; 注册 | — | 是（网页版入口） | 同上 |
| 闲鱼 Xianyu | —（—） | — | — | 验货宝问题为编辑补充，答案限于阿里巴巴业务介绍页列出的服务名 | 同上 |
| Vampire Survivors | `vampire survivors`（en） | vampire survivors; evolutions; wiki; secrets; evolutions chart; weapon evolutions; yellow sign; weapons; combos; the coop | `secrets`、`yellow sign` 属游戏内彩蛋攻略，超出本页范围 | 是（是什么/类型、平台、进化机制、版本历史） | [Steam 页面](https://store.steampowered.com/app/1794680/Vampire_Survivors/)、[poncle 官网](https://poncle.games/) |
| Vampire Survivors | `吸血鬼幸存者`（zh-CN） | 吸血鬼幸存者; 合成表; 合成; 攻略; wiki; 永弹枪; 永弹枪合成; 水下学宫; 武器合成; 永弹枪进化 | 具体合成条目（永弹枪、水下学宫）属攻略细节，答案只讲进化机制并指向游戏内与官方渠道 | 是（武器进化/“合成”机制） | 同上 |
| TikTok | `tiktok`（en） | tiktok; tiktok shop; tiktok coins; tiktok careers; tiktok video downloader; tiktok login; tiktok studio; tiktok story viewer; tiktok live studio; tiktok recharge | `coins`、`downloader`、`story viewer`、`recharge` 不采用（第三方/灰产意图或未核验） | 是（与抖音关系、归属、入口） | [ByteDance Products](https://www.bytedance.com/en/products)、[TikTok About](https://www.tiktok.com/about?lang=en)、[Wikipedia: TikTok](https://en.wikipedia.org/wiki/TikTok) |
| TikTok | `tiktok`（zh-CN） | tiktok; tiktok网页版; tiktok career; tiktok下载; tiktok shop; tiktok 官网; tiktok creative center; tiktok 国际 版 网页; tiktok 下载 国际 版; tiktok seller center | `下载 国际 版` 类候选不采用（避免安装包指引） | 是（入口） | 同上 |
| Terminal-Bench | `terminal bench`（en） | terminal bench; terminal bench science; terminal bench 2.1; terminal bench 2.0; terminal bench 4.0; terminal bench 3; terminal bench 2; terminal bench leaderboard; terminal bench 4; terminal bench paper | `paper` 指学术论文，本页不展开 | 是（是什么、版本列表、leaderboard、如何运行） | [tbench.ai](https://www.tbench.ai/)、[Benchmarks](https://www.tbench.ai/benchmarks)、[GitHub harborframework/terminal-bench](https://github.com/harborframework/terminal-bench) |
| Suno | `suno`（en） | suno; suno ai; suno v6; sunomono; sunoco; sunoo; sunomono recipe; sunosi; suno music; sunoco near me | `sunomono`（菜）、`sunoco`（加油站）、`sunoo`（艺人）、`sunosi`（药品）为同名歧义，排除 | 是（是什么/官网、v6 提问形态、商用权利） | [Suno](https://suno.com/) |
| Suno | `suno`（zh-CN） | suno; suno ai; suno 官网; suno studio; sunoo; suno ai music; suno 中文; suno v5; suno ai 中文 版; suno api | `suno api` 采用问题形态但答案只指向官网（未核验独立 API 文档入口）；中英文均出现版本号候选（v5/v6），答案按节目证据+官方指针处理 | 是（官网入口、免费层、商用、V6） | 同上 |
| Spotify | `spotify`（en） | spotify; spotify login; spotify web; spotify premium; spotify download; spotify stats; spotify web player; spotify family plan; spotify for artists; spotify for artists; spotify account | `stats`、`for artists` 未在官方页核验细节，不采 | 是（是什么、免费与套餐） | [Spotify Newsroom](https://newsroom.spotify.com/company-info/)、[Premium](https://www.spotify.com/us/premium/) |
| Spotify | `spotify`（zh-CN） | spotify; spotify官网; spotify 网页 版; spotify download; spotify premium; spotify下载; spotify是什么; spotify web; spotify charts; spotify 官网 下载 | `charts` 不采；`是什么` 中文候选印证定义类需求 | 是（是什么、免费/套餐） | 同上 |
| Runta | `runta`（en） | runta; runta news; runtal radiators; runtal; runtastic; runtal towel warmer; runtal baseboard heaters; runtal baseboard; runtal heaters; runtal north america | 绝大多数候选指向 Runtal 暖气片与 Runtastic，与 Runta 公司无关；Runta 公司在联想中几乎无存在感 | FAQ 主要为编辑补充（是什么、创始人、计费指针、评测） | [Runta](https://runta.com/)、[Runta Docs](https://runta.com/docs/)、[Runta About](https://runta.com/about/) |

## 事实边界与来源

- YouWare 官网（2026-09-18 抓取）自述为面向知识工作者的 "AI Agent workspace"，可生成网站、幻灯片（可导出 PPT/PDF）、报告与表格；列出多 Agent 流程、可选底层模型（Gemini 3 Pro、Claude Sonnet、GPT-5-Codex，无需 API Key）、iOS/Android 应用与 Discord 社区；官网称 "Trusted by 1M+ creators"，属营销口径，正文未采用。
- 闲鱼：阿里巴巴集团业务介绍页载明创立于 2014 年，定位中国领先的闲置交易平台与生活方式社区，列有回收、验货宝、信用分、海鲜市场与碳减排量化方法学；goofish.com 为其网页端。用户规模、GMV 未在页内出现，正文不写。
- Vampire Survivors：Steam 页面载明 Early Access 2021-12-17、正式版 2022-10-20，开发与发行均为 poncle；poncle 官网列出 Steam、Xbox、PlayStation、Switch、iOS、Android、Epic、Apple Arcade（Vampire Survivors+）与 Meta 商店 VR 版，以及 2023-08 本地合作、2023-11 Adventures、2025-10 在线联机与衍生作 Vampire Crawlers；进化机制与 15/20/30 分钟生存结构引自 Wikipedia 词条；BAFTA 获奖日期（2023-03-30）同出 Wikipedia。正文未写具体售价（Steam 抓取显示地区性价格）。
- TikTok：ByteDance 官网称其为 "the leading destination for short-form mobile video"；官方 About 页给出使命与洛杉矶/新加坡双总部；Wikipedia 载明抖音 2016-09-20 上线、TikTok 2017-09 国际上线、2018-08-02 与 Musical.ly 合并、2021-09 达 10 亿用户、2026 年美国业务拆分给 Oracle、Silver Lake、MGX 等组成的财团（持股超 80%，字节跳动保留 19.9%）。美国业务拆分为重大历史事实，以 Wikipedia 词条为来源简要记述，细节不展开。
- Terminal-Bench：官方站点首页展示 Terminal-Bench 4.0 与 leaderboard（resolution rate、cost、tokens，95% 置信区间），署名 Stanford、Harbor、Laude Institute，代码在 GitHub harborframework/terminal-bench；/benchmarks 页列出 1.0（2025-05-19）、2.0（2025-11-07）、2.1（2026-05-06）、3.0（2026-07-30）、Terminal-Bench-Science 0.1（2026-08-27）、Terminal-Bench Challenges（2026-06-18）、4.0（2026-08-28）。
- Suno：官网（2026-09-18 抓取）描述从单个文本提示生成含人声、歌词与完整制作的歌曲；Free 计划每日 10 首；Pro 计划每月 500 首、含商业权利、Song Editor、stem 分离、8 分钟内上传；Premier 计划每月 2000 首、含 Suno Studio、MIDI 导出、Persona Voices；官网 FAQ 称 v5.5 为其当前主推模型（页内另有曲目标题出现 v6 字样）。正文不断言“当前最新模型”，版本问题指向官网与节目证据。
- Spotify：官方 Newsroom 载明 2008 年上线、Daniel Ek 为创始人、官方口径 777 百万用户（含 300 百万订阅用户）、184 个市场、超 1 亿曲目、700 万播客与 70 万有声书；美国 Premium 页列出 Individual、Duo、Family、Student 与 Audiobooks Access 套餐及免费（广告支持）选项。价格随地区变动，正文不写具体数字。
- Runta：官网自述为 "the execution layer for AI agents"，能力含 Prompt compression、Token X-ray、凭证占位符（真实值在授权网络边界注入）、按精确/通配 host 的出站放行、闲置自动挂起恢复与内存上限内自动伸缩；接入方式为安装 CLI、认证、创建 runtime 并在其中运行 Agent，控件无需修改 Agent 本身；提供免费试用（dashboard.runta.com）与 docs、pricing、OpenAPI、blog 入口。融资（2026-07，a16z 领投 2000 万美元种子轮）与 FrontierHarness Eval（2026-09-01）沿用 [人物页批次研究已核验的来源](wiki-faq-people-founders-2026-09-17.md)：The Next Web 报道、runta.com/about、runta.com/blog。
- Runta 文档页 `runta.com/docs/` 本轮三次抓取均连接失败，未获得直接内容；正文对 CLI/SDK 的描述只保留官网首页可见的 CLI 流程，SDK 细节不在本批正文展开。

## 节目证据

| 实体 | 节目 | 章节 | 发言人 | 段落锚点 |
| --- | --- | --- | --- | --- |
| youware | Weekly #001 | chapter-16 “Grok Bot：为什么 Agent 需要一台永不下线的云电脑” | 向阳乔木 | quote-ea7d2743251f0c744635 |
| tiktok | Weekly #001 | chapter-30 “AI 短剧把 Token 消费带进新的内容市场” | 橘子 | quote-6714e76905b1e1670cb8 |
| runta | Weekly #001 | chapter-06 “Harness 评测：完成率、Token 成本与”斩杀线"" | 杨攀 | quote-92ea5ff79896fd00a92a |
| vampire-survivors | Weekly #002 | chapter-03 “GPT-6 Astra：从 3D 建模聊起” | 歸藏 | quote-e2b230a736b6cc9275f2 |
| spotify | Weekly #002 | chapter-05 “我们如何用 Agent 制作和发布播客” | 杨攀 | quote-b5e05844e49beeb8d62b |
| terminal-bench | Weekly #002 | chapter-06 “Astra 会用电脑，就算 AGI 了吗？” | 杨攀、橘子 | quote-141316712c8728029369（橘子） |
| suno | Weekly #002 | chapter-21 “健康数据与日常记录：有用与隐私的边界” | 向阳乔木 | quote-ac088b26a16e66465ab3 |
| xianyu | Weekly #002 | chapter-21 “健康数据与日常记录：有用与隐私的边界” | 橘子 | quote-1267667e7f5a16dfbcf3 |

说明：段落锚点以 `transcript-paragraph-anchors.ts` 的生成逻辑（发言人 + 归一化原文，sha256 前 20 位，重复段落加序号）复算确认。`youware`、`tiktok`、`runta` 的提及为单句或短段；正文只做有归属的简述并注明未展开。`terminal-bench` 讨论中橘子对名称是回忆式确认（“好像 Terminal-Bench 吧”），正文保留该不确定语气；评分说法是参与者观察，不是官方 leaderboard 数据。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，按页面、语言、国家、设备与 28 天窗口记录曝光、点击、平均位置与可见查询样本；覆盖率与 CTR 只能基于实际数据计算。
