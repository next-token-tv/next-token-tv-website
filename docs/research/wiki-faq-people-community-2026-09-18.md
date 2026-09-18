# 社区与媒体人物 Wiki FAQ 与来源研究记录

## 范围与口径

本记录支持 `aj`、`cyber-zen`、`xiaohu`、`luo-fuli`、`liu-fei` 五个人物实体的 Wiki 正文，并记录 `hanqing`、`nan-qiao` 两个跳过实体的核验过程。研究日期为 2026-09-18。需求线索来自 Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`，hl=zh-CN，curl 抓取并按 GBK 解码）；本次没有 Search Console、关键词工具或任何搜索量、难度、排名、点击、热度数据，相关指标一律 **N/A**，联想候选的出现不等于热门。人物实体缺少产品级联想词是普遍现象，FAQ 数量相应从简（多为 1–4 个，含编辑补充）。

## 身份核验结论

| 实体 | 结论 | 关键核验来源 |
| --- | --- | --- |
| aj | WaytoAGI（通往 AGI 之路）发起人，写作 | [WaytoAGI 官方介绍页](https://about.waytoagi.com/)（AJ 2022 年起整理飞书文档、2023 年公开共建；未公布真名，正文与 FAQ 均不写真名） |
| cyber-zen | AI 内容创作者"赛博禅心"（别称"大聪明"），写作 | [虎嗅转载其公众号评论文章（2025-03-07）](https://www.huxiu.com/article/4093731.html)：自述技术出身的媒体人、运营公众号"赛博禅心"、做过 DeepSeek V3/R1 早期技术解读、自称较早报道 Manus；"AGI Bar 酒吧归属"仅以节目发言人表述呈现，不作事实断言 |
| xiaohu | AI 资讯创作者，Xiaohu.AI 建立者，写作 | [xiaohu.ai](https://xiaohu.ai/)（当前有 Cloudflare 人机验证，无法直接抓取正文）；事实改经 [Wayback Machine 2025-01-14 快照](https://web.archive.org/web/20250114223611/https://xiaohu.ai/)核验：页面自述"Xiaohu.AI 是由小互建立的一个专门发布 AI 资讯、教程、课程、工具以及开源项目案例的平台" |
| luo-fuli | 小米 MiMo 大模型负责人罗福莉，写作 | [IT之家 2026-01-14](https://www.ithome.com/0/913/169.htm)（北大信科 2017 级校友、MiMo 负责人身份、北大"燕图南"活动）、[IT之家 2025-11-12](https://www.ithome.com/0/896/855.htm)（朋友圈官宣加入 MiMo 团队；转述第一财经"新皮层"：DeepSeek-V2 关键开发者之一、雷军亲自招募、薪酬千万元级报道）、[个人网站](https://luofuli.github.io/)（北师大本科 2013–2017、北大计算语言学硕士 2017–2020、微信 AI 与 Google 北京实习） |
| liu-fei | 播客《三五环》主播、产品经理刘飞，写作 | [三五环 Apple Podcasts 页面](https://podcasts.apple.com/cn/podcast/id1475113228)（主播刘飞Lufy；自述 Web2.0 时代产品经理、中小公司与创业、滴滴和阿里；公众号「刘言飞语」；现居杭州）、[iTunes Search API](https://itunes.apple.com/lookup?id=1615939013)（半拿铁艺人名"潇磊&刘飞"，[Apple 页面](https://podcasts.apple.com/cn/podcast/id1615939013)） |
| hanqing | **跳过**，保留摘要页 | 仅在 #002 逐字稿中被向阳乔木提及一次（"昨天我们都看汗青的音乐会了"）；Bing、DuckDuckGo（lite 与 html 版均遇 CAPTCHA）多组检索（"汗青 具身智能""汗青 机器人 音乐会""汗青 agi"等）与 Google 联想均未返回可确认其公开身份的资料。无法核验其身份，按编辑规范不强行扩写 |
| nan-qiao | **跳过**，保留摘要页 | 仅在 #002 逐字稿中被向阳乔木与"大聪明"并列致谢（邀请节目在上海 AGI Bar 录制）；"南乔"Google 联想命中全部为无关同名（南乔治亚岛、小说人名等）；Bing/DuckDuckGo 检索（"AGI Bar 上海 南乔"等）未获可确认其身份的资料。无法核验，不扩写 |

`xiaohu` 虽无独立媒体采访等第三方报道，但其官方网站（经 Wayback 快照核验内容）构成本人官方账号层面的可靠来源，符合"官方页/本人官方账号"标准，故写作。`cyber-zen` 的 AGI Bar 归属在虎嗅文中无记载，正文中仅写"节目主理人的说法"。

## FAQ 候选与证据

采样时间 2026-09-18，方法同上。"编辑补充"指没有直接联想词、但可由官方资料明确回答的常识问题。原始采样见附录。

| 页面 | 线索（类型） | 意图 | FAQ 采用 | 答案来源 |
| --- | --- | --- | --- | --- |
| aj | `waytoagi 创始 人`、`waytoagi 社区`、`waytoagi 飞书`、`waytoagi 知识库`（品牌级联想词，"AJ"裸词无可用联想） | 社区是谁发起的、社区是什么 | WaytoAGI 的创始人（发起人）是谁（联想词）；WaytoAGI 是什么（联想词） | about.waytoagi.com |
| cyber-zen | 无联想（`赛博禅心` 空返回） | 身份、别称 | 赛博禅心是谁；大聪明是谁（均为编辑补充） | 虎嗅转载文章、YAML 别名 |
| xiaohu | 无联想（`小互 ai`、`小互 xiaohu.ai` 空返回） | 身份、网站 | 小互是谁；Xiaohu.AI 是什么（均为编辑补充） | xiaohu.ai 自述（Wayback 快照） |
| luo-fuli | `罗福莉 小米`、`罗福莉 简历`、`罗福莉 访谈`、`罗福莉 年薪`、`罗福莉 论文`、`罗福莉 github`（人物级联想词充分） | 身份、职务、履历、薪酬传闻 | 罗福莉是谁；罗福莉在小米负责什么；罗福莉加入小米前做过什么；"雷军千万年薪挖罗福莉"是怎么回事（编辑补充，回应`年薪`联想） | IT之家两篇、个人网站 |
| liu-fei | `刘飞luffy`（拼写变体）；`刘飞 三五环` 空返回 | 身份、播客 | 《三五环》是什么播客（编辑补充）；刘飞是谁（编辑补充）；刘飞还参与哪些播客（编辑补充，`刘飞luffy` 佐证播客署名需求） | Apple Podcasts 两页、iTunes API |

未采用的联想词：`罗福莉老公`（无可靠来源，不写）；`罗福莉真实水平`（主观评价类，无可核验答案）；`罗福莉 知乎`（指向第三方平台汇总，不作为 FAQ）；`南乔股价`、`南乔霍厉霆` 等（同名小说/股票歧义，未据此出题）。

## 事实核验与边界

- aj：官方介绍页只以"AJ"称呼发起人，未公开真名；2022 年起整理文档、2023 年公开共建按官方页记载表述。社区规模数字（52 个城市分站等）为时效性数据，正文不写，指向官方实时页面。
- cyber-zen：身份与经历全部为作者在虎嗅转载文中的自述，正文已标注"自述"；Manus 评论文章发布时间按虎嗅转载页（2025-03-07）。
- xiaohu：官网当前不可直接抓取（Cloudflare 验证），事实依据为 Wayback 2025-01-14 快照中的站点自述；正文链接直接指向官网实时入口。节目转述内容为该站"内容写作"，与自述一致。
- luo-fuli：北大信息科学技术学院"2017 级"指 2017 年入学（其个人网站显示 2017.9 入读北大硕士），两处一致；"DeepSeek-V2 关键开发者之一""雷军亲自招募、薪酬千万元级"均为 IT之家转述第一财经"新皮层"报道，正文注明"媒体报道"并区分官方公布与传闻；MiMo 首模型 2025 年 4 月开源、朋友圈官宣 2025-11-12 为 IT之家记载的既成事实。"燕图南·北大青年校友谈第一期"为北大 2026-01-07 发布的活动（据 IT之家）。
- liu-fei：《三五环》描述引用其 Apple Podcasts 页自述；"两本书"仅见于页面提及但无书名核验，正文不写书名；《半拿铁》共同主持关系由 iTunes API 艺人名"潇磊&刘飞"与 Apple 页面核验。
- hanqing、nan-qiao：除逐字稿外未找到任何可核验的公开身份资料，全部跳过，正文零改动。

## 节目证据

本地中文逐字稿中的相关章节与段落锚点（均经读取原文核对；五位写作实体均非节目参与者，正文已写明）：

| 实体 | 期数与章节 | 段落锚点 | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| aj | #001 chapter-24"NAS 会不会成为个人 AI 上下文的家" | `quote-7fc12d5ed0e750b2ba53` | yangpan | "这周我见那个 AJ……把他的硬盘都干废了" |
| aj | 同上 | `quote-1422352eef4ee7cd8d8a` | yangpan | "AJ 应该是每天把自己大量的原生多模态数据全留下来" |
| aj | #002 chapter-17"平台内 AI 助手：入口简单，体验才完整" | `quote-68208ed35ccde0e32e64` | xiangyang-qiaomu | 转述 AJ 让小微发群消息 |
| aj | #002 chapter-21"健康数据与日常记录：有用与隐私的边界" | `quote-216d21847f8d8980a596` | yangpan | "AJ 说的对，AJ 是，录音豆。的电池快坏了……" |
| cyber-zen | #001 chapter-28"Token Is New Money：买 Mac Studio 像在家里'铸币'" | `quote-9bb484146be023c2f4ac` | orange | "你看那个大聪明那酒吧……免费有各种模型" |
| cyber-zen | #002 chapter-02"上海开场：本周模型、Agent 与硬件" | `quote-beaa798a9959760c2231` | xiangyang-qiaomu | "感谢大聪明、南乔，邀请我们在上海的 AGI Bar 录节目" |
| xiaohu | #002 chapter-07"写作体验：不同模型各有所长" | `quote-67d0fdcd92dbde4dd820` | xiangyang-qiaomu | 转述小互"整个网站的内容写作都用它（Gemini 3.8 Flash）换掉了" |
| luo-fuli | #001 chapter-24"NAS 会不会成为个人 AI 上下文的家" | `quote-d25f35ccdf7190ddc065` | orange | "其实小米那个罗福莉去了之后，那个他们 AI 做的还行" |
| liu-fei | #002 chapter-18"iPhone Duo 发布：折叠屏与交互的新问题" | `quote-8a64cb3ad3d232b72c80` | xiangyang-qiaomu | 提到刘飞在播客里介绍折叠屏历史 |
| hanqing | #002 chapter-28"从代码到实物：3D 打印带来的创作空间" | `quote-1d0d7282c49bdffcdc1e` | xiangyang-qiaomu | "昨天我们都看汗青的音乐会了"（跳过实体，仅记录） |
| nan-qiao | #002 chapter-02 | 同 `quote-beaa798a9959760c2231` | xiangyang-qiaomu | 与大聪明并列致谢（跳过实体，仅记录） |

## 省略与未知项

- aj：真名、出生与教育经历官方未公开，不写；社区最新规模数字不进正文。
- cyber-zen：AGI Bar 与其个人/品牌的商业关系无第三方来源，正文只呈现节目发言人的说法；其报道清单（"最先报道 Manus"等）为自述。
- xiaohu：除官网自述与节目转述外无第三方报道，经历部分从简。
- luo-fuli：具体年薪数字、入职确切日期（仅官宣日）不写成事实；`罗福莉老公` 类隐私话题不写。
- liu-fei：著作书名未核验，只写"有页面提及"层面的信息并避免列书名；播客《半拿铁》起播时间未核验，不写。
- hanqing、nan-qiao：身份未知，全部省略。

## 后续衡量

无发布后数据。若接入 Search Console，按页面、语言、国家、设备与 28 天窗口记录曝光、点击、平均位置与可见查询样本；不把联想候选当作搜索量。

## 附录：Google 公开联想原始采样（2026-09-18）

```json
{
  "method": "Google public autocomplete, Firefox client, hl=zh-CN; curl + GBK decode",
  "samples": [
    {"query": "罗福莉", "language": "zh-CN", "suggestions": ["罗福莉", "罗福莉老公", "罗福莉 小米", "罗福莉访谈", "罗福莉真实水平", "罗福莉简历", "罗福莉年薪", "罗福莉 知乎", "罗福莉论文", "罗福莉github"]},
    {"query": "罗福莉 小米", "language": "zh-CN", "suggestions": ["罗福莉 小米", "罗福莉 小米 年薪", "罗福莉 小米 首 秀", "罗福莉 加入 小米", "罗福莉 入职 小米", "小米 大 模型 罗福莉", "小米 ai 罗福莉"]},
    {"query": "waytoagi", "language": "zh-CN", "suggestions": ["waytoagi 社区", "waytoagi 飞书", "waytoagi 知识库", "waytoagi 通往agi之路", "waytoagi 创始 人", "waytoagi官网", "waytoagi未来水世界直播", "waytoagi logo", "waytoagi feishu"]},
    {"query": "刘飞 三五环", "language": "zh-CN", "suggestions": []},
    {"query": "刘飞Lufy", "language": "zh-CN", "suggestions": ["刘飞luffy"]},
    {"query": "三五环", "language": "zh-CN", "suggestions": ["三五环"]},
    {"query": "赛博禅心", "language": "zh-CN", "suggestions": []},
    {"query": "小互 ai", "language": "zh-CN", "suggestions": []},
    {"query": "小互 xiaohu.ai", "language": "zh-CN", "suggestions": []},
    {"query": "汗青 机器人", "language": "zh-CN", "suggestions": []},
    {"query": "汗青 agi", "language": "zh-CN", "suggestions": []},
    {"query": "汗青 音乐会", "language": "zh-CN", "suggestions": []},
    {"query": "南乔", "language": "zh-CN", "suggestions": ["南乔治亚岛", "南乔治亚州", "南乔治亚岛战役", "南乔股价", "南乔肥皂", "南乔治亚与南三明治群岛", "南乔化工", "南乔霍厉霆", "南乔董事长", "南乔水晶"]},
    {"query": "南乔 agi bar", "language": "zh-CN", "suggestions": []},
    {"query": "大聪明 agi bar", "language": "zh-CN", "suggestions": []},
    {"query": "AGI Bar", "language": "zh-CN", "suggestions": ["agi bar", "agi bar shanghai", "agi bar 北京", "agi bar china", "agi bar beijing", "agi barsi age", "agi barrel", "agi bare knuckle", "agi bari 2025", "agi barchart"]}
  ]
}
```

同名歧义说明：`南乔` 命中地理实体与小说人名，与 AGI Bar 组织者无关联；`AGI Bar` 英文联想混入 "agi barsi age"（同名演员 Aishwarya Rai Bachchan）等无关项；`罗福莉老公`、`罗福莉真实水平` 属隐私/主观评价类，均排除未用。
