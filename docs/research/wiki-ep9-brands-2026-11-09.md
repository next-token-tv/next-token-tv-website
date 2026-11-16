# 第 009 期新增品牌条目研究记录

研究日期：2026-11-09。范围：第 009 期新增实体中的 8 个品牌——`heygen`、`red-hat`、`epic-games`、`metr`、`mit`、`gcores`、`gcores-industries`、`softbank`。每个实体交付 `src/content/prose/brands/<id>.wiki.zh-Hans.md` 与 `.wiki.en.md`。

## 逐字稿与链接口径

第 009 期逐字稿 `next-token-weekly--009.zh-Hans.json` 已发布。本批"节目中的讨论/讨论"小节一律使用真实链接：章节链 `/weekly/009/transcript#chapter-NN`，段落引语用 `#quote-<20hex>` 锚点。第 009 期无英文逐字稿，英文正文一律链接中文逐字稿路径，链接文字注明 Chinese transcript（intel 英文页同款式，仅 gloss 不加注；本批英文页在提及章节处写明 in the Chinese transcript）。

引文锚点复算方式：按 `src/data/transcript-paragraph-anchors.ts` 算法（speakerId ?? speaker + `"\0"` + NFC 归一化合并空白后的段落文本，sha256 前 20 位 hex，重复段加 `-N`），用 node + crypto 对全稿复算，取下列锚点：

| 锚点 | 章节 | 发言人 | 内容要点 |
| --- | --- | --- | --- |
| quote-5862f1ab2dd6a0420d85 | chapter-01 | yangpan | Red Hat/Debian 发行版类比 DeepSeek Harness 企业发行版 |
| quote-d54f0ea51c642151a619 | chapter-01 | xiangyang-qiaomu | HyperFrames 集合 Remotion 底层、由 HeyGen 打包、不到半年成共识 |
| quote-6f9b68be1b07750b38c0 | chapter-01 | guizang | Claude 做视频优先用内置 HyperFrames |
| quote-10d0c8874ddbf500641c | chapter-01 | guizang | 面向 Agent 做增长、上个月才有官网 |
| quote-3c0a9fc400ab28aae69e | chapter-01 | xiangyang-qiaomu | HyperFrames 未考虑商业化、HeyGen 本身赚钱 |
| quote-e4cb23b47830777ef3ce | chapter-03 | orange | 转述"MIT 发研究"改千问权重数学提升 6 倍，后称表述是故意的 |
| quote-e69ed7a3c72e4e150f7b | chapter-03 | guizang | 第二个实验：GPT-6"写"神经网络玩老游戏胜过训 10,000 步模型 |
| quote-f552d825ad41458685f0 | chapter-03 | guizang | METR 发 Anthropic 审查报告：1.9 倍研发产出、删 100 多页、Model 2 |
| quote-088c71b495703a732435 | chapter-03 | guizang | 马斯克称软银答应给 OpenAI 买蒸汽轮机后违约 |
| quote-59425eafbed4a3e54cd4 | chapter-03 | orange | "软银暴跌这种" |
| quote-36ca95d72bfc25ea5c53 | chapter-04 | orange | "新的 Unreal 还是什引擎……优化 Web 的" |
| quote-a2256f66f19510c953bc | chapter-04 | guizang | 影之刃零不开光追、光照烘焙，转述海外对虚幻 5 优化的评价 |
| quote-db88b9b4fb6b7bb1bbe5 | chapter-05 | guizang | Epic CEO 推特 AI-First 游戏开发、AI 重写启动器、裁人 |
| quote-3f77d98fdd8d2ceecb83 | chapter-05 | guizang | UE 5.6 AI-First、优化 WebGL 与 Three.js 适配、回到网页 |
| quote-b971729eaffca7f92fd6 | chapter-05 | guizang | 重轻播客采访机核 CEO 西蒙；吉考斯（工业）；选品投流汇报自动化 |

全稿扫描确认每个锚点段落唯一（无 `-N` 后缀情形）。

## 事实核验来源（2026-11-09 直读）

