---
entityType: product
entity: step
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'Step 模型家族：阶跃星辰的通用 AI 模型｜Next Token Wiki'
seoDescription: '了解阶跃星辰 Step 模型家族的定位、Step 5 Preview 的规格与开源方式、API 入口，以及节目中的讨论。'
---

## Step 模型家族是什么

Step 是[阶跃星辰](/wiki/brands/stepfun)（StepFun）的通用 AI 模型家族，覆盖推理、编程、多模态与智能体任务；语音方向的模型见 [Step-Audio](/wiki/products/step-audio) 条目。模型发布在官方模型页与 GitHub 组织 `stepfun-ai` 下，API 通过阶跃星辰开放平台提供。

## Step 5 Preview

Step 5 Preview 是阶跃星辰于 2026 年 10 月开源的新一代旗舰模型，官方 GitHub 仓库将其描述为"StepFun's flagship model for agentic work"：一个稀疏 MoE 模型，总参数 600B、单 token 激活 27B，支持最长 100 万 token 的上下文，接受文本、图像与视频输入，官方称其在软件工程与专业知识工作（尤其是金融任务）上表现突出。权重发布在 Hugging Face 与 ModelScope，仓库同时提供 vLLM、Transformers、SGLang 等部署方式。

名称中的 Preview 表明这是预览版本：能力与部署要求会随正式版本调整，规格以[官方模型页](https://www.stepfun.com/step-5-preview)、[技术博客](https://platform.stepfun.ai/blog/inside-step-5-preview)与[开发者文档](https://platform.stepfun.ai/docs/en/guides/models/step-5-preview)为准。

## 节目中的讨论

Weekly #006 的"模型体验的两极：最强能力、等待时间与便宜模型的生态位"章节中，向阳乔木引用 OpenRouter 调用榜的数据（一周国产模型消耗 82 万亿 token），说[阶跃也排在前面](/weekly/006/transcript#quote-3a8ee430783398f4121e)，杨攀确认说的是[阶跃 5 Preview](/weekly/006/transcript#quote-2b5c207315bdc63fdec5)。这是参与者对调用榜单的转述，可阅读[第 006 期对应章节](/weekly/006/transcript#chapter-22)。

## 常见问题

### Step 5 Preview 是什么？

阶跃星辰 2026 年 10 月开源的旗舰模型：稀疏 MoE、总参数 600B、激活 27B、最长 100 万 token 上下文，接受文本、图像与视频输入，定位为智能体与编程等任务。见[官方模型页](https://www.stepfun.com/step-5-preview)。

### Step 5 Preview 开源了吗，在哪里下载？

开源权重发布在 [Hugging Face](https://huggingface.co/stepfun-ai/Step-5-Preview) 与 ModelScope，代码与部署说明在 [GitHub 仓库](https://github.com/stepfun-ai/Step-5-Preview)；官方仓库采用 StepFun Model License 1.0，权重可下载使用，但商用与署名有附加条件（达到规模阈值的商业产品须标注"Powered by StepFun AI"，硬件设备与大型 MaaS 场景需另行取得商用许可），具体以仓库 [LICENSE](https://github.com/stepfun-ai/Step-5-Preview/blob/main/LICENSE) 文件为准。

### 阶跃星辰的 API 在哪里接入？

通过阶跃星辰开放平台接入，入口与文档见 [platform.stepfun.ai](https://platform.stepfun.ai/)；模型名称与调用方式以官方文档为准。

### Step 系列还有哪些模型？

除 Step 5 Preview 外，官方 GitHub 组织还维护 Step-Audio 语音系列（见 [Step-Audio](/wiki/products/step-audio) 条目）与 Flash 系列等模型；当前在售与开源模型以[官方渠道](https://www.stepfun.com/)为准。

## 来源

- [Step-5-Preview GitHub 仓库](https://github.com/stepfun-ai/Step-5-Preview)
- [阶跃星辰官网](https://www.stepfun.com/)
- [阶跃星辰开放平台](https://platform.stepfun.ai/)
