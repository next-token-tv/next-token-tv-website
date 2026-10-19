# 第 006 期产品批 C（Wiki FAQ 研究记录）

## 范围与口径

本记录支持 `silicon-valley`、`ideashell`、`today-ai`、`antigravity`、`anatomy-skill` 五个产品实体的中英文 Wiki 正文。研究日期为 2026-10-19。需求线索来自 Google 搜索联想接口（`suggestqueries.google.com/complete/search?client=firefox`，zh-CN 与 en 两种语言参数），属于需求形态线索，不是搜索量或热度排名；本次没有 Search Console、关键词工具或受控地区数据，所有搜索量、难度、排名、点击、热度均为 **N/A**。候选词出现不等于热门，也不构成效果承诺。

## 实体指代确认

- `silicon-valley`：YAML `kind: series`，指 HBO 喜剧剧集《硅谷》（Silicon Valley），不是地名或行业区域；官方链接 hbo.com/silicon-valley 现重定向至 HBO Max 剧集页。
- `ideashell`：YAML `kind: application`，指闪念贝壳 IdeaShell（ideashell.cn，AI 笔记应用），与"贝壳"相关的其他产品无关。
- `today-ai`：YAML `kind: agent`，指个人 AI 智能体产品 Today（today.ai）。**不是**已有实体 `aihot`（AIHOT.news，kazike 维护的 AI 资讯站）。"今日ai"类中文联想混入"今日埃及""今日ai热点"等无关结果，本批未采用裸"今日AI"种子；未在正文与 today-ai 建立与 AIHOT 的任何互链。
- `antigravity`：YAML `kind: agent`、`brand: google`，指 Google Antigravity 智能体开发平台（antigravity.google），与 Gemini、Google 品牌正文互链。
- `anatomy-skill`：YAML `kind: developer-tool`，指 GitHub 开源 Agent Skill `wheresryan22/anatomy`。

## FAQ 候选与证据

