---
title: Backup & restore Docker volumes with Offen
date: 2024-05-23
publishDate: 2024-05-23
updated: 2024-05-23
draft: false
tags:
  - note
  - unfinished
  - docker
  - backup
  - syncthing
---
 
This note is about how to use **offen/docker-volume-backup** ([GitHub](https://github.com/offen/docker-volume-backup), [Documentation](https://offen.github.io/docker-volume-backup/)) to back up (and restore) docker volumes. Offen works with mounted folders as well as docker volumes and offers many backup targets.

>[!info]- Useful docker commands
> 1. List all docker volumes
> ```shell
> docker volume ls
>```
>
> 2. Enter the container `containername`
> ```shell
> docker exec -it containername sh
>```
>
>3. List contents of a volume (works with alpine and ubuntu)
>```shell
>docker run --rm -v $DVAR:/data/ alpine ls -la /data
>```
>
>4. Remove contents of a volume (works with alpine and ubuntu)
>```shell
>docker run --rm -v $DVAR:/data/ alpine /bin/sh -c "rm -rf /data/*"
>```

# Manual backup 

## Into local folder

Let's say we want to back up the volume `volumename` into an archive file that's placed inside our current directory. 

1. Set shell variable with volume name, useful if you want to backup multiple volumes (different syntax on Windows?)

```shell
DVAR='volumename'
```

2. Make sure the corresponding containers are stopped. If the volume you want to backup contains a database, it might be advisable to create a database backup inside this volume now.

3. Create the backup file. It will be named like `volumename-2024-05-23T11-45-02.tar.gz`.

```shell title="Create Backup in current folder (no subdirectory)"
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

4. Restart the previously stopped containers.

## Into another volume

I use this approach on remote hosts to create backups inside a volume (`offen_backup_syncthing`) that's mounted to a [[tags/syncthing|Syncthing]] container, which syncs it to my home or another backup location.

> [!warning] Required folder structure
> The folder `offenbackup` inside the volume `offen_backup_syncthing` must be present, the copy script inside `offen/docker-volume-backup` fails otherwise. Workaround: -> replace `BACKUP_ARCHIVE="/archive/offenbackup"` with `BACKUP_ARCHIVE="/archive"`, which changes how the backup archives are stored inside the volume `offen_backup_syncthing`.

The contents of `offen_backup_syncthing` are structured like this, to separate the backup archives from the syncthing files (`.stfolder` & `.stversions`):

```
offen_backup_syncthing
 ├── .stfolder
 │   └── ...
 ├── .stversions
 │   └── ...
 └── offenbackup
     ├── volumename-2024-05-23T11-45-02.tar.gz
     └── ...
```

1. Set shell variable with volume name.

```shell
DVAR='volumename'
```

2. Make sure the corresponding containers are stopped. If the volume you want to backup contains a database, it might be advisable to create a database backup inside this volume now.

3. Create the backup file. It will be named like `volumename-2024-05-23T11-45-02.tar.gz`.

```shell {4} title="Create Backup inside syncthing volume (with subdirectory)"
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

4. Restart the previously stopped containers.

# Inspect or extract backup archives

The backup gets stored as a `.tar.gz` file, which can be extracted with `tar -xvf backup.tar.gz`. This creates a new folder `backup` (Note: **NOT** with the name of the archive, but with the name of the highest folder inside it!) and within this a folder with the volume name. The volume's contents are inside this folder.

You can also view the content of `backup.tar.gz` like this:

```shell
tar -tvf backup.tar.gz
```

or using Docker:

```shell
docker run --rm -v ./backup.tar.gz:/data/backup.tar.gz alpine tar -tvf /data/backup.tar.gz
```

# Restore a backup manually

Assumptions:
- In your working directory is only one backup file per volume (so `$DVAR-*.tar.gz` is unambiguous).
- Your archive file created by **offen/docker-volume-backup** has its contents nested like in this example (the volume's name, `$DVAR`, is here 'volumename'):

```
# tar -tvf backup.tar.gz
tar: Removing leading `/' from member names
drwxr-xr-x root/root         0 2024-05-23 13:45 /backup
drwxr-xr-x 1000/users        0 2024-05-23 13:38 /backup/volumename
-rw-r--r-- 1000/users        4 2024-05-23 13:15 /backup/volumename/config.json
```

## With local extraction (docker cp)

> [!warning]
> Depending on your working directory, you might run into problems related to the filesystem's path length limit.

1. Set shell variable with the name of the volume you want to restore to

```shell
DVAR='important_volume'
```

2. Remove old volume contents (after stopping related containers!)

```shell
docker run --rm -v $DVAR:/data/ alpine /bin/sh -c "rm -rf /data/*"
```

3. Extract backup into local folder. It's folder structure should look like this: `./tmp/$DVAR/backup/$DVAR/[volume contents]`.

```shell
mkdir -p ./tmp/$DVAR

tar -C ./tmp/$DVAR -xvf $DVAR-*.tar.gz
```

4. Copy files into the empty volume using `docker cp`.

```shell
docker run -d --name temp_restore_container -v $DVAR:/backup_restore alpine
  
docker cp -a ./tmp/$DVAR/backup/$DVAR/. temp_restore_container:/backup_restore
```

5. Cleanup.

```shell
docker rm temp_restore_container

rm -r ./tmp/$DVAR

rm -r $DVAR-*.tar.gz
```

## Without local extraction

It's possible to restore the backup directly to the volume instead of extracting on the host first.

1. Set shell variable with the name of the volume you want to restore to.

```shell
DVAR='important_volume'
```

2. Remove old volume contents (after stopping related containers!)

```shell
docker run --rm -v $DVAR:/data/ alpine /bin/sh -c "rm -rf /data/*"
```

3. Rename backup archive that you want to restore to `backup.tar.gz`. `cp` because we might want to archive the backup file. (This step is necessary because Docker won't accept `-v ./$DVAR-*.tar.gz:/archive/backup.tar.gz:ro`, instead Docker creates a new folder called `volumename-*.tar.gz`.)

```shell
cp $DVAR-*.tar.gz backup.tar.gz
```

4. Restore the backup. Without the [flag](https://askubuntu.com/questions/749592/extract-specific-folder-from-tarball-into-specific-folder) `--strip-components=2` the contents of our restored volume would look like this: `/backup/$DVAR/[contents of original volume]` instead of `[contents of original volume]`. Depending on how you've nested the leading folders in your backup, you might have to change this. You can inspect your backup file first with `tar -tvf backup.tar.gz`.

```shell
docker run --rm -v $DVAR:/target -v ./backup.tar.gz:/archive/backup.tar.gz:ro alpine tar --strip-components=2 -C /target -xzvf /archive/backup.tar.gz
```

5. Cleanup

```shell
rm backup.tar.gz
```

---

>[!example] Missing topics -> https://offen.github.io/docker-volume-backup/how-tos/
>- [ ] automatic backups with flags in docker compose
>- [ ] backup rotations & retention schedules
>- [ ] backups to remote locations -> pcloud.com
>- [ ] encrypting backups
>- [ ] run custom commands during backup/restore