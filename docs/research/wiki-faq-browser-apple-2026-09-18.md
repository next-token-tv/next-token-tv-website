# 浏览器与 Apple 产品 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `codebuddy`、`chrome`、`cherry-studio`、`bloome`、`autoglm`、`apple-vision-pro`、`apple-podcasts` 和 `apple-car` 的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。需求线索来自 **Google Suggest（autocomplete）接口**（`suggestqueries.google.com`，`client=firefox`，`hl=zh-CN` 与 `hl=en` 两路采样，地理位置未受控），采样时间 2026-09-18。尝试过的 SERP 网页检索均未成功：Google 网页搜索返回拦截页、DuckDuckGo HTML/Lite 返回 CAPTCHA、Bing 返回不相关结果。因此没有 People Also Ask 类证据；没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想顺序不是热度排名。

原始联想数据要点（未另存 JSON，仅保留采用与弃用结论；采样词见下表）：

- 弃用的歧义结果：裸 `bloome` 混入 bloomease、Bloom Energy、bloom filter 等含义；裸 `apple car` 几乎全被 apple card / apple care / apple carplay 挤占，只保留 `apple car 取消`（zh）与 `apple car project`（en）两条有效线索；`autoglm` 混入汽车护理品牌 autoglym。
- 有效线索：codebuddy 的官网/下载/CLI 安装/IDE 邀请码/"codebuddy 和 workbuddy 区别"；cherry studio 的 GitHub/MCP 配置/安卓；autoglm 的 GitHub/部署/"autoglm 输入法"；vision pro 的价格/上市时间/M5；apple podcast 的免费与否/上架收费/Connect；chrome 的下载（区分平台）与 Gemini 开启。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| codebuddy | `codebuddy 腾讯`、`codebuddy 官网`、`codebuddy 下载`、`codebuddy cli 安装`、`codebuddy ide 是 什么`、`codebuddy 和 workbuddy 区别`、`codebuddy ide invitation code`（en） | 导航、归属、形态区别、安装 | 是（归属、IDE/CLI 区别、CLI 安装、与 WorkBuddy 区别） | [codebuddy.ai](https://www.codebuddy.ai/)、[IDE 介绍文档](https://www.codebuddy.ai/docs/ide/Introduction)、[CLI overview](https://www.codebuddy.ai/docs/cli/overview) |
| chrome | `chrome 下载 windows/mac/安卓`、`chrome gemini 开启`、`chrome gemini 侧边栏`、`chrome gemini nano`、`google chrome 官网` | 导航、内置 AI、下载 | 是（下载、Chromium 区别、Gemini Nano、更新周期） | [google.com/chrome](https://www.google.com/chrome/)、[Prompt API 文档](https://developer.chrome.com/docs/ai/prompt-api)、[chromium.org](https://www.chromium.org/) |
| cherry-studio | `cherry studio 是 什么`、`cherry studio github`、`cherry studio mcp 配置`、`cherry studio 安卓`、`cherry studio 网页 版` | 定义、下载、MCP、平台 | 是（是什么、模型、许可与收费、移动端、MCP） | [cherry-ai.com](https://www.cherry-ai.com/)、[GitHub: CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)、[docs.cherry-ai.com](https://docs.cherry-ai.com/) |
| bloome | `bloome ai`、`bloome ai agents`、`bloome app`（裸词大量歧义，弃用） | 定义、平台、模型 | 是（是什么、平台、模型与 Agent、计费说明；后两条标注编辑补充） | [bloome.im/bloome-introduction](https://bloome.im/bloome-introduction/)、[bloome.im](https://bloome.im/) |
| autoglm | `autoglm github`、`autoglm 是什么`、`open autoglm 部署`、`autoglm 输入法`、`autoglm-phone-9b` | 定义、开源部署、相关产品 | 是（是什么、开源许可、支持的设备、模型下载） | [GitHub: zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM)、[arXiv:2411.00820](https://arxiv.org/abs/2411.00820) |
| apple-vision-pro | `apple vision pro 价格`、`apple vision pro 上市 时间`、`apple vision pro 是 什么`、`apple vision pro m5`、`apple vision pro price`（en） | 定义、价格、发售时间、现行版本 | 是（发布与发售时间、价格、系统、应用兼容） | [Apple 新闻稿 2023-06-05](https://www.apple.com/newsroom/2023/06/introducing-apple-vision-pro/)、[Apple 新闻稿 2024-01-08](https://www.apple.com/newsroom/2024/01/apple-vision-pro-available-in-the-us-on-february-2/)、[官方产品页](https://www.apple.com/apple-vision-pro/) |
| apple-podcasts | `apple podcast 是什么`、`apple podcast 是免费的吗`、`apple podcast 上架 要 钱 吗`、`apple podcasts connect`、`apple 播客 安卓` | 定义、计费、创作者上架、跨平台 | 是（是什么、免费与否、安卓、创作者上架） | [apple.com/apple-podcasts](https://www.apple.com/apple-podcasts/)、[podcasts.apple.com](https://podcasts.apple.com/)、[Apple Podcasts Connect](https://podcasters.apple.com/) |
| apple-car | `apple car 取消`、`apple car project titan`、`apple car project cancelled`（en） | 项目状态、取消事实 | 是（是否取消、原因、代号、现行相关产品） | [路透社 2024-02-27](https://www.reuters.com/technology/apple-cancels-electric-car-project-source-says-2024-02-27/)、[Wikipedia: Apple car project](https://en.wikipedia.org/wiki/Apple_car) |

未采用的线索：`codebuddy ide 邀请码`（无法核验邀请码机制的现行状态，不写）；`apple vision pro 2 / m5 二手`（交易与版本传闻不写）；`cherry studio killers / alternative`（第三方评测不作为事实来源）。

## 事实边界与核验记录

- **codebuddy**：官网（JS 应用）页面标题为 "Tencent Cloud Code Assistant CodeBuddy – AI Code Editor"；中文入口 copilot.tencent.com 标题"腾讯云代码助手 CodeBuddy - AI 时代的智能编程伙伴"。官方文档（VitePress 静态内容，经 `download.codebuddy.ai` 内容 chunk 核验）确认两种产品形态：CodeBuddy IDE（"Conversation as Programming"，自然语言生成 PRD、草图转设计稿、内置 Figma 设计转代码、实时补全、多文件生成、内联对话）与 CodeBuddy Code（CLI：自然语言驱动、Shell/文件/网络操作、任务编排、DevOps 全链路，文档含 MCP、IDE 集成、GitLab CI/CD、Dev Container）。中文插件文档包含代码补全、代码解释、代码评审、单元测试、内联对话、RAG 知识库、自定义智能体、MCP Server、Craft 智能体，以及 Visual Studio 2022、Xcode、微信小程序开发 IDE 的接入章节。未核验邀请码机制与价格，正文不写。
- **chrome**：官网确认 Windows/Mac/iPhone/iPad/Android 支持、Beta/Dev/Canary、每四周更新、内置 Gemini in Chrome 与 AI Mode、"Auto browse" 限美国 Google AI Ultra/Pro 订阅者（时效状态，正文只留指针）。开发者文档确认 Prompt API 使用 Gemini Nano，模型首次使用时单独下载、本地运行、使用时不向 Google 或第三方发送数据。2008 年 9 月首发 Windows、Chromium 开源关系、Blink 引擎、ChromeOS 组件地位取自 Wikipedia Google Chrome 条目（可靠二手来源，正文仅用稳定事实）。未核验 Chrome 当前具体版本号，不写。
- **cherry-studio**：GitHub README 确认 Windows/macOS/Linux 桌面客户端、多模型接入（OpenAI/Gemini/Anthropic、网页服务、Ollama/LM Studio 本地模型）、300+ 预配置助手、多模型同对话、文档/图片/Office/PDF 处理、WebDAV 备份、MCP 支持、AGPL-3.0 社区版与企业私有部署版；移动端（Android/iOS）列在路线图。Star 数等易变数字不写入正文。
- **bloome**：官方介绍页（bloome.im/bloome-introduction）确认产品定位为"AI 原生群聊"（人与多 Agent 同群聊、共享上下文、任务分配、Agent 互查）、多模型对比（页面列出 Claude、ChatGPT、DeepSeek 等）、编码 Agent 集成（Claude Code、Codex、Gemini CLI、OpenCode）、平台 macOS/Windows/iOS/Android/网页。页面未展示统一定价（仅有推荐返利 $10 计算额度），正文与 FAQ 如实说明。页面上列出的具体第三方模型版本号不转抄。
- **autoglm**：GitHub README（zai-org/Open-AutoGLM）确认 Apache-2.0、AutoGLM-Phone-9B 与 Multilingual 模型（Hugging Face/ModelScope）、架构同 GLM-4.1V-9B-Thinking、ADB/HDC/WebDriverAgent 三种设备通道、50+ Android 应用与 60+ 鸿蒙应用、动作类型与 Take_over 人工接管、敏感操作确认；README 引用 arXiv 2024 论文（已核验 [arXiv:2411.00820](https://arxiv.org/abs/2411.00820)）。README 提到智谱输入法的语音指令能力，正文只作一句带过。AutoGLM Rumination 未在 README 出现，不写。
- **apple-vision-pro**：2023-06-05 新闻稿确认发布、定位（Apple 第一台空间计算机）、visionOS、眼/手/语音输入、双芯片设计、美国起售价 $3,499（页面原文含 "3,499"）；2024-01-08 新闻稿确认 1 月 19 日预购、2 月 2 日美国发售、App Store 上线时 100 万+ 兼容 iOS/iPadOS 应用。官方产品页当前展示 M5 芯片版本，正文不作"当前旗舰"类断言，只留官方页指针。
- **apple-podcasts**：官方页面确认收听功能（视频播客、文字稿按段落跳转、Enhance Dialogue、倍速、CarPlay、频道与 Top Charts、跨设备同步、高级内容解锁）。Wikipedia Apple Podcasts 条目确认 2005 年 6 月 iTunes 4.9 加入播客功能、2021 年 6 月推出频道付费订阅，以及 Windows/网页/Alexa 等覆盖（可靠二手来源，正文仅用稳定事实）。Apple Podcasts Connect 入口 podcasters.apple.com 可访问（HTTP 200）。
- **apple-car**：按已取消项目写作。Wikipedia Apple car project 条目（2026-09-18 访问）确认：项目约 2014 年至 2024 年、代号 Project Titan、Apple 从未公开确认、2024 年 2 月管理层决定终止并转向生成式 AI。路透社报道 URL（YAML 来源，2024-02-27）返回 401 无法直读正文，但日期与标题与 Wikipedia 转述一致，作为主要报道来源列出。正文不写任何在售/即将发布表述；"10 年 2,000 人"只作为节目中参与者的转述并标注口径未核对。现行相关产品只提 CarPlay（apple.com/ios/carplay/ 已核验可访问）。

## 节目证据

本地两期中文逐字稿中的直接提及（均先读原文后写）：

- `autoglm`：[Weekly #001 quote-47121f247d1a66b31225](/weekly/001/transcript#quote-47121f247d1a66b31225)，chapter-04"Computer Use 正在怎样改变 Vibe Coding 的验收"，杨攀。
- `bloome`：[Weekly #001 quote-ea7d2743251f0c744635](/weekly/001/transcript#quote-ea7d2743251f0c744635)，chapter-16"Grok Bot：为什么 Agent 需要一台永不下线的云电脑"，向阳乔木。
- `chrome`：[Weekly #001 quote-e0c08b1b4dafc9684b32](/weekly/001/transcript#quote-e0c08b1b4dafc9684b32) 与 [quote-43d3eda34becb91eefa2](/weekly/001/transcript#quote-43d3eda34becb91eefa2)，chapter-21"本地模型进入浏览器和机器人"，杨攀（歸藏、橘子有对比评论）。
- `apple-podcasts`：[Weekly #002 quote-b5e05844e49beeb8d62b](/weekly/002/transcript#quote-b5e05844e49beeb8d62b)，chapter-05"好模型与便宜模型，Agent 能否自动完成路由"，杨攀。
- `cherry-studio`：[Weekly #002 quote-c13afae3d14869fd480e](/weekly/002/transcript#quote-c13afae3d14869fd480e)，chapter-14"Agent API：还需要自己维护一套 Harness 吗"，杨攀提问、歸藏回答。
- `apple-car`、`apple-vision-pro`：[Weekly #002 quote-5f00244ba4a06fad1124](/weekly/002/transcript#quote-5f00244ba4a06fad1124)，chapter-19"界面标准与长期一致性为什么重要"，橘子。
- `codebuddy`：[Weekly #002 quote-9482dab44286a6da7f20](/weekly/002/transcript#quote-9482dab44286a6da7f20)，chapter-21"健康数据与日常记录：有用与隐私的边界"快速更新环节，杨攀。

这些链接承载节目参与者在具体语境中的观察、回忆或评价，不是独立测评、官方背书或搜索需求证据。英文正文链接中文章节并标注 Chinese transcript，不生成不存在的 /en/weekly 链接。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算。
