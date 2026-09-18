# 工具与平台第二批 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `ruby-on-rails`、`rodin`、`qclaw`、`oura-ring`、`mistral`、`macos` 和 `linear` 的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。FAQ 候选来自 [Google Autocomplete 实时采样](#采样方法)（`suggestqueries.google.com/complete/search?client=firefox`，中英种子词，UTF-8）；事实核验只使用下列官方原始页面。本次没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想词的出现不等于热门，联想顺序不表示热度排名。

## 采样方法

- 日期：2026-09-18。
- 数据源：Google Autocomplete（firefox 客户端接口），中文 `hl=zh-CN` 与英文种子词混合采样。
- 歧义处理：`rodin` 裸词混入雕塑家罗丹与博物馆结果，另采 `rodin 3d`、`rodin hyper3d`、`rodin ai`；`linear` 裸词混入线性代数、linear approximation 等数学含义，另采 `linear app`、`linear project management`、`linear vs jira`；`mistral` 裸词混入风名与小家电品牌（`mistral air fryer`），另采 `mistral ai`、`mistral api`、`mistral le chat`；`qclaw` 与"QC Law 积分""腾讯电脑管家"等无关键混结果，另采 `qclaw 腾讯`、`qclaw 微信`；`macos` 另采版本词 `macos 27`、`macos 27 golden gate`。
- 未采到结果的种子：`qclaw 下载`、`腾讯 qclaw 是什么`、`rodin figma` 返回空，不代表无需求。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| ruby-on-rails | `ruby on rails 是什么`、`ruby on rails 教程`、`what is ruby on rails used for`、`ruby on rails vs ruby`、`ruby on rails vs django`、`ruby on rails vs laravel`、`ruby on rails github`、`ruby on rails api`、`ruby on rails is dead` | 定义、比较、导航 | 是（定义、与 Ruby 关系、与 Django/Laravel 比较、版本与获取） | [rubyonrails.org](https://rubyonrails.org/)、[Rails Doctrine](https://rubyonrails.org/doctrine)、[Guides](https://guides.rubyonrails.org/)、[GitHub](https://github.com/rails/rails) |
| rodin | `rodin 官网`、`rodin gen-2.5`、`rodin 3d 生成`、`rodin ai pricing`、`rodin ai cancel subscription`、`rodin 3d api key`、`hyper3d rodin api`、`rodin ai (hyper3d)`、`rodin ai (deemos)`、`rodin 雕塑` | 导航、定价、API、歧义 | 是（定义与公司关系、官网、收费、导出格式与 API、与雕塑家罗丹的区分） | [Rodin 官网](https://www.rodin3ds.com/)、[定价指南](https://www.rodin3ds.com/pricing) |
| qclaw | `qclaw 官网`、`qclaw是什么`、`qclaw 腾讯`、`qclaw workbuddy 区别`、`qclaw与workbuddy`、`qclaw 微信`、`qclaw 使用`、`qclaw tencent 官网` | 定义、导航、比较 | 是（定义与归属、官网与下载、与 WorkBuddy 区别、收费入口、开放平台） | [QClaw 官网](https://qclaw.qq.com/)、[开放平台](https://qclaw.qq.com/open-platform) |
| oura-ring | `oura ring 是什么`、`oura ring 订阅`、`oura ring 订阅费`、`oura ring不订阅`、`oura ring membership fee`、`oura ring membership vs no membership`、`oura ring 5 vs 4`、`oura ring 5 release date`、`oura ring vs apple watch` | 定义、订阅、比较 | 是（定义、是否必须订阅、订阅价格、4/5 代区分、与 Apple Watch 的形态区别） | [Oura 官网](https://ouraring.com/)、[Membership 页](https://ouraring.com/membership)、[戒指产品页](https://ouraring.com/product/rings) |
| mistral | `mistral ai是什么公司`、`mistral ai 公司`、`mistral 模型`、`mistral api key`、`mistral api key free tier`、`mistral api pricing`、`mistral le chat app`、`mistral 中文` | 定义、模型、API、计费 | 是（公司与产品线、模型家族、API Key 入口、Le Chat、计费入口、词义歧义） | [mistral.ai](https://mistral.ai/)、[Models 页](https://mistral.ai/models)、[Docs](https://docs.mistral.ai/)、[Console](https://console.mistral.ai/)、[融资公告](https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier) |
| macos | `macos 27 发布时间`、`macos 27 新功能`、`macos 27 golden gate`、`macos 27 支持机型`、`macos 27 siri ai`、`macos 27 更新`、`macos sequoia 下载` | 版本、功能、兼容性 | 是（macOS 定义与 iOS 分工、macOS 27 发布时间、新功能、机型条件、Siri AI 语言、更新方式） | [Apple macOS 页](https://www.apple.com/macos/)、[Apple Newsroom 2026-09-14](https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/) |
| linear | `linear是什么`、`linear 是 什么 软件`、`linear app是什么`、`linear pricing`、`linear vs jira`、`linear ai`、`linear project management` | 定义、计费、比较、AI 功能 | 是（定义与数学词义区分、定价与免费版、与 Jira 的定位比较、AI 与 Agent 功能） | [linear.app](https://linear.app/)、[定价页](https://linear.app/pricing)、[Changelog](https://linear.app/changelog) |

"定义/导航"类问题的答案直接来自上表官方入口；"比较"类问题只写双方官方定位与形态差异，不引用第三方评测结论。`oura ring 订阅费`、`linear pricing`、`rodin ai pricing` 等计费问题按规范回答免费层／订阅／按量的区别并链接官方价格页，正文不在介绍中固定价格。`ruby on rails is dead` 这类话题性候选不采用。

## 编辑补充问题

以下 FAQ 无对应联想词，按产品资料缺口编辑补充，已在正文与研究记录中保持此标记：

- macos：怎么更新 macOS（系统更新入口属稳定事实）。
- oura-ring：Oura Ring 与 Apple Watch 的形态区别（联想有 `vs apple watch` 种子，但官方页面不提供对比，答案只写双方官方形态定位）。
- mistral：`Mistral` 作为风名的词义说明（词义为稳定常识，用于歧义排除）。

## 事实边界与核验结论

全部核验于 2026-09-18，仅列正文使用的主张：

- **ruby-on-rails**：官网首页定位语为 "Accelerate your agents with convention over configuration"、"Ruby on Rails scales from PROMPT to IPO"，自述全栈框架并列举 HTML 模板、数据库、邮件、WebSocket 实时页面、异步任务、云存储与安全防护；首页公布 "Rails 8.1.3 — released March 24, 2026"；Rails Doctrine 由 DHH 署名，列出 "Convention over Configuration""The menu is omakase" 等支柱；Guides 覆盖 Active Record、Action Mailer、Active Job、Active Storage、Action Cable、API-only 等组件；GitHub `rails/rails` 标注 MIT license。历史归属（DHH 创建）与人物条目 dhh 一致。
- **rodin**：rodin3ds.com 自述 "Rodin by Hyper3D"，平台归属 "Deemos Corporation"；Rodin 将文本、照片、草图或多视角参考图转为带几何、UV、HD PBR 材质的 3D 模型；当前 Gen-2.5 提供 Extreme-Low 至 Extreme-High 五档生成强度；支持 3D ControlNet（包围盒/体素/点云）、局部编辑与拆分；导出 GLB、FBX、OBJ、STL、USDZ；免费注册、免费预览、确认结果才消耗 credits；同族产品 ChatAvatar、OmniCraft；页面提及 Business-plan API。MCP 支持仅见于节目发言，写入正文时按节目发言归属，不作官方主张。
- **qclaw**：qclaw.qq.com 页面标题 "QClaw - 微信远程办公 AI 助手 | 腾讯出品"；提供 macOS（Apple 芯片/Intel）、Windows、iOS、Android 与小程序下载入口；导航含产品定价、产品文档、开放平台；sitemap 显示站点 2026-07-31 更新。开放平台页写明两大通路：Agent 投稿（上传 AGENT.md、IDENTITY.md、SOUL.md 与知识库配置，审核后进入专家广场）与应用连接器（OAuth 2.0、API Key、技能包）；宣传云控加密下发、免费/买断/订阅/组合四种定价、生态伙伴包括腾讯文档、ima、QQ 邮箱、金山文档、百度网盘、企业微信等。子页为客户端渲染，正文不引用其中未渲染内容。
- **oura-ring**：ouraring.com 主推 Oura Ring 5（"The world's smallest smart ring is here"），自述可追踪 50+ 健康指标、数据在 Oura App（iOS/Android）查看；戒指产品页描述 Oura Ring 4 全钛金属、Smart Sensing、电池 5–8 天；Membership 页写明 $5.99 USD/月、新会员首月免费、5+ 百万会员、含 Oura Advisor（AI 健康伴侣）、HSA/FSA 可用；页脚署名 Oura Health Oy。86% 会员改善等为营销调查数据，不写入正文。
- **mistral**：mistral.ai 产品线为 Studio（开发控制台与 API）、Forge（定制模型）、Vibe（长程任务 Agent）、Vibe for Code（终端/IDE/后台编码 Agent）、AI Cloud；消费端为 Le Chat（chat.mistral.ai，iOS/Android 应用）。Models 页列通用模型（Mistral Large 3，open-weight 旗舰；Mistral Medium 3.5；Mistral Small 4，Apache 2.0；Ministral 3 边缘系列）与专长模型（OCR 4.1、Voxtral TTS / Transcribe、Devstral 2 open-weights 编码模型、Codestral、Moderation 2 等），docs.mistral.ai 的 Latest models 标注 Mistral Medium 3.5 为 Modified MIT。融资公告写明 Series D 募资 30 亿欧元、投后估值超 210 亿欧元、三星电子领投、Scaleup Europe Fund（EQT 管理）与 PSG Equity 联合领投，并自称欧洲科技公司最大一轮股权融资；公告页未标注日期，正文不写具体日期。
- **macos**：apple.com/macos 页面标题 "macOS 27 Golden Gate"；主打 Siri AI（英语先行）、Visual Intelligence on Mac、Liquid Glass 设计与性能改进、独立 Siri 应用；脚注写明 Apple Intelligence 需 M1 及之后机型等条件，Siri AI beta 需支持语言的 Apple Intelligence 机型，依赖服务器模型的功能有每日用量限制。Apple Newsroom 2026-09-14 发布稿写明 macOS 27 与 iOS 27、iPadOS 27 等当日以免费更新推出，Siri AI 以 beta 先行英语，法语、日语、韩语、葡萄牙语、西班牙语 10 月跟进。
- **linear**：linear.app 自述 "The system for product development"/"The product development system for teams and agents"；功能含 Issues、Projects、Cycles、Initiatives、Documents、Intake（自动把会话与客户反馈转为 issue）、Slack/GitHub/Zendesk/Intercom 集成与 MCP access；Linear Agent 可认领 issue、产出 Draft PR。定价页列出 Free（$0，不限成员、2 个团队、250 个 issue）、Basic（$10/人/月，按年计费）、Business（$16/人/月，含 Loops、Triage Intelligence、Linear Asks、Linear Insights）、Enterprise（定制，仅年付）。Changelog 描述 Loops 可由工作区事件触发、编辑文档、向 Slack 发送更新、每次运行是与 Linear Agent 的可继续会话。价格数字仅按规范出现在 FAQ 答案并附"截至 2026 年 9 月"锚点与官方价格页链接。

## 节目证据

本地两期中文逐字稿的引用锚点（`/tmp/nt-quote-anchors.mjs` 生成，2026-09-18 核对）：

| 实体 | 章节 | 段落锚点 | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| ruby-on-rails | 001 chapter-12 "Omarchy：一个 Agent 优先的 Linux 是什么体验" | quote-681e231d2b480c02f219 | xiangyang-qiaomu | 以 Rails 作者的推广说明 Omarchy 走红背景 |
| qclaw | 001 chapter-32 "为什么 AI 应用团队仍然跑不过模型厂商" | quote-7fd1747df3f42e4230f3 | orange | "WorkBuddy 和 QClaw，它是小团队跑出来的" |
| macos | 001 chapter-24 "NAS 会不会成为个人 AI 上下文的家" | quote-72f71e2b37b7ad20f487 | guizang | 小米同步助手使手机上的超级小爱可操作 macOS 电脑 |
| oura-ring | 002 chapter-20 "手表、录音与个人上下文" | quote-a77100b22668eb6afdc0 | orange | "Oura 戒指也是，续费率也很高" |
| mistral | 002 chapter-27 "Mistral、Kimi 与模型产品的不同选择" | quote-31beac9863dffb57a0bb | xiangyang-qiaomu | 回忆两三年前做 Agent 时用 Mistral，提及近期融资传闻 |
| rodin | 002 chapter-28 "从代码到实物：3D 打印带来的创作空间" | quote-ea06018d7768a63f9a08 | xiangyang-qiaomu | 用 Rodin 的 MCP 生成擎天柱模型，未打开网站 |
| linear | 001 chapter-36 "设计工程师、全栈闭环与"每个人都是 OPC"" | quote-4552c362a4627c3cf3be | guizang | 提及 AI 原生组织招聘 "Linear 原来的" 人才 |

所有引用均为节目参与者的体验、转述或个人判断，不是独立测评或官方背书。歸藏在 Mistral 讨论（002 chapter-27）中"新模型是微调的 Kimi/Gemini"的说法为现场猜测，未经官方证实，正文不采用。

## 未知项

- QClaw 官网子页（定价、文档、新闻）为客户端渲染，无法读取服务端内容；其个人版与企业版的具体计费未核验，正文只链接定价页。
- Mistral 融资公告页未显示发布日期；正文写既成事实不写日期。
- Oura Ring 5 的发布日期与详细规格未在本次抓取页面中获得，正文不作 4/5 代参数比较。
- Linear 的 Loops 上线日期未从 changelog 当前页确认，正文只写功能与官方描述。
- macOS 27 完整机型兼容列表未抓取，正文只写 Apple Intelligence 的 M1 及之后机型条件并链接官方页。
