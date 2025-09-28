---
title: My homelab hardware
subtitle: 
description: 
permalink: 
date: 2024-05-13
publishDate: 2024-05-13
updated: 2025-01-31
draft: false
tags:
  - homelab
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
| datengrab | [KingnovyPC NAS Motherboard N5105](https://www.amazon.de/gp/product/B0BYVMNMR9/) | Celeron J4105 | 32GB    | 88TB (99.5TB)            | unraid          |
| ds918zoy  | Synology DS918+                                                                  | Celeron J3455 | 8GB     | 20TB (32TB)              | NAS (private)   |
| bernstein | [Synology DS218J](https://www.amazon.de/gp/product/B076S8NSCD/)                  | ? (ARM)       | 0.5GB   | 4TB (8TB)                | NAS (backup)    |
| abcnas    | Synology                                                                         |               |         |                          | NAS (business)  |
| ceres     | Strato VPS vc6-16-01                                                             |               |         |                          | VPS             |

## Detailed information

...

### uConsole

[Custom Debian image](https://forum.clockworkpi.com/t/bookworm-6-6-y-for-the-uconsole-and-devterm/13235)

Used image: 
  - Name: ClockworkPi-CM4-Bookworm-6.6.60.img.xz
  - Date: added 2024-11-09 22:24 to [mega.nz](https://mega.nz/folder/LSInGD6J#0YezWX8xC4PkbyForgl1Hw/folder/WG4UnYxb)
  - Size: 1138020624 Bytes : 1085 MiB
  - SHA256: 74744a0720c0af38b64f22855da25c4ca2134c85c76ed95a7867069bded11fda
  - Written to 64GB µSD with RPi-Imager v1.9.0, no custom options

Setup Notes:
  - Country etc: Germany (english language and keyboard)
  - Username/PW: (Bitwarden -> 'uConsole')

### datengrab

- [Case: Fractal Node 804](https://www.fractal-design.com/de/products/cases/node/node-804/black/)
- [Motherboard: ASRock J4105M](https://www.asrock.com/mb/Intel/J4105M/index.asp)
    - possible alternatives:
        - https://www.reddit.com/r/homelab/comments/1koa8tc/ultimate_matx_12x_sata_3x_25gbe_2_m2_4_pcie/
        - https://www.amazon.de/-/en/Motherboard-2-5GbE-Desktop-Support-PCIe5-0/dp/B0FMNT84XZ/
- [12x SATA to PCIe x1 card](https://www.amazon.de/gp/product/B0BNF3XD96/)
	- all HDD are connected through this card
- [NVIDIA Quadro T400 2GB](https://www.amazon.de/gp/product/B0988WSB5V/)
- 10x HDD
- 2x 2.5'' SATA SSD
- 2x 16GB DDR4 DIMM

Currently installed drives:

| ==Position==  | ==Size== | ==Model ID==          | ==Serial number==    | ==Unraid ID== | ==Manufacturer, Model==                                                                                                                 | ==Comment==                                                                                                                                                            |
| ------------- | -------- | --------------------- | -------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R2            | 12TB     | ST12000VN0007         | ZJV1T2Q3             | Disk 6, sdd   | [Seagate IronWolf receritfied](https://www.amazon.de/dp/B084WLXWXD/)                                                                    | only 2 screws, [insurance until 2028-12-15](https://www.amazon.de/gp/your-account/order-details?ie=UTF8&orderID=305-1686162-1449121)                                   |
| L2            | 12TB     | ST12000VN0007         | ZJV0P4MY             | Disk 7, sdf   | [Seagate IronWolf receritfied](https://www.amazon.de/dp/B084WLXWXD/)                                                                    | only 2 screws, [insurance until 2028-09-26](https://www.amazon.de/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o01?ie=UTF8&orderID=028-1706085-5276362) |
| R3            | 12TB     | WDC_WD120EDAZ         | 5PK8UN0F             | Disk 2, sdi   | Western Digital                                                                                                                         |                                                                                                                                                                        |
| R1            | 12TB     | WDC_WD120EDBZ         | 5QH17XNF             | Disk 3, sdg   | Western Digital                                                                                                                         |                                                                                                                                                                        |
| R4            | 8TB      | WDC_WD80EDBZ          | VR1UU1EK             | Disk 5, sde   | Western Digital                                                                                                                         |                                                                                                                                                                        |
| L3            | 12TB     | WDC_WD120EDBZ         | 5QGY3KYF             | Disk 4, sdk   | Western Digital                                                                                                                         |                                                                                                                                                                        |
| L4            | 12TB     | WDC_WD120EMFZ         | QBK1R0ST             | Disk 1, sdh   | Western Digital                                                                                                                         | only 2 screws                                                                                                                                                          |
| L1            | 12TB     | WDC_WD120EMFZ         | Z2K7EBET             | Parity, sdj   | Western Digital                                                                                                                         | only 2 screws                                                                                                                                                          |
| R5            | 12TB     | TOSHIBA_MG07ACA12TE   | Z1S0A0V1F95G         | Dev 1         | Toshiba                                                                                                                                 | failed previously, only 2 screws, hot spare, does not show up often                                                                                                    |
| L5            | 12TB     | ST12000VN0007         | ZJV3CR90             | Disk 8, sdl   | [Seagate IronWolf receritfied](https://www.amazon.de/dp/B084WLXWXD/)                                                                    | only 2 screws, [insurance until 2028-12-15](https://www.amazon.de/gp/your-account/order-details?ie=UTF8&orderID=305-1686162-1449121), hot spare                        |
| -             | 240GB    | KINGSTON_SA400S37240G | 50026B778237DDA0     | Cache, sdb    | [Kingston A400](https://www.amazon.de/gp/product/B01N5IB20Q/)                                                                           | SATA-SSD                                                                                                                                                               |
| -             | 240GB    | Intenso_SSD_Sata_III  | AA000000000000057135 | Cache 2, sdc  | [Intenso](https://www.amazon.de/gp/product/B01D3ACIR6/)                                                                                 | SATA-SSD, always reports 0 °C                                                                                                                                          |
| -             | 32GB     | -                     | -                    | Flash, sda    | [SanDisk Cruzer Blade](https://www.amazon.de/gp/product/B005FYNT3G/) via [MB USB Adapter](https://www.amazon.de/gp/product/B004FUHNJW/) | Boot USB                                                                                                                                                               |

Previously installed drives:

| ==former Unraid ID== | ==Size== | ==Model ID==        | ==Serial number== | ==Manufacturer, Model== | ==Failure==                          | ==Comment==                            |
| -------------------- | -------- | ------------------- | ----------------- | ----------------------- | ------------------------------------ | -------------------------------------- |
| Disk 3, sdf          | 12TB     | TOSHIBA_MG07ACA12TE | Z1S0A0V1F95G      | Toshiba                 | automatically disabled on 2024-12-03 | replaced on 2024-12-21 with `ZJV1T2Q3` |
| Disk 4, sdi          | 8TB      | ST8000AS0003        | WCT0BRSD          | Seagate Exos 5E8        | automatically disabled on 2024-09-20 | replaced on 2024-10-01 with `ZJV0P4MY` |
| Disk 2, sde          | 4TB      | WDC_WD40EZRZ        | WCC7K0CA1EJ6      | Western Digital         | none (removed due to old age)        | 'WD_Charlie', removed on 2024-12-31    |
| Disk 1, sdd          | 4TB      | WDC_WD40EZRZ        | WCC7K0YNADYX      | Western Digital         | none (removed due to old age)        | 'WD_Bravo', removed on 2024-12-31      |
| Disk 3, sdj          | ?        | WDC_WD80EZAZ        | 4DG8XW2Z          | ?                       | automatically disabled on 2023-09-07 | replaced on 2023-09-14 with `???`      |

Change log:

| Date       | Action                                                                                                                                   | Comment                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 2024-12-21 | replaced failed `Z1S0A0V1F95G` with `ZJV1T2Q3`                                                                                           | `Z1S0A0V1F95G` was disabled on ...                                                                                                      |
| 2024-12-21 | replaced 4 [old SATA cables](https://www.amazon.de/gp/product/B00V7NOJIS/?th=1) with [new](https://www.amazon.de/gp/product/B00KCS9254/) |                                                                                                                                         |
|            |                                                                                                                                          |                                                                                                                                         |
| 2023-09-14 | replaced failed `4DG8XW2Z` with `???`                                                                                                    |                                                                                                                                         |
| 2024-12-31 | [removed](https://docs.unraid.net/unraid-os/manual/storage-management/#removing-data-disks) `WCC7K0CA1EJ6` & `WCC7K0YNADYX`              | [reset array config](https://docs.unraid.net/unraid-os/manual/storage-management/#reset-the-array-configuration) (rearranged Disk list) |
| 2024-12-31 | added `Z1S0A0V1F95G` & `ZJV3CR90` (as hot spare, not part of array)                                                                      |                                                                                                                                         |
|            |                                                                                                                                          |                                                                                                                                         |
| 2025-09-27 | upgrade to 7.1.4                                                                                                                         | manual img-backup of boot usb -> `unraid_7.1.4_20250927.img`                                                                            |
| 2025-09-28 | added `ZJV3CR90` as Disk 8                                                                                                               | was previously spare disk 2                                                                                                             |

# Other homelab devices

| ==ID==         | ==Description==                 | ==Usage== | ==Purchased==                                                                                                                                                    |
| -------------- | ------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FRITZ!Box 7490 |                                 | Router    | ?                                                                                                                                                                |
| Nous A5T       | smart powerline with monitoring |           | [Mediarath.de, 2023-08-26](https://mediarath.de/products/nous-a5t-3-fach-wifi-steckerleiste-usb-verbrauchsmessung-tasmota-opt-calibrated?variant=43730944229644) |

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

