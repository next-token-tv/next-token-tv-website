# 新产品批次 A（7 实体）Wiki FAQ 研究记录

## 范围与口径

本记录支持 `jev`、`notion`、`1password`、`chatterfly`、`live2d`、`safari`、`taobao` 的 Wiki 正文。研究日期为 2026-09-21，面向中文和英文读者。

数据源：Google 公开搜索联想（`suggestqueries.google.com/complete/search?client=firefox`，`hl=zh-CN` 与 `hl=en`，2026-09-21 采样）与官方站点核验。本次没有 Search Console、关键词工具或受控地区的搜索量数据，所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选的出现不等于热门，顺序不构成排名，也不构成效果承诺。

7 个实体均为产品（`jev` 为 model-family，YAML `status: preview`；`chatterfly` 品牌为 tencent，`safari` 为 apple，`taobao` 为 alibaba）。所有逐字稿提及均出自本地 Weekly #003。

## FAQ 候选与证据

| 页面 | 实际采样的搜索问法或变体（来源：Google 联想，2026-09-21） | 意图 | FAQ 采用 | 可核验入口 |
| --- | --- | --- | --- | --- |
| jev | `jev`（联想全部指向 Jevons 悖论、jevil 等无关词）、`jev model`（印度语境无关词）、`jev typesafe`（空）、`jev api`（无关）、en `jev ai`（无关） | 无有效真实线索 | 全部为编辑补充，问题形态按裸短名 + 官方文档可答设计 | [官方发布博客](https://typesafe.ai/blog/introducing-system-one-models-and-jev)、[docs.typesafe.ai](https://docs.typesafe.ai/) |
| notion | `notion是什么/软件/公司/意思/产品`、`notion 下载`（windows/mac/安卓/电脑版）、`notion ai是什么/价格/免费额度/官网`、`notion mcp`、`notion login`、`notion pricing plan`、en `notion what is it used for`、`notion download mac/windows` | 定义、导航、AI 功能、计费 | 是 | [notion.com](https://www.notion.com/)、[价格页](https://www.notion.com/pricing)、[桌面下载页](https://www.notion.com/desktop) |
| 1password | `1password是什么`、`1password 下载`（mac/apk/安卓）、`1password 生成密码`、`1password cli`、`1password chrome extension`、`1password pricing plan`、`1password vs bitwarden`（系列）、en `1password what is a passkey/vault`、`1password for claude` | 定义、下载、计费、开发者工具、比较 | 大部分是；比较类未采用（见下） | [1password.com](https://1password.com/)、[个人价格页](https://1password.com/personal)、[1password.dev](https://developer.1password.com/) |
| chatterfly | `chatterfly`（联想混入同名 social skills/ABA 训练应用）、`chatterfly 腾讯`（空）、`chatterfly 下载`（空） | 无有效真实线索 | 全部为编辑补充；问题按官方站点描述可答设计 | [chatterfly.tencent.com](https://chatterfly.tencent.com/)（官方 meta 描述） |
| live2d | `live2d是什么`、`live2d cubism`（editor/价格/free/sdk/下载/viewer）、`live2d 下载`、`live2d 官网`、en `what is live2d used for`、`what is live2d cubism`、`live2d models` | 定义、下载、版本与价格、SDK | 大部分是；第三方查看器与模型站未采用（见下） | [live2d.com/en](https://www.live2d.com/en/)、[Cubism Editor 下载页](https://www.live2d.com/en/cubism/download/editor/) |
| safari | `safari浏览器`（windows 版/安卓/网页版/官网）、`safari 下载`（下载的文件在哪里/windows）、`safari浏览器开发者模式`、en `safari browser for windows/android/download` | 平台可用性、导航、下载 | 平台可用性与入口采用；文件位置、开发者模式未采用（未核验到官方说明） | [apple.com/safari](https://www.apple.com/safari/) |
| taobao | `淘宝官网`、`淘宝网页版`、`淘宝 下载`（电脑版/手机版）、`淘宝国际版/海外版/美国`、en `what is taobao`、`taobao english/usa/app/login` | 导航、下载、海外使用 | 大部分是；物流集运细节未采用（未核验） | [taobao.com](https://www.taobao.com/) |

未采用的候选与理由：

- `1password vs bitwarden` 及同类比较：需要逐项对比两家的套餐与功能，本次未核验双方当前资费，避免过时与不实比较；正文与 FAQ 不做评测式对比。
- `1password for claude`（en 联想）：反映 Agent 场景需求，已通过"节目中的讨论"（歸藏的 Agent 授权登录用法）与官方 Credential Broker 描述覆盖，不单列 FAQ。
- `live2dviewerex`、`live2d ripperstore`：第三方查看器与模型分发站，非 Live2D Inc. 产品，其中后者涉及盗版争议，不写入官方条目。
- `safari浏览器开发者模式`、`safari 下载的文件在哪里`：常见问题形态真实存在，但本次未核验到官方说明页，留待补充后再采用。
- `淘宝闪购`、`淘宝联盟`：阿里旗下独立产品/业务，超出本条目范围。
- `notion mcp`、`notion login`：MCP 集成属 Codex/Claude 等客户端侧功能，登录问题过于基础且官方帮助站本次未核验，均未采用。
- `taobao consolidated shipping`、`taobao 618`：物流与促销细节未核验，不写。

## 歧义记录

- `jev`：裸词联想全部指向 Jevons 悖论、人名或其他语言词汇；`jev model` 混入印度语境词组。正文 FAQ 中显式区分"本文指 TypeSafe AI 的模型"。
- `chatterfly`：联想混入同名的 social skills/ABA 训练类应用（`chatterfly social skills`、`chatterfly aba/bcba`）。正文 FAQ 只陈述"本文所指为腾讯的语音输入工具"，不对第三方同名产品下断言。
- `safari`：存在 Safari 图书馆系统等机构名，本次联想未混入，未做额外处理。

## 事实核验记录（2026-09-21）

- **jev**：[官方发布博客](https://typesafe.ai/blog/introducing-system-one-models-and-jev)确认 Jev 为 TypeSafe AI 首个 System One 模型，以早鸟访问（early access）开放、开发者经等候名单申请；公布的定价口径为输入 $0.042/MTok、输出免费；官方称支持最多 255 选项基数。[docs.typesafe.ai](https://docs.typesafe.ai/) 确认接口原语为 Choice/Score/Noul，返回结构化值、概率与置信度，提供 Python 与 JavaScript SDK。性能宣传（如 40x–200x 提速、"无幻觉"）只作为官方口径转述，不写成客观结论。YAML `status: preview` 与早鸟状态一致。
- **notion**：[notion.com](https://www.notion.com/) meta 确认官方定位 "The AI workspace that works for you"，产品线含 Notion AI、Agents、AI Meeting Notes、Enterprise Search、Docs、Projects、Notion Calendar、Connections。[价格页](https://www.notion.com/pricing)列出 Free/Plus/Business/Enterprise 四档（USD 按成员按月计价、年付有折扣；Free 与 Plus 页面标注 Notion AI 试用）。[桌面下载页](https://www.notion.com/desktop)列出 macOS（Universal/Apple Silicon/Intel）与 Windows（x64/ARM64）安装包。移动端 App 存在（页面含 App Store 元数据），本次未逐一核验 Android 渠道，正文只写"移动端应用可从官方下载页进入"。
- **1password**：[1password.com](https://1password.com/) 确认产品覆盖个人密码管理（passkeys、2FA、autofill、Watchtower、Secrets Management）与企业 Unified Access 平台（企业密码管理、Credential Broker、Privileged Access、SaaS Manager、Device Trust）；下载覆盖 macOS、Windows、iOS、Android、Linux、浏览器扩展与 CLI。[个人价格页](https://1password.com/personal)列出 Individual 与 Families 两个年付套餐及 14 天免费试用（页面标有促销价，正文不引用具体金额，指向价格页）。企业为报价制（/pricing FAQ："tailored to your organization's needs"）。
- **chatterfly**：官方站点为 JS 应用，HTML meta 确认"Chatterfly由腾讯推出，支持语音键盘双模式输入，能智能识别不同场景和语意，还能调用Skills深度润色，让随意说出的话变成恰到好处的表达"，标题口号"不必想好，开口就好"。支持平台、价格未在官方页列出，正文不作断言。
- **live2d**：[live2d.com/en](https://www.live2d.com/en/) 确认公司为 Live2D Inc.，产品 Cubism Editor 分 FREE/PRO 两版，PRO 试用 42 天后可继续作为 FREE 版；SDK 覆盖 Unity、Native、Web、Java、Unreal Engine、Cocos Creator；周边有 nizima（模型市场）、nizima LIVE、Live2D JUKU。"行业标准""500+ 商用作品"为官方宣传口径，正文以"官方称"处理。[下载页](https://www.live2d.com/en/cubism/download/editor/)存在（/en/download/ 301 至此）。
- **safari**：[apple.com/safari](https://www.apple.com/safari/) 确认 Safari 为 Apple 设备浏览器，页面覆盖 Mac、iPad、iPhone、Apple Watch，未提供 Windows/Android 版本；列出的功能含智能防跟踪、无痕浏览、隐私报告、通行密钥、iCloud 钥匙串、Apple Pay、标签页组、Profiles、网页 App、扩展；"全球最快浏览器"等为 Apple 宣传口径，不作为事实转写。
- **taobao**：[taobao.com](https://www.taobao.com/) 页面文案确认"淘宝网是阿里巴巴集团旗下的国际化网络购物平台"，列出的商品信息来源含天猫品牌旗舰店、淘宝直播间、达人评论区、淘宝百科；手机淘宝提供担保交易（先收货后付款）等保障，页面提及商品翻译等工具。GMV、用户数等规模数字官方页面未给出，正文不写。

## 节目证据（Weekly #003，中文逐字稿）

| 实体 | 章节 | 发言人 | 段落锚点 |
| --- | --- | --- | --- |
| jev | chapter-03「Jev：不聊天，做结构化判断」 | 歸藏 | `quote-222f069c8d5fd45540e5` |
| jev | chapter-03 | 橘子 | `quote-8fe6111b8fcd1ff74f0f` |
| jev | chapter-04「微信好友标签与高频判断」 | 杨攀 | `quote-e05f7e2da73cbdb6d1b6` |
| jev | chapter-06「“没有幻觉”不等于判断正确」 | 杨攀 | `quote-adb4399997c2d586f1e8` |
| jev | chapter-14「具身智能与零样本任务」 | 歸藏 / 橘子 | `quote-d9b9b36c2167a613f767` / `quote-085df5faa61ef0e0bfdf` |
| notion | chapter-18「Codex 多账号与工作空间」 | 歸藏 | `quote-35655c31266543e58538` |
| 1password | chapter-17「语音输入产品与实时反馈」 | 歸藏 | `quote-ce5caa2ce3bb262342a5` |
| safari / 1password | chapter-17 | 杨攀 | `quote-412f36d175e0184f9616` |
| chatterfly | chapter-17 | 歸藏 / 向阳乔木 / 杨攀 ×2 | `quote-24183c8fd06402faad2a` / `quote-197fe93e9efc53bd4a0f` / `quote-5c87d0e8760938933ef2` / `quote-c197016df45f87dd74c1` |
| live2d | chapter-06 | 橘子 | `quote-2fda6572c140936fe8dc` |
| taobao | chapter-16「用代码做宣传片和配乐」 | 橘子 | `quote-60e705d4d3e2a5890689` |

补充说明：

- chapter-11「SVG、图标与设计工作流」中歸藏另有一句提及 Jev 的调 prompt 方式（`quote-f7f7c7fd8a9819b2d6d6`），与该章主题关系弱，正文未引用。
- chapter-06 中向阳乔木（`quote-477aa45cdf38dca4a966`）、杨攀（`quote-d268b87d8d3cb51e7f5a`）、歸藏的具身与 Astra 相关发言在 chapter-14 摘要中覆盖，未逐段引用。
- 淘宝"屏蔽微信/屏蔽豆包手机"等说法为节目发言者的表述，正文已注明出处与归属，不作为已核验事实。

## 未知项

- chatterfly 的平台支持、下载渠道与计费：官方页未列出，留待官方补充后更新。
- notion 移动端各平台渠道、Notion AI 与套餐的对应关系细节：以官方实时页面为准，正文用指针而非断言。
- Jev 开源计划：节目提及"他们说会开源"（`quote-edb332f06f7b6997bc67`），未获官方文档证实，正文不写。
- Jev 官方材料中的完整局限清单：正文只保留节目明确转述的几项并标注归属，未逐项回查官方文档原文。

## 后续衡量

当前没有发布后的曝光和点击数据。若后续接入 Search Console，应按页面、语言、国家、设备和 28 天窗口记录曝光、点击、平均位置和可见查询样本；目标查询覆盖率与 CTR 只能基于实际数据计算，不能用候选词数量代替。