| 页面 | 采样种子（语言/日期） | 实际返回的候选（节选） | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| silicon-valley | `硅谷 美剧`（zh-CN，2026-10-19） | 硅谷美剧、硅谷美剧netflix、硅谷美剧夸克、硅谷 美剧 演员 | 观看入口、演员信息 | 是（在哪看、几季、谁创作、Jian-Yang 演员） | [HBO 官方剧集页](https://www.hbo.com/silicon-valley) |
| silicon-valley | `Silicon Valley HBO`、`Jian-Yang Silicon Valley`（en，2026-10-19） | silicon valley hbo show/cast/characters、is silicon valley on hbo max、jian yang silicon valley actor | 观看、演员 | 是 | 同上 |
| ideashell | `闪念贝壳`（zh-CN，2026-10-19） | 闪念贝壳、闪念贝壳网页版、闪念贝壳好用吗、闪念贝壳招聘、闪念贝壳官网 | 导航、形态、口碑 | 是（官网、设备、网页版、收费）；"好用吗""招聘"未采用（前者为主观口碑无官方答案，后者无内容价值） | [ideashell.cn](https://ideashell.cn/) |
| ideashell | `IdeaShell`、`IdeaShell app`（en，2026-10-19） | ideashell app、ideashell ai、ideashell apple watch、ideashell review、ideashell ai voice notes | 导航、设备、评测 | 是（官网、设备、网页版、收费） | 同上 |
| today-ai | `Today AI`（zh-CN，2026-10-19） | today ai 齐俊元、today ai app、today ai 安全吗、today ai是什么、today ai 好用吗、today ai评价、today ai 介绍 | 定义、平台、信任、人物 | 是（是什么、平台与收费、记忆与隐私、谁做的）；"齐俊元"联想见下节未知项；"好用吗""评价"未采用（主观口碑） | [What Is Today?](https://today.ai/articles/blog/what-is-today)、[Meet Today](https://today.ai/articles/blog/meet-today) |
| antigravity | `Google Antigravity`、`antigravity google`、`Antigravity IDE`（zh-CN，2026-10-19） | google antigravity 官网/是什么/费用/使用教程/ide/cli/中文/不支持所在地区/无法登陆；antigravity ide download、ide和antigravity区别、设置中文 | 导航、定义、计费、对比、故障 | 是（官网下载、是否免费、IDE 与平台区别、可用模型）；"不支持所在地区/无法登陆/设置中文"未采用（无官方核验入口，且改区类回答不宜写入正文） | [antigravity.google](https://antigravity.google/)、[价格页](https://antigravity.google/pricing)、[官方博客](https://antigravity.google/blog) |
| antigravity | `Google Antigravity IDE`（en，2026-10-19） | google antigravity ide vs antigravity 2.0、for windows、vs vscode、install、tutorial | 对比、安装 | 是（同上四问的英文版） | 同上 |
| anatomy-skill | `anatomy skill`（en，2026-10-19） | anatomy skull、anatomy skill elin、anatomy skill uo outlands、anatomy skill ultima online、anatomy skillshare 等 | —（高度歧义：游戏技能、骷髅解剖等） | 否（歧义种子，正文 FAQ 不使用该裸词） | — |
| anatomy-skill | `anatomy claude skill`、`anatomy agent skill`（en，2026-10-19） | anatomy of a claude skill、claude code skill anatomy、agent skill anatomy | 定义、安装、兼容 | 是（安装、兼容工具、是否免费、能画什么） | [GitHub 仓库](https://github.com/wheresryan22/anatomy) |

中文侧未对 anatomy-skill 采到区分度足够的联想（zh-CN 裸词同样被游戏语义淹没），中文 FAQ 为英文需求形态的对应翻译，标注为**编辑补充**。

## 事实核验

核验于 2026-10-19，以下为进入正文的事实及其来源：

- **silicon-valley**：HBO 官方剧集页（https://www.hbo.com/silicon-valley，重定向至 https://www.hbomax.com/show/b4583939-e39f-4b5c-822d-5b6cc186172d）写明：Mike Judge 构思、设定在硅谷科技创业世界、2014 年、6 季、TV-MA、主演名单含 Jimmy O. Yang、编剧名单含 Alec Berg、Mike Judge。页面文本中出现 "Jian-Yang" 4 次。"2019 年完结"未获官方页面直接印证，正文未写。
- **ideashell**：ideashell.cn 首页写明：广州圆红点科技（RoundRedDot Tech）、"你的 AI 思维伙伴""帮你记，帮你做"、语音/文本/待办记录与跨设备同步、AI 协作思考、AI 行动项（待办、网页、幻灯片、研究报告、定时任务、主动跟进）、个性化记忆、应用集成与自定义 MCP 连接、宣称超一百万用户、入口为 iPhone/Android/APK、Apple Watch、OPPO Watch、Mac、Windows；页面无价格信息、无独立硬件产品。
- **today-ai**：官方博客 What Is Today?（https://today.ai/articles/blog/what-is-today，2026-09-15，署名 The Today Team）：AI personal agent、living memory（结构化条目、可查看/编辑/删除）、morning brief 与 evening close-out、主动消息标准、连接器（日历/邮件/笔记/文件/健康，HealthKit 与 Health Connect，可撤销、外发前确认）、Today Recording、Community Skills、底层前沿模型+任务执行+常驻云电脑、免费（Mac、iPhone、Android）。Meet Today（https://today.ai/articles/blog/meet-today，2026-09-15）署名创始人 Junyuan。today.ai 无中文站点（/zh 路径 404）。
- **antigravity**：antigravity.google 首页：agentic development platform、四产品面（App/CLI/IDE/SDK）及各自描述、下载支持 macOS/Windows/Linux（页面另列 "Googlebook"，未写入正文）、"Available at no charge" for developers。价格页：个人 $0/月（Generally Available，基础速率限制）、Pro/Ultra 更高速率与 AI credit pool、组织经 Google Cloud、Gemini Enterprise Standard/Plus 自 $30 USD/seat/月起、API 按量计费（正文只写结构，不写具体价格数字，$30 属企业报价且易变）。官方博客 Gemini 4 Argon in Google Antigravity（https://antigravity.google/blog/gemini-4-argon-in-google-antigravity，2026-10-13，The Antigravity Team）：Argon 进入桌面应用与 CLI，面向 Google AI Pro/Ultra 订阅者，企业经 API/符合条件的 Gemini Enterprise 订阅。
- **anatomy-skill**：GitHub 仓库 README（https://github.com/wheresryan22/anatomy）：开源 Agent Skill、MIT、把技术概念转成可交互等距机械示意图、三类图形（SVG / SVG+WebGL / 3D beta）、输出独立 HTML / SVG / React+Next.js 组件、安装 `npx skills add wheresryan22/anatomy -g`、`/anatomy` 调用、为 Claude Code 编写并兼容 Antigravity、OpenCode、Codex（`$anatomy`）、MiniMax Code、需 Node.js 20.10+ 与 Chrome/Chromium 自检、非图表库/不画人物/构建刻意缓慢。Star 数等时点数据未写入正文。

## 节目证据（Weekly #006，中文逐字稿）

全部引用位于 `next-token-weekly--006.zh-Hans.json`；锚点按 `src/data/transcript-paragraph-anchors.ts` 同算法计算（脚本与算法一致：NFC + 空白归一化、speakerId 优先、sha256 前 20 位、重复段追加序号）：

| 章节 | 锚点 | 发言人 | 用途 |
| --- | --- | --- | --- |
| chapter-12 把影视角色拉进 Bot 群：给自己组一支“AI 团队” | quote-16e0599e28d59e5cea40 | yangpan | silicon-valley：Grok Bot 以剧中角色 Jian-Yang 建 Bot |
| chapter-07 硬件开放才能玩起来：从社区玩法聊到物理安全 | quote-0282c1758d51e4e995c0 | xiangyang-qiaomu | ideashell：提到闪念贝壳 |
| chapter-07 同上 | quote-249b3b383f6de490c3cc | xiangyang-qiaomu | ideashell：眼镜/戒指方向归纳 |
| chapter-15 国内 Agent 的落点：生活助理做不起来，先给商家干活？ | quote-e6511509572e5a8be812 | yangpan | today-ai：国内 Personal Agent 例子 |
| chapter-15 同上 | quote-b40363203ec07c23ea2c | xiangyang-qiaomu | today-ai：官方群使用场景观察 |
| chapter-15 同上 | quote-cf29d2b41a86909416b1 | yangpan | today-ai：场景偏美国的判断 |
| chapter-15 同上 | quote-e8b44bb87b7c96cd0bac | orange | today-ai：转述"国内版只为测试"、国内版免费 |
| chapter-15 同上 | quote-325d994b3f0d103a59d2 | xiangyang-qiaomu | today-ai：打磨用心的评价 |
| chapter-22 模型体验的两极：最强能力、等待时间与便宜模型的生态位 | quote-865fe4c37fac8e85a1e4 | xiangyang-qiaomu | antigravity：Argon 客户端尚未可用 |
| chapter-22 同上 | quote-05e4c4587a38611e065a | guizang | antigravity：长时间 Thinking、Auto Mode 仍需审批的体验 |
| chapter-18 Prompt 套 Skill，Skill 再套 Prompt：能力变强后，还要封装什么？ | quote-ec23d06b40bba533ceb0 | xiangyang-qiaomu | anatomy-skill：Skill 走红与科普视频用法 |

五个实体仅在第 006 期出现（001–005 中文与英文逐字稿均无 entity-link 命中）。英文正文引用第 006 期内容时链接 `/weekly/006/transcript#...` 并标注 Chinese transcript；未生成 `/en/weekly/006` 幻链。

## 采用、省略与未知项

- 未采用/未写入正文的节目内容：向阳乔木关于"Vercel CEO 是否也点赞 Anatomy"的猜测语气（转述且自我存疑）；橘子关于（Argon 模型）内部 benchmark"又慢又一般、贵、年底涨价"的判断——该论断指向模型而非 Antigravity 产品本身，未写入 antigravity 正文，仅在研究中存档；chapter-15 后半关于 Manus Cue、CatPaw 改名等与本批实体无关。
- 未知项：Today AI 创始人 "Junyuan" 的中文姓名——联想词出现"today ai 齐俊元"，但官方仅署名 Junyuan，未获官方中文来源印证，正文不写中文名；Today AI/闪念贝壳是否有独立安全审计或第三方评测——未见；闪念贝壳与节目语境中"戒指"的具体关系——归藏将"戒指"与"贝壳"相联系，但官方页面无硬件，正文只保留向阳乔木的形态方向归纳；Silicon Valley 完结年份（2019）未获官方页面印证，未写入。
- 指代澄清：`today-ai` 与已有实体 `aihot`（AIHOT.news，kazike/KKKKhazix）是两个不同产品，本批未互链、未在正文设歧义 FAQ（无真实需求证据）。
- 检查项：10 篇正文 frontmatter（entityType/entity/locale/slot/updatedAt/seoTitle/seoDescription）按技术规范填写；正文无 H1；站内实体链接 zh `/wiki/...`、en `/en/wiki/...`；主理人写法为歸藏、向阳乔木、杨攀、橘子（en：Guizang、Xiangyang Qiaomu、Yang Pan、Orange）。
