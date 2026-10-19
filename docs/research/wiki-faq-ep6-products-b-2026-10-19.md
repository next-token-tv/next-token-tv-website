# 第 006 期产品批次 B（catpaw、bitcoin、manus-cue、wechat-read、apple-homeview）FAQ 与事实研究记录

## 范围与口径

研究日期 2026-10-19，支持 `catpaw`、`bitcoin`、`manus-cue`、`wechat-read`、`apple-homeview` 五个产品条目的中英文 Wiki 正文。FAQ 线索来自 2026-10-19 的 Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`）；没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击、热度均为 **N/A**，联想顺序不代表热度。`catpaw`、`cue`、`bitcoin` 等短名歧义严重，采样时按品牌或用途加修饰词。

## 实体指代确认

- `catpaw`：YAML 官网为 `tech.meituan.com` 的 CatPaw 文章。指代美团的全场景 AI Agent 平台（英文名 CatPaw，官方产品站点 catpaw.meituan.com 的页面标题使用中文名"妙手"），与 cat-paw 字面义的宠物类商品（联想中出现 cat paw socks、cat paw club 等）无关，正文用"美团"消歧。
- `bitcoin`：YAML 官网为 bitcoin.org，即比特币（加密货币与支付网络）。正文保持中立百科口径：只写技术、历史与网络事实，不写价格行情、不给投资建议、不写价格预测。节目中"Agent 破解比特币"的说法按参与者推测处理，不写入正文事实区。
- `manus-cue`：与已有 `manus`（通用 Agent 主条目，2026-09-18 更新）、`manus-studio`（Manus 桌面工作区条目）同族。分工：`manus` 条目负责 Manus 通用 Agent 与网页、桌面、API 入口；`manus-studio` 条目负责桌面工作区；本条目只写 Cue——Manus 的移动端个人智能体应用（cue.im，"Cue by Manus"），与 Manus 桌面端的关系只作衔接说明。
- `wechat-read`：与已有 `wechat`（微信平台条目）、`wechat-input-method`（微信输入法条目）分工。本条目写微信读书（WeRead）应用本身：阅读、听书、笔记与会员；平台级内容（公众号、小程序、小微）留在 `wechat` 条目。
- `apple-homeview`：与已有 `apple` 品牌条目及 `homekit`（HomeKit 框架条目，本批另一代理撰写中，只链实体页）分工。本条目写 HomeView 硬件产品本身；HomeKit/Matter 兼容性细节链接 `homekit` 条目与官方页面。

## FAQ 候选与证据

采样日期均为 2026-10-19，来源 Google 联想接口；语言标注于种子词后。

| 页面 | 实际采样的种子词（语言） | 联想候选（节选） | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| catpaw | `美团 catpaw`（zh） | 美团catpaw、美团catpaw官网 | 定义、官网入口 | 官网/入口采用；定义采用 | [catpaw.meituan.com](https://catpaw.meituan.com/) |
| catpaw | `catpaw meituan`（en） | catpaw meituan、https catpaw meituan com | 官网入口 | 入口采用（en） | 同上 |
| catpaw | `catpaw`（en） | catpaws、cat paw socks、cat paw club 等 | 消歧 | 不采用为问题，用于正文消歧说明 | — |
| bitcoin | `bitcoin`（en） | bitcoin price、bitcoin price usd、bitcoin news、bitcoin price prediction 等 | 价格、行情 | 价格类问题采用一题，答案不提供行情与建议，指向风险提示 | [bitcoin.org](https://bitcoin.org/en/) |
| bitcoin | `what is bitcoin`（en） | what is bitcoin mining、what is bitcoin and how does it work、what is bitcoin cash | 定义、运作 | 定义采用；mining/如何运作采用；bitcoin cash 为另一项目，不采用 | [bitcoin.org](https://bitcoin.org/en/)、[Bitcoin Core README](https://github.com/bitcoin/bitcoin) |
| bitcoin | `比特币是什么`（zh） | 比特币是什么、比特币是什么时候发行的、比特币是什么时候出来的、比特币是什么货币 | 定义、发行时间 | 定义采用；发行时间采用；"材质/样子"类不采用 | [bitcoin.org 白皮书页](https://bitcoin.org/en/bitcoin-paper) |
| bitcoin | `比特币`（zh） | 比特币价格、比特币价格美元、比特币地址查询、比特币走势、比特币行情 | 价格、行情 | 并入价格类一题 | — |
| manus-cue | `manus cue`（en/zh 同列） | manus cue app、manus cue download、manus cue agent、manus cue invitation code、manus cue review、manus cue ios、manus cue windows | 定义、下载、邀请码、平台 | 定义采用；下载/平台采用；邀请码采用（以官方入口为准并注明节目观察）；review 不采用（无独立评测依据）；windows 桌面场景并入平台题（Cue 为移动端，桌面端是 Manus 桌面应用） | [cue.im](https://cue.im/)、[manus.im/desktop](https://manus.im/desktop) |
| manus-cue | `manus cue app`（en） | manus cue app download、cue app manus ai | 下载 | 并入下载题 | 同上 |
| manus-cue | `cue app`（en） | cue app review、cue app cost、cue app login、cue app ai | 收费、登录 | cost 采用为收费题（答案指向官方价格页，不写具体数字）；review/login 不采用 | [manus.im/pricing](https://manus.im/pricing) |
| wechat-read | `微信读书`（zh） | 微信读书网页版、微信读书mac、微信读书电脑版、微信读书下载、微信读书墨水屏、微信读书会员、微信读书app | 入口、平台、会员 | 网页版采用；平台采用（已核验范围：iOS App 与网页版，其余指向官方渠道）；会员采用（指向官方渠道）；墨水屏不采用（未核到官方支持） | [weread.qq.com](https://weread.qq.com/)、[App Store 条目](https://apps.apple.com/cn/app/id952059546) |
| wechat-read | `微信读书 导出`（zh） | 微信读书导出epub、微信读书导出pdf、微信读书导出工具、微信读书笔记导出 | 导出 | 笔记/书籍导出采用：官方渠道未见批量导出 epub/pdf 的公开入口，写节目经验并提示第三方工具风险 | 节目引用 + 官方站点 |
| wechat-read | `weread`（en） | weread app、weread web、weread qq、weread koreader、weread eink | 定义、web 入口 | 定义与 web 采用；koreader/eink 为第三方话题，不采用 | 同上 |
| apple-homeview | `apple homeview`（en） | apple homeview review、apple homeview release date、apple homeview price、apple homeview wall mount、apple homeview vs echo show、apple homeview ad | 发售、价格、安装、比较 | 发售采用；价格采用（官方页未标注）；壁挂采用；review/ad/vs echo show 不采用（无公平比较依据） | [apple.com/apple-homeview](https://www.apple.com/apple-homeview/) |
| apple-homeview | `苹果 homeview`（zh） | 无联想 | zh 定义 | zh 定义题为编辑补充（zh 联想过薄） | 同上 |

`bitcoin price prediction` 类意图不构成 FAQ 问题；价格话题统一收进一题并明确本页不提供行情与投资建议。

## 事实核验记录

### catpaw

- [美团技术团队文章](https://tech.meituan.com/2026/07/28/CatPaw-LongCat.html)（2026-07-28 发布）：标题《美团正式发布 CatPaw：全场景 AI Agent，从个人提效到企业智能化》；"搭载 LongCat 2.0 的美团全场景 AI Agent 平台 CatPaw 正式上线"；提供独立移动端 App 与 PC 客户端（双端同步）、云端支持 7×24 运行；企业侧有 Managed Agents 托管平台、数字员工（运行于飞书、企微等 IM）、支持私有化部署；商家侧将"门店经营、评价体系、营销转化到履约配送"封装为即装即用的专家与技能，提供覆盖"外卖、服务零售、医药健康"等行业的专属专家，"诚邀美团合作商家抢先体验"；体验地址 catpaw.meituan.com。
- [catpaw.meituan.com](https://catpaw.meituan.com/)（2026-10-19 抓取）：页面标题"妙手 - 全场景 AI Agent 平台 | words create worlds"；meta 描述"妙手 既提供开箱即用的 AI 智能工作台，也面向企业提供 Agent 开发与托管能力"；keywords 含 AI编程、代码补全、智能编程助手、IDE、妙手、美团。→ CatPaw 与"妙手"为同一产品站点的中英文名称，正文据此写"官方产品站点以'妙手'为页面标题"，不写改名日期（未核到）。
- 未核到：定价信息、7-28 文章之后是否有独立"改名"公告。杨攀在节目中的"改名"叙述按参与者转述处理。
- 文章中"覆盖 9 万员工、3 万个 Agent"等公司数字未写入正文（编辑规范：不为充实内容加入公司数字）。

### bitcoin

- [bitcoin.org 首页](https://bitcoin.org/en/)（2026-10-19 抓取）："Bitcoin is an innovative payment network and a new kind of money"；"Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin"；页脚 "© Bitcoin Project 2009-2026 Released under the MIT license"。
- [bitcoin.org 白皮书页](https://bitcoin.org/en/bitcoin-paper)：标题 "Bitcoin: A Peer-to-Peer Electronic Cash System"，"Satoshi Nakamoto's original paper is still recommended reading for anyone studying how Bitcoin works"。
- [Bitcoin Core README](https://github.com/bitcoin/bitcoin)（raw 抓取）："Bitcoin Core connects to the Bitcoin peer-to-peer network to download and fully validate blocks and transactions"；MIT 许可证；官网 bitcoincore.org。
- [English Wikipedia: Bitcoin](https://en.wikipedia.org/wiki/Bitcoin)（2026-10-19 抓取）：缩写 BTC；2008 年 10 月 31 日 Satoshi Nakamoto 署名白皮书发布于密码学邮件列表，Nakamoto 身份不明；2009 年开源实现发布后开始使用；账本起点 2009-01-03（创世区块）；工作量证明、SHA-256（两轮）；区块奖励每 210,000 区块减半，至总计 ₿21 million；自由开源软件、MIT 许可。
- 本页不给价格行情、不给投资建议、不做价格预测；区块奖励现值等易变数字不写入正文。

### manus-cue

- [cue.im](https://cue.im/)（2026-10-19 抓取）：`og:site_name` 为 "Cue by Manus"；标题 "Cue - Your Personal Agents, With Their Own Identity"；meta 描述 "Whatever life brings, your personal agents on Cue handle it — each with its own email, phone number, wallet and computer to get real work done."；keywords 含 "Cue, Manus, AI agents"。页面为 JS 应用，静态抓取仅得 meta 与标题。
- [manus.im/desktop](https://manus.im/desktop)（2026-10-19 抓取）："Take your agents with you on Cue, then pick up right where you left off on desktop."（Agents across devices 一节）；下载区提供 macOS/Windows 桌面版与 "Mobile app" 链接，未单独标注 Cue 的 iOS/Android 下载页。
- 未核到：Cue 发布日期、邀请码政策、定价与云电脑计费方式。节目中歸藏（非 +86 手机号要求）、橘子（云电脑单独收费约十几美金/月）、向阳乔木（宣传剪视频但实测剪不了）均为参与者经历，正文按归属转述，不作事实断言；"强制要求非 +86 手机号"未见官方渠道印证。

### wechat-read

- iTunes Search API（2026-10-19，`itunes.apple.com/search?term=微信读书&country=cn&entity=software`）：trackName 微信读书，artistName/sellerName 为 Tencent Technology (Shenzhen) Company Limited，trackId 952059546，bundleId com.tencent.weread，releaseDate 2015-08-27（App Store 上架日期），分类为图书/社交。官方描述："「微信读书」是微信官方阅读应用，提供海量优质书籍和流畅的阅读体验，帮你记录阅读数据和读书笔记，更有丰富的 AI 功能"；功能点含"发现优质好书（百万优质正版书籍、榜单、书单）""书中讨论交流""随时随地听书（全文朗读、书籍讲解和有声书）""记录阅读数据"。
- [weread.qq.com](https://weread.qq.com/)（2026-10-19 抓取）：腾讯版权署名（© 1998 - 2026 Tencent Inc.）；网页版含榜单、推荐值、期刊杂志、"传书到手机"入口。
- 未核到：会员定价（付费会员在节目中被杨攀提及，属其个人账户状态）；Mac/Windows 客户端官方支持情况（联想词显示有需求，官方渠道未逐一核验，正文只写已核验的 iOS App 与网页版）。
- 导出：官方渠道未见批量导出 epub/pdf 的公开入口（negative claim 用"未见"口径，并写节目中的第三方工具经验）。

### apple-homeview

- [apple.com/apple-homeview](https://www.apple.com/apple-homeview/)（2026-10-19 抓取）：
  - 形态：7 英寸 Liquid Retina 显示屏（True Tone，亮度 500 nits 至 0.3 nits）；铝制圆顶底座 + 不锈钢铰链调节角度；另有壁挂版（有线与插电两种安装），适用于玄关、走廊等位置。
  - 音视频：双全频驱动器 + 下射式低音炮，Spatial Audio，AirPlay 多房间；12MP Center Stage 相机，四波束成形麦克风；支持 Intercom。
  - 功能：Apple Intelligence 驱动的 Siri；Apple Music、News、Audiobooks 及兼容第三方应用；Find My；内置 Home app 智能家居面板（最多九路摄像头画面、灯光温度控制、烟雾/一氧化碳报警声检测、通知聚合）。
  - 家庭共享："Recognizes up to six people and delivers a personalized experience for each one."；访客可控制配件、看天气、设计时器、播放音乐，但无法访问个人信息；访问个人内容需配对 iPhone/iPad 同一 Wi-Fi、近期解锁并经人脸识别；A18 芯片 Secure Exclaves 隔离相机与麦克风数据处理。
  - 配件：兼容数千款配件，认准 "Works with Apple Home" 标识，需 HomeKit 或 Matter 设备，配件另售；Apple Home Collection 联名配件（摄像头、恒温器、门锁）页面标注 "Coming later"，端到端加密。
  - 发售："Available starting 11.13"，提供预购；页面未标注价格；销售渠道为 apple.com、Apple Store 应用及部分合作零售商。
- 节目中歸藏说"LG 联合做了一套能适配 HomeView 的智能电器"——Apple 官方页面未列出合作伙伴名称，该说法未见官方渠道印证，正文按参与者转述处理。
- 今天（2026-10-19）产品尚未到标注发售日：正文写"官方产品页显示 2026 年 11 月 13 日发售，页面同时提供预购"，不写"已开售"；价格留空给官方页面指针。

## 节目引用清单（均出自 #006 逐字稿，中文）

| 实体 | 章节 | 段落锚点 | 发言人 | 用途 |
| --- | --- | --- | --- | --- |
| catpaw | chapter-15 国内 Agent 的落点：生活助理做不起来，先给商家干活？ | `quote-5621e5aed44acf1fddda` | yangpan | CatPaw 是美团内部写代码的 Coding Agent、官号发"改名叫妙手"、场景给线下店家做管理经营 |
| catpaw | chapter-15 | `quote-fdbe18327f0e482abb7f` | yangpan | 美团给店家做店家管理、本地生活管理 |
| bitcoin | chapter-06 当收件人变成 Agent：邮件钓鱼、权限越界与“Token 税” | `quote-9f8775d6a80f3642787f` | orange | 担忧比特币的数学/密码学基础在 AI 进展下变危险 |
| bitcoin | chapter-06 | `quote-68876bd7405b1fabda6c` | guizang | 补充"就其实密码学嘛" |
| bitcoin | chapter-06 | `quote-c13cf19ab0bc952691a8` | yangpan | "Agent 的无产者联合起来把比特币破解了"的设想 |
| bitcoin | chapter-06 | `quote-55a2057bd8ad1714fe29` | xiangyang-qiaomu | 补充 Agent 都有电脑和算力 |
| manus-cue | chapter-15 | `quote-34c4736bf4592b7708c2` | xiangyang-qiaomu | 问 Manus Cue 声音为什么不大 |
| manus-cue | chapter-15 | `quote-6fb33e3c312a1b858749` | guizang | 朋友用邀请码注册时被要求非 +86 手机号 |
| manus-cue | chapter-15 | `quote-6b5c8a92a687ca84aeba` | guizang | "我们注册的时候没事儿，现在你再试试" |
| manus-cue | chapter-15 | `quote-898a9f144d9c76e13657` | xiangyang-qiaomu | 宣传点说剪视频，实测剪不了 |
| manus-cue | chapter-15 | `quote-821bd29835ee678c86f9` | guizang | "那个在 Manus 里，不在 Cue 里"（Studio 归属） |
| manus-cue | chapter-15 | `quote-608736df6458e977a6af` | orange | 云电脑单独收费"一个月十几美金"（参与者说法） |
| wechat-read | chapter-17 整理几百本微信读书藏书：这叫“假提效”，还是收纳的快乐？ | `quote-d3c4655c73b44780898f` | yangpan | 把微信读书书架挂到个人网站 |
| wechat-read | chapter-17 | `quote-b115d57b3c73fe45982c` | xiangyang-qiaomu | "他不是有 CLI 吗？直接弄" |
| wechat-read | chapter-17 | `quote-41b7aa025fc1e12e1fef` | yangpan | "只能读不能写" |
| wechat-read | chapter-17 | `quote-c2b87ba6afd5911c45c9` | guizang | 附和"是只能读" |
| wechat-read | chapter-17 | `quote-d4b289d3f6c4c0251474` | yangpan | 年度付费会员、让 Agent 分类几百本书、用 Computer Use 操作微信读书 App 排书架 |
| wechat-read | chapter-17 | `quote-070fdce3a7b5b658d694` | orange | "典型的就是假提效"的判断 |
| apple-homeview | chapter-08 智能家居为什么还这么难用？连接、体验与封闭生态 | `quote-bf47ab6d10ce0e705a20` | orange | 引入 Apple 新出 HomeView 话题、配件"接灯泡巨贵" |
| apple-homeview | chapter-08 | `quote-724fef49b74ad935a836` | xiangyang-qiaomu | 正方形像 Pad、能壁挂或放桌上（与官方形态一致） |
| apple-homeview | chapter-08 | `quote-d95f32cec345263fa56a` | guizang | LG 适配 HomeView 的智能电器、"又丑又贵"（未见官方印证） |
| apple-homeview | chapter-08 | `quote-145086d53c6eb9e9e658` | xiangyang-qiaomu | 六人面部识别、各自上下文（与官方功能一致） |
| apple-homeview | chapter-08 | `quote-d7b1a1a32420a4141791` | guizang | 任何人只能看自己账号的东西 |
| apple-homeview | chapter-08 | `quote-365f6e0eee4db5bb6467` | xiangyang-qiaomu | "生态太差了"的评价 |
| apple-homeview | chapter-08 | `quote-3fd01e27b4e2f5728cd1` | orange | "HomeView 加上一堆巨贵的设备卖给你，这不成立"的判断 |

锚点均用 `src/data/transcript-paragraph-anchors.ts` 的等价脚本（/tmp/nt-dump-ch.mjs）独立复算，与并行批次（homekit、lingguang、ideashell）既有引用交叉比对一致。#006 无英文逐字稿，英文正文引用时链接 `/weekly/006/transcript#...` 并标注 Chinese transcript。

