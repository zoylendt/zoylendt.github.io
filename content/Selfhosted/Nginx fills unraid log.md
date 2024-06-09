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

# Resources

- https://forums.unraid.net/topic/41848-solved-my-log-is-full-how-to-clear-it/
- https://forums.unraid.net/topic/90727-nginx-errors-filling-logs/
- 

# Investigate the problem

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
- Search for 10 biggest files and directories (including subdirectories) in `/var/log/`
  ```shell
  du -ahx /var/log | sort -hr | head
  ```

# My situation

```shell
root@Datengrab:~# df -h /var/log/
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           128M  128M     0 100% /var/log
```




# Solutions

## Increase the size of `/var/log/`

```shell
mount -o remount,size=384m /var/log
```