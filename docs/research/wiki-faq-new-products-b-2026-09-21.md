# 新产品 Wiki FAQ 研究记录（B 组，2026-09-21）

## 范围与口径

本记录支持以下 10 个产品的 Wiki 正文：`douyin`、`icloud`、`ipad`、`arrow`、`bug-say`、`apple-tv`、`github`、`pinduoduo`、`weibo`、`lovable`。研究日期为 2026-09-21，覆盖中文与英文读者。

数据源：官方页面与官方新闻稿的直接抓取（见"事实核验"）、中文/英文维基百科（仅用于历史事实的旁证）、Google Autocomplete 公开联想接口（`suggestqueries.google.com`，`client=firefox`）。本次没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想词的出现不等于热门，顺序不构成排名。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| douyin | `抖音官网`（含 `抖音官网下载`、`抖音官网网页版`）、`抖音是什么时候开始的/出来的`、`抖音下载`、`douyin app/meaning`、`抖音团购`（含 `怎么做`、`入驻`） | 导航、定义、时间、功能 | 是（官网、上线时间、与 TikTok 关系、购物团购） | [douyin.com](https://www.douyin.com/)、[ByteDance 公司资料](https://www.bytedance.com/en/) |
| icloud | `icloud官网/官网登录`、`icloud是什么`、`icloud登录 中国`、`icloud 价格（中国/台湾/2tb）`、`icloud storage pricing/plans` | 导航、定义、计费 | 是（登录入口、免费空间、iCloud+ 区别、迁移） | [apple.com/icloud](https://www.apple.com/icloud/)、[icloud.com](https://www.icloud.com/) |
| ipad | `ipad官网`、`ipad是什么/是什么系统`、`ipad 型号（对照表/比较/推荐）`、`ipad air m4`、`ipad apple pencil compatibility` | 导航、定义、选型、配件 | 是（发布年份、型号选型、Pencil 兼容、与 Mac 配合） | [apple.com/ipad](https://www.apple.com/ipad/)、[2010 新闻稿](https://www.apple.com/newsroom/2010/01/27Apple-Launches-iPad/) |
| arrow | `quiver ai arrow（1/1.0/1.1）`、`arrow ai svg model`、`arrow 1.0 svg model`；裸词 `arrow 2 svg` 混入图标素材结果（歧义，弃用） | 定义、版本、接入 | 是（定义、版本关系、API、能力边界，另补 Apache Arrow 歧义说明） | [quiver.ai/models](https://quiver.ai/models/)、[quiver.ai](https://quiver.ai/) |
| bug-say | `叭哥说`、`叭哥说下载` 返回空；`网易叭哥说` 仅返回同音变体 `网易八哥说`；`bug say youdao` 空 | 导航、下载 | FAQ 为编辑补充（产品定义、别名、品类比较、收费、设备），官网线索几乎为零，已在答案中只使用官方页文字 | [bug.youdao.com](https://bug.youdao.com/) |
| apple-tv | `apple tv 订阅（价格/可以看什么/取消）`、`apple tv 怎么看（f1/世界杯/第几代）`、`apple tv app（for android/windows）`、`apple tv+（cost/shows/free trial）` | 订阅、观看、设备、价格 | 是（服务/硬件歧义、更名、内容、设备、价格指针） | [apple.com/apple-tv](https://www.apple.com/apple-tv/)、[tv.apple.com](https://tv.apple.com/) |
| github | `github是什么（网站/软件/平台）`、`github 官网（下载/入口/注册/中文）`、`github copilot（pricing/vs claude code）`、`github下载（慢）`、`github actions` | 定义、导航、AI 功能、下载 | 是（定义、与 Git 区别、官网注册、Copilot、下载代码） | [github.com/about](https://github.com/about)、[Copilot](https://github.com/features/copilot/)、[GitHub Docs](https://docs.github.com/) |
| pinduoduo | `拼多多官网（招聘/下载/网页版）`、`拼多多是什么（公司/平台）`、`拼多多商家版（官网/后台）`、`拼多多团购` | 导航、定义、商家入驻 | 是（官网、公司、与 Temu 关系、商家入驻） | [pinduoduo.com](https://www.pinduoduo.com/)、[pddholdings.com](https://www.pddholdings.com/) |
| weibo | `微博官网/官网入口`、`微博是什么`、`微博登录（网页）`、`微博热搜（榜/历史/api）` | 导航、定义、登录、热搜 | 是（官网、上线时间、与新浪关系、热搜入口） | [weibo.com](https://weibo.com/)、[Wikipedia: Sina Weibo](https://en.wikipedia.org/wiki/Sina_Weibo) |
| lovable | `lovable ai（app builder/alternatives）`、`lovable dev（pricing/review/login）`、`lovable是什么（公司）`、`lovable pricing（plans/free）`、`lovable vs replit/claude code/v0` | 定义、计费、比较 | 是（定义、公司来历、与 GPT Engineer 关系、价格指针、与编码工具区别） | [lovable.dev](https://lovable.dev/)、[lovable.dev/pricing](https://lovable.dev/pricing) |

歧义处理：裸词 `douyin` 英文结果混入美妆穿搭内容（douyin makeup 等），不采用；`arrow` 联想混入箭头图标素材与 Apache Arrow，仅采用带 `quiver`/`svg`/`ai` 修饰的候选，正文另加同名区分；`apple tv 怎么看第几代` 是硬件意图，归入"服务/硬件同名"FAQ 回答。`bug-say` 联想样本量不足，其 FAQ 标注为编辑补充，答案仅引用官方页文字。

## 事实核验

- **douyin**：字节跳动[官方公司页](https://www.bytedance.com/en/)列 Douyin 为中国市场产品，里程碑写明 2016 年 9 月在中国上线；中文维基百科[抖音条目](https://zh.wikipedia.org/wiki/%E6%8A%96%E9%9F%B3)记 2016-09-20 上线、2020-03-18 上线团购。douyin.com 为 JS 渲染页，仅作入口指针。"外卖"仅出现在节目发言中，官方资料未核验，正文未写。
- **icloud**：[apple.com/icloud](https://www.apple.com/icloud/) 核验了服务描述、免费 5GB、iCloud+ 四项隐私功能、家庭共享最多 5 人、Apple One 包含关系。价格（方案/地区）不写入正文，只留官方页指针。
- **ipad**：[官方产品页](https://www.apple.com/ipad/)核验四条产品线定位文案、Apple Pencil/键盘配件、Sidecar 与 Universal Control；[2010-01-27 新闻稿](https://www.apple.com/newsroom/2010/01/27Apple-Launches-iPad/)核验初代发布日期与 0.5 英寸/1.5 磅规格。iPadOS 27 等版本号不写成正文断言。
- **arrow**：[quiver.ai/models](https://quiver.ai/models/) 核验"Every Arrow model writes editable SVG, not pixels"、Arrow 2 / Arrow 2 Telos 均为 GA、每 Token 计费、5 种操作/14 张参考图、`arrow-1`/`arrow-preview`/`arrow-1.1`/`arrow-1.1-max` 于 10 月 16 日 08:00 UTC 停止服务并迁移 `arrow-2`；[quiver.ai](https://quiver.ai/) 核验 Text-to-SVG、Image-to-SVG、OpenResponses 兼容端点、MCP 服务器、CLI、Node SDK、logo 用例；[博客](https://quiver.ai/blog)核验 Arrow 2 与 Telos 于 2026-09-07 发布、QuiverAI MCP 于 2026-06-09 发布。
- **bug-say**：[bug.youdao.com](https://bug.youdao.com/) 页面正文为 JS 渲染，但官方 `<title>`（"AI语音Agent，比打字快5倍"）与 `<meta description>`（"网易叭哥说是一款桌面端 AI 语音输入工具，支持语音转文字、智能润色、自动去除口头语、语音翻译和跨应用输入"）可直接核验；域名属 youdao.com，与品牌实体 netease-youdao 一致。收费、平台版本无官方信息，不写。
- **apple-tv**：[apple.com/apple-tv](https://www.apple.com/apple-tv/) 核验"all-original streaming service"、原创内容无广告每周更新、F1/MLS 体育内容、设备列表与 tv.apple.com；2019-11-01 上线与 2025 年底更名（Apple TV+ → Apple TV）来自 [Wikipedia: Apple TV](https://en.wikipedia.org/wiki/Apple_TV%2B)（Apple Newsroom 原始新闻稿 URL 未能在本次会话中访问核验）。价格只留官方页指针。
- **github**：[github.com/about](https://github.com/about) 核验官方定位文案与 Copilot/Actions/Codespaces/Issues/安全/Sponsors 功能；微软子公司关系（2018 年起）来自 [Wikipedia: GitHub](https://en.wikipedia.org/wiki/GitHub)。官网列出的开发者/仓库数量等时效数字未采用；收购金额未核验未写。
- **pinduoduo**：[pinduoduo.com](https://www.pinduoduo.com/) 核验"新电商开创者"定位、运营方"上海寻梦信息技术有限公司"、商家入驻栏目；[pddholdings.com](https://www.pddholdings.com/) 核验"multinational commerce group"与 Nasdaq: PDD；中文维基百科[条目](https://zh.wikipedia.org/wiki/%E6%8B%BC%E5%A4%9A%E5%A4%9A)核验 2015 年 9 月创办、黄峥、Temu 2022 年 9 月推出。investor.pddholdings.com 有访问拦截，改用主域名官方页。
- **weibo**：[Wikipedia: Sina Weibo](https://en.wikipedia.org/wiki/Sina_Weibo) 核验 2009-08-14 由新浪推出、582M MAU（2022Q1，时效数字未采用）、2014 年 3 月分拆上市（代码 WB）；[Weibo Corporation](https://en.wikipedia.org/wiki/Weibo_Corporation) 核验总部北京。weibo.com 需登录，仅作入口指针。
- **lovable**：[lovable.dev](https://lovable.dev/) 核验"If you can describe it, you can build it"、托管/SSL/认证/后端、代码数据归属、集成与支付能力；[Wikipedia: Lovable (company)](https://en.wikipedia.org/wiki/Lovable_(company)) 核验 2023 年斯德哥尔摩创立、GPT Engineer 来历、2024-12 更名。官网的周新增项目、访问量等数字未采用；融资与估值未写入正文。

## 节目证据

所有 10 个实体的实体链接只出现在本地三期中文逐字稿的 Weekly #003。引用锚点（经单次全稿重算核验，与 `transcript-paragraph-anchors.ts` 算法一致）：

| 实体 | 章节 | 引用锚点 |
| --- | --- | --- |
| arrow | #003 chapter-10 | `quote-0a30df83836bcb436892` |
| arrow | #003 chapter-11 | `quote-99e82db7b58fb55934a2`、`quote-84c5af137a31273199d1`、`quote-0c2e43fe4e0eef5aa39b` |
| lovable | #003 chapter-06 | `quote-d150e1a6ffc1aa5496e6`（仅在正文核验时使用，未写入正文） |
| weibo | #003 chapter-07 | `quote-b23ef7b851ba88248d15` |
| icloud / apple-tv | #003 chapter-15 | `quote-7df8b0d200cdbdfda485`、`quote-cc569e0b99ccb850086e`、`quote-13f9837110ee6c395ac3`、`quote-57c1250d630d023a5b8e` |
| ipad | #003 chapter-15 | `quote-d56600f6fa6820c593c2`、`quote-5d702aadbf9a8b7f15d3` |
| douyin / pinduoduo | #003 chapter-16 | `quote-60e705d4d3e2a5890689`、`quote-523c8a5889b96ec249a0`、`quote-64d8deb6014c366f7e0d`、`quote-1b36f8ef5c42ec0624e7` |
| bug-say | #003 chapter-17 | `quote-5c87d0e8760938933ef2`、`quote-f627091715d2a8075cfa` |
| github | #003 chapter-18 | `quote-35655c31266543e58538` |

省略项与处理：lovable 的提及是"把 Lovable 换成 Jevable"的命名玩笑，不构成对产品的讨论，正文省略该章节并在本记录留档；weibo 的提及是工具案例里的场景举例，正文如实标注为顺带提及；icloud/apple-tv 的 iCloud 会员打包新闻为参与者转述，正文明确未独立核验，官方细节不写成事实。

## 分工说明

`arrow` 与 `bug-say` 的四个正文文件在本任务执行期间已由并行工作先行写入（本次会话 15:11–15:12）。本任务核验了其中的事实主张（QuiverAI API/MCP/博客日期、叭哥说官方页文字与章节发言），确认无误后保留其结构，并做了以下修订：arrow zh/en 的 Arrow 1.x 停服时间补全年份与时刻（2026-10-16 08:00 UTC），en 版停服时态由过去改为将来；bug-say zh/en 依据官方站点元数据补入"桌面端 AI 语音输入工具"定位与功能清单，并相应改写"支持哪些设备"FAQ。

## Autocomplete 原始采样（2026-09-21）

采样方法：Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox&q=<种子>`），未登录、无个性化参数；每条种子原样返回前 10 项。节选（`|` 分隔）：

- 抖音官网：抖音官网 | 抖音官网下载 | 抖音官网充值 | 抖音官网网页版 | 抖音官网app
- 抖音是什么：抖音是什么时候开始的 | 抖音是什么时候出来的 | 抖音是什么 | 抖音是什么公司
- 抖音团购：抖音团购 | 抖音团购网页版 | 抖音团购后台 | 抖音团购入驻 | 抖音团购api
- icloud官网：icloud官网 | icloud官网登录 | icloud 官网 登录 入口
- icloud价格：icloud 价格 | icloud 价格 对比 | icloud 价格 中国 | 2tb icloud价格
- icloud storage：icloud storage | icloud storage pricing | icloud storage plans | icloud storage full
- ipad型号：ipad 型号 | ipad 型号 查询 | ipad 型号 对照 表 | ipad 型号 比较 | ipad 型号推荐
- ipad apple pencil：ipad apple pencil | ipad apple pencil compatibility | ipad apple pencil pro | ipad apple pencil not working
- quiver ai arrow：quiver ai arrow | quiver ai arrow 1 | quiver in arrow 1.1 | quiver ai arrow 1.0
- arrow ai svg：arrow ai svg | arrow ai svg model | arrow 1 ai svg | arrow 1.0 svg ai
- 叭哥说：（空）；网易叭哥说：网易八哥说（同音变体）；叭哥说下载：（空）
- apple tv 订阅：apple tv 订阅 价格 | apple tv 订阅 可以 看 什么 | apple tv 订阅方案 | apple tv 订阅取消
- apple tv 怎么看：apple tv 怎么看f1 | apple tv 怎么看世界杯 | apple tv 怎么看第几代
- apple tv+：apple tv+ | apple tv+ cost | apple tv+ shows | apple tv+ free trial | apple tv+ deals
- github是什么：github是什么 | github是什么网站 | github是什么软件 | github是什么平台 | github是什么公司
- github官网：github 官网 | github 官网 下载 | github 官网 入口 | github 官网 注册 | github 官网 中文
- github copilot：github copilot | github copilot app | github copilot pricing | github copilot vs claude code
- 拼多多官网：拼多多官网 | 拼多多官网招聘 | 拼多多官网下载 | 拼多多官网网页版
- 拼多多是什么：拼多多是什么 | 拼多多是什么公司 | 拼多多是什么平台
- 拼多多商家版：拼多多商家版 | 拼多多商家版电脑版 | 拼多多商家版官网 | 拼多多商家版后台
- 微博官网：微博官网 | 微博官网入口；微博是什么：微博是什么；微博登录：微博登录 | 微博登录网页
- 微博热搜：微博热搜 | 微博热搜榜 | 微博热搜历史 | 微博热搜api | 微博热搜 rss
- lovable dev：lovable dev | lovable dev ai | lovable dev pricing | lovable dev review | lovable dev login
- lovable是什么：lovable是什么 | lovable是什么公司
- lovable vs：lovable vs replit | lovable vs claude code | lovable vs vercel | lovable vs cursor | lovable vs v0
- lovable ai：lovable ai | lovable ai website builder | lovable ai valuation | lovable ai alternatives

## 后续衡量

无发布后数据。若接入 Search Console，按页面、语言、国家、设备与 28 天窗口记录曝光、点击、平均位置与可见查询样本；搜索量、难度、CTR、命中率在本批次均为 N/A，联想词数量不作为需求量化证明。
