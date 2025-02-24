---
title: WakeOnLAN via linux terminal
subtitle: 
description: 
permalink: 
date: 2025-02-24
publishDate: 2025-02-24
updated: 2025-02-24
draft: false
tags:
  - unfinished
  - linux
  - homelab
---
 
Following [this guide](https://www.cyberciti.biz/tips/linux-send-wake-on-lan-wol-magic-packets.html).

Install via package manager (also available for ARMv8): `sudo apt install etherwake`

Example command to wake a server (here: prod400g5): `wakeonlan 38:22:E2:29:5F:C7`

Get MAC from remote machine: `ping -c 4 server3 && arp -n`

---

List of my homelab devices with enabled WoL:

| ID         | Local IP       | Tailscale IP   | MAC                 |
| ---------- | -------------- | -------------- | ------------------- |
| prod400g5  | 192.168.178.27 | 100.111.242.61 | `38:22:E2:29:5F:C7` |
| zalman2    |                |                |                     |
| m700       |                |                |                     |
| bernstein2 |                |                |                     |
| ds918zoy   |                |                |                     |
