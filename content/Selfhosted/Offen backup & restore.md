---
title: Backup & restore docker volumes with Offen
date: 2024-05-23
publishDate: 2024-05-23
updated: 2024-05-23
draft: false
tags:
  - note
  - unfinished
  - docker
  - backup
---
 
This note is about how to use **offen/docker-volume-backup** ([GitHub](https://github.com/offen/docker-volume-backup), [Documentation](https://offen.github.io/docker-volume-backup/)) to back up (and restore) docker volumes. Offen works with mounted folders as well as docker volumes and offers many backup targets.

# Manual backup to local folder

Let's say we want to back up the volume `important_volume` into another volume, `offen_backup_syncthing`. Instead a local folder can also be selected, I just use a volume mounted into syncthing to sync the backups to a remote location.



>[!info]- Useful docker commands
> 1. List all docker volumes
> ```shell title="1. List all docker volumes"
> docker volume ls
>```
> 2. Enter the container `containername`
> ```shell title="2. Enter the container `containername`"
> docker exec -it containername sh
>```

1. Set shell variable with volume name, useful if you want to backup multiple volumes (different syntax on Windows?)

```shell
DVAR='important_volume'
```

2. 

```shell {4} title="Create Backup in syncthing volume (with subdirectory)"
docker run --rm \
  -v $DVAR:/backup/$DVAR:ro \
  -v offen_backup_syncthing:/archive \
  --env BACKUP_ARCHIVE="/archive/offenbackup" \
  --env BACKUP_COMPRESSION="gz" \
  --env BACKUP_FILENAME="$DVAR-%Y-%m-%dT%H-%M-%S.{{ .Extension }}" \
  --env BACKUP_FILENAME_EXPAND="true" \
  --entrypoint backup \
  offen/docker-volume-backup:v2
```

> [!warning] Required folder structure
> The folder `offenbackup` inside the volume `offen_backup_syncthing` must be present, the script fails otherwise. Workaround: -> replace `BACKUP_ARCHIVE="/archive/offenbackup"` with `BACKUP_ARCHIVE="/archive"`

```shell {3,4} title="Create Backup in current folder (no subdirectory)"
docker run --rm \
  -v $DVAR:/backup/$DVAR:ro \
  -v .:/archive \
  --env BACKUP_ARCHIVE="/archive" \
  --env BACKUP_COMPRESSION="gz" \
  --env BACKUP_FILENAME="$DVAR-%Y-%m-%dT%H-%M-%S.{{ .Extension }}" \
  --env BACKUP_FILENAME_EXPAND="true" \
  --entrypoint backup \
  offen/docker-volume-backup:v2
```