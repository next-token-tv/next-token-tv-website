# Agent 产品 Wiki FAQ 研究记录（deepseek-harness、openclaw、workbuddy、grok-bot）

## 范围与口径

本记录支持 `deepseek-harness`、`openclaw`、`workbuddy`、`grok-bot` 四个产品实体的 Wiki 正文。研究日期为 2026-09-17，面向中文（zh-Hans）和英文（en）读者。需求线索来自 Google 公开联想（Firefox client，`hl=zh-CN` / `hl=en`），未做受控地区采样，也没有 Search Console、关键词工具或搜索量数据，因此所有搜索量、难度、排名、点击、热度均为 **N/A**。联想候选的出现不等于热门，也不构成效果承诺；联想顺序不是排名。

原始采样数据因本批文件范围限制未单独建 JSON，完整结果附于文末附录 A。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| DeepSeek Harness | `deepseek harness是什么`、`deepseek harness 安装/安装教程/安装失败`、`deepseek harness github`、`deepseek harness cli`、`deepseek harness plugin`、`deepseek harness vs codex/pi/claude code/hermes`（zh）、`deepseek harness desktop/paper/tui/review`（en） | 定义、安装、比较、生态 | 是（安装、模式、比较、稳定性直接采用；收费、模型搭配、版本规则为编辑补充） | [DeepSeek Harness 官网（中文）](https://www.deepseek.com/harness/)、[官网（英文）](https://www.deepseek.com/harness/en/)、[GitHub 仓库](https://github.com/deepseek-ai/deepseek-harness) |
| OpenClaw | `openclaw 安装/安装教程/安装 windows`、`openclaw github`、`openclaw 官网`、`openclaw skills`、`openclaw 微信`、`openclaw docker`、`openclaw vs hermes agent/claude code/opencode`、`openclaw install windows/mac/ubuntu/docker/wsl`（en）、`openclaw alternatives/docs`（en） | 安装、渠道、比较、导航 | 是（安装、渠道、比较直接采用；模型接入、费用、数据存放为编辑补充） | [OpenClaw 官网](https://openclaw.ai/)、[官方文档](https://docs.openclaw.ai/)、[GitHub 仓库](https://github.com/openclaw/openclaw) |
| WorkBuddy | `workbuddy是什么/是什么软件`、`workbuddy 腾讯`、`workbuddy 官网`、`workbuddy下载/下载安装/下载mac`、`workbuddy 网页版`、`workbuddy企业版`、`workbuddy 积分`、`workbuddy和codebuddy的区别`、`workbuddy tencent/for mac/app`（en） | 定义、归属、下载、计费、比较 | 是（归属、下载、CodeBuddy 比较、积分计费直接采用；生态能力名词、手机版为编辑补充） | [WorkBuddy 官网](https://www.workbuddy.cn/)、[开放平台](https://open.workbuddy.cn/)、[腾讯云产品页](https://cloud.tencent.com/product/workbuddy)、[国际站](https://www.workbuddy.ai/) |
| Grok Bot | `grok bot 是什么`、`grok bot 价格/free`、`grok bot 怎么用/使用`、`grok bot macos/download`、`grok bot cursor`、`grok bot 云主机`、`grok bot pricing/cost`（en）、`grok bot app/review`（en）、`grok bot vs muse/cursor/openclaw` | 定义、计费、平台、比较、Cursor 关系 | 是（定义、计费、Cursor 关系、平台、云电脑数据、用途直接采用） | [官方公告](https://x.ai/news/grok-bot-for-enterprise)、[官方文档概览](https://docs.x.ai/grok-bot/overview)、[xAI 并入 SpaceX 公告](https://x.ai/news/xai-joins-spacex) |

歧义排除：`openclaw` 的联想混入了代理工具 OpenClash（`openclash是什么`、`openclash 安装包`、`openclash vs passwall`），已整体排除；`workbuddy` 在英文站存在同名杂项（`workbuddy logo`、`workbuddy bench`），未采用为问题。未采纳但记录在案的候选：`deepseek harness 面经/招聘/团队`（招聘话题，超出产品页范围）、`grok bot icon/reddit`（品牌资产与社区，无官方答案入口）。

语言翻译与编辑归纳说明：zh 联想 `grok bot 云主机` 对应 en 文章的 "Does the cloud computer keep my data"；`deepseek harness desktop`（en）未采用为独立问题，仅印证桌面使用场景；OpenClaw 的 "数据存在哪里"、DeepSeek Harness 的 "必须搭配 DeepSeek 模型吗/版本号规则"、WorkBuddy 的 "生态能力名词解释" 为编辑补充问题，答案均以官方文档为据。

## 事实核验（2026-09-17）

以下为正文核心事实的核验来源与结果：

- DeepSeek Harness：`https://www.deepseek.com/harness/`（中文）与 `https://www.deepseek.com/harness/en/`（英文）确认"一切都是插件"架构、Cordis 内核、四种运行模式（中文站：标准/PTC/极简/创造；英文站：Standard/Code/Minimal/Creator）、开发者预览状态、`npx @deepseek-ai/dsh web` 安装、MIT 协议；GitHub README 另确认兼容性破坏变更警告、SAFETY.md、源码构建方式。
- OpenClaw：`https://docs.openclaw.ai/` 确认自托管 Gateway 定位、渠道列表（Discord、Google Chat、iMessage、Matrix、Microsoft Teams、Signal、Slack、Telegram、WhatsApp、Zalo、WebChat、Nostr、Twitch 等，微信不在列表）、`openclaw onboard`、`openclaw gateway install`、Node 24.16+/26.1+、OpenClaw Foundation（独立 501(c)(3)）、MIT、无付费层、默认仅每日版本检查；GitHub README 另确认 macOS/iOS/Android/Windows/Linux 客户端、ClawHub、模型提供商可替换（Claude、Codex、本地模型）、Peter Steinberger 创建。主站 `https://openclaw.ai/` 采样时连续连接失败（ECONNRESET），文中仍按 YAML 与安装脚本域名列出，建议整合者复核可访问性。
- WorkBuddy：`https://open.workbuddy.cn/` 确认开放平台定位与首期五类生态能力（Buddy 应用、专家、Skill、连接器、硬件）及腾讯云计算（北京）/腾讯科技（深圳）署名；`https://cloud.tencent.com/product/workbuddy/` 确认"腾讯出品的全场景 AI 办公工作台"、任务拆解自查、本地授权目录文件读写、预置领域专家、SkillHub、云端任务托管、客户端/网页版/企业版/小程序与微信（企业微信）手机端远程连接、Credits 积分计费；`https://www.workbuddy.cn/` 仅取到标题与"AI Agent 办公新范式"口号（正文 JS 渲染未取到）。
- Grok Bot：`https://x.ai/news/grok-bot-for-enterprise` 确认公告内容（AI 队友定位、每 Bot 一台云端电脑、用户间隔离、默认无访问权限、企业访问/网络/审计控制、页脚 © 2026 SpaceXAI LLC）；`https://docs.x.ai/grok-bot/overview` 确认持久云端电脑（浏览器、文件系统、终端）、运行在 Cursor 的云、名下 Bot 共享同一台电脑、演示学习成技能、Bot 互发消息、桌面 macOS/Windows/Linux 与移动 iOS/Android 客户端、包含在付费个人 Cursor 套餐与 Cursor Teams 套餐或关联 SuperGrok/SuperGrok Plus/SuperGrok Heavy 订阅、用量按周重置、无免费层；`https://x.ai/news/xai-joins-spacex` 确认 2026-02-02 SpaceX 收购 xAI、品牌 SpaceXAI。

## 事实边界与省略项

- 未把 WorkBuddy 页面的营销数字（"No.1 桌面办公智能体""10万+ 生态资产""100+ 共创伙伴""100+ 专家""7万+ Skills"）与 Grok Bot 公告的采用数字（"数千组织""数百万 Bot"）写入正文。
- WorkBuddy 未核验到具体操作系统支持清单与公开资费表，正文只写入口与 Credits 计费方式；"腾讯投了 WorkBuddy"在节目中为不确定推测（橘子，EP002），未写入正文。
- OpenClaw 的 "OpenClaw 2.0" 别名来自 YAML 与节目转述，官方页面未核验到版本命名，正文仅在节目讨论中以杨攀转述出现。
- Grok Bot 官方公告中的限时促销（企业客户两周免费）为时效性内容，未写入正文。
- DeepSeek Harness 官方文档未限定模型，正文不写"仅支持 DeepSeek 模型"；EP002 中缓存率数字（99%、99.5%）属于节目参与者对 Flash 模型的观察，且主要指向模型而非 Harness，未写入正文。
- EP001 chapter-16 提到的 "ChatGPT Work Cloud 主机 12G 运存" 等细节未核验且与本页无关，省略。

## 节目证据

本地中文逐字稿（无英文逐字稿，英文正文链接同一 URL 并标注 Chinese transcript）：

- deepseek-harness：[Weekly #001 chapter-06](/weekly/001/transcript#chapter-06)、[chapter-14](/weekly/001/transcript#chapter-14)（quote-9b223772ff9194051c4d）、[Weekly #002 chapter-08](/weekly/002/transcript#chapter-08)（quote-8316bc20929e3c03de42）、chapter-10（章节级引用）。
- openclaw：Weekly #001 chapter-14（quote-2a6de0adc8a7bfe6095e、quote-9fc5c848dee6a2f8ce52）、[chapter-15](/weekly/001/transcript#chapter-15)（quote-625d7960654bcfcabcea）、Weekly #002 chapter-17（章节级引用）。
- workbuddy：Weekly #001 chapter-14（quote-1d7af420c41df8edea54）、chapter-18（quote-b1d8460b4c7a04b42fbd）、Weekly #002 chapter-12（quote-4053b8652cfc67106ee3）、chapter-17（quote-b18ffbf84c93fd424c0d）、chapter-21（章节级引用）。
- grok-bot：Weekly #001 [chapter-16](/weekly/001/transcript#chapter-16)（quote-b730e5f9ca546bc92abb、quote-0a522a497a56b1a8ffe9）、Weekly #002 [chapter-13](/weekly/002/transcript#chapter-13)（quote-af1872f1d5640ea3a393、quote-403ec584da2686d9ad06）、chapter-24（quote-73c44181529be6c784bc）。

发言人：杨攀（yangpan）、歸藏（guizang）、向阳乔木（xiangyang-qiaomu）、橘子（orange）。所有节目内容均标注为参与者体验、转述或判断，不作为官方事实或独立评测。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算。

## 附录 A：Google 联想原始采样（2026-09-17）

方法：Google 公开联想，Firefox client，`hl=zh-CN` / `hl=en`，每候选取前 10 条。示例 URL 形如 `https://suggestqueries.google.com/complete/search?client=firefox&hl=zh-CN&q=openclaw+&ie=utf-8&oe=utf-8`。

- `deepseek harness`（zh-CN）：deepseek harness 招聘 / deepseek harness github / deepseek harness agent / deepseek harness团队 / deepseek harness是什么 / deepseek harness 安装 / deepseek harness 面经 / deepseek harness 产品 / deepseek harness 使用 / deepseek harness 介绍
- `deepseek harness `（zh-CN）：同上，末位为 deepseek harness cli
- `deepseek harness vs `（zh-CN）：deepseek harness vs codex / vs pi / vs pi agent / vs claude / vs langgraph / vs langchain / vs hermes / vs hermes agent / vs claude code / vs reasonix
- `deepseek harness 安装`（zh-CN）：安装 / 安装教程 / 安装卡住 / 安装包 / 安装skill / 安装使用 / 安装失败 / 安装慢 / 安装报错 / 安装mcp
- `deepseek harness`（en）：desktop / github / cli / paper / agent / team / plugin / tui / review / vs pi
- `deepseek harness vs `（en）：vs pi / vs hermes / vs opencode / vs hermes agent / vs claude code / vs codex / vs pi agent / vs prime agent / vs reasonix / vs langchain
- `openclaw`（zh-CN）：openclaw / openclaw github / openclaw 官网 / openclaw skills / openclaw 中文 / openclaw 安装 / openclaw-rl / openclash是什么（歧义，排除）/ openclaw-weixin / openclaw docker
- `openclaw `（zh-CN）：openclaw github / 官网 / skills / 中文 / 安装 / 微信 / docker / rl / 下载 / 教程
- `openclaw 安装`（zh-CN）：安装 / 安装教程 / 安装 windows / 安装配置 / 安装使用 / 安装命令 / openclash 安装包（歧义，排除）/ openclash 安装skill（歧义，排除）/ 安装 手机 / openclash 安装 mac（歧义，排除）
- `openclaw vs `（zh-CN）：vs hermes agent / openclash vs passwall（歧义，排除）/ openclash vs passwall2（歧义，排除）/ openclip vs hermes 对比（歧义，排除）/ vs opencode / vs harness agent / vs nanoclaw / vs qwenpaw / vs langchain / vs hermes
- `openclaw`（en）：openclaw / github / vs hermes / ai / founder / alternatives / skills / install / vs claude code / docs
- `openclaw install`（en）：install / installation guide / install command / install windows / install mac / install ubuntu / install linux / install docker / install script / install wsl
- `openclaw vs `（en）：vs hermes / vs claude code / vs claude cowork / vs hermes agent / vs opencode / vs nemoclaw / vs codex / vs claude / vs myclaw / vs pi
- `workbuddy`（zh-CN）：workbuddy / workbuddy 腾讯 / workbuddy 官网 / workbuddy下载 / workbuddy是什么 / workbuddy 安装 / workbuddy企业版 / workbuddy 网页版 / workbuddy bench / workbuddy和codebuddy的区别
- `workbuddy `（zh-CN）：腾讯 / 官网 / 下载 / 网页版 / 企业版 / bench / logo / 国际版 / 安装 / 积分
- `workbuddy 下载`（zh-CN）：workbuddy下载 / 下载安装 / 下载 腾讯 / 下载mac
- `workbuddy 是什么`（zh-CN）：workbuddy是什么 / 是什么软件 / 是什么模型 / 是什么东西 / 是什么意思
- `workbuddy`（en）：workbuddy / tencent / ai / cn / github / cli / for mac / app / bench / logo
- `workbuddy download`（en）：download mac / download windows / app download / download 腾讯
- `grok bot`（zh-CN）：grok bot / grok bot 价格 / grok bot 是什么 / grok bot 使用 / grok bot怎么用 / grok bot macos / grok bot cursor / grok bot好用吗 / grok bot free / grok bot github
- `grok bot `（zh-CN）：grok bot download / 怎么用 / 价格 / 是什么 / macos / cursor / free / github / 云主机 / 配置
- `grok bot`（en）：grok bot / pricing / download / app / ai / icon / cursor / alternative / reddit / login
- `grok bot pricing`（en）：grok bot pricing / grok bot cost / how much does bots cost / how much do bots cost
- `grok bot vs `（en）：vs muse / vs claude / vs astra / vs claude cowork / vs hermes / vs cursor / vs openclaw / vs hermes agent / vs claude code / vs buzz
