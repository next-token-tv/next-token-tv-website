# 新品牌 Wiki FAQ 研究记录（2026-09-21 批次）

## 范围与口径

本记录支持 `all-in`、`amd`、`cxmt`、`figure`、`li-auto`、`quiver-ai`、`saic-motor`、`stepfun`、`typesafe-ai`、`yizhi-yanhua` 十个品牌条目的 Wiki 正文（中英文各一篇）。研究日期为 2026-09-21，面向中文和英文读者。本次没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想候选的出现不等于热门，也不构成效果承诺。

需求线索的数据源为 Google 公开搜索联想端点（`https://suggestqueries.google.com/complete/search?client=firefox&q=<seed>`，经页面抓取工具读取返回的 JSON）。"相关问题"（People Also Ask）类线索未能采集；未采到联想支撑、但按页面完整性需要的问题在下表标注"编辑补充"。

## 联想采样原始数据

采样日期均为 2026-09-21；`zh` 表示简体中文种子词，`en` 表示英文种子词。

| 种子词（语言） | 返回联想（原样） |
| --- | --- |
| `all-in podcast`（en） | all-in podcast；all-in podcast controversy；all-in podcast hosts；all-in podcast criticism；all-in podcast transcript；all-in podcast - youtube；all-in podcast latest episode；all-in podcast episodes；all-in podcast x；all-in podcast trump |
| `all in 播客`（zh） | all in 播客（仅返回原词） |
| `amd官网`（zh） | amd官网；amd 官方驱动；amd 官网下载；amd 官网下载最新驱动 |
| `cxmt`（en） | cxmt；cxmt stock；cxmt ipo；cxmt stock price；cxmt memory；cxmt ipo date；cxmt ddr5；cxmt apple；cxmt ram；cxmt market cap |
| `长鑫存储`（zh） | 长鑫存储；长鑫存储上市；长鑫存储什么时候上市；长鑫存储股票；长鑫存储上市时间；长鑫存储 股价；长鑫存储招募；长鑫存储 stock；长鑫存储 hbm；长鑫存储ipo |
| `figure ai`（en） | figure ai；figure ai careers；figure ai stock；figure ai valuation；figure ai san jose；figure ai robot；figure ai jobs；figure ai ceo；figure ai location；figure ai san francisco |
| `理想汽车`（zh） | 理想汽车；理想汽车招聘；理想汽车校招；理想汽车校园招聘；理想汽车商城；理想汽车股票；理想汽车英文；理想汽车价格；理想汽车股价；理想汽车官网 |
| `理想汽车官网`（zh） | 理想汽车官网（仅返回原词） |
| `quiver ai`（en） | quiver ai；quiver ai app；quiver ai svg；quiver ai reddit；quiver ai api；quiver ai arrow；quiver ai review；quiver ai vector；quiver ai funding；quiver ai logo |
| `上汽集团`（zh） | 上汽集团；上汽集团校招；上汽集团招聘；上汽集团股票；上汽集团logo；上汽集团股价；上汽集团旗下品牌；上汽集团产销快报；上汽集团是国企吗；上汽集团台湾 |
| `stepfun`（en） | stepfun；stepfun ai；stepfun 3.7；stepfun 3.7 flash；stepfun model；stepfun step 3.7 flash；stepfun 3.5；stepfun career；stepfunctions；stepfun step 3.5 flash |
| `阶跃星辰`（zh，Google 归一化为"阶跃星尘"） | 阶跃星尘；阶跃星尘招聘；阶跃星尘创始人；阶跃星尘校园招聘；阶跃星尘怎么样；阶跃星尘开放平台；阶跃星尘大模型；阶跃星尘 模型；阶跃星尘 融资；阶跃星尘 印奇 |
| `typesafe ai`（en） | typesafe ai；typesafe ai funding；typesafe ai careers；typesafe ai crunchbase；typesafe ai interview；typesafe ai valuation；typesafe ai office；typesafe ai inc；typesafe ai company；typesafe ai linkedin |
| `jev model`（en） | jev kendrit model kya h；jev kendrit model；jev mouse model；jev mandal model；gk40 battery model name；is jev a word；bm41 battery model name |
| `一支烟花`（zh） | （无联想返回） |

