---
title: 
subtitle: 
description: 
permalink: 
date: 2025-04-07
publishDate: 2025-04-07
updated: 2025-04-16
draft: true
tags:
  - unfinished
  - homelab
---
 
Tools:
- [ ] rclone
- [ ] rsync
- [ ] restic / backrest
- [ ] Kopia
- [ ] rsnapshot
- [ ] borg
- [ ] borgbackup / borgmatic
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



| Tool                                        | Suitable? | Dockerized                                                                                                            | Architecture      | Notifications | Encryption                                        | Incremental snapshots                                       | Backup rotation | Targets | Cloud providers | GUI (tools)                                                       | Links                                                | Note                                                     |
| ------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------- | ------------------------------------------------- | ----------------------------------------------------------- | --------------- | ------- | --------------- | ----------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------- |
| rclone                                      |           |                                                                                                                       |                   |               |                                                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| rsync                                       |           |                                                                                                                       | server/client     |               |                                                   |                                                             |                 |         |                 | [luckybackup (old)](https://hub.docker.com/r/ich777/luckybackup/) |                                                      |                                                          |
| restic / backrest                           |           |                                                                                                                       | server/client *   |               |                                                   |                                                             |                 |         |                 | [backrest](https://github.com/garethgeorge/backrest)              |                                                      |                                                          |
| kopia                                       | yes       | yes                                                                                                                   | server/client *   | complicated   | [yes](https://kopia.io/docs/advanced/encryption/) |                                                             | yes             |         |                 | yes                                                               |                                                      |                                                          |
| rsnapshot                                   |           |                                                                                                                       |                   |               |                                                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| borg                                        |           |                                                                                                                       |                   |               |                                                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| [borgmatic](https://torsion.org/borgmatic/) |           |                                                                                                                       |                   |               |                                                   |                                                             |                 |         |                 |                                                                   |                                                      |                                                          |
| borgbackup                                  |           |                                                                                                                       |                   |               |                                                   |                                                             |                 |         |                 |                                                                   |                                                      | verifies integrity of backups                            |
| urbackup                                    | no        | [official](https://hub.docker.com/r/uroni/urbackup-server) & [binhex](https://hub.docker.com/r/binhex/arch-urbackup/) | server/client     |               |                                                   |                                                             |                 |         |                 |                                                                   | [Homepage](https://www.urbackup.org/)                | no dockerized client?                                    |
| duplicati                                   |           |                                                                                                                       |                   |               | yes                                               | yes                                                         |                 |         |                 |                                                                   |                                                      | [unstable](https://www.chengeric.com/backups/#duplicati) |
| duplicacy                                   |           |                                                                                                                       |                   |               |                                                   |                                                             |                 |         |                 |                                                                   |                                                      | [paid](https://www.chengeric.com/backups/#duplicacy)     |
| duplicity                                   |           | no                                                                                                                    |                   |               |                                                   | [complicated](https://www.chengeric.com/backups/#duplicity) |                 |         |                 |                                                                   | [GitLab](https://duplicity.gitlab.io/)               | outdated                                                 |
| offen                                       |           | yes                                                                                                                   | sidecar container | email         | yes                                               | no                                                          | yes             | many    | many            | no                                                                | [Doc](https://offen.github.io/docker-volume-backup/) | backup of docker volumes                                 |

new columns: 'Notification/Monitoring' & 'integrity check' -> https://kopia.io/docs/features/#verifying-backup-validity-and-consistency

- Borg
    - dedup & compression
    - no S3 support
    - no support for shared repos
- Restic
    - no dedup/compression
    - S3 support
    - support for shared repos

# Notes
Possible setup:
- 'Kopia' for backups of PC userdata & other places with frequent changes
  - backup to multiple NAS + potentially snapshot to cloud
  - multiple repos for different users?
  - use [repository server](https://kopia.io/docs/repository-server/) on selfhosted target
- 'Offen' for backups of docker volumes
- '___' for backups of kopia repo & static folders to remote NAS/cloud (encrypted)
- Idea: use Kopia & another tool (restic or rclone?) separately for full backups (as a failback)
- Missing: solution for Kubernetes/K3S
  - https://medium.com/@tadbiri2012/kubernetes-backup-and-restore-a-comprehensive-guide-5ac011e15297
  - https://docs.k3s.io/datastore/backup-restore
  - https://docs.k3s.io/cli/etcd-snapshot
  - [Longhorn](https://docs.k3s.io/storage#setting-up-longhorn)
  - [Kopia with Kanister](https://dok.community/blog/kanister-kopia-an-open-source-data-protection-match-made-in-heaven/)
  - https://github.com/fastlorenzo/kopia-operator
  - https://picluster.ricsanfre.com/docs/backup/
  - https://github.com/fabiomarinetti/kanister-demo
  - https://www.reddit.com/r/selfhosted/s/oxeFotCBlJ (I/l)
  

# 3-2-1 rule
- 3 copies of data: original, selfhosted backup, cloud backup
- 2 types of storage: selfhosted & cloud
- 1 copy offsite: cloud (or other selfhosted location)

# Cloud storage options
Services I already have access to:
- [pCloud](https://www.pcloud.com/eu): 500GB lifetime, purchsed 2022-11-28
  - [WebDAV](https://www.multcloud.com/de/tutorials/webdav-zugriff-auf-pcloud-0213.html#section-3)
  - [rclone](https://rclone.org/pcloud/) (experimental)
- [ProtonDrive](https://proton.me/de/drive): {size/cost}
- GDrive: {size}
- Dropbox: {size}
- OneDrive: {size}
Other free options:
- [Borgbase](https://www.borgbase.com/): 10GB free
- backblaze -> [https://www.cloudwards.net/backblaze-b2-review/](https://www.cloudwards.net/backblaze-b2-review/#Ease+of+Use+)
- 
