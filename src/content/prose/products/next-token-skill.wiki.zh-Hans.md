---
entityType: product
entity: next-token-skill
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-16'
seoTitle: 'Next Token Skill：让 Agent 检索节目逐字稿与文章｜Next Token Wiki'
seoDescription: 'Next Token Skill 是什么：节目官方开源的 Agent Skill，检索全部逐字稿与文章、引用原话并附 B 站和 YouTube 时间点链接，以及安装方法。'
---

## Next Token Skill

Next Token Skill 是《Next Token｜词元之外》节目官方提供的开源 Agent Skill（Apache-2.0 许可，仓库为 [next-token-tv/next-token-skill](https://github.com/next-token-tv/next-token-skill)），目标是"让你的 AI Agent 听过每一期 Next Token"。安装后，支持 [Agent Skill](/wiki/terms/agent-skills) 的 AI Agent 在回答问题时可以检索节目全部逐字稿与文章，引用主理人的原话，并附上指向 B 站和 YouTube 对应时间点的链接；节目没聊过的内容，它不会硬凑引用。

## 工作方式与安装

[查看 Next Token Skill 的回答示例和安装命令](/skill)。

按仓库说明：

- 形态：不是 [MCP](/wiki/terms/mcp) 服务，而是一个由 SKILL.md 指令文件和一个 Python 脚本组成的 Skill，任何能执行本地命令的 Agent 都可以调用。
- 检索：首次使用时把全部逐字稿和文章同步到本地缓存，之后检索都在本地完成，并自动检查新节目更新；只用 Python 标准库，不需要 API Key。
- 返回内容：直接回答加各主理人的观点出处，每条引用带时间戳链接（例如指向 B 站某一集的某一分钟）；时间点链接直接取自节目网站逐字稿页，由脚本原样引用。
- 安装：Claude Code 下把仓库克隆到本地并把 `next-token` 目录链接（或放入）到 `~/.claude/skills`；其他 Agent 把同一目录放入其 skills 目录即可；也可以不经 Agent 直接以命令行使用（`python3 next-token/scripts/nexttoken.py search 关键词`）。
- 限制：部分逐字稿段落没有独立时间戳，相应链接只能近似定位；不能运行本地脚本的网页版 Agent 无法使用。

## 节目中的讨论

第十期在["Next Token Skill 与 Grok Bot：让 Agent 引用节目"](/weekly/010/transcript#chapter-30)章节里，歸藏说 Skill 已经做完、可以发布，橘子提议就发在这期 Show Notes 里；歸藏称实现就是 Next Token Skill；[向阳乔木](/wiki/people/xiangyang-qiaomu)说["这个藏师傅手搓的"](/weekly/010/transcript#quote-9be57c0643126a221881)。歸藏介绍它与 [Grok Bot](/wiki/products/grok-bot) 功能类似：[用 Grok Bot 的人用它的 Bot，其他 Agent 用户用 Skill](/weekly/010/transcript#quote-ab4c5c01f1c228114e89)，"它就能帮你去检索所有的 Next Token 的内容"；他还说[因为所有 Markdown 都支持链接，回答时引用的那句话会带上 B 站和 YouTube 的时间点链接](/weekly/010/transcript#quote-b918642614caf70fc088)。同一期在["历史逐字稿检索，直达 B 站和 YouTube 时间点"](/weekly/010/transcript#chapter-29)章节里，杨攀介绍了网站逐字稿搜索功能的对应能力：[搜索历史逐字稿后，点击结果行可以得到指向 B 站和 YouTube 的定位链接](/weekly/010/transcript#quote-bfed5eae3716aa622d9a)。这些都是参与者对自家工具的介绍，具体安装与行为以[项目仓库](https://github.com/next-token-tv/next-token-skill)为准。

## 常见问题

### Next Token Skill 是什么？

节目官方开源的 Agent Skill：让能执行本地命令的 AI Agent 检索《Next Token》全部逐字稿与文章，引用主理人观点并附 B 站、YouTube 时间点链接，仓库见 [GitHub](https://github.com/next-token-tv/next-token-skill)。

### 怎么安装 Next Token Skill？

把仓库克隆到本地，将 `next-token` 目录放入 Agent 的 skills 目录（Claude Code 是 `~/.claude/skills`），重启 Agent 即可；具体命令见[仓库说明](https://github.com/next-token-tv/next-token-skill)。

### Next Token Skill 和 MCP 是一回事吗？

不是。它是一个只含 SKILL.md 和一个 Python 脚本的 Agent Skill，不启动 MCP 服务；只要 Agent 能运行本地命令就能使用。

### Next Token Skill 需要付费或 API Key 吗？

不需要。检索在本地完成，只用 Python 标准库，不调用模型 API，也没有 API Key 要求；逐字稿内容在运行时从节目官网同步。

### 节目没聊过的话题它会怎么回答？

按仓库说明，它只为节目真实讨论过的内容提供引用；节目没聊过的内容不会硬凑出处。

## 来源

- [next-token-tv/next-token-skill 仓库](https://github.com/next-token-tv/next-token-skill)
- [Next Token 官网逐字稿](https://nexttoken.tv/weekly)
