---
locale: en
episodes:
  - next-token-weekly--006
status: published
title: 'Humans are streamlining teams while Agents are starting to hold meetings'
description: 'Multiple Bots can bring different perspectives, but they can also create waiting and duplicated work. An experiment with a trending-topics podcast reveals the gap between role assignments and genuine parallelism.'
updatedAt: '2026-11-10'
publishedAt: '2026-10-19'
---

A task seems well suited to an AI team: gather trending items from GitHub Trending and Product Hunt, turn them into content, then add speech synthesis to make a continuously playing podcast.

Several Bots quickly worked out a plan. Responsibilities were clear, they notified one another about changes, and the number of versions kept growing. Watching the discussion, you might think the work was moving forward in an orderly way. But when it came time to execute, it turned out to take a long time and consume Tokens quickly. This is an observation from use; the materials do not provide complete timings or a bill, but it is enough to raise a question: as the group gets busier, how much closer is it actually getting to a finished product?

## Giving roles names is easier than drawing clear task boundaries

Bringing technical, product, and marketing roles into the same group can easily create the sense of being organized. Each role has a point of view, can add input, and can challenge other people's plans. In product brainstorming, this kind of interaction can indeed help users discover angles they had not considered.

However, differences between roles do not automatically translate into executional independence. A marketing Bot can comment on a headline, a product Bot can also comment on it, and a third Bot can then summarize both sides. If nobody has the authority to finalize it, the more opinions there are, the harder it is to settle on a headline.

The trending-topics podcast work can be divided by output: collect information from two sources separately, have an editor choose topics and write the script, then send the approved script to the voice production step. This division provides boundaries for inputs and outputs. Building an organization around job titles, by contrast, can lead every role to take part in every step, turning the work from making content into continually discussing how to make content.

To judge whether division of labor is effective, start with a concrete question: what does a Bot need to hand back for this step to count as finished? If the answer is still “take part in the discussion,” the task has not really been delegated.

## The benefit of parallelism depends on how often tasks have to wait on one another

The two streams of trending-topic collection can start at the same time; voice recording has to wait for the script, and the final mix has to wait for the audio. Adding executors can shorten the wait for independent work, but it cannot remove dependencies that already exist between sequential steps.

Dependencies introduced by the process itself are more troublesome. Suppose five roles must each approve the script before it can go to voice recording. The system now has five more opportunities for communication. Any new request could reopen work that had already been completed. This describes a possible design; it is not a claim about the internal implementation of that experiment.

In its 2025 account of experience building a multi-agent research system, Anthropic also identified parallelizability as an important condition: broad searches across independent directions are suitable for delegating to subagents; tasks with extensive shared context and mutual dependencies are less likely to benefit. The team reported that, in its data, multi-agent systems used about fifteen times as many Tokens as ordinary chat. The comparison is with chat, not every single-agent workflow; that figure cannot be applied directly to the bill for any product.

The lesson supported by this experience is limited but practical: multi-agent systems can buy more exploration capacity, but only if there is enough valuable work that can be pursued independently to make use of it.

## Brainstorming and delivery can use different organizational approaches

During brainstorming, there is no need to rush to eliminate all duplication. Having several roles find fault with an idea can be a way to delay convergence and uncover overlooked possibilities. Getting inspiration from different perspectives is also an acceptable outcome of this stage.

The goal changes in the delivery stage. Who decides which version to use, who can change requirements that have already been confirmed, and which questions need to go back to the user should all be more tightly controlled. Keeping a group chat where anyone can change direction at any time carries the openness of the exploration stage into a stage that should be about execution.

One arrangement to try is to give discussion an endpoint: first gather several different proposals, then have a clearly designated owner finalize one; those executing the work afterward can report blockers, but personal preferences do not reopen the entire discussion. This arrangement still allows division of labor; it simply makes that division revolve around deliverables.

## The fun of managing an AI team can stand on its own

There is no need to disguise the fun of role-playing as productivity. Watching Bots with different personalities discuss a product or pick up on a sudden idea can itself be an entertaining and creative experience. As long as users are willing to spend time and money on it, it has its own value.

The easy confusion is to mistake the team's presence for its ability to deliver. Lots of avatars, frequent messages, and tidy proposals are not enough to show that the task was completed better. If the goal is to make a podcast, what is worth comparing is how the quality of the finished product, waiting time, cost, and number of human interventions change under the same requirements.

The organizational structure can be lightweight. Add an executor only when a piece of work is worth pursuing independently and its result can be handed off clearly. Having one Bot stay in the foreground to respond to the user while another handles a long task in the background is also a clear division of labor; its value does not need to be proved by holding an all-hands meeting.

## Related material

- [Collaboration and waiting in the trending-topics podcast experiment](/en/weekly/006/transcript#quote-7ce559ebe3a5ab8b4d34)
- [The experience of having different roles take part in product brainstorming](/en/weekly/006/transcript#quote-312553049d6c5e9e8980)
- [Concurrency and foreground responses](/en/weekly/006/transcript#quote-353d2eee19934aafcc2e)
- [Anthropic: How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), June 13, 2025.
