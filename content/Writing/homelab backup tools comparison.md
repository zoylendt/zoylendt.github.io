---
title: 
subtitle: 
description: 
permalink: 
date: 2025-04-07
publishDate: 2025-04-07
updated: 2025-04-09
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
- [ ] luckybackup
- [ ] urbackup
- [ ] duplicati
- [ ] duplicacy
- [ ] duplicity -> https://duplicity.gitlab.io/

Out of scope:
- [ ] syncthing


| Tool        | Dockerized | Architecture      | Notifications | Encrypted backups | Incremental snapshots                                       | Backup rotation | Targets | Cloud providers | GUI (tools)                                          | Links                                                | Note                                                     |
| ----------- | ---------- | ----------------- | ------------- | ----------------- | ----------------------------------------------------------- | --------------- | ------- | --------------- | ---------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------- |
| rclone      |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      |                                                          |
| rsync       |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      |                                                          |
| restic      |            |                   |               |                   |                                                             |                 |         |                 | [backrest](https://github.com/garethgeorge/backrest) |                                                      |                                                          |
| kopia       |            | server/client     | complicated   |                   |                                                             |                 |         |                 | yes                                                  |                                                      |                                                          |
| rsnapshot   |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      |                                                          |
| borg        |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      |                                                          |
| borgmatic   |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      |                                                          |
| borgbackup  |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      | verifies integrity of backups                            |
| backrest    |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      |                                                          |
| luckybackup |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      |                                                          |
| urbackup    |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      |                                                          |
| duplicati   |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      | [unstable](https://www.chengeric.com/backups/#duplicati) |
| duplicacy   |            |                   |               |                   |                                                             |                 |         |                 |                                                      |                                                      | [paid](https://www.chengeric.com/backups/#duplicacy)     |
| duplicity   | no         |                   |               |                   | [complicated](https://www.chengeric.com/backups/#duplicity) |                 |         |                 |                                                      | [GitLab](https://duplicity.gitlab.io/)               | outdated                                                 |
| offen       | yes        | sidecar container | email         | yes               | no                                                          | yes             | many    | many            | no                                                   | [Doc](https://offen.github.io/docker-volume-backup/) | backup of docker volumes                                 |
