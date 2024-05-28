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



# Images

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
- 