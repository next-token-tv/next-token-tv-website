# 第 008 期新增产品批次 E 研究记录（2026-11-02）

覆盖 9 个产品条目：`harry-potter-films`、`twilight-films`、`pantheon`、`sapiens`、`scp-foundation`、`phantom-blade-zero`、`xuan-jian-xian-zu`、`fuyou-tiandi`、`guixu-ai-series`，每条目交付 `src/content/prose/products/<id>.wiki.zh-Hans.md` 与 `<id>.wiki.en.md`。逐字稿取自 `src/content/imported/transcripts/next-token-weekly--008.zh-Hans.json`（review-draft 未发布），正文一律纯文本提及第八期，未创建任何 `/weekly/008/transcript` 链接。

## 共同背景

第 008 期共 13 章。与本批相关的章节：

- `chapter-04` "AI 短剧：个人与小团队的创作机会"：AI 短剧生态讨论，涉及归墟、玄鉴仙族、SCP 基金会、哈利·波特、暮光之城、Foyege。
- `chapter-06` "AI 制药：从效率提升到创造增量"：歸藏推荐《蜉蝣天地》一期医药话题节目。
- `chapter-07` "Agent 会怎样影响人的判断？"：橘子转述赫拉利观点，歸藏引用《万神殿》与《赛博朋克 2077》梦网设定。
- `chapter-11` "双十一买了什么：备机、灯光与存储"：歸藏购买并游玩《影之刃零》，由此谈品味维持。

发言人转写以逐字稿为准：歸藏、橘子、杨攀、向阳乔木。英文页统一写作 Guizang、Orange、Yang Pan。

## 逐条目记录

### harry-potter-films

- 讨论上下文：chapter-04。歸藏介绍 Foyege 的"性转马尔福"系列：用 AI 捏的高颜值形象做成"类似暮光之城那种青春校园剧"，带入哈利·波特世界观；杨攀感叹"必爆"。歸藏称每集 Instagram 点赞一百多万、推特曝光一百多万。
- 关键事实来源：8 部影片、2001–2011、华纳兄弟发行，见 en.wikipedia.org/wiki/Harry_Potter_(film_series)；官方入口 harrypotter.com/discover/films（YAML source）。
- 身份判定依据：YAML kind `movie`，summary 指向改编自 J. K. 罗琳小说的电影系列；与逐字稿中"把哈利波特这种做成青春剧"的指涉一致。关联人物实体 `foyege`（YAML bio：创作《哈利·波特》同人影像）佐证节目指涉。
- 存疑点：点赞数、播放量只有歸藏口述，正文以"据歸藏在节目中的说法"归因，未作独立核验；同人系列与官方授权无关已写明。

### twilight-films

- 讨论上下文：chapter-04，同上；"暮光之城"仅作为类型类比出现（"类似于暮光之城那种美剧……青春剧"），无对电影本身的讨论。
- 关键事实来源：5 部影片、2008–2012、Summit Entertainment／Lionsgate，见 en.wikipedia.org/wiki/The_Twilight_Saga_(film_series)；官方入口 lionsgate.com/movies/twilight（YAML source）。
- 身份判定依据：YAML kind `movie`，summary 为斯蒂芬妮·梅尔小说改编的青春奇幻爱情电影系列。
- 存疑点：无。条目强调节目里是类型类比用法。

### pantheon

- 讨论上下文：chapter-07。歸藏把《万神殿》与《赛博朋克 2077》梦网并列为"所有人共用同一 AI 模型时稍加引导即可引导所有人"的文艺参照。
- 关键事实来源：en.wikipedia.org/wiki/Pantheon_(TV_series)：Craig Silverstein 开创、改编自刘宇昆短篇（The Hidden Girl and Other Stories）、AMC Studios/Titmouse 制作、两季 16 集、第一季 2022-09 于 AMC+ 首播、AMC 2023-01 取消、第二季 2023-10 发布、Netflix 国际上线（第一季 2024-11、第二季 2025-02）。
- 身份判定依据：YAML kind `series`，summary 为意识上传与数字生命的科幻动画剧集，source 指向 Netflix 条目页。
- 存疑点：Netflix 上线月份采用 Wikipedia 表述，未在 Netflix 页面二次核验；正文将观看入口处理为指向实时条目页的指针。

### sapiens

- 讨论上下文：chapter-07。橘子转述赫拉利的观点：人类文明构建在语言体系上，AI 不必具身，影响思想即可左右文明；随后歸藏、杨攀延伸到后训练干预与对齐。
- 关键事实来源：en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind：希伯来语 2011、英文 2014、基于希伯来大学授课、核心论点为共同虚构与大规模协作；作者官网 ynharari.com/book/sapiens/（YAML source）。
- 身份判定依据：YAML kind `book`；节目"写人类简史那个……赫拉利"直接指涉作者与作品。
- 存疑点：橘子未注明转述自赫拉利哪一篇文章，正文只写"转述赫拉利关于 AI 的观点"，不指定具体文章，不添加未核验的原文链接。

### scp-foundation

