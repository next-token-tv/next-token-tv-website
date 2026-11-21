# 第 11 期产品批研究记录

日期：2026-11-21。范围：`genie`、`devin-desktop`、`ant-afu`、`subcast`、`tailscale`、`factory-droid` 六个产品的双语 Wiki 正文（`src/content/prose/products/`，zh-Hans 与 en 各一份）。节目来源：第 11 期逐字稿（仓库 `src/content/imported/transcripts/` 中无 `next-token-weekly--011.zh-Hans.json`，第 11 期尚未入库）。

红线执行：第 11 期逐字稿未入库，本批正文一律不创建指向 `/weekly/011/transcript` 的链接；第 011 期讨论全部为纯文本提及，措辞不引用章节名（逐字稿入库后需复核章节名与表述）。已发布各期可链接；本批仅 `ant-afu` 产生跨期引用（第 002 期，逐字稿已发布）。

## FAQ 需求线索口径

本批未做搜索联想采样，无 Search Console 数据。各页 FAQ 为编辑补充：问题围绕"是什么／谁开发／怎么用／与相近产品区别／版本或时间线"等官方资料结构中的常见入口拟写，答案全部有各条目所列来源支撑；不使用搜索量、难度等任何指标。

## 逐条目记录

### genie

- 讨论上下文：第 011 期提到 Genie 4，围绕可交互世界模型的使用体验展开讨论；属参与者现场讨论，不代表官方已确认的产品安排。
- 事实来源：Google DeepMind 官方页（deepmind.google/models/genie/）与 Genie 原始研究页；官方页在研究时抓取不可读（返回内容无法解析），版本时间线改以英文维基百科 Genie (world model) 条目核对，正文关键时间点（Genie 2024-02、Genie 2 2024-12、Genie 3 2025-08、Genie 4 2026-10-27、Project Genie 2026-01-29 经 Google Labs 面向 Google AI Ultra 订阅者开放、单次约 60 秒上限）逐条与维基条目比对后采用，官方页列为第一来源供读者直达。
- 身份判定：Google DeepMind 的世界模型家族（生成可交互环境，区别于输出固定视频的视频生成模型）；第 011 期讨论对象为该家族的最新版本 Genie 4，无同名异物冲突。
- FAQ 线索（编辑补充）：Genie 是什么／3 与 4 区别（版本时间线入口）／怎么体验（Project Genie 预览入口）／与视频生成模型的区别（品类区分）。
- 存疑点："'API 开放'表述经复审删除，待逐字稿核验"——初稿曾写"围绕交互模拟体验和 API 开放展开讨论"，复审认定 API 开放与否需逐字稿核验且第 011 期逐字稿未入库，已从 zh/en 正文删除（现行表述为"围绕它的可交互世界模型体验展开讨论"）；逐字稿入库后如核实确有 API 开放讨论再行恢复。

### devin-desktop

- 讨论上下文：第 011 期谈到 Windsurf 时，主要讨论过往的编辑器体验以及相关团队后来参与的 Antigravity；未展开更名细节。
- 事实来源：官方页面 devin.ai/desktop 与入门文档 docs.devin.ai/desktop/getting-started；Windsurf 更名的产品事实（经自动更新推送更名、编辑器/扩展/工作流/设置/进行中工作保留、原有计划与价格不变、JetBrains 版 Windsurf 插件仍按原名称单独提供）依据 devin.ai 官方 FAQ 与页面说明逐项核对。
- 身份判定：Windsurf 桌面 IDE 更名后的产品，由 Cognition 提供；与同公司的软件工程智能体 Devin 是"客户端与智能体"的关系，正文与 FAQ 均作区分。
- FAQ 线索（编辑补充）：与 Windsurf 的关系（更名沿革入口）／与 Devin 的区别（产品分工）／更新是否丢数据（官方"自动保留"口径）／在哪获取（官方入口）。
- 存疑点：官方 FAQ 属营销口径，"数据全部保留"未做实际升级验证，正文以"按官方说明"归因。

### ant-afu

- 讨论上下文：第 011 期把阿福的健康场景与灵光的通用生活助手路线放在一起讨论；另经第 11 期复审指出漏收第 002 期真实提及，本次补录。
- 事实来源：蚂蚁集团官网更名公告（antgroup.com/press-releases/1765785600000）——AQ 于 2025 年 12 月更名为蚂蚁阿福，覆盖健康问答、体检报告解读与健康服务入口。
- 身份判定：蚂蚁集团的 AI 健康应用；002 期逐字稿（2026-09-13 发布，晚于更名）中参与者即以"阿福"称呼该应用，与官方现名一致，不存在改名问题，未替参与者改名。
- 002 期提及补录（2026-11-21）：在第 002 期逐字稿 `next-token-weekly--002.zh-Hans.json` 中定位到橘子（speakerId `orange`）的两段实质讨论，位于 chapter-16 "垂直应用的价值：数据、接口与上下文"（章节名与 JSON 逐字一致）：其一为"我觉得可能最近比较好的一个是阿福不是把医疗做得很好，最近我和我同事们都遇到一些这种小毛病的时候都去问阿福。"，其二为"它专业知识确实好，你比如说你问一个别的通用的 Agent……阿福就更详细，而且药什么的推荐都很好。"。锚点按 `src/data/transcript-paragraph-anchors.ts` 算法（speakerId ?? speaker + "\0" + NFC 归一化合并空白后的段落文本，sha256 前 20 位 hex，重复加 -N 后缀）用 node+crypto 复算：`quote-b0a528a21d92c075dedf` 与 `quote-a5c3d0cedb02509dc9d5`，均为该期全文首次出现，无 `-N` 后缀；引语为锚定段落逐字子串，脚本核验通过，并挂章节链接 `/weekly/002/transcript#chapter-16`。zh 正文补一段 002 期讨论（参与者分享用阿福问小毛病、药品推荐的体验，标注为个人使用体验）；en 版对应补充（英文 gloss + 中文引语标注，链接中文逐字稿）。
- FAQ 线索（编辑补充）：是什么／AQ 关系（更名沿革）／能做什么（官方公告口径）／与灵光的区别（同公司产品分工）。
- 存疑点：002 期第三处提及（"阿福和。飞猪 AI 已经快能用了"）未入正文——该句夹在他人插话间、语境破碎，单独引用易失真；002 期补录段落由本次修复批次写入，第 011 期讨论仍为纯文本，待逐字稿入库后核验措辞。

