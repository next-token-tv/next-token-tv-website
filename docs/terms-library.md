# 术语库

术语与品牌、产品、人物并列。术语解释概念、方法、技术用语和通用缩写；公司、组织、具体软件、模型家族与硬件仍归入原有实体库。同一概念的中文名、英文名和缩写使用一个稳定 ID，通过别名关联，不重复建条目。存在歧义时在定义中明确范围。

## 数据与页面

- `src/content/data/terms/<id>.yaml`：双语名称、摘要、别名、发布状态、来源与核验日期。
- `src/content/prose/terms/<id>.zh-Hans.md` 和 `<id>.en.md`：双语正文。Frontmatter 为 `term`、`locale`、`updatedAt`，日期必须加引号。
- `/wiki/terms`、`/en/wiki/terms`：术语目录。
- `/wiki/terms/<id>`、`/en/wiki/terms/<id>`：已发布术语详情。
- `/api/v1/wiki/terms.json`、`/api/v1/wiki/terms/<id>.json`：公开数据接口。

仅 `status: published` 的条目进入目录、详情路由、搜索、网站地图和 API。发布要求双语摘要、非空双语正文、来源与核验日期。重复的同语言正文、引用不存在的术语或缺失正文会使构建失败。草稿不生成公开详情页。

当前有 178 个已发布术语，均有双语摘要和正文。名单来自 SRT 校审词表，经同义写法合并和范围筛选。具体名单、原始写法映射和暂不收录项见 [术语初始化名单](terms-seed-list.md)。可复制 `token` 的文件作为新条目模板。ID 使用小写 ASCII 与连字符。正式名称不重复填入别名；别名只收录确实指向同一概念的名称。

补充条目包括 CV、VPN、DPI、Webhook、Callback、HDMI、KYC、A-Roll / B-Roll、IPO、EDC、Galgame、Aha Moment、RSI 和 One Shot。A-Roll 与 B-Roll 合为一篇，CUA 作为 Computer Use 的别名。One Shot 按节目中的“一次完成”解释。AGENTS.md、CLAUDE.md、LLM.txt 不收录；llms.txt 按有独立公开提案的文件约定收录，与 LLM.txt 区分；Human Native、Routine、Auto Mode、Knowledge Map 不作为本批通用术语收录。

有通用英文缩写的术语，中英文名称同时展示全名与缩写，例如 `大语言模型（LLM）`、`Large Language Model (LLM)`。已经以缩写命名的条目（如 JSON、RSS）不重复添加；没有通用缩写的不造缩写。纯全名和缩写均保留在别名中，支持原有搜索；稳定 ID 和 URL 不变。

## 元数据模板

```yaml
name:
  zh-Hans: 词元
  en: Token
summary:
  zh-Hans: ""
  en: ""
aliases: []
status: draft
sources: []
# 完成来源核验后添加真实日期：lastVerifiedAt: "YYYY-MM-DD"
```

来源结构为 `label: {zh-Hans: 中文标题, en: English title}` 与 `href: https://...`。摘要用一两句话说明概念含义及适用范围；不将示例产品的宣传语当作定义。

## 正文结构

正文不写 H1，页面自动输出名称。按概念需要使用以下 H2，删除不适用的段落，不保留空标题或占位说明：

1. 定义 / Definition：概念是什么、适用范围是什么。
2. 工作方式 / How it works：必要的原理与具体例子。
3. 使用场景 / Usage：在哪些场景下会遇到。
4. 易混概念 / Related concepts：相近术语的差别；有已发布条目时链接到对应语言的详情页。

参考资料由元数据 `sources` 自动展示，不重复写参考资料章节。正文中的具体事实也可就近链接原始来源。来源优先官方文档、论文或标准；不确定的定义保持草稿。更新时间与核验日期分别反映正文更新和事实核验。

术语详情沿用资料库外层布局与阅读字号。当前不设置术语子分类，也不自动修改 SRT 校审词库。逐字稿通过分期规则 `termReferences` 选择已核验语境的术语与具体写法，由导入或重链脚本生成快照；仅可引用已发布术语，正文、署名和时间码保持不变。

节目主页的“本期提及”包含术语列表，从可见逐字稿快照中的术语链接按首次出现顺序去重生成，不另维护手写名单。列表使用当前页面语言的术语名称与详情链接；没有该语言逐字稿时使用中文逐字稿确定引用集合。生产页面只读取已发布逐字稿，开发预览可读取本地审阅快照。没有术语引用时不显示空分组。

## 校验

运行 `npm run check`、`npm run build:assets` 和 `npm run check:release`；界面回归覆盖 `tests/visual/terms.spec.ts`、`wiki-home.spec.ts`、`library-switch.spec.ts` 和 `wiki-api.spec.ts`。发布前确认草稿没有进入搜索、详情与 API，双语页面及来源链接正常。
