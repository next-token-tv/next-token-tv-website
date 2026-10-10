---
locale: en
episodes:
  - next-token-weekly--005
status: published
title: 'An Agent Can Run Errands for Me — Where Should It Stop?'
description: 'Looking things up, placing orders, paying, making promises to others — delegating to an agent involves different tiers of authority. The difference between an assistant and a digital alter ego hides in every single "should I ask first?"'
updatedAt: '2026-10-10'
publishedAt: '2026-10-08'
---

Hand over the whole business of booking a hotel: tell the assistant the travel dates and the budget, then wait for the result. It sounds effortless, but the middle is full of decision points — which neighborhood, what price range, which cancellation policy, and on whose behalf what was confirmed with whom. Delegation is not one sentence; it is a string of questions that need boundaries drawn: when an agent runs errands for a person, from which step onward should it stop and ask a human?

## An assistant, not an alter ego

With personal agents on the rise, an old question has become practical again: are these products the user's assistant, or the user's digital alter ego? The consensus of the current wave of products lands on assistant — managing email, managing schedules, booking flights and hotels: the chores that used to be carried by a secretary. The difference between an assistant and an alter ego is not the capability list; it is will: the assistant carries out the user's decisions and comes back for instructions at the major junctures, while the alter ego forms judgments on the user's behalf and speaks in the user's place.

This positioning directly shapes the design of permissions. Being an assistant means the agent can be granted capabilities, but should not be granted, by default, the power to make decisions on the user's behalf. The depth of delegation comes in tiers too: sorting email, summarizing a schedule — a mistake can be redone; book the wrong room, and the money is already spent and the itinerary may already have changed — risk rises with the degree of irreversibility, and the checkpoints should follow the risk. Which decisions still belong to the owner needs to be drawn explicitly by the product — and each user needs a list of their own in their head.

## Price is only one constraint

One line of inference goes: an agent can search the entire web, it will always find a cheaper channel, orders will naturally flow to the lowest bidder, and the channel landscape will therefore be reshuffled. That inference reduces booking a room to a price comparison.

The actual logic of use is more complicated. One rhetorical question raised in the discussion: what if cheapness comes at the cost of a terrible experience? After the stay, the user will say, never book through that channel again — every booking there has been lousy. Beyond price there are location, preferences, cancellation policy, and channel reliability, and that information is scattered across the trip itself and across past feedback. What booking a room requires knowing is not just the current going rate but the owner's habits — the ideal is for those preferences to be in the context before the order is placed, rather than being learned the hard way from one wrong booking.

The feedback loop is therefore part of the delegation system, not an add-on: the outcome after each stay has to flow back into the next decision, or the agent will keep repeating the same "cheap but wrong" choice. Delegation that optimizes only for price quietly pushes the hardest judgment back onto the user.

## Promises, payments, and sharing are not the same thing

Taken apart, delegation has at least four tiers, each with its own risk. Reading and organizing — reading mail, arranging a schedule, summarizing orders; the risk lies in privacy. Executing and ordering — booking hotels, buying things; real money is spent, and a confirmation point is usually worth keeping. Committing to others — canceling an order, rescheduling, answering someone "I will be home tomorrow afternoon"; real-world obligations are created in the user's name, and the cost of walking them back happens in the real world. Sharing information — telling other services or other people your itinerary, address, or finances; once given, it may never be retrievable.

Different tiers should authorize differently: reading can be one grant valid long-term, orders confirmed one by one, and commitments to others and sharing information should carry the highest bar. There is still a great deal of open product space here. One concrete example is [Instinct](/en/wiki/products/instinct) and its friends network: friends who join can ask the assistant about all sorts of information about the user, and on that basis the product advises adding only genuinely close friends. Framing information access as "close friends only" is itself a design attempt at sharing permissions — the boundary has to be narrower than a social app friend list to be safe, and whether that setting holds up remains to be verified.

## Which side it stands on

Traditional intermediaries and agents have their own interests; which channel gets booked is not necessarily the one best for the user. The new generation of booking assistants deliberately keeps its distance from that model, summed up as "entirely on your side, centered on your interests". A positioning can be claimed in words, but a stance cannot rest on claims alone: where the revenue comes from and which channels it cooperates with will all affect how neutral the recommendations are. Users have few ways to verify, and the most practical one is the freedom to give feedback and to switch — if an assistant cannot survive the correction "don't use that channel next time", then standing on your side is just talk.

## Where it stops is the product

Making the agent stop and ask is not a lack of capability; it is the structure a delegation relationship should have. The real question was never "can everything be done for me", but which confirmation method each class of errands corresponds to: what gets one-time authorization, what gets a nod each time, and what stays in the owner's hands forever. The line between an assistant and a digital alter ego is drawn precisely by these stopping points, one by one.

## Sources

- [Assistant or digital alter ego](/en/weekly/005/transcript#quote-64cec465b0931b169aac)
- [Booking assistants: the model and the trust](/en/weekly/005/transcript#quote-38c7127987d368463a3f)
