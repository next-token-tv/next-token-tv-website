# 第 005 期产品批次 G（pencil、strata、lennys-podcast、modretro-chromatic）FAQ 与事实研究记录

## 范围与口径

研究日期 2026-10-08，支持 `pencil`、`strata`、`lennys-podcast`、`modretro-chromatic` 四个产品条目的中英文 Wiki 正文。FAQ 线索来自 2026-10-08 的 Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`）与一次 DuckDuckGo 联想查询；没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击、热度均为 **N/A**，联想顺序不代表热度。短名实体（pencil、strata、chromatic）歧义严重，全部按任务要求用品牌或用途修饰词采样。

## 实体指代确认

- `pencil`：YAML 官网为 `pencil.dev`。节目（#005 chapter-18）中歸藏的提及与 MagicPath 同一语境，但指代是设计工具 Pencil，与 Muse 无关。核验发现 pencil.dev 现在 307 跳转到 pen.dev，站点横幅写 "pencil.dev is now pen.dev"，开发方署名 © 2026 High Agency Inc.——正文按"现名 pen.dev、本条目沿用 Pencil"处理。
- `strata`：YAML 官方仓库 `Niko1221/Strata`，即节目 chapter-12 讨论的推理引擎。
- `lennys-podcast`：任务提示"品牌侧另有一个同名 lennys-podcast 实体已存在"，经全库核对（`src/content/data/`）**不存在**品牌侧同名实体；仅有产品条目（`kind: show`）与人物 `lenny-rachitsky`。产品正文按节目条目撰写并与人物条目互链，无冲突。
- `modretro-chromatic`：与品牌 `modretro`（已有正文，2026-10-08 更新）分工——产品页写 Chromatic 掌机与 M64 主机本身，品牌页负责公司史与业务线。

## FAQ 候选与证据

采样日期均为 2026-10-08；语言标注于种子词后。

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| pencil | `pencil.dev`、`pencil.dev mcp`、`pencil.dev github`、`pencil.dev cli`、`pencil.dev skills`、`pencil.dev vs paper.design`（en） | 定义、MCP/CLI 接入、比较 | MCP 接入采用；github 采用（答"未提供仓库入口"）；vs paper.design 未采用（无公平比较依据） | [pen.dev](https://www.pen.dev/)、[docs.pen.dev](https://docs.pen.dev) |
| pencil | `pen dev pencil`（en）；`pencil 设计工具`（zh，仅 1 条联想） | 改名确认、zh 定义 | 改名关系采用；zh 定义题为编辑补充（zh 联想过薄） | pen.dev 站点横幅 |
| pencil | `pen.dev pricing` 页面直接核验 | 收费 | 采用 | [pen.dev/pricing](https://www.pen.dev/pricing) |
| strata | `strata llm`、`strata llm engine`、`strata inference engine`（en）；`strata github`（en，混入 lean/aws/opengamma 等同名项目）；`strata dgx spark`（en，Google 无联想、DuckDuckGo 无联想） | 定义、消歧、DGX Spark 支持 | 定义与消歧采用；DGX Spark 采用；中文种子 `strata 推理` 无联想，zh FAQ 为编辑补充 | [GitHub README](https://github.com/Niko1221/Strata)、[shi3z/Strata-DGX-Spark](https://github.com/shi3z/Strata-DGX-Spark) |
| strata | `strata law`、`stratified sampling`、`llm in legal theory`（en，歧义噪音） | 排除项 | 已排除，正文用"开源推理引擎 + Qwen3.8-Flash-Next"消歧 | — |
| lennys-podcast | `lenny's podcast`、`lennys podcast youtube`、`lennys podcast transcript`、`lenny podcast guests`、`lennys podcast subscription`、`lenny's podcast newsletter`（en）；`lenny播客`（zh，仅 1 条联想） | 定义、收听、嘉宾、付费 | 定义/收听/付费/嘉宾四题采用；zh 定义题为编辑补充 | [节目主页](https://www.lennysnewsletter.com/podcast)、[Apple Podcasts 条目](https://podcasts.apple.com/us/podcast/lennys-podcast-product-career-growth/id1627920305) |
| modretro-chromatic | `modretro chromatic`、`modretro chromatic vs analogue pocket`、`modretro chromatic review`、`modretro chromatic firmware update`、`modretro chromatic gba`、`modretro chromatic gamestop`（en） | 兼容性、比较、固件 | 卡带兼容（含 GBA 排除）采用；固件更新并入官方手册指针；vs analogue pocket 未采用（官方资料不足以公平比较第三方产品）；review/gamestop 未采用 | [官方商品页](https://modretro.com/products/chromatic-tetris-bundle)、[官方手册](https://support.modretro.com/en_us/chromatic-manual-S1cy8e_0Zx) |
| modretro-chromatic | `modretro m64`、`modretro m64 price`、`modretro m64 vs analogue 3d`、`modretro m64 release date`（en）；`modretro`、`chromatic 掌机`（zh） | 价格、比较、定义 | 价格采用（截至 2026 年 10 月锚定）；与 M64 区别采用；vs analogue 3d 未采用 | [M64 商品页](https://modretro.com/products/m64) |

"chromatic handheld"（en）混入 chromatic tuner / pupillometry 等歧义，仅取带 modretro 修饰的候选。

## 事实核验记录

### pencil（pen.dev）

- `https://www.pencil.dev/` 返回 307 → `https://www.pen.dev/`；页面横幅 "pencil.dev is now pen.dev"，页脚 "© 2026 High Agency Inc."，"Backed by a16z speedrun"。
- 定位文案："pen.dev is an agentic canvas for building bold ideas"。
- MCP/CLI："Design via MCP in addition to the on-canvas agent. Connect Claude Code, Codex, Hermes, Antigravity, Cursor or any agent to pen.dev through MCP. You can also design headlessly with pen.dev CLI."（注意：官方列表含 Hermes/Antigravity，正文只举了 Claude Code/Codex/Cursor）。
- .pen 格式："Open design format .pen — It's just a JSON file that allows agents to work with it natively. Schema fully opened."
- 平台（/downloads）：macOS Apple Silicon/Intel、Windows x64（ARM64 "Coming soon"）、Linux AppImage/Tarball；CLI `npm install -g @pen.dev/cli`；IDE 扩展 Cursor/VSCode/Antigravity/Windsurf/OpenVSX。
- 定价（/pricing）：页面标注 "Coming soon — pen.dev stays free until plans launch"；分层 Free（5 Agent days/月）/ Pro $16 / Ultra $48 / Enterprise。价格写在正文有风险，仅 FAQ 以"截至 2026 年 10 月"锚定"计划上线前免费"，未断言价格生效。
- 未核到：公开代码仓库、公司融资细节；正文不作开源断言。
- 未核到：改名具体日期；正文只写站点横幅的既成状态。

