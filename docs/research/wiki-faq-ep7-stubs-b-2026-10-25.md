# 第 007 期存根补齐批次 B 的 FAQ 研究记录

## 范围与口径

本记录支持 `google-analytics`、`huawei-ascend`、`kindle`、`next-token-cut`、`nvidia-geforce`、`playstation` 和 `steam-next-fest` 七个产品 Wiki 正文的扩写。研究日期为 2026-10-25，面向中文和英文读者。搜索需求线索来自 2026-10-25 通过 Google 公开联想接口（`suggestqueries.google.com/complete/search`，`client=firefox`）采集的候选词，采样种子与返回结果逐条列于下表；另有少量候选来自官方页面自身的导航与栏目命名，单独注明。本次没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现与顺序不等于热门，也不构成效果承诺。

## FAQ 候选与证据

格式：采样词（语言）→ 采到的相关候选 → 意图 → 是否采用 → 可核验入口。

| 页面 | 实际采样与候选 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| google-analytics | `google analytics`（en）：GA4、login、certification、demo account、dashboard；`google analytics 是什么`（zh）：`google analytics 4 是什么`；官方页栏目：Analytics 360、Google Ads/Tag Manager 集成 | 定义（GA4 与旧版）、计费、入口 | 是：GA4 与 Universal Analytics；是否免费 | [Google Analytics 官方页](https://marketingplatform.google.com/about/analytics/)、[UA 停更说明](https://support.google.com/analytics/answer/11583528) |
| huawei-ascend | `昇腾`（zh）：昇腾950、昇腾社区、昇腾910b、昇腾950dt、昇腾950pr、昇腾950超节点、昇腾芯片；`昇腾950`（zh）：950dt/950pr/白皮书/价格/参数；`Ascend 950`（en）：950pr/950dt/specs/vs H200 | 型号定位、用途、与 GPU 关系 | 是：昇腾 950 是什么；昇腾用来做什么；昇腾是不是 GPU | [昇腾官方站点](https://www.hiascend.com/)（NPU 处理器列 Ascend 950PR/950DT；Atlas 系列；CANN；MindSpore） |
| kindle | `kindle`（zh）：越狱、支持什么格式、app、微信读书、scribe、官网、paperwhite、unlimited、电子书下载 | 格式、手写型号、入口 | 是：手写是否全系支持；支持哪些文档格式（越狱/微信读书类改造问题因答案无法依托官方资料核验，未采用） | [Amazon Kindle 选购页](https://www.aboutamazon.com/news/devices/which-kindle-to-buy)、[Send to Kindle 支持类型](https://www.amazon.com/sendtokindle) |
| next-token-cut | `next token cut`（zh/en）：无返回候选 | 定义、入口 | 编辑补充：是什么、能否下载（该工具未见公开发布渠道，答案只陈述可见资料范围） | [第 007 期节目页](https://nexttoken.tv/weekly/007) |
| nvidia-geforce | `geforce`（zh）：game ready 是什么、now 是什么、experience 是什么、rtx 是什么、nvidia geforce 是什么；`geforce`（en）：now、experience、rtx 5090、driver、experience 下载；`nvidia geforce`（en）：now、experience、rtx 型号 | RTX/GTX 关系、配套软件、云游戏 | 是：RTX 与 GTX 区别；GeForce Experience 下载入口；GeForce NOW 是什么 | [GeForce 官方页](https://www.nvidia.com/en-us/geforce/)、[NVIDIA App 官方页](https://www.nvidia.com/en-us/software/nvidia-app/)、[Wikipedia: GeForce](https://en.wikipedia.org/wiki/GeForce) |
| playstation | `playstation 是什么`（zh）：是什么意思、portal 是什么、plus 是什么、network 是什么、sony playstation 是什么；`playstation`（en）：playstation 5、store、plus、network、portal | 定义与简称、与具体机型分工 | 是：PlayStation 指什么；与 PlayStation 5 的区别；首代主机发售时间 | [PlayStation history（官方）](https://www.playstation.com/en-us/playstation-history/) |
| steam-next-fest | `steam 新品节`（zh）：2026、时间、2027；`Steam Next Fest`（en）：ai、2026、october 2026、demos、ai slop、no ai、ai games、2027、dates | 举办节奏、参加条件、demo 去留 | 是：一年几次什么时候；什么游戏能参加；demo 是否保留 | [Steamworks Next Fest 文档](https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest) |

说明：

- `steam next fest ai`、`ai slop`、`no ai` 等英文候选与第 007 期"新品节中 AI 生成内容供给"的讨论语境一致，但正文 FAQ 只回答活动机制问题；AI 内容话题保留在节目讨论节。
- `kindle 越狱` 候选量大但涉及第三方改造方案，官方资料不支持稳定回答，未采用；节目中的相关内容属于参与者的改造设想，不作兼容结论。
- `Ascend 950 vs H200` 等对比候选未采用：正文不写未核验的性能对比。
- next-token-cut 无任何联想候选，FAQ 标注为编辑补充。

## 事实边界（逐条核验记录）

- Google Analytics：官方产品页定位为跨设备与平台的客户理解工具，宣称免费提供工具（"the tools, free of charge"），另有付费企业版 Analytics 360；列出与 Google Ads、Search Ads 360、Display & Video 360、Google Cloud、Search Console 的集成及机器学习洞见。官方支持页确认：2023-07-01 起标准版 Universal Analytics 媒体资源停止处理数据，360 版获一次性处理延期至 2024-07-01，GA4 "has replaced Universal Analytics"。
- 昇腾：官方站点将自身定位为"昇腾AI基础软硬件平台"；昇腾 NPU 处理器列出 Ascend 950PR 与 Ascend 950DT；Atlas 系列含液冷/风冷超节点（Atlas 950 SuperPoD、Atlas 900 A3 等）、服务器、加速卡与模组；软件栈含 CANN（异构计算架构）、MindSpore（昇思）、MindStudio、MindIE 等；开发者板块分训练开发、推理开发等方向。910 系列未出现在该首页，正文不写。
- Kindle：Amazon 官方导购页称 Kindle 于 2007 年推出；现役产品线含 Kindle、Kindle Paperwhite（"best-selling Kindle" since 2012）、Kindle Colorsoft（彩色屏）、Kindle Scribe（手写/记事，Premium Pen、Active Canvas）与 Kids 版；电池官方口径为 6–8 周。Send to Kindle 支持类型官方列表为 PDF、DOC、DOCX、TXT、RTF、HTM、HTML、PNG、GIF、JPG、JPEG、BMP、EPUB（200 MB 上限），MOBI/AZW 未在列。
- Next Token Cut：无官方产品页；唯一可见资料为第 007 期节目自述（杨攀：为剪辑节目自制、有 UI 界面的 Studio）。正文保持客观转述，不写功能细节与发布状态。
- GeForce：Wikipedia 记录 GeForce 为 NVIDIA 面向性能市场的 GPU 品牌，1999-08-31 推出；GTX/GTS 后缀自 2008 年 GeForce 200 系列起使用；RTX 命名自 2018 年 8 月发布的 GeForce 20 系列引入。官方 GeForce 页面现呈现 RTX 50 系列桌面卡、RTX 50 系列游戏本、G-SYNC、GeForce NOW、NVIDIA App、DLSS、RTX AI PC 等。NVIDIA App 官方页自称 "The NVIDIA App is the essential companion for PC gamers and creators"，页面未声明取代 GeForce Experience，正文不作替代表述。NVIDIA 知识库文章（a_id/5678，YAML 官方链接）多次抓取失败（WebFetch 连接重置/403），其内容未核验，正文事实不依赖该页，仅作为 YAML 既有的官方来源保留。
- PlayStation：官方 history 页确认首款 PlayStation 主机 1994-12-03 在日本发售，1994–2006 年全球售出超过 102,000,000 台；页面导航时间线覆盖 PS、PS2、PSP、PS3、PS Vita、PS4、PS VR、PS5、PS VR2。
- Steam Next Fest：Steamworks 文档定义为 "a weeklong event focused on promoting upcoming games with playable demos"，每年 2 月、6 月、10 月各一次；参加条件包括未参加过 Next Fest（每款游戏只能参加一次）、Steamworks 账号状态正常、商店页已公开、活动开始时提供可公开试玩的 demo、活动结束前不发售、非已发售游戏的 prologue/短篇版本；Early Access 与免费游戏未发售即可参加；demo 可在活动结束后保留；曝光位首几天完全随机；另有直播板块、Press Preview 与活动后总结页。

## 节目证据（Weekly #007，中文逐字稿）

发言归属与段落锚点（锚点由 `/tmp/nt-quote-anchors.mjs` 按 `src/data/transcript-paragraph-anchors.ts` 同款算法生成，已核对发言人与原文）：

- google-analytics：chapter-04「Agent 流量、个人网站与开放接口」，向阳乔木称现有流量统计缺少对 AI 训练爬虫与个人 Agent 抓取的跟踪；杨攀回应"你们就做一个新时代的 Google Analytics 就完了"（`quote-c1ee1f67ce28fede2cd0`）。后续讨论是基于 Umami 开源改造的统计服务，属第三方案例，不写入 GA 功能。
- huawei-ascend：chapter-02「DeepSeek 的推理速度，怎样改变产品体验？」，歸藏转述 DeepSeek 开源推理框架"第一天也折腾的支持华为的昇腾的 950"（`quote-f6732b8b370bc2b61ce6`）。属于发言人的转述，正文不据此断言适配的官方状态。
- kindle：chapter-09「重做电视启动器，让旧设备接入 AI」，向阳乔木说想把旧 Kindle 重新刷系统、用 AI 处理（`quote-e1b1e594fa7a6e8a9923`）；chapter-20「Omarchy、旧手机与重写软件的可能性」，杨攀提议给 Kindle 自做 ROM、刷 Linux 自己做界面（`quote-9b950efafa6937bc7bf4`），向阳乔木称 X 上已有人做、只想自己做。均为改造设想，无兼容结论。
- next-token-cut：chapter-05「自己造剪辑工具：自动化与渲染的等待」，杨攀介绍自制 Next Token Cut Studio 及同类做法（`quote-5fb955bdd7acfba2b75f`）。
- nvidia-geforce：chapter-07「作品能被反复消费，Token 就不必反复花」，歸藏以"很多人现在拿个 1060 的显卡"的旧电脑对比手机芯片（`quote-556f4234eb1b8b091a84`）。指 GeForce GTX 1060。
- playstation：chapter-06「AI 游戏破圈：移植、网页游戏与上瘾机制」，歸藏说"血源是 PS 上一个非常重要的游戏"并讨论移植进展（`quote-9a1a93b6af9ae4794416`）。
- steam-next-fest：chapter-06，歸藏说"这几天刚好是 Steam 新品节。然后遇到很多人吐槽说特别多 AI 垃圾……"（`quote-ffd14ebb2e5aac7ef5b0`），杨攀问"新品节我还能赶上吗"，歸藏答"能赶上，现在还在新品节"。

两处均为中文逐字稿；英文正文链接 `/weekly/007/transcript#...` 并标注 Chinese transcript，不生成 `/en/weekly/...` 幻链。

## 未知项与遗留

- NVIDIA 知识库 a_id/5678 无法抓取，未据此写任何事实；如后续需要核验，可换网络环境重试。
- 昇腾 950 的具体规格、价格、白皮书内容未核验，FAQ 答案只指向官方站点。
- Kindle 的"越狱/微信读书"类问题未采用，无官方答案来源。
- next-token-cut 是否开源或公开发布：无任何官方信息，FAQ 按编辑补充口径只陈述"未见公开入口"。
- 搜索量、难度等指标全部 N/A；联想数据未另存原始 JSON，完整候选已内联于上表。
