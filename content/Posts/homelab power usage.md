---
title: My homelabs' electric power draw
subtitle: 
description: 
permalink: 
date: 2025-01-27
publishDate: 2025-01-27
updated: 2025-01-30
draft: true
tags:
  - unfinished
  - homelab
---
 
...


| Device     | State                   | Power   | Comment                          |
| ---------- | ----------------------- | ------- | -------------------------------- |
| vanadium   | idle                    | 11.1 W  |                                  |
| vanadium   | CPU 17%                 | 20.0 W  | 1 of 6 cores run stress-ng       |
| vanadium   | CPU 50%                 | 34.6 W  | 3 of 6 cores run stress-ng       |
| vanadium   | CPU 100%                | 50.7 W  | 6 of 6 cores run stress-ng       |
| datengrab  | idle (10 HDD spun down) | 40.0 W  | no HDD activity                  |
| datengrab  | idle (10 HDD spun up)   | 91.2 W  |                                  |
| datengrab  | File Integrity Check    | ~55.8 W | 1 reading HDD + active Parity    |
| datengrab  | Parity Check            | 87.5 W  | 8 reading HDD + CPU              |
| ds918zoy   | default                 | 45.2 W  | (need to log CPU + HDD activity) |
| ds918zoy   | minimal                 | ?       | docker & syncthing disabled      |
| ds918zoy   | 10% load                | ?       | ?                                |
| titan      |                         | ?       |                                  |
| fritzbox   | default                 | ?       |                                  |
| PoE switch |                         | ?       | for WiFi APs                     |
| UPS        | default                 | ?       | not charging                     |
Different setups:

| Date       | Active devices                                 | Inactive devices                      | Power (NousA5T) | Power (HS110) | Comment           |
| ---------- | ---------------------------------------------- | ------------------------------------- | --------------- | ------------- | ----------------- |
| 2025-01-28 | UPS, FritzBox, Switches + APs, titan, ds918zoy | datengrab, vanadium, RasPi, bernstein | 0 W             | 93.1 W        | average over 2.5h |
|            |                                                |                                       |                 |               |                   |
