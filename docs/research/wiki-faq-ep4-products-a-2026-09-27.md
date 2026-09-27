# 第 004 期产品（A 批）Wiki FAQ 研究记录

## 范围与口径

本记录支持 `muse-agent`、`muse-charm`、`gmail`、`amazon`、`harvey` 五个产品实体的 Wiki 正文。研究日期为 2026-09-27，面向中文和英文读者。本次没有 Search Console、关键词工具或任何搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。Google Autocomplete 联想通过 `suggestqueries.google.com/complete/search`（`client=firefox`，`hl=en` / `hl=zh-CN`）只读采样获得，候选顺序不代表热度。本次任务环境没有 WebSearch 工具，也未使用任何需要权限的数据服务；"People also ask" 类问题候选未能采集。

## FAQ 候选与证据

| 页面 | 实际采样的种子词 → 联想候选（语言） | 意图 | FAQ 采用 | 官方答案入口 |
| --- | --- | --- | --- | --- |
| muse-agent | `muse agent`（en）→ muse agent meta / cost / invite code / pricing / review / app / apk；`meta muse`（en）→ meta muse ai agent / app / pricing / spark；`muse app meta`（en）→ what is muse app / is the muse app free；`muse智能体`（zh）→ 无候选 | 定义、入口、计费 | 是：是什么/哪家公司、在哪可用/怎么下载、免费与计费、与 OpenClaw/Grok Bot 区别（比较题为编辑补充） | [Meta 新闻稿 Introducing Muse](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)、[muse.ai](https://muse.ai/) |
| muse-charm | `muse charm`（en）→ muse charmed / charm bar / charm bracelet / Charmed 剧集等，全部同名歧义；`muse charm meta`（en/zh）→ 无候选 | 定义、发售信息 | 是：是什么、何时发售/价格、是否依赖手机（后两问为编辑补充，答案锚定官方页面口径） | [Meta 新闻稿 Connect 2026](https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/) |
| gmail | `gmail`（en）→ gmail login / sign in / create / account / sign up；`gmail登录`（zh）→ 登录入口/登录不了；`gmail注册`（zh）→ 注册新邮箱/手机验证；`gmail邮箱`（zh）→ 网页版/官网/入口；`gmail storage`（en）→ storage full/plans；`gmail gemini`（zh/en）→ gemini 整理/设定/disable | 导航、注册、存储、AI 功能 | 是：登录入口、注册、免费存储与占满处理、Gemini 功能与开关 | [Gmail 产品页](https://workspace.google.com/products/gmail/)、[Gmail 帮助中心](https://support.google.com/mail/) |
| amazon | `amazon prime`（en）→ membership / login / day 2026 / student；`amazon prime benefits`（en）→ benefits list / and cost / 2026；`what is amazon prime`（en）→ what is amazon prime / membership；`亚马逊 prime`（zh）→ prime day/会员/怎么取消/有什么用/价格 | 定义、会员权益、价格、取消 | 是：平台定位、Prime 权益、价格（截至 2026 年 9 月锚定）、取消 | [Amazon Prime 官方页面](https://www.amazon.com/prime)、[About Amazon](https://www.aboutamazon.com/what-we-do) |
| harvey | `harvey ai`（en）→ login / legal / valuation / funding / pricing；`harvey ai pricing`（en）→ pricing model / per user / cost per seat；`harvey ai law firms`（en）→ is harvey ai only for law firms / what does harvey ai do for law firms；`harvey ai 是什么`（zh）→ 单条候选 | 定义、客户与适用范围、计费 | 是：是什么、是否只给律所用、怎么收费、开源模型替换（编辑补充，答案来自节目转述并标注口径） | [Harvey 官网](https://www.harvey.ai/) |

歧义处理：`muse` 裸词混入乐队、冥想应用等同名结果，采样一律加 `meta`/`agent` 修饰；`muse charm` 的裸词联想被手链与剧集《Charmed》占据且 `muse charm meta` 无候选，说明该词当前搜索需求极弱，FAQ 以编辑补充为主；`harvey` 裸词未采样，统一使用 `harvey ai`。

## 事实核验与来源

- **muse-agent**：Meta 新闻稿（fetch 于 2026-09-27）确认 2026-09-08 发布、"personal AI agent built for everyone"、邮件/预订/表单/浏览器操作、Muse Spark 模型、Muse Secure VM 与 Sentinel 审查代理、Stripe Link 购买保护（Shop Pay、1Password 未上线）、美国 iOS/Android/muse.ai 推出、WhatsApp 内可用、"free for most needs" 加订阅、凭据不可见/审计/可撤销授权/可退出训练/Muse Confidential VM 预告。Connect 2026 新闻稿确认新增连接器（Walmart、Best Buy、PayPal、Expedia、Instacart、Notion、GitHub、Box 等）、数月内登陆 AI 眼镜、将获得自己的邮箱地址。
- **muse-charm**：Connect 2026 新闻稿（fetch 于 2026-09-27）确认为与 Muse 交谈互动的口袋设备、实时语音模型、"more to share later this year"；**无**价格、发售日期、摄像头/屏幕/联网规格。正文与 FAQ 未采用任何未公布参数。
- **gmail**：Workspace 产品页（fetch 于 2026-09-27）确认 99.9% 拦截口径、免费层 15GB/用户、Meet/Calendar/Tasks/Chat 集成、Gemini 起草/跨收件箱与 Drive 搜索/会话摘要、Smart Reply/Smart Compose。帮助中心确认登录、注册、Gemini in Gmail 设置入口存在。Gmail 2004 年推出为公认稳定事实，未单列来源。
- **amazon**：`amazon.com/prime`（fetch 于 2026-09-27）确认权益与价格（美国 $14.99/月、$139/年，学生/Prime Access 另有价，随时可取消）；`aboutamazon.com/what-we-do` 与 `/retail` 确认使命表述、选品/价格/便利性、Seller Central 与 MCF、Alexa for Shopping。`amazon.com` 首页抓取为二进制（反爬），未作为依据。
- **harvey**：`harvey.ai`（fetch 于 2026-09-27）确认"One Platform for Legal Work"、Agents/Vault/Knowledge/Spaces/Command Center/Contract Intelligence/Horizon Scanning/Harvey Mobile/Ecosystem/Memory/Harvey Academy 模块、面向律所与法务的方案划分。官网无公开报价页面，正文据此写"未列出公开报价"。

## 未核验与未采用项

- **"亚马逊封禁 Muse 代购"**：仅见于节目转述（参与者称来自其周报）。Bing 与 DuckDuckGo 检索（2026-09-27）未命中亚马逊官方公告或可靠报道原文；businesstoday.com.tw 摘要仅有截断暗示，正文抓取被内容过滤拦截。处理：正文仅作为节目讨论转述并明确"本页未能核到官方公告"，不写成既成事实。
- **Muse 第三方定价（Power $20/月、Maximum $100/月等）**：来自 grenade.tw 博客，`muse.ai/pricing` 返回 401、`muse.ai` 需登录，无法核验，正文不采用，仅写官方"对大多数需求免费+订阅"口径。
- **Muse Charm 的摄像头/两英寸屏/5G/eSIM/圣诞节发货**：均为节目参与者转述，正文明确标注非官方参数。
- **Harvey"每收 1 美元付 1.5 美元、基于 Kimi K3 训练模型、毛利率转正"**：节目转述的公开披露，未在 Harvey 官方渠道复核，正文标注口径来源。
- **Harvey 官网的融资、客户数等公司数字（$550M、$15.5B、2,400+ 等）**：属易变公司数字，正文未采用。
- `meta muse 是什么`、`muse agent 下载` 等中英混排种子在 `hl=en` 下返回 400，未重采。

## 节目证据（Weekly #004，中文逐字稿）

| 页面 | 章节 | 引用锚点 |
| --- | --- | --- |
| muse-agent | chapter-06「Muse：面向普通人的 Personal Agent」 | `quote-7abc5963e7b3fd15cdcf`（歸藏：适合 Meta 的赛道/读 Instagram、Facebook、Threads）、`quote-adbb878d9135f6dd9e44`（杨攀：新的 Store）、`quote-6a055fdd454af94fe13d`（向阳乔木：Muse 与 Grok Bot 对比） |
| muse-agent | chapter-07「AI 产品经理与人的使用体验」 | `quote-bbfb96fd47df6fe8bdcb`（歸藏：两个进程与体验） |
| muse-agent | chapter-09「开放生态、资源与商业闭环」 | `quote-2ea181054d175801f623`（歸藏：极端开放与 VM 文件）、`quote-5045c1ee684eaac2b0ae`（橘子：C 端第一个） |
| muse-charm | chapter-10「Muse Charm、手机与 AI 的入口」 | `quote-27e6e41651b6cf7812bb`（杨攀：平台生态与语音委托） |
| muse-charm | chapter-12「掌上设备与日常生活」 | `quote-b170d7fba664999459c2`（乔木：Tamagotchi）、`quote-e7469888f59e70a90a0d`（歸藏：语音/视频输入）、`quote-c85be463b59d002aafab`（歸藏：eSIM）、`quote-5b481f6195043317a90a`（橘子：摄像头/两英寸屏/5G）、`quote-99e47d80735c8f8e7c7a`（乔木：圣诞节发货）、`quote-2a538e3f69c50950f8d5`（歸藏：硬件无可讲）、`quote-9d094afb79a270c77918`（乔木：华强北）、`quote-82f12c8d7c282ad46d14`（橘子：未来想象） |
| gmail | chapter-06 / 07 / 09 | `quote-f19330c21354e6826d6c`（橘子：闭环）、`quote-281abbca1521ea23bc73`（乔木：Gmail 连接器）、`quote-338a97fd21efd8154835`（橘子：隐私） |
| amazon | chapter-09 | `quote-0cc3af92a8b15bccb528`（歸藏：代购下单）、`quote-07c7a93321492f461fde`（橘子：被封转述）、`quote-816fe54623b4fc00b224`（杨攀：被封转述）、`quote-8091957edf65ded0fe82`（歸藏：广告收入解释） |
| harvey | chapter-13「Harvey：开源模型与产品壁垒」 | `quote-36409c36b11adf09038f`（橘子：毛利数据）、`quote-be20aa68704a5ecebd0b`（杨攀：开源替换条件）、`quote-3fa87e82e591d48e0061`（歸藏：垂类壁垒）、`quote-5f2e02e9a7aba9e05fab`（橘子：Muse 指明方向） |

段落锚点由批内脚本（`/tmp/nt-quote-anchors-ep4a.mjs`，与 `src/data/transcript-paragraph-anchors.ts` 算法一致）对全刊逐段计算，重复组合按全文次序加序号；上表锚点均为首次出现（无 `-N` 后缀）。

## 关系与分工说明

- `muse-agent`（kind: agent）与 `muse-charm`（kind: hardware）同属 Meta（两 YAML `brand: meta`，官方来源同为 about.fb.com 2026-09 新闻稿）：Muse 是个人智能体本体，Muse Charm 是 Connect 2026 公布的语音交互外设。两页互相链接，muse-agent 页承担产品能力、入口、计费与隐私；muse-charm 页承担硬件形态、官方公布边界与节目中的规格转述，不重复 Muse 功能介绍。
- `amazon`（kind: platform，无 brand 字段）指消费者购物平台，与既有品牌实体 `aws`（亚马逊云科技）分工：购物业务归本页，云服务互链 `/wiki/brands/aws`。`gmail` 归 Google（`brand: google`），Harvey 无品牌归属，公司即产品。

## 后续衡量

无发布后数据；曝光、点击、CTR、覆盖率均为 N/A。若接入 Search Console，按编辑规范记录 28 天窗口指标。
