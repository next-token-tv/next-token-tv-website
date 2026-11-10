---
locale: en
episodes:
  - next-token-weekly--009
status: published
publishedAt: '2026-11-10'
title: 'Keeping Work Context Useful When You Switch Agents'
description: 'When work spans several agents and conversations, preserve the materials, decisions and results that let the next task continue—with room for verification, correction and migration.'
updatedAt: '2026-11-10'
---

One job can span several tools: research in one agent, code in another, then organize the material through a third interface. Switching often means explaining progress again, finding decisions that were already confirmed and figuring out which file contains the latest result.

Episode 009 discussed gathering work materials in a chosen place, such as Notion or GitHub, and letting different agents use them. It also distinguished temporary subtasks from persistent sessions. The shared question is whether the next piece of work can find enough evidence to continue after the current task ends.

## Extract decisions and results from the conversation

A conversation preserves discussion, but may be a poor sole entry point for the next task. A decision can change repeatedly, with the final version buried in a long exchange. Having the next tool reread everything adds work and may revive requirements that were abandoned.

Start with a few simple records: the project’s current goal, confirmed decisions, the location of actual outputs and unresolved work. After a website update, for example, record the live address, corresponding commit and articles still in draft. The next change can begin from these facts instead of reconstructing the conversation.

Records should point to actual files. Saying a video was exported still needs a file and version; saying a test passed still needs the version that was checked. A summary helps locate the material, while the original supports verification.

## Shared material needs clear editing boundaries

Giving several agents access to one directory does not automatically create consistent context. Suppose one tool is making a cover with an old title while another has already changed the article title. If both label their output final, the shared directory increases confusion.

One approach is to distinguish editable working drafts from confirmed deliverables, state the version a task starts from and update the current record on completion. Parallel edits also need conflict checks. Git projects can use commit history to compare changes; other collections still need clear versions and a way to recover.

There is no need to begin with a large database. For a few projects, an index and stable paths may suffice. As relationships, states and queries grow, consider whether a table, database or dedicated interface would help. The episode also raised the idea of generating a temporary board on demand. Presentation can change with the task while the underlying material remains findable.

## Portability also involves permissions and backups

Centralizing material expands the reach of a mistaken action. A task that only needs background reading does not need permission to modify the whole collection. A tool calling a service should not gain every credential merely because it shares context.

GitHub’s authentication documentation describes different access methods. Choose permissions for the actual task and keep access tokens out of ordinary notes that other tools may read. The appropriate scope also depends on the application and interface being used.

Portability cannot depend on a single remote account alone. Keep a copy that can actually restore the material, and identify what exists only inside a platform. This is more useful than simply moving every file into one service. A successful backup means the necessary content can be recovered, not just that a synchronization icon turned green.

## Test the arrangement with one tool switch

Choose a small completed task and ask another tool to continue it using only the project index, current decisions and output files. Check whether it finds the correct version, asks again about settled matters or mistakes historical drafts for the current state.

If this reveals a gap, add the missing record rather than indefinitely appending every conversation to the next prompt. Context worth accumulating is material the next task can use and verify—and that can be corrected when the facts change.

## Related sources (episode transcripts in Chinese)

- [Temporary subtasks, persistent sessions and implementation limits](/weekly/009/transcript#quote-2df2b99cea5671e7a59c), with [limits in coordinating conversations](/weekly/009/transcript#quote-fbe0ed39f3cf47f079be)
- [Organizing and managing work outputs](/weekly/009/transcript#quote-39f3fc8316887821c381)
- [One person’s practice of sharing context across tools](/weekly/009/transcript#quote-89f6ef975e6a8d53e149)
- [Preserving material across agents](/weekly/009/transcript#quote-e95a312108e9a21956bf)
- [Generating a temporary board on demand](/weekly/009/transcript#quote-348adb1c0e7f70f499f8)
- [GitHub: About authentication to GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
