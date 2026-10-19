---
term: virtual-machine
locale: en
updatedAt: "2026-10-11"
---

## Definition

A virtual machine (VM) is a computer emulated by a hypervisor on a physical machine, running its own operating system and virtual hardware, isolated from the host and from other VMs.

## How it works

The hypervisor (for example KVM or Hyper-V) maps physical CPUs, memory, and disks into virtual resources and executes VM instructions with hardware-assisted virtualization. It is precisely these CPU extensions that let many VMs share one physical chip efficiently.

## Usage

Cloud servers are, at bottom, VMs rented by the hour; developers use local VMs for isolated environments, and enterprises use them to consolidate servers and build disaster recovery and security sandboxes.

## Related and confusable terms

A [CPU](/en/wiki/terms/cpu) is one of the core resources virtualized into each VM; in GPU virtualization, a physical [GPU](/en/wiki/terms/gpu) can likewise be partitioned into vGPUs shared by several VMs. Containers and VMs both isolate workloads, but containers share the host kernel while each VM runs a complete operating system.
