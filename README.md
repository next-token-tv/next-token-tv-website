# Next Token | 词元之外

`nexttoken.tv` 的中英文品牌官网。Next Token 是关注 AI 技术、产品、创业与创作的视频播客品牌，Next Token Weekly 是当前的旗舰周播栏目。网站使用 Astro 纯静态生成，由 Cloudflare Workers Static Assets 托管。

- 中文：<https://nexttoken.tv/>
- English: <https://nexttoken.tv/en/>
- 场地合作伙伴：<https://nexttoken.tv/partners/>

各语言 URL 始终直接展示对应内容，不按浏览器语言自动跳转。全站在语言偏好与当前页面不一致时提供双向切换提示：中文页显示 “Switch to English”，英文页显示“切换到中文”。手动选择优先于浏览器语言；继续浏览当前语言也会保存为偏好。切换保留对应页面路径、查询参数与锚点。存储不可用时，切换链接仍正常工作。

## 技术架构

- `src/pages/`：Astro 路由，生成中英文首页、伙伴列表、伙伴详情和 404 页。
- `src/components/`：公共页头、页脚、页面与内容条目等可复用组件。
- `src/content.config.ts`：所有元数据集合的 schema，以及跨集合加载入口。
- `src/content/data/`：由人维护的 YAML 结构化元数据，包括人物、主理人关系、节目、合作伙伴、具体场地、单集公开展示、行业品牌和行业产品。
- `src/content/prose/`：按实体与语言拆分的 Markdown 长文内容。
- `src/content/imported/`：由其他生产仓库生成的 JSON 快照，不手工编辑。
- `src/data/catalog.ts`：加载集合、校验引用完整性，并向现有页面提供兼容的数据结构。
- `src/data/site.ts`：只保留首页、页眉和页脚等页面级中英文文案。
- `src/data/partners.ts`：把合作伙伴与具体场地元数据适配为现有伙伴页面的数据结构。
- `src/styles/global.css`：品牌视觉和响应式样式。
- `public/assets/`：字体、图片和品牌资产。
- `wrangler.jsonc`：Cloudflare 静态资产、自定义域名与 404 行为。

Astro 默认在构建时预渲染所有页面，当前不需要 Cloudflare adapter 或 Worker 运行时。

## 元数据约定

结构化元数据使用 YAML，较长的本地化正文使用 Markdown，来自制作流程的不可手工编辑快照使用 JSON。实体之间以稳定的英文小写 ID 引用；ID 即文件名去掉扩展名。

当前集合包括：

- `people`：人物的公开资料与社交账号。
- `shows`：节目栏目，例如 Next Token Weekly。
- `host-memberships`：人物担任某一栏目的主理人关系，不承载通用履历。
- `partners` 与 `venues`：场地合作伙伴和其名下的具体场地。
- `episodes`：网站编辑的单集标题、平台链接、首页展示文案与提及实体。
- `brands` 与 `products`：AI 行业品牌和产品知识库。产品必须引用所属品牌，也可以引用父产品。

品牌/产品库的 SSOT 在本仓库。Next Token 自身的 Logo 与 VI 源文件仍以相邻的 `next-token` 仓库为 SSOT，`public/assets/` 中仅保存网站发布副本。当前没有 SRT 工具集成；后续工具应读取这里的稳定实体 ID。

单集支持 `announced` 与 `published` 两个网站生命周期。预告状态保存已经确认的录制日期、具体场地与预告文案，不要求制作快照；发布状态必须通过 `productionImport` 关联制作仓快照。预告页面按元数据生成在 `/weekly/<期号>/` 与 `/en/weekly/<期号>/`。

## 导入单集发布包

官网从相邻的内容制作仓库导入已校验的单集制作事实和 WebP 封面：

```bash
npm run import:episode -- ../next-token/shows/weekly/episodes/001
```

导入结果写入 `src/content/imported/episodes/<show>--<episode>.production.json`。每期源数据必须通过 `recording_venue.partner_slug` 和 `recording_venue.venue_slug` 绑定一个具体录制场地。导入器核对发布 manifest 中的字节数和 SHA-256，并记录内容仓库提交与 manifest 校验值。已有文件不同时默认拒绝覆盖；确认发布变更后使用 `--force`。

单集的公开展示文案、平台链接和实体提及仍由 `src/content/data/episodes/` 下的 YAML 维护；制作日期、参与人、录制场地和发布产物来自上述 JSON 快照。两者通过 `productionImport` ID 关联，构建时会校验所有引用。

## 本地预览

```bash
npm install
npm run dev
```

打开 <http://127.0.0.1:4174/> 查看中文页面，或打开 <http://127.0.0.1:4174/en/> 查看英文页面。

## 构建

```bash
npm run build
```

构建前会先执行 Astro 与 TypeScript 检查，静态产物输出到 `dist/`。本地检查构建产物：

```bash
npm run preview
```

## Sitemap 与搜索索引

本地开发与预览接受有无末尾斜杠的页面地址，避免 `/en` 等手动输入地址返回 404。静态产物使用目录格式，canonical、站内链接与 sitemap 统一使用带末尾斜杠的页面 URL；生产环境由 Cloudflare 的默认目录索引规则将无斜杠地址跳转到带斜杠地址。

`@astrojs/sitemap` 在每次生产构建时根据实际生成的页面自动创建 `dist/sitemap-index.xml` 和分片 sitemap。入口为 <https://nexttoken.tv/sitemap-index.xml>，`/robots.txt` 和公共页面的 HTML head 都声明该入口。

Sitemap 包含中英文首页、栏目、分期和合作伙伴页面，包括公开的录制预告；404 页面不进入 sitemap。语言对应关系使用 `zh-Hans` 和 `en`，中文保留无语言前缀的路径。新增静态页面或由元数据生成的新分期会自动纳入。

分期从预告更新为正式内容时保留原 URL。当前未设置 `lastmod`：后续只能从可信的内容更新时间生成，不使用构建时间或录制日期代替。生产发布后可在 Google Search Console 中提交上述 sitemap 入口。

## 部署

官网使用 Cloudflare Workers Static Assets 托管，生产域名为 <https://nexttoken.tv>。部署配置由根目录的 `wrangler.jsonc` 维护。

```bash
npm run deploy
```
