# 硬件与音频品牌 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `samsung`、`plaud`、`huawei`、`garmin`、`elevenlabs`、`bambu-lab`、`xai` 七个品牌条目的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。本次没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想候选的出现不等于热门，也不构成效果承诺。

需求线索的数据源是 Google 公开搜索联想端点（`https://suggestqueries.google.com/complete/search?client=firefox&q=<seed>`，经 curl 读取返回的 JSON，原始文件留存于本机 `/tmp/faq-samples/`，未入库）。"相关问题"（People Also Ask）类线索未能采集；未采到联想支撑、但按页面完整性需要的问题标注"编辑补充"。

## 联想采样原始数据

采样日期均为 2026-09-18；`zh` 表示简体中文种子词，`en` 表示英文种子词（`hl=en` 默认返回，含中文种子词的中文联想）。

| 种子词（语言） | 返回联想（原样） |
| --- | --- |
| `samsung`（en） | samsung fold；samsung；samsung galaxy z fold 8；samsung fold 8；samsung foldable phone；samsung flip；samsung stock；samsung galaxy；samsung galaxy s26 ultra；samsung phones |
| `samsung electronics`（en） | samsung electronics stock；samsung electronics；samsung electronics stock price；samsung electronics america；samsung electronics careers；samsung electronics market cap 等 |
| `samsung foundry`（en） | samsung foundry；samsung foundry forum 2026；samsung foundry revenue；samsung foundry stock；samsung foundry competition tsmc；samsung foundry locations；samsung foundry texas 等 |
| `samsung galaxy`（en） | samsung galaxy z fold 8；samsung galaxy；samsung galaxy s26 ultra；samsung galaxy s26；samsung galaxy s25 ultra；samsung galaxy watch 等 |
| `三星官网`（zh） | 三星官网；三星官网美国；三星官网中国；三星官网登录；三星官网韩国；三星官网台湾；三星官网活动；三星官网序列号查询；三星官网新加坡 |
| `三星是什么公司`（zh） | （无联想返回） |
| `plaud`（en） | plaud；plaud ai；plaud note pro；plaud note；plaud login；plaud notepin；plaud careers；plaud web；plaud vs pocket |
| `plaud note`（en） | plaud note pro；plaud note；plaud notepin；plaud note ai voice recorder；plaud note pro review；plaud note vs note pro；plaud note pro ai note taker |
| `plaud notepin`（en） | plaud notepin；plaud notepin review；plaud notepin vs notepin s；plaud notepin ai voice recorder；plaud notepin how to use；plaud notepin s battery life |
| `plaud是什么`（zh） | plaud是什么；plaud是什么公司 |
| `plaud 官网`（zh） | plaud 官网；plaud 中国 官网；plaud ai 官网；plaud note官网；plaud 中文 官网；plaud 台湾 官网；plaud note pro 官网 |
| `huawei`（en） | huawei；huawei foldable phone；huawei phone；huawei trifold；huawei freeclip 2；huawei foldable；huawei mate xt 2；huawei pura x max；huawei earbuds；huawei pura x |
| `华为官网`（zh） | 华为官网；华为官网中国；华为官网商城；华为官网招聘；华为官网台湾；华为官网登录；华为官网序列号查询；华为官网新加坡；华为官网保修查询；华为官网注册 |
| `华为是什么公司`（zh） | 华为是什么公司 |
| `华为是什么企业`（zh） | 华为是什么企业 |
| `garmin`（en） | garmin；garmin watch；garmin connect；garmin cirqa；garmin forerunner；garmin venu 3；garmin fenix 8；garmin vivoactive 5；garmin venu 4；garmin fenix 9 |
| `garmin watch`（en） | garmin watch；garmin watches for women；garmin watches for men；garmin watch band；garmin watch vs apple watch；garmin watch comparison 等 |
| `佳明手表`（zh） | 佳明手表；佳明手表推荐；佳明手表是哪国的；佳明手表门市；佳明手表怎么样；佳明手表对比；佳明手表app；佳明手表官网；佳明手表重启；佳明手表价格 |
| `佳明 forerunner`（zh） | 佳明forerunner 255；佳明 forerunner 265；佳明forerunner 55；佳明forerunner 170；佳明forerunner；佳明forerunner 970；佳明forerunner 965 等 |
| `佳明官网`（zh） | 佳明官网 |
| `elevenlabs`（en） | elevenlabs；elevenlabs careers；elevenlabs valuation；elevenlabs api；elevenlabs pricing；elevenlabs io；elevenlabs api key；elevenlabs voices；elevenlabs cfo；elevenlabs jobs |
| `elevenlabs pricing`（en） | elevenlabs pricing；elevenlabs pricing plans；elevenlabs pricing api；elevenlabs pricing per minute；elevenlabs pricing tiers 等 |
| `elevenlabs 官网`（zh） | elevenlabs 官网；elevenlabs 官网 中文 |
| `elevenlabs 中文`（zh） | elevenlabs 中文；elevenlabs 中文 效果；elevenlabs 中文配音；elevenlabs 中文 版；elevenlabs 中文 语音；elevenlabs 中文 tts；elevenlabs 支持 中文 吗 |
| `elevenlabs umg`（en） | eleven labs umg |
| `elevenlabs是什么`（zh） | elevenlabs是什么 |
| `bambu lab`（en） | bambu labs；bambu lab a1；bambu labs p1s；bambu lab p2s；bambu labs filament；bambu lab a1 mini；bambu lab 3d printer；bambu lab x2d；bambu lab open source debate；bambu lab h2d |
| `bambu lab wiki`（en） | bambu lab wiki；bambu lab wikipedia；bambu lab wiki p1s；bambu lab wiki maintenance；bambu lab wiki tpu；bambu lab wiki network plugin 等 |
| `拓竹`（zh） | 拓竹；拓竹科技；拓竹官网；拓竹3d打印机；拓竹社区；拓竹科技招聘；拓竹p2s；拓竹makerworld；拓竹招聘；拓竹a1 |
| `拓竹官网`（zh） | 拓竹官网；拓竹官网中国；拓竹官网购买；拓竹官网招聘；拓竹官网下载；拓竹官网 运费；拓竹官网 国际版 |
| `拓竹是什么`（zh） | 拓竹是什么 |
| `xai`（en） | xai；xaivian lee；xai careers；xaira therapeutics；xai stock；xai jobs；xaira；xai logo；xai palo alto；xai founders |
| `xai grok`（en） | xai grok；xai grok build；xai grok 4.5；xai grok models；xai grok bot；xai grok api；xai grok login；xai grok api key；xai grok pricing；xai grok imagine |
| `xai grok 官网`（zh） | xai grok 官网 |
| `spacexai`（en） | spacex ai；spacex stock；spacex careers；spacexai logo；spacex jobs；spacex ipo；spacex xai palo alto；spacex revenue；spacex salary；spacexai grok |
| `xai是什么`（zh） | xai是什么公司；xai是什么；腺癌是什么；血癌是什么；血癌是什么病；血癌是什么意思；狭隘是什么意思 等 |
| `xai stock`（en） | xai stock；xai stock price；xai stock symbol；xai stock ipo；xai stock how to buy 等 |
| `grok官网`（zh） | grok 官网；grok 官网 下载；grok官网地址 |

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| samsung | `三星官网`、`三星官网中国/美国` | 导航 | 是 | [samsung.com.cn](https://www.samsung.com.cn/)、[samsung.com](https://www.samsung.com/) |
| samsung | `三星是什么公司`（无联想返回）、`samsung electronics` 联想（careers/stock） | 定义、公司背景 | 是（定义题为编辑补充，联想仅间接支撑） | [三星电子公司信息](https://www.samsung.com/us/about-us/company-info/) |
| samsung | `samsung foundry`（forum 2026、competition tsmc、locations） | 业务线 | 是 | [三星电子公司信息](https://www.samsung.com/us/about-us/company-info/)（2017 年成立代工事业部） |
| samsung | `samsung fold`、`samsung foldable phone`、`samsung galaxy` | 产品线 | 是 | [Galaxy 折叠屏官网入口](https://www.samsung.com/global/galaxy/)（samsung.com 导航） |
| plaud | `plaud 官网`、`plaud 中国 官网`、`plaud ai` | 导航 | 是 | [plaud.ai](https://www.plaud.ai/) |
| plaud | `plaud是什么公司`（zh） | 定义 | 是 | [plaud.ai](https://www.plaud.ai/)（自述 The World's No.1 AI Note-taking Brand） |
| plaud | `plaud note vs note pro`、`plaud notepin vs notepin s` | 产品线关系 | 是 | [plaud.ai 产品区](https://www.plaud.ai/)（Note / Note Pro / NotePin / NotePin S / One） |
| plaud | "Plaud 有免费转写额度吗？"（`plaud note pro subscription` 相关） | 计费 | 是（编辑归纳） | [plaud.ai 定价区](https://www.plaud.ai/)（Starter 免费 300 分钟/月） |
| huawei | `华为官网`、`华为官网商城` | 导航 | 是 | [huawei.com](https://www.huawei.com/)、[consumer.huawei.com](https://consumer.huawei.com/) |
| huawei | `华为是什么公司`、`华为是什么企业` | 定义、公司背景 | 是 | [华为公司信息](https://www.huawei.com/cn/corporate-information) |
| huawei | `huawei foldable phone`、`huawei trifold` | 产品线 | 是 | [华为终端官网](https://consumer.huawei.com/) |
| garmin | `佳明官网`、`garmin` | 导航 | 是 | [garmin.com.cn](https://www.garmin.com.cn/)、[garmin.com](https://www.garmin.com/) |
| garmin | `佳明手表是哪国的` | 公司背景 | 是 | [Garmin 佳明官方介绍](https://www.garmin.com.cn/company/about/) |
| garmin | `garmin watch vs apple watch`、`garmin watch comparison` | 比较 | 是 | [Garmin 佳明官方介绍](https://www.garmin.com.cn/company/about/)（五大领域自述） |
| garmin | `garmin forerunner` 系列、`佳明手表app`（`garmin connect`） | 产品线与软件入口 | 部分（Forerunner 为产品名，未展开；App 题编辑补充） | [Garmin 佳明官方介绍](https://www.garmin.com.cn/company/about/) |
| elevenlabs | `elevenlabs 官网`、`elevenlabs 官网 中文` | 导航 | 是 | [elevenlabs.io](https://elevenlabs.io/) |
| elevenlabs | `elevenlabs 支持 中文 吗`、`elevenlabs 中文配音` | 能力 | 是 | [elevenlabs.io](https://elevenlabs.io/)（Text to Speech in 70+ languages、Dubbing） |
| elevenlabs | `elevenlabs pricing`（plans/tiers） | 计费 | 是 | [elevenlabs.io](https://elevenlabs.io/)（免费层存在，档位见官方定价页） |
| elevenlabs | `elevenlabs api key`、`elevenlabs api` | 开发者信息 | 是 | [elevenlabs.io](https://elevenlabs.io/)（ElevenAPI、secure APIs and SDKs） |
| elevenlabs | `elevenlabs umg` | 合作事件 | 是（归属到正文讨论而非 FAQ） | [ElevenLabs 新闻页](https://elevenlabs.io/blog)（2026-09-10 UMG 协议） |
| bambu-lab | `拓竹官网`、`拓竹官网购买`、`拓竹官网 国际版` | 导航 | 是 | [bambulab.com](https://bambulab.com/) |
| bambu-lab | `拓竹是什么`、`bambu lab 3d printer` | 定义 | 是 | [Bambu Lab About Us](https://bambulab.com/en/about-us) |
| bambu-lab | `拓竹p2s`、`拓竹a1`、`bambu lab h2d`、`bambu lab x2d` | 产品线 | 是 | [Bambu Lab Wiki](https://wiki.bambulab.com/)（H2/X/P/A 系列） |
| bambu-lab | `拓竹makerworld` | 平台 | 是 | [MakerWorld](https://makerworld.com/)（官网导航 Download Premium Models；Wiki 亦列出） |
| bambu-lab | `bambu lab wiki`（maintenance、tpu） | 文档入口 | 是 | [wiki.bambulab.com](https://wiki.bambulab.com/) |
| xai | `xai是什么公司`（zh；同词联想混入"腺癌/血癌"同音词） | 定义、沿革 | 是 | [x.ai/company](https://x.ai/company)、[x.ai/news/xai-joins-spacex](https://x.ai/news/xai-joins-spacex) |
| xai | `xai grok 官网`、`grok官网`、`spacexai grok` | 导航 | 是 | [x.ai](https://x.ai/)、[grok.com](https://grok.com/) |
| xai | `xai grok bot` | 产品关系 | 是（指向产品条目） | [Grok Bot 条目](/wiki/products/grok-bot) |
| xai | `xai grok api key`、`xai grok api` | 开发者信息 | 是 | [docs.x.ai](https://docs.x.ai/) |
| xai | `xai grok 4.5`、`xai grok models` | 模型版本 | 部分（不展开版本名，指向 Grok 模型家族条目） | [Grok 条目](/wiki/products/grok) |

## 歧义处理

- xAI/xai：英文联想混入 xaira therapeutics、xaivian lee；中文联想混入"腺癌／血癌"等同音词。采样与正文只使用 `xai 是什么公司`、`xai grok` 等带品牌语境的种子。
- samsung/三星：`三星` 裸词未采样（韩文名、其他"三星"歧义），只用 `三星官网`、`三星是什么公司`、`samsung electronics`、`samsung foundry`。
- garmin/佳明：`garmin cirqa` 含义不明，未采用。
- bambu lab：`bambu` 裸词有竹属植物学名歧义，只用 `bambu lab`、`拓竹`；`bambu lab wiki` 指向官方文档站，语义清晰，采用。
- elevenlabs：未发现同名歧义。
- 公司页与产品页分工：产品使用细节（下载、安装、型号）尽量留在既有产品条目或指向官方页，品牌页只回答公司层面问题。

## 事实边界与核验来源

- Samsung：[三星电子公司信息](https://www.samsung.com/us/about-us/company-info/)（英）与[中国站公司信息](https://www.samsung.com.cn/business/about-us/company-info/)（中）载明 1969 年成立 Samsung Electronics、1984 年定名、1974 年收购 Korea Semiconductor 50% 股份进入半导体、2019 年 Galaxy Fold 开创折叠屏新品类、2017 年成立代工（Foundry）事业部、2022 年 3nm GAA 量产、2023 年发布生成式 AI 模型三星 Gauss、DX／DS 两大部门及 CEO 分工。
- Plaud：[plaud.ai](https://www.plaud.ai/) 载明自述"The World's No.1 AI Note-taking Brand"、产品 Note / Note Pro（159／189 美元）、NotePin / NotePin S（159／179 美元）、Plaud One（预购）、移动／Web／桌面应用、Starter 免费层 300 转写分钟/月与 Pro／Unlimited 订阅档。公司注册主体 Plaud Inc.；官网未载明成立年份与总部，正文不写。
- Huawei：[公司信息页](https://www.huawei.com/cn/corporate-information)（中）与英文对应页载明 1987 年创立于深圳、100% 员工私有持股、约 21.3 万员工、业务遍及 170 多个国家和地区、服务全球 30 多亿人口、ICT 基础设施与智能终端定位、业务板块（运营商网络、企业、华为云、数字能源、智能汽车解决方案）及 2025 年研发投入 1,923 亿元人民币。
- Garmin：[Garmin 佳明官方介绍](https://www.garmin.com.cn/company/about/)载明 1989 年由 Min Kao 与 Gary Burrell 创立、品牌名为两人名字组合、GPS100 起点、2003 年首支 GPS 运动手表 Forerunner、垂直整合模式、五大领域（汽车、航空、航海、户外、运动）、全球累计出货逾 2 亿台 GPS 设备、员工逾 2.3 万人、美国 Olathe（Garmin International）等全球据点。
- ElevenLabs：[elevenlabs.io](https://elevenlabs.io/) 载明 AI 语音平台定位、ElevenCreative／ElevenAgents／ElevenAPI 三平台结构、70+ 语言 TTS、语音克隆、Dubbing、Music、Scribe 转写、模型系列（Eleven Flash、Multilingual、v3）；[新闻页](https://elevenlabs.io/blog)载明 2026-09-10 "Universal Music Group and ElevenLabs announce multi-year strategic agreement"。成立时间（2022 年）、创始人（Mati Staniszewski、Piotr Dąbkowski）、伦敦总部取自 [Wikipedia: ElevenLabs](https://en.wikipedia.org/wiki/ElevenLabs)。
- Bambu Lab：[About Us](https://bambulab.com/en/about-us) 载明"consumer tech company focusing on desktop 3D printers"、X1 系列起点、深圳／上海／奥斯汀三地、使命表述；[官网](https://bambulab.com/)载明打印机型号（R1、H2D／H2C／H2S、P2S、X1C、P1S）、耗材、软件（Bambu Studio、Handy、Suite、Farm Manager）；[官方 Wiki](https://wiki.bambulab.com/)载明文档站结构（H2/X/P/A 系列、AMS、软件）。成立时间（2020 年 8 月）、前 DJI 工程师团队、创始人与深圳总部取自 [Wikipedia: Bambu Lab](https://en.wikipedia.org/wiki/Bambu_Lab)。
- xAI/SpaceXAI：[x.ai/company](https://x.ai/company) 时间线载明 2023-07-12 公司公告、2023-11-03 Announcing Grok、2023-12-07 Grok on X、2024 年 Grok-1.5／Grok-1 开源／Grok-2、2025 年 Grok 3／Grok 4、2026-01-06 Series E、2026-02-02 "xAI joins SpaceX"、Colossus 200K GPU；[x.ai/news/xai-joins-spacex](https://x.ai/news/xai-joins-spacex) 载明 2026-02-02 "SpaceX announced today that it has acquired xAI"；x.ai 页脚为 "© 2026 SpaceXAI LLC"，导航产品为 Grok 系列（Chat、Build、Imagine、Voice、Bot、Grokipedia、Grok on X）。Wikipedia 的 xAI 条目已改题为 SpaceXAI（消歧义页可见），正文未引用其细节。

## 节目证据

逐字稿为本地导入的中文原文（`src/content/imported/transcripts/`）。引用锚点为发布版段落指纹，若原文、发言人或重复段落顺序变动需重新核对。

| 页面 | 章节链接 | 段落锚点 |
| --- | --- | --- |
| samsung | /weekly/001/transcript#chapter-26（"Hugging Face 的价值，以及英伟达为何要为产业托底"） | quote-f6a7d3e4bac1a3b0c3ba（歸藏：主要全是台积电、三星代工） |
| plaud | /weekly/001/transcript#chapter-19（"Microduck 为什么一夜走红"） | quote-16dbac2d3a1f25eb76ca（杨攀硬件热点清单中提到 Plaud 发新产品） |
| huawei | /weekly/002/transcript#chapter-19（"界面标准与长期一致性为什么重要"） | quote-8c2e9603aba0f850f6f6（橘子：华为等跟随苹果折叠屏定义） |
| garmin | /weekly/002/transcript#chapter-20（"手表、录音与个人上下文"） | quote-279453b4edbe484b25b0（歸藏："佳明好像出了一个是"）；quote-a77100b22668eb6afdc0（橘子：Oura 戒指续费率也很高，供 garmin 页对照语境） |
| elevenlabs | /weekly/002/transcript#chapter-21（"健康数据与日常记录：有用与隐私的边界"） | quote-ac088b26a16e66465ab3（向阳乔木：ElevenLabs 与环球音乐合作） |
| bambu-lab | /weekly/002/transcript#chapter-28（"从代码到实物：3D 打印带来的创作空间"） | quote-8865ca2e95efa0acf0b5（歸藏：以前操作拓竹软件费劲，现在 Computer Use 直接） |
| xai | /weekly/001/transcript#chapter-16（"Grok Bot：为什么 Agent 需要一台永不下线的云电脑"）、/weekly/002/transcript#chapter-24（"临时环境与常驻电脑的区别"） | quote-b730e5f9ca546bc92abb（杨攀：Grok Bot 是未来的形态）、quote-73c44181529be6c784bc（歸藏：Grok Bot 不关机）——与 grok-bot 产品条目共用 |

因证据不足或超出品牌页范围而省略的节目内容：Garmin 无屏手表的归属在节目中本身不确定（发言人先用"好像"、且此前话题在 Google 与佳明之间摇摆），正文只作不确定性归属，不写成产品发布事实；Plaud 新品在节目中只被杨攀称为"新耳机"，正文照实归属，不据节目断言具体型号；Huawei 仅在被列举为跟随者时提及，无独立讨论。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用联想候选数量代替。

## 未决项

- Samsung 集团 1938 年创立等集团史未进正文：官方公司信息页只覆盖三星电子（1969 年起），未核验集团层面的官方来源。
- Garmin 英文官方 About 页（garmin.com/en-US/company/about-garmin/）多次抓取失败（ECONNRESET），正文来源使用官方中文介绍页；Wikipedia: Garmin 因同样原因未核验，"哪国公司"的答案仅以官方页列出的 Olathe 据点与创始事实支撑。
- xAI 与 X（社交平台）的合并传闻：x.ai/news 页面未列出 2025 年 X 相关公告，正文不写。
- `elevenlabs valuation`（Series D $11B、$500M ARR）为官方新闻稿事实，但涉及估值口径，正文与 FAQ 均未采用。
- `bambu lab open source debate`（2025 固件授权争议）联想热度存在，但属于产品策略争议，品牌页未展开；如后续扩写产品条目可回溯。
- 联想原始 JSON 留存于本机 `/tmp/faq-samples/`（临时目录，不保证长期可用）；如需入库应另存至 `docs/research/`。
