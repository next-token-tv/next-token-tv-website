# Next Token | 词元之外

`nexttoken.tv` 的中英文品牌官网。Next Token 是关注 AI 技术、产品、创业与创作的视频播客品牌，Next Token Weekly 是当前的旗舰周播栏目。网站使用 Astro 纯静态生成，由 Cloudflare Workers Static Assets 托管。

- 中文：<https://nexttoken.tv/>
- English: <https://nexttoken.tv/en/>

首次访问根路径时，网站根据浏览器首选语言选择中文或英文；用户通过页眉切换语言后，后续访问优先沿用手动选择。

## 技术架构

- `src/pages/`：Astro 路由，当前生成中文首页、英文首页和 404 页。
- `src/components/`：页面与人物卡片等可复用组件。
- `src/data/site.ts`：中英文文案、主理人和社交账号的唯一数据源。
- `src/styles/global.css`：品牌视觉和响应式样式。
- `public/assets/`：字体、图片和品牌资产。
- `wrangler.jsonc`：Cloudflare 静态资产、自定义域名与 404 行为。

Astro 默认在构建时预渲染所有页面，当前不需要 Cloudflare adapter 或 Worker 运行时。

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
