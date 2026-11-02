# 第 008 期品牌条目（B 批）Wiki 研究记录

## 范围与口径

本记录支持 6 个品牌条目的中英文 Wiki 正文：`blackstone`、`beijing-daily`、`xinhua`、`zhang-xiao-quan`、`geekerwan`、`vibe-friends`。研究日期为 2026-11-02。节目引用全部来自第 008 期中文逐字稿（`src/content/imported/transcripts/next-token-weekly--008.zh-Hans.json`，review-draft 未发布）。

**逐字稿链接红线**：第 008 期逐字稿未发布，本批 6 个条目的"节目中的讨论"小节一律使用纯文本提及（如"第八期的……章节中"），未创建任何指向 `/weekly/008/transcript` 的链接。检索第 001–007 期逐字稿，均未出现这 6 个品牌（含"阴明"关键词），因此没有可用的已发布期节目链接。

## 需求线索（搜索联想采样）

采样数据源：Google 公开搜索联想端点（`https://suggestqueries.google.com/complete/search?client=firefox`，hl 取 `zh-CN` 与 `en`），采样日期 2026-11-02。联想候选不是搜索量或热度排名；本批无 Search Console、关键词工具数据，所有搜索量、难度、CTR 均为 **N/A**。

| 种子词（hl） | 返回联想（节选，原样） |
| --- | --- |
| `blackstone`（en） | blackstone；blackstone stock；blackstone vs blackrock；blackstone grill；blackstone careers；blackstone minecraft；blackstone inc；blackstone fortress；blackstone company |
| `blackstone`（zh-CN） | blackstone 36吋铁板烤肉炉；blackstone 香烟；blackstone；blackstone e-bike；blackstone minecraft；blackstone bloomberg；blackstone careers |
| `blackstone vs blackrock`（en） | blackstone vs blackrock company；which is bigger；vs blackwater；difference；net worth；vs vanguard；aum |
| `黑石集团`（zh-CN） | 黑石集团破产；黑石集团股价；黑石集团；黑石集团台积电；黑石集团贝莱德；黑石集团是什么；黑石集团 台湾 |
| `北京日报`（zh-CN） | 北京日报；北京日报电子版；北京日报 樊振东；北京日报社；北京日报报业集团；北京日报客户端；北京日报出版社；北京日报 微博 |
| `新华社`（zh-CN） | 新华社；新华社台湾；新华社官网；新华社官媒；新华社报导；新华社社长；新华社英文；新华社香港分社 |
| `张小泉`（zh-CN） | 张小泉产品；张小泉刀好用吗；张小泉门市；张小泉剪刀好用吗；张小泉剪刀台北；张小泉剪刀评价；张小泉旅行剪 |
| `张小泉剪刀`（zh-CN） | 张小泉剪刀好用吗；张小泉剪刀台北；张小泉剪刀评价；张小泉剪刀 股票；张小泉剪刀股价；张小泉剪刀价格；张小泉剪刀官网 |
| `zhang xiao quan`（en） | zhang xiao quan；knife；wok；knife review；wok review；since 1628；wife；scissors review；nail clipper；cleaver |
| `极客湾`（zh-CN） | 极客湾；极客湾黑历史；极客湾条款；极客湾手机续航大横评；极客湾手机续航大横评 电池锁容 电量缩水 谁在浑水摸鱼；极客湾 手机评测；极客湾天梯图；极客湾的iphone 18pro |
| `geekerwan`（en） | geekerwan；geekerwan reddit；geekerwan website；geekerwan benchmark；geekerwan battery test；geekerwan youtube；geekerwan bilibili |
| `vibe friends`（en/zh） | vibe friends；vibe friendship quotes；vibe friends group name；vibe friends captions for instagram；vibe friends app（多数为俚语/社交语境歧义） |
| `vibe friends community`（en/zh） | （无联想） |

歧义说明：`blackstone` 在 zh 联想中大量指向 Blackstone 烤炉品牌、Minecraft 方块与香烟，与金融公司无关，已排除；`vibe friends` 联想几乎全部是英文俚语/社媒语境，该社群属长尾实体，FAQ 标为编辑补充；`zhang xiao quan`（en, zh-CN 采样）命中同名台湾演员张孝全，与刀剪品牌无关，已排除；`极客湾黑历史/作弊/下架`类联想无可靠来源支撑，未采用。

## 事实核验来源（2026-11-02 直读）

