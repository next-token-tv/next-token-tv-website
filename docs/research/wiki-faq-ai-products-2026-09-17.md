# AI 产品 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `chatgpt`、`codex`、`claude`、`claude-code`、`cursor` 和 `gemini` 的 Wiki 正文。研究日期为 2026-09-17，面向中文和英文读者。公开 SERP 采样用于确认问题形态和官方答案入口；本次没有 Search Console、关键词工具或受控地区的搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。候选词的出现不等于热门，也不构成效果承诺。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体 | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| ChatGPT | `chatgpt官网`、`chatgpt下载`、`chatgpt api`、`chatgpt网页版`、`chatgpt app`、`chatgpt login`、`chatgpt desktop` | 导航、开发者信息、访问 | 是 | [ChatGPT FAQ](https://help.openai.com/en/articles/12677804-what-is-chatgpt-faq)、[ChatGPT](https://chatgpt.com/) |
| Codex | `codex下载`、`codex cli`、`codex官网`、`codex app`、`codex安装`、`codex是什么`、`codex skills`、`codex download` | 导航、定义、安装 | 是 | [Codex](https://openai.com/codex/)、[Codex documentation](https://developers.openai.com/codex/) |
| Claude | `claude官网`、`claude下载`、`claude desktop`、`claude api`、`claude code`、`claude login`、`claude vs chatgpt` | 导航、开发者信息、比较 | 是 | [Claude](https://www.anthropic.com/claude)、[Claude models](https://docs.anthropic.com/en/docs/about-claude/models/overview)、[Claude API](https://platform.claude.com/docs/en/api/overview) |
| Claude Code | `claude code安装`、`claude code desktop`、`claude code cli`、`claude code下载`、`claude code docs`、`claude code skills`、`claude code pricing`、`claude code vs codex` | 安装、导航、比较、商业信息 | 是 | [Claude Code](https://www.anthropic.com/claude-code)、[Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview) |
| Cursor | `cursor下载`、`cursor官网`、`cursor cli`、`cursor是什么`、`cursor使用教程`、`cursor pro`、`cursor download`、`cursor vs claude code` | 导航、定义、安装、比较 | 是 | [Cursor](https://cursor.com/)、[Cursor Agent](https://cursor.com/docs/agent/overview)、[Background Agents](https://docs.cursor.com/background-agent) |
| Gemini | `gemini官网`、`gemini api`、`gemini下载`、`gemini cli`、`gemini pro`、`gemini ai studio`、`gemini ai` | 导航、开发者信息、版本信息 | 是 | [Gemini](https://gemini.google.com/)、[Gemini API models](https://ai.google.dev/gemini-api/docs/models)、[API reference](https://ai.google.dev/api) |

以上候选来自 [2026-09-17 Google Autocomplete 原始采样](wiki-faq-ai-products-autocomplete-2026-09-17.json)及官方文档检索；它们是需求线索，不是排名或搜索量报告。英文裸 `gemini` 结果混入星座含义，因此只采用带 AI、Google、API 或 AI Studio 修饰的候选。Autocomplete 的候选顺序不表示热度。SERP 中能直接回答核心问题的官方结果包括 OpenAI 的 ChatGPT FAQ、OpenAI Developers 的 Codex 入口、Anthropic 的 Claude API 文档、Anthropic 的 Claude Code 使用说明、Cursor 的 Agent 文档和 Google AI for Developers 的模型文档。第三方教程、论坛和百科结果不作为产品能力的主要证据。

本轮正文实际核验并使用的具体入口包括：[ChatGPT FAQ](https://help.openai.com/en/articles/12677804-what-is-chatgpt-faq)、[ChatGPT 定价](https://chatgpt.com/pricing/)、[OpenAI API 概览](https://platform.openai.com/docs/overview)、[Codex 文档](https://developers.openai.com/codex/)、[Codex 计划使用说明](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)、[Claude Desktop 安装](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop)、[Claude API 概览](https://platform.claude.com/docs/en/api/overview)、[Claude Code 安装](https://docs.anthropic.com/en/docs/claude-code/getting-started)、[Claude Desktop Code 标签说明](https://code.claude.com/docs/en/desktop-quickstart)、[Cursor CLI](https://docs.cursor.com/en/cli/overview)、[Cursor 定价](https://cursor.com/pricing/)、[Gemini API 参考](https://ai.google.dev/api)、[Google AI Studio](https://aistudio.google.com/)和[Gemini API 价格与免费层](https://ai.google.dev/gemini-api/docs/pricing)。

## 事实边界

- ChatGPT 官方 FAQ 将其描述为可用于写作、学习、规划、数学、编程及分析文件或图像的 AI 助手；具体功能、地区和账户条件会变化，正文只保留稳定的使用边界。
- OpenAI 当前 Codex 文档覆盖编辑器、终端、桌面应用和云端工作方式；正文不把某一模型版本、套餐或配额写成长期事实。
- Claude 页面同时涵盖直接使用的 Claude 产品和开发者平台；模型名称、可用性和 API 条件应回到 Anthropic 当前文档。
- Claude Code 官方资料将其定位为软件工程工作流中的编码 Agent；正文强调代码、命令、权限和审阅边界，不编造安装命令或价格。
- Cursor 官方文档明确区分编辑器中的 Agent、工具调用与 Background Agents；正文不把云端后台运行等同于本地执行。
- Gemini API 文档列出模型、接口和版本状态；正文不把 YAML 中的未来或易变别名自动当作当前官方型号。

## 节目证据

本地已发布的中文逐字稿有直接相关章节：ChatGPT 见 [Weekly #002 chapter-17](/weekly/002/transcript#chapter-17)；Codex 见 [Weekly #002 chapter-05](/weekly/002/transcript#chapter-05)；Claude 与 Claude Code 见 [Weekly #001 chapter-06](/weekly/001/transcript#chapter-06)；Cursor 见 [Weekly #001 chapter-23](/weekly/001/transcript#chapter-23)；Gemini 见 [Weekly #002 chapter-07](/weekly/002/transcript#chapter-07)。这些链接承载的是节目参与者在具体语境中的讨论或体验，不是独立测评、官方背书或搜索需求证据。英文正文链接到中文章节，并明确标注暂无对应英文逐字稿。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用候选词数量代替。

## 补充官方入口

- [Codex CLI 安装与登录](https://developers.openai.com/codex/cli/)
- [桌面应用指南](https://developers.openai.com/codex/app/)
- [Claude Code CLI Quickstart](https://code.claude.com/docs/en/quickstart)
- [Claude Code Desktop Quickstart](https://code.claude.com/docs/en/desktop-quickstart)
