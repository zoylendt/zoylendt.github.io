---
title: "Coding project: ExHex"
subtitle: 
description: 
permalink: perma/exhex
date: 2024-10-09
publishDate: 2024-10-09
updated: 2025-02-03
draft: true
tags:
  - python
  - coding
  - github
  - docker
  - nsfw
  - unfinished
---
 
>[!info] Basic concept
> This tool's purpose is to scrape meta data of your favorites on the infamous sad panda website. 
> Also it can download your favorite galleries

# Basic concept

ExHex is a dockerized python tool for interacting with the infamous sad panda website.  
Its core features include:
- Web-scrape your currently favorite galleries
- Get additional meta data using the website's API
- Calculate the history of a gallery (it's previous versions)
- Automatically download galleries (based on various options), add metadata (ComicInfo.xml & exhex.json) and save it as CBZ to a 'library'
- Import local files to this library (CBZ, CBR get converted to CBZ first)
- Store various data in CSV files to simplify readability

...

>[!info] Planned features
> - [ ] ...

# Structure

...

## Folder structure

...

## File structure

...

---

# Favorites

Every image can be marked/rated, not only in itself but also in relation to other images:


| Type    |     | Description                                                                |
| ------- | --- | -------------------------------------------------------------------------- |
| gallery |     | The whole gallery. This value is the same for every image of this gallery. |
| chapter |     | A chapter. Intended for images connected by a storyline.                   |
| series  |     |                                                                            |
| page    |     | A single image. Unrelated to its neighboring pages.                        |

