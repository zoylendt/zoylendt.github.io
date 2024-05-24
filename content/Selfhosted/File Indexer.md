---
title: Dockerized file indexer
date: 2024-05-23
publishDate: 2024-05-23
updated: 2024-05-24
draft: true
tags:
  - note
  - unfinished
---
 
I'm looking for a (dockerized) Setup that indexes files from multiple file storage systems at once.

# Featurelist

...

# Candidates

- (Windows only) [Everything](https://www.voidtools.com/)
- sist2 [GitHub](https://github.com/simon987/sist2), [DockerHub](https://hub.docker.com/r/simon987/sist2)
- diskover [GitHub](https://github.com/diskoverdata/diskover-community) 
- FileRun [Docker Guide](https://docs.filerun.com/docker-tika)
- FileBrowser 
	- Original [GitHub](https://github.com/filebrowser/filebrowser),[DockerHub](https://hub.docker.com/r/filebrowser/filebrowser)
	- Alternative [GitHub](https://github.com/hurlenko/filebrowser-docker), [DockerHub](https://hub.docker.com/r/hurlenko/filebrowser)
- FileStash [GitHub](https://github.com/mickael-kerjean/filestash), [Documentation](https://www.filestash.app/docs/install-and-upgrade/)
- SeaFile [Documentation](https://www.seafile.com/en/home/)


# sist2 

```yaml
version: "3"

services:
  elasticsearch:
    image: elasticsearch:7.17.9
    container_name: sist2-es
    restart: unless-stopped
    volumes:
      # This directory must have 1000:1000 permissions (or update PUID & PGID below)
      - /data/sist2-es-data/:/usr/share/elasticsearch/data
    environment:
      - "discovery.type=single-node"
      - "ES_JAVA_OPTS=-Xms2g -Xmx2g"
      - "PUID=1000"
      - "PGID=1000"
  sist2-admin:
    image: simon987/sist2:x64-linux
#    build:
#      context: .
    container_name: sist2-admin
    volumes:
      - /data/sist2-admin-data/:/sist2-admin/
      - /:/host
    ports:
      - 4090:4090
      # NOTE: Don't export this port publicly!
      - 8080:8080
    working_dir: /root/sist2-admin/
    entrypoint: python3
    command:
      - /root/sist2-admin/sist2_admin/app.py

volumes:
  data:
    driver: local
    name: 
    driver_opts:
      type: cifs
      device: "//192.168.1.17/share"
      o: "username=XXX,password=YYY,uid=1000,gid=1000"

```