---
term: worktree
locale: en
updatedAt: "2026-10-11"
---

## Definition

A worktree is a working directory in Git with a branch checked out. With the git worktree command, one repository can have several branches checked out in different directories at the same time.

## How it works

Each worktree has its own branch and files, independent of the others, while sharing the same object store and refs; `git worktree add <path> <branch>` creates one, with no need to clone the repository again.

## Usage

It suits parallel work: editing code on two branches at once, keeping a directory that builds continuously, or giving parallel [agents](/en/wiki/terms/agent) separate working directories that never interfere.

## Related and confusable terms

A [fork](/en/wiki/terms/fork) differs in scope: forking copies the repository under another account or project as an independent one, while a worktree always stays inside the same repository—it just opens extra checked-out directories.
