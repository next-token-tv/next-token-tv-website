# EP5 产品批次 F（milkdown、m5stack-stopwatch、pixijs、raspberry-pi、slack、steam、sublime-text）研究记录

## 范围与口径

本记录支持 7 个产品实体的 Wiki 正文：`milkdown`、`m5stack-stopwatch`、`pixijs`、`raspberry-pi`、`slack`、`steam`、`sublime-text`。研究日期 2026-10-08，面向中文和英文读者。

FAQ 需求线索来自 2026-10-08 的 Google Autocomplete 采样（`suggestqueries.google.com/complete/search`，`client=firefox`，分别以 `hl=zh-CN` 与 `hl=en` 采样；原始 JSON 保存在会话临时目录，未随仓库提交）。联想结果是需求线索而非搜索量或热度排名；本次没有 Search Console 或关键词工具数据，所有搜索量、难度、排名、点击、热度均为 **N/A**。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| milkdown | en：`milkdown editor`、`milkdown crepe`、`milkdown github`、`milkdown react`、`milkdown npm`；zh：`milkdown`、`milkdown 编辑器`、`milkdown crepe`、`milkdown alternative`、`milkdown npm` | 定义、导航、接入 | 部分：采用“是什么/免费吗/与 Typora 区别/怎么引入”；`milkdown crepe` 未采用（官方 Crepe 页面为 SPA，未能核到内容，不写入正文） | [milkdown.dev](https://milkdown.dev/)、[GitHub 仓库](https://github.com/Milkdown/milkdown) |
| m5stack-stopwatch | en/zh 相同：`m5stack stopwatch dev kit (esp32-s3)`、`m5stack stopwatch github`、`m5stack stopwatch firmware`、`m5stack stopwatch home assistant`、`m5stack stopwatch esphome`、`m5stack stopwatch reddit` | 定义、固件、社区玩法 | 部分：采用“是什么/怎么开发固件/能否接入 Home Assistant 或语音助手/与普通 ESP32 开发板区别”；Reddit 等社区来源仅作为“社区玩法”提示，未采用为事实 | [官方文档](https://docs.m5stack.com/en/core/StopWatch) |
| pixijs | zh：`pixijs 是什么`、`pixijs 教程`、`pixijs 案例`、`pixijs v8`、`pixijs 中文文档`、`pixi.js vs phaser`；en：`pixijs vs three js`、`pixi js and three js` | 定义、比较、教程 | 部分：采用“是什么/与 Three.js 区别/是不是游戏引擎/怎么安装”；Phaser 比较未采用（无官方比较口径） | [pixijs.com](https://pixijs.com/)、[pixi.js npm](https://www.npmjs.com/package/pixi.js) |
| raspberry-pi | zh：`树莓派是什么`、`树莓派官网`、`树莓派5`、`树莓派5能做什么`、`树莓派5价格`、`树莓派pico`、`raspberry pi imager`、`raspberry pi os`；en：`raspberry pi vs arduino vs esp32`、`raspberry pi vs arduino` | 定义、导航、比较、价格 | 部分：采用“是什么/能做什么/与 ESP32、Arduino 区别/怎么装系统/官网”；`树莓派5价格` 未写具体价格（价格随时间与渠道变化，指向官方产品页） | [官方产品页](https://www.raspberrypi.com/products/)、[官方软件页](https://www.raspberrypi.com/software/)、[About 页](https://www.raspberrypi.com/about/) |
| slack | zh：`slack是什么`、`slack是什么软件`、`slack下载`、`slack 免费版`、`slack 免费吗`、`slack 工作区`、`slack什么意思`；en：`what is slack app`、`what is slack used for`、`what is slack tide`、`what is slack in rodeo`、`slack free vs paid`、`slack vs discord`、`slack vs teams` | 定义、导航、计费、比较、歧义 | 部分：采用“是什么/免费吗/官网与下载/与微信、Discord 区别”；歧义已标注（slack tide、rodeo 等非软件含义）；Teams 比较并入泛化回答，未单独采用 | [slack.com](https://slack.com/)、[About](https://slack.com/about)、[Features](https://slack.com/features)、[Pricing](https://slack.com/pricing)、[Downloads](https://slack.com/downloads/) |
| steam | zh：`steam是什么`、`steam是什么意思`、`steam官网`、`steam下载`、`steam平台抽成`、`steam deck`、`steam machine`、`steam frame`、`steampy`、`steamdb`；en：`what is steam gaming`、`what is steam deck`、`what is steam os`、`what is steam link` | 定义、导航、计费、歧义 | 部分：采用“是什么/官网与下载/抽成/Steam Deck”；`steam machine`、`steam frame`、`steamdb`、`steam link` 未采用（本次未逐一核验，宁缺毋滥）；歧义已标注（蒸汽本义、steampunk、steampy） | [官方 About 页](https://store.steampowered.com/about/)、[Steamworks 文档](https://partner.steamgames.com/doc/home)、[Steam Deck 页](https://store.steampowered.com/steamdeck) |
| sublime-text | zh：`sublime text 4`、`sublime text 下载`、`sublime text 免费`、`sublime text 收费吗`、`sublime text for mac`、`sublime text markdown`、`sublime text 格式化json`；en：`sublime text license`、`sublime text license cost`、`sublime text vs vscode`、`sublime text vs vscode 2026` | 授权、导航、比较 | 部分：采用“收费吗/官网与下载/与 VS Code 区别/能写 Markdown 吗”；`license cost` 未写具体价格（指向官方购买入口） | [sublimetext.com](https://www.sublimetext.com/)、[下载页](https://www.sublimetext.com/download) |

补充说明：

- `milkdown crepe` 在中英文联想中均出现，说明有一定查询量；官方 `/crepe` 路径返回 SPA 外壳，未能核到 Crepe 的官方描述，因此本轮不写入正文与 FAQ。后续核验到官方说明后可补。
- `slack vs teams`、`slack vs discord` 是高频比较形态；由于本次未核验 Teams/Discord 的官方资料，正文与 FAQ 只做泛化比较，不写具体对方产品的事实。
- Steam 的 `steam平台抽成` 有真实查询，但公开网页未核到分成比例正文（Steamworks 文档部分内容需开发者登录），FAQ 答案只写“分成存在、比例与条件见 Steamworks 文档”，不写具体百分比。

## 事实核验与来源

核验日期 2026-10-08。关键事实与来源：

- **milkdown**：[milkdown.dev](https://milkdown.dev/) 自述“plugin driven framework to build WYSIWYG Markdown editor”，基于 ProseMirror、Y.js、Remark；“Everything in Milkdown are plugins”；headless 无 CSS；Y.js 协同；MIT Licensed（版权 2021-present Mirone ♡ Meo）。npm `@milkdown/kit` 最新 7.22.2、MIT（registry.npmjs.org 查询，2026-10-08）。
- **m5stack-stopwatch**：[官方文档](https://docs.m5stack.com/en/core/StopWatch)（SKU C152）：圆形 AMOLED 触摸开发板，ESP32-S3R8（双核 240 MHz、16MB Flash、8MB PSRAM）、1.75“ 466×466 圆屏、BMI270 六轴 IMU、RX8130CE RTC、ES8311 编解码、MEMS 麦克风、1W 喇叭、振动马达、450mAh 电池、2.4GHz Wi-Fi；支持 UiFlow2、Arduino（M5Unified/M5GFX）、ESP-IDF/PlatformIO；M5Burner 烧录示例含小智语音助手；v1.0 版板 “BAT” 贴纸实为 5V IN，文档警告不可接电池，v1.0.1 已修正。
- **pixijs**：[pixijs.com](https://pixijs.com/) 自述 “The HTML5 Creation Engine”，用于游戏、应用与交互式内容；WebGPU/WebGL 渲染；当前 v8.x 文档主线并保留 v7。npm `pixi.js` 最新 8.22.0、MIT（registry.npmjs.org 查询，2026-10-08）。官网“fastest 2D WebGPU/WebGL renderer”为官方自称，正文未当作客观评测。
- **raspberry-pi**：[官方产品页](https://www.raspberrypi.com/products/)列出 Pi 5、Pi 4、Zero 2 W、Pi 500/400、Pico 2（RP2350）、Compute Module 5、Camera Module 3/AI Camera（Sony IMX500）等；[About 页](https://www.raspberrypi.com/about/)称 2012 年起设计基于 Arm 架构、运行 Linux 的计算机，十年售出超过六千万台；[软件页](https://www.raspberrypi.com/software/)确认 Raspberry Pi OS（官方系统）、Raspberry Pi Imager（写卡工具）、Raspberry Pi Connect（远程访问）。伦敦交易所上市、基金会与贸易公司关系未在官方页面核到，正文未写。
- **slack**：[About 页](https://slack.com/about)：“Slack was acquired by Salesforce in 2021”、页脚 “©2026 Slack Technologies, LLC, a Salesforce company”；[Features 页](https://slack.com/features)：Channels、Huddles、Clips、Slack Connect、Canvas、Lists、2600+ 应用、Workflow Builder、Slack AI 摘要与每日回顾、Slackbot（“Your personal AI agent for work”）；[Pricing 页](https://slack.com/pricing)：Free 方案 “$0 free forever”、90 天消息历史、最多 10 个应用（截至 2026-10-08 的页面内容，正文按时间稳定性口径处理）。
- **steam**：[官方 About 页](https://store.steampowered.com/about/)：Valve 的 PC 游戏平台；“nearly 30,000 games”；社区、Workshop（“nearly 1,000 supported games”）、Steamworks；Valve 创建 Steam Deck 与 Valve Index；客户端覆盖 Windows/macOS/Linux/Chromebook 与移动应用；28 种语言、35+ 币种。[Steamworks 文档](https://partner.steamgames.com/doc/home)（公开 200，分成细节需登录）。[Steam Deck 页](https://store.steampowered.com/steamdeck)（200）。
- **sublime-text**：[官网](https://www.sublimetext.com/)：Sublime HQ Pty Ltd（悉尼 Woollahra）；ST4 Build 4215；Windows/macOS（Apple Silicon）/Linux（含 ARM64）；GPU 渲染至 8K；Tab Multi-Select；TS/JSX/TSX 默认支持；Python 3.8 API 兼容 ST3 包；Sublime Merge。[下载页](https://www.sublimetext.com/download)：可免费下载与评估、“currently no enforced time limit for the evaluation”、继续使用需购买许可。

## 节目证据

7 个实体在本地五期中文逐字稿中各恰有 1 次实体链接提及，全部在 Weekly #005：

| 实体 | 章节 | 段落锚点 | 发言人 | 语境 |
| --- | --- | --- | --- | --- |
| milkdown | #005 chapter-09 “迁移插件、替换编辑器内核” | `quote-a26a210c2315f9a66446`（另有引证 `quote-3ac4fb63746949f2b615`，同章内橘子另一段说明迁移理由，非实体链接段落） | 橘子 | 从 Milkdown 迁移到 CodeMirror 6 内核的原因（渲染与源码两套） |
| m5stack-stopwatch | #005 chapter-15 “ModRetro、AI Passport 与 ESP32 改造” | `quote-a7989c59e165750403f9` | 歸藏 | Muse 为常见 ESP32 设备（点名 Stopwatch 圆形款）提供通用固件；后续为同章内改固件经历 |
| pixijs | #005 chapter-08 “用 Opus 5.5 写游戏：代码质量与效率” | `quote-5f97bb176cc07f28406e` | 杨攀 | Canvas → PixiJS 性能改写；随后想上 Steam/App Store |
| steam | #005 chapter-08 同上 | `quote-5f97bb176cc07f28406e` | 杨攀 | 同一段，Steam 与 Godot 路线 |
| raspberry-pi | #005 chapter-07 “云电脑、自己的电脑与服务器管理” | `quote-adb85c7ee0f0a3b6b7ee` | 杨攀 | 家里 2 个树莓派等设备整合，问 Codex 用途 |
| slack | #005 chapter-02 “Dots：记忆、云电脑与上手体验” | `quote-72d6f31f72d00135431f` | 歸藏 | 转述 Grok Bot 把银行余额发进 Slack 的案例（Agent 权限边界） |
| sublime-text | #005 chapter-09 “迁移插件、替换编辑器内核” | `quote-6b94571b76e364d009c5` | 向阳乔木 | GPT-3.5 时代“复制到 Sublime 保存再运行”的回忆 |

锚点按 `src/data/transcript-paragraph-anchors.ts` 算法（等价脚本 `/tmp/nt-quote-anchors.mjs`）对 2026-10-08 的本地快照计算；修改原文、发言人或重复段落顺序会使锚点失效，引用前需重算。英文正文按规范链接中文逐字稿并标注 “Chinese transcript”。

## 歧义处理

- **slack**：`what is slack tide`、`what is slack in rodeo`、`slack什么意思` 显示非软件含义进入联想；zh/en FAQ 答案中显式区分。未发现与 slackware 直接竞争的联想条目，但比较题只讨论工作协作场景。
- **steam**：`steam是什么意思`（蒸汽本义）、`steampy`、`steampunk`、`steamdb`、`steam machine`、`steam frame` 均在联想中；正文限定为 Valve 的游戏平台，未采用的联想词在表格中记录留档。
- **raspberry pi**：`raspberry pi vs arduino vs esp32` 与站内 [esp32](/wiki/products/esp32) 已有正文衔接；比较答案不写 Arduino 细节事实（未核验）。
- **sublime text**：与 Sublime Merge、Sublime HQ 区分；与 VS Code 比较只写官方可证实的自身特征与泛化定位。

## 未知项与留档

- milkdown：Crepe 官方说明、版本历史未核验，未写入。
- m5stack-stopwatch：发售时间与官方定价未核验，未写入；Home Assistant/ESPHome 仅标注为社区玩法方向。
- pixijs：官方对比 Phaser 的口径未核验；v8 具体发布日期未核验。
- raspberry-pi：公司上市信息、基金会关系、具体型号价格未核验，未写入。
- slack：付费档具体价格数字未写入正文（仅 FAQ 以“截至 2026 年 10 月”锚定免费版限制并指向价格页）。
- steam：分成比例具体数字未核验，未写入；SteamOS 细节未核验。
- sublime-text：许可具体价格数字未核验，未写入。
