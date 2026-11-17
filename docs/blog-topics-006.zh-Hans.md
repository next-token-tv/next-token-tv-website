# 第六期博客选题

第六期关联十二篇中文主题文章：六篇已发布，六篇于 2026 年 10 月 26 日审核通过、尚未发布。新增文章关联 `next-token-weekly--006`，以 `approvedAt` 记录审核通过日期，保留 `draft` 状态和空缺的发布日期。写法与字段分别遵循[博客编辑规范](blog-editorial.zh-Hans.md)和[内容契约](blog.md)。

节目依据为已批准、已发布的中文文字稿，来源 revision 为 `be5e9046d1041e33f570997416806c665a908c43`，原文 SHA-256 为 `acf79b0ccd8d8e933e8e444b209ec64455b58321d77ad0dc15959ebfcc66c7db`。节目引用使用 `getParagraphAnchorIds` 生成的稳定段落锚点；新增外部资料查阅日期为 2026 年 10 月 26 日。

## 已发布主题

- [当 AI 普遍做到六十分，内容还凭什么被选择](../src/content/prose/blog/ai-content-quality-and-difference.md)
- [中国的个人 Agent，为什么聊着聊着就去服务商家了？](../src/content/prose/blog/consumer-agents-merchant-workflows.md)
- [人类在精简团队，Agent 却开始开会了](../src/content/prose/blog/multi-agent-meeting-overhead.md)
- [整理几百本书，是假提效，还是收纳的快乐？](../src/content/prose/blog/personal-agent-organizing-books.md)
- [作品开源以后，作者靠什么留下来？](../src/content/prose/blog/open-source-author-recognition.md)
- [模型越来越强，Skill 里还应该留下什么？](../src/content/prose/blog/what-remains-in-agent-skills.md)

## 已审核、尚未发布的主题

| 文章 | 节目切入点 | 延展问题 | 资料与验证边界 |
| --- | --- | --- | --- |
| [智能家居已经连上，为什么还是不好用](../src/content/prose/blog/smart-home-beyond-pairing.md) | 08 章投屏、音箱连接与家庭成员控制困扰 | 连接、功能、操作对象与故障恢复怎样衔接 | Home Assistant Matter 官方文档；不复述未经核实的新硬件价格、规模与兼容性判断，不将个案作为平台可靠性评测 |
| [学校通知改了，生活助理也要跟着改](../src/content/prose/blog/family-notices-that-change-plans.md) | 09 章 Dots 提醒学校体测取消 | 如何把改期、取消和重复通知关联到同一活动 | RFC 5545 的事件标识、版本与取消状态作为设计参照；不声称案例自动修改了日历，不以两次提醒体验作模型排名 |
| [Agent 交来的视频，应该怎样验收](../src/content/prose/blog/agent-video-delivery-checks.md) | 10 章包装缺失与音轨时间混乱；11 章分镜先审 | 文件检查、内容检查和交付版本如何对应 | ffprobe 与 FFmpeg 流选择文档；上下文衔接仅是排查方向，不认定为已查明原因；不修改节目媒体 |
| [给旧项目建一张能用的索引](../src/content/prose/blog/project-index-for-agent-reuse.md) | 24 章找回项目、复用组件与项目 Map | 从模糊用途找到入口、版本和可复用边界 | Git worktree 官方文档；约十分钟为录制时个案体验，不是复测结果；与既有记忆迁移文章区分，聚焦项目定位与复用 |
| [从识别一张图，到跟上手里的物体](../src/content/prose/blog/realtime-vision-beyond-a-box.md) | 23 章物体画框与随手持物体移动的重绘 Demo | 坐标、帧时间、过期结果和跟踪状态怎样影响交互 | Google 图像理解与 MDN 视频帧回调文档；接口示例不等同于节目实现；不核定帧率、延迟、模型优劣与隐私保证 |
| [给虚构角色配音，先确定他在对谁说话](../src/content/prose/blog/directing-synthetic-character-voices.md) | 25 章小说角色音色、性格与神父表演案例 | 如何区分声音身份、单句表演和整段作品验收 | W3C SSML 与 Google TTS 官方文档；不将当前接口倒写为录制时配置，不复述未经比较的最好模型结论或全音效能力 |

通知文章聚焦活动变更，与既有邮箱和群聊渠道讨论区分；剪辑文章聚焦交付验收，与播客全流程文章区分。各篇虚构情境、建议验证方法与节目实际经历分别说明，未声称执行硬件、音视频或模型性能实测。
