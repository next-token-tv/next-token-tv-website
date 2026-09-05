# Next Token | 词元之外

`nexttoken.tv` 的中英文品牌官网。Next Token 是关注 AI 技术、产品、创业与创作的视频播客品牌，Next Token Weekly 是当前的旗舰周播栏目。网站使用 Astro 纯静态生成，由 Cloudflare Workers Static Assets 托管。

- 中文：<https://nexttoken.tv/>
- English: <https://nexttoken.tv/en/>
- 场地合作伙伴：<https://nexttoken.tv/partners/>

首次访问根路径时，网站根据浏览器首选语言选择中文或英文；用户通过页眉切换语言后，后续访问优先沿用手动选择。

## 技术架构

- `src/pages/`：Astro 路由，生成中英文首页、伙伴列表、伙伴详情和 404 页。
- `src/components/`：公共页头、页脚、页面与内容条目等可复用组件。
- `src/data/site.ts`：中英文文案、主理人和社交账号的唯一数据源。
- `src/data/episodes/`：从内容制作仓库导入的已发布单集事实与来源校验信息。
- `src/data/partners.ts`：场地合作伙伴资料、地图 POI 与详情页内容的数据源。
- `src/styles/global.css`：品牌视觉和响应式样式。
- `public/assets/`：字体、图片和品牌资产。
- `wrangler.jsonc`：Cloudflare 静态资产、自定义域名与 404 行为。

Astro 默认在构建时预渲染所有页面，当前不需要 Cloudflare adapter 或 Worker 运行时。

## 导入单集发布包

官网从相邻的内容制作仓库导入已校验的公开单集数据和 WebP 封面：

```bash
npm run import:episode -- ../next-token/shows/weekly/episodes/001
```

导入器核对发布 manifest 中的字节数和 SHA-256，并记录内容仓库提交与 manifest 校验值。已有文件不同时默认拒绝覆盖；确认发布变更后使用 `--force`。

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

## 部署

官网使用 Cloudflare Workers Static Assets 托管，生产域名为 <https://nexttoken.tv>。部署配置由根目录的 `wrangler.jsonc` 维护。

```bash
npm run deploy
```