| 实体 | 已核验页面 | 关键结论 |
| --- | --- | --- |
| heygen | [Wikipedia: HeyGen](https://en.wikipedia.org/wiki/HeyGen)（直读）、[heygen.com/about](https://www.heygen.com/about)（直读）、[github.com/heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)（GitHub API） | 2020 年由 Joshua Xu 与 Wayne Liang 创立，总部洛杉矶；前身 Surreal→Movio→HeyGen；主打数字人口播视频与视频翻译；HyperFrames 为 heygen-com 组织下开源仓库，描述 "Write HTML. Render video. Built for agents."，仓库创建于 2026-03-10。 |
| red-hat | [Wikipedia: Red Hat](https://en.wikipedia.org/wiki/Red_Hat)（直读）、[redhat.com/en/about](https://www.redhat.com/en/about)（YAML 来源） | 1993 年创立，总部罗利；2018-10 宣布 340 亿美元收购、2019-07-09 完成，IBM 独立子公司；RHEL + Fedora + OpenShift/Ansible；2025 年为 Linux 内核第三大企业贡献者。 |
| epic-games | [Wikipedia: Epic Games](https://en.wikipedia.org/wiki/Epic_Games)（直读）、[epicgames.com/site/about](https://www.epicgames.com/site/about)（YAML 来源） | 1991 年 Sweeney 以 Potomac Computer Systems 创立，1999 年迁卡里并更名；虚幻引擎、Fortnite（2017）、Epic Games Store（2018）；腾讯 2012 年收购相当于总股本约 40% 股份；Sweeney 控股任 CEO。 |
| metr | [metr.org/about](https://metr.org/about)（直读）、[Wikipedia: METR](https://en.wikipedia.org/wiki/METR)（直读） | 非营利研究机构，评估前沿 AI 长程任务能力与风险；2022 年创立（前身 ARC Evals，2023-12 独立更名），总部伯克利，创始人/CEO Beth Barnes；RE-Bench；与 OpenAI、Anthropic、Google DeepMind、Meta、Amazon 合作试点风险评估。 |
| mit | [Wikipedia: MIT](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology)（直读）、[web.mit.edu/about](https://web.mit.edu/about)（YAML 来源） | 马萨诸塞州剑桥市私立研究型大学，1861-04-10 设立，创建人 William Barton Rogers。 |
| gcores | [gcores.com/jobs](https://www.gcores.com/jobs)（直读，含"从 2010 年开始"自述）、[Wikipedia（中文）：机核网](https://zh.wikipedia.org/wiki/机核网)（直读） | 2010 年 5 月赵夏等以网络电台创办，2014 年公司化；GADIO、核聚变（2016 起，同年心动投资）、BOOOM（2019）、GCORES PUBLISHING（2020，2022-07 首次 Steam 发行）、GPASS 与核市奇谭（2022）、吉考斯工业（2017）。 |
| gcores-industries | [gcores.com/users/519272/content](https://www.gcores.com/users/519272/content)（直读）、[Wikipedia（中文）：机核网](https://zh.wikipedia.org/wiki/机核网)（直读） | 机核 2017 年推出的服饰品牌；官方页 2026 年动态：影之刃零联名（2026-10 随游戏发售）、艾尔登法环：黑夜君临秋冬新款、NuPhy 联名键盘；机核招聘页有"渠道专员（吉考斯工业）"等岗位。 |
| softbank | [Wikipedia: SoftBank Group](https://en.wikipedia.org/wiki/SoftBank_Group)（直读）、[group.softbank/en](https://group.softbank/en)（YAML 来源） | 1981 年孙正义创立，总部东京港区；愿景基金 2017 年设立（英文维基百科称全球最大科技风投基金）；2016 年收购 Arm；长期持股阿里巴巴等。 |

## 身份判定

| 实体 | 判定 |
| --- | --- |
| heygen | 即 AI 视频公司 HeyGen（Surreal/Movio 同一谱系）；同名实体无歧义。其开源框架 HyperFrames 在库内为独立产品条目，两页互链。 |
| red-hat | 即 Red Hat 公司本体；与库内 `linux`、`debian` 条目互链。 |
| epic-games | 即 Epic Games 公司；虚幻引擎为独立产品条目（brand 字段指向 epic-games），CEO Tim Sweeney 有独立人物条目，正文互链。 |
| metr | 即 METR（Model Evaluation and Threat Research），AI 安全评测机构；非印度 MET 海关等无关同名缩写。逐字稿中歸藏"METR 独立……发了一个审查报告"按该机构处理。 |
| mit | 即 Massachusetts Institute of Technology。逐字稿中"MIT 他们在 Twitter 上发了一个研究"按参与者归属处理，未独立核验该研究归属（见存疑点 2）。 |
| gcores | 即机核（GCORES）媒体与社区本体。 |
| gcores-industries | 即吉考斯工业，机核 2017 年孵化的服饰周边品牌，独立于媒体主体经营商品业务；两页互链，招聘页岗位名单佐证其为机核体系内独立品牌。 |
| softbank | 即 SoftBank Group 控股集团，与电信运营商子公司 SoftBank Corp.（1981–2015 年旧名）区分；与库内 `arm` 条目互链。 |

## 第 009 期讨论上下文（逐字稿摘录依据）

| 实体 | 章节 | 上下文与处理 |
| --- | --- | --- |
| heygen | chapter-01（Harness 与插件生态） | 话题承接 HyperFrames：向阳乔木（打包框架、营销之问）、歸藏（Claude 内置调用；面向 Agent 做增长、上月才有官网）、向阳乔木（未考虑商业化）、橘子（商业化追问）、杨攀（乐高组件不会被吃掉的观点）。正文引用乔木与歸藏四个段落，全部标注为参与者观点。 |
| red-hat | chapter-01 | 杨攀讲企业拿 DeepSeek Harness 骨架做发行版，类比 Linux 内核 + Red Hat/Debian 发行版模式；橘子补充"很多 FDE 已经在这样做"。正文仅引用杨攀类比段并标注非红帽表态。 |
| epic-games | chapter-04（软件和游戏网文化与实践）、chapter-05（创始人、组织与消费） | chapter-05：歸藏转述 Sweeney 推特言论（AI-First、重写启动器、裁人、对喷）及 UE 5.6 AI-First/WebGL/Three.js 适配；杨攀借其引出"创始人 Hands-On"话题。chapter-04：橘子"新的 Unreal……优化 Web"；歸藏转述影之刃零（虚幻 5、不开光追、光照烘焙）的海外评价。均为转述。 |
| metr | chapter-03（模型、算力与安全） | 歸藏转述 METR 发布对 Anthropic 的审查报告：研发产出 1.9 倍、删 100 多页、Model 2→Model 4 等。未核验报告原文，正文明确"以 METR 与 Anthropic 自己的发布为准"。 |
| mit | chapter-03 | 橘子转述"MIT 发研究"（Astra 改千问 0.016% 权重、数学 6 倍）并自我修正（表述故意、模型有思考长度 Bug、No-thinking 开关更有效）；歸藏转述第二个实验（GPT-6 写神经网络玩老游戏）；向阳乔木提到 Simon Wilson 的复现。正文全部按转述处理。 |
| gcores | chapter-05 | 歸藏转述重轻新播客采访机核 CEO 西蒙，及其 AI 使用情况（OpenClaw 起自动化选品/投流/汇报/埋点）。转述 + 个人评价。 |
| gcores-industries | chapter-05 | 同一段：歸藏提到"他其实还有个服装品牌叫吉考斯（工业）嘛"，自动化含选品投流。 |
| softbank | chapter-03 | 歸藏转述马斯克说法（OpenAI 自购蒸汽轮机、软银违约不买）；橘子接"软银暴跌这种"；杨攀补充蒸汽轮机产能排到 2030 年。全部按转述处理，不写入软银官方口径。 |

## FAQ 需求线索

数据源：Google 公开搜索联想端点（`https://suggestqueries.google.com/complete/search?client=firefox`），2026-11-09 采样，hl 取 `en` / `zh-CN`。无 Search Console、关键词工具或搜索量数据；所有量级指标 N/A，联想出现不等于热门。采样原始返回（节选）：

| 种子词（hl） | 返回联想（节选） | 采用问题 |
| --- | --- | --- |
| `heygen`（en） | heygen ai；heygen api；heygen pricing；heygen login | What is HeyGen? / Is HeyGen free to use?（pricing 线索） |
| `HeyGen 是什么`（zh-CN） | heygen 是什么 | HeyGen 是什么？ |
| `hyperframes`（en） | hyperframes github；hyperframes by heygen；hyperframes vs remotion；hyperframes claude | HyperFrames 和 HeyGen 是什么关系？（"vs remotion"归入节目讨论，不作断言） |
| `red hat company`（en） | red hat company pune/bangalore/size/careers 等 | What company is Red Hat? |
| `红帽 是什么公司`（zh-CN） | （无联想） | 编辑补充：红帽是什么公司？/ 红帽和 Linux 是什么关系？ |
| `epic games`（en） | epic games launcher/store/free games | What company is Epic Games? |
| `Epic Games 是什么`（zh-CN） | epic games 是什么；epic games store 是什么 | Epic Games 是什么公司？ |
| `metr ai`（en） | metr ai safety；metr ai report；metr ai benchmark；metr ai task length | What is METR? / What does METR research? |
| `METR 机构`（zh-CN） | metr 是 什么 机构 | METR 是什么机构？ |
| `mit`（en） | mitsubishi；mitch mcconnell 等无关实体为主 | 排除歧义，仅采用 What school is MIT?（改写自通用需求） |
| `麻省理工学院`（zh-CN） | 麻省理工学院 logo/地址/知名校友/怎么考 | MIT 和麻省理工学院是什么关系？（编辑补充，未涉及报考类） |
| `gcores`（en） | gcores industries；gcores publishing；gcores industries elden ring；gcores clothing | What is GCORES? |
| `机核`（zh-CN） | 机核gcores；机核 核聚变；机核 app | 核聚变是什么？ |
| `吉考斯工业`（zh-CN） | 吉考斯工业；吉考斯工业 人中之龙 | 吉考斯工业是什么？/ 联名商品类型？ |
| `softbank group`（en） | softbank group stock/corp/share price | What company is SoftBank? |
| `软银 是什么`（zh-CN） | 软银 是什么公司 | 软银是什么公司？/ 软银的创始人是谁？ |

未采用：股票、市值、报考、招聘地点等行情/决策类联想未写成问题或答案；"metr ai task length"对应的长程任务（time horizon）研究以 METR 官方介绍为据写入"研究工作"而非 FAQ。

## 时间稳定性处理

- 创立、收购、改名、发布、公司化等历史事实全部带年份（或年月日），按既成事实表述。
- 未写"当前旗舰/最新产品"类现状断言；价格类仅 HeyGen FAQ 一处，指向官方价格页实时查询，未断言费率。
- 第 009 期出现的未核验消息（METR 报告内容、"软银违约"与股价波动、"MIT 研究"归属、Sweeney 推特言论细节）一律标为参与者转述，正文声明未核验或"不代表官方口径"。
- 未使用"截至 YYYY 年 M 月"句式（无必须锚定的时效断言）；未使用"核验日/本次核验/目前/当前"式表述。

## 存疑点与遗留

1. METR 对 Anthropic 的审查报告：仅见逐字稿中歸藏的转述（含"1.9 倍""删 100 多页""Model 2"等数字与细节），本批未核到 METR 官方渠道的报告原文；正文完全按转述处理。METR 机构本身的存在与定位已由 metr.org 与英文维基百科核验。
2. "MIT 发研究"（Astra 改千问权重）：逐字稿中橘子自己也指出该表述"是故意的"，后续对话提及模型 Bug 与 No-thinking 开关等解释。研究归属未经独立核验，正文只写"被归到 MIT 名下/参与者转述"。
3. Tim Sweeney"AI-First"推特言论与 UE 5.6 方向：仅逐字稿转述，未核到 Sweeney 原帖；正文标注为参与者对公开言论的转述。
4. 机核创始人姓名与网名对应（赵夏 = 西蒙）以中文维基百科"由赵夏于 2010 年成立"及机核社区通行说法为据；"CEO"头衔出自逐字稿参与者口径，正文写"机核的 CEO……西蒙"时保留了转述语境。
5. 吉考斯工业"经营服装、配饰与生活方式产品"的范围以 YAML 摘要与官方页动态（服饰、键盘、摆件）为准，未穷举品类。
6. 本批未刷新各 YAML 的 `lastVerifiedAt`（YAML 已于 2026-11-09 由数据批次更新，非本批职责）。
