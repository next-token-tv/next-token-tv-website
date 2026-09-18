---
entityType: product
entity: rodin
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Rodin（Hyper3D）：文本与图像生成 3D 模型｜Next Token Wiki'
seoDescription: '了解 Hyper3D Rodin 的定位、Gen-2.5 生成能力、导出格式、收费方式与 API，以及 Weekly 节目中通过 MCP 调用 Rodin 的讨论。'
---

## Rodin 是什么

Rodin 是 Hyper3D 的旗舰产品，用于把文本描述、照片、草图或多视角参考图生成完整的三维模型。官网写明 Hyper3D AI 平台来自 Deemos 公司，Rodin 是其核心技术：一次生成即包含几何、网格、UV 映射、贴图与材质，并可导出到游戏、3D 打印、动画、电商、AR/VR 等管线。当前模型为 Gen-2.5，提供从 Extreme-Low 到 Extreme-High 五档生成强度，用于在生成时间与细节精度之间权衡。入口见[官方网站](https://www.rodin3ds.com/)。

## 用途与使用边界

Rodin 面向需要三维资产但未必精通 Blender、Maya 等传统建模软件的创作者，官方描述的主要能力包括：

- 生成：文本到 3D、图片到 3D（最多五张多视角参考图，首图驱动材质、其余图辅助形体）。
- 控制：3D ControlNet 可用包围盒、体素或点云约束结构；支持局部重生成、模型拆分与重试。
- 交付：原始三角网格或四边面拓扑、自定义面数、HD PBR 贴图，导出 GLB、FBX、OBJ、STL、USDZ 格式。
- 收费方式：注册免费，生成与迭代不消耗额度，免费预览确认后才消耗 credits 下载结果；订阅档位与额度见[官方定价指南](https://www.rodin3ds.com/pricing)。
- 开发者：官网提及 Business 方案的 API；同族产品还有角色生成 ChatAvatar 与资产处理工具集 OmniCraft。

使用边界：官网自述 AI 生成结果在进入专业生产前，可能仍需重拓扑、绑定、缩放或材质调整；具体能力与档位随版本变化，以官方页面为准。

## 节目中的讨论

Weekly #002 的"从代码到实物：3D 打印带来的创作空间"章节中，向阳乔木[分享自己用 Rodin 的 MCP 生成擎天柱模型的体验：全程没有打开 Rodin 网站，直接让 Agent 调用完成](/weekly/002/transcript#quote-ea06018d7768a63f9a08)，杨攀接着谈到有 3D 打印机就可以把它打印出来。这是节目参与者的一次亲身体验描述，MCP 集成方式以官方文档为准。可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-28)。

## 常见问题

### Rodin 是什么？Hyper3D 和 Deemos 是什么关系？

Rodin 是 Hyper3D 平台的旗舰 3D 生成产品，官网写明该平台来自 Deemos 公司；"Hyper3D Rodin"与"Rodin AI"指的都是这一产品。见[官方网站](https://www.rodin3ds.com/)。

### Rodin 的官网在哪里？

官方网站是 [rodin3ds.com](https://www.rodin3ds.com/)，包含 Rodin、ChatAvatar、OmniCraft 三个产品入口以及定价与指南。

### Rodin 怎么收费？

注册免费，生成和反复尝试不消耗额度；只有确认下载生成结果时才消耗 credits，付费订阅按档位提供更多额度与功能。当前档位与额度见[官方定价指南](https://www.rodin3ds.com/pricing)。

### Rodin 有 API 吗？

官网提及面向 Business 方案的 API，可把生成流程接入自己的代码；开发者入口与文档见官方网站。节目参与者也提到过通过 MCP 让 Agent 直接调用 Rodin，这属于个人体验，集成方式以官方文档为准。

### Rodin 生成的模型能导出哪些格式？

支持 GLB、FBX、OBJ、STL 和 USDZ，并可输出四边面拓扑、自定义面数与 HD PBR 贴图，可直接进入游戏引擎、切片软件或商品展示流程。细节见[官方网站](https://www.rodin3ds.com/)。

### Rodin 和雕塑家罗丹有什么关系？

没有关系。Rodin 3D 生成产品得名于 Hyper3D/Deemos 的产品线；搜索时看到的罗丹博物馆、《思想者》等结果属于法国雕塑家奥古斯特·罗丹（Auguste Rodin），与本项目无关。

## 来源

- [Rodin（Hyper3D）官方网站](https://www.rodin3ds.com/)
- [Rodin 定价指南](https://www.rodin3ds.com/pricing)
