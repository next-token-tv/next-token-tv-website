---
locale: en
episodes:
  - next-token-weekly--006
status: published
publishedAt: '2026-11-10'
title: 'Create a Usable Index for Past Projects'
description: 'Remembering what you built but forgetting the project name and location can stall reuse from the start. An index organized around purpose, entry points, and current status can help an Agent find existing work.'
updatedAt: '2026-11-10'
---

You remember creating a similar visual effect before, but cannot recall the project name, author, or file location. In episode six, Guizang described using Memory to recover these clues, then asking an Agent whether the work could be reused, and going on to build a Demo. Yang Pan also mentioned that sometimes he cannot even remember which Agent he discussed it with.

Qiaomu proposed creating a Map of projects: in the future, you could state a need at a single entry point and have an Agent find related projects. To support this kind of search, the index needs to handle vague descriptions such as “something I built before.”

## Record the purpose first, then provide an entry point that opens

Repository names are often temporary code names, and after a while even the author may be hard to remember. Clues like “draw boxes around objects in a video” or “crop a long screen recording to portrait” are closer to what comes to mind when you want to reuse something. You can keep the formal name and add a sentence describing what it was actually built to do.

For a fictional image-boxing component, an index entry could look like this:

| Field | Example content |
| --- | --- |
| Purpose | Display rectangular annotations on an image; currently handles static images only |
| Location | Repository URL and component directory |
| Entry point | Demo file, start command, and required dependencies |
| Verified version | Commit ID that ran the Demo and date verified |
| Reuse notes | Coordinates are relative to the original image; handle scaling before display |

If “supports real-time video tracking” was only an idea discussed at the time, do not put it in the purpose field. The index is for finding things that already exist; future plans can be labeled separately.

It is enough to start with a few projects you are likely to use again soon. When you discover during reuse that a directory has moved or a start command is outdated, update it as you go; those corrections directly reduce the time needed to search next time.

## One repository can have several working states

The version that runs the Demo may be on an experimental branch, while the main branch does not yet have the corresponding feature. A repository may also have multiple worktrees, with similar directory paths but different states.

`git worktree list --porcelain` can list working directories, commits, and branches to help check how they relate. See the [Git documentation](https://git-scm.com/docs/git-worktree). It cannot replace checking the current uncommitted changes in each directory, nor can it prove that the project runs now. Before reuse, you still need to read the current instructions, check the local state, and start the relevant entry point.

If the index says a particular commit ran successfully, but the working copy has since changed dozens of times, you can first compare what has changed in the parts you need. That way, you do not have to choose between “trusting the old record” and “rereading the entire project.”

## Take only the parts needed this time

After finding the image-boxing project, the new request may need only its coordinate conversion. First confirm which types and configuration this code depends on, then decide whether to copy a small module, extract it as a shared component, or call the old project’s interface directly.

Copying the entire repository can bring along its original UI, deployment settings, and temporary assumptions. If a small function can be used independently, there is no need to start all the old project’s services for it. Conversely, if the feature is tightly tied to the existing data, it may not be suitable to force it into a seemingly generic tool.

After reuse, add the new project’s location and the part used to the original entry. The next time someone searches for “the box is misaligned after scaling the image,” an Agent may be able to find the instance where the problem was most recently fixed, rather than only the original Demo.

## Related materials

- [The experience of recovering a project from Memory and reusing it to make a Demo](/weekly/006/transcript#quote-7764a789fcb295fcbc20)
- [The frustration of forgetting which Agent something was discussed with](/weekly/006/transcript#quote-076a7dae07427ed56156)
- [The idea of creating a project Map and finding projects from a single entry point](/weekly/006/transcript#quote-b14cd2058010090ca6c6)
- [Git: git-worktree](https://git-scm.com/docs/git-worktree), consulted on October 26, 2026.
