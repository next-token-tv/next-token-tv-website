# 品牌 Wiki FAQ 研究记录（zhipu / xiaomi / hugging-face / nvidia）

## 范围与口径

本记录支持 `zhipu`、`xiaomi`、`hugging-face`、`nvidia` 四个品牌的中英文 Wiki 正文。研究日期为 2026-09-17，面向中文和英文读者。需求线索来自 DuckDuckGo Autocomplete 联想接口（经 WebFetch 读取 `duckduckgo.com/ac/?q=<seed>&type=list`）；本次没有 Search Console、关键词工具或搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，顺序不代表热度排名；本批未保存原始 JSON，采样结果逐条列在下表中。

排除的同名歧义：中文种子“小米”返回“小米粥”（食物），已排除；英文裸 `nvidia` 与中文“英伟达”联想多为消费级软件（`nvidia app`、`nvidia drivers`、`英伟达显卡驱动`），仅保留与品牌定位或驱动官方入口直接相关的部分；“英伟达模型”一组的联想（`英伟达模型修改`、`英伟达模型预设` 等）指向游戏模型 MOD 场景，与本公司无关，整组排除。

## FAQ 候选与证据

采样时间：2026-09-17。工具：DuckDuckGo Autocomplete（WebFetch）。

| 页面 | 种子词（语言） | 返回候选（节选） | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| zhipu | `智谱`（zh） | 智谱清言、智谱api、智谱coding plan、智谱是哪家公司、智谱模型、智谱大模型官网 | 定义、导航、开发者 | 是（是哪家公司、官网入口、API） | [智谱官网](https://www.zhipuai.cn/)、[BigModel](https://bigmodel.cn/)、[docs.z.ai](https://docs.z.ai/) |
| zhipu | `智谱AI`（zh） | 智谱ai开放平台官网、智谱ai官网、智谱ai api、智谱ai是哪家公司 | 导航、定义 | 是（并入官网/API 问答） | 同上 |
| zhipu | `zhipu`（en） | zhipu ai stock price、zhipu stock、zhipu glm、zhipu api key | 商业信息、开发者 | 是（上市、API） | 智谱官网（02513 公告）、docs.z.ai |
| zhipu | `glm`（en） | glm-5.2、glm coding plan、glm api | 开发者 | 是（GLM Coding Plan） | [docs.z.ai Quick Start](https://docs.z.ai/) |
| zhipu | `智谱zcode`（zh） | 智谱zcode官网、智谱zcode下载、智谱zcode开源吗 | 导航、安装 | 否（产品级问题，留待 ZCode 产品正文） | [zcode.z.ai](https://zcode.z.ai/en) |
| xiaomi | `小米`（zh） | 小米股票、小米科技、小米校招、小米粥（歧义，排除） | 定义、商业信息 | 部分（上市问答；公司定义问答记为编辑补充） | [mi.com/global/about](https://www.mi.com/global/about/) |
| xiaomi | `小米汽车`（zh） | 小米汽车科技有限公司、小米汽车销量、小米汽车工厂 | 业务信息 | 是（车型问答） | [mi.com/global/about](https://www.mi.com/global/about/) |
| xiaomi | `小米nas`（zh） | 小米nas官网、小米nas配置、小米nas什么时候出 | 产品导航 | 是（NAS 问答） | [小米智能存储产品页](https://www.mi.com/shop/buy/detail?product_id=21425) |
| xiaomi | `小米澎湃os`（zh） | 小米澎湃os4、小米澎湃os官网 | 系统信息 | 否（OS 属产品/系统层，品牌页一句带过） | mi.com/global/about |
| xiaomi | `超级小爱`（zh） | 超级小爱电脑版、超级小爱apk、超级小爱离线模型 | 产品使用 | 否（助手产品级，品牌页仅在业务线提及） | mimo.mi.com、mi.com |
| xiaomi | `xiaomi`（en） | xiaomi share price、xiaomi 17 pro max price、xiaomi tv | 商业信息、产品 | 部分（上市问答） | mi.com/global/about |
| xiaomi | `小米智能存储`（zh） | 小米智能存储pc、小米智能存储app | 产品使用 | 否（产品级） | 小米商城产品页 |
| hugging-face | `hugging face`（en） | hugging face model、hugging face hub、hugging face token、hugging face space、hugging face cli | 定义、平台结构 | 是（Hub/模型下载问答） | [huggingface.co](https://huggingface.co/) |
| hugging-face | `hugging face 是什么`（zh） | 是什么产品、是什么公司、是什么服务、是什么框架 | 定义 | 是（“是什么”问答） | huggingface.co |
| hugging-face | `hugging face transformers`（en） | transformers library、transformers documentation、transformers github | 开源库 | 是（Transformers 问答） | [Transformers 文档](https://huggingface.co/docs/transformers) |
| hugging-face | `hugging face spaces`（en） | spaces free、spaces pricing | 费用 | 是（“免费吗”问答） | huggingface.co（Team & Enterprise、Inference、PRO 区块） |
| hugging-face | — | （无联想） | 收购新闻 | 是，标记为编辑补充（依据 2026-08 报道，见下） | [Reuters](https://www.reuters.com/technology/nvidia-talks-acquire-hugging-face-13-billion-deal-business-insider-reports-2026-08-27/)、[Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face) |
| nvidia | `英伟达`（zh） | 英伟达显卡驱动、英伟达cuda、英伟达官网、英伟达中国 | 定义、驱动、CUDA | 是（官网/驱动、CUDA 问答） | [nvidia.com/about](https://www.nvidia.com/en-us/about-nvidia/)、[驱动页](https://www.nvidia.com/en-us/drivers/)、[CUDA](https://developer.nvidia.com/cuda-zone) |
| nvidia | `nvidia`（en） | nvidia app、nvidia drivers、nvidia stock、nvidia geforce experience | 消费软件、商业信息 | 部分（驱动、上市问答） | 驱动页、[investor.nvidia.com](https://investor.nvidia.com/home/default.aspx)、Wikipedia |
| nvidia | `nvidia cuda`（en） | cuda toolkit、cuda download、cuda 13 | 开发者 | 是（CUDA 问答） | CUDA 官方页 |
| nvidia | `英伟达模型`（zh） | 英伟达模型修改、英伟达模型预设、英伟达模型api | 游戏模型 MOD（歧义） | 否（整组排除） | — |
| nvidia | — | （无联想） | 收购新闻 | 是，标记为编辑补充（依据 2026-08 报道，见下） | Reuters、[Wikipedia](https://en.wikipedia.org/wiki/Nvidia) |

“英伟达收购 Hugging Face 了吗”与“Hugging Face 被英伟达收购了吗”属于编辑补充问题：联想接口未返回该问法，但 2026 年 8 月末多家媒体报道该交易（Wikipedia 的 Hugging Face 条目引注路透社 2026-08-26 报道，转引 The Information，金额 129 亿美元），且节目第 001 期把它作为商业新闻讨论，页面需要给出准确、带归属的回答。路透社页面经 WebFetch 访问返回 401，无法直接核验正文；事实以 Wikipedia 引注为据并明确标注为媒体报道。

## 事实核验记录（2026-09-17）

| 实体 | 核验事实 | 来源 |
| --- | --- | --- |
| zhipu | 公司主体北京智谱华章科技股份有限公司；自述“中国大型独立大模型厂商”；港股上市，代码 02513；产品线含 GLM-5.3、GLM-5V-Turbo、ZCode（GLM-5.3 官方 harness）、AutoGLM、智谱清言、BigModel 平台、z.ai、AMiner、智谱AI输入法 | [zhipuai.cn](https://www.zhipuai.cn/)（zh/en 各核验一次） |
| zhipu | API 平台模型列表 GLM-5.3、GLM-5.3-FLASH、GLM-Image、CogVideoX-3；GLM Coding Plan 订阅 | [docs.z.ai](https://docs.z.ai/) |
| zhipu | `z.ai` 307 跳转到 `chat.z.ai`；GitHub 官方组织 zai-org 维护 GLM、CodeGeeX、CogView、CogVideoX、zcode-plugins | WebFetch（z.ai 重定向）、[github.com/zai-org](https://github.com/zai-org) |
| zhipu | 2019 年北京成立、清华孵化、唐杰为创始人；2026-01-08 港交所 IPO（金额、市值未采用） | [Zhipu AI - Wikipedia](https://en.wikipedia.org/wiki/Zhipu_AI)；唐杰关系另见本仓库 `people/tang-jie.yaml`（清华主页来源） |
| xiaomi | 2010-04-06 雷军创立；2018-07-09 港股上市 1810.HK；“smartphones, EV and smart hardware connected by an IoT platform”；Human × Car × Home；HyperOS；XRING O1（2025）；SU7（2024）、SU7 Ultra、YU7（2025）；MiMo 自研基础模型 | [mi.com/global/about](https://www.mi.com/global/about/) |
| xiaomi | MiMo 官方站点 mimo.mi.com（YAML `official.website`，与 about 页互证） | [mimo.mi.com](https://mimo.mi.com/) |
| hugging-face | 官网自述 “The AI community building the future”；Hub 2M+ 模型、500k+ 数据集、1M+ Spaces 应用；开源库 Transformers、Diffusers、Datasets、Tokenizers、TRL、PEFT、Accelerate、Transformers.js、smolagents、TGI；Team & Enterprise、Inference Providers、Inference Endpoints、PRO | [huggingface.co](https://huggingface.co/) 首页 |
| hugging-face | Transformers 为“model-definition framework”，覆盖 text/vision/audio/video/多模态，支持推理与训练 | [Transformers 文档](https://huggingface.co/docs/transformers) |
| hugging-face | 2016 年纽约创立（Delangue、Chaumond、Wolf）；2025-04 收购 Pollen Robotics；2026-08-26 报道英伟达同意以 129 亿美元收购（Reuters 引注） | [Hugging Face - Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face) |
| nvidia | 官方自述 “pioneered accelerated computing”；“AI factories” 芯片、系统与软件；RTX、Omniverse；黄仁勋 CEO | [about-nvidia](https://www.nvidia.com/en-us/about-nvidia/) |
| nvidia | “pioneer of GPU-accelerated computing”；市场为 gaming、professional visualization、data center、automotive | [investor.nvidia.com](https://investor.nvidia.com/home/default.aspx) |
| nvidia | CUDA 为加速计算平台、GPU 能力的软件层；官方驱动下载页含 Game Ready/Studio/RTX Enterprise 与 Unix Driver Archive | [CUDA](https://developer.nvidia.com/cuda-zone)、[驱动页](https://www.nvidia.com/en-us/drivers/) |
| nvidia | 1993-04-05 创立（Huang、Malachowsky、Priem）；1999-01-22 上市（NVDA）；1999 年底 GeForce 256 首款以 GPU 名义销售的产品；总部圣克拉拉 | [Nvidia - Wikipedia](https://en.wikipedia.org/wiki/Nvidia) |

未采用的信息：Wikipedia 中 Zhipu 市值（约 620 亿美元）、NVIDIA FY26 营收与 GPU 市场份额、小米 MAU/AIoT 设备数、Hugging Face 定价数字（$20/user/month 等）——按编辑规范不把公司数字和易变价格写进正文，需要时链接官方页面。

## 节目证据

两期逐字稿均为中文；英文正文链接中文章节并明确标注 Chinese transcript。

- zhipu：Weekly #001 [chapter-02](/weekly/001/transcript#chapter-02)（模型盘点，GLM 5.3 Flash“牛来”、5.3 开源）、[chapter-03](/weekly/001/transcript#chapter-03)（便宜模型进入真实使用、本地试跑）、[chapter-04](/weekly/001/transcript#chapter-04)（ZCode=Codex Alternative、一键装飞书、卡不够与 Flash）、[chapter-08](/weekly/001/transcript#chapter-08)（免费试用策略、用户反馈）、[chapter-25](/weekly/001/transcript#chapter-25)（商业新闻提到智谱财报 ARR，数字口误未采用）、[chapter-26](/weekly/001/transcript#chapter-26)（转述“智谱也在搞”自研芯片）。引用锚点：`quote-400de0647fad0667ff00`（杨攀，ZCode）、`quote-3c03b4241bddc51332b5`（橘子，智谱领先/一键装飞书）、`quote-e51e5d1462803b9739c6`（歸藏，免费试用）。Weekly #002 无智谱实体提及。
- xiaomi：Weekly #001 [chapter-24](/weekly/001/transcript#chapter-24)（NAS 体验、澎湃 OS 4 超级小爱 Memory、小米同步助手、罗福莉、未发布新品转述）。引用锚点：`quote-f05a1a2bf805896f60db`（歸藏，NAS）、`quote-41cc5648e1a00c129120`（歸藏，超级小爱 Memory）、`quote-bf931dda049ea7c46202`（歸藏，同步助手）、`quote-d25f35ccdf7190ddc065`（橘子，罗福莉）。chapter-08 的“小米那个”指 MiMo 2.5 定价，已在 zhipu/GLM 语境中带过，未单独立论。Weekly #002 [chapter-19](/weekly/002/transcript#chapter-19) 提到“小米充电宝”适配苹果磁吸标准与“小米 Duo”（ASR 歧义，无法确认指代），两处均未写入正文。
- hugging-face：Weekly #001 [chapter-19](/weekly/001/transcript#chapter-19)（MicroDuck 走红归因）、[chapter-25](/weekly/001/transcript#chapter-25)（英伟达收购列入新闻）、[chapter-26](/weekly/001/transcript#chapter-26)（开源基建价值）。引用锚点：`quote-b8780ee87e848985c96a`（杨攀）、`quote-8a2fcec8111ab79972f1`（歸藏）、`quote-b6e2995f4273bcefb519`（歸藏）。Weekly #002 无提及。
- nvidia：Weekly #001 [chapter-25](/weekly/001/transcript#chapter-25)（收购新闻）、[chapter-26](/weekly/001/transcript#chapter-26)（英伟达为产业“托底/做锚”的主理人解读）。引用锚点：`quote-0f4c342606f6f652adde`（杨攀）。chapter-04 的“英伟达支持的算力吗”只是对某模型算力来源的现场猜测，与英伟达业务无关，未采用。Weekly #002 无提及。

## 未核验与省略项

- 智谱 ARR 数字（chapter-25 中口误与更正混杂）与“智谱自研芯片”转述（chapter-26）：只在正文标注为节目转述，不引用数字与进展。
- 小米未发布的新品与芯片型号（chapter-24 转述，名称疑似 ASR 失真）：未写入正文。
- “小米 Duo”（Weekly #002 chapter-19）：指代不明，未写入正文。
- Hugging Face 的 `hugging face mirror` 联想指向第三方镜像站，非官方入口，未采用。
- 路透社收购报道正文（401，无法直接读取）：以 Wikipedia 引注为准并标注为媒体报道，正文未写交易金额。
- zhipu 官网新闻区提到的 CogAgent-9B、Intel 合作等动态未写入正文（时效性强，非稳定事实）。
