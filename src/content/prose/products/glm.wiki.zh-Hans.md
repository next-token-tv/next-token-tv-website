---
entityType: product
entity: glm
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'GLM 模型家族：智谱的模型、API 与开放权重｜Next Token Wiki'
seoDescription: '了解智谱 GLM 模型家族的层级关系、API 模型与开放权重、GLM Coding Plan 订阅，以及 Weekly 节目中关于 GLM 5.3 Flash 的讨论。'
---

## GLM 模型家族是什么

GLM 是[智谱](/wiki/brands/zhipu)的通用模型家族，覆盖语言、视觉理解与生成等模态，既支撑智谱自己的产品，也通过 API 和开放权重对外提供。围绕这一条模型主线，智谱的产品分层是：面向终端用户的对话助手（智谱清言，国际入口 [z.ai](https://z.ai/)）；面向开发者的模型 API（国内为 [BigModel 开放平台](https://bigmodel.cn/)，国际为 [docs.z.ai](https://docs.z.ai/) 文档对应的 API）；以及建立在这些模型之上的 Agent 产品，如编码开发环境 [ZCode](/wiki/products/zcode) 和面向设备操作的 [AutoGLM](/wiki/products/autoglm)。公司背景与产品线总览见智谱品牌条目，本条目聚焦模型家族与开发者接口本身。

家族以 GLM-5 系列为现行主线：官方发布记录显示，GLM-5 于 2026 年 2 月发布，GLM-5.2 于 2026 年 6 月发布；GLM-5.3 于 2026 年 8 月 18 日发布，官方将其定位为面向复杂软件工程与 Agent 能力的旗舰模型；GLM-5.3-Flash 于 2026 年 8 月 26 日发布，是 GLM-5 系列首个原生多模态模型。除语言模型外，API 还提供视觉理解（GLM-4.6V、GLM-OCR 等）、图像生成与语音识别等模型，模型与价格会变化，使用前应以官方文档为准。

## 用途与使用边界

开发者通过 API 调用时使用小写模型 ID：旗舰 `glm-5.3` 为纯文本输入，标注 1M Token 上下文窗口、始终开启推理并支持 low/high/max 三档推理力度；`glm-5.3-flash` 与更快的 `glm-5.3-flashx` 接受视频、图像、文本和文件输入，官方标注 320B 总参数、18B 激活，采用稀疏注意力与线性注意力混合架构。这些规格以[官方模型文档](https://docs.z.ai/guides/llm/glm-5.3.md)当前标注为准，不能从模型名称推断。

开放权重一侧，GLM 系列模型发布在 Hugging Face 的 [zai-org](https://huggingface.co/zai-org) 组织下，其中 GLM-5.3-Flash 按官方博客说明以 MIT 许可发布。自托管时需要自行核对模型卡中的许可、硬件要求与推理框架支持。

面向编码场景，智谱提供按月订阅的 GLM Coding Plan，订阅后可在 ZCode、Claude Code、Cline、OpenCode 等工具中调用 GLM-5.3 与 GLM-5.3-Flash，订阅与按量 API 计费是两种不同的付费方式。ZCode 的安装与使用见 [ZCode 条目](/wiki/products/zcode)；与 [Qwen](/wiki/products/qwen)、[DeepSeek](/wiki/products/deepseek) 等其他国产模型家族的比较见各自条目。

## 节目中的讨论

Weekly #001 的模型盘点中，[杨攀把"过去一周非常火的智谱 GLM 5.3 Flash，也就是大家知道的'牛来'模型"列入发布列表，并提到智谱 5.3 随后开源](/weekly/001/transcript#quote-444d2f8b219e819e8720)（[开源部分](/weekly/001/transcript#quote-dbc803d85a93950cf75d)）。在"GLM 5.3 Flash 与 MiniMax H3，便宜模型为何更容易进入真实使用"一章中，歸藏[认为能力够用、成本低的模型更容易进入真实使用，"很多东西大家用不起，就不关注"](/weekly/001/transcript#quote-881880fdb8b857214f65)；杨攀补充[自己在电脑上试过 5.3 Flash，属于 256G 内存本机可运行的模型](/weekly/001/transcript#quote-db0d856b6db3893cf011)。

同一期"Computer Use 正在怎样改变 Vibe Coding 的验收"一章中，杨攀[把"牛来"与 Gemini 归纳为两条路线：Gemini 拉速度，智谱走普惠、把供应量放开](/weekly/001/transcript#quote-c6e35f7aa3659816e709)；橘子[将其归因于全新架构、原生多模态、"又小又强"](/weekly/001/transcript#quote-023ef7b30e402b826cc4)；向阳乔木[提到它在 OpenRouter 开放较久、支撑全球使用量，一度被网友推测不是中国模型](/weekly/001/transcript#quote-04eb570f7407d93d51be)。在"当所有模型都差不多，用户该如何选择"一章中，歸藏[认为 GLM 5.3 免费让大家试是很不错的选择，因为试模型本身有成本](/weekly/001/transcript#quote-e51e5d1462803b9739c6)。

关于与上层工具的配合，歸藏在"原生模型加原生 Agent"一章中[提到在 ZCode 里用"牛来"做多模态任务时 Token 消耗较高、额度不够用](/weekly/001/transcript#quote-10a029bbadfcaf889bc2)。在"Token Is New Money"前后的讨论中，杨攀[称"牛来"这么便宜，也比 Claude 3.5 强多了](/weekly/001/transcript#quote-d63b1169039a106ffbca)；歸藏[则指出 GLM 5.3 Flash 的供应其实不够，想打折也打不动](/weekly/001/transcript#quote-42c999dfb0219fe73b64)。

Weekly #002 中，"能力够用之后，测试与交付成为瓶颈"一章[讨论了新模型是否取代"牛来"成为新的斩杀线，杨攀认为"牛来"速度仍偏慢](/weekly/002/transcript#quote-c1f3e38683f1e343c1e8)（[补充](/weekly/002/transcript#quote-15e650c6078b2a405eb5)）。在"Mistral、Kimi 与模型产品的不同选择"一章中，橘子[转述唐杰关于 GLM 6 的说法，认为"下一段 GLM 6 应该到了"](/weekly/002/transcript#quote-849ebf0fa658c5107cab)——这是对未发布产品的期待，不构成已发布功能的陈述。可分别阅读[第 001 期 GLM 5.3 Flash 章节](/weekly/001/transcript#chapter-03)与[第 002 期对应章节](/weekly/002/transcript#chapter-27)。

## 常见问题

### GLM 是什么模型，是谁开发的？

GLM 是智谱（Z.ai）开发的通用大模型家族，覆盖语言、多模态理解与生成等任务；公司背景见[智谱品牌条目](/wiki/brands/zhipu)。搜索"GLM"时也会命中女演员桂纶镁和图形学中的 OpenGL Mathematics 库，属于同名歧义。

### GLM 官网在哪里，怎么免费试用？

终端用户可使用国际入口 [z.ai](https://z.ai/) 或国内对话产品智谱清言；部分模型提供免费档位（如 GLM-4.7-Flash）。当前可用的模型与免费方式以[官方文档](https://docs.z.ai/)和价格页为准。

### GLM API Key 在哪里申请？

国内在 [BigModel 开放平台](https://bigmodel.cn/)注册并创建 API Key，国际走 [Z.AI API 文档](https://docs.z.ai/)的入门流程，然后按文档填入模型 ID（如 `glm-5.3`）调用。不要把密钥放进公开网页或公开代码仓库。

### 现在 GLM 最新的模型是哪个？

截至 2026 年 9 月，官方文档列出的旗舰模型为 GLM-5.3（模型 ID `glm-5.3`），并提供 GLM-5.3-Flash 与 GLM-5.3-FlashX。家族滚动更新，最新型号请以[官方发布记录](https://docs.z.ai/release-notes/new-released.md)和[价格页](https://docs.z.ai/guides/overview/pricing.md)当前列表为准。

### GLM Coding Plan 是什么，和 API 按量计费有什么区别？

GLM Coding Plan 是面向编码场景的按月订阅，在 ZCode、Claude Code、Cline、OpenCode 等工具中调用 GLM-5.3 与 GLM-5.3-Flash；API 按量计费则按 Token 用量扣费，适合自己写程序调用。订阅档位与额度见[官方 Devpack 文档](https://docs.z.ai/devpack/overview.md)，费率以官方页面为准。

### GLM 的开源权重在哪里下载？

在 Hugging Face 的 [zai-org 组织页面](https://huggingface.co/zai-org)下载。GLM-5.3-Flash 按官方博客说明采用 MIT 许可；下载自托管前应核对具体模型卡的许可与硬件要求。

## 来源

- [Z.AI API 文档：GLM-5.3 模型页](https://docs.z.ai/guides/llm/glm-5.3.md)
- [Z.AI API 文档：GLM-5.3-Flash/FlashX 模型页](https://docs.z.ai/guides/vlm/glm-5.3-flash.md)
- [Z.AI API 文档：发布记录](https://docs.z.ai/release-notes/new-released.md)
- [Z.AI API 文档：GLM Coding Plan（Devpack）概览](https://docs.z.ai/devpack/overview.md)
- [Z.AI API 文档：价格页](https://docs.z.ai/guides/overview/pricing.md)
- [GLM-5.3-Flash 官方博客](https://z.ai/blog/glm-5.3-flash)
- [Hugging Face：zai-org 组织](https://huggingface.co/zai-org)
- [BigModel 开放平台](https://bigmodel.cn/)
