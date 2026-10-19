---
term: raid
locale: en
updatedAt: "2026-10-11"
---

## Definition

RAID (redundant array of independent disks) combines multiple physical drives into one logical storage unit, using striping, mirroring, or parity to gain performance, redundancy, or both.

## How it works

RAID 0 stripes data across drives for throughput with no redundancy; RAID 1 mirrors data between two drives; RAID 5 and 6 use distributed parity and survive the loss of one or two drives respectively; RAID 10 combines mirroring and striping. The array can be managed by a hardware controller or by software in the operating system.

## Usage

Servers, workstations, and NAS boxes use RAID for availability: a failed drive is swapped and the array rebuilds online while the workload keeps running.

## Related and confusable terms

RAID is not a backup — it protects against a drive failing, not against deletion, ransomware, or the loss of an entire machine. A RAID array is the usual storage substrate inside a [NAS](/en/wiki/terms/nas), and the array itself can be built from [SSDs](/en/wiki/terms/ssd) or hard drives.
