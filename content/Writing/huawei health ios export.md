---
title: Huawei Health export on iOS
subtitle: 
description: 
permalink: 
date: 2025-04-30
publishDate: 2025-04-30
updated: 2025-04-30
draft: true
tags:
  - unfinished
  - smartwatch
  - ios
---
 
Apparently the [iOS version of the Huawei Health app (Europe edition)](https://apps.apple.com/de/app/huawei-health-europa/id6474852610) doesn't have the function to export the collected data in an easy way (e.g. CSV).

Possible workarounds:
  - only sync data to [Apple Health](https://apps.apple.com/de/app/apple-health/id1242545199) and export from there
    - is it accurate?
    - how to do that?
  - possible third-party iOS health export apps:
    - [Simple Health Export CSV](https://apps.apple.com/de/app/simple-health-export-csv/id1535380115)
      - free
      - local only -> great!
      - no automation (?)
      - only data from Apple Health (?)
    - [Health Export CSV](https://apps.apple.com/de/app/health-export-csv/id1477944755)
      - 3€ (+ monthly fee option -> apparently mandatory? [FAQ](https://remote.healthexport.app/faq.html) not available)
      - upload to their servers
      - automation possible
      - only data from Apple Health (?)
    - [Health Sync](https://apps.apple.com/de/app/health-sync-by-appyhapps/id6480174471)
      - costs 4€ (one-time, possibly restore purchase from Android?)
      - problem: export to Google Drive is only available on Android!
      - possible target services on iOS: Fitbit, Intervals.icu, Runalyze, Strava
    - [Health Auto Export - JSON+CSV](https://apps.apple.com/de/app/health-auto-export-json-csv/id1115567069)
      - one-time payment (3-30€) or monthly
      - many targets (HomeAssistant, MQTT, CSV, GDrive, ...)
      - automation possible
      - only data from Apple Health (?)
    -  ...
  - virtualize Android on Proxmox ([BlissOS](https://blissos.org/index.html#download), [YT guide](https://www.youtube.com/watch?v=LEyElt_yP50))
    - sync data from Huawei's iOS app to Huawei's Cloud and then to the Huawei Health App within the Android VM
    - export data from within the app (third-party automation?) or via [Health Sync](https://play.google.com/store/apps/details?id=nl.appyhapps.healthsync) to GDrive
    - data from Apple Health missing
  - periodically request DSGVO data export from Huawei
    - https://github.com/CTHRU/Hitrava?tab=readme-ov-file#step-1---request-your-data-in-the-huawei-health-app
    - complicated manual steps -> hard/impossible to automate
    - takes up to a week to generate -> no live/recent data
    - (apparently) encrypted, needs tool to decrypt
  - get DB file from iOS app & manually extract data -> https://reddit.com/r/hwatch/s/F4pJSPhikh
  - ...