## 省略与未采用

- catpaw：员工覆盖数、Agent 搭建数等公司数字；LongCat 2.0 参数规模（1.6T/48B/1M）等技术细节未写入正文（与 CatPaw 使用决策无关）；"改名"日期未核到，不写。
- bitcoin：价格、行情、市值、减半倒计时等易变数字一律不写；"比特币价格预测"类搜索意图不设 FAQ；节目中"破解比特币"的设想只作归属转述，正文不对协议安全性作评估；Bitcoin Cash 等分叉项目仅在消歧处不展开。
- manus-cue：Cue 发布日期、iOS/Android 分渠道下载链接、邀请码政策、定价与云电脑计费——均未核到官方来源，正文不写，只留官方入口指针；orange 的"云电脑一个月十几美金"仅作节目转述。
- wechat-read：会员价格、无限卡规则、墨水屏/Koreader 等第三方生态话题不写；Mac/Windows 客户端未核验不写。
- apple-homeview：价格（官方页未标注）、发售国家/地区列表、vs Echo Show 比较、广告片话题、"LG 联名"说法（未见官方印证）不作为事实写入。

## 剩余问题

- Cue 的公开发布日期与注册政策缺少官方存档页，若官方帮助中心或发布公告上线，可补一题" Cue 什么时候发布"。
- catpaw.meituan.com 的商家侧"抢先体验"边界如后续转为普遍开放，相关使用边界句需要复核。
- HomeView 价格未公布；官方页面上架价格后，FAQ 的"官方页面未标注价格"答案需要更新。
- 微信读书 Mac/Windows 客户端与导出功能的官方说明页未找到；如官方帮助中心可访问，可补平台支持与导出两题的官方入口。
- 英文逐字稿仅覆盖第 001–005 期；第 006 期上线英文逐字稿后，英文正文的 Chinese transcript 链接可换为对应英文页。
