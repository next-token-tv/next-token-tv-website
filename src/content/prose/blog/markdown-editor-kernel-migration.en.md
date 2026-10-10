---
locale: en
episodes:
  - next-token-weekly--005
status: published
title: "An Attempt at Swapping a Markdown Editor's Kernel"
description: 'The rendered layer and the source are two separate states, and that is the root of a whole class of stubborn problems in WYSIWYG editors. One migration from Milkdown to CodeMirror 6 shows where the openings for modifying an existing system lie, and who owns the responsibility for acceptance.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-09'
---

A subtle problem hides inside WYSIWYG editors: what you see and what is actually stored in the file may not be the same data. One refactor that migrated a Markdown editor from the [Milkdown](/en/wiki/products/milkdown) kernel to [CodeMirror 6](/en/wiki/products/codemirror) went straight at this root cause.

## Two Copies of State, Countless Details

In the original kernel, the rendered content and the raw source were two separate sets of state. When you edited something, the UI could look updated while the source might not actually have been changed. This was not an isolated bug but a breeding ground for a whole class of problems: two representations need to stay in sync, and syncing brings questions of timing, granularity, and conflict handling—more details than you can count. Fix one, and another pops up.

The goal was therefore clear: make the source the single source of truth, with rendering derived from it. This is the route that mainstream editors like [Typora](/en/wiki/products/typora) have already proven. The most direct way to get there was to swap out the underlying kernel—continuing to patch the old architecture amounted to endlessly patching the gap between two copies of state.

## The Model Proposed the Plan—and Estimated the Timeline

Even the plan for this refactor came from the model. The developer was not familiar with kernel selection; it was the model that proposed swapping kernels, listed the string of problems the swap would solve, and estimated the effort as "probably a week." The developer repeatedly checked "can I actually hold this together?" and only started after getting affirmative answers. The model used was DeepSeek Flash as it stood at the time.

The one-week estimate was made on a human's rhythm. The developer reminded it, "you're an AI—one day should be about right," whereupon the model wrote the bulk of the migration in a single pass. There were some bugs, but the skeleton took shape in one go. The gap between estimate and execution is itself evidence of a shift: what used to block this kind of refactor was mainly the file-by-file rewriting workload; once that part is compressed, what becomes truly scarce is judgment—whether to migrate, where to, and what counts as done.

## "The Code Is Written" Does Not Mean the Migration Is Done

The step most easily skipped in a migration is acceptance testing. Code generated in one shot will have bugs; the editor feeling "fantastic" after the kernel swap and solving a pile of old problems is a usage-level impression. The editor's quality ultimately has to be judged by long-term use and regression behavior: were the old editing behaviors preserved item by item, did the old Markdown pain points regress—nested structures, paste, undo, tables. This attempt did not demonstrate full test coverage, so the conclusion it can support is "the migration's main body is complete and the experience has clearly improved," not "kernel migrations are now easy."

The same night's discussion offered a useful point of comparison: before a game project swapped its implementation language, it first used unit tests to lock in the existing logic, which made the replacement "effortless." Both cases point to the same thing—behavioral constraints and regression checks define whether a migration is complete better than "the rewrite is done" does. The deliverable of a migration is not just new code; it is also a body of evidence proving the old behavior wasn't broken.

## Where This Experience Applies

Another migration appeared in the same discussion: moving a whole suite of [Obsidian](/en/wiki/products/obsidian) plugins into a different runtime environment. The handoff approach was to let the model itself judge which features were unrelated to note-taking and drop them, completing the migration in one pass. Clearly, what a model can take on isn't limited to mechanical rewriting—it also includes pruning judgment during a migration, provided the boundary of "what counts as relevant" is stated clearly.

The discussion also produced a more aggressive remark: that quite a few cross-platform technology stacks "no longer have a market." That claim needs to be handled with care. One editor's successful kernel swap shows that on this specific pain point—duplicated state—replacing the kernel beats continued patching; it cannot be generalized to all frameworks having lost their value. Whether a given framework is worth using depends on whether the problem it solves still exists in the current project, and on whether staying on the original architecture or migrating costs more—these have to be calculated per project, and one attempt cannot settle the question.

The initiation and execution of a migration can be handed to the model, but "what counts as done" is still defined by humans. That responsibility hasn't disappeared now that execution is faster—if anything, faster execution makes it easier to overlook.

## Sources

- [The problem of rendered content and source as two separate states](/en/weekly/005/transcript#quote-3ac4fb63746949f2b615) and [the experience after the kernel swap](/en/weekly/005/transcript#quote-fd54e601316b1e0d9ada)
- [The Milkdown-to-CodeMirror-6 plan and its timeline estimate](/en/weekly/005/transcript#quote-a26a210c2315f9a66446)
- [Repeatedly confirming the kernel-swap plan](/en/weekly/005/transcript#quote-916e94a44b29557c3c43)
- [Unit tests locking in logic before swapping the implementation language](/en/weekly/005/transcript#quote-7958f61026c7f81e12fb)
- [The Obsidian plugin migration](/en/weekly/005/transcript#quote-4aee9820b94a95b919f3) and [the discussion of cross-platform stacks](/en/weekly/005/transcript#quote-bdab45c311bcbd6bf8f6)
