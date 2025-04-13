---
title: 
subtitle: 
description: 
permalink: 
date: 2025-04-07
publishDate: 2025-04-07
updated: 2025-04-13
draft: true
tags:
  - unfinished
  - homelab
---
 
Tools:
- [ ] rclone
- [ ] rsync
- [ ] restic
- [ ] Kopia
- [ ] rsnapshot
- [ ] borg
- [ ] borgbackup / borgmatic
- [ ] backrest
- [ ] urbackup
- [ ] duplicati
- [ ] duplicacy
- [ ] duplicity -> https://duplicity.gitlab.io/

Out of scope:
- [ ] syncthing
- [ ] https://hub.docker.com/r/lnxd/github-backup
- [ ] https://github.com/mandarons/icloud-docker & https://hub.docker.com/r/boredazfcuk/icloudpd/
- [ ] https://github.com/imagegenius/docker-immich
- [ ] https://github.com/vrtmrz/self-hosted-livesync-server
- [ ] https://github.com/ayufan/pve-backup-server-dockerfiles
- [ ] https://github.com/SyncYomi/SyncYomi

- https://github.com/Brandawg93/PeaNUT
- https://github.com/vdsm/virtual-dsm
- https://github.com/VictoriaMetrics/VictoriaMetrics
- https://github.com/Staffwerke/vm-babysitter (Unraid VM backup)
- https://github.com/ArchiveBox/ArchiveBox
- https://github.com/karakeep-app/karakeep (formerly 'Hoarder')
- https://github.com/amphineko/docker-hath (H@H)
- https://wiki.archiveteam.org/index.php/ArchiveTeam_Warrior & https://hub.docker.com/r/archiveteam/warrior-dockerfile/
- https://github.com/0neTX/Bitwarden_Export & https://github.com/AronMarinelli/bitwarden-secure-sync
- https://github.com/vinid223/GcloudStorage-docker (backup to Google Cloud Storage, NOT GDrive)
- 



| Tool       | Suitable? | Dockerized                                                                                                            | Architecture      | Notifications | Encrypted backups | Incremental snapshots                                       | Backup rotation | Targets | Cloud providers | GUI (tools)                                                       | Links                                                | Note                                                     |
| ---------- | --------- | --------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------- | ----------------- | ----------------------------------------------------------- | --------------- | ------- | --------------- | ----------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------- |
| rclone     |           |                                                                                                                       |                   |               |                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| rsync      |           |                                                                                                                       | server/client     |               |                   |                                                             |                 |         |                 | [luckybackup (old)](https://hub.docker.com/r/ich777/luckybackup/) |                                                      |                                                          |
| restic     |           |                                                                                                                       | server/client *   |               |                   |                                                             |                 |         |                 | [backrest](https://github.com/garethgeorge/backrest)              |                                                      |                                                          |
| kopia      | yes       |                                                                                                                       | server/client     | complicated   |                   |                                                             | yes             |         |                 | yes                                                               |                                                      |                                                          |
| rsnapshot  |           |                                                                                                                       |                   |               |                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| borg       |           |                                                                                                                       |                   |               |                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| borgmatic  |           |                                                                                                                       |                   |               |                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| borgbackup |           |                                                                                                                       |                   |               |                   |                                                             |                 |         |                 |                                                                   |                                                      | verifies integrity of backups                            |
| backrest   |           |                                                                                                                       |                   |               |                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| urbackup   | no        | [official](https://hub.docker.com/r/uroni/urbackup-server) & [binhex](https://hub.docker.com/r/binhex/arch-urbackup/) | server/client     |               |                   |                                                             |                 |         |                 |                                                                   | [Homepage](https://www.urbackup.org/)                | no dockerized client?                                    |
| duplicati  |           |                                                                                                                       |                   |               | yes               | yes                                                         |                 |         |                 |                                                                   |                                                      | [unstable](https://www.chengeric.com/backups/#duplicati) |
| duplicacy  |           |                                                                                                                       |                   |               |                   |                                                             |                 |         |                 |                                                                   |                                                      | [paid](https://www.chengeric.com/backups/#duplicacy)     |
| duplicity  |           | no                                                                                                                    |                   |               |                   | [complicated](https://www.chengeric.com/backups/#duplicity) |                 |         |                 |                                                                   | [GitLab](https://duplicity.gitlab.io/)               | outdated                                                 |
| offen      |           | yes                                                                                                                   | sidecar container | email         | yes               | no                                                          | yes             | many    | many            | no                                                                | [Doc](https://offen.github.io/docker-volume-backup/) | backup of docker volumes                                 |

- Borg
    - dedup & compression
    - no S3 support
    - no support for shared repos
- Restic
    - no dedup/compression
    - S3 support
    - support for shared repos