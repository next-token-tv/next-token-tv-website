# GLM 与 Godot Engine Wiki FAQ 研究记录

## 范围与口径

本记录支持 `glm` 与 `godot-engine` 的 Wiki 正文（2026-09-18 批次），研究日期为 2026-09-18，面向中文和英文读者。公开搜索联想采样通过 Google Autocomplete HTTP 接口（`suggestqueries.google.com/complete/search?client=firefox`）完成，中英文分别采样；本次没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，顺序不是热度排名。

同名歧义按编辑规范排除：

- 中文裸词 `glm` 的联想混入演员"桂纶镁"及"格洛米/葛莱美"等；英文语境下 `glm` 另指图形学库 OpenGL Mathematics（用 `glm opengl` 种子词确认）。FAQ 只在定义类答案中提示歧义，不展开。
- `godot` 混入贝克特戏剧《等待戈多》（用 `waiting for godot` 种子词确认）；正文中加"游戏引擎"等限定词采样。

## FAQ 候选与证据

| 页面 | 种子词（语言） | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- | --- |
| GLM | `glm是什么`（zh） | `glm是什么模型`、`glm是什么公司`、`glm是什么大模型` | 定义 | 是（GLM 是什么模型） | [docs.z.ai](https://docs.z.ai/)、[zhipu.wiki](/wiki/brands/zhipu) |
| GLM | `glm`（zh） | `glm 智谱`、`glm 官网`、`glm api`、`glm coding plan`、`glm 5.3` | 导航、开发者信息、版本 | 是（官网/免费试用；最新模型） | [z.ai](https://z.ai/)、[发布记录](https://docs.z.ai/release-notes/new-released.md) |
| GLM | `glm api`（zh） | `glm api价格`、`glm api key`、`glm api开放平台`、`glm api文档` | 开发者接入 | 是（API Key 申请） | [BigModel](https://bigmodel.cn/)、[docs.z.ai](https://docs.z.ai/) |
| GLM | `glm-5.3`（zh） | `glm-5.3 价格`、`glm-5.3 是多模态吗`、`glm-5.3 huggingface`、`glm-5.3 发布`、`glm-5.3 开源`、`glm-5.3 上下文` | 版本、能力、开源 | 是（最新模型；开源权重下载） | [GLM-5.3 文档](https://docs.z.ai/guides/llm/glm-5.3.md)、[zai-org](https://huggingface.co/zai-org) |
| GLM | `glm coding plan`（en） | `glm coding plan price`、`glm coding plan limits`、`glm coding plan vs claude`、`glm coding plan lite/pro` | 订阅、商业信息 | 是（Coding Plan 与 API 计费区别） | [Devpack 概览](https://docs.z.ai/devpack/overview.md) |
| GLM | `glm model`、`glm ai`（en） | `glm model company`、`glm model huggingface`、`glm model open source`、`glm ai chat`、`glm ai pricing` | 定义、导航、开源、计费 | 是（并入上述答案） | 同上 |
| GLM | `glm`（en） | 联想全部为模型含义（`glm 5.2/5.3`、`glm coding plan` 等），另以 `glm opengl` 确认库歧义 | 歧义排除 | 是（定义答案中提示） | — |
| Godot | `godot 免费`（zh） | `godot 免费 吗`、`godot 免费素材` | 许可与费用 | 是（是否免费/版税） | [Introduction 文档](https://docs.godotengine.org/en/stable/about/introduction.html) |
| Godot | `godot engine download`（en/zh） | `godot engine download mac/linux/for windows`、`godot 引擎 下载` | 导航、下载 | 是（下载页） | [下载页](https://godotengine.org/download) |
| Godot | `godot gdscript`（en） | `godot gdscript vs c#`、`godot gdscript or c#`、`godot 引擎 语言`（zh） | 语言选择 | 是（用什么语言） | [Introduction 文档](https://docs.godotengine.org/en/stable/about/introduction.html) |
| Godot | `godot vs unity`（en） | `godot vs unity vs unreal`、`godot vs unity for 2d/3d`、`godot vs unity performance` | 比较 | 是（与 Unity、Unreal 区别，只答授权模式） | [Introduction 文档](https://docs.godotengine.org/en/stable/about/introduction.html) |
| Godot | `godot engine license`（en） | `godot game engine license`、`is godot engine safe`、`is godot engine good for beginners` | 许可 | 部分采用（许可并入"是否免费"） | 同上 |
| Godot | `godot engine`（zh） | `godot engine 是什么`、`godot 是 什么 引擎`、`godot 引擎 游戏` | 定义 | 编辑补充（正文定位已覆盖，未单设 FAQ） | [godotengine.org](https://godotengine.org/) |
| Godot | `godot mcp`、`godot ai`（zh/en） | `godot mcp`、`godot engine ai` | 与 AI 工作流结合 | 编辑补充（节目讨论段落承载，未单设 FAQ） | 逐字稿引用 |

采样原始结果未保存为 JSON 文件；上表逐条记录自 2026-09-18 的 Autocomplete 返回（`client=firefox`，`hl=zh-CN` 与 `hl=en`）。翻译类候选（如 en→zh）与归纳类问题在表中按语言标注；额外解释性问题（如"和 Unity 区别"）为编辑归纳，依托官方文档作答。

## 事实边界与核验来源

GLM（核验日 2026-09-18，均为官方原始页面）：

- [GLM-5.3 文档](https://docs.z.ai/guides/llm/glm-5.3.md)：模型 ID `glm-5.3`，纯文本输入，1M 上下文，128K 输出，推理始终开启（low/high/max）。
- [GLM-5.3-Flash/FlashX 文档](https://docs.z.ai/guides/vlm/glm-5.3-flash.md)：模型 ID `glm-5.3-flash`/`glm-5.3-flashx`，GLM-5 系列首个原生多模态模型，输入 Video/Image/Text/File，320B 总参数/18B 激活，稀疏+线性注意力混合，1M 上下文；FlashX 200 tokens/s；Coding Plan 内 3 倍额度。
- [发布记录](https://docs.z.ai/release-notes/new-released.md)：GLM-5 2026-02-12、GLM-5.1 2026-04-07、GLM-5.2 2026-06-16、GLM-5.3 2026-08-18、GLM-5.3-Flash 2026-08-26。
- [GLM-5.3-Flash 官方博客](https://autoclaw.z.ai/blog/model/glm-5.3-flash/)：开放权重在 Hugging Face、MIT 许可；页面发布日期 2026-09-18，未给出具体开源日期，正文因此未写开源日期。该博客域名（autoclaw.z.ai）与 z.ai/blog/glm-5.3-flash 文档内链指向不同路径，两次抓取内容一致，按官方来源采用。
- [zai-org（Hugging Face）](https://huggingface.co/zai-org)：GLM-5.3（约 753B）、GLM-5.3-Flash（约 321B）等模型列表，2026 年 9 月有更新。
- [Devpack 概览](https://docs.z.ai/devpack/overview.md)：GLM Coding Plan 支持工具（Claude Code、Cline、OpenCode、ZCode）与支持模型（GLM-5.3、GLM-5.3-Flash）；正文不复制具体额度与价格数字。
- 未核验/未写入：GLM 名称词源（General Language Model）、"牛来"昵称的来源、OpenRouter 具体消耗数字（仅节目转述，正文已标注归属）、GLM-6（节目期待，未发布）、国产芯片部署细节（博客提到"Chinese AI accelerators"，正文未展开）。

Godot Engine（核验日 2026-09-18）：

- [godotengine.org](https://godotengine.org/)：免费开源 2D/3D 引擎，Node/Scene 系统，GDScript/C#/C++/GDExtension（C# 自 4.2 起仅桌面与移动），内置 OpenXR/WebXR，跨平台导出，主机经第三方发行商；最新稳定版 4.7.2、Godot 3.6.3 维护版（2026-08-22 新闻）。正文不写"当前最新版本"断言，指向下载页。
- [Introduction 文档](https://docs.godotengine.org/en/stable/about/introduction.html)：MIT 许可、无版税、Godot Foundation 支持、可导出 Linux/macOS/Windows、Android/iOS、Web 与 consoles、可用于非游戏应用。
- [发布策略文档](https://docs.godotengine.org/en/stable/about/release_policy.html)存在（HTTP 200），用于版本选择口径。
- 未核验/未写入：Godot 首发年份与 MIT 许可的具体起始时间、Godot Foundation 成立时间、Godot 4.x 各版本发布日期（未逐一核验，正文以指针替代）。

## 节目证据

GLM 在两期逐字稿中均有大量直接讨论（约 26 次实体提及，另有以"牛来"昵称出现的段落）：Weekly #001 见 chapter-02（模型盘点）、chapter-03（便宜模型）、chapter-04（Computer Use）、chapter-08（模型选择）、chapter-11（原生模型加原生 Agent）、chapter-29、chapter-31（供应）；Weekly #002 见 chapter-11（斩杀线）、chapter-27（GLM 6 期待）。正文引用的段落锚点：`quote-444d2f8b219e819e8720`、`quote-dbc803d85a93950cf75d`、`quote-881880fdb8b857214f65`、`quote-db0d856b6db3893cf011`、`quote-c6e35f7aa3659816e709`、`quote-023ef7b30e402b826cc4`、`quote-04eb570f7407d93d51be`、`quote-e51e5d1462803b9739c6`、`quote-10a029bbadfcaf889bc2`、`quote-d63b1169039a106ffbca`、`quote-42c999dfb0219fe73b64`、`quote-c1f3e38683f1e343c1e8`、`quote-15e650c6078b2a405eb5`、`quote-4926fe30d5f0c4e109f7`、`quote-849ebf0fa658c5107cab`，均由段落锚点脚本在本地逐字稿上生成并复核。节目观点（速度/供应量路线、斩杀线、GLM 6）均为参与者判断或转述，正文已注明；OpenRouter 消耗等具体数字不作为事实写入。

Godot Engine 在逐字稿中仅 1 次提及：Weekly #002 chapter-04（Blender 与代码），歸藏以自己使用 Godot 的经验举例说明"代码驱动、无界面操作"的工作方式；正文如实简写并保留段落锚点 `quote-74af9f2569f40800b725`。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；不能以候选词数量代替需求证明。

## 遗留事项

- `glm` 此前被用作无正文视觉回归回退样例（`tests/visual/wiki-articles.spec.ts`）。本次为 `glm` 新增正文后，回退样例需由整合者更换为其他实际无正文的产品，本批不改测试文件。
- GLM-5.3-Flash 官方博客域名为 `autoclaw.z.ai`，与文档内链的 `z.ai/blog/glm-5.3-flash` 不一致，内容一致；如后续官方调整域名，来源链接需复核。
- 实体 YAML `glm.yaml` 的 `lastVerifiedAt`（2026-09-07）与来源链接未在本次范围内更新。
