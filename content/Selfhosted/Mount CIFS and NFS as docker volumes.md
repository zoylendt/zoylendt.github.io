---
title: 
date: 2024-06-12
publishDate: 2024-06-12
updated: 2024-06-12
draft: true
tags:
  - note
  - unfinished
  - docker
  - untested
---
 
To access or save files not on the docker host but on a NAS it's possible to mount CIFS or NFS shares as docker volumes.

... (limitations)

# CIFS

...

## Docker Compose

[Source](https://docs.unmanic.app/docs/advanced/docker_compose_cifs_mounts/)

```yaml
services:
  example:
    ...
    environment:
      - PUID=<PUID>
      - PGID=<PGID>
    volumes:
    - cifs_mount:/library

volumes:
  cifs_mount:
    driver: local
    driver_opts:
      type: cifs    
      device: //<REMOTE_IP>/<SHARE>/<SUBFOLDER>
      o: "username=<USERNAME>,password=<PASSWORD>,vers=3.0,uid=<PUID>,gid=<PGID>"
```

Additional `o:` options: `rw,addr=IP_HERE,nolock,soft,file_mode=0777,dir_mode=0777`

- The `addr` option is required if you specify a hostname instead of an IP [Source](https://docs.docker.com/storage/volumes/#create-cifssamba-volumes).
- 

## Docker CLI

...

```yaml
PUID=$(id -u)
PGID=$(id -g)

# CIFS Mount params
REMOTE_IP=192.168.0.20
PATH_TO_LIBRARY=/library
USERNAME=user
PASSWORD=password

# First create the docker volume mounting the CIFS remote share
docker volume create \
    --driver local \
    --opt type=cifs \
    --opt device=//${REMOTE_IP}${PATH_TO_LIBRARY} \
    --opt o=username=${USERNAME},password=${PASSWORD},vers=3.0,uid=${PUID},gid=${PGID} \
    --name cifs_mount
```

# NFS

...