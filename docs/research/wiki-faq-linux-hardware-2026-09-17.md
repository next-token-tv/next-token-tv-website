# Linux 与硬件产品 Wiki FAQ 研究记录（omarchy、microduck、mac-studio）

## 范围与口径

本记录支持 `omarchy`、`microduck` 和 `mac-studio` 的 Wiki 正文。研究日期为 2026-09-17，面向中文和英文读者。公开搜索联想采样用于确认问题形态和官方答案入口；本次没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。候选词的出现不等于热门，也不构成效果承诺。

采样方法：

- Google 公开自动联想（`suggestqueries.google.com`，`client=firefox`，`hl=zh-CN` / `hl=en`），种子词与返回结果见文末原始数据。联想顺序不是热度排名。
- Bing 网页结果仅用于确认官方结果可命中、发现同名歧义，不作为热门证明。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| Omarchy | `omarchy 是什么`、`omarchy 是啥`、`omarchy 安装`、`omarchy linux iso download`、`omarchy linux requirements`、`omarchy vs arch`、`omarchy vs ubuntu`、`omarchy github`、`omarchy quattro`、`omarchy 4.0 release date`、`omarchy 中文` | 定义、安装、硬件要求、与发行版比较、版本信息 | 是 | [Omarchy 官网](https://omarchy.org/)、[安装手册](https://omarchy.org/manual/getting-started/)、[AI 手册](https://omarchy.org/manual/ai/)、[Omacom Foundation](https://omarchy.org/foundation/) |
| Omarchy | `dhh omarchy laptop`、`dhh omarchy hardware`、`omarchy mac`（联想词 dhh laptop/hardware 与官网 Try on Mac 入口） | Apple 硬件可用性 | 是 | [Introducing Omarchy M](https://omarchy.org/news/2026/09/introducing-omarchy-m/)、[Try Omarchy](https://github.com/omacom/try-omarchy) |
| Microduck | `microduck robot`、`microduck github` | 定义、开发者资料 | 是 | [Pollen Robotics 产品页](https://pollen-robotics.com/microduck/)、[GitHub 仓库](https://github.com/pollen-robotics/microduck) |
| Microduck | `microduck price`（采到少量联想）、`microduck 机器人`（无联想返回） | 价格与购买 | 是（答案依托官方页面，问题形态部分为编辑补充） | [官方商店](https://store.pollen-robotics.com/products/microduck)、[Meet Microduck 博客](https://pollen-robotics.com/microduck/blog/introducing-microduck/) |
| Microduck | 无联想返回的"什么时候发货""和 Reachy Mini 的区别" | 交付状态、产品线比较 | 编辑补充（依托官方博客的交付目标与定位说明） | [Meet Microduck 博客](https://pollen-robotics.com/microduck/blog/introducing-microduck/) |
| Mac Studio | `mac studio m5`、`mac studio m5 ultra`、`mac studio m5 ultra price`、`mac studio 价格`、`mac studio 512g`、`mac studio 512gb ram`、`mac studio m5 ultra specs` | 芯片版本、价格、内存上限 | 是 | [Mac Studio 官网](https://www.apple.com/mac-studio/)、[技术规格](https://www.apple.com/mac-studio/specs/)、[Apple 新闻稿](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) |
| Mac Studio | `mac studio 本地模型`、`mac studio 本地部署 deepseek`、`mac studio 跑本地大模型`、`mac studio local llm`、`mac studio local llm performance` | 本地推理用途 | 是 | [Mac Studio 官网 AI 章节](https://www.apple.com/mac-studio/)、[技术规格](https://www.apple.com/mac-studio/specs/) |
| Mac Studio | `mac studio vs mac mini`、`mac studio vs mac mini for ai`、`mac studio vs macbook pro` | 与 Mac mini／MacBook Pro 比较 | 是 | [Mac Studio 官网](https://www.apple.com/mac-studio/)、[Mac mini 官网](https://www.apple.com/mac-mini/) |

## 歧义处理

- `microduck` 的英文联想中出现 `micro ducks walmart`（玩具鸭等无关含义），采样时以 `robot`、`github` 修饰词区分。
- `mac studio` 的搜索结果混入 M·A·C 彩妆品牌，Bing 采样确认需带 Apple 语境；FAQ 答案只引用 apple.com。
- Bing 结果中出现第三方站点自称 "Microduck Official Store"（microduck.shop）及百科、社区内容；Pollen Robotics 官方商店为 `store.pollen-robotics.com`，正文 FAQ 的购买入口只指向官方商店。

## 发布状态核验（microduck 专项结论）

YAML 中 `status: announced` 已过时。2026-09-17 核验官方资料后的结论：

- 硬件整机处于**预购（pre-order）**状态：2026-08-27 开放预订，预订价 399 美元（官方标注为 introductory price，不含税费与运费）；官方博客称首批交付目标为 2026 年圣诞节前，覆盖北美、欧洲和英国。官方页面称"Pre-orders are open now"，未见"已普遍发货"表述，因此正文不写成普遍可用。
- 软件栈已开源可用：SDK 与机器人软件在 `pollen-robotics/microduck`（Apache-2.0，GitHub API 显示创建于 2026-07-29、持续更新），强化学习与 sim-to-real 工具在 `pollen-robotics/microduck_rl`；官方还提供 Hugging Face Spaces 上的仿真器。
- 制造合作伙伴：节目称由中国厂商 Seeed 生产；官方产品页、博客与 Seeed 官网检索均未见 Seeed 相关表述，正文只以节目发言归属呈现，不写成官方事实。

## 事实边界

- Omarchy：官网定位为 "Beautiful, fun & agentic Linux by DHH"、"The malleable OS for the age of agents"；自述基于 Arch、Hyprland、Quickshell 与键盘优先工作流。当前 ISO 为 4.0.4（Quattro）。Omacom 基金会为资助开发的非营利组织，官网还有简体中文站点 zh.omarchy.org。安装需关闭 Secure Boot/TPM、默认全盘加密，蓝牙键盘不能输入加密密码。预置编码 Agent 以自动批准模式运行，官方建议 Omarchy Skill 先在 plan mode 使用并准备回滚。正文不写具体捐赠/赞助金额（官方新闻有数字但属时效性筹资进展）。
- Microduck：整机规格（25 cm、约 800 g、15 电机、摄像头+深度传感器（规格页写作 LiDAR）+两 IMU、50 Hz 在线策略循环）取自官方规格区；Reachy Mini 超过 10,000 台的销量表述取自官方博客。正文中 Apple、Pollen 的营销表述均标注为官方口径。
- Mac Studio：新机型 2026-08-25 由 Apple 新闻稿发布（M5 Max 与全新 M5 Ultra），官网与商店页显示预购中、9 月 22 日起发售。规格（M5 Max 18 核 CPU／最高 40 核 GPU／最高 128GB 统一内存／614GB/s；M5 Ultra 36 核 CPU／最高 80 核 GPU／最高 512GB 统一内存／1.2TB/s；4 台 Thunderbolt 5+RDMA 集群推理最高 3 倍）取自官方新闻稿与规格页。价格本次核验未采集到官网标价，正文与 FAQ 不写具体数字，只指向官方购买页。上一代 M4 Max／M3 Ultra 仅以"上一代"指代，不写发布日期。

## 节目证据

本地已发布中文逐字稿中，三个实体的讨论集中在 Weekly #001，Weekly #002 无实体链接与关键词命中。下表列出正文实际引用的段落锚点（已按发言人＋归一化原文复核）；括号内为写作时核对过但未在正文直接链接的补充证据。

- Omarchy：Weekly #001 [chapter-12](/weekly/001/transcript#chapter-12)（"Omarchy：一个 Agent 优先的 Linux 是什么体验"）；另在 chapter-28 由杨攀再次提及。正文引用：`quote-996a84fc2d1e3ab6e38f`（向阳乔木，安装体验）、`quote-87b8cb106894349cb85f`（向阳乔木，Agent 控制可改动范围）、`quote-a0ac0fd541895dc1235b`（歸藏，"AI Native 的 OS"）、`quote-9a65193887dd7397f52d`（杨攀，chapter-28 端侧分工）。补充核对：`quote-681e231d2b480c02f219`（4.0 完成度，已用于 DHH 人物页）、`quote-33014727689d4042614e`（自动分屏）。
- Microduck：Weekly #001 [chapter-19](/weekly/001/transcript#chapter-19)（"Microduck 为什么一夜走红"）。正文引用：`quote-ef668720aacb7871ed55`（杨攀，Hugging Face 的 MicroDuck 与 Seeed 说法）、`quote-8a2fcec8111ab79972f1`（歸藏，被收购公司及前代产品）、`quote-a4c6282844868aeff0cf`（歸藏，"足够的没用才能好玩"）。补充核对：`quote-ba8246bf65e0bfdf2861`（杨攀，"300 多美元"）、`quote-61facd88d692d80ee51f`（歸藏，后空翻）。
- Mac Studio：Weekly #001 chapter-03（本地模型体验与回本测算，正文引用 `quote-fd38512a48f266e43abe`、`quote-d858cf2d46092dfde617`）、[chapter-22](/weekly/001/transcript#chapter-22)（"Mac Studio、本地推理与一台始终在线的电脑"，正文引用 `quote-8801767eeff61b98ee9a`、`quote-6d4d1080e09a799ffe3c`、`quote-7f137420739f1df4688c`、`quote-6da575083b2ac4ee9801`）、chapter-19（新机热点转述，正文引用 `quote-16dbac2d3a1f25eb76ca`）、[chapter-28](/weekly/001/transcript#chapter-28)（"Token Is New Money"，正文引用 `quote-1cecab0aab1f8761cb0b`）。补充核对：`quote-cc6d39968f21cee5f58d`（32G 定位提问）。

这些链接承载的是节目参与者在具体语境中的体验、转述或比喻，不是独立测评、官方背书或搜索需求证据。英文正文链接到中文章节，并明确标注 Chinese transcript（暂无英文逐字稿）。

## 补充官方入口

- [Omarchy 完整安装指南](https://omarchy.org/manual/getting-started/)
- [Omarchy 新闻：Quattro 突破 20 万次 ISO 下载](https://omarchy.org/news/2026/09/quattro-crosses-200000-iso-downloads/)
- [Microduck 官方商店](https://store.pollen-robotics.com/products/microduck)
- [Pollen Robotics 仿真器（Hugging Face Spaces）](https://huggingface.co/spaces/pollen-robotics/microduck-simulator)
- [Apple Store：Mac Studio 购买页](https://www.apple.com/shop/buy-mac/mac-studio)

## 原始联想采样数据

以下为 2026-09-17 通过 Google 公开自动联想（`client=firefox`）采集的全部样本，仅作需求线索，无搜索量含义。

```json
{
  "date": "2026-09-17",
  "method": "Google public autocomplete, Firefox client; language hint only, no controlled location or volume data",
  "samples": [
    { "query": "omarchy ", "language": "zh-CN", "suggestions": ["omarchy linux", "omarchy quattro", "omarchy 4.0", "omarchy github", "omarchy 中文", "omarchy 是什么", "omarchy 4", "omarchy 安装", "omarchy 介绍", "omarchy 是啥"] },
    { "query": "omarchy ", "language": "en", "suggestions": ["omarchy linux", "omarchy plugins", "omarchy quattro", "omarchy github", "omarchy 4", "omarchy download", "omarchy themes", "omarchy os", "omarchy iso", "omarchy reddit"] },
    { "query": "omarchy install", "language": "en", "suggestions": ["omarchy install", "omarchy install guide", "omarchy install script", "omarchy install windows", "omarchy install fonts", "omarchy install appimage", "omarchy install steam", "omarchy installation stopped", "omarchy install slack", "omarchy install size"] },
    { "query": "omarchy 是", "language": "zh-CN", "suggestions": ["omarchy 是什么", "omarchy 是啥", "omarchy 是 什麼"] },
    { "query": "omarchy linux", "language": "zh-CN", "suggestions": ["omarchy linux", "omarchy linux arm64", "omarchy linux github", "omarchy linux iso download", "omarchy linux controversy", "omarchy linux dual boot", "omarchy linux wallpapers", "omarchy linux requirements", "anarchy linux dhh", "anarchy linux install"] },
    { "query": "omarchy vs", "language": "en", "suggestions": ["omarchy vs cachyos", "omarchy vs arch", "omarchy vs ubuntu", "omarchy vs fedora", "omarchy vs endeavouros", "omarchy vscode", "omarchy vs hyprland", "omarchy vs nixos", "omarchy vs mint", "omarchy vs omakub"] },
    { "query": "omarchy 安装", "language": "zh-CN", "suggestions": ["omarchy 安装", "monarchy安装教程"] },
    { "query": "omarchy 4.0", "language": "en", "suggestions": ["omarchy 4.0", "omarchy 4.0 release date", "omarchy 4.0 release", "omarchy 4.0 quickshell desktop", "omarchy 4.0.0", "omarchy 4.0 update", "omarchy 4.0 themes", "omarchy 4.0 download", "omarchy 4.0 quattro"] },
    { "query": "omarchy 中文", "language": "zh-CN", "suggestions": ["omarchy 中文"] },
    { "query": "omarchy dhh", "language": "en", "suggestions": ["omarchy dhh", "omarchy dhh controversy", "omarchy dhh linux", "omarchy dhh reddit", "omarchy dhh youtube", "omarchy dhh politics", "omarchy dhh blog", "dhh omarchy github", "dhh omarchy laptop", "dhh omarchy hardware"] },
    { "query": "microduck ", "language": "zh-CN", "suggestions": ["microduck robot", "micro ducks walmart", "mk1 microduck"] },
    { "query": "microduck ", "language": "en", "suggestions": ["microduck robot", "microduck github", "mk1 microduck"] },
    { "query": "microduck 机器人", "language": "zh-CN", "suggestions": [] },
    { "query": "microduck robot", "language": "en", "suggestions": ["microduck robot"] },
    { "query": "microduck price", "language": "en", "suggestions": [] },
    { "query": "microduck 预订", "language": "zh-CN", "suggestions": [] },
    { "query": "microduck robot ", "language": "en", "suggestions": ["microduck robot"] },
    { "query": "microduck pollen", "language": "en", "suggestions": [] },
    { "query": "microduck robotics", "language": "en", "suggestions": [] },
    { "query": "mac studio ", "language": "zh-CN", "suggestions": ["mac studio m5", "mac studio m5 ultra", "mac studio 价格", "mac studio m3 ultra", "mac studio 512g", "mac studio m4 max", "mac studio m3 ultra 512gb", "mac studio 512gb ram", "mac studio m5 max", "mac studio 中国"] },
    { "query": "mac studio ", "language": "en", "suggestions": ["mac studio m5", "mac studio m5 ultra", "mac studio display", "mac studio m3 ultra", "mac studio m5 max", "mac studio 512gb ram", "mac studio m4 max", "mac studio m4", "mac studio fix", "mac studio refurbished"] },
    { "query": "mac studio m5", "language": "en", "suggestions": ["mac studio m5", "mac studio m5 ultra", "mac studio m5 max", "mac studio m5 release date", "mac studio m5 ultra release date", "mac studio m5 ultra price", "mac studio m5 price", "mac studio m5 max release date", "mac studio m5 pro", "mac studio m5 release"] },
    { "query": "mac studio 本地", "language": "zh-CN", "suggestions": ["mac studio 本地模型", "mac studio 本地 大 模型", "mac studio 本地 部署", "mac studio 本地 部署 大 模型", "mac studio 本地 部署 deepseek", "mac studio 本地 ai", "mac studio 本地llm", "mac studio 跑 本地 模型", "mac studio 跑本地大模型"] },
    { "query": "mac studio local llm", "language": "en", "suggestions": ["mac studio local llm", "mac studio local llm reddit", "mac studio local llm performance", "mac studio local llm coding", "mac studio local llm openclaw", "mac studio local llm benchmark", "mac studio local llm setup", "apple studio local llm", "mac studio run local llm", "mac studio m4 local llm"] },
    { "query": "mac studio vs", "language": "en", "suggestions": ["mac studio vs mac mini", "mac studio vs macbook pro", "mac studio vs nvidia dgx spark", "mac studio vs mac pro", "mac studio vs mac mini for ai", "mac studio vs imac", "mac studio vs mac mini pro", "mac studio vs mac mini size", "mac studio vs", "mac studio vs pc"] },
    { "query": "mac studio 内存", "language": "zh-CN", "suggestions": ["mac studio 内存", "mac studio 内存 带宽", "mac studio 内存 扩容", "mac studio 512g 内存", "mac studio 最大 内存", "mac studio 升级 内存", "mac studio 加 内存", "mac studio 512g内存 价格", "mac studio m3 ultra 内存 带宽", "mac studio 改 内存"] },
    { "query": "mac studio 本地部署大模型", "language": "zh-CN", "suggestions": [] },
    { "query": "mac studio m5 ultra", "language": "en", "suggestions": ["mac studio m5 ultra", "mac studio m5 ultra release date", "mac studio m5 ultra price", "mac studio m5 ultra news", "mac studio m5 ultra rumors", "mac studio m5 ultra specs", "mac studio m5 ultra 2026", "mac studio m5 ultra 512gb price", "mac studio m5 ultra memory bandwidth", "mac studio m5 ultra cost"] },
    { "query": "mac studio m5 ultra price", "language": "en", "suggestions": ["mac studio m5 ultra price", "mac studio m5 ultra price in india", "mac studio m5 ultra price prediction", "mac studio m5 ultra 512gb price", "mac studio m5 ultra expected price", "mac studio m5 ultra 2026 price", "mac studio m5 ultra 256gb price", "mac studio m5 ultra 768gb price", "mac studio m5 ultra 1tb ram price", "mac studio m5 ultra 512gb ram price"] },
    { "query": "mac studio 价格", "language": "zh-CN", "suggestions": ["mac studio 价格", "mac studio 512g 价格", "mac studio m5 价格", "mac studio m5 ultra 价格", "mac studio m4 max 价格", "mac studio 512g内存 价格", "mac studio m5 max 价格", "mac studio 顶 配 价格", "mac studio m4 价格", "m3 ultra mac studio 价格"] },
    { "query": "mac studio 本地模型", "language": "zh-CN", "suggestions": ["mac studio 本地模型"] }
  ]
}
```

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用候选词数量代替。
