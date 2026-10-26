# 公众号对话频道

写作遵循 [公众号整期对谈精编规范](wechat-editorial.zh-Hans.md)，使用 [.agents/skills/next-token-wechat/SKILL.md](../.agents/skills/next-token-wechat/SKILL.md)。

- 独立频道路径为 `/wechat`，文章路径为 `/wechat/NNN`。页面沿用 Next Token 的共享配色与字体，保持独立阅读布局，不使用主站导航或页脚，不在主站增加入口，不进入 XML sitemap，带 `noindex, nofollow`。
- 中文稿件源文件为 `src/content/prose/wechat/NNN.md`。元数据包含三位期号 `number`、标题 `title`、简介 `description` 和录制日期 `recordedAt`。
- 整期对谈精编的主题、话题和固定 emoji 署名规则见编辑规范。署名使用 `<p class="speaker">emoji 姓名</p>`。页面标注发言经删节整理，导读可跳转至主题。
- 第 006 期来源为网站已发布的 `next-token-weekly--006.zh-Hans.json` 文字稿快照，包含工具与风险、Agent 实际工作、使用乐趣、技能与记忆、内容创作五组主题，共十二个话题；不是完整逐字稿。
- 频道与已有第三人称精读文章相互独立。该频道是公众号文章排版页面，不代表已发布到微信公众号。
- 复制按钮仅复制文章区，提供内联样式 HTML 与纯文本，图片使用网站绝对地址。剪贴板不可用时选中正文供手动复制。微信公众号编辑器可能过滤部分格式，粘贴后需检查图片和段落。

- `status: draft` 的稿件仅在 Astro 开发预览中显示，正式构建不生成文章页或首页卡片；现有未设状态的稿件保持原来的发布可见性。`cover` 可指定封面路径，`closingQuestion` 可指定本期结尾提问。
- 第 007 期本地试稿依据 `next-token-weekly--007.zh-Hans.json` 的已提交审阅快照（源版本 `034fe5992aff502e74cf69bfc5f12bb8c467488d`），保留六组主题；源文字稿与文章尚未发布。
