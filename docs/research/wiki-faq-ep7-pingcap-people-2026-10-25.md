# 第 007 期批次（PingCAP 与人物）Wiki FAQ 与来源研究记录

## 范围与口径

本记录支持 `pingcap`（品牌）、`lex-fridman`、`liu-xiaopai`（人物）三个实体的 Wiki 正文扩写。研究日期为 2026-10-25。需求线索来自两个公开联想接口：DuckDuckGo 自动补全（`duckduckgo.com/ac/?type=list`）与百度 PC 联想（`www.baidu.com/sugrec?prod=pc`）；仅记录返回候选，不假设其排序与热度。本次没有 Search Console、关键词工具或任何搜索量、难度、排名、点击、热度数据，相关指标一律 **N/A**，联想候选的出现不等于热门。

三个实体均核验到可靠的公开资料（官方页面或可交叉印证的本人账号），全部进入正文写作，无跳过实体。逐条核验依据见下文"事实核验与边界"。

## 三个实体的事实核验结论

| 实体 | 核验结论 | 关键核验来源 |
| --- | --- | --- |
| pingcap | 开发 TiDB 的公司；据官方介绍，2015 年由三名曾在头部互联网公司任职的基础设施工程师创办，以开源方式构建 TiDB；TiKV（TiDB 的键值存储层）为 CNCF 毕业项目；TiDB 兼容 MySQL，同系统承载 OLTP 与实时 OLAP（HTAP）；使用方式分 TiDB Self-Managed 与 TiDB Cloud | [官方公司介绍](https://www.pingcap.com/about-us/)（"Our History：started in 2015 when three seasoned infrastructure engineers…"；"TiKV, TiDB's unique Key-Value storage layer, is a CNCF Graduated project"）、[TiDB 产品页](https://www.pingcap.com/tidb/)（MySQL 兼容、HTAP、TiDB Cloud 各版本、TiDB Cloud Lake 公开预览）、[AI 方案页](https://www.pingcap.com/ai/)（向量搜索与 RAG、Agentic AI 数据库）、[英文维基百科 TiDB 条目摘要](https://en.wikipedia.org/wiki/TiDB)（"developed and supported primarily by PingCAP"、"licensed under Apache 2.0"、"drew its initial design inspiration from Google's Spanner and F1 papers"） |
| lex-fridman | 美国计算机科学家与播客主持人，自 2018 年起主持以本人名字命名的访谈播客；个人网站自述研究兴趣为"Human-AI interaction and robotics"，并列出 DeepTraffic、Arguing Machines、MIT Advanced Vehicle Technology Study 等研究工作 | [个人网站首页](https://lexfridman.com/)（站名下方即"Host of the Lex Fridman Podcast"、"Research interests: Human-AI interaction and robotics"、Research & Publications 列表）、[英文维基百科条目摘要](https://en.wikipedia.org/wiki/Lex_Fridman)（"an American computer scientist and podcaster. Since 2018, he has hosted the Lex Fridman Podcast…"）、[播客主页](https://lexfridman.com/podcast/)（节目主题清单）。`lexfridman.com/about/` 返回 404，改以首页与播客主页核验 |
| liu-xiaopai | AI 产品开发者、Raphael AI（raphael.app，免费 AI 图像生成产品）创始人。即刻个人主页签名为"Raphael AI 创始人 https://raphael.app"，与 GitHub 资料互相印证（GitHub bio 为"刘小排"，博客字段指向 https://raphael.app，公开仓库 97 个，含 Ralph Desktop、Raphael Publish 等项目） | [即刻个人主页](https://m.okjike.com/users/065922A7-2523-4C26-AB2B-DDFF60443E2C)（签名与置顶帖）、[GitHub API 用户资料](https://api.github.com/users/liuxiaopai-ai)（name/bio/blog 字段）、[raphael.app](https://raphael.app/)（"Raphael AI - Free Unlimited AI Image Generator"）、[Ralph Desktop 仓库](https://github.com/liuxiaopai-ai/ralph-desktop) |

## FAQ 候选与证据

采样时间 2026-10-25，方法见"范围与口径"。原始候选见文末附录。"编辑补充"指没有直接联想词、但可由官方资料明确回答的常识问题；"联想词"指实际返回的候选；同名歧义排除说明见附录。

| 页面 | 线索（类型） | 意图 | FAQ 采用 | 答案来源 |
| --- | --- | --- | --- | --- |
| pingcap | `pingcap是什么公司`（百度联想）；`TiDB是哪家公司`、`TIDB数据库是国产吗`（百度联想） | 识别公司及其与 TiDB 的关系 | PingCAP 是什么公司（编辑归纳自联想词） | 官方公司介绍页 |
| pingcap | `tidb和MySQL的区别`（百度联想）；`pingcap tidb`（DuckDuckGo 联想） | 产品比较 | TiDB 和 MySQL 有什么区别 | TiDB 官方产品页（MySQL 兼容、分布式、HTAP） |
| pingcap | `tidb官网`、`tidb cloud`（百度联想） | 找官方入口与使用方式 | 易混概念与使用场景节覆盖 Self-Managed 与 TiDB Cloud 的入口（编辑补充，不单设 FAQ） | TiDB 产品页、定价页 |
| lex-fridman | `lex fridman podcast`、`lex fridman youtube`（DuckDuckGo 联想） | 找节目与收听入口 | Lex Fridman 的播客在哪里收听（编辑归纳自联想词） | lexfidman.com 播客主页 |
| lex-fridman | （无中文联想；存根已有"他参加本期了吗"） | 辨析"被提及"与"参与录制" | Lex Fridman 参加了本期节目吗（沿用存根问题） | 第 007 期逐字稿 |
| liu-xiaopai | `刘小排个人资料`（百度、DuckDuckGo 均返回）；`刘小排老师的网站`（DuckDuckGo） | 身份与个人入口 | 刘小排是谁（编辑归纳自联想词） | 即刻主页、GitHub 资料 |
| liu-xiaopai | `raphael ai image generator`、`raphael ai free`（DuckDuckGo，产品级联想） | 产品是什么 | Raphael AI 是什么 | raphael.app 官方页 |
| liu-xiaopai | （存根已有） | 辨析"被提及"与"参与录制" | 刘小排参加了第 007 期录制吗（沿用存根问题） | 第 007 期逐字稿 |

未采用的联想词及理由：`pingcap数据泄露`、`tidb数据泄露`（所指事件未在官方渠道核到，正文不写；核验结论口径为"该说法未见官方渠道印证"）；`lex fridman age/net worth/height/kids`（个人隐私属性，无必要且不以正文断言处理）；`刘小排深海圈`、`刘小排课程`、`刘小排 claude code`（"深海圈"为付费社区等说法未能核验到可靠公开资料，不写）；`tidb怎么读`（发音类问题无官方口径）；`tidbits/tidbits menu` 等（同名英文词歧义排除）；`评残…` 系列（百度联想的同音噪声，排除）；`pingcap logo/loop/talent plan`（品牌资产与开发者项目页，非本批 FAQ 范围）。

## 节目证据

本地中文逐字稿 `src/content/imported/transcripts/next-token-weekly--007.zh-Hans.json`，经读取原文核对；段落锚点由 `/tmp/nt-quote-anchors.mjs`（按 `src/data/transcript-paragraph-anchors.ts` 算法）生成。

| 实体 | 期数与章节 | 段落锚点 | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| pingcap | #007 chapter-04"Agent 流量、个人网站与开放接口" | `quote-ee9b7545a706ea9eb79d` | yangpan | 列举 Cloudflare、PingCAP、Vercel 等宣布"Agent 流量/创建数量超过人类"，并说"以后你的业务如果不宣布这个……感觉也是不行" |
| liu-xiaopai | #007 chapter-17"不用守着电脑：边做边改，只说自己要什么" | `quote-2c37399213a231d148d7` | orange | 转述"有人建议向 AI 提一个十倍的要求" |
| liu-xiaopai | 同上 | `quote-bbb922d7d895d54b22e9` | yangpan | 点出"刘小排" |
| liu-xiaopai | 同上 | `quote-4b12c96951fb6c9940bc` | orange | 举例"十秒优化到五秒……要求优化到零点二秒，他可能会给你更好的方案" |
| lex-fridman | #007 chapter-18"更大胆的任务：播客转写、Slack 与微信整理" | `quote-aa0f52904f98d4fb554d` | xiangyang-qiaomu | "Lex Fridman 有 400，500 多期节目" |
| lex-fridman | 同上 | `quote-194fdd8d1baa66b25243` | xiangyang-qiaomu | 官网部分缺字幕，让 AI 抓字幕、把视频转文本，全部中文转写做成网站 |

三人均非第 007 期录制参与者（该期参与者为 guizang、xiangyang-qiaomu、yangpan、orange，见 `src/content/data/episodes/next-token-weekly--007.yaml`），正文均已写明"未参与录制"。英文正文引用第 007 期只有中文逐字稿，链接 `/weekly/007/transcript#...` 并标注 Chinese transcript，不生成 `/en/weekly/007` 链接。

## 事实核验与边界

- pingcap：2015 年创办、三名工程师、开源路线、TiKV 为 CNCF 毕业项目均来自官方公司介绍页原文；HTAP 与 MySQL 兼容来自 TiDB 官方产品页；Spanner/F1 论文启发与 Apache 2.0 许可证来自英文维基百科摘要（官方页未直接写明，正文注明出处）。节目提及中"创建数据库数量超过人类"仅为杨攀转述，未核到对应官方公告原文，正文只写"节目参与者对公司公告的转述"。官网导航另有"Database for Agentic AI / Persistent Context for AI Agents"板块，AI 方案页内容已直接核验。价格、当前各 TiDB Cloud 版本差异不写入正文，链接定价页交由读者查询。
- lex-fridman：美国计算机科学家与播客主持人、"since 2018"来自英文维基百科摘要；研究兴趣表述采用其官网原文；研究工作列表（DeepTraffic、Arguing Machines、MIT Advanced Vehicle Technology Study）按其官网 Research & Publications 的条目名转述，不展开未核验的学历、任职时间等细节。节目里"四五百期节目"为主理人口径，正文注明以官网为准。
- liu-xiaopai：身份由即刻签名与 GitHub 资料交叉印证；"第一款产品、一个月超 100 万月活、团队只有我自己"为本人即刻置顶自述，正文标注为本人自述口径；Raphael AI 的产品形态（免费 AI 图像生成）来自 raphael.app 页面标题与描述。GitHub 仓库列表会变动，正文只列核验时可见的代表性项目（Ralph Desktop、Raphael Publish），不承诺完整。即刻置顶帖的发布时间在页面上显示为相对时间（"2年前"），正文不写具体日期。
- 核验环境限制：WebFetch 对 pingcap.com 与 lexfridman.com 多次连接失败（ECONNRESET），改用 curl 抓取页面正文核验；百度百科类页面未采样，联想接口以 DuckDuckGo 与百度为准。

## 后续衡量

无发布后数据。若接入 Search Console，按页面、语言、国家、设备与 28 天窗口记录曝光、点击、平均位置与可见查询样本；不把联想候选当作搜索量。

## 附录：原始联想候选（2026-10-25）

- DuckDuckGo（type=list，无地区与语言受控）：
  - `PingCAP`：pingcap, pingcap tidb, pingcap logo, pingcap loop, pingcap talent plan
  - `TiDB`：tidb, tidbits, tidball24, tidbits meaning, tidbits menu, tidbits jacksonville fl, tidbits weather models, tidb cloud
  - `Lex Fridman`：lex fridman, lex fridman podcast, lex fridman youtube, lex fridman age, lex fridman podcast #501 with dhh, lex fridman net worth, lex fridman height, lex fridman kids
  - `刘小排`：刘小排, 刘小排老师的网站, 刘小排ai编程, 刘小排深海圈, 刘小排课程, 刘小排个人资料, 刘小排 claude code, 刘小排r
  - `Raphael AI`：raphael ai, raphael ai image, raphael ai image generator, raphael ai free, raphael ai app, raphael ai generator, raphael ai image generator free, raphael ai video generator
- 百度（sugrec，prod=pc）：
  - `PingCAP`：pingcap是什么公司, pingcap数据泄露, 评残…（同音噪声序列，略）
  - `TiDB`：tidb官网, tidb数据库, tidbit, tidb怎么读, tidb数据泄露, tidb cloud, tidb和MySQL的区别, TiDB是哪家公司, TIDB数据库是哪个公司, TIDB数据库是国产吗
  - `Lex Fridman`：lex fridman百度百科
  - `刘小排`：刘小排个人资料
