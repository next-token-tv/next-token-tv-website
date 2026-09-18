# 办公与硬件六产品 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `mac-mini`、`doubao-work`、`hunyuan`、`android`、`qoder` 和 `muse` 的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。需求线索来自 Google Autocomplete（`suggestqueries.google.com`，zh-CN 与 en 两个界面语言，采样当天完成）；官方事实核验通过 WebFetch 直接抓取或经 r.jina.ai 代理读取 JS 渲染页面。本次没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想词的出现顺序不表示热度。

搜索联想原始数据直接附于下文（本批次未生成独立 JSON 文件）；`zh|豆包工作 怎么`、`zh|豆包工作 收费` 两个种子词无返回候选（返回空列表），如实记录。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或联想候选 | 意图 | FAQ 采用 | 官方答案入口 |
| --- | --- | --- | --- | --- |
| Mac mini | zh：`mac mini m5 什么时候出`、`mac mini 价格`、`mac mini 涨价`、`mac mini m6 上市 时间`、`mac mini m6 release date`、`mac mini m6 price`；en：`mac mini m6`、`mac mini price`、`mac mini m5 release date` | 发布时间、价格、比较 | 是（发售时间、价格、本地跑模型、与 Mac Studio 区别、装 Linux） | [Mac mini 新闻稿](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/)、[购买页](https://www.apple.com/shop/buy-mac/mac-mini) |
| 豆包工作 | zh：`豆包工作台`、`豆包工作流`、`豆包工作任务`、`豆包工作模式`、`豆包工作任务模式`；`豆包工作 怎么`、`豆包工作 收费` 无联想返回；en：`doubao work`、`doubao workflow`、`doubao not working` | 定义、计费、使用方式 | 是（定义与豆包关系、收费、能做什么、"豆包办公"辨析、云端电脑归属）；"云端电脑"题为编辑补充（节目证据支持） | [官方页面](https://www.doubao.com/work)、[定价页](https://www.doubao.com/work/pricing) |
| Hunyuan | zh：`腾讯混元大模型`、`腾讯混元模型`、`腾讯混元ai`、`腾讯混元api`、`腾讯混元生图`、`混元3d`、`混元翻译`；en：`tencent hunyuan 3d model`、`hunyuan 4`、`tencent hunyuan ai video` | 定义、API、模型成员 | 是（是什么、Hy4 preview 状态、API 接入、开源、腾讯产品内应用）；`混元3d`/video 需求未单列——官方站点当前模型列表未含 3D/视频条目，正文以官方列表为准 | [官方站点](https://hunyuan.tencent.com/)、[腾讯云平台文档](https://cloud.tencent.com/document/product/1759)、[计费文档](https://cloud.tencent.com/document/product/1759/127342) |
| Android | zh：`安卓版本怎么看着/查询/升级/太旧`、`安卓studio`；en：`android 17 release date`、`android 17 features`、`android 17 update` | 版本查询、升级方式 | 是（谁开发/是否开源、最新版本、查看与升级、Gemini 关系） | [Android 官网](https://www.android.com/)、[Google 支持](https://support.google.com/android/answer/7680439) |
| Qoder | zh：`qoder是什么`、`qoder是什么模型`、`qoder是什么软件`、`qoder 官网`、`qoder cli`、`qoderwork`、`qoderwake`、`qoder cn`、`qoder 阿里`；en：`qoder ai`、`qoder desktop`、`qoder ide`、`qoderwork`、`qoderwake` | 定义、归属、产品形态、安装入口 | 是（是什么、哪家公司、使用形态、免费、QoderWork/QoderWake 区别） | [官网](https://qoder.com/)、[官方文档](https://docs.qoder.com/product-series/what-is-qoder) |
| Muse | en：`meta muse ai agent`、`meta muse ai assistant`、`meta muse pricing`、`meta muse app`、`meta muse spark`、`muse ai invite code`、`muse ai download`、`muse ai price`；zh：`meta muse spark`、`meta muse spark 1.2/1.1`、`meta muse code`、`meta muse glimmer`、`meta muse spark api` | 定义、价格、助手/Agent 归属、入口 | 是（是什么、Spark 1.3、收费、是否助手/与 Grok Bot 区别、与 Llama 关系）；invite code 需求无官方依据，未单列问题 | [官方页面](https://ai.meta.com/llama/) |

## 歧义处理

- `muse`：裸词联想大量混入音乐人、希腊女神等无关含义，中英文采样均加 `meta`/`muse ai` 限定；en 侧 `meta muse` 本身也有 "ai assistant / ai agent" 等与官方开发者定位不一致的联想，正文以官方页面定位为准，节目讨论按发言人归属。
- `android 17`：联想混入《龙珠》角色（`android 17 dbz`、`dragon ball`、`voice actor`），与操作系统无关，未采用。
- `豆包工作`：联想多为 `豆包工作台/工作流/任务模式` 等组合词，与产品本体意图不完全一致，仅采用定义与计费意图；"豆包办公"误写问题由节目证据（Weekly #001 quote-0dbb1daa341ec98b63dc）支持。
- `qoder`：联想含 `qoder cn`、`qoderwork cn` 等站点导航意图，正文以官方 qoder.com 为唯一入口；`qoder 阿里` 反映归属疑问，FAQ 中如实说明官方页面未标注公司主体、节目称法属参与者说法。

## 联想原始数据（2026-09-18，Google Autocomplete）

- zh-CN `豆包工作`：豆包工作台、豆包工作流、豆包工作伙伴、豆包工作、豆包工作任务、豆包工作模式、豆包工作任务模式
- zh-CN `豆包工作 怎么`／`豆包工作 收费`：（空）
- zh-CN `腾讯混元`：腾讯混元、腾讯混元3d、腾讯混元大模型、腾讯混元模型、腾讯混元ai、腾讯混元3、腾讯混元招聘、腾讯混元3d模型、腾讯混元api、腾讯混元生图
- zh-CN `混元`：混元3d、混元、混元大模型、混元3、混元ai、混元模型、混元3d模型、混元翻译、混元api、混元一站式
- zh-CN `Hunyuan`：混元3d、混元、混元大模型、混元3、混元ai、混元模型、hunyuan image 3.0、hunyuanocr、hunyuan image、hunyuanvideo-foley
- zh-CN `mac mini`：mac mini、mac mini m5、mac mini m4、mac mini m5 什么时候出、mac mini m5什么时候发布、mac mini 价格、mac mini m4 pro、mac mini 涨价、mac mini m2、mac mini m5 发布
- zh-CN `mac mini m6`：mac mini m6、mac mini m6 上市 时间、mac mini m6 release date、mac mini m6 pro、mac mini m6 rumors、mac mini m6 price、mac mini m6 chip、mac mini m6 news、mac mini m6 release、mac mini m6 price in india
- zh-CN `安卓`：安卓模拟器、安卓vpn免费、安卓、安卓vpn、安卓免费vpn下载、安卓studio、安卓免费vpn、安卓应用商店、安卓手机、安卓虚拟机
- zh-CN `安卓版本`：安卓版本、安卓版本怎么看着、安卓版本号、安卓版本最新、安卓版本查询、安卓版本升级、安卓版本太旧、安卓版本14、安卓版本怎么更新、安卓版本可以更新吗
- zh-CN `qoder`：qoder、qoderwork、qoder cn、qoder cli、qoderwake、qoder 官网、qoderwork cn、qoder 阿里、qoder是什么、qoderwork 官网
- zh-CN `qoder是什么`：qoder是什么、qoder是什么模型、qoder是什么软件
- zh-CN `meta muse`：meta muse spark、meta muse、meta muse video、meta muse spark 1.2、meta muse spark 1.1、meta muse image、meta muse code、meta muse glimmer、meta muse ai、meta muse spark api
- en `doubao work`：doubao work、doubao workflow、doubao not working
- en `tencent hunyuan`：tencent hunyuan ai video、tencent hunyuan 3d ai、tencent hunyuan 3d model、tencent hunyuan model、tencent hunyuan 3d model generator、tencent hunyuan video generator、tencent hunyuan image to video、tencent hunyuan ai video generator、tencent hunyuanvideo、tencent hunyuan ai video generator free
- en `hunyuan 4`：hunyuan 4、hunyuan 4d、hunyuan 4.0、hunyuan 480p、hunyuan 4gb vram、hunyuan 48、hunyuan 4090、hunyuan 4b、hunyuan 4b instruct、hunyuan 3d 4.0
- en `mac mini`：mac mini、mac mini m4、mac mini m6、mac mini m5、mac mini amazon discount、mac mini m5 release date、mac mini m4 pro、mac mini m2、mac mini refurbished、mac mini price
- en `android 17`：android 17、android 17 release date、android 17 features、android 17 dbz、android 17 dragon ball、android 17 update、android 17 beta、android 17 qpr1、android 17 voice actor、android 17 and 18
- en `qoder`：qoder、qoderwork、qoderwake、qoder cn、qoder cli、qoder ai、qoderwork cn、modern、qoder desktop、qoder ide
- en `meta muse`：meta muse、meta muse ai agent、meta muse ai、meta muse ai assistant、meta muse pricing、meta muse app、meta muse spark、meta muse review、meta muse agent、meta muse ai agent release
- en `muse ai`：muse ai、muse ai meta、muse ai agent、muse ai app、muse ai invite code、muse ai reddit、muse ai assistant、muse ai review、muse ai download、muse ai price

## 事实核验记录

- Mac mini：Apple 新闻稿（2026-08-25 发布 M6/M5 Pro、当日预购、9 月 22 日起 30 个国家/地区、M6 起价 899 美元/教育 799、M5 Pro 起价 1,699 美元/教育 1,599、M6 16–32GB/170GB/s、M5 Pro 最高 64GB/307GB/s、雷雳 4/5、Wi-Fi 7、随机 macOS 27"Golden Gate"）；产品页（本地 AI 场景：LM Studio Bionic、Ollama、exo 集群、Claude Code/Codex、OpenClaw 等）。来源：apple.com 新闻稿、/mac-mini/、/mac-mini/specs/、购买页。
- 豆包工作：官方页（口号、技能调用、本地文件读写与跨页操作、手机远程派发、Seedream 5.0 Pro 与 Seedance 2.5、下载领 30 天订阅权益）；定价页（团队 ¥166/席/月按年或 ¥198 按月、2,000 点/席/月+限时加赠、企业 100 席起、1TB/15TB 企业存储）。官网未出现"飞书"字样，YAML 摘要中的飞书协作表述未获官网印证，正文未写。官网亦未出现"常驻云端电脑"表述。
- Hunyuan：官方站点（Hy3 295B/21B、256K、三种思考模式；Hy Vision 2.0、HY Image 3.0 Plus、Hy ASR 3.0 preview、Hy-MT2、Hyra-1.0；腾讯产品应用清单；GitHub/HF/ModelScope/AtomGit；AI Studio 试用）；腾讯云 ADP 文档（模型列表"混元语言模型（Hy4 preview）"与 Hy3，TokenHub modelId=hy4-preview）；计费文档（Hy3 与 Hy4 preview 的 PU 结算条目）。Hy4 preview 的发布日期与预览结束时间无官方资料，正文不写。
- Android：android.com（Gemini 助手、Circle to Search、Quick Share、Android XR/TV/Auto、Find Hub、Scam Detection、AOSP 与 developer.android.com 链接、商标归 Google LLC）；blog.google 品牌更新（2023-09-05，大写 A、3D 机器人）；Google 支持页（设置→关于手机查看版本、更新方式）。"Android 17"仅出现在官方站点页面内容中，未见独立发布公告，故正文只在 FAQ 以"截至 2026 年 9 月官方站点列出"锚定。2008 年 9 月首机 T-Mobile G1 为公史，未单独核验新来源。
- Qoder：官方文档（"agentic platform for real work"、产品家族：IDE/Quest、JetBrains 插件、CLI、Cloud Agents/SSE、QoderWork、QoderWake/Wakers、移动与网页端、Enterprise、Memory and Rules、Repo Wiki）；官网（AI Coding Assistant 定位、Agent SDK npm 包、免费 2 周 Pro Trial、积分制、email/Google/GitHub 注册；未标注公司主体，图片托管于 alicdn 仅作背景，不入正文）。
- Muse：官方页面（"Your next build starts with Muse"；Muse Spark 1.3 长程 Agent/多模态感知/Public preview 已扩大全球可用；Muse Voice Transcribe $0.18/hour；Muse Image $0.01/image；Muse Glimmer 开放权重；Muse Code CLI macOS/Windows；Meta Model API 自助；OpenRouter；cookbook 列表；Llama 4/3 导航保留）。价格按规范写入 FAQ 并注明"截至 2026 年 9 月页面显示"。Spark 1.3 的官方发布日期无独立资料，正文仅按节目转述归因。

## 节目证据

本地逐字稿为中文（#001 覆盖 2026-08-27 至 09-03 一周；#002 约一周后）。各正文引用的章节与段落锚点：

- mac-mini：#001 chapter-03（quote-59e419a0a1ff5cd2065b、quote-37d4edd56fc77789ace4）、chapter-12（quote-97881b924caf24e35dcc、quote-9f73295fa2a97468f7bd）、chapter-19（quote-16dbac2d3a1f25eb76ca）、chapter-22（quote-8801767eeff61b98ee9a、quote-6d4d1080e09a799ffe3c、quote-81f033ec93dd17db6183；chapter 链接）。
- doubao-work：#001 chapter-15（quote-f44ce061e431646ffc14 未直引、quote-0dbb1daa341ec98b63dc、quote-5618062ba920c44fa75b、quote-c85182905c816be200f0）、chapter-16（quote-c4784b36a51ec80a2fc9）；#002 chapter-13（quote-af1872f1d5640ea3a393）、chapter-15（chapter 链接）、chapter-21（quote-9482dab44286a6da7f20）、chapter-23（quote-c693ed4cf0a3b1c86487）、chapter-24（quote-616576a7f923e09261c0 未直引、quote-35ee427f3c2c73386ed8）。
- hunyuan：#001 chapter-02（quote-444d2f8b219e819e8720）、chapter-03（quote-045ad2d720d0a1ea162c）、chapter-07（quote-1588534f219b872a1069、quote-e75c0dc96674911d8b71）、chapter-13（quote-fa747b45b646c6a5e68d；chapter 链接）。
- android：#001 chapter-16（quote-bebf6f49a0339dd5be9f；chapter 链接）、chapter-24（quote-920c9c5a953ed869dae6、quote-9aadc5e91f19aaa442fb；chapter 链接）；#002 chapter-19（quote-dd4e31665eba195cfc2c、quote-2c00df896d7fddf22c0a；chapter 链接）。
- qoder：#001 chapter-14（quote-3d1efe650df77e9600c2）；#002 chapter-15（quote-7d27959cf6db2c044072；chapter 链接）、chapter-21（quote-9482dab44286a6da7f20、quote-07b148028f8b2e7deb87）。
- muse：#001 chapter-02（quote-1c1a629c363571d067b1、quote-a05a9b1877aa0566a687）、chapter-09（quote-80c05d9d7a5eaf6f5200）；#002 chapter-13（quote-5370d8756a780c47b0b1、quote-e05b4279cf60687bde0c；chapter 链接）、chapter-15（quote-6078d54926488c588306、quote-43c2cd9360a93e872d2b）。

所有锚点均由 /tmp/nt-quote-anchors.mjs（发言人+归一化原文 SHA256 前 20 位，重复原文按出现次序加序号）在当前逐字稿快照上生成并逐一核对。英文正文引用同一批中文章节，链接文字明确为章节原名或 "Chinese transcript" 语境说明，未生成 /en/weekly 链接。

## 事实边界与未知项

- OpenAI 购买 3 万台 Mac mini、其用途说明均为节目内转述，无官方来源，正文按发言人归属处理。
- Mac mini"涨价""几万、十几万"为参与者转述的市场行情；官方定价仅采用新闻稿美元起售价。
- 豆包工作是否具备常驻云端电脑：官方无表述，节目观点分歧（杨攀 vs 歸藏），正文按归属呈现，不写结论。
- Hunyuan 4 Preview 无官方发布日期；官方证据仅限腾讯云文档的模型列表与计费条目，"preview"不写成普遍可用。
- Android 17 无独立发布公告可引，仅以"官方站点列出"作 FAQ 锚定表述。
- Qoder 公司归属无官方标注；"阿里 Qoder"仅按参与者说法归属。
- Muse 的消费级助手形态（"美国豆包"、连接邮箱/日历/购物支付/健康）仅存在于节目讨论，官方页面无对应产品信息，正文明确区分。
- 豆包工作与飞书的整合：YAML 摘要有此表述，但官网页面未印证，正文未写，待官方入口确认后补充。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置与可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算。
