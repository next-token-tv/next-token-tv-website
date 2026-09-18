---
entityType: product
entity: qwen
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Qwen 通义千问：模型家族、开放权重与阿里云 API｜Next Token Wiki'
seoDescription: '了解 Qwen（通义千问）模型家族的开放权重与 API 接入方式、模型命名与滚动发版，以及 Weekly 节目中的相关讨论。'
---

## Qwen 模型家族是什么

Qwen（中文名通义千问）是[阿里巴巴](/wiki/brands/alibaba)的通用模型家族，覆盖语言、视觉与视频理解等模态。它同时以两种方式分发：开放权重模型发布在 Hugging Face 的 Qwen 组织下，可下载部署；托管使用则通过官网 [qwen.ai](https://qwen.ai/) 和阿里云 Model Studio 的 API 提供。终端用户的对话产品与开发者的模型接口是两个层级，命名、版本和入口都不相同。

家族内同时使用 Qwen 与"通义千问"两个名字，模型 ID 采用小写形式（如 `qwen3.8-max`）。部分模型使用日期式快照命名并滚动更新（如快照 `qwen3.8-max-2026-09-02`，别名 0902），因此讨论具体模型时应以模型 ID 和官方文档为准，而不是营销名称。

## 用途与使用边界

普通用户通过官网 [qwen.ai](https://qwen.ai/) 及其官方 App 使用对话、写作、翻译、总结等能力；开发者注册阿里云 Model Studio 后创建 API Key，按文档调用。以 `qwen3.8-max` 为例，官方文档将其定位为面向法律、金融、设计等专业任务的旗舰模型，标注 1,000,000 Token 上下文窗口，支持函数调用、结构化输出、上下文缓存与联网搜索等能力；这些条目均以文档当前标注为准，不能从模型名称推断。

开放权重一侧，Qwen 在 Hugging Face 发布可下载模型。2026 年 8 月发布的 [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) 是官方模型卡标注的"Qwen4 架构的实验预览"（`qwen4_exp` 标签），属于实验性质；同系列的 Qwen3.8-Flash 生产版则通过 Qwen 云端服务提供。下载实验预览用于生产前应核对其许可与定位。

在中文社区的模型比较中，Qwen 常与 [Kimi](/wiki/products/kimi)、[GLM](/wiki/products/glm)、[DeepSeek](/wiki/products/deepseek)、[混元](/wiki/products/hunyuan) 等国产模型家族并列讨论；各家族的定位、档位与使用方式见各自条目。

## 节目中的讨论

Weekly #001 的"当所有模型都差不多，用户该如何选择"一章中，橘子以自己产品 Cola 的免费模型数据为例，[观察到 Qwen Flash 在用户反馈中不如智谱 Flash、但每日消耗量第一](/weekly/001/transcript#quote-b6c4393c01ec9960a865)，并[补充 Qwen 模型当时在他们平台上免费开放](/weekly/001/transcript#quote-78388566b2004546da59)——这是平台运营者的使用观察。同一期的"滚动发版之后，Benchmark 还有没有意义"一章中，杨攀[指出 Qwen 用 0902 这类日期命名滚动发版、不再强调版本号](/weekly/001/transcript#quote-ea83290f01de720c5c8a)。在"GLM 5.3 Flash 与 MiniMax H3，便宜模型为何更容易进入真实使用"一章中，杨攀[谈到在 128GB Mac Studio 上本地跑过 Qwen 27B、35B](/weekly/001/transcript#quote-fd38512a48f266e43abe)，并[把 Qwen 3.8 Flash Next 列为 256G 内存本机可运行的模型之一](/weekly/001/transcript#quote-db0d856b6db3893cf011)。在"为什么 AI 应用团队仍然跑不过模型厂商"一章中，歸藏[吐槽 Qwen 的定时任务无论付费多少只能同时存在 2 个](/weekly/001/transcript#quote-38e408275441fa0535d4)。

Weekly #002 的"垂直应用的价值：数据、接口与上下文"一章中，橘子[认为千问这个通用 Agent 搞不定淘宝购物](/weekly/002/transcript#quote-8e674125c2511a604363)，[而淘宝 AI、飞猪 AI 在各自场景里反而更好](/weekly/002/transcript#quote-8a01d0363c7febd4fae2)——他的原话是"很神奇"，属于个人观察而非评测结论。在"健康数据与日常记录：有用与隐私的边界"一章中，杨攀[把国产产品线归纳为编程向的 Qoder、TRAE 与办公向的豆包工作、千问办公](/weekly/002/transcript#quote-9482dab44286a6da7f20)。可分别阅读[第 001 期对应章节](/weekly/001/transcript#chapter-08)、[滚动发版一章](/weekly/001/transcript#chapter-13)与[垂直应用一章](/weekly/002/transcript#chapter-16)。

## 常见问题

### 通义千问官网和网页版入口在哪里？

官网是 [qwen.ai](https://qwen.ai/)，页面上提供在线使用入口和官方 App 下载引导。开发者使用的阿里云 Model Studio 是另一个独立入口。

### 通义千问 API Key 在哪里申请？

在阿里云 Model Studio（国际站为 [alibabacloud.com 的 Model Studio 文档](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)，中国站为 help.aliyun.com 对应页面）注册并创建 API Key，再按文档填入模型 ID 调用。不要把密钥放进公开网页或公开代码仓库。

### 现在 Qwen 最新的模型是哪个？

截至 2026 年 9 月，阿里云 Model Studio 文档列出旗舰模型 `qwen3.8-max`（快照 `qwen3.8-max-2026-09-02`）；开放权重侧，Hugging Face 上 2026 年 8 月发布的是实验预览 Qwen3.8-Flash-Next。Qwen 采用快照滚动更新，最新型号请以[官方模型文档](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)当前列表为准。

### Qwen 的开放权重在哪里下载？

在 Hugging Face 的 [Qwen 组织页面](https://huggingface.co/Qwen)下载。注意区分实验预览与生产版本：Qwen3.8-Flash-Next 是官方标注的 Qwen4 架构实验预览，采用 qwen-community 许可；生产用途应核对模型卡说明。

### Qwen 和通义千问是什么关系？

同一家族的两个名字：通义千问是中文名称，Qwen 是国际名称与模型 ID 前缀。搜索、文档和模型 ID 中两者都会出现，指向同一系列模型。

## 来源

- [Qwen 官网](https://qwen.ai/)
- [阿里云 Model Studio：qwen3.8-max 模型文档](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
- [Hugging Face：Qwen3.8-Flash-Next 模型卡](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- [Hugging Face：Qwen 组织](https://huggingface.co/Qwen)
