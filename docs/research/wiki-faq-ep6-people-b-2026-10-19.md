# 第 006 期人物 Wiki FAQ 与来源研究记录（B 批）

## 范围与口径

本记录支持第 006 期提及的四个人物实体：`li-nan`、`huashu`、`mediastorm-tim`、`zhao-chunxiang` 的中英文 Wiki 正文。研究日期 2026-10-19。需求线索来自 Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`，zh-CN 提示）；本次没有 Search Console、关键词工具或任何搜索量、难度、排名、点击数据，相关指标一律 **N/A**，联想候选不等于热门。人物实体联想词偏少，FAQ 每篇 2–3 个。

四人全部核验到可靠的公开身份证明，全部完成正文，**无跳过实体**。逐字稿引用均经本地原文核对（第 006 期中文逐字稿；第 006 期暂无英文逐字稿，英文正文一律链接 `/weekly/006/transcript#...` 并注明 Chinese transcript，未生成 `/en/weekly/006` 链接）。发言人归属与段落锚点见下文"节目证据"。

## 身份核验结论与来源

| 实体 | 身份结论 | 关键核验来源 |
| --- | --- | --- |
| li-nan | 李楠，怒喵科技（Angry Miao）创始人（2020 年创立）；此前为魅族 CMO 兼高级副总裁（2018-06-20 任命）、魅蓝品牌创始人，2019-07-18 微博宣布离职 | [中文维基百科"李楠 (魅族科技副总裁)"条目](https://zh.wikipedia.org/wiki/%E6%9D%8E%E6%A5%A0_(%E9%AD%85%E6%97%8F%E7%A7%91%E6%8A%80%E5%89%AF%E6%80%BB%E8%A3%81))（API 全文核验）、[36氪《手机停了、Flyme卖了，一群老魅族人开始再创业》](https://36kr.com/p/3929097041532549)（jina 代理全文核验，2026 年报道）、[怒喵官网](https://www.angrymiao.com/)（JS 渲染，仅作入口）、YAML 既有来源 [r/angrymiao Reddit AMA](https://www.reddit.com/r/angrymiao/comments/1w0l0gl/were_angry_miao_li_nan_and_the_team_are_here_ask/)（本环境 Reddit 被拦，未直接核验正文） |
| huashu | 花叔，GitHub [alchaincyf](https://github.com/alchaincyf)，自称"不会写代码的创造者"，开源 Agent Skills 作者（nuwa-skill、huashu-design、darwin-skill 等），橙皮书站点 bookai.top | GitHub API（profile + repos）与个人主页 README 原文核验 |
| mediastorm-tim | Tim（潘天鸿，Tim Pan），影视飓风（Mediastorm）创始人兼 CEO，运营主体杭州星奥传媒有限公司 | [中文维基百科"影视飓风"条目](https://zh.wikipedia.org/wiki/%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E)（API 全文核验，含潘天鸿生平）、[36氪"圆通总裁、Tim父亲潘水苗出任影视飓风董事长"](https://36kr.com/p/4026744839229829)（搜索结果标题核验）、[bilibili 主页](https://space.bilibili.com/946974)、[YouTube 主页](https://www.youtube.com/@mediastorm6801)（均出自维基条目外链） |
| zhao-chunxiang | 赵纯想，独立开发者/写作者，AI 编剧写作工具 Laper 创始人（laper.ai 创始人信署名 ChunXiang Zhao，自述前编剧转开发者） | [chunxiang.ai](https://chunxiang.ai/)（两次抓取，自述、产品与奖项逐字核对）、[laper.ai](https://laper.ai/)（创始人信原文核验） |

指代确认与任务线索更正：

- 任务提示称 li-nan"此前锤子科技经历可核验"。核验结果：李楠可核验的前任雇主是**魅族**（CMO 兼高级副总裁、魅蓝品牌创始人），维基百科条目与 36氪报道均无锤子科技经历；他公开评论过锤子 TNT（2026-09-24 驱动之家标题"李楠称锤子TNT生不逢时"），疑为混淆来源。正文按魅族书写。
- 逐字稿 chapter-14 中的裸名"Tim"按实体链接标注确认为影视飓风 Tim（mediastorm-tim），语境为自媒体传播力话题，与身份一致。
- huashu 逐字稿写作"花叔"，与 GitHub 用户名及 huashu-* 仓库前缀一致。
- zhao-chunxiang 的节目提及为社交媒体帖子转述，与其 X/小红书/抖音创作者活动一致（chunxiang.ai 列出这些渠道）。

## FAQ 候选与证据

采样时间 2026-10-19，方法为 Google 公开联想（`client=firefox`，zh-CN）。"编辑补充"指没有直接联想词、但可由已核验资料明确回答的问题。

| 页面 | 线索（类型） | 意图 | FAQ 采用 | 答案来源 |
| --- | --- | --- | --- | --- |
| li-nan | `怒喵科技创始人李楠`、`怒 喵 科技 李楠`、`李楠 魅族`、`怒喵鼠标驱动`（人物/产品级联想词充分；`李楠`裸词混入篮球运动员、演员等大量同名） | 创始人身份、魅族履历、鼠标驱动 | 怒喵科技的创始人是谁；李楠以前在魅族担任什么职务；怒喵科技做什么产品（编辑补充） | 36氪报道、中文维基百科条目、怒喵官网 |
| huashu | `花叔 skill`、`花叔 skill github`、`花叔女娲 skill`、`花叔 橙皮书`、`花叔design`、`花叔 ppt skill`、`huashu skill github`、`huashu design skill`、`alchaincyf huashu skills`（中英联想词充分） | Skills 在哪获取、女娲是什么、橙皮书是什么 | 花叔是谁（编辑补充）；女娲.skill 是什么；花叔的开源 Skills 在哪里获取 | GitHub 主页与各仓库自述 |
| mediastorm-tim | `影视飓风创始人tim`、`影视飓风 tim 学历`、`影视飓风tim背景`、`tim 潘天鸿`、`潘天鸿 是 哪 家 公司 老板`、`影视飓风 tim 爸爸`/`tim 父亲`（人物级联想词充分） | 创始人身份、学历背景、家庭背景 | 影视飓风的创始人是谁；Tim 的学历背景是什么；Tim 和圆通速递总裁潘水苗是什么关系 | 中文维基百科条目、36氪报道 |
| zhao-chunxiang | `赵纯想`（裸词）；`赵纯想 geb`（无法解释，不采用）；`laper ai` 命中的均为 paper 类无关候选 | 身份、Laper 是什么 | 赵纯想是谁（编辑补充）；Laper 是什么（编辑补充） | chunxiang.ai 自述、laper.ai 创始人信 |

未采用的联想词：`李楠 篮球`/`李楠演员`/`李楠 清华大学`（同名歧义，排除）；`影视飓风 tim 离婚`/`tim 老婆`、`潘天鸿 离婚`/`潘天鸿老婆`（离婚为 2024-11-05 本人公开声明、维基条目有载，但每篇 FAQ 限 3 个，本批优先身份与职业问题，未采用）；`潘天鸿身价`/`潘天鸿身高`/`潘天鸿生日`（无可靠官方来源且不合适）；`影视飓风 tim 阿信`/`tim ig`（语境不明）；`花叔薯`（同名美食账号）、`花叔 tum hi ho`（音乐内容歧义）；`花叔的claude skills白皮书`（未能核验到对应作品，可能指橙皮书，不冒认）；`赵纯想 geb`（不可解）。未出题原因均记录于此。

## 事实核验与边界

- li-nan：魅族任职与离职日期依中文维基百科条目；"魅族三剑客/魅蓝品牌创始人/2020 创立怒喵/Cyberboard 首款产品"依 36氪 2026 年报道全文。CYBERBLADE 耳机（2022 年发布）、Infinity Mouse（2025-03 发布、品牌首款鼠标、热插拔磁吸换电）、AM Infinity .97（2026-04-03 发售）依据 Google News RSS 返回的多家媒体标题与摘要（新京报 2020-08-06、中新网 2022-08-11、搜狐 2022-08-30、驱动之家 2025-03-11、凤凰网科技/新浪 2026-04-03 等），**未能核验报道正文**（Google News 重定向无法在本环境解析），故正文只写年份/月份、不写价格与融资金额；天使轮/A 轮（龙珠资本、联想创投）虽有多个标题，一律未写入正文。Reddit AMA 正文未能直接核验，仅保留 YAML 既有来源链接。
- huashu：全部事实来自 GitHub API 与本人 README 第一人称；Star/Followers 数字（如 nuwa-skill 34,992★、主页 105.8k★）为快照数据，正文不写。"小猫补光灯"按其 README 自述表述（"从小猫补光灯到开源Skill"）。
- mediastorm-tim：生平、频道史、卫星项目、其他频道、2024 营收自述、2026-10-14 潘水苗出任董事长依中文维基百科条目（API 全文）；36氪标题仅作潘水苗事件的旁证，未核验其正文。离婚声明（2024-11-05）有维基条目支持但未写入正文/FAQ（见上表未采用说明）。出生日期 1996-05-16 有条目支持，正文未使用。
- zhao-chunxiang：产品、定位与奖项均为 chunxiang.ai 站点列表内容，正文已按"其个人站点列出"归属；Laper 功能与"100% Built by Claude Code"为 laper.ai 站点自述。学历、出生年等无来源，不写。
- 四人均非节目参与者，正文均写明"未参与本页引用的节目"，提及内容全部注明发言人；YAML `lastVerifiedAt` 未改动。

## 节目证据

本地中文逐字稿（第 006 期）中的相关章节与段落锚点，均经读取原文并用等价锚点脚本（`/tmp/nt-quote-anchors.mjs`，按 `src/data/transcript-paragraph-anchors.ts` 算法）核对；第 001–005 期逐字稿无实体链接命中。四人提及全部集中于第 006 期。

| 实体 | 期数与章节 | 段落锚点 | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| li-nan | #006 chapter-02"REA 与 AI 逆向：给怒喵鼠标补一个 macOS 驱动" | `quote-2d1ac85953f0707d109e` | orange | "李楠。"（补出怒喵创始人名字） |
| li-nan | 同上 | `quote-0474a62ec7502664aefd` | yangpan | "李楠是吧？让李楠给我们这期通告费。" |
| li-nan | 同上 | `quote-1972ff8f5c4a5ffea27b` | guizang | "我 @ 一下李楠，我说别做了，做好用这个得了" |
| zhao-chunxiang | #006 chapter-06"当收件人变成 Agent：邮件钓鱼、权限越界与"Token 税"" | `quote-01f20300e17b19987202` | orange | 转述赵纯想关于研究员祈祷 Agent 越狱的搞笑帖子 |
| mediastorm-tim | #006 chapter-14"为什么一个主 Bot、一个聊天入口，就让人用上头了？" | `quote-4e7a9e800d6e75072ee5` | guizang | "马斯克，老罗，那个 Tim 是驯化的算法"（头部创作者传播力） |
| huashu | #006 chapter-19"Skill 加上自己的名字：既方便调用，也是一次个人品牌传播" | `quote-a48bc5e8247526f63f99` | yangpan | "乔木的 Skill 前缀都是带乔木的，那个谁花叔也是吧？" |

## 后续衡量

无发布后数据。若接入 Search Console，按页面、语言、国家、设备与 28 天窗口记录曝光、点击、平均位置与可见查询样本；不把联想候选当作搜索量。

## 附录：Google 联想原始采样（2026-10-19）

```json
{
  "method": "Google public autocomplete, Firefox client; zh-CN hint",
  "samples": [
    {"query": "李楠 怒喵", "suggestions": []},
    {"query": "李楠 魅族", "suggestions": ["李楠 魅族"]},
    {"query": "怒喵 鼠标", "suggestions": ["怒喵鼠标", "怒喵鼠标驱动", "怒喵鼠标说明书"]},
    {"query": "怒喵科技", "suggestions": ["怒喵科技", "怒喵科技创始人李楠", "怒 喵 科技 李楠"]},
    {"query": "李楠", "suggestions": ["李楠俊", "李楠崇", "李楠", "李楠楠", "李楠演员", "李楠或kkk", "李楠 清华大学", "李楠 篮球", "李楠 華潤", "李楠 小米"]},
    {"query": "花叔", "suggestions": ["花叔薯", "花叔 skill", "花叔", "花叔 橙皮书", "花叔design", "花叔 tum hi ho", "花叔 ppt skill", "花叔的claude skills白皮书", "花叔 ppt", "花叔 design skill"]},
    {"query": "花叔 skill", "suggestions": ["花叔 skill", "花叔 skill github"]},
    {"query": "花叔 女娲", "suggestions": ["花叔女娲 skill"]},
    {"query": "花叔 小猫补光灯", "suggestions": []},
    {"query": "huashu skill", "suggestions": ["huashu skill", "huashu skill github", "huashu skill claude", "huashu design skill", "huashu ppt skill", "huashu design skill github", "huashu slides skill", "花叔 skill", "花叔 skill github", "alchaincyf huashu skills"]},
    {"query": "影视飓风 tim", "suggestions": ["影视飓风 tim 爸爸", "影视飓风 tim 离婚", "影视飓风 tim", "影视飓风 tim 老婆", "影视飓风 tim 阿信", "影视飓风 tim ig", "影视飓风tim背景", "影视飓风tim父亲", "影视飓风 tim 学历", "影视飓风tim身价"]},
    {"query": "tim 潘天鸿", "suggestions": ["tim 潘天鸿", "tim 潘天鸿 离婚"]},
    {"query": "影视飓风 创始人", "suggestions": ["影视飓风创始人", "影视飓风创始人tim", "影视飓风创始人tim情绪失控险动手 工作人员劝和 别打架 在直播", "影视飓风创始人tim节目中情绪失控险些动手"]},
    {"query": "潘天鸿", "suggestions": ["潘天鸿", "潘天鸿身高", "潘天鸿爸爸", "潘天鸿老婆", "潘天鸿身价", "潘天鸿 离婚", "潘天鸿(tim)", "潘天鸿 学历", "潘天鸿 生日", "潘天鸿 是 哪 家 公司 老板"]},
    {"query": "赵纯想", "suggestions": ["赵纯想", "赵纯想 geb"]},
    {"query": "赵纯想 laper", "suggestions": []},
    {"query": "laper ai", "suggestions": ["laper ai", "paper airplane", "paper ai", "paper airplane tutorial", "paper air freshener", "paper airplane instructions", "paper ai detector", "paper ai review", "paper ai design", "paper airplane remote control kit"]}
  ]
}
```

同名歧义说明：`李楠` 裸词命中篮球运动员（前中国男篮主教练李楠）、演员等；`花叔` 含同名美食账号"花叔薯"与歌曲内容；`赵纯想 geb` 不可解。以上均已排除，未据此出题。
