# 第 10 期产品批 B 研究记录

日期：2026-11-16。范围：`open-design`、`next-token-skill`、`the-mythical-man-month`、`grand-theft-auto-v`、`craft` 五个产品的双语 Wiki 正文。节目来源：`src/content/imported/transcripts/next-token-weekly--010.zh-Hans.json`（第 10 期中文逐字稿，review-draft 未发布）。

红线执行：第 10 期逐字稿未发布，本批正文一律不创建指向 `/weekly/010/transcript` 的链接；第 10 期讨论全部为纯文本提及，章节名与 JSON 中 `chapters[].title` 逐字一致。已发布的第 1–9 期逐字稿可链接，但本批五个实体的讨论仅出现在第 10 期，因此未产生逐字稿链接；en 正文也未使用任何 `/en/weekly/.../transcript` 链接。

## FAQ 需求线索口径

本批未做搜索联想采样，无 Search Console 数据。各页 FAQ 为编辑补充，问题对应官方资料结构中的常见入口（是什么／怎么装／许可与价格／相近产品区别／发售年份），答案全部有下列来源支撑。不使用搜索量、难度等任何指标。

## 实体身份核对

| 实体 | 身份结论 | 依据 |
| --- | --- | --- |
| open-design | 开源协作式 AI 设计工作台（OpenDesign），GitHub `nexu-io/open-design`，官网 open-design.ai；与逐字稿 ch13 提及语境（开源、生态、被抄袭风险）一致 | 官网与仓库正文 |
| next-token-skill | 节目自研的官方 Agent Skill，仓库 `next-token-tv/next-token-skill`，与 ch30 讨论逐字吻合（"实现就是 Next Token Skill"、"藏师傅手搓的"） | 仓库 README 与逐字稿 |
| the-mythical-man-month | Fred Brooks 1975 年软件工程文集《人月神话》，ch25 "AI 时代的人月神话"语境为借书名讨论产品功能扩张，非另有所指 | 英文维基百科、Pearson 书页 |
| grand-theft-auto-v | Rockstar 的 GTA V（2013），ch28 中仅在歸藏谈 GTA 6 预购时被作为前作评价（"GTA 5 就很牛逼了"）；注意与独立实体 `grand-theft-auto-vi` 区分，后者另有正文 | 英文维基百科、Rockstar 官网 |
| craft | Craft Docs 的文档应用（craft.do），ch17 中作为 Carbon 模型给出的高口碑设计参考被提及 | craft.do 官网正文 |

## 事实核验（均为 2026-11-16 获取）

| 实体 | 采用的事实 | 来源与依据 |
| --- | --- | --- |
| open-design | Apache-2.0 开源；官方口号 "The First Collaborative Design Agent Workspace"；不自带模型，接入 Claude Code、Codex、Cursor 等编码 Agent，支持 BYOK 与托管服务；150+ 开源设计系统包与 DESIGN.md 约定；可编辑元素、团队评论发回 Agent；导出 HTML/PDF/PNG/PowerPoint；macOS 与 Windows 桌面应用，Linux 从源码运行 | open-design.ai 首页正文；GitHub nexu-io/open-design README |
| next-token-skill | Apache-2.0；口号"让你的 AI Agent 听过每一期 Next Token"；SKILL.md + Python 脚本，非 MCP；首用同步到本地缓存后本地检索，仅用 Python 标准库、无 API Key；引用带 B 站/YouTube 时间戳链接且时间点取自网站逐字稿页；未聊过的话题不硬凑引用；安装为克隆仓库后把 `next-token` 目录放入 agent skills 目录（Claude Code 为 `~/.claude/skills`）；无独立时间戳的段落链接为近似 | GitHub next-token-tv/next-token-skill README |
| the-mythical-man-month | Fred Brooks，1975 年 Addison-Wesley 出版；素材来自其管理 IBM OS/360 的经历；1995 年 20 周年纪念版增补四章含 "No Silver Bullet"；Brooks 定律 "Adding manpower to a late software project makes it later"；沟通渠道 n(n−1)/2；首席架构师与概念完整性、第二系统效应 | 英文维基百科 The Mythical Man-Month 条目；Pearson 纪念版书页 |
| grand-theft-auto-v | Rockstar North 开发、Rockstar Games 发行；2013-09-17 PS3/Xbox 360，2014-11-18 PS4/Xbox One，2015-04-14 PC，2022-03-15 PS5/Xbox Series X|S；舞台圣安地列斯州（原型南加州）与洛圣都（原型洛杉矶）；三位主角；GTA Online 持续更新；首日约 8 亿美元、三天 10 亿美元（当时最快纪录）；累计出货超 2 亿份、史上销量第二 | 英文维基百科 Grand Theft Auto V 条目；Rockstar 官方页面 |
| craft | Craft Docs 出品；块编辑器、文档内待办、日历/提醒/每日笔记；空间/文件夹/标签/集合；macOS、iOS、iPadOS、Windows、Android 与网页版，官方称原生（非 Electron）并支持离线；实时协作、端到端加密、API 与 MCP 连接（Claude、ChatGPT、Cursor 等）；免费层加付费计划 | craft.do 首页正文 |

