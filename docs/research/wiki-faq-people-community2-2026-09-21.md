# 社区与开发者人物（第二批）Wiki FAQ 与来源研究记录

## 范围与口径

本记录支持 `Tw93`、`brad-qiang`、`chen-baoyi`、`liu-shengyu` 四个人物实体的 Wiki 正文（四人全部写作，无跳过实体）。研究日期为 2026-09-21。需求线索来自 Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`，hl=zh-CN，curl 抓取并按 GBK 解码）；没有 Search Console、关键词工具或任何搜索量、难度、排名、点击、热度数据，相关指标一律 **N/A**，联想候选的出现不等于热门。人物实体缺少产品级联想词是普遍现象，FAQ 数量从简（每篇 2–3 个，多含编辑补充）。本批另有补充事实来源：GitHub REST API（`api.github.com`）、B 站检索页与个人空间、小宇宙播客页。

## 身份核验结论

| 实体 | 结论 | 关键核验来源 |
| --- | --- | --- |
| Tw93 | 产品工程师、开源开发者，Mole/Pake/妙言等开源工具作者，写作 | [GitHub 主页](https://github.com/Tw93)（bio、46 个公开仓库）；[Mole 仓库](https://github.com/Tw93/Mole)（GPL v3、`brew install mole`、原生应用 mole.fit、Windows 分支）与 README；[Pake](https://github.com/Tw93/Pake)、[MiaoYan](https://github.com/Tw93/MiaoYan) 仓库描述；Kami/Waza/Kaku/Maple/Weekly 仓库描述（GitHub API `users/Tw93/repos` 抓取）。YAML relations（mole 作者）与仓库归属一致 |
| brad-qiang | 一支烟花社区联合创始人、开发者，写作 | [GitHub ccc7574](https://github.com/ccc7574)（name 字段即"Brad 强"、location shanghai）；[小宇宙"一支烟花AI播客"页](https://www.xiaoyuzhoufm.com/podcast/658cea5d10888b10f7670b0e)（社区"成立于 2023 年""高质量偏硬核的 AI 社区"、40 余个垂直 AI 社群，页面将 Brad 强列为社区联合创始人）；其仓库 fireworks-skill-memory、wechat-radar 描述 |
| chen-baoyi | B 站科技区视频创作者，小米生态内容为主，写作 | [B 站检索页"陈抱一"](https://search.bilibili.com/all?keyword=陈抱一)（UP 主、空间 3530725、约 136.8 万粉丝、"新星UP主"）；[B 站空间](https://space.bilibili.com/3530725)（标题"陈抱一的个人空间"）；检索页可见《【首发】小米澎湃OS4全家桶体验！万物乱连？》等视频标题，与节目提及的"澎湃 OS 4 演示"相符。微博页（YAML 来源 weibo.com/u/5395738687）因登录墙无法抓取，未据其写正文 |
| liu-shengyu | DeepSeek-AI 机器学习系统工程师（MLSys 与算子设计优化），写作 | [个人主页](https://interestinglsy.github.io/)（SPA，经抓取 `assets/index-*.js` 提取自述全文）：DeepSeek-AI 2025.4 至今、杭州；北大信科图灵班 2021 级（2021.9–2025.7）、导师金鑫、北大超算队队长（第十届 ASC 第一、SC23 第二）；FlashMLA（H800 SXM5 上最高 660 TFlops、5%–15% 提升）、DeepSelect、swiftLLM；论文列表 DistServe（OSDI'24）、LoongServe（SOSP）、RLHFuse（NSDI'25）等；团队口径记录 V3.2/V4 预览/V4.1-Flash 发布。[GitHub interestingLSY](https://github.com/interestingLSY)（name "Shengyu Liu"、company @deepseek-ai）与 YAML 关系（deepseek 工程师）一致 |

任务背景说明：任务提示 `liu-shengyu` "可能与品牌 all-in 播客或 quiver-ai 相关"；经核验，实体 YAML 的 relations 指向 `deepseek`，本人主页与 GitHub 均证实其为 DeepSeek-AI 工程师，逐字稿中的"刘胜与"也是以"DeepSeek 员工写文章"身份被讨论，与 all-in / quiver-ai 无关。按 YAML 与核验结果写作。

## FAQ 候选与证据

采样时间 2026-09-21，方法同上。"编辑补充"指没有直接联想词、但可由已核验资料明确回答的常识问题。

| 页面 | 线索（类型） | 意图 | FAQ 采用 | 答案来源 |
| --- | --- | --- | --- | --- |
| Tw93 | `Tw93 github`、`Tw93 pake`、`Tw93/pake`、`Tw93 kami`、`Tw93 waza`、`Tw93 weekly`、`Tw93博客`（人物级联想词充分）；`mole 清理工具`、`mole 清理 mac`、`is Tw93 mole safe`（英文样本，工具+安全性意图） | 身份、代表作、Mole 是什么/是否可信、Pake 是什么 | Tw93 是谁；Mole 是什么工具（含 GPL v3 开源、mole.fit 分发，回应 "is Tw93 mole safe" 的代码可审查角度）；Pake 是做什么的 | GitHub 主页与各仓库 README |
| brad-qiang | `Brad强`、`一支烟花`、`一支烟花 社区`、`一支烟花AI` 均空返回或无相关候选 | 身份、社区是什么 | Brad 强是谁；一支烟花社区是什么（均为编辑补充） | 小宇宙播客页自述、GitHub 资料 |
| chen-baoyi | `陈抱一`（仅裸词）、`陈抱一 小米` 空返回 | 身份、在哪看视频 | 陈抱一是谁；陈抱一的视频在哪里看（均为编辑补充） | B 站检索页与空间 |
| liu-shengyu | `刘胜与`（仅裸词）、`刘胜与 deepseek` 空返回 | 身份、节目里提的文章 | 刘胜与是谁；节目里说的"刘胜与的文章"是怎么回事（后者为编辑补充，答案只依据逐字稿转述并注明原文未核验） | 个人主页、GitHub、逐字稿 |

未采用的联想词：`臀围93公分是几吋`（"Tw93" 谐音歧义，与人物无关）。`is Tw93 mole safe` 仅作安全性角度的回答素材，不直接引用为问题原文（中文页问题为"Mole 是什么工具"）。

## 事实核验与边界

- Tw93：作品清单与描述全部来自其 GitHub 仓库的官方描述（GitHub API 抓取，2026-09-21）；不写 star 数（时效数据）、不写任职公司（GitHub 资料未载，不采信传闻）；Mole 的付费原生应用与免费 CLI 双形态、GPL v3 许可、macOS 12+ 等按 README 表述。节目段落"我前几天在杭州见了 Tw93"为主理人原话引用，不转化为事实断言。
- brad-qiang："联合创始人"来自播客页面的人物呈现；社区规模（40 余个垂直社群）为页面自述，正文注明"页面自述"。"在上汽做跟豆包的项目"仅为主理人节目发言，无独立来源，正文明确标注"未见独立公开来源佐证"，不写成事实。
- chen-baoyi：粉丝数（136.8 万）为时效数据，不进正文；视频标题取自 B 站检索页可见条目；微博账号无法抓取，正文来源以 B 站为准；"小抱同学"来自检索页的关联账号信息。
- liu-shengyu：教育、竞赛、入职时间（2025.4）、研究项目与论文列表全部以本人主页自述为来源；FlashMLA 性能数字（660 TFlops、5%–15%）为其主页/发布说明记载的既成发布数据，注明出处；论文仅写"个人主页列出"，不自行推断作者排序；其 viral 文章原文（知乎/推特）无法抓取核验，正文中只呈现主理人转述并注明"文章原文未在本页核验"。

## 节目证据

本地中文逐字稿 #003（`next-token-weekly--003.zh-Hans.json`，2026-09-19 线上录制、制作中；transcript 页面按导入数据渲染，`/weekly/003/transcript` 链接可用）。四人均非节目参与者，正文已写明"未参与录制、为主理人转述"：

| 实体 | 期数与章节 | 段落锚点（经 /tmp/nt-quote-anchors.mjs 按仓库算法重算） | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| Tw93 | #003 chapter-19"常驻 Agent 与多平台内容分发" | `quote-e70f88cf035755d8604f` | xiangyang-qiaomu | 在杭州见 Tw93，转述其用 Grok Bot 推广 Mole 的多平台营销用法 |
| brad-qiang | #003 chapter-16"用代码做宣传片和配乐" | `quote-20c9c1dc8737b46c4007` | xiangyang-qiaomu | "Brad 强他就是在上汽做跟豆包的项目" |
| chen-baoyi | #003 chapter-16"用代码做宣传片和配乐" | `quote-69c1cef1e1d75f6b37c3` | guizang | 推荐"陈抱一的视频"澎湃 OS 4 演示，转述评论区反应 |
| liu-shengyu | #003 chapter-12"用 GPT-6 Astra 造数据、训练小模型" | `quote-539cde67a227f49e4cce` | yangpan | "DeepSeek 哥们儿的文章说是 GPT 写的" |
| liu-shengyu | 同上 | `quote-800ce427b20536d2256b` | orange | "DeepSeek 的内部人已经开始担心失业了……一个士兵已经没事可以做了" |
| liu-shengyu | #003 chapter-22"企业数据与日志边界" | `quote-ba2febbbc4904a32a8a1` | guizang | "刚才说到刘胜与的文章，传得挺多的，包括在推特上" |
| liu-shengyu | 同上 | `quote-7afad16dbe1350c4cba1` | yangpan | 文章走红 = "DeepSeek 小天才"+"踩 Anthropic"话题叠加 |

注：`/tmp/nt-quote-anchors.mjs` 为本次按 `src/data/transcript-paragraph-anchors.ts` 算法临时重建的本地脚本（原 /tmp 文件不存在），输出与仓库实现同逻辑（sha256 前 20 位、speakerId+归一化正文、重复原文追加序号）。实体链接段落在逐字稿中的位置（chapter-19/16/22/12）与脚本输出一致。

## 省略与未知项

- Tw93：任职公司、出生与教育经历未核验，不写；star 数与 Mole 原生应用价格不进正文；英文页 FAQ 标注了联想词来源（中文联想词在英文页保留原文以说明证据）。
- brad-qiang：社区成立的具体日期、播客起播时间未核验；"上汽/豆包项目"仅以主理人说法呈现；其在服务 mesh 社区时期的仓库（Envoy 中文文档、mosn.io 等）与人物关联仅为仓库归属，正文未展开。
- chen-baoyi：粉丝数、视频发布日期未进正文；微博账号内容未核验（登录墙），YAML 中的微博来源未复核，正文只引用 B 站。
- liu-shengyu：文章原文、标题、发布平台与日期未核验，全部以逐字稿转述呈现；论文作者排序未逐一核验，只写"个人主页列出"。

## 后续衡量

无发布后数据。若接入 Search Console，按页面、语言、国家、设备与 28 天窗口记录曝光、点击、平均位置与可见查询样本；不把联想候选当作搜索量。

## 附录：Google 公开联想原始采样（2026-09-21）

```json
{
  "method": "Google public autocomplete, Firefox client, hl=zh-CN; curl + iconv GBK decode",
  "samples": [
    {"query": "Tw93", "language": "zh-CN", "suggestions": ["Tw93 github", "Tw93 kami", "Tw93 waza", "Tw93/pake", "Tw93/waza", "Tw93/kami", "Tw93 pake", "Tw93 weekly", "Tw93博客", "臀围93公分是几吋"]},
    {"query": "Tw93 mole", "language": "zh-CN", "suggestions": ["Tw93 mole github", "Tw93 mole reddit", "is Tw93 mole safe"]},
    {"query": "mole 清理", "language": "zh-CN", "suggestions": ["mole 清理", "mole 清理工具", "mole 清理 mac", "mole磁盘清理", "mole mac 清理 工具"]},
    {"query": "pake Tw93", "language": "zh-CN", "suggestions": ["pake Tw93", "github Tw93 pake"]},
    {"query": "刘胜与", "language": "zh-CN", "suggestions": ["刘胜与"]},
    {"query": "刘胜与 deepseek", "language": "zh-CN", "suggestions": []},
    {"query": "陈抱一", "language": "zh-CN", "suggestions": ["陈抱一"]},
    {"query": "陈抱一 小米", "language": "zh-CN", "suggestions": []},
    {"query": "Brad强", "language": "zh-CN", "suggestions": []},
    {"query": "一支烟花", "language": "zh-CN", "suggestions": []},
    {"query": "一支烟花 社区", "language": "zh-CN", "suggestions": []},
    {"query": "一支烟花AI", "language": "zh-CN", "suggestions": []}
  ]
}
```

同名歧义说明：`Tw93` 联想中的"臀围93公分是几吋"为谐音歧义，未据此出题；`陈抱一`、`刘胜与` 裸词联想未混入其他同名人物（如历史人物"陈抱一"画家等未出现在候选中），页面语境已明确指向科技视频创作者与 DeepSeek 工程师。
