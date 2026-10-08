# EP5 产品批次 E Wiki FAQ 研究记录

## 范围与口径

本记录支持 `aihot`、`anyps5`、`app-store`、`apple-tv-remote`、`codemirror`、`hyperxiaoai` 和 `imessage` 的 Wiki 正文。研究日期为 2026-10-08，面向中文和英文读者。需求线索来自 Google Autocomplete 公开接口（`suggestqueries.google.com`，`client=firefox`，分别用 `hl=zh-CN` 与 `hl=en` 采样，采样日期 2026-10-08）；本次没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，也不构成效果承诺，联想顺序不表示热度排名。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| aihot | `aihot 日报`、`aihot github`、`aihot.news`；干扰项 `aiot大模型排行榜`、`aiot是什么`、`aihotel` | 导航、定义、消歧 | 是（含"和 AIoT 是一回事吗"的消歧题，编辑补充） | [AIHOT 仓库](https://github.com/KKKKhazix/AIHOT)、[AIHOT.news](https://aihot.news/) |
| anyps5 | `anyps5 github`、`anyps5 reddit`、`anyps5 progress`、`any ps5 emulator`、`is there any working ps5 emulator for pc` | 定义、进度、模拟器疑问 | 是 | [AnyPS5 仓库](https://github.com/boykopovar/AnyPS5)、[进度页](https://boykopovar.github.io/AnyPS5/) |
| app-store | `app store 切换账号`、`app store 安卓 下载`、`app store 官网`、`app store 退款`、`app store download for android` | 导航、跨平台可用性、退款 | 是（退款题；切换账号题未采用，属账户通用问题） | [App Store 官方页](https://www.apple.com/app-store/)、[报告问题](https://reportaproblem.apple.com/) |
| apple-tv-remote | `apple tv remote reset`、`apple tv remote 配对`、`apple tv remote not working`、`apple tv remote replacement`、`apple tv remote usb-c`、`siri remote 配对` | 故障排查、型号、充电 | 是（充电、iPhone 遥控、配对排查；replacement 购买题未采用） | [Apple TV 4K 官方页](https://www.apple.com/apple-tv-4k/)、[Apple 支持](https://support.apple.com/) |
| codemirror | `codemirror 6`、`codemirror vs monaco`、`codemirror github`、`codemirror 文档`、`codemirror是什么` | 定义、版本、比较、文档 | 是 | [codemirror.net](https://codemirror.net/)、[官方指南](https://codemirror.net/docs/guide/) |
| hyperxiaoai | `超级小爱输入法`、`超级小爱下载`、`超级小爱apk下载`、`超级小爱 mac`、`超级小爱国际版`、`小爱同学是什么` | 下载、跨端、国际版 | 是（模型关系、海外可用性、唤起方式；APK 下载题未采用，非官方分发渠道） | [HyperOS 4 页面](https://hyperos.mi.com/)、[xiaoai.mi.com](https://xiaoai.mi.com/) |
| imessage | `imessage是什么`、`imessage 已加密`、`imessage 怎么 用`、`imessage 无法激活`、`imessage 和 短信 的 区别`、`imessage android`、`imessage on windows`、`imessage activation error` | 定义、加密、激活、跨平台 | 是（`imessage 网页版` 未采用：官方无网页版，正文边界已覆盖） | [Apple 支持 iMessage overview](https://support.apple.com/guide/iphone/about-imessage-iph4e9799206/ios) |

中文与英文的"超级小爱"联想结果基本一致（英文查询也返回中文候选），说明该词的搜索需求以中文为主；`hyperxiaoai` 对应的英文名 Super XiaoAI 为本站 YAML 译名，未见官方英文页面使用，英文正文保留中文原名并加注。`aihot` 的联想混入 AIoT、AIhotel 等同名干扰，英文查询还混入 shot 类无关词，因此消歧问题按编辑补充处理并在此注明。

## 事实核验

- **aihot**：官方仓库 README（2026-10-08 读取）说明 AIHOT.news 由数字生命卡兹克创建，是"自己找热点、自己写日报的网站框架"；预筛加两次独立评分、事件聚簇、按独立来源计热度、每日 08:00 日报；MIT 许可，技术栈 Node.js 24 / PostgreSQL / Docker Compose；仓库不含真实信源名单与运营数据，附 18 个示范信源；AIHOT 名称与 Logo 不在许可范围；面向 Agent 输出 RSS、公开 API、MCP、Agent Markdown、llms.txt。
- **anyps5**：官方仓库 README（2026-10-08 读取）：工具用于把可执行程序自动移植到 Linux 和 Windows；含 relinker 与系统 PRX 库实现；"No emulation or separate runtime process"；着色器重编译输出 SPIR-V；兼容列表另见 docs/user/COMPATIBILITY.md，README 举例 Dreaming Sarah 在 GTX 1050 Ti / i5-7500 上稳定 60 fps；GPL-2.0-only；免责声明称用于互操作、研究、保存与兼容，不含版权软件、固件或密钥。
- **app-store**：官方页面（2026-10-08 读取）给出发现、策展、搜索、安全审查描述及"近 200 万款应用、40 多种语言的 175 个店面、120+ 编辑"等数字（正文中已标注为官方页面口径并指向实时页面）；上线日期 2008-07-10、初期约 500 款应用引自维基百科 App Store (Apple) 条目（2026-10-07 复核版）。`reportaproblem.apple.com`、`appstoreconnect.apple.com`、`developer.apple.com` 为官方入口。欧盟 DMA 替代分发的细节未写入正文：Apple 开发者侧对应页面 URL 未能稳定核验，且属区域政策，正文以官方开发者文档为指针。
- **apple-tv-remote**：Apple TV 4K 官方页（2026-10-08 读取）：两个版本规格均标注 "Siri Remote with USB-C connector"；Siri 按钮与最多六位家庭成员的语音识别；iPhone 在控制中心/锁屏可当遥控并帮助查找 Siri Remote。Siri Remote 2015-10-30 首代（随第四代 Apple TV，取代 Apple Remote）、2022-10-18 第三代改 USB-C 充电，引自维基百科 Siri Remote 条目。
- **codemirror**：codemirror.net（2026-10-08 读取）：网页代码编辑器组件、MIT 许可、Marijn Haverbeke 开发（code.haverbeke.berlin）、商业使用有资助维护的社会期望；npm `codemirror` 包为"Basic configuration"（6.0.2）；2007 年首发与 2022 年发布 v6、包拆分引自维基百科 CodeMirror 条目；Monaco 与 VS Code 的关系引自 microsoft/monaco-editor README。
- **hyperxiaoai**：HyperOS 4 官方页面（hyperos.mi.com，2026-10-08 读取）：超级小爱 2.0 基于 Xiaomi MiMo 大模型；任务上岛（小米超级岛）、灵感球、专家模式、小白条长按说话；官方注明 AI 通话、超级小爱输入法等功能仅限中国大陆。xiaoai.mi.com 为 JS 应用，标题为"小爱同学"，正文内容未能解析。"超级小爱是小爱同学的升级版"这一沿革说法未在官方渠道核到，正文只并列两个名称，不写升级关系。
- **imessage**：Apple 支持 iPhone 使用手册 iMessage overview（2026-10-08 读取）：端到端加密、支持 iPhone/iPad/Mac/Apple Watch/Apple Vision Pro、需 Apple Account（部分功能）、Wi-Fi 或蜂窝数据、不计入短信套餐额度、蓝/绿气泡与发送按钮颜色、"已加密"标识、Contact Key Verification、功能列表（格式、编辑、撤回、定时、背景、投票、Memoji、协作等）、垃圾信息举报与未知发件人筛查、RCS 由运营商提供。

## 节目证据

七篇正文的节目讨论均来自 Weekly #005（本地唯一含这些实体提及的期数）：

- aihot：[chapter-06 "RSS、独立博客与内容开放"](https://next-token.tv/weekly/005/transcript#chapter-06)，杨攀 quote-090a602af9cf1d5a15bd。
- anyps5：[chapter-11 "游戏反编译、Mod 与商业模式"](https://next-token.tv/weekly/005/transcript#chapter-11)，歸藏 quote-38591eacb9a93f4e6e36。
- app-store：[chapter-08 "用 Opus 5.5 写游戏：代码质量与效率"](https://next-token.tv/weekly/005/transcript#chapter-08)，杨攀 quote-5f97bb176cc07f28406e。
- apple-tv-remote：[chapter-17 "小米蓝牙遥控器做语音输入"](https://next-token.tv/weekly/005/transcript#chapter-17)，杨攀 quote-a81a8f8bc603dcf7a07f。
- codemirror：[chapter-09 "迁移插件、替换编辑器内核"](https://next-token.tv/weekly/005/transcript#chapter-09)，橘子 quote-a26a210c2315f9a66446。
- hyperxiaoai：同 chapter-17，歸藏 quote-7c7b23a9919e61822061。
- imessage：[chapter-04 "Instinct：订房、商旅与信任"](https://next-token.tv/weekly/005/transcript#chapter-04)，向阳乔木 quote-47fe45696bf01d8f5694。

段落锚点按 `src/data/transcript-paragraph-anchors.ts` 的算法（发言人 ID + 归一化原文的 sha256 前 20 位）独立复算。歸藏在 anyps5 段落中对实现细节的说法（"全部重写""可能用了 PS5 的源码作为参照"）与其官方 README 描述不同，正文已按参与者转述处理并给出官方口径；未把节目中"血源复刻进展"等相邻话题归入 AnyPS5 本身。

## 未采用/省略

- app-store：`app store 切换账号` 需求量明显，但属 Apple 账户通用操作而非商店本身，且与本页主题关联弱，未设 FAQ；佣金比例（15%/30%）未写入正文，官方口径页未在本轮核验。
- apple-tv-remote：`apple tv remote replacement`（购买渠道）未采用；"遥控器失灵/配对"FAQ 的答案指向 Apple Support 站内指引，未核到固定短链，故链接 Apple Support 首页。
- hyperxiaoai：`超级小爱 apk 下载`、`国际版` 等需求未采用，避免指向非官方分发渠道；超级小爱与 MiMo Agent 的合并说法仅来自节目参与者，正文注明为转述。
- imessage：激活排查 FAQ 未链接具体支持文章，因未能核验稳定的 URL 短链；`imessage 网页版` 无官方产品，未设 FAQ。
- aihot：英文查询干扰严重，仅采用 `aihot github`、`aihot news` 两个可信候选；"和 AIoT 区别"为编辑补充消歧。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置与可见查询样本；覆盖率与 CTR 只能基于实际数据计算。
