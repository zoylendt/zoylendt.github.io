---
title: 
date: 2024-06-09
publishDate: 2024-06-09
updated: 2024-06-09
draft: true
tags:
  - note
  - unfinished
---
 
...

- Check size of `/var/log/`
  ```shell
  df -h /var/log/
  ```
- List size of all top-level files/directories in `/var/log/`
  ```shell
  du -sh /var/log/*
  ```
- Search for 10 biggest directories (top-level directories only) in `/var/log/`
  ```shell
  du -sm /var/log/* | sort -hr | head
  ```
- Search for 10 biggest directories (including subdirectories) in `/var/log/`
  ```shell
  du -ahx /var/log | sort -hr | head
  ```