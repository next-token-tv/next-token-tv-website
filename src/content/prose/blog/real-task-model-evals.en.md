---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
  - next-token-weekly--003
status: published
title: 'Evaluating Models with Real Tasks'
description: 'Beyond leaderboard scores, a model''s real performance depends on the runtime framework, the type of task, and how fresh the test data is. Using concrete tasks as examples, this article explains how to read evaluation results — and how to use them.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-22'
---

The same background-research task — searching the web for everything about a few specific people — handed to two different runtime frameworks produced wildly different results: one gave up after a quick look, at what the user estimated to be a twenty-out-of-a-hundred level; the other managed to find WeChat official-account articles that even a careful human would struggle to track down completely, and pulled back their full content. This was one case observed at recording time, but it points to a fact often overlooked in evaluation: what determines the result is not just the model, but also the layer wrapped around it.

## The object of evaluation: model plus framework

The runtime framework is exactly that layer. Around the time of recording, an evaluation of coding frameworks compared precisely task completion rates and token costs: putting different frameworks into the same tasks to see who gets the job done with less consumption. In the results, the same model on a different framework could differ noticeably in cost; the efficient frameworks did not win by piling on features — they won with lighter prompts and only the necessary tools.

This is a reminder that whenever you cite any evaluation, what you are really reading is "how some model plus some framework performed on some class of tasks," not "how strong some model is." How many prompts a framework carries, its tool configuration, the weight of its architecture — all of it gets written into the final score. Discussing model capability apart from how it is used is like judging a car only by its engine specifications.

## Perceived capability is not all capability

Public-facing model evaluation also faces an unavoidable constraint: ordinary users can only perceive what is visible. So evaluation demos keep escalating on 3D — it is complex enough, and both the process and the result are easy to verify at a glance. When one generation of models shipped, multiple public benchmark scores were already near perfect, so the community turned to 3D modeling and small 3D games to tell them apart, with a single game extension consuming only a small fraction of the subscription quota.

These demos have value: they turn abstract capability gaps into something you can verify with your own eyes. But what they measure is also the deliberately perceptible part. A model being excellent at 3D demos shows it invested training in a specifically reinforced direction; it does not show that writing, retrieval, or long-task execution is equally strong. A demo is a curated slice of capability; the parts outside the slice still need real tasks to fill in.

## The quality of the questions determines the value of the score

Model vendors optimizing for public benchmarks is an open secret. One example mentioned in the discussion: after a coding benchmark released a new version, every vendor's models performed well on the old questions, but scores dropped noticeably on the new questions that had not been chased yet, with only a few models holding steady across both versions. Whether a score holds steady is really a contest of the time gap between question-setting and benchmark-chasing.

So when reading benchmarks, it is worth asking one more question: how long has this question set been out, and has it been trained against? Performance on fresh questions carries more information than high scores on questions that have circulated for ages.

## Different capabilities need different tests

Evaluation is not one exam; questions are set separately for each capability. In the impressions from recording time, writing and coding corresponded almost to two different groups of models: models leading the coding boards were not necessarily good at writing, and some models recognized for their writing did not owe it to their overall scores. Models good at writing were swapped in wholesale across a site's content-production pipeline, while frameworks with strong retrieval were kept for research — each matched to a different test task.

The same goes for numbers vendors claim. One quantized small model announced that it retained 98.2% of the original model's aggregate performance — that figure comes from the vendor's own evaluation; whether it holds must be re-tested in your own tasks. The same model, on your data, your prompts, and your acceptance criteria, may perform worse — or better.

## Rankings have ever-shorter shelf lives

Static leaderboards rest on one more premise that is failing: stable model versions. Shipping a Preview first to sound out reception, replacing version numbers with dates, announcing continuously updated online services — these practices keep multiplying, and some models update several times a week by default. Once version numbers vanish, leaderboards lose a fixed evaluation target — you can no longer pin a bad verdict on a particular version, and you cannot pin a good one on it either.

Rankings go stale fast, and the alternative way of verifying is more direct: free trials let every user form their own impressions at low cost, and feedback from real users in the community surfaces problems faster than leaderboards. Evaluation has not disappeared; it has dispersed from the hands of a few institutions into every real use.

The workable way to consume model information therefore becomes: first be clear about what your task is, then find the test or trial closest to it, and treat leaderboards as leads rather than conclusions. The unit of evaluation is ultimately the task, not the model's name.

## Sources

- [Framework evaluation: completion rate and token cost](/en/weekly/001/transcript#quote-92ea5ff79896fd00a92a)
- [Free trials are the most direct test](/en/weekly/001/transcript#quote-8e051d18a5e240b395d3)
- [Rolling releases leave leaderboards without a target](/en/weekly/001/transcript#quote-ea83290f01de720c5c8a)
- [3D demos and perceivable capability](/en/weekly/002/transcript#quote-ccd9509479ed2535f667)
- [Agent capability in real environments](/en/weekly/002/transcript#quote-f04e99372001a9cb9a60)
- [Writing ability needs its own test](/en/weekly/002/transcript#quote-67d0fdcd92dbde4dd820)
- [Perceived changes in the same model and the explanations circulating](/en/weekly/002/transcript#quote-e1f2ecea0247c377ea85)
- [Claimed numbers like quantization fidelity rates](/en/weekly/003/transcript#quote-283872caf0ef6a74a2ce)
