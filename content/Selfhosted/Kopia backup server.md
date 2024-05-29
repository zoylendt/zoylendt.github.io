---
title: 
date: 2024-05-30
publishDate: 2024-05-30
updated: 2024-05-30
draft: true
tags:
  - note
  - unfinished
---
 
This guide is about how to set up a [Kopia](https://kopia.io/) repository server with docker and connect Kopia instances on other PCs to it.

(What is Kopia)

# Resources

...

# My usecase

> [!warning]
> All credentials and IPs in this guide **must be changed** before you deploy it yourself, they're only written out for demonstration purposes!

I have set up a dockerized Kopia server on my Synology NAS, which doesn't create new snapshots but only accept remote ones. On my NAS I created a shared folder "backups" as a place for Kopia and other tools to deposit their data. Inside this folder I created a folder called "kopia" with various subfolders (due to [limitations of Docker on Synology](https://www.reddit.com/r/synology/comments/ls64fy/grant_docker_access_to_createdelete_folders/) these folders have to be created in the DSM WebUI or via SSH before running the docker stack):

```
volume1
 └── backups
     └── kopia
         ├── config
         ├── cache
         ├── logs
         ├── cert
         └── repository
```

Now we create our "docker-compose.yaml" (I use [Portainer](https://www.portainer.io/) or [dockge](https://github.com/louislam/dockge)):

```yaml {13} title="docker-compose.yaml"
version: '3.7'
services:
  kopia-server:
    image: kopia/kopia:latest
    hostname: synologynas
    container_name: kopia-server
    restart: unless-stopped
    ports:
      - 51515:51515
    command:
      - server
      - start
      - --tls-generate-cert
      - --tls-cert-file=/app/cert/my.cert
      - --tls-key-file=/app/cert/my.key
      - --address=0.0.0.0:51515
      - --server-username=kopiagui
      - --server-password=jz9x5y3zftnyo2zt
    environment:
      KOPIA_PASSWORD: "yqxwbdjgmqkrj2t2"
      TZ: Europe/Berlin
    volumes:
      - /volume1/backups/kopia/config:/app/config
      - /volume1/backups/kopia/cache:/app/cache
      - /volume1/backups/kopia/logs:/app/logs
      - /volume1/backups/kopia/cert:/app/cert
      - /volume1/backups/kopia/repository:/repository
```

Right after (successfully) starting the container we inspect its logs, where we watch for a line similar to this (and note it down):

```
SERVER CERT SHA256: 321a09df468f2fd7a7cb198a2aa195015014ae839409f5ca32718e34bd31e09c
```

Then we stop the container, remove the line `- --tls-generate-cert` from the compose file and redeploy it.

## Create new repository on NAS

Now we can configure the repository server via its WebUI at `https://[Synology-IP]:51515`, username "kopiagui" and password "jz9x5y3zftnyo2zt" (or other values, see your compose file). 

- "Select Storage Type" -> "Local Directory or NAS" -> "/repository" -> Next
- Enter a new Repository PW



# Setup on another PC

...

## With Docker

...

## With binary

...

