# 人物 FAQ 与身份核验研究：hanqing、nan-qiao（2026-09-18）

本记录支持 `hanqing`、`nan-qiao` 两个仅被提及人物实体的 Wiki 正文（此前批次跳过的两个实体，本次按站点负责人补充的"汗青是 Yuri 的创作者"线索重开核验）。研究日期为 2026-09-18。本次没有 Search Console、关键词工具或任何搜索量、难度、排名数据，相关指标一律 **N/A**。

## 检索环境说明

本次可用检索通道受限，均如实记录：

- Google 公开联想接口（`suggestqueries.google.com/complete/search?client=firefox`，hl=zh-CN，curl 抓取）：可用。
- YouTube 站内搜索结果页与视频页（curl 带浏览器 UA 抓取 `ytInitialData` / `ytInitialPlayerResponse`）：可用，成为本次 hanqing 核验的主要来源。
- Bing（WebFetch 与 curl 均试）：返回与查询无关的缓存内容（第一次查询返回 Smallpdf 结果、中文查询返回韩语页面），判定为反爬污染，不可用。
- DuckDuckGo（lite 与 html 版）：CAPTCHA / 连接重置；Sogou：antispider 跳转；Brave：HTTP 429；Mojeek / lite.ddg：连接重置。
- GitHub Search API：可用（本次查询无相关结果）。

## hanqing：Yuri 线索核验过程与结论

**输入线索**：站点负责人明确提供"汗青是 Yuri 的创作者"；逐字稿 EP002 chapter-28 中向阳乔木提到"昨天我们都看汗青的音乐会了"，语境是感叹具身智能/物理世界 AI 发展慢。

**核验步骤**：

1. Google 联想 `汗青 yuri`、`yuri 汗青` 均返回联想候选 **"yuri 赵 汗青"**；`汗青 ai` 返回 **"汗青 ai talk""赵 汗青 ai talk""赵 汗青 ai""趙 汗青 ai"**——表明"Yuri、赵汗青、汗青、AI Talk"在真实搜索需求中互相关联，指明了"赵汗青"这一全名与 AI Talk 两个方向。
2. YouTube 站内搜索 `yuri 汗青` 返回多条直接命中的视频（标题、频道、发布时间与描述摘录均来自搜索结果 JSON）：
   - 《YURI〈为蓝.斩霄〉LIVE｜2026外滩大会 x YURI「超现实AI音乐会」｜首场AI歌手商业演唱会》——频道 **AI Talk**（视频 `4q-eUoeKvRk`，2026-09-15 上传）。
   - 《亚婷访谈AI偶像Yuri的构建者赵汗青》——频道 **易论AI**（`VVuIoDDKleg`，2026-04-11 发布），描述原文："赵汗青。AI.TALK 创始人，Yuri的构建者。作为AI原生歌手，Yuri的首支 MV《SURREAL》在一个月内突破1200万播放。随后她拿下全国首张虚拟偶像身份证，登上央视……也陆续与北面、蚂蚁金服、鸣潮、快看漫画、岚图汽车等品牌合作"。
   - 《AI 的创作能打动我们吗？Can AI Creativity Move Us? | 赵汗青 Zhao Han Qing | TEDxPetalingStreet》——频道 **TEDx Talks**（`1ollRs70uHo`，约 2026-02 发布）。
   - 《当AI能生成一切……赵汗青——作为AI歌手Yuri的创造者……》——频道 **新世相**（《创造者》系列，导演于困困）。
   - 《EP97｜当 AI 变成偶像……尤里创作者赵汗青谈艺术、互联网、工业质量与自媒体未来》——频道 **启发一刻 INs Moment**。
   - AI Talk 官方视频：《Hello, Surreal — AI singer Yuri officially debuts｜The North Face collaboration》（约 2025 年）、《我喜欢我 "I Like Me" — YURI x vivo Collaboration Single》、《Yuri 「NOT HUMAN」》等；官方账号视频标签中出现"汗青HQ"。
