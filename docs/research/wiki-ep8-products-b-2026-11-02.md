# 第 008 期产品条目 B 批 Wiki 研究记录

## 范围与口径

研究日期 2026-11-02。本记录支持 6 个产品条目的中英文 Wiki 正文：`snapdragon`、`mediatek-dimensity`、`nvidia-b300`、`oneplus-13t`、`oppo-pad-mini`、`oppo-find-n`。

- 逐字稿链接：第 008 期逐字稿为 review-draft 未发布，全部条目的第 008 期讨论均以纯文本提及，未创建任何指向 `/weekly/008/transcript` 的链接。已发布第 1–2 期的章节链接分别使用 `/weekly/001/transcript#chapter-07`、`/weekly/002/transcript#chapter-19`；英文页链接英文逐字稿仅限第 1–2 期（`/en/weekly/001/transcript`、`/en/weekly/002/transcript`），未引用不存在的英文页。
- FAQ 需求线索：本批搜索引擎（DuckDuckGo、Bing、百度）抓取反复失败或返回验证码，Google 联想端点未使用，未获得任何联想或相关问题数据。所有 FAQ 问题与答案均按页面完整性需要设置，属**编辑补充**；搜索量、难度、热度均为 **N/A**。
- 时间稳定性：正文只保留可锚定年份的历史事实与指向实时官方页面的指针；未核验的规格、价格一律不写进正文。

## 逐字稿讨论上下文（第 008 期，均未链接）

| 条目 | 章节 | 内容摘要 | 发言人 |
| --- | --- | --- | --- |
| snapdragon | chapter-02（Anthropic 上市话题） | 歸藏转述极客湾年度手机芯片横评：骁龙 8 Gen 6 单核、多核、浮点全面大幅倒退，不如上一代；并以此解释许多新机沿用去年高通芯片 | 歸藏 |
| snapdragon | chapter-13（录音硬件、跨端兼容与安卓设备） | 橘子称某平板"CPU 不太行"（内存、存储、屏幕一流）；歸藏以"天玑和骁龙挤牙膏，挤得已经挤飞边子了"形容升级幅度 | 歸藏、橘子 |
| mediatek-dimensity | chapter-13 | 同上"挤牙膏"说法 | 歸藏 |
| nvidia-b300 | chapter-02 | 橘子观察内存与显卡价格，称"连 B300 都已经在降了"，认为价格已到头 | 橘子 |
| oneplus-13t | chapter-10 / chapter-11 | 杨攀为运营节目买备机：双十一国补购入一加 13T，称"上一代小屏旗舰"，16 GB 内存版本 | 杨攀 |
| oneplus-13t | chapter-12 | 杨攀问一加手机能否用 OPPO 系统的应用，歸藏答"它就是 OPPO ColorOS 嘛" | 杨攀、歸藏 |
| oppo-pad-mini | chapter-13 | 歸藏 618 购入（2,800 元）、双十一 2,600 元；"安卓平板更适合 Agent 时代"（ADB 自写工具对比苹果开发者年费与 TestFlight 90 天有效期）；橘子：内存、存储、屏幕一流，CPU 不太行、打游戏卡；歸藏归因骁龙 | 歸藏、橘子 |
| oppo-find-n | chapter-12 / chapter-13 | 向阳乔木对"OPPO 那个折叠屏，N6 还是什么 N 几"心动未下手；橘子称同事用 N6 数月无可见折痕、比 iPhone Duo 薄且轻、约七千多元；歸藏称 OPPO 折痕最少、比苹果好；杨攀称 OPPO 对苹果适配最好、OPPO 口碑上升 | 向阳乔木、橘子、歸藏、杨攀 |

已发布期的可用引用：第 001 期 chapter-07（国内模型为什么突然加速发布）中橘子" B300 已经管够了"，用于 `nvidia-b300`；第 002 期 chapter-19（界面标准与长期一致性为什么重要）中橘子关于折叠屏标准前各家方案不一、苹果定义后小米/OPPO/华为跟进的讨论，用于 `oppo-find-n`。两期均已发布，中英文页分别按语言规则链接。

## 逐条目事实来源与存疑点

### snapdragon

- 已核事实：首款骁龙芯片 2007 年 11 月发布；7 系列 2018 年初推出、定位介于 6 系与 8 系之间；品牌线包含 X、G、XR、8、7、6、4 等（Wikipedia: Snapdragon (system on a chip)，2026-11-02 抓取）。官方页面 `qualcomm.com/snapdragon/smartphones` 存在但为 JS 渲染，仅能确认页面标题。
- 采用了 YAML 权威 summary（"高通的移动计算平台系列"）。
- 存疑点：骁龙 8 Gen 6 的横评结论仅来自节目转述，极客湾评测原文未能独立核验，正文只作参与者观点归属；"8 Elite"命名仅以 Wikipedia 提及为据，未核其首次发布日期，正文不写日期。

