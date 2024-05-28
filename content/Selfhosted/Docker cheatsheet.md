---
title: Docker Cheatsheet
date: 2024-05-28
publishDate: 2024-05-28
updated: 2024-05-28
draft: false
tags:
  - note
  - docker
---

- ...
  ```shell
  ...
  ```
-

# Containers

- List all containers
  ```shell
  docker ps -a
  ```
- List only running containers
  ```shell
  docker ps
  ```
- List running containers with custom formatting
  ```shell
  docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Status}}"
  ```
- Print running containers and the tag they’ve been pulled from
  ```shell
  docker inspect $(docker ps | awk '{print $2}' | grep -v ID) | jq .[].RepoTags
  ```
  >[!info]- example output
  >```shell
  >[
  >  "jellyfin/jellyfin:latest"
  >]
  >[
  >  "ghcr.io/analogj/scrutiny:master-omnibus"
  >]
  >[
  >  "deasmi/unraid-tailscale:latest"
  >]
  >```
- Enter the container `$CONTAINERNAME`
  ```shell
  docker exec -it $CONTAINERNAME sh
  ```
-

# Volumes

- List all volumes
  ```shell
  docker volume ls
  ```
- List contents of the volume `$VOLUMENAME` (works with alpine and ubuntu)
  ```shell
  docker run --rm -v $VOLUMENAME:/data/ alpine ls -la /data
  ```
- Delete contents of the volume `$VOLUMENAME`  
  (works with alpine and ubuntu)
  ```shell
  docker run --rm -v $VOLUMENAME:/data/ alpine /bin/sh -c "rm -rf /data/*"
  ```
-

# Images

- List all downloaded Docker images
  ```shell
  docker image ls
  ```
- List all downloaded Docker images and their RepoDigest
  ```shell
  docker image ls --digests
  ```
-
- List dangling images [Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929)
  ```shell
  docker images -f "dangling=true"
  ```
- List dangling images (only ImageID) [Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929)
  ```shell
  docker images -qf "dangling=true"
  ```
- Delete all dangling images [Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929)
  ```shell
  docker image prune
  ```
- List all images used by containers (running and stopped) [Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929)
  ```shell
  docker ps -a --format="{{.Image}}"
  ```
- ...

# Combined commands

...

# Commands involving external containers

...