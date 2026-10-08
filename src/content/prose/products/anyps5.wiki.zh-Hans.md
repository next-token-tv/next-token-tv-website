---
entityType: product
entity: anyps5
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'AnyPS5：把 PS5 可执行程序移植到 PC 的开源工具｜Next Token Wiki'
seoDescription: '了解 AnyPS5 的工作方式（relinker 重编译而非模拟）、兼容性现状、GPL-2.0 许可与免责声明，以及 Weekly 节目中的相关讨论。'
---

## AnyPS5 是什么

AnyPS5 是一个开源工具，官方仓库把它描述为"用于把 PS5 可执行程序自动移植到 Linux 和 Windows 的工具"，以 GPL-2.0 许可证发布。按 README 的说明，它包含一个 relinker（重链接器），把可执行文件转换为目标系统的原生格式，并实现了适合动态链接的系统 PRX 库；README 明确写道"Not emulation or separate runtime process"（没有模拟，也没有单独的运行时进程）。着色器重编译器可以生成 SPIR-V 代码并用 SPIRV-Tools 校验。换句话说，它的路径是把 PS5 程序重新编译后在 x86 平台上原生运行，而不是模拟主机硬件。

## 状态与兼容性

AnyPS5 是一个进展公开的工程项目：系统库覆盖率、着色器进度和总体进度以仓库页面上的徽章和[进度页](https://boykopovar.github.io/AnyPS5/)为准，实测过的游戏列在[兼容列表](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/COMPATIBILITY.md)中。README 举的例子是 2D 平台游戏 Dreaming Sarah 在 GTX 1050 Ti 与 i5-7500 的组合上稳定运行 60 fps。哪些游戏能运行、性能如何，应查看兼容列表，不能从工具本身推断。

## 许可与使用边界

项目 README 附有免责声明：AnyPS5 用于互操作、研究、保存与兼容目的，不包含、不分发、也不需要受版权保护的软件、固件、加密密钥或专有库；使用者需自行确保所使用的二进制文件的获取和使用符合适用法律与许可条款。

## 节目中的讨论

在 Weekly #005 的"游戏反编译、Mod 与商业模式"章节中，[歸藏描述 AnyPS5"把 PS5 那套东西在 Windows 的 x86 平台上重新编译"，让 PS5 游戏能在 PC 上运行，并由此展开对侵权边界与一次性买断制游戏商业模式的讨论](/weekly/005/transcript#quote-38591eacb9a93f4e6e36)。他对实现方式（"全部重写""可能用了 PS5 的源码作为参照"）的说法是参与者的转述和个人判断，与官方仓库的描述未必一致；AnyPS5 的实际能力以[官方仓库](https://github.com/boykopovar/AnyPS5)和兼容列表为准。相关背景见 [PlayStation 5](/wiki/products/playstation-5) 与[索尼](/wiki/brands/sony)条目。[第 005 期对应章节](/weekly/005/transcript#chapter-11)有完整上下文。

## 常见问题

### AnyPS5 是 PS5 模拟器吗？

官方 README 明确写"没有模拟，也没有单独的运行时进程"：它把可执行文件转换为原生格式并重新链接，而不是模拟 PS5 硬件。

### AnyPS5 能运行哪些 PS5 游戏？

以官方[兼容列表](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/COMPATIBILITY.md)为准；README 目前举的例子是 Dreaming Sarah。列表之外的游戏不保证可运行，整体进度见项目进度页。

### AnyPS5 是合法的吗？用什么协议开源？

项目以 GPL-2.0（仅此版本）开源。官方免责声明称其用于互操作、研究、保存与兼容目的，不含版权软件、固件或密钥；使用者对所用游戏二进制的合法性负责。

## 来源

- [AnyPS5 官方仓库（GitHub）](https://github.com/boykopovar/AnyPS5)
- [AnyPS5 进度页](https://boykopovar.github.io/AnyPS5/)
- [AnyPS5 兼容列表](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/COMPATIBILITY.md)
