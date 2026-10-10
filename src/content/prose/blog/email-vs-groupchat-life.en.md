---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'Life in the Inbox, Life in the WeChat Groups'
description: 'The ceiling of what a life assistant can do often is not the model — it is where the information it can see lives: the same school notice is readily at hand in email, but hard to reach inside a group chat.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-08'
---

The day before school started, an AI assistant with email access sent a reminder: the school has emailed — which uniform to wear tomorrow, which materials to bring, and a consent form that needs a parent's signature. The technical difficulty here is not high; what is hard is the precondition for this to work at all — the school notifies parents by email. In a different setting, the same reminder might be buried in a parents' WeChat group, and the assistant simply cannot reach it.

## Capability lives where the information lives

For users whose statements, orders, and school notices all arrive by email, granting the assistant email access covers a sizable slice of life's information flow. In one trial, [Dots](/en/wiki/products/dots) was granted access to Google services all at once, and the three things in the school email were automatically organized into reminders; this kind of experience comes naturally within the email ecosystem, because the information is centralized, the interfaces are open, and the formats are relatively tidy.

For many users in China, the same matters are scattered elsewhere: bills in the payment app, orders in the shopping apps, and school notices very likely in a WeChat group. The assistant cannot see those places, and no matter how strong the model, it can only give generic answers. This is not a gap in models; it is a gap in where the information sits — the first boundary of a life assistant is drawn by where the information lives.

## To-dos inside group chats

Group chats carry part of this life information. The parents' WeChat group is the example most often raised: message overload is the state of almost every group — teachers post notices, the parents' committee posts sign-up chains, and the important to-dos drown in a flood of small talk and forwarded posts. If an assistant could read these groups, pick out the items that concern your own child, and help follow up, the value would be obvious — and so is the difficulty: the context is in the platform's hands.

In-app assistants are another path. Cases recorded during the show: one user asked [Xiaowei](/en/wiki/products/xiaowei) inside [WeChat](/en/wiki/products/wechat) to find a certain group and post a notice; someone else ran into a device problem, asked Xiaowei directly inside WeChat, and got an answer. These capabilities happened on a case-by-case basis; they do not mean the platform's interfaces are already broadly open. The advantage of in-app assistants is that the entry point sits inside everyday software; the disadvantage is that every step of capability is constrained by how much the interface exposes, and that can change at any time.

## Vertical apps solve it first

In the places general assistants cannot reach, vertical products delivered answers first. Observations from recording time: ask a general agent to shop on Taobao and it cannot manage, while the AI inside the Taobao app does far better; for travel bookings, Fliggy's AI is smooth; for medical consultations, vertical healthcare products answer in more detail than general replies. Capability grows where the data, the interfaces, and the context are. Hence one judgment: a truly general life agent does not exist yet — the context of every scenario is held by its own platform.

A more direct example comes from financial data: [WorkBuddy](/en/wiki/products/workbuddy) connected to market data that could not be read anywhere else, users flooded in for that one capability, and other products promptly followed by wiring up the same source. The payoff comes from connecting data and interfaces, not from generic conversational ability.

## Openness decides who gets to build a life assistant

The individual-level conclusion: the more context an AI has, the more it can help. This also explains the difference in product form between the two markets. Overseas, the connections between information services are relatively open — software can authorize one another, and both startups and big companies can obtain context; in China, interfaces are fragmented and data is not shared, startups cannot get context, and everyone keeps to their own walled compound. So connecting and authorizing rise from technical details to make-or-break product questions: the assistant has to fight for permissions at the phone's operating-system layer, or it can do nothing at all. These are observations from recording time; the scope of interface openness is changing item by item.

Channel habits differ accordingly. One recorded signup experience: overseas booking assistants rely on iMessage or WhatsApp conversations; for users in China the signup bar is high, and once inside they do not know what to chat about with it — a life assistant cut off from the channels where the information lives loses its scenarios.

## Closing

The competition among life assistants is, first of all, a competition over where the information sits. That email-ecosystem users get the complete experience first does not mean the other side lags forever: group chats, mini programs, and all kinds of apps hold equally complete context, and once a platform opens its interfaces, the positions can be reshuffled. The genuinely unresolved question is this: when life's information is scattered across a dozen apps that do not talk to each other, who is responsible for connecting it — the operating system, the super-app platforms, or some assistant product willing to do the dirty work.

## Sources

- [Life admin in the inbox, and the gap in where information lives](/en/weekly/005/transcript#quote-3376c105562013f6957d)
- [Vertical apps give finer answers](/en/weekly/002/transcript#quote-a5c3d0cedb02509dc9d5)
- [In-app assistants and group-chat scenarios](/en/weekly/002/transcript#quote-68208ed35ccde0e32e64)
- [Personal context and health data logging](/en/weekly/002/transcript#quote-e8b27e3016c5fc5e59bb)
- [The trouble with interfaces and authorization in China](/en/weekly/001/transcript#quote-f90f9c88eff7848d5342)
- [Real scenarios unlocked by data access](/en/weekly/001/transcript#quote-b1d8460b4c7a04b42fbd)
- [Life-assistant scenarios and the parents'-group idea](/en/weekly/004/transcript#quote-f5a4c41430ea20c6f3a1)
- [Booking assistants: channels and usage scenarios](/en/weekly/005/transcript#quote-38c7127987d368463a3f)
