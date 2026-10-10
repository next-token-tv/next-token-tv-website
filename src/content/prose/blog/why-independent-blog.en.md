---
locale: en
episodes:
  - next-token-weekly--005
status: published
title: 'Why Write an Independent Blog When You Already Have a WeChat Official Account?'
description: 'When content serves both human readers and agents, the open web and a subscribable entry point take on new value. A gap discovered while assembling AI sources shows this still has to be done deliberately on the Chinese internet.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-08'
---

Assembling a set of AI sources exposes an obvious gap: major overseas AI media, podcasts, company blogs, and product release pages almost all offer RSS, while official announcements and release notes from vendors in China generally do not. Some updates even put the date in the title and contain no timestamp anywhere in the body. For feed readers and automation tools, these are two entirely different internets.

The difference is not one of technical capability. RSS readers were once popular on the Chinese internet too—readers like [Zhuaxia](/en/wiki/products/zhuaxia) flourished for a time—until that layer of open infrastructure was absorbed by platform competition: content got fenced into each platform's own app, and subscription lost its place. The WeChat official account platform is a typical case. It offers original-content protection, so that after publication no one can copy your piece wholesale; in an environment where plagiarism-by-rewriting costs almost nothing, this closed design has real, practical reasons. The price is that official account content is barely open to the outside web: the biggest obstacle for anyone building an RSS reader is that official accounts simply cannot be subscribed to, and publicly offering a scraping service would raise compliance problems as well.

## Where Independent Blogs Used to Lose

From the economics of readership, independent blogs have long been at a disadvantage, and they lost for structural reasons. Readers used to be distributed through platform recommendation feeds; independent web pages had no distribution channel of their own and could only queue up in search results. Official accounts, meanwhile, sat behind the most mature monetization engine in Chinese self-media, while open subscription never found a business model of its own—[Substack](/en/wiki/products/substack)-style newsletters built on RSS and email subscriptions are among the few exceptions. Openness shrinking without commercial support was the actual outcome of the last round of competition.

[Yuan Chaofa](/en/wiki/people/yuan-chaofa)'s comparison works as a specimen: he has long run an independent blog and an official account side by side, and the same article draws far fewer reads on the blog than on the account. It is hard not to wonder whether the effort of maintaining an independent blog is worth it at all compared with publishing only on the official account. If readers were only human, that conclusion would be difficult to argue with.

## Agents Become New Readers

The arrival of agents adds a new variable to this question, because it changes the premise of "having no distribution channel." Agents do not find content through recommendation feeds; they only look at whether content is reachable. One observation that has come up repeatedly: ask an agent to look up the articles of an author who writes only on WeChat official accounts and summarize the writing style, and it cannot find them; switch to an author with an independent blog, and it reads the entire blog, arriving at a much better-grounded judgment of the style. The reason is simple—official account content is nearly unsearchable from outside the platform, while the open web can be crawled and read by agents. Agents are constantly scanning open content, and this happens whether or not any human reader is present.

"Letting the internet and agents know who I am" describes exactly this shift: open content gains a batch of readers that require no manual operation, readers that take no part in the allocation of recommendation feeds and recognize only an address and a format.

It should be noted that these are, for now, isolated observations, and they do not constitute a promise about traffic outcomes. The position of independent blogs in search engine rankings has not changed because of this, and how the various agents index and cite open content is still in flux. Treating open web pages as a guaranteed "AI traffic entry point" goes beyond what the available evidence supports; what can be confirmed today is only that open content can be read, while closed content never even gets the chance to be found.

## What Form Should Openness Take

If you accept the premise that "content should be readable by agents," the next question is in what form. RSS remains a low-cost answer: it simply sits there, and any feed reader or agent can discover and read it on its own. By contrast, wrapping your sources in an MCP service actually requires the user to complete an installation first—one more threshold. Another idea floating around is to use the official account API to automatically sync the content you are authorized to publish into an RSS feed. That is a proposal still under discussion; whether it can be made to work reliably depends on the platform's interfaces, and it should not be treated as an existing capability.

Whichever form you choose, the boundary should be drawn at content you have the right to publish. Content published inside a platform is subject to that platform's mechanics, and converting other people's closed content into an open subscription goes beyond what an individual creator should be doing. This site's approach is to put content on the open web: every episode offers a web version and a Markdown transcript, with stable paragraph anchors so both humans and agents can cite them; blog posts also ship with Markdown versions. All of this is content the site itself has the right to publish, so the cost of openness stays under control.

## Can Openness Pay Off

Whether open content can be made to work commercially, the previous generation of the internet never gave an affirmative answer: the Web 2.0 era had both the RSS standard and subscription habits, and in the end it exited the stage because the money never materialized. Whether this generation will be different—whether a more open generation of creators and services can capture some kind of dividend—is a question that has no answer yet.

For the individual creator, the part that can be reckoned is this: maintaining an open web page within the bounds of what you have the right to publish carries a modest marginal cost, and it serves both classes of readers at once—humans and agents. The part that cannot be reckoned is the return. Whether the call to give content an RSS feed will be widely answered, and whether openness becomes worthwhile again in the agent era, can only be left for later to verify.

## Sources

- [The RSS gap discovered while assembling AI sources](/en/weekly/005/transcript#quote-3f4a9de73c9790bf85ca)
- [The rise and fall of RSS readers and platform enclosure](/en/weekly/005/transcript#quote-1771fd51ebcfb697adff), and [the obstacles to subscribing to WeChat official accounts](/en/weekly/005/transcript#quote-871c3aac328f2c52603e)
- [Original-content protection and the content-laundering environment](/en/weekly/005/transcript#quote-24ff55ef0a622fb44d76), [where official accounts sit commercially](/en/weekly/005/transcript#quote-c0ab2bd364d1f89ba1bc), and [Substack as the exception](/en/weekly/005/transcript#quote-214308342457cb8359f0)
- [Comparing readership between independent blogs and official accounts](/en/weekly/005/transcript#quote-b367fa0f3242c8e8cdbf)
- [Asking an agent to study an author's style](/en/weekly/005/transcript#quote-e43a23c7777c172ec79d), [an open blog read from end to end](/en/weekly/005/transcript#quote-bd17bc81aa2cea69c3c6), and [agents scanning continuously](/en/weekly/005/transcript#quote-981875147906b73baa81)
- [RSS versus MCP](/en/weekly/005/transcript#quote-b58a32420fb9d90144de), and [the idea of syncing via the official account API](/en/weekly/005/transcript#quote-31c25200dbbce0ce8fdb)
- [The call to give content an RSS feed](/en/weekly/005/transcript#quote-17a1763b2608dc65ee21), and [the question of whether an openness dividend exists](/en/weekly/005/transcript#quote-a2331e14cc5e29c789ef)
