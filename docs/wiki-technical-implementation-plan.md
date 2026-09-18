# Wiki 技术实现与验收规范

基线日期：2026-09-17。本文描述已有实现和后续扩写接口，不要求重新实现正文 schema、共享布局或段落锚点。范围与完成数量见[总体方案](wiki-content-seo-plan.md)，内容与来源规则见[编辑规范](wiki-editorial-plan.md)。

## 当前架构

| 能力 | 当前实现 | 接手边界 |
| --- | --- | --- |
| 实体元数据 | `src/content/data/{brands,products,people}/*.yaml` | 稳定 ID、分类、别名、关系、官方链接与核验日期；已有数据也须按来源复核。 |
| Wiki 正文 | `src/content/prose/{brands,products,people}/<id>.wiki.<locale>.md` | 已有 `slot: wiki`，按实体和语言读取；扩写通常只需新增 Markdown。 |
| schema 与读取 | `src/content.config.ts`、`src/data/catalog.ts` 的 `getWikiArticle` | 已校验重复实体／语言正文、实体引用、允许类型和必需更新日期；不再新建一套契约。 |
| 产品／品牌页面 | `EntityDetailPage.astro` | 有当前语言正文时使用共享内容型布局；无正文时保留原展示。 |
| 普通人物页面 | `PeopleLibraryPage.astro` | 有正文时共用页头与资料区布局；人物目录独立保留分类切换。 |
| 主理人页面 | `HostProfilePage.astro` | 由人物路由按 host membership 分流，当前未接入 `WikiArticle`；新增主理人正文不会自动显示。 |
| SEO 与路由 | 六个中英文实体详情路由、`BaseLayout.astro` | 使用正文 SEO 字段，缺少时回退实体摘要；保留既有 canonical、hreflang 和路由。 |
| 公开数据 | `src/data/wiki-api.ts` | API v1 保持原数据契约；Wiki 正文、FAQ 和逐字稿不自动加入 API。 |

`src/content/imported/` 的制作及逐字稿快照由现有导入流程生成，不能手工编辑。当前讨论摘要直接写在 Markdown 中，没有独立讨论摘要 YAML 集合；普通扩写不新增此集合。

## 正文接口

产品示例：`src/content/prose/products/<existing-id>.wiki.zh-Hans.md`。

```yaml
---
entityType: product
entity: <existing-id>
locale: zh-Hans
slot: wiki
updatedAt: 'YYYY-MM-DD'
seoTitle: '产品名：正文实际覆盖的主题｜Next Token Wiki'
seoDescription: '准确概括该语言正文的内容。'
---
```

上例是字段模板，ID 与日期占位符必须替换。英文使用 `locale: en` 和 `.wiki.en.md`；品牌、人物使用 `brand`、`person` 及各自目录。同一实体和语言最多一篇 Wiki 正文。

`updatedAt` 在 Wiki 正文中必需，使用实际编辑日期，不随构建自动改变。`seoTitle`、`seoDescription` 在 schema 中可选，但新批次正文应填写；不把正文更新日期写入实体事实的 `lastVerifiedAt`。文件名与 frontmatter 按约定人工核对，不能假设所有命名错误都已有自动检查。

页面负责唯一 H1，Markdown 从 H2 开始；`WikiArticle.astro` 拒绝正文 H1。目录取 H2，FAQ 的 H3 不单列目录。正文、FAQ 与核心链接由 Astro 渲染为静态 HTML，无 JavaScript 时仍可读。

## 共享呈现的所有权

| 文件 | 负责内容 |
| --- | --- |
| `src/components/WikiDetailHeader.astro` | 三类正文页的返回导航、标题区网格、名称、摘要、直接展开的别名、卡片槽位 |
| `src/components/WikiIdentityCard.astro` | 黑色卡片、分类标签、橙色标记、主文字、署名、人物正方形头像／占位卡 |
| `src/components/WikiArticle.astro` | 正文、H2 目录、面包屑、两类日期、Article 与 BreadcrumbList JSON-LD |
| `src/styles/tokens.css` | Wiki 视觉区高度、栏位比例、列间距及区块留白变量 |
| `src/styles/wiki-detail.css` | 辅助资料区网格、分割线、标题、内部链接的无装饰线规则 |
| `src/components/EntityPeopleRelations.astro` | 关联实体的名称、人物关系、具体来源；紧凑模式为三列、手机分组 |
| `src/components/RelatedEpisodes.astro` | 统一“在 Next Token 中出现”模块、节目行及可选文字稿章节链接 |

实现约束：

- 页头、阅读区、辅助区块分别有自己的 `.shell`；不要在正文人物页外再放一层整页 `.shell`。
- 分割线跨相同容器宽度，正文保持统一 gutter；标题、正文与辅助内容共用栏位起点。
- 卡片桌面高度 12rem，窄屏 9rem；人物正方形卡片在左栏居中。分类标签为“产品／品牌／人物”，品牌不按公司性质替换标签。
- 支持区块保留外部分割线，内部链接、列表行不加上下装饰线；正文引用仍带下划线，链接保留悬停反馈与键盘焦点。
- 辅助资料紧凑排版，不恢复 01/02/03 大编号或固定高信息块。所有 H2 使用共享 1.25 行高。
- `RelatedEpisodes` 位于详情主体最后；人物章节链接归在对应节目下。节目元数据或章节都未关联时不生成空模块。
- FAQ 直接作为 Markdown 的 H2/H3 与短答，不额外建路由、折叠组件或 FAQPage JSON-LD。
- 更新日期与核验日期放在目录下；不要在官方链接模块再重复展示核验日期。

