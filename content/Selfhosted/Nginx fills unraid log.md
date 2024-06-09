---
title: 
date: 2024-06-09
publishDate: 2024-06-09
updated: 2024-06-09
draft: true
tags:
  - note
  - unfinished
  - unraid
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

```
root@Datengrab:~# du -sm /var/log/* | sort -hr | head
86      /var/log/nginx
23      /var/log/syslog.2
16      /var/log/syslog.1
4       /var/log/samba
1       /var/log/wtmp
1       /var/log/wg-quick.log
1       /var/log/syslog
1       /var/log/pkgtools
1       /var/log/maillog
1       /var/log/docker.log
```

```
root@Datengrab:~# ls -alh /var/log/nginx/
total 86M
drwxr-x---  2 nobody root   80 Jun  9 04:40 ./
drwxr-xr-x 11 root   root  720 Jun  4 04:40 ../
-rw-r--r--  1 root   users 53M Jun  9 19:30 error.log
-rw-r--r--  1 root   root  33M May 31 04:40 error.log.1
```

-> https://forums.unraid.net/topic/120823-varlog-is-getting-full-nchan-out-of-shared-memory-while-allocating-message-of-size/

-> https://forums.unraid.net/topic/120823-varlog-is-getting-full-nchan-out-of-shared-memory-while-allocating-message-of-size/?do=findComment&comment=1313726

-> https://forums.unraid.net/topic/86114-nginx-running-out-of-shared-memory/?do=findComment&comment=1340848

```shell
root@Datengrab:~# tail -4 /var/log/nginx/error.log
2024/06/09 19:35:10 [crit] 1625#1625: ngx_slab_alloc() failed: no memory
2024/06/09 19:35:10 [error] 1625#1625: shpool alloc failed
2024/06/09 19:35:10 [error] 1625#1625: nchan: Out of shared memory while allocating channel /cpuload. Increase nchan_max_reserved_memory.
2024/06/09 19:35:10 [error] 1625#1625: *5272868 nchan: error publishing message (HTTP status code 507), client: unix:, server: , request: "POST /pub/cpuload?buffer_length=1 HTTP/1.1", host: "localhost"
```

# Solutions

## Increase the size of `/var/log/`

```shell
mount -o remount,size=512m /var/log
```