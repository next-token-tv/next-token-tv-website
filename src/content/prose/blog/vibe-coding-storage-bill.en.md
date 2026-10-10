---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--003
  - next-token-weekly--005
status: published
title: 'The Storage Bill After Vibe Coding'
description: 'Projects, caches, system images, and raw video fill the drive together. The question is not only how much capacity to buy, but which data is worth keeping, on which tier, and whether it can be found again when needed.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-09'
---

A 512GB laptop replaced by a new 2TB machine — three months later, 1TB is already gone. It is not downloaded movies; Vibe Coding changed the rate of production: projects, worktrees, generated assets, and intermediate artifacts pile into the drive at unprecedented speed. The bill has changed, and it is worth working out what it consists of.

## What is eating the space

A good part of the eaten space can grow back. Package installers and dependencies left behind by every terminal install, caches accumulated by agents driving a browser over and over — in one observation, [Chrome](/en/wiki/products/chrome)'s cache alone exceeded 60GB; chat-and-office apps with built-in browsers pile up in similar ways. Delete these and they regenerate, yet they occupy the most visible space.

The other part is hard to regenerate. Developers know system images well: to test across several OS versions, a few iOS and iPadOS images add up to forty or fifty gigabytes, and [Xcode](/en/wiki/products/xcode) itself is no lightweight; chat apps' local data is often the single largest item — for many people the single biggest item of all is [WeChat](/en/wiki/products/wechat). Then there are worktrees and furiously generated project files — the new variable Vibe Coding brings: where you once could not start more than a few projects a month, you can now run a pile of them in parallel in a single day.

All of these numbers come from observations on personal machines, not statistical conclusions; usage varies enormously from person to person. But the direction is shared: per-machine capacity has gone from "enough for many years" to "needing to be replanned every year."

## Caches can be deleted; raw footage cannot

These data cannot all be treated the same way. Caches and installers are regenerable data — the cost of deleting them is only a re-download. Project files and records are hard-to-regenerate original data — delete them and they are gone.

The trouble is the middle ground. Content creators know this best: 10 to 20 minutes of raw video is 20 to 30GB at recording spec. These raw files "cannot be deleted, but keeping them is not right either" — redoing them costs too much, keeping them keeps eating space, so they sit there until a later decision. One drive holds regenerable and non-regenerable data mixed together — that is exactly why cleanup has become hard.

The risk of automated cleanup has already shown itself: ask an agent to "free up more than 100GB," and it goes directory by directory and does clear the space — at the cost of deleting nearly every frequently used app, ending in a full reinstall. Under capacity anxiety, "one-click cleanup" sounds tempting, but telling which files can regenerate and which are the only copy is still a judgment for a human to make — and this article offers no unreviewed cleanup operations.

## Storage should be tiered

Since the data differ in nature, the way they are stored should be tiered.

The top tier is local hot data: projects currently running and frequently changed files stay on the fastest SSD. The next tier is the home archive: things not touched daily but checked now and then go on the NAS — direct access over the LAN, latency is no issue. Some people are already mount-syncing local Memory to the NAS, so personal data has one centralized copy at home.

Below that is the cold archive: data like raw video that "you definitely do not want to lose, but only retrieve a few times a year at most." The cold-storage idea is this: an order of magnitude cheaper than ordinary cloud drives, at the cost of not being instantly downloadable — to retrieve a volume, submit a request and wait about a day. Trading a tenfold price difference for waiting sounds workable; the objection is just as direct: most users will not wait even 24 seconds, and waiting kills the demand outright. This remains an idea to this day — no validated product sits on a shelf. The old physical-media approach has its limits too: a DVD holds less than 7GB, not even one episode's worth.

## The bill beyond capacity: backup and retrieval

The drive bill has more on it than capacity. Backing up means at least two copies: buy a NAS at home and the drive may fail, so backup means buying another drive — the cost nearly doubles; a cloud subscription means paying monthly — one example from the time of recording was a household 2TB [iCloud](/en/wiki/products/icloud) plan close to full, with the next tier up more than tripling the monthly cost. This is one individual's bill; it is not budget advice for anyone.

Another item is easier to overlook: being able to find things again. In the multi-machine era, files are starting to scatter across more places — tools and outputs cloned into cloud computer VMs, cold backups handed to agents. After handing each episode's cold backup to an agent, one practical question arises: which directory the backup actually landed in is unknown to the person who handed it over. Stored does not mean managed; if you only discover at the moment of recovery that you cannot say where it is, the value of the backup is discounted. High-frequency auto-syncing has its price too — there are already cases of drives worn to death by read-write.

Tiering is therefore not just about saving money; it is risk management: non-regenerable data goes somewhere steadier, with redundancy, and regenerable data does not occupy expensive space. As for those raw files that "cannot be deleted, but keeping them is not right either," the real answer may not be a bigger drive, but a much cheaper destination where slower retrieval does not matter — it does not exist yet, but the demand has already arrived.

## Sources

- [Storage pressure and cleanup experiences after Vibe Coding](/en/weekly/003/transcript#quote-fc4220c04de4da08ab2a)
- [Mount-syncing local Memory to the NAS](/en/weekly/001/transcript#quote-4b44ecebdba34d3f84a6)
- [Cloning tools onto the cloud computer and cold backups handed to the agent](/en/weekly/005/transcript#quote-71344e8a7b8efef923b5)
