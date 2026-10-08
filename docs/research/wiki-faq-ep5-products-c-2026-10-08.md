# 第 005 期产品批次 C 的 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `ctrip`、`jimeng`、`muse-home-link`、`nvidia-dgx-spark`、`xiaomi-bluetooth-remote`、`bloodborne` 和 `elden-ring` 的 Wiki 正文。研究日期为 2026-10-08，面向中文和英文读者。搜索需求线索来自 Google Autocomplete 公开接口（`suggestqueries.google.com/complete/search`，2026-10-08 采样，中文种子用 `hl=zh-CN`）；本次没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，顺序不构成排名，也不构成效果承诺。

原始采样（节选）：

```json
{"seed":"携程","candidates":["携程","携程机票","携程网","携程旅行","携程招聘","携程校招","携程国际版","携程商旅","携程酒店","携程官网"]}
{"seed":"携程商旅","candidates":["携程商旅","携程商旅官网","携程商旅登录","携程商旅电话","携程商旅结算平台","携程商旅app","携程商旅客服电话","携程商旅开放平台","携程商旅api","携程商旅白皮书"]}
{"seed":"携程是什么","candidates":["携程是什么","携程是什么公司"]}
{"seed":"ctrip","candidates":["ctrip","ctrip 携程","ctrip english","ctrip china","ctrip hk","ctrip stock","ctrip 中文","ctrip cn","ctrip driver","ctrip stock price"]}
{"seed":"即梦","candidates":["即梦","即梦国际版","即梦官网","即梦ai国际版","即梦ai官网","即梦seedance 2.0","即梦海外版","即梦 api","即梦ai app下载","即梦网页版"]}
{"seed":"即梦ai","candidates":["即梦ai国际版","即梦ai官网","即梦ai app下载","即梦ai海外版","即梦ai无限积分","即梦ai网页版","即梦ai api","即梦ai国际版免费","即梦ai国际版官网","即梦ai手机版下载"]}
{"seed":"jimeng ai","candidates":["jimeng ai","jimeng ai video generator","jimeng ai english","jimeng ai bytedance","jimeng ai app","jimeng ai free","jimeng ai apk","jimeng ai website","jimeng ai platform","jimeng ai app download"]}
{"seed":"dreamina","candidates":["dreamina","dreamina ai","dreamina seedance 2.0","dreamina capcut","dreamina seedance 2.5","dreamina seedance","dreamina pricing","dreamina ai video generator","dreamina capcut ai","dreamina ai pricing"]}
{"seed":"muse home link","candidates":[]}
{"seed":"dgx spark","candidates":["dgx spark","dgx spark 价格","dgx spark是什么","dgx spark 评测","dgx spark price","dgx spark deepseek v4 flash","dgx spark 配置","dgx spark gb10","dgx spark 京东","dgx spark minimax h3"]}
{"seed":"英伟达dgx","candidates":["英伟达dgx spark","英伟达dgx","英伟达dgx spark价格","英伟达 dgx station","英伟达断供显卡","英伟达 dgx b300","英伟达dgx spark gb10"]}
{"seed":"nvidia dgx spark 64gb","candidates":["nvidia dgx spark 64gb","nvidia most expensive gpu","nvidia dgx station review","nvidia dgx review"]}
{"seed":"小米蓝牙遥控器","candidates":["小米蓝牙遥控器 2 pro","小米蓝牙遥控器","小米蓝牙遥控器 2 pro github","小米蓝牙遥控器2","小米蓝牙遥控器配对","小米蓝牙遥控器 vibe coding","小米蓝牙遥控器 github","小米蓝牙遥控器 2 pro 配对","小米蓝牙遥控器pro2","小米蓝牙遥控器pro"]}
{"seed":"小米蓝牙遥控器2pro","candidates":["小米蓝牙遥控器2pro","小米蓝牙遥控器2pro github"]}
{"seed":"血源诅咒","candidates":["血源诅咒","血源诅咒pc版","血源诅咒 攻略","血源诅咒 pc","血源诅咒steam","血源诅咒pc模拟器","血源诅咒 加点","血源诅咒wiki","血源诅咒 武器","血源诅咒2"]}
{"seed":"bloodborne pc","candidates":["bloodborne pc","bloodborne pc 版","bloodborne pc seamless coop","bloodborne pc mod","bloodborne pc files","bloodborne pc shadps4","bloodborne pc patches","bloodborne pc port","bloodborne pc emulator coop","bloodborne pc sfx fix all effects"]}
{"seed":"血源重制版","candidates":[]}
{"seed":"艾尔登法环","candidates":["艾尔登法环","艾尔登法环 地图","艾尔登法环攻略","艾尔登法环wiki","艾尔登法环 黑夜君临","艾尔登法环 褪色者版","艾尔登法环英文","艾尔登法环dlc","艾尔登法环mod","艾尔登法环风灵月影"]}
{"seed":"艾尔登法环褪色者版","candidates":["艾尔登法环 褪色者版","艾尔登法环 褪色者版 差异","艾尔登法环 褪色者版 (elden ring tarnished edition)","艾尔登法环褪色者版 攻略","艾尔登法环 褪色者版 ns2","艾尔登法环褪色者版差别","艾尔登法环褪色者版switch 2","艾尔登法环褪色者版职业","艾尔登法环褪色者版 新手","艾尔登法环褪色者版 巴哈"]}
{"seed":"elden ring","candidates":["elden ring","elden ring tarnished edition","elden ring map","elden ring movie","elden ring nightreign","elden ring wiki","elden ring switch 2","elden ring 2028","elden ring convergence","elden ring dlc"]}
{"seed":"elden ring dlc","candidates":["elden ring dlc","elden ring dlc 追忆","elden ring dlc 火焰巨人","elden ring dlc map","elden ring dlc ps5","elden ring dlc 攻略","elden ring dlc weapons","elden ring dlc 2","elden ring dlc steam","elden ring dlc collector's edition"]}
```

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| ctrip | `携程是什么公司`、`携程官网`、`携程商旅官网`、`携程国际版`、`ctrip 携程`、`ctrip english`、`ctrip stock` | 定义、导航、集团关系、商业信息 | 是 | [Ctrip 官网](https://www.ctrip.com/)、[Trip.com Group](https://group.trip.com/)、[携程商旅](https://ct.ctrip.com/) |
| jimeng | `即梦官网`、`即梦ai官网`、`即梦ai app下载`、`即梦国际版`、`即梦海外版`、`即梦 api`、`即梦seedance 2.0`、`jimeng ai bytedance`、`dreamina capcut`、`dreamina seedance 2.5` | 导航、下载、国际版歧义、模型关系 | 是 | [即梦官网](https://jimeng.jianying.com/)、[Dreamina](https://dreamina.capcut.com/)、[ByteDance Seed：Seedance](https://seed.bytedance.com/en/seedance2_5) |
| muse-home-link | `muse home link`（无联想返回） | 导航 | 是（官方资料内整理） | [Muse Home Link 官方页](https://gadgets.muse.ai/home-link) |
| nvidia-dgx-spark | `dgx spark 价格`、`dgx spark是什么`、`dgx spark 配置`、`dgx spark gb10`、`英伟达dgx spark价格`、`nvidia dgx spark 64gb` | 定义、价格、配置、型号区别 | 是 | [NVIDIA DGX Spark 产品页](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)、[NVIDIA 新闻稿（2025-10-13）](https://nvidianews.nvidia.com/news/nvidia-dgx-spark-arrives-for-worlds-ai-developers) |
| xiaomi-bluetooth-remote | `小米蓝牙遥控器 2 pro github`、`小米蓝牙遥控器配对`、`小米蓝牙遥控器 vibe coding`、`小米蓝牙遥控器 2 pro 配对` | 导航、社区玩法、配对 | 是（配对题因官方说明不足未采用，见下） | [小米官方产品页](https://www.mi.com/xiaomi-bluetooth-remote-2-pro) |
| bloodborne | `血源诅咒pc版`、`血源诅咒 pc`、`血源诅咒steam`、`bloodborne pc port`、`bloodborne pc shadps4`、`血源诅咒2` | 平台可用性、移植传闻、续作传闻 | 是 | [PlayStation 官方游戏页](https://www.playstation.com/en-us/games/bloodborne/)、[Bloodborne - Wikipedia](https://en.wikipedia.org/wiki/Bloodborne) |
| elden-ring | `艾尔登法环 褪色者版`、`艾尔登法环 黑夜君临`、`艾尔登法环dlc`、`elden ring tarnished edition`、`elden ring switch 2`、`elden ring dlc` | DLC、新版本、衍生作 | 是 | [ELDEN RING 官方页（万代南梦宫）](https://en.bandainamcoent.eu/elden-ring/elden-ring)、[Elden Ring - Wikipedia](https://en.wikipedia.org/wiki/Elden_Ring) |

## 歧义与排除

- `ctrip stock`、`ctrip stock price` 指向集团股票（Trip.com Group，NASDAQ: TCOM），在 FAQ 中以集团口径回答，不与品牌页混写。
- `即梦国际版／海外版` 与 `dreamina` 属同一需求方向：海外版 Dreamina 运行在 capcut.com 域名下；正文按"国际版"说明，不把 Dreamina 的功能细节移植到国内版。
- `dgx spark deepseek v4 flash`、`dgx spark minimax h3` 等联想把具体模型名与硬件绑定，无官方页面支撑，不采用。
- `小米蓝牙遥控器 vibe coding`、`小米蓝牙遥控器 2 pro github` 反映把遥控器改作电脑语音输入设备的社区玩法；第 005 期节目有直接讨论，FAQ 采用并注明社区项目属性。`配对`类问题因官方页面未提供可引用的配对说明，未采用。
- `血源诅咒pc模拟器`、`bloodborne pc shadps4` 涉及模拟器与社区反编译项目，正文只在节目讨论与移植现状中中性提及，不提供教程或链接。
- `elden ring 2028` 对应电影改编传闻，属娱乐新闻，不进入产品正文 FAQ。

## 事实边界与核验结论

- ctrip：携程是 Trip.com Group 旗下服务中国市场的在线旅行品牌。集团 1999 年 6 月以 Ctrip.com 名义创立（梁建章、沈南鹏、范敏、季琦），2003 年在纳斯达克上市，2019 年 10 月更名为 Trip.com Group；集团旗下品牌包括 Ctrip、Trip.com、去哪儿（Qunar）、Skyscanner、Travix、TrainPal（来源：[Trip.com Group - Wikipedia](https://en.wikipedia.org/wiki/Trip.com_Group)，及官网在售页面）。携程商旅为企业差旅服务入口（ct.ctrip.com 可访问）。香港上市（9961.HK）为公开资料，未在本次单独复核原始公告，正文仅写纳斯达克与更名等已核事实。
- jimeng：即梦 AI 官网（jimeng.jianying.com）提供 AI 绘画（文/图生图）、视频生成（文/图生视频、首尾帧输入）、智能画布（局部重绘、扩图、消除、抠图）等功能；页面页脚标注运营方为深圳市脸萌科技有限公司（剪映/CapCut 同一实体），未直接出现 ByteDance 名称。国际版 Dreamina 位于 dreamina.capcut.com。BytePlus 将 Seedance 2.5 标注为 "Dreamina Seedance 2.5"（来源：Seedance 官方页，见 Seedance 条目）。"即梦有 MCP、CLI"来自节目参与者发言，未在官网核到，正文只作节目转述。
- muse-home-link：官方页（gadgets.muse.ai/home-link）说明其为让 Muse 连入家庭 Wi-Fi 的 USB-C 小设备（ESP32-C5、Wi-Fi 6、USB-C/USB-A 供电），经 Muse 应用通过 BLE 配对；固件基于开源 ESP32 Device SDK 但设备只运行官方固件；"Free with an active Muse subscription in the United States only, limit one per subscriber"，"Ships in October, first come, first served"；社区技能覆盖 Philips Hue、Sonos、Apple TV、Google Nest 音箱、Samsung TV，安装自 GitHub，页面提示勿用于安防、医疗等安全关键场景。
- nvidia-dgx-spark：官方产品页称其为 "A Grace Blackwell AI Supercomputer on your desk"，基于 GB10 Grace Blackwell Superchip，FP4 精度最高 1 petaFLOP，64GB/128GB LPDDR5X 统一内存，200GbE ConnectX-7；官方称可本地推理最多 200B 参数模型、微调最多 70B 参数模型。新闻稿（2025-10-13）称 10 月 15 日起可在 NVIDIA.com 订购，合作方（Acer、ASUS、Dell、GIGABYTE、HP、Lenovo、MSI 及 Micro Center）同期发售；新闻稿未列价格。官方产品页将 64GB 版列为 "Coming Soon"，仅经 OEM 合作伙伴提供。节目转述的"128GB 版 3,999 美元、新 64GB 版更贵"未在官方渠道核到，正文只作节目转述。
- xiaomi-bluetooth-remote：小米官方产品页确认产品名"小米蓝牙遥控器 2 Pro"，标注手机适配 Xiaomi MIX Fold 系列、MIX Flip 系列、Xiaomi Ultra 系列、Xiaomi Pro Max 系列，电视适配 98 寸、100 寸以上大电视系列；语音、NFC 投屏与 USB-C 充电来自实体 YAML 摘要（lastVerifiedAt 2026-10-08）。节目中的铝壳做工、续航、99 元/49 元价格均为节目参与者陈述，正文只作节目转述。
- bloodborne：FromSoftware 开发、Sony 发行，宫崎英高执导，2015 年 3 月 24 日（北美）发售，PS4 平台（可在 PS5 上游玩）；DLC《The Old Hunters》2015 年 11 月 24 日发售；获多家媒体年度游戏，BAFTA Game Design 奖；截至 2025 年 11 月约售出 930 万份；无官方 PC 版；2026 年 4 月宣布电影改编（来源：[Bloodborne - Wikipedia](https://en.wikipedia.org/wiki/Bloodborne)、[PlayStation 官方游戏页](https://www.playstation.com/en-us/games/bloodborne/)）。
- elden-ring：FromSoftware 开发、万代南梦宫娱乐发行，宫崎英高执导、乔治·R·R·马丁参与世界观构建，2022 年 2 月 25 日发售（PS4/PS5/Xbox One/Xbox Series X|S/Windows），2026 年 8 月 28 日推出 Switch 2 版《Tarnished Edition》（含本体与 DLC，新增两个职业，其他平台同类内容为付费 DLC）；获多项年度游戏；2025 年 4 月销量超 3000 万份；DLC《Shadow of the Erdtree》2024 年 6 月发售、销量超 1000 万份；多人衍生作《Nightreign》2025 年发售；电影改编定档 2028（来源：[Elden Ring - Wikipedia](https://en.wikipedia.org/wiki/Elden_Ring) 及其引用的 Gematsu/IGN 报道）。

## 节目证据

第 005 期中文逐字稿中的相关章节：ctrip 见 [chapter-04](/weekly/005/transcript#chapter-04)（Instinct 订房与商旅讨论）；jimeng 见 [chapter-18](/weekly/005/transcript#chapter-18)（剪映/即梦 MCP 与 CLI）；muse-home-link 见 [chapter-16](/weekly/005/transcript#chapter-16)（小硬件作为 Personal Agent 物理外挂）；nvidia-dgx-spark 见 [chapter-12](/weekly/005/transcript#chapter-12) 与 [chapter-13](/weekly/005/transcript#chapter-13)（推理优化与 DGX 涨价）；xiaomi-bluetooth-remote 见 [chapter-10](/weekly/005/transcript#chapter-10) 与 [chapter-17](/weekly/005/transcript#chapter-17)（语音输入项目与上手体验）；bloodborne 与 elden-ring 见 [chapter-11](/weekly/005/transcript#chapter-11)（游戏反编译、Mod 与商业模式）。这些链接承载节目参与者的体验、转述和判断，不是独立测评或官方背书。英文正文链接中文章节并标注 Chinese transcript。

## 未知项

- 即梦的会员定价、积分规则与可用模型版本未核验，正文指向官方页面。
- 小米蓝牙遥控器 2 Pro 的官方定价、蓝牙版本与续航参数未在官方页面核到（页面信息由脚本渲染），正文只保留官方页确认的适配信息与实体 YAML 摘要，价格只作节目转述。
- DGX Spark 现行售价与 64GB 版发售安排属时效信息，正文指向官方页面，仅"截至 2026 年 10 月官方页面标注 64GB 版 Coming Soon"一处锚定。
- Muse Home Link 的"10 月发货"年份未在页面单独写明，结合页面语境与 Muse 订阅上线时间（2026 年 9 月）按 2026 年理解，正文表述为"官方页面标注 Ships in October"并链接官方页，避免自填年份断言之外的解释。
