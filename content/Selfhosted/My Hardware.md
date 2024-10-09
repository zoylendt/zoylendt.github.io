---
title: 
description: <Description of the page used for link previews>
date: 2024-05-13
publishDate: 2024-05-13
updated: 2024-10-09
draft: false
tags:
  - note
  - selfhosted
  - unfinished
---
 
# Complete Systems

| ==ID==    | ==System (or MB)==                                                               | ==CPU==       | ==RAM== | ==Usable (Raw) Storage== | ==Usage==       |
| --------- | -------------------------------------------------------------------------------- | ------------- | ------- | ------------------------ | --------------- |
| zalman2   | MSI Z97 Gaming 5, MSI RTX 3060 12GB                                              | i7-4790K      | 16GB    | 4.5TB                    | gaming PC       |
| x1y3      | Lenovo X1 Yoga Gen 3                                                             | i7-8650U      | 16GB    | 0.5TB                    | Laptop          |
| prod400g5 | HP Prodesk 400 G5                                                                | i5-9500T      | 32GB    | 2.25TB                   | substitute PC   |
| m700win   | [Lenovo ThinkCentre M700 Tiny](https://www.ebay.de/itm/235488488122)             | i3-6100T      | 16GB    | 1.25TB                   | PC at home      |
| vanadium  | Lenovo ThinkCentre M720q Tiny                                                    | i5-8400T      | 32GB    | 2.5TB                    | PVE (test)      |
| titan     | [Zotac Zbox CI329](https://www.amazon.de/gp/product/B07H569HM2/)                 | Celeron N4100 | 32GB    | 1TB                      | PVE (always-on) |
| neodym    | [HP EliteDesk 800 G1 USDT](https://www.amazon.de/gp/product/B07F1S9GXS/)         | i5-4570S      | 16GB    | 2.75TB                   | PVE (offsite)   |
| datengrab | [KingnovyPC NAS Motherboard N5105](https://www.amazon.de/gp/product/B0BYVMNMR9/) | Celeron N5105 | 32GB    | 85TB (96.5TB)            | unraid          |
| ds918zoy  | Synology DS918+                                                                  | Celeron J3455 | 8GB     | 20TB (32TB)              | NAS (private)   |
| bernstein | [Synology DS218J](https://www.amazon.de/gp/product/B076S8NSCD/)                  | ARM CPU       | 0.5GB   | 4TB (8TB)                | NAS (backup)    |
| abcnas    | Synology                                                                         |               |         |                          | NAS (business)  |
| ceres     | Strato VPS vc6-16-01                                                             |               |         |                          | VPS             |

## Detailed information

...

### datengrab

- [Case: Fractal Node 804](https://www.fractal-design.com/de/products/cases/node/node-804/black/)
- [Motherboard: ASRock J4105M](https://www.asrock.com/mb/Intel/J4105M/index.asp)
- [12x SATA to PCIe x1 card](https://www.amazon.de/gp/product/B0BNF3XD96/)
	- all HDD are connected through this card
- [NVIDIA Quadro T400 2GB](https://www.amazon.de/gp/product/B0988WSB5V/)
- 10x HDD
- 2x 2.5'' SATA SSD
- 2x 16GB DDR4 DIMM

| Position | Size  | Model ID              | Serial number        | Unraid ID    | SATA cable | Manufacturer, Model                                                  | Comment                                                                                                                                                                |
| -------- | ----- | --------------------- | -------------------- | ------------ | ---------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | 12TB  | TOSHIBA_MG07ACA12TE   | Z1S0A0V1F95G         | Disk 3, sdf  | P1         | Toshiba                                                              |                                                                                                                                                                        |
| 2        | 12TB  | ST12000VN0007         | ZJV0P4MY             | Disk 4, sdi  | P2         | [Seagate IronWolf receritfied](https://www.amazon.de/dp/B084WLXWXD/) | only 2 screws, [insurance until 2028-09-26](https://www.amazon.de/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o01?ie=UTF8&orderID=028-1706085-5276362) |
| 3        | 12TB  | WDC_WD120EDAZ         | 5PK8UN0F             | Disk 6, sdg  | P3         | Western Digital                                                      |                                                                                                                                                                        |
| 4        | 12TB  | WDC_WD120EDBZ         | 5QH17XNF             | Disk 7, sdk  | P4         | Western Digital                                                      |                                                                                                                                                                        |
| 5        | 8TB   | WDC_WD80EDBZ          | VR1UU1EK             | Disk 9, sdh  | blue       | Western Digital                                                      |                                                                                                                                                                        |
| 6        | 12TB  | WDC_WD120EDBZ         | 5QGY3KYF             | Disk 8, sdj  | red        | Western Digital                                                      |                                                                                                                                                                        |
| 7        | 12TB  | WDC_WD120EMFZ         | QBK1R0ST             | Disk 5, sdm  | yellow     | Western Digital                                                      | only 2 screws                                                                                                                                                          |
| 8        | 12TB  | WDC_WD120EMFZ         | Z2K7EBET             | Parity, sdl  | white      | Western Digital                                                      | only 2 screws                                                                                                                                                          |
| 9 (x)    | 4TB   | WDC_WD40EZRZ          | WCC7K0CA1EJ6         | Disk 2, sde  | black      | Western Digital                                                      | 'WD_Charlie'                                                                                                                                                           |
| 10 (y)   | 4TB   | WDC_WD40EZRZ          | WCC7K0YNADYX         | Disk 1, sdd  | black      | Western Digital                                                      | 'WD_Bravo'                                                                                                                                                             |
| -        | 240GB | KINGSTON_SA400S37240G | 50026B778237DDA0     | Cache, sdb   | black      | [Kingston A400](https://www.amazon.de/gp/product/B01N5IB20Q/)        | SATA-SSD                                                                                                                                                               |
| -        | 240GB | Intenso_SSD_Sata_III  | AA000000000000057135 | Cache 2, sdc | black      | [Intenso](https://www.amazon.de/gp/product/B01D3ACIR6/)              | SATA-SSD                                                                                                                                                               |
| -        | 32GB  | -                     | -                    | Boot, sda    | -          | [SanDisk Cruzer Blade](https://www.amazon.de/gp/product/B005FYNT3G/) | Boot USB                                                                                                                                                               |

# Other homelab devices

| ==ID==         | ==Description== | ==Usage== |
| -------------- | --------------- | --------- |
| FRITZ!Box 7490 |                 | Router    |
|                |                 |           |

# Unused hardware

## Complete PC systems

- [MINIS Forum GK41](https://www.amazon.de/gp/product/B089CSVKV8/)
	- ...
- [troniconet APU4c4](https://www.pcengines.ch/apu4c4.htm)
	- ...
- [Compulab fitlet2](https://fit-iot.com/web/products/fitlet2/)
	- ...

## PC parts

- [8x SATA to PCIe x1 card](https://www.amazon.de/gp/product/B07Z89J2M5/) (link refers to 6 port version)
- [6x SATA to M.2 NVMe card](https://www.amazon.de/gp/product/B0BWYXLNFT/)
- [N5105 NAS motherboard](https://www.amazon.de/gp/product/B0BYVMNMR9/)

## RasPi & accessories

...

## µController & accessories

...