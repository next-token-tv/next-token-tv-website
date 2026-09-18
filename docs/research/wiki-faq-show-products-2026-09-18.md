# 栏目与演语/MarsWave 产品 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `next-token-weekly`、`lovart`、`listenhub`、`libtv`、`liblib` 的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。搜索需求线索来自 Google Autocomplete（suggestqueries.google.com，`client=firefox`，zh-CN 与 en 两种语言）；本次没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**，联想顺序不表示热度。原始联想数据直接摘录于下表（未另存 JSON）。

## FAQ 候选与证据

采样日期均为 2026-09-18。

| 页面 | 实际采样的搜索问法或变体（来源语言） | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| lovart | `lovart 官网`、`lovart是什么`、`lovart是哪个公司的`、`lovart ai 费用`、`lovart skills`（zh）；`lovart ai free`、`lovart ai pricing`、`lovart ai review`、`lovart ai app`（en） | 导航、定义、归属、收费 | 是（官网/公司/免费/发布时间） | [lovart.ai](https://www.lovart.ai/)、[官方定价页](https://www.lovart.ai/pricing) |
| liblib | `liblibai 官网`、`liblibai (哩布哩布)`、`哩布哩布ai官网`、`哩布哩布是什么`、`liblibai 融资`、`liblibai 创始人`（zh）；`liblib ai english`、`liblib ai lovart`、`liblib ai video`（en） | 导航、定义、公司关系、融资 | 是（是什么/官网/公司/免费/用户数据） | [liblib.art](https://www.liblib.art/) |
| libtv | `libtv 官网`、`libtv 是 哪个 公司 的`、`libtv是什么`、`libtv skill`、`libtv cli`、`libtv agent`（zh）；`libtv ai`、`libtv skill`、`libtv cli`、`libtv github`（en） | 导航、定义、归属 | 是（是什么/官网/公司/与 Liblib 区别） | [liblib.tv](https://www.liblib.tv/) |
| listenhub | `listenhub官网`、`listenhub 公司`、`listenhub api key`、`listenhub tts`、`listenhub github`（zh）；`listenhub ai podcast`、`https listenhub ai zh`（en） | 导航、定义、归属、开发者入口 | 是（是什么/官网/公司/免费/播客生成） | [listenhub.ai](https://listenhub.ai/) |
| next-token-weekly | 采样词 `Next Token 播客`、`词元之外`、`next token weekly`（zh/en）在 Google Autocomplete 均返回空列表 | — | 编辑补充（经任务授权：在哪收听/是否免费/更新频率/文字稿），答案依托官方渠道页 | [nexttoken.tv/weekly](https://nexttoken.tv/weekly) |

说明：`next-token-weekly` 无联想结果本身是有效观察，其 FAQ 全部标注为编辑补充，答案完全来自官网节目页与各期节目页可核验的信息。`lovart skills`、`libtv skill`、`listenhub skill`、`libtv cli`、`listenhub cli` 等联想指向 Agent Skills / CLI / API 集成，listenhub 正文据此保留了开发者工具一节；lovart/libtv 的 skill 需求未采用为 FAQ（官方文档入口不足，不编造）。

## 事实核验（官方原始资料）

| 事实 | 来源 | 核验方式 |
| --- | --- | --- |
| lovart.ai 可达；标题 "Lovart – World's First AI Design Agent…"，描述为对话式产出 logo、包装、社媒内容、视频广告 | https://www.lovart.ai/ | curl 抓取首页 HTML（WebFetch 多次 ECONNRESET，改用 curl，200） |
| Lovart 定价页列出免费与 Pro 方案 | https://www.lovart.ai/pricing | curl 抓取 HTML meta（"Free & Pro AI Design Agent"） |
| liblib.art 标题 "LiblibAI-哩布哩布AI - 国内极具影响力的AI创作平台"；meta 描述：AI绘画原创模型分享社区、10万+模型免费下载、webUI/comfyUI 在线工具、在线模型训练 | https://www.liblib.art/ | curl 抓取首页 HTML（200） |
| liblib.tv 定位"专业视频创作工具"；画布创作、视频/图片/音频生成与智能剪辑、LibTV Agent、深度动作捕捉、逐帧拉片、导演台、片段重拍、口播视频、Blender 插件；站内有 Seedance 2.5 限时价格促销（正文未采用时效价格） | https://www.liblib.tv/ | WebFetch（200） |
| listenhub.ai：从想法/链接/文档产出音频、图片、幻灯片、视频；AI 播客（单人/双人主持）、TTS/配音/音频转文字/声音克隆、AI 图片、AI 视频（调用 Seedance 等模型）、幻灯片导出 PPTX/视频/音频、开发者工具 CLI/JavaScript SDK/OpenAPI/MCP Server/Agent Skills；免费起步（注册赠额度、无需信用卡）、付费加额度与功能、生成内容可商用 | https://listenhub.ai/ | WebFetch（200） |
| ListenHub 提供方为 MarsWave（© 2026 MarsWave） | https://listenhub.ai/ 页脚 | WebFetch |
| 陈冕自述：星流 2024 年失败、Lovart beta 2025 年 5 月 / 正式版同年 7 月、ChatCanvas 画布框选+自然语言编辑、LibTV 2026 年 3 月上线且贡献过半收入、公司 ARR 超 3 亿美元 | [晚点聊 LateTalk #175（出海网转载）](https://www.chwang.com/article/208345738693) | WebFetch（200），中文原句摘录见该文 |
| 演语科技 2026 年 6 月 18 日官宣 B+ 轮近 3 亿美元、估值超 20 亿美元、Granite Asia/腾讯/顺为联投；Liblib 累计用户超 3000 万、原创模型超 50 万 | [晚点报道（网易转载）](https://www.163.com/dy/article/KVMS9GSD0531M1CO.html) | WebFetch（200；curl 直接访问返回 403 反爬，不影响内容核验） |
| MarsWave 官网可达 | https://marswave.ai/ | curl（200） |
| 橘子与 MarsWave/ListenHub 的创始人关系 | 实体 YAML `src/content/data/people/orange.yaml` relations（来源 watcha.cn/reply/20834，curl 200） | 本地 YAML + 来源可达性 |

## 节目证据（本地逐字稿）

两期逐字稿（001、002）中，`lovart`、`liblib`、`libtv`、`listenhub` 的 entity-link 标记均为零，正文文本亦无这些产品名（已按名称逐一检索）。采用的替代证据（已用 `/tmp/nt-quote-anchors.mjs` 核验锚点）：

| 章节 | 发言人 | 锚点 | 用于 |
| --- | --- | --- | --- |
| #001 chapter-01 节目片头 | 片头旁白 | `quote-9bd0937d3d9f857ad0e2` | next-token-weekly 自我介绍（zh 正文引用；en 引用同章节链接） |
| #001 chapter-02 开场 | yangpan | `quote-69834eeaff7a45b0175d`、`quote-bdac18a6b0ac65135c7c` | next-token-weekly 定位与初衷 |
| #001 chapter-10 不要羞于卖 Token | orange | `quote-5469faab0cf860e26097` | lovart/libtv/liblib（陈冕相关） |
| #001 chapter-31 AI 应用市场回暖了吗 | orange | `quote-8d66c38f45b6a51c90a3` | lovart/libtv/liblib（陈冕相关） |
| #002 chapter-13 Grok Bot / Muse | xiangyang-qiaomu | `quote-359d7ecf8e1630208b43` | liblib（陈冕相关） |
| #002 chapter-22 音乐与图像编辑 | yangpan | `quote-33584e54dfc505a42c18` | libtv（Agent 编辑的领域语境） |
| #002 chapter-23 设计 Agent 为什么也需要执行环境 | guizang | `quote-d005ab06bf8c7838d1cf` | lovart（设计 Agent 类别语境，未点名） |

归属口径：陈冕/冕神相关发言均为主理人提及，非其本人发言；EP002 chapter-23 讨论的是"设计 Agent"类别，未点名 Lovart，正文写明"没有点名具体产品"。

## 采用边界与省略项

- lovart.ai 页面上的 "100K+ creators"、"World's First" 等营销数字与头衔未进入正文。
- liblib.tv 的 Seedance 2.5 "0.29 元/秒" 限时价格与年费促销为时效信息，未采用。
- listenhub.ai 的 "910 voices"、"634,000+ audio/video pieces" 等官网数字未采用（避免精确数字堆砌）；"12 languages" 表述弱化为官网说明的列举。
- 晚点报道中"中国每三位设计师就有一位使用 Liblib AI"为宣传性主张，未采用。
- 陈冕自述的收入、ARR 数据在正文中明确标注为当事人陈述。
- lovart 的产品功能细节（除官网 meta 与访谈提及的 ChatCanvas 外）无法核验，未展开；WebFetch 对 lovart.ai 持续 ECONNRESET，最终以 curl 抓取 HTML 完成核验。
- `next-token-weekly` 的"是否免费"FAQ 表述限定为"平台公开收听收看 + 官网文字稿免费开放"，不替平台断言账户规则。

## 未知项

-lovart 在两期节目之外无第三方可靠评测可引，产品当前功能清单依赖官网实时页。
- liblib 在英文世界的使用入口（en 站点是否存在）未核验，en 正文只说明官网以中文为主。
- `next-token-weekly` 无任何搜索联想数据，其 FAQ 需求依据仅为任务授权的真实问题类型 + 官方渠道可答性。
