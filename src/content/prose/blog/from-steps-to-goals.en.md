---
locale: en
episodes:
  - next-token-weekly--002
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'From Prescribing Steps to Aligning on Goals'
description: 'As models start acting on intent rather than literal instructions, the center of gravity in collaboration shifts from prescribing every step to stating goals and acceptance criteria. Which constraints still need to be written down explicitly is worth discussing separately.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-09'
---

While developing a save feature for an RSS reader, the requirement was to save articles as Markdown or PDF. After the feature was done, the model added a remark: users might not realize the article had already been saved—should this button become a "done" indicator? The requirement hadn't changed, but the delivery gained a layer of consideration for the user's situation. Moments like this put an old question back on the table: when collaborating with a model, exactly how much do you need to prescribe?

## The End of the Line for Instruction Execution

The common pattern of collaborating with models used to be step-by-step prescription: do this first, then that, what format to use, what not to touch. The finer the prescription, the more two problems surface. First, writing out every step is nearly impossible—there will always be branches you didn't anticipate. Second, the person making the request may not understand some of the steps themselves, and a layperson's literal instruction can end up steering execution the wrong way.

Recent usage experience shows a change: models no longer blindly follow literal requests. They complete the requirement and then consider from a wider perspective what the design is ultimately meant to serve, and when necessary they say "this can't be done that way." The old people-pleasing, step-by-step execution often made collaboration feel clumsy; now it is more like offering a solution after understanding the intent.

## Alignment Replaces the Step List

Reflected in daily usage, the focus of prompt writing has shifted. It used to be about guiding, agreeing on conventions, and strictly constraining every step; now it is mainly about alignment—making clear what you want to do, why, and what counts as good, without prescribing exactly how to do it.

This doesn't mean prompts are useless; it means the position of two kinds of information has changed. The parts describing "how to do it" are fading in importance, while the parts describing "what to do" and "what counts as done well" matter more. Time saved from prescribing steps is best spent stating the goal itself clearly.

## As Models Get Stronger, Weak Requirements Show Their Cracks Faster

Aligning on a goal presupposes that the goal itself is sound. From usage observations in the same period, there is a typical predicament: asking for too much while lacking a concept of what to build, burning through a subscription quota in a week, and still ending up with something that doesn't meet the requirements. A model will not invent a clear goal on the user's behalf; when the expression is muddled, the muddle gets amplified by execution too.

Professional judgment has not, therefore, been devalued. One user with development experience described another route: use a faster model to get a result that scores sixty or seventy out of a hundred, then rely on your own professional judgment to iteratively adjust it up to ninety-five, with total time actually shorter. Judgment and acceptance criteria still live with the people who understand the domain—the stronger the model gets, the more the definition of "good" is supplied by humans.

## The Boundaries Are Still Drawn by People

Handing judgment to a model also requires spelling out the scope of that judgment. When a whole suite of Obsidian plugins was moved into a different runtime environment, the handoff was: judge which features are unrelated to note-taking, and decide on your own to remove them. The model carried out the pruning and the migration, but the scope of "related to note-taking" itself came from an understanding of the business—what gets delegated is judgment within execution, and the prerequisite for drawing boundaries is still the human's understanding of the matter.

## Steps Go Stale; Rules Don't

Another signal comes from accumulated procedures. One user found that applying a video-production Skill prepared for an older model to a newer model actually made the results worse. This observation deserves to be recorded as a phenomenon, without rushing to infer a cause—why the model is affected internally cannot be verified from the outside. At the minimum, it is a reminder: operational steps written for a model's capability gaps at the time may turn into constraints as the model grows stronger.

When accumulating instructions, it is worth distinguishing two kinds of content. One kind is "how to do it" operational steps; they are tied to the model's capability level at the time, go stale, and need periodic cleanup. The other kind is stable business rules—terminology conventions, constraints, formats, acceptance criteria—which are worth writing down no matter how strong the model becomes. Deleting the latter along with the former by mistake, and enshrining the former as long-term rules, are the same mistake in opposite directions.

Moving from prescribed steps to aligned goals is not a matter of managing less, but of managing in a different place. The question still open is which constraints are worth writing down explicitly—there is no universal answer, only judgment made project by project.

## Sources

- [The proactive suggestion beyond the save feature](/en/weekly/004/transcript#quote-552ae1419948a13eea0b) and [the experience of no longer blindly following instructions](/en/weekly/004/transcript#quote-a65fffd01bc6c45beb15)
- [Prompt writing shifting from agreed steps to alignment](/en/weekly/004/transcript#quote-67ed68f06beb586d346f)
- [Over-asking leading to consumption and unsatisfactory results](/en/weekly/002/transcript#quote-ccd9509479ed2535f667)
- [Professional judgment and the room for tuning](/en/weekly/002/transcript#quote-27320234708134896512)
- [Stating the boundary in the plugin migration](/en/weekly/005/transcript#quote-4aee9820b94a95b919f3)
- [The negative experience of an old Skill applied to a new model](/en/weekly/004/transcript#quote-228f0639918786141868)
