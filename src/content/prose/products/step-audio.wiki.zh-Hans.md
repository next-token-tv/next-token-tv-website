---
entityType: product
entity: step-audio
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Step-Audio：阶跃星辰语音模型家族｜Next Token Wiki'
seoDescription: '了解阶跃星辰 Step-Audio 语音模型家族的组成、开源情况（Step-Audio 2 mini 等）、Step-Audio 3 Realtime 技术报告与节目中的讨论。'
---

## Step-Audio 是什么

Step-Audio 是阶跃星辰（[StepFun](/wiki/brands/stepfun)）的语音模型家族，覆盖语音识别、语音对话、语音合成和音频内容生成等任务。家族的公开形态有两种：一部分模型以开源方式发布在 GitHub 与 Hugging Face；另一些新模型通过官方博客和技术报告发布。官方博客有 [Step-Audio 3 Realtime 页面](https://static.stepfun.com/blog/stepaudio3/realtime/)，开源代码集中在 GitHub 的 [stepfun-ai](https://github.com/stepfun-ai) 组织下。

## 家族沿革与开源情况

- **Step-Audio（2025 年 2 月）**：2025 年 2 月 17 日，阶跃星辰开源了第一代 Step-Audio，官方仓库称其为"首个生产可用的开源智能语音交互框架"，包含基于 1300 亿参数文本模型 Step-1 的 Step-Audio-Chat 和 3B 参数的 Step-Audio-TTS-3B，覆盖多语言对话、方言、情感、语速调节和语音克隆等能力；代码以 Apache 2.0 许可发布。该仓库现已停止维护，指向后续系列。
- **Step-Audio 2（2025 年）**：技术报告于 2025 年 7 月 23 日发布；8 月 29 日，Step-Audio 2 mini 与 mini Base 以 Apache 2.0 许可开源，定位是端到端多模态大模型，面向工业级音频理解与语音对话，支持情感推理、工具调用与多模态 RAG；9 月 15 日又发布了 mini Think 变体。
- **Step-Audio 3（2026 年 9 月）**：阶跃星辰在官方博客发布 Step-Audio 3 Realtime 页面；技术报告显示，StepAudio 3 Realtime（2026 年 9 月 12 日提交 arXiv）是面向实时语音交互的音频语言基础模型，围绕"听—说—想—做"的循环设计，支持全双工对话、边说边想的推理机制和执行工具的 Voice Agent；同期还有 StepAudio 3 Gen（统一音频生成）与 StepAudio 3 Music（长篇幅音乐生成）的技术报告。各模型当前的发布形态与获取方式以[官方博客](https://static.stepfun.com/blog/stepaudio3/realtime/)和 [stepfun-ai 组织页面](https://github.com/stepfun-ai)为准。

## 节目中的讨论

Weekly #003 的"用 GPT-6 Astra 造数据、训练小模型"章节临近结尾时，[歸藏播报了阶跃发布三个语音模型的消息，提到实时交互的 StepAudio 3 Realtime、StepAudio 3 ASR Max，以及完整的音频内容生成](/weekly/003/transcript#quote-12e140d159c4f3ce1815)。这是节目对新发布消息的转述，其中 ASR Max 的具体信息以阶跃星辰官方发布为准；同章节的主体内容是另一场关于用大模型造数据的讨论。

## 常见问题

### Step-Audio 是谁开发的？

Step-Audio 是阶跃星辰（StepFun）开发的语音模型家族，品牌与公司背景见 [StepFun 条目](/wiki/brands/stepfun)。

### Step-Audio 开源吗？

家族里有一部分模型开源过：2025 年 2 月的第一代 Step-Audio 和 2025 年 8 月的 Step-Audio 2 mini 系列均以 Apache 2.0 许可发布代码与权重。并非家族中每个模型都有开源仓库，新模型的发布形态以官方页面为准。

### Step-Audio 的 GitHub 仓库在哪里？

开源代码在 GitHub 的 [stepfun-ai](https://github.com/stepfun-ai) 组织下，其中 [Step-Audio2 仓库](https://github.com/stepfun-ai/Step-Audio2)提供模型说明、部署脚本和演示；第一代 [Step-Audio 仓库](https://github.com/stepfun-ai/Step-Audio)保留作历史参考，已指向后续系列。

### Step-Audio 3 Realtime 是什么？

Step-Audio 3 Realtime 是阶跃星辰面向实时语音交互的音频语言基础模型。官方博客与技术报告（2026 年 9 月提交 arXiv）描述它支持全双工对话、边说边想的推理和异步工具执行的 Voice Agent。详细指标见 [StepAudio 3 Realtime 技术报告](https://arxiv.org/abs/2609.14005)。

## 来源

- [Step-Audio 3 Realtime 官方博客](https://static.stepfun.com/blog/stepaudio3/realtime/)
- [StepAudio 3 Realtime 技术报告（arXiv:2609.14005）](https://arxiv.org/abs/2609.14005)
- [StepAudio 3 Gen 技术报告（arXiv:2609.12945）](https://arxiv.org/abs/2609.12945)
- [stepfun-ai 的 Step-Audio2 仓库](https://github.com/stepfun-ai/Step-Audio2)
- [stepfun-ai 的 Step-Audio 仓库](https://github.com/stepfun-ai/Step-Audio)
