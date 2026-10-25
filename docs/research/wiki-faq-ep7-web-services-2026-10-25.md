# Web 服务与平台产品 Wiki FAQ 研究记录（第 007 期批次）

## 范围与口径

本记录支持 `railway`、`umami`、`v2ex`、`qichacha`、`wordpress`、`whisper`、`xbox` 七个产品正文的扩写。研究日期为 2026-10-25，面向中文和英文读者。采样数据源：Google 搜索联想（`suggestqueries.google.com`，`hl=zh-CN`）与百度搜索联想（`sugrec` 接口）。本次没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，也不构成效果承诺。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| Railway | `railway部署`、`railway部署 教程`、`railway部署 docker`（Google/百度）；`railway是什么`、`railway cli`、`railway vps`（Google）；`railway vs vercel`、`railway vs vercel vs render`（Google） | 部署方式、定义、平台比较 | 是（部署方式、与 Vercel 的关系） | [Quick Start](https://docs.railway.com/quick-start)、[Compare to Vercel](https://docs.railway.com/platform/compare-to-vercel)、[railway.com](https://railway.com/) |
| Umami | `umami analytics self hosted`、`umami analytics reddit/api/review`（Google）；`umami 统计`、`umami 网站 统计 工具`（Google） | 自部署、能力、定义 | 是（自部署、与同类统计工具的区别） | [umami.is](https://umami.is/)、[umami.is/docs](https://umami.is/docs) |
| V2EX | `v2ex是什么`、`v2ex是什么网站`、`v2ex是什么论坛`（Google/百度）；`v2ex邀请码`、`v2ex如何注册`（Google/百度）；`v2ex rss`（Google） | 定义、注册、接口 | 是（社区类型、名字含义、注册入口） | [V2EX About](https://www.v2ex.com/about)、[V2EX 帮助](https://www.v2ex.com/help) |
| 企查查 | `企查查官网`、`企查查开放平台`、`企查查mcp`、`企查查 api`（Google）；`企查查和天眼查哪个更准确/区别/是一家吗`（百度） | 导航、接口、同类比较 | 是（查询范围、与天眼查的关系、开放接口） | [qcc.com](https://www.qcc.com/) |
| WordPress | `wordpress建站教程`、`wordpress建站需要写代码吗`、`wordpress建站流程`（百度）；`wordpress 官网 下载`、`wordpress主题`（Google/百度） | 建站门槛、导航 | 是（建站是否要写代码、org 与 com 的区别） | [wordpress.org/about](https://wordpress.org/about/)、[com-vs-org 对比](https://wordpress.com/support/com-vs-org/)、[wordpress.org/download](https://wordpress.org/download/) |
| Whisper | `openai whisper 本地部署`、`openai whisper api`、`openai whisper 中文`、`openai whisper 下载`（Google）；`whisper语音识别下载`、`whisper语音识别模型`、`whisper语音识别软件`（百度） | 本地部署、API、定义 | 是（本地运行、翻译任务、API 入口） | [openai/whisper README](https://github.com/openai/whisper)、[OpenAI Audio API 参考](https://platform.openai.com/docs/api-reference/audio) |
| Xbox | `xbox是什么`、`xbox game pass`、`xbox cloud gaming`（Google）；`xbox series x和ps5哪个好`、`xbox对比ps5`（百度）；`xbox series x vs ps5 pro`（Google） | 定义、订阅服务、主机比较 | 是（Game Pass、与 PlayStation 5 的关系） | [Xbox consoles](https://www.xbox.com/en-US/consoles)、[Xbox Game Pass](https://www.xbox.com/en-US/xbox-game-pass)、[Xbox Cloud Gaming](https://www.xbox.com/en-US/cloud-gaming) |

歧义与排除说明：

- Google 裸词 `railway` 混入铁路相关含义（`railway map`、`railway museum`、`railway 12306`），只采用带部署/平台语义的候选。
- 百度裸词 `umami` 大量混入"鲜味"的烹饪与词典含义（`umami在烹饪中应用`、`umami怎么读`），只采用带统计/分析语义的候选。
- `railway部署openclash`、`railway部署 节点` 指向代理工具用途，超出本条目的产品范围，不采用。
- `v2ex邀请码`、`v2ex如何注册` 采为注册入口问题；邀请机制细节未在官方页面核到，答案只写已核验的注册入口并指向站内说明。
- `xbox series x 破解`、`xbox series x 相当于什么显卡` 涉及破解与第三方性能换算，不采用。
- 未采到的候选不虚构；以上即实际采样结果，英文正文沿用同一批问题形态的英文表述。

## 事实边界（官方核验摘要）

- Railway：官方首页定位为 "The all-in-one intelligent cloud provider"；文档 Quick Start 覆盖连接仓库部署、服务、数据库（PostgreSQL、MySQL、Redis、MongoDB）、环境变量、多环境与 CLI；官方文档设有 Compare to Vercel、Compare to Heroku 等对比页。
- Umami：官方站点自述 "Open-source web and product analytics"，无 Cookie、数据不出售不共享，支持自托管或 Umami Cloud；GitHub 仓库 `umami-software/umami` 为 MIT 许可。
- V2EX：官方 About 页自述 "a community of start-ups, designers, developers and creative people"，中文版称汇聚超过 750,000 名创意工作者；About 页"A Bit of History"记有 2005 年 6 月 8 日得名、2006 年 3 月以社区形式上线（Project Babel）、2010 年基于 Google App Engine 全新上线；"V2EX = way to explore" 为官方口号。
- 企查查：官网自述"全国企业信用查询系统"，提供查企业、查老板、查风险、查招标、找关系；数据来源声明为国家企业信用信息公示系统、中国裁判文书网、中国执行信息公开网、国家知识产权局等；运营方为企查查科技股份有限公司（苏州工业园区），持企业征信备案号 04005；官网列有工商接口（开放 API）与企查查 MCP。
- WordPress：官方 About 页记载 2003 年由 Mike Little 与 Matt Mullenweg 从 b2/cafelog 分叉创建，基于 PHP 与 MariaDB、GPLv2 许可；WordPress.com 官方支持文档说明两者运行同一软件、主要区别在托管方式。
- Whisper：官方 GitHub README 定义为 "a general-purpose speech recognition model"，可做多语言语音识别、语音翻译与语言识别；提供六个尺寸的模型（四个含英文专用版）及 `turbo` 优化版；README 写明 `turbo` 不用于翻译任务；代码与模型权重为 MIT 许可；仓库创建于 2022 年 9 月（GitHub API）。
- Xbox：官方主机页列出 Series X 与 Series S 及 Game Pass、跨设备（PC、掌机、移动、电视）入口；英文维基百科记载 Xbox 品牌包含四代家用主机、Xbox Cloud Gaming、Xbox 网络与 Game Pass；初代 Xbox 于 2001 年 11 月 15 日在北美发售，Series X|S 于 2020 年 11 月 10 日发售、与 PlayStation 5 同属第九世代。

## 节目证据（第 007 期逐字稿）

全部七个实体均在第 007 期中文逐字稿中被提及，引用锚点按 `src/data/transcript-paragraph-anchors.ts` 算法重新计算：

- Railway：chapter-12「从 Key 泄露聊到 AI 时代的安全边界」，歸藏转述 Railway 数据库被拖库、环境变量与 API Key 被盗的说法（`quote-d7bed632dbee9e2dec9b`）；向阳乔木称其是"特别大的 PaaS 平台"（`quote-5141030616c3c0cba63b`）。拖库说法未见官方渠道印证，正文按参与者转述处理。
- Umami：chapter-04「Agent 流量、个人网站与开放接口」，向阳乔木提到一个基于 Umami 开源修改的流量统计服务（`quote-7b1f7eddfc944a1032c0`）。
- V2EX：chapter-14「什么值得学：向 AI 提问与真实的人际交流」，橘子转述一个 V2EX 帖子（`quote-9a19a6b54ff6c39fdf96`）。
- 企查查：chapter-03「搜索 API：给个人 Agent 补上中文信息」，橘子说 DeepSeek 的搜索 API 能搜到企查查的信息（`quote-c567402685f293ff295e`）。
- WordPress：chapter-10「安全风险集中爆发：漏洞、证书与补丁」，歸藏在 PHP 漏洞语境中提到自己的多个 WordPress 网站（`quote-107704ffef288d42605e`）。
- Whisper：chapter-18「更大胆的任务：播客转写、Slack 与微信整理」，向阳乔木询问橘子本地转写插件所用的模型时提到 Whisper 与 Qwen 0.6B（`quote-084fbfda19fab1965a03`）。
- Xbox：chapter-08「主机游戏移植与平台的攻防」，歸藏说 Xbox 因微软第一方作品上 PC 而不受移植问题困扰（`quote-44074a457db3dbe511d8`）。

英文正文引用同一批中文逐字稿章节，链接 `/weekly/007/transcript#...` 并标注 Chinese transcript；不生成不存在的英文逐字稿链接。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；缺失指标一律 N/A。
