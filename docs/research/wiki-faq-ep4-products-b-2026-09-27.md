# 第 004 期产品（第二批）Wiki FAQ 研究记录

## 范围与口径

本记录支持 `facebook`、`ticktick`、`instagram`、`microsoft-office`、`tamagotchi` 五个产品的 Wiki 正文。研究日期为 2026-09-27。FAQ 需求线索来自 2026-09-27 的 Google Autocomplete 实时采样（`client=firefox`，zh-CN 与 en 各一批），其余为官方页面与维基百科核验。没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**；联想候选顺序不表示热度。

## FAQ 候选与证据

| 页面 | 采样（日期 / 语言 / 种子词 → 采用问题） | 意图 | FAQ 采用 | 官方答案入口 |
| --- | --- | --- | --- | --- |
| facebook | 2026-09-27 zh：`facebook是什么`、`facebook官网`（联想含 官网登录/入口/下载）→ 官网在哪里、是什么平台 | 导航、定义 | 是 | [meta.com/facebook](https://www.meta.com/facebook/)、[Facebook Help Center](https://www.facebook.com/help/) |
| facebook | 2026-09-27 zh：`facebook 和 instagram`（联想：关系／区别／是一家公司吗）→ 关系与区别 | 比较 | 是 | [meta.com/facebook](https://www.meta.com/facebook/)、Wikipedia Instagram |
| facebook | 2026-09-27 en：`what is facebook`（联想混入 facebook plus、facebook muse、facebook dating 等其他产品，均不采用）、`is facebook social media` → 上线时间（编辑补充） | 定义、沿革 | 是（编辑补充"什么时候上线"） | Wikipedia Facebook |
| ticktick | 2026-09-27 zh：`滴答清单`（联想：mcp、下载、网页版、cli、api、会员、ticktick、官网）、`ticktick`（联想：ticktick (滴答清单)、ticktick 和 滴答 清单 有 什么 区别）→ 滴答清单与 TickTick 区别、免费吗、平台支持、MCP/CLI | 导航、版本关系、计费、开发者 | 是 | [ticktick.com/about](https://ticktick.com/about)、[ticktick.com](https://ticktick.com/)、[dida365.com](https://dida365.com/) |
| ticktick | 2026-09-27 en：`ticktick vs`（todoist/notion/google tasks 等）、`ticktick free`（free vs premium）→ 免费与会员（不与竞品展开） | 计费 | 是（不采用竞品比较题） | [ticktick.com/upgrade](https://ticktick.com/upgrade) |
| instagram | 2026-09-27 zh：`instagram是什么`、`instagram官网`（联想含 下载/登录/网页版，属访问类，未采用）→ 官网在哪里、是什么平台 | 导航、定义 | 是 | [meta.com/instagram](https://www.meta.com/instagram/)、[help.instagram.com](https://help.instagram.com/) |
| instagram | 2026-09-27 en：`what is instagram`（联想混入 instagram plus、instagram direct 等，不采用）、`instagram vs threads`（difference）→ 与 Threads 的区别、属于哪家公司 | 比较、归属 | 是 | [meta.com/instagram](https://www.meta.com/instagram/)、Wikipedia Instagram |
| microsoft-office | 2026-09-27 en：`microsoft office vs microsoft 365`（含 or、for mac 等变体）→ Office 与 Microsoft 365 的区别 | 定义、版本关系 | 是 | [office.com](https://www.office.com/)、Wikipedia Microsoft 365 |
| microsoft-office | 2026-09-27 en：`microsoft office free`（free download/free online/free version）→ 有免费版本吗；zh：`microsoft office下载` → 下载入口 | 计费、导航 | 是 | [office.com](https://www.office.com/) |
| microsoft-office | 2026-09-27 zh：`office是什么`（联想混入 wps office、family office、box office 等歧义，均排除）→ 套件包含哪些应用、推出时间（编辑补充） | 定义 | 是 | Wikipedia Microsoft Office |
| tamagotchi | 2026-09-27 zh：`拓麻歌子`（联想：角色、欢乐园、官网、图鉴、uni、paradise、是什么）、`tamagotchi`（zh 联想：paradise、uni、中文、是什么）→ 是什么、官网在哪里、现在还有吗 | 定义、导航、现状 | 是 | [tamagotchi-official.com](https://tamagotchi-official.com/us/)、[官方历史页](https://tamagotchi-official.com/us/history/) |
| tamagotchi | 2026-09-27 en：`what is tamagotchi`（联想：paradise、connection、uni、nano、plaza、in japanese）、`tamagotchi paradise`（growth chart、codes 等，属玩法细节，未采用）→ 谁发明的、名字由来、何时发售 | 定义、沿革 | 是 | Wikipedia Tamagotchi、官方历史页 |

说明：

- 种子词与联想均为 2026-09-27 Google Autocomplete 原始返回；歧义项（facebook plus / facebook muse、instagram plus、wps office / family office / box office、ticketmaster、tamagotchi plaza）已排除，不作为需求证据。
- "Facebook 什么时候上线""Office 何时推出"等沿革问题无直接联想证据，按编辑补充处理，答案依托已核验来源。
- 竞品比较类联想（ticktick vs todoist 等）信息不足且易过时，本轮不写。

## 事实核验

| 主张 | 来源 | 结论 |
| --- | --- | --- |
| Facebook 于 2004-02-04 以 TheFacebook 上线，创始人五人；最初限哈佛；2006 年向 13 岁以上公众开放 | [Wikipedia: Facebook](https://en.wikipedia.org/wiki/Facebook)（WebFetch 核验原文） | 采纳入正文与 FAQ |
| 公司 2021-10-28 更名 Meta Platforms | Wikipedia: Meta Platforms（同 [Meta 品牌正文](../../src/content/prose/brands/meta.wiki.zh-Hans.md)既有核验口径） | 采用 |
| meta.com/facebook 官方介绍："connect with friends, family and communities"；列出 Groups、Watch、Marketplace | [meta.com/facebook](https://www.meta.com/facebook/)（WebFetch 核验） | 采用；Feed/Reels 未在该页出现，不写 |
| Instagram 2010-10-06 iOS 上线，创始人 Systrom 与 Krieger；Android 2012-04-03；收购宣布 2012-04-09（约 10 亿美元）、完成 2012-09-06 | [Wikipedia: Instagram](https://en.wikipedia.org/wiki/Instagram)（WebFetch 核验原文） | 采用 |
| meta.com/instagram 官方介绍："Bringing you closer to the people and things you love"；未列具体功能板块 | [meta.com/instagram](https://www.meta.com/instagram/)（WebFetch 核验） | 采用；具体功能不写死 |
| TickTick 官方 About：GTasks 起步、打磨十余年、覆盖手机/电脑/平板/手表/网页、数千万用户 | [ticktick.com/about](https://ticktick.com/about)（WebFetch 核验） | 采用 |
| 功能（待办、日历视图、番茄钟 25 分钟、习惯打卡、艾森豪威尔矩阵、共享清单、看板、时间线、统计、40+ 主题；AI：Voice Capture、Audio Summary；经 MCP、CLI 或 OpenClaw 的自动化工作流） | [ticktick.com](https://ticktick.com/) 首页与 features 页（WebFetch 核验） | 采用；free/付费拆分不在官网功能页，不写具体额度 |
| 滴答清单面向中国大陆市场，官网 dida365.com，运营方杭州随笔记网络技术有限公司（页脚 © 2026 与 ICP 备案），站内引用 TickTick 官方账号，功能与 TickTick 一致 | [dida365.com](https://dida365.com/)（WebFetch 核验） | 采用；"同一产品不同市场版本"为依据两官网互指与同一运营方的归纳 |
| 免费注册 + 付费升级入口（"Sign Up for Free"、Pricing 指向 /upgrade） | ticktick.com features 页（WebFetch 核验） | FAQ 仅写"免费注册使用，付费升级方案见官网" |
| Office 由比尔·盖茨 1988-08-01 在 COMDEX 宣布；首批含 Word/Excel/PowerPoint；Windows 版 1990-10-01；Mac 版 1989；Word 1983（MS-DOS）、Excel 1985（Mac） | [Wikipedia: Microsoft Office](https://en.wikipedia.org/wiki/Microsoft_Office)（WebFetch 核验原文） | 采用 |
| Office 365 商用 2011-06-28；2020-03-30 宣布消费版更名 Microsoft 365，2020-04-21 生效；2022-10-13 宣布弃用 Office 品牌（office.com 2022-11、移动应用 2023-01） | [Wikipedia: Microsoft 365](https://en.wikipedia.org/wiki/Microsoft_365)（WebFetch 核验原文） | 采用 |
| office.com："Office is now Microsoft 365"；网页版基本应用与 5 GB 云存储免费 | [office.com](https://www.office.com/)（WebFetch 核验） | 采用 |
| Tamagotchi 由 WiZ 的横井昭裕与万代的真板亚纪开发；1996-11-23 日本发售；1997-05-01 美国发售；名称 = tamago + watch；1998 年前后热潮消退；2004 年带红外通信回归；1997 年搞笑诺贝尔奖 | [Wikipedia: Tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi)（WebFetch 核验原文） | 采用 |
| 官方历史页：1996-11-23 发售、"handheld care toy"、2004 年回归、截至 2025 年 7 月全球累计出货超 1 亿、2025 年 7 月 Tamagotchi Paradise 全球发售；官网系列：Paradise、Original、Connection、Uni、Nano；2026 年 30 周年周边 | [tamagotchi-official.com/us/history/](https://tamagotchi-official.com/us/history/)、[tamagotchi-official.com/us/](https://tamagotchi-official.com/us/)（WebFetch 核验） | 采用；出货数字按官方口径并以"截至 2025 年 7 月"锚定 |

核验限制：

- `microsoft.com`（含 YAML 官网链接指向的产品页）对本环境不可访问：WebFetch 连续超时，curl 返回拦截页。产品页 URL 仍按 YAML 列为入口与来源，但页面正文主张未直接核验，改以 office.com 与维基百科支撑。
- Facebook Help Center（facebook.com/help）作为官方帮助入口列入来源，页面内容未逐一核验；正文未引用其具体表述。
- 时间稳定口径：正文不写核验日快照；唯一带时间锚的状态数字是拓麻歌子出货量（官方口径，截至 2025 年 7 月），放在沿革与 FAQ；免费版、现售系列等时效信息一律指向官方实时页面。

## 节目证据（逐字稿原文已读）

逐字稿：`src/content/imported/transcripts/next-token-weekly--004.zh-Hans.json`（第 001–003 期无这五个实体的 entity-link 命中）。

| 实体 | 章节 | 段落锚点 | 发言人 | 摘要 |
| --- | --- | --- | --- | --- |
| facebook / instagram | 004 chapter-06（Muse：面向普通人的 Personal Agent） | quote-7abc5963e7b3fd15cdcf | guizang | Personal Agent 适合 Meta，用户群体来自 Facebook、Instagram 等大众产品 |
| facebook / instagram | 同上 | quote-dbed584c312b76ce1677 | guizang | 称小扎让 Muse 读 Instagram、Facebook、Threads 的信息（转述，未核官方） |
| facebook / instagram | 同上 | quote-467e4a742659ff1a24a0 | yangpan | 中文互联网圈对 Meta 价值认知不足，Meta 主流产品日常很少用，Instagram 相对小众 |
| facebook | 同上 | quote-b2bd6e8e568a41460ccd | yangpan | 自己十来年对 Facebook 只隔三差五登录（未单独入正文引用） |
| ticktick | 004 chapter-08（To-Do、记忆与可见的结果） | quote-aca49a28274776f05949 | guizang | 放下滴答清单改用 Chat 管理 To-Do，一年后失败并重新用回 |
| ticktick | 同上 | quote-6230521eb3e513367579 | orange | 滴答清单与 Typora 一周更新两次，仍在高频迭代 |
| microsoft-office | 004 chapter-07（AI 产品经理与人的使用体验） | quote-bbfb96fd47df6fe8bdcb | guizang | 以 Office 为例谈 AI 交互"说教、听不懂人话" |
| microsoft-office | 004 chapter-10（Muse Charm、手机与 AI 的入口） | quote-3e9ed2e859cf91f2bf03 | guizang | 手机上文件管理与找到 Office 都费劲 |
| tamagotchi | 004 chapter-10 | quote-b0771fbb41ac235b9923 | xiangyang-qiaomu | 用"拓麻歌子嘛"类比 Muse Charm |
| tamagotchi | 同上 | quote-ae816d82fd86f18443b8 | yangpan | 深圳公司都做过类似硬件；硬件不重要，背后平台生态重要 |
| tamagotchi | 004 chapter-12（掌上设备与日常生活） | quote-b170d7fba664999459c2 | xiangyang-qiaomu | 没玩过宠物类电子宠物，用拓麻歌子描述这类设备 |
| tamagotchi | 同上 | quote-99e47d80735c8f8e7c7a | xiangyang-qiaomu | 这类设备赶圣诞节发货当礼物、大批量销售 |
| tamagotchi | 同上 | quote-cf4400c184c7a6e73ff3 | yangpan | "我闺女有好几个呢"（在正文中以引文形式提及，未链接该锚点） |

锚点由发言人与归一化原文生成（算法同 `src/data/transcript-paragraph-anchors.ts`），已在本地重新计算核对。

## 分工与互链

- `facebook`、`instagram` 与既有 [Meta 品牌正文](../../src/content/prose/brands/meta.wiki.zh-Hans.md)分工：产品页写平台沿革、功能与入口，公司业务、AI 与硬件归品牌页；两者互链 `/wiki/brands/meta`。
- `microsoft-office` 与既有 Microsoft 品牌正文分工：产品页写套件沿革、应用组成、Office 与 Microsoft 365 的关系；公司与 Windows 归品牌页与 [Windows 条目](/wiki/products/windows)。
- `ticktick`、`tamagotchi` 无同仓库品牌实体，未造新品牌页或关系数据。

## 未知项与遗留

- Microsoft 官方产品页正文无法直接核验（见上）；若后续可访问，宜复核"应用组合随订阅方案不同"的表述。
- TickTick 免费与会员的具体功能拆分未核验，正文一律指向官方价格入口。
- Muse 读取 Instagram/Facebook/Threads 数据的说法出自节目参与者，未对照 Meta 官方说明，正文已按转述标注。
- Facebook Help Center、instagram.com 帮助内容未逐页核验，仅作官方入口链接。
