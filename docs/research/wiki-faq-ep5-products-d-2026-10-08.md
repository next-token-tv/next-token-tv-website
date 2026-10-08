# 第 005 期产品批次 D Wiki FAQ 研究记录

## 范围与口径

本记录支持 `legend-of-zelda`、`jin-yong-qun-xia-zhuan`、`go`、`taopiaopiao`、`zhuaxia`、`dota`、`alipay` 七个产品实体的 Wiki 正文。研究日期为 2026-10-08，面向中文和英文读者。需求线索来自 Google Autocomplete 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`，参数 `hl=zh-CN` / `hl=zh-TW` / `hl=en`）；本次没有 Search Console、关键词工具或搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想词的出现顺序不表示热度，候选不等于热门。

### 歧义处理

- `go`：英文联想以编程语言语境为主（`go programming language`、`golang`）；中文种子 `go语言` 全部返回语言相关候选。YAML（kind: developer-tool，别名 Golang）与节目语境（程序员用 Go 写前端）一致指向编程语言，正文不涉及围棋。
- `dota`：中文联想几乎全部被 `dota2` 占据；英文 `what is dota` 混入 MRI/PET 造影剂 Dotarem、DOTATATE 等医学词条。本实体指《魔兽争霸 III》自定义地图 DotA（Defense of the Ancients），正文明确与 Dota 2 的关系，医学含义不进入 FAQ。
- `抓虾`：裸词联想被字面义占据（`抓虾吧`、`抓虾笼`、`抓虾工具` 等），`抓虾网` 仅返回自身。正文与 FAQ 补全"抓虾网 / RSS 阅读器"语境，并在 FAQ 中明确字面义区分。
- `支付宝`：联想以功能入口为主（开放平台、商家平台、登录、下载、国际版），无歧义冲突。

## FAQ 候选与证据

采样日期均为 2026-10-08，来源均为 Google Autocomplete 公开接口。

| 页面 | 种子词（语言） | 实际返回的相关候选 | 意图 | FAQ 采用 | 官方/可核验入口 |
| --- | --- | --- | --- | --- | --- |
| legend-of-zelda | `塞尔达传说`（zh-CN）；`legend of zelda`（en） | 塞尔达传说 旷野之息 / 王国之泪 / 智慧的再现 / 时之笛；legend of zelda movie / ocarina of time / breath of the wild / games | 定义、作品与年份 | 部分：采用"是不是任天堂的游戏""首作年份""旷野之息/王国之泪年份"；未采用具体攻略类候选 | [任天堂官方资料页](https://zelda.nintendo.com/about/)、英文维基百科系列与作品条目 |
| jin-yong-qun-xia-zhuan | `金庸群侠传`（zh-CN）；`金庸群侠传 重制版`（zh-CN）；`金庸群侠传`（zh-TW） | 金庸群侠传3重制版 / 3d重制版 / online / 2加强版攻略 / 地图；繁体：单机版 / 攻略ptt / 九阴真经 | 定义、年份、重制版 | 部分：采用"哪一年的游戏""谁开发发行""讲什么内容""节目里的复刻"；未采用攻略与民间重制版细节（未逐一核验各重制项目，不照抄别名） | [发行商智冠资料](https://www.soft-world.com/News/NewsDetail?Sn=5)、中文维基百科 |
| go | `go语言`（zh-CN）；`go programming language`（en）；`golang`（en） | go语言教程/圣经/入门/安装/下载/语言之旅；tutorial / book / download / mascot / vs python；golang download / playground / versions / golang 1.27 | 定义、下载、学习入口 | 是：与 Golang 是否同一语言、谁开发、下载入口、适用场景、Go 1 发布日期；`golang 1.27` 与官方发布历史中 go1.27.0（2026-08-19）一致，但正文不写"当前最新版本"，只链接发布历史 | [go.dev](https://go.dev/)、[发布历史](https://go.dev/doc/devel/release)、[下载页](https://go.dev/dl/) |
| taopiaopiao | `淘票票`（zh-CN）；`taopiaopiao`（en） | 淘票票官网 / 实时票房 / app / 抢票 / 网页版 / api / 开放平台 / 香港；taopiaopiao app / box office | 导航、归属、业务范围 | 部分：采用"哪家公司""原名""可买什么票""App 下载"；未采用实时票房（时效性强，指向实时页面的价值有限且正文不固定数据） | [App Store 官方页面](https://apps.apple.com/cn/app/id566813949)、中文维基百科 |
| zhuaxia | `抓虾网`（zh-CN）；`抓虾`（zh-CN） | 抓虾网（仅自身）；裸词被字面义占据 | 定义、运营状态 | 是：是什么（含字面义区分）、还能用吗、后来归谁 | [中文维基百科：抓虾](https://zh.wikipedia.org/wiki/%E6%8A%93%E8%99%BE) |
| dota | `dota`（zh-CN）；`dota game` / `what is dota`（en） | dota2 / ti / liquipedia / wiki；dota game meaning / type / release date；what is dota / dota 2（另混入 Dotarem、DOTATATE 医学词条） | 定义、与 Dota 2 关系 | 是：是什么、与 Dota 2 关系、名字含义、制作者；医学歧义不进入正文 | [英文维基百科：Defense of the Ancients](https://en.wikipedia.org/wiki/Defense_of_the_Ancients) |
| alipay | `支付宝`（zh-CN）；`支付宝 是什么`（zh-CN）；`alipay`（en） | 支付宝开放平台 / 商家平台 / 登录 / 下载 / 国际版 / 小程序 / 转账限额；支付宝是什么公司 / 是什么银行 / 是什么意思；alipay us / login / vs wechat pay / sign up | 定义、归属、入口 | 部分：采用"是什么""哪家公司""和淘宝关系""官网"；未采用登录/下载/转账限额等功能型候选（App 内功能细节无官方公开静态页支撑） | [alipay.com](https://www.alipay.com/)、中文维基百科 |

`塞尔达 是任天堂`（zh-CN）与 `go golang difference`（en）两个种子返回空或解析失败，重试一次仍失败，未计入证据；相关问题由编辑补充，并在上表标注来源归属。

## 事实边界与核验来源

- **塞尔达传说**：英文维基百科（REST 摘要）确认系列由宫本茂、手冢卓志创造，主要由任天堂开发发行；首作 1986 年（Family Computer Disk System）；《旷野之息》2017 年（Wii U/Switch，Nintendo EPD）；《王国之泪》2023 年（Switch）。`zelda.nintendo.com/about/` 在本次沙箱环境无法建立连接（证书/网络受限），该 URL 沿用实体 YAML 已核验的官方链接，未在正文中引用其页面具体表述。
- **金庸群侠传**：中文维基百科确认 1996 年 DOS 平台中文 RPG，河洛工作室开发、智冠科技发行，金庸十四部小说角色、大地图探索、回合制；智冠官网新闻页可访问，确认智冠将其列为旗下经典单机 IP（间接佐证发行关系）。民间重制项目（3D 重制版等）未逐一核验，正文只写"存在民间重制与同人项目，不是官方产品"。
- **Go**：go.dev 确认定位（"open-source programming language supported by Google"、内置并发、静态二进制、用途分类）；官方发布历史确认 Go 1 于 2012-03-28 发布、go1.27.0 于 2026-08-19 发布。正文不写"当前最新版本"断言，只链接发布历史。
- **淘票票**：中文维基百科确认原名淘宝电影、2014 年底上线、2015 年 11 月注入阿里影业、2016 年 5 月 16 日更名并扩展至演出体育等泛娱乐。维基条目中"超过 5000 家影院""2015Q4 市场份额 9.47%"为陈旧数据，未采用。App Store 页面在沙箱内不可达，URL 沿用 YAML 已核验链接。
- **抓虾**：中文维基百科确认 2006–2015 运营、2009 年上半年被豆瓣收购（2010 年创始人徐易容确认）、2015-08-20 正式关闭。无官方网站，YAML official 为空。
- **DotA**：英文维基百科（YAML 指定来源）确认 Eul 2003 年创作、Allstars 沿革、Guinsoo 2004 年 3 月接手、IceFrog 约 2005 年接管、2009 年 10 月受雇 Valve、Dota 2 于 2013 年 7 月正式发行、对 LoL/HoN/HOTS 的影响。
- **支付宝**：中文维基百科确认 2003-10-15 上线、最初为淘宝网部门、2004-12-08 独立运营、现为蚂蚁集团子公司、已扩展为超级应用。alipay.com 在沙箱内返回 200。

## 节目证据

全部提及集中在第 005 期中文逐字稿，逐字稿为中文，英文正文引用时标注 Chinese transcript：

| 实体 | 章节 | 发言人 | 段落锚点 |
| --- | --- | --- | --- |
| legend-of-zelda | chapter-11 "游戏反编译、Mod 与商业模式" | guizang（歸藏） | quote-2074cccafd5605a4b8fa |
| jin-yong-qun-xia-zhuan | chapter-11 | yangpan（杨攀） | quote-fe3e07ef819d03338385、quote-c1698e82606e5623b5cd |
| go | chapter-08 "用 Opus 5.5 写游戏：代码质量与效率" | orange（橘子） | quote-ba69a7f02660e5f685f3（续段 quote-6731f339b0a88b1cb6cf 未单独引用） |
| taopiaopiao、alipay | chapter-04 "Instinct：订房、商旅与信任" | orange（橘子） | quote-41a0f47665e942511b60（两实体同段） |
| zhuaxia | chapter-06 "RSS、独立博客与内容开放" | xiangyang-qiaomu（向阳乔木） | quote-1771fd51ebcfb697adff |
| dota | chapter-11 | xiangyang-qiaomu（向阳乔木） | quote-11bbde82191a61fdb43b |

锚点由 `/tmp/nt-quote-anchors.mjs`（与 `src/data/transcript-paragraph-anchors.ts` 同算法）对 `next-token-weekly--005.zh-Hans.json` 计算。Orange 关于支付宝淘票票评分、Guizang 关于复刻项目进展的发言均为参与者判断或转述，正文已注明"未见官方渠道印证"。

## 省略与未知项

- 淘票票"实时票房"是高热度联想，但属时效数据，正文不承载；未写票房与市场份额数字。
- 金庸群侠传各民间重制项目（3D 重制版、Online 等）的具体出处与授权状态未核验，仅在"使用与边界"中以泛指表述。
- 支付宝的登录、下载、转账限额等功能型高热度候选未进入 FAQ：缺少可支撑细节的官方静态页，正文只保留官网入口。
- 淘票票"香港"、Alipay International 等跨境使用场景未核验官方说明，未写。
- Go 与围棋的歧义在研究层确认，正文不另设 FAQ（YAML 与逐字稿语境均无歧义）。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，按页面、语言、国家和 28 天窗口记录曝光、点击、平均位置与可见查询样本；不能用候选词数量代替需求证明。
