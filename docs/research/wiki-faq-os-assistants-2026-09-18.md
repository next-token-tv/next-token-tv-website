# 操作系统与助手产品 Wiki FAQ 研究记录（os-assistants 批次）

## 范围与口径

本记录支持 `ios`、`hermes-agent`、`siri`、`hongguo`、`herdr`、`feishu`、`colaos` 七个产品实体的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。搜索量、难度、排名、点击、曝光和热度均为 **N/A**；候选词的出现不等于热门，也不构成效果承诺。正文表述遵循编辑规范"时间稳定性与表述口径"一节：历史事件写明日期，时效状态指向官方实时页面。

## 数据源说明

- 实际采到的需求线索来自 **Google Suggest（autocomplete）接口**（`suggestqueries.google.com`，`client=firefox`，`hl` 参数控制语言，地理位置未受控），采样时间 2026-09-18。联想顺序不是热度排名。
- 尝试过的 SERP 检索均未成功：Google 网页搜索返回拦截页、DuckDuckGo HTML 返回 CAPTCHA、Bing 返回不相关结果。因此没有"相关问题"（People Also Ask）类证据，相关 FAQ 标注为编辑补充。
- 事实核验以官方原始页面为主（下表"可核验入口"）；Siri 与 iOS 的历史沿革使用 Wikipedia 条目作为可靠二手来源（正文内已注明）。

## FAQ 候选与证据

