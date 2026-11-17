# 英文文字稿

001–005 期英文阅读稿以制作库 `03-post-production/transcripts/reading/transcript.en.md` 为可维护正文来源。相邻 `transcript.en.manifest.json` 记录中文快照哈希、逐段对应关系、英文正文哈希及复核报告。`<!-- translation-unit: ... -->` 是稳定的段落对应标记，不进入网页可见正文。

文字复核与网站检查分别验收：文字复核检查翻译忠实度、专名、数字、否定和限定；网站检查验证结构、链接与排版。中文原句含混时保留来源疑点，文字模型复核不等于听校。

本地导入：

```sh
npm run import:transcript-translation -- ../next-token/shows/weekly/episodes/001/03-post-production/transcripts/reading/transcript.en.md --review-preview
```

导入器校验中文快照、英文稿和复核报告的哈希，要求全部文字单元覆盖，并保持章节、发言归属、候选署名与段落时间不变。已有资料库链接从英文 Markdown 读取，不根据译文重新猜测实体。

当前入口只生成 `review-draft` 本地预览，来源 Git 状态如实记录。它不授予发布批准，不代替正式发布来源归档与网站部署。不要手工编辑 `src/content/imported/transcripts/*.en.json`。