未采用：craft.do 首页展示的 "Mac App of the Year" 等奖项（本次未从可核验来源确认获奖年份，历史事实须带年份，故不写入正文）；OpenDesign 与 GTA V 的 GitHub star 数、评价数（时效快照）；Craft 创始团队历史（未核验）。

## 节目引用核对

第 10 期各实体出现章节（entity-link 全量扫描 + 关键词复扫确认无遗漏；ep004/ep005 的 "craft" 命中均为 Minecraft 子串，ep007 的 GTA 命中均为 `grand-theft-auto-vi`）：

| 实体 | 章节 | 发言人 | 要点 |
| --- | --- | --- | --- |
| open-design | chapter-13 "持续迭代与开源生态：代码之外还能留下什么" | 向阳乔木（转述开发者回答） | 无壁垒之忧来自开源生态：代码可抄、生态与持续迭代不可抄 |
| craft | chapter-17 "Carbon 体验：写作的人味与设计、编码能力" | 橘子 | 用 Carbon 重设计 Cola 界面，模型扒网站后给出 Craft、Linear 等高口碑参考 |
| the-mythical-man-month | chapter-25 "AI 时代的人月神话：功能越多，产品越好吗" | 橘子、歸藏、杨攀、向阳乔木 | 橘子写"AI 时代人月神话"文章：核心业务聚焦、加功能是新陷阱；加按钮与 Instinct 对照；加功能易去功能难 |
| grand-theft-auto-v | chapter-28 "上周买了啥：遮光贴、羽绒服与 GTA 6" | 歸藏 | 预购 GTA 6（已预载）、"最后一个人类游戏"说法、开发十几年、"GTA 5 就很牛逼了" |
| next-token-skill | chapter-30 "Next Token Skill 与 Grok Bot：让 Agent 引用节目"（背景：chapter-29 "历史逐字稿检索，直达 B 站和 YouTube 时间点"） | 歸藏、向阳乔木、杨攀、橘子 | Skill 做完待发 Show Notes；Grok Bot 用户用 Bot、其他 Agent 用 Skill；引用带 B 站/YouTube 链接；ch29 杨攀介绍网站逐字稿搜索定位功能 |

正文未链接任何逐字稿（第 10 期未发布），故无需计算段落锚点；为发布后复核预留，已按 `src/data/transcript-paragraph-anchors.ts` 算法算得关键段锚点：open-design 转述段 `quote-b084c5c2a0dd9e856d79`、`quote-64ec7f37c8a54cd77118`（ch13 turn3）；craft 参考产品段 `quote-7448e81e9771a03a8b83`（ch17 turn45）；人月神话开篇段 `quote-e2b597179d5e7cb2cee7`、`quote-5cbcf812036a18f78089`（ch25 turn0）；GTA V 评价段 `quote-bdbfe169f3a7551a7aa3`（ch28 turn17）；Next Token Skill 功能段 `quote-92ad382b0f4f28a67573`、时间戳链接段 `quote-b918642614caf70fc088`（ch30 turn9/turn11）。均为首次出现，无 `-N` 后缀。发布该期后引用需重新核对。

## 采用范围与遗留问题

- 未更新各产品 YAML 的 `lastVerifiedAt`（本任务不授权改动元数据）。
- open-design 开发者个人／公司在节目中被称作"小黄"，正文仅以"其开发者"转述，不写具体人名；官网署名 Powerformer, Inc. 一并略去（未做二次核验）。
- craft 未写入获奖信息与公司沿革（年份未核验）；免费层与付费计划仅以"官方站点为准"表述。
- next-token-skill 的安装命令未在正文展开为完整代码块，指向仓库 README；README 中"约 30% 段落无独立时间戳"等局限以"部分段落"弱化表述，避免比例随版本漂移。
- 第 10 期发布后，可按上文预留锚点将"节目中的讨论"小节升级为带链接引用（zh 直链 `/weekly/010/transcript#...`；en 需按当时规范处理语言标注）。

## 2026-11-16 追加批次：作品类六产品（hades、ne-zha-films、all-wishes-come-true、three-kingdoms-the-beginning、the-lord-of-the-rings-the-fellowship-of-the-ring、ready-player-one）

第 10 期逐字稿已 `published`（当日确认 `publicationStatus`），本批正文全部创建指向 `/weekly/010/transcript` 的章节与段落链接；en 页链接中文逐字稿并在链接文字或括注中标注 "Chinese transcript"（第 10 期无英文逐字稿）。段落锚点按 `src/data/transcript-paragraph-anchors.ts` 算法（speakerId ?? speaker + "\0" + NFC 归一化合并空白，sha256 前 20 位）用 node+crypto 复算，并脚本验证引语为锚定段落逐字子串；全部为首次出现，无 `-N` 后缀。

### 节目引用核对

