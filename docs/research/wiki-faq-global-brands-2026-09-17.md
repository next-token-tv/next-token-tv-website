# 全球品牌 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `openai`、`apple`、`google`、`anthropic` 四个品牌条目的 Wiki 正文。研究日期为 2026-09-17，面向中文和英文读者。本次没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想候选的出现不等于热门，也不构成效果承诺。

需求线索的唯一数据源是 Google 公开搜索联想端点（`https://suggestqueries.google.com/complete/search?client=firefox&q=<seed>`，经页面抓取工具读取返回的 JSON）。本批任务环境没有独立的 WebSearch 服务，因此"相关问题"（People Also Ask）类线索未能采集；未采到联想支撑、但按页面完整性需要的问题在下表标注"编辑补充"。

## 联想采样原始数据

采样日期均为 2026-09-17；`zh` 表示简体中文种子词，`en` 表示英文种子词。

| 种子词（语言） | 返回联想（原样） |
| --- | --- |
| `openai`（en） | openai；openai careers；openai ipo；openai math problem；openai navier stokes；openai astra；openai hugging face incident；openai news；openai api；openai jobs |
| `openai 官网`（zh） | openai 官网；openai 官网 入口；openai 官网 codex；openai官网中文版；openai官网登录；openai 官网 下载；openai 官网 崩溃 |
| `openai是什么`（zh） | openai是什么；openai是什么公司；openai是什么意思 |
| `openai codex`（en） | openai codex；openai codex cli；openai codex pricing；openai codex micro；openai codex app；openai codex download；openai codex usage；openai codex github；openai codex plans；openai codex keyboard |
| `anthropic`（en） | anthropic；anthropic ipo；anthropic careers；anthropic news；anthropic ceo；anthropic stock；anthropic jobs；anthropic ipo date；anthropic researcher quits；anthropic employee |
| `anthropic api`（en） | anthropic api key；anthropic api；anthropic api pricing；anthropic api console；anthropic api costs；anthropic api login；anthropic api status；anthropic api platform；anthropic api doc；anthropic api usage |
| `anthropic claude`（en） | anthropic claude；anthropic claude corps；anthropic claude max usage ceiling；anthropic claude unauthorized system access；anthropic claude code；anthropic claude ai；anthropic claude certification；anthropic claude courses；anthropic claude corps fellowship；anthropic claude sub |
| `anthropic官网`（zh） | anthropic 官网 |
| `anthropic是什么`（zh） | anthropic是什么公司；anthropic是什么；anthropic 是什么样的公司；anthropic是什么企业 |
| `苹果官网`（zh） | 苹果官网；苹果官网美国；苹果官网登录入口；苹果官网中国；苹果官网id注册；苹果官网香港；苹果官网礼品卡；苹果官网购买礼品卡；苹果官网序列号查询；苹果官网注册 |
| `苹果公司`（zh） | 苹果公司；苹果公司总部；苹果公司官网；苹果公司创始人；苹果公司市值；苹果公司股票；苹果公司地址；苹果公司股价；苹果公司财报；苹果公司总部地址 |
| `apple inc`（en） | apple inc；apple inc address；apple increase prices；apple inc phone number；apple inc corporate phone number；apple inc stock；apple inc address cupertino；apple inc corporate address；apple inc address and phone number；apple inc cupertino |
| `apple company`（en） | apple company；apple company value；apple company address；apple company valuation；apple company size；apple company phone number；apple company tour；apple company news today；apple company benefits；apple company emoji |
| `谷歌`（zh） | 谷歌翻译；谷歌邮箱；谷歌学术；谷歌地图；谷歌；谷歌邮箱登录；谷歌翻译器；谷歌地球；谷歌邮箱注册；谷歌商店 |
| `google官网`（zh） | google 官网；google 官网 下载；google官网入口；google 官网 进入；google 官网 首页；google 官网 职 缺；google 官网 买 手机；google 官网 信用卡；google 官网 信用卡 回馈；google官网注册入口 |
| `google是什么公司`（zh） | google是什么公司 |
| `google company`（en） | google company；google company phone number；google company address；google company values；google company news；google company name；google company website；google company location；google company holidays 2026；google company culture and values |

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| OpenAI | `openai 官网`、`openai 官网 入口`、`openai官网登录` | 导航 | 是 | [openai.com](https://openai.com/)、[chatgpt.com](https://chatgpt.com/)、[developers.openai.com](https://developers.openai.com/) |
| OpenAI | `openai是什么公司`（zh）、`openai`（en，联想含 careers/jobs/ipo） | 定义、公司背景 | 是 | [OpenAI About](https://openai.com/about/) |
| OpenAI | `openai api`、`anthropic api`（对照） | 开发者信息 | 是 | [OpenAI API 平台概览](https://platform.openai.com/docs/overview) |
| OpenAI | `openai codex` 系列（cli/pricing/app/download） | 产品关系 | 是（产品关系题） | [Codex 开发者文档](https://developers.openai.com/codex/) |
| OpenAI | "ChatGPT 和 OpenAI 是什么关系？" | 产品关系 | 编辑补充 | [OpenAI About](https://openai.com/about/) |
| Apple | `苹果官网`、`苹果官网登录入口`、`google 官网`（对照） | 导航 | 是 | [apple.com](https://www.apple.com/)、[Apple Newsroom](https://www.apple.com/newsroom/) |
| Apple | `苹果公司创始人`、`苹果公司总部`、`苹果公司总部地址`、`apple inc address cupertino` | 公司沿革、地址 | 是 | [Wikipedia: Apple Inc.](https://en.wikipedia.org/wiki/Apple_Inc.) |
| Apple | "苹果有哪些主要产品？" | 产品线概览 | 编辑补充 | [iPhone Duo 新闻稿公司介绍](https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/)、[Apple Developer 平台列表](https://developer.apple.com/) |
| Apple | "苹果开发者资源在哪里？"（受 `apple inc` 联想启发，无直接联想） | 开发者信息 | 编辑补充 | [Apple Developer](https://developer.apple.com/) |
| Google | `google官网`、`google官网入口`、`谷歌` | 导航 | 是 | [google.com](https://www.google.com/)、[about.google](https://about.google/) |
| Google | `google是什么公司`、`google company name`（部分支撑） | 定义、与 Alphabet 关系 | 是（Alphabet 关系题为编辑补充） | [Alphabet 创始人信](https://abc.xyz/) |
| Google | "Google 有哪些主要产品？" | 产品线概览 | 编辑补充 | [Google 产品目录](https://about.google/products/) |
| Google | "Google 的 AI 产品和开发者入口是什么？" | AI 与开发者信息 | 编辑补充 | [gemini.google.com](https://gemini.google.com/)、[Google AI for Developers](https://ai.google.dev/gemini-api/docs/models)、[Google AI Studio](https://aistudio.google.com/) |
| Google | "Google 的使命是什么？"（`google company values` 相关） | 定义 | 编辑补充 | [How Search Works：Our approach to Search](https://www.google.com/search/howsearchworks/mission/) |
| Anthropic | `anthropic官网` | 导航 | 是 | [anthropic.com](https://www.anthropic.com/)、[claude.ai](https://claude.ai/)、[docs.anthropic.com](https://docs.anthropic.com/) |
| Anthropic | `anthropic是什么`、`anthropic是什么公司`、`anthropic 是什么样的公司` | 定义、公司背景 | 是 | [Anthropic Company](https://www.anthropic.com/company) |
| Anthropic | `anthropic api key`、`anthropic api console`、`anthropic api doc` | 开发者信息 | 是 | [Claude API 概览](https://platform.claude.com/docs/en/api/overview)、[模型概览](https://docs.anthropic.com/en/docs/about-claude/models/overview) |
| Anthropic | "Anthropic 和 Claude 是什么关系？"（`anthropic claude`、`anthropic claude code` 相关） | 产品关系 | 是 | [Anthropic Company](https://www.anthropic.com/company) |
| Anthropic | "Anthropic 和 OpenAI 有什么区别？" | 比较 | 编辑补充 | 两家官方自述：[Anthropic Company](https://www.anthropic.com/company)、[OpenAI About](https://openai.com/about/) |

未采用但有记录的线索：`openai ipo`、`anthropic ipo`、`anthropic ipo date`、`anthropic stock`、`苹果公司市值/股价/财报`——均涉及未经核验的公司财务与证券信息，无官方来源支撑，不进入正文或 FAQ。`openai astra`、`openai hugging face incident` 属节目相关热点，已在"节目中的讨论"中以归属方式覆盖对应事件，不做成 FAQ。

## 歧义处理

- Apple/苹果：不采裸词 `apple`（水果含义），只用 `apple inc`、`apple company`、`苹果公司`、`苹果官网` 采样；返回结果未见水果歧义混入。
- Google/谷歌：不采裸词 `google`（有动词含义与 Alphabet 之外的用法），采样结果均为 Google 产品，无需排除。
- OpenAI、Anthropic：未发现同名歧义；`anthropic claude corps` 等条目含义不明，未采用。
- 公司页与产品页分工：产品使用细节（下载、安装、模型名）留在既有产品条目，品牌页只回答公司层面问题。

## 事实边界与核验来源

- OpenAI：[官方 About](https://openai.com/about/) 载明"AI research and deployment company"自述、"ensure that artificial general intelligence benefits all of humanity"使命、OpenAI Foundation 治理 OpenAI Group（PBC）及 ChatGPT/Codex/API Platform/Open Models/Apps SDK 产品线；成立时间（2015-12）与总部（旧金山）取自 [Wikipedia: OpenAI](https://en.wikipedia.org/wiki/OpenAI)。官网列出的 GPT-6 等具体版本号未写入品牌页，版本归属 GPT 模型家族条目。
- Apple：官方新闻稿公司介绍（[iPhone Duo](https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/)、[Watch Series 12](https://www.apple.com/newsroom/2026/09/introducing-apple-watch-series-12-with-the-all-new-health-sensing-system/)）载明 1984 Macintosh 起点、六大硬件线与服务平台及服务清单；iPhone Duo（2026-09-09 发布、10-23 开售、美国 1,999 美元起）与 Watch Series 12（全天每 5 秒测心率、09-18 上市、399 美元起）为新闻稿正文事实；Siri AI 更新（2026-09-14）见于[存档页标题](https://www.apple.com/newsroom/archive/)；1976 年创立、三位创始人、库比蒂诺总部取自 [Wikipedia: Apple Inc.](https://en.wikipedia.org/wiki/Apple_Inc.)。
- Google：[Alphabet 创始人信](https://abc.xyz/)载明 2015 年重组、Google 成为全资子公司；[产品目录](https://about.google/products/)载明产品分类；使命原句取自 [How Search Works](https://www.google.com/search/howsearchworks/mission/)；[Google DeepMind](https://deepmind.google/) 自述"build AI responsibly to benefit humanity"。
- Anthropic：[官方 Company 页](https://www.anthropic.com/company)载明"AI safety and research company"自述、PBC 形态、Mythos/Fable/Opus/Sonnet/Haiku 模型家族、Claude Code/Cowork/Chrome/Microsoft 365 产品形态、AWS/Vertex AI/Microsoft Foundry 云合作及董事会与 Long-Term Benefit Trust；发布日期（Fable 5.1 与 Mythos 5.1 为 2026-09-01、Opus 5 为 2026-07-24）见 [Newsroom](https://www.anthropic.com/news)；成立时间（2021-01）、创始人、旧金山总部取自 [Wikipedia: Anthropic](https://en.wikipedia.org/wiki/Anthropic)。

## 节目证据

逐字稿为本地导入的中文原文（`src/content/imported/transcripts/`）。引用锚点为发布版段落指纹，若原文、发言人或重复段落顺序变动需重新核对。

| 页面 | 章节链接 | 段落锚点 |
| --- | --- | --- |
| openai | /weekly/001/transcript#chapter-34、/weekly/002/transcript#chapter-14 | quote-37d4edd56fc77789ace4（001 ch-03）、quote-1d82772db1d7aed5b833（002 ch-05）、quote-43ef12de9319f179b344（001 ch-04）、quote-633e4970e30a8309498b（002 ch-05）、quote-ec2c96e7bdcac0347c43（001 ch-34）、quote-7e9741b54ad0d0a00216（001 ch-36）、quote-c2ec5c0e2173c6bbb066（002 ch-14）、quote-aa01ef206e5d60d944ed（002 ch-15） |
| apple | /weekly/002/transcript#chapter-18、#chapter-19、#chapter-20 | quote-16dbac2d3a1f25eb76ca（001 ch-19）、quote-547259c9b42d05cf6779（002 ch-18）、quote-8c2e9603aba0f850f6f6（002 ch-19）、quote-5f00244ba4a06fad1124（002 ch-19）、quote-498f7c8e15b6988ae8f7（002 ch-19）、quote-2e57cbfc9981fb364621（002 ch-20）、quote-9b3928005d2ca0ef7f54（002 ch-11） |
| google | /weekly/001/transcript#chapter-09、/weekly/002/transcript#chapter-27 | quote-a05a9b1877aa0566a687（001 ch-02）、quote-b6c4393c01ec9960a865（001 ch-08）、quote-dd9f2c0ad1a7f102574a（001 ch-09）、quote-5713c0426b49e0995705（001 ch-09）、quote-786b372dedeb5000dbc1（001 ch-09）、quote-d56c7aa9c8f5e9b929ab（001 ch-17）、quote-8b5e05b7007ce3799f69（002 ch-13）、quote-349c5d083cc2c2cac20a（002 ch-27） |
| anthropic | /weekly/001/transcript#chapter-25、/weekly/002/transcript#chapter-27 | quote-5713c0426b49e0995705（001 ch-09，与 google 页共用）、quote-9b7dc40742dcb047202b（001 ch-25）、quote-67b737ffdbc277c6cf4e（001 ch-25）、quote-041481ffa5caf66f905d（002 ch-14）、quote-187fd0124b30c8c736f8（002 ch-06）、quote-aa01ef206e5d60d944ed（002 ch-15，与 openai 页共用）、quote-9594acfbbce4d94ccf93（002 ch-27）、quote-c24256bf7d350088420f（002 ch-27） |

因证据不足而整段省略或仅作归属的节目内容：OpenAI 采购 Mac Mini 的台数（两期说法 3 万/2 万不一，仅作传闻归属）；Anthropic ARR 数字与就业报告推演的具体百分比（嘉宾转述，未找到可核验官方正文）；Anthropic 员工辞职事件（仅归属）；Apple Car、Apple Vision、Siri 的成败评价（嘉宾观点）；Gemini 日活"几百万"（转述量级）；002 期提到的某无屏手表"一年订阅费……Google 好像是那个"（对象不明，省略）；001 期 X 用户猜测 GLM 为谷歌模型（对另一实体的猜测，省略）。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用联想候选数量代替。

## 未决项

- `https://www.anthropic.com/economic-futures`（Newsroom 页脚链接）多次抓取失败（ECONNRESET），未能核实就业/经济报告的官方页面；相关节目内容只作归属处理。
- `https://www.apple.com/company-info/` 抓取失败；Apple 总部与沿革改用 Wikipedia 并在正文标注。
- 英文逐字稿不存在，英文正文均链接中文原文并明确标注 Chinese transcript。
- `openai astra` 联想显示该词热度，但 Astra 属 GPT 模型家族语境，本批未展开；若后续扩写 `gpt` 条目应回溯该线索。
