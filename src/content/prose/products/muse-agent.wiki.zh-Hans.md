---
entityType: product
entity: muse-agent
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Muse 个人智能体：Meta 的 C 端 AI Agent、连接器与安全边界｜Next Token Wiki'
seoDescription: '了解 Meta 于 2026 年 9 月发布的个人 AI 智能体 Muse：功能、Muse Secure VM、连接器与支付方式，以及第 004 期节目中的讨论。'
---

## Muse 个人智能体

Muse（Muse Personal Agent，Muse 个人智能体）是 Meta 推出的个人 AI 智能体，官方新闻稿将其定位为"面向所有人的个人 AI 智能体"，强调它不只是回答问题，而是替用户完成实际任务。官方新闻稿显示，Meta 于 2026 年 9 月 8 日发布 Muse，首批在美国通过 iOS、Android 应用和 [muse.ai](https://muse.ai/) 网站推出。官方页面列出的能力包括处理邮件、预订行程、填写表单、在浏览器中操作，以及把长期目标拆解成计划并在应用关闭后继续执行；对付款等敏感操作，Muse 会先征求用户批准。模型方面，官方称 Muse 由 Muse Spark 驱动。功能、连接器与可用地区会变化，使用前应以 [Meta 官方新闻稿](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)为准。

## 使用方式与边界

Muse 的使用入口是 iOS、Android 应用和 muse.ai 网站，官方新闻稿还说明 Muse 可以直接在 WhatsApp 中工作。按照官方介绍，Muse 运行在一个名为 Muse Secure VM 的专属云虚拟机中，代理和数据都放在这个环境里；另有名为 Sentinel 的审查代理在系统层面审批对外联网行为。支付通过 Stripe 提供的 Link 完成，官方称 Muse 是第一个受 Link 购买保护覆盖的代理，Shop Pay 与 1Password 支持在官方新闻稿发布时尚未上线。

连接器决定 Muse 能替你操作哪些应用和服务。2026 年 9 月 24 日 Meta Connect 上，官方宣布新增 Walmart、Best Buy、PayPal、Expedia、Instacart、Notion、GitHub、Box 等一批连接器，并表示 Muse 将在之后几个月内登陆 Meta AI 眼镜，还会拥有自己的电子邮箱地址。想了解 Meta 同期公布的便携语音设备，可以阅读 [Muse Charm](/wiki/products/muse-charm)。

计费方面，官方新闻稿的表述是对大多数需求免费，重度使用提供订阅方案；现行方案与价格以[官方渠道](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)为准。隐私控制方面，官方介绍称凭据以 Muse 可使用但看不到的方式保存，用户可以随时更改或撤销各应用的访问权限，可以选择不让交互数据用于训练，官方还预告了由用户持有密钥的 Muse Confidential VM。

Muse 与 OpenClaw、Grok Bot 同属个人 Agent 方向，但定位不同：Muse 面向普通消费者，把连接、执行和支付都收进官方托管的环境里；OpenClaw 这类开放框架则需要用户自己提供运行环境。节目参与者对这一差异的讨论见下节。

## 节目中的讨论

第 004 期有多个章节集中讨论 Muse。在"Muse：面向普通人的 Personal Agent"章节，[歸藏认为 Meta 找到了一个很适合它的赛道：做面向不那么懂 AI 的用户的 Personal Agent](/weekly/004/transcript#quote-7abc5963e7b3fd15cdcf)，[并提到小扎让 Muse 读取 Instagram、Facebook 和 Threads 的信息](/weekly/004/transcript#quote-dbed584c312b76ce1677)；[杨攀则把 Muse 类比为"新的 Store"](/weekly/004/transcript#quote-adbb878d9135f6dd9e44)。[向阳乔木对比了自己使用 Muse 与 Grok Bot 的感受，认为 Muse 更简单、更易用、更没那么极客](/weekly/004/transcript#quote-6a055fdd454af94fe13d)，并[以 Idea 页签里"信用卡被多扣钱找回来"等美国生活场景说明其操作成本之低](/weekly/004/transcript#quote-44c5ae002498a91ee71f)。网上关于"Muse 抄袭 OpenClaw"的争议也被提到，这是杨攀转述的舆论观点，节目未给出定论。

在"AI 产品经理与人的使用体验"章节，[歸藏从体验角度分析：Personal Agent 最怕让用户觉得没解决问题反而添麻烦](/weekly/004/transcript#quote-bbfb96fd47df6fe8bdcb)；[他描述 Muse 只用两个进程——一个负责沟通派活，一个在后台执行](/weekly/004/transcript#quote-2b98f3f5a368f0bd0c72)，[并在侧边小条里展示进度，让人一直可以自然地说话](/weekly/004/transcript#quote-81e4a39f6370ebb5105d)。在"开放生态、资源与商业闭环"章节，[歸藏提到 Muse 一反常态地极端开放，极客可以把工作流融进去，手机 App 上甚至能查看并下载云端虚拟机里的文件](/weekly/004/transcript#quote-2ea181054d175801f623)；[橘子则称其为真正到 C 端的第一个 Agent](/weekly/004/transcript#quote-5045c1ee684eaac2b0ae)，[并认为 Muse 的成本任何公司都打不平](/weekly/004/transcript#quote-130cdc0fdf9ff1ca32cc)。同一章节还谈到亚马逊封禁 Muse 代购下单一事，详见 [Amazon](/wiki/products/amazon) 的节目讨论一节。

这些都是节目参与者基于个人使用体验和公开报道的观点与转述，不是对产品能力的独立测评，也不代表官方结论。可阅读[第 004 期对应章节](/weekly/004/transcript#chapter-06)。

## 常见问题

### Muse 是什么，是哪家公司的产品？

Muse 是 Meta 于 2026 年 9 月 8 日发布的个人 AI 智能体，能连接应用和服务并替用户执行邮件、预订、比价下单等任务。官方介绍见 [Meta 新闻稿](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)。

### Muse 在哪里可以用，怎么下载？

官方新闻稿称首批在美国通过 iOS、Android 应用和 [muse.ai](https://muse.ai/) 网站推出，之后计划支持 AI 眼镜。Muse 也可以直接在 WhatsApp 中使用。是否有本地化版本、是否需要邀请码，以官方渠道和所在地区应用商店的实际情况为准。

### Muse 免费吗，怎么收费？

官方新闻稿的表述是对大多数需求免费，重度使用提供订阅方案。具体方案划分与价格属于时效信息，请以官方页面为准。

### Muse 和 OpenClaw、Grok Bot 有什么区别？

三者都属个人 Agent，但 Muse 由 Meta 官方托管运行环境（Muse Secure VM）和支付（Stripe Link），面向不关心模型与技术细节的普通用户；OpenClaw 需要用户自己提供运行环境，Grok Bot 的定位可阅读 [Grok Bot](/wiki/products/grok-bot)。这一比较来自节目参与者的讨论，各家产品的实际能力以其官方文档为准。

## 来源

- [Meta 新闻稿：Introducing Muse, a Personal AI Agent](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)
- [Meta 新闻稿：The Biggest News From Connect 2026](https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/)
