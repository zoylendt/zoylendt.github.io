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


| Legion | Name               | Primarch           | Homeworld | Flagship              |
| ------ | ------------------ | ------------------ | --------- | --------------------- |
| 1      | Dark Angels        | Lion El'Jonson     | Caliban   | Invincible Reason     |
| 3      | Emperor's Children | Fulgrim            | Chemos    | Pride of the Emperor  |
| 4      | Iron Warriors      | Perturabo          | Olympia   | Iron Blood            |
| 5      | White Scars        | Jaghatai Khan      | Chogoris  | Swordstorm            |
| 6      | Space Wolves       | Leman Russ         | Fenris    | Hrafnkel              |
| 7      | Imperial Fists     | Rogal Dorn         | Inwit     | Phalanx               |
| 8      | Night Lords        | Konrad Curze       | Nostramo  | Nightfall             |
| 9      | Blood Angels       | Sanguinius         | Baal      | Red Tear              |
| 10     | Iron Hands         | Ferrus Manus       | Medusa    | Fists of Iron         |
| 12     | World Eaters       | Angron             | Nuceria   | Conqueror             |
| 13     | Ultramarines       | Roboute Guilliman  | Macragge  | Macragge's Honour     |
| 14     | Death Guard        | Mortarion          | Barbarus  | Terminus Est          |
| 15     | Thousand Sons      | Magnus the Red     | Prospero  | Photep                |
| 16     | Sons of Horus      | Horus Lupercal     | Cthonia   | Vengeful Spirit       |
| 17     | Word Bearers       | Lorgar Aurelian    | Colchis   | Fidelitas Lex         |
| 18     | Salamanders        | Vulkan             | Nocturne  | Flamewrought          |
| 19     | Raven Guard        | Corvus Corax       | Lycaeus   | Shadow of the Emperor |
| 20     | Alpha Legion       | Alpharius / Omegon | ?         | Alpha / Beta          |
