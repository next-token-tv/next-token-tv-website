---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
status: published
title: 'Cheap Models Are Opening Up New Use Cases'
description: 'Once model prices fall, the first thing to change is not the capability rankings but which tasks become worth handing to a model. This article maps how cheap models expand usage, and how they divide work with frontier models.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-14'
---

A video plays while it is still being generated, with the visuals following the narration; interrupt it mid-stream, ask a different question, and the picture restarts immediately. This real-time demo, captured at recording time, was powered by [MiniMax](/en/wiki/products/minimax)'s accelerated models together with [fal.ai](/en/wiki/products/fal-ai). Similar demos had appeared before, but most stalled at the private-beta stage: compute consumption was staggering, open access was limited, and generation quality could not sustain real use. The difference this time is that cost and quality crossed the line at the same moment — the visuals became, at minimum, watchable, and by the estimate at recording time, inference costs had dropped to a level that could support an all-day livestream.

The first thing falling prices change is not how smart models have become, but which tasks start to be worth handing to them.

## Trying itself has a cost

Whether a new model makes it into real use often depends not on benchmark scores but on whether users are willing to spend time trying it. Trying a model means buying quota; if you cannot afford it, you may simply never try. A capable-but-expensive model goes unnoticed because nobody can afford to use it. At recording time, several Flash-tier models were free to try, and the reasoning behind that was exactly this: only when users form their own impressions do real cases emerge from the community — a loop more effective than advertising.

Products have adopted the same logic. Some rotate free models daily, letting users give direct feedback on which ones worked and which did not. By the operators' observation, this kind of real feedback is more accurate than leaderboards, and models that performed well during their free periods did retain users. Free lowers not only the monetary cost but also the psychological cost of "wasting an afternoon picking the wrong model" — only when trying becomes nearly free do models genuinely enter ordinary users' shortlists.

## High-frequency, low-risk tasks get handed over first

The first tasks cheap models take over are the ones with low value per call and high repetition. Replying to a single message with a pricier model is fine, because it happens only once; but let an agent run a whole task while calling a frontier model at every step, and the cost quickly becomes unmanageable. The savings on any single call look trivial; in high-frequency settings they become the decisive difference.

Speed amplifies that difference. At recording time, one user described the experience of writing code with a Flash-tier model: several hundred tokens of output per second, and if a version was not right, just start over immediately. Once things are fast, the human's role shifts from waiting to filtering — a user with professional judgment can push a seventy-or-eighty-out-of-a-hundred result up to ninety-five, provided the iteration pace keeps up with their thinking. This is still a single case, but it points to where cheap models really shine: not replacing the best model, but making "try a few more times" affordable.

Being cheap does not mean one-sided compromise, either. Some users found that certain Flash-tier models were actually less sycophantic: they held their own arguments, said plainly when they disagreed, and only then helped carry the task out. Beyond output quality, this willingness to say "that's wrong" is part of why some users are comfortable handing their daily tasks to these models long-term.

## Expanding downward, not competing upward

Understanding cheap models as low-cost stand-ins for frontier models understates their impact. A more accurate description: cheap and open-source models do not compete for top-tier capability; they expand downward — more people, more scenarios, more experiences of actually using models. Things once priced out of reach — real-time video generation, assistants called many times a day, tidy-up tasks running on your own device — are becoming routine one by one.

This explains why so many vendors launched Flash-tier models in the same period. The name borrows the connotation of "fast," but the actual positioning is already a small, low-cost, always-available tier: fewer parameters, faster output, lower prices, with capability retained as much as possible. Some large models, precisely because they are too big and expensive to run, must spin up a smaller tier to cover high-frequency scenarios.

The rise of cheap models does not threaten the frontier models' position, either. Work that must be solved in one shot, where every extra revision costs, still deserves the strongest model; the two kinds of demand sit at different layers of the same pyramid. The deeper cheap models penetrate, the more likely the people at the bottom convert upward and start paying for higher value.

## Scenarios open up, but the task remains the boundary

Being cheap opens the door; the road beyond it is still determined by the task. However smooth the real-time video demo, there is a cap on generation length per run; Flash models are fast enough, but once output gets faster, people run more attempts, so total consumption does not necessarily fall. Letting agents automatically switch between models at different price points is the natural next idea, but it is still not easy today: deciding which model a task should use is itself a hard problem, and most of the time it is still humans doing the switching.

For users, the more workable question is not "which model is strongest" but which judgments in your own tasks are high-frequency, low-risk, and batchable — those are the first spots worth handing to cheap models; the steps that need an answer in one shot, where mistakes are costly, belong to stronger models. What cheap models open up is a set of scenarios, not a takeover of all tasks.

## Sources

- [Why cheap models got attention first](/en/weekly/001/transcript#quote-881880fdb8b857214f65)
- [Free trials and real feedback](/en/weekly/001/transcript#quote-8e051d18a5e240b395d3)
- [The division of labor between price tiers](/en/weekly/001/transcript#quote-360aa28ae0369e21ed0d) and [the logic of expanding downward](/en/weekly/001/transcript#quote-9b5b4f7d38e7aa45cd3f)
- [Professional uses of Flash-tier models](/en/weekly/002/transcript#quote-27320234708134896512) and [their non-sycophantic output style](/en/weekly/002/transcript#quote-d173d51323547eede732)
- [Vendors rolling out Flash tiers](/en/weekly/002/transcript#quote-31dc54abe1a50f6cb37b)
