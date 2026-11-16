# 第 010 期新增品牌与人物 Wiki 正文研究记录（montbell、microsoft-word、jeff-atwood）

## 范围与口径

本记录支持第 010 期新增的三个实体：品牌 `montbell`、产品 `microsoft-word`（既有实体，补正文）、人物 `jeff-atwood` 的中英文 Wiki 正文。研究日期 2026-11-16。需求线索来自 Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`）；本次没有 Search Console、关键词工具或任何搜索量、难度、排名、点击数据，相关指标一律 **N/A**，联想候选不等于热门。

重要边界：第 010 期逐字稿（`src/content/imported/transcripts/next-token-weekly--010.zh-Hans.json`）为 review-draft 未发布，三个条目的"节目中的讨论/提及"小节一律使用纯文本提及（章节名与 JSON 逐字一致），不创建任何指向 `/weekly/010/transcript` 的链接；已核对第 001–009 期逐字稿，无 `microsoft-word`、`montbell`、`jeff-atwood` 实体命中，故不存在可引用的已发布期链接。

## 身份核验结论与来源

| 实体 | 身份结论与置信度 | 关键核验来源 |
| --- | --- | --- |
| montbell | 日本户外装备品牌（モンベル，mont-bell 株式会社），1975 年 8 月 1 日由辰野勇（Isamu Tatsuno）创立，总部大阪市西区新町，从事户外运动用品的企划、制造、销售。置信度高 | [日文维基百科 モンベル条目](https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%B3%E3%83%99%E3%83%AB)（"1975年8月1日"、創業者 辰野勇、所在地"大阪府大阪市西区新町2丁目2-2"、事業内容"アウトドアスポーツ用品の企画、製造、販売"）、[Montbell 官方站点](https://www.montbell.com/jp/en)（存在性核验；about/company/history 页为 JS 渲染，抓取正文缺失，未采到文字） |
| microsoft-word | 微软文字处理应用：1983 年以 "Multi-Tool Word for Xenix" 起步后更名，1983-10-25 首发于 Xenix；Charles Simonyi 主持（1981 年加入微软、前施乐 PARC Bravo 开发者）、Richard Brodie 为主要软件工程师；DOS 版 1983、Mac 版 1985、Windows 版 1989；1990 年代超越 WordPerfect 成为事实标准（Dataquest：1991 年 Windows 市场约 55%、1996 年 Q1 全球约 80%），随 Office 捆绑销售。置信度高 | [英文维基百科 Microsoft Word 条目](https://en.wikipedia.org/wiki/Microsoft_Word)（WebFetch 全文核验，含日期与 Dataquest 数字）、[微软官方 Word 页](https://www.microsoft.com/en-us/microsoft-365/word)（存在性核验） |
| jeff-atwood | 美国软件开发者（1970-12-27 出生），Coding Horror 博客（2004 年开办）作者；2008 年与 Joel Spolsky 联合创办 Stack Overflow（后发展出 Stack Exchange，2021 年以 18 亿美元售予 Prosus）；2013-02-05 宣布创办 Civilized Discourse Construction Kit, Inc. 开发 Discourse，2023-02-01 卸任 CEO 转任执行董事长；Atwood 定律出自 2009-08-14 博文 "All Programming Is Web Programming"（原文核验："any application that can be written in JavaScript, will eventually be written in JavaScript"）。置信度高 | [英文维基百科 Jeff Atwood 条目](https://en.wikipedia.org/wiki/Jeff_Atwood)（WebFetch 全文核验）、[Coding Horror 原文](https://blog.codinghorror.com/all-programming-is-web-programming/)（curl 下载 HTML，正文含 "That's why I coined Atwood's Law"，文末日期 14 Aug 2009） |

指代确认（任务线索核对）：`jeff-atwood` 的 GitHub/YAML bio 与维基条目一致，为同一人。任务线索猜测的"《人月神话》相关讨论或 Discourse"：逐字稿中 Discourse 无提及；第 010 期 chapter-25"AI 时代的人月神话：功能越多，产品越好吗"确有《人月神话》主题讨论（橘子称在写文章《AI 时代人月神话》），但该章发言未提及 Atwood 本人，正文仅作边界说明，不建立人物关联。

## 事实核验与边界

- montbell：官方站点 about/company/history/founder 页面均为 JS 渲染，抓取正文缺失，创立事实以日文维基百科为准。节目讨论中"1000 蓬""国内店比日本贵"等均为参与者个人说法，正文全部归属橘子（orange），波司登/巴塔哥尼亚/始祖鸟/优衣库对比亦为其个人说法；Montbell 具体在售产品型号与蓬松度规格未能从官网产品页核验（JS 渲染 + 404），正文不写具体型号，FAQ 指向官网产品页交由读者查询。
- microsoft-word：历史事实依英文维基百科条目全文；"1990 年代事实标准""随 Office 捆绑"按条目原文转述。节目讨论中"干掉微软""自杀了"等为参与者对当时模型办公产品的评价，正文归属歸藏、橘子、杨攀，并写明不代表微软立场。
- jeff-atwood：任职时间线全部依英文维基百科；Atwood 定律措辞与日期经 Coding Horror 原文核验（维基条目无该定律，故引用一手来源）。旧博文《The Mythical Man-Month》现返回 404 且不在博客 sitemap-posts.xml 中，正文与研究记录均不引用该链接。stackoverflow.com 对 curl 返回 403（反爬），属访问限制而非页面不存在，作为来源保留。
- 三个条目均写明本人/公司未参与录制或未表态，提及内容全部为主理人发言并注明发言人；未刷新 YAML `lastVerifiedAt`。

## FAQ 候选与证据

采样时间 2026-11-16，方法为 Google 公开联想（`client=firefox`）。"编辑补充"指没有直接联想词、但可由已核验资料明确回答的问题。

| 页面 | 采样词 → 联想候选 | 意图 | FAQ 采用 | 答案来源 |
| --- | --- | --- | --- | --- |
| montbell（zh） | `montbell 羽绒服` → "montbell 羽绒服""montbell 130 克 羽绒服"；`montbell 是什么` → "montbell 是什么品牌""montbell 是什么"；`蓬松度 羽绒` → "蓬松度 羽绒""uniqlo 羽绒外套 蓬松度""羽绒外套 (蓬松度 800)""羽绒外套 蓬松度" | 品牌身份、羽绒品类、蓬松度含义 | Montbell 是什么品牌；Montbell 的"1000 蓬"羽绒服是什么意思；Montbell 是哪国的品牌；Montbell 的产品贵吗（编辑补充，由节目语境与官网价格页承接） | 日文维基百科、Montbell 官方站点 |
| montbell（en） | 复用 zh 线索（en 联想未单独采样） | 同上 | 同上四问的英文版 | 同上 |
| microsoft-word（en） | `microsoft word who created` → "microsoft word who created""when is microsoft word created"；`microsoft word history` → "history timeline" 等；`microsoft word 1983` → "microsoft word 1983 version""microsoft word 1.0 1983""1983 nace microsoft word" | 诞生年份、开发者、与 Office 关系 | When was Microsoft Word created; Who developed Microsoft Word; How does Word relate to Office and Microsoft 365（编辑补充）；Why did Word become the dominant word processor（由 history 联想承接） | 英文维基百科条目、微软官方页 |
| microsoft-word（zh） | 复用 en 线索翻译（zh 联想未单独采样） | 同上 | 同上四问的中文版 | 同上 |
| jeff-atwood（en） | `jeff atwood` → "jeff atwood blog""jeff atwood and joel spolsky""jeff atwood coding horror""jeff atwood and betsy burton"；`jeff atwood stack overflow` → 同词；`jeff atwood law` → 同词；`jeff atwood discourse` → 同词 | 身份、定律、两家公司 | Who is Jeff Atwood; What is Atwood's Law; Who founded Stack Overflow; What is Discourse and how is Jeff Atwood connected to it | 英文维基百科条目、Coding Horror 原文、discourse.org |
| jeff-atwood（zh） | 复用 en 线索翻译（zh 联想未单独采样） | 同上 | 同上四问的中文版 | 同上 |

未采用的联想词：`jeff atwood net worth`（无合适来源且不合适出题）；`jeff atwood syracuse indiana`、`jeff atwood farm bureau`、`jeff atwood indiana`（同名歧义，非本条目人物）；`jeff atwood and betsy burton`（未能核验可靠关联来源）；`microsoft word 1983 download`、`microsoft word 1983 logo`（站点下载/图片类需求，非本页范围）；`montbell 130 克 羽绒服`（具体产品规格未能从官网核验，不出题）；`microsoft word history of edits/changes`（应用内版本历史功能问题，与本页历史主题无关）。

## 节目证据

本地中文逐字稿（第 010 期，review-draft）中的相关章节，均经读取原文核对；第 001–009 期无这三个实体的命中。因第 010 期未发布，以下仅记录章节与发言归属，正文不生成 `/weekly/010/...` 链接。

| 实体 | 期数与章节 | 发言人 | 内容（要点） |
| --- | --- | --- | --- |
| montbell | #010 chapter-28 "上周买了啥：遮光贴、羽绒服与 GTA 6" | orange（向阳乔木追问） | 橘子称 Montbell 1000 蓬羽绒服"很贵，国内那个店就卖得很离谱，在日本那边还行"，户外博主认为物有所值；按蓬松度比较波司登约 650、巴塔/始祖鸟约 800、1000 为其口中"最高等级"；因优衣库棉服穿几个月就坏而更换；到手评价"轻若无物，像手机一样轻""超级大，超级蓬""有点像一个 iPhone"。全部为个人购买体验 |
| microsoft-word | #010 chapter-19 "国内模型与办公工具：产品围绕 Agent 生长" | yangpan（歸藏、橘子参与） | 杨攀：以前软件以操作系统、浏览器为中心（如 Office）；GPT/Grok/Muse Space 等功能"对标的就是原来我们用的，飞书文档，Word 呀，Office 这些东西"；新产品会"慢慢地把原来的老的产品直接覆盖掉"，"Word……围绕新的 Agent 这些产品，它也不会出现"。歸藏：宝玉"重做了一套 Office"；橘子："干掉微软"；杨攀："不需要干掉，自杀了" |
| jeff-atwood | #010 chapter-06 "从一百多兆压到 8 兆：小红书小工具与浏览器分发" | yangpan（橘子接话） | 杨攀："之前有个叫 Atwood，有一个定律说。能用 JavaScript 实现的，最终都将被 JavaScript 实现"，语境为歸藏将 100 多兆 HTML 游戏压成 8 兆上传小红书小工具、浏览器分发效率；橘子接 Three.js："世界终于发现大家只需要浏览器就够了" |

章节归属均为逐字对照 JSON `chapters[].id/title` 与 `turns[].speaker/speakerId` 的结果，无杜撰。

## 交付清单

- `src/content/prose/brands/montbell.wiki.zh-Hans.md`、`montbell.wiki.en.md`（新增）
- `src/content/prose/products/microsoft-word.wiki.zh-Hans.md`、`microsoft-word.wiki.en.md`（正文补写；YAML 未改动）
- `src/content/prose/people/jeff-atwood.wiki.zh-Hans.md`、`jeff-atwood.wiki.en.md`（新增）
- frontmatter `updatedAt: '2026-11-16'`；站内链接仅 `/wiki/products/microsoft-office` 与 `/en/wiki/products/microsoft-office`（目标文件存在）；en 页面无逐字稿链接，未生成不存在的 `/en/weekly/...` 路径。

---

# 追加批次：yuri 与 logan-kilpatrick（2026-11-16）

## 范围与口径

本节追加第 010 期新增人物 `yuri`、`logan-kilpatrick` 的中英文 Wiki 正文研究记录。研究日期 2026-11-16。任务下达时第 010 期逐字稿已正式发布（JSON `publicationStatus: "published"`），两个条目的"节目中的提及"小节均使用章节链接与逐字稿段落锚点链接（`/weekly/010/transcript#chapter-NN`、`#quote-*`），与本文件前半部分"review-draft 未发布"的边界不同：该边界仅适用于当时交付的 montbell、microsoft-word、jeff-atwood 三个条目，不追溯修改。

