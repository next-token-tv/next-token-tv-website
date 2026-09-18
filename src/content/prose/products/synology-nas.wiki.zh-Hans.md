---
entityType: product
entity: synology-nas
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: '群晖 NAS：产品系列、DSM 系统与使用场景｜Next Token Wiki'
seoDescription: '了解群晖（Synology）NAS 的产品系列划分、DSM 操作系统与常用套件（Drive、Hyper Backup、Photos 等），以及节目中的相关讨论。'
---

## 群晖 NAS 是什么

群晖 NAS 是 Synology（群晖科技）的网络附加存储（NAS）产品系列的统称，覆盖从家庭到企业级的数据存储、文件共享、同步与备份需求。硬件按定位划分多个系列：J 系列面向入门级文件整合，Value 系列主打私有云与安全共享，Plus 系列面向进阶数据保护与管理，XS/XS+ 面向高性能企业场景，FS 系列是全闪存存储，SA、HD、PAS 系列面向企业级与高密度负载，UC 系列是 SAN 环境，DVA 系列是 AI 支持的 NVR。其中 DS 开头的 DiskStation 是塔式/桌面机型，RS 开头的 RackStation 是机架式机型。完整目录见[群晖官方产品页](https://www.synology.cn/zh-cn/products)。

## DSM 与常用套件

群晖 NAS 由 DiskStation Manager（DSM）驱动，官方将 DSM 描述为"the intuitive operating system that powers every Synology NAS"（驱动每台群晖 NAS 的直观操作系统）。常用套件包括 Synology Drive（跨设备同步与访问文件）、Hyper Backup（备份方案）、Synology Photos（照片整理与分享）、Surveillance（监控管理）和 Active Backup 系列等；部分机型可通过 Container Manager 套件运行容器。DSM 版本与套件适用机型会更新，以[官方 DSM 页面](https://www.synology.com/en-global/dsm)和套件中心为准。

## 节目中的讨论

在 Weekly #001 的"NAS 会不会成为个人 AI 上下文的家"章节中，几位主理人讨论了把个人 AI 的记忆和多模态数据同步到家中 NAS 的想法。[杨攀在列举 NAS 时提到群晖](/weekly/001/transcript#quote-4ee1d60d908c06a944f4)，[歸藏说"群晖他们玩得比较多"](/weekly/001/transcript#quote-f4c9b777feaf289382da)，[橘子则说"群晖太难用了"，并提到自己的群晖已经给公司用了](/weekly/001/transcript#quote-c864afa774fbf5f51cec)。章节还对比了小米 NAS、Docker 支持等话题。这些是节目参与者各自的使用体验，不是产品评测。

## 常见问题

### 群晖 NAS 官网在哪里？

群晖中文官网是 [synology.cn](https://www.synology.cn/zh-cn/products)，国际官网是 [synology.com](https://www.synology.com/)，产品目录和套件说明都可以在这两个入口查到。

### DSM 是什么？

DSM（DiskStation Manager）是群晖 NAS 的操作系统，官方称其为驱动每台群晖 NAS 的直观操作系统，文件管理、备份、照片、监控等能力都以套件形式运行在 DSM 上。

### 群晖 NAS 怎么选？

按用途划分：家庭入门文件存储看 J、Value 系列，进阶的数据保护与性能看 Plus、XS 系列，全闪存与企业负载看 FS、SA、HD、PAS 系列。具体机型对比见[官方产品目录](https://www.synology.cn/zh-cn/products)。

### 群晖 NAS 可以跑 Docker 吗？

群晖提供 Container Manager 容器套件，可在适用机型上运行容器；适用机型和支持的功能以[官方套件页面](https://www.synology.com/en-global/dsm/packages/ContainerManager)为准。

## 来源

- [群晖官方产品目录](https://www.synology.cn/zh-cn/products)
- [Synology DSM 官方页面](https://www.synology.com/en-global/dsm)
- [Synology Container Manager 套件页](https://www.synology.com/en-global/dsm/packages/ContainerManager)
- [群晖 NAS 部署指南（DSM 7.2）](https://kb.synology.cn/zh-cn/UG/CN_Synology_Deployment_Guide_DSM_7_2/1)
