# 第 008 期新增产品 Wiki 正文研究记录（A 批：7 个产品）

日期：2026-11-02。范围：`alphafold`、`google-ai-mode`、`github-copilot`、`microsoft-copilot`、`microsoft-excel`、`apple-pay`、`coloros` 的 `zh-Hans` 与 `en` Wiki 正文。本记录只保留事实、证据、采用范围和未知项；正文不含编辑过程。

## 逐字稿取材方法

- 逐字稿：`src/content/imported/transcripts/next-token-weekly--008.zh-Hans.json`（`chapters[].turns[].paragraphs`，paragraph 为分段数组）。用 node 按 `paragraphs` 段拼接（拼接逻辑与 `src/data/transcript-paragraph-anchors.ts` 的归一化一致）后按关键词定位发言。
- 逐字稿为 review-draft 未发布：**所有 7 个条目的"节目中的讨论"均不链接 `/weekly/008/transcript`，一律纯文本提及**（"第八期第 N 章「……」"）。章节标题使用逐字稿原名。
- 发言人（speakerId）：橘子（orange）、杨攀（yangpan）、歸藏（guizang）、向阳乔木（xiangyang-qiaomu）。

## 各条目

### alphafold

- **讨论上下文**：第 008 期 chapter-06「AI 制药：从效率提升到创造增量」。歸藏推荐《蜉蝣天地》（重轻主持）的药学访谈并转述：CRISPR/DNA 编辑 + "谷歌那个 AlphaFold"使人能设计任意蛋白质结构与靶向治疗，瓶颈是不能省略的三期临床；转述"19、20 年成熟，30 年左右一大波新药上市"的预测，自注"可能不准确"。杨攀：AI 可算分子是否溶于水等，把上百次实验压缩到一两次。橘子：AI 让非医药背景者可进入该领域。全部按参与者转述/观点处理，正文已注明。
- **事实来源**（2026-11-02 抓取 `https://deepmind.google/science/alphafold/` 核对）：CASP13 第一名 2018-12-02；CASP14 认定解决蛋白质折叠问题 2020-11-30；Nature 论文与开源 2021-07-15；AFDB 上线（与 EMBL-EBI）2021-07-22；数据库扩至 2 亿+ 结构 2022-07-28；AlphaFold 3 与 AlphaFold Server 发布（与 Isomorphic Labs，Server 非商业研究免费）2024-05-08；Hassabis/Jumper 获诺贝尔化学奖 2024-10-09（nobelprize.org/prizes/chemistry/2024/summary/）。官方页面自称被 190+ 国家/地区数百万研究者使用（正文写"数百万"，未写具体 300 万，因页面另一处写 200 万+，数字不一致）。
- **存疑点**：无重大存疑。引用 URL 全部 200 校验（alphafold.ebi.ac.uk、alphafoldserver.com/about、Nature s41586-021-03819-2、nobelprize.org）。

### google-ai-mode

- **讨论上下文**：chapter-03「Reddit 与 AI 搜索：内容被使用，流量去了哪里？」。歸藏转述 Reddit CEO 财报电话会：谷歌 AI Mode 等没有给 Reddit 带来流量增量，Reddit 次日大跌。橘子转述："AI Mode 不导流，对我们不导，对任何人都不导"、每周减少约 100 万次访问、谷歌自家搜索广告也减少。杨攀：从源头提供内容仍值得（内容会进 AI Mode），为 GEO 立场。正文全部标注为转述，未附出处。
- **事实来源**：官方博客 `https://blog.google/products-and-platforms/products/search/ai-mode-search/`（2026-11-02 抓取）：2025-03-05 宣布以 Labs 实验引入（初期面向美国 Google One AI Premium 订阅者）；定制版 Gemini；"query fan-out" 技术；回答附网页链接。2025 年 5 月 I/O 宣布向美国用户全面开放——该条为公开报道的既成事实，正文采用；英文 Wikipedia "AI Mode" 条目仅明确 2025 年 3 月引入与初期范围，已核对。
- **存疑点**：橘子转述的"每周减少 100 万次流量"等数字未在正文作为事实采用，只作为转述呈现。AI Overviews 美国上线时间（2024 年 5 月）为公开已知事实，用于 FAQ。

### github-copilot

- **讨论上下文**：chapter-08「GEO：AI 从哪里获取信息，又相信谁？」turn0，向阳乔木：基于 GEO 工具公司 Profound 提供的约一千万条数据、五千万链接的分析，发现海外 Gemini、GitHub Copilot 等主流模型 AI 引用模式各不相同，Reddit 被引用比例急剧下降。正文标注为第三方分析的转述。chapter-07 的"微软 Copilot 75% 引用"归属 microsoft-copilot 页，本页交叉指向。
- **事实来源**：`https://github.com/features/copilot`（2026-11-02 抓取）：官方 FAQ 定义为 "AI coding agent"；编辑器清单（VS Code、Visual Studio、JetBrains、Xcode、Vim、Neovim、Zed、Eclipse）+ Copilot CLI；模型可选（含自有 API Key/本地模型）；Free（$0）/$10/$39/$100 计划（价格未写入正文，只链接定价页）。历史日期：2021-06-29 技术预览、2022-06-21 转为个人付费订阅（英文 Wikipedia "GitHub Copilot"，2026-11-02 抓取）；2024-12 免费层（公开已知，正文采用）；2025 coding agent 公开预览（正文写"2025 年以公开预览形式推出"）。
- **存疑点**：coding agent 是否已 GA 未核，正文只写公开预览起点。价格不写入正文。

### microsoft-copilot

