# 新产品 Wiki FAQ 研究记录（批次 D：napkin、shandianshuo、step-audio、tetris、xcode、mole、tabbit）

## 范围与口径

本记录支持 2026-09-21 批次 D 的 7 个产品正文。研究日期为 2026-09-21，面向中文和英文读者。搜索需求线索来自 2026-09-21 Google Autocomplete（`suggestqueries.google.com`，`client=firefox` JSON 端点）的公开联想采样；本次没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，也不构成效果承诺。产品事实核验来源见各条目与正文来源区。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 种子词与语言 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| napkin | `napkin ai`、`napkin ai tool/free/login/app/pricing/alternative/slides/ppt`；`napkin ai 教程`（zh） | `napkin`、`napkin ai`（en/zh） | 导航、定价、导出 | 是（是什么、免费吗、导出格式、与图像生成的区别） | [napkin.ai](https://www.napkin.ai/) |
| shandianshuo | `闪电说 输入法`、`闪电说下载`、`闪电说 mac`、`闪电说 typeless`、`闪电说 github`、`闪电说官网`、`闪电说 ios`、`闪电说 app`、`闪电说繁体中文` | `闪电说`（zh） | 导航、平台、比较 | 是（官网、平台、与输入法区别、收费） | [shandianshuo.cn](https://shandianshuo.cn/) |
| step-audio | `step audio editx`、`step audio 2`、`step audio 2.5`、`step audio r1`、`step audio tts`；`step audio 3` 被无关结果稀释（USMLE、AA 步骤等） | `step audio`、`step audio 3`（en） | 定义、版本、开源 | 是（谁开发、是否开源、GitHub、Realtime 是什么） | [官方博客](https://static.stepfun.com/blog/stepaudio3/realtime/)、[arXiv:2609.14005](https://arxiv.org/abs/2609.14005)、[GitHub stepfun-ai](https://github.com/stepfun-ai) |
| tetris | `tetris movie/game/online/free/effect/io/99`；`俄罗斯方块 英文/网页版/下载/在线玩/tetris在线/小游戏/99` | `tetris`（en）、`俄罗斯方块`（zh） | 在线游玩、版本 | 是（发明人年份、在线免费玩、名称关系、官方版本） | [tetris.com](https://tetris.com/) |
| xcode | `xcode 27`、`xcode beta`、`xcode download`、`xcode 27 release date`、`xcode cloud`、`xcode mcp`、`xcode command line tools`；`xcode是什么`、`xcode是什么软件`（zh） | `xcode`（en/zh） | 下载、定义、版本 | 是（是什么、下载、会员关系、平台范围） | [developer.apple.com/xcode](https://developer.apple.com/xcode/) |
| mole | `mole mac`、`mole mac cleaner/app/macos/cleanup/github` | `mole mac`（en） | 导航、安装、清理 | 是（是什么、安装、免费与否、与 CleanMyMac 关系） | [github.com/Tw93/Mole](https://github.com/Tw93/Mole) |
| tabbit | `tabbit`、`tabbitbrowser`；`tabbit 浏览器`（zh）；`tabbit browser` 在 en 采样中被更正为 `rabbit browser` 系 | `tabbit`（en/zh） | 导航 | 部分（是什么、平台、功能、模型；定价未采用） | [tabbit.com](https://www.tabbit.com/) |

歧义处理与采样说明：

- 裸词 `napkin` 的联想被餐巾（`napkins`、`napkin folding`、`napkin holder`）占主导，仅 `napkin ai` 进入候选，故 napkin 全部采用带品牌修饰的采样。
- 裸词 `tabbit` 在 en 采样中几乎全被 `rabbit` 系结果覆盖，`tabbit browser` 被更正为 `rabbit browser`；仅 `tabbitbrowser` 与 zh 的 `tabbit 浏览器` 是有效修饰采样。Tabbit 的 FAQ 多为编辑补充（按官网功能自答），不做热度宣称。
- `mole` 裸词未采样（预期混入动物、单位等），直接使用 `mole mac` 品牌修饰。
- `step audio 3` 的 en 联想混入 USMLE Step 3、AA 十二步等无关结果；step-audio 的 FAQ 主要基于官网与 arXiv 事实自拟，联想仅作问题形态参考。

未采用的候选：`napkin ai alternative`（需要对比类内容，超出本页范围）、`闪电说 github`（官网未列 GitHub，无法核验）、`闪电说繁体中文`（无官方证据）、`tetris movie`（影视内容，与产品页无关）、`xcode mcp`、`xcode 27 release date`（版本时效性强、无稳定官方入口）、`闪电说 typeless`（节目与双官网可支持比较，但作为 FAQ 更适合留在 Typeless 页）。

## 事实边界

- napkin：官网 FAQ 将其定位为视觉沟通平台，功能分 Napkin Visuals 与 Napkin Slides；免费层含每周 AI 额度与 PNG/PDF 导出，PPT/SVG 导出属付费计划。导出格式与计划边界按官网 FAQ 表述，不承诺长期不变。
- shandianshuo：开发方为探未（武汉）科技有限公司（官网页脚）；官网列 Windows/macOS 已发布、Android/iOS/HarmonyOS/Linux 内测，属时效状态，正文以"以官网为准"处理并在 FAQ 用"截至 2026 年 9 月"锚定。官网有定价入口但未列价格，正文与 FAQ 均不编造价格。
- step-audio：第一代 Step-Audio（2025-02-17 开源，Apache 2.0 代码）与 Step-Audio 2 mini 系列（2025-08-29 开源）来自 GitHub 仓库 README；Step-Audio 3 家族（Realtime/Gen/Music）以官方博客页面与 arXiv 技术报告（2609.14005、2609.12945、2609.16034）为准。`StepAudio 3 ASR Max` 仅出现在节目转述与实体 YAML 别名中，未能在官方页面独立核验，因此正文只以节目发言形式出现，不作为本页事实主张。
- tetris：官方口径（tetris.com）为 Alexey Pajitnov 设计、1984 年问世、Tetris Holding 版权并授权 The Tetris Company。未写"苏联科学院开发"等未在本轮核验的背景，FAQ 未采用词源解释。
- xcode：官方引用句与"Apple Developer Program membership isn't required"来自 developer.apple.com/xcode/resources/；版本号（如联想中的 `xcode 27`）未写进正文，版本状态指向发布说明页。
- mole：README 描述 GPL-3.0、`brew install mole`、macOS 12+、Windows 为实验性分支；"原生 Mac 应用为单独商业产品"仅按 README 原文转述，未核验其定价页 mole.fit，正文不写价格。
- tabbit：开发方（北京酷讯互动科技有限公司）、平台、功能取自官网页面；内置模型清单随版本变化，只写"多家中国 AI 厂商模型"并指向官网。官网 FAQ 有"Tabbit 是免费的吗？"一问，但答案区 JS 渲染无法核验，定价 FAQ 未采用。

## 节目证据

全部引用来自本地第 003 期中文逐字稿（`src/content/imported/transcripts/next-token-weekly--003.zh-Hans.json`），锚点已按段落锚点算法重新计算：

- napkin：chapter-11"SVG、图标与设计工作流"，quote-2065100b7c3ccd1ce7e4（向阳乔木）。
- shandianshuo：chapter-17"语音输入产品与实时反馈"，quote-298ec8bf4b6b719e8c00（向阳乔木）、quote-a9d56612ddffc9ec9752（歸藏）。
- step-audio：chapter-12"用 GPT-6 Astra 造数据、训练小模型"，quote-12e140d159c4f3ce1815（歸藏）。
- tetris：chapter-06"“没有幻觉”不等于判断正确"，quote-f7aaf871eb81b83d3ef4（橘子）。
- xcode：chapter-15"Vibe Coding 把硬盘用满之后"，quote-5d702aadbf9a8b7f15d3、quote-d56600f6fa6820c593c2（歸藏）。
- mole：chapter-19"常驻 Agent 与多平台内容分发"，quote-e70f88cf035755d8604f（向阳乔木）。
- tabbit：chapter-17，quote-929a931e475be5e2bc48（向阳乔木）。

这些链接承载节目参与者在该语境中的讨论或转述，不是独立测评、官方背书或搜索需求证据；英文正文一律链接中文逐字稿并标注 Chinese transcript。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家和 28 天窗口记录曝光、点击、平均位置与可见查询样本；覆盖率与 CTR 只能基于实际数据计算。

## 补充官方入口

- [Step-Audio 3 Realtime 官方博客](https://static.stepfun.com/blog/stepaudio3/realtime/)
- [StepAudio 3 Gen 技术报告（arXiv:2609.12945）](https://arxiv.org/abs/2609.12945)、[StepAudio 3 Music 技术报告（arXiv:2609.16034）](https://arxiv.org/abs/2609.16034)
- [stepfun-ai 的 Step-Audio 仓库](https://github.com/stepfun-ai/Step-Audio)
- [Apple Developer 下载区](https://developer.apple.com/download/all/)
- [Xcode 发布说明](https://developer.apple.com/documentation/xcode-release-notes)
