---
entityType: product
entity: next-token-skill
locale: en
slot: wiki
updatedAt: '2026-11-16'
seoTitle: 'Next Token Skill: let your agent search the show transcripts and articles | Next Token Wiki'
seoDescription: "What Next Token Skill is: the show's open-source agent skill that searches all transcripts and articles, quotes the hosts with Bilibili and YouTube timestamp links, and how to install it."
---

## Next Token Skill

Next Token Skill is an open-source Agent Skill (Apache-2.0 license) published by the video podcast Next Token｜词元之外 ([the show's brand entry](/en/wiki/brands/next-token)); the repository is [next-token-tv/next-token-skill](https://github.com/next-token-tv/next-token-skill). Its slogan is "让你的 AI Agent 听过每一期 Next Token。" — "let your AI agent have heard every episode of Next Token." Once installed, an AI agent that supports [Agent Skills](/en/wiki/terms/agent-skills) can search all show transcripts and articles when answering questions, quote the hosts' actual words, and attach links to the matching moments on Bilibili and YouTube; for topics the show never covered, it does not fabricate citations.

## How it works and installation

[See an example answer and the installation commands](/en/skill).

Per the repository:

- Form: it is not an [MCP](/en/wiki/terms/mcp) server but a skill made of a SKILL.md instruction file and one Python script, callable by any agent that can run local commands.
- Search: on first use it syncs all transcripts and articles into a local cache; retrieval then runs entirely locally, with automatic checks for new episodes. It uses only the Python standard library and needs no API key.
- Output: a direct answer plus each host's viewpoint with a timestamped citation link (for example, to a specific minute of a Bilibili episode). Timestamp links are taken as-is from the show's transcript pages rather than constructed by the agent.
- Installation: clone the repository and symlink (or place) the `next-token` directory into the agent's skills directory (`~/.claude/skills` for Claude Code); it can also be used directly from the command line without an agent (`python3 next-token/scripts/nexttoken.py search <keywords>`).
- Limits: some transcript paragraphs lack individual timestamps, so those links are approximate; web-based agents that cannot run local scripts cannot use it.

## Discussion in the show

In episode 010, in the chapter "Next Token Skill 与 Grok Bot：让 Agent 引用节目" ([Next Token Skill and Grok Bot: letting agents cite the show](/weekly/010/transcript#chapter-30); Chinese transcript), Guizang says the skill is finished and can be published, Orange proposes publishing it in that episode's show notes, and Guizang names the implementation "Next Token Skill"; Xiangyang Qiaomu notes ["Guizang built this by hand"](/weekly/010/transcript#quote-9be57c0643126a221881). Guizang describes it as similar in function to [Grok Bot](/en/wiki/products/grok-bot): [Grok Bot users use that bot, users of other agents use the skill](/weekly/010/transcript#quote-ab4c5c01f1c228114e89), and "it can search all of Next Token's content for you"; he adds that [because everything is Markdown that supports links, each quoted sentence carries Bilibili and YouTube timestamp links](/weekly/010/transcript#quote-b918642614caf70fc088). Earlier in the same episode, in the chapter "历史逐字稿检索，直达 B 站和 YouTube 时间点" ([searching past transcripts, jumping straight to Bilibili and YouTube timestamps](/weekly/010/transcript#chapter-29); Chinese transcript), Yang Pan describes the corresponding website feature: [searching the transcripts on the show's site and clicking a result row yields links that locate the moment on Bilibili and YouTube](/weekly/010/transcript#quote-bfed5eae3716aa622d9a). These are the participants describing their own tool; for actual installation and behavior, see the [project repository](https://github.com/next-token-tv/next-token-skill).

## Frequently asked questions

### What is Next Token Skill?

An open-source Agent Skill published by the show: it lets AI agents that can run local commands search all Next Token transcripts and articles, quote the hosts' views, and attach Bilibili and YouTube timestamp links; see the [GitHub repository](https://github.com/next-token-tv/next-token-skill).

### How do I install Next Token Skill?

Clone the repository and place the `next-token` folder into your agent's skills directory (`~/.claude/skills` for Claude Code), then restart the agent; exact commands are in the [repository documentation](https://github.com/next-token-tv/next-token-skill).

### Is Next Token Skill the same thing as MCP?

No. It is an Agent Skill consisting of a SKILL.md file and one Python script; it does not start an MCP service. Any agent that can run local commands can use it.

### Does Next Token Skill cost money or need an API key?

No. Retrieval runs locally using only the Python standard library, with no model API calls and no API key; transcript content is synced at runtime from the show's official site.

### What does it do for topics the show never covered?

Per the repository, it only provides citations for content the show actually discussed; it will not force in references for topics the show never covered.

## Sources

- [next-token-tv/next-token-skill repository](https://github.com/next-token-tv/next-token-skill)
- [Next Token transcripts on the official site](https://nexttoken.tv/weekly)
