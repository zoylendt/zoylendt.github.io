---
title: 
date: 2024-05-30
publishDate: 2024-05-30
updated: 2024-05-30
draft: false
tags:
  - note
  - unfinished
  - docker
  - backup
---

> [!warning]
> All credentials and IPs in this guide **must be changed** before you deploy it yourself, they're only written out for demonstration purposes! Also you might want to change stuff like ports, mount points and the timezone.
 
This guide is about how to set up a [Kopia](https://kopia.io/) repository server with docker and connect Kopia instances on other PCs to it. Most configurations are done via the WebUI, but some things (like adding new users) requires the command line. 

> [!warning] Write about what Kopia is

# My usecase

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

```yaml {13} title="repository server docker-compose.yaml"
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

Then we stop the container, remove the line `- --tls-generate-cert` from the compose file (otherwise he will [fail to start](https://kopia.io/docs/repository-server/#auto-generated-tls-certificate)) and redeploy it.

## Create new repository on NAS

Now we can configure the repository server via its WebUI at `https://[Synology-IP]:51515` (note: **https**), username "kopiagui" and password "jz9x5y3zftnyo2zt" (or other values, see your compose file). 

- "Select Storage Type" -> "Local Directory or NAS" -> "/repository" -> Next
- Enter the Repository PW (use the value "KOPIA_PASSWORD" from your compose file, here: "yqxwbdjgmqkrj2t2")  
  (Only after being manually configured once the value from the compose file is used for the configured repository.)
- (optional) Advanced Options -> Error Correction Overhead -> 1%
- Create Repository

We can also set global policies, some also define defaults for backups from other PCs. Set them at "Policies" -> "Edit".

- Compression -> Compression Algorithm -> Defined -> zstd

# Setup on another PC

One big advantage of having a central repository server is the ability to isolate backups from different endpoints. To utilize this we need to create a new user for each PC we want to back up from (it is possible to use the same credentials for more than one endpoint, too). We need to enter the `kopia-server` container, via Portainer or through the shell of the Synology NAS (`docker exec -it kopia-server sh`). Here we add a new user with

  ```shell
  kopia server user add user@host
  ```

"user" and "host" should of course be changed, but "user" without "@host" is not sufficient. You also need to provide a password. For this guide let's assume the login "user2@remotehost" & password "12345678".

## With Docker

Let's assume we want to snapshot some files on a remote PC ("testvm" in our example) using a Kopia container, but of course we want to save the backups in our repository server. 

For this example we store the config files for our "testvm" Kopia container at subdirectories of `/root/kopia_config`, the important data we want to back up is located at `/root/important-data` (mounted read-only to the container) and we mount `/root/restore` into the container at `/restore` to have a location (besides the WebUI) to retrieve our restored files.

Important: set "KOPIA_PASSWORD" to the password of our newly created user, here: "12345678".

```yaml {20} title="testvm docker-compose.yaml"
version: '3.7'
services:
  kopia:
    image: kopia/kopia:latest
    hostname: testvm
    container_name: kopia
    restart: unless-stopped
    ports:
      - 51515:51515
    command:
      - server
      - start
      - --disable-csrf-token-checks
      - --insecure
      - --address=0.0.0.0:51515
      - --server-username=kopiagui
      - --server-password=gfmh7qevukqnur58
    environment:
      TZ: Europe/Berlin
      KOPIA_PASSWORD: "12345678"
    volumes:
      - /root/kopia_config/config:/app/config
      - /root/kopia_config/cache:/app/cache
      - /root/kopia_config/logs:/app/logs
      - /root/important-data:/data:ro
      - /root/restore:/restore
```

Note that this configuration is less secure than our repository server setup (no HTTPS, for example), but it is way easier this way.

Now we can configure the repository server on our NAS to be our snapshot target. Open the Kopia WebUI of "testvm" at `http://[testvm-IP]:51515` (note: **http**), username "kopiagui" and password "gfmh7qevukqnur58" (or other values, see the "testvm" compose file). 

-> Select Storage Type -> Kopia Repository Server 

Set the "Server address" to the IP of your Synology NAS (I use [Tailscale](https://tailscale.com/) on both the NAS and the local PC) with the correct port (example here: "https://100.95.65.71:51515"). We also need to add the repository server's fingerprint, which we noted from the container's log after its first start (example here: "321a09df468f2fd7a7cb198a2aa195015014ae839409f5ca32718e34bd31e09c").  
Here we also have to insert our credentials (login "user2@remotehost" & password "12345678"), the login can be changed from its default value in the Advanced View below.

Now we can create our first snapshot:

- Snapshots -> New Snapshot -> "/data"

> [!warning] More information about snapshot options needed, like [ignore patterns](https://kopia.io/docs/advanced/kopiaignore/)!

### Restoring files

> [!warning] More information needed!

Since we mounted `/root/restore` into the container at `/restore` writeable we can restore files there and manually move or compare them to `/root/important-data`.

Possible: remove ":ro" from "/root/important-data:/data:ro", restore at "/data" and select "Overwrite Files" & "Overwrite Directories" -> restore at original place (but overwrite new changes, since apparently no partial restore through the WebUI is possible, beside downloading single files -> maybe through cli commands?).

Drawback of Docker approach: "Mount as Local Filesystem" does not work!

## With binary

> [!warning] untested, might have advantages over docker approach

# Kopia command line commands

-> https://kopia.io/docs/reference/command-line/common/

## inside the `kopia-server` (repository) container

- List all snapshots by all users ([Source](https://kopia.io/docs/reference/command-line/common/snapshot-list/))
  ```shell
  kopia snapshot list -a
  ```
- Delete snapshots: Best approach (IMHO) -> delete through WebUI of PC where the snapshot was created.

# Resources

Some links with additional information:

- https://linux-nerds.org/topic/848/kopia-http-s-server
- https://github.com/kopia/kopia/issues/1982
- https://kopia.discourse.group/t/error-connecting-to-api-server/2422/4
- https://kopia.discourse.group/t/how-snapshot-restore-works/2601
- https://kopia.discourse.group/t/containerized-kopia-server-setup/510
- https://kopia.discourse.group/t/repository-server-via-docker/400
- https://kopia.discourse.group/t/kopia-repository-server-on-docker/2141
- https://github.com/kopia/kopia/issues/2045
- https://kopia.io/docs/repository-server/
- [Various backup strategies](https://www.reddit.com/r/selfhosted/comments/18qfjn5/how_does_everyone_else_backup_their_docker/)
- [YT Guide including automatic stop/start of containers](https://www.youtube.com/watch?v=a6GfQy9wZfA)
- [official docker-compose.yaml](https://github.com/kopia/kopia/blob/master/tools/docker/docker-compose.yml)
- https://kopia.io/docs/installation/
- https://blog.gurucomputing.com.au/Offsite%20Docker%20Backups%20with%20Kopia/Offsite%20Docker%20Backups%20with%20Kopia/

---

>[!example] Steps to improve this guide
>- [ ] write consistently 'we' or 'you'
>- [ ] ...