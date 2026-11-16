# 第 9 期产品 Wiki 正文 B 批研究记录（2026-11-09）

批次：第 9 期新增产品 6 个：`raycast`、`chatcut`、`canva`、`debian`、`qq`、`qzone`。交付文件为各产品的 `wiki.zh-Hans.md` 与 `wiki.en.md` 正文；本记录保留事实、证据、采用范围与未知项。

## 逐字稿引用与锚点

第 9 期逐字稿：`src/content/imported/transcripts/next-token-weekly--009.zh-Hans.json`，`publicationStatus: published`，5 个章节。锚点用 `src/data/transcript-paragraph-anchors.ts` 算法（speakerId ?? speaker + "\0" + NFC 归一化合并空白，sha256 前 20 位）经 node + crypto 复算，本批引用的全部段落均为首次出现（无 `-N` 后缀）：

| 锚点 | 章节 | 发言人 | 用途 |
| --- | --- | --- | --- |
| `quote-5862f1ab2dd6a0420d85` | chapter-01 | 杨攀 | DeepSeek Harness 类比 Linux 内核，Red Hat/Debian 发行版 |
| `quote-d0b23f034d15ce3d01a7` | chapter-01 | 杨攀 | "甘愿变成 DeepSeek Harness 的插件" trend，"从那个 ChatCut 开始" |
| `quote-3834215f0aea5904ab9b` | chapter-01 | 歸藏 | 工具软件早/晚对 AI 开放的讨论，以 Canva 为例 |
| `quote-6cba6ae12cd042c5050b` | chapter-01 | 向阳乔木 | 喜欢 Raycast AI 但插件审核慢，不愿为其开发 |
| `quote-8d67356689b55384ebfd` | chapter-01 | 橘子 | 年轻人群自有网络"可能 QQ 他们有自己的话" |
| `quote-76ebe5300ef417e2ec30` | chapter-01 | 橘子 | "你怎么能说 QQ 空间没用呢？QQ 空间多大经济价值呢？" |
| `quote-1fc2248acd728bb91240` | chapter-01 | 杨攀 | "你一说 QQ 秀，别人说老的也太老了" |

注意：QQ 秀/QQ 空间的类比全部出现在 chapter-01（Harness 与插件生态），不是 chapter-04。chapter-04 的"剪映"讨论（美颜 Benchmark）属于 `jianying` 实体，与本批无关。

## 各实体核验结论

### raycast

