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

## Docker CLI

...

## Docker Compose

```yaml
  services:
    example:
      ...
      environment:
        - PUID=<PUID>
        - PGID=<PGID>
      volumes:
        - <PATH_TO_CONFIG>:/config
        - cifs_mount:/library
        - <PATH_TO_ENCODE_CACHE>:/tmp/unmanic

  volumes:
    cifs_mount:
      driver: local
      driver_opts:
        type: cifs    
        device: //<REMOTE_IP>/<PATH_TO_LIBRARY>
        o: "username=<USERNAME>,password=<PASSWORD>,vers=3.0,uid=<PUID>,gid=<PGID>"
```

# NFS

...