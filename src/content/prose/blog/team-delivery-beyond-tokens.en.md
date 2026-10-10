---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
  - next-token-weekly--004
status: published
title: 'Beyond Token Usage: The Other Hurdle in Team Delivery'
description: 'Models keep getting faster and code keeps getting cheaper to write, but the speed at which software reaches users has not automatically caught up. Between individual output and organizational delivery sits a whole set of steps that have yet to be redesigned.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-03'
---

The speedup on the model side continues: newer generations of models not only generate faster, they also hold their own ground when facing disagreement, sticking to their arguments instead of changing what they say to go along with the user. By that logic, once the code-writing step is accelerated, software should ship faster.

Yet a widely circulated claim says exactly the opposite: many non-technical roles have genuinely saved time after adopting AI, while the people writing code have gotten more exhausted. The reason for the exhaustion is not hard to infer — when the cost of a single task drops low enough, a person opens more projects and tries more ideas at the same time, has more things to keep an eye on, and the total volume of errors grows too. The speedup happens on the individual output side, but between there and software actually reaching users lie building, testing, signing, review, release, and making multiple people's changes compatible with each other. Most of these steps are outside what a model can do, and they have largely not gotten any faster.

## Iteration speed is an organizational capability

In many organizations, the road from spotting an early signal to turning it into a usable product is still long. One piece of direct evidence: big teams with the best models and the most senior engineers often iterate more slowly than small teams. The slowness is not on the model side, nor in the talent supply — what is genuinely hard to explain is why identical staffing produces completely different rhythms.

Some pin their hopes on "usage": since models bill by the token, crank usage to the max and let AI into as many steps as possible. But simply piling up usage has not bought a matching delivery speed. The discussion calls this Token Maxxing, and the conclusion is that it doesn't work — the companies in question have all taken efficiency steps, yet the real question, "how should the organization actually operate," still has no answer. Usage measures input; delivery measures outcome. What's missing between the two is precisely the organizational layer.

## The collaboration architecture is the harder part

Writing code can be done by one person; delivery almost always requires a group. The more people involved, the harder collaboration gets — that is a lesson that has long held true.

There are two external observations worth noting. First, from the outside, OpenAI's Codex team is not small, yet it maintains a fast iteration pace and relatively little internal friction, while some comparable teams that were once fast have slowed down. This contrast can only tell us that their collaboration architectures differ; their internal practices have not been disclosed in enough detail to copy. Second, abroad there is a class of design engineers: people with engineering ability, design ability, and product judgment at once. Once AI fills in the remaining steps, they can ship releases on their own. What this role demonstrates is the value of a closed loop — when a piece of work is held by the same person from requirements definition to final release, the handoff cost disappears.

It bears emphasizing that neither of these is an organizational prescription that can be directly applied. "Everyone should become full-stack" is not this article's conclusion; at most it points in a direction: in organizations with slow delivery, the bottleneck usually lies not in individual capability but at the seams between people. How to redesign those seams has no universal answer today.

The individual side happens to offer a counterpoint. In one experience with Codex scheduled tasks, a task produced no results for several days; only after asking the agent to check itself did it turn out that over those days it had casually fixed a few display bugs along the way. Between a single user and a single agent, the closed loop can be so small that no organization is needed at all. The difficulty of organizational delivery is that the same loop must span many people, and every handoff point is a potential loss of speed.

## Judge delivery by more than usage

If you measure AI-driven progress by token consumption, lines of code generated, or number of calls, you are only measuring the speed of the individual output side. Organizational delivery capability calls for a different set of metrics: how long the cycle from idea to launch takes, whether the release pipeline runs smoothly, how many conflicts arise when multiple people's changes merge, and how quickly problems get fixed once they appear.

These metrics are rarely discussed publicly today, and they are also harder for the "usage" narrative to obscure. For teams bringing AI into their development process, the question worth answering first may not be "how many more tasks can we hand the model," but "how many hands does an idea pass through now, from proposal to launch." This hurdle is not in the model's next update — it is in the organization's own design.

## Sources

- [The claim that programmers are more exhausted while clerical work gets easier](/en/weekly/004/transcript#quote-7b7cc16447ca9b1dd44e) and [models that are faster and less sycophantic](/en/weekly/002/transcript#quote-d173d51323547eede732)
- [Product iteration being too slow](/en/weekly/001/transcript#quote-17c8d4edd1f1c9668cc9) and [Token Maxxing is not the same as an AI-native organization](/en/weekly/001/transcript#quote-45f64357834e51d83a81)
- [The more people, the harder collaboration — and the external observation on the Codex team](/en/weekly/001/transcript#quote-ec2c96e7bdcac0347c43) and [design engineers shipping their own releases](/en/weekly/001/transcript#quote-6a3e40b5f5fee482a25a)
- [The experience of a Codex scheduled task checking itself](/en/weekly/001/transcript#quote-a8dccdaffbf095cc50d6)
