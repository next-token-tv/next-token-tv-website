# 社群二维码

官网各期的中英文详情页统一使用节目 YAML 中的 `community` 配置，由 `EpisodeCommunity.astro` 展示。历史各期与新一期始终使用同一份最新二维码。

Next Token Weekly 的配置文件为 `src/content/data/shows/next-token-weekly.yaml`。更新二维码时，更换 `community.qrImage` 指向的 PNG 或 WebP 文件，同步图片宽高、描述中的有效期及替代文字。图片使用带日期的新文件名，避免浏览器缓存旧码；无需逐期修改 Show Notes。

生产素材位于相邻 `next-token` 仓库；`public/assets/` 是官网交付副本。图片保持原始比例，采用延迟加载。

小宇宙已发布各期的二维码也应同步为最新版，由小宇宙发布会话负责平台侧更新。官网配置不会自动修改小宇宙页面。
