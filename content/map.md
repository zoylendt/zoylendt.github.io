---
title: Map
subtitle: 
description: 
permalink: 
date: 2025-01-20
publishDate: 2025-01-20
updated: 2025-02-12
draft: false
enableToc: false
tags:
  - unfinished
  - blog
  - meta
---

Today is **`= date(today)`**, and it's **`= dateformat(date(now), "HH:MM")`**.

<!-- QueryToSerialize: Today is **`= date(today)`**, and it's **`= dateformat(date(now), "HH:MM")`** -->
 
Folders:
  - [[Braindump]]: Unstructured, mostly short ideas
  - [[Life]]: Cooking, brewing, personal stuff
  - [[Notes]]: Short pages, collections of web resources
  - [[Projects]]: Complete write-ups of projects, meta/overview notes
  - [[Writing]]: Longer guides & tutorials

# Tags by frequency

> [!warning]
> Tags from unpublished pages are also included!

<details>
  <summary>[Click me] Dataview query</summary>
  
```
TABLE WITHOUT ID
count, "#" + join((rows.tags), ", #") as Tags
WHERE tags
FLATTEN tags
GROUP BY tags
GROUP BY length(rows.rows) as count
SORT count DESC
```
text b
</details>

<!-- QueryToSerialize: TABLE WITHOUT ID count, "#" + join((rows.tags), ", #") as Tags WHERE tags FLATTEN tags GROUP BY tags GROUP BY length(rows.rows) as count SORT count DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID count, "#" + join((rows.tags), ", #") as Tags WHERE tags FLATTEN tags GROUP BY tags GROUP BY length(rows.rows) as count SORT count DESC -->

| count | Tags                                                                                                                                                              |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75    | #unfinished                                                                                                                                                       |
| 20    | #docker                                                                                                                                                           |
| 16    | #german                                                                                                                                                           |
| 14    | #quartz                                                                                                                                                           |
| 9     | #media                                                                                                                                                            |
| 8     | #barebone, #github, #markdown, #recipe                                                                                                                            |
| 7     | #books, #homelab, #obsidian, #python, #reading                                                                                                                    |
| 6     | #selfhosted                                                                                                                                                       |
| 5     | #bread, #internal, #untested                                                                                                                                      |
| 4     | #coding, #git, #kitchen_log, #videogames                                                                                                                          |
| 3     | #backlinks-exclude, #blog, #explorer-exclude, #graph-exclude, #guide, #homebrewing, #recents-exclude, #resources, #synology, #vscode                              |
| 2     | #arduino, #backup, #beer, #bookmarks, #brewing, #electronics, #homeassistant, #linux, #proxmox, #syncthing, #wg, #windows                                         |
| 1     | #cheatsheet, #k3s, #latex, #machine_learning, #mead, #meta, #nsfw, #overleaf, #plants, #powershell, #raspi, #review, #sqlite, #todo, #truenas, #unraid, #vm, #vpn |
<!-- SerializedQuery END -->

# Published pages

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name, title) AS "Title", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder", dateformat(updated, "yyyy-MM-dd") AS "Updated" FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Writing" OR "public/Projects"SORT updated DESC WHERE file.name != this.file.name AND draft != "true" AND file.folder != "public/zzz_static_files/my quartz config files" AND draft = false -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name, title) AS "Title", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder", dateformat(updated, "yyyy-MM-dd") AS "Updated" FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Writing" OR "public/Projects"SORT updated DESC WHERE file.name != this.file.name AND draft != "true" AND file.folder != "public/zzz_static_files/my quartz config files" AND draft = false -->

