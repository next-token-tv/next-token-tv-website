# GPT 与 iPhone Wiki FAQ 研究记录

## 范围与口径

本记录支持 `gpt` 和 `iphone` 两个产品 Wiki 正文。研究日期为 2026-09-17，面向中文和英文读者。需求线索来自当天 Google Autocomplete（`suggestqueries.google.com/complete/search?client=firefox`）的实际采样；未使用 Search Console、关键词工具或任何搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，顺序不表示排名。

官方事实核验同样在 2026-09-17 完成，来源见"事实边界"。节目引用基于本地中文逐字稿 #001、#002，quote 锚点用 `/tmp/nt-quote-anchors.mjs` 生成并逐条核对发言人。

## FAQ 候选与证据

| 页面 | 实际采样的种子词 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| GPT | zh `gpt和chatgpt的区别`、`gpt和chatgpt`；en `what is gpt`、`what is gpt in chatgpt` | 区分模型家族与助手产品 | 是：GPT 和 ChatGPT 有什么区别 | [模型目录](https://developers.openai.com/api/docs/models)、[API 平台](https://platform.openai.com/docs/overview) |
| GPT | en `gpt-6`、`gpt-6 astra`、`what is gpt 6 astra`；en `gpt-5.6`、`gpt-5.6 sol/luna/terra` | 当前型号与版本 | 是：现在最新的 GPT 模型；GPT-5.6 系列型号 | [模型目录](https://developers.openai.com/api/docs/models)、[GPT-6 Astra 发布说明](https://openai.com/index/gpt-6-astra/) |
| GPT | en `gpt api`（key/pricing/billing/platform/models/login）；zh `gpt官网 api`、`gpt官网价格` | 开发者接入与计费 | 是：在哪里申请 API Key；GPT API 怎么收费 | [API 平台](https://platform.openai.com/docs/overview)、[模型目录](https://developers.openai.com/api/docs/models) |
| GPT | zh `gpt是什么意思`、`gpt是什么的缩写`（混入"血液/肝"等医学含义） | 名称歧义排除 | 是：搜索 GPT 为什么出现不相干内容 | [OpenAI 官网](https://openai.com/) |
| iPhone | en `iphone duo`（price/release date/pre order/iphone 18 pro）；zh `iphone 折叠屏`（什么时候发布/价格/定价） | 发售状态与价格 | 是：Duo 现在可以买了吗；Duo 多少钱 | [iPhone Duo 新闻稿](https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/)、[产品页](https://www.apple.com/iphone-duo/) |
| iPhone | zh `iphone18`（18 pro/price/release）；en `iphone duo iphone 18 pro` | 机型比较与发售时间 | 是：Duo 和 18 Pro 怎么选；18 Pro 什么时候发售 | [18 Pro 新闻稿](https://www.apple.com/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/)、[Compare](https://www.apple.com/iphone/compare/) |
| iPhone | en `iphone air 2`、`iphone air 2 release date` | 后续机型预测 | 是（编辑补充口径）：Air 会有二代吗 | [iPhone 产品页](https://www.apple.com/iphone/) |

## 采样原始候选（2026-09-17）

- zh `gpt是什么`：gpt是什么／gpt是什么意思／gpt是什么的缩写／gpt是什么时候出来的／gpt 是 什么 血液／gpt 是 什么 ai／gpt是什么软件／gpt是什么肝／gpt是什么时候发布的／gpt是什么 抽血。医学含义（血液、肝、抽血）为同名歧义，排除。
- zh `gpt和chatgpt的区别`：gpt 和chatgpt的区别（仅 1 条）。
- zh `gpt和chatgpt`：gpt和chatgpt／gpt 和 chatgpt 区别。
- en `gpt api`：gpt api／gpt api pricing／gpt api key／gpt api costs／gpt api models／gpt api platform／gpt api usage／gpt api billing／gpt api model pricing／gpt api login。
- en `gpt-6`：gpt-6／gpt-6 polymarket／gpt-6 release date／gpt-6 openai／gpt-6 astra／gpt-6 reddit／gpt-6 rumors／gpt-6 release date polymarket／gpt-6 news／gpt-6 doug。polymarket、reddit、rumors 等投机候选不采用。
- en `what is gpt`：what is gpt 6 astra／what is gpt／what is gpt 5.6 sol／what is gpt in chatgpt／what is gpt stand for／what is gpt astra／what is gpt tv／what is gpt oss／what is gptzero／what is gpt-5.3-codex-spark。gptzero、gpt tv 为其他事物，排除。
- en `gpt-5.6`：gpt-5.6／gpt-5.6 sol／gpt-5.6 luna／gpt-5.6 sol pro／gpt-5.6 terra／gpt-5.6 luna terra sol／gpt-5.6 sol pricing／gpt-5.6 luna pricing／gpt-5.6 release date／gpt-5.6 pricing。
- zh `gpt官网`：gpt官网／gpt官网下载／gpt官网网址／gpt官网入口／gpt官网价格／gpt 官网 api／gpt官网公告／gpt官网打不开／gpt官网登录／gpt官网 chat.openai.com。多数指向 ChatGPT 导航，归 chatgpt 页范围，本页只取 API 入口与价格意图。
- en `iphone duo`：iphone duo／iphone duo price／iphone duo case／iphone duo release date／iphone duo cost／iphone duo iphone 18 pro／iphone duo magsafe／iphone duo dimensions／iphone duo pre order／iphone duo size。
- zh `iphone18`：iphone18／iphone 18 pro／iphone 18 pro max／iphone18 fold／iphone18 duo／iphone 18 price／iphone 18 release／iphone 18.2／iphone 18 color／iphone 18 ultra。`iphone 18.2` 是系统版本号混淆，`iphone 18 ultra` 无官方信息，均排除。
- zh `iphone 折叠屏`：iphone 折叠屏／iphone折叠屏什么时候发布／iphone折叠屏手机／iphone 折叠屏 价格／iphone 折叠屏发布时间／iphone折叠屏适配／iphone折叠屏定价／iphone 折叠屏供应商。
- en `iphone air`：iphone air／iphone air 2／iphone air weight／iphone air 2 release date／iphone air price／iphone air vs iphone 17／iphone air case／iphone air review／iphone air dimensions／iphone air battery life。

未单独采样的缺口：中文 `iphone duo 价格` 等品牌型号词、中文 API Key 问法。相关意图已由 zh 折叠屏与 en 词覆盖；正文 FAQ 中对应的个别表述按编辑补充处理，未伪装成联想数据。

## 事实边界（2026-09-17 核验）

- OpenAI 模型目录列出旗舰模型 GPT-6 Astra（`gpt-6-astra`）与 GPT-5.6 Sol（`gpt-5.6-sol`，别名 `gpt-5.6`）、GPT-5.6 Terra、GPT-5.6 Luna，以及图像（GPT-Image-2.5 Sunburst／Flare）、实时语音、转写等专用模型；旗舰模型支持推理与函数调用、联网搜索、文件搜索、Computer Use 等工具。https://developers.openai.com/api/docs/models
- GPT-6 Astra 发布说明称其为 GPT-5.6 Sol 的后继，"rolling out today to a limited set of organizations"，"over the coming days"扩展到 ChatGPT Plus／Pro／Business／Enterprise，并经 OpenAI API、Microsoft Azure、AWS Bedrock 提供；Enterprise 工作区发布时默认关闭。页面本身未标注具体日期（仅 2026 标签），正文因此不写具体发布日。https://openai.com/index/gpt-6-astra/
- ChatGPT 与 API 的入口、计费分离表述沿用 chatgpt 批次已核验的 https://platform.openai.com/docs/overview 。OpenAI 无独立的、可稳定访问的 API 价格页 URL（`developers.openai.com/api/pricing/` 返回 404，`openai.com/api/pricing/` 连接失败），正文价格一律指向模型目录页，不写具体数字。
- Apple 官网 iPhone 产品页当前阵容：iPhone Duo（New）、iPhone 18 Pro（Pre-order）与 18 Pro Max、iPhone Air、iPhone 17、iPhone 17e、iPhone 16。https://www.apple.com/iphone/
- iPhone Duo：2026-09-09 发布；内屏 7.6 英寸、外屏 5.4 英寸，展开比 iPhone 18 Pro Max 大 50%，首次支持 Split View，钛金属、侧边 Touch ID、仅 eSIM；美国起售价 1,999 美元（24 个月每月 83.29 美元），256GB–2TB；10 月 16 日预购、10 月 23 日起 70 多个国家/地区发售、10 月 30 日再加 28 个；随 iOS 27.1 出货。https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/ 、https://www.apple.com/iphone-duo/
- iPhone 18 Pro / Pro Max：2026-09-09 发布，9 月 12 日预购、9 月 18 日起在 65 多个国家/地区发售（9 月 25 日再加 20 个），1,199／1,299 美元起；iOS 27 于 9 月 14 日免费推送，Siri AI beta 初期英语、10 月扩五种语言、欧盟暂不可用。https://www.apple.com/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/
- 关键口径：iPhone Duo 在核验日"已发布、未开售"，正文与 FAQ 均按此表述，不把预告写成已发售。

## 节目证据

GPT（EP002 为主）：

- [chapter-03](/weekly/002/transcript#chapter-03)／[chapter-04](/weekly/002/transcript#chapter-04)：歸藏谈 Astra 3D 使用与整体评价（[quote-ccd9509479ed2535f667](/weekly/002/transcript#quote-ccd9509479ed2535f667)、[quote-7befc13448a71232968f](/weekly/002/transcript#quote-7befc13448a71232968f)）；橘子转述 Benchmark 比较（[quote-33f1c0f172adba1f8820](/weekly/002/transcript#quote-33f1c0f172adba1f8820)）。
- [chapter-05](/weekly/002/transcript#chapter-05)：杨攀称第一期播客与网站全用 Astra 制作（[quote-0b24d683e735d5c62dfa](/weekly/002/transcript#quote-0b24d683e735d5c62dfa)）；转述收购与购买 Mac 新闻并自行推测（[quote-f330240dcedd74d8282d](/weekly/002/transcript#quote-f330240dcedd74d8282d)）。
- [chapter-07](/weekly/002/transcript#chapter-07)：杨攀评 GPT 写作（[quote-34c317c8a5029b292b96](/weekly/002/transcript#quote-34c317c8a5029b292b96)）；橘子谈 GPT 5.5 起能写小说。
- [chapter-22](/weekly/002/transcript#chapter-22)：杨攀评 GPT Image 2.5 编辑稳定性（[quote-cc4aeb196c25c1de5bc7](/weekly/002/transcript#quote-cc4aeb196c25c1de5bc7)）。
- [chapter-26](/weekly/002/transcript#chapter-26)：杨攀的 bug 解释（[quote-86a3925861994bcf720c](/weekly/002/transcript#quote-86a3925861994bcf720c)）；向阳乔木转述社区"Juice 值"传闻（未证实，正文已标注）。
- EP001 [chapter-04](/weekly/001/transcript#chapter-04)：录制时 GPT-6 尚未发布，歸藏转述新架构说法（[quote-7d08f4942f9c4081ee94](/weekly/001/transcript#quote-7d08f4942f9c4081ee94)）。

iPhone（全部在 EP002）：

- [chapter-18](/weekly/002/transcript#chapter-18)：向阳乔木"重新发明折叠屏"观感（[quote-8a64cb3ad3d232b72c80](/weekly/002/transcript#quote-8a64cb3ad3d232b72c80)，正文概述未直链）；歸藏评交互与适配设计（[quote-0a034d649d6923ec63af](/weekly/002/transcript#quote-0a034d649d6923ec63af)）。
- [chapter-19](/weekly/002/transcript#chapter-19)：橘子"定义了三个东西"（[quote-8c2e9603aba0f850f6f6](/weekly/002/transcript#quote-8c2e9603aba0f850f6f6)）；杨攀对 Air 二代与折叠趋势的预测（[quote-2b0ea8d068363638405d](/weekly/002/transcript#quote-2b0ea8d068363638405d)）。
- [chapter-20](/weekly/002/transcript#chapter-20)：杨攀提发布会手表 AI 功能（[quote-eed13b4e19972d2004f1](/weekly/002/transcript#quote-eed13b4e19972d2004f1)）。
- [chapter-25](/weekly/002/transcript#chapter-25)：杨攀与歸藏谈 iPhone 语音输入摩擦与电量（[quote-d679f35e792156bf23bb](/weekly/002/transcript#quote-d679f35e792156bf23bb)）。

## 因证据不足或范围原因省略的内容

- EP001 chapter-08 的"Luna 已降 80%""200 美元额度用不完"与 chapter-04 的 Astra 推理成本／价格倍数：未核验的价格与配额说法，不写入正文。
- EP001 chapter-16 的"ChatGPT Work 的 Cloud 给一台主机（12G 运存）"：属 ChatGPT 产品功能（归 chatgpt 页范围），配置数字亦未核验。
- EP001 chapter-31 的 OpenAI API 转售折扣（7.5–8 折）：市场传闻，未核验。
- EP002 chapter-06 的"GPT-6 算 AGI""比 90% 白领强"：观点性比较，数字无依据，未采用。
- EP002 chapter-09 中"4.1 Flash"指代不明且非 GPT 家族，未采用。
- EP002 chapter-20 的 Apple Watch 心跳采集"60 倍／间隔 5 秒"：未核验数字，不写。
- EP002 chapter-19 的"领先国内一年以上""上千万播放"等量级说法与 chapter-28 的 iPhone 15／18 3D 打印例子：与产品事实关联弱或数字未核验，未写入。
- 与 chatgpt 页重复的问答（如"ChatGPT 官网在哪""ChatGPT 免费吗"）不重复设置；GPT 页 FAQ 从模型家族角度另选问题与措辞。

## 剩余问题

- Autocomplete 候选顺序不代表热度，且同一种子在不同地区／语言设置下结果会不同；本次未做地区控制采样。
- GPT-6 Astra 发布页无具体日期标注，正文的扩展节奏只能引用官方原句；后续应跟踪模型目录对可用状态的更新。
- iPhone Duo 首发名单是否含中国大陆未逐一核验，FAQ 沿用官方"70 多个国家/地区"措辞。
- 公开数据接入后，应按总体方案记录曝光、点击与目标查询覆盖率，替换本记录中的 N/A 口径。
