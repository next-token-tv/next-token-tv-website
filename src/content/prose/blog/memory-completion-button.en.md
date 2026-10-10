---
locale: en
episodes:
  - next-token-weekly--004
status: published
title: 'AI Memory Needs a Completion Button'
description: 'Remembering a fact, tracking a goal, and completing a task are three different states. When an assistant cannot tell them apart, it keeps nagging about matters that ended long ago.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-30'
---

You mentioned something to your AI assistant in passing, and for days afterwards it keeps bringing it up. The matter is long past, or long disconnected from the rest of your life, but the reminders will not stop. That is not the assistant having too good a memory — it is a system that cannot tell three things apart: what is merely information to remember, what is a goal in progress, and what is a task that should end once it is done.

## A memory, a goal, a task

Everyday matters fall into at least three classes. One class is memory: where you live, what grade your child is in, what you are allergic to — information that is stable over the long term, does not expire week by week, and cannot be called "completed". One class is a goal: something in progress with an endpoint — preparing a move, getting a chronic problem sorted out — that needs to be continuously tracked. And one class is the task: paying the insurance premium tomorrow, renewing a contract next month — a single action that ends when it is done.

These three call for different treatment, but when all of them are spoken into one chat box, the system often has only one way to handle them: write everything down. The memory is stored, the goal is stored, the task is stored — and "when is this matter done" is not stored anywhere. An example from one product discussion is typical: after you tell the assistant something, it "nags you about it every single day", and what it nags about has long stopped having anything to do with what you are actually doing. The information is not wrong; what is wrong is that it has no way to end.

## Checking a box tells the system: this matter is over

The checkmark on a to-do list looks like an action; it is in fact a status signal: this thread of attention can be closed. In one product experience recorded during the show, [Muse](/en/wiki/products/muse-agent) broke long-term goals into a list on its page; when something was done you checked it off, and after the checkmark the system stopped dwelling on it.

The value of this design is not an extra checklist, but giving memory an exit: the relevant information can settle and stay, yet "reminders about this matter" should have a way to end. Without that exit, the user is left with a single tool — repeatedly clarifying out loud "no need to bring this up again" — and each clarification itself becomes new context.

To put it the other way around: assistants complained about for "remembering too well" do not lack a stronger memory model; they lack an interface element so simple it is almost not worth designing — a button that moves a matter from "being attended to" to "ended".

## Why pure chat cannot manage to-dos

One attempt was recorded: putting away [TickTick](/en/wiki/products/ticktick) and managing to-dos entirely through conversation. A year on, the conclusion was that nothing had been managed well, and the list app was taken back up.

The failure was not the model; it was the shape of chat. A conversation is a stream that flows forward — what was said sinks into history, and finding it and confirming it both take effort. There is nowhere to check something off when it is done, nowhere to schedule it when it is not, and a day later you cannot recall what you asked the assistant to do. After interacting, a person needs a result that can be revisited and verified — and that result has to live somewhere outside the chat stream. The recent revival of note-taking and to-do apps is related to exactly this gap: the more people interact with AI, the more they need an interface outside the interaction where results can be checked.

## The simplicity of the sticky note, the hard problem of generalization

The to-do need itself is utterly mainstream. A former Google Calendar product manager relayed his team's research in a conversation: the tool ordinary American users rely on most is not any calendar software — it is the sticky note stuck on the fridge. Filling a calendar to the brim is a minority need; most people's to-dos are on the level of "pay the water bill tomorrow", with no use for a methodology or a complex interface.

The difficulty is that a pure program cannot handle generalization. What counts as "done", when something expires, how to follow up when plans change, which part of a sentence is a task and which is just venting — the rules are hard to write completely, and any rule set that is complete fails on the next slightly different sentence. This is exactly the place a model can fill in: turning a natural sentence into a record with a state, an endpoint, and an exit, then letting a simple interface handle the display and the checkmarks. The program handles form, the model handles understanding — each doing the part it is good at. This is a direction inferred from existing products; actual capabilities are subject to what each product ships.

## Ending, not forgetting

A completion button does not solve an efficiency problem; it solves an awareness problem: the system finally knows that this matter is over, as far as the user is concerned. The layering that follows is clear — information settles into memory, with no deadline; goals carry progress and update as they advance; tasks get checked off and closed, and the reminders stop with them. Mix all three into one "memory", and the assistant has no choice but to be always-on about everything.

The question that remains open is who draws the boundary: before the user checks the box, can the system first judge that a thing is actually done? And are there matters whose way of ending is not a checkmark but simply expiring? The completion button is only the first step; managing task states is the real product problem behind it.

## Sources

- [To-dos, memory, and visible results](/en/weekly/004/transcript#quote-282d5185fef569c56427)