## 身份核验结论与来源

| 实体 | 身份结论与置信度 | 关键核验来源 |
| --- | --- | --- |
| yuri | YURI（尤栗）是汗青工作室旗下 AI.TALK 打造的数字歌手/数字人/虚拟歌手，非真人；AI.TALK 为汗青（赵汗青）创办的 AI 内容品牌。B 站官方 MV《SURREAL（超现实）》于 2025-06-03 由 AI-TALK 账号发布（标题"AI音乐MV「SURREAL（超现实）」数字歌手Yuri"，简介自称"数字歌手"、说明由汗青工作室旗下品牌 AI.TALK 以 AIGC 制作，并提到上一首"白色皮卡丘"，故《SURREAL》不写成"首支 MV"）。置信度高 | [B 站官方 MV（BV1La7hzCEiy）](https://www.bilibili.com/video/BV1La7hzCEiy)（经 Bilibili open API `x/web-interface/view` 读取 title/owner.name/desc 核验）、`people/yuri.yaml`、`people/hanqing.yaml` |
| logan-kilpatrick | Google DeepMind 的 Google AI Studio 与 Gemini API 产品负责人；官方作者页标题原文 "Product Lead, Google AI Studio and the Gemini API"，简介原文 "Logan Kilpatrick works on Google AI Studio and the Gemini API at Google DeepMind, where he leads the team dedicated to enabling developers worldwide to build with Gemini, Veo, Imagen and more."。X 账号 @OfficialLoganK。置信度高 | [Google 官方作者页](https://blog.google/authors/logan-kilpatrick/)（WebFetch 全文核验，2026-11-16） |

任务线索核对：任务提示"products/aihot（AI.TALK 相关，确认存在后互链）"——`products/aihot`（AIHOT.news）经查为数字生命卡兹克创建运营的 AI 热点资讯网站（见其正文与 `products/aihot.yaml`、官方仓库 KKKKhazix/AIHOT），与 AI.TALK、汗青工作室、YURI 均无关系，故 yuri 条目未与 aihot 互链。仓库内无独立 AI.TALK 品牌实体，YURI 条目互链对象为 `people/hanqing`。

## 事实核验与边界

- yuri：《SURREAL》播放量（一个月破 1200 万）、品牌合作（The North Face、vivo）、超现实AI音乐会（2026-09 上海、与 2026 外滩大会联合主办、"首场AI歌手商业演唱会"口径）沿用 [hanqing 条目批次](/wiki/people/hanqing)已核验来源（易论AI 访谈、AI Talk 官方现场视频），正文按原归属措辞引用，未刷新 YAML `lastVerifiedAt`。身份表述统一为"数字歌手/数字人/虚拟歌手，由 AIGC 生成、不对应真人"，与 hanqing 页"AI 原生歌手（AI 偶像）"口径一致，并在"易混概念"中说明。
- logan-kilpatrick：职务只写官方作者页原文支持的表述；未写入过往经历（Firebase、Gemini 早期产品角色等公开资料未在本次核验范围），不推断。Ch17 逐字稿原文只出现"Logan"（向阳乔木发言，锚点 `quote-43c7ee213de832ef0c3b`），未写全名；正文写明"结合语境与公开身份指向本条目人物"，并在 FAQ 重复该边界。
- Carbon、Fable、Opus 5.5、剪映等节目话题均为参与者发言内容，正文全部归属发言人并注明不代表相关公司/本人立场；汗青与 AI.TALK 方面、Logan Kilpatrick 本人均未参与录制。
- 第 010 期逐字稿中 YURI/尤栗 命中仅 chapter-14（1 处），Logan 命中仅 chapter-17（1 处），经全文正则扫描确认。

## 节目证据与锚点核验

| 实体 | 期数与章节 | 发言人 | 引用方式与锚点 |
| --- | --- | --- | --- |
| yuri | #010 chapter-14 "从游戏到机器人，为什么说“语言即世界”" | xiangyang-qiaomu | 段落锚点 `quote-bc0b694de1efc348a6dc`（"全部都说我跟 AI 协作做了一个视频……我觉得趋势一定是这样"） |
| yuri | 同上 | yangpan | 段落锚点 `quote-d4e90ee8deb4fa325ab7`（"汗青应该是原来用很多做视频的工具……跟我剪这个咱们的播客是一样的"） |
| yuri | 同上 | guizang / yangpan | 锚点 `quote-06ffb9162255015b7292`（"它是纯只用 API 嘛，"）、`quote-b18fcbc1364c1b6df1bb`（"纯用 API 去做出来的。"） |
| yuri | 同上 | orange | 锚点 `quote-0ce5a861396faa0d6947`（剪映/自己搭的一套代码逻辑/演唱会粒子特效）、`quote-b1f28867f7277f214428`（"用各种声音模型……最后就是用 HTML 搞定的"） |
| logan-kilpatrick | #010 chapter-17 "Carbon 体验：写作的人味与设计、编码能力" | yangpan | 锚点 `quote-488f537d02f013c270e0`（"谷歌的人在 Twitter 上都神经病了是吧？"） |
| logan-kilpatrick | 同上 | xiangyang-qiaomu | 锚点 `quote-43c7ee213de832ef0c3b`（"Logan 是吧？"） |
| logan-kilpatrick | 同上 | orange | 锚点 `quote-bffe336060ab1d7bb10a`（"但是你还是要展现出这个 Respect……"） |

锚点按 `src/data/transcript-paragraph-anchors.ts` 算法（speakerId ?? speaker + "\0" + NFC 归一化合并空白文本，sha256 前 20 位 hex，重复加 `-N`）用 node + crypto 对第 010 期全文复算验证，全部命中且无重复后缀。

## FAQ 与需求线索

本批次未做新的搜索联想采样（沿用本文件开头记录的方法与限制，指标一律 N/A），FAQ 为编辑补充，问题覆盖：YURI 身份、是否真人、《SURREAL》发布时间、超现实AI音乐会、第 010 期讨论内容；Logan Kilpatrick 身份与职务、ch17 "Logan"指代、X 账号。答案来源为上表核验来源。

## 交付清单（追加批次）

- `src/content/prose/people/yuri.wiki.zh-Hans.md`、`yuri.wiki.en.md`（新增）
- `src/content/prose/people/logan-kilpatrick.wiki.zh-Hans.md`、`logan-kilpatrick.wiki.en.md`（新增）
- frontmatter `updatedAt: '2026-11-16'`；站内链接目标已核验存在：`/wiki/people/hanqing`、`/en/wiki/people/hanqing`、`/wiki/brands/google-deepmind`、`/en/wiki/brands/google-deepmind`、`/wiki/products/google-ai-studio`、`/en/wiki/products/google-ai-studio`、`/wiki/products/gemini`、`/en/wiki/products/gemini`；en 页逐字稿链接一律指向中文路径 `/weekly/010/transcript#...` 并标注 in the Chinese transcript。未修改任何 YAML。

## 追加批次：xiang-zheng、tom-huang、yetone（2026-11-16）

### 身份核验结论与来源

| 实体 | 身份结论与置信度 | 关键核验来源 |
| --- | --- | --- |
| xiang-zheng | 相征是中文播客《大内密谈》的创始人兼主播，别名"相爷"；《大内密谈》为"深夜谈谈"出品的泛文化播客，Apple 创作者介绍原文"创始人兼主播相征，是最早开始做中文播客的创作者之一"。小宇宙单集页 vol.1244《作为乙方的创作者，困境与救赎。》显示"主播 / 相征""嘉宾 / 重轻 小白免 唐汉霄"。置信度高 | [Apple 播客创作者介绍](https://podcasts.apple.com/cn/multi-room/6753197297)（WebFetch 全文核验，2026-11-16）、[《大内密谈》vol.1244 单集页（小宇宙）](https://www.xiaoyuzhoufm.com/episode/6747ffb7c3b2a2f3340a95ae)（WebFetch 核验主播与嘉宾名单）、`people/xiang-zheng.yaml` |
| tom-huang | Tom Huang 是 OpenDesign 联合创始人，X 账号 @tuturetom；Okane Land 创始人访谈介绍其创业前在字节跳动从事 Agent 平台工作（参与 Coze、Aily），OpenDesign 为开源、本地优先的设计工具（Apache 2.0）。置信度高 | [Okane Land 创始人访谈](https://okaneland.com/studio/tom-huang/)（WebFetch 全文核验，2026-11-16）、[向阳乔木记录的 OpenDesign 直播（2026-06-06）](https://blog.qiaomu.ai/2026-06-06-ckkgvc)（WebFetch 全文核验）、`people/tom-huang.yaml`、`products/open-design.yaml` |
| yetone | 开源开发者，GitHub 账号 yetone；置顶项目 avante-corp/avante.nvim（仓库简介 "Use your Neovim like using Cursor AI IDE!"）与 nextai-translator/nextai-translator（划词翻译浏览器插件与跨平台桌面端）均经 GitHub API 核验存在且归属其主页置顶；nextai-translator README 原文确认因收到 OpenAI 商标归属警告由 openai-translator 更名。置信度高 | [GitHub 个人主页](https://github.com/yetone)（WebFetch 全文核验）、GitHub REST API `repos/avante-corp/avante.nvim`、`repos/nextai-translator/nextai-translator`、raw README（更名声明原文）、`people/yetone.yaml` |

任务线索核对：任务提示 xiang-zheng→chapter-08 "'设计师还有价值'，这周我也被打脸了"——经全文扫描，"相征"实际命中 chapter-08 "水墨交互：复刻一个作品与做出第一个作品"（橘子段落 13-1/13-2）；"'设计师还有价值'，这周我也被打脸了"是 chapter-09 的章节名，该章无相征命中。正文按实际命中的 chapter-08 章节名与链接引用。tom-huang/yetone→chapter-13 "持续迭代与开源生态：代码之外还能留下什么" 与实际命中一致。

### 事实核验与边界

- xiang-zheng：橘子转述的观点归属重轻（逐字稿"他"指重轻），相征仅作为该期节目的录制者被提及；逐字稿未写明节目名称，正文不将橘子听的期数等同于 vol.1244，仅以 vol.1244 作为"重轻任嘉宾、相征任主播的单集存在"的证据。Apple 创作者页的"12 年以上""半周一更"等相对时效描述未写入正文。
- tom-huang：逐字稿原文只写"小黄"；结合语境（讨论对象为 OpenDesign）与向阳乔木博客记录的 OpenDesign 直播指向本条目人物，正文写明指代依据。Okane Land 访谈中的 star/安装量等时效数字未写入正文；访谈称其为 "CEO and a founder"、YAML bio 为"联合创始人"，两者不冲突，正文采用 YAML 口径并以访谈补充经历。
- yetone：follower 数、star 数、GitHub Stars 计划成员等时效信息未写入正文；向阳乔木"他一个人没有形成生态""被中转站攻击"为参与者个人说法，正文归属发言人并写明不代表本人表态，不作为生态状况的事实结论。
- 三人均未参与第 010 期录制；未刷新任何 YAML `lastVerifiedAt`。

### 节目证据与锚点核验

| 实体 | 期数与章节 | 发言人 | 引用方式与锚点 |
| --- | --- | --- | --- |
| xiang-zheng | #010 chapter-08 "水墨交互：复刻一个作品与做出第一个作品" | orange | 锚点 `quote-e16ee850ae2c6260612c`（"他就说人类一直是说，AI 会帮我们做很多这种我们不想做的事情……"）、`quote-590a59fad49316289b8a`（"他说这是放屁，他说你真实一点吧，AI 做的就是最有创造力的事情"） |
| tom-huang | #010 chapter-13 "持续迭代与开源生态：代码之外还能留下什么" | xiangyang-qiaomu | 锚点 `quote-b084c5c2a0dd9e856d79`（"就像之前不是问过这个小黄……他说他是因为他开源，吸引了很多提贡献者"）、`quote-64ec7f37c8a54cd77118`（"然后形成了一个生态……带着一群人陪你玩"） |
| yetone | #010 chapter-13 同上 | yangpan / xiangyang-qiaomu | 锚点 `quote-3ee901e07c8d300fe26e`（"那个 yetone 不就是吗？……这个谁也跟不上"）、`quote-6bb48548d9b9cd9195ae`（"但他应该也是搞生态……因为你抢了别人利益啊"） |

锚点按 `src/data/transcript-paragraph-anchors.ts` 算法（speakerId ?? speaker + "\0" + NFC 归一化合并空白文本，sha256 前 20 位 hex，重复加 `-N`）用 node + crypto 对第 010 期全文复算验证，6 个锚点全部命中且无重复后缀；引语逐字性经归一化文本程序化比对确认。第 010 期逐字稿已正式发布，正文均使用 `/weekly/010/transcript#...` 链接。

### FAQ 与需求线索

本批次未做新的搜索联想采样（指标一律 N/A），FAQ 为编辑补充，覆盖：相征身份与"相爷"称呼、《大内密谈》节目定位、第 010 期提及；Tom Huang 身份、OpenDesign 定位、"小黄"指代、创业前经历；yetone 身份、Avante、NextAI Translator（含更名）、第 010 期提及。答案来源为上表核验来源。

### 交付清单（追加批次）

- `src/content/prose/people/xiang-zheng.wiki.zh-Hans.md`、`xiang-zheng.wiki.en.md`（新增）
- `src/content/prose/people/tom-huang.wiki.zh-Hans.md`、`tom-huang.wiki.en.md`（新增）
- `src/content/prose/people/yetone.wiki.zh-Hans.md`、`yetone.wiki.en.md`（新增）
- frontmatter `updatedAt: '2026-11-16'`；站内链接目标已核验存在且被既有正文引用：`/wiki/people/zhongqing`、`/en/wiki/people/zhongqing`、`/wiki/products/open-design`、`/en/wiki/products/open-design`；en 页逐字稿链接一律指向中文路径 `/weekly/010/transcript#...` 并标注 in the Chinese transcript。未修改任何 YAML。

## 追加批次：3m、arcteryx、google-cloud、patagonia、uniqlo（2026-11-16）

### 身份核验结论与来源

| 实体 | 身份结论与置信度 | 关键核验来源 |
| --- | --- | --- |
| 3m | 1902 年 6 月 13 日以 Minnesota Mining and Manufacturing Company 之名创立于明尼苏达州图哈伯斯，总部位于明尼苏达州 Maplewood；代表产品：Scotch 胶带、Post-it 便条（1979 年推出、1980 年 4 月全美销售）、N95 口罩（1972 年获批）、Scotchgard（1952 年发现、1956 年起销售）。置信度高 | [Wikipedia: 3M](https://en.wikipedia.org/wiki/3M)（WebFetch 全文核验，2026-11-16）、[3M 公司介绍](https://www.3m.com/3M/en_US/about-3m/)、`brands/3m.yaml` |
| arcteryx | 1989 年创立于不列颠哥伦比亚省北温哥华，创立时名 Rock Solid，1991 年更名 Arc'teryx；名称与标志取自 Archaeopteryx 化石；2001 年售予 Salomon 集团，2005 年随 Salomon 归入 Amer Sports，2019 年安踏牵头财团收购 Amer Sports 多数股权；产品线：Vapor 安全带、Bora 背包（1993）、Gore-Tex 服装（1996）及 Veilance（2009）/LEAF/PRO 子线。置信度高 | [Wikipedia: Arc'teryx](https://en.wikipedia.org/wiki/Arc%27teryx)（WebFetch 全文核验，2026-11-16）、[Amer Sports 品牌页](https://www.amersports.com/brands/arcteryx/)、`brands/arcteryx.yaml` |
| google-cloud | Google（Alphabet 旗下）云计算业务；2008 年 4 月 App Engine 以预览发布（首个云服务，2011 年 11 月 GA），Cloud Storage/BigQuery 2010 年预览、Compute Engine 2012 年预览 2013 年 GA；Vertex AI 于 2021 年 5 月 Google I/O 发布；至少自 2022 年起"Google Cloud"为"GCP"后继名称；CEO Thomas Kurian。置信度高 | [Wikipedia: Google Cloud](https://en.wikipedia.org/wiki/Google_Cloud)（WebFetch 全文核验，2026-11-16）、`brands/google-cloud.yaml` |
| patagonia | 1973 年 5 月由 Yvon Chouinard 创立于加州文图拉，同年首店 Great Pacific Iron Works；自 1985 年承诺捐总销售额 1% 给环保团体，Chouinard 为 1% for the Planet 创始成员之一；2022 年 9 月有投票权股份（约 2%）转入 Patagonia Purpose Trust、无投票权股份转入 Holdfast Collective。置信度高 | [Wikipedia: Patagonia, Inc.](https://en.wikipedia.org/wiki/Patagonia,_Inc.)（WebFetch 全文核验，2026-11-16）、`brands/patagonia.yaml`；1% for the Planet 组织成立年份（2002）未在本次取到来源正文，正文只写"创始成员之一"，未落年份 |
| uniqlo | 隶属迅销集团；1984 年 6 月首店开于广岛市中区袋町，由前身小郡商事运营（1991 年 9 月更名 Fast Retailing），柳井正主导；品牌名缩略自 unique clothing，1988 年香港注册时 C 被误读为 Q 的说法见维基百科；LifeWear 理念（实穿、品质、简洁，SPA 模式）。置信度高 | [Wikipedia: Uniqlo](https://en.wikipedia.org/wiki/Uniqlo)（WebFetch 全文核验，2026-11-16）、[迅销集团关于优衣库](https://www.fastretailing.com/employment/en/uniqlo/about.html)、`brands/uniqlo.yaml` |

### 节目证据与锚点核验

任务线索核对：google-cloud→chapter-18 "模型之外的门槛：Harness、产品体验与云服务接入"，经全文扫描确认命中；3m/patagonia/arcteryx/uniqlo→chapter-28 "上周买了啥：遮光贴、羽绒服与 GTA 6"，命中一致。

| 实体 | 期数与章节 | 发言人 | 引用方式与锚点 |
| --- | --- | --- | --- |
| 3m | #010 chapter-28 | yangpan | `quote-ff4e43cd875fba4cd727`（5 块钱 3M 黑色贴纸购买描述）、`quote-b26fc936d918b3aa4435`（遮灯效果与"3M 大家肯定 Respect"）；均逐字引用 |
| arcteryx | #010 chapter-28 | orange | `quote-0ee1067cdcc1112620b2`（蓬松度参照：波司登约 650、巴塔/始祖鸟约 800、Montbell 1000）；个人说法，未写官方规格 |
| google-cloud | #010 chapter-18 | yangpan / guizang / orange | `quote-1fcea51e0e746e7875cf`（"它就还是 To B 的，就 Google Cloud"）、`quote-f0049c34d18e6afda57f`（"找不着那个页面"，链接文字为转述）、`quote-cc394b8c5afb96eb44f4`（AI Studio 与 Vertex"是两套"）；注明为参与者当时的接入体验 |
| patagonia | #010 chapter-28 | orange | 同 arcteryx，共用 `quote-0ee1067cdcc1112620b2` |
| uniqlo | #010 chapter-28 | orange | `quote-3fa5ae31195653936550`（优衣库棉服"穿了几个月就坏、棉都跑了"）；单件个人体验，注明不代表全线质量 |

锚点按 `src/data/transcript-paragraph-anchors.ts` 算法用 node + crypto 对第 010 期全文复算验证，7 个锚点全部命中、无重复后缀；引语逐字性经归一化文本程序化比对确认，google-cloud 的"难找得离谱"与 en 的转述性链接文字已明确为转述、锚点仍挂整段原文。逐字稿已正式发布，正文均使用 `/weekly/010/transcript#...` 链接；en 页一律指向中文路径并标注 in the Chinese transcript。

### 事实核验边界

- 3m：正文不写当前在售产品与价格；遮光贴的具体型号节目未提及，正文只转述杨攀的使用描述。
- arcteryx/patagonia：蓬松度数字（约 800 蓬）为橘子个人说法，正文两处均注明非官方规格；patagonia 环保部分未引入官网当前活动页（官网 activism 页返回维护中），仅用维基百科已核验的 1985 年 1% 承诺与 2022 年股权结构。
- google-cloud：App Engine 发布/GA 日期、Vertex AI 发布时间、GCP 更名均为维基百科已核验历史事实；参与者关于接入难度与 Bug 的表述全部归属发言人。
- uniqlo：橘子所购棉服的年份在逐字稿中仅为"去年"，正文用"此前购买"避免相对时间与推算年份；优衣库 CEO 等时效信息未写入。
- 均未刷新任何 YAML `lastVerifiedAt`（五个 YAML 的 lastVerifiedAt 本批次已由元数据方更新为 2026-11-16，未由本批次改动）。

### FAQ 与需求线索

本批次未做新的搜索联想采样（指标一律 N/A），FAQ 为编辑补充，覆盖：3M 公司概况、名字由来、代表产品、第十期遮光贴；始祖鸟归属与名字由来、800 蓬说法；Google Cloud 定位、GCP 更名、起点、Vertex AI 关系、节目难用说法；巴塔哥尼亚 1% 承诺、股权结构、800 蓬说法；优衣库首店、名字由来、LifeWear、节目评价是否正面。答案来源为上表核验来源。

### 交付清单（本批次）

- `src/content/prose/brands/3m.wiki.zh-Hans.md`、`3m.wiki.en.md`（新增）
- `src/content/prose/brands/arcteryx.wiki.zh-Hans.md`、`arcteryx.wiki.en.md`（新增）
- `src/content/prose/brands/google-cloud.wiki.zh-Hans.md`、`google-cloud.wiki.en.md`（新增）
- `src/content/prose/brands/patagonia.wiki.zh-Hans.md`、`patagonia.wiki.en.md`（新增）
- `src/content/prose/brands/uniqlo.wiki.zh-Hans.md`、`uniqlo.wiki.en.md`（新增）
- frontmatter `updatedAt: '2026-11-16'`；站内链接目标已核验存在：`/wiki/brands/montbell`、`/en/wiki/brands/montbell`、`/wiki/products/vertex-ai`、`/en/wiki/products/vertex-ai`。en frontmatter 含撇号字段（Arc'teryx、Google's、Orange's）均以双引号包裹；en seoTitle 分隔符为 ASCII " | "，zh seoTitle 含 CJK。未修改任何 YAML。
