# Weekly 004 官网发行页

- 中文：`/weekly/004`；英文：`/en/weekly/004`。
- 页面包含正式方形封面、中英文介绍、24 个发行时间轴章节、参与者、资料库、社群与音乐署名。
- 封面来源：内容仓库 `shows/weekly/episodes/004/04-release/artwork/cover-square.jpg`，原图 3000 × 3000；官网提供 480、720、960、1440、1920 像素 WebP。
- 社群二维码使用发行包原始 PNG，图片标注 2026 年 10 月 4 日前有效。
- 中文 Show Notes 来源：`04-release/copy/show-notes.zh-Hans.md`。英文为对应介绍；Muse Agent 的官方链接与模型家族区分保持一致。
- 章节来源：`04-release/copy/chapters.json`，包含精彩片段、片头和片尾，使用发行媒体时间轴。快照记录源文件 SHA-256 和 `prepared` 状态。
- 准备阶段章节导入命令：`python3 scripts/import-prepared-chapters.py ../next-token/shows/weekly/episodes/004`。此命令验证章节顺序、锁定字幕及哈希，仅写入官网，不变更发行包或发布状态。
- 官网 004 已使用 `published` 状态，进入首页与节目列表的最新单集。
- 平台播放地址为空时隐藏平台区块，不显示“即将开放”。音视频可用性字段独立维护。
- 阅读稿来源与发布清单已提交，官网快照为 `published`，入口、搜索索引和 Markdown 导出均使用正式状态。
- 媒体发布记录同步：`node scripts/sync-episode-release.mjs 004`；仅导入已有公开地址与实际发布日期。

## 文字稿先行发布

004 的文字稿于 2026-09-27 在官网独立发布，`transcriptPublishedAt` 记录文字稿上线日期。音视频虽已定稿，平台链接仍待实际发布后同步；媒体发布日期不使用文字稿日期替代。平台记录更新后，通过 `node scripts/sync-episode-release.mjs 004` 导入上线链接与媒体日期。
