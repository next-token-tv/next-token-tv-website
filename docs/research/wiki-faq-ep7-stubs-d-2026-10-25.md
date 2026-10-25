# 第 007 期存根扩写批次 D：FAQ 与来源研究记录

## 范围与口径

本记录支持 8 个实体的 Wiki 正文扩写：品牌 `mediastorm`（影视飓风）、`tata`（塔塔集团）、`watcha`（观猹）；人物 `kuaidao-qingyi`、`lauren-tan`、`liu-run`、`luo-yihang`（骆轶航）、`yao-jingang`。研究日期 2026-10-25（经 `date +%F` 复核）。需求线索来自 Google 公开联想接口（Firefox client，仅语言提示，无受控地区与搜索量数据）；本次没有 Search Console、关键词工具或任何搜索量、难度、排名、点击数据，相关指标一律 **N/A**，联想候选出现不等于热门。8 个实体全部核验到可用身份或官方资料，无保持存根的实体；`kuaidao-qingyi`、`luo-yihang` 可核验事实较薄，正文按"宁少写"原则收敛。

## 身份核验结论

| 实体 | 核验结论 | 关键来源 |
| --- | --- | --- |
| mediastorm | 影视飓风（Mediastorm）：哔哩哔哩/YouTube 影像、数码、科技视频团队，主频道由杭州星奥传媒有限公司运营，创始人潘天鸿（Tim，本站已有 `mediastorm-tim` 条目） | [中文维基百科"影视飓风"](https://zh.wikipedia.org/wiki/影视飓风)、[官方 YouTube 频道](https://www.youtube.com/@mediastorm6801)（YAML 既有链接）；频道名、内容由官方频道与维基条目互证 |
| tata | 塔塔集团：1868 年 Jamsetji Tata 创立，总部孟买 Bombay House，十个业务板块，2024–25 财年收入超 1,800 亿美元，合计市值 3,280 亿美元（截至 2025-03-31），Tata Sons 66% 由信托持有；[Tata Electronics](https://www.tata.com/business/tata-electronics) 2020 年成立，电子与半导体制造 | [tata.com/about-us](https://www.tata.com/about-us)、[Tata Electronics 官方页](https://www.tata.com/business/tata-electronics) |
| watcha | 观猹：watcha.cn 下的 AI/前沿科技媒体与社区品牌；官网 meta 自述"前沿科技爱好者聚集地""新一代前沿科技爱好者的内容平台"，标语"玩 AI，上观猹！"；大会官网标题"观猹大会 2026" | [watcha.cn](https://watcha.cn/) 页面 meta（curl 直取）、[dahui.watcha.cn](https://dahui.watcha.cn/) 页面标题（curl 直取）。创始人与团队未核验到可靠资料，正文不写 |
| kuaidao-qingyi | 得到联合创始人、AI 学习圈主理人（上海对外经贸大学 2026-09-24 活动新闻圆桌介绍口径） | [news.ecupl.edu.cn 活动新闻](https://news.ecupl.edu.cn/2026/0924/c672a228030/page.htm)（YAML 既有来源）。得到官网为 [igetget.com](https://www.igetget.com/)（dedao.com 已非其站点）；真实姓名、履历未核验，不写 |
| lauren-tan | 软件工程师，GitHub 账号 poteto，bio"Software Engineer @xai-org & @react compiler core team"（profile updated_at 2026-10-19）；React 官网团队页列 Lauren Tan 为 Compiler 工作组成员（title "Engineer at Cursor"） | [GitHub API users/poteto](https://api.github.com/users/poteto)、[react.dev/community/team](https://react.dev/community/team)。**两处官方来源对所属公司表述不一致（xAI vs Cursor），正文并列两说、不取舍**；"spacex" 等联想词指向同名他人，排除 |
| liu-run | 刘润：商业战略顾问、畅销书作者，《5分钟商学院》《底层逻辑》系列，在上海创立润米咨询（上海润米管理咨询有限公司、上海润米文化传媒有限公司），公众号"刘润"，2021 年起每年 10 月上海"进化的力量"年度演讲 | [liurun.online](https://liurun.online/)（其官网；`www.run2me.com` 证书指向 liurun.online，正文链接仍用 YAML 既有的 run2me.com，实测 301/证书异常，建议后续由整合者复核 YAML 链接）。Microsoft 履历官网未提，不写；得到官网人物故事栏目列"刘润开放日演讲：怎么当好一个得到老师"（[igetget.com](https://www.igetget.com/)） |
| luo-yihang | 骆轶航（Thomas Luo）：品玩（PingWest）相关人物。官方存档页（2017-01-08，[web.archive.org](http://web.archive.org/web/20170108073349/http://www.pingwest.com:80/about/)）团队联系栏署名"骆轶航 Thomas CEO & 总编辑"；官方 about 页（2013 存档与现页）称 PingWest 2012 年 9 月 22 日成立于硅谷，后总部迁回北京，运营主体北京品西互动科技有限公司 | **"创始人"表述本批未检索到直接来源**（zh/en 维基无条目，Bing/搜狗/Brave 在本环境不可用或返回无关结果，pingwest.com/author 现页为 JS 渲染无内容），正文沿用既有摘要口径并写明本批核验到的是 CEO & 总编辑职务信息；属遗留核验项 |
| yao-jingang | 姚金刚：GEOFlow 项目作者；项目 wiki 自述著有《AI营销：从SEO到GEO》等 5 部营销书、曾在中赫/好未来/猿辅导负责营销、猎河科技创始人（用户数 1,000 万+ 为自述，正文标注自述口径）；GEOFlow 为 AGPL-3.0 的企业官网 GEO 运营开源系统，官网 geoflow.me | [GEOFlow wiki 作者与项目](https://raw.githubusercontent.com/wiki/yaojingang/GEOFlow/作者与项目.md)、[GitHub API users/yaojingang](https://api.github.com/users/yaojingang)（name "YAO"，blog laoyao.cn）、[GEOFlow README](https://github.com/yaojingang/GEOFlow) |

## 节目证据（第 007 期，中文逐字稿）

均经读取原文与锚点脚本（等价实现 `/tmp/nt-quote-anchors.mjs`，与 `src/data/transcript-paragraph-anchors.ts` 同算法）核对：

| 实体 | 章节 | 段落锚点 | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| yao-jingang | chapter-04"Agent 流量、个人网站与开放接口" | `quote-af0116525cd7e9cf3cf4` | xiangyang-qiaomu | "金刚他做了一个流量统计……日志分析 + JS 访客分析" |
| yao-jingang | 同上 | `quote-7b1f7eddfc944a1032c0` | xiangyang-qiaomu | "基于 Umami 开源来改的……先自己用，先自己朋友们用" |
| yao-jingang | 同上 | `quote-45edd18f2bba2befbde9` | xiangyang-qiaomu | 后台"六十多种 AI Agent" |
| liu-run、kuaidao-qingyi | chapter-05"自己造剪辑工具：自动化与渲染的等待" | `quote-5fb955bdd7acfba2b75f` | yangpan | 同一段落先后点名刘润、快刀青衣自建剪辑工作台（一段承载两个实体，归属各自单写，未捆绑归因） |
| mediastorm | chapter-05 | `quote-50b4f807615ccc7fc12d` | guizang | "影视飓风的优势就是它的质量高……会被 AI 消解" |
| luo-yihang | chapter-06"AI 游戏破圈：移植、网页游戏与上瘾机制" | `quote-c3e265787ca25fb8cf35`、`quote-9e28a1a738ccbf899758`、`quote-4302d1e32e7f7dfb17b7` | orange、guizang | "前天看到骆一航了……玩一个 AI 游戏已经花了 2,000 块……ARR 是 1 亿美金"（逐字稿转写"骆一航"） |
| tata | chapter-10"安全风险集中爆发：漏洞、证书与补丁" | `quote-0e2106ba86ad1bfc296a`、`quote-2106c235b19c140b27e9` | xiangyang-qiaomu、guizang | "塔塔之前把苹果各种都泄露了""都是印度工厂泄露的" |
| lauren-tan | chapter-20"Omarchy、旧手机与重写软件的可能性" | `quote-175a9ff7651adf1dbc74`、`quote-2563de5f754183baae93` | guizang | 有人把 Grok Bot 的 Linux 刷成 Omarchy；Grok Bot 方面 @poteto 求细节 |
| watcha | chapter-21"个人 Agent 的下一种入口：语音与小硬件" | `quote-e5806bd4ed3f2707a5c6`、`quote-47054697d24cc7234682` | yangpan、orange | "观猹不是今天开大会，就他们也发那个""也是王乐给他们定制的" |

8 人/品牌均非节目参与者（逐字稿无本人发言），正文均已写明"未参与录制"。

## FAQ 候选与证据

采样时间 2026-10-25，方法为 Google 公开联想（`suggestqueries.google.com/complete/search?client=firefox`），原始数据见附录。"编辑补充"指无直接联想词、可由官方资料回答的问题。

| 页面 | 线索（类型） | 意图 | FAQ 采用 | 答案来源 |
| --- | --- | --- | --- | --- |
| mediastorm | `影视飓风官网`、`影视飓风 tim`、`影视飓风素材`（品牌级） | 官网入口、创始人是谁 | 影视飓风是什么；影视飓风是谁创立的 | 官方频道、中文维基百科、本站 Tim 条目 |
| tata | `塔塔集团 iphone`、`塔塔集团市值`、`塔塔集团董事长`（品牌级） | 集团规模、与苹果制造关系 | 塔塔集团是什么；规模有多大；塔塔与苹果制造有什么关系 | tata.com 官方页（"董事长"为时效性问题且未核验，不出题） |
| watcha | `观猹社区`、`观猹大会`、`观猹创始人`（品牌级） | 品牌识别、大会是什么 | 观猹是什么；观猹大会是什么 | watcha.cn meta、大会官网；"创始人"无法可答，不出题 |
| kuaidao-qingyi | `快刀青衣 意思`（人物级，仅 1 条） | 名字含义、身份 | 快刀青衣是谁；是否参加第 007 期录制（编辑补充） | 上海对外经贸大学活动新闻；逐字稿 |
| lauren-tan | `lauren tan xai`、`lauren tan github`、`lauren tan 是谁`、`poteto github`（人物级） | 身份、账号归属 | Lauren Tan 是谁；@poteto 是否同一人；第 007 期 @poteto 是怎么回事（编辑补充） | GitHub API、react.dev、逐字稿 |
| liu-run | `刘润 底层逻辑`、`刘润 底层逻辑2`（品牌级）；裸词联想多为"刘润铭"等同名近似（歧义排除） | 书籍、身份、公司 | 刘润是谁；润米咨询是什么；《底层逻辑》是什么书 | liurun.online |
| luo-yihang | `骆轶航`（裸词，无扩展）；`品玩 骆轶航` 无返回 | 身份 | 骆轶航是谁；节目里提到他玩 AI 游戏是怎么回事（编辑补充） | 品玩官方存档页、逐字稿 |
| yao-jingang | `姚金刚 geo`（人物级）；`geoflow github`、`geoflow v3`（项目级，部分指向同名学术项目，已排除） | 身份、项目、工具 | 姚金刚是谁；GEOFlow 是什么；"金刚"的流量统计工具是什么 | GEOFlow wiki/README、逐字稿 |

未采用的联想词：`影视飓风tim爸爸/老婆/离婚/身价`（隐私八卦，无可靠来源，不出题）；`塔塔集团 世界排名/台湾/力积电`（无官方依据或无关）；`lauren tan spacex`（同名他人）；`potato` 系（poteto 的无关联想）；`geoflow arxiv / geoflow-slam++` 等学术同名项目（歧义）；`观猹融资/观猹集团`（无可答来源）。

## 省略与未知项

- watcha：创始团队、融资、历届大会日程未核验到可靠公开资料，正文与 FAQ 均不写。
- kuaidao-qingyi：真实姓名、创业前履历未核验；得到官网无联合创始人名单页。
- lauren-tan：GitHub 自述（xAI）与 react.dev 团队页（Engineer at Cursor）对雇主表述不一致，正文并列；未采信任何一方为"当前"。
- liu-run：Microsoft 任职背景为广为流传的说法，其官网未提，不写。
- luo-yihang："创始人"沿用既有摘要口径，本批未检索到直接来源（见上表）；第 007 期"2,000 块 / ARR 1 亿美金"均为主理人转述，未核验原始出处。
- tata：集团董事长等时效性领导层信息未写；节目提到的苹果泄露事件细节未独立核验，正文只作转述归属。
- mediastorm：粉丝数、播放量等快照数据不写；2024 年下架事件依据中文维基百科记述，未另查原始报道。
- yao-jingang："累计服务用户 1,000 万+"仅为本人项目 wiki 自述，正文标注自述口径。

## 遗留问题

1. `liu-run` YAML 官网链接 `www.run2me.com` 实测证书异常（cert 指向 liurun.online），建议整合者复核 YAML 来源链接（本批无 YAML 修改权限，未改）。
2. `luo-yihang` "创始人"头衔需要一条直接来源（如可靠报道或品玩官方自述）；建议后续补核。
3. `lauren-tan` 两处官方来源的雇主表述冲突，建议数月后复核 GitHub bio 与 react.dev 团队页是否收敛。
4. 联想采样于 2026-10-25 单日完成，无多语言多地区对照（仅 zh-CN 提示 + 少量英文种子词）。

## 附录：Google 联想原始采样（2026-10-25）

```json
{
  "method": "Google public autocomplete, Firefox client; zh-CN language hint",
  "samples": [
    {"query": "影视飓风", "suggestions": ["影视飓风", "影视飓风官网", "影视飓风 tim", "影视飓风素材", "影视飓风招聘", "影视飓风素材库", "影视飓风课程", "影视飓风tim爸爸", "影视飓风校招", "影视飓风ai课程"]},
    {"query": "影视飓风 tim", "suggestions": ["影视飓风 tim", "影视飓风tim爸爸", "影视飓风tim背景", "影视飓风tim老婆", "影视飓风tim离婚", "影视飓风 tim 学历", "影视飓风tim父亲", "影视飓风tim身价", "影视飓风 tim iphone duo", "影视飓风 tim 阿信"]},
    {"query": "塔塔集团", "suggestions": ["塔塔集团", "塔塔集团董事长", "塔塔集团老板", "塔塔集团世界排名", "塔塔集团 iphone", "塔塔集团 台湾", "塔塔集团市值", "塔塔集团 力积电", "塔塔集团汽车", "塔塔集团股票"]},
    {"query": "塔塔集团 是什么", "suggestions": []},
    {"query": "观猹", "suggestions": ["观猹", "观猹社区", "观猹平台", "观猹科技", "观猹insights", "观猹学社", "观猹集团", "观猹融资", "观猹大会", "观猹创始人"]},
    {"query": "观猹大会", "suggestions": ["观猹大会"]},
    {"query": "快刀青衣", "suggestions": ["快刀青衣", "快刀青衣 意思"]},
    {"query": "得到 快刀青衣", "suggestions": []},
    {"query": "刘润", "suggestions": ["刘润", "刘润铭", "刘润铭身高", "刘润铭哪里人", "刘润铭多高", "刘润铭短剧", "刘润铭女朋友", "刘润泽", "刘润铭任嘉伦", "刘润辉"]},
    {"query": "刘润 底层逻辑", "suggestions": ["刘润 底层逻辑", "刘润 底层逻辑2"]},
    {"query": "骆轶航", "suggestions": ["骆轶航"]},
    {"query": "品玩 骆轶航", "suggestions": []},
    {"query": "Lauren Tan", "suggestions": ["lauren tan", "lauren tan spacex", "lauren tan pstack", "lauren tan 是谁", "lauren tan linkedin", "lauren tan xai", "lauren tan youtube", "lauren tan github", "lauren tan spacexai", "lauren tan nationality"]},
    {"query": "poteto", "suggestions": ["poteto github", "poteto skills", "potato", "potato chat", "potato 下载 安卓", "potato starch", "potato corner", "potato下载", "potato app", "potato wedges"]},
    {"query": "姚金刚", "suggestions": ["姚金刚", "姚金刚 geo"]},
    {"query": "GEOFlow", "suggestions": ["geoflow", "geoflow v3", "geoflow github", "geoflow-slam++", "geoflow v2", "geoflow arxiv", "geoflow paper", "geoflow real-time fine-grained cross-view geolocalization via iterative flow prediction", "geoflow enforcing implicit geometric consistency in video generation", "geoflow v3 github"]},
    {"query": "GEO 是什么", "suggestions": ["geo是什么", "geo 是 什么 意思", "geo是什么业务", "geo 是什么公司", "geo是什么岗位", "geo是什么国家", "geo 是 什么 职位"]},
    {"query": "Tata Group", "suggestions": ["tata group", "tata group india", "tata group logo", "tata group pty ltd", "tata group companies list", "tata group ceo", "tata group apple", "tata group companies", "tata group executives", "tata group subsidiaries"]},
    {"query": "Tata Electronics", "suggestions": ["tata electronics", "tata electronics 台湾", "tata electronics products and solutions private limited", "tata electronics private limited", "tata electronics leak", "tata electronics systems solutions private limited", "tata electronics apple leak", "tata electronics data breach", "tata electronics stock", "tata electronics phone leak"]}
  ]
}
```

同名歧义说明：`刘润` 裸词混入演员"刘润铭"等；`poteto` 混入 potato 下载类；`Lauren Tan` 混入 "spacex"（同名他人）；`GEOFlow` 混入同名学术项目与论文。均已排除，未据此出题。`Tata Electronics` 的 "leak / apple leak / data breach" 联想与节目话题一致，但因无可靠报道核验，仅用于确认话题真实性，未单独出题。
