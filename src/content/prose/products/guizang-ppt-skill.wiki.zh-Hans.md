---
entityType: product
entity: guizang-ppt-skill
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-02'
seoTitle: '歸藏 PPT Skill：给 AI Agent 用的 HTML 演示文稿技能｜Next Token Wiki'
seoDescription: '了解歸藏 PPT Skill 的用途、安装方式、视觉体系，以及第八期节目中关于它与信任的讨论。'
---

## 歸藏 PPT Skill 是什么

歸藏 PPT Skill 是 [歸藏](/wiki/people/guizang)（Guizang，GitHub 账号 op7418）开发的开源 Skill，面向 [Claude Code](/wiki/products/claude-code)、[Codex](/wiki/products/codex) 等可以执行命令的 AI Agent 环境，让 Agent 生成网页形式的演示文稿：单文件 HTML、横向翻页，并可配套生成演讲配图与社交媒体封面图。项目以 AGPL-3.0 许可证发布在 [GitHub 仓库 op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill)。

## 用途与工作方式

按照仓库 README 的说明，这个 Skill 把演示文稿的版式、配色与图片规则写成 Agent 可执行的约束：

- 两套视觉体系：A 风格是杂志编辑与电子墨水结合的叙事风格，含 10 种版式；B 风格是瑞士国际主义风格，锁定 22 种版式、16 栏网格，只用预设主题色。
- 演示者模式：双窗口放映、演讲者备注、计时排练、激光笔与冻结/黑屏工具，全部在本地运行。
- 配图与封面：可通过 Codex 的图像生成能力按模板槽位尺寸生成配图，也支持生成微信头图、分享卡片等社交媒体封面。
- 校验脚本：内置 Node 脚本检查瑞士风格版式规则、演讲者备注与运行时同步。

README 给出的设计理由是：HTML/CSS 是 Agent 可以直接读取、修改和校验的文本，约束越明确，Agent 生成的质量越稳定。

## 使用与区别

安装是给 Agent 加"技能包"而不是装一个应用：按 README 的方式运行 `npx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill`，或直接把安装说明交给有 shell 权限的 Agent，仓库会被克隆到 `~/.claude/skills/guizang-ppt-skill`，之后用"帮我做一份瑞士风 PPT"这类话即可触发。与网页版 AI 生成 PPT 工具的区别在于：它运行在用户自己的 Agent 环境里，产物是可继续编辑的 HTML 文件，不依赖云端编辑器。

## 节目中的讨论

第八期（2026 年 11 月 1 日录制）["能力越来越普及，信任为什么仍然重要？"](/weekly/008/transcript#chapter-10)章节中，杨攀[举了这个项目作为例子：全球有几千几万个 PPT Skill，为什么大家用歸藏 PPT](/weekly/008/transcript#quote-318147c5e3acb64b4b51)——以此说明当能力本身普及之后，个人品牌与信任成为选择的依据；向阳乔木以["信任"](/weekly/008/transcript#quote-aab85ce2ebe7aa538dbf)回应了这一例子。这是参与者用来讨论信任话题的观点，不是对项目本身质量的评价。

## 常见问题

### 歸藏 PPT Skill 是什么？

它是歸藏开发的开源 Skill，让 Claude Code、Codex 等 AI Agent 生成单文件 HTML 演示文稿，附带配图与社交媒体封面生成和本地演示者模式。项目地址见 [GitHub 仓库](https://github.com/op7418/guizang-ppt-skill)。

### 怎么安装歸藏 PPT Skill？

按 README 运行 `npx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill`，或者把安装说明直接交给一个有 shell 权限的 Agent；安装后仓库位于 `~/.claude/skills/guizang-ppt-skill`。具体步骤见 [README](https://github.com/op7418/guizang-ppt-skill)。

### 歸藏 PPT Skill 免费吗？

项目以 AGPL-3.0 许可证开源，可免费使用；许可条款见 [GitHub 仓库](https://github.com/op7418/guizang-ppt-skill)。

### 它和网页版 AI 做 PPT 的工具有什么区别？

它不是网页应用，而是安装在 Agent 环境里的技能：生成的是本地单文件 HTML 幻灯片，可以在代码里继续修改，版式与配色由仓库内规则约束；网页版工具通常在云端编辑器内完成生成与修改。

## 来源

- [GitHub 仓库 op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill)
