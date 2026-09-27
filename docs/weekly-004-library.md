# Weekly #004 资料库基础条目

新增条目只包含中英文简介、分类、来源与必要关系，详情页由现有模板生成；尚无新增长篇 Wiki 正文。

结构化资料位于 `src/content/data/`。完整正文可放入 `src/content/prose/<集合>/<id>.wiki.zh-Hans.md` 与 `.wiki.en.md`，沿用现有 frontmatter。

## 命名与链接

- `muse`：Muse 模型家族；Muse Spark 为家族中的具体模型，Spark 仅作本期简称。
- `muse-agent`：同名的个人智能体产品。#004 中的 Muse 链接此页。
- `muse-charm`：与个人智能体交互的硬件。
- 正文的曾明、杨立坤分别按本期语境链接曾鸣、Yann LeCun；原文保留。
- Indigo、卡比的具体公开身份尚未确认，保留纯文本；To-Do、Agent OS、VFX 等通用术语不作为品牌或产品条目。
- 本期品牌/产品/人物关联由 `next-token-weekly--004.yaml` 的 `mentions` 保存，正文消歧规则位于 `src/content/transcript-rules/next-token-weekly--004.json`。

## 新增条目

| 类型 | 名称 | 数据文件 |
| --- | --- | --- |
| 品牌 | Cloudflare | [cloudflare](../src/content/data/brands/cloudflare.yaml) |
| 品牌 | 极客公园 | [geekpark](../src/content/data/brands/geekpark.yaml) |
| 品牌 | 徕卡 | [leica](../src/content/data/brands/leica.yaml) |
| 品牌 | Adobe | [adobe](../src/content/data/brands/adobe.yaml) |
| 产品 | Muse 个人智能体 | [muse-agent](../src/content/data/products/muse-agent.yaml) |
| 产品 | Muse Charm | [muse-charm](../src/content/data/products/muse-charm.yaml) |
| 产品 | Harvey | [harvey](../src/content/data/products/harvey.yaml) |
| 产品 | Fireworks AI | [fireworks-ai](../src/content/data/products/fireworks-ai.yaml) |
| 产品 | Gmail | [gmail](../src/content/data/products/gmail.yaml) |
| 产品 | Google 日历 | [google-calendar](../src/content/data/products/google-calendar.yaml) |
| 产品 | Facebook | [facebook](../src/content/data/products/facebook.yaml) |
| 产品 | Instagram | [instagram](../src/content/data/products/instagram.yaml) |
| 产品 | Threads | [threads](../src/content/data/products/threads.yaml) |
| 产品 | WhatsApp | [whatsapp](../src/content/data/products/whatsapp.yaml) |
| 产品 | Shopify | [shopify](../src/content/data/products/shopify.yaml) |
| 产品 | Keep | [keep](../src/content/data/products/keep.yaml) |
| 产品 | 滴答清单 | [ticktick](../src/content/data/products/ticktick.yaml) |
| 产品 | Typora | [typora](../src/content/data/products/typora.yaml) |
| 产品 | YouMind | [youmind](../src/content/data/products/youmind.yaml) |
| 产品 | 泰拉瑞亚 | [terraria](../src/content/data/products/terraria.yaml) |
| 产品 | 灾厄模组 | [calamity-mod](../src/content/data/products/calamity-mod.yaml) |
| 产品 | 我的世界 | [minecraft](../src/content/data/products/minecraft.yaml) |
| 产品 | 真·三国无双 | [dynasty-warriors](../src/content/data/products/dynasty-warriors.yaml) |
| 产品 | Nintendo Switch | [nintendo-switch](../src/content/data/products/nintendo-switch.yaml) |
| 产品 | 拓麻歌子 | [tamagotchi](../src/content/data/products/tamagotchi.yaml) |
| 产品 | After Effects | [after-effects](../src/content/data/products/after-effects.yaml) |
| 产品 | Adobe Premiere | [adobe-premiere](../src/content/data/products/adobe-premiere.yaml) |
| 产品 | Microsoft Office | [microsoft-office](../src/content/data/products/microsoft-office.yaml) |
| 产品 | Finder | [finder](../src/content/data/products/finder.yaml) |
| 产品 | MacBook | [macbook](../src/content/data/products/macbook.yaml) |
| 产品 | Git | [git](../src/content/data/products/git.yaml) |
| 产品 | Bash | [bash](../src/content/data/products/bash.yaml) |
| 产品 | Python | [python](../src/content/data/products/python.yaml) |
| 产品 | Sora | [sora](../src/content/data/products/sora.yaml) |
| 产品 | Cloudflare Workers | [cloudflare-workers](../src/content/data/products/cloudflare-workers.yaml) |
| 人物 | Alexandr Wang | [alexandr-wang](../src/content/data/people/alexandr-wang.yaml) |
| 人物 | 杨立昆 | [yann-lecun](../src/content/data/people/yann-lecun.yaml) |
| 人物 | 张小珺 | [zhang-xiaojun](../src/content/data/people/zhang-xiaojun.yaml) |
| 人物 | 曾鸣 | [zeng-ming](../src/content/data/people/zeng-ming.yaml) |
| 人物 | 玉伯 | [yubo](../src/content/data/people/yubo.yaml) |
| 人物 | 张一鸣 | [zhang-yiming](../src/content/data/people/zhang-yiming.yaml) |
| 人物 | AK | [akhaliq](../src/content/data/people/akhaliq.yaml) |

004 收录调整：移除灾厄、Git、Bash；新增黑镜（剧集）、飞猪、美团、亚马逊（平台）和海辛（人物）。GPT 6 Sol / 6 Sol 作为完整名称链接 GPT 模型家族。

最终名称对应：iPhone 18 Pro / iPhone 18 Pro Max → iPhone；Grok 4.7 → Grok；本期 AK → Andrej Karpathy（https://karpathy.ai/），保留原话缩写。新增 Apple WWDC 活动品牌和《赛博朋克 2077》游戏；不收录 Finder、Worker、Python。
