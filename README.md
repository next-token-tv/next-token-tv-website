# Next Token | 词元之外

`nexttoken.tv` 的品牌官网。Next Token 是关注 AI 技术、产品、创业与创作的视频播客品牌，Next Token Weekly 是当前的旗舰周播栏目。

## 本地预览

```bash
npm run dev
```

打开 <http://127.0.0.1:4174/>。

## 构建

```bash
npm run build
```

## 部署

官网使用 Cloudflare Workers Static Assets 托管，生产域名为 <https://nexttoken.tv>。部署配置由根目录的 `wrangler.jsonc` 维护，不使用 OpenAI Sites。

```bash
npm run deploy
```
