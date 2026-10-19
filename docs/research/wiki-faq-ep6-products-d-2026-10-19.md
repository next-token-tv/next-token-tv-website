# 第 006 期产品 Wiki FAQ 研究记录（D 批：11 个产品）

## 范围与口径

本记录支持 `apple-health`、`fish-audio`、`github-trending`、`google-ai-studio`、`macaron`、`mad-men`、`product-hunt`、`qianwen-go`、`step`、`zenmux`、`manus-studio` 共 11 个产品实体的中英文 Wiki 正文。研究日期为 2026-10-19。所有实体在第 006 期中文逐字稿中各有 1 次实体链接提及，官方资料核验情况见"事实边界"。

数据来源：Bing Autocomplete（`api.bing.com/osjson.aspx`，2026-10-19 采样）、360 搜索 SERP（`so.com`，用于千问 Go 与 Step 5 Preview 的事件线索，Bing 与 DuckDuckGo 网页搜索被反爬拦截，未采到可用 SERP）。没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想顺序不是热度排名。`step`、`macaron`、`zenmux` 等短名均加品牌修饰采样，仍混入同名歧义（见各行说明）。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| Apple Health | zh 联想（种子 `苹果健康`）：`苹果健康app`、`苹果健康数据导出`、`苹果健康支持哪些手表`、`苹果健康数据怎么清除`、`苹果健康共享`；en 联想（种子 `apple health`）混入美国华盛顿州 Medicaid 项目 `apple health washington`、`apple health medicaid` | 导航、数据管理、设备配合 | 是（排除 Washington 州医保歧义；`数据导出`、`数据清除` 未经官方步骤核验，未采用） | [Apple Health](https://www.apple.com/health/) |
| Fish Audio | 联想（种子 `fish audio`）：`fish audio api key`、`fish audio 官网`、`fish audio github`、`fish audio s2`、`fish audio tts`、`fish audio 下载` | 导航、开发者信息、声音克隆 | 是 | [fish.audio](https://fish.audio/)、[docs.fish.audio](https://docs.fish.audio/)、[GitHub fishaudio](https://github.com/fishaudio) |
| GitHub Trending | 联想（种子 `github trending`）：`github trending repositories`、`github trending 在哪`、`github trending today`、`github trending ai projects ...` | 导航、机制说明 | 是（排序算法官方未说明，答案按页面可见口径写） | [GitHub Trending](https://github.com/trending) |
| Google AI Studio | 联想（种子 `google ai studio`）：`api key`、`gemini`、`免費`、`中文`、`教學`、`tts`、`中文界面` | 导航、开发者信息、计费 | 是（`tts`、`中文界面` 未经官方核验，未采用） | [Google AI Studio](https://aistudio.google.com/)、[AI Studio Quickstart](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart) |
| Macaron | 联想（种子 `macaron ai`）：`macaron ai agent`、`macaron ai app`、`macaron ai for windows`、`macaron ai chatbot`；其余混入马卡龙甜点烘焙内容 | 定义、入口 | 是（Windows 平台细节官方页面未标注，未采用） | [macaron.im](https://macaron.im/) |
| Mad Men | zh 联想（种子 `广告狂人`）：`广告狂人在线观看`、`广告狂人第七季`；en 联想（种子 `mad men`）：`mad men cast`、`mad men streaming`、`mad men season 7` | 观看入口、剧集事实、获奖 | 是 | [AMC 官方剧集页](https://www.amc.com/shows/mad-men/explore--1002238)、[Wikipedia: Mad Men](https://en.wikipedia.org/wiki/Mad_Men) |
| Product Hunt | 联想（种子 `product hunt`）：`product hunt launch`、`product hunt api`、`product hunt是什么`、`product hunt website` | 定义、发布机制 | 是（`api` 细节未核验，未采用） | [Product Hunt](https://www.producthunt.com/)、[Wikipedia: Product Hunt](https://en.wikipedia.org/wiki/Product_Hunt) |
| 千问 Go | 360 SERP：`千问Go! 即将发布`、`阿里千问APP将上线千问Go`、`千问推出个人AI助理千问Go` 等 2026-10 中旬报道；Bing 联想（种子 `千问go`）无 Go 相关候选（多为千问请客卡等无关功能） | 定义、开通方式、任务范围 | 是（联想采不到，问题按 SERP 报道主题编辑归纳，已标注） | [千问官网](https://www.qianwen.com/)；报道：[界面新闻](https://www.jiemian.com/article/15183337.html)、[i黑马](https://www.iheima.com/article-402936.html) |
| Step（阶跃星辰） | 联想（种子 `阶跃星辰`）：`阶跃星辰官网`、`阶跃星辰开放平台`、`阶跃星辰 大模型`；种子 `stepfun`：`stepfun api`、`stepfun 5`、`stepfun coding plan`；360 SERP：`阶跃星辰Step 5 Preview正式开源` 等 | 定义、开源下载、API 入口 | 是（`coding plan` 未核验，未采用） | [stepfun.com](https://www.stepfun.com/)、[Step-5-Preview GitHub](https://github.com/stepfun-ai/Step-5-Preview)、[platform.stepfun.ai](https://platform.stepfun.ai/) |
| ZenMux | 联想（种子 `zenmux`）：`zenmux官网`、`zenmux api`、`zenmux 怎么样`、`zenmux是什么`、`zenmux invite code`、`zenmux 价格`、`zenmux claude code`、`zenmux api key`、`zenmux free api` | 定义、协议兼容、计费 | 是（`invite code`、`free api` 未经官方核验，未采用） | [zenmux.ai](https://zenmux.ai/) |
| Manus Studio | 种子 `manus studio` 联想多为 `manus.com`、`cherry studio manus` 等导航噪音，无 Studio 专属问题 | 定义、平台、产品关系 | 是（问题为编辑补充，依据官方页面结构归纳） | [manus.im/desktop](https://manus.im/desktop) |

## 事实边界

- **Apple Health**：官方页面将其描述为集中管理用药、睡眠、活动等健康与健身数据的应用，覆盖 iPhone、iPad、Apple Watch、Apple Vision Pro 与 Mac；页面写明健康数据在设备上加密，开启双重认证后 iCloud 同步数据端到端加密。`苹果健康数据导出/清除` 的具体步骤未核验，正文与 FAQ 不写操作步骤。
- **Fish Audio**：官方页面列出 TTS、声音克隆（页面口径约 15 秒音频）、语音转写、Voice Agent 等产品与 REST/SDK 接入方式；开源模型（fish-speech 等）经 GitHub `fishaudio` 组织核验存在。页面自称用户数、榜单与"最富表现力"等营销口径不作为客观结论转述。
- **GitHub Trending**：页面自述为"See what the GitHub community is most excited about today"，含 Repositories/Developers 两个标签、口头语言/编程语言/时间范围（Today、This week、This month）过滤；GitHub 未公开排序规则，正文按页面可见口径描述。
- **Google AI Studio**：官方 Quickstart 将其定位为浏览器中试用 Gemini 模型、调试提示词并可一键生成 Gemini API 代码的开发工具；Run settings 含结构化输出、函数调用、代码执行、grounding 等开关。计费与免费层以 Gemini API 价格页为准（沿用既有 Gemini 条目核验过的口径，不新增断言）。
- **Macaron**：官方页面定位为"personal AI agent"，自称 "Other AI agents help you work. Macaron helps you live better."，提到 Deep Memory 与"一次请求生成实际可用的工具"；页面未标注运营主体，正文不写公司归属，价格未展示。
- **Mad Men**：AMC 官方页与 Wikipedia 核验：Matthew Weiner 创作，2007-07-19 至 2015-05-17 在 AMC 播出，7 季 92 集，Jon Hamm 饰演 Don Draper；连续四季（前四季）获艾美奖剧情类最佳剧集。
- **Product Hunt**：Wikipedia 核验：Ryan Hoover 于 2013 年 11 月创立，2016 年 11 月被 AngelList 收购；用户提交产品（标题、URL、tagline），按投票排序展示每日榜单，并有前一日榜单邮件摘要。
- **千问 Go**：2026-10-13 阿里千问宣布 Personal Agent 产品"千问Go!"（报道一致：界面新闻、i黑马等）；定位个人 AI 助理，示例任务包括航班延误理赔、购物价保、汽车保养预约、场馆预订与比价；据 i黑马，它不是独立 App，而是嵌入千问 App 内的个人智能体，体验资格分批开放。上线时点处于开放体验申请阶段，正文按"宣布推出、分批开放"表述，不写成普遍可用。官方入口为 qianwen.com。
- **Step（阶跃星辰）**：官方 GitHub 仓库 `stepfun-ai/Step-5-Preview` 描述其为"StepFun's flagship model for agentic work"，稀疏 MoE、总参数 600B、激活 27B、最长 100 万 token 上下文，接受文本、图像与视频输入，权重发布于 Hugging Face 与 ModelScope；README 官方链接含模型页 stepfun.com/step-5-preview、技术博客与文档 platform.stepfun.ai。多个报道（华军软件园等）称 2026 年 10 月 15 日正式开源，GitHub 仓库创建于 10 月 12 日，正文写"2026 年 10 月开源"不锚定具体日。
- **ZenMux**：官方页面自述为统一 API 网关（"One Account, Unified Access to All Top AI Models"），API 兼容 OpenAI、Anthropic 与 Google Vertex AI 协议，提供多供应商故障转移、模型自动路由与"输出异常自动补偿"机制；平台分析页自 2025-09-29 公开数据。补偿等均按官方声称转述。
- **Manus Studio**：官方页面定位为桌面工作区（"Where you and AI build together"），可结合本地文件与工具创建、编辑网站、视频与游戏；提供 macOS（Apple Silicon）与 Windows（Microsoft Store）版本，页面提到与 Cue 的跨设备衔接（"Take your agents with you on Cue, then pick up right where you left off on desktop"）。价格未在页面展示，指向官方价格页。

## 节目证据

全部 11 个实体的提及均在第 006 期中文逐字稿（英文逐字稿仅到第 005 期）：

- `apple-health`：chapter-24（歸藏：Grok Bot 尚未连接 Apple 健康，Muse 承担生活数据）。
- `fish-audio`：chapter-25（橘子：Fish Audio 新模型也支持带性格的语音表演，但认为不如谷歌那个模型）。
- `github-trending` 与 `product-hunt`：chapter-13（向阳乔木：让多个 Agent 协作抓取两个平台热榜做直播播客的例子）。
- `google-ai-studio`：chapter-25（歸藏：在 AI Studio 里调用语音模型做小说改 Galgame 演示）。
- `macaron`：chapter-06（杨攀在 Agent 越狱话题中的一句调侃）。
- `mad-men`：chapter-12（杨攀：Grok Bot 按《广告狂人》Draper 等影视角色建 Bot 分工）。
- `qianwen-go`：chapter-15（橘子：阿里出了千问 Go 和灵光）。
- `step`：chapter-22（杨攀、向阳乔木：阶跃 5 Preview 在 OpenRouter 调用量前列）。
- `zenmux`：chapter-22（杨攀：某新模型最初能在 ZenMux 上调用）。
- `manus-studio`：chapter-15（杨攀、歸藏、橘子：Manus Studio 与 Manus Cue 的产品区分）。

英文正文引用这些内容时链接 `/weekly/006/transcript#...` 并标注 Chinese transcript，不生成 `/en/weekly/006` 链接。

## 后续衡量

当前没有发布后的曝光和点击数据；接入 Search Console 后按页面、语言、国家、设备和 28 天窗口另行记录。
