---
title: 
subtitle: 
description: 
permalink: 
date: 2025-02-24
publishDate: 2025-02-24
updated: 2025-02-25
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

Resources:
- Imgbrd-grabber
    - [GitHub](https://github.com/Bionus/imgbrd-grabber)
    - [Homepage](https://www.bionus.org/imgbrd-grabber/index.html)
    - [Szurubooru-Integration](https://www.bionus.org/imgbrd-grabber/docs/commands/szurubooru.html)
    - [Linux installation guide](https://www.bionus.org/imgbrd-grabber/docs/install/linux.html)
    - [CLI](https://www.bionus.org/imgbrd-grabber/docs/cli.html)
- Szurubooru
    - [Setup guide](https://github.com/rr-/szurubooru/blob/master/doc/INSTALL.md)
    - [API guide](https://github.com/rr-/szurubooru/blob/master/doc/API.md)
    - [Python API wrapper](https://github.com/sgsunder/python-szurubooru)
- Python tools for R34
    - [...](https://github.com/sinkaroid/booru)
    - [...](https://github.com/trickerer01/Ruxx)
    - [...](https://github.com/RaulS963/Rule34-Downloader/blob/master/py_code/rule34-downloader-hd.py) (5y old) -> best candidate
    - [...](https://github.com/StellaSmith/lewd_downloader/blob/master/lewdd/rule34_xxx.py) (7y old)
    - [...](https://github.com/SolitarySpiral/python-image-dowloader/blob/main/post.py)
    - (Rust) [...](https://github.com/FerrahWolfeh/imageboard-downloader-rs)