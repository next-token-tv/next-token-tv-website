# 云与软件品牌 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `aws`、`vercel`、`tencent`、`stripe`、`siliconflow`、`nubia`、`microsoft`、`google-deepmind` 八个品牌条目的 Wiki 正文。研究日期为 2026-09-18，面向中文和英文读者。本次没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**；联想候选的出现不等于热门，也不构成效果承诺。

需求线索的数据源是 Google 公开搜索联想端点（`https://suggestqueries.google.com/complete/search?client=firefox&q=<seed>`，经 `curl` 读取返回的 JSON）。本批任务环境没有独立的 WebSearch 服务，"相关问题"（People Also Ask）类线索未能采集；未采到联想支撑、但按页面完整性需要的问题在下表标注"编辑补充"。

## 联想采样原始数据

采样日期均为 2026-09-18；`zh` 表示简体中文种子词，`en` 表示英文种子词。

| 种子词（语言） | 返回联想（原样） |
| --- | --- |
| `aws`（en） | aws；aws certifications；aws console；aws login；aws outage；aws bedrock；aws reinvent；aws ai；aws reinvent 2026；aws skill builder |
| `aws是什么`（zh） | aws是什么；aws是什么公司；aws是什么意思；aws是什么 新加坡；aws 是 什么 ptt；aws 是 什么 薪水；aws 是 什么 缩写；阿魏酸是什么 |
| `aws cloud`（en） | aws cloud practitioner；aws cloudfront；aws cloudwatch；aws cloud；aws cloudtrail；aws cloudformation；aws cloud practitioner certification；aws cloudscape；aws cloud institute；aws cloudshell |
| `vercel`（en） | vercel；vercel careers；vercel app；vercel ai sdk；vercel login；vercel ai；vercel v0；vercel domains；vercel ai gateway；vercel valuation |
| `vercel是什么`（zh） | vercel是什么；vercel是什么公司；vercel是什么平台；vercel是什么网站；vercel是什么软件 |
| `腾讯`（zh） | 腾讯视频；腾讯会议；腾讯文档；腾讯云；腾讯；腾讯体育；腾讯元宝；腾讯企业邮箱；腾讯地图；腾讯电脑管家 |
| `tencent`（en） | tencent stock；tencent games；tencent video；tencent meeting；tencent stock hk；tencent careers；tencent hy3；tencent share price；tencent music；tencent market cap |
| `腾讯云`（zh） | 腾讯云；腾讯云服务器；腾讯云控制台；腾讯云国际站；腾讯云 coding plan；腾讯云域名；腾讯云官网；腾讯云文档；腾讯云cos；腾讯云游戏 |
| `stripe`（en） | stripe；stripe careers；stripe login；striped bass；stripe stock；stripe inc；stripe jobs；stripe payments；stripe ipo；stripe seattle |
| `stripe 支付`（zh） | stripe 支付；stripe 支付宝；stripe 支付 是 什么；stripe 支付 台湾；stripe 支付 安全 吗；stripe 支付 ptt；stripe 支付 流程；stripe 支付 接入；stripe 支付 方式 |
| `stripe payments`（en） | stripe payments；stripe payments company；stripe payments reviews；stripe payments login；stripe payments safe；stripe payments fraud investigator；stripe payments how does it work；stripe payments fees；stripe payments phone number；stripe payments customer service |
| `硅基流动`（zh） | 硅基流动；硅基流动 api；硅基流动官网；硅基流动 siliconflow；硅基流动免费模型；硅基流动 coding plan；硅基流动api接口地址；硅基流动招股书；硅基流动邀请码；硅基流动 上市 |
| `siliconflow`（en） | siliconflow；siliconflow api key；siliconflow login；siliconflow api；siliconflow ai；siliconflow cn；siliconflow free models；siliconflow careers；siliconflow reddit；siliconflow api url |
| `努比亚`（zh） | 努比亚；努比亚手机；努比亚z80 ultra；努比亚人；努比亚 navix ultra；努比亚红魔；努比亚官网；努比亚ai手机；努比亚neo 5 max；努比亚技术有限公司 |
| `努比亚手机`（zh） | 努比亚手机；努比亚手机怎么样；努比亚手机官网；努比亚手机是哪个国家的；努比亚手机台湾 |
| `nubia`（en） | nubian；nubian goats；nubia；nubian jam 2026；nubian jam；nubian meaning；nubian nose；nubia z80 ultra；nubian queen；nubiani |
| `nubia phone`（en） | nubia phone；nubia phones usa；nubia phone price；nubia phone company；nubia phone for sale；nubia phone watch；nubia phone z70；nubia phone review；nubia phone philippines；nubia phone origin country |
| `微软`（zh） | 微软邮箱；微软；微软股票；微软官网；微软股价；微软邮箱登录；微软商店；微软裁员；微软ai；微软账户 |
| `microsoft`（en） | microsoft；microsoft stock；microsoft word；microsoft 365；microsoft careers；microsoft forms；microsoft layoffs；microsoft account；microsoft stock price；microsoft teams |
| `deepmind`（en） | deepmind；deepmind careers；deepmind ceo；deepmind founder；deepmind 12；deepmind ai；deepmind google；deepmind jobs；deepmind alphafold；deepmind weather |
| `google deepmind`（en） | google deepmind；google deepmind careers；google deepmind jobs；google deepmind ceo；google deepmind alumni fusion startup；google deepmind weather；google deepmind salary；google deepmind internship；google deepmind alphagenome atlas release；google deepmind seattle |
| `deepmind是什么`（zh） | deepmind是什么；deepmind是什么公司；google deepmind是什么 |

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| aws | `aws是什么`、`aws是什么公司`、`aws是什么意思` | 定义 | 是 | [AWS 概览白皮书](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html) |
| aws | `aws是什么公司`（归属）、`aws 是 什么 缩写`（部分支撑） | 归属关系 | 是（"AWS 是什么公司"答案内处理归属） | [中文维基百科：亚马逊云服务](https://zh.wikipedia.org/wiki/%E4%BA%9A%E9%A9%AC%E9%80%8A%E4%BA%91%E6%9C%8D%E5%8A%A1) |
| aws | `aws console`、`aws login`（导航类） | 导航 | 是（"AWS 官网在哪里"） | [aws.amazon.com](https://aws.amazon.com/)、[About AWS](https://aws.amazon.com/about-aws/) |
| aws | "AWS 提供哪些服务？"（`aws cloud` 分类联想的编辑归纳） | 产品线概览 | 是 | [AWS 概览白皮书](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html)、[产品目录](https://aws.amazon.com/products/) |
| vercel | `vercel是什么`、`vercel是什么公司/平台` | 定义 | 是 | [vercel.com/about](https://vercel.com/about) |
| vercel | `vercel v0` | 产品关系 | 是 | [v0.app](https://v0.app/) |
| vercel | `vercel ai sdk`、`vercel ai gateway` | 产品关系 | 部分（AI SDK 写入正文，AI Gateway 未核验、未写） | [vercel.com](https://vercel.com/) |
| vercel | "Vercel 和 Next.js 是什么关系？"（编辑补充） | 产品关系 | 是 | [nextjs.org](https://nextjs.org/)、[Wikipedia: Vercel](https://en.wikipedia.org/wiki/Vercel) |
| tencent | `腾讯`（联想以产品词为主）、"腾讯有哪些主要产品？"（编辑归纳） | 产品线概览 | 是 | [腾讯 About](https://www.tencent.com/en-us/about.html) |
| tencent | `腾讯云` | 产品关系 | 是 | [腾讯 About](https://www.tencent.com/en-us/about.html)、[腾讯云条目](/wiki/brands/tencent-cloud) |
| tencent | "腾讯和微信是什么关系？"（编辑补充） | 产品关系 | 是 | [微信产品页](https://www.tencent.com/products/weixin-wechat/) |
| tencent | `tencent games` | 业务线 | 部分（IEG 写入正文，未单列 FAQ） | [腾讯 About](https://www.tencent.com/en-us/about.html) |
| stripe | `stripe 支付 是 什么`、`stripe payments company`、`stripe payments how does it work` | 定义 | 是 | [stripe.com/about](https://stripe.com/about) |
| stripe | `stripe payments fees` | 计费 | 是（指针式答案，不固定费率） | [stripe.com/pricing](https://stripe.com/pricing) |
| stripe | `stripe payments safe`、`stripe 支付 安全 吗` | 信任 | 是（指向 Radar 与官方文档） | [docs.stripe.com](https://docs.stripe.com/) |
| stripe | "Stripe 和 OpenRouter 是什么关系？"（编辑补充，正文有官方新闻稿支撑） | 产品关系 | 是 | [收购新闻稿（2026-08-19）](https://stripe.com/newsroom/news/stripe-agrees-to-acquire-openrouter) |
| siliconflow | `硅基流动官网`、`siliconflow cn` | 导航 | 是 | [siliconflow.cn](https://siliconflow.cn/)、[siliconflow.com](https://siliconflow.com/) |
| siliconflow | `siliconflow api key`、`siliconflow api url`、`硅基流动api接口地址` | 开发者信息 | 是 | [云控制台](https://cloud.siliconflow.cn/)、[官方文档](https://docs.siliconflow.cn/) |
| siliconflow | "硅基流动是什么公司？"（`硅基流动 siliconflow` 联想＋编辑归纳） | 定义 | 是 | [siliconflow.cn/about](https://siliconflow.cn/about) |
| siliconflow | `硅基流动免费模型`、`siliconflow free models` | 产品信息 | 是（指针式答案，不承诺免费） | [官方文档](https://docs.siliconflow.cn/) |
| nubia | `努比亚手机是哪个国家的`、`nubia phone origin country` | 公司背景 | 是 | [Wikipedia: Nubia Technology](https://en.wikipedia.org/wiki/Nubia_Technology) |
| nubia | "努比亚和中兴是什么关系？"（`努比亚技术有限公司` 相关，编辑归纳） | 归属关系 | 是 | [Wikipedia: Nubia Technology](https://en.wikipedia.org/wiki/Nubia_Technology)、[中兴官网](https://www.zte.com.cn/) |
| nubia | `努比亚红魔`、`nubia phone`（红魔产品关系） | 产品关系 | 是 | [Wikipedia: Nubia Technology](https://en.wikipedia.org/wiki/Nubia_Technology) |
| nubia | `努比亚官网`、`努比亚手机官网` | 导航 | 是 | [intl.nubia.com](https://intl.nubia.com/)、[nubia.com](https://www.nubia.com/) |
| microsoft | `微软官网`、`microsoft`（导航） | 导航 | 是 | [microsoft.com](https://www.microsoft.com/)、[About](https://www.microsoft.com/en-us/about) |
| microsoft | "微软是哪个国家的公司？"（编辑补充） | 公司背景 | 是 | [Wikipedia: Microsoft](https://en.wikipedia.org/wiki/Microsoft) |
| microsoft | "微软有哪些主要产品？"（`microsoft 365`、`microsoft word` 等产品词联想的编辑归纳） | 产品线概览 | 是 | [Microsoft About](https://www.microsoft.com/en-us/about) |
| microsoft | "微软和 Windows 是什么关系？"（编辑补充） | 产品关系 | 是 | [Windows 产品页](https://www.microsoft.com/windows/)、[Windows 条目](/wiki/products/windows) |
| microsoft | `微软ai` | AI 布局 | 部分（Copilot 写入正文，未单列 FAQ） | [Microsoft About](https://www.microsoft.com/en-us/about) |
| google-deepmind | `deepmind是什么`、`deepmind是什么公司`、`google deepmind是什么` | 定义 | 是 | [DeepMind About](https://deepmind.google/about/) |
| google-deepmind | `deepmind google`、`google deepmind` | 归属关系 | 是 | [DeepMind About](https://deepmind.google/about/) |
| google-deepmind | `deepmind alphafold`、`deepmind weather` | 成果 | 部分（AlphaFold 写入正文与 FAQ 成果题；WeatherNext 仅正文列举） | [DeepMind About](https://deepmind.google/about/) |
| google-deepmind | `deepmind ceo`、`deepmind founder` | 人物 | 是 | [DeepMind About](https://deepmind.google/about/) |
| google-deepmind | "DeepMind 和 Gemini 是什么关系？"（编辑补充） | 产品关系 | 是 | [Gemini API 文档](https://ai.google.dev/gemini-api/docs)、[Gemini 条目](/wiki/products/gemini) |

未采用但有记录的线索：`stripe stock/ipo`、`tencent stock/share price/market cap`、`vercel valuation`、`microsoft stock/stock price`、`微软股票/股价`、`硅基流动 上市/招股书`、`aws reinvent`（会议话题，未核验 2026 届信息）——均涉及未经核验的财务、证券或活动信息，不进入正文或 FAQ。`aws outage`（服务状态）、`stripe careers` 等运营类联想未采用。

## 歧义处理

- stripe：不采裸词 `stripe` 单独成题（联想含 `striped bass` 鱼类与"磁条"本义）；中文采样用 `stripe 支付`，英文用 `stripe payments`，均带支付语义修饰。
- nubia/努比亚：裸词联想混入 `nubian goats`、`nubian meaning`、`努比亚人`（尼罗河流域的努比亚人群体的文化含义）等，故采用 `努比亚手机`、`努比亚官网`、`nubia phone` 等品牌修饰词采样；`努比亚手机是哪个国家的` 等题均含品牌限定。
- aws：`aws是什么` 联想出现 `aws 新加坡/ptt/薪水` 与 `阿魏酸是什么`（读音相近的无关联想），采用时只取公司定义类候选。
- deepmind：中文联想同时返回 `deepmind是什么` 与 `google deepmind是什么`，说明存在"DeepMind 是否独立公司"的歧义，FAQ 以归属关系题回应。
- `deepmind 12`（音频插件）、`腾讯元宝`（另一产品条目范围）等未采用。

## 事实边界与核验来源

- aws：官方概览白皮书（2026-06-02 版）载明 2006 年起步、200+ 服务、类别清单、"190 个国家的数十万企业"；与亚马逊的子公司关系及 S3/EC2 的 2006 年上线时间取自[中文维基百科 AWS 条目](https://zh.wikipedia.org/wiki/%E4%BA%9A%E9%A9%AC%E9%80%8A%E4%BA%91%E6%9C%8D%E5%8A%A1)。aws.amazon.com/about-aws/ 多次抓取失败（ECONNRESET），curl 状态 200，仅作导航链接。
- vercel：创立（2015、ZEIT、2020-04 更名、旧金山）、Next.js/v0/AI SDK/Turborepo、运行于 AWS 之上取自 [Wikipedia: Vercel](https://en.wikipedia.org/wiki/Vercel)；"人与 Agent 一起构建软件的平台"定位取自 [vercel.com/about](https://vercel.com/about)。
- tencent：成立（1998、深圳）、"科技向善"、六大事业群取自[官方英文 About 页](https://www.tencent.com/en-us/about.html)；混元、小微、腾讯云的关系来自仓库实体元数据（`products/hunyuan.yaml`、`products/xiaowei.yaml`、`brands/tencent-cloud.yaml`）。
- stripe：自述与"500 万家企业、1.7% 全球 GDP"取自 [stripe.com/about](https://stripe.com/about)；产品线时间（Billing/Radar/Atlas/Issuing/Terminal/Link/Tax）与双总部取自 [Wikipedia: Stripe, Inc.](https://en.wikipedia.org/wiki/Stripe,_Inc.)（条目信息框记 2009 年成立、正文记 2010 年帕洛阿尔托，正文按 2010 年表述并在研究记录保留差异）；收购 OpenRouter（2026-08-19，400+ 模型、80+ 供应商、Collison 引语）与 Metronome（2026-01-14 完成收购）取自 [Stripe Newsroom](https://stripe.com/newsroom/news)。
- siliconflow：成立时间（2023-08）、"独立生态词元供应平台"、"加速 AGI 普惠人类"、运营主体"北京硅基流动科技股份有限公司"取自 [siliconflow.cn/about](https://siliconflow.cn/about)；MaaS 分类、推理引擎宣称（时延降 70%、吞吐 3–5 倍，正文以"官网称"归属）、OneDiff/BizyAir 取自官网首页与 [siliconflow.com/about](https://siliconflow.com/about)。创始人信息官网未载，未写入。
- nubia：2012 年中兴全资子品牌、2015 年独立、2016 苏宁投资、2017 中兴持股 49.9%、红魔 2018-04 创立与 2024 年游戏本/平板、Z 系列与屏下摄像头取自 [Wikipedia: Nubia Technology](https://en.wikipedia.org/wiki/Nubia_Technology)；[中兴官网](https://www.zte.com.cn/)新闻栏目可见努比亚 NaviX Ultra 上市信息（佐证品牌隶属中兴消费业务）。intl.nubia.com/pages/about-us 多次抓取失败（ECONNRESET），curl 状态 200，仅作导航链接。
- microsoft：创立（1975-04-04、盖茨与艾伦、阿尔伯克基）、总部雷德蒙德、Windows 1.0（1985-11-20）、Office（1990）、Azure（2008-10-27）、Xbox（2001）、GitHub（2018-06-04，75 亿美元）、LinkedIn（2016）、OpenAI 投资（2023-01-23）取自 [Wikipedia: Microsoft](https://en.wikipedia.org/wiki/Microsoft)；使命与 Copilot 定位取自 [microsoft.com/en-us/about](https://www.microsoft.com/en-us/about)（curl 403 反爬，WebFetch 可读）。
- google-deepmind：两实验室合并、Demis Hassabis、使命、DQN/AlphaGo（2015）/AlphaFold（2020）/Transformer（2017）/Gemini/Gemma/Veo 等成果清单取自 [deepmind.google/about/](https://deepmind.google/about/)；与 [Google 条目](/wiki/brands/google)互链。

## 节目证据

逐字稿为本地导入的中文原文（`src/content/imported/transcripts/next-token-weekly--001.zh-Hans.json`、`next-token-weekly--002.zh-Hans.json`）。引用锚点为发布版段落指纹（发言人＋归一化原文的 20 位哈希，重复段落按出现次序消歧）；若原文、发言人或重复段落顺序变动需重新核对。

| 页面 | 章节链接 | 段落锚点 |
| --- | --- | --- |
| aws | /weekly/001/transcript#chapter-31、/weekly/002/transcript#chapter-15、/weekly/002/transcript#chapter-26 | quote-862f4999453c7e58e3a7（001 ch-31，与 microsoft 页共用）、quote-1efc17893c72c8d331b4（002 ch-15）、quote-ae98664aa893325f71b4（002 ch-26） |
| vercel | /weekly/001/transcript#chapter-36 | quote-4552c362a4627c3cf3be（001 ch-36） |
| tencent | /weekly/002/transcript#chapter-12、#chapter-16、#chapter-17 | quote-cacc30f6f27624d8f49c（002 ch-12）、quote-7156da18d169099deca9（002 ch-16） |
| stripe | /weekly/001/transcript#chapter-28 | quote-ebd320ef41ad24c06f00（001 ch-28） |
| siliconflow | /weekly/002/transcript#chapter-12、#chapter-26 | quote-b15059fe3459fba20744（002 ch-12）、quote-7a11728f307e97d98e70（002 ch-26） |
| nubia | /weekly/001/transcript#chapter-24 | quote-29a3d9aca313edeb71c7（001 ch-24） |
| microsoft | /weekly/001/transcript#chapter-26、#chapter-31 | quote-58588dc08c390dab77b7（001 ch-26）、quote-862f4999453c7e58e3a7（001 ch-31，与 aws 页共用） |
| google-deepmind | /weekly/001/transcript#chapter-09 | quote-03f30e39b084f03280f2（001 ch-09）、quote-5713c0426b49e0995705（001 ch-09，与 google 页共用） |

因证据不足而省略或仅作归属的节目内容：橘子关于"腾讯投了他"的现场推测（无出处，正文标注为推测语气）；杨攀"听说微软也在搞（自研模型）"（传闻，标注"听说"）；歸藏在 001 ch-24 关于努比亚 AI 手机的后续讨论（当时发布计划，无官方发布信息可核验，仅引用指认品牌归属的一句）；002 ch-15 中"OpenAI 和 Anthropic 以后就是未来的阿里云和火山云"（橘子观点， AWS 页仅引用杨攀的类比段落）。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用联想候选数量代替。

## 未决项

- `https://aws.amazon.com/about-aws/` 与 `https://intl.nubia.com/pages/about-us/` 经抓取工具多次 ECONNRESET，未读到正文；两页仅作官网导航链接，事实改用 AWS 官方白皮书与 Wikipedia。
- SiliconFlow 创始人与融资信息官网未载，未能核验，未写入正文。
- Stripe 成立年份存在 2009（Wikipedia 信息框）与 2010（正文）两种口径，正文采用 2010 并保留来源差异说明。
- 硅基流动官网首页横幅列出的具体模型名（DeepSeek-V4-Flash 等）属时效信息，正文未固定，改为指向官方文档与模型列表。
- 英文逐字稿不存在，英文正文均链接中文原文并明确标注 Chinese transcript。
- 微软官网对脚本抓取返回 403（反爬），About 页内容经页面抓取工具读取成功。
