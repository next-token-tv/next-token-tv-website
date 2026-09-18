---
entityType: product
entity: linux
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Linux kernel and distribution model: official site, docs, and boundaries | Next Token Wiki'
seoDescription: 'What the Linux kernel is, where kernel.org and the official documentation live, how the kernel relates to distributions, and how the show discussed Linux.'
---

## The Linux kernel and the distribution model

Linux usually refers to the family of open operating systems built around the Linux kernel. The kernel was first released by Linus Torvalds on September 17, 1991, under the GNU GPL v2 license, and Torvalds remains its lead maintainer. The kernel alone is only the operating system core; a complete, usable system comes from a distribution that packages the kernel with the GNU toolchain, package management, and a desktop environment. Distributions are numerous and varied, so this page does not maintain a distribution list — check each distribution's official website for specifics.

[kernel.org](https://www.kernel.org/) is the official archive of Linux kernel source code (The Linux Kernel Archives), operated by the nonprofit Linux Kernel Organization. It publishes tarballs, patches, PGP signatures, and Git repositories for the mainline, stable, and longterm branches; kernel development documentation lives at [docs.kernel.org](https://docs.kernel.org/).

## Uses and boundaries

The Linux kernel has long powered servers, supercomputers, embedded devices, and mobile devices (Android is built on it), while desktop use is the smaller part of the ecosystem. Whether and which distribution to adopt depends on the software ecosystem, hardware support, and maintenance model a user needs — differences that live at the distribution level, not the kernel level.

Downloading and compiling kernel source is mainly for kernel development and debugging; ordinary users typically receive kernel updates through a distribution. For a community-maintained example of a workflow-focused distribution, see the [Omarchy](/en/wiki/products/omarchy) entry and its official site.

## Discussion in the show

- In Weekly #001’s chapter “Omarchy：一个 Agent 优先的 Linux 是什么体验” (the Omarchy chapter of the [Chinese transcript](/weekly/001/transcript#chapter-12)), [Xiangyang Qiaomu says that after installing Omarchy he could not handle the configuration and the network was broken, so he installed ZCode to operate it for him](/weekly/001/transcript#quote-87b8cb106894349cb85f); Guizang mentions the annoyance that Macs cannot run Linux directly, and Orange argues Linux has good odds in China’s government and enterprise sector. These are participant experiences, not a distribution review.
- In Weekly #001’s chapter “Grok Bot：为什么 Agent 需要一台永不下线的云电脑”, while discussing a cloud computer’s operating system, [Guizang says it “looks like Linux”](/weekly/001/transcript#quote-0dec1533ecbd8ac82f36).
- In Weekly #002’s chapter “Harness 更新太快，插件和工作流如何跟上”, [Xiangyang Qiaomu relays Yang Pan’s analogy comparing fast-iterating harnesses to early Linux: if you want stability, wait for someone else to package the distribution](/weekly/002/transcript#quote-1aa8c2eff59cd4bedee9).

## Frequently asked questions

### What is Linux?

Linux is a family of open operating systems based on the Linux kernel, first released in 1991 by Linus Torvalds and licensed under GPLv2. Complete systems are assembled by distributions that package the kernel with supporting software, and the family is widely used on servers, embedded devices, mobile (Android), and desktops. See [kernel.org](https://www.kernel.org/).

### How does Linux relate to distributions like Ubuntu?

The kernel is maintained by the kernel community at kernel.org; distributions such as Ubuntu, Fedora, and Arch each package the kernel with tooling, package managers, and a desktop into a complete system and handle updates. Distribution choice is about ecosystem and maintenance at the distribution level — check each distribution’s official website.

### Where is the official Linux kernel website?

The official site for kernel source and releases is [kernel.org](https://www.kernel.org/), with documentation at [docs.kernel.org](https://docs.kernel.org/). Each distribution has its own official website.

### Where should I start if I want to learn the Linux kernel?

The official documentation at [docs.kernel.org](https://docs.kernel.org/) is the authoritative entry point, and kernel.org links to mailing lists, the patch workflow, and Git repositories. Beginners usually start with C and operating-system fundamentals plus a distribution that is easy to experiment on.

## Sources

- [The Linux Kernel Archives (kernel.org)](https://www.kernel.org/)
- [Linux kernel documentation](https://docs.kernel.org/)
- [Wikipedia: Linux](https://en.wikipedia.org/wiki/Linux)
