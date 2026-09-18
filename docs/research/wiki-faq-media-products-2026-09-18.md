# 媒体与工具产品 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `bilibili`、`wechat-input-method`、`threejs`、`the-one`、`t3-code`、`synology-nas` 和 `pika` 的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。需求线索来自 2026-09-18 通过 Google Autocomplete（`suggestqueries.google.com/complete/search?client=firefox`，逐词采样）的实际查询，采样语言分 `hl=zh-CN` 与 `hl=en` 两套。没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想顺序不代表热度排名。原始联想数据仅保留在本记录正文内（按任务范围未另建原始 JSON 文件）。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体（种子 → 联想） | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| bilibili | zh `哔哩哔哩`→网页版、下载、国际版、漫画、直播姬；`B站`→视频下载、充电视频、字幕提取；en `bilibili`→tv、app、anime、gaming | 导航、定义 | 是（入口、创立年份、用户规模、弹幕；未采用"视频下载/解析"类灰色需求） | [Bilibili IR 公司简介](https://ir.bilibili.com/en/corporate-information/?tab=company-profile#company-profile)、[bilibili.com](https://www.bilibili.com/) |
| wechat-input-method | zh `微信输入法`→mac、windows 语音输入、下载、离线安装包、好用吗、官网；`微信输入法 语音`→语音输入快捷键、语音识别；en `wechat input method`→download、mac | 导航、平台、语音功能 | 是（官网、平台、别名关系、语音输入体验） | [z.weixin.qq.com](https://z.weixin.qq.com/) |
| threejs | zh `three.js`→是什么、github、教学、中文文档、editor、journey；en `three.js`→examples、documentation、react、editor、vs babylon.js | 定义、安装、资源、比较 | 是（定义、许可、npm 安装、示例文档；未采用"vs babylon.js"——缺少可核验的比较依据） | [threejs.org](https://threejs.org/)、[GitHub mrdoob/three.js](https://github.com/mrdoob/three.js/) |
| the-one | zh `the one 微信`→仅返回原词（无联想需求线索）；en 无对应种子 | 定义、使用方式、关系 | 采到线索不足，4 个问题均标注编辑补充（依据官方博客与节目转述作答） | [王登科博客](https://greatdk.com/2149.html)、[bonjour.bio 团队页](https://bonjour.bio/jobs-mapping/team/theone) |
| t3-code | zh `t3 code`→是什么、github、codex、mobile、vs orca、alternative；en `t3 code`→github、connect、reddit、ui、mobile、remote、vs codex | 定义、安装、商业信息、比较 | 是（定义、支持的 Agent、收费、安装；"vs codex"转写为"T3 Code 与 Codex 的关系"） | [t3.codes](https://t3.codes/)、[GitHub pingdotgg/t3code](https://github.com/pingdotgg/t3code/) |
| synology-nas | zh `群晖`→登录、官网、quickconnect、安装tailscale、docker；`群晖nas`→外网访问、教程、玩法、搭建、推荐；en `synology nas`→login、setup、quickconnect；`synology dsm`→download、7.4、versions | 定义、选型、容器、远程访问 | 是（官网、DSM 定义、选型、Docker/Container Manager；未采用"外网访问/QuickConnect"——本次未核验到可作答的官方页面正文） | [Synology 产品目录](https://www.synology.cn/zh-cn/products)、[DSM 页面](https://www.synology.com/en-global/dsm) |
| pika | zh `pika`→pika labs、pika ai、pika 中文、pikachu、皮卡丘、皮卡鱼象棋；en `pika ai`→video generator、valuation、app、free、price、image to video | 定义、创始人、收费、歧义 | 是（定义、创始人、收费、与皮卡丘的歧义；"valuation"未采用——无核验来源） | [pika.art](https://pika.art/)、[TechCrunch 报道](https://techcrunch.com/2023/11/28/pika-labs-which-is-building-ai-tools-to-generate-and-edit-videos-raises-55m/) |

歧义处理：`pika` 在中文联想中混入 pikachu、皮卡丘、皮卡鱼象棋（将棋引擎），英文中 pika 也是动物名，FAQ 用一条问答显式消歧；`t3 code` 与 T3 Stack 等同名技术词汇在正文注明"不是同一样东西"；`the one` 是高度泛化的短语，采样词 `the one 微信` 未返回联想，属线索不足而非无需求。

## 事实边界

- bilibili：公司简介给出 2009 年 6 月上线、2010 年 1 月定名、创始人徐逸（Yi Xu）、PUGV 模式、弹幕定位、收入构成；Nasdaq 代码 BILI 经 SEC EDGAR（CIK 0001723690）核验。2026 Q2 的 DAU/MAU/MPU 数据只出现在 IR 首页（时效数据），正文不使用，仅以"截至 2026 年第二季度"锚定放入 FAQ。港交所上市信息未核验，正文未写。
- wechat-input-method：官网为 JS 应用，可核验内容为 meta 描述（"微信官方出品的中文输入法"）、标语与关键词中的平台信息（mac/ios/安卓/windows、语音转文字）；功能细节不超出官网口径。与微信（wechat 条目）分层区分。
- threejs：官网标题与当前版本（r186，仅作核验参考未写入正文）、GitHub API（创建于 2010-03-23、MIT、描述"JavaScript 3D Library."）、README 目标与渲染器构成、npm 包名 `three`；mrdoob 即 Ricardo Cabello 由其个人站链接（mrdoob.com → ricardocabello.com）佐证。
- the-one：核心事实来自王登科博客（greatdk.com/2149.html）：2026 年 3 月腾讯开放 OpenClaw 微信插件入口（openclaw-weixin）、4 月初上线、4 月 24 日起在线人数激增、三天 100 万注册、单日 token 上千亿、写作时日处理超 1 亿条消息。博客未直接使用"独响团队产品"的表述，独响/TheOne 的团队归属依据 bonjour.bio 团队页与 wang-dengke 人物正文。aitntnews.com（YAML source）未采用。
- t3-code：t3.codes 与 GitHub README 给出定位、支持的 Agent 清单、bring-your-own-subscription、平台与安装方式；仓库创建于 2026-02-08（GitHub API），MIT 许可。"300,000+ devs"等营销数字未采用；Theo 与 T3 Tools 的关联只写到与页脚 "@theo" 佐证相符的程度。
- synology-nas：产品系列构成来自 synology.cn 产品目录；DSM 定义与套件清单来自 synology.com DSM 页（DSM 7.4 标注为"available now"，未写入正文）；Container Manager 的存在经官方套件页核验，适用机型未核验故不展开。QuickConnect 未核验，相关 FAQ 未采用。
- pika：定位与工具清单来自 pika.art 官网；创始人（Demi Guo、Chenlin Meng）、创立年份与 5,500 万美元融资来自 TechCrunch 2023-11-28 报道正文；定价页与 dev.pika.art 存在性经 HTTP 核验，未写具体价格。节目里"中国女生做的""卖套壳"等说法按节目参与者言论转述，并以官网第三方模型集成情况作对照说明。

## 节目证据

本地中文逐字稿引用如下（均为已生成的段落锚点或章节锚点）：

- bilibili：[Weekly #001 chapter-30](/weekly/001/transcript#chapter-30)（quote-e5ef0d80b7cefa68b2ed）；[Weekly #002 chapter-02](/weekly/002/transcript#chapter-02)（quote-beaa798a9959760c2231）；[Weekly #002 chapter-05](/weekly/002/transcript#chapter-05)（quote-b5e05844e49beeb8d62b）。
- wechat-input-method：[Weekly #002 chapter-25](/weekly/002/transcript#chapter-25)（quote-d55f5ee52262b97c51ae、quote-95d776331f70b6a7bc7e、quote-99501e6a172d49600114）。
- threejs：[Weekly #001 chapter-03](/weekly/001/transcript#chapter-03)（quote-17d1425cd292d5904826）；[Weekly #001 chapter-11](/weekly/001/transcript#chapter-11)（quote-10a029bbadfcaf889bc2）。
- the-one：[Weekly #002 chapter-17](/weekly/002/transcript#chapter-17)（quote-5d6a2818237d83fa41bb、quote-a7d67da6c371a0ecb83a），与 wang-dengke 人物正文互链。
- t3-code：[Weekly #002 chapter-14](/weekly/002/transcript#chapter-14)（quote-fbd594a31a1f660943e8）。
- synology-nas：[Weekly #001 chapter-24](/weekly/001/transcript#chapter-24)（quote-4ee1d60d908c06a944f4、quote-f4c9b777feaf289382da、quote-c864afa774fbf5f51cec）。
- pika：[Weekly #001 chapter-09](/weekly/001/transcript#chapter-09)（quote-7ae6153c2d7e9f578145、quote-aa5bd3347f8920c6349b、quote-889438612758d7a891f5）。

引用均标注发言人（杨攀、歸藏、橘子、向阳乔木），并区分节目参与者的体验/转述与官方资料；英文正文链接中文章节并标注 Chinese transcript。

## 已知限制与未采用项

- the-one 的 FAQ 无真实搜索联想支撑，四个问题均为编辑补充（问题形态参考同类产品需求，答案依托官方博客与节目转述）。
- synology"外网访问/QuickConnect""外网访问 tailscale"、bilibili"视频下载/解析"、pika"valuation"、three.js"vs babylon.js"等联想词本次未核验出可靠官方答案入口，均未采用。
- 逐字稿中出现的产品昵称（如"牛来"指 GLM 5.3 Flash）与正文事实无关处，未写入正文。
- 两期逐字稿均为中文；英文正文不存在对应英文逐字稿链接。
