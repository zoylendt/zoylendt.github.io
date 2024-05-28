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
  >[!info]- Output example
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
- List all containers using the volume `$VOLUMENAME` ([Source](https://stackoverflow.com/questions/42857575/how-to-determine-what-containers-use-the-docker-volume))
  ```shell
  docker ps -a --filter volume=$VOLUMENAME
  ```
- List all volumes and by which container those are used ([Source](https://stackoverflow.com/questions/42857575/how-to-determine-what-containers-use-the-docker-volume))
  ```shell
  for v in $(docker volume ls --format "{{.Name}}")
  do
   containers="$(docker ps -a --filter volume=$v --format '{{.Names}}' | tr '\n' ',')"
   echo "volume $v is used by $containers"
  done
  ```
- List all volumes and by which container those are used (Alternative, [Source](https://stackoverflow.com/questions/42857575/how-to-determine-what-containers-use-the-docker-volume))
  ```shell
  for volume in $(docker volume ls  --format '{{.Name}}')
  do
   echo $volume
   docker ps -a --filter volume="$volume"  --format '{{.Names}}' | sed 's/^/  /'
  done
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
- List image (and RepoDigest) of the local image `$IMAGENAME`
  ```shell
  docker image inspect --format '{{index .RepoDigests 0}}' $IMAGENAME
  ```
  >[!info]- Output example
  >```shell
  >jellyfin/jellyfin@sha256:21e49baac0a05efd4822269e3d8ba2f693e741006a2f81aa397cf5f8445e48a9
  >```

  >[!info]- Formatting
  >- `'{{index .RepoDigests 0}}'` -> `jellyfin/jellyfin@sha256:21e49baac...`
  >- `'{{.RepoDigests}}'` -> `[jellyfin/jellyfin@sha256:21e49baac...]`

- Download image with specific RepoDigest [example: jellyfin/jellyfin]:
  ```shell
  docker pull jellyfin/jellyfin@sha256:21e49baac0a05efd4822269e3d8ba2f693e741006a2f81aa397cf5f8445e48a9
  ```
- List dangling images ([Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929))
  ```shell
  docker images -f "dangling=true"
  ```
- List dangling images (only ImageID) ([Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929))
  ```shell
  docker images -qf "dangling=true"
  ```
- Delete all dangling images ([Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929))
  ```shell
  docker image prune
  ```
- List all images used by containers (running and stopped) ([Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929))
  ```shell
  docker ps -a --format="{{.Image}}"
  ```
- ...

# Combined commands

- List image (and RepoDigest) of running containers
  ```shell
  docker ps --format '{{.Image}}' | xargs docker image inspect --format '{{if .RepoDigests}}{{index .RepoDigests 0}}{{end}}'
  ```
  >[!info]- Output example
  >```shell
  >jellyfin/jellyfin@sha256:21e49baac0a05efd4822269e3d8ba2f693e741006a2f81aa397cf5f8445e48a9
  >ghcr.io/analogj/scrutiny@sha256:51240579aca148379fce5a469bb2fa470d016d14b687121e50a9c19fe2e930d7
  >deasmi/unraid-tailscale@sha256:caf8f4497fb3f6b8e54a1b12bbac7721564882fe4e5ceb63fc8d8666c8607251
  >```
- List image (with tag and ImageID) of running containers:
  ```shell
  docker inspect $(docker ps -q) | grep Image
  ```
  >[!info]- Output example
  >```shell
  >        "Image": "sha256:29d538f1e5ddfe70a1ad5ab05dda11e77b409d8a4fea953b65934c5df74fa557",
  >            "Image": "jellyfin/jellyfin",
  >        "Image": "sha256:463444ecf4bd41ff747d18fd0bb62274a448faf628d0907e29a643454429be38",
  >            "Image": "ghcr.io/analogj/scrutiny:master-omnibus",
  >        "Image": "sha256:dc3c8a6f33b924faf5d0462431c424eaca24c3063c581d7800feaab44366e30e",
  >            "Image": "deasmi/unraid-tailscale:latest",
  >```
-

# Other commands

- Restore `docker run` command of the container `$CONTAINERNAME` (with [runlike](https://github.com/lavie/runlike/))
  ```shell
  docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro assaflavie/runlike $CONTAINERNAME
  ```
- Restore `docker run` command by inspecting the container `$CONTAINERNAME` (with `docker inspect`, [Source](https://stackoverflow.com/questions/32758793/how-to-show-the-run-command-of-a-docker-container), [more about `docker inspect`](https://blog.container-solutions.com/docker-inspect-template-magic))
  ```shell
  docker inspect --format "$(curl -s https://gist.githubusercontent.com/efrecon/8ce9c75d518b6eb863f667442d7bc679/raw/run.tpl)" $CONTAINERNAME
  ```
-


---

- ...
  ```shell
  ...
  ```
-