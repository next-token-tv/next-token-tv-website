# 第 007 期游戏类产品 Wiki FAQ 研究记录

## 范围与口径

本记录支持 `diablo`、`grand-theft-auto-vi`、`planet-zoo`、`pokemon-games`、`super-mario-odyssey`、`two-point-hospital`、`pokebonk` 的 Wiki 正文扩写。研究日期为 2026-10-25。数据源为 Google Autocomplete（`suggestqueries.google.com`，`client=firefox`，`hl=zh-CN`），采样词见下表；未使用 Search Console、关键词工具或搜索量数据，因此所有搜索量、难度、排名、点击和热度均为 **N/A**。联想候选是需求线索，不是热度排名；`pokebonk` 无任何联想返回，其 FAQ 标注为编辑补充。

## FAQ 候选与证据

| 页面 | 采样词 | 实际返回的候选（节选） | FAQ 采用 |
| --- | --- | --- | --- |
| diablo | `暗黑破坏神`、`暗黑破坏神4`、`diablo 4` | `暗黑破坏神4国服`、`暗黑破坏神4 免费`、`暗黑破坏神4官网`、`暗黑破坏神 不朽`、`暗黑破坏神5`、`diablo 4 price`、`diablo 4 new season` | 是 |
| grand-theft-auto-vi | `gta6`、`gta6发售日期`、`gta6 pc`、`gta6 平台`、`gta 6` | `gta6发售时间`、`gta6 什么 时候 出`、`gta6 价格`、`gta6 pc版什么时候出`、`gta6 首发 平台`、`gta 6 release date`、`gta 6 pre order` | 是 |
| planet-zoo | `动物园之星`、`planet zoo` | `动物园之星2`、`动物园之星 攻略`、`动物园之星ps5`、`动物园之星dlc`、`planet zoo 2`、`planet zoo steam` | 是 |
| pokemon-games | `宝可梦游戏`、`宝可梦 游戏 系列`、`pokemon games` | `宝可梦游戏顺序`、`宝可梦游戏系列`、`宝可梦游戏手机版下载`、`宝可梦游戏电脑版`、`pokemon games on switch`、`pokemon games online` | 是 |
| super-mario-odyssey | `超级马力欧奥德赛`、`马里奥奥德赛`、`super mario odyssey` | `马里奥奥德赛攻略`、`马里奥奥德赛双人`、`马里奥奥德赛价格`、`马里奥奥德赛 ns2`、`super mario odyssey switch 2`、`super mario odyssey map` | 是 |
| two-point-hospital | `双点医院`、`双点医院 类似游戏`、`two point hospital` | `双点医院攻略`、`双点医院好玩吗`、`双点医院手机版`、`two point hospital switch`、`two point hospital mac`、`two point hospital full health collection` | 是 |
| pokebonk | `pokebonk`、`pokebonk game`、`pokebonk 是什么` | （无返回） | 编辑补充（问题与答案取自官方站点可核验信息与第 007 期节目语境） |

## 事实核验（2026-10-25）

来源：Wikipedia 对应条目（REST summary / API extract / wikitext）与官方页面，均于研究当日以 `curl` 直接抓取正文核验。

