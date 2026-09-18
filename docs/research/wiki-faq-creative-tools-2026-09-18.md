# 创意与效率工具 Wiki FAQ 研究记录（blender、windows、seedance、mimo、jianying、diandian、chatgpt-work）

## 范围与口径

本记录支持 `blender`、`windows`、`seedance`、`mimo`、`jianying`、`diandian`、`chatgpt-work` 七个产品实体的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。FAQ 需求线索来自 Baidu sugrec 联想接口与 Google suggest 联想接口的实际采样（见下表），未使用 Search Console、关键词工具或搜索量数据；所有搜索量、难度、排名、点击与热度均为 **N/A**，联想词的出现不等于热门，联想顺序不构成排名。

采样方法：对每个实体取裸词与带品牌/用途修饰的种子词，分别经 `https://www.baidu.com/sugrec?prod=pc&wd=<词>`（中文）与 `https://suggestqueries.google.com/complete/search?client=firefox&hl=<语言>&q=<词>`（英文）获取联想；本次未保留独立原始 JSON 文件，下表"实际采样问法"即为当日接口返回的完整候选摘录。

## FAQ 候选与证据

| 页面 | 种子词与语言 | 实际采样的联想（2026-09-18） | 意图 | FAQ 采用 | 官方答案入口 |
| --- | --- | --- | --- | --- | --- |
| blender | `blender`（Baidu zh）；`blender`、`blender bpy`（Google en） | blender使用教程、blender下载、blender是什么软件、blender官网、blender快捷键、blender怎么读；blender download、blender mcp、blender software、blender 3d、blender 5.2 | 定义、导航、下载、脚本化 | 是（是什么/免费与官网/bpy 与自动化/平台） | [blender.org](https://www.blender.org/)、[下载页](https://www.blender.org/download/)、[bpy API 文档](https://docs.blender.org/api/current/) |
| windows | `windows`、`windows10 停止支持`、`windows 12`（Baidu zh）；`windows`、`windows 10 end of support`、`windows 12`（Google en） | windows 11、windows截屏快捷键、windows是什么意思、windows怎么激活、windows官网；Windows10停止支持了吗、停止支持时间、后有影响吗；windows 11 download、windows 10、windows screenshot、windows 12 release date | 导航、支持状态、新版本传闻 | 是（官网/Win10 支持状态/免费升级/Windows 12 传闻）；截屏快捷键未采用（未核验官方页面） | [microsoft.com/windows](https://www.microsoft.com/windows/)、[支持状态页](https://www.microsoft.com/en-us/windows/end-of-support) |
| seedance | `seedance`、`seedance 2.5`（Baidu zh）；`seedance`、`seedance 2.5`、`seedance api pricing`（Google en） | seedance是什么意思、seedance是即梦吗、seedance是哪家公司的、seedance 2.5收费标准、上线时间、在哪里用、免费吗、小云雀seedance 2.5；seedance 2.5 release date/price/api/dreamina | 定义、归属、入口、价格 | 是（是什么与归属/哪里用/收费/与即梦关系）；"上线时间"未采用（官方页无日期，避免编造） | [Seedance 2.5 官方页](https://seed.bytedance.com/en/seedance2_5)、[BytePlus 产品页](https://www.byteplus.com/en/product/seedance) |
| mimo | `mimo`、`mimo 小米`（Baidu zh）；`xiaomi mimo`（Google en） | mimo大模型、mimo官网、mimo小米、mimo小米开发平台、小米mimo是干什么用的、小米mimo是什么意思；xiaomi mimo desktop/v2.5/code/api/token plan/pricing | 定义、歧义排除、导航、计费 | 是（是什么与归属/官网/API 计费/开源计划） | [mimo.mi.com](https://mimo.mi.com/)、[V2.5 模型页](https://mimo.mi.com/models/zh-CN/mimo-v2.5)、[V2.5 动态页](https://mimo.mi.com/docs/zh-CN/news/latest/v2.5-news) |
| jianying | `jianying`、`剪映专业版`（Baidu zh）；`jianying`（Google en，混入人名与台球杆品牌） | 剪映官网、剪映下载、剪映客服、剪映专业版、剪映专业版收费吗、剪映国际版；jianying pro、jianying app | 导航、版本区别、收费、国际版 | 是（官网/专业版区别/收费/与 CapCut 关系/Agent 可用性，最后一问为编辑补充，依据节目讨论） | [capcut.cn](https://www.capcut.cn/)、[capcut.com](https://www.capcut.com/)、[字节跳动服务中心](https://kefu.bytedance.com/) |
| diandian | `小红书点点`、`点点 ai`、`diandian`（Baidu zh）；`diandian`（Google en，混入人名与物流公司） | 小红书点点ai、小红书点点怎么删除、小红书点点ai可信吗、小红书点点在哪里打开、小红书点点是啥、点点ai是哪个公司的、小红书点点和豆包上哪个说法更准 | 定义、归属、打开方式、可信度、比较 | 是（是什么/在哪里打开/可信吗/与小微豆包比较）；删除历史、关闭等操作类问题未采用（无官方文档核验步骤） | [dots.ai](https://studio.dots.ai/)；节目讨论见 Weekly #002 chapter-17、chapter-21 |
| chatgpt-work | `chatgpt work`（Baidu zh）；`chatgpt work`、`chatgpt work vs codex`（Google en） | ChatGPT work、ChatGPT work和codex；chatgpt work vs chat、work download、work mode、work vs codex、is chatgpt work and codex the same thing、work app | 定义、与 Codex/Chat 区别、入口 | 是（是什么/与 Codex 区别/与 Chat 区别/入口/计费） | [ChatGPT Work and Codex 官方帮助文档](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)、[ChatGPT 定价页](https://chatgpt.com/pricing/) |

歧义处理：`diandian` 裸词混入"点点租、点点互动、点点数据"及人名，`mimo` 裸词混入 mimosa（饮品/植物）与通信 MIMO 术语，`jianying` 英文混入人名与 pool cue 品牌，均只采用带品牌或用途修饰的候选；`windows` 裸词混入餐厅名（windows on the world）等，无实际影响。`seedance 2.5免费吗`、`unlimited free`、`free trial` 等候选未采用——官方页未提供可核验的免费层说明，仅写"按用量计费，费率见官方定价入口"。

## 事实核验（2026-09-18 实际抓取）

- **blender**：[blender.org](https://www.blender.org/) 确认"free and open source 3D creation suite"、GNU GPL、贡献者共有、Blender Foundation、Cycles 渲染、Grease Pencil、Python API 加载项；[下载页](https://www.blender.org/download/)确认 Windows（x64/ARM）、macOS（Apple Silicon）、Linux 安装包及免费；[API 文档](https://docs.blender.org/api/current/)确认 bpy.context/bpy.data/bpy.ops 与"Blender as a Python Module"。页面同时显示 5.2.2 LTS 等版本号，正文未固定为当前版本，仅留下载页指针。
- **windows**：[microsoft.com/windows](https://www.microsoft.com/windows/) 确认 Windows 11 为页面主推版本、无任何"Windows 12"信息；[支持状态页](https://www.microsoft.com/en-us/windows/end-of-support)确认 Windows 10 于 2025 年 10 月 14 日结束支持、免费升级路径、ESU 计划（页面给出 ESU 更新期限，正文未引用具体期限数字，仅留指针）。
- **seedance**：[官方 2.5 页面](https://seed.bytedance.com/en/seedance2_5)确认开发方为 ByteDance Seed、"next-generation audio-video joint generation model"、30 秒生成与两次延长、参考视频理解、白模控制与绿幕编辑、Get API/Try now 入口；[BytePlus 产品页](https://www.byteplus.com/en/product/seedance)确认"Dreamina Seedance 2.5"标注、"API fully available now"、文本/图像生成 4–30 秒、最多 50 个多模态输入、480P/720P、按 Token 结算的套餐。官方页未给发布日期，未写"1.0"细节（YAML 别名 Seedance 1.0 未逐字核验，正文只写"模型家族"）。
- **mimo**：确认指代为小米（站点页脚 Copyright©2026 Xiaomi、support-mimo@xiaomi.com、GitHub/HuggingFace 的 XiaomiMiMo）。[mimo.mi.com](https://mimo.mi.com/) 确认 V2.5 家族成员、OpenAI/Anthropic 兼容 API、Token Plan、MiMo Desktop/Code/Claw/Studio；[V2.5 动态页](https://mimo.mi.com/docs/zh-CN/news/latest/v2.5-news)（页面更新日期 2026-06-29）确认"开启公测"及 V2.5 与 V2.5-Pro 的开源计划表述（"即将全球开源"——正文按"宣布开源计划"表述，未写成已开源）。
- **jianying**：[capcut.cn](https://www.capcut.cn/) 确认官网、开发者"深圳市脸萌科技有限公司"、电脑专业版与移动端、AI 工具与专业剪辑功能清单、macOS v11.5.1+ 推荐配置；首页无价格信息（正文如实说明）。[capcut.com](https://www.capcut.com/) 确认为海外 CapCut 站点；两站关系官方页面未说明，FAQ 答案只写"分别面向内地与海外、以各自官网为准"，未替官方认定对应关系。
- **diandian**：官方来源核验受限。[dots.ai](https://studio.dots.ai/) 可访问，但抓取仅返回产品名"点点"（JS 渲染站点），docs 路径为空；搜索引擎抓取被反爬拦截。正文事实仅保留两类证据：(1) dots.ai 为官方域名；(2) Weekly #002 多位参与者在 chapter-17/21 中对"小红书点点"的使用描述。YAML 摘要（AI 生活问答助手）与节目证据一致，但未获独立官方文档佐证，属本批最弱条目。
- **chatgpt-work**：[官方帮助文档 20001275](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)确认"Work is an agent designed for longer, multi-step work and finished deliverables"、Chat/Work/Codex 三形态、任务类型（文档/表格/演示/报告/网站）、Scheduled Tasks、云端与本地运行及"本地运行时上下文仍可能存云端"的说明、用量结构与 Codex 相同、逐步扩大可用范围。计划与模型细节（GPT-6 Pro 各档位等）未写入正文，仅留定价页指针。

## 节目证据与引用清单

逐字稿为本地中文快照（#001、#002），全部引用先读原文后撰写；英文正文链接中文章节并注明无英文逐字稿。

| 实体 | 章节 | 段落锚点 | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| blender | 002 chapter-03、chapter-04、chapter-23 | quote-fe0f9eda66da21490336（ch-04，guizang） | 歸藏、杨攀 | Agent 用 bpy 写代码建模、Token 效率；GPT-6 3D 演示语境 |
| windows | 001 chapter-12、chapter-24；002 chapter-21 | 无（均为零散提及，用章节链接） | 歸藏、向阳乔木 | Windows 配置性价比；小米同步助手 Mac/Windows 版；豆包输入法 Windows 版快讯 |
| seedance | 001 chapter-30、chapter-31 | quote-44958efa4a8671429878（ch-30）、quote-fa58955b16bb8ffcc655（ch-31），均 guizang | 歸藏、橘子 | AI 短剧爆发；Seedance 2.5 供应不足、转售无利润 |
| mimo | 001 chapter-08 | quote-5c0cb3da1188fd68023e（guizang） | 歸藏、橘子 | MiMo 2.5 长期处于低价位段、比 DeepSeek Flash 便宜数倍、免费提供 |
| jianying | 002 chapter-05 | quote-555026c6546093f334d0（orange）、quote-44ebeac53c74a2109226（yangpan） | 橘子、杨攀、歸藏 | 剪映未适配 Agent、回到 FFmpeg、不做 CLI、被颠覆可能 |
| diandian | 002 chapter-17、chapter-21 | quote-35e5698bdce70446930e（orange，ch-17）、quote-69bc3c4a96ec98041ff9（yangpan，ch-17） | 橘子、杨攀、歸藏、向阳乔木 | 生活问答用法、数据源对比、平台封闭 |
| chatgpt-work | 001 chapter-16；002 chapter-21 | quote-9459648a0637ee9aacc8（yangpan，ch-16）、quote-e8b27e3016c5fc5e59bb（guizang，ch-21） | 杨攀、歸藏 | GPT Work Cloud 主机；定时任务健康周报 |

锚点由 `/tmp/nt-quote-anchors.mjs` 对本地 JSON 生成，引用时逐条复核章节归属（seedance 两段曾误标 002，已改正为 001）。

## 事实边界与未知项

- seedance：官方页未给出各版本发布日期、未说明与即梦/Dreamina 的产品对应关系；正文与 FAQ 均未替官方下结论。YAML 别名"Seedance 1.0"未逐字核验，未进入正文。
- mimo：V2.5 开源为官方宣布的计划，未写成已完成；具体价格、配额、夜间折扣细节留在官方页指针。
- jianying：官网首页无价格；"剪映与 CapCut 的产品对应关系"官方未说明，未采用"剪映就是 CapCut 中国版"这一常见说法作为事实。
- diandian：官方站点内容抓取失败，功能细节只能依托节目发言并明确归属；"在哪里打开"FAQ 的答案部分依赖节目参与者描述，已在研究记录标注，页面答案同时给出官方站点入口。YAML 别名"Dots"未核验，未写入正文。
- windows：截屏快捷键（Baidu 高频联想）未核验官方支持页，未采用；ESU 具体期限未写入正文。
- chatgpt-work：官方文档说明可用性"逐步扩大"，正文以指针表述，未写具体计划档位。
- 全部正文遵守时间稳定性口径：无"核验日/截至本页更新"类快照表述；历史事件（Windows 10 结束支持、MiMo V2.5 公测）写明日期按既成事实；价格与版本状态均为官方实时页指针。