### subcast

- 讨论上下文：第 011 期介绍了订阅 Next Token 视频播客和剪辑高光片段的用法。
- 事实来源：GitHub 仓库 joeseesun/subcast 的 README 逐项核验：AGPL-3.0 许可；Tauri 构建（Rust 与 React）、数据存本地；订阅来源（YouTube 频道、Apple Podcasts、小宇宙、任意 RSS）、新单集自动下载；平台（macOS Apple 芯片与 Intel、Windows 10/11、Linux AppImage/deb/rpm，macOS 已签名公证）；字幕优先官方字幕、缺失时本机识别（默认本地模型、音频不出设备）或配置豆包/Groq/OpenAI 等云端服务、翻译默认经 Google 翻译、双语/中文/原文三种显示；其他用户识别过的单集共享的只有文本、不上传音频、可关闭共享；AI 导读（摘要、时间线、要点、时间戳）与基于逐字稿的问答（回答附可点击时间戳）；服务商自配（DeepSeek、Kimi、Claude、OpenAI、Gemini、Ollama 等）、API Key 存系统钥匙串。
- 身份判定：向阳乔木开发的开源桌面应用，开发者有本站人物条目（`xiangyang-qiaomu`）；官网 subcast.qiaomu.ai 与仓库一致。
- FAQ 线索（编辑补充）：谁开发的（开发者与开源入口）／支持平台（README 平台清单）／字幕来源（官方字幕—本地识别—云端服务次序）／是否收费（开源免费 + AI 走自配服务商）／开源许可（AGPL-3.0 义务）。
- 存疑点：README 的功能清单随版本演进，正文避免写入具体版本号与 star 数等时效快照；云端识别"默认"配置以 README 当前表述为准。

### tailscale

- 讨论上下文：第 011 期的例子是出门时用 iPad 连接家中的 Mac mini；Tailscale 负责让设备互通，屏幕/命令行分别由远程桌面或 SSH 提供。
- 事实来源：官方文档 tailscale.com/docs/concepts/what-is-tailscale 与英文维基百科条目：基于 WireGuard 的端到端加密组网、tailnet、身份与访问策略、NAT 穿越直连优先＋中继兜底、exit node、Taildrop、客户端覆盖；公司沿革（2019 年由四位前 Google 工程师 Avery Pennarun、David Crawshaw、David Carney、Brad Fitzpatrick 在多伦多创立；名称出自 Google 2013 年论文《The Tail at Scale》）据英文维基百科。
- 身份判定：Tailscale Inc. 的组网服务；与传统 VPN 的区分（点对点＋策略 vs 集中网关）在正文与 FAQ 均有说明。
- FAQ 线索（编辑补充）：是什么（官方文档入口）／谁开发（公司沿革）／与 VPN 区别（品类区分）／无公网 IP 能否用（NAT 穿越口径）。
- 存疑点："2020 对外提供"无来源已删除——初稿曾写"其组网服务于 2020 年起对外提供"，复审认定该年份无来源支撑，已从 zh/en 正文删除（现行表述为"成立后逐步开放其组网服务"，不带年份）；后续如找到官方发布时间来源可恢复具体年份。

### factory-droid

- 讨论上下文：第 011 期把 Droid 和 Devin 一起列为编程工具备选。
- 事实来源：docs.factory.com 官方文档核验：Droid CLI 负责计划、实现、测试与审查，审批流程保留人工确认，接入 Jira、Notion、Slack、Linear、PagerDuty 与 MCP 工具，Droid Exec 面向脚本与 CI/CD 的结构化输入输出；Factory Desktop 产品页（macOS/Windows/Linux 原生、产物与可运行网站预览、设计模式选中元素让 Droid 修改、逐行差异评论、会话跨端同步）。
- 身份判定：Factory（公司）的软件开发智能体；与 Devin 同为编码智能体，区别在入口与执行环境（终端 CLI＋本地工作流 vs 云端环境），FAQ 按此对比。
- FAQ 线索（编辑补充）：是什么／CLI 怎么用（官方文档入口）／Desktop 能做什么（产品页口径）／与 Devin 的区别（品类对比）。
- 存疑点：factory.ai 以 308 重定向到 factory.com（2026-11-21 实测 `factory.ai/product/desktop` → `factory.com/product/desktop`），正文来源链接仍按官方页面现行域名 factory.ai 列出并经重定向可达；如官方后续统一域名，需同步更新来源链接。

## 遗留问题

- 第 011 期逐字稿入库后：复核六条目第 011 期纯文本提及的措辞与章节名；优先核验 genie 是否确有"API 开放"讨论。
- 未更新各产品 YAML 的 `lastVerifiedAt`（本任务不授权改动元数据）。
- en 页第 011 期讨论均为纯文本，未使用 `/en/weekly/.../transcript` 链接；涉及已发布期的引用（ant-afu 002 期）按现行规范链接中文逐字稿并标注。
