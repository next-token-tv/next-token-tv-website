---
entityType: product
entity: pencil
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Pencil（pen.dev）：面向 Agent 的界面设计画布｜Next Token Wiki'
seoDescription: '了解界面设计工具 Pencil（现 pen.dev）：设计画布与代码工作流的连接、MCP 与 CLI 接入、开放的 .pen 格式，以及 Next Token 节目中的讨论。'
---

## Pencil 是什么

Pencil 是一款界面设计工具，把可视化设计画布与代码工作流连接起来：设计者可以在画布上手动绘制和调整界面，也可以让 AI Agent 直接在画布上设计。开发方为 High Agency Inc.。官方站点顶部标注"pencil.dev is now pen.dev"，产品现以 [pen.dev](https://www.pen.dev/) 提供自我定位为"agentic canvas"——一个配合 Agent 构建软件界面的画布；本条目沿用原名 Pencil。

## 用途与使用方式

- **画布设计**：官方页面列出的能力包括图层、组件与变量、渐变、像素网格、钢笔工具等常规设计功能，快捷键与 Figma、Sketch 保持一致；画布基于 WebGL 渲染，官方称数千图层下仍能流畅平移缩放。
- **导入与导出**：支持导入 Figma 文件，或通过内置浏览器、Chrome 扩展把网页作为可编辑图层导入画布；任意画框可一键导出为 HTML/CSS/Tailwind。
- **Agent 接入**：除画布内的 Agent 外，官方称可通过 MCP 连接 Claude Code、Codex、Cursor 等外部 Agent，也可以用 CLI 在终端无界面地设计；IDE 扩展覆盖 Cursor、VS Code 等。
- **文件格式**：.pen 文件是 JSON 格式，官方称 schema 完全开放，便于 Agent 直接读写。
- **平台**：桌面应用支持 macOS（Apple Silicon 与 Intel）、Windows 与 Linux（AppImage/Tarball），另有 Chrome 扩展与 IDE 扩展；入口见[官方下载页](https://www.pen.dev/downloads)。

是否收费以[官方定价页](https://www.pen.dev/pricing)为准。

## 节目中的讨论

Weekly #005 的"从 Descript 到软件成为 Agent 插件"章节讨论的是软件应该开放给外部 Agent 调用，还是只服务自家 Agent。[歸藏在对比中提到 Pencil](/weekly/005/transcript#quote-646fcd1e063b1ad42c77)：它"有一个自己的界面，在广播一个 MCP"。这一描述与官方"通过 MCP 连接外部 Agent"的说明相符。同一章节还讨论了 [Descript](/wiki/products/descript) 的封闭生态与 [MagicPath](/wiki/products/magicpath)。

## 常见问题

### Pencil 和 pen.dev 是什么关系？

是同一个产品：官方站点标注"pencil.dev is now pen.dev"，原 Pencil 现以 pen.dev 域名提供服务。

### Pencil 可以连接 Claude Code 或 Codex 吗？

可以。官方页面称可通过 MCP 连接 Claude Code、Codex、Cursor 等 Agent，也提供 CLI 和随附的 Agent skill；接入方式见[官方文档](https://docs.pen.dev)。

### Pencil 收费吗？

官方定价页列出 Free、Pro、Ultra 等分层；截至 2026 年 10 月，该页注明付费计划上线前产品免费使用。当前费率与配额见[官方定价页](https://www.pen.dev/pricing)。

### Pencil 是开源软件吗？

官方强调 .pen 文件是 schema 开放的 JSON 格式，但未标注代码开源，站点也未提供公开代码仓库入口。开放文件格式与开源软件是两回事。

## 来源

- [pen.dev 官方站点](https://www.pen.dev/)
- [pen.dev 下载页](https://www.pen.dev/downloads)
- [pen.dev 定价页](https://www.pen.dev/pricing)
- [pen.dev 文档](https://docs.pen.dev)
