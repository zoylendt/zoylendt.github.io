---
title: 
date: 2024-06-12
publishDate: 2024-06-12
updated: 2024-06-13
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
    name: cifs_mount
    driver_opts:
      type: cifs    
      device: //<REMOTE_IP>/<SHARE>/<SUBFOLDER>
      o: "username=<USERNAME>,password=<PASSWORD>,vers=3.0,uid=<PUID>,gid=<PGID>"
```

Additional `o:` options: [CIFS doc samba.org](https://www.samba.org/~ab/output/htmldocs/manpages-3/mount.cifs.8.html), [Cifs doc die.net](https://linux.die.net/man/8/mount.cifs)
- `addr=IP_HERE`: is required if you specify a hostname instead of an IP [Source](https://docs.docker.com/storage/volumes/#create-cifssamba-volumes).
- `ro`: mount read-only
- `domain`
- `nolock`
- `soft`
- `file_mode=0777`
- `dir_mode=0777`
- `nounix`
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

```yaml
services:
  example:
    ...
    environment:
      - PUID=<PUID>
      - PGID=<PGID>
    volumes:
    - nfs_mount:/library

volumes:
  nfs_mount:
    driver: local
    name: nfs_mount
    driver_opts:
      type: nfs    
      device: ":<REMOTE_PATH>" # example path: /mnt/crucialssd/downloads_nfs
      o: "nfsvers=4,addr=<REMOTE_IP>,rw"
```

> [!warning]
> For some reason after enabling the "Allowed Hosts" option for the NFS share no connection was possible.  
> After investigating the issue I noticed that from the three hosts (Proxmox Hypervisor, TrueNAS VM & the Debian VM) all could reach (ping) each other, except the Debian VM was **not** reachable from the TrueNAS VM. 