- **讨论上下文**：chapter-07 turn51/54，橘子转述美国中期选举期间"微软 Copilot 75% 引用指向 AI 生成的选民指南网站"，并评论"你只需要 GEO 一个 Copilot，你就能影响到选民"。正文标注转述、未附出处。
- **事实来源**：英文 Wikipedia "Microsoft Copilot"（2026-11-02 抓取）：2023-02-07 新版 Bing/Bing Chat；2023-09-21 统一 Copilot 品牌；2023-11-15 Bing Chat 更名 Copilot；2023-11-01 Microsoft 365 Copilot 企业 GA；2023-12 内置 Windows 11 + Android/iOS 应用；2024-01-15 Copilot Pro；freemium 模式。官网 `https://www.microsoft.com/en-us/copilot/`（抓取）：集成 Word/Excel/PowerPoint/Outlook/Teams、个人/商业/企业分层（价格未采用）。
- **存疑点**：橘子转述的 75% 数字明确标注为未经核实的转述。与 github-copilot 的互链双向均已实现。

### microsoft-excel

- **讨论上下文**：chapter-08 turn13，向阳乔木：大品牌花 50–100 万做 GEO 时把公众信息拆成最小数据字段、逐项核验，"就跟 Excel 对应一样"。这是本期内 Excel 的唯一出现，且为比喻。正文如实写明"唯一一次被提到，且是比喻"。
- **事实来源**：1985-09-30 Macintosh 首发、1987 Windows 版（公开出版史料，多来源一致，正文采用）；`.xlsx` 自 Excel 2007（Office Open XML）；2023 年 Python in Excel 公开预览（公开已知）。引用 URL 校验 200：`excel.cloud.microsoft/create/en/spreadsheet-maker/`（YAML 权威来源）、`microsoft365.com`、`microsoft.com/en-us/microsoft-365/excel`。
- **存疑点**：无重大存疑；价格与订阅档位不写入正文。

### apple-pay

- **讨论上下文**：chapter-05 turn30/31。歸藏转述小红书帖子：某银行（未指明）Apple Pay 用户批量被盗刷、金额几千美金不等、支付来自南美洲；其个人结论是"信用卡这块还是稳妥点"。橘子："我把我的 Apple Pay 的那个信用卡都删掉了"。正文标注为个人见闻与选择，明确不构成对 Apple Pay 安全机制的结论。
- **事实来源**：2014-09-09 发布、2014-10-20 美国上线、2016-02 银联合作进入中国大陆（公开报道的既成事实）；令牌化机制（Device Account Number + 一次性动态安全码）、支持设备（iPhone/Apple Watch/Mac/iPad/Apple Vision Pro）、Express Mode——2026-11-02 抓取 `https://www.apple.com/apple-pay/` 核对。`support.apple.com/en-us/HT204506` 校验 200。
- **存疑点**：盗刷事件本身节目未核实，正文仅作转述；FAQ"用 Apple Pay 还会被盗刷吗"按机制事实 + 转述处理。

### coloros

- **讨论上下文**：chapter-12 turn54–59：歸藏说"心力球"配件应用第一天只供 OPPO 使用，安装包被找到后任何手机可装；杨攀（一加手机）："OPPO 系统应该也可以用"；歸藏："星球也能直接用，它就是 OPPO ColorOS 嘛"。chapter-13：OPPO 折叠屏折痕/重量评价、歸藏的 OPPO Pad Mini（六一八 2,800 元）、橘子调侃"OPPO 专场/找刘作虎要广告费"。正文写明讨论对象是 OPPO 硬件与跨端兼容，ColorOS 仅在配件应用处被点名。
- **事实来源**：2013 年首发（公开史料）；2021-12 OPPO 与一加合并软件研发、国行一加预装 ColorOS、海外 OxygenOS 与 ColorOS 同代码基座（公开报道的既成事实，正文采用）；小布助手由 Breeno 发展而来。`coloros.com`（2026-11-02 抓取）显示当前大版本为 ColorOS 17 且 keywords 含"一加系统/一加升级"——版本号未写入正文（时效信息只留官网指针）。`oppo.com/en/`、`oneplus.com` 校验 200。
- **存疑点**：歸藏说"心力球"应用的兼容性属参与者说法，正文未作为 ColorOS 功能事实采用；"N6"机型名在节目中带不确定语气（"N6 还是什么 N 几"），正文未写具体机型名，只写"OPPO 折叠屏"。

## FAQ 需求证据

本批无 Search Console、关键词量级数据可用；外部搜索联想采样因网络环境不可用（搜索引擎均返回反爬页面）。7 个条目的 FAQ 均为**编辑补充**：问题按官方页 FAQ、产品文档结构和本批逐字稿中出现的真实疑问（如"AI Mode 不导流？""一加能用 OPPO 系统吗？"）归纳，答案由上列官方来源支撑。映射均为"编辑归纳 → 官方答案来源"，无伪造热度数据。

## 双语与红线自查

- 无任何指向 `/weekly/008/transcript` 的链接；第 008 期内容全部纯文本提及。
- 站内链接 18 个，全部解析到存在的实体（`/wiki/…` 与 `/en/wiki/…`）；github-copilot 与 microsoft-copilot 双语互链。
- en 文件 seo 字段含撇号者（alphafold seoDescription、coloros seoTitle）已用双引号包裹；en 分隔符 ASCII " | "，zh 用全角"｜"。
- 人名拼写：歸藏、向阳乔木、杨攀、橘子（en：Guizang、Xiangyang Qiaomu、Yang Pan、Orange）。无"智谱"内容。
- 时间口径：历史事实均带日期；"当前/最新"仅用于指向实时官方页面的指针；FAQ 答案无"截至"式快照断言（本批未使用）。
