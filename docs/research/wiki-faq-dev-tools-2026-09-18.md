# 开发工具与硬件产品 Wiki FAQ 研究记录（opencode、obsidian、midjourney、happycapy、ffmpeg、dia、colamd、apple-watch）

## 范围与口径

本记录支持 `opencode`、`obsidian`、`midjourney`、`happycapy`、`ffmpeg`、`dia`、`colamd`、`apple-watch` 八个产品实体的 Wiki 正文。研究日期为 2026-09-18，面向中文（zh-Hans）与英文（en）读者。需求线索来自 Google 公开联想（Firefox client，`hl=zh-CN` / `hl=en`），未做受控地区采样，没有 Search Console、关键词工具或搜索量数据，因此所有搜索量、难度、排名、点击、热度均为 **N/A**；联想候选的出现不等于热门，联想顺序不是排名。原始采样完整结果附于文末附录 A。

所有 8 个实体的实体链接提及均出现在本地 Weekly #002 逐字稿（#001 仅 3 处：dia、opencode、obsidian），详见"节目证据"一节。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| OpenCode | `opencode是什么`、`opencode 是 哪个 公司 的`、`opencode 安装`、`opencode下载`、`opencode zen`、`opencode github`（zh）、`opencode vs claude code`、`opencode install`、`opencode skills`、`opencode v2`（en） | 定义、归属、安装、比较 | 是（定义与归属、安装、免费与模型、vs Claude Code 直接采用） | [官网](https://opencode.ai/)、[GitHub 仓库](https://github.com/anomalyco/opencode) |
| Obsidian | `obsidian是什么`、`obsidian怎么用`、`obsidian下载`、`obsidian 教程`、`obsidian cli`、`obsidian codex`（zh）、`obsidian notes`、`obsidian app`、`obsidian download`、`obsidian sync`（en） | 定义、下载、Sync 服务 | 是（定义、免费与商业使用、笔记存储位置、Sync/Publish 采用；中文界面、CLI、codex 集成为编辑未采用） | [官网](https://obsidian.md/)、[许可页](https://obsidian.md/license)、[帮助文档](https://help.obsidian.md/) |
| Midjourney | `midjourney 官网`、`midjourney 免费`、`midjourney api`、`midjourney v6/v7/v8`（zh）、`midjourney pricing`、`midjourney free`、`midjourney login`、`midjourney ai image generator`（en） | 导航、计费、API、版本 | 是（定义、官网入口、免费/收费指针、API 采用；v6/v7/v8 版本问法记录但未采用——官方主页仅指向博客，无法核验具体版本命名） | [官方主页](https://www.midjourney.com/) |
| Happycapy | `happycapy ai`、`happy cappy是什么`（zh）、`happycapy pricing`、`happycapy product hunt`、`happycapy github`（en） | 定义、计费、渠道 | 是（定义、免费与 credits、是否需要安装、与 Claude Code 关系采用；后两者为编辑补充，以官方文档作答） | [官网](https://happycapy.ai/)、[官方文档](https://docs.happycapy.ai/en) |
| FFmpeg | `ffmpeg是什么`、`ffmpeg下载`、`ffmpeg windows 下载/安装`、`ffmpeg 官网`（zh）、`ffmpeg download`、`ffmpeg install`、`ffmpeg mp4 to gif`、`ffmpeg crop video`、`ffmpeg extract audio from video`、`ffmpeg crf`、`ffmpeg gui`（en） | 定义、安装、常见命令 | 是（定义、下载安装、免费、常见操作采用；免费一问为编辑补充，以官网与许可惯例作答） | [About 页](https://ffmpeg.org/about.html)、[下载页](https://ffmpeg.org/download.html)、[文档](https://ffmpeg.org/documentation.html) |
| Dia | `dia browser 下载`、`dia browser windows`、`dia browser 介绍`、`dia browser mac`（zh）、`dia browser pricing`、`dia browser vs arc`、`dia browser review`、`dia browser mobile`（en） | 平台、计费、比较 | 是（定义、Windows/Linux 支持、收费、与 Arc 关系直接采用；bare `dia` 不采样，已用 `dia browser` 消歧） | [官网](https://www.diabrowser.com/)、[帮助中心](https://www.diabrowser.com/help)、[Wikipedia: The Browser Company](https://en.wikipedia.org/wiki/The_Browser_Company) |
| ColaMD | `colamd github`、`colamd algorithm`、`colamd matlab`、`colamd ordering/reordering`（zh/en 同源） | 歧义消解、下载 | 是（定义含与 COLAMD 算法的歧义说明、免费与协议、下载、Agent 关系采用；后三者为编辑补充，联想本身几乎全部指向同名排序算法） | [官网](https://colamd.com/)、[GitHub 仓库](https://github.com/marswaveai/colamd)、[Releases](https://github.com/marswaveai/colamd/releases) |
| Apple Watch | `apple watch 12`、`apple watch series 12`、`apple watch ultra 4`、`apple watch ultra 4 vs 3`（en）、`apple watch series 11`、`apple watch ultra`、`apple watch se`（zh/en） | 机型、比较 | 是（发布时间与价格、iPhone 要求、健康功能、Series/Ultra/SE 选购采用；表带等配件类联想未采用） | [官方产品页](https://www.apple.com/watch/)、[Series 12 新闻稿](https://www.apple.com/newsroom/2026/09/introducing-apple-watch-series-12-with-the-all-new-health-sensing-system/) |

歧义排除：

- `colamd`：中英文联想几乎全部指向稀疏矩阵的 COLAMD 近似最小度排序算法（`colamd algorithm`、`colamd matlab`、`colamd ordering`），ColaMD 编辑器本身无联想数据。正文定义与 FAQ 均加入歧义说明；编辑器相关问题按官方资料作答并标为编辑补充。
- `happycapy`：联想混入 `happy cappy founder`、`happycapys englewood fl`（餐厅类）、`happycopy促销码/怎么样`（另一产品名近似），均未采用；仅采用 `happycapy ai`、`happycapy pricing` 等可直接归属本产品的候选。
- `obsidian`：英文联想混入 Obsidian Entertainment（游戏工作室）、obsidian 火山岩、宝可卡 `obsidian flames etb` 等，仅采用 `notes`、`app`、`download`、`sync` 等可归属项。
- `dia`：裸词歧义大（名字、疾病前缀等），统一用种子词 `dia browser ` 采样。
- `midjourney`：英文联想混入 `midjourney medical`、`midjourney scanner`、`midjourney spa`、`midjourney careers`（非图像产品含义或招聘页面），未采用。

## 事实核验（2026-09-18）

- OpenCode：`https://opencode.ai/` 确认"The open source AI coding agent"定位、终端/IDE/桌面（桌面 beta，macOS/Windows/Linux）、安装脚本与 npm/bun/brew/paru、"Free models included or connect any model from any provider, including Claude, GPT, Gemini and more"、Models.dev 75+ providers、GitHub Copilot 与 ChatGPT Plus/Pro 登录、Zen 精选模型、"does not store any of your code or context data"、页脚 ©2026 Anomaly；GitHub 仓库 anomalyco/opencode 侧栏确认 MIT license。
- Obsidian：`https://obsidian.md/` 确认"free and flexible app for your private thoughts"、本地纯文本 Markdown 存储、"No one else can read them, not even us"、离线可用、双链与图谱、Canvas、社区插件、Sync（端到端加密）与 Publish（付费）；`https://obsidian.md/license` 确认"free for all purposes, including personal, commercial, and non-profit use"，商业许可为自愿年度购买。`/sync`、`/publish`、`/license` 三个 URL 均以 curl 验证返回 200。
- Midjourney：`https://www.midjourney.com/` 确认"a community-funded research lab of 60 people known for building the most beautiful AI models in the world"、"Image and Video Models"、主页横幅"V8.2 is live!"（仅作指针，未写入正文版本断言）、产品支持指向 Discord 与帮助页。`docs.midjourney.com` 被 Cloudflare 拦截（403），`/pricing` 为 JS 渲染空壳，未核验到价格与订阅结构——正文计费 FAQ 只写指针，不写订阅制细节。
- Happycapy：`https://happycapy.ai/` 确认"Agent-native computer"定位、云端隔离沙箱（"Runs in the cloud, separate from your computer"、"Runs 24/7"）、Skill Store、单一订阅含多模型、"Start free"、页脚列 iOS 应用；`https://docs.happycapy.ai/en`（curl 取回）确认"an agent-native computer that runs in your browser. No installs. No terminal setup. No API keys."、"powered by Claude Code and routes each task to suitable built-in models"、Cloud sandbox 与本地文件隔离、Automations（Beta）、Credits & usage 计费页。官网上的营销数字（30+ models、2M+ skills、200+ countries）未写入正文。
- FFmpeg：`https://ffmpeg.org/about.html` 确认"the leading multimedia framework"、decode/encode/transcode/mux/demux/stream/filter/play 范围、`ffmpeg`/`ffprobe`/`ffplay` 三工具与 libav* 库、跨平台（Linux/macOS/Windows/BSD 等）、社区志愿性质；`https://ffmpeg.org/download.html` 确认发行版包、Windows（gyan.dev、BtbN）、macOS（evermeet.cx）、Git 源码、"major releases approximately every 6 months"。许可（LGPL/GPL 配置）为稳定公开知识，About 页未列具体条款，正文按惯例表述。
- Dia：`https://www.diabrowser.com/` 确认"Dia reads between the tabs"、Morning Brief、Reports（Slack/Notion/Calendar）、跨上下文提问（GSuite/Slack/tabs）、Decks、Live Work/Profiles/Splits、"Currently available on Apple macOS 14+ with M1 chips or later"、"Includes 14 day free trial of Better Days"、Dia for Work（SSO/admin）、"Your data is never sold or used to build ad profiles" 及隐私开关。开发公司与沿革来自 `https://en.wikipedia.org/wiki/The_Browser_Company`：2024 年 12 月公布 Dia、2025 年 5 月 27 日停止 Arc 开发转向 Dia、2025 年 9 月被 Atlassian 以 6.1 亿美元收购。`/help` 仅取到落地页导航。
- ColaMD：`https://colamd.com/` 确认"built by Cola.app and maintained by orange2ai"、MIT、"Open source and free forever"、实时同步措辞（"When the file changes on disk, whether by an AI agent, a script or another editor, the editor updates right away"）、Agent 新建文件自动出现、macOS（Apple Silicon + Intel）/Windows（exe + zip）/Linux（AppImage/deb）下载走 GitHub Releases、VS Code 集成；GitHub README 另确认 12 主题、KaTeX、Mermaid、PDF/HTML/Word 导出。
- Apple Watch：`https://www.apple.com/watch/` 确认在售系列 Series 12（New）、Ultra 4（New）、SE 3、Nike、Hermès，watchOS 27，"Apple Watch Series 12, Apple Watch Ultra 4, and Apple Watch SE 3 require iPhone 11 or later with iOS 27 or later"；[Series 12 新闻稿](https://www.apple.com/newsroom/2026/09/introducing-apple-watch-series-12-with-the-all-new-health-sensing-system/)确认 2026-09-09 发布、Health Sensing System（"heart rate every five seconds, all day long"、HRV up to 24 times more often、0–10 readiness score）、S11 芯片、Audio Intelligence（Sound Recognition、Live Rewind、Siri Recap）、9 月 18 日上市、美国 399 美元起、watchOS 27 于 9 月 14 日推送（Series 9 及之后、SE 3、Ultra 2 或之后）。

## 节目证据

逐字稿锚点由 `/tmp/nt-quote-anchors.mjs`（与站点 `transcript-paragraph-anchors.ts` 同算法）生成，均已核对发言人：

- opencode：[Weekly #001 chapter-08 quote-472e5afec5b9fd11f24c](/weekly/001/transcript#quote-472e5afec5b9fd11f24c)（乔木，简短提及）；[Weekly #002 chapter-14 quote-27d8be325d660d54cd9d](/weekly/002/transcript#quote-27d8be325d660d54cd9d)（杨攀，中立 Agent 赛道判断）。
- obsidian：[Weekly #001 chapter-12 quote-5c300536e689881ceff5](/weekly/001/transcript#quote-5c300536e689881ceff5)（乔木，Omarchy 窗口管理举例）；[Weekly #002 chapter-05 quote-4e82a638534f95a2397d](/weekly/002/transcript#quote-4e82a638534f95a2397d)（乔木，两个 Obsidian 应用上架）。
- midjourney：[Weekly #002 chapter-22 quote-4b7846ca32b421ab5018](/weekly/002/transcript#quote-4b7846ca32b421ab5018)、[quote-fd87cd38a2afc0f09b5a](/weekly/002/transcript#quote-fd87cd38a2afc0f09b5a)（均为橘子）。
- happycapy：[Weekly #002 chapter-24 quote-e59a1df53d4fdf5be2c5](/weekly/002/transcript#quote-e59a1df53d4fdf5be2c5)（乔木，不确定回忆）。
- ffmpeg：[Weekly #002 chapter-05 quote-555026c6546093f334d0](/weekly/002/transcript#quote-555026c6546093f334d0)（橘子）、[quote-1e88c579405e0c5a4111](/weekly/002/transcript#quote-1e88c579405e0c5a4111)（杨攀）。
- dia：[Weekly #001 chapter-06 quote-0588f00f6b1992f4f093](/weekly/001/transcript#quote-0588f00f6b1992f4f093)（歸藏）。
- colamd：[Weekly #002 chapter-04 quote-b2b0a48179812ca8f3c8](/weekly/002/transcript#quote-b2b0a48179812ca8f3c8)、[chapter-11 quote-39a13ec8d097e89591a3](/weekly/002/transcript#quote-39a13ec8d097e89591a3)（均为橘子，开发者自述）。
- apple-watch：[Weekly #002 chapter-20 quote-a8504248ac04c478be3d](/weekly/002/transcript#quote-a8504248ac04c478be3d)（杨攀）、[chapter-21 quote-e8b27e3016c5fc5e59bb](/weekly/002/transcript#quote-e8b27e3016c5fc5e59bb)（歸藏）。

## 事实边界与省略项

- Midjourney "Midjourney 2.5"（节目别名，亦见于 YAML aliases）：官方主页未见该版本命名，正文仅以节目参与者说法呈现并明确不作为事实采用；版本 FAQ 未采用 v6/v7/v8 联想问法。
- Happycapy 节目中"给虚拟机"是乔木的不确定回忆，官方文档描述为云端沙箱，正文未采用猜测；官网营销数字（30+ 模型、2M+ skills、200+ 国家）未写入正文。
- Apple Watch 章节中"心跳采集频率提升 60 倍"是参与者换算，正文采用官方口径"全天每 5 秒测量一次心率"；orange 描述的"回放 15 秒"对应官方 Live Rewind 功能，正文注明对应关系而非照搬节目数字。
- Midjourney 未核验到公开 API 与价格表，FAQ 答案只写指针；docs.midjourney.com 被 Cloudflare 拦截，未获得订阅结构证据。
- Obsidian 节目中"两个 Obsidian 上架"按语境写为"基于 Obsidian 开发的应用上架"，不是 Obsidian 软件自身更新。
- ColaMD 在节目中被橘子口头称为"Markdown 编译器"，官方定位为编辑器，正文以官方口径为准。
- Dia 官网首页未署名开发公司，开发公司与沿革引自 Wikipedia 条目，正文与来源均已标注。
- 未核验 OpenCode 官网 FAQ 中"How much does OpenCode cost?"的具体答案（页面未展示价格），正文只写"软件开源免费、官网称含免费模型"。

## 附录 A：Google 公开联想原始采样（2026-09-18）

方法：`https://suggestqueries.google.com/complete/search?client=firefox&hl=<lang>&q=<seed>+&ie=utf-8&oe=utf-8`，Firefox client；无受控地区与搜索量数据。zh=zh-CN，en=en。

| 种子词 | 语言 | 联想结果（按返回顺序） |
| --- | --- | --- |
| `opencode ` | zh | opencode go / opencode zen / opencode github / opencode是什么 / opencode下载 / opencode desktop / opencode 安装 / opencode 是 哪个 公司 的 / opencode 教程 / opencode cli |
| `opencode ` | en | opencode / opencode go / opencode zen / opencode github / opencode vs claude code / opencode desktop / opencode install / opencode cli / opencode vs pi / opencode skills / opencode v2 |
| `obsidian ` | zh | obsidian web clipper / obsidian下载 / obsidian 教程 / obsidian skills / obsidian是什么 / obsidian 中文 / obsidian cli / obsidian codex / obsidian怎么用 / obsidian github |
| `obsidian ` | en | obsidian entertainment / obsidian notes / obsidian games / obsidian flames etb / obsidian download / obsidian body piercing / obsidian stone / obsidian app / obsidian sync / obsidian flames |
| `midjourney ` | zh | midjourney ai / midjourney v7 / midjourney 官网 / midjourney v6 / midjourney 下载 / midjourney api / midjourney 免费 / midjourney v8 / midjourney 中文 / midjourney 教程 |
| `midjourney ` | en | midjourney ai / midjourney free / midjourney medical / midjourney login / midjourney scanner / midjourney careers / midjourney pricing / midjourney spa / midjourney ai image generator / midjourney v6 |
| `ffmpeg ` | zh | ffmpeg是什么 / ffmpeg下载 / ffmpeg windows 下载 / ffmpeg 安装 / ffmpeg windows 安装 / ffmpeg github / ffmpeg download / ffmpeg 教程 / ffmpeg windows / ffmpeg 官网 |
| `ffmpeg ` | en | ffmpeg download / ffmpeg windows / ffmpeg audacity / ffmpeg install / ffmpeg gui / ffmpeg download windows / ffmpeg crf / ffmpeg mp4 to gif / ffmpeg crop video / ffmpeg extract audio from video |
| `dia browser ` | zh | dia browser 下载 / dia browser windows / dia browser ios / dia browser 介绍 / dia browser github / dia browser windows download / dia browser linux / dia browser mac / dia browser app / dia browser pro |
| `dia browser ` | en | dia browser review / dia browser windows / dia browser download / dia browser reddit / dia browser ios / dia browser pricing / dia browser linux / dia browser for mac / dia browser mobile / dia browser vs arc |
| `colamd ` | zh | colamd github / colamd algorithm / colamd reordering / colamd ordering / colamd matlab / acolada gmbh |
| `colamd ` | en | colamd github / colamd matlab / colamd algorithm / colamd ordering / column reordering |
| `happycapy ` | zh | happycapy ai / happycapy github / happy cappy是什么 / happy capys photos / happycapy dale / happycapys englewood fl / happycapys englewood / happycopy促销码 / happy cappy founder / happycopy怎么样 |
| `happycapy ` | en | happycapy ai / happycapy github / happycapy dale / happy copy ai reddit / happy cappy reddit / happy cappy founder / happycapy florida / happycapy pricing / happycapy product hunt / happycapy linkedin |
| `apple watch ` | zh | apple watch series 11 / apple watch ultra / apple watch ultra 3 / apple watch band / apple watch 12 / apple watch ultra 4 / apple watch se / apple watch 11 / apple watch ultra 2 / apple watch s11 |
| `apple watch ` | en | apple watch ultra 4 / apple watch series 12 / apple watch 12 / apple watch series 11 / apple watch ultra / apple watch ultra 3 / apple watch bands / apple watch ultra 4 vs 3 / apple watch se / apple watch 11 |