3. 视频页核验：
   - 音乐会视频 `4q-eUoeKvRk` 官方描述："「超现实AI音乐会」是2026外滩大会和YURI联合主办的首场AI歌手商业演唱会，于2026年9月在上海举办。AI影像由即梦AI独家技术支持，使用Seedance2.5……演唱会汇集房东的猫等多位真实艺人共创。"（发布时间 2026-09-15，与逐字稿"昨天我们都看汗青的音乐会了"的录制日期 2026-09-12 吻合：外滩大会期间、上海、同月。）
   - AI Talk 频道（`UCEC4_kBaGfVicaAEPuzfq-A`）about 页自述："I'm HQ, the founder of AI.TALK — a media brand dedicated to creating IP and interactive storytelling using AIGC. We're based in Japan…"。
4. 交叉印证：站点负责人线索（汗青=Yuri 创作者）+ 多个第三方频道（易论AI、新世相、TEDx、启发一刻）一致使用"赵汗青"作为 Yuri 构建者之名 + Google 联想把"yuri 赵 汗青"作为整体候选 + AI Talk 官方自述署名"HQ"——"汗青=Yuri 的创作者（公开场合多用全名赵汗青）"可以按公开来源写作，无需再以"据 Next Token 提供的资料"标注来源层级。

**结论**：核验成立。正文按百科口径写：汗青是 AI 内容品牌 AI.TALK 的创始人、AI 原生歌手 Yuri（尤栗）的构建者；公开演讲与访谈中以"赵汗青"出现。 Yuri 的音乐作品与品牌合作、《SURREAL》播放数据（转述《易论AI》介绍）、音乐会事实（转述官方现场视频说明）均按归属表述。

**未采信/未写**：AI.TALK 频道自述中"based in Japan"（与本文主题无关，不写）；"全国首张虚拟偶像身份证、登上央视、重庆反诈代言"等仅见于访谈介绍文字（第三方转述、细节无法逐一核验，不写入正文）；Yuri 出道/单曲精确日期（"1年前"等相对时间粒度不足，单曲发行日 2025-06-03 仅来自 YouTube Topic 自动生成元数据，不采用）；Yuri 中文名"尤栗"在正文以括注出现（官方视频标题《尤栗Yuri生成日》佐证，但未展开介绍）。

## nan-qiao：检索情况与结论

- Google 联想：`南乔 agi bar`、`大聪明 南乔`、`南乔 agibar`、`南乔 上海 ai` 全部空返回；`南乔` 的联想候选（南乔治亚岛、南乔股价、南乔霍厉霆等）全部为同名歧义（同前批记录附录）。
- Bing / DuckDuckGo / Sogou / Brave：环境不可用或返回无关内容（见检索环境说明）；YouTube 站内搜索 `AGI Bar 南乔` 无相关结果。
- 前批研究（`wiki-faq-people-community-2026-09-18.md`）已于同日检索过"AGI Bar 上海 南乔"等组合并空手而归；本次新增渠道亦无收获。

**结论**：无法核验南乔的公开身份。按任务口径写最小诚实条目：身份=在 EP002 录制接洽中被向阳乔木与"大聪明"（赛博禅心）并列致谢、邀请节目在上海 AGI Bar 录制的人；引用节目原话；正文明确"节目原文之外暂无可以公开核验的资料"，不补充任何推断。

## FAQ 选题与处理

- hanqing（3 个，均为编辑补充，可由上述来源直接回答）：汗青是谁 / Yuri 是谁 / 汗青参加过 Next Token 的节目吗。`汗青 yuri`、`赵 汗青 ai talk` 等联想候选佐证存在把这几个词一起搜索的需求；因无产品级联想数据，问题按身份与节目关系归纳。
- nan-qiao：**省略 FAQ**。无任何联想候选；唯一可回答的问题是"南乔是谁"，答案只能复述正文中的致谢，属循环内容，不设。
- 搜索量/难度：N/A（未使用任何数据服务）。

## 节目证据（引用与锚点均经读取原文核对）

