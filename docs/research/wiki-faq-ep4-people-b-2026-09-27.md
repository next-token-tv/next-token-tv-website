# 第 004 期人物批次 B（Wiki FAQ 与来源研究记录）

## 范围与口径

本记录支持 `andrej-karpathy`、`yann-lecun`、`liang-wenfeng`、`zhang-yiming`、`zhang-xiaojun`、`haixin`、`akhaliq` 七个人物实体的 Wiki 正文。研究日期为 2026-09-27。需求线索来自 Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`，仅语言提示，无受控地区与搜索量数据）；本次没有 Search Console、关键词工具或任何搜索量、难度、排名、点击、热度数据，相关指标一律 **N/A**，联想候选的出现不等于热门。人物名联想中的 `wife`、`net worth`、`年龄`、`老公`、`国籍`、`religion`、`iq` 等隐私类候选一律不采用。

七个实体全部核验到可靠的公开身份或官方资料，均进入正文写作，无跳过实体。逐条核验依据见下文。

外部来源说明：本环境可用的公开搜索渠道有限（DuckDuckGo/Mojeek 触发人机验证，Bing 返回无关结果），事实核验以维基百科英文条目（2026-09-27 在线读取）与官方/本人页面为主；维基百科条目本身随时间变化，正文引用的都是其中有公开报道支撑的事实，快照性质只存在于本记录，不进入正文。

## 七个实体的身份核验结论

| 实体 | 身份结论 | 关键核验来源 |
| --- | --- | --- |
| andrej-karpathy | AI 研究者与教育者，OpenAI 创始成员、前 Tesla AI 总监；2026-05-19 宣布加入 Anthropic 领导 pretraining 团队 | [个人主页](https://karpathy.ai/)（自述 OpenAI 创始成员、Tesla AI 总监、二次加入 OpenAI 做 midtraining 与合成数据）、[Wikipedia 英文条目](https://en.wikipedia.org/wiki/Andrej_Karpathy)（教育经历、任职时间、Eureka Labs 2024-07-16、vibe coding 2025-02、加入 Anthropic 2026-05-19）、[nanoGPT](https://github.com/karpathy/nanoGPT) 与 [nanochat](https://github.com/karpathy/nanochat) 仓库（2025-10-13 发布帖、约 100 美元成本表述） |
| yann-lecun | 计算机科学家，2018 图灵奖共同得主，NYU 教授，Meta 首席 AI 科学家（2013–2025），2025-11 确认离开 Meta 并创办 AMI Labs | [Wikipedia 英文条目](https://en.wikipedia.org/wiki/Yann_LeCun)（2013-12-09 成为 FAIR 首任院长、图灵奖、1989 反向传播论文、2025-11-19 确认离开、2025-12 联合创立 AMI Labs 任执行董事长、2026-03 融资 10.3 亿美元投前估值 35 亿、2025 女王工程奖）、[个人网站](https://yann.lecun.com/)、[ACM 2018 图灵奖页](https://awards.acm.org/about/2018-turing)（作为权威出处链接，本次未直接抓取页面内容，FAQ 中仅用"对深度学习的贡献"级概括表述） |
| liang-wenfeng | DeepSeek 创始人、幻方量化联合创始人 | [Wikipedia 英文条目](https://en.wikipedia.org/wiki/Liang_Wenfeng)（1985 年生、2002 入浙大、2007/2010 学位、2016-02 创立幻方、2019 幻方 AI、2023-05 启动 DeepSeek、股权 1%/99%、V3 2024-12、2025 年两次座谈会与榜单）、[湛江市政务服务和数据管理局资料](https://www.zhanjiang.gov.cn/zsj/gkmlpt/content/2/2155/post_2155953.html)（YAML 既有来源，用于湛江背景） |
| zhang-yiming | 字节跳动创始人，2021 年卸任 CEO 与董事长 | [Wikipedia 英文条目](https://en.wikipedia.org/wiki/Zhang_Yiming)（1983 年生龙岩、2001 入南开、酷讯/微软/饭否/九九房、2012-03 与梁汝波创立字节、2012-08 今日头条、2017-09 TikTok、2018-08 收购 Musical.ly、2021-05 卸任 CEO、2021-11-04 卸任董事长、路透报道持股超 50% 投票权） |
| zhang-xiaojun | 《张小珺Jùn｜商业访谈录》主持人，财经媒体人，语言即世界工作室创始人 | [Apple Podcasts 节目页](https://podcasts.apple.com/us/podcast/id1634356920)（YAML 既有来源；主持人名、2–7 小时长对话、每周更新、13 项新闻奖、2022–2024 三届 SOPA、语言即世界工作室出品） |
| haixin | AI 视频制作人与数字艺术创作者（海辛Hyacinth） | [十字路口Crossing 单集页（小宇宙）](https://www.xiaoyuzhoufm.com/episode/67cd91020766616acdb292ea)（YAML 既有来源；医学背景转影视、SMG 新技术方向导演、《故宫猫猫上班记》播放破亿、《To Dear Me》北影节 AI 单元最佳影片、龙年春晚 AI 动画 MV《枕着光的她》、共同发起整活编辑部与 Demo Inn） |
| akhaliq | 以"AK"为公开身份的 AI 内容创作者（@_akhaliq） | [Hugging Face 个人页](https://huggingface.co/akhaliq)（显示名 AK、页面链接指向 [twitter.com/_akhaliq](https://twitter.com/_akhaliq)、数百个 Spaces、46 个模型、huggingface/gradio/Qwen 等组织成员）。真实姓名未公开确认，正文只依据可核验的公开账号信息 |

三个"先核验后写"的实体（zhang-xiaojun、haixin、akhaliq）均核验到官方/本人页面，全部写作。

## FAQ 候选与证据

采样时间 2026-09-27，方法为 Google 公开联想（`client=firefox`）。原始候选见附录。"编辑补充"指没有直接联想词、但可由已核验资料明确回答的问题；"联想词"指实际返回的候选；同名歧义排除见附录说明。

| 页面 | 线索（类型） | 意图 | FAQ 采用 | 答案来源 |
| --- | --- | --- | --- | --- |
| andrej-karpathy | `andrej karpathy anthropic`、`andrej karpathy github`（人物级联想）；zh `卡帕西 知识库`、`卡帕西 claude.md` 等指向不明，不采用 | 他在 Anthropic 做什么、开源项目是什么 | Andrej Karpathy 是谁；在 Anthropic 做什么；vibe coding 一词是谁提出（编辑补充，联想词无此项但知名度高）；nanoGPT 和 nanochat 是什么 | 个人主页、Wikipedia、GitHub 仓库 |
| yann-lecun | en `yann lecun startup`、`yann lecun world models`、`yann lecun company`、`yann lecun ami`；zh `杨立昆是华人吗`、`杨立昆为什么有中文名`、`杨立昆 meta`、`杨立昆 世界模型` | 新公司、世界模型、身份歧义 | 杨立昆是华人吗；为什么获得图灵奖；在 Meta 做过什么；什么是他主张的"世界模型" | Wikipedia、ACM 图灵奖页 |
| liang-wenfeng | zh `梁文锋背景`、`梁文锋 量化`；en `liang wenfeng deepseek`、`liang wenfeng interview`（`wife`/`身价`/`iq` 等不采用） | 身份背景、与 DeepSeek/幻方关系 | 梁文锋是谁；教育背景；幻方量化和 DeepSeek 是什么关系；V3/R1 发布时间（编辑补充） | Wikipedia、湛江市政府资料、DeepSeek 品牌页 |
| zhang-yiming | zh `张一鸣去哪了`、`张一鸣现状`、`张一鸣背景`；en `zhang yiming tiktok`、`zhang yiming bytedance ai strategy`（`wife`/`children`/`religion` 等不采用） | 现状、创业前经历 | 张一鸣是谁；现在做什么；字节跳动何时成立；创业前做过什么 | Wikipedia、字节跳动官网 |
| zhang-xiaojun | zh `张小珺背景`、`张小珺商业访谈录`、`张小珺是谁`、`张小珺简历`（`年龄`/`学历`/`老公`/`百科` 无可靠来源，不采用） | 身份、节目是什么、背景 | 张小珺是谁；商业访谈录是什么节目；做过什么工作 | Apple Podcasts 节目页 |
| haixin | zh `海辛和阿文`、`海辛hyacinth`（`海辛 吸血鬼`、`凡妮莎 海辛`、`柏捷顿家族 海辛斯` 为同名歧义，排除；`海辛 AI` 无候选） | 身份、代表作品 | 海辛是谁；故宫猫猫上班记是什么；做过什么工作 | 十字路口Crossing 单集页 |
| akhaliq | `_akhaliq是谁`、`akhaliq huggingface`、`akhaliq twitter`、`akhaliq anycoder`（裸词 `akhaliq`/`khaliq` 命中姓氏与其他人名歧义，排除） | 身份、在哪看更新、Anthropic 传闻 | AK（@_akhaliq）是谁；在哪里能看到更新；加入 Anthropic 了吗（仅节目转述） | Hugging Face 个人页、逐字稿 |

未采用线索的共同处理：涉及私人生活的候选（`wife`、`net worth`、`身价`、`年龄`、`老公`、`国籍`、`religion`、`iq`、`children`）一律不写，正文与 FAQ 均不含相应内容。

## 事实核验与边界

- 时间口径：正文不写"截至核验日"类快照；2025–2026 年事件（Karpathy 加入 Anthropic、LeCun 离开 Meta 与 AMI Labs 融资、张一鸣 2026 年财富排名等）按既成事实表述，财富/估值数字仅保留 AMI Labs 融资一项（有明确报道日期支撑），未写任何人物个人净值。
- andrej-karpathy：Eureka Labs 创办日期（2024-07-16）、vibe coding（2025-02）、加入 Anthropic（2026-05-19，公司称领导 pretraining 团队）来自 Wikipedia；OpenAI 二次任期工作内容（midtraining、合成数据）按其个人主页自述表述并注明。`卡帕西知识库`/`卡帕西 claude.md` 类联想词意图不明，未据此出题。
- yann-lecun：Meta 职务按 Wikipedia 表述为"创建并领导 FAIR、长期任副总裁兼首席 AI 科学家"，条目未逐字给出"VP and Chief AI Scientist"头衔原文；"深度学习教父"为媒体通行说法。AMI Labs 细节（CEO Alex LeBrun、执行董事长、2026-03 融资）仅出自 Wikipedia，正文已注明出处。ACM 图灵奖页链接为权威出处，但本次未抓取页面内容，FAQ 未引用官方颁奖词原文。
- liang-wenfeng：节目 #003 中杨攀转述的"不做多模态"说法仅为主理人转述，未核验原始出处（推测为其接受媒体采访的文字稿），正文明确"该说法以原始出处为准"；高考 806 分细节来自 Wikipedia（湛江政府页可佐证其为湛江高考尖子，但未逐字核验分数），正文只写"湛江地区高考尖子"并链接政府页；"梁圣"称呼为网友昵称，YAML alias 既有。
- zhang-yiming：2026 年财富排名（Bloomberg/Fortune）不写入正文；"仍持有超 50% 投票权"标注为路透社报道。
- zhang-xiaojun：仅依据 Apple Podcasts 官方节目页；未核验其具体任职媒体与学历，正文不写。节目逐字稿称"张小珺采访曾明"，该"曾明"未做身份认定（疑似曾鸣，无来源，不写），正文只按逐字稿原文转述。
- haixin：全部经历（SMG、北影节、春晚 MV、播放量破亿）均来自《十字路口Crossing》单集介绍，属节目方对嘉宾的介绍，正文已逐项注明出处；医学院所属学校来自听友评论，不写。
- akhaliq：身份核验链为 Hugging Face 页（显示名 AK）→ 链接指向 @_akhaliq；未核验 X 页面内容本身（需登录）。"加入 Anthropic"仅见节目主理人转述，未找到本人或公司的公开公告，正文明确不作为已核验事实。
- 逐字稿标注问题：`next-token-weekly--004.zh-Hans.json` 中 chapter-11 "比如说 AK"段落的 entity-link 指向 `andrej-karpathy`，但按上下文该"AK"指 @_akhaliq（Karpathy 本人在四期逐字稿中无任何名字提及）。导入快照不可手工编辑，本批处理：akhaliq 页按原文文字写"被提及"（锚点按算法独立计算），karpathy 页不写"节目中的提及"章节。该标注错误建议由整合者在后续导入流程中修正。

## 节目证据

本地已发布中文逐字稿中的相关章节与段落锚点（均经读取原文核对，锚点按 `src/data/transcript-paragraph-anchors.ts` 算法计算，发言人归属见各正文）：

| 实体 | 期数与章节 | 段落锚点 | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| liang-wenfeng | #003 chapter-06 ""没有幻觉"不等于判断正确" | `quote-ed67b1b2084778e7ee0e` | yangpan | 转述梁文锋"不做多模态"文字稿并评论 |
| haixin | #004 chapter-02 "Opus 5.5：代码、视觉与创造力" | `quote-b75fcbf7923baa902a11` | orange | 海辛的中秋小猫 Demo，Opus 5.5 一次成型 |
| zhang-xiaojun | #004 chapter-06 "Muse：面向普通人的 Personal Agent" | `quote-b8a11fcb610183142a8f` | xiangyang-qiaomu | 提及"张小珺采访曾明"及 Agent OS 三阶段 |
| yann-lecun | #004 chapter-09 "开放生态、资源与商业闭环" | `quote-a16ae0da34059e886386` | guizang | 评论 Meta 投入与"杨立坤，你走就行" |
| liang-wenfeng | #004 chapter-11 "创始人驱动与前沿模型" | `quote-8d062683a95b98875cd7` | xiangyang-qiaomu | "梁圣版这个坚毅版的达里奥" |
| akhaliq | #004 chapter-11 同上 | `quote-983d901ff11a18ac3657` | xiangyang-qiaomu | "X 上的网红，比如说 AK，好多人都加入了 Anthropic" |
| zhang-yiming | #004 chapter-17 "信任、个人品牌与产品" | `quote-de7cdf17c51d85ac4fe6` | xiangyang-qiaomu | 引"张一鸣说把公司当成产品" |

七人均非节目参与者，正文均已写明"本人未参与录制/未参与节目录制"，观点归属到具体发言人。`andrej-karpathy` 在四期逐字稿中无名字提及，其正文未写"节目中的提及"章节。

## 后续衡量

无发布后数据。若接入 Search Console，按页面、语言、国家、设备与 28 天窗口记录曝光、点击、平均位置与可见查询样本；不把联想候选当作搜索量。

## 附录：Google 联想原始采样（2026-09-27）

```json
{
  "method": "Google public autocomplete, Firefox client; zh/en language hints only",
  "samples": [
    {"query": "andrej karpathy", "language": "en", "suggestions": ["andrej karpathy", "andrej karpathy skills", "andrej karpathy llm wiki", "andrej karpathy github", "andrej karpathy net worth", "andrej karpathy claude md", "andrej karpathy wife", "andrej karpathy autoresearch", "andrej karpathy anthropic", "andrej karpathy second brain"]},
    {"query": "卡帕西", "language": "zh-CN", "suggestions": ["卡帕西", "卡帕西 知识库", "卡帕西 llm wiki", "卡帕西 skill", "卡帕西 claude.md", "卡帕西自定义指令", "卡帕西个人知识库", "卡帕西codex指令约束", "卡帕西 wiki", "卡帕西codex指令"]},
    {"query": "yann lecun", "language": "en", "suggestions": ["yann lecun", "yann lecun startup", "yann lecun net worth", "yann lecun world models", "yann lecun jepa", "yann lecun company", "yann lecun nyu", "yann lecun ami", "yann lecun wife", "yann lecun salary"]},
    {"query": "杨立昆", "language": "zh-CN", "suggestions": ["杨立昆", "杨立昆 世界模型", "杨立昆是华人吗", "杨立昆 jepa", "杨立昆为什么有中文名", "杨立昆的世界模型", "杨立昆(yann lecun)", "杨立昆ptt", "杨立昆 meta", "杨立昆中文名"]},
    {"query": "梁文锋", "language": "zh-CN", "suggestions": ["梁文锋老婆", "梁文锋四小时投资人会议实录", "梁文锋背景", "梁文锋4小时", "梁文锋身价", "梁文锋内部讲话", "梁文锋 量化", "梁文锋讲话", "梁文锋四小时"]},
    {"query": "liang wenfeng", "language": "en", "suggestions": ["liang wenfeng", "liang wenfeng net worth", "liang wenfeng wife", "liang wenfeng deepseek", "liang wenfeng age", "liang wenfeng interview", "liang wenfeng reddit", "liang wenfeng linkedin", "liang wenfeng religion", "liang wenfeng iq"]},
    {"query": "张一鸣", "language": "zh-CN", "suggestions": ["张一鸣", "张一鸣老婆", "张一鸣身价", "张一鸣国籍", "张一鸣去哪了", "张一鸣现状", "张一鸣家庭背景", "张一鸣老婆照片", "张一鸣老婆王蕊", "张一鸣背景"]},
    {"query": "zhang yiming", "language": "en", "suggestions": ["zhang yiming", "zhang yiming net worth", "zhang yiming wife", "zhang yiming children", "zhang yiming age", "zhang yiming religion", "zhang yiming son", "zhang yiming ai development strategy", "zhang yiming tiktok", "zhang yiming bytedance ai strategy"]},
    {"query": "张小珺", "language": "zh-CN", "suggestions": ["张小珺", "张小珺背景", "张小珺商业访谈录", "张小珺年龄", "张小珺学历", "张小珺教育背景", "张小珺是谁", "张小珺百科", "张小珺老公", "张小珺简历"]},
    {"query": "海辛", "language": "zh-CN", "suggestions": ["海辛", "海辛和阿文", "海辛hyacinth", "海辛 吸血鬼", "凡妮莎 海辛", "柏捷顿家族 海辛斯", "柏捷顿家族 海辛丝"]},
    {"query": "海辛 AI", "language": "zh-CN", "suggestions": []},
    {"query": "akhaliq", "language": "en", "suggestions": ["akhaliq", "khaliq", "khaliq meaning", "khaliq johnson", "khalique zahir md", "khalique name origin", "khaliq johnson durham nc", "khaliq austin", "khalique", "khalique last name origin"]},
    {"query": "_akhaliq", "language": "en", "suggestions": ["_akhaliq", "akhaliq anycoder", "akhaliq huggingface", "akhaliq twitter", "akhaliq sora 2", "akhaliq x", "_akhaliq是谁", "akhaliq z image turbo"]}
  ]
}
```

同名歧义说明：`海辛` 混入"凡妮莎·海辛（Vanessa Helsing）"、电视剧角色及"柏捷顿家族"角色等；裸词 `akhaliq`/`khaliq` 命中英语姓氏与其他人名（khaliq johnson 等）；`张一鸣`/`梁文锋` 联想中含大量隐私类候选。以上均未据此出题，隐私类候选一律排除。

## 2026-09-27 更正：AK 的指代

站点负责人确认：节目中"比如说 AK"里的 **AK 就是 Andrej Karpathy**（此前本记录推测为 @_akhaliq，系误判；逐字稿实体标注其实正确，无需修正导入）。处理：andrej-karpathy 两篇正文补上 Weekly #004 chapter-11 的"节目中的提及"（quote-983d901ff11a18ac3657，向阳乔木，语境与其 2026 年 5 月加入 Anthropic 的公开宣布相符）；akhaliq 两篇正文删除错误归属的"节目中的提及"章节与"AK 加入 Anthropic 了吗"FAQ（@_akhaliq 在三期以上逐字稿中无 entity-link 命中，其页面现无节目证据）。

## 补充（同日）：保留"AK 加入 Anthropic"FAQ

站点负责人认可该问题价值：FAQ"AK 加入 Anthropic 了吗？"保留在 andrej-karpathy 页（zh/en），答案引用公开宣布与 Weekly #004 转述；akhaliq 页不保留该问答（@_akhaliq 与此无关）。

## 补充（同日）：移除 akhaliq 实体

站点负责人确认 AK=Karpathy 后，akhaliq 在四期逐字稿中零提及、无任何节目关联，不再满足资料库收录条件。已删除 people/akhaliq.yaml 与其两篇正文（无其他文件引用）；karpathy 页 FAQ 增加 X 上 @_akhaliq 的同名消歧句。
