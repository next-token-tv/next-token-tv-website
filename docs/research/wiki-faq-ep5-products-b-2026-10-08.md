# 第 005 期产品 Wiki FAQ 研究记录（B 批）

## 范围与口径

本记录支持第 005 期提及的 6 个产品实体的 Wiki 正文：`playstation-5`、`photoshop`、`artificial-analysis`、`ai-passport`、`m5stack`、`magicpath`。研究日期为 2026-10-08，面向中文和英文读者。

数据源仅使用 Google Autocomplete（`suggestqueries.google.com`，`client=firefox`，分别以 `hl=en` 与 `hl=zh-CN` 采样）和 Bing Autosuggest（`api.bing.com/osjson.aspx`）。没有 Search Console、关键词工具或任何搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想候选的出现不等于热门，顺序不是排名。

## FAQ 候选与证据

采样日期均为 2026-10-08。`ai-passport` 在裸词下被"AI 证件照"类联想占据（`ai passport photo maker` 等），属于同名歧义，仅采用带 `folotoy` 修饰的候选；`magicpath` 采用带 `ai` 修饰的候选以避开"magic path"其他含义；`artificial-analysis` 裸词联想基本都指向该平台（`intelligence index`、`leaderboard` 等），无需额外消歧。

| 页面 | 种子词（语言） | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 官方答案入口 |
| --- | --- | --- | --- | --- | --- |
| playstation-5 | `playstation 5`、`ps5`、`ps5 pro`、`ps5 值得买吗`（en/zh） | `playstation 5 release date`、`playstation 5 digital edition`、`ps5 值得买吗`、`ps5 价格`、`ps5 pro vs ps5`、`ps5 pro price` | 版本、发售时间、购买决策 | 是 | [官方 PS5 页面](https://www.playstation.com/en-us/ps5/) |
| photoshop | `photoshop`、`photoshop ai`、`adobe photoshop`、`photoshop 下载`、`photoshop 免费`（en/zh） | `photoshop free`、`photoshop download`、`photoshop ai generative fill`、`photoshop alternatives`、`photoshop 下载 mac`、`photoshop 免费 试用` | 下载、试用与订阅、AI 功能 | 是 | [Adobe 官方产品页](https://www.adobe.com/products/photoshop.html/) |
| artificial-analysis | `artificial analysis`、`artificial analysis ai`（en） | `artificial analysis intelligence index`、`artificial analysis leaderboard`、`artificial analysis benchmark`、`artificial analysis ai model comparison` | 平台定义、指标口径、模型比较 | 是 | [官网](https://artificialanalysis.ai/)、[方法论](https://artificialanalysis.ai/methodology/) |
| ai-passport | `ai passport`、`folotoy`（en） | `folotoy ai passport`、`folotoy github`；裸词 `ai passport photo maker` 等为证件照歧义，排除 | 产品定义、玩法开发、固件安装 | 基本为编辑补充（联想仅确认品牌关联词，无成型的需求问法） | [官方站点](https://ai-passport.folotoy.cn/) |
| m5stack | `m5stack`、`m5stack esp32`、`m5stack 教程`（en/zh） | `m5stack cardputer`、`m5stack cores3`、`m5stack esp32-s3`、`m5stack 教程`（仅一条）、`m5stack core2` | 产品线、教程与开发方式 | 是（编辑归纳"和 ESP32 的关系""用什么编程"） | [官网](https://m5stack.com/)、[文档](https://docs.m5stack.com/) |
| magicpath | `magicpath`、`magic path ai`（en） | `magicpath ai pricing`、`magic path ai chrome extension`、`magicpath mcp`、`magicpath vs paper`、`magic path ai review` | 定义、定价、插件能力 | 是（定价仅给官方指针；chrome extension / mcp 未获官方证实，不采用） | [官网](https://www.magicpath.ai/)、[定价页](https://www.magicpath.ai/pricing) |

说明：

- `photoshop 免费` 类候选的官方答案入口只有"限期试用 + 订阅"的官方页面；正文不承诺试用天数等易变细节。
- `magicpath ai pricing` 需求明确，但官方定价页为客户端渲染，本次未能读取到套餐内容，答案只指向官方定价页，未复述任何价格。
- `ps5 值得买吗` 是真实问法，但答案属于购买建议；FAQ 改写为版本构成与查询入口的稳定事实，不做推荐性判断。
- 中文种子 `人工智能分析指数` 与该平台无对应关系，未采用。

## 事实核验与来源

- **playstation-5**：2019 年 4 月公布为 PS4 后继；2020-11-12 首发澳/日/韩/北美/新西兰，2020-11-19 全球；首发标准版（UHD 蓝光光驱）与数字版；Slim 机型 2023 年 11 月起取代原始机型；PS5 Pro 2024-09-10 公布（更快 GPU、改进光线追踪、AI 升级技术），2024-11-07 发售。来源：[Wikipedia: PlayStation 5](https://en.wikipedia.org/wiki/PlayStation_5)（其引用 PlayStation.Blog 2024-09-10 官方公告）；官方页 [playstation.com/en-us/ps5](https://www.playstation.com/en-us/ps5/)。官方页与 PlayStation.Blog 直连多次超时，Pro 公布日期经由 Wikipedia 引注交叉确认。
- **photoshop**：Thomas Knoll 与 John Knoll 1987 年起开发，1988 年授权 Adobe；1.0 于 1990 年 2 月发售；Windows 首见于 2.5（1992-11）；2003-10 起并入 Creative Suite 品牌；2013-06 Creative Cloud 发布后转订阅制（CS6 为最后永久授权版本）；iPad 版 2019 年起；2023 年引入 Firefly 驱动的 Generative Fill / Generative Expand。来源：[Wikipedia: Adobe Photoshop](https://en.wikipedia.org/wiki/Adobe_Photoshop)；官方产品页 [adobe.com/products/photoshop](https://www.adobe.com/products/photoshop.html)（本次抓取仅能确认免费试用、订阅入口与在线版存在）。
- **artificial-analysis**：官方方法论文档原文称其对 "AI models, inference API endpoints and systems" 做 "intelligence, quality, performance and price benchmarking"；指标含 TTFT、输出速度（o200k_base Token 口径）、混合价格（约 7:2:1 的缓存/输入/输出）、Cost per Task；发布 Artificial Analysis Intelligence Index。来源：[artificialanalysis.ai](https://artificialanalysis.ai/)、[方法论](https://artificialanalysis.ai/methodology/)。
- **ai-passport**：官方站点称"开放式可穿戴 AI 智能体""一张与 AI Agent 一起开造世界的通行证"；透明外壳，含屏幕、主板、NFC、麦克风、扬声器、电池；默认身份卡形态（微信小程序经蓝牙同步个人信息）+ 内置小游戏；玩法社区固件经网页刷机工具安装并覆盖设备全部内容；恢复出厂需 Chrome/Edge + Type-C；官方教程覆盖 Codex、Claude Code、TRAE 等 AI 编程 Agent 开发玩法。来源：[ai-passport.folotoy.cn](https://ai-passport.folotoy.cn/)。站点标价未写入正文。
- **m5stack**：官网自称 "Modular Open Source IoT Development Platform" / "Modular IoT Dev Kits for Rapid Prototyping"；5×5 cm 模块化系统，ESP32 为核心，含 microSD、USB-C、扩展连接器；产品线 Core/Stick/Atom/Cardputer/Stamp/Unit；软件 UiFlow1/2、AiFlow-Web/Desktop、Arduino、ESP-IDF、StackFlow、M5Burner。来源：[m5stack.com](https://m5stack.com/)、[docs.m5stack.com](https://docs.m5stack.com/)。
- **magicpath**：官方站点静态内容仅含标题 "The shared workspace for humans and agents"、描述 "Create, refine, and explore with AI" 与关键词 "design, ai, magicpath, coding"；`/docs`、`/about` 为 404，`/pricing` 返回 200 但为客户端渲染、读不到套餐。正文定位据此官方信息与实体 YAML 摘要撰写，未添加未经证实的产品功能断言。

## 节目证据

全部来自第 005 期中文逐字稿（`/weekly/005/transcript`），锚点由 `src/data/transcript-paragraph-anchors.ts` 同算法脚本计算：

- playstation-5：`#quote-38591eacb9a93f4e6e36`（chapter-11，歸藏，AnyPS5 说法）、`#quote-2074cccafd5605a4b8fa`（chapter-11，歸藏，血源复刻印象）。
- photoshop：`#quote-988cd091bc21c151732f`（chapter-10，杨攀，引入）、`#quote-25c567790cb0229a9782`（chapter-10，橘子，转述 Adobe CEO 轶事）、`#quote-d3bf04b58b26786e32ba`（chapter-17，歸藏，PS 快捷键肌肉记忆）。
- artificial-analysis：`#quote-101917ed149a988beca1`、`#quote-bb5fad610c4853d809c5`、`#quote-26a8d0c77ddcfe099641`（均 chapter-20，杨攀/歸藏，AA Index 排名讨论）。
- ai-passport：`#quote-7583cb8e9108b5a4dcd5`、`#quote-28f84d46f0b2017b7204`（chapter-15，杨攀/橘子）。
- m5stack：`#quote-a7989c59e165750403f9`、`#quote-b78e87424d126fabbeca`、`#quote-1b3c1b62e943e12869f0`（chapter-15，歸藏/杨攀）。
- magicpath：`#quote-08ab8524e1fdfb38ccf5`、`#quote-69bba307fb28a9f0c949`（chapter-14）、`#quote-254d930a8a294dc228ef`、`#quote-8bef4b9d3f8a34c4f954`（chapter-18，橘子/杨攀）。

章节原名：chapter-10 "Photoshop、重写软件与 GPL 讨论"；chapter-11 "游戏反编译、Mod 与商业模式"；chapter-14 "生活助理、生产力 Agent 与插件生态"；chapter-15 "ModRetro、AI Passport 与 ESP32 改造"；chapter-17 "小米蓝牙遥控器做语音输入"；chapter-18 "从 Descript 到软件成为 Agent 插件"；chapter-20 "开源模型与 AI 意识的讨论"。

事实边界：AnyPS5、血源复刻进度、MagicPath 周增 50 万美金 ARR、Mistral 模型 AA 排名等均为节目参与者转述或个人印象，正文已按"未见官方渠道印证"口径标注，未作为事实断言；chapter-11 中杨攀"复刻《金庸群侠传》"实验未写入正文（与 PS5 实体无直接承载关系）。

## 未知项与限制

- 官方 PlayStation.Blog 文章 URL 与 artificialanalysis.ai 首页直连在本次环境中多次超时，历史日期改以 Wikipedia 引注核验；如需官方一手链接，可后续补充 PlayStation.Blog 2024-09-10 公告原文。
- MagicPath 官方站点可核验信息极少；插件、MCP、Chrome 扩展等搜索联想词均未获官方证实，正文未采用。
- AI Passport 未在联想中形成成型问法，其 FAQ 为编辑补充，答案全部锚定官方站点可见内容。
- M5Stack 公司背景（成立年份、所在地）未获官方页面证实，正文未写。
