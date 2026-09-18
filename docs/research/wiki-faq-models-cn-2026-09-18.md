# 国产模型与微信 Wiki FAQ 研究记录（qwen、doubao、wechat、kimi）

## 范围与口径

本记录支持 `qwen`、`doubao`、`wechat`、`kimi` 四个产品实体的 Wiki 正文。研究日期为 2026-09-18，面向中文（zh-Hans）和英文（en）读者。需求线索来自 Google 公开联想（Firefox client，`hl=zh-CN` / `hl=en`），未做受控地区采样，也没有 Search Console、关键词工具或搜索量数据，因此所有搜索量、难度、排名、点击、热度均为 **N/A**。联想候选的出现不等于热门，也不构成效果承诺；联想顺序不是排名。

原始采样未单独建 JSON，完整结果附于文末附录 A。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| Qwen | zh：`通义千问网页版`、`通义千问官网`、`通义千问 api`、`通义千问 api key`、`通义千问国际版`、`通义千问app下载`；`qwen 3.8`、`qwen api`、`qwen studio`、`qwen 3.8 27b`、`qwen code`、`千问官网`；en：`qwen models`、`qwen 3.8 flash next`、`qwen code` | 导航、API 接入、版本信息 | 是（官网/网页版、API Key、最新型号、开放权重直接采用；"Qwen 与通义千问关系"为编辑归纳的歧义消解） | [qwen.ai](https://qwen.ai/)、[Model Studio qwen3.8-max 文档](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)、[Hugging Face Qwen 组织](https://huggingface.co/Qwen) |
| Doubao | zh：`豆包ai`、`豆包网页版`、`豆包输入法`、`豆包生图`、`豆包官网`、`豆包电脑版`、`豆包app`、`豆包api`、`豆包收费`；en：`doubao ai`、`doubao ai english`、`doubao app download`、`doubao phone`、`doubao pro` | 导航、定义、计费 | 部分（定义、网页版/电脑版、模型归属、同名歧义直接采用；`豆包收费`、`doubao ai english`、`doubao phone` 未采用——官方页面未核验到资费表与英文版/硬件产品信息，见"省略项"） | [doubao.com](https://www.doubao.com/)、[功能介绍](https://www.doubao.com/legal/feature_intro)、[下载页](https://www.doubao.com/download/) |
| WeChat | zh：`微信公众号平台/登录/后台/注册/网页版`、`微信小程序开发/开发工具/开放平台`、`微信网页版登录/文件传输助手`；en：`wechat web`、`wechat download`、`wechat pay`、`wechat mac/windows` | 导航、注册管理、平台与开发 | 是（网页版登录、公众号注册管理、微信/WeChat 区别、小程序直接采用；"小微"为编辑补充，答案引节目并标注能力随版本变化） | [wx.qq.com](https://wx.qq.com/)、[微信公众平台](https://mp.weixin.qq.com/)、[腾讯 Weixin & WeChat 产品页](https://www.tencent.com/products/weixin-wechat/) |
| Kimi | zh+en：`kimi k3`、`kimi code`、`kimi 官网`、`kimi api`、`kimi coding plan`、`kimi work`、`kimi token plan`、`kimi 模型`；`kimi k3 价格`、`kimi k3 api`、`kimi k3 开源`、`kimi k3 huggingface`、`kimi k3 technical report`；en 歧义：`kimi antonelli`、`kimi raikkonen`、`kimi ni tokede`、`kimi no na wa` | 导航、API、价格、开源状态、歧义 | 是（官网、API Key、K3 价格、开源状态、Kimi Code 区别、人名歧义直接采用） | [Kimi 论坛 K3 公告](https://forum.moonshot.ai/t/kimi-k3-is-here-our-most-capable-model/480)、[kimi.com](https://www.kimi.com/)、[Kimi API 平台](https://platform.kimi.ai/)、[Kimi Code 模型文档](https://www.kimi.com/code/docs/kimi-code/models.html) |

歧义排除：`kimi `（en）联想混入 F1 车手 Kimi Räikkönen、Kimi Antonelli 与《你的名字。》（kimi no na wa / kimi ni todoke 等日文）等同名内容，未作为产品问题采用，仅在两语言 FAQ 各设一条歧义消解；`豆包 `联想中的"豆包、"对应同名食品，转为 FAQ 歧义消解；`qwen studio` 联想对应官网 App 下载落地页（页面标题 "Qwen Studio"，`chat.qwen.ai` 当前指向该引导页），正文只写"官网提供 App 下载引导"，不把该页当作独立产品断言。未采纳但记录在案的候选：`通义千问国际版/海外版`、`doubao ai english`（国际可用性未核验）、`kimi k3 paper/technical report`（论文入口未核验）、`豆包生图`（生图功能未在官方功能介绍页核验）。

语言翻译与编辑归纳说明：zh 联想 `通义千问 api key` 与 en `kimi api` 均对应"密钥申请"意图；"Qwen 和通义千问是什么关系""微信的 AI 助手小微是什么""Kimi 和 Kimi Code 有什么区别"为编辑补充问题（前者消解命名歧义，后两者答案依托官方页面与节目原文），未伪装成联想热词。

## 事实核验（2026-09-18）

以下为正文核心事实的核验来源与结果（均为当日 WebFetch 官方页面取得）：

- Qwen：`https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max` 确认模型 ID `qwen3.8-max`、快照 `qwen3.8-max-2026-09-02`（别名 0902）、"2.4 万亿参数 MoE 旗舰"定位（法律/金融/设计等专业任务）、1,000,000 Token 上下文窗口、输入支持图像/文本/视频、输出仅文本、支持函数调用/结构化输出/前缀补全/上下文缓存/联网搜索、多地区部署。`https://huggingface.co/Qwen/Qwen3.8-Flash-Next` 确认其为 2026 年 8 月发布的开放权重实验模型，模型卡自称"experimental preview of the architecture that will underpin Qwen4"（`qwen4_exp` 标签）、约 125B 总参数/6B 激活（加 51B n-gram embedding 与 4B MTP）、原生 262,144 上下文（YaRN 可扩展至 1M）、qwen-community-1.0 许可，并说明生产版 Qwen3.8-Flash 经 Qwen 云端服务提供（1M 上下文+内置工具）。`https://qwen.ai/` 为 JS 渲染，仅取到站点名，正文只把它作为官网入口列出。
- Doubao：`https://www.doubao.com/legal/feature_intro` 确认官方功能概括：对话聊天、语音输入、多音色语音回答、创建和定制智能体、创作辅助；页面未列平台清单与价格。`https://www.doubao.com/download/` 存在，标题"下载豆包客户端"，正文 JS 渲染未取到客户端清单，仅作为下载入口链接。Doubao Seed 模型家族归属 Seed 团队采自实体 YAML 与 `https://seed.bytedance.com/`（YAML 既有来源，本批未复核其内容）。
- WeChat：`https://www.tencent.com/products/weixin-wechat/` 确认 2011 年上线、"more than messaging"定位、微信与 WeChat 为独立但可互通的姊妹服务（微信面向中国大陆、WeChat 面向其他地区）、合并月活超 14 亿（截至 2026 年第一季度）、微信支付日均商业交易超 10 亿笔（自 2019 年 Q4）、小程序 2024 年 GMV 8 万亿元人民币、功能覆盖公众号/视频号/搜一搜/小游戏。`https://wx.qq.com/` 确认微信网页版登录页（手机扫码、提供 Mac/iPad/PC 版下载链接）。`https://mp.weixin.qq.com/` 确认微信公众平台统一管理服务号、公众号、小程序、企业微信，另有"公众号助手"App。
- Kimi：`https://forum.moonshot.ai/t/kimi-k3-is-here-our-most-capable-model/480` 确认 K3 公告日期 2026-07-22、2.8 万亿参数、原生视觉、1M 上下文、定位长程编程与知识工作、模型 ID `kimi-k3`、API 经 platform.kimi.ai 提供、公告未提及开放权重。`https://platform.kimi.ai/` 确认 K3 费率（缓存命中 $0.30 / 输入 $3.00 / 输出 $15.00 每百万 Token）、另列 K2.7 Code（256k）与 K2.6（256k）、内置工具（Web Search、Code-Runner 等）。`https://www.kimi.com/code/docs/kimi-code/models.html` 确认 Kimi Code 模型文档列出 `k3`（1M，文档标注面向高档位会员）、`k3-256k`、`kimi-for-coding`（K2.8 Preview）、`kimi-for-coding-highspeed`（K2.7 Code HighSpeed），并要求填模型 ID 而非版本名。`https://www.kimi.com/` 确认官网标题含"K3 上线，专为智能体编程与知识工作打造"，页面入口有定时任务、深度研究、集群（Agent Swarm）、Kimi Work、Kimi Code、Kimi Claw。

## 事实边界与省略项

- Qwen 的费率（如北京区域输入 12 元/百万 Token）在文档中可核验，但按编辑规范不写入正文；型号上下文与能力仅在正文以文档标注形式出现并链接官方文档。
- Qwen3.8-Flash-Next 的 Benchmark 分数（GPQA、SWE-bench Pro 等）未写入正文，避免把模型卡宣传当客观评测结论。
- 豆包的"连接器""Skill""定时任务"等能力来自节目参与者的使用记录，正文仅以节目讨论形式出现，不写进官方功能描述；`豆包收费`（zh）与 `doubao pro`（en）因官方页面未核验到资费信息，FAQ 未采用。
- 豆包国际可用性（`doubao ai english`、`doubao in english`）未核验，正文与 FAQ 均不写。
- 微信"小微"没有独立官方产品页可核验，FAQ 答案明确依托节目记录并注明能力随版本变化；正文不把小微写成已核验的官方功能清单。
- Kimi K3 的 `reasoning_effort` 档位、缓存命中率 90%+ 等公告细节未写入正文；`kimi k3 huggingface/github` 联想未被采用为"K3 开源"证据，FAQ 只写"公告未提及开放权重下载"。
- 节目中的推测（Kimi 会出 K3 Flash、豆包工作提供云端电脑、办公 Agent 是中间形态等）一律标注为参与者判断，不写成产品事实。

## 节目证据

本地中文逐字稿（无英文逐字稿；英文正文链接同一 URL 并在语境中注明）：

- qwen：[Weekly #001 chapter-08](/weekly/001/transcript#chapter-08)（quote-b6c4393c01ec9960a865、quote-78388566b2004546da59）、[chapter-13](/weekly/001/transcript#chapter-13)（quote-ea83290f01de720c5c8a）、[chapter-03](/weekly/001/transcript#chapter-03)（quote-fd38512a48f266e43abe、quote-db0d856b6db3893cf011）、chapter-32（quote-38e408275441fa0535d4）、[Weekly #002 chapter-16](/weekly/002/transcript#chapter-16)（quote-8e674125c2511a604363、quote-8a01d0363c7febd4fae2）、[chapter-21](/weekly/002/transcript#chapter-21)（quote-9482dab44286a6da7f20）。
- doubao：[Weekly #001 chapter-09](/weekly/001/transcript#chapter-09)（quote-ddfed4fc2efd477cf98d）、[chapter-15](/weekly/001/transcript#chapter-15)（quote-0dbb1daa341ec98b63dc）、[chapter-18](/weekly/001/transcript#chapter-18)（quote-4ca0a8e2bfe5e15ccb02）、[chapter-32](/weekly/001/transcript#chapter-32)（quote-a44f7bbc722ba0500add、quote-b4d3a042ab5a16ea212f）、[Weekly #002 chapter-13](/weekly/002/transcript#chapter-13)（quote-e05b4279cf60687bde0c、quote-40021a3531cadcb2de65）、[chapter-25](/weekly/002/transcript#chapter-25)（quote-fcd8072ea8d43c45fbe5、quote-8988b6ddafa8517d6e43）。
- wechat：[Weekly #001 chapter-06](/weekly/001/transcript#chapter-06)（quote-786597a8b2d26974dc6a、quote-0db48ceae84a7498d659）、[Weekly #002 chapter-16](/weekly/002/transcript#chapter-16)（quote-7156da18d169099deca9）、[chapter-17](/weekly/002/transcript#chapter-17)（quote-68208ed35ccde0e32e64、quote-5d6a2818237d83fa41bb、quote-065402790a8b30d8daea、quote-b18ffbf84c93fd424c0d、quote-dc7d0bbb900981555418）、[chapter-25](/weekly/002/transcript#chapter-25)（quote-8aa2de6866b6ce59e220、quote-737c0689e004efd06749）。
- kimi：[Weekly #001 chapter-07](/weekly/001/transcript#chapter-07)（quote-0f6450e1e0cc07ceb09c）、[Weekly #002 chapter-07](/weekly/002/transcript#chapter-07)（quote-c2b7d697b92bf2d796c5）、[chapter-27](/weekly/002/transcript#chapter-27)（quote-f5877d1e5a4ead841df9、quote-31dc54abe1a50f6cb37b、quote-7d29ecb44055590db940）。

发言人：杨攀（yangpan）、歸藏（guizang）、向阳乔木（xiangyang-qiaomu）、橘子（orange）。所有节目内容均标注为参与者体验、转述或推测，不作为官方事实或独立评测。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用候选词数量代替。

## 附录 A：Google 联想原始采样（2026-09-18）

方法：Google 公开联想，Firefox client，`hl=zh-CN` / `hl=en`，每候选取前 10 条。URL 形如 `https://suggestqueries.google.com/complete/search?client=firefox&hl=zh-CN&q=<种子词>+&ie=utf-8&oe=utf-8`。

- `通义千问 `（zh-CN）：通义千问网页版 / 通义千问官网 / 通义千问 api / 通义千问 api key / 通义千问国际版 / 通义千问语音转文字 / 通义千问app下载 / 通义千问app / 通义千问海外版 / 通 义 千 问 官方
- `qwen `（zh-CN）：qwen code / qwen 3.6 / qwen work / qwen 3.8 / qwen api / qwen studio / qwen 3.8 27b / qwen 3.7 / qwen 3.7 max / 千问官网
- `qwen `（en）：qwen ai / qwen 3.8 / qwen 3.8 27b / qwen 3.6 / qwen 3.7 / qwen models / qwen 3.8 flash next / qwen 3.5 / qwen 3.6 27b / qwen code
- `豆包 `（zh-CN）：豆包ai / 豆包网页版 / 豆包输入法 / 豆包生图 / 豆包官网 / 豆包电脑版 / 豆包app / 豆包、/ 豆包api / 豆包收费
- `doubao `（en）：doubao ai / doubao app / doubao ai english / doubao ai apk / doubao ai video generator / doubao phone / doubao apk / doubao in english / doubao app download / doubao pro
- `微信公众号 `（zh-CN）：微信公众号平台 / 微信公众号登录 / 微信公众号后台 / 微信公众号助手 / 微信公众号编辑器 / 微信公众号注册 / 微信公众号爬取 / 微信公众号网页版 / 微信公众号排版 / 微信公众号文章
- `微信小程序 `（zh-CN）：微信小程序开发 / 微信小程序开发工具 / 微信小程序开发平台 / 微信小程序后台 / 微信小程序登录 / 微信小程序注册 / 微信小程序平台 / 微信小程序开发文档 / 微信小程序文档 / 微信小程序开放平台
- `微信网页版 `（zh-CN）：微信网页版文件传输助手 / 微信网页版登录 / 微信网页版文件传输 / 微信网页版无法登陆 / 微信网页版下载 / 微信网页版传输助手 / 微信网页版手机 / 微信网页版官网 / 微信网页版、/ 微信网页版密码登录
- `wechat `（en）：wechat web / wechat download / wechat app / wechat mac / wechat pay / wechat online / wechat file transfer / wechat windows / wechat emojis / wechat desktop
- `kimi `（zh-CN）：kimi k3 / kimi code / kimi 官网 / kimi api / kimi coding plan / kimi work / kimi ai / kimi 3 / kimi token plan / kimi 模型
- `kimi `（en）：kimi k3 / kimi antonelli / kimi raikkonen / kimi ai / kimi ni todoke / kimi 3 / kimi code / kimi no na wa / kimi model / kimi raikkonen son
- `kimi k3 `（zh-CN）：kimi k3 价格 / kimi k3 huggingface / kimi k3 api / kimi k3 开源 / kimi k3 coding plan / kimi k3 github / kimi k3 paper / kimi k3 technical report / kimi k3 price / kimi k3 中文
