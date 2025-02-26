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
        - r34-json-api [GH](https://github.com/KuroZen/r34-json-api) (7y old)
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

```yaml
positive tags:
  - abc
  - def
- 
```

# R34 advanced tag search

[Cheat sheet](https://rule34.xxx/index.php?page=help&topic=cheatsheet)

- `sort:score:desc`

# DB structure

- table 'images'
    - `id, posted, uploader, size, source, rating, score`
    - also: `hash, ext, filesize, comment_count, downloaded, scraped, booru, pools_ids, child_ids, parent_id, status (active/removed), has_notes`
    - problems:
        - only parent_id is returned via API, not child_ids
        - pools are not listed via API
- table 'tags'
    - one table for all tags, with namespace (as number?) etc
    - `Copyright (3), Character (4), Artist (1), General (0), Meta`
- table 'comments'
    - one row per comment
    - how to handle hidden comments?
    - `post_id, comment_number, profile, comment_id, posted, score, html`
- table `pools`
    - `name, id, creator, posts, public`

# Python code

## Get tag info

```python
import requests
import xmltodict

def get_tag_info(tag_name):
    # based on https://github.com/Gabriel712/r34_downloader/blob/main/only_search.py
    url= "https://api.rule34.xxx/index.php?page=dapi&s=tag&q=index"
    params = {"name": tag_name}
    try:
        response = requests.get(url, params=params)
        if response.status_code == 200:
            data_dict = xmltodict.parse(response.text)
            # assign type_name from number
            if int(data_dict['tags']['tag']['@type']) == 0:
                type_name = "General"
            elif int(data_dict['tags']['tag']['@type']) == 1:
                type_name = "Artist"
            elif int(data_dict['tags']['tag']['@type']) == 2:
                type_name = "Meta"
            elif int(data_dict['tags']['tag']['@type']) == 3:
                type_name = "Copyright"
            elif int(data_dict['tags']['tag']['@type']) == 4:
                type_name = "Character"
            return_dict = {
                "name": data_dict['tags']['tag']['@name'],
                "type": int(data_dict['tags']['tag']['@type']),
                "type_title": type_name,
                "count": int(data_dict['tags']['tag']['@count']),
                "ambiguous": bool(data_dict['tags']['tag']['@ambiguous']),
                "id": int(data_dict['tags']['tag']['@id'])
            }
            return return_dict
        else:
            print("Failed to retrieve data. Status code:", response.status_code)
            return {}
    except Exception as e:
        print("An error occurred:", e)
        return {}
```

## get all posts for a given search

```python
import requests
import time

def search_and_format_posts(search_terms):
    params = {
        "tags": search_terms,
        "pid": 0,    # number of page to be checked
        "limit": 1000, # how many posts should be returned
        "json": 1    # return as json format
    }
    all_posts = []

    def get_mult_pages(params):
        url = "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index"
        try:
            response = requests.get(url, params=params)
            if response.status_code != 200:
                print("Failed to retrieve data. Status code:", response.status_code)
                # ToDo: break here since something went wrong, or retry first
                return []
            return response.json()
        except Exception as e:
            print("An error occurred:", e)
            return []

    recieved_posts = get_mult_pages(params)
    i = 0
    all_posts.extend(recieved_posts)
    print(f'   {len(recieved_posts)} posts on page {params["pid"]} found, total: {len(all_posts)}')
    while len(recieved_posts) == params["limit"]:
        if len(recieved_posts) < params["limit"]: # obsolete?
            break
        params["pid"] += 1
        i += 1
        time.sleep(1)
        recieved_posts = get_mult_pages(params)
        all_posts.extend(recieved_posts)
        print(f'   {len(recieved_posts)} posts on page {params["pid"]} found, total: {len(all_posts)}')
    return all_posts
```