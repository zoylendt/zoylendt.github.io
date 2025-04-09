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


| Tool        | Dockerized | Architecture  | Notifications | Encrypted backups | Incremental snapshots | Backup rotation | Targets | Cloud providers | GUI (tools) | Links                                                | Note                          |
| ----------- | ---------- | ------------- | ------------- | ----------------- | --------------------- | --------------- | ------- | --------------- | ----------- | ---------------------------------------------------- | ----------------------------- |
| rclone      |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| rsync       |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| restic      |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| kopia       |            | server/client |               |                   |                       |                 |         |                 |             |                                                      |                               |
| rsnapshot   |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| borg        |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| borgmatic   |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| borgbackup  |            |               |               |                   |                       |                 |         |                 |             |                                                      | verifies integrity of backups |
| backrest    |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| luckybackup |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| urbackup    |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| duplicati*  |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| duplicacy   |            |               |               |                   |                       |                 |         |                 |             |                                                      |                               |
| duplicity   | no         |               |               |                   |                       |                 |         |                 |             | [GitLab](https://duplicity.gitlab.io/)               |                               |
| offen       | yes        |               |               | yes               |                       | yes             | many    | many            |             | [Doc](https://offen.github.io/docker-volume-backup/) |                               |
