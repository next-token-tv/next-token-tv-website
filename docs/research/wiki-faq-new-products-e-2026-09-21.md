# 新批次三产品 Wiki FAQ 研究记录（figma / claude-cowork / stable-diffusion）

## 范围与口径

本记录支持 `figma`、`claude-cowork`、`stable-diffusion` 三个产品的 Wiki 正文批次。研究日期为 2026-09-21，面向中文和英文读者。搜索需求线索来自 2026-09-21 的 Google Autocomplete 公开联想（`suggestqueries.google.com`，`client=firefox`，中文 `hl=zh-CN`、英文 `hl=en`）与官方页面检索；本次没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现顺序不表示热度，出现不等于热门。

网页核验方式说明：`claude.com` 与部分维基页面多次拒绝代理抓取（ECONNRESET），相关页面改用 `curl` 直接抓取原始 HTML 并提取正文后人工阅读；官方页面内容以当日抓取所得为准。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| Figma | zh 联想：`figma mcp`、`figma make`、`figma下载`、`figma是什么`、`figma 官网`、`figma 中文`、`figma汉化`、`figma download`；`figma是什么` 的联想：`是什么公司/软件/意思/工具/网站`；`figma收费` 的联想：`收费吗/收费标准`。en 联想：`figma stock`、`figma make`、`figma weave`、`figma mcp`、`figma ai`、`figma config 2026` | 定义、导航、下载、计费、官方 MCP | 是（定义、官网与下载、计费、官方 MCP、Figma Make） | [Figma 主页](https://www.figma.com/)、[Pricing](https://www.figma.com/pricing/)、[Downloads](https://www.figma.com/downloads/)、[Figma MCP server 帮助文档](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) |
| Claude Cowork | zh 联想：`claude cowork是什么`、`claude cowork 和 claude code 区别`、`claude cowork怎么用`、`claude cowork 下载`、`claude cowork和code有什么区别`、`claude cowork vs claude code`、`claude cowork 介绍`、`claude cowork for windows`。en 联想：`claude cowork vs claude code`、`claude cowork pricing`、`claude cowork for windows`、`claude cowork vs chat`、`claude cowork mobile`、`claude cowork for mac`、`claude cowork use cases`、`claude cowork app` | 定义、比较、使用方式、平台、计费、与聊天合并 | 是（定义、与 Claude Code 区别、桌面应用与平台、包含在哪些计划、合并公告） | [Claude Cowork 产品页](https://claude.com/product/cowork)、[合并公告博客](https://claude.com/blog/cowork-is-now-claude/)、[Getting started with Cowork](https://support.claude.com/en/articles/13345190-getting-started-with-cowork)、[Use Cowork safely](https://support.claude.com/en/articles/13364135-use-cowork-safely) |
| Stable Diffusion | zh 联想：`stable diffusion webui`、`stable diffusion 官网`、`stable diffusion 3`、`stable diffusion ai`、`stable diffusion 官网 下载`、`stable diffusion 教程`、`stable diffusion 下载`、`stable diffusion 模型`、`stable diffusion 3.5`。en 联想：`stable diffusion ai`、`stable diffusion webui`、`stable diffusion paper`、`stable diffusion 3`、`stable diffusion xl`、`stable diffusion 1.5`、`stable diffusion model` | 定义、导航、版本、获取方式、许可 | 是（定义、官网与获取、免费与许可、版本、与 Midjourney 区别） | [Stability AI 图像模型页](https://stability.ai/stable-image)、[许可选择页](https://stability.ai/license)、[Community License](https://stability.ai/community-license)、[SD 3.5 发布公告](https://stability.ai/news-updates/introducing-stable-diffusion-3-5) |

歧义处理：

- `stable diffusion` 的版本歧义明显：联想同时出现 `1.5`、`3`、`3.5`、`xl`、`webui` 等，第三方社区工具（如各类 WebUI 发行版）默认加载的版本各不相同。正文与 FAQ 明确区分模型家族、版本与第三方运行界面，版本主张以官方页面为准，不链接未核验的第三方界面。
- `figma` 的联想包含 `figma是什么意思`（发音与名称疑问）与 `figma stock`（股票）；`figma` 与 Sigma 等发音近似词的组合采样（`figma和sigma`）无联想返回，未发现可核验的混淆点，未采用相关 FAQ。股票疑问通过历史小节与官方/可靠来源日期回应，不作为独立 FAQ。
- `claude cowork` 中文联想出现一条与产品无关的娱乐内容混入，未采用；比较类意图（vs claude code）在两种语言中反复出现，优先采用。

## 事实边界与来源

- Figma 官方主页自称 "The collaborative canvas for design, code, and AI"，列出 Figma Design、Figma Make、Figma Weave、Dev Mode、Figma Motion、FigJam、Figma Slides、Figma Draw 以及 Beta 状态的 Figma Sites、Figma Buzz；计费页列出 Starter（免费，"Free limited access to Figma products"）与 Professional、Organization、Enterprise 三档付费及 Full/Dev/Collab 座位类型；下载页提供 macOS、Windows、Windows Arm 桌面应用与 iOS/iPad、Android 移动应用。官方 MCP 帮助文档说明 "The Figma MCP server" 当前为 beta 且 beta 期内免费，之后将成为按用量收费功能。
- Figma 历史采用维基百科条目 [Figma (software)](https://en.wikipedia.org/wiki/Figma_(software))：2012 年由 Dylan Field 与 Evan Wallace 创立；2015 年 12 月 3 日邀请制预览、2016 年 9 月 27 日公开发布；Adobe 于 2022 年 9 月 15 日宣布约 200 亿美元收购、2023 年 12 月 18 日双方放弃交易（Adobe 支付 10 亿美元反向分手费）；2025 年 7 月 31 日在纽约证券交易所上市（代码 FIG）。
- Claude Cowork 官方产品页（2026-09-21 抓取）：Cowork 完成"可从任何地方引导的多步任务"，桌面应用覆盖 macOS、Windows（含 arm64）、ChromeOS、Linux；"Works with a paid plan. Rolling out on web, mobile (beta)"；官方 FAQ 明确 Cowork 面向非编码知识工作（研究、分析、文档），"uses the same agentic approach as Claude Code"；computer use 在 Cowork 与 Claude Code 中均为 research preview；"Claude Cowork consumes limits faster than Chat"；Cowork 桌面应用的内置浏览器在 Pro、Max、Team 计划可用。价格数字不进入正文。
- 2026 年 9 月 16 日官方博客 [Claude Cowork and chat are now one Claude](https://claude.com/blog/cowork-is-now-claude/) 宣布 Cowork 与聊天合并为一个 Claude，未来几周内向 Pro 与 Max 推送，Team 与 Free 随后，Enterprise 提前 30 天收到变更通知。产品页"最新功能公告"另列出 2026 年 4 月 9 日插件市场、2026 年 8 月 26 日企业部署两条博客。Cowork 最初发布日期未在本次核验的官方页面中找到，正文不写。
- Stable Diffusion 官方页面列出当前模型家族：Stable Diffusion 3.5 Large / Turbo / Medium、SDXL（3.5B 参数）、SDXL Turbo；部署方式为 Self-Hosted License、Stability AI API（Platform）、云伙伴与 Stable Assistant。官方许可页确认：Community License 面向年营收低于 100 万美元的研究者、开发者、小企业与创作者（免费，含 Stable Diffusion 3.5 Suite 与 SDXL Turbo）；年营收超过 100 万美元的企业适用 Enterprise License；官方 FAQ 说明自托管 Core Models 在非商用或年营收不超过 100 万美元时免费。历史（2022 年 8 月 22 日发布、CompVis/Runway/Stability AI 研发、SDXL 2023 年 7 月、SD 3 早期预览 2024 年 2 月、SD 3.5 2024 年 10 月 22 日、早期 CreativeML OpenRAIL-M 许可）采用维基百科 [Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion) 条目。

## 节目证据

三处提及均出自本地中文逐字稿 Weekly #003（episodeId `next-token-weekly--003`，publicationStatus 为 review-draft；站点已有多个批次正文引用 `/weekly/003/transcript`，沿用该路径）：

- Figma：chapter-11 "SVG、图标与设计工作流"。歸藏描述在 Figma 里画几十像素小图标要靠钢笔、贝塞尔曲线与布尔运算、20 个图标可能要画一天（[quote-99e82db7b58fb55934a2](/weekly/003/transcript#quote-99e82db7b58fb55934a2)），并说最近出现很多想取代 Figma 的 AI 设计软件、它们对画 SVG 的 Arrow 2 模型需求挺大（[quote-90e9303fa082c91c8973](/weekly/003/transcript#quote-90e9303fa082c91c8973)）。
- Claude Cowork：chapter-20 "Coding 与 Office：两种工作模式"。歸藏在谈 Claude Code Projects 测试版之后说 Anthropic "把 Code、Cowork 和 Claude Chat 合到一起了，就学 Codex"（[quote-f14ca85beeca6706c25f](/weekly/003/transcript#quote-f14ca85beeca6706c25f)）；橘子、向阳乔木表示"没必要分"。节目口径与 9 月 16 日官方合并公告一致，但合并范围以官方公告为准。
- Stable Diffusion：chapter-08 "把新模型接入现有 Agent"。歸藏提到有人给新模型画 24×24 或 30×30 的格、并行预测每个像素的颜色，"实现类似于 Stable Diffusion 或者 Diffusion 模型那种画图"（[quote-95f3eddc0464471e29dd](/weekly/003/transcript#quote-95f3eddc0464471e29dd)）。这是以 Stable Diffusion 作类比的侧面提及，不是对 Stable Diffusion 本身的讨论。

段落锚点由 `/tmp/nt-quote-anchors.mjs`（等价于 `src/data/transcript-paragraph-anchors.ts` 算法）生成。英文正文引用中文逐字稿时链接文字写 Chinese transcript，不生成 `/en/weekly/...` 链接。

## 未采用与未知项

- `figma汉化`/`figma 中文`：官方对中文界面的支持情况未能在本次核验的官方页面中确认，不写相关主张；下载类需求并入"官网与下载"FAQ。
- Cowork 最初发布（launch）日期：未找到官方原始公告页面，正文只写 2026-09-16 合并公告与产品页列出的两条博客日期。
- Figma MCP 的可用计划边界随 beta 推进可能变化，FAQ 只转述官方"beta 期免费、之后按用量收费"并链接官方帮助文档，不展开计划细节。
- Stable Diffusion 第三方 WebUI 发行版（webui/forge 等高频联想）不是官方产品，不提供第三方入口，仅在获取方式中说明开放权重可由自行部署的环境加载。
- 搜索量、难度、CTR 等：N/A；联想顺序不是热度排名。
