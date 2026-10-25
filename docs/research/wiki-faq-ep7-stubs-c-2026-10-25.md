# 小米生态产品 Wiki 扩写研究记录（第 007 期存根批次 C）

## 范围与口径

本记录支持 `xiaoai-speakers`、`xiaomi-smartphones`、`xiaomi-tv`、`xiaomi-tv-remotes` 和 `xiaozhi-esp32` 五个产品条目的中英文 Wiki 正文扩写。研究日期为 2026-10-25，面向中文和英文读者。搜索需求线索来自 2026-10-25 的 Google Autocomplete 采样（`suggestqueries.google.com`，`client=firefox`，`hl=zh-CN`，仅记录实际返回）；没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，也不构成效果承诺。

## FAQ 候选与证据

| 页面 | 采样词 | 实际返回的相关联想（节选） | 意图 | FAQ 采用 | 答案来源 |
| --- | --- | --- | --- | --- | --- |
| xiaoai-speakers | `小爱音箱`、`xiaoai speaker` | `小爱音箱app`、`小爱音箱接入大模型`、`小爱音箱刷机`、`小爱音箱 github`、`小爱音箱pro` | 导航、App 入口、改造 | 是（App 入口、控制家电为编辑补充，改造题采用） | [小米 AI 音箱官方产品页](https://www.mi.com/aispeaker)、[xiaozhi-esp32 仓库](https://github.com/78/xiaozhi-esp32) |
| xiaomi-smartphones | `小米手机`、`xiaomi smartphone` | `小米手机官网`、`小米手机价格`、`小米手机安装google play`、`小米手机刷机`、`小米手机在美国能用吗` | 导航、比较、刷机 | 是（产品线/系统两题） | [小米商城全部分类页](https://www.mi.com/shop/category/list) |
| xiaomi-tv | `小米电视`、`xiaomi tv` | `小米电视助手`、`小米电视安装第三方app`、`小米电视刷机`、`小米电视投屏`、`小米电视遥控器`、`小米电视内存不足`（后一词无联想） | 导航、安装、投屏 | 是（系列一题、内存不足一题） | [小米商城全部分类页](https://www.mi.com/shop/category/list)、[小米服务页](https://www.mi.com/service)；节目讨论仅作参与者体验 |
| xiaomi-tv-remotes | `小米电视遥控器`、`小米遥控器`、`xiaomi tv remote` | `小米电视遥控器哪里买`、`小米电视遥控器如何配对`、`小米遥控器2pro`、`小米遥控器app ios`、`小米遥控器 vibe coding`、`xiaomi tv remote not working` | 购买、配对、手机遥控 | 是（系列与 2 Pro 关系、手机遥控、丢失购买） | [小米蓝牙遥控器 2 Pro 官方产品页](https://www.mi.com/xiaomi-bluetooth-remote-2-pro) |
| xiaozhi-esp32 | `小智 ai`、`小智 esp32`、`xiaozhi esp32` | `小智ai github`、`小智ai官网`、`小智ai聊天机器人`、`xiaozhi esp32 server`、`xiaozhi esp32-s3`、`小智ai表情包下载`、`小智ai教学` | 导航、自建服务、硬件 | 是（入口、硬件、同名歧义） | [xiaozhi-esp32 仓库](https://github.com/78/xiaozhi-esp32)与仓库标注的官网 xiaozhi.me |

同名歧义处理：`小智ai` 的联想混入表情包、教学、繁体化等无关内容，xiaozhi-esp32 页面 FAQ 与"易混概念"只保留开源 ESP32 聊天机器人项目含义。`小米遥控器 vibe coding` 关联第 007 期把遥控器当作电视侧 Agent 输入的讨论，不作为 FAQ 问题，只在正文"节目中的讨论"体现。

## 事实核验（2026-10-25）

- [小米 AI 音箱官方产品页](https://www.mi.com/aispeaker)：页面为"小米 AI 音箱"产品页，描述为可通过"小爱同学"语音助手播放音乐、查询信息、控制智能设备（举例包括空气净化器、灯、扫地机器人、空调、小米电视）的智能音箱，网络音箱与蓝牙音箱，六环形麦克风波束成型，支持 DLNA 与双频 Wi-Fi，需搭配"小爱音箱 App"（安卓与苹果系统）使用；页面另提及 AI 训练计划与开放平台技能。页面注明内容合作方（QQ音乐、喜马拉雅等）内容可能调整。页面价格等时效信息不进入正文。
- [小米商城全部分类页](https://www.mi.com/shop/category/list)：左侧分类"手机"下列出 Xiaomi 数字旗舰、MIX、Civi 及 REDMI K/Turbo/Note/数字系列；"电视"下列出 RGB-Mini LED、Mini LED 电视及 REDMI MAX、A Pro 等；"耳机/音箱"下列出小爱音箱、智能家庭屏等。用于佐证两条产品线的系列划分与官方入口，不复制具体型号与价格。
- [小米蓝牙遥控器 2 Pro 官方产品页](https://www.mi.com/xiaomi-bluetooth-remote-2-pro)：页面可达，产品为小米蓝牙遥控器 2 Pro。语音、NFC 投屏、USB-C 充电的官方描述沿用 2026-10-08 批次对该页的核验（见 `docs/research/wiki-faq-ep5-products-*` 与 `xiaomi-bluetooth-remote` 正文）；本次复核页面购买信息正常。页面兼容性说明提到部分手机系列与 98 寸/100 寸以上大电视。
- [xiaozhi-esp32 仓库](https://github.com/78/xiaozhi-esp32)：GitHub 用户 78 的开源项目，README 自述为"一个基于 MCP 的聊天机器人"，官网 xiaozhi.me（2026-10-25 经 HTTP 检查可达）。支持离线语音唤醒（ESP-SR，可自定义唤醒词）、流式 ASR + LLM + TTS 与实时语音模型，支持 WebSocket 或 MQTT + UDP 传输；列出的芯片包括 ESP32、ESP32-C3、ESP32-C5、ESP32-C6、ESP32-S3、ESP32-P4，开发板含 Espressif ESP32-S3-BOX-3、M5Stack CoreS3、M5Stack AtomS3R、Waveshare、LILYGO、SenseCAP Watcher 等；许可证 MIT；README 另列出 speaker recognition、屏幕表情、摄像头输入、设备端/云端 MCP 控制等能力。Star、fork 等统计数字会变化，不写入正文。
- [小米服务页](https://www.mi.com/service)：2026-10-25 检查可达（HTTP 200），作为小米电视售后问题的官方入口指针。

## 未核验、不写入正文的主张

- 各产品线具体在售型号、价格、销量：不写。
- "小爱音箱接入大模型"的官方进度：联想词存在，但未找到可引用的官方说明页，不作为事实写入；只在研究记录留痕。
- 旧小爱音箱打开 SSH 的具体操作方法：逐字稿该句含省略（原文以"________"留空），不还原、不写成教程。
- 小米电视系统更新导致内存不足的归因：仅杨攀个人经验与歸藏的归因，不作为产品事实。
- 把旧音箱刷成小智的可行性细节：节目设想与社区玩法，非官方路径，正文只做定位说明。

## 节目证据（第 007 期）

本地仅有第 007 期中文逐字稿，英文正文引用时注明 Chinese transcript，不生成英文逐字稿链接。

- chapter-09"重做电视启动器，让旧设备接入 AI"：杨攀描述自家小米电视[频繁提示内存不足](/weekly/007/transcript#quote-543b8841ddb45ddb6988)；歸藏谈到[电视启动器重装风潮与出厂启动器的操作繁杂](/weekly/007/transcript#quote-a53bd8c60568c9a85a1e)，并设想把旧电视[当作客厅大屏与 AI 交互、用小米遥控器作输入](/weekly/007/transcript#quote-cdd4c1004ce17e7288a4)。
- chapter-20"Omarchy、旧手机与重写软件的可能性"：向阳乔木[提到小米手机也被刷过操作系统](/weekly/007/transcript#quote-787862fb4ac5ff077661)；橘子[提到有人发现小爱音箱可打开 SSH](/weekly/007/transcript#quote-559e412135b7d9ab8e4b)，歸藏补充[这一隐蔽入口是 AI 发现的](/weekly/007/transcript#quote-18ee1d8a566141648dc4)；杨攀提出[旧智能音箱的软件可以重写、"改成小智也行"](/weekly/007/transcript#quote-72707cd66b812d6566ec)。

段落锚点由 `src/data/transcript-paragraph-anchors.ts` 算法生成本地脚本复核（发言人 ID + 归一化原文 SHA-256 前 20 位）。

## 正文分工约定

- 小米品牌正文（`brands/xiaomi`）讲公司与产品矩阵，hyperos 讲操作系统，hyperxiaoai 讲超级小爱助手，mimo 讲模型；本批五个条目只写各自硬件/软件产品线，互不越界。
- `xiaoai-speakers`（音箱硬件）与 `hyperxiaoai`（语音助手软件）分开；`xiaozhi-esp32`（开源软件项目）与 `esp32`（乐鑫芯片）、`m5stack`（开发板生态）分开；`xiaomi-tv-remotes`（遥控器系列）与 `xiaomi-bluetooth-remote`（蓝牙遥控器 2 Pro 具体型号）分开。
- 五个条目之间的分工：音箱 / 手机 / 电视 / 遥控器各管一条产品线；xiaozhi-esp32 是运行在这些旧硬件上的开源软件选项，仅在"易混概念"与"节目中的讨论"交叉引用。