| 页面 | 种子词（语言） | 实际联想候选 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| ios | `iOS 27 支持`（zh） | `ios 27 支持机型`、`ios 27 支持设备`；另采 `iOS 27`、`iOS 27 是什么`、`iOS 27 机型`（zh） | 设备兼容 | 是（支持哪些机型） | [官方 iOS 页](https://www.apple.com/os/ios/)、[更新新闻稿](https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/) |
| ios | `iOS 27 features`（en） | `ios 27 features list`、`ios 27 features and release` 等 | 功能与版本 | 是（怎么更新/版本信息） | 同上 |
| ios | 无联想 | —— | 更新方式与是否收费 | 编辑补充 | 同上 |
| siri | `Siri AI`（zh） | `siri ai 中国`、`siri ai 开启`、`siri ai使用`、`siri ai 是什么` | 语言与地区、使用 | 是（语言/内地可用性） | [Siri AI 新闻稿](https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/)、[官方 Siri 页](https://www.apple.com/siri/) |
| siri | `Siri AI`（en） | `siri ai waitlist`、`siri ai release date`、`siri ai compatible devices`、`siri ai beta`、`ios 27 siri ai compatible devices` | 设备兼容、时间 | 是（兼容设备） | 同上 |
| siri | `Siri 是什么`（zh） | `siri是什么`、`siri ai 是什么` | 定义 | 是（Siri 是什么） | 同上 |
| hongguo | `红果短剧 是什么`（zh） | `红果短剧是什么` | 定义 | 是（红果短剧是什么） | [App Store 中国区页面](https://apps.apple.com/cn/app/id6451407032) |
| hongguo | `红果短剧 免费`（zh） | `红果短剧免费吗`、`红果短剧免费看全集` | 商业模式 | 是（免费吗） | 同上 |
| hongguo | `红果短剧 抖音`（zh） | `抖音 红果短剧`；另采 `红果短剧app下载`、`红果短剧海外`、`红果短剧创作服务平台`（zh） | 归属、下载、创作者侧 | 部分（归属）；下载与创作平台未采（正文未覆盖创作服务规则） | 同上 |
| hermes-agent | `Hermes Agent`（zh） | `hermes agent是什么`、`hermes agent 官网`、`hermes agent 安装`、`hermes agent desktop/桌面版` | 定义、导航、安装 | 是（是什么、安装） | [官网](https://hermes-agent.ai/)、[GitHub](https://github.com/NousResearch/hermes-agent) |
| hermes-agent | `Hermes Agent 安装`（zh） | `hermes agent 安装 windows`、`hermes agent 安装 mac`、`hermes agent 安装失败` | 安装与平台支持 | 是（Windows 支持） | 同上 |
| hermes-agent | `Hermes Agent Nous`（en） | `hermes agent nous research`、`hermes agent install linux/windows` | 定义、安装 | 合并入安装与定义两题 | 同上 |
| hermes-agent | 无联想 | —— | 与 OpenClaw 的关系、模型选择 | 编辑补充（由节目讨论与官方迁移命令支撑） | [官方 README](https://github.com/NousResearch/hermes-agent) |
| herdr | `herdr`（en/zh） | `herdr github`、`herdr install`、`herdr terminal`、`herdr plugin`、`herdr remote` | 定义、安装 | 是（是什么、安装） | [官网](https://herdr.dev/)、[文档](https://herdr.dev/docs/) |
| herdr | `herdr vs`（en） | `herdr vs tmux`、`herdr vs zellij`、`herdr vs warp` | 比较 | 是（与 tmux 区别） | [官网](https://herdr.dev/) |
| herdr | `herdr agents`（en） | `herdr claude agents`、`herdr ai agents` | 支持的 Agent | 是（支持哪些 Agent） | [官网](https://herdr.dev/) |
| feishu | `飞书 是什么`（zh） | `飞书是什么`、`飞书是什么软件`、`飞书是什么公司的` | 定义与归属 | 是（是什么软件） | [官网](https://www.feishu.cn/) |
| feishu | `飞书`（zh） | `飞书文档`、`飞书妙记`、`飞书下载`、`飞书网页版`、`飞书云文档` | 功能导航 | 部分（妙记）；其余由正文覆盖 | [官网](https://www.feishu.cn/)、[Lark 官网](https://www.larksuite.com/) |
| feishu | `飞书 收费`（zh） | `飞书收费吗`、`飞书收费标准` | 商业模式 | 是（收费吗） | [官网](https://www.feishu.cn/) |
| feishu | `Feishu Lark`（en） | `feishu lark bytedance`、`feishu lark download`、`feishu lark login` | 归属与导航 | 是（与 Lark 关系） | [Lark 官网](https://www.larksuite.com/) |
| colaos | `ColaOS`（zh/en） | 全部混入 OPPO `coloros`（`coloros是什么`、`coloros 17` 等）；en 仅 `https colaos ai` | 歧义排除 | 定义与 ColorOS 辨析为编辑补充 | [官网](https://colaos.ai/) |
| colaos | `Cola AI 助手`（zh）、`Cola AI assistant MarsWave`（en） | 空结果 | —— | 下载/平台/免费为编辑补充 | [下载页](https://colaos.ai/download) |

要点：`ColaOS` 与 `colaos` 的联想几乎完全被 OPPO ColorOS 占据，说明裸短名检索下歧义严重；正文与 FAQ 均加了辨析，未将任何 ColaOS 问题伪装成热门词。`hongguo`、`colaos`、`herdr` 均为短名歧义场景，已在种子词中加限定后采样。

## 事实边界与核验记录

- **ios**：官方 iOS 页确认当前版本为 iOS 27，Siri AI "rolling out in English"，"Siri AI will not be initially available in the EU on iOS, iPadOS, and watchOS"，兼容性从 iPhone 11 / iPhone SE（第 2 代）到 iPhone Duo，Apple Intelligence 需 iPhone 15 Pro 或更新。新闻稿确认 iOS 27 于 2026-09-14 推送；Siri AI 初期也不在中国内地提供（仅新闻稿，官网页未写）。2007 年发布 / 2010 年更名 iOS 取自 Wikipedia iOS 条目。
- **siri**：官方页与新闻稿确认 Siri AI 的能力、语言、设备门槛（iPhone 16 系列及更新 + iPhone 15 Pro / Pro Max 等）、EU/中国内地限制、每日用量限制与 13 岁以下不可用；"custom-built in collaboration with Google and its Gemini models" 出自新闻稿，正文未展开。历史（2010 年收购、2011-10-14 随 iPhone 4S beta 推出、SRI International 起源）取自 Wikipedia Siri 条目。
- **hermes-agent**：官网自称 "open-source, self-improving AI agent"；GitHub README（NousResearch/hermes-agent）确认 MIT 许可证、六种执行后端、消息网关、`hermes model` / `hermes claw migrate`、支持 Linux/macOS/WSL2/Termux、原生 Windows 不支持。YAML 中的 `hermes-agent-org/hermes` 仓库存在且内容一致，但官网与 README 指向 NousResearch 组织，正文统一链接 NousResearch 仓库。注意：官网页面为 JS 应用，正文事实以 README 与 how-to 文档为准。
- **hongguo**：App Store 中国区页面确认应用名为"红果短剧"、销售方北京笔墨留香科技有限公司、描述称"抖音集团推出的免费看剧产品"、娱乐类，含会员订阅与应用内购（月订阅 16 元等价格未写入正文，指向商店页）。YAML 中 ithome 报道链接未核验，未在正文引用。
- **herdr**：官网确认定位（"the runtime coding agents run on"）、常驻服务器形态、22 种 Agent CLI、working/blocked/idle 状态、Agent 间 CLI/socket API、SSH 多机、Herdr Cloud "coming soon"（正文明确标注尚非常态功能）、安装脚本、Apache 2.0、Herdr, Inc.。官网自述的 star 数与安装量未写入正文。
- **feishu**：官网标题"字节跳动旗下AI工作平台"（页面正文为 JS 渲染，取标题与官方资料）；Lark 官网确认国际版由 Lark Technologies Pte. Ltd. 运营、能力列表（即时消息、Base、文档、会议、妙记、开放平台等）。Lark 页面价格（Standard 免费 20 人、Pro $12/人/月）属时效状态，未写入正文，指向官网。
- **colaos**：官网 HTML 头部结构化数据（Organization/SoftwareApplication JSON-LD）确认 ColaOS 又名 Cola、由 MarsWave 构建、`operatingSystem: "macOS, Windows"`、`offers: price 0 / "Free to start"`；下载页 meta 确认"macOS, Windows, iOS, and Android"。官网自述的 aggregateRating 与"the first OS with soul"为营销内容，未采用。YAML 品牌字段 marswave 与官网一致。

## 节目证据

引用锚点由本地逐字稿重新生成并逐一核对（2026-09-18）：

- ios：#002 `quote-4e82a638534f95a2397d`（ch05 向阳乔木）、`quote-0a034d649d6923ec63af`（ch18 歸藏）、`quote-bdead5b333a662f83c0b`（ch25 橘子）；章节 chapter-05、chapter-18、chapter-25。
- siri：#002 `quote-5f00244ba4a06fad1124`、`quote-0cd6e70adb9e9eec37c9`、`quote-5eec577ed761728d64bf`（均为 ch19 橘子）、`quote-498f7c8e15b6988ae8f7`（ch19 杨攀）；章节 chapter-19。
- hermes-agent：#001 `quote-2c157f56d0d44685bbd5`（ch15 向阳乔木）、`quote-ef96ad2caa39a9c3c681`（ch15 歸藏）、`quote-bf6243fb3300e77ecd47`（ch15 杨攀）、`quote-2c9c980d4a92d113a2e7`（ch33 歸藏）；章节 chapter-15、chapter-33。
- hongguo：#001 `quote-44958efa4a8671429878`、`quote-d3a69472cd439e9a6a7d`（ch30 歸藏）、`quote-54b23c6a793110050d08`（ch30 杨攀）；章节 chapter-30。
- herdr：#001 `quote-3a2ed4b1d2652e5ee560`、`quote-23b5fd89af3826486e6d`（ch06 歸藏）、`quote-0448d269678329000e34`（ch06 向阳乔木）；章节 chapter-06。
- feishu：#001 `quote-3c03b4241bddc51332b5`（ch04 橘子）、`quote-6da3490b335d2ae6828d`（ch15 杨攀）、`quote-9ed6965b3b5a9caaa4c7`（ch17 向阳乔木）；#002 `quote-1267667e7f5a16dfbcf3`（ch21 橘子）；章节 chapter-04、chapter-15、chapter-17、chapter-21。
- colaos：#001 `quote-b6c4393c01ec9960a865`（ch08 橘子）；#002 `quote-2834c9ad56b1e70765ef`（ch04 向阳乔木）、`quote-9f76755f7c62d7ce5229`（ch04 橘子）、`quote-40021a3531cadcb2de65`（ch13 橘子）、`quote-a83d7732c2f569dab6e9`（ch21 橘子）；章节 chapter-08、chapter-04、chapter-13、chapter-21。

colaos 的讨论均由产品方（节目参与者橘子）自述或转述，正文已明确标注"产品方自述，非独立评测"。hongguo、herdr、feishu 的引用均为参与者个人观察，与官方产品描述分开表述。

## 未采用与省略内容

- ios：#001 chapter-16 中"之前不是一直只有 iOS 吗"仅为对 Grok Bot 客户端的随口提及，无独立信息量，未引用。
- siri：橘子将 Siri 与 Apple Car、Apple Vision 并列的批评保留了转述关系，但两个项目本身的事实（人数、年限）未独立核验，仅作为其发言内容出现。
- hongguo："红果短剧创作服务平台"有联想线索，但官方创作平台入口未核验到可靠 URL，正文仅以"创作者侧规则见官方渠道"带过；App Store 的订阅价格未写入正文。
- feishu：联想中的 `飞书cli`、`飞书开放平台` 未展开为 FAQ；录音硬件的正式名称与厂商关系未核验，正文只转述节目发言。
- colaos：健康案例、免费模型策略均为产品方自述，未作为产品能力断言。
- 未核验其官方状态的条目一律未写（如 Herdr Cloud、Siri AI 付费扩容的上线时间）。

## 后续衡量

当前无发布后曝光和点击数据；若接入 Search Console，按 wiki-faq-keywords.md 的口径记录曝光、点击、平均位置与可见查询样本。ColaOS 页面建议后续用品牌词（ColaOS + MarsWave / Cola AI）观察与 ColorOS 的歧义分流情况。
