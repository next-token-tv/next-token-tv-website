---
term: ssd
locale: en
updatedAt: "2026-10-11"
---

## Definition

A solid-state drive (SSD) is a storage device that keeps data in NAND flash memory chips managed by a controller, with no moving parts. It has displaced the hard disk drive as the mainstream storage in laptops and data centers.

## How it works

The controller implements a flash translation layer (FTL) that maps logical addresses to physical flash locations while handling write amplification, garbage collection, and wear leveling. SSDs talk to the host over interfaces such as SATA or NVMe over PCIe; the NVMe protocol was designed for flash parallelism and delivers far lower latency than spinning disks.

## Usage

Boot drives, large games and applications, databases, and virtualization environments all benefit from SSD latency. Fast startups and instant app launches in daily use come almost entirely from SSDs.

## Related and confusable terms

The media inside an SSD is [NAND flash](/en/wiki/terms/nand-flash), a chip-level technology; combining several SSDs into a [RAID](/en/wiki/terms/raid) set adds throughput or redundancy, and exposing that storage over a network through a [NAS](/en/wiki/terms/nas) adds yet another layer. SSDs are historically contrasted with hard disk drives (HDDs), which use rotating magnetic platters.
