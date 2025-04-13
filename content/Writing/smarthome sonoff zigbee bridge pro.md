---
title: 
subtitle: 
description: 
permalink: 
date: 2025-04-13
publishDate: 2025-04-13
updated: 2025-04-14
draft: true
tags:
  - unfinished
  - smarthome
  - zigbee
---
 
Hardware:
- [Sonoff ZigBee Bridge Pro (2 pack), Amazon.de, 26,26€](https://www.amazon.de/dp/B09ZQQZSQZ)
- USB-UART connector like [this](https://www.amazon.de/FT232RL-Seriell-Konverter-Breakout-serielle/dp/B07Y2Z1XX9/) FT232 based
    - (optionally) install FT232 drivers from [here](https://ftdichip.com/drivers/vcp-drivers/) (following [this guide](https://www.partitionwizard.com/partitionmanager/ft232r-usb-uart-driver.html))

Setup
    1. Flashing Tasmota
        - The Bridge Pro is [ESP32 based](https://tasmota.github.io/docs/Zigbee/#hardware), which leads to the [blakadder.com template](https://templates.blakadder.com/sonoff_ZBBridge-P.html)
        - Connect the Bridge Pro in flashing mode (GPIO to GND) to PC and open the [web-based Tasmota flasher](https://tasmota.github.io/install/)
        - Select `Tasmota32 Sonoff-ZigbeeBridgePro`, click `Connect` & flash.
    2. Tasmota basic config
        - Power Bridge Pro up (not via PC port), connect laptop/mobile phone to new WiFi `Tasmota-*`, go to IP `192.168.4.1` and enter your home's WiFi credentials. Bridge Pro switches to new WiFi and displays its new IP (alternatively find it via router).
        - [Auto-configuration](https://templates.blakadder.com/sonoff_ZBBridge-P.html): 
          `Configuration` -> `Auto-configuration` -> select `Sonoff ZBPro` -> `Apply configuration`
        - ...
    3. Flash coordinator firmware (guide from [NotEnoughTech](https://notenoughtech.com/home-automation/tasmota-on-sonoff-zb-bridge-pro/#flash))
        - ...
    4. ...