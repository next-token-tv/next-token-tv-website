# 第七期博客选题

十一篇中文文章于 2026 年 10 月 26 日审核通过、尚未发布，均关联 `next-token-weekly--007`，以 `approvedAt` 记录审核通过日期，保留 `draft` 状态和空缺的发布日期。写法遵循[博客编辑规范](blog-editorial.zh-Hans.md)，状态遵循[内容契约](blog.md)。

节目依据是已提交、已发布的中文文字稿，来源 revision 为 `d5a77ffb6787645182bc1eda8c74213bbac989df`，原文 SHA-256 为 `2cfdc2ede15b5cbeb3f3d84ffb2fef015e81892e885d4667ceab3f1b784c7c7b`。节目案例以 2026 年 10 月 23 日录制时为背景；外部文档查阅日期为 2026 年 10 月 26 日。

| 文章 | 节目切入点 | 延展问题 | 资料与验证边界 |
| --- | --- | --- | --- |
| [模型回复很快，视频怎么还没导出](../src/content/prose/blog/fast-models-and-useful-results.md) | 02 章即时响应、PDF 朗读；05 章视频包装等待 | 首字、可用结果与完成时间分别怎样影响交互 | Anthropic 延迟文档；节目体验不是统一性能评测；二十分钟成本分解为假设算例 |
| [给 Agent 接上搜索之后，怎么核对答案](../src/content/prose/blog/search-api-as-agent-evidence.md) | 03 章把搜索 API 包成 Skill | 检索覆盖、正文读取、冲突证据与结束条件 | DeepSeek Search & Fetch 官方说明；未执行付费 API 测试，不给中文搜索排名，不复述猜测价格或抓取实现 |
| [Agent 来过你的网站，为什么访客统计里看不到](../src/content/prose/blog/agent-traffic-beyond-pageviews.md) | 04 章合并日志与页面埋点的尝试 | 请求、页面事件和推荐访问怎样分开统计 | Umami 与 Cloudflare 文档；明确已有工具，不把节目中的行业占比猜测写成事实 |
| [AI 游戏的两笔成本：制作和运行](../src/content/prose/blog/ai-games-production-and-running-costs.md) | 06–07 章网页游戏体验与可重复消费作品 | 制作投入、运行调用与持续运营分别怎样计费 | MDN 网页游戏发布和技术文档；不核定 PokéBonk 的 AI 制作占比、日活、营收或开发周期，不纳入未核实的主机移植新闻 |
| [旧电视的新用途，从一个更简单的首页开始](../src/content/prose/blog/old-tv-as-agent-terminal.md) | 09 章启动器改造与 Agent 入口 | 导航、终端分工和设备控制的不同边界 | Android TV 导航与 ADB 文档；区分已接入 Codex、在做的 Grok Bot 入口和早报设想；不恢复已消音口令 |
| [跟 AI 读架构，从一个后台任务开始](../src/content/prose/blog/learning-architecture-with-ai.md) | 16 章 REA 分析项目并沉淀经验 | 如何从结构说明转向有条件的设计判断 | Nygard 与 Fowler 的 ADR 原始文章；阅读练习为编辑建议，没有声称运行实验或测得收益 |
| [Agent 还在执行，新的要求该怎样生效](../src/content/prose/blog/steering-running-agent.md) | 17 章从等待结束转向执行中补充要求 | 接收要求、调整执行与处理过期结果如何区分 | Temporal 消息语义作为设计参照，不推断节目中产品的底层实现；海报案例为假设 |
| [让 Slack 里漏掉的好点子重新被看见](../src/content/prose/blog/slack-ideas-back-to-context.md) | 18 章回看产品讨论、索取消息链接 | 怎样保留讨论状态，让检索结果支持补读与跟进 | Slack 官方搜索文档；不将消息计数转成绩效排名，没有声称测得团队效率收益 |
| [让 AI 推荐技能以后，挑一项练起来](../src/content/prose/blog/ai-learning-beyond-skill-lists.md) | 14 章筛选低投入、可复用且每周使用的技能 | 怎样把推荐清单转成练习、反馈与再次使用 | Dunlosky 等 2013 年学习方法综述；不把早期学习研究当作生成式 AI 产品效果证据；正则练习为建议 |
| [不用记密码以后，换设备靠什么找回账号](../src/content/prose/blog/passkeys-and-device-recovery.md) | 11 章密码管理器、通行密钥与换设备顾虑 | 凭据存储、同步和失去设备后的恢复怎样区分 | FIDO、Apple、Microsoft 官方文档；不从密码格式推断网站存储实现，不笼统承诺跨系统自动迁移 |
| [把几百期播客变成资料库，难点在转写之后](../src/content/prose/blog/podcast-archive-as-research-library.md) | 18 章官方字幕、补做转写与中文网站整理 | 来源层次、检索上下文、缺失记录和更正如何支持引用 | Whisper 官方模型说明；不核定案例的实际采集数量与覆盖率，不执行或修改转写 |

已有的个人网站、遥控器输入、ESP32 终端、目标表达和收纳价值文章分别覆盖相近话题，本批不重复改写。上述十一篇的节目引用使用 `getParagraphAnchorIds` 生成的稳定段落锚点。外部来源与节目材料分别列在各篇“相关资料”中。