未采样裸词 `amd`、`figure`、`all-in` 等歧义词，均加品牌修饰；`jev model` 联想全部与 TypeSafe AI 无关（印地语词汇、电池型号等），佐证 Jev 单独采样歧义大，品牌页以 `typesafe ai` 种子为准。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| all-in | `all-in podcast hosts` | 主持人 | 是 | [allin.com](https://allin.com/) |
| all-in | `all-in podcast episodes`、`all in 播客`（zh，无额外联想） | 收听入口 | 是 | [allin.com/episodes](https://allin.com/episodes) |
| all-in | All-In Summit（官方站 `/summit` 路径，联想未直接出现） | 活动关系 | 编辑补充 | [allin.com/summit](https://allin.com/summit) |
| all-in | "是什么语言的节目？" | 定义 | 编辑补充 | [allin.com](https://allin.com/) |
| amd | `amd官网`、`amd 官方驱动`、`amd 官网下载` | 导航、驱动下载 | 是 | [amd.com](https://www.amd.com/)、[驱动支持页](https://www.amd.com/en/support.html) |
| amd | "AMD 是什么公司？"（对照 `figure ai`、`cxmt` 类定义问法） | 定义、公司背景 | 编辑补充 | [AMD 官方页](https://www.amd.com/en/corporate.html)、[Wikipedia: AMD](https://en.wikipedia.org/wiki/AMD) |
| amd | Ryzen/EPYC/Radeon/Instinct 产品关系 | 产品线 | 编辑补充 | [AMD 官方页](https://www.amd.com/en/corporate.html) |
| amd | AMD 和 Intel 的关系 | 比较 | 编辑补充 | [Wikipedia: AMD](https://en.wikipedia.org/wiki/AMD) |
| cxmt | `长鑫存储是什么公司`（定义问法，对照 `长鑫存储` 联想组） | 定义 | 编辑补充 | [cxmt.com](https://www.cxmt.com/) |
| cxmt | `长鑫存储官网`（导航类，同组联想） | 导航 | 编辑补充 | [cxmt.com](https://www.cxmt.com/) |
| cxmt | `长鑫存储上市`、`长鑫存储什么时候上市`、`长鑫存储股票`、`cxmt ipo` | 上市状态 | 是（官网代码 688825；股价指向行情平台） | [cxmt.com](https://www.cxmt.com/) |
| cxmt | "长鑫存储做什么产品？"（`cxmt ddr5`、`cxmt memory`、`长鑫存储 hbm` 相关） | 产品线 | 是（DRAM 部分；hbm/NAND 无官方佐证不答） | [cxmt.com 产品页](https://www.cxmt.com/) |
| figure | `figure ai`、`figure ai robot` | 定义 | 是 | [figure.ai/company](https://www.figure.ai/company) |
| figure | `figure ai careers`、`figure ai jobs`（改答"官网在哪"，招聘入口并入） | 导航 | 是（以官网入口回答） | [figure.ai](https://www.figure.ai/) |
| figure | `figure ai stock`、`figure ai valuation` | 证券、估值 | 否（私有公司，无官方实时来源；估值仅按日期写入正文史实） | [Wikipedia: Figure AI](https://en.wikipedia.org/wiki/Figure_AI) |
| figure | `figure ai san jose`、`figure ai location`、`figure ai ceo` | 公司背景 | 是（并入定义题） | [Wikipedia: Figure AI](https://en.wikipedia.org/wiki/Figure_AI) |
| li-auto | `理想汽车官网`、`理想汽车` | 导航 | 是 | [lixiang.com](https://www.lixiang.com/) |
| li-auto | "理想汽车是什么公司？" | 定义、创始人 | 是 | [Wikipedia: Li Auto](https://en.wikipedia.org/wiki/Li_Auto) |
| li-auto | `理想汽车股票`、`理想汽车股价` | 上市信息 | 是（上市史实 + 指向行情平台） | [Wikipedia: Li Auto](https://en.wikipedia.org/wiki/Li_Auto) |
| li-auto | L 系列与 MEGA 关系（`理想汽车价格`、`理想汽车商城` 相关意图） | 产品线 | 编辑补充 | [lixiang.com](https://www.lixiang.com/) |
| quiver-ai | `quiver ai`、`quiver ai svg`、`quiver ai vector` | 定义 | 是 | [quiver.ai](https://quiver.ai/) |
| quiver-ai | `quiver ai api` | 开发者入口 | 是 | [quiver.ai](https://quiver.ai/) |
| quiver-ai | `quiver ai arrow` | 产品关系 | 是 | [quiver.ai](https://quiver.ai/) |
| quiver-ai | 免费试用（官网 `sk_test_` 沙箱说明，联想 `quiver ai review` 相关意图） | 计费入口 | 编辑补充 | [quiver.ai](https://quiver.ai/) |
| saic-motor | `上汽集团旗下品牌` | 品牌列表 | 是 | [官网公司简介](https://www.saicmotor.com/chinese/gsgk/gsjs/index.shtml) |
| saic-motor | `上汽集团`、导航 | 导航 | 是 | [saicmotor.com](https://www.saicmotor.com/) |
| saic-motor | `上汽集团是国企吗` | 公司性质 | 否（官网简介与可核验来源均未说明控股性质，不回答） | — |
| saic-motor | `上汽集团股票`、`上汽集团股价` | 上市信息 | 编辑补充（并入定义题：600104、2011 年整体上市） | [官网公司简介](https://www.saicmotor.com/chinese/gsgk/gsjs/index.shtml) |
| saic-motor | 世界 500 强（官网简介事实，联想未直接出现） | 公司背景 | 编辑补充 | [官网公司简介](https://www.saicmotor.com/chinese/gsgk/gsjs/index.shtml) |
| stepfun | `阶跃星辰`（归一化为"阶跃星尘"）定义问法 | 定义 | 是 | [stepfun.com](https://www.stepfun.com/)、[Wikipedia: StepFun](https://en.wikipedia.org/wiki/StepFun) |
| stepfun | `阶跃星尘开放平台`、`stepfun ai` | 开发者入口 | 是 | [platform.stepfun.com](https://platform.stepfun.com/) |
| stepfun | `阶跃星尘创始人` | 公司背景 | 是 | [Wikipedia: StepFun](https://en.wikipedia.org/wiki/StepFun) |
| stepfun | Step-Audio 与公司关系（`stepfun model`、`阶跃星尘大模型` 相关意图） | 产品关系 | 是 | [Step-Audio 条目](/wiki/products/step-audio)、[官方博客](https://static.stepfun.com/blog/stepaudio3/realtime/) |
| typesafe-ai | `typesafe ai`、`typesafe ai company` | 定义 | 是 | [官方公告](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| typesafe-ai | System One 概念解释 | 概念 | 编辑补充 | [官方公告](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| typesafe-ai | Jev 与公司关系 | 产品关系 | 是 | [官方公告](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| typesafe-ai | Jev 价格 | 计费 | 是 | [官方公告](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| typesafe-ai | `typesafe ai funding`、`typesafe ai valuation`、`typesafe ai crunchbase` | 融资、估值 | 否（无官方来源，不回答） | — |
| yizhi-yanhua | `一支烟花`（无联想返回） | 全部 | 均为编辑补充 | [小宇宙播客页](https://www.xiaoyuzhoufm.com/podcast/658cea5d10888b10f7670b0e) |

未采用但有记录的线索：`figure ai stock`、`figure ai valuation`（私有公司证券与估值，无官方实时来源）；`typesafe ai funding/valuation/crunchbase`（同上）；`长鑫存储 hbm`、`长鑫存储ipo`/`cxmt ipo` 的具体时间表（无官方来源，正文与 FAQ 均不写）；`上汽集团是国企吗`（控股性质无可核验官方来源）；`stepfunctions`（AWS 服务，同名歧义排除）；`figure ai san francisco`（与 san jose 联想冲突，采用维基百科圣何塞口径）。

## 歧义处理

- all-in：裸词 `all-in` 有俗语、书名与其他节目含义，采样加 `podcast`/`播客` 修饰；英文联想 `all-in podcast trump`、`controversy` 属节目热点与争议话题，本批不做事实性展开。
- amd：采样词均为 `amd官网` 等，避免与指令集 x86、股权等无关语境混淆。
- figure：裸词 `figure` 有动词与图表含义，采样加 `ai`。
- stepfun/阶跃星辰：Google 将"阶跃星辰"归一化为同音的"阶跃星尘"返回联想；`stepfunctions` 为 AWS 服务，已排除。
- jev：`jev model` 联想与 TypeSafe AI 无关（印地语、电池型号），Jev 单独采样不可用；品牌页以 `typesafe ai` 为种子。Jev 产品细节归 [Jev 条目]（另一批次撰写），本批品牌页只讲关系。
- saic-motor：未采裸词 `saic`（有 SAIC 等缩写歧义）。
- 一支烟花：无联想返回，FAQ 全部标注编辑补充。

## 事实边界与核验来源

- all-in：[官方首页](https://allin.com/)载明四位主持人、话题范围、All-In Summit 与 Meetup、各收听平台入口。
- amd：创立（1969-05-01，Jerry Sanders 等）、总部（圣克拉拉）、产品品牌（Ryzen/EPYC/Radeon/Instinct）、ATI 收购（2006）、GlobalFoundries 分拆（2009）、Zen/Ryzen（2017）、苏姿丰 2014 年任 CEO，取自 [Wikipedia: AMD](https://en.wikipedia.org/wiki/AMD)；官网 amd.com 及驱动支持页多次抓取超时，正文仅作官方入口链接，历史事实均标注维基百科来源。
- cxmt：[官网](https://www.cxmt.com/)载明 2016 年创立、合肥总部、DRAM 定位、产品线（LPDDR6/DDR5/LPDDR5-5X/LPDDR4X）、主体名"长鑫科技集团股份有限公司"与代码 688825。
- figure：[官网公司页](https://www.figure.ai/company)载明三代机器人定位；[Helix 2.5 新闻](https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization)（2026-09-17）载明 30 个湾区家庭、三类任务零样本与 35 亿美元算力承诺（Nscale 合作）；创立（2022，Brett Adcock，圣何塞）、融资与合作史实（2024-02 6.75 亿美元、OpenAI 合作结束、宝马 2024-01）取自 [Wikipedia: Figure AI](https://en.wikipedia.org/wiki/Figure_AI)。
- li-auto：创立（2015，李想）、北京总部、常州基地、车型时间线（Li ONE 2019、L9 2022-03、L8/L7 2022-09、MEGA 2023-11、i8 2025-02、i6 2025-09）、纳斯达克 2020-07（LI）取自 [Wikipedia: Li Auto](https://en.wikipedia.org/wiki/Li_Auto)；在售车型 L7/L8/L9/MEGA 见[官网](https://www.lixiang.com/)。维基百科摘要中"SEHK (2015)"的年份明显与纳斯达克上市时间矛盾，正文采用"其后也在香港交易所上市"且不写年份。
- quiver-ai：[官网](https://quiver.ai/)载明定位、Arrow 2（2026-09-07 发布）与 Arrow 2 Telos、API 端点、SDK/CLI/MCP、`sk_test_` 沙箱、Rive/Linearity/Timbal/Raspberry AI 合作标注。公司创立时间、创始人无官方来源，不写。
- saic-motor：[官网公司简介](https://www.saicmotor.com/chinese/gsgk/gsjs/index.shtml)载明六大板块、600104、2011 年整体上市、自有与合资品牌清单、2026-07《财富》世界500强第 125 位（第 22 次上榜）、170 多个国家及地区。控股性质（是否国企）官网未说明，英文维基百科多次连接失败，不写。
- stepfun：创立（2023-04-06，上海）、创始人（姜大昕、朱亦博、焦斌星，前微软）、Step-2（2024-07）、与吉利开源 Step-Audio（2025-02）、Step 3（2025-07）、Step 3.5 Flash（2026-02，Apache 2.0）取自 [Wikipedia: StepFun](https://en.wikipedia.org/wiki/StepFun)；[开放平台](https://platform.stepfun.com/)载明一个 Key 覆盖多模态、OpenAI 兼容接口、AI Studio、StepAudio 3 家族（ASR/Realtime/Gen/TTS/Music）。
- typesafe-ai：[官方公告](https://typesafe.ai/blog/introducing-system-one-models-and-jev)载明创始人 Diogo Almeida（前 OpenAI）、约两年隐身、System One 模型定义、RLCD、Jev 定价（输入 $0.042/MTok、输出免费）、waitlist 与 docs/console 入口；公告自带"schema 匹配而非实测"的免责声明，正文如实转述。
- yizhi-yanhua：[小宇宙播客页](https://www.xiaoyuzhoufm.com/podcast/658cea5d10888b10f7670b0e)载明 2023 年创立、40+ 群组、主播署名、公众号名称、内容形态；订阅数等随时变化的数据不写入正文。

## 节目证据

逐字稿为本地导入的中文原文（`src/content/imported/transcripts/next-token-weekly--003.zh-Hans.json`）。三期检索结果：001、002 两期均无这十个实体的 entity-link 或原文提及；全部提及集中在 Weekly #003。`quiver-ai` 与 `yizhi-yanhua` 在三期逐字稿中均无提及，正文省略"节目中的讨论"章节。段落锚点由发布版段落指纹生成（发言人 ID + 归一化原文），原文或发言人变动后需重新核对。

| 页面 | 章节链接 | 段落锚点 |
| --- | --- | --- |
| all-in | /weekly/003/transcript#chapter-12 | quote-beb2c5083e938a67f78e（ch-12，guizang） |
| amd | /weekly/003/transcript#chapter-16 | quote-77dc4758c25d3791e15d（ch-16，yangpan） |
| cxmt | /weekly/003/transcript#chapter-15 | quote-66d1e7f2eb2259e23cbb（ch-15，yangpan） |
| figure | /weekly/003/transcript#chapter-13、#chapter-14 | quote-df52af1cc466b145a221（ch-13，orange）；quote-b90ae9a54b67a67f92e5（ch-14，guizang） |
| li-auto | /weekly/003/transcript#chapter-16 | quote-664ec596e236d1bf796b（ch-16，orange） |
| saic-motor | /weekly/003/transcript#chapter-16 | quote-6e6cea646d2d717a1cf4（ch-16，guizang）；quote-20c9c1dc8737b46c4007（ch-16，xiangyang-qiaomu） |
| stepfun | /weekly/003/transcript#chapter-12 | quote-12e140d159c4f3ce1815（ch-12，guizang） |
| typesafe-ai | /weekly/003/transcript#chapter-03、#chapter-08 | quote-222f069c8d5fd45540e5（ch-03，guizang）；quote-a6157775ea73bd497666（ch-08，yangpan） |
| quiver-ai | —（无节目提及，章节省略） | — |
| yizhi-yanhua | —（无节目提及，章节省略） | — |

因证据不足而只作归属、不进正文事实的内容：杨攀称 AMD"开始用 Fable 写自己的整个驱动套件"（主理人转述，无 AMD 官方来源，仅作节目观点归属）；杨攀转述"长鑫要搞 NAND 闪存"（无官方来源，仅作节目转述归属）；归藏在 All-In 活动上"给黄仁勋打电话"的片段描述（逐字稿"穿的"一词转写不明，不指名具体人物，仅描述节目提及该片段）；归藏提到豆包座舱助手"先跟荣威家越 07 合作"（车型名转写存疑，正文只写"上汽旗下品牌参与合作"层次）；向陽喬木提到的"Brad 强"（人物指称不明，仅作原文归属）；guizang 在 ch-12 称"之前跟 OpenAI 合作的机器人公司"指 Figure（合作已结束，正文按维基百科口径说明关系）。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用联想候选数量代替。

## 未决项

- `amd.com` 官方页多次抓取超时，品牌历史事实以英文维基百科为来源；官方页仅作入口链接。若后续能核验 amd.com 公司介绍页，可补充自述口径。
- 英文版 Wikipedia 的 SAIC Motor 条目多次连接失败（ECONNRESET），"上汽集团是国企吗"这一真实联想问题未能回答，留待有可核验来源后补充。
- `长鑫存储 hbm`、`长鑫存储ipo`、`figure ai stock`、`typesafe ai funding` 等联想均为高需求线索，但当前无官方来源支撑，未写入正文；后续有官方信息时可扩写。
- Jev、Step-Audio、Helix 产品的详细功能与使用问题归各自产品条目（另一批次撰写），本批品牌页仅讲公司与产品关系并互链。
- 一支烟花社区无任何搜索联想返回，四个 FAQ 均为编辑补充，仅以官方播客页作答。
