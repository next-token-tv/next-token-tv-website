---
entityType: product
entity: tailscale
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-21'
seoTitle: 'Tailscale：基于 WireGuard 的零配置私有组网｜Next Token Wiki'
seoDescription: 'Tailscale 是什么：基于 WireGuard 的组网服务，把不同网络的设备连进同一加密私有网络（tailnet），工作方式、与传统 VPN 的区别、公司背景和节目中的讨论。'
---

## Tailscale 用来做什么

Tailscale 把已授权的电脑、手机和服务器加入同一个私有网络（官方称为 tailnet），让不同网络上的设备互相访问。设备之间通过开源 WireGuard 协议建立端到端加密的连接；安装并登录两台以上设备即自动组成一个 tailnet，默认访问策略开箱即用，不需要公网 IP、端口转发或复杂的防火墙规则。

## 工作方式

- 身份与策略：以账号身份为中心，按访问策略决定哪些设备互通；官方把它定位为基于零信任架构的连接平台。
- 直连优先：设备优先通过 NAT 穿越建立点对点连接，直连不通时经中继转发；也可以把某台设备配置为出口节点（exit node），让它转发全部流量，用法接近传统 [VPN](/wiki/terms/vpn)。
- 附加能力：Taildrop 在设备之间直接互传文件；客户端覆盖 Windows、macOS、iOS、Android、Linux 等系统。

## 公司与历史

Tailscale 由 Tailscale Inc. 开发。公司于 2019 年由四位前 Google 工程师 Avery Pennarun、David Crawshaw、David Carney 和 Brad Fitzpatrick 在加拿大多伦多创立，成立后逐步开放其组网服务。名称来自 Google 2013 年的论文《The Tail at Scale》。

## 节目中的讨论

第 011 期的例子是出门时用 [iPad](/wiki/products/ipad) 连接家中的 [Mac mini](/wiki/products/mac-mini)。Tailscale 负责让设备之间能够通信，并配合远程桌面或 [SSH](/wiki/terms/ssh) 等工具使用。

## 常见问题

### Tailscale 是什么？

基于 WireGuard 的组网服务：把授权设备连进同一个端到端加密的私有网络，跨网络互访不需要公网 IP 或端口转发，官方文档见 [tailscale.com](https://tailscale.com/docs/concepts/what-is-tailscale)。

### Tailscale 是谁开发的？

Tailscale Inc.，2019 年由 Avery Pennarun、David Crawshaw、David Carney 和 Brad Fitzpatrick 四位前 Google 工程师创立。

### Tailscale 和 VPN 有什么区别？

传统 [VPN](/wiki/terms/vpn) 通常把流量集中到一台网关；Tailscale 让设备之间直接点对点连接，以身份和访问策略控制互通，也可以用出口节点实现整机流量转发。

### 没有公网 IP 能用 Tailscale 吗？

可以。连接经由 NAT 穿越协商，必要时走中继；两端设备登录同一账号即可互通。

## 来源

- [Tailscale 官方文档：What is Tailscale](https://tailscale.com/docs/concepts/what-is-tailscale)
- [Tailscale — Wikipedia](https://en.wikipedia.org/wiki/Tailscale)
