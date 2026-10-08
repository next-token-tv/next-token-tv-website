# 第 005 期产品 Wiki FAQ 研究记录（A 组：dots、airbnb、descript）

## 范围与口径

本记录支持第 005 期（2026 年国庆档）讨论重心产品的 Wiki 正文：`dots`（OpenAI 的常驻个人 Agent）、`airbnb`、`descript`。研究日期 2026-10-08。数据源仅有 DuckDuckGo Autocomplete 公开接口与官方页面抓取；没有 Search Console、关键词工具或受控地区数据，所有搜索量、难度、排名、点击、热度均为 **N/A**。联想候选的出现不等于热门，顺序不代表排名。

## 实体指代确认

- `dots`：实体 YAML（`src/content/data/products/dots.yaml`）指 OpenAI 的 Dots（`kind: agent`，`brand: openai`，官网 [chatgpt.com/features/dots](https://chatgpt.com/features/dots/)），即第 005 期 chapter-02 起讨论的 Personal Agent，与仓库中 `diandian`（点点）无关，也与 Dots 拼图游戏、DOTS 疗法、dots per inch 等同名含义无关。
- `airbnb`、`descript`：知名产品，无歧义风险（Descript 需与 "description" 等近似词区分）。

## FAQ 候选与证据

采样方式：DuckDuckGo Autocomplete（`https://duckduckgo.com/ac/?q=…&type=list`），2026-10-08，中文与英文种子词。原始输出摘录如下（每行 `种子 -> 候选`）。

### dots（OpenAI）

| 种子 | 候选（节选） | 结论 |
| --- | --- | --- |
| `dots chatgpt` | `dot chatgpt`、`docs chatgpt`、`what are the blue dots on chatgpt` | 无 OpenAI Dots 专属候选；"blue dots" 指向界面圆点，属同名歧义 |
| `openai dots` | `openai docs`、`openai dota`、`openai dotnet`、`openai docs mcp` | 全部为 docs 同音/近似词歧义，无 Dots 产品候选 |
| `dots 是什么` | `dots 是什么意思`、`dots是什么单位`、`dots是什么软件`、`dots是什么符号` | 多为其他含义；`dots是什么软件` 保留观察，仍可能非 OpenAI 产品 |
| `dots 助手` | `dota 助手` | 歧义 |
| `dots assistant` / `dots pricing` / `dots cloud computer` / `openai dots agent` | 无产品相关候选（DOT 助理职务、dots printing 公司等） | 无需求线索 |

结论：OpenAI Dots 于 2026-09-29 DevDay 发布（官方 recap 页），太新，公开联想尚未形成该产品的问题形态。本期 Dots 的 FAQ 问题为**编辑补充**，依据是官方页面的功能分区（区别、套餐可用性、云电脑、费用），并在研究记录中如实标注；不伪装成搜索热门。

### airbnb

| 种子 | 候选（节选） | 结论 |
| --- | --- | --- |
| `airbnb` | `airbnb login`、`airbnb rentals`、`airbnb tokyo` 等 | 导航类，页面已由官方链接覆盖 |
| `airbnb 是什么` | `airbnb 是什么时候有的`、`airbnb是什么意思`、`airbnb是什么公司`、`airbnb是什么服务`、`airbnb是什么价位`、`airbnb是什么原理`、`airbnb是什么优势` | 采纳"是什么/什么公司"、"什么价位"两问 |
| `airbnb 房东` | `airbnb 房东` | 采纳"如何成为房东" |
| `airbnb 退款` | `airbnb 退款` | 采纳退款/保障入口 |
| `airbnb experiences` | `airbnb experiences website`、`airbnb experiences login` 等 | 采纳"除住宿外的体验与服务" |

### descript

| 种子 | 候选（节选） | 结论 |
| --- | --- | --- |
| `descript` | `descript ai`、`descript app`（另有 `description`、`descriptive statistics` 等近似词） | 需带 ai/editor 修饰消歧 |
| `descript 是什么` | `descript是什么意思`、`descript是什么软件` | 采纳"是什么" |
| `descript pricing` | `descript pricing`、`descript pricing plans`、`descript ai pricing`、`descript overdub pricing` | 采纳免费/收费问题 |
| `descript download` | `descript download for windows`、`descript download mac`、`…for windows 11` 等 | 采纳平台与下载 |
| `descript mcp` | `descript mcp` | 采纳（与第 005 期讨论直接相关） |
| `descript underlord` | `what is underlord in descript` | 采纳（AI 功能） |
| `descript vs` | `vs riverside`、`vs capcut`、`vs opus clip`、`vs veed` 等 | 不采纳：竞品比较无官方答案来源 |
| `descript 剪辑` | `descript 剪辑` | 已由"是什么"覆盖 |

## 事实核验（官方与可靠来源，2026-10-08）

- Dots：[chatgpt.com/features/dots](https://chatgpt.com/features/dots/) —— "always-on agents built to handle everything"，由 GPT-6 Astra 驱动；起点是 ChatGPT memory；在自有 cloud computer 上工作，可连接用户自己的电脑；Custom Rules 控制权限、敏感操作经 Auto-review；可在 ChatGPT web/mobile/desktop 发消息或通话；Slack 与 Microsoft Teams 集成；创建入口在 ChatGPT 桌面应用；页面写明正面向 Pro、Business Premium、Enterprise 套餐在符合条件的市场推出。
- DevDay 2026：[openai.com/index/devday-2026-recap/](https://openai.com/index/devday-2026-recap/) —— 2026-09-29 举办；Dots 描述为 "remarkably capable, always-on agents"；Pro 与 Business Premium（符合条件市场）可用，Enterprise/Edu/Healthcare 为管理员开启的 beta。`openai.com/index/devday-2026/` 为 save-the-date 页，不作事实来源。
- Airbnb：[官方帮助文章 2503](https://www.airbnb.com/help/article/2503) —— "Airbnb was born in 2007 when 2 hosts welcomed 3 guests to their San Francisco home"；超过 500 万房东、累计超 20 亿人次入住；提供住宿（stays）、体验（Experiences）与服务（Services）；AirCover 房东保障；24/7 支持。Britannica（[britannica.com/money/Airbnb](https://www.britannica.com/money/Airbnb)）—— 2008 年由 Brian Chesky、Joe Gebbia、Nathan Blecharczyk 在旧金山创立，总部旧金山，2020 年 12 月 IPO。[airbnb.com/host/homes](https://www.airbnb.com/host/homes) —— 房东入驻页："You set your price"；Airbnb 收取约 3% 订房小计的服务费（房东侧）。
- Descript：[descript.com](https://www.descript.com/) —— "AI video and audio editor that lets you edit by editing text"；Underlord AI 编辑代理、Studio Sound、填充词删除、眼神修正、AI 头像/配音、翻译与切片；官网提供 "API + MCP"。[descript.com/mcp](https://www.descript.com/mcp) —— 经 Claude（应用/网页/Claude Code）、ChatGPT（应用目录）及任意支持 MCP 的客户端（如 Cursor）驱动 Underlord；无需安装服务器；AI 编辑消耗 AI credits。[descript.com/download](https://www.descript.com/download) —— 桌面应用支持 macOS 14+ 与 Windows 11+，另有网页版。[descript.com/pricing](https://www.descript.com/pricing) —— Free/Hobbyist/Creator/Business/Enterprise 方案。

未知与未核验项：Dots 无独立价格页（随 ChatGPT 套餐提供）；Instinct、Muse 与 Dots "基本免费"是节目参与者的趋势判断（chapter-13），官方未统一表述，正文仅作节目观点归属；Dots 团队参加 "Lenny 的播客" 系橘子转述（chapter-07），未核验原节目，正文不引用其细节；橘子所述 Descript "SEO 词下降 60% 还是 80%"（chapter-18）无来源，正文不采用该数字；Descript 创始人信息本轮未能核验，正文不写。

## 节目证据（第 005 期，中文逐字稿）

- dots：chapter-02（"Dots：记忆、云电脑与上手体验"，发布背景与上手问题）、chapter-05（交 Google 权限与学校邮件提醒）、chapter-07（双电脑登记、虚拟机克隆工具、管理集群的展望）、chapter-13（免费趋势判断）。
- airbnb：chapter-04（"Instinct：订房、商旅与信任"，Agent 预订冲击传统平台的转述与讨论）、chapter-05（中外信息流差异举例）。
- descript：chapter-18（"从 Descript 到软件成为 Agent 插件"，产品定位、封闭生态判断与软件成为 Agent 插件的讨论）。

## 采用映射（采样词 → 意图 → FAQ 问题 → 答案来源）

- airbnb 是什么/什么公司 → 定义 → "Airbnb 是什么？" → 官方帮助文章 2503 + Britannica
- airbnb是什么价位 → 计费理解 → "在 Airbnb 上订房怎么收费？" → airbnb.com/help（结算页显示费用明细的口径）+ host/homes 房东侧服务费
- airbnb 房东 → 入驻 → "怎么在 Airbnb 上做房东？" → airbnb.com/host/homes
- airbnb 退款 → 售后 → "Airbnb 的退款和保障怎么查？" → 官方帮助中心入口
- airbnb experiences → 产品范围 → "Airbnb 除了订住宿还有什么？" → 官方帮助文章 2503（Experiences、Services）
- descript是什么软件 → 定义 → "Descript 是什么？" → descript.com
- descript pricing → 计费 → "Descript 免费吗？" → descript.com/pricing
- descript download → 平台 → "Descript 支持哪些系统？" → descript.com/download
- descript mcp → Agent 集成 → "Descript 能被 AI Agent 调用吗？" → descript.com/mcp
- what is underlord in descript → AI 功能 → "Descript 的 AI 功能有哪些？" → descript.com
- dots 各问 → 编辑补充（见上）

## 后续衡量

无曝光/点击数据；接入 Search Console 后按 28 天窗口记录。Dots 相关联想预计随产品推广变化，可复采 `openai dots`、`dots chatgpt`、`dots 是什么`。
