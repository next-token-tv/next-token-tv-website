# 第 007 期开发工具产品 Wiki FAQ 研究记录（批次：arc、android-debug-bridge、icloud-keychain、apple-passwords、leetcode、nvidia-dlss、php）

## 范围与口径

本记录支持 `arc`、`android-debug-bridge`、`icloud-keychain`、`apple-passwords`、`leetcode`、`nvidia-dlss`、`php` 七个产品实体的 Wiki 正文扩写（第 007 期节目提及：arc 2 次、android-debug-bridge 3 次、icloud-keychain 3 次、apple-passwords 3 次、leetcode 1 次、nvidia-dlss 1 次、php 6 次，均见中文逐字稿）。研究日期为 2026-10-25。需求线索来自百度 `sugrec` 与 Google Firefox 联想接口（`client=firefox`）的公开返回，逐条记录种子词；没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，联想顺序不表示热度排名。

## FAQ 候选与证据

| 页面 | 种子词（接口） | 实际返回的相关问法 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| arc | `arc浏览器`（百度）、`arc browser`（Google zh-CN/en） | `arc浏览器手机版`、`arc浏览器设置中文`、`arc浏览器鸿蒙下载`、`arc浏览器 windows`、`arc浏览器App下载`、`Arc Search 浏览器`、`arc browser download`、`arc browser linux` | 停运、迁移、平台 | 是（中 3 题、英 3 题；`设置中文`/`鸿蒙下载` 无官方可引内容，未成题） | [Arc 停运公告](https://arc.net/) |
| arc / dia | `dia浏览器`（百度）、`dia browser`（Google） | `dia浏览器下载`、`dia浏览器是什么`、`dia浏览器能在国内用吗`、`dia浏览器收费么`、`dia browser download`、`dia browser windows` | 迁移目标、比较 | `Arc 与 Dia 是否同一浏览器` 并入 arc 正文易混概念；`能在国内用吗`、`收费么` 无官方可引内容，未成题 | [Arc 停运公告](https://arc.net/) |
| android-debug-bridge | `adb是什么`、`adb下载`（百度）、`adb download`、`adb commands`、`adb wireless debugging`（Google en） | `adb是什么意思`、`adb是什么软件`、`手机adb是什么`、`电视adb是什么`、`adb下载官方`、`adb download windows`、`adb commands cheat sheet`、`adb wireless debugging pairing code` | 定义、下载、设备场景、无线连接 | 是（中 3 题、英 3 题；`adb commands cheat sheet` 并入命令示例回答） | [Android adb 官方文档](https://developer.android.com/tools/adb)、[Platform Tools 发布页](https://developer.android.com/tools/releases/platform-tools) |
| icloud-keychain | `icloud钥匙串`、`苹果钥匙串`（百度）、`icloud keychain`（Google） | `icloud钥匙串是什么`、`在哪里查看`、`在哪里打开`、`开还是关`、`有必要开启吗`、`怎么删除密码`、`icloud keychain passkey`、`icloud keychain windows`、`icloud keychain chrome` | 定义、开启、取舍、查看 | 是（中 4 题、英 4 题；Windows/Chrome 扩展无本轮可引官方正文，未成题） | [Apple 支持页 109016](https://support.apple.com/en-us/109016) |
| apple-passwords | `苹果密码app`、`apple密码`（百度）、`apple passwords app`（Google en） | `苹果密码app是干嘛的`、`苹果密码app怎么用`、`苹果密码app显示密码已泄露`、`苹果密码app能删除吗`、`apple passwords app download`、`apple passwords app not syncing across devices`、`apple passwords app says compromised`、`apple passwords app export` | 用途、泄露提示、同步、导出 | 是（中 3 题、英 3 题；同步故障排查属故障诊断，未成题） | [Passwords 使用手册](https://support.apple.com/guide/passwords/welcome/mac)、[Apple 支持页 109016](https://support.apple.com/en-us/109016) |
| leetcode | `leetcode`、`leetcode刷题`、`力扣`（百度）、`leetcode`、`leetcode vs leetcode cn`（Google） | `leetcode热题100`、`leetcode题库`、`leetcode.cn`、`leetcode怎么读`、`leetcode刷题网站`、`力扣官网`、`力扣是什么`、`leetcode hot 100`、`leetcode cn` | 定义、双语站点、免费与否、读法 | 是（中 4 题、英 3 题；`怎么读` 为编辑补充题，已标注） | [LeetCode](https://leetcode.com/)、[Wikipedia: LeetCode](https://en.wikipedia.org/wiki/LeetCode) |
| nvidia-dlss | `dlss`、`dlss是什么`（百度）、`what is dlss`、`dlss 5`（Google） | `dlss是什么意思`、`dlss5是啥`、`dlss5支持显卡`、`dlss怎么开`、`dlss是什么意思跟光追不一样吗`、`what is dlss super resolution`、`dlss 5 release date`、`dlss 5 swapper` | 定义、版本、开启方式、与光追区别 | 是（中 4 题、英 4 题；`swapper` 为第三方工具话题，无官方可引内容，未成题） | [NVIDIA DLSS 官方页](https://www.nvidia.com/en-us/geforce/technologies/dlss/) |
| php | `php是什么`、`php下载`、`php漏洞`（百度）、`what is php`、`php 8.5`（Google en） | `php是什么语言`、`php跟java有什么区别`、`php是什么货币`、`php是什么格式的文件`、`php下载安装`、`php漏洞怎么修复`、`php漏洞最新`、`php 8.5 eol` | 定义、歧义排除、下载、安全 | 是（中 3 题、英 3 题；`跟java区别`、`8.5 eol` 未单独成题） | [php.net](https://www.php.net/)、[php.net 下载页](https://www.php.net/downloads)、[php.net 安全页](https://www.php.net/security/) |

歧义排除：`arc` 的其他含义（ArcGIS、arcgis、arctan、arcaea 等）出现在百度裸词返回中，FAQ 与正文均加"浏览器"限定；`php` 的货币含义（菲律宾比索代码）保留为正文"易混概念"；`adb` 的其他缩写含义（银行、组织）不写入正文，仅在易混概念提示同名缩写。

## 事实核验

### arc（The Browser Company 的 Arc 浏览器）

- 实体指代：YAML summary 确认为 The Browser Company 开发的网页浏览器（`The Browser Company 开发的网页浏览器，以空间、侧栏和标签组织为特色`），与数学、ArcGIS 等同名歧义无关。
- 来源：[arc.net](https://arc.net/)（2026-10-25 抓取，页面即"A farewell to Arc"停运公告）。
- 核到的内容：官方写明 "Arc is sunsetting on December 22, 2026"；理由段落称安全维护成本上升，Dia "was built from the ground up to meet today's security standards"，工程与安全团队转向 Dia；迁移说明：密码、书签、扩展与历史可无缝导入 Dia，Spaces 对应 Dia Profiles，Folders 对应 Dia Tab Groups，"browser features … are free in Dia, and the AI is optional"。时间表：October 22 起新 Arc 账户无法创建、最新版 Arc 增加全量数据导出；November 23 起 iOS/Android 的 Browse for Me 等 AI 功能停用、Arc Search 可继续作为浏览器使用但不能登录或同步标签；December 22 起 macOS 与 Windows 版 Arc 无法访问或使用、账户停用、个人数据 30 天内删除、Arc Search for Android 从 Google Play 下架。
- 页面未单独标注公告发布日期；时间表第一项为 10 月 22 日。正文按"官方于 2026 年 10 月公布"表述（节目 2026-10-22 前后已提及"看新闻"）。
- Dia 官网为 diabrowser.com（dia.yaml 核验于 2026-09-10，本轮未重复核验内容，正文只用站内 Dia 条目互链）。

### android-debug-bridge（ADB）

- 来源：[Android 开发者 adb 文档](https://developer.android.com/tools/adb)（2026-10-25 抓取）、[Android SDK Platform-Tools 发布页](https://developer.android.com/tools/releases/platform-tools)（2026-10-25 抓取）。
- 核到的内容：官方定义 "Android Debug Bridge (adb) is a versatile command-line tool that lets you communicate with a device"；adb 支持安装与调试应用等设备操作，提供 Unix shell；client-server 三组件：client（开发机）、daemon（adbd，设备后台进程）、server（开发机后台，绑定 TCP 5037）；adb 包含于 Android SDK Platform Tools；USB 调试需在开发者选项开启，Android 4.2.2+ 连接时出现 RSA 接受对话框；无线调试章节含 `adb pair ipaddr:port` 配对码流程与 `adb tcpip 5555` + `adb connect` 传统方式；常用 `adb devices` 列出设备。Platform-Tools 页：包含 "primarily adb and fastboot"，"fastboot is needed if you want to unlock your device bootloader and flash it with a new system image"。

### icloud-keychain（iCloud 钥匙串）

- 来源：[Apple 支持页 Set up iCloud Keychain（109016）](https://support.apple.com/en-us/109016)（2026-10-25 抓取，页脚 Published Date: October 01, 2026）、[中文版](https://support.apple.com/zh-cn/109016)（标题"设置 iCloud 钥匙串"，确认中文术语"iCloud 钥匙串"）。
- 核到的内容：定义 "keep your passwords (and other secure information) updated across your devices and shared with the people you trust"；自动填充范围：Safari 与 App 的用户名、密码、通行密钥、信用卡信息与安全码、Wi-Fi 密码；开启前置条件：最新系统版本 + Apple 账户双重认证；开启路径：iPhone/iPad 为 设置 > [名字] > iCloud > "已保存到 iCloud"下点"密码"（iOS 17 或更早点"密码与钥匙串"）> "同步此 [设备]"；Mac 为 系统设置 > [名字] > iCloud > 密码 > "同步此 Mac"；共享密码组需 iOS 17、iPadOS 17、macOS Sonoma 或更高版本；关闭后信息本地保留、不再跨设备更新；端到端加密："Your data is protected with a key that's made from information unique to your device and combined with your device passcode … No one else can access or read this data, either in transit or storage."

### apple-passwords（Passwords / Apple 密码）

- 来源：[Passwords User Guide（Mac）](https://support.apple.com/guide/passwords/welcome/mac)（2026-10-25 抓取，版本含 macOS 27 Golden Gate、macOS Tahoe 26、macOS Sequoia 15）。
- 核到的内容：手册开篇 "See all your passwords, passkeys, and verification codes — Find the password credentials for all your websites and apps, in one place, across all your devices."；目录涵盖：The Passwords app、Different kinds of passwords、Passkeys、Verification codes、Wi-Fi、iCloud Keychain；Find/Create/Change/Remove/Recover a password、password history、Share passwords（个人与群组）、Security Recommendations、FileVault recovery key、Import and export、设置。
- 未核到：应用可用的具体系统版本门槛（iOS 18/macOS Sequoia 引入为广泛报道，但本轮未在官方页面逐字核到，正文不写版本号，只写"内置于系统""iPhone、iPad 与 Mac 上均可使用"——后者由 109016 页在 iPhone/iPad 与 Mac 上分别描述查看密码的步骤支持）。

### leetcode

- 来源：[Wikipedia: LeetCode](https://en.wikipedia.org/wiki/LeetCode)（2026-10-25 抓取）；leetcode.com 直连被 Cloudflare 人机验证拦截，未取得官方页面正文，官方链接仍为 leetcode.com 入口。
- 核到的内容：定义 "an online platform for software coding interview preparation"，提供算法题供学习与练习；2015 年创立于硅谷（创始人 Winston Tang，据维基百科引用来源）；2018 年扩展中国业务，中文站为"力扣"（Likou，leetcode.cn），提供中文题目、解答与论坛；免费与 Premium 双层访问，Premium 含大公司面试曾用题；提交按执行速度与内存评估并与其他提交排名；每周赛与双周赛（各 4 题）、每日一题；支持 Java、Python、JavaScript、C 等多种语言。
- 写入口径：创立年份与创始人按维基百科归属表述（"据维基百科"），不作为官方口径。

### nvidia-dlss（NVIDIA DLSS）

- 来源：[NVIDIA DLSS 官方页](https://www.nvidia.com/en-us/geforce/technologies/dlss/)（2026-10-25 抓取）。
- 核到的内容："DLSS is a revolutionary suite of neural rendering technologies that uses AI to boost FPS, reduce latency, and improve image quality."；"DLSS 4.5 introduced Dynamic Multi Frame Generation and a second-gen transformer model for Super Resolution and Ray Reconstruction. DLSS 5 adds lifelike lighting and materials with 3D-Guided Neural Rendering, which is tuned by developers to bring their artistic vision to life."；组件栏：3D-Guided Neural Rendering、Multi Frame Generation、Dynamic Multi Frame Generation、Frame Generation、Ray Reconstruction、Super Resolution、DLAA；各组件描述：Super Resolution "output higher-resolution frames from a lower-resolution input"；Ray Reconstruction "generate additional pixels for intensive ray-traced scenes"（第二代 transformer 模型）；DLAA "uses the same Super Resolution technology developed for DLSS, constructing a more realistic, high-quality image at native resolution"；3D-Guided Neural Rendering "Uses AI to infuse game scenes with lifelike lighting and materials on GeForce RTX 50 Series GPUs. Developers tune the final output for each game."
- 节目提到的"DLSS 5"与官方技术系列对应，正文按参与者转述与官方定义分别处理。

### php

- 来源：[php.net 首页](https://www.php.net/)（2026-10-25 抓取）、[下载页](https://www.php.net/downloads)（200）、[安全页](https://www.php.net/security/)（200）。
- 核到的内容：官方描述 "A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."；首页展示 "What's new in 8.5"，下载版本 8.5.12、8.4.27、8.3.36、8.2.35；新闻：21 Oct 2026 "Security advisory: Critical remote code execution vulnerabilities, update now — PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35 fix two critical vulnerabilities that can allow unauthenticated remote code execution."；23 Oct 2026 信息性公告：建议 `session.upload_progress.enabled=0`，并提及 GHSA-6wmf-4rv5-p3rp / CVE-2026-109619（10 月 21 日发布）。
- 节目说"影响 2014 年以后所有 PHP 版本""日本首相发声"等为参与者陈述，正文不背书，只注明具体范围以官方公告为准。

## 节目证据

七个实体均出现在第 007 期中文逐字稿（英文逐字稿仅导入至第 005 期，英文正文引用均链接 `/weekly/007/transcript` 并标注 Chinese transcript）。锚点按 `src/data/transcript-paragraph-anchors.ts` 算法（NFC + 空白折叠，sha256(发言人 + "\0" + 归一化段落) 前 20 位，重复段加序号）用等价脚本重算核对：

- arc：[chapter-19 "如果智能与 Token 无限，你想做什么？"](/weekly/007/transcript#chapter-19)。锚点：`quote-f37b682b9a4a9a22a9cc`（橘子，看到 Arc 要停运的新闻、社区呼吁开源）、`quote-893449deb4cd3f718f19`（歸藏，Dia 跟 Arc 长得一模一样）。
- android-debug-bridge：[chapter-09 "重做电视启动器，让旧设备接入 AI"](/weekly/007/transcript#chapter-09)。锚点：`quote-233da04975cb2c57cc85`（歸藏，连上远程 ADB 可在电视上下命令）、`quote-cf038512591ac83330b4`（歸藏，局域网远程 ADB 不需要线、常开机器可随时操作电视）。另见 chapter-20 `quote-ea1132d68220af21d3f1`（歸藏，"直接 ADB 全部插上，刷它 Linux"）。
- icloud-keychain：[chapter-11 "密码管理：随机密码、通行密钥与换设备"](/weekly/007/transcript#chapter-11)。锚点：`quote-53ea85195bdef30afbf9`（杨攀，密码全用 Apple 的 Keychain 自动生成）、`quote-ad6ab8891a5036d5a2e0`（杨攀，Keychain 用了十多年）、`quote-297787e2ecbedfdff50a`（杨攀，形态迭代后叫 Passwords、Mac 上刷指纹填充）。
- apple-passwords：同 chapter-11。锚点：`quote-297787e2ecbedfdff50a`（杨攀，Keychain 迭代后叫 Passwords）、`quote-d3f297855e300e2dad61`（杨攀，手机上 Passwords 非常方便）、`quote-22ba07abd66aaf0b6797`（杨攀，应用内按网站/应用搜索、一个站点多个用户名、可显示密码）。
- leetcode：[chapter-14 "什么值得学：向 AI 提问与真实的人际交流"](/weekly/007/transcript#chapter-14)。锚点：`quote-9a19a6b54ff6c39fdf96`（橘子，转述 V2EX 帖子：放弃刷 LeetCode 改学社交技能）。
- nvidia-dlss：[chapter-06 "AI 游戏破圈：移植、网页游戏与上瘾机制"](/weekly/007/transcript#chapter-06)。锚点：`quote-652b44db3666d879be65`（歸藏，社区给血源 PC 移植版适配 DLSS 5 与帧生成）。
- php：[chapter-10 "安全风险集中爆发：漏洞、证书与补丁"](/weekly/007/transcript#chapter-10)。锚点：`quote-8818089e0a2ebf5631dd`（歸藏，"先是 PHP 的漏洞"）、`quote-c88bd5553628b4089a2b`（歸藏，"2014 年以后所有的 PHP 版本"，参与者说法）、`quote-2d5054ac0e5ac823b624`（歸藏，多国网站受影响、"日本首相自己出来"）、`quote-3f7204a5e2d49777b73a`（歸藏，补丁发布前漏洞被公开、站点紧急下线）。另见 [chapter-12 "从 Key 泄露聊到 AI 时代的安全边界"](/weekly/007/transcript#chapter-12) `quote-176c04d2b89d494b2150`（橘子，以 PHP 问题为例讨论安全检查的边界）。

## 原始采样数据

2026-10-25 百度 `sugrec` 与 Google Firefox 联想接口原始返回保存在 `/tmp/faq-ep7-devtools/`（临时目录，未入库），文件名 `baidu-<种子词>.json`、`ggl-<种子词>.json`。本记录表格已完整转录所用候选；`ggl-leetcode vs leetcode cn` 接口无返回候选。

## 未知项与后续

- arc.net 页面未标注公告发布的具体日期，只给出时间表节点（10 月 22 日、11 月 23 日、12 月 22 日，均为 2026 年）；正文按"官方于 2026 年 10 月公布"处理。
- leetcode.com 被 Cloudflare 拦截未取得官方正文；平台事实以维基百科（归属表述）+ 官方入口链接处理，未写价格数字。
- Apple Passwords 应用的引入版本门槛（iOS 18/macOS Sequoia）未在官方页面逐字核到，正文不写版本号。
- iCloud 钥匙串在 Windows/Chrome 的扩展支持、Dia 的收费与国内可用性、DLSS 5 swapper 等第三方工具话题均无官方可引内容，未写入正文。
- 第 007 期无英文逐字稿；英文页所有节目引用均为中文页面锚点链接并标注 Chinese transcript。
