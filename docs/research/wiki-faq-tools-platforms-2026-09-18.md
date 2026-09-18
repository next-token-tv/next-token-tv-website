# 工具与平台产品 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `linux`、`trae`、`typeless`、`openrouter`、`xiaoyuzhou`、`x`、`pi` 七个产品实体的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。需求线索来自 Google Autocomplete 公开联想（`suggestqueries.google.com`，`client=firefox`，`hl=zh-CN` 与英文种子），事实核验来自官方站点、官方文档与 Wikipedia。本次没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，也不构成效果承诺；顺序不是热度排名。

歧义处理：`x`、`pi` 等短名必须带品牌修饰采样（如 `x twitter`、`x 推特`、`pi coding agent`、`pi.dev`）；裸 `trae work` 的英文联想混入 "framework" 等无关结果，予以排除；裸 `typeless` 混入 `typeless pokemon` 等噪声，只采用带 ai/语音/平台修饰的候选。

## FAQ 候选与证据

采样日期均为 2026-09-18；语言列标明采样语言。

| 页面 | 实际采样的搜索问法或变体 | 语言 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| linux | `linux是什么`、`linux是什么系统`、`linux 发行版推荐`、`linux发行版排名`、`linux内核学习`、`linux内核版本`、`what is linux`、`what is linux used for`、`linux distributions list` | zh/en | 定义、发行版选择、学习 | 是（4 题，发行版列表改为指向官方的指针，不维护列表） | [kernel.org](https://www.kernel.org/)、[docs.kernel.org](https://docs.kernel.org/) |
| trae | `trae是什么`、`trae是什么工具`、`trae ai download`、`trae ai pricing`、`trae work是什么`、`trae work官网`、`trae 字节`、`trae ai vs cursor`、`trae vs cursor 2026`、`trae 是什么模型` | zh/en | 定义、下载、价格、产品线关系 | 是（5 题）；`trae vs cursor` 比较题未采用（缺少官方对比依据） | [trae.ai](https://www.trae.ai/)、[trae.cn](https://www.trae.cn/)、[TraeWork 快速入门](https://docs.trae.cn/work_trae-work-web-and-desktop-quickstart)、[价格页](https://www.trae.ai/pricing) |
| typeless | `typeless是什么`、`typeless 语音输入`、`typeless 输入法`、`typeless mac`、`typeless download`、`typeless 价格`、`typeless pricing`、`typeless vs wispr flow` | zh/en | 定义、平台下载、价格、品类归属 | 是（4 题）；`typeless vs wispr flow` 未采用（缺少官方对比依据） | [typeless.com](https://www.typeless.com/)、[价格页](https://www.typeless.com/pricing) |
| openrouter | `openrouter是什么公司`、`openrouter是什么平台`、`openrouter api key`、`openrouter api url`、`openrouter 充值 支付宝`、`openrouter pricing`、`openrouter free models`、`openrouter stripe acquisition`、`openrouter acquired by stripe`、`openrouter pricing vs direct` | zh/en | 定义、API Key、计费、收购 | 是（5 题）；充值支付方式未单独成题（官方页未核验到支付宝等具体渠道） | [openrouter.ai](https://openrouter.ai/)、[快速入门](https://openrouter.ai/docs/quickstart)、[模型目录](https://openrouter.ai/models/)、[Wikipedia](https://en.wikipedia.org/wiki/OpenRouter) |
| xiaoyuzhou | `小宇宙播客网页版`、`小宇宙app下载`、`小宇宙主播后台`、`小宇宙播客转文字`、`小宇宙 播客排名`、`xiaoyuzhou fm`、`xiaoyuzhou podcast` | zh/en | 定义、网页版、下载、创作者上架 | 是（4 题）；`播客转文字`、`排名` 未采用（与产品 Wiki 定位不符且无官方答案页） | [xiaoyuzhoufm.com](https://www.xiaoyuzhoufm.com/)、[zh Wikipedia](https://zh.wikipedia.org/wiki/%E5%B0%8F%E5%AE%87%E5%AE%99_(%E6%92%AD%E5%AE%A2)) |
| x | `x平台是什么`、`x平台(原twitter)`、`x平台 官网`、`x 推特怎么使用`、`x 推特账号注册`、`x twitter login`、`twitter x` | zh/en | 定义与更名关系、官网、账号使用、归属 | 是（4 题）；注册/登录操作题未采用（官网流程页面未能抓取，答案只能指向 x.com） | [about.x.com](https://about.x.com/en)、[x.com](https://x.com/)、[Wikipedia: X](https://en.wikipedia.org/wiki/X_(social_network))、[Wikipedia: SpaceXAI](https://en.wikipedia.org/wiki/SpaceXAI) |
| pi | `pi coding agent 是什么`、`pi coding agent install`、`pi coding agent github`、`pi coding agent mcp`、`pi coding agent vs opencode`、`pi coding agent vs claude code`、`pi.dev docs`、`pi.dev packages` | zh/en | 定义、安装、扩展、比较 | 是（4 题）；`vs opencode`/`vs claude code` 采用为克制的能力边界题，不写优劣结论 | [pi.dev](https://pi.dev/)、[pi.dev/docs/latest](https://pi.dev/docs/latest) |

英文侧对 `x`、`pi` 的裸词采样噪声大（字母含义、股票、数学常数），全部只保留品牌修饰后的候选；中文侧 `x 推特` 联想集中在下载与注册，说明该语言需求偏安装与账号，本页以官方入口与归属沿革作答。

## 事实边界与核验来源

- linux：内核 1991 年 9 月 17 日由 Linus Torvalds 首次发布、GPLv2、kernel.org 由非营利组织 Linux Kernel Organization 运营，来自 kernel.org 与 [Wikipedia: Linux](https://en.wikipedia.org/wiki/Linux)；正文不写当前内核版本号与发行版列表。
- trae：官方中文站自述 TraeWork 为"字节跳动推出的 AI 办公平台"；trae.ai 首页列 TraeCode 与 TraeWork 两个产品；TraeWork 三模式（Work/Code/Design）、网页版与桌面端（macOS/Windows）、集成与云任务同步来自 [官方快速入门](https://docs.trae.cn/work_trae-work-web-and-desktop-quickstart)；Free/Pro/Pro+/Ultra 套餐来自 [价格页](https://www.trae.ai/pricing)，正文中价格只留指针。TraeCode 的 IDE 形态以官网下载入口与关键词（AI IDE）佐证，未核验更细的功能清单，正文不展开。
- typeless：平台（macOS/Windows/iOS/Android）、系统级调用、功能清单与隐私口径来自[官网](https://www.typeless.com/)；Free 8,000 词/周、Pro $12/月（年付）或 $30（月付）、Enterprise 定制来自[价格页](https://www.typeless.com/pricing)，FAQ 中以"截至 2026 年 9 月"锚定。
- openrouter：统一 API、无加价、`:free` 模型、base URL `https://openrouter.ai/api/v1` 来自官网与[快速入门](https://openrouter.ai/docs/quickstart)；2023 年创立、创始人 Alex Atallah 与 Louis Vichy、2026 年 8 月彭博社与 WSJ 报道 Stripe 以逾 70 亿美元收购，来自 [Wikipedia: OpenRouter](https://en.wikipedia.org/wiki/OpenRouter)，正文按"据媒体报道"表述，未写成已完成的既成事实之外的主张。
- xiaoyuzhou：即刻团队、2020 年 3 月上线、RSS 模式、2025 年头部地位（引联合早报）来自 [zh Wikipedia](https://zh.wikipedia.org/wiki/%E5%B0%8F%E5%AE%87%E5%AE%99_(%E6%92%AD%E5%AE%A2))；官网仅确认口号、主播后台与下载入口。
- x：2006 年创立与上线、2022 年 10 月 440 亿美元收购、2023 年 7 月更名、2024 年 5 月迁移 x.com、2025 年 3 月 28 日 xAI 收购（X 估值 330 亿/含债 450 亿、xAI 800 亿、合并为 X.AI Holdings）来自 [Wikipedia: X (social network)](https://en.wikipedia.org/wiki/X_(social_network))；2026 年 2 月 SpaceX 收购 xAI、后更名 SpaceXAI 来自 [Wikipedia: SpaceXAI](https://en.wikipedia.org/wiki/SpaceXAI)。about.x.com 页面抓取仅得到导航，正文事实不依赖其正文。
- pi：终端 Agent、Earendil Inc. 与贡献者、MIT、扩展机制、"Primitives, not features"（核心不内置 MCP/子代理/计划模式/权限弹窗）、15+ 供应商、会话树、SDK、安装方式来自 [pi.dev](https://pi.dev/) 与 [pi.dev/docs/latest](https://pi.dev/docs/latest)。YAML 指向 pi.dev，确认指 pi 编程 Agent 而非其他同名产品。

## 节目证据

本地两期中文逐字稿的相关章节：linux 见 [Weekly #001 chapter-12](/weekly/001/transcript#chapter-12)、[chapter-16](/weekly/001/transcript#chapter-16) 与 [Weekly #002 chapter-10](/weekly/002/transcript#chapter-10)；trae 见 [#001 chapter-15](/weekly/001/transcript#chapter-15) 与 [#002 chapter-21](/weekly/002/transcript#chapter-21)；typeless 见 [#002 chapter-25](/weekly/002/transcript#chapter-25)；openrouter 见 [#001 chapter-04](/weekly/001/transcript#chapter-04)、[chapter-08](/weekly/001/transcript#chapter-08)、[chapter-26](/weekly/001/transcript#chapter-26)、[chapter-28](/weekly/001/transcript#chapter-28)；xiaoyuzhou 见 [#002 chapter-02](/weekly/002/transcript#chapter-02)、[chapter-05](/weekly/002/transcript#chapter-05)；x 见 [#001 chapter-04](/weekly/001/transcript#chapter-04)、[chapter-07](/weekly/001/transcript#chapter-07)、[chapter-34](/weekly/001/transcript#chapter-34) 与 [#002 chapter-18](/weekly/002/transcript#chapter-18)、[chapter-26](/weekly/002/transcript#chapter-26)；pi 见 [#001 chapter-06](/weekly/001/transcript#chapter-06) 与 [#002 chapter-14](/weekly/002/transcript#chapter-14)。这些链接承载节目参与者在具体语境中的讨论、体验或转述，不是独立测评、官方背书或搜索需求证据；英文正文一律链接中文章节并标注 Chinese transcript。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；覆盖率与 CTR 只能基于实际数据计算。

## 补充说明

- `x 推特怎么使用`、`x 推特账号注册` 一类操作题与 `openrouter 充值` 支付渠道题缺少可直接核验的官方答案页，本轮未采用。
- trae 的 `trae vs cursor`、typeless 的 `typeless vs wispr flow`、pi 的 `vs opencode`/`vs claude code` 均为真实比较需求；除 pi 采用克制的能力边界题外，其余因无官方对比依据未采用。
- 英文站当前没有英文逐字稿，英文章节链接均为中文逐字稿锚点。
