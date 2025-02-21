---
title: Homelab overview
subtitle: 
description: 
permalink: 
date: 2025-01-31
publishDate: 2025-01-31
updated: 2025-02-22
draft: true
tags:
  - unfinished
  - homelab
---
 

| IP           | Device        | Type       | Function                          | Tailscale       | Command        |
| ------------ | ------------- | ---------- | --------------------------------- | --------------- | -------------- |
| 172.16.40.1  | FritzBox      | Router     | Router (AVM FritzBox 7390)        | -               |                |
| 172.16.40.2  | -             | container  | AdGuard Home container @ ds918zoy | -               |                |
| 172.16.40.3  | ds918zoy      | NAS        | Synology NAS                      | 100.95.153.74   |                |
| 172.16.40.4  | bernstein     | NAS        | Synology NAS for backups          | 100.115.123.41  | mostly offline |
| 172.16.40.5  | datengrab     | NAS        | Unraid NAS                        | 100.122.132.66  |                |
| 172.16.40.   |               |            |                                   |                 |                |
| 172.16.40.19 | homeassistant | VM @ titan |                                   | 100.124.141.41  |                |
| 172.16.40.22 | titan         | PVE        |                                   | 100.124.115.133 |                |
| 172.16.40.23 | vanadium      | PVE        |                                   | 100.125.38.76   |                |
|              |               |            |                                   |                 |                |


Potential name schemes:
- Signalis planets/locations
    - Sun
    - Buyan
    - Vineta
    - Kitezh
    - Rotfront
    - Heimat
    - Leng
    - Oort cloud
    - S23-Sierpinski
    - Penrose-512
    - Nowhere
    - Mandelbrot
    - Black shore
    - Rotfront Interplanetar Station 06
- W40K Legions homeworlds
    - Baal (Blood Angels)
    - Barbarus (Death Guard)


| Legion | Name               | Primarch       | Homeworld | Flagship |
| ------ | ------------------ | -------------- | --------- | -------- |
| 1      | Dark Angels        | Lion El'Jonson | Caliban   |          |
| 3      | Emperor's Children | Fulgrim        | Chemos    |          |
| 4      | Iron Warriors      | Perturabo      | Olympia   |          |
| 5      | White Scars        | Jaghatai Khan  | Chogoris  |          |
| 6      | Space Wolves       | Leman Russ     | Fenris    |          |
| 7      | Imperial Fists     | Rogal Dorn     | Inwit     |          |
| 8      | Night Lords        | Konrad Curze   | Nostramo  |          |
| 9      | Blood Angels       | Sanguinius     | Baal      |          |
| 10     | Iron Hands         | Ferrus Manus   | Medusa    |          |
| 12     | World Eaters       | Angron         |           |          |
| 13     |                    |                |           |          |
| 14     |                    |                |           |          |
| 15     |                    |                |           |          |
| 16     |                    |                |           |          |
| 17     |                    |                |           |          |
| 18     |                    |                |           |          |
| 19     |                    |                |           |          |
| 20     |                    |                |           |          |
