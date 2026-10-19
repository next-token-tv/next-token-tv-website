---
term: vps
locale: zh-Hans
updatedAt: "2026-10-11"
---

## 定义

VPS（Virtual Private Server，虚拟专用服务器）是通过虚拟化技术在物理服务器上划分出来的虚拟机，专属单个用户使用：有独立操作系统、约定好的 CPU/内存/磁盘配额和完整的管理员权限。

## 工作方式

服务商在一台物理服务器上用 hypervisor 运行多台虚拟机，彼此隔离、互不干扰；用户拿到的是一台可以随意安装软件、重启系统的"虚拟机器"，通常按月或按小时付费。

## 使用场景

VPS 适合搭建网站、跑 [app-server](/wiki/terms/app-server) 与数据库、架设代理或做开发测试：比物理服务器便宜，比共享主机自由。管理员一般用 [ssh](/wiki/terms/ssh) 远程登录 VPS 进行管理。

## 易混概念

VPS 本质是租给你的 [virtual-machine](/wiki/terms/virtual-machine)；它是 [server](/wiki/terms/server) 的一种售卖形态，与整机独占的物理服务器（独立服务器）相区别。大规模的弹性资源池则属于 [cloud-computing](/wiki/terms/cloud-computing) 的范畴。
