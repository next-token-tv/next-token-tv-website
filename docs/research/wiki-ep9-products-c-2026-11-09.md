# 第 009 期产品 Wiki 批次 C（2026-11-09）

负责实体：`qq-show`、`fanqie-novel`、`unreal-engine`、`black-myth-wukong`、`renoise-ai`、`onimusha`。逐字稿来源：`src/content/imported/transcripts/next-token-weekly--009.zh-Hans.json`（仅中文，无英文逐字稿）。

## 节目讨论定位

| 实体 | 章节 | 讨论内容 | 引用锚点 |
| --- | --- | --- | --- |
| qq-show | chapter-01「Harness 与插件生态」 | 橘子把换皮肤/桌宠插件比作 QQ 秀与 QQ 空间，强调对年轻人的情绪价值；杨攀调侃该类比显老 | `quote-76ebe5300ef417e2ec30`（orange）、`quote-1fc2248acd728bb91240`（yangpan） |
| renoise-ai | chapter-01 | 向阳乔木称"小明他们的 Renoise"底层是 Hyperframes、聚合模型做成 MCP；橘子评"做同款"比裸工具更本质 | `quote-2f16bb6bca60bb7c0c9f`（xiangyang-qiaomu）、`quote-adcafb397075c8d00fed`（orange） |
| unreal-engine | chapter-04、chapter-05 | 第四章：歸藏谈"虚幻 5 优化差"印象并以影之刃零光照烘焙为反例、橘子提"新的 Unreal 优化 Web"；第五章：歸藏转述 Epic CEO AI-First 与 UE 5.6 网页适配说法 | `quote-36ca95d72bfc25ea5c53`、`quote-a2256f66f19510c953bc`（ch04）；`quote-db88b9b4fb6b7bb1bbe5`、`quote-3f77d98fdd8d2ceecb83`（ch05，均 guizang） |
| black-myth-wukong | chapter-04 | 杨攀转述"黑神话悟空在影之刃零前面就是个渣渣"；歸藏补充地图与内容量差距 | `quote-42832bbfca48beedf18c`（yangpan）、`quote-1ea2efe8a666503843a4`（guizang） |
| onimusha | chapter-04 | 歸藏以鬼武者为参照比较影之刃零体量（"体量我感觉是鬼武者的 10 来倍"） | `quote-3a3e3efffc44ae92110b`（guizang） |
| fanqie-novel | chapter-04 | 歸藏转述让 DeepSeek 调研起点与番茄的结果：审核审不过来、一天上架几十万本、不卡上架卡分发 | `quote-536670957ad5f3f7beb4`、`quote-dd8bc8eae33f18b3c5bf`（guizang，同 turn 两段） |

锚点用 `src/data/transcript-paragraph-anchors.ts` 同算法（speakerId ?? speaker、NFC、`\s+`→空格、sha256 前 20 位、重复 -N）独立复算，并用第 008 期四个已知锚点（intel 页引用）验证脚本正确。全部锚点按逐字稿原文复核。

## 事实核验记录

### qq-show

- 身份：腾讯 2003 年推出的 QQ 虚拟形象装扮服务。来源为 YAML 提供的新浪科技 2003-02-19 报道（本次抓取原文确认：Q 币购买虚拟服饰/场景/形象、头像悬停展示、QQ 社区/交友/聊天室展示、3 月 1 日前测试期免费）。
- 未核验：QQ 秀现在的运营状态；正文不写现状断言。QQ 空间上线年份未核验，未写入正文。

### fanqie-novel

- 身份：字节跳动运营的网络文学平台，2019 年 11 月上线，免费阅读 + 广告；2022 年增加原创投入并新增付费收益；2023 年起版权开发。来源：中文维基百科摘要（REST API 抓取）。
- 节目中"一天上架几十万本""审核审不过来"按参与者转述处理，正文明确非平台官方数据。
- 起点归属（阅文集团）未核验，未写入正文。

### unreal-engine

- 身份：Epic Games 引擎，1998 年随《Unreal》诞生；UE5 于 2020 年 5 月公布、2022 年 4 月发布，含 Nanite/Lumen。来源：英文维基百科 REST 摘要（Unreal Engine、Unreal Engine 5）。
- 节目中 Epic CEO"AI-First"、UE 5.6 WebGL/Three.js 适配均为歸藏转述，正文注明以 Epic 官方公告为准；未查证 Epic 官方原文。

### black-myth-wukong

- 身份：游戏科学 ARPG，2024-08-20 发售 Windows/PS5，2025-08-20 登陆 Xbox Series X/S；新华社称中国首款"3A 游戏"。来源：中文维基百科 REST 摘要 + YAML 官方链接。
- 未核验：具体销量数字（如三天 1000 万份）；未写入正文。节目中的影之刃零比较按玩家评价转述处理。

### renoise-ai

- 身份：renoise.ai 为面向营销与创作者的 AI 视频与图像创作套件，聚合多家第三方生成模型，含 Renoise Agent、MCP 接口、趋势模板与场景分类入口。来源：本次抓取 renoise.ai 首页全文（导航含 MCP、Agent、Templates、Documentation、About Us）。
- 重名澄清：renoise.com 为 tracker 式数字音频工作站（DAW），本次抓取首页确认（"Digital Audio Workstation … music-tracker based approach"）。两者无关，正文明确区分。
- 节目中"小明他们的"为向阳乔木原话，按参与者转述处理；团队背景未独立核验。

### onimusha

- 身份：卡普空动作游戏系列，首作《鬼武者》（Warlords）2001 年 PS2。来源：英文维基百科 REST 摘要（Onimusha、Onimusha: Warlords、Onimusha: Way of the Sword）。
- 新作核验：逐字稿"鬼武者也卖得很好"指新作——Onimusha: Way of the Sword 于 2026-09-04 发售（PS5/Xbox Series X/S/Windows/Switch 2），是 2006 年《新鬼武者》以来首部正传，首发日 100 万份；系列累计超 1000 万份（截至 2026 年 9 月）。正文销量数字放 FAQ 并带"截至"锚定，注明以 Capcom 财报为准。

## FAQ 需求线索说明

本批未接入搜索数据服务，无 Search Console 与联想原始数据留存；FAQ 问题为编辑补充（基于产品类型常见问法：是什么/什么时候/谁做的/价格/平台/混淆对象/节目语境），未伪装成热门证据。答案均落到已核验来源，时效性内容（模型列表、费率、当前版本）一律指向官方实时页面。

## 未知项与遗留

- `/weekly/009/transcript` 页面依赖第 009 期导入数据（`src/content/data/episodes/next-token-weekly--009.yaml` 已存在）；构建后需抽查章节与引用锚点跳转。
- qq-show 现状、起点母公司、Epic CEO 原帖、影之刃零发售信息：均未核验，未进入正文。
- 产品 YAML 的 `lastVerifiedAt` 未改动。
