# 品牌与产品分享图

品牌和产品页面按页面语言各生成一张 1200 × 630 PNG，用于现有 OG 与 Twitter 分享元数据。品牌使用深色底，产品使用浅色底和橙色辅助图形；主名称、简短介绍与 Next Token 官方标识形成信息层级。

- 标识使用 `public/assets/brand-kit/logo-next-token.svg` 的完整官方交付文件，保留比例、字形、颜色与不透明底色；权威源仍在制作仓库。
- 图片包含主体名称、对应语言的简介、Next Token 标识与站点域名，不展示完整页面路径。
- 简介优先读取实体 YAML 的可选双语 `socialSummary`，否则使用现有 `summary`。短文案只用于分享图，不改变页面介绍。
- 标题和简介按可用宽度自然换行，不插入人工换行、不裁去正文。简介字号为原图 40–44 px；标题根据名称长度在 72–152 px 范围内适配。
- 生成器检测文字溢出；无法容纳的简介须编辑 `socialSummary`，而非继续缩小文字。
- PNG 使用无损压缩；实体卡片单张不超过 500 KiB。格式、尺寸、文件大小、双语覆盖、规范地址和页面图片引用由 `npm run check:seo` 检查。
- Git 保留 SVG 标识、字体、文案及 HTML/CSS 渲染模板，不跟踪 `public/assets/og/` 中的 PNG 和生成清单，也不跟踪本地样张 PNG 和生成的 HTML 预览。
- `npm run build` 和 `npm run dev` 均先生成分享图；构建主机须安装 Chrome 和中文字体。每个发布产物包含当次生成的 PNG 与清单，部署时无需动态渲染。
- 图片文件名包含内容哈希；相同输入复用已有文件。生成成功并写入清单后清理未引用的生成图片，不保留旧哈希地址。普通卡片与实体卡片分别以各自渲染模块参与哈希，清理逻辑变更不会触发图片重生成。

生成命令：`npm run generate:og`。构建后执行 `npm run check:seo`。运行 `node docs/design/og-v2/render.mjs` 生成样张与时间线示意，见 `docs/design/og-v2/preview.html`，不进入站点发布目录。
