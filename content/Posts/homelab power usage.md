---
title: My Homelabs' electric power draw
subtitle: 
description: 
permalink: 
date: 2025-01-27
publishDate: 2025-01-27
updated: 2025-01-27
draft: true
tags:
  - unfinished
  - homelab
---
 
...


| Device       | State                | Power         | Comment                          |
| ------------ | -------------------- | ------------- | -------------------------------- |
| vanadium     | idle                 | 11.1 W        |                                  |
| vanadium     | CPU 17%              | 20.0 W        | 1 of 6 Cores                     |
| vanadium     | CPU 50%              | 34.6 W        |                                  |
| vanadium     | CPU 100%             | 50.7 W        |                                  |
| datengrab    | idle                 | Base (~ 40 W) | no HDD activity                  |
| datengrab    | File Integrity Check | Base + 15.8 W | 1 reading HDD + active Parity    |
| datengrab    | Parity Check         | ?             | 8 reading HDD + CPU              |
| ds918zoy     | default              | 45.2 W        | (need to log CPU + HDD activity) |
| ds918zoy     | minimal              | ?             | docker & syncthing disabled      |
| ds918zoy     | 10% load             | ?             | ?                                |
| titan        |                      | ?             |                                  |
| fritzbox     | default              | ?             |                                  |
| PoE switches |                      | ?             | for WiFi APs                     |
| UPS          | default              | ?             | not charging                     |
