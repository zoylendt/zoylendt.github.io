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

Every image can be marked/rated, not only in itself but also in relation to other images. Each type's value is an integer between `0` (the default) and `9`.

| Type    |     | Description                                              | Individuality                                                                                |
| ------- | --- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| gallery |     | The whole gallery.                                       | Same for each page of the gallery.                                                           |
| chapter |     | A chapter. Intended for images connected by a storyline. | All images of the chapter have the same value. (Problem: differenti)                         |
| series  |     | Consecutive, thematic interrelated pages.                | All 'series' pages within a gallery which share the same value are considered to be related. |
| page    |     | A single image. Unrelated to its neighboring pages.      | Individual for each page.                                                                    |
| max     |     | The maximum value of all above.                          | Individual for each page.                                                                    |