| Title                                                                                                   | Folder    | Updated    |
| ------------------------------------------------------------------------------------------------------- | --------- | ---------- |
| [[resources homelab\|Homelab related resources]]                                      | Writing   | 2025-02-11 |
| [[markdown playground\|Markdown Playground]]                                        | Braindump | 2025-02-05 |
| [[bomann gspe 889 788900 replacement parts\|BOMANN GSPE 889 788900 replacement parts]]   | Life      | 2025-02-05 |
| [[docker cheatsheet\|Docker Cheatsheet]]                                              | Writing   | 2025-02-01 |
| [[docker volume backup with offen\|Backup & restore Docker volumes with Offen]]      | Projects  | 2025-02-01 |
| [[kopia backup server\|Kopia backup server]]                                         | Projects  | 2025-02-01 |
| [[homelab hardware\|My homelab hardware]]                                             | Writing   | 2025-01-31 |
| [[homelab power usage\|My homelabs' electric power draw]]                             | Writing   | 2025-01-31 |
| [[steam game keys\|Surplus Steam Keys]]                                             | Braindump | 2025-01-27 |
| [[storage monitoring with docker\|Storage monitoring with Docker]]                  | Braindump | 2025-01-24 |
| [[obsidian on multiple pc\|Sync your Obsidian instance between multiple PCs]]         | Writing   | 2025-01-23 |
| [[quartz customize\|Customize your Quartz instance]]                                  | Writing   | 2025-01-20 |
| [[quartz frontmatter\|Quartz frontmatter]]                                            | Writing   | 2025-01-20 |
| [[homelab 2.0\|Homelab 2.0]]                                                          | Writing   | 2025-01-16 |
| [[chocolatey\|Chocolately]]                                                           | Writing   | 2025-01-09 |
| [[books antilibrary\|Antilibrary]]                                                       | Life      | 2024-12-05 |
| [[books currently reading\|Books I'm currently reading]]                                 | Life      | 2024-12-05 |
| [[books favorites\|My favorite books]]                                                   | Life      | 2024-12-05 |
| [[books previously read\|Previously read books]]                                         | Life      | 2024-12-05 |
| [[jd2 multi vpn setup\|Multiple jDownloader2 instances behind VPN]]                  | Projects  | 2024-12-04 |
| [[quartz adding dynamic elements\|Adding dynamic elements to Quartz]]                 | Writing   | 2024-11-23 |
| [[chutney 2024-09-22\|Zwiebel-Pfirsisch Chutney]]                                        | Life      | 2024-09-23 |
| [[my brewing setup\|My brewing Setup]]                                                   | Life      | 2024-08-10 |
| [[quartz basic setup\|Basic Quartz setup]]                                            | Writing   | 2024-07-26 |
| [[quartz my config\|My custom Quartz config files]]                                   | Writing   | 2024-07-26 |
| [[quartz sync fork with upstream\|Update your Quartz fork to match upstream changes]] | Writing   | 2024-07-26 |
| [[python csv\|Working with CSV files in Python]]                                      | Writing   | 2024-07-12 |
| [[brot 2024-06-08\|Sauerteig-Kartoffelbrot 2024-06-08]]                                  | Life      | 2024-06-17 |
| [[quartz local development\|Testing Quartz changes with Docker]]                      | Writing   | 2024-06-15 |
| [[quartz starting page\|Quartz starting page]]                                        | Writing   | 2024-06-15 |
| [[proxmox truenas vm\|Deploy a TrueNAS VM in Proxmox]]                                | Writing   | 2024-06-12 |
| [[makemkv\|MakeMKV]]                                                                    | Notes     | 2024-06-07 |
| [[k3s resources\|K3S resources]]                                                      | Writing   | 2024-06-06 |
| [[homebrewing consumables inventory\|Invenory of my Homebrewing Consumables]]            | Life      | 2024-06-05 |
| [[rezept arme ritter\|Rezept: Arme Ritter]]                                              | Life      | 2024-06-05 |
| [[obsidian plugins\|Obsidian Plugins]]                                                | Writing   | 2024-06-05 |
| [[autostart docker containers\|Autostart docker containers]]                          | Writing   | 2024-06-03 |
| [[rezept kartoffelseelen\|Rezept: Konstanzer Kartoffelseelen]]                           | Life      | 2024-05-30 |
| [[proxmox debian12 vm\|Debian 12 VM on Proxmox]]                                      | Writing   | 2024-05-29 |
| [[quartz bugs and enhancement ideas\|Quartz bugs & enhancement ideas]]                | Writing   | 2024-05-23 |
| [[chili hydroponics\|Chili Hydroponics]]                                            | Braindump | 2024-05-22 |
| [[markdown callouts\|Handling Callouts in Markdown]]                                  | Writing   | 2024-05-22 |
| [[markdown collapsible sections\|Collapsible sections in Markdown]]                   | Writing   | 2024-05-22 |
| [[markdown guide\|Markdown Guide]]                                                    | Writing   | 2024-05-22 |
| [[obsidian dataview plugin\|Obsidian Dataview plugin]]                                | Writing   | 2024-05-22 |
| [[obsidian folder structure\|My folder structure for Obsidian]]                       | Writing   | 2024-05-22 |
| [[obsidian guides\|Web resources & guides about Obsidian]]                            | Writing   | 2024-05-22 |
| [[obsidian workflow\|My Obsidian-GitHub-Quartz workflow]]                             | Writing   | 2024-05-22 |
| [[brot 2024-05-19\|Sauerteig-Kartoffelbrot 2024-05-19]]                                  | Life      | 2024-05-20 |
| [[rezept focaccia\|Rezept: Focaccia]]                                                    | Life      | 2024-05-20 |
| [[overleaf letters\|Writing formal german letters on Overleaf]]                       | Writing   | 2024-05-18 |
<!-- SerializedQuery END -->

# Unpublished pages

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name, title) AS "Title", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder", dateformat(updated, "yyyy-MM-dd") AS "Updated" FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Writing" OR "public/Projects" SORT updated DESC WHERE file.name != this.file.name AND draft != "true" AND file.folder != "public/zzz_static_files/my quartz config files" AND draft = true -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name, title) AS "Title", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder", dateformat(updated, "yyyy-MM-dd") AS "Updated" FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Writing" OR "public/Projects" SORT updated DESC WHERE file.name != this.file.name AND draft != "true" AND file.folder != "public/zzz_static_files/my quartz config files" AND draft = true -->

| Title                                                                                                                   | Folder    | Updated    |
| ----------------------------------------------------------------------------------------------------------------------- | --------- | ---------- |
| [[homelab carcosa\|Homelab 2.0: 'Carcosa']]                                                          | Projects  | 2025-02-11 |
| [[coding project exhex\|Coding project: ExHex]]                                                      | Projects  | 2025-02-04 |
| [[wishlist\|Wishlist]]                                                                                   | Life      | 2025-02-02 |
| [[unraid\|Unraid]]                                                                                  | Braindump | 2025-02-01 |
| [[wg expenses\|Ausgaben für die WG]]                                                                     | Life      | 2025-01-31 |
| [[homelab history\|Homelab history]]                                                                  | Writing   | 2025-01-31 |
| [[homelab overview]]                                                                | Writing   | 2025-01-31 |
| [[coding project dedoppler\|Coding project: DeDoppler]]                                              | Projects  | 2025-01-24 |
| [[coding project saltmine\|Coding project: Saltmine]]                                                | Projects  | 2025-01-24 |
| [[blog 2.0\|Blog 2.0]]                                                                              | Braindump | 2025-01-20 |
| [[vscode setup\|My VSCode setup]]                                                                   | Braindump | 2025-01-09 |
| [[handhelds\|Handhelds]]                                                                              | Writing   | 2024-12-31 |
| [[python dev setup\|My Python development setup]]                                                     | Writing   | 2024-12-12 |
| [[rezept ginger bug\|Rezept: Ginger Bug, Ingwerlimonade & Ginger Ale]]                                   | Life      | 2024-11-22 |
| [[egpu setup\|My eGPU setup]]                                                                           | Notes     | 2024-11-18 |
| [[ha esphome\|Adding ESP devices to HomeAssistant through ESPHome]]                                   | Writing   | 2024-08-20 |
| [[book review paradise-1\|Book review: 'Paradise-1' by David Wellington]]                                | Life      | 2024-08-19 |
| [[books song associations\|Books with song associations]]                                                | Life      | 2024-08-11 |
| [[ha zisternensensor\|Building a cistern fill level sensor for HomeAssistant]]                       | Projects  | 2024-08-11 |
| [[books quotes\|Book quotes I liked]]                                                                    | Life      | 2024-08-10 |
| [[nixie clock\|Building a Nixie clock]]                                                              | Projects  | 2024-08-10 |
| [[docker adding dind to image\|Add DockerInDocker functionality to another base image]]               | Writing   | 2024-08-02 |
| [[python nicegui multiplayer game\|Building a multiplayer game with NiceGUI]]                         | Writing   | 2024-08-02 |
| [[kopia with email notifications\|Kopia with email notifications]]                                    | Writing   | 2024-07-29 |
| [[python sqlite\|Working with SQLite in Python]]                                                      | Writing   | 2024-07-06 |
| [[brot 2024-06-15\|Glutenfreie Kartoffelseelen]]                                                         | Life      | 2024-06-17 |
| [[monitoring tool comparison\|Overview of various Docker based monitoring tools]]                     | Writing   | 2024-06-14 |
| [[docker volume for single file\|Single file volumes in docker]]                                      | Writing   | 2024-06-13 |
| [[mount network share as docker volumes\|Mounting network shares (CIFS & NFS) to a docker container]] | Writing   | 2024-06-13 |
| [[unraid nginx log problem\|Unraid UI unavailable due to full NginX error log]]                       | Writing   | 2024-06-09 |
| [[homebrewing resources\|Homebrewing related resources]]                                                 | Life      | 2024-06-05 |
| [[bookmark manager comparison\|Bookmark manager comparison]]                                          | Writing   | 2024-06-05 |
| [[file indexer evaluation\|Comparison of dockerized file indexers]]                                   | Writing   | 2024-06-05 |
| [[docker on Synology\|Running Docker on Synology]]                                                    | Writing   | 2024-05-25 |
| [[bananenmet\|Bananenmet]]                                                                               | Life      | 2024-05-23 |
| [[raspi with read-only filesystem\|Docker on RasPi with read-only filesystem]]                        | Writing   | 2024-05-23 |
| [[browser plugins\|Browser plugins]]                                                                | Braindump | 2024-05-22 |
| [[docker setup for machine learning\|Docker setup for ML]]                                            | Writing   | 2024-05-22 |
| [[find low quality video files\|Find low quality video files]]                                        | Writing   | 2024-05-22 |
<!-- SerializedQuery END -->



