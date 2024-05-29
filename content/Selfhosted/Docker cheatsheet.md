---
title: Docker Cheatsheet
date: 2024-05-28
publishDate: 2024-05-28
updated: 2024-05-29
draft: false
tags:
  - note
  - docker
---

# General commands

- List total size used by Docker components ([Source](https://medium.com/homullus/how-to-inspect-volumes-size-in-docker-de1068d57f6b))
  ```shell
  docker system df
  ```
- List detailed size used by Docker components ([Source](https://medium.com/homullus/how-to-inspect-volumes-size-in-docker-de1068d57f6b))
  ```shell
  docker system df -v
  ```

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
  >[!info]- Output example
  >```shell
  >CONTAINER ID   NAMES            STATUS
  >544ca96a1dd2   Jellyfin-Intel   Up 9 days (healthy)
  >17adac0dcbfb   scrutiny2        Up 2 weeks
  >f727e77de244   Tailscale        Up 2 weeks
  >```
- Enter the shell of the container `$CONTAINERNAME` (must be running)
  ```shell
  docker exec -it $CONTAINERNAME sh
  ```
- ...

# Volumes

- List all volumes
  ```shell
  docker volume ls
  ```
- Delete the volume `$VOLUMENAME`
  ```shell
  docker volume rm $VOLUMENAME
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
  >[!info]- Output example
  >```shell
  >volume jackett_config is used by 
  >volume jd2_0_config is used by jd2_0,
  >volume jd2_0_extensions is used by jd2_0,
  >volume jd2_0_logs is used by jd2_0,
  >volume jd2_1_config is used by jd2_1,
  >volume jd2_1_extensions is used by jd2_1,
  >volume jd2_1_logs is used by jd2_1,
  >volume jd2_downloads is used by jd2_1,jd2_2,syncthing,
  >volume jellyseerr_config is used by 
  >volume kapowarr_content is used by kapowarr,
  >```
- List all volumes and by which container those are used (Alternative formatting, [Source](https://stackoverflow.com/questions/42857575/how-to-determine-what-containers-use-the-docker-volume))
  ```shell
  for volume in $(docker volume ls  --format '{{.Name}}')
  do
   echo $volume
   docker ps -a --filter volume="$volume"  --format '{{.Names}}' | sed 's/^/  /'
  done
  ```
  >[!info]- Output example
  >```shell
  >jackett_config
  >jd2_0_config
  >  jd2_0
  >jd2_0_extensions
  >  jd2_0
  >jd2_0_logs
  >  jd2_0
  >jd2_1_config
  >  jd2_1
  >jd2_1_extensions
  >  jd2_1
  >jd2_1_logs
  >  jd2_1
  >jd2_downloads
  >  jd2_1
  >  syncthing
  >  jd2_0
  >jellyseerr_config
  >kapowarr_content
  >  kapowarr
  >```
- ...

# Images

> [!warning]- Difference between `ImageID` and `RepoDigest`
> While examining images they are sometimes referenced by their `ImageID` and their `RepoDigest`, both are sha256 encoded strings -> they look similar but have very different purposes. 
> 
> Short answer: ([Source 1](https://stackoverflow.com/questions/56364643/whats-the-difference-between-a-docker-images-image-id-and-its-digest), [Source 2](https://stackoverflow.com/questions/39811230/why-doesnt-my-newly-created-docker-have-a-digest))
> - The `ImageID` is a hash of the local image JSON configuration **-> only local ID!**
> - The `RepoDigest` is a hash of the manifest, introduced in Docker registry v2 **-> ID in the registry!**


- List all local Docker images
  ```shell
  docker image ls
  ```
- List all local Docker images (including their `RepoDigest`)
  ```shell
  docker image ls --digests
  ```
- List image (and `RepoDigest`) of the local image `$IMAGENAME`
  ```shell
  docker image inspect --format '{{index .RepoDigests 0}}' $IMAGENAME
  ```
  >[!info]- Output example
  >```shell
  >jellyfin/jellyfin@sha256:21e49baac0a05efd4822269e3d8ba2f693e741006a2f81aa397cf5f8445e48a9
  >```

  >[!info]- Formatting
  > -> [more about `docker inspect` formatting](https://blog.container-solutions.com/docker-inspect-template-magic)
  >- `'{{index .RepoDigests 0}}'` -> `jellyfin/jellyfin@sha256:21e49baac...`
  >- `'{{.RepoDigests}}'` -> `[jellyfin/jellyfin@sha256:21e49baac...]`

- Download image with specific `RepoDigest` (**NOT `ImageID`**, must not be truncated!)
  ```shell
  docker pull jellyfin/jellyfin@sha256:21e49baac0a05efd4822269e3d8ba2f693e741006a2f81aa397cf5f8445e48a9
  ```
- List dangling images ([Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929))
  ```shell
  docker images -f "dangling=true"
  ```
- List only `ImageID` of dangling images ([Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929))
  ```shell
  docker images -qf "dangling=true"
  ```
- Delete all dangling images ([Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929))
  ```shell
  docker image prune
  ```
- List all images currently used by containers (running and stopped) ([Source](https://stackoverflow.com/questions/44246586/how-to-list-images-and-their-containers/44246929#44246929))
  ```shell
  docker ps -a --format="{{.Image}}"
  ```
- Get `ImageID` from `$IMAGENAME` ([Source](https://stackoverflow.com/questions/31263275/how-to-get-image-id-of-docker-in-jenkins))
  ```shell
  docker images --format "{{.ID}}" --filter=reference=$IMAGENAME
  ```
- List all local images by name, `ImageID` and `RepoDigest` ([Source](https://stackoverflow.com/questions/53191733/dynamically-get-docker-image-id-from-its-name/53191962#53191962))
  ```shell
  docker images --format="{{.Repository}} {{.ID}} {{.Digest}}"
  ```
- ...

# Combined commands

- List image (and `RepoDigest`) of running containers
  ```shell
  docker ps --format '{{.Image}}' | xargs docker image inspect --format '{{if .RepoDigests}}{{index .RepoDigests 0}}{{end}}'
  ```
  >[!info]- Output example
  >```shell
  >jellyfin/jellyfin@sha256:21e49baac0a05efd4822269e3d8ba2f693e741006a2f81aa397cf5f8445e48a9
  >ghcr.io/analogj/scrutiny@sha256:51240579aca148379fce5a469bb2fa470d016d14b687121e50a9c19fe2e930d7
  >deasmi/unraid-tailscale@sha256:caf8f4497fb3f6b8e54a1b12bbac7721564882fe4e5ceb63fc8d8666c8607251
  >```
- List `ImageID` and tag of running containers:
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
- Print from which tag the running containers have been pulled
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
-

# Other commands

- Restore `docker run` command of the container `$CONTAINERNAME` (with [runlike](https://github.com/lavie/runlike/))
  ```shell
  docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro assaflavie/runlike $CONTAINERNAME
  ```
  >[!info]- Output example
  >```shell
  >docker run --name=Jellyfin-Intel --hostname=544ca96a1dd2 --mac-address=02:42:ac:11:00:02 --env=TZ=Europe/Berlin --env=HOST_OS=Unraid --env=HOST_HOSTNAME=Datengrab --env=HOST_CONTAINERNAME=Jellyfin-Intel --env=NVIDIA_DRIVER_CAPABILITIES=all --volume=/mnt/user/appdata/Jellyfin-AMD-Intel-Nvidia:/config:rw --volume=/mnt/user/medien/Jellyfin/:/movies:rw --volume=/mnt/user/appdata/Jellyfin-AMD-Intel-Nvidia/cache:/cache:rw --network=bridge -p 8096:8096 -p 8097:8920 --restart=unless-stopped --device /dev/dri:/dev/dri --label='net.unraid.docker.managed=dockerman' --label='net.unraid.docker.icon=https://raw.githubusercontent.com/ich777/docker-templates/master/ich777/images/jellyfin.png' --label='net.unraid.docker.webui=http://[IP]:[PORT:8096]/' --log-opt max-file=1 --log-opt max-size=50m --runtime=runc --detach=true jellyfin/jellyfin
  >```
- Restore `docker run` command by inspecting the container `$CONTAINERNAME` (with `docker inspect`, [Source](https://stackoverflow.com/questions/32758793/how-to-show-the-run-command-of-a-docker-container))
  ```shell
  docker inspect --format "$(curl -s https://gist.githubusercontent.com/efrecon/8ce9c75d518b6eb863f667442d7bc679/raw/run.tpl)" $CONTAINERNAME
  ```
  >[!info]- Output example
  >```shell
  >docker run \
  >  --name "/Jellyfin-Intel" \
  >  --runtime "runc" \
  >  --volume "/mnt/user/appdata/Jellyfin-AMD-Intel-Nvidia:/config:rw" \
  >  --volume "/mnt/user/medien/Jellyfin/:/movies:rw" \
  >  --volume "/mnt/user/appdata/Jellyfin-AMD-Intel-Nvidia/cache:/cache:rw" \
  >  --log-driver "json-file" \
  >  --log-opt max-file="1" \
  >  --log-opt max-size="50m" \
  >  --restart "unless-stopped" \
  >  --device "/dev/dri":"/dev/dri":rwm \
  >  --publish "0.0.0.0:8096:8096/tcp" \
  >  --publish "0.0.0.0:8097:8920/tcp" \
  >  --network "bridge" \
  >  --hostname "544ca96a1dd2" \
  >  --expose "8096/tcp" \
  >  --expose "8920/tcp" \
  >  --env "TZ=Europe/Berlin" \
  >  --env "HOST_OS=Unraid" \
  >  --env "HOST_HOSTNAME=Datengrab" \
  >  --env "HOST_CONTAINERNAME=Jellyfin-Intel" \
  >  --env "NVIDIA_DRIVER_CAPABILITIES=all" \
  >  --env "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin" \
  >  --env "HEALTHCHECK_URL=http://localhost:8096/health" \
  >  --env "DEBIAN_FRONTEND=noninteractive" \
  >  --env "LC_ALL=en_US.UTF-8" \
  >  --env "LANG=en_US.UTF-8" \
  >  --env "LANGUAGE=en_US:en" \
  >  --env "JELLYFIN_DATA_DIR=/config" \
  >  --env "JELLYFIN_CACHE_DIR=/cache" \
  >  --env "JELLYFIN_CONFIG_DIR=/config/config" \
  >  --env "JELLYFIN_LOG_DIR=/config/log" \
  >  --env "JELLYFIN_WEB_DIR=/jellyfin/jellyfin-web" \
  >  --env "JELLYFIN_FFMPEG=/usr/lib/jellyfin-ffmpeg/ffmpeg" \
  >  --env "XDG_CACHE_HOME=/cache" \
  >  --env "MALLOC_TRIM_THRESHOLD_=131072" \
  >  --env "NVIDIA_VISIBLE_DEVICES=all" \
  >  --label "net.unraid.docker.icon"="https://raw.githubusercontent.com/ich777/docker-templates/master/ich777/images/jellyfin.png" \
  >  --label "net.unraid.docker.managed"="dockerman" \
  >  --label "net.unraid.docker.webui"="http://[IP]:[PORT:8096]/" \
  >  --detach \
  >  "jellyfin/jellyfin" \
  >  
  >```
- ...


---

- ...
  ```shell
  ...
  ```
-