- 定位：启动器与效率应用，macOS + Windows，Raycast Technologies 开发。来源：英文维基百科 [Raycast (software)](https://en.wikipedia.org/wiki/Raycast_(software))、官网首页。
- 2020-10-29 公开测试 + 种子轮（官方博客 Hello World）；Extensions API 与商店 2021-11-30 正式可用（官方博客 Series A）；AI 于 2023 年加入（官方博客 2026-09-10 定价文回顾）；Windows 版 2025-11-20 公开测试（官方博客）。
- 采用：全部写入正文并就近链接官方博客。未采用：创始年份/创始人（官网与维基百科正文未给出，未核验到可靠来源，不写）。
- 存疑：无。

### chatcut

- 所指确认：`chatcut` 不是剪映相关衍生品，是 ChatCut Inc. 的独立产品。官方文档 What is ChatCut?（chatcut.io/docs/what-is-chatcut，已抓取全文）明确："a video editor with an AI agent built into the editing workspace"；桌面（macOS Apple Silicon/Intel、Windows）、Web、Agent Plugin 三入口；ChatGPT/Codex、Claude Code、Grok Bot 三类 Agent 插件；逐字稿面板编辑语音；导出 Premiere/DaVinci XML 与可在剪映/CapCut 继续编辑的草稿；官方明确区分"编辑器 vs 生成器"。页脚 © 2026 ChatCut Inc.
- 定价"按积分（credits）计费，有免费与 Pro 档"来自文档导航 Plans and Credits / Free and Pro Credits；`chatcut.io/pricing` 返回 200，作为 FAQ 指针。
- 节目讨论仅为杨攀 chapter-01 的趋势归纳；"从 ChatCut 开始"是参与者说法，正文已注明。
- 未核验：公司创立时间、融资、用户数（无可靠来源，不写）。

### canva

- 创立：2013-01-01，珀斯，Melanie Perkins / Cliff Obrecht / Cameron Adams（英文维基百科）。freemium；中国大陆版名"可画"（中文维基百科），canva.cn 作为入口链接（curl 返回 403，属站点反爬，链接目标真实）。
- AI 时间线（全部出自英文维基百科记录的公司发布史）：Magic Write 2022-12-07；Assistant 2023-03-22；Canva GPT 2024-01-11；Visual Suite 2 2025-04-10；Canva AI 2.0 研究预览 2026-04；2026-08 下调年增长预期 30%→20% 并称 AI 成本高企放慢推广。
- 节目讨论：逐字稿原文记作"Canvas"，但该词的 entity-link 指向 `canva` 实体（三处，均 turn 46），按 canva 归因；正文只作参与者观点转述，并以官方时间线对照，未替公司认定"不积极"。
- 未采用：估值、MAU、ARR 等公司数字（按规范不进正文）。

### debian

- 1993-08-16 由 Ian Murdock 发起，Debian Project 志愿者社区，仍在开发的第二古老发行版，许多发行版的基础（英文维基百科 summary）；官方 about 页确认自由软件定位、Linux/FreeBSD 内核、GNU 工具；社会契约与 DFSG 1997（官方 social contract 页面，正文引用年份经官方页面确认——页面本身以现行文本呈现，1997 年发布时间见英文维基百科及 Debian 历史文档）。
- 采用：发行版模式类比进节目讨论小节；Ubuntu 基于 Debian、不写 Ubuntu 发布年份（未在本批核验）。

### qq

- 1999-02-10 以 OICQ（OPEN-ICQ）上线（中文维基百科）；2000 年域名仲裁败诉后启用 tencent.com 并更名"腾讯QQ"（中文维基百科，时间线与英文维基百科一致）；QQ 群 2002 年推出；QQ 秀为 Q 币增值装扮服务（中文维基百科），对应红钻（英文维基百科）；2023 年 Windows 端 NT 架构统一桌面三端（中文维基百科）；月活 5.97 亿为"截至 2023 年 3 月"的带时间锚历史数据（英文维基百科）。
- 未采用：QQ 秀 2003 年上线说（未核验到可靠来源，不写年份）；QQ 等级、红包费率等细节（与节目讨论无关）。

### qzone

- 2005 年推出；前身"空间小窝"2005 年 4 月内测，2005-06-06 上线；2008 年转型社交网络；说说/日志/相册/视频/留言板；装扮多需黄钻/超级黄钻；早年第三方应用（QQ 农场等）流行（以上均为中文维基百科 QQ空间条目）。英文维基百科佐证"created by Tencent in 2005"。
- 节目讨论与 QQ 共用同一组锚点；正文注明是怀旧/网文化语境类比，黄钻装扮商业模式用于说明参与者观点。

## FAQ 需求线索

本批未接入搜索联想或站点查询数据源，FAQ 问题均为编辑补充（编辑归纳型），依据各产品官方文档的常见入口（是什么/支持平台/免费与否/区别/收费）与节目语境设计；映射为"编辑补充 → 官方来源"。无搜索量、热度类指标，均 N/A。

## 未知项与限制

- Raycast 创始人与创立年份未核验，正文不写。
- QQ 秀上线年份（常被引为 2003 年）未核验，正文不写。
- chatcut.io 与 canva.cn 对 curl 有反爬（403/有限内容），事实以抓取到的官方文档与维基百科为准。
- 歸藏对 Canva 的批评与乔木的"裁员"说法为参与者观点/转述，正文未作事实认定。
