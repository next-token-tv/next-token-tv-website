---
term: ssh
locale: en
updatedAt: "2026-10-11"
---

## Definition

SSH (Secure Shell) is a protocol designed for securely operating network services over an unsecured network, standardized by the IETF in the RFC 4251 series. It provides encryption, server authentication and optional client authentication.

## How it works

The client and server first negotiate encryption algorithms and verify each other's identity, after which all traffic travels through an encrypted channel. SSH listens on TCP port 22 by default; login uses either passwords or key pairs, with key pairs being the common choice for servers and automation.

## Usage

It is most commonly used to log in to a [server](/en/wiki/terms/server) or [VPS](/en/wiki/terms/vps) for command-line administration, and is also used for SCP/SFTP file transfer, Git remote authentication and port forwarding.

## Related and confusable terms

SSH has no direct relationship with an [app server](/en/wiki/terms/app-server): the former is a protocol that secures the transport, while the latter is a runtime that hosts business logic; an administrator typically uses SSH to reach a server and then manages the application server from there.
