---
locale: en
episodes:
  - next-token-weekly--002
  - next-token-weekly--003
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'From a Blank Chat Box to the First Useful Task'
description: 'Personal agents have lowered the bar to "being able to chat", but what decides retention is not the chatting — it is the first useful task: scenario entry points, an execution process you can see, and a conversation the user never has to manage.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-08'
---

A new AI app installs, and you open it to an input box. For people who cannot get through a day without agents, that is fine; for most people it is a problem: what should the first sentence be? The core claim of this round of personal agent products is precisely to put AI into the hands of those people — and whether it ends up being used depends on when the first useful task happens.

## Where the first task comes from

An empty input box carries an assumption: that the user knows what they want. Actual observation says the opposite — a good share of people open a chatbot or an agent with no idea what to ask of it. So the starting point itself becomes an object of design.

One approach is to list scenarios. In one experience recorded during the show, [Muse](/en/wiki/products/muse-agent) used a tab to list concrete everyday problems: the credit card was overcharged — can the AI get the money back automatically; a party is coming up — can the AI arrange shopping for the supplies. Each scenario starts executing the moment you tap it; the user does not have to compose the wording first. These scenarios are curated, close to real pain points of local daily life, and skewed toward life rather than work. Another approach is recommendation: drawing on long-term memory, pick out content the user is likely to be interested in, providing a starting point for the moments when they do not know what to do.

What the two entry points share is translating "what can I help you with" into a first step that can be tapped right away. The blank chat box has not disappeared; it just no longer carries the opening alone.

## Life tasks do not need a workbench

Personal agents can be this simple partly because of another product line: agents are splitting into two kinds. Life-facing products keep getting simpler — practically, you open them and just chat; developer- and productivity-facing products keep gaining freedom — plugins, model selection, custom workflows, the works.

This split matches the nature of the tasks. Life tasks have no project, no codebase, no deliverables; the user does not need to manage sessions, does not need to understand context windows, does not even need to know which model is underneath. All that freedom in productivity tools is pure burden here. So the interaction of personal agents tends to fall back to conversation itself — back to the original chat-and-go form, with the complexity kept inside the system.

The counterexample makes the same point. In one experience recorded shortly after launch, Dots was placed in a sidebar already crowded with entry points; users could not tell it apart from the neighboring products, and getting started became harder. More entry points do not mean a lower bar; for life scenarios, every extra concept to understand costs one user who would have started. These are the product states recorded during the show; each product will keep evolving, and none of this is a final verdict on any of them.

Where the entry point sits is part of onboarding too. One recorded piece of product experience: users stay anchored to the contact lists in the apps they already use every day — one product made its assistant a "contact" inside WeChat, scan a QR code and you can chat, and the conversion cost dropped sharply as a result; in-app assistants follow the same logic, with the entry point inside the app people open every day, and the location itself saves the user one migration.

## Hand it over, but keep it visible

Once the first task is underway, the dividing line of experience is the execution process. Two common kinds of frustration are both about communication: one is failing to help while creating a new problem; the other is parroting — restating what the user just said, offering no conclusion, then suggesting "maybe you should go do this". The second drains patience especially, because what it spends is the user's attention and time.

The better-performing products draw distinctions in their execution structure. Still the Muse experience: internally it has only two roles — one communicates with the user and assigns tasks, the other executes in the background; a small area in a corner of the screen keeps showing what the background is doing and which items are waiting for approval. With the conversation on the left staying alive and the status on the right checkable, the user can hand things over with peace of mind.

How assistance is requested matters just as much. Some steps the agent cannot do, and the user has to fill in one small move — how that request is phrased decides whether the user feels "it is helping me" or "it is bossing me around". The quality of this stretch of interaction does not depend on model capability; it depends on whether product design treats people's feelings as a first-class object.

## Sessions for the system, a person for the user

With longer use, an organizational problem appears: does everything need a new session? Task-based products that split sessions per task have their reasons, but in life the counterpart of a conversation is "a person", not a directory of files. Some products have begun shifting the unit of organization from the session to the person: you keep talking to the same person, and the system automatically organizes and distills the context generated along the way. A useful analogy is WeChat — its conversation list has always been people and groups, never topics and projects.

That said, a single session is not a cure-all. Programming and long-running professional work still need their own workspace and isolated context; cramming them into the same chat window only makes them interfere with each other. The sensible way for the two to coexist: hand life to one ever-present conversation, hand professional work to project-based tools, and do not force the two into one entry point.

## Closing

From a blank chat box to the first useful task lie three layers of design: a starting point that needs no wording, an execution you can watch and correct, and an organizational structure the user never has to maintain. Only when all three are in place does the second conversation happen. Onboarding, then, can be redefined — not the user learning the product, but the product completing a full loop within the first few minutes.

## Sources

- [Onboarding personal agents, and the circles they reach](/en/weekly/005/transcript#quote-56f1643d9659f1887678)
- [Positioning for ordinary users and scenario entry points](/en/weekly/004/transcript#quote-f5a4c41430ea20c6f3a1) and [The execution process and how help is requested](/en/weekly/004/transcript#quote-d1e5b5aec5f25849c972)
- [The split between life and productivity agents](/en/weekly/005/transcript#quote-15476bf2887cbc4df949)
- [In-app assistants and entry-point placement](/en/weekly/002/transcript#quote-68208ed35ccde0e32e64)
- [The problem with splitting entry points by task](/en/weekly/003/transcript#quote-850afafdc40a6d485687)
- [Back to the starting point of the conversation form](/en/weekly/002/transcript#quote-5370d8756a780c47b0b1)
