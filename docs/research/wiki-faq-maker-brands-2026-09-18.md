# Maker 品牌批次 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `folotoy`、`evoken`、`espressif`、`dji`、`cyber-zen`、`cognition`、`bytedance`、`alibaba` 八个品牌条目的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。本次没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想候选的出现不等于热门，也不构成效果承诺。

需求线索的唯一数据源是 Google 公开搜索联想端点（`https://suggestqueries.google.com/complete/search?client=firefox&q=<seed>`，curl 读取返回的 JSON）。本次没有独立的 WebSearch 服务，"相关问题"（People Also Ask）类线索未能采集；未采到联想支撑、但按页面完整性需要的问题标注"编辑补充"。

## 联想采样原始数据

采样日期均为 2026-09-18；`zh` 表示简体中文种子词，`en` 表示英文种子词。

| 种子词（语言） | 返回联想（原样） |
| --- | --- |
| `folotoy`（en） | folotoy；folotoy ai；folotoy kumma；folotoy ai teddy；folotoy ai toy；folotoy ai smart companion；folotoy reddit；folotoy company；folotoy products；folotoy ai toy ai cactus |
| `folotoy是什么`（zh） | 无返回 |
| `evoken`（en） | evoken；evoken band；evoken metallum；evoken dbl；evoken tour；evoken merch；evoken meaning；evoken bandcamp；evoken antithesis of light；evoken mendacium |
| `evoken ai`（en） | evoken ai（仅一条） |
| `演语科技`（zh） | 演语科技；演语科技(evoken)；演语科技官网；演语科技 evoken；演语科技招聘；演语科技 创始人；演语科技 lovart；演语科技 ipo；演语科技创始人陈冕；演语科技 arr |
| `陈冕`（zh） | 陈冕；陈冕 lovart；陈冕 liblib；陈冕履历；陈冕 演语科技；陈冕 晚点；陈冕 滑冰 |
| `lovart`（en） | lovart；lovart ai；lovart login；lovart pricing；lovart ai login；losartan；lovart ai free；lovart logo；lovart app；lovart ai pricing |
| `liblib`（en） | liblibai；liblibrary；liblib tv；liblib app；liblib na lugar in english；liblib art；liblibai ai；leblebi；liblib ai english；liblib api |
| `libtv`（en） | libtv；libtv ai；libtv skill；libtv cli；libtv github；libtv agent；libtv api；led tv price；live tv logo；libtv-labs/libtv-skills |
| `espressif`（en） | espressif；espressif inc；espressif device；espressif device on wifi；espressif inc devices；espressif on wifi；espressif esp32；espressif on my network；espressif systems；espressif on my wifi |
| `乐鑫`（zh） | 乐鑫；乐鑫科技；乐鑫官网；乐鑫科技招聘；乐鑫esp32；乐鑫科技校招；乐鑫官方；乐鑫esp32s3；乐鑫文档；乐鑫招聘 |
| `乐鑫科技`（zh） | 乐鑫科技；乐鑫科技招聘；乐鑫科技校招；乐鑫科技股票；乐鑫科技校园招聘；乐鑫科技 股价；乐鑫科技怎么样；乐鑫科技官网；乐鑫科技 股吧；乐鑫科技espressif online |
| `dji`（en） | djia；dji；dji osmo pocket 3；dji osmo pocket 4；djibouti；dji drones；dji mini 5 pro；djia futures；dji osmo；djimon hounsou |
| `dji osmo pocket 4`（en） | dji osmo pocket 4；dji osmo pocket 4p；dji osmo pocket 4 pro；dji osmo pocket 4 release date；dji osmo pocket 4p release date；dji osmo pocket 4 pro release date；dji osmo pocket 4 creator combo；dji osmo pocket 4 canada；dji osmo pocket 4 vs pocket 3；dji osmo pocket 4p canada |
| `大疆`（zh） | 大疆；大疆官网；大疆pocket 4；大疆pocket 3；大疆招聘；大疆商城；大疆无人机；大疆pocket 4 pro；大疆pocket 4p；大疆校招 |
| `大疆官网`（zh） | 大疆官网；大疆官网中国；大疆官网招聘；大疆官网入口；大疆官网下载中心；大疆官方lut；大疆官网 分期；dji 大疆官网 |
| `大疆 pocket 4`（zh） | 大疆 pocket 4；大疆pocket 4p；大疆 pocket 4 pro；大疆 pocket 4 价格；大疆 pocket 4 vs 3；大疆 pocket 4防水吗；大疆 pocket 4 香港；大疆 pocket 4 ptt；大疆 pocket 4跟3的差别；大疆 pocket 4 insta360 |
| `赛博禅心`（zh） | 无返回 |
| `大聪明`（zh） | 大聪明卡；大聪明信用卡；大聪明；大聪明 美卡；大聪明史高；大聪明是什么意思；大聪明表情包；大聪明 歌词；大聪明 lí gō；大聪明阿哈利姆 |
| `大聪明 AI`（zh） | 无返回 |
| `agi bar 上海`（zh） | agi bar 上海（仅一条，且该查询返回非 UTF-8 编码，解析部分失败） |
| `cognition ai`（en） | cognition ai；cognition ai coding valuation；cognition ai careers；cognition ai stock；cognition ai jobs；cognition ai market cap；cognition ai valuation；cognition ai interview process；cognition ai levels fyi；cognition ai funding |
| `cognition devin`（en） | cognition devin；cognition devin ai；cognition devin desktop；cognition devin pricing；cognition devin windsurf；cognition devin logo；cognition devin reddit；cognition devin vs claude code；cognition devin careers；cognition devin valuation |
| `cognition labs`（en） | cognition labs；cognition labs devin；cognition labs stock；cognition labs valuation；cognition labs careers；cognition labs founders；cognition labs reddit；cognition labs revenue；cognition labs salary；cognition labs ceo |
| `bytedance`（en） | bytedance；bytedance careers；bytedance jobs；bytedance stock；bytedance valuation；bytedance seattle；bytedance bellevue；bytedance seed；bytedance ipo；bytedance seedance |
| `字节跳动`（zh） | 字节跳动；字节跳动招聘；字节跳动校招；字节跳动校园招聘；字节跳动claudecode中文使用手册；字节跳动实习；字节跳动上市了吗；字节跳动社招；字节跳动官网；字节跳动logo |
| `doubao`（en） | doubao；doubao ai；doubao app；doubao ai english；doubao ai apk；doubao ai video generator；doubao phone；doubao apk；doubao in english；doubao app download |
| `豆包`（zh） | 豆包；豆包ai；豆包网页版；豆包输入法；豆包生图；豆包电脑版；豆包官网；豆包app；豆包api；豆包语音输入法 |
| `剪映`（zh） | 剪映；剪映下载；剪映国际版；剪映专业版；剪映网页版；剪映电脑版；剪映app；剪映官方下载；剪映官网；剪映电脑版下载 |
| `飞书`（zh） | 飞书；飞书开放平台；飞书文档；飞书cli；飞书开发者后台；飞书网页版；飞书下载；飞书妙记；飞书开发者平台；飞书云文档 |
| `alibaba group`（en） | alibaba group；alibaba group holding ltd；alibaba group careers；alibaba group stock；alibaba group holding；alibaba group holding ltd stock；alibaba group holding stock；alibaba group stock price；alibaba group us；alibaba group holding ltd stock price |
| `阿里巴巴`（zh） | 阿里巴巴；阿里巴巴国际站；阿里巴巴矢量图标库；阿里巴巴普惠体；阿里巴巴矢量；阿里巴巴招聘；阿里巴巴图标库；阿里巴巴股票；阿里巴巴校园招聘；阿里巴巴矢量图 |
| `通义千问`（zh） | 通义千问；通义千问网页版；通义千问官网；通义千问 api；通义千问 api key；通义千问国际版；通义千问app下载；通义千问语音转文字；通义千问海外版；通 义 千 问 官方 |
| `qwen alibaba`（en） | qwen alibaba；qwen alibaba cloud；qwen alibaba ai；qwen alibaba model；qwen alibaba app；qwen alibaba api；qwen alibaba ai assistant；qwen alibaba coding plan；qwen alibaba api key；qwen alibaba pricing |
| `阿里云`（zh） | 阿里云；阿里云百炼；阿里云盘；阿里云邮箱；阿里云服务器；阿里云域名；阿里云百炼大模型服务平台；阿里云国际；阿里云百炼平台；阿里云服务 |

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| folotoy | `folotoy company`、`folotoy ai toy`、`folotoy products` | 定义、产品线 | 是 | [folotoy.com](https://folotoy.com/) |
| folotoy | `folotoy ai smart companion`、`folotoy reddit`（变体支撑"怎么玩"） | 使用方式 | 是（玩法与自定义，编辑归纳） | [folotoy.com](https://folotoy.com/) 官网功能介绍 |
| folotoy | `folotoy kumma`（对应 Teddy-Kumma 款） | 产品线 | 是（FAQ 列出各款玩具） | [folotoy.com](https://folotoy.com/) |
| folotoy | "FoloToy 可以自己搭服务吗"（官网 open-source/self-hosting 入口） | 开发者信息 | 编辑补充 | [folotoy.com](https://folotoy.com/) 服务端仓库入口 |
| folotoy | "FoloToy 的创始人是谁"（`folotoy company` 相关，无直接联想） | 人物关系 | 编辑补充 | [PAGC 嘉宾介绍](https://www.yfchuhai.com/article/10225083.html) |
| evoken | `演语科技官网`（采到线索，但未核验出官网域名，正文不提供官网链接，FAQ 不答官网题） | 导航 | 否（无核验入口） | — |
| evoken | `演语科技是什么公司`（`演语科技`+`创始人`联想支撑） | 定义 | 是 | [《晚点》访谈转载](https://www.chwang.com/article/208345738693) |
| evoken | `演语科技创始人陈冕`、`陈冕 演语科技` | 人物关系 | 是 | 同上 + [陈冕条目](/wiki/people/chen-mian) |
| evoken | `演语科技 lovart`、`陈冕 liblib`、`liblib tv` | 产品关系 | 是 | 同上；产品条目 liblib/lovart/libtv |
| evoken | `evoken band`（en 歧义：美国厄运金属乐队） | 歧义处理 | 是（FAQ 说明歧义） | 联想原始数据 |
| espressif | `乐鑫官网`、`乐鑫官方` | 导航 | 是 | [espressif.com](https://www.espressif.com/) |
| espressif | `乐鑫esp32`、`espressif esp32` | 产品关系 | 是 | [ESP32 官方产品页](https://www.espressif.com/en/products/socs/esp32)、ESP32 条目 |
| espressif | `espressif device on wifi`、`espressif on my network`、`espressif on my wifi` | "为什么看到 Espressif 设备" | 是 | 官方产品页（芯片出货量与客户结构） |
| espressif | `乐鑫科技股票`、`乐鑫科技 股价` | 公司沿革/上市 | 部分（只答上市事实，不涉当前股价） | [Wikipedia: Espressif Systems](https://en.wikipedia.org/wiki/Espressif_Systems) |
| dji | `大疆官网`、`大疆官网入口` | 导航 | 是 | [dji.com](https://www.dji.com/) |
| dji | `大疆无人机`、`大疆商城` | 产品线 | 是 | [dji.com/about](https://www.dji.com/about) |
| dji | `大疆pocket 4`、`dji osmo pocket 4` | 产品关系 | 是（只答"Pocket 属于大疆手持影像线"，型号与发售状态留给产品条目与官方页） | [dji.com](https://www.dji.com/)、dji-pocket-4 条目 |
| dji | "大疆是哪个国家的公司"（无直接联想，页面完整性需要） | 定义 | 编辑补充 | [Wikipedia: DJI](https://en.wikipedia.org/wiki/DJI_(company)) |
| cyber-zen | `赛博禅心`、`大聪明 AI` 均无联想返回 | — | FAQ 全部编辑补充 | [虎嗅转载自述](https://www.huxiu.com/article/4093731.html) |
| cyber-zen | `大聪明` 联想被信用卡、影视等歧义占据 | 歧义处理 | 是（FAQ 提示用"赛博禅心"检索） | 联想原始数据 |
| cognition | `cognition ai`、`cognition labs founders`、`cognition labs devin` | 定义、创始人、产品关系 | 是 | [cognition.com](https://cognition.com/)、[Wikipedia: Cognition AI](https://en.wikipedia.org/wiki/Cognition_AI) |
| cognition | `cognition devin windsurf` | 收购关系 | 是 | Wikipedia（2025 年 7 月协议）+ 官网集成页 |
| cognition | "Cognition 官网在哪里"（cognition.ai→cognition.com 重定向） | 导航 | 编辑补充 | [cognition.com](https://cognition.com/) |
| cognition | `cognition ai stock`、`cognition ai valuation`、`cognition labs revenue` | 财务/证券 | 否（无官方来源，不进入正文或 FAQ） | — |
| bytedance | `字节跳动官网` | 导航 | 是 | [bytedance.com](https://www.bytedance.com/) |
| bytedance | `字节跳动上市了吗`、`bytedance ipo/stock/valuation` | 证券 | 否（未核验，不答） | — |
| bytedance | `豆包`、`豆包ai`、`doubao ai` | 产品关系 | 是 | [doubao.com](https://www.doubao.com/)、豆包条目 |
| bytedance | `飞书cli`、`剪映下载`（归属产品页） | 产品使用 | 部分（品牌页只答归属关系，使用细节留产品页） | feishu.cn、capcut.cn、产品条目 |
| bytedance | "TikTok 和抖音什么关系"（官网明确记载，无直接联想） | 产品关系 | 编辑补充 | [bytedance.com](https://www.bytedance.com/en/) |
| alibaba | `阿里巴巴`、`alibaba group holding ltd` | 定义、导航 | 是 | [alibabagroup.com](https://www.alibabagroup.com/en-US/about-alibaba) |
| alibaba | `qwen alibaba`、`通义千问 api` | 产品关系 | 是（答集团与 Qwen 归属；API 细节留 Qwen 条目） | 官方 About 页、Qwen 条目 |
| alibaba | `阿里云` | 产品关系 | 是 | 阿里云条目 |
| alibaba | "阿里巴巴有哪些主要业务"（无直接联想，页面完整性需要） | 业务概览 | 编辑补充 | [alibabagroup.com](https://www.alibabagroup.com/en-US/about-alibaba) |
| alibaba | `阿里巴巴股票` | 证券 | 否（无核验入口，不答） | — |

## 歧义处理

- **evoken**：英文裸词 `evoken` 的联想几乎全部指向同名美国厄运金属乐队（evoken band、metallum、bandcamp 等）。本批不用英文裸词作为 FAQ 证据，改为用中文"演语科技"及产品词采样；品牌页 FAQ 明确说明该歧义。
- **dji**：`dji` 联想混入道琼斯指数（djia）、吉布提（djibouti）、演员（djimon hounsou），不采用；只用 `大疆`、`dji osmo pocket 4` 等消歧种子词。
- **大聪明**：联想被"大聪明卡/信用卡"（美卡社区）与影视、Dota 含义占据；`赛博禅心`、`大聪明 AI` 无联想。cyber-zen 页 FAQ 提示用"赛博禅心"检索。
- **cognition**：英文裸词 `cognition`（认知含义）未采样，只用 `cognition ai`、`cognition devin`、`cognition labs`。
- **alibaba/阿里巴巴**：联想混入矢量图标库、普惠体等非集团含义，FAQ 只答公司层面问题。
- **陈冕 滑冰**：联想提示存在同名花样滑冰运动员等歧义；本页人物指向以 chen-mian YAML（演语科技创始人）为准，FAQ 未展开。

## 事实边界与核验来源

- **folotoy**：产品（Fofo、Cactus、Panda-Momo、Teddy-Kumma、magic chip、家长仪表盘、开源自托管）取自[官网](https://folotoy.com/)；创始人王乐（创始人兼 CEO）取自 [PAGC 2025 嘉宾介绍](https://www.yfchuhai.com/article/10225083.html)（people/wang-le.yaml 同源）。官网未写成立年份、公司主体与融资信息，正文一概不写。
- **evoken**：Liblib 为起点、Lovart 2025-05 上线 beta、LibTV 2026-03 上线、"对齐层"逻辑、陈冕曾任剪映团队成员，均出自[《晚点》访谈转载](https://www.chwang.com/article/208345738693)，属被访者自述并在正文标注。访谈中的 ARR、融资额、估值、现金流等经营与财务数字**未转述**进正文（单一访谈来源，编辑规范要求不编造收入与估值，且此类数字时效性差）。`演语科技官网`联想存在但未能核验官网域名，正文不提供官网链接。
- **espressif**：业务、产品家族、15 亿颗出货、开源与 RISC-V、Teo Swee Ann 自述取自[官方介绍页](https://www.espressif.com/en/company/about-espressif)；2008 年创立、2019-07-22 科创板上市取自 [Wikipedia](https://en.wikipedia.org/wiki/Espressif_Systems)。官方页标注的股票代码在不同页面显示不一致（688018.SH），为避免误导，正文只写"上交所科创板上市"，不写代码。
- **dji**：2006 年成立、产品线划分、使命表述取自[官方 About 页](https://www.dji.com/about)；深圳总部取自 [Wikipedia: DJI](https://en.wikipedia.org/wiki/DJI_(company))。Wikipedia 中的市场份额、军警采购、制裁等争议内容不属于"业务与产品关系"范围，未写入。
- **cyber-zen**：品牌身份（微信公众号"赛博禅心"、署名"金色传说大聪明"、"技术出身的媒体人"自述、DeepSeek/Manus 相关文章自述）取自[虎嗅转载文章](https://www.huxiu.com/article/4093731.html)（原发布 2025-03）；主理人关系来自 people/cyber-zen.yaml relations。AGI Bar 的经营关系**未断言**：正文只引用节目原话（"大聪明那酒吧"、002 期开场致谢），并把场地信息指向 AGI Bar 官方资料。虎嗅文章未提 AGI Bar，二者之间的经营关系无官方来源。
- **cognition**：Devin 定位（"the first autonomous software engineer"）、产品形态（Devin Desktop/CLI/Devin Fusion/Windsurf 集成）、客户案例、FrontierCode 取自[官网](https://cognition.com/)；2023-08 创立（Scott Wu、Steven Hao、Walden Yan）、旧金山总部、2025-07 签署收购 Windsurf 协议取自 [Wikipedia: Cognition AI](https://en.wikipedia.org/wiki/Cognition_AI)。cognition.ai 现已 301 跳转到 cognition.com（本次核验确认），正文与 FAQ 写明官方域名为 cognition.com；brands/cognition.yaml 的 `official.website` 仍为 cognition.ai（跳转可达，未改动，属整合者可考虑的元数据微调）。
- **bytedance**：2012 年创立（张一鸣、梁汝波）、使命、Toutiao/Douyin/TikTok 时间线（2012-08、2016-09、2017 推出、2017 收购 Musical.ly、2018 合并）、Lark 2019、15 万员工取自[官方介绍](https://www.bytedance.com/en/)；豆包、火山引擎未在该页列出，正文以产品官网（[doubao.com](https://www.doubao.com/)、[volcengine.com](https://www.volcengine.com/)，与既有 YAML official 一致）作为归属依据。
- **alibaba**：1999 年杭州创立（马云与 18 位创始人）、使命、AI + Cloud and commerce 定位、业务分类、Qwen 支撑集团产品与淘宝内千问购物助手等取自[官方 About 页](https://www.alibabagroup.com/en-US/about-alibaba)。页中 Qwen App 月活、开源版本号等里程碑数字未写入正文（时效状态，指向官方页更稳）。

## 节目证据

逐字稿为本地导入的中文原文（`src/content/imported/transcripts/`）。引用锚点为发布版段落指纹，若原文、发言人或重复段落顺序变动需重新核对。引用清单（页面 → 锚点）：

| 页面 | 章节链接 | 段落锚点 |
| --- | --- | --- |
| folotoy | /weekly/001/transcript#chapter-20 | quote-3be6a8bb73cabd4d1f01（向阳乔木）、quote-5b6fcb2bac94a234642d（杨攀） |
| evoken | /weekly/001/transcript#chapter-10、#chapter-31；/weekly/002/transcript#chapter-13、#chapter-22 | quote-5469faab0cf860e26097（001 ch-10，橘子）、quote-8d66c38f45b6a51c90a3（001 ch-31，橘子）、quote-359d7ecf8e1630208b43（002 ch-13，向阳乔木）、quote-33584e54dfc505a42c18（002 ch-22，杨攀）。注：前两个锚点与 chen-mian/liblib/lovart/libtv 正文（并行批次）共用 |
| espressif | /weekly/001/transcript#chapter-20 | quote-fd8b64bb3e29bbdc9c33（歸藏） |
| dji | /weekly/002/transcript#chapter-17 | quote-dc7d0bbb900981555418（杨攀） |
| cyber-zen | /weekly/001/transcript#chapter-28；/weekly/002/transcript#chapter-02 | quote-9bb484146be023c2f4ac（橘子）、quote-beaa798a9959760c2231（向阳乔木） |
| cognition | /weekly/002/transcript#chapter-13 | quote-19300ab15820236763c2（橘子） |
| bytedance | /weekly/001/transcript#chapter-15、#chapter-32；/weekly/002/transcript#chapter-05、#chapter-21 | quote-5618062ba920c44fa75b（001 ch-15，歸藏）、quote-0dbb1daa341ec98b63dc（001 ch-15，杨攀）、quote-6f32a62d58cc57923c71（001 ch-32，歸藏）、quote-01049abafa360fd85877（002 ch-05，橘子）、quote-1267667e7f5a16dfbcf3（002 ch-21，橘子） |
| alibaba | /weekly/002/transcript#chapter-15、#chapter-16 | quote-aa01ef206e5d60d944ed（002 ch-15，橘子）、quote-1efc17893c72c8d331b4（002 ch-15，杨攀）、quote-8e674125c2511a604363（002 ch-16，橘子） |

证据不足或刻意省略的节目内容：

- folotoy：001 ch-20 中主持人只提"王乐"，未点名 FoloToy 或产品；正文已明确标注这一归属边界，"到下一期展示"的承诺在两期逐字稿中没有对应内容。
- evoken：节目只谈陈冕个人，从未点名演语科技、Liblib/Lovart/LibTV；001 ch-31 陈冕相关讨论的语境是 Seedance Token 转售与订阅套餐（橘子举例），不构成对公司的评价背书，正文按转述处理。
- cognition：`估值爆炸`为主理人转述，融资金额与估值不转述。
- bytedance：001 ch-15 杨攀提到字节合并多个产品、002 ch-05 豆包"对接了一个"（连接器）、001 ch-18 豆包连接器金融数据等段落语境零散，品牌页未逐条收录，留产品条目处理。
- alibaba：001 期大量 Qwen 模型发布讨论（ch-02、ch-03、ch-08、ch-09、ch-13 等）归属 Qwen 条目；品牌页只取 ch-15 云基础设施类比与 ch-16 垂直场景比较两处。
- espressif：001 ch-20 其余段落（机器人大会、具身大脑）与乐鑫业务无关，未引用。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用联想候选数量代替。

## 未决项

- `folotoy.com` 首次抓取失败（ECONNRESET），重试成功；内容以成功抓取版本为准。
- `agi bar 上海` 联想返回非 UTF-8 编码，仅部分解析；该词未用作 FAQ 证据。
- 演语科技官网域名未核验（联想有"演语科技官网"需求，但无可靠来源确认域名），正文与 FAQ 均不提供。
- brands/cognition.yaml 的 `official.website`（cognition.ai）已 301 至 cognition.com；本次批次不改 YAML，建议整合者复核。
- espressif 官方页股票代码显示与公开资料存在差异，正文回避了代码，仅写上市事实。
- FoloToy、赛博禅心均无成立年份、注册主体的官方页面；正文字段保持缺失而非推测。
- 英文逐字稿不存在，英文正文均链接中文原文并明确标注 Chinese transcript。
