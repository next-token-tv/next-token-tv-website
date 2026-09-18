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