- Diablo：动作角色扮演地牢爬行系列，原由 Blizzard North 开发（2005 年关闭后由 Blizzard Entertainment 延续）；首作《Diablo》1997 年 1 月 3 日发售；《Diablo II》2000 年 6 月；《Diablo III》2012 年 5 月 15 日；《Diablo Immortal》2022 年 6 月 2 日（与 NetEase 合作）；《Diablo IV》2023 年 6 月 5 日；资料片《Lord of Hatred》2026 年 4 月 28 日。核心循环为实时战斗、随机地图、职业成长与装备掉落（loot），舞台为暗黑奇幻世界 Sanctuary。来源：Wikipedia `Diablo (series)`（infobox 与导言）。
- Grand Theft Auto VI：Rockstar Games 开发发行，Grand Theft Auto 系列第八部主线作品（前作 2013 年《GTA V》）；2023 年 12 月正式公布，经历两次延期后定于 2026 年 11 月 19 日发售，登陆 PlayStation 5 与 Xbox Series X/S；舞台为以佛罗里达为原型的 Leonida 州与 Vice City，主角为 Jason Duval 与 Lucia Caminos。官方页 [rockstargames.com/VI](https://www.rockstargames.com/VI) 页面正文含 "November 19, 2026" 与 Jason/Lucia/Leonida 故事描述。PC 版未见任何官方公布。来源：Wikipedia `Grand Theft Auto VI`、官方页 meta description 与正文。
- Planet Zoo：Frontier Developments 开发发行的建造经营模拟游戏；Windows 版 2019 年 11 月 5 日发售，PS5 与 Xbox Series X/S 版 2024 年 3 月 26 日发售；为《Zoo Tycoon》系列的精神续作，强调动物行为还原与野生动物保护。续作《Planet Zoo 2》于 2026 年 5 月 28 日公布、2026 年 10 月 13 日发售。来源：Wikipedia `Planet Zoo`。
- Pokémon（游戏系列）：Game Freak 开发、Nintendo 与 The Pokémon Company 发行，由 Satoshi Tajiri 创制（Ken Sugimori 协助）；首作《Pocket Monsters 红/绿》1996 年于日本 Game Boy 发售；核心系列按世代推进，最新核心系列作品《Pokémon Legends: Z-A》2025 年 10 月 16 日发售（Switch 与 Switch 2）。The Pokémon Company 由 Nintendo、Creatures、Game Freak 于 1998 年合资设立。来源：Wikipedia `Pokémon (video game series)`。
- Super Mario Odyssey：Nintendo EPD 开发、Nintendo 发行，Switch 平台 3D 平台动作冒险，2017 年 10 月 27 日发售；马力欧与帽子伙伴 Cappy 同行，核心机制为 Cappy 的附身（capture）能力，探索各国度收集 Power Moon；含多人模式；2025 年任天堂公布为包括本作在内的一批 Switch 游戏提供免费更新以改善在 Switch 2 上的运行表现。来源：Wikipedia `Super Mario Odyssey`。
- Two Point Hospital：Two Point Studios 开发、SEGA 发行；PC（Linux/macOS/Windows）版 2018 年 8 月 30 日发售；Switch/PS4/Xbox One 版 2020 年 2 月 25 日；Amazon Luna 版 2020 年 11 月；为 Bullfrog 1997 年《Theme Hospital》的精神续作，原作开发者 Mark Webley、Gary Carr 参与制作；舞台为虚构的 Two Point County。后续同厂作品：《Two Point Campus》（2022）、《Two Point Museum》（2025 年 3 月）。含全部 DLC 的《Full Health Collection》（Switch 2/PS5/Xbox Series X/S）于 2026 年 9 月 16 日发售。来源：Wikipedia `Two Point Hospital`。
- PokéBonk：浏览器端游玩的非官方宝可梦同人游戏（类吸血鬼幸存者玩法），入口 [pokebonk.com](https://pokebonk.com/)；站点为多语言 Web 应用（页面含 es/en/pt/fr/ja/zh/zht/ko/ru 文案）。除官方站点与节目讨论外，未见可靠的第三方资料；用户量、赛季数据等不写入正文。

YAML `sources` 七条链接全部以 `curl` 验证 HTTP 200 且内容与条目相符，无需替换。

## 节目证据（第 007 期，中文逐字稿）

章节与段落锚点由 `src/data/transcript-paragraph-anchors.ts` 同算法脚本计算：

- chapter-06「AI 游戏破圈：移植、网页游戏与上瘾机制」：
  - 歸藏：PokéBonk 类吸血鬼幸存者玩法介绍，并将其类比为"更简单的暗黑破坏神"（该段同时含 diablo 与 pokebonk 实体链接）：`#quote-20beee0f3aed440036e9`。
  - 橘子：评价 PokéBonk 质量高、选小火龙打怪、抽卡升级机制、优化好；该段含 pokemon-games 实体链接：`#quote-77849fdf4947788df8f2`。
- chapter-08「主机游戏移植与平台的攻防」：
  - 橘子提到 GTA 6：`#quote-c75fbc90f235e764aced`；歸藏讲索尼为防破解一周连发 8 个 PS5 系统版本：`#quote-716294fe2202747decc4`；歸藏讲攻防与"最后一个版本昨天发出、8 小时后被破解"：`#quote-32e42831820b1b6d0fc6`。
  - 歸藏讲任天堂一方游戏（含马里奥奥德赛）被原生移植到 Mac、帧率对比：`#quote-1b3893e184d82013d0b3`。
- chapter-13「Vibe Coding 是生产力，还是最自由的游戏？」：歸藏把动物园之星、双点医院作为创造类游戏的例子：`#quote-42f092f56e0dbe9a01a0`。

节目发言属于参与者当时的体验、类比与判断；用户量估计、"昨天"等相对时间与破解事件细节按编辑规范处理，不写成产品事实。

## 未知项

- PokéBonk 的开发者身份、发布日期、版本历史无可靠公开资料，正文不写。
- GTA VI 的 PC 版、价格、预购状态无官方公布，正文与 FAQ 只写"未见官方渠道公布"类表述。
- Diablo 作品的中文官方译名以通行译名书写，资料片《Lord of Hatred》保留英文标题，未核到官方中文名。
