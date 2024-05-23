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
>
> 2. Enter the container `containername`
> ```shell title="2. Enter a container"
> docker exec -it containername sh
>```
>
>3. List contents of a volume (works with alpine and ubuntu)
>```
>docker run --rm -v $DVAR:/data/ alpine ls -la /data
>```
>
>4. Remove contents of a volume (works with alpine and ubuntu)
>```
>docker run --rm -v $DVAR:/data/ alpine /bin/sh -c "rm -rf /data/*"
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

# Extract backup

The backup gets stored as a `.tar.gz` file, which can be extracted with `tar -xvf file.tar.gz`. This creates a new folder `backup` (notice: **NOT** with the name of the archive!) and within a folder with the volume name. The volume's contents are inside this folder.

# Restore backup

1. Set shell variable with the name of the volume you want to restore to

```shell
DVAR='important_volume'
```

2. Remove old volume contents (after stopping related containers!)

```
docker run --rm -v $DVAR:/data/ alpine /bin/sh -c "rm -rf /data/*"
```

3. Extract backup and move files into empty volume, cleanup.

```shell
mkdir -p ./tmp/$DVAR

tar -C ./tmp/$DVAR -xvf $DVAR-*.tar.gz

-> ./tmp/$DVAR/backup/$DVAR/[contents]

docker run -d --name temp_restore_container -v $DVAR:/backup_restore alpine
  
docker cp -a ./tmp/$DVAR/backup/$DVAR/. temp_restore_container:/backup_restore

docker rm temp_restore_container

rm -r ./tmp/$DVAR

rm -r $DVAR-*.tar.gz
```

Assumptions:
- Only one archive named `$DVAR-*.tar.gz` is present.
- Extracting to `./tmp/$DVAR` does not conflict with the path length limit of the filesystem.

