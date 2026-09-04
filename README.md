# Next Token | 词元之外

`nexttoken.tv` 的中英文品牌官网。Next Token 是关注 AI 技术、产品、创业与创作的视频播客品牌，Next Token Weekly 是当前的旗舰周播栏目。

- 中文：<https://nexttoken.tv/>
- English: <https://nexttoken.tv/en/>

首次访问根路径时，网站根据浏览器首选语言选择中文或英文；用户通过页眉切换语言后，后续访问优先沿用手动选择。

## 本地预览

```bash
npm run dev
```

打开 <http://127.0.0.1:4174/> 查看中文页面，或打开 <http://127.0.0.1:4174/en/> 查看英文页面。

## 构建

```bash
npm run build
```

## 部署

官网使用 Cloudflare Workers Static Assets 托管，生产域名为 <https://nexttoken.tv>。部署配置由根目录的 `wrangler.jsonc` 维护，不使用 OpenAI Sites。

```bash
npm run deploy
```
