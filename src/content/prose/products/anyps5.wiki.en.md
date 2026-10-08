---
entityType: product
entity: anyps5
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'AnyPS5: the open-source tool porting PS5 executables to PC | Next Token Wiki'
seoDescription: 'How AnyPS5 works (relinking instead of emulation), its compatibility status, GPL-2.0 license and disclaimer, and what the Weekly show discussed.'
---

## What AnyPS5 is

AnyPS5 is an open-source tool that its official repository describes as "tool for automatic PS5 executables porting to Linux and Windows," released under the GPL-2.0-only license. Per the README, it includes a relinker that converts executables into the target system's native format, plus implementations of system PRX libraries suitable for dynamic linking; the README states plainly that there is "no emulation or separate runtime process." Its shader recompiler produces SPIR-V validated with SPIRV-Tools. In short, its approach is recompiling PS5 executables to run natively on x86 platforms rather than emulating console hardware.

## Status and compatibility

AnyPS5 publishes its engineering progress openly: system library coverage, shader progress, and an overall progress map appear as badges on the repository and on the [project progress page](https://boykopovar.github.io/AnyPS5/). Tested games are listed in the [compatibility list](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/COMPATIBILITY.md). The README's example is the 2D platformer Dreaming Sarah running at a stable 60 fps on a GTX 1050 Ti with an i5-7500. Which games run, and how well, should be checked against the compatibility list rather than inferred from the tool itself.

## License and boundaries

The project README carries a disclaimer: AnyPS5 is intended for interoperability, research, preservation, and compatibility purposes; it does not include, distribute, or require copyrighted software, firmware, cryptographic keys, or proprietary libraries. Users are responsible for ensuring that any binaries they use are obtained and used in accordance with applicable laws and license terms.

## Discussion in the show

In Weekly #005's chapter "游戏反编译、Mod 与商业模式" (game decompilation, mods, and business models), [Guizang described AnyPS5 as recompiling "the PS5 stack" for Windows x86 so PS5 games can run on PC, and used it to open a discussion about infringement boundaries and the business model of premium single-purchase games in the Chinese transcript](/weekly/005/transcript#quote-38591eacb9a93f4e6e36). His characterization ("fully rewritten," "may have used PS5 source as a reference") is a participant's paraphrase and personal judgment and may not match the official repository's description; AnyPS5's actual capabilities are defined by the [official repository](https://github.com/boykopovar/AnyPS5) and its compatibility list. See also the [PlayStation 5](/en/wiki/products/playstation-5) and [Sony](/en/wiki/brands/sony) entries. The [episode 005 chapter](/weekly/005/transcript#chapter-11) has the full context; an English transcript is not available.

## Frequently asked questions

### Is AnyPS5 a PS5 emulator?

No. The official README states there is no emulation and no separate runtime process: it converts executables to native formats and relinks them instead of emulating PS5 hardware.

### Which PS5 games can AnyPS5 run?

Check the official [compatibility list](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/COMPATIBILITY.md); the README's current example is Dreaming Sarah. Games outside the list are not guaranteed to run, and overall progress is tracked on the project page.

### Is AnyPS5 legal, and what license does it use?

The project is open source under GPL-2.0-only. Its disclaimer says it is intended for interoperability, research, preservation, and compatibility purposes and ships no copyrighted software, firmware, or keys; users are responsible for the legality of the game binaries they use.

## Sources

- [AnyPS5 official repository (GitHub)](https://github.com/boykopovar/AnyPS5)
- [AnyPS5 progress page](https://boykopovar.github.io/AnyPS5/)
- [AnyPS5 compatibility list](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/COMPATIBILITY.md)