### strata

- 官方仓库 README（raw，2026-10-08 抓取）：MIT 许可证；运行 Qwen 团队 Qwen3.8-Flash-Next（125B 参数、24,576 experts）；显卡/内存/SSD 分摊 + 推测解码 1.6–1.8x；RTX 5070 (12GB) 实测 53–94 token/s 生成、1,620–2,650 token/s 读提示；RTX 3090 约 100–140 token/s（预期值）。
- 接口：OpenAI 兼容 `/v1`、Anthropic 风格 `/v1/messages`（Claude Code `ANTHROPIC_BASE_URL`）、Responses API（Codex CLI）、MCP 服务器（docs/MCP_SERVER.md）。
- 硬件：NVIDIA RTX 20–50 / 指定 AMD 卡（12GB+ VRAM）、32GB+ RAM、约 80GB 磁盘、Win10/11 或 Linux。
- 社区分支 shi3z/Strata-DGX-Spark：原文明确 "a fork … that also runs on the NVIDIA DGX Spark (GB10, Arm64). The original runs on x86-64 PCs only"；2026-10-05 基准约 38–42 token/s 生成。
- 未核到：官方任何"上百倍"表述——节目转述（见下）不采为事实；Niko1221 身份背景未核，正文只写"GitHub 用户"。
- 节目 #005 chapter-12：橘子转述"提升上百倍""直接导致 DGX 涨价"，杨攀补"专门重写"——均为转述，正文已按此归属并注明未见官方印证。DGX 涨价的进一步讨论在 chapter-13，产品页未展开。

### lennys-podcast

- 官方节目页 `https://www.lennysnewsletter.com/podcast`（Substack 订阅墙后可见标题 "Lenny's Podcast: Product | Career | Growth" 及 "Over 1,200,000 subscribers"——订户数是易变页面数字，未写入正文）。
- `https://www.lennysnewsletter.com/about`："Join 1,000,000+ subscribers"、"30k+ members strong!"（Slack），同页导航含 How I AI；均未写进正文（数字易变，How I AI 已由人物条目采用，此处仅正文提及节目名）。
- Apple Podcasts 条目 id1627920305（iTunes Search API 核验）：collectionName "Lenny's Podcast: Product | Career | Growth"，artistName Lenny Rachitsky，feedUrl `api.substack.com/feed/podcast/10845.rss`，genres Technology/Podcasts/Business/Entrepreneurship。同名的另一播客（Lenny Specs）与实体无关，已排除。
- 单集 `https://www.lennysnewsletter.com/p/openais-head-of-chatgpt-were-entering`（HTTP 200，2026-10-08）：2026-10-04 发布，嘉宾 Tibo Sottiaux；与节目转述对应（沿用 2026-09-17 人物批次已核结论并复核 URL 可达）。
- 全库核对无品牌侧 lennys-podcast 实体（见上）。
- 未核到：节目开播年份与集数总数——不写。

