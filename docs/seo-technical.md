# 技术 SEO 约定

本文件维护跨页面的 SEO 契约与证据口径。URL 语法见 [URL 约定](url-conventions.md)，博客署名见 [Blog 契约](blog.md)，视觉与可访问性见 [设计规范](design-guidelines.md)，发布与性能记录见 [维护规范](site-maintenance.md)。页面数量、工具分数和待发布差异属于带日期的审计快照，不作为长期规范。

## Sitemap 更新时间

- `astro.config.mjs` 通过 `scripts/lib/sitemap-dates.mjs` 为已发布博客与 Wiki 正文路由提供 lastmod，值来自该语言正文的 `updatedAt`。
- `updatedAt` 表示正文实质更新日期。构建、文件复制、格式化和例行核查本身不构成内容更新；Wiki 的 `lastVerifiedAt` 表示资料核验，不替代正文日期。
- 中英文分别使用各自的正文更新日期；不因为一个语言发生修改而自动刷新另一个语言。博客原始发布日期 `publishedAt` 与更新日期保持独立。
- 没有可信更新时间的页面和聚合页省略 lastmod。新增页面类型的日期映射须有对应的内容来源，不能统一填构建日期。
- 日期映射只为 sitemap 已选中的 URL 补充属性，不产生新路由，也不使草稿进入生产 sitemap。

## 多格式与语言

HTML 是博客、文字稿及旧精读文章的搜索规范版本。Markdown 的响应头契约见 [URL 约定](url-conventions.md#markdown-canonical)。正常抓取与机器可读用途保留；规范版本声明不意味着删除 Markdown 或自动添加 noindex。

各语言的 canonical 指向自身，hreflang 只引用实际存在的对应语言页面，并有返回链接。中文是编辑内容依据，不意味着英文 HTML 的 canonical 应指向中文。页面正文与关键元信息应在初始 HTML 中可读。

## 审计证据口径

| 证据 | 能支持的结论 | 不能替代的验证 |
| --- | --- | --- |
| 当前源码及新鲜构建 | 本地路由、内容与产物行为 | 生产域名是否已提供相同版本 |
| 本地 Worker HTTP 响应 | 静态资源路由、响应头与 Worker 行为 | 生产 CDN、网络与真实用户性能 |
| 公开 URL 与 sitemap | 核查时刻的线上可用性和发现入口 | Google 实际收录及选择的 canonical |
| GSC、GA4 或 CrUX | 对应属性、时间窗口和数据口径下的实际指标 | 未获取的窗口、页面或人群表现 |

- 审计结论注明核查时间、代码／产物基线、目标环境与覆盖范围；全量 sitemap 抓取和少数页面抽样分开报告。
- 线上与本地版本不同，首先归类为发布差异。发布后重新读取 URL 与 sitemap；旧快照中的 404 不自动延续为现状。
- HTTP 200、合法 JSON-LD 和 Lighthouse SEO 分数分别是技术证据，不等于已收录、获得富媒体展示或排名提高。未读取最新后台数据时不沿用旧数字冒充当前结果。
- 工具的抓取超时、TLS／传输错误与完整收到的 HTTP 错误响应分别记录。独立请求和有限重试可帮助确认故障；robots.txt 超时不等于 robots 规则错误。
- 暂存报告与浏览器资源属于本次检查；只关闭本次创建的页面和进程。已有监听端口不作为本次构建的证据，也不因端口占用而停止其他服务。

## 性能归因

性能样本包含 URL、部署版本（若可确认）、视口、DPR、CPU／网络限速、冷启动或重复加载条件。实验室样本与 CrUX 实际用户数据分别报告；本地回归预算不能作为生产达标证明。

单次慢请求不足以证明图片体积、CSS 或缓存是根因。LCP 分解、资源瀑布与重复样本用于定位瓶颈；首次导航超时和之后快速重载应同时保留。不同版本或不同缓存、网络条件的结果不能直接宣称为代码优化收益。`max-age=0, must-revalidate` 本身不证明 CDN 没有缓存；长期浏览器缓存需要可靠的资源版本机制。

## 验证覆盖

- `npm run build` 后的 `npm run check:release` 检查现有产物，包含内部链接／锚点及 `check:seo`；后者验证 sitemap 日期与博客作者标记、可见署名链接和编辑说明目标。
- `npm run test:release` 包含日期映射、Worker Markdown canonical 与 HTTPS／重定向测试。实际 MIME、响应头与状态码仍使用 `npm run preview` 的 Worker 路由抽查，不能以通用静态文件服务器代替。
- 页面呈现改动遵守设计规范的样式及浏览器回归要求。内容编写另遵守各自编辑规范；技术检查不替代内容事实核验。
- 发布后的 HTTP 验收与后台效果观察独立于本地验证。具体发布命令、性能审计状态及授权边界沿用现有维护规范。

参考：[Google sitemap 更新时间](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)、[规范地址](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)、[Article 结构化数据](https://developers.google.com/search/docs/appearance/structured-data/article)。