| 实体 | 期数与章节 | 锚点 | 发言人 | 内容 |
| --- | --- | --- | --- | --- |
| hanqing | #002 chapter-28"从代码到实物：3D 打印带来的创作空间" | `quote-1d0d7282c49bdffcdc1e` | xiangyang-qiaomu | "昨天我们都看汗青的音乐会了，就会感慨说具身智能物理世界的 AI 发展还是有点慢的。"语境：3D 打印/物理世界 AI 讨论。 |
| nan-qiao | #002 chapter-02"上海开场：本周模型、Agent 与硬件" | `quote-beaa798a9959760c2231` | xiangyang-qiaomu | "首先感谢大聪明、南乔，邀请我们在上海的 AGI Bar，录节目。" |

两者均未参与录制，正文已写明。EP002 录制日期 2026-09-12、地点 agi-bar--shanghai-beiyang 取自 `src/content/imported/episodes/next-token-weekly--002.production.json`（站点自身制作数据，既成事实表述）。

## 省略与未知项

- hanqing：真名与"汗青"署名的对应关系由多方来源交叉印证，但无单一来源直接写明"汗青，本名赵汗青"，正文以"在公开演讲与媒体访谈中多以全名'赵汗青'出现"表述；出生、学历、国籍等无来源，不写；AI.TALK 公司主体、注册地、团队规模不写；访谈介绍中的"虚拟偶像身份证、央视、反诈代言"等细节不写；《SURREAL》精确发行日期不写。
- nan-qiao：身份、职务、机构全部未知，全部省略；不写"行业参与者"以外的任何定性（正文连这一表述也未使用，仅写"开场致谢中出现的人物"）。

## 交付文件

- `src/content/prose/people/hanqing.wiki.zh-Hans.md`、`hanqing.wiki.en.md`
- `src/content/prose/people/nan-qiao.wiki.zh-Hans.md`、`nan-qiao.wiki.en.md`
- 本记录。

## 追记（2026-09-18 第二轮）：nan-qiao 的"AGI Bar 负责人"线索核验

**输入线索**：站点负责人明确提供"南乔是 AGI Bar 的负责人"。首轮结论（上文 nan-qiao 一节）维持不变：公开来源无法核验南乔的公开身份；本轮针对新线索重开检索，目的为核验或排除该说法。

**核验步骤与结果**：

1. `https://agi.bar/`（官方单页站）：全文无团队/负责人信息，无"南乔"，仅宣传语中泛指"创始人"。
2. `https://nexttoken.tv/partners/agi-bar`（Next Token 场地伙伴页）：无接洽人、无"南乔"；页面出现"联合主理人"仅为站点导航项。
3. Google 联想：`南乔 agi bar`、`AGI Bar 负责人`、`AGI Bar 主理人`、`agi bar 南乔`、`南乔 agibar`、`AGI Bar 创始人` 全部空返回；`agi bar` 联想仅含地名类候选。
4. YouTube 站内搜索 `AGI Bar 南乔`：结果全部为 GPT-6/AGI 话题噪音；唯一 AGI Bar 视频（Nodupon，`JgkPku8hkq4`）基于 Reuters 报道，页面无"南乔"。
5. Baidu（返回 511 字节反爬页）、Yandex（空响应）、Bing/WebFetch（ECONNRESET）：不可用；Google News RSS 可用但文章 ID 为加密格式，batchexecute 解码返回空。
6. 搜狗微信搜索（`weixin.sogou.com/weixin?type=2`，curl 可用；结果页 `/link` 跳转有 antispider，无法取全文，仅摘要可用）：
   - `AGI Bar`/`宋德 AGI Bar`/`赛博禅心 宋德`/`AGI Bar 上海 主理人`：多篇独立公众号文章一致把 AGI Bar 的主理人/创始人写作**宋德**，包括：
     - 《海淀AI人群图鉴｜甲子光年》（甲子光年，亦见中关村杂志转载《特别报道 | 海淀AI人群图鉴》《媒体报道丨海淀AI人群图鉴》）："更为人熟知的身份是'赛博禅心'微信公众号的主理人。2025年初，宋德开始计划开一家酒吧，他起了一个名字——AGI Bar。"
     - 《〈中关村对话·AI迎春夜〉：此时春光正好，未来以此破题》（影视前哨）等迎春夜系列："AGI Bar主理人、知名科技自媒体人宋德"。
     - 《原点Party Nights：在海淀，看见AI的未来》："赛博禅心主理人宋德自我介绍三重身份……开了一间酒吧，就是中关村创业大街的AGI Bar。"
     - 《酒吧送token：AI算力如何变成了酒水》："老板是科技自媒体'赛博禅心'的主理人。"
   - `AGI Bar 南乔`、`南乔 主理人`、`AGI Bar 上海 负责人`、`AGI Bar 上海 开业`、`宋德 南乔`：均无"南乔"与 AGI Bar 关联的结果（多为同名歧义，如《南方有乔木》角色）。
