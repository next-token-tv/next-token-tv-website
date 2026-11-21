---
entityType: product
entity: tailscale
locale: en
slot: wiki
updatedAt: '2026-11-21'
seoTitle: "Tailscale: zero-config private networking built on WireGuard | Next Token Wiki"
seoDescription: "What Tailscale is: a WireGuard-based networking service that joins devices across networks into one encrypted private network (a tailnet), how it works, how it differs from a VPN, company history, and the show discussion."
---

## What is Tailscale used for?

Tailscale puts authorized computers, phones, and servers on a shared private network (a "tailnet" in official terms) so that devices on different networks can reach each other. Devices connect with end-to-end encryption over the open-source WireGuard protocol; installing and signing in on two or more devices creates a tailnet automatically, with sensible default access policies and no need for a public IP, port forwarding, or complex firewall rules.

## How it works

- Identity and policy: the account identity is central, and access policies decide which devices can communicate; Tailscale positions the platform on a zero-trust architecture.
- Direct connections first: devices establish peer-to-peer connections through NAT traversal and fall back to relays when a direct path fails. Any device can also be configured as an exit node that forwards all traffic, similar to a traditional [VPN](/en/wiki/terms/vpn).
- Extras: Taildrop transfers files directly between devices, and clients are available for Windows, macOS, iOS, Android, Linux, and more.

## Company and history

Tailscale is developed by Tailscale Inc., founded in 2019 in Toronto by four former Google engineers: Avery Pennarun, David Crawshaw, David Carney, and Brad Fitzpatrick. The company gradually opened its networking service after the founding. The name comes from Google's 2013 paper "The Tail at Scale."

## Discussed on Next Token

Episode 011 discusses connecting to a home [Mac mini](/en/wiki/products/mac-mini) from an [iPad](/en/wiki/products/ipad) while traveling. Tailscale provides the network connection, paired with remote desktop or [SSH](/en/wiki/terms/ssh) tools.

## Frequently asked questions

### What is Tailscale?

A WireGuard-based networking service that joins authorized devices into one end-to-end encrypted private network, letting them reach each other across networks without a public IP or port forwarding. The [official documentation](https://tailscale.com/docs/concepts/what-is-tailscale) describes the model in detail.

### Who develops Tailscale?

Tailscale Inc., founded in 2019 by Avery Pennarun, David Crawshaw, David Carney, and Brad Fitzpatrick, four former Google engineers.

### How is Tailscale different from a VPN?

A traditional [VPN](/en/wiki/terms/vpn) usually funnels traffic through a gateway. Tailscale connects devices to each other directly, peer to peer, with identity and access policies deciding what can communicate; an exit node can still forward all traffic VPN-style.

### Does Tailscale work without a public IP?

Yes. Connections are negotiated through NAT traversal, falling back to relays when needed; devices signed in to the same account can reach each other.

## Sources

- [Tailscale documentation: What is Tailscale](https://tailscale.com/docs/concepts/what-is-tailscale)
- [Tailscale — Wikipedia](https://en.wikipedia.org/wiki/Tailscale)
