---
title: 
subtitle: 
description: 
permalink: 
date: 2025-02-24
publishDate: 2025-02-24
updated: 2025-02-26
draft: true
tags:
  - unfinished
  - python
  - docker
  - nsfw
---
 
Ideas: 
- have list of tags that should be watched in a txt file
- optionally add negative tags to (some) lines
- query the website's API for all images, add them (with metadata) to SQLite DB
- get all not yet downloaded images from the DB, sort by date
- forward single link to imgbrd-grabber, download + add to Szurubooru
- verify that it has been added to Szurubooru, update SQLite DB entry

-> don't use imgbrd-grabber, download with python tools instead
-> all (except Szurubooru) in a docker container, linked to Szurubooru instance

Functions:
- [ ] load: load YAML file with tags that should be searched
- [ ] scan: search R34-API for posts (based on YAML file), optionally abort if posts are returned that are already in DB
    - save metadata to SQLite DB (tags, date, hash, ext, downloaded?, szuru?, ...) -> see below
    - problem: API returns all tags not sorted by tag type -> maybe query tag-API for each tag?
- [ ] sort: get list of not yet downloaded posts, sort by date (download oldest first)
- [ ] download (run these steps for each single post)
    - get current metadata (in case of changes since last scrape), update in DB
    - download a post (handle if post is not available -> write to DB)
    - add to szurubooru
    - verify that it has been added successfully
    - update in DB
- [ ] (opt) remove a post (by hash) from szuru & DB 

Resources:
- Imgbrd-grabber
    - [GitHub](https://github.com/Bionus/imgbrd-grabber)
    - [Homepage](https://www.bionus.org/imgbrd-grabber/index.html)
    - [Szurubooru-Integration](https://www.bionus.org/imgbrd-grabber/docs/commands/szurubooru.html)
    - [Linux installation guide](https://www.bionus.org/imgbrd-grabber/docs/install/linux.html)
    - [CLI](https://www.bionus.org/imgbrd-grabber/docs/cli.html)
    - [Save metadata to SQLite](https://gist.github.com/reedHam/fbb1a65e8295cf902e0a0903b6f96982)
- Szurubooru
    - [Setup guide](https://github.com/rr-/szurubooru/blob/master/doc/INSTALL.md)
    - [API guide](https://github.com/rr-/szurubooru/blob/master/doc/API.md)
    - [Python API wrapper](https://github.com/sgsunder/python-szurubooru)
- R34
    - [API](https://api.rule34.xxx/)
    - [Python-script to query API](https://github.com/Gabriel712/r34_downloader/blob/main/only_search.py) -> also saves to SQLite
    - other API wrappers:
        - pyrule34 [GH](https://github.com/Hypick122/pyrule34), [pypi](https://pypi.org/project/pyrule34/)
        - rule34Py [GH](https://github.com/b3yc0d3/rule34Py), [pypi](https://pypi.org/project/rule34Py/)
        - rule4-api [GH](https://github.com/cardisnotvalid/rule34-api)
- Python tools/downloaders for R34
    - [...](https://github.com/mikf/gallery-dl/) -> also used for ExHex
    - [...](https://github.com/sinkaroid/booru)
    - [...](https://github.com/trickerer01/Ruxx)
    - [...](https://github.com/RaulS963/Rule34-Downloader/blob/master/py_code/rule34-downloader-hd.py) (5y old) -> best candidate
    - [...](https://github.com/StellaSmith/lewd_downloader/blob/master/lewdd/rule34_xxx.py) (7y old)
    - [...](https://github.com/SolitarySpiral/python-image-dowloader/blob/main/post.py)
    - (Rust) [...](https://github.com/FerrahWolfeh/imageboard-downloader-rs)
    - [...](https://github.com/SolitarySpiral/python-image-dowloader)
    - [...](https://github.com/visiuun/PyR34-Downloader)
    - 


# Config-YAML

- list of tags that should ALWAYS been ignored
- multiple groups 

# R34 tag search

[Cheat sheet](https://rule34.xxx/index.php?page=help&topic=cheatsheet)

- `sort:score:desc`

# DB structure

- table 'images'
    - `id, posted, uploader, size, source, rating, score`
    - also: `hash, ext, filesize, comments, downloaded, scraped, booru, pools_ids, child_ids, parent_id, removed`
- table 'tags'
    - one table per tag type? or only one table for all tags?
    - `Copyright (3), Character (4), Artist (1), General (0), Meta`
- table 'comments'
    - one row per comment
    - how to handle hidden comments?
    - `post_id, comment_number, profile, comment_id, posted, score, html`
- table `pools`
    - `name, id, creator, posts, public`