### modretro-chromatic

- `https://modretro.com/products/chromatic` 返回 404；现售入口为 Chromatic + Tetris Bundle 商品页（2026-10-08 抓取，HTTP 200）："fully compatible with original Game Boy® and Game Boy Color® cartridges"、"Pixel-Perfect Display"、"lightweight magnesium shell"、Link Cable、AA/Power Core、USB-C 录制/串流（"Also compatible with Discord and Oculus Quest®"）、Cart Clinic、"Millisecond-level match to original GameBoy® hardware"、Gorilla Glass $199.99 / Sapphire $299.99、"Every Chromatic comes bundled with Tetris® for Chromatic free of charge"、1 年保修 30 天退货；配色 Cloud/Midnight/Wave/Leaf/Inferno/Volt/Bubblegum（易变，未写入正文）。
- `https://modretro.com/products/m64`（HTTP 200）："full compatibility with original cartridges and controllers"、"Identical gameplay timing and audio. HDMI video output up to 4K"、"CRT filters and overclocking modes"、无线/有线更新；含 16GB SD 卡与多区电源适配器；$229.99（页内标价，仅 FAQ 锚定采用）；配色 Clear/Purple/Green/AMD Red。
- 页脚 Nintendo 商标免责声明（"Nintendo is not affiliated with ModRetro…"）已写入正文。
- 官方手册 `https://support.modretro.com/en_us/chromatic-manual-S1cy8e_0Zx`（HTTP 200，Intercom 动态页，静态抓取无正文），仅作指针。
- 未核到：Chromatic 具体发售/开售日期（品牌页已载 2024 年重启，产品页不重复日期断言）；DevDay 发放机型是否 Chromatic 型号（节目转述未点名型号，产品页已注明）。

## 节目引用清单（均出自 #005 逐字稿，中文）

| 实体 | 章节 | 段落锚点 | 发言人 | 用途 |
| --- | --- | --- | --- | --- |
| pencil | chapter-18 从 Descript 到软件成为 Agent 插件 | `quote-646fcd1e063b1ad42c77` | guizang | "有自己的界面，在广播一个 MCP" |
| strata | chapter-12 推理优化与成本下降 | `quote-dfbbfd3135c8a0e4b298` | orange | "提升上百倍""DGX 涨价"转述 |
| lennys-podcast | chapter-07 云电脑、自己的电脑与服务器管理 | `quote-183c33529c971ee3ac88` | orange | "Dots 上了个 Lenny 的播客" |
| modretro-chromatic | chapter-15 ModRetro、AI Passport 与 ESP32 改造 | `quote-4b1ad6b3128f67e47d87` | yangpan | DevDay 发放 ModRetro 掌机（与品牌页同锚点） |

锚点均用 `src/data/transcript-paragraph-anchors.ts` 的等价脚本独立复算，并与品牌/人物既有正文引用比对一致。

## 省略与未采用

- pencil：`pencil.dev vs paper.design`、`alternatives` 类比较题未采（缺乏双方官方资料的公平比较口径）；Agent days 配额细节未入正文。
- strata：Coder/Swift 1.5/Unsloth 各量化档位细节、"Opus 写的算法""RSI"等节目判断（无来源支撑）未写入正文。
- lennys-podcast：订户数、集数、开播年份未写；YouTube 官方频道未逐一核验，收听入口只写已核验的 Apple Podcasts 与官网。
- modretro-chromatic：配色与评分（4.9/1639 等商店数字）、GameStop 渠道、vs Analogue 系列、`modretro gba` 相关（Chromatic 不支持 GBA，仅作排除性说明）未采用。

## 剩余问题

- pen.dev Windows ARM64 版本官方标注 "Coming soon"，未写入正文；后续批次若扩写需复核。
- pen.dev 定价页标注 "Coming soon"，付费计划上线后 FAQ 的"截至 2026 年 10 月"锚定句需要更新。
- Strata"上百倍"来源（可能是某次第三方传播中的对比口径）未找到原始出处，正文按"未见官方渠道印证"处理。
- 任务描述中提到的"品牌侧 lennys-podcast 实体"在仓库中不存在，如需建立品牌条目属于新实体流程，不在本批范围。