### mediatek-dimensity

- 已核事实（官方页面 `mediatek.com/products/smartphones/dimensity-5g`，2026-11-02 抓取）：家族分为 Flagship、Premium（8000）、7000、6000；旗舰家族型号自 9000 起延伸至 9600 Pro（实时列表，正文只写"以 9000 系列为起点"）；技术方向含全大核 CPU、端侧生成式 AI/LLM、HyperEngine、MiraVision、Imagiq、DORA。系列自 2020 年形成（Wikipedia: MediaTek Dimensity，标题"2020–present"；Dimensity 1100/1200 于 2020-12-01 发布）。
- 存疑点：常见说法"首款天玑 1000 于 2019 年 11 月发布"未能独立核验，正文采用"自 2020 年起形成系列"的稳妥表述。站内无 MediaTek 品牌实体，正文不设品牌内链，以文字说明公司关系。

### nvidia-b300

- 已核事实（NVIDIA 新闻稿，2026-11-02 抓取）：2025-03-18 GTC 发布 Blackwell Ultra 平台，含 GB300 NVL72（72 GPU + 36 Grace CPU）与 HGX B300 NVL16（16 GPU 系统）；官方称相较 Hopper 约 11 倍 LLM 推理、7 倍算力、4 倍显存。B200 属 2024 年 3 月发布的第一代 Blackwell（Wikipedia: Blackwell (microarchitecture)）。YAML 官方链接为 NVIDIA AI Enterprise 支持矩阵，用作规格与软件支持来源。
- 存疑点：节目"连 B300 都已经在降了"仅为参与者对价格走势的判断，未采信为事实；HGX B300 NVL16 的具体显存容量官方新闻稿未给出，正文不写具体容量。

### oneplus-13t

- 已核事实：OnePlus 13T 于 2025 年 4 月发布（Wikipedia: Oppo 年表行"OnePlus 13T – April 2025"）；国际对应版本 OnePlus 13s 于 2025 年 6 月在印度发布、13 系列出厂 Android 15（OxygenOS 15 / ColorOS 15）（Wikipedia: OnePlus 13）。官方页面 `oneplus.com/cn/13t` 存在但 JS 渲染，仅确认页面存在。
- 存疑点：具体配置（屏幕尺寸、电池容量等）未获可靠来源，正文一律不写；"小屏旗舰"定位以 YAML summary（compact）与节目参与者用语呈现，不写英寸数。

### oppo-pad-mini

- 已核事实：OPPO 官方商城产品页（YAML source，实体数据 lastVerifiedAt 2026-11-02）证明产品存在并在售；OPPO 平板产品线含 Pad、Pad 2、Pad 3、Pad Air、Pad Air2、Pad Neo、Pad SE、Pad 4 Pro、Pad 5（Wikipedia: Oppo）。Apple Developer Program 年费 99 美元/年与 TestFlight 构建 90 天有效期为 Apple 既定政策（developer.apple.com/programs/、developer.apple.com/testflight/），作为节目观点的事实背景写入。
- 存疑点：公开搜索（Bing、百度）未检索到 Pad Mini 的独立报道，OPPO 官网抓取返回乱码，发布日期、屏幕、芯片等规格均未核验——正文不写任何规格，120 Hz、"CPU 不太行"等仅作节目发言归属，未作为本站结论。

### oppo-find-n

- 已核事实：Find N 系列代际列表（Find N、N2、N3 及 Flip 变体、N5、N6）见 Wikipedia: Oppo 条目导航模板；OPPO 商城（opposhop.cn）搜索结果同时列出 Find N6，与第 008 期节目讨论互证。窄折叠设计（折叠后接近普通手机）为初代以来的持续设计特征，并有节目发言（杨攀"窄折叠"、橘子"折起来那个长度跟手机差不多"）支持。
- 存疑点：初代 Find N（2021 年）、Find N2（2022 年）、Find N3（2023 年）、Find N5（2025 年）的发布年份为广为报道的公开事实，但本批未能抓取到逐机型发布报道原文，故正文只写年份、不写月日；Find N6 存在性成立但发布时间未核验，正文不写日期；"最薄大折叠"等宣传语未采用。

## 未完成与移交

- 未采集任何搜索联想或 SERP 数据；后续如补采样，需按 FAQ 规范另行记录，不得回溯写入本批正文。
- `snapdragon`、`mediatek-dimensity` 的官方页面为 JS 渲染，官方页面仅作入口链接，未从页面摘录具体型号列表。
- 未修改任何实体 YAML（含 `lastVerifiedAt`）；仅新增 12 篇正文与本记录。
