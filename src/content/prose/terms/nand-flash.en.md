---
term: nand-flash
locale: en
updatedAt: "2026-10-11"
---

## Definition

NAND flash is a non-volatile storage technology: it keeps its data with the power off. Its memory cells are wired in series in a pattern resembling a NAND gate, which gives the technology its name, and it underlies most solid-state storage.

## How it works

NAND represents bits as electrical charge trapped in floating-gate or charge-trap cells. Reads and writes happen at page granularity while erasure happens on much larger blocks, and a block must be erased before it is rewritten. Cells wear out over erase cycles, so controllers apply wear leveling and error-correcting codes (ECC); to raise density, the industry stores multiple bits per cell in SLC, MLC, TLC, and QLC arrangements.

## Usage

SSDs, phone storage, memory cards, and USB drives are all built on NAND media; data centers likewise run databases and virtualization workloads on NAND arrays.

## Related and confusable terms

An [SSD](/en/wiki/terms/ssd) is a finished device built on NAND media plus a controller and an interface — the two live at different layers. [RAID](/en/wiki/terms/raid) and [NAS](/en/wiki/terms/nas) are ways of organizing multiple storage devices for redundancy and sharing, unrelated to the chip-level technology itself.
