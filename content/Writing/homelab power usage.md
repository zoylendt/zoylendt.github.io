---
title: My homelabs' electric power draw
subtitle: 
description: 
permalink: 
date: 2025-01-27
publishDate: 2025-01-27
updated: 2025-02-19
draft: false
tags:
  - unfinished
  - homelab
---
 
# Introduction

Here I try to figure out how much electricity is consumed by which device in my homelab, depending on its activity.

# Testing setup

For now I'm using two smarthome devices connected to HomeAssistant to collect various metrics:
- **TP-Link HS110**, a single-socket WiFi plug, integrated into HA through the "tp-link" plugin.  
  It's located in front of the UPS, so it collects the usage of everything (including the UPS) but is offline during a power outage.
- **Nous A5T**, a three-socket-outlet which runs Tasmota and reports to HA via MQTT over WiFi.  
  It has three 220V sockets which can be individually switched on or off (but the power usage metrics are only collected for the total unit):
  - `datengrab`, my Unraid server
  - `vanadium`, my PVE for testing purposes
  - `RasPi`, a currently unused RaspberryPi 4 (-> this will likely change in the future)
  - it also has three USB sockets, that can be toggled on or off as a whole. Currently the server cabinet's exhaust fan is connected here.

# Calculated power draw

## Individual devices

| Device     | State                   | Power   | Comment                                                                         |
| ---------- | ----------------------- | ------- | ------------------------------------------------------------------------------- |
| vanadium   | idle                    | 11.1 W  | no VM online                                                                    |
| vanadium   | CPU 17%                 | 20.0 W  | 1 of 6 cores run stress-ng                                                      |
| vanadium   | CPU 50%                 | 34.6 W  | 3 of 6 cores run stress-ng                                                      |
| vanadium   | CPU 100%                | 50.7 W  | 6 of 6 cores run stress-ng                                                      |
| datengrab  | idle (10 HDD spun down) | 40.0 W  | no HDD activity                                                                 |
| datengrab  | idle (10 HDD spun up)   | 91.2 W  | HDD auto spin-down disabled                                                     |
| datengrab  | File Integrity Check    | 55.8 W* | 1 reading HDD + active Parity                                                   |
| datengrab  | Parity Check            | 87.5 W* | 8 reading HDD + CPU                                                             |
| ds918zoy   | default                 | 48.4 W  | (need to log CPU + HDD activity)                                                |
| ds918zoy   | minimal                 | ?       | docker & syncthing disabled                                                     |
| ds918zoy   | 100% load               | 53.6 W  | `docker run -it --rm polinux/stress-ng --cpu 4 --io 1 --verbose --timeout 3600` |
| titan      | idle                    | 6.1 W   | no VM,  ~1.2% of 4 CPU                                                          |
| titan      | default (~9% of 4 CPU)  |         |                                                                                 |
| titan      | 4 CPU @ 100%            | 10.2 W  | `stress-ng --cpu 4 --timeout 150m --metrics-brief`                              |
| fritzbox   | default                 | ?       |                                                                                 |
| PoE switch |                         | ?       | for WiFi APs                                                                    |
| UPS        | default                 | ?       | not charging                                                                    |
| RasPi      |                         |         |                                                                                 |
Note: * = only tested with HS110, A5T might yield more accurate results

## Multiple devices together

| Date       | Active devices                                 | Inactive devices                      | Power (NousA5T) | Power (HS110) | Comment           |
| ---------- | ---------------------------------------------- | ------------------------------------- | --------------- | ------------- | ----------------- |
| 2025-01-28 | UPS, FritzBox, Switches + APs, titan, ds918zoy | datengrab, vanadium, RasPi, bernstein | 0 W             | 93.1 W        | average over 2.5h |
| 2025-02-17 | ds918zoy                                       |                                       | 48.4 W          | -             | average over 9h   |

# Ideas to improve the testing setup

- connect `ds918zoy` to the Nous A5T (instead of the RasPi) to better understand its consumption
- similarly for `titan` (only for a short duration, no point in having the ability to turn it off since it's supposed to run 24/7 anyway)
- shortly connect `titan` to another external outlet and switch `vanadium`, `dategrab` & `ds918zoy` off to examine the power draw of UPS, Router and Switches
- connect `bernstein218` to (maybe a new) switchable outlet to wake it if needed? Wake-on-LAN seems to be unreliable
  - or move `bernstein218` to a remote location since it's only supposed to take backups anyway?

# Notes on accuracy

- Test if a power draw of <0.5W is rounded to 0 and if the total usage is updated -> requires a device with known low power draw -> mobile phone charging brick?
- For HS110 TP-Link claims [`3%-5%` accuracy](https://tp-link.com/us/support/faq/241) and it itself consumes below 2W.
- A5T reports with 1W accuracy on its web UI, but only 10W accuracy are shown in HA