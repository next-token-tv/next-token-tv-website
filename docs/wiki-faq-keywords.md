# Wiki FAQ 关键词与效果口径

## 范围与证据

本文的 2026-09-17 选题表覆盖 DeepSeek 产品、DeepSeek 公司、DHH 人物三个样板。后续六个 AI 产品的需求与问题映射见[独立研究记录](research/wiki-faq-ai-products-2026-09-17.md)；下述效果口径通用于各批次。默认面向 Google 中文及英文；尚未收到目标搜索市场的进一步确认。当前工具中没有可用的站点 Search Console 或搜索量服务。

[公开搜索联想原始采样](research/wiki-faq-search-suggestions-2026-09-17.json)记录 Google autocomplete 返回的种子词、语言参数、候选词与来源 URL。它属于实际采样的需求线索，不是搜索量、难度、排名或站点效果。语言由 `hl` 指定，地理位置未受控；联想词顺序不作为热度排名。

范围、发现、变体、意图分类、评分、问答适用性、主题归组和交付对应以下表格。搜索量、关键词难度、机会分、实际曝光、点击、CTR 和命中率均为 **N/A**，不以联想词数量或出现顺序代替这些指标。

## 关键词到问题的映射

优先级是基于相关性与可回答性的编辑排序，不是量化机会分。

| 优先级 | 页面与主题 | 实际采样词例 | 意图 | 对应 FAQ | 需求证据范围 |
| --- | --- | --- | --- | --- | --- |
| 1 | DeepSeek 产品：访问入口 | `deepseek网页版`、`deepseek官网`、`deepseek 开放平台` | 导航 | 官网和网页版入口在哪里？ | 中文联想 |
| 1 | DeepSeek 产品：API 价格 | `deepseek怎么收费`、`deepseek api pricing`、`deepseek api free` | 商业调研／信息 | API 免费吗，怎么收费？ | 中英文联想 |
| 1 | DeepSeek 产品：API 接入 | `deepseek怎么买api`、`deepseek api key`、`deepseek api url` | 信息／导航 | API Key 在哪里申请，怎么接入？ | 中英文联想 |
| 2 | DeepSeek 产品：模型选择 | `deepseek v4`、`deepseek v4 pro`、`deepseek api models` | 信息 | API 应填写哪个模型名称？ | 中英文联想；具体问题为编辑归纳 |
| 1 | DeepSeek 公司：名称 | `deepseek公司介绍`、`deepseek company name` | 信息 | 什么公司，中文全称是什么？ | 中英文联想 |
| 2 | DeepSeek 公司：所在地 | `deepseek公司在哪`、`deepseek company country`、`deepseek company location` | 信息 | 哪个国家的公司，在哪里成立？ | 中英文联想；回答只覆盖有来源的成立地 |
| 2 | DeepSeek 公司：官网 | `deepseek公司官网` | 导航 | 公司官网在哪里？ | 中文联想；英文为对应本地化，并非独立热度证明 |
| 2 | DHH：身份 | `david heinemeier hansson` | 信息 | David Heinemeier Hansson 是谁？ | 英文全名联想；中文问题为本地化，中文热度未验证 |
| 2 | DHH：著作 | `david heinemeier hansson books`、`jason fried and david heinemeier hansson books` | 信息 | DHH 写过哪些书？ | 英文联想；中文热度未验证 |
| 3 | DHH：赛车经历 | `david heinemeier hansson le mans` | 信息 | DHH 参加过勒芒吗？ | 英文联想；中文热度未验证 |

三个优先机会分别是：产品 API 入口与价格、公司名称与所在地、人物全名与著作。每个问题的正文先给简短直接回答，再链接可核验来源；产品问题留在产品页，公司背景留在公司页，人物经历留在人物页。API 教程等长问题超出一段回答的部分导向官方文档，不在 FAQ 中堆砌关键词。

## 暂不采用的候选

- 中文 `DHH` 联想主要指向其他词义，英文 `dhh` 也出现 DHHS 等机构名称；不把这些结果计入人物需求。`DHH 程序员` 本次返回空列表，不等于该词搜索量为零。
- 身家、公司估值、上市与股票、公司人数等虽有联想线索，但缺少本次可充分核验且适合本页的资料，暂不编写。
- “节目体验是不是评测”“是否参加本站节目”等问题没有本次需求采样支撑，不再占用 FAQ；必要的归属说明保留在节目讨论正文。
- 候选中的规避限制等词不符合本页的产品介绍用途，不因出现于联想列表而收录。

## 回答来源

- [DeepSeek 官网](https://www.deepseek.com/)：官方产品入口及中文公司全称。
- [DeepSeek API 入门](https://api-docs.deepseek.com/)：API Key、API 地址和模型参数。
- [DeepSeek 模型与价格](https://api-docs.deepseek.com/quick_start/pricing/)：计费单位、模型 ID 与扣费规则；不在 FAQ 固定复制易变价格。
- [DeepSeek 用户协议](https://cdn.deepseek.com/policies/zh-CN/deepseek-terms-of-use.html)：运营主体。
- [美联社公司介绍](https://www.ap.org/news-highlights/spotlights/2025/what-is-deepseek-the-chinese-ai-company-upending-the-stock-market/)：2023 年在杭州成立的背景。
- [DHH 个人网站](https://dhh.dk/)：身份、合著作品及勒芒组别冠军经历。

## 命中与点击的衡量

当前尚未发布本轮 FAQ，也没有站点搜索数据，因此不能报告实际命中率。

后续使用 Search Console 的日期、页面、查询词、国家、设备、曝光、点击和平均位置数据；按上表主题归组，同一查询优先归入最具体的主题，避免重复计数。中英文、不同国家与设备分别查看。

- **目标查询覆盖率（自定义指标）**：有至少一次曝光的目标查询主题数 ÷ 目标查询主题总数。它仅表明查询与页面产生过搜索曝光，不代表排名进入首页或用户满意度。
- **目标查询点击率**：这些主题的总点击 ÷ 总曝光，采用汇总比值，不平均各查询的 CTR。曝光为零时为 N/A。
- 同时报告曝光、点击、平均位置和每个主题的样本量，避免单看比例。
- 以发布日为界，比较前后各 28 天，并保留日期、国家、设备筛选条件。新页面无前期数据时只建立基线，不声称增长。
- Search Console 的匿名查询与行数限制会造成缺失；覆盖率只针对可见查询样本，不视作全部搜索需求。
- Search Console 是页面／查询层面的数据，不能直接归因某一次点击来自 FAQ。FAQ 点击效果与 AI 引用效果分别处理；没有 AI 引用观测数据时，GEO 命中率仍为 N/A。

这些指标不包含自动监控或定期任务；获取实际数据后再调整问题优先级。
