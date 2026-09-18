# Agent、平台与产品 Wiki FAQ 研究记录（xiaowei、manus、zcode、xiaohongshu、minimax）

## 范围与口径

本记录支持 `xiaowei`、`manus`、`zcode`、`xiaohongshu`、`minimax` 五个产品实体的 Wiki 正文（`minimax` 为产品条目，写应用本身；公司层面归品牌条目，由另一批正文负责）。研究日期为 2026-09-18，面向中文（zh-Hans）和英文（en）读者。

需求线索来源：Google 公开联想（`client=firefox`，`hl=zh-CN` / `hl=en`，`ie=utf-8&oe=utf-8`，完整 URL 形如 `https://suggestqueries.google.com/complete/search?client=firefox&hl=zh-CN&ie=utf-8&oe=utf-8&q=...`）。另有一次成功的 Brave Search 采样（`小红书 点点 AI助手`，2026-09-18）；其余 Brave 查询被 429 限流，Bing、DuckDuckGo、Mojeek、Ecosia 均返回验证码、403 或与查询无关的结果，未采用。没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击、热度均为 **N/A**。联想候选的出现不等于热门，联想顺序不是排名。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| xiaowei | zh 联想：`微信小微`、`微信小微ai`、`微信小微内测`、`微信小微商户`、`微信小微助手`、`微信小微agent`、`微信小微入口`、`微信小微ai助手`、`微信小微是什么`；`微信小微怎么…` 返回空；en 联想 `xiaowei wechat` 仅有弱关联候选 | 定义、入口、功能 | 是（是什么、入口开通、能做什么直接采用；与微信其他 AI 功能的关系为编辑补充） | [微信团队回应报道](https://www.tmtpost.com/8036364.html)、[微信官网](https://weixin.qq.com/) |
| manus | zh 联想：`manus ai`、`manus是什么`、`manus下载`、`manus 收购`、`manus是什么公司`、`manus 公司`、`manus 腾讯`、`manus 现状`、`manus手套`、`manus 创始人`；`manus邀请码`、`manus ai 邀请码`；`manus怎么用`、`manus ai 怎么用`。en 联想：`manus ai meta`、`manus ai founder`、`manus ai acquisition`、`manus ai agent`、`manus ai pricing`、`manus ai free`、`manus ai review` 等 | 定义、获取、计费 | 是（是什么、怎么用入口、邀请码、收费直接采用；与云端 Agent 比较为编辑补充）。`收购/创始人/现状/meta/acquisition` 为公司层面，留给品牌条目；`manus手套` 为同名机器人手套，排除 | [Manus 官网](https://manus.im/)、[价格页](https://manus.im/pricing)、[API 文档](https://open.manus.ai/docs)、[Wikipedia](https://en.wikipedia.org/wiki/Manus_(AI_agent)) |
| zcode | zh 联想：`zcode 智谱`、`zcode是什么`、`zcode github`、`zcode官网`、`zcode ai`、`zcode智谱官网入口`；混入 `xcode download/下载/27 beta/mcp`（同名歧义，排除）。en 联想：`glm coding plan`、`glm coding plan price/limits/lite/pro/max/review/vs claude/china` | 定义、入口、模型、计费、比较 | 是（是什么、下载安装、用什么模型、收费直接采用；与 Claude Code/Codex 比较为编辑补充，答案依据官方页面与节目讨论） | [ZCode 官方页](https://zcode.z.ai/en)、[Z.ai](https://z.ai) |
| xiaohongshu | zh 联想：`小红书点点`、`小红书点点ai`、`小红书点点网页版`、`小红书点点下载`、`小红书点点api`、`小红书点点电脑版`；`小红书ai工具/ai搜索/ai agent/ai点点/ai助手/ai客服/ai检测/ai文案/ai图片/ai运营`。en 联想 `rednote`：`rednote app/website/login/download…`，混入 `careers/ipo/logo`（非产品意图，排除）。Brave Search 结果（2026-09-18）含“点点是小红书推出的AI搜索助手”“2024年12月推出”等多条第三方描述 | 定义、入口、平台关系、比较 | 是（点点是什么、网页版入口、rednote 关系直接采用；搜索与点点的区别为编辑补充）。`小红书点点api` 无官方答案入口，未采用 | [小红书官网](https://www.xiaohongshu.com/)、[点点 App Store 页](https://apps.apple.com/cn/app/点点-你的ai生活小助手/id6529536122)、[窄播评测（人人都是产品经理转载）](https://www.woshipm.com/it/6161851.html) |
| minimax | zh/en 联想：`minimax h3`、`minimax m3`、`minimax audio`、`minimax coding plan`、`minimax code`、`minimax hub`、`minimax 官网`、`minimax 股价/stock/招聘`（排除）；`minimax agent`、`minimax agent desktop/ai/pricing/team/github/download/cn/swarm/free`；`hailuo ai`、`hailuo ai video/video generator/image to video/pricing/app/image/app download/promo code` | 产品清单、H3 试用入口、Hailuo 关系、计费 | 是（产品清单、H3 试用入口、Hailuo 关系、收费直接采用，答案以官方页面为据） | [MiniMax 官网](https://www.minimax.io/)、[H3 开源公告](https://www.minimax.io/news/minimax-h3-open-source)、[开放平台](https://platform.minimax.io/)、[Hailuo AI](https://hailuoai.video/)、[Talkie](https://www.talkie-ai.com/)、[MiniMax Agent](https://agent.minimax.io/) |

歧义处理：`小微` 短名歧义严重（小微企业、其他同名产品），采样统一加“微信”前缀；`zcode` 与 Apple `xcode` 混淆，已排除；`minimax agent` 联想词中的 `github/swarm/cn` 无官方对应入口，未采用；`manus 腾讯`（腾讯为投资方的传闻性联想）未核验、未采用。

语言翻译与编辑归纳说明：zh 联想 `小红书点点网页版` 对应 zh/en 两篇的“网页版入口”问题；en 正文“Does Manus still require an invite code?”对应 zh 联想 `manus邀请码`；`ZCode 和 Claude Code、Codex 有什么区别`、`小红书搜索和点点的区别`、`微信小微和微信里其他 AI 功能的关系` 为编辑补充问题，答案分别以官方页面和节目原文为据。

## 事实核验（2026-09-18）

以下为正文核心事实的核验来源与结果：

- xiaowei：`https://www.tmtpost.com/8036364.html`（钛媒体转载北京日报，2026-06-21）确认微信团队回应原文、灰度内测口径、主界面左上角入口、功能清单（文字/语音对话、操作微信功能、调起小程序、搜索、生成图片）、2026-06-08 AI 生态接入指引与 2026-06-17 微信支付 AI 专属卡背景。`https://weixin.qq.com/` 确认为微信官方入口；`https://www.tencent.com/zh-cn/products/weixin-wechat/` 确认该页未提及小微，故正文不以该页作为功能佐证，仅列为品牌产品页。
- manus：`https://en.wikipedia.org/wiki/Manus_(AI_agent)` 确认 Butterfly Effect 开发、2025-03-06 邀请制内测上线、演示视频 20 小时内超百万播放、邀请码高价转卖、2025 年年中总部迁新加坡。`https://manus.im/` 确认官网能力清单（幻灯片、建站、设计、游戏、Wide Research、browser operator）、移动/桌面下载、API（open.manus.ai/docs）、Slack 集成、团队计划 SSO、页脚 “© 2026 Manus AI”。`https://manus.im/pricing` 连接失败（ECONNRESET）多次，正文只以指针引用该页，未写价格。
- zcode：`https://zcode.z.ai/en` 确认 “Official Harness for GLM-5.3” 定位、“GLM is tuned for ZCode”、内置 GLM-5.3-Flash 多模态任务、Goals 工作方式（规划/执行/验证）、微信/飞书/Telegram 远程操控、macOS（Apple Silicon/Intel .dmg）、Windows（x64/ARM64 .exe）、Linux Beta（.deb/.rpm/.AppImage）、GLM Coding Plan Lite/Pro/Max 档位与“支持 20+ agent tools, including ZCode, Claude Code”表述。未写具体价格。
- xiaohongshu：`https://zh.wikipedia.org/wiki/小红书` 确认 2013 年 6 月上线、行吟信息科技（上海）运营、rednote 英文名、2025 年 1 月美国用户涌入并登顶 App Store 免费榜。`https://www.woshipm.com/it/6161851.html`（窄播，2024-12-25）确认点点为生活场景 AI 搜索助手、上线独立客户端与小程序、2024-12-01 “出门在外问点点”活动、支持拍照提问、自研珠玑大模型、此前有达芬奇与搜搜薯等探索。App Store 条目确认点点应用存在（“结合小红书真实经验和全网信息回答问题”）。`https://www.xiaohongshu.com/` 仅取到标题“小红书 - 你的生活兴趣社区”（JS 渲染）。
- minimax：`https://www.minimax.io/` 确认官方产品清单表述（MiniMax Code、MiniMax Design、MiniMax Audio、Talkie、开放平台）及各产品链接。`https://www.minimax.io/news/minimax-h3-open-source` 确认 2026-08-03 开源 H3（“新一代通用视频模型”，多模态输入、原生立体声、2K/15 秒、社区许可协议），试用入口为 Hailuo AI、MiniMax Hub、平台 API 与 Hugging Face/ModelScope 权重。`https://hailuoai.video/` 确认 Hailuo AI 为 MiniMax 的视频/图像创作平台（“MiniMax H3 Is Live”、文生/图生视频）。`https://agent.minimax.io/` 确认 MiniMax Agent 存在（“Minimize Effort, Maximize Intelligence”，页面 JS 渲染仅取到口号）。`https://platform.minimax.io/` 确认 API 覆盖语言模型、H3 视频生成、语音、音乐。`https://www.talkie-ai.com/` 确认 Talkie 为 AI 角色聊天应用、页脚 “Powered by MiniMax”、Talkie+ 订阅。

## 事实边界与省略项

- 节目中反复出现的缓存率数字（“ZCode 里用 DeepSeek 缓存率 99%”等）指向模型与群里转述，未写入 zcode 正文。
- Manus 的收购/独立运营过程（2025-12 Meta 宣布收购、2026-04 否决、2026-06 终止、2026-08 独立运营）来自 Wikipedia 条目，属公司层面，留给 minimax 品牌同批的品牌条目体系之外另行处理；本批产品正文仅保留上线日期与 Butterfly Effect 归属。
- 点点“接入 DeepSeek”“深度思考功能”等说法仅来自新闻标题级搜索结果，未核验正文，未写入。
- 第三方称点点由“上海生动诗章科技有限公司”开发，未核验，未采用。
- MiniMax Hub 官方页为 JS 渲染客户端下载页，正文仅按 H3 官方公告将其列为试用入口，不描述功能细节。
- `weixin.qq.com` 与腾讯微信产品页均未提及小微；小微入口位置与功能只引用媒体报道的微信团队回应，正文未断言当前状态。
- GLM Coding Plan 具体价格、MiniMax 各产品资费、Manus 价格均为时效数据，正文一律指针指向官方页面。
- 节目中“微信提供 OpenClaw 二维码不稳定”“转化成本提升 6 倍”等第三方转述（The One 相关）与 xiaowei 页无直接证据关系，未采用。

## 节目证据

本地中文逐字稿（无英文逐字稿，英文正文引用同一 URL 并标注 Chinese transcript）：

- xiaowei：[Weekly #002 chapter-16](/weekly/002/transcript#chapter-16)（quote-7156da18d169099deca9）、[chapter-17](/weekly/002/transcript#chapter-17)（quote-68208ed35ccde0e32e64、quote-dc7d0bbb900981555418）、chapter-21（quote-3ca6b332124bc288572f）。
- manus：[Weekly #001 chapter-16](/weekly/001/transcript#chapter-16)（quote-94a9375e604a44d6dd04、quote-f0308fdda12103798f7e）、[Weekly #002 chapter-13](/weekly/002/transcript#chapter-13)（quote-3b3451d81eb6c3b4a4d3）、chapter-16（quote-708a34485356b1799ebd）、chapter-23（quote-266d77cca6f1d6c4f3ee）。
- zcode：[Weekly #001 chapter-04](/weekly/001/transcript#chapter-04)（quote-400de0647fad0667ff00、quote-85224455276d8af6f798）、chapter-11（quote-5e34ac6d6b04cf3299d9、quote-10a029bbadfcaf889bc2）、chapter-12（quote-996a84fc2d1e3ab6e38f）、chapter-15（quote-6da3490b335d2ae6828d）。
- xiaohongshu：[Weekly #002 chapter-17](/weekly/002/transcript#chapter-17)（quote-35e5698bdce70446930e、quote-0e0f9c946b90ef030de7、quote-273f17cb47891e33adc4、quote-0e42201a8845939df749、quote-69bc3c4a96ec98041ff9）、chapter-03（quote-e2b230a736b6cc9275f2）、[Weekly #001 chapter-20](/weekly/001/transcript#chapter-20)（quote-7b1cc36dff5dd0f3cf9b）、chapter-24（quote-41cc5648e1a00c129120）。
- minimax：[Weekly #001 chapter-02](/weekly/001/transcript#chapter-02)（quote-1d30937176a48e6ee241）、[chapter-03](/weekly/001/transcript#chapter-03)（quote-ab8cc027dffa311f486a、quote-dd6e0b85a5a45facf625、quote-4443fd13327b8e3219d5、quote-5e26693719ef61734cef）、chapter-30（quote-a7e336b54e4d5451bae2）。

发言人：杨攀（yangpan）、歸藏（guizang）、向阳乔木（xiangyang-qiaomu）、橘子（orange）。所有节目内容均标注为参与者体验、转述或判断，不作为官方事实或独立评测。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算。

## 附录 A：Google 联想原始采样（2026-09-18）

方法：Google 公开联想，`client=firefox`，`hl=zh-CN` / `hl=en`，`ie=utf-8&oe=utf-8`。

- `微信小微`（zh-CN）：微信小微 / 微信小微ai / 微信小微内测 / 微信小微商户 / 微信小微助手 / 微信小微agent / 微信小微入口 / 微信小微ai助手 / 微信小微是什么
- `微信小微怎么`（zh-CN）：（空）
- `xiaowei wechat`（en）：xiaowei wechat / what is weibo and wechat / apa itu wechat pay（弱关联，仅证明 en 存在该查询，未采用为问题）
- `manus `（zh-CN）：manus ai / manus是什么 / manus下载 / manus 收购 / manus是什么公司 / manus 公司 / manus 腾讯 / manus 现状 / manus手套 / manus 创始人
- `manus 邀请码`（zh-CN）：manus邀请码 / manus ai 邀请码
- `manus 怎么用`（zh-CN）：manus怎么用 / manus ai 怎么用
- `manus ai `（en）：manus ai meta / founder / acquisition / agent / careers / pricing / free / valuation / review / founders china
- `zcode `（zh-CN）：zcode 智谱 / zcode是什么 / zcode github / zcode官网 / zcode ai / xcode download（歧义，排除）/ xcode 下载（排除）/ xcode 27 beta（排除）/ xcode 27（排除）/ xcode mcp（排除）
- `zcode 智谱`（zh-CN）：zcode 智谱 / zcode智谱官网入口
- `glm coding plan`（en）：glm coding plan / reddit / price / limits / lite / pro / review / vs claude / china / max
- `小红书点点`（zh-CN）：小红书点点 / 小红书点点ai / 小红书点点网页版 / 小红书点点下载 / 小红书点点api / 小红书点点电脑版
- `小红书ai `（zh-CN）：小红书ai工具 / 小红书ai搜索 / 小红书 ai agent / 小红书ai点点 / 小红书ai助手 / 小红书ai客服 / 小红书ai检测 / 小红书ai文案 / 小红书ai图片 / 小红书ai运营
- `rednote `（en）：rednote app / careers / downloader / login / website / download video / careers usa / ipo / palo alto / logo（careers、ipo、logo 为非产品意图，排除）
- `minimax `（zh-CN）：minimax h3 / minimax m3 / minimax audio / minimax coding plan / minimax 股价（排除）/ minimax code / minimax hub / minimax招聘（排除）/ minimax 官网 / minimax stock（排除）
- `minimax agent`（en）：minimax agent / desktop / ai / pricing / team / github / download / cn / swarm / free
- `hailuo ai`（en）：hailuo ai / hailuo ai (minimax) / video / video generator / image to video / pricing / app / image / app download / promo code

## 附录 B：Brave Search 采样（2026-09-18）

仅一次查询成功（`小红书 点点 AI助手`），返回知乎、猎云网、多知网、新浪财经、百度百科、App Store 等 19 条结果；关键摘要包括“点点是小红书推出的AI搜索助手，主打生活服务场景的聚合搜索”“小红书点点是小红书于2024年12月推出的AI搜索助手”（与窄播报道的上线时间口径不一，正文采用更保守的“2024 年推出”）、“日前宣布接入DeepSeek”（未核验，未采用）。其余 Brave 查询（微信小微、Manus pricing）被 429 限流，未获得数据。
