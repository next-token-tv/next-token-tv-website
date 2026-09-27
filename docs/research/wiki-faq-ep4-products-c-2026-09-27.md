# 产品批次 C（6 实体，2026-09-27）Wiki FAQ 研究记录

## 范围与口径

本记录支持 `minecraft`、`shopify`、`sora`、`terraria`、`threads`、`google-calendar` 的 Wiki 正文。研究日期为 2026-09-27，面向中文和英文读者。公开 SERP 采样使用 Google 公开联想接口（`suggestqueries.google.com`，Firefox client，`hl=zh-CN` / `hl=en`），用于确认问题形态和官方答案入口；没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**，联想顺序不是热度排名。`threads` 与 `sora` 存在同名歧义（threads 缝纫线/竞争条件、Shimano Sora 套件、动画《Ahiru no Sora》、OverDrive 的 Sora 阅读应用），采样时以品牌词或场景词补全。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| Minecraft | `我的世界`、`我的世界是什么游戏`、`我的世界下载`（含"免费/电脑版/网易"）、`我的世界多少钱`、`我的世界java版和基岩版的区别`（zh）；`what is minecraft`、`minecraft download`、`minecraft editions`、`minecraft price`、`minecraft java vs bedrock`（en） | 定义、下载、价格、版本差异 | 是（定义、下载、价格、版本差异、多人题来自采样；"能通关吗"来自 minecraft.net 官方 FAQ 的对应问题，属编辑补充） | [minecraft.net about 页](https://www.minecraft.net/en-us/about-minecraft)、[下载页](https://www.minecraft.net/en-us/download)、[商店](https://www.minecraft.net/en-us/store)、[mc.163.com](https://mc.163.com/) |
| Shopify | `shopify 是什么`、`shopify 是什么公司/平台`、`shopify 费用`（含方案/建站/开店变体）、`shopify 入门`（zh）；`what is shopify`、`what is shopify used for`、`shopify pricing`、`shopify vs etsy`、`shopify sidekick`（en） | 定义、费用、用途、平台对比 | 是（定义、收费、用途来自采样；"怎么接入 AI Agent"来自 shopify.dev 文档阅读，属编辑补充；vs etsy 一题采用为"与平台型市场的关系"并避免对比断言） | [shopify.com/about](https://www.shopify.com/about)、[定价页](https://www.shopify.com/pricing)、[careers](https://www.shopify.com/careers)、[investors](https://www.shopify.com/investors)、[shopify.dev 迁移文档](https://shopify.dev/docs/apps/build/storefront-mcp) |
| Sora | `openai sora`（含"费用/api/关闭/sora 3"）、`sora是什么`、`sora app`（含下载/not working）、`sora下架了吗`、`sora 2下架`（zh）；`openai sora`（含 shutdown/pricing/api/release date）、`sora 2`、`sora shut down`（含 "sora shutdown april 26"）、`is sora discontinued`（en） | 定义、停用状态、导出、API、收费 | 是（定义、下架/停用、导出、API、收费五题全部来自采样，答案依托 OpenAI 官方停用文档；"sora app"联想混入 OverDrive 阅读应用与求职类结果，已排除） | [Sora 2 发布页](https://openai.com/index/sora-2/)、[Sora is here](https://openai.com/index/sora-is-here/)、[帮助中心停用公告](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)、[Deprecations](https://developers.openai.com/api/docs/deprecations) |
| Terraria | `泰拉瑞亚`（含 wiki/灾厄/手机版）、`泰拉瑞亚 联机`（含"联机进不去"）、`泰拉瑞亚 模组`（安装/推荐）、`泰拉瑞亚是什么游戏`（返回空）（zh）；`terraria`（wiki/calamity/crossplay/bosses）、`terraria calamity`、`terraria crossplay`、`terraria 2`、`terraria 1.4.5`（en） | 定义、联机、模组、版本动态 | 是（定义、联机、模组安装、灾厄、价格来自采样；crossplay/terraria 2/1.4.5 具体版本动态未核验，未采用） | [Steam Terraria 页](https://store.steampowered.com/app/105600/Terraria/)、[terraria.wiki.gg](https://terraria.wiki.gg/wiki/Terraria)、[tModLoader](https://store.steampowered.com/app/1281930/tModLoader/)、[Calamity 官方 Wiki](https://calamitymod.wiki.gg/wiki/Calamity_Mod_Wiki)、[terraria.org](https://terraria.org/) |
| Threads | `threads 是什么`（软件/平台/网站/什么时候出来的）、`threads app`（下载/是什么/打不开）、`threads 注册`（含"不用 ig"）、`threads 微博`（返回空）（zh）；`threads app`、`threads meta`、`threads vs twitter`、`threads fediverse`、`how to delete threads account`（en） | 定义、注册依赖、平台对比、联邦宇宙、下载 | 是（定义、Instagram 账号依赖、与 X 的关系、fediverse、下载五题来自采样；删除账号题未采用——删除/停用具体流程未在官方页核验，答案会流于空泛） | [Meta 新闻室 Introducing Threads](https://about.fb.com/news/2023/07/introducing-threads-new-app-text-sharing/)、[threads.net](https://www.threads.net/) |
| Google Calendar | `谷歌日历`（下载/网页版/桌面版/mac/windows 下载/农历）、`google 日历 共享`（含 iPhone）、`谷歌日历 桌面版`（zh）；`google calendar`（app/desktop/login/download）、`google calendar sharing`、`google calendar appointment schedule`、`is google calendar free`（en） | 免费/付费、桌面入口、共享、预约页 | 是（免费、桌面入口、共享、预约页来自采样；Gmail 集成题为编辑补充，出自官方产品页功能清单） | [Workspace Calendar 产品页](https://workspace.google.com/products/calendar/)、[共享设置帮助](https://support.google.com/calendar/answer/37095)、[calendar.google.com](https://calendar.google.com/) |

裸词歧义记录：`sora app`（en）混入 OverDrive 的校园阅读应用 Sora、"sora application nj"等非本产品结果；`is sora discontinued` 返回 Shimano Sora（自行车套件）与动画《Ahiru no Sora》；`threads` 相关采样依赖 "threads 是什么/threads meta" 等带品牌修饰词排除缝纫/编程含义；`terraria 2`、`terraria 1.4.5` 指向未核验的续作传闻与版本细节，正文与 FAQ 均不写。

## 事实边界（逐实体）

- **Minecraft**：官方 about 页确认"开放世界沙盒游戏"、第一版 2009 年发布 PC、完整版 2011 年发布、"game drops"一年多次、ESRB E10+、Java/Bedrock 多人与服务器、Realms、"沙盒没有官方终点（末影龙）"官方 FAQ；导航与页脚确认 Java & Bedrock 两条版本线、Mojang Studios（Stockholm）、"© Mojang AB / TM Microsoft"。微软 2015 财年 10-K（SEC）确认 2014 年 11 月收购 Mojang Synergies AB（"the Swedish video game developer of the Minecraft gaming franchise"）；收购价格 25 亿美元见于报道但正文按规范不写。中国大陆本地化版本官网 mc.163.com（163.com 域名），页面确认电脑版/移动版下载与基岩版跨 Windows 联机；"由网易运营"未在页面文字中直接出现，正文只写"另有本地化版本运营"并指向官网。销量数据（如 3 亿份）未在本轮官方页面核到，未写。
- **Shopify**：about 页确认"complete commerce platform to sell online or in person"、店面+后台、$1T+ 商家销售、2023 年 6.75 亿+独立买家、美国电商 10%、Sidekick、13,000+ 应用、四档套餐名；careers 页确认"Since 2006"、约 8,000 名员工、"Read Tobi's AI memo"（指向 x.com/tobi 帖）；investors 页确认"Millions of merchants in 175+ countries"、累计 GMV $1.6T。shopify.dev 确认 Storefront MCP 的目录与购物车工具已移除、由 UCP 取代（`/api/ucp/mcp`，需 agent profile）、Inbox agent、Customer Accounts MCP 不变。公司注册地址渥太华（SEC EDGAR CIK 0001594805）仅用于研究佐证，正文未写总部表述；"Tobi Lütke 为创始人兼 CEO"未在官方页面直接核到，正文不写。
- **Sora**：官方时间线——初代 Sora 2024 年 2 月（sora-2 页原话 "The original Sora model from February 2024 was in many ways the GPT-1 moment for video"）；2024-12-09 sora.com 上线（Plus/Pro、1080p/20s、storyboard、不含 Team/Enterprise/Edu、18+、不含英国/瑞士/EEA）；2025-09-30 Sora 2（旗舰视频+音频模型、iOS 邀请制应用、美加首发、Cameo/"characters"、Pro 用户 Sora 2 Pro、"initially available for free, with generous limits"）；2026-03-24 API 弃用通知；2026-04-26 产品停止（sora-2 页横幅）；2026-09-24 Videos API 与 `sora-2`、`sora-2-pro`、`sora-2-2025-10-06`、`sora-2-2025-12-08`、`sora-2-pro-2025-10-06` 移除、无推荐替代。停用导出走 sora.chatgpt.com/sunset，最终窗口关闭后数据永久删除，未用完积分可用于 Codex（帮助中心）。停用原因官方未说明，正文不写。YAML 摘要"OpenAI 开发的视频生成模型家族"仍然成立，未改 YAML。
- **Terraria**：Steam 页确认 Re-Logic 开发/发行、2011-05-16 发售、官方口号、"classic action games + sandbox creativity"；terraria.wiki.gg（Re-Logic 认可的官方 Wiki）确认 Windows 首发 2011-05-16、平台扩展、单/多人、"一次性买断后续更新免费"、"over 70 million sold copies as of May 2026"、2022-01 Steam Labor of Love 奖、价格"generally ranges between US$5–20"；tModLoader Steam 页确认免费 DLC、社区开发、Re-Logic 发行、需本体；Calamity 官方 Wiki 确认"large content mod"、终局内容/难度模式/新职业、社区维护。crossplay 与 1.4.5 具体上线动态、Terraria 2 传闻均未核验，未写。
- **Threads**：Meta 新闻室发布页（持续更新的原始公告）确认 2023-07-05 初始版本、100+ 国家 iOS/Android、Instagram 账号登录、用户名与认证继承、500 字符、视频 5 分钟、沿用 Instagram 社区准则与拉黑联动、后续更新（ActivityPub fediverse 互操作、网页版、关键词搜索）。日活/月活数字：orange 的"很早日活超过 Twitter"仅为节目参与者说法，未在 Meta 官方渠道核到对应口径，正文只作归属引用。删除账号流程未核验，FAQ 未采用该题。
- **Google Calendar**：Workspace 产品页确认"Shareable online calendar / AI-powered calendar"、共享日历、多日历与颜色、内置预约页（个人账户 1 个免费页；Gemini、无限预约页、Stripe 收款需 Workspace/Google One/Business/Enterprise）、Gmail 事件检测与自动添加机票/酒店/餐厅、任务上日历、专注时间、Meet、Time Insights、附件、工作地点、Microsoft/IBM 迁移、网页/Android/iOS/Wear OS/Apple Watch。2006-04-13 上线日期未能从官方渠道核验（旧官方博客已迁移且正文缺失），正文不写发布日期。共享设置引用帮助中心 answer/37095。

## 节目证据

六个实体的提及全部出现在 Weekly #004（001–003 无命中）：

- Minecraft：#004 chapter-02（"Opus 5.5：代码、视觉与创造力"），歸藏 `quote-35c75af489d4ea7469d4`（类 Minecraft 细像素的《三国无双》赵云演示、API 成本约一千美元的自估）。
- Terraria：#004 chapter-02，歸藏 `quote-b06036669c91c4591772`（刚重新通关、灾厄模组像素武器与打击感，作为像素游戏质感参照）。
- Sora：#004 chapter-03（"从执行指令到理解意图"），歸藏 `quote-0412a8f31594d1e6779a`（Seedance 的多镜头叙事受 Sora 2 启发）。
- Threads：#004 chapter-06（"Muse：面向普通人的 Personal Agent"），歸藏 `quote-dbed584c312b76ce1677`（小扎让 Muse 读 Instagram/Facebook/Threads 信息）、orange `quote-6e6c6b9be2933b2ce390`（"Threads 很早日活超过 Twitter"，未核验，仅归属引用）。
- Google Calendar：#004 chapter-08（"To-Do、记忆与可见的结果"），orange `quote-e1352c99e12fd1374542`（转述前 Google 日历 PM 的调研故事，二手信息已标注）。
- Shopify：#004 chapter-09（"开放生态、资源与商业闭环"），歸藏 `quote-65426e4302ce787fd2f6` 与杨攀 `quote-c8d1061b1c5571c48583`（在"亚马逊封 Muse"语境中调侃 Shopify CEO 会欢迎购物 Agent、股价会涨；玩笑式推测已标注）。

段落锚点由 `/tmp/nt-quote-anchors.mjs`（与 `src/data/transcript-paragraph-anchors.ts` 同算法）对四期中文逐字稿现算。英文正文引用中文逐字稿时链接文字明确写 Chinese transcript，未生成不存在的 `/en/weekly/.../transcript` 链接。

## 采样局限与未知项

- `泰拉瑞亚是什么游戏`、`threads 微博`、`shopify 入门` 等种子返回空或极少量结果，样本量小；相关 FAQ 保留真实问法形态，答案依托官方页面。
- 未核验而未写：Minecraft 销量与"最畅销游戏"口径、Shopify 创始人/CEO 头衔与总部表述、Sora 停用原因、Terraria crossplay 与 1.4.5/Terraria 2 动态、Threads 用户规模官方口径、Google Calendar 上线日期。
- 搜索量、难度、曝光、CTR、GEO 效果：N/A。后续接入 Search Console 后按 28 天窗口记录。
