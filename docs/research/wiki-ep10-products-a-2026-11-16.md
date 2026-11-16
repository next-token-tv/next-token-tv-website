# 第 010 期产品批次 A 的 Wiki 正文研究记录

## 范围与口径

本记录支持 `tripo`、`vertex-ai`、`microsoft-azure`、`nvidia-gtc`、`seedream` 五个产品的中英文 Wiki 正文（`src/content/prose/products/<id>.wiki.zh-Hans.md` 与 `.wiki.en.md`）。研究日期 2026-11-16。第 010 期逐字稿（`src/content/imported/transcripts/next-token-weekly--010.zh-Hans.json`）为 review-draft 未发布，正文对本期内容一律纯文本提及，不创建指向 `/weekly/010/transcript` 的链接；章节归属逐条对照 JSON 的 `chapters[].id` 与 `chapters[].title` 核实。五个实体均未出现在第 1–9 期已发布逐字稿的 mentions 数据中（经 `src/content/data/episodes/next-token-weekly--001..009.yaml` 检查），故无往期节目链接。本批未采集搜索联想数据，FAQ 问题均为编辑补充（按定义、官方入口、版本、产品比较等常规需求拟定），无搜索量、热度数据，相关指标 N/A。

录制信息：第 010 期 `scheduledAt: 2026-11-13`，现场录制于五道口原点学堂；逐字稿中"今年 3 月"按 2026 年 3 月理解，"去年"按 2025 年理解。

## 逐条目记录

### tripo

- 身份判定：在线 3D 模型生成服务，产品形态为 Tripo Studio（网页）、Tripo API、Tripo App；官方主页自述"turns your text prompts or images into 3D models instantly"。任务提示中的"VAST"经公开来源核对：TripoSR 官方代码库位于 GitHub `VAST-AI-Research` 组织下，README 写明 TripoSR"collaboratively developed by Tripo AI and Stability AI"（arXiv:2403.02151，2024 年 3 月）；官网与条款页未出现"VAST"公司名。服务条款显示运营方为香港 Holymolly Limited。正文按上述口径表述，不写"Tripo 由 VAST 公司开发"。
- 功能来源：官方主页（文生 3D、图生 3D、AI Texturing 8K PBR、Auto Rigging、Smart Mesh、插件与导出格式）；商用口径来自官网 FAQ"generally available for commercial use"，条件指向 /terms。每月 200 credits 等配额数字未写入正文（按编辑规范不写精确配额）。
- 节目讨论上下文：chapter-05"把模型、动作和音乐装进一个 HTML 游戏"，turn3 歸藏（"接的 Tripo"、模型破面参差、骨骼绑定、"Blender 用了。但是没有启动过"）；turn6–t12 向阳乔木与歸藏关于 HTML 体积（100 兆→30 兆）与内容物（20 多个模型、动作、贴图、3 首音乐、音效）的对话。制作工具语境（Fable 5.2）出现在 chapter-04/27，但 Fable 无对应实体，正文不点名。章节归属已核对。
- 存疑点：transcript turn3 中"破变"疑为"破面"的转写噪声，正文用"破面、比较参差"的转述，不用引号直引该词；"30 兆"为歸藏口述（chapter-06 标题显示后续压到 8 兆，与 Tripo 无直接关系，未写入）。

### vertex-ai

- 身份判定：Google Cloud 的机器学习与生成式 AI 平台。官方介绍页（docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform）现以"Gemini Enterprise Agent Platform"口径描述该平台，内容覆盖数据准备、AutoML 与自定义训练、Model Registry 与部署。改名页（docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes）写明"Vertex AI Platform"→"Gemini Enterprise Agent Platform"、"Vertex AI"→"Agent Platform"，并列出 Vertex AI Studio / Search / Agent Engine 等子产品的新名。改名页无日期，正文不写改名时间。
- 未核事实：Vertex AI 首发年份（2021 年 Google I/O 发布、当年 GA 的常见说法）因 cloud.google.com 博客与维基百科条目均无法访问（404/ECONNRESET）未核到原始来源，正文不写发布年份。
- 节目讨论上下文：chapter-18"模型之外的门槛：Harness、产品体验与云服务接入"，turn33–t43：杨攀"它就还是 To B 的，就 Google Cloud，你得走 Google Cloud"；歸藏"我走 Google Cloud，我走 AI Studio，接不上，全是 Bug"；橘子"它首先它 AI Studio 和 Vertex""是两套""只有 Vertex 做得比较好，Vertex 又是非常 To B 的……我们接得比较好，AI Studio 它接不上"。章节归属已核对。讨论中被指"任何官方渠道都没办法使用"的新模型在逐字稿里名称转写可疑（t30"类似于 Jev 的模型"、t31"对 Decisions"、前文"Carbon""Argon"），正文不写具体模型名，只概括为"当时新出的模型"。
- 存疑点：橘子关于 AI Studio 接不上的说法是参与者使用观感，已按观点归属处理，未写成平台事实。

### microsoft-azure

