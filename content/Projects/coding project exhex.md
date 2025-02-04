---
title: "Coding project: ExHex"
subtitle: 
description: 
permalink: perma/exhex
date: 2024-10-09
publishDate: 2024-10-09
updated: 2025-02-04
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

## Folder structure and files

...

---

# Favorites

Every image can be marked/rated, not only in itself but also in relation to other images. Each type's value is an integer between `0` (the default) and `9`.

| Type    | Description                                              | Individuality                                                                                                         |
| ------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| gallery | The whole gallery.                                       | Same for each page of the gallery.                                                                                    |
| chapter | A chapter. Intended for images connected by a storyline. | All images of the chapter have the same value. (Problem: differentiate between neighboring chapters with same value?) |
| series  | Thematic interrelated pages. Can be consecutive.         | All 'series' pages within a gallery which share the same value are considered to be related.                          |
| page    | A single image, unrelated to its neighboring pages.      | Individual for each page.                                                                                             |
| max     | The maximum value of all above.                          | Individual for each page.                                                                                             |

Currently I have no idea how to actually change this values (ideally while reading, so it somehow has to be integrated into the reader or I have to build a custom reading tool). Nevertheless I want these values to be part of the `exhex.json` structure from the beginning. If I build a custom CBZ reading tool I want it to have a function to go to a random (maybe weighed by favorite value, or with a minimum value) page/series/chapter/gallery and also go from a random page to its related series/chapter/gallery, it's next/first page in this category and so on. In addition to save this values for each page I want to also save the maximum value for each type for the whole gallery.  
It also might be worth to consider how to actually save the data in the `exhex.json`: 
- a single string for each image, like `'fav_str': 'gcspm'` where each character is replaced with its value, so `'00000'` per default -> 17 bytes per image
- a dictionary, like `fav_dict= {'gallery': 0, 'chapter': 0, 'series': 0, 'page': 0, 'max': 0}` -> 72 bytes per image
For comparison, each image's SHA256 string has 64 bytes, MD5 has 32 bytes (calculated with [this tool](https://mothereff.in/byte-counter)).

# Additional data
When importing local CBZ into the library there needs to be a way to preserve information like the original filename, the path and so on. If the imported VBZ comes from Calibre (or a similar tool), there might also be metadata available (tags, ratings, etc.).  
I want to store this inside `exhex.json` as three fields, summarized under `custom_data`:

| Name    | Data type  | Content            | Example                                            |
| ------- | ---------- | ------------------ | -------------------------------------------------- |
| comment | string     | A free text field. | `...`                                              |
| tags    | list       |                    | `calibre, imported`                                |
| dict    | dictionary |                    | `'original_name': '...', 'original_path': '...', ` |