新增内容不得复制这些样式到单个实体页面。需要改公共布局时只改其拥有者，并验证产品、品牌、人物三类页面；默认不扩大到主理人页或没有 Wiki 正文的旧模板。

## 逐字稿引用接口

`src/data/transcript-paragraph-anchors.ts` 为段落生成 `quote-<20位哈希>`，重复的同一发言人／原文组合按全文出现次序追加序号。输入使用发言人 ID（缺失时用名称）和归一化正文；章节位置、普通发言顺序和实体链接标记不参与定位。

- `EpisodeTranscriptPage.astro` 输出原生段落 ID 与 `¶` 链接。
- `TranscriptReaderTools.astro` 增强复制正式站点 URL 与定位；剪贴板失败可选取链接文本，无 JavaScript 时原生链接仍可用。
- 现有章节链接与搜索用 turn 链接保留。段落是内容指纹，不是跨编辑版本的永久 ID；修改文本、发言人或重复段落次序后复核引用。
- 没有已核验的发言时间戳，不生成行号或播放时间点链接。
- 英文正文可明确引用中文原文；不得从中文章节推导一个不存在的英文逐字稿 URL。

Markdown 内的任意章节／段落链接不由独立讨论 schema 验证。真实目标存在性通过构建产物链接审计与浏览器检查覆盖；发言语义和归属必须人工审读，不能声称 schema 会检查事实真假。

## 内容批次的常规改动范围

通常只需：

1. 分配 ID 的中英文 Markdown。
2. `docs/research/` 下该批独立需求与来源记录，必要时保留原始采样 JSON。
3. 由整合者更新[总体方案](wiki-content-seo-plan.md)完成清单与[正文说明](wiki-articles.md)。

仅在发现有来源支持的元数据错误且属于分配范围时改 YAML。普通正文批次不改组件、schema、路由、API、导入快照或截图基线。主理人接入、其他实体类型、API 新字段和新主题页属于独立技术范围，不是批量补正文的隐含任务。

## 验收与已知测试约束

| 检查 | 覆盖范围与限制 |
| --- | --- |
| `npm run check` | 章节、逐字稿单测、样式规则与 Astro 类型检查；不是外部事实验证。 |
| `npm run build` | 生成正式静态站点，执行构建链中的检查；正文 schema、实体引用和 H1 约束在此验证。 |
| `npm run test:visual` | 构建并启动测试预览，执行布局与浏览器回归；包含 Wiki 双语样板和引用检查。 |
| `npm run check:release` | 对现有 `dist` 检查内链、锚点、URL、路由、API 等；须在最新构建之后运行。 |
| `npm run release:check` | 仓库完整发布前检查；不自动发布。 |

新增批次还要逐页验证：

- 中英文 H1 唯一、正文和 FAQ 在无 JavaScript 时可读。
- 目录和所有站内实体／节目／段落链接有效，canonical、hreflang 与对应语言 URL 正确。
- 桌面与手机无横向溢出；长名称与来源不挤压布局；日期分工与最终节目模块位置正确。
- 结构化数据与实际正文一致。不虚构评分、评论、FAQ 富媒体或 AI 引用效果。
- 无正文实体仍可读；公开 API v1 的既有键、类型、ID 和 URL 保持兼容。

`tests/visual/wiki-articles.spec.ts` 当前以 DeepSeek 产品／品牌和 DHH 为固定样板，覆盖 390、768、1280、1440、1920、2560 宽度。2026-09-18 起全部产品、品牌和非主理人人物均有正文，不再存在可用的无正文回退样例：原 `glm` 回退断言已改为对样例页的正向断言，并在测试内注释说明恢复方式——未来新增尚无正文的实体时，应将无正文回退用例（`.wiki-prose` 计数为 0 且 h1 可见）指向该实体。新产品不会自动加入固定样板循环，需要额外逐页检查。

样式改动按[设计规范](design-guidelines.md)完成全尺寸检查。纯内容批次沿用布局；全站测试由整合者统一运行，避免多个 Agent 同时争用构建输出或预览端口。预览服务若占用默认测试端口，可使用 `PLAYWRIGHT_PORT=<空闲端口> npm run test:visual`。

## 协作与发布状态

本地已实现不等于已进入 Git 或线上。接手前核对实际分支、工作区、文件与当前任务范围，保留无关改动；并行内容 Agent 只改分配的文件，汇总文档由整合者维护。

交付报告分别说明内容完成范围、事实与链接核验、检查结果、剩余问题、提交、推送和部署状态。采用 Conventional Commits；`npm run deploy`、push 等动作仅按任务已有授权执行。当前三个方案本身不触发发布，也不创建自动监控。