| 实体 | 已核验页面 | 关键结论 |
| --- | --- | --- |
| blackstone | [Wikipedia: Blackstone Inc.](https://en.wikipedia.org/wiki/Blackstone_Inc.)（REST summary + 正文 infobox） | 美国另类投资管理公司，总部纽约；1985 年由 Peter Peterson 与 Stephen Schwarzman 创立（二人曾同在 Lehman Brothers）；私募股权、房地产、信贷、基础设施、对冲基金、成长股权、保险等业务；NYSE: BX，标普 500 成分。官网 blackstone.com 多次直读超时（ECONNRESET），定位与业务以 Wikipedia + YAML 求证，官网仅作入口链接。 |
| beijing-daily | [京报网 bjd.com.cn](https://www.bjd.com.cn/)、[Wikipedia: 北京日报](https://zh.wikipedia.org/wiki/%E5%8C%97%E4%BA%AC%E6%97%A5%E6%8A%A5) | 1952 年 10 月 1 日创刊；中共北京市委机关报；北京日报报业集团主管；京报网显示集团旗下报刊：北京日报、北京晚报、北京城市副中心报、北京商报、北京青年报；新媒体含北京日报客户端、北晚在线（takefoto.cn）、长安街知事等融媒体栏目。 |
| xinhua | [Wikipedia: 新华通讯社](https://zh.wikipedia.org/wiki/%E6%96%B0%E5%8D%8E%E9%80%9A%E8%AE%AF%E7%A4%BE)（REST summary + 正文） | 中华人民共和国国家通讯社；前身红色中华通讯社 1931 年成立；正文明确"1937 年 1 月……红中社在延安更名为新华通讯社"；总部北京；提供实时文字新闻、经济信息、新闻图片图表等服务。 |
| zhang-xiao-quan | [张小泉官网 /culture/about](https://www.zhangxiaoquan.cn/culture/about)、[/culture/history](https://www.zhangxiaoquan.cn/culture/history)、首页（IR 链接 301055）、[Wikipedia: 张小泉剪刀](https://zh.wikipedia.org/wiki/%E5%BC%A0%E5%B0%8F%E6%B3%89%E5%89%AA%E5%88%80) | 官网："张小泉品牌始创于明崇祯元年（公元 1628 年）"；现代生活五金用品企业（刀剪、厨房五金、家具五金）；2006 年剪刀锻制技艺入选首批国家级非物质文化遗产；中华老字号；2021 年 A 股上市（"刀剪第一股"），代码 301055（深交所创业板）；品牌沿革含 1628 年改号、1915 巴拿马万国博览会、2014 杭州张小泉与上海张小泉合并等。 |
| geekerwan | [Wikipedia: 极客湾](https://zh.wikipedia.org/wiki/%E6%9E%81%E5%AE%A2%E6%B9%BE)（REST summary）、[YouTube 频道](https://www.youtube.com/channel/UCeUJO1H3TEXu2syfAAPjYKQ)（页面 title 与 meta description 直读） | 中国大陆专注科技数码领域的自媒体团队，创始人是褚云飞；频道名"极客湾Geekerwan"，官方频道描述"欢迎来到极客湾的官方频道，爱折腾、超硬核的科技数码频道！欢迎订阅。" |
| vibe-friends | [Vibe Friends 官网 vibefriends.com](https://www.vibefriends.com/) | 面向 solo AI 创作者的社群，运营主体"北京格调伙伴文化科技有限公司"（页脚 + 2026 版权 + 京 ICP 备案）；定位为帮助个人用 AI 把"Vibe"变成收入；活动：Vibe Thursday（每周四）、Vibe Friends Meetup（每月）、VibeHacks（每季度黑客松）、999 Club（重度 AI 用户核心社群）。页面上未署名个人组织者。 |

## 身份判定

| 实体 | YAML 名 | 判定 | 依据 |
| --- | --- | --- | --- |
| blackstone | 黑石 / Blackstone | 黑石集团（Blackstone Inc.，另类资产管理公司），与 YAML 一致 | 节目语境为 Anthropic 发债与债券评级，属资本市场话题，指向黑石集团；联想中另有烤炉品牌/Minecraft 方块等歧义，均与节目语境无关。 |
| beijing-daily | 北京日报 | 《北京日报》（中共北京市委机关报），与 YAML 一致 | 节目语境是传统媒体机构做 GEO，指报业机构整体。 |
| xinhua | 新华社 / Xinhua News Agency | 新华通讯社，与 YAML 一致 | 节目语境"新华社出了 GEO 的平台工具"指向通讯社机构。 |
| zhang-xiao-quan | 张小泉 / Zhang Xiao Quan | 杭州张小泉（张小泉股份有限公司运营的刀剪品牌），与 YAML 一致 | 节目语境为"老字号"信任的例子；官网 history 页含 1628 年改号与 2014 杭/沪合并沿革。 |
| geekerwan | 极客湾 / Geekerwan | 极客湾（Geekerwan 自媒体团队），与 YAML 一致 | 逐字稿明确出现"极客湾"三字（歸藏发言），YouTube 频道 title 相符；不存在与"先看评测"等其他评测频道的混用。 |
| vibe-friends | Vibe Friends | Vibe Friends 创作者社群（vibefriends.com），与 YAML 一致 | 逐字稿中杨攀将 Vibe Friends 与"阴明"并提，指社群及其黑客松；官网证实其为社群实体。 |

## 节目引用与段落出处（第 008 期逐字稿，纯文本提及）

| 实体 | 章节 | 发言人 | 摘录要点 |
| --- | --- | --- | --- |
| blackstone | chapter-02（Anthropic 上市话题：资本泡沫与 AI 价值） | 橘子、歸藏 | 橘子："他上市之后还要去卖他那个什么债。然后黑石给他们的那个债评的是垃圾债。"歸藏："就是后来就拒绝给出那个卖出评级。" |
| geekerwan | chapter-02 | 歸藏 | "极客湾每年都要做那种今年的这种手机的芯片的横评"，称骁龙 8 Gen6 综合/单核/多核/浮点"全部都大幅倒退，不如上一代"，很多新机用回去年芯片。 |
| vibe-friends | chapter-04（AI 短剧：个人与小团队的创作机会） | 杨攀、橘子 | 杨攀："你像阴明他们做那个 Vibe Friends，他们做的黑客松就是做游戏。"上文橘子称江浙黑客松 1,000 人里约 600 人做短剧。 |
| xinhua、beijing-daily | chapter-08（GEO：AI 从哪里获取信息，又相信谁？） | 向阳乔木 | "传统媒体也全部开始做这个事情。然后新华社出了 GEO 的平台工具，然后北京日报。然后各地方的报社全部都开始做 GEO。" |
| zhang-xiao-quan | chapter-10（能力越来越普及，信任为什么仍然重要？） | 向阳乔木 | "甚至我们老说经常相信些老字号，是吧？这个张小泉是吧？……一旦敢把自己名字，敢把自己头像印在这个商品上，你就觉得这个人可信的。" |

第 008 期逐字稿锚点（`#quote-*`/`#chapter-*`）均未写入正文，待该期逐字稿发布后如需挂锚点再按算法现算核对。

## 未核验与省略项

- **黑石对 Anthropic 债券的评级说法**：节目参与者转述，未在官方渠道或可靠报道中核对；且黑石是投资管理机构而非评级机构，该说法本身存疑（不排除为口误或转述失真）。正文只按"参与者转述、不代表黑石官方观点"处理，未写入任何事实段。
- **新华社、北京日报推出 GEO 平台工具**：2026-11-02 用 Bing 搜索"新华社 GEO 平台工具"未见可靠报道命中，未独立核验。正文按参与者观察处理，不写入事实段。
- **歸藏所述骁龙 8 Gen6 性能大幅倒退**：芯片性能评价，属参与者观点，正文注明归属，不作为极客湾或高通的官方结论。
- **Blackstone 官网（blackstone.com）**：直读多次超时（ECONNRESET），公司定位与业务构成以 Wikipedia 求证；官网仅作入口链接，未引用其页面原文。
- **极客湾 B 站频道、官网（geekerwan website）**：联想显示存在相关入口，但未逐一核验具体 URL，正文未列；官方入口只列已核验的 YouTube 频道。
- **Vibe Friends 与阴明的关系**：官网未署名组织者；阴明（`yin-ming.yaml`，bio 为"参与 Vibe Friends 社群与 AI 创作者活动的产品创作者"）与社群的关系仅以节目转述呈现，正文只写杨攀的原话并加人物内链，未断言阴明为创始人。
- **FAQ 口径**：`blackstone`（黑石是什么 / 与 BlackRock 区别 / 官网）、`beijing-daily`（报纸定义 / 电子版与客户端 / 报业集团）、`xinhua`（机构定义 / 历史 / 官网）、`zhang-xiao-quan`（品牌定义 / 上市 / 非遗 / 创立年份）、`geekerwan`（团队定义 / 频道入口 / 芯片横评）有联想需求支撑（见上表）；`vibe-friends` 三个 FAQ 为编辑补充（`vibe friends community` 无联想返回），答案依据官网直读内容。价格、股价、当下活动排期等时效信息未写入正文。
- **北京日报创刊日（1952-10-01）**：来自 Wikipedia 正文，官网未直接标注；属有日期的历史事实，已按既成事实表述。