- 身份判定：微软云计算平台。官方 what-is-azure 页定义"a cloud computing platform"，服务类别含计算、存储与数据库、网络、分析与数据（Fabric、Databricks）、AI 与机器学习（Azure AI Foundry、Azure OpenAI、Azure Machine Learning）、安全与管理；页面另有"launched in 2010"表述。
- 历史事实：英文维基百科条目——2008 年 10 月 PDC 以代号"Project Red Dog"公布，2010 年 2 月 1 日以 Windows Azure 商用发布，2014 年 3 月（3 月 24 日公告、25 日更名）改名 Microsoft Azure。正文采用 2008 公布、2010-02 商用、2014-03 改名三点。
- 节目讨论上下文：chapter-18，turn45–t60：杨攀按伙伴建议用火山引擎注册并跑豆包转文字（"做了三期了还没用完"），橘子"现在火山已经能用了。然后最不能用是微软那个 Azure 那个平台，你光注册成功可能就得 1 个月，还在上上个时代呢"。章节归属已核对。Azure 在本期仅此一处实质提及。
- 存疑点："注册成功可能就得 1 个月"是参与者的夸张化个人体验，正文明确标注为对注册流程与产品体验的评价，不是服务状态描述。

### nvidia-gtc

- 身份判定：NVIDIA 主办的 GTC（GPU Technology Conference）技术大会，实体 kind 为 event。事实来源：英文维基百科 GPU Technology Conference 条目——首届 2009-09-30 至 10-02 于加州圣何塞 Fairmont San Jose 酒店、约 1500 人；现一年两届（3 月与 11 月），主要在圣何塞，近年亦在台北、巴黎、华盛顿特区；每届以黄仁勋主题演讲开场；历年发布含 Fermi（2009）、Kepler（2012）、DGX-1（2016）、A100（2020）、Hopper/H100（2022）、Blackwell（2024）等；下届为 2026-03-16 至 19 圣何塞。官方入口 nvidia.com/gtc/events/。
- 节目讨论上下文：chapter-02"黄仁勋辞职话题：英伟达经历与创始人印象"，turn9–t11：橘子回忆"去年（2025）参加英伟达中国创业加速器拿到第 1 名""没有获得去美国参加这次的机会……今年 3 月份的时候就线上参加那个 GTC"，随后 t11 p1–p2 讲黄仁勋传记中每天 100 个俯卧撑的情节。章节归属已核对（GTC 关键词全稿仅命中本章）。chapter-03 标题涉及领导层变化但未提及 GTC，未采用。
- 存疑点：章节标题中的"黄仁勋辞职"为节目话题语境；当期歸藏称相关绯闻"没有任何信息增量"。正文提及章节名但不认定辞职传闻为事实，GTC 正文只引用橘子的亲历回忆。
- 年份换算：录制于 2026-11，橘子口述"去年""今年 3 月"分别落在 2025、2026；加速器名次与线上参加均按其自述转述。

### seedream

- 身份判定：字节跳动 Seed 团队的图像生成与编辑模型家族，YAML `kind: model-family`，alias 含 Seedream 5.5。第 010 期 chapter-26 标题及向阳乔木发言均为"Seedream 5.5"，与 YAML alias 及官方页面 `seed.bytedance.com/en/seedream5_5` 一致，版本号复核无误。
- 官方事实：Seedream 5.5 页面自述"a multimodal image generation model with greater creativity and more precise execution"，多轮编辑"keeping unedited regions intact at the pixel level"、原生透明/半透明背景（RGBA）、光影材质与皮肤质感更写实；页面提供 Tech blog 与 Try now（BytePlus playground）入口，无发布日期。Seedream 4.0 页面自述生成与编辑统一架构、输出最高 4K，基准数据标注"As of 2025-09-12"（不据此断言发布日期，正文不写 4.0 发布时间）。家族更早版本未逐一核验，正文不列。
- 节目讨论上下文：chapter-26"豆包多模型与 Seedream 5.5：稳定性和创造性的取舍"，turn6–t29：向阳乔木引入（t6）、杨攀"改这几十遍，一个像素都不带换"（t8）、歸藏"改 100 次维持原样……平衡"（t9/t11）、橘子创造性不及 Pro、当时 5.5 Pro 未发布、更便宜（t12/t14）、橘子与向阳乔木关于电商稳定性与商户痛点（t22–t25）、杨攀提到与"其他新图像模型"评测对比、橘子"案例这都是挑的"（t15–t21，评测中被对比的模型名"GPT Image 2.6""Nano Banana"转写存疑，正文不点名）、歸藏转述图像/视频模型走向小型化低成本（t26，其中"青龙/天龙圣者"为歸藏转述的第三方，正文概括为"一种判断"）、橘子 100 帧只变一个的商业价值（t29）。chapter-27"即梦画布、Agent 与面向创作者的 CLI"，turn0–t5：向阳乔木在即梦里体验"即梦的 5.5"、橘子"即梦大改版了……全都是 Agent"。章节归属均已核对。
- 存疑点：橘子"相比 5.0……有点像 2.5"一句转写不清晰，正文只采用其 t14 的"创造性不及 5.5 Pro、当时 Pro 未发布"表述，均为参与者观点；"即梦的 5.5"按参与者原话转述，不据此断言即梦内置 Seedream 5.5 为官方事实。
