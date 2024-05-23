---
title: 
date: 2024-05-23
publishDate: 2024-05-23
updated: 2024-05-23
draft: true
tags:
  - note
  - unfinished
---
 
This note is about how to use **offen/docker-volume-backup** ([GitHub](https://github.com/offen/docker-volume-backup), [Documentation](https://offen.github.io/docker-volume-backup/)) to back up (and restore) docker volumes. Offen works with mounted folders as well as docker volumes and offers many backup targets.

# Manual backup to local folder

Let's say we want to back up the volume `importantvolume` (on a Linux host).

1. Set shell variable with volume name

```
DVAR='importantvolume'
```

```
docker run --rm \
  -v $DVAR:/backup/$DVAR:ro \
  -v syncthing_data_5:/archive \
  --env BACKUP_ARCHIVE="/archive/offen" \
  --env BACKUP_COMPRESSION="gz" \
  --env BACKUP_FILENAME="$DVAR-%Y-%m-%dT%H-%M-%S.{{ .Extension }}" \
  --env BACKUP_FILENAME_EXPAND="true" \
  --entrypoint backup \
  offen/docker-volume-backup:v2
```