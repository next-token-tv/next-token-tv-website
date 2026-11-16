# 第 009 期新增人物条目研究记录（2026-11-09）

范围：第 009 期新增人物 5 位（`cui-tianyi`、`simon-willison`、`tim-sweeney`、`zhao-xia`、`ming-chaoping`），写 `src/content/prose/people/<id>.wiki.zh-Hans.md` 与 `.wiki.en.md`。逐字稿 `src/content/imported/transcripts/next-token-weekly--009.zh-Hans.json` 已发布，章节与段落链接均指向 `/weekly/009/transcript`；段落锚点按 `src/data/transcript-paragraph-anchors.ts` 算法（speakerId + NFC 归一化合并空白 + sha256 前 20 位）用 node + crypto 复算，并与全稿逐段落生成结果比对一致。

FAQ 说明：本批 FAQ 问题为编辑归纳（人物条目通用的身份类与节目提及类问题），未做 SERP 采样，没有搜索量或热度证据，指标一律 N/A。

内链说明：`/wiki/products/unreal-engine`、`/wiki/products/renoise-ai`、`/wiki/brands/gcores-industries`（及对应 `/en/wiki/` 路径）为第 009 期新增实体，撰写时其正文由本批其他任务并行产出；交付检查时已确认三处目标文件均已存在，全部站内链接经脚本验证可解析。

## cui-tianyi（崔添翼）

- 逐字稿上下文：chapter-01"Harness 与插件生态"讨论 DeepSeek Harness 生态时，歸藏说"其实之前（崔）添翼加我了，但他比较忙"；chapter-02"Agent 与个人上下文"向阳乔木转述"因为添翼说了，它也不是说更强……它只是说这个能组合出不同的 Agent 的"。
- 身份判定：DeepSeek Harness 团队成员崔添翼（Tianyi Cui），置信度高。证据：其微博账号（YAML 来源，sina.cn/media/7542534202）显示名"崔添翼"，简介标语"Agent = Model + Harness"，置顶帖自称"我是 DeepSeek Harness 组的崔添翼"，定位香港，2020 年 12 月注册；逐字稿称呼"添翼"一致。
- 任务提示勘误：任务提示中"崔天意"的猜测不成立，逐字稿与微博均指向"崔添翼"，未采用。
- 存疑点：除微博账号外无其他公开履历材料，正文只写微博可核验内容；乔木转述的观点未经本人确认，正文已注明。

## simon-willison（Simon Willison）

- 逐字稿上下文：chapter-03"模型、算力与安全"，向阳乔木说"那个 Simon Wilson 他自己做了测试……他把一些远古的小游戏……没有告诉他是什么游戏……基本上都能找出来"；歸藏说"这个是比刚才那个你说那个 Simon Wilson 复刻的，就其实就是这个，直接让它写神经网络"。
- 身份判定：开源开发者 Simon Willison（Django 联合创作者、Datasette 作者），置信度高。证据：simonwillison.net/about 自述为 Django 联合创作者、Datasette 作者、2002 年起博主、Lanyrd 联合创办（2010，YC，被 Eventbrite 收购）、PSF 董事会成员；其 2026 年 11 月 3 日博文《Qwen 3.8 27B on my laptop can interpret model weights, too》与节目描述吻合——让本地模型仅凭权重判断按 Breakout/Pong/Pac-Man/Freeway 简化版训练的策略网络对应哪款游戏，涉及论文 "Sparks of Weight-Space Programming"（Takehi、Teoh、Zhang、Khattab）。逐字稿将姓氏写作"Wilson"，判定为听写误差，正文按 Simon Willison 记录并注明写法差异。
- 存疑点：逐字稿中的转述细节（"特征还是二进制"等）为参与者口述，正文以博文为事实基准；歸藏提到的"MIT"与该论文页未标注机构，正文未沿用该归属（MIT 归属属对论文的转述，不在人物条目展开）。

## tim-sweeney（Tim Sweeney）

- 逐字稿上下文：chapter-05"创始人、组织与消费"，歸藏转述 Epic Games CEO 在推特主张 AI-First 游戏开发、用 AI 重写启动器、"UE 5.6 会变成 AI-First"、虚幻引擎回到 WebGL/Three.js 适配；杨攀问"你说这是那个 Epic 的创始人是吧？"，歸藏答"对，CEO"。
- 身份判定：Epic Games 创始人兼 CEO Tim Sweeney，置信度高。证据：英文维基百科（1970 年生，Epic Games 创始人兼 CEO，虚幻引擎创造者；Potomac Computer Systems → Epic MegaGames → 1999 年更名 Epic Games；Epic Games Store 2018 年上线、2024 年扩展移动端；2020 年主导对苹果 App Store 政策的诉讼）；Epic 官网 About 为 YAML 来源（本次抓取多次网络失败，以维基百科为主要核验来源）。
- 存疑点：推特言论、启动器重写、裁员、UE 5.6 规划均为节目参与者转述，未在 Epic 官方材料中核验，正文已注明不代表本人表态；逐字稿未直接出现姓名。

## zhao-xia（赵夏，西蒙）

- 逐字稿上下文：chapter-05"创始人、组织与消费"，歸藏提到重轻的新播客"采访了那个机核的 CEO，那个对吧？西蒙"，称其"他很少技术，他是个设计师出身""还有个服装品牌叫吉考斯（工业）"，并转述从 OpenClaw 起选品、投流、汇报、埋点全部自动化。
- 身份判定：机核（GCORES）创始人赵夏，常用名"西蒙"，置信度高。证据：中文维基百科机核网条目（创始人赵夏、姜尧；由赵夏于 2010 年成立；2014 年公司化为机核（北京）文化传媒有限公司；条目记载"机核负责人赵夏"发布道歉信，所引文章署名"西蒙"，连接两名为同一人）；机核站内十年回顾用户投稿（2024-12-18）描述西蒙设计师出身，2006–2014 年在时尚行业、曾任职 Kappa 与 FILA，与逐字稿"设计师出身"一致；机核招聘页自述"机核从 2010 年开始……"。
- 存疑点："机核的 CEO"是歸藏的称呼，公开资料记为创始人/负责人，正文按来源表述并注明差异；自动化流程细节为参与者转述，未核验。

## ming-chaoping（明超平，Leon Ming）

- 逐字稿上下文：chapter-01"Harness 与插件生态"，向阳乔木说"你看那个小明他们的 Renoise 就是很聪明，它底层也是 Hyperframes……做成 MCP"；杨攀说"所以小明他们这一波，感觉还行"；橘子说"小明他们那个就是做同款的东西嘛……给大家灵感"。
- 身份判定：YouWare 创始人兼 CEO 明超平（Leon Ming），置信度高。证据：HKUST 创业中心活动页（YAML 来源）讲者介绍："Leon Ming 明超平 Founder & CEO of Youware……with a current focus on Renoise, an AI-powered platform exploring new ways to create video. Previously, he was a founding member of ByteDance's CapCut team and held product roles at OnePlus and Moonshot AI, where he worked on Kimi."。节目称"小明"未出现全名，但"小明他们的 Renoise"与该页"Renoise 为其工作重点"直接对应，实体匹配成立。
- 存疑点："小明"与明超平的对应依赖上述间接证据链（逐字稿只出现"小明"+Renoise）；HKUST 活动定于 2026 年 11 月 25 日举行，页面信息为讲者介绍，正文按来源归属表述；节目中对 Renoise 的评价为参与者观点。

## 引用锚点清单（复算结果）

- chapter-01：quote-d6c7ef56d581b4718464（歸藏"添翼加我"）、quote-2f16bb6bca60bb7c0c9f（乔木"小明他们的 Renoise"）、quote-b1124707e21b6cabf564（杨攀）、quote-adcafb397075c8d00fed（橘子）。
- chapter-02：quote-cdcb2ef06db1a46e250b（乔木转述添翼）。
- chapter-03：quote-67999d7fe4843e13132f（乔木"Simon Wilson 测试"）、quote-bc2ab081ff86db5c38c9（乔木补充）、quote-e69ed7a3c72e4e150f7b（歸藏"复刻/写神经网络"）。
- chapter-05：quote-db88b9b4fb6b7bb1bbe5（歸藏"Epic CEO 对喷"）、quote-3f77d98fdd8d2ceecb83（歸藏"UE 5.6 AI-First"）、quote-19812ad4602be92e7a44（杨攀确认"创始人"）、quote-b971729eaffca7f92fd6（歸藏"机核 CEO 西蒙"）、quote-8924ce119be20399d645（歸藏"自动化"）。

全部引语已用脚本验证为逐字稿中连续原文；锚点经全稿逐段落复算确认存在且无重复后缀错位。