- 讨论上下文：chapter-04。歸藏列举个人完成的爆火 AI 剧集时说《零号档案》"类似于 SCP（基金会）那种"。
- 关键事实来源：en.wikipedia.org/wiki/SCP_Foundation：2007-06 起源于 4chan /x/ 的 SCP-173、2008-07 迁至 Wikidot、CC BY-SA、无统一正典、社区投票筛选；主站 scp-wiki.wikidot.com（YAML source）。
- 身份判定依据：YAML kind `platform`，summary 为围绕异常事物与虚构收容机构的协作写作网站；逐字稿原话含"（基金会）"补注。
- 存疑点：无。正文明确《零号档案》类比与 SCP Wiki 本身的区别。

### phantom-blade-zero

- 讨论上下文：chapter-11。歸藏"这周买了游戏啊，主要玩那个《影之刃零》"，橘子"《影之刃零》大火"；歸藏由此提出 AI 时代要消费高投入、高完整度内容以维持品味。
- 关键事实来源：en.wikipedia.org/wiki/Phantom_Blade_Zero：S-GAME 开发发行、虚幻引擎 5、PS5/Windows、kungfupunk、2023-05-24 PlayStation Showcase 公布、The Game Awards 2025-12 公布 2026-09-09 发售日、2026-06 推迟、2026-10-29 发售。购买入口为 YAML source 的 Steam 商店页。
- 身份判定依据：YAML kind `game`，summary 为 S-GAME 制作的武侠题材动作角色扮演游戏；节目"买了游戏"与 2026-10-29 发售（本期录制前数日）相互印证。
- 存疑点：主角设定细节未核实，正文只写"扮演一名身负绝技的杀手"；Wikipedia 记载的 Metacritic 分数与 Steam 同时在线人数未采写入正文。

### xuan-jian-xian-zu

- 讨论上下文：chapter-04。歸藏以网文行业类比 AI 短剧门槛：称《玄鉴仙族》作者为起点白金作家、"从来没有一本书以内能做到白金作家，只有一个人"，大学时期开始写作、全部章节手机打出、一天一章约 3000 字。
- 关键事实来源：YAML summary（季越人创作的家族修仙题材网络小说）与 source（起点作品页 qidian.com/book/1035420986/）。起点页面与搜索引擎均无法抓取（反爬），连载年份、白金细节未获独立来源。
- 身份判定依据：YAML 权威字段 + 逐字稿原话《玄鉴仙族》书名一致；节目语境（起点、网文）吻合。
- 存疑点：白金作家、手机写作、更新量等全部为歸藏口述，正文以"据他的说法……这些细节均为参与者在节目中的转述"归因，未写为独立事实；未添加任何未核验的百科链接。

### fuyou-tiandi

- 讨论上下文：chapter-06。歸藏推荐《蜉蝣天地》一期采访药学与医药研制从业者的节目，转述大意：CRISPR/DNA 编辑与 AlphaFold 使靶向药制作能力提升，瓶颈在不可省略的三期临床；并称 19、20 年成熟的技术约在 30 年左右带来一波新药上市。
- 关键事实来源：官方网站 fuyoutiandi.com（YAML source）：汉洋与重轻主持、长篇对谈、约两到三小时、Apple Podcasts 与 Spotify、提供 RSS。
- 身份判定依据：YAML kind `show`，en name Meanders；关联人物实体 `zhongqing`（bio：《蜉蝣天地》主持人之一）。歸藏原话"之前那个「重轻」主持"与 YAML 的双主持表述不冲突，正文按 YAML 写"汉洋与重轻主持"。
- 存疑点：所推荐的具体某一期节目名与嘉宾在逐字稿中未给出，正文不指定期数；"30 年左右一波新药"属受访者观点转述，正文保留归因而不作事实断言。

### guixu-ai-series

- 讨论上下文：chapter-04。歸藏："《归墟》其实是一个人"，与《持械入宋》《零号档案》并列说明爆火 AI 短剧多出自个人。
- 关键事实来源：YAML summary（泫九创作的末日灾变题材 AI 剧集）与 source（抖音精选条目页 jingxuan.douyin.com/video/7639009224806157611，访问时重定向至 www.douyin.com/video/ 同 ID，页面反爬无法读取正文）。
- 身份判定依据：YAML 权威字段 + 逐字稿书名《归墟》一致；关联产品实体 `douyin` 作平台内链。
- 存疑点：创作者泫九的公开资料与发布时间未获独立来源，正文仅按 YAML 写作者与平台；歸藏"一个人完成"的说法归因为参与者观点。

## FAQ 需求证据说明

本批 9 个条目未采集搜索联想数据（影视/文学/游戏类条目当次未做 SERP 采样）。各页 2–4 个问题均为编辑补充：选择百科类常见问法（数量、作者、发售/出版时间、平台入口），答案全部由上述已核验来源或带归因的节目转述支撑，不以热度为据。若后续采集到真实需求线索，可再按编辑规范扩充。

## 约束执行

- 未创建 `/weekly/008/transcript` 链接（grep 校验通过）；英文页对第八期只作纯文本提及，章节名保留中文原名。
- 中文页人名：歸藏、橘子、杨攀、向阳乔木；英文页：Guizang、Orange、Yang Pan；grep 校验无误写形式（无"归藏""向陽喬木"）。
- 正文无"核验日/本次核验/目前/当前"类快照表述；历史事实均带年份或日期。
- 未触碰他人文件与实体 YAML 的 `lastVerifiedAt`。
