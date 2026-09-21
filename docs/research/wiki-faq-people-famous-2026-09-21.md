# 知名公众人物 Wiki FAQ 研究记录（sam-altman / elon-musk / donald-trump / jensen-huang / dario-amodei）

## 范围与口径

本记录支持 `sam-altman`、`elon-musk`、`donald-trump`、`jensen-huang`、`dario-amodei` 五个实体的 Wiki 正文。研究日期为 2026-09-21，面向中文和英文读者。数据源仅使用两类：

1. 百度搜索联想（`https://www.baidu.com/sugrec?prod=pc&wd=...`，采样当日实时返回）。
2. Google 搜索联想（`https://suggestqueries.google.com/complete/search?client=firefox&hl=en&q=...`，采样当日实时返回）。

事实核验另使用官方页面与 Wikipedia（见"事实核验记录"），与 FAQ 采样来源分开。本次没有 Search Console、关键词工具或搜索量数据，所有搜索量、难度、排名、点击、热度均为 **N/A**。联想候选是需求线索，不是热度排名；联想顺序不代表流行度。

## FAQ 候选与证据

| 页面 | 种子词（语言） | 实际返回的联想（节选） | 意图 | FAQ 采用 | 官方答案入口 |
| --- | --- | --- | --- | --- | --- |
| Sam Altman | `山姆·奥特曼`（zh） | 山姆·奥特曼百度百科 / OpenAI山姆·奥特曼 / 山姆·奥特曼的人工智能 / 为什么叫奥特曼 | 定义、身份 | 是：现任职务（并入） | [Wikipedia: Sam Altman](https://en.wikipedia.org/wiki/Sam_Altman)、[OpenAI 公告](https://openai.com/index/review-completed-altman-brockman-to-continue-to-lead-openai/) |
| Sam Altman | `奥尔特曼 openai`（zh） | 奥尔特曼在openai是什么职位 / 奥尔特曼OpenAI是什么公司 | 现任职务 | 是：现任职务 | [OpenAI 公告](https://openai.com/index/review-completed-altman-brockman-to-continue-to-lead-openai/) |
| Sam Altman | `sam altman openai ceo`（en） | sam altman openai ceo / sam altman open ai founder / chief executive officer openai | 现任职务、创始人归属 | 是：现任职务、是否创始人 | [OpenAI 公告](https://openai.com/index/review-completed-altman-brockman-to-continue-to-lead-openai/)、Wikipedia |
| Sam Altman | `山姆·奥特曼百度百科`（zh，编辑归纳） | （见上行） | 早年经历 | 是：之前做过什么（编辑补充，Loopt/YC 依据 Wikipedia） | Wikipedia |
| Sam Altman | 编辑补充 | — | 任内节点、2023 董事会事件 | 是：ChatGPT 是否任内发布、2023 董事会事件 | OpenAI 公告、Wikipedia |
| Elon Musk | `马斯克个人简介` / `elon musk companies list`（zh/en） | 马斯克个人简介 / elon musk companies list / companies stock | 执掌公司 | 是：现在执掌哪些公司 | [Wikipedia: Elon Musk](https://en.wikipedia.org/wiki/Elon_Musk) |
| Elon Musk | `埃隆·马斯克是哪国人`（zh） | 埃隆·马斯克是哪国人 / 埃隆·马斯克多少岁 | 国籍 | 是：国籍（年龄未采用） | Wikipedia |
| Elon Musk | `马斯克 特斯拉股份`（zh） | 马斯克 特斯拉股份 / 特斯拉 薪酬 / 股票占比 | 与 Tesla 关系 | 是：是否 Tesla 创始人（编辑补充归属事实） | Wikipedia |
| Elon Musk | `马斯克xAI公司最新进展`（zh） | 马斯克xAI公司最新进展 / 马斯克x平台是什么 | xAI/X 关系 | 是：与 xAI 的关系 | [x.ai](https://x.ai/)、Wikipedia、[SpaceXAI 品牌页](/wiki/brands/xai) |
| Elon Musk | 编辑补充 | — | 政府职务 | 是：DOGE / 总统高级顾问 | Wikipedia |
| Donald Trump | `特朗普`（zh） | 特朗普任期是哪一年到哪一年 / 特朗普是什么党派 / 特朗普个人资料 | 任期、党派、背景 | 是：任期、党派、总统前的职业 | [Wikipedia: Donald Trump](https://en.wikipedia.org/wiki/Donald_Trump) |
| Donald Trump | `donald trump presidency years`（en） | presidency years / term / dates | 任期 | 是（与中文任期 FAQ 合并） | Wikipedia |
| Donald Trump | 编辑补充 | — | 两任不连续 | 是：为什么能两次担任总统 | Wikipedia |
| Jensen Huang | `黄仁勋是谁` / `jensen huang nvidia ceo`（zh/en） | 黄仁勋是谁 / jensen huang nvidia founder / nvidia owner | 身份 | 是：现任职务 | [NVIDIA 官方 bio](https://nvidianews.nvidia.com/bios/jensen-huang) |
| Jensen Huang | `黄仁勋英文名`（zh） | 黄仁勋英文名 / 英伟达英文名 | 姓名拼法 | 是：英文名 | NVIDIA 官方 bio |
| Jensen Huang | `jensen huang education` / `黄仁勋的个人简介`（en/zh） | jensen huang education / 黄仁勋的个人简介 | 学历 | 是：学历 | NVIDIA 官方 bio |
| Jensen Huang | `黄仁勋英伟达`（zh） | 黄仁勋英伟达股份 / 黄仁勋英伟达是做什么的 / 英伟达 | 公司归属 | 是：英伟达是谁创立的（co-founders 依据 Wikipedia Nvidia 条目） | NVIDIA 官方 bio、[Wikipedia: Nvidia](https://en.wikipedia.org/wiki/Nvidia) |
| Jensen Huang | 编辑补充 | — | 社会职务与荣誉 | 是：NAE 院士、2026 年 PCAST、行业奖项 | NVIDIA 官方 bio |
| Dario Amodei | `达里奥阿莫代伊简介` / `dario amodei anthropic ceo`（zh/en） | 达里奥阿莫代伊简介 / dario amodei anthropic ceo | 身份 | 是：现任职务 | [Anthropic 领导页](https://www.anthropic.com/company/leadership) |
| Dario Amodei | `达里奥阿莫代伊的公司中文叫什么`（zh） | 达里奥阿莫代伊的公司中文叫什么 / 达里奥阿莫代伊是哪国人 | 公司归属 | 是：Anthropic 成立时间与创立者 | Anthropic 领导页、[Wikipedia: Dario Amodei](https://en.wikipedia.org/wiki/Dario_Amodei) |
| Dario Amodei | `dario amodei essay` / `dario amodei machines of loving grace`（en） | dario amodei essay / machines of loving grace book / audio | 代表作品 | 是：代表文章 | Wikipedia（条目记载两篇文（章标题与月份） |
| Dario Amodei | `达里奥·阿莫代伊 美国物理奥林匹克竞赛队成员` / `jensen huang education` 对位（zh） | 达里奥·阿莫代伊 美国物理奥林匹克竞赛队成员 / dario amodei年龄 | 学术背景 | 是：学术背景（年龄未采用） | Wikipedia |
| Dario Amodei | `dario amodei什么时候在百度任职`（zh） | dario amodei什么时候在百度任职 | 职业履历 | 是：在 OpenAI 做过什么（含百度/Google 履历） | Wikipedia |

未采用的联想与原因：

- 私人生活与身体特征类：`山姆·奥特曼是犹太人吗 / 家族 / 身高 / 祖籍`、`奥尔特曼的孩子怎么生的`、`sam altman husband / wife / net worth / age / car`、`elon musk kids / wife / daughter / net worth`、`马斯克有多少孩子 / 有多少钱 / 是什么星座`、`黄仁勋多高 / 黄仁勋英伟达股份 / 持股比例`、`dario amodei wife / net worth / religion / ethnicity / partner / children`、`特朗普多大年龄 / 生日 / 摔倒视频` 等与页面定位无关，未采用。
- 同名歧义：`奥特曼格斗进化 / 奥特曼系列ol` 等为特摄 IP"奥特曼"游戏，与 Sam Altman 无关，采样已加 OpenAI/奥尔特曼修饰；`马斯克` 单独检索混入大量泛话题，采样加 xAI/Tesla/个人简介修饰。
- 无法核验或超出页面定位：`黄仁勋反对放缓ai发展节奏`、`黄仁勋称ai末日论是胡说八道`（未能核验原始表态的出处与原文，未写成事实）；`特朗普关税*` 系列（政策细节时间线未逐条核验，本页不承担政策追踪）；`elon musk spacex stock / ipo`（投资类，未核验且超出定位）；`马斯克spacex股票` 同理。
- 其余候选（`sam altman movie / x / twitter`、`donald trump jr / hair / truth social`、`dario amodei direct reports / linkedin` 等）指向非定位内容，未采用。

## 同名与歧义处理

- `奥特曼` 在中文语境高度歧义（特摄 IP 占据大部分联想），采样一律加"OpenAI / 奥尔特曼 / sam altman"修饰；中文正文标题使用 YAML 既有别名"萨姆·奥尔特曼"，不采用"奥特曼"。
- `马斯克`、`特朗普` 单独检索返回大量泛时事联想，仅保留与身份、履历、执掌公司相关的候选。
- `dario amodei` 的中文译名在联想中出现"达里奥·阿莫代伊 / 达里奥阿莫代伊 / 达里奥 阿莫迪"等多种写法，正文沿用 YAML 既有别名"达里奥·阿莫代伊"。

## 事实核验记录（2026-09-21）

抓取方式：WebFetch 与 `curl`（含 Wikipedia REST summary 与 `action=query&prop=extracts` 全文提取）。Wikipedia 条目修订版本时间为抓取当日（2026-09-21）。

- **sam-altman**：[OpenAI 官方公告](https://openai.com/index/review-completed-altman-brockman-to-continue-to-lead-openai/)确认其 CEO 身份、2024-03-08 审查结论（"conduct did not mandate removal"，将 as CEO 重返董事会）；[Wikipedia 条目](https://en.wikipedia.org/wiki/Sam_Altman)确认 2005 年联合创立 Loopt（2012-03 被 Green Dot 以 43.4 亿美元级收购，正文未写金额）、2011 年加入 YC、2014-02 起任总裁至 2019、2015 年联合创立 OpenAI、2019 年起任 CEO、2022-11 ChatGPT 发布、2023-11-17 被解除职务五天后复职并重组董事会、斯坦福就读两年后辍学。Loopt 2012-03 被 Green Dot 以约 4340 万美元收购（金额未写入正文）。出生日期（1985）为公开事实但管理层页未列，正文未写。`openai.com/about/leadership` 返回 404，未采用。
- **elon-musk**：[Wikipedia 条目](https://en.wikipedia.org/wiki/Elon_Musk)（intro + 全文提取）确认：Tesla 与 SpaceX 的 CEO 及最大个人股东；Zip2（1995 创立、1999-02 被 Compaq 收购）、X.com（1999）→ PayPal（2002 被 eBay 收购）；2002-05 创立 SpaceX 并任 CEO 与首席工程师；Tesla 由 Martin Eberhard 与 Marc Tarpenning 于 2003-07 创立、2004-02 Musk 领投 A 轮并任董事长、2008 起任 CEO；2015 年联合创立 OpenAI、2018 年离开董事会；2022 年收购 Twitter 更名 X；2023-07 创立 xAI，**2026 年 xAI 成为 SpaceX 子公司**（与 `brands/xai.yaml`"SpaceX 旗下、前身为 xAI"一致）；2025-01 政府效率部由行政令设立、Musk 任总统高级顾问并实际领导 DOGE、2025-05 离开政府。净值、子女、纠纷等未写入。Tesla 官方页 `tesla.com/elon-musk` 返回 403（Akamai 拒绝），无法直接核验，正文来源仅用 Wikipedia 与 x.ai。
- **donald-trump**：[Wikipedia summary 与条目](https://en.wikipedia.org/wiki/Donald_Trump)确认：第 47 任总统、2025-01-20 就任第二任期；第 45 任（2017–2021）；继克利夫兰后第二位两任不连续的总统；1968 年宾夕法尼亚大学经济学学士；1968 年起在父亲公司工作、1971 年赴曼哈顿执掌家族业务并更名特朗普组织。`whitehouse.gov/administration/donald-j-trump/` 多次连接被重置（ECONNRESET），仅作为官方入口列入来源，未据其核验事实。
- **jensen-huang**：[NVIDIA 官方 bio](https://nvidianews.nvidia.com/bios/jensen-huang)（由 `nvidia.com/en-us/about-nvidia/governance/management-team/jensen-huang/` 301 跳转）确认：Founder & CEO、1993 年创立并自创立起任总裁/CEO/董事、BSEE（Oregon State）、MSEE（Stanford）、曾任职 LSI Logic 与 AMD、美国国家工程院院士、**2026 年获任命加入 PCAST**、SIA Robert N. Noyce Award、IEEE Founder's Medal、Dr. Morris Chang Exemplary Leadership Award 及多所大学荣誉博士。[Wikipedia Nvidia 条目](https://en.wikipedia.org/wiki/Nvidia)确认 1993-04-05 由 Jensen Huang、Chris Malachowsky、Curtis Priem 共同创立及 Huang 在 LSI/AMD 的具体职务。出生日期未写。
- **dario-amodei**：[Anthropic 官方领导页](https://www.anthropic.com/company/leadership)确认 "Co-Founder and Chief Executive Officer" 及 Daniela Amodei 为 Co-Founder and President。[Wikipedia 条目](https://en.wikipedia.org/wiki/Dario_Amodei)确认：2014-11 至 2015-10 在百度、随后 Google、2016 年加入 OpenAI、离职前为研究副总裁；2021 年与 Daniela 及其他前 OpenAI 成员创立 Anthropic；斯坦福物理学士、普林斯顿生物物理博士、2007 Hertz Fellowship、2000 年美国物理奥林匹克代表队；《Machines of Loving Grace》（2024-10）、《The Adolescence of Technology》（2026-01）；**2026-09 公开呼吁科技行业放缓 AI 发展速度，并表示将允许独立评估者永久访问其模型核查安全承诺**。Anthropic 估值与个人净值未写入。

## 节目证据（本地逐字稿，中文）

三期逐字稿（Weekly #001–#003）中仅 #003 出现五人的 entity-link 标记，全部集中在 chapter-12（"用 GPT-6 Astra 造数据、训练小模型"），jensen-huang 另有一处 chapter-16（"用代码做宣传片和配乐"）。发言人均为主理人（歸藏、橘子 Orange、杨攀），五人均非节目参与者。锚点由 `/tmp/nt-quote-anchors.mjs` 于 2026-09-21 对本地 JSON 生成，均无重复段落后缀。

| 实体 | 期数/章节 | 发言人 | 段落锚点 | 内容（节选） |
| --- | --- | --- | --- | --- |
| sam-altman / elon-musk / dario-amodei | #003 chapter-12 | guizang | `quote-fbfa1bd7482a09489c1e` | "上周那三个就是 Sam、Dario 和马斯克在聊这个减速，就一直这还显像达成共识了。" |
| donald-trump | #003 chapter-12 | guizang | `quote-df591ae12841e717e097` | "对，结果晚上特朗普发了条推川子发了条推，" |
| sam-altman | #003 chapter-12 | guizang | `quote-5b35e6205bfafaa25be5` | "第二天 Sam 赶紧解释，我们不是这个意思。" |
| elon-musk | #003 chapter-12 | orange | `quote-ba4922e1a40a6b1441cf` | "不是，马斯克很虚伪，"（后续段落补"一边说我们 agree 一边说我们 4.8 要完爆"） |
| jensen-huang | #003 chapter-12 | guizang | `quote-beb2c5083e938a67f78e` | "结果这周一，这周一在 All-In 什么会上？穿的给黄仁勋打电话。快给我放。" |
| jensen-huang | #003 chapter-12 | orange | `quote-b5075f50a08ebe5a8ee1` | "老黄。搞双簧火爆全网小后那篇都已经过千了，曝光了。" |
| jensen-huang | #003 chapter-16 | yangpan | `quote-77dc4758c25d3791e15d` | "……英伟达这个壁垒守不了多长时间了。黄仁勋清醒，也很清楚这事情。" |
| jensen-huang | #003 chapter-16 | guizang | `quote-6e6cea646d2d717a1cf4` | "所以他才不让那三巨头继续压制其他开源模型的发展，因为他们能搞，其他家搞不了，差距越来越大。……" |

注：章节文本中 orange 的"一边说我们 agree 一边说我们 4.8 要完爆"段落本身无 entity-link 标记，正文仅概述不单独链接。"All-In 会上打电话"情节节目未展开，正文按转述归属处理，不作事实认定。guizang 关于"不让三巨头压制开源模型"的说法为主理人推测，正文已标注。

## 未知项与边界

- 五人正文均未写出生日期、净值、家庭等隐私性事实；sam-altman 的 Loopt 收购金额、Trump 的商业争议与诉讼、Musk 的诉讼与争议细节均未写入（与本页定位无关）。
- `whitehouse.gov`（连接重置）与 `tesla.com`（403）当日无法抓取，未据其核验事实；来源部分仅作为官方入口保留 whitehouse.gov 链接，Musk 页未引用 Tesla 官方页。
- 黄仁勋"反对放缓 AI 发展节奏"的联想有真实需求线索，但原始表态出处与原文当日未能核验，未采用、未写入正文。
- dario-amodei 的"2026-09 呼吁放缓"仅依据 Wikipedia 条目记载（未找到一手新闻稿/博客原文链接）；该表述与节目转述方向一致，正文已分别标注来源与归属。
- 所有搜索量、热度、难度为 N/A；联想候选不代表这些问题的真实搜索占比。
