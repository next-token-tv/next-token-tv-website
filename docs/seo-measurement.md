# SEO 行为衡量

GA4 默认衡量 ID 为 `G-HFGVTS33FD`，仅生产构建且当前 hostname 等于 Astro 站点 hostname 时初始化。每页保留一次 `config` 调用，本地预览不发送事件。

| 事件 | 触发条件 | 参数 |
| --- | --- | --- |
| `platform_outbound` | 点击带有 `data-listen-platform` 的有效外部平台入口；支持主键与中键 | `platform`、`link_domain`、`page_path`、`language`，单集页附 `episode_number` |
| `copy_reference` | 章节或段落链接成功写入剪贴板后 | `reference_type`、`reference_id`、`page_path`、`language`、`episode_number` |

平台入口保留原始目标、打开方式与导航行为。没有链接的“尚未上线”平台不产生事件；复制失败只显示原有手动复制提示，不计成功。新事件参数不包含原文、搜索输入、剪贴板内容或目标 URL 查询参数。现有 GA4 页面浏览与增强型衡量的采集设置独立于这些参数。

GA4 已开启通用出站点击衡量。平台入口分析使用 `platform_outbound`，不要与标准 `click` 事件相加；点击不表示实际播放或订阅，成功复制也不表示已对外分享。这两类事件不自动标记为关键事件。

`tests/visual/analytics.spec.ts` 使用本地产物模拟生产域名，并拦截外部网络，验证事件参数、次数、复制失败及本地禁用行为。上线后仍须在 Realtime／DebugView 核验接收。需要在标准报告按参数分组时，再创建相应的事件级自定义维度；高基数的段落 ID 不作为默认自定义维度。

参考：[Google GA4 事件设置](https://developers.google.com/analytics/devguides/collection/ga4/events)。
