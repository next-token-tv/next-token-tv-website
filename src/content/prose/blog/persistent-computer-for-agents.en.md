---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
  - next-token-weekly--003
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'Give the Agent a Computer That Stays On'
description: 'Whether logins, software, and files survive after a task ends is splitting agent execution environments into two generations. Persistent environments make scheduled tasks and long-running collaboration possible — and push cost and multi-machine management onto the user.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-08'
---

Hand an agent a task, come back the next day, and pick up where you left off: is the software it installed yesterday still there? Do the accounts it logged into still work? Where did the files it generated go? The answers depend on whether it runs in an ephemeral sandbox or on a computer that never goes offline.

## What remains after the task ends

The most common execution environment is the ephemeral sandbox: each conversation spins up a virtual machine, and different conversations or processes may land on different machines. The moment a task ends, the environment is reclaimed; anything installed and any intermediate state are not kept. This approach is cheap, and the price is that context does not persist and nothing accumulates between tasks.

Not every product leaves the execution environment in the user's hands. Some vertical agents simply offer no way to run code: a reference image can be uploaded but never retrieved — the file system is effectively decorative. The problem is not that the model lacks coding ability; it is that the product never gave it an environment to operate on. More extreme cases have appeared too: content inside the environment simply vanished before the user could save anything.

Against this backdrop, the pitch for persistent environments is direct: the computer given to the agent should always be there, and it should come with a promise that data will not be lost. This step is no longer just a feature difference — it is treated as the product itself. [Grok Bot](/en/wiki/products/grok-bot) puts this "cloud computer" on the table as a named component, while in other products the same thing hides behind layers of entry points, and users may not realize they already have one.

## Sandboxes and always-on computers are two product generations

Agent execution environments have taken three steps in recent years: from conversation only, to running a piece of code, to owning a computer of its own — one that can install software, open websites, and log in with the user's accounts to get things done. In the first two steps the environment is an accessory; in the third it becomes part of the product, and the vendor's thinking shifts from "helping you complete a task" to "managing a machine on your behalf."

The difference between an always-on computer and an ephemeral sandbox shows up in concrete details of use: the environment keeps running from the start of a task to the end, installed Skills and logged-in account states are still there, and next time you continue where you left off; each ephemeral environment wakes up as another process, with the previous context nowhere to be found. [Manus](/en/wiki/products/manus)'s early approach was one computer per task, reclaimed when the task ends — an environment, but no persistence. What separates these two experiences is not a parameter; it is whether the computer is actually its own.

That said, "persistent" is not a default promise across all products. Among cloud environments, the sandbox of [Dots](/en/wiki/products/dots) is stricter: no SSH access, no third-party software installs, plus frequent restarts and reallocation; whether what you wrote survives a restart depends on each implementation and needs to be confirmed version by version. When choosing which environment to put your work and data into, persistence is a property that must be verified separately, not a guarantee inherent to the category.

## An always-on computer unlocks new task types

Ephemeral sandboxes suit "run once": give a task, wait for a result. An always-on computer opens a different class of task — work that needs continuous presence and runs on a schedule.

One retold use case comes from an independent developer of Mac cleaning software: he handed multi-platform marketing promotion to an always-on agent computer, which visits niche forums in Europe and the US on a schedule and lets the agent judge each forum's tone — some like independent developers telling their story, others prefer knowledge-heavy material — then posts according to when people actually browse. All he provides is the content. The key to this kind of task is not how clever any single action is, but that the environment can stay up: triggered on a schedule, observing continuously.

Tasks that need logged-in states depend on persistence just as much. Having an agent keep a set of accounts logged in, or open a browser and try out a batch of products one by one while recording the results, presupposes that tomorrow's computer is the same one as yesterday's. A sandbox cannot do this, because every time it wakes up it is a stranger.

## Cost: the generation that cannot be given away free

Persistent environments are expensive in time. An ephemeral sandbox is destroyed after use; a cloud computer has to stay on, so the cost structure is entirely different. Some products offer no free tier at all — you pay from the moment you arrive, because running a virtual machine is a real, ongoing expense. Others make an enormous resource commitment, providing virtual machines and generous model usage to huge numbers of users at once and treating it as a long-term investment in an entry point — [Muse](/en/wiki/products/muse-agent) is the latter, and it is clearly not something every vendor can replicate.

The cost gap is starting to show up in product tiering: whether there is a computer at all, and whether it is persistent, is becoming one basis for how agent products are priced and positioned. Openness is diverging too — some products let users browse the complete file list of a cloud VM from a phone and download individual files, while others keep permissions tight. When evaluating these products, who controls the environment and whether files can be taken out matter as much as its ability to run tasks.

The hardware route is diverging as well. Besides Linux virtual machines, there is now a model of serving whole Macs: vendors buy a batch of Mac Minis and connect macOS environments, remote desktop included, into the agent. Renting Mac environments is an old business; what is new is that it has been wired into the agent execution layer.

## From one cloud computer to a set of computers

The first stage of persistent environments is one cloud computer: clone in your usual command-line tools and scripts, then from outside instruct it in a sentence to check sources, produce images, or publish content — no need to build a dedicated channel back to the machine that is always on at home. A second stage is emerging: agents are beginning to register and manage multiple machines — one cloud computer plus, say, a [Mac Studio](/en/wiki/products/mac-studio) that is always on at home, with tasks able to land on any of them.

Further ahead is managing a fleet. Vendors' roadmaps already include the idea of an agent managing every computer in a company or a household — these are plans, not shipped capabilities. Individual experiments are heading the same way: hand the login details of several VPSes to an agent to manage as a whole, have it keep track of what services run on each machine, restart the ones that die, and handle failover across machines — effectively an operations engineer on call at all times.

The end of this path carries new questions. Once cold backups are delegated to an agent, the person handing them over may not know which directory the backups landed in, or whether they can be restored when something goes wrong; the more management you hand over, the less you may understand the environment. Giving the agent a computer that stays on answers "what remains when the task ends." The next question is: who takes stock of what remains, and who answers for it.

## Sources

- [Turning the cloud computer into a named product](/en/weekly/001/transcript#quote-bf7ff7140aca32b2c095) and [the claim of giving agents a complete runtime environment](/en/weekly/002/transcript#quote-5370d8756a780c47b0b1)
- [Ephemeral virtual machines and context that does not persist](/en/weekly/002/transcript#quote-0d0b60517eaf238e1ae0) and [vertical agents lacking an execution environment](/en/weekly/002/transcript#quote-d005ab06bf8c7838d1cf)
- [A scheduled-promotion use case for an always-on agent](/en/weekly/003/transcript#quote-13cbd1a894a6c7b2bc1e) and [full-Mac virtual machine service](/en/weekly/003/transcript#quote-aa8aeedc2c9cd179990a)
- [File management and openness of cloud VMs](/en/weekly/004/transcript#quote-2ea181054d175801f623)
- [Cloud computer permissions and restart issues](/en/weekly/005/transcript#quote-56f1643d9659f1887678) and [cloning tools onto the cloud computer and multi-machine management](/en/weekly/005/transcript#quote-71344e8a7b8efef923b5)
