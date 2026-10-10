---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--004
status: published
title: 'The Product Design Behind a Single Authorization'
description: 'When an agent needs to connect to a new service, should the user tap once to authorize, or go apply for an API key themselves? The difference in that one small step separates two generations of product design.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-29'
---

Ask an agent to plan a trip to Shanghai: who to see, at what time, at which place. It needs to call a maps service, so the task stops right there — the user has to go to a developer platform, apply for an API key, copy it, paste it, configure it, and only then can the task continue. For a connection you might use once a year, the setup cost far exceeds the task itself, and most people give up here.

## Authorization should appear at the moment of need

Other products have moved this step into the middle of the task. In one experience recorded during the show, when [Grok Bot](/en/wiki/products/grok-bot) needed to read a Gmail inbox, the interface popped up an authorization card and a single tap completed it; [Muse](/en/wiki/products/muse-agent) went one step further — when the user said "help me sum up what I should do", it asked whether to connect to Gmail, and "one tap on OK and it was done". What both share is the progressive approach: it appears when needed, and it authorizes when needed.

The opposite is the checklist-style design: connectors are gathered in a store or a settings page, to be picked and preconfigured by the user in advance. The problem is not just a few extra steps. One flaw that was pointed out: some agents don't even know which connectors they have — when something isn't connected, they just answer "I don't have that" instead of suggesting a connection. Where the authorization entry point lives determines whether the user walks along with the task, or has to build a stretch of road before setting out.

Once authorization is smooth, the shape of tasks changes too. In one experience recorded during the show, a user asked Grok Bot to test the top ten products on Product Hunt one by one, and it actually opened a browser — after obtaining authorization to the Google account, it logged into each site in turn to run the tests. Under a checklist-style authorization flow, this kind of task would almost never even be started — the preparation of permissions alone is enough to make people give up. Embedding authorization into the task doesn't just save a few steps; it makes a whole class of tasks that people simply wouldn't have asked for before actually feasible.

## Connection itself can be a service

Back to the trip-planning example: applying for the key, configuring it, even paying the maps service — all of it could be carried by the product, exchanged for credits or a subscription. As one discussion put it, spending a few extra credits for this is perfectly acceptable; paying for the result is a natural exchange. The value of a task lies in its result, and making users spend attention on infrastructure amounts to leaving the hardest part with the person least equipped to handle it. Most external services get used only a few times a year at most; preparing a whole configuration for them is never worth it.

Following this logic to its conclusion leads to a more radical judgment: in the products of the future, concepts like MCP, Skill, Connector, and Key should no longer be exposed to users. That is an opinion, not an established fact, but it points in a direction — what ordinary users want is "the thing got done", not a vocabulary of integration terms. How capabilities are presented belongs in the same discussion: the same capability, buried deep under menus in one product, given a name and an entry point in another, differs completely in discoverability.

## Fewer steps does not mean less informed consent

Progressive authorization is easily misread as "less authorization" or "automatic authorization". Not one step of confirmation was skipped in the experiences above: the card still pops up, the button still needs tapping, and the user still knows which service the agent will access and as whom. What gets compressed is the preparation cost and the terminology learning — not the decision.

This is exactly the step that cannot be skipped. The lighter and more frequently authorization is woven into tasks, the more each individual authorization needs to make clear what the user is agreeing to. A flow that always asks for a tap is, at the same time, an always-visible disclosure; simplify it into silent pass-through, and the few seconds saved will be paid back at the price of trust. The standard for judging whether a product got this part right is not the number of steps, but whether the user understands what is happening at the moment of authorization.

## Count the connection cost as part of the full service

A single authorization is a matter of seconds, but it decides whether a task can be finished in one go. A complete personal agent service is therefore more than model capability plus a runtime: it also includes connection to the outside world — the user names a thing, and the product is responsible for clearing every checkpoint along the way. The yardstick for this part of the experience is concrete too: count how many times a task gets interrupted, and how long it takes to resume after each interruption. The product design of the authorization step is, in the end, scored by that number.

## Sources

- [Capabilities buried deep and products with names](/en/weekly/001/transcript#quote-bf7ff7140aca32b2c095)
- [The trouble of applying for an API key for a single task](/en/weekly/001/transcript#quote-f90f9c88eff7848d5342)
- [How connectors are presented, and what running them feels like](/en/weekly/004/transcript#quote-d1e5b5aec5f25849c972)
