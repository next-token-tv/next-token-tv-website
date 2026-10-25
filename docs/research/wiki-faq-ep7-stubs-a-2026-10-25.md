# 第 007 期存根正文批次 A：FAQ 需求与事实研究记录

## 范围与口径

本记录支持 8 个产品存根正文的扩写：`4399`、`apple-a-series`、`baidu-search`、`claude-duet`、`deepseek-chat`、`deepseek-search`、`dianping`、`dragon-ball`。研究日期为 2026-10-25，面向中文和英文读者。

需求线索采样：百度搜索联想接口（`www.baidu.com/sugrec?prod=pc`，prod=pc，2026-10-25）与 Google Autocomplete（`suggestqueries.google.com/complete/search?client=chrome`，2026-10-25）。联想是实际需求线索，不是搜索量或热度排名。本次没有 Search Console、关键词工具数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。

事实核验以官方原始资料优先；历史事实使用可靠百科条目（Wikipedia，其自身引用新闻报道）。各条目的核验来源在正文"来源"节内链。

## FAQ 候选与证据

| 页面 | 采样词与实际联想 | 意图 | FAQ 采用 | 官方答案入口 |
| --- | --- | --- | --- | --- |
| 4399 | `4399` → 4399游戏盒、4399在线玩、4399小游戏入口、4399小游戏官网、4399网页版；`4399小游戏` → 网页入口版、盒下载安装、官网进入、在线玩、免费秒玩入口 | 导航、使用方式 | 是（2 问） | [4399 官网](https://www.4399.com/)、4399.cn |
| apple-a-series | `苹果a系列芯片` → 性能排行、是谁生产的、发展史、参数对比、和m系列区别、谁代工、是arm架构吗、自主研发吗；Google `apple a series` → chips、vs m series | 产品区别、供应链、版本 | 是（3 问） | [iPhone 18 Pro 官方页](https://www.apple.com/iphone-18-pro/)、Wikipedia: Apple silicon |
| baidu-search | `百度搜索` → 搜索引擎关键词、搜索引擎平台、AI伙伴、资源平台、一下 | 导航、定义 | 是（3 问，含"百度搜索 API"编辑归纳自官方产品页） | [百度](https://www.baidu.com/)、[百度产品页](https://www.baidu.com/more/) |
| claude-duet | Google `claude duet` → github、asset planning services、duet claude code 等，均为同名噪声（音乐、人名、酒庄），无有效中文联想 | 比较问题标编辑补充 | 是（2 问，标注编辑补充） | [Claude Duet 官方公告](https://claude.com/resources/articles/claude-duet)、[产品页](https://claude.com/product/claude-duet) |
| deepseek-chat | `deepseek app` → 下载老版本、官方正版、是免费的吗、是什么模型、模型版本、可以做什么、免费下载安装 | 导航、计费、模型归属 | 是（2 问） | [chat.deepseek.com](https://chat.deepseek.com/)、[API 开放平台](https://platform.deepseek.com/) |
| deepseek-search | `deepseek 搜索` → 搜索api、搜索内容、搜索服务、搜索付费；`deepseek搜索api` → 对百度影响、搜索引擎、内容泄露、官网入口；Google `deepseek search api` → api key、pricing、harness search api、can deepseek api search the web | 计费、接入、能力 | 是（3 问） | [Search API 官方指南](https://api-docs.deepseek.com/guides/search/) |
| dianping | `大众点评` → app下载、网官方入口、美食下载、人工客服电话；Google `dianping` → app、english、vs meituan | 导航、公司关系 | 是（3 问） | [美团官网](https://www.meituan.com/)、[美团规则中心](https://rules-center.meituan.com/m/detail/guize/1567?activeRule=1) |
| dragon-ball | `龙珠动画` → 哪年出的、有几部、观看顺序、作者是谁、第一集播出时间；`龙珠` 裸词混入龙珠直播、龙珠软膏等同名噪声 | 版本与作者、观看 | 是（3 问） | [东映动画《龙珠》官方页](https://www.toei-anim.co.jp/tv/dragon/)、Wikipedia: Dragon Ball (manga) |

排除同名歧义：`龙珠` 裸词混入"龙珠直播""龙珠软膏"，FAQ 只采用带"动画"修饰的候选；Google 的 `4399` 裸词混入货币换算、邮政编码等，只采用中文侧联想；`claude duet` 的 Google 联想全为同名噪声，该页 FAQ 标注为编辑补充。

## 事实核验（2026-10-25）

- **4399**：官网首页标题为"小游戏, 4399小游戏, 小游戏大全, 双人小游戏"；导航含动作、益智、体育、双人等分类；有 H5 游戏区（h.4399.com）、网页游戏（web.4399.com）、手机端（www.4399.cn、a.4399.cn）；账号功能含收藏、游戏记录；页脚版权 `Copyright © 2004 - 2026 4399.com`，备案主体在厦门，ICP 证 B2-20040099。来源：4399.com 首页抓取。
- **apple-a-series**：官方 iPhone 18 Pro 页面载明 A20 Pro："our most powerful and efficient iPhone chip design ever, with packaging inspired by our M-series chips"，GPU 较 iPhone 17 Pro 快至 40%，新增 Dual 16-core Neural Engine。Wikipedia: Apple silicon：首款自研 SoC 为 A4（2010，初代 iPad，后用于 iPhone 4）；A7 是首款用于智能手机的 64 位芯片（2013-09-10，iPhone 5S）；A11（2017）起引入 Neural Engine；A20 Pro 随 iPhone 18 Pro 于 2026-09-09 发布；三星代工至 A9，其后由台积电代工。
- **baidu-search**：Wikipedia: Baidu：百度于 2000 年 1 月 18 日由李彦宏（Robin Li）与徐勇（Eric Xu）注册成立。百度官方"更多"产品页列出网页/视频/图片/地图/新闻/学术等搜索服务、贴吧/知道/百科等社区服务，并列有"百度搜索 API——专为生成式AI提供检索服务"。home.baidu.com 载使命"用科技让复杂的世界更简单"。
- **claude-duet**：官方公告（2026-10-21）：Claude Duet 为主动式 Agent 应用，围绕 Claude Opus 5.5 构建；每天早上发送跨连接应用的简报；在带独立浏览器的虚拟机上运行，用户设备关机仍可继续；经短信或语音在一个持续线程交流；沿用 Claude 账号的记忆、技能与连接应用；发送消息、付款、删除等敏感操作需批准，凭据走 Managed Agents 设计（应用不直接接触密码）；连接 6000+ marketplace 插件；提供 iOS/Android 独立应用与 claude.ai 入口；研究预览先面向美国的 Pro 与 Max 用户开放，可在 claude.com/product/claude-duet 加入等候名单。
- **deepseek-chat**：网页入口 chat.deepseek.com（复用 deepseek 条目 2026-09-18 已核验结论）；官方更新记录页 api-docs.deepseek.com/updates/ 为存根既有官方链接。
- **deepseek-search**：官方指南（api-docs.deepseek.com/guides/search/）：Search API "finds web pages for a query and returns structured results. It is powered by DeepSeek's in-house search engine"，端点 `POST /v1/tools/search`；配套 Fetch API `POST /v1/tools/fetch` 返回单页 Markdown；Bearer 认证；query 1–128 字符，支持 `site:`、`-site:`、`"..."`、`lang:`、`after:`、`before:`；count 1–50；返回 title/url/snippet/summary、rerank_score（1.5 以上视为高质量）、authority 等。价格：Search 与 Fetch 均为每 1000 次成功请求 0.75 美元，仅 HTTP 200 且有结果时计费；经 DeepSeek Harness、Claude Code、Codex 的服务端工具调用已接入该 API，官方注明 2026 年 11 月 1 日北京时间 0 点起开始按次计费。速率限制 Search 100 QPS、Fetch 25 QPS。
- **dianping**：美团规则中心"大众点评排行榜规则"：榜单"基于大众点评APP、小程序等终端内的用户大数据，经算法自动计算，每日更新"，"公正不收费……不接受任何形式购买排名"；规则 2025-08-21 生效（页面发布日期 2026-04-28）。Wikipedia: Meituan：2015-10-08 美团与大众点评合并为一家公司（TechCrunch 2015-10-08 报道）；2020-09-30 起公司由"美团点评"更名"美团"。美团官网将"大众点评App"列为旗下应用，下载入口 w.dianping.com。
- **dragon-ball**：东映动画官方页：《龙珠》电视动画 1986 年 2 月–1989 年 4 月在富士电视台系播出，每周日 19:00–19:30；版权 © バードスタジオ／集英社・フジテレビ・東映アニメーション；页面另列《龙珠Z》《龙珠GT》条目。Wikipedia: Dragon Ball (manga)：鸟山明原作，1984-11-20 至 1995-05-23 连载于《周刊少年 Jump》，519 话、42 卷单行本；东映动画改编的《龙珠》《龙珠Z》于 1986–1996 年在日本播出，《龙珠Z KAI》2009–2015 重播，《龙珠超》漫画 2015 年起在《V Jump》连载。

未能核验、未写入正文：4399 的公司注册名称与创始信息（官网页脚编码乱码，未找到官方"关于我们"页）；大众点评的创立年份与创始人（英文 Wikipedia 无，中文 Wikipedia 抓取失败）；百度搜索引擎 baidu.com 的具体上线日期（Wikipedia 未给出）；A 系列芯片的 Arm 架构表述（未查 Apple 官方直接声明，FAQ 未采用）。

## 节目证据

第 007 期中文逐字稿（`src/content/imported/transcripts/next-token-weekly--007.zh-Hans.json`）中 8 个实体均有定位提及，讨论节采用的段落锚点（按 `src/data/transcript-paragraph-anchors.ts` 算法计算）：

- 4399：chapter-07，橘子 quote-c2b8197a219a502acd8e
- apple-a-series：chapter-07，歸藏 quote-556f4234eb1b8b091a84
- baidu-search：chapter-03，歸藏 quote-c50776dba2d62db0109f
- claude-duet：chapter-15，歸藏 quote-0dd01c58621b16cec70f、杨攀 quote-d33da2ace20a0b06ed99、歸藏 quote-4e6da5b941156af5dd04
- deepseek-chat：chapter-02，杨攀 quote-c527db7301f884083b47、quote-3c01b7329a38914309cf
- deepseek-search：chapter-03，橘子 quote-670720405136b15e01a0、向阳乔木 quote-31440856481f8bea97c3、橘子 quote-4b6962578fb24905ee49
- dianping：chapter-03，橘子 quote-b5918a310fc392688842、杨攀 quote-1a7f3327ef30b5b29220
- dragon-ball：chapter-02，杨攀 quote-6eda7467d56caa634be9、向阳乔木 quote-ce01afb4e537c77efcdd、歸藏 quote-57ddd46f20ac4745ba17

橘子在 chapter-03 说"他们这周还开源了一个搜索的 API"；官方文档将其作为按次计费的 API 提供，未写正文本人的声音，讨论节仅按转述处理评价部分。第 007 期逐字稿为中文，英文正文引用时标注 Chinese transcript。

## 采用与省略

- 全部 8 个实体写入"节目中的讨论"节；FAQ 数量：4399 两问，其余各 2–3 问；claude-duet 的 FAQ 标注编辑补充。
- 未写入：4399 游戏盒功能细节（仅指向 4399.cn）；苹果 A 系列性能排名类联想（排行是主观比较，不写）；deepseek 搜索"内容会不会泄露"类联想（官方文档未覆盖，无据不写）；dianping 客服电话（时效信息，不固定在正文）。