7. 360 搜索（`www.so.com/s`，curl 可用）定位到《海淀AI人群图鉴｜甲子光年》腾讯新闻转载全文：`https://news.qq.com/rain/a/20260205A066B000`（2026-02-05）。全文核读（864KB 页面，正文可读）："宋德是一位工程师，但他更为人熟知的称号是'大聪明'，更为人熟知的身份是'赛博禅心'微信公众号的主理人。2025年年初，宋德开始计划开一家酒吧，他起了一个名字——AGI Bar。……2025年6月1日，AGI Bar 正式在中关村创业大街开业。"全文"南乔"出现 0 次，"宋德"22 次。
8. 活动行搜索 AGI Bar：0 结果。小红书搜索页需登录，结果不可读。
9. 小宇宙 EP002 官方页 `https://www.xiaoyuzhoufm.com/episode/6aa68040492687f6aad92b15`："制作与致谢"部分为"感谢上海 AGI Bar 提供录制场地，感谢赛博禅心与南乔邀请。"无身份/职务信息；"本期人物"仅列向阳乔木、歸藏、杨攀等参与者，无南乔。

**结论**："南乔是 AGI Bar 的负责人"无法以独立公开来源核验；且公开报道一致把 AGI Bar 的创办与主理归于宋德（更常见的称号是"大聪明"，即"赛博禅心"公众号主理人——这与本站 cyber-zen 条目的公开身份吻合，本轮未改动 cyber-zen 的任何文件）。按处理原则，正文把"负责人"写在"据 Next Token 提供的资料"来源层级，不写入 YAML `relations`；`lastVerifiedAt` 更新为 2026-09-18，理由是本轮对"EP002 致谢"这一唯一可核验事实新增了小宇宙官方页来源并复核了段落锚点（`quote-beaa798a9959760c2231`，经 `node /tmp/nt-quote-anchors.mjs` 复核不变）。

**证据边界**：宋德=AGI Bar 创始人/主理人有公开来源（腾讯新闻转载全文 + 多篇公众号摘要，后者因 antispider 未能取到可引用全文 URL，只在研究记录留档）；南乔与 AGI Bar 的关系只有站点负责人一句话，且与公开记载的"主理人=宋德"不能直接对应——若站点线索为真，更可能指某个门店/运营层面的负责人（如上海店），此为推测，不写入任何交付文件。

**FAQ 处理**：nan-qiao 新增 2 个 FAQ（南乔是谁 / AGI Bar 是什么），均为编辑补充："南乔是谁"的答案只能在致谢事实与"据 Next Token 提供的资料"层级内回答；检索需求证据仍为空（同首轮）。

**本轮改动文件**：`src/content/data/people/nan-qiao.yaml`、`src/content/prose/people/nan-qiao.wiki.zh-Hans.md`、`nan-qiao.wiki.en.md`、本记录（追记）。修正首轮正文中的链路笔误：赛博禅心人物链接由 `/wiki/brands/cyber-zen` 改为 `/wiki/people/cyber-zen`（en 同）。