| 实体 | 章节 | 锚点（已复核） | 采用引语与归属 |
| --- | --- | --- | --- |
| hades | chapter-04 "Fable 5.2：场景和镜头一次成形，打击感继续打磨" | `quote-7781e3f442c85a222914`（guizang） | 模型检索《哈迪斯》等知名俯视角动作游戏开发者公开资料学"打击感"规律；参与者对模型行为的观察 |
| ne-zha-films / all-wishes-come-true / three-kingdoms-the-beginning | chapter-10 "恐龙、流体与古巴比伦：可复用的虚拟世界" | `quote-04e07fd56f41855e6671`（guizang） | "那那些成本，比如《哪吒》，《八仙》不是刚下嘛，还有刚上那个《争洛阳》"；传统 CG 成本类比，参与者观点 |
| the-lord-of-the-rings-the-fellowship-of-the-ring | 同上 | `quote-04e07fd56f41855e6671`、`quote-77a672275bce1b58d149`（orange）、`quote-87cfe8cc3895f8951d21`（guizang）、`quote-d1d67065f443304492b7`（orange） | 水化奔马 CG 段落回忆与"几百万美金"成本估算；标注为个人回忆与估算 |
| ready-player-one | 同上 | `quote-3437031bd4a55a35d133`（guizang） | 借《头号玩家》"终极游戏"设想类比可复用虚拟世界；标注为类比归因 |

### 事实核验（均为 2026-11-16 获取）

| 实体 | 采用的事实 | 来源 |
| --- | --- | --- |
| hades | Supergiant Games 开发发行；Roguelike 动作角色扮演；主角扎格柔斯逃离冥界；2018-12 抢先体验，2020-09-17 1.0（macOS/Windows/Switch），2021-08 登陆 PlayStation 与 Xbox，2024-03 经 Netflix Games 登陆 iOS | Supergiant 官方游戏页；中文维基百科《黑帝斯 (遊戲)》；英文维基百科 Hades (video game) |
| ne-zha-films | 饺子（杨宇）执导；《哪吒之魔童降世》2019-07-26 中国大陆上映、北美 Well Go USA；《哪吒之魔童闹海》2025-01-29（大年初一）上映、北美 A24；均以《封神演义》为基础原创改编；续集上映第 9 天成为中国大陆影史票房最高电影 | 中文维基百科两影片条目；YAML 中 Well Go USA / A24 发行页 |
| all-wishes-come-true | 2026 年奇幻喜剧动画；牟正洋自编自导；东方梦工厂（Pearl Studio）与华人影业（CMC Pictures）出品；2026-07-18 中国大陆上映（原定 07-24 提档），海外 2026-08-13 起由 CMC 分阶段发行；以八仙传说为蓝本、聚焦成仙前凡人阶段 | 中文维基百科《八仙！》（引中国电影报、红星新闻）；CMC Pictures 官方发行页 |
| three-kingdoms-the-beginning | 追光动画出品，谢君伟执导、王微编剧；2026 年历史动画，"三国"系列开篇、"新文化"系列（首部《长安三万里》）团队打造；2026-07-10 中国大陆上映，2026-07-25 片方宣布撤档另择档期 | 中文维基百科条目；YAML 中追光官方制作特辑 |
| the-lord-of-the-rings-the-fellowship-of-the-ring | 彼得·杰克逊执导，Fran Walsh/Philippa Boyens/Jackson 编剧，改编托尔金 1954 年第一卷；2001-12-10 伦敦首映、2001-12-19 美国等主要市场上映；2002 年第 74 届奥斯卡 13 提名 4 奖 | 英文维基百科条目；Warner Bros. 影片页 |
| ready-player-one | 斯皮尔伯格执导，Zak Penn/Ernest Cline 编剧，改编克莱恩 2011 年同名小说；2018-03-11 西南偏南首映、2018-03-29 北美公映，华纳兄弟发行；2045 年"绿洲"虚拟世界设定 | 英文维基百科条目；Warner Bros. 影片页 |

### 存疑点与采用范围

- 导演姓名差异：`all-wishes-come-true.yaml` summary 写"穆正洋执导"；中文维基百科及所引《中国电影报》《红星新闻》写"牟正洋"，CMC 官方英文页写 "Mu Zhengyang"。正文采用"牟正洋（Mu Zhengyang）"，未改 YAML（本批不授权改元数据）；建议后续复核并统一元数据。
- `three-kingdoms-the-beginning.yaml` 的 official.website 指向 YouTube 制作特辑，非独立官网；来源沿用该链接并标注"官方制作特辑"。
- 逐字稿中歸藏称《争洛阳》"刚上"，而据中文维基百科该片 2026-07-10 上映、07-25 撤档；正文不采用该口语时间表述，仅以章节引语呈现参与者原话并注明为举例。
- 《八仙！》《争洛阳》票房数字（维基"超 17 亿""撤档"等）未写入正文，仅保留撤档事实与带年份的上映时间；避免时效快照。
- 指环王"水化奔马"段落在正文中按影片公开内容描述为布理南河洪水段落；参与者的成本估算仅归因于发言者。
- FAQ 均为编辑补充（未做搜索联想采样），答案以官方页面与维基条目为据；无搜索量、热度等指标，N/A。
- 未更新各产品 YAML 的 `lastVerifiedAt`；未改动其他批次文件。
