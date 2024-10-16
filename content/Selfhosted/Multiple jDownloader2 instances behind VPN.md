---
title: 
date: 2024-05-19
publishDate: 2024-05-19
updated: 2024-06-07
draft: false
tags:
  - note
  - docker
  - unfinished
  - syncthing
  - guide
---
 
Here I describe the setup I came up with in order to use multiple jDownloader2 instances in parallel on the same machine. With it you can bypass the by many [One-click hosters](https://en.wikipedia.org/wiki/File-hosting_service#One-click_hosting) enforced limit that prevents multiple simultaneous downloads (or enforces a waiting period between downloads).

Currently I use five parallel jd2 instances, each behind its own VPN container. With my [ProtonVPN plan](https://protonvpn.com/de/pricing) I could use up to ten instances simultaneously. However there is nothing preventing you from using other VPN providers or mix multiple providers.

> [!note]
> Of course this setup is useless for One-click hosts that prohibit downloads from IPs associated with VPS or VPN. Geoblocking can also be an issue due to the random connections.

# - Docker containers utilized

The following different containers are part of this setup:

- `walt3rl/proton-privoxy` ([GitHub](https://github.com/walterl/proton-privoxy), [DockerHub](https://hub.docker.com/r/walt3rl/proton-privoxy)) -> I use this since my VPN provider is ProtonVPN, however they plan to [sunset the method used here soon(ish)](https://github.com/Rafficer/linux-cli-community/issues/365#issuecomment-1994194066), as discussed [here](https://github.com/walterl/proton-privoxy/issues/46) for `walt3rl/proton-privoxy`, including a [fix](https://github.com/walterl/proton-privoxy/pull/47). In the future some other container might be required, maybe [gluetun](https://github.com/qdm12/gluetun). In order to work best, this setup requires a VPN container that selects an exit server at random upon restart.
- `plusminus/jdownloader2-headless` ([GitHub](https://github.com/PlusMinus0/headless-jd2-docker), [DockerHub](https://hub.docker.com/r/plusminus/jdownloader2-headless)) -> Despite not been updated in a long time, this container worked best for me. The regular updates of jD2 are installed upon container restart. **This image is not available for `linux/arm64`!**

  >[!info]- Build `jdownloader2-headless` on RasPi
  > ```shell 
  > git clone https://github.com/PlusMinus0/headless-jd2-docker
  > cd headless-jd2-docker/
  > docker build -t localjd2 -f alpine.Dockerfile .
  > ```
  > Replace every `image: plusminus/jdownloader2-headless` in `docker-compose.yaml` with `image: localjd2`

- `lscr.io/linuxserver/syncthing` ([LinuxServer.io](https://docs.linuxserver.io/images/docker-syncthing/)) -> I run the setup on a [VPS](https://en.wikipedia.org/wiki/Virtual_private_server) to circumvent disconnections caused by my [ISP](https://en.wikipedia.org/wiki/Internet_service_provider), so I need some tool to retrieve successfully downloaded files.
- `jamesread/olivetin` ([GitHub](https://github.com/OliveTin/OliveTin), [DockerHub](https://hub.docker.com/r/jamesread/olivetin)) -> Used to restart individual components of the setup without requiring to log into the server's shell, Portainer or something similar.
- `lscr.io/linuxserver/code-server` ([LinuxServer.io](https://docs.linuxserver.io/images/docker-code-server/)) -> Only required to edit the config file of `jamesread/olivetin`, can be omitted/replaced as needed.

> [!warning]
> This setup includes no killswitch! If a VPN container fails, the corresponding jD2 instance connects through the host's network to the internet. If you need a killswitch, look into [gluetun](https://github.com/qdm12/gluetun).

# - Docker-compose file

The following `docker-compose.yaml` and `.env` files create three jD2 instances:

- `jd2_0` connects without a VPN to the internet
- `jd2_1` connects through the container `vpn_1` 
- `jd2_2` connects through the container `vpn_2` 

The downloaded files (partial and finished files) are placed in the volume `jd2_downloads`, which is mounted into the Syncthing container at `/data1`.

```yaml title=".env"
SYNCTHING_HOSTNAME=host
SYNCTHING_PORT_WEBUI=8384
SYNCTHING_PORT_LISTENING=22000
SYNCTHING_PORT_DISCOVERY=21027
TIMEZONE=Europe/Berlin
OLIVETIN_PORT=1337
VSCODE_PW=
VSCODE_PORT=8443
JD2_EMAIL=
JD2_PW=
PVPN_USERNAME=
PVPN_PASSWORD=
PVPN_TIER=2
PVPN_1_PORT=8080
PVPN_2_PORT=8081
```

```yaml title="docker-compose.yaml"
version: '3.3'
services:

  syncthing:
    container_name: syncthing
    image: lscr.io/linuxserver/syncthing
    restart: unless-stopped
    hostname: ${SYNCTHING_HOSTNAME}
    environment:
      - PUID=0
      - PGID=0
      - TZ=${TIMEZONE}
    ports:
      - ${SYNCTHING_PORT_WEBUI}:8384
      - ${SYNCTHING_PORT_LISTENING}:22000/tcp
      - ${SYNCTHING_PORT_LISTENING}:22000/udp
      - ${SYNCTHING_PORT_DISCOVERY}:21027/udp
    volumes:
      - syncthing_config:/config
      - jd2_downloads:/data1

  olivetin:
    container_name: olivetin
    image: jamesread/olivetin
    restart: unless-stopped
    user: root
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - olivetin_config:/config
    ports:
      - ${OLIVETIN_PORT}:1337

  vscode:
    container_name: vscode
    image: lscr.io/linuxserver/code-server:latest
    restart: unless-stopped
    environment:
      - PUID=0
      - PGID=0
      - TZ=${TIMEZONE}
      - PASSWORD=${VSCODE_PW}
      - DEFAULT_WORKSPACE=/mnt
    volumes:
      - olivetin_config:/mnt/olivetin_config
    ports:
      - ${VSCODE_PORT}:8443

  vpn_1:
    container_name: vpn_1
    image: walt3rl/proton-privoxy
    restart: unless-stopped
    devices:
      - /dev/net/tun
    cap_add:
      - NET_ADMIN
    volumes:
      - /etc/localtime:/etc/localtime:ro
    ports:
      - ${PVPN_1_PORT}:8080
    environment:
      - PVPN_USERNAME=${PVPN_USERNAME}
      - PVPN_PASSWORD=${PVPN_PASSWORD}
      - PVPN_TIER=${PVPN_TIER}
      - PVPN_CMD_ARGS=connect --random
      - PVPN_DEBUG=1

  vpn_2:
    container_name: vpn_2
    image: walt3rl/proton-privoxy
    restart: unless-stopped
    devices:
      - /dev/net/tun
    cap_add:
      - NET_ADMIN
    volumes:
      - /etc/localtime:/etc/localtime:ro
    ports:
      - ${PVPN_2_PORT}:8080
    environment:
      - PVPN_USERNAME=${PVPN_USERNAME}
      - PVPN_PASSWORD=${PVPN_PASSWORD}
      - PVPN_TIER=${PVPN_TIER}
      - PVPN_CMD_ARGS=connect --random
      - PVPN_DEBUG=1

  jd2_0:
    container_name: jd2_0
    image: plusminus/jdownloader2-headless
    restart: unless-stopped
    user: root
    environment:
      EMAIL: ${JD2_EMAIL}
      PASSWORD: ${JD2_PW}
    volumes:
      - jd2_0_config:/opt/JDownloader/cfg
      - jd2_0_logs:/opt/JDownloader/logs
      - jd2_0_extensions:/opt/JDownloader/extensions
      - jd2_downloads:/opt/JDownloader/Downloads
      - /etc/localtime:/etc/localtime:ro

  jd2_1:
    container_name: jd2_1
    image: plusminus/jdownloader2-headless
    restart: unless-stopped
    user: root
    network_mode: 'container:vpn_1'
    depends_on:
      - vpn_1
    environment:
      EMAIL: ${JD2_EMAIL}
      PASSWORD: ${JD2_PW}
    volumes:
      - jd2_1_config:/opt/JDownloader/cfg
      - jd2_1_logs:/opt/JDownloader/logs
      - jd2_1_extensions:/opt/JDownloader/extensions
      - jd2_downloads:/opt/JDownloader/Downloads
      - /etc/localtime:/etc/localtime:ro

  jd2_2:
    container_name: jd2_2
    image: plusminus/jdownloader2-headless
    restart: unless-stopped
    user: root
    network_mode: 'container:vpn_2'
    depends_on:
      - vpn_2
    environment:
      EMAIL: ${JD2_EMAIL}
      PASSWORD: ${JD2_PW}
    volumes:
      - jd2_2_config:/opt/JDownloader/cfg
      - jd2_2_logs:/opt/JDownloader/logs
      - jd2_2_extensions:/opt/JDownloader/extensions
      - jd2_downloads:/opt/JDownloader/Downloads
      - /etc/localtime:/etc/localtime:ro

volumes:
  syncthing_config:
    driver: local
    name: syncthing_config
  olivetin_config:
    driver: local
    name: olivetin_config
  jd2_downloads:
    driver: local
    name: jd2_downloads
  jd2_0_config:
    driver: local
    name: jd2_0_config
  jd2_0_logs:
    driver: local
    name: jd2_0_logs
  jd2_0_extensions:
    driver: local
    name: jd2_0_extensions
  jd2_1_config:
    driver: local
    name: jd2_1_config
  jd2_1_logs:
    driver: local
    name: jd2_1_logs
  jd2_1_extensions:
    driver: local
    name: jd2_1_extensions
  jd2_2_config:
    driver: local
    name: jd2_2_config
  jd2_2_logs:
    driver: local
    name: jd2_2_logs
  jd2_2_extensions:
    driver: local
    name: jd2_2_extensions
```

Enter your credentials in `.env`, then run `docker compose pull` and `docker compose up -d`.

# Config

## - jD2 configuration

...

- Open "https://my.jdownloader.org/" and login with your credentials.
- Stop all instances of `jdownloader2-headless` but the one you want to configure.  
  All fresh instances have the same name so you can't identify them otherwise.
- Select your new instance
- Settings -> General
	- Set "Default Download Folder" to `/opt/JDownloader/Downloads/D/<jd:packagename>` (tick "subfolder as package name")
	- Disable "Automatic reconnect"
	- (optional) Set speed limit. I noticed that all containers connected to VPN containers might crash if all download simultaneously with a very high rate.
- Settings -> Plugins
	- (optional) Change settings for different hosters.
- Settings -> Extension Manager
	- Install "Folder Watch" and enable it.
	- Enter the value for "FolderWatch: Folders", depending on the jd2 instance:
		- jd2_0 -> `["/opt/JDownloader/Downloads/watch/all","/opt/JDownloader/Downloads/watch/0"]`
		- jd2_1 -> `["/opt/JDownloader/Downloads/watch/all/added","/opt/JDownloader/Downloads/watch/1"]`
		- jd2_2 -> `["/opt/JDownloader/Downloads/watch/all/added/added","/opt/JDownloader/Downloads/watch/2"]`
		- jd2_3 -> `["/opt/JDownloader/Downloads/watch/all/added/added/added","/opt/JDownloader/Downloads/watch/3"]`
- Settings -> Archive Extractor
	- Disable the extension.
- Settings -> Professional settings
	- `GeneralSettings: If File Exists Action` -> `Skip the file`
	- `GeneralSettings: Auto Start Download Option` -> `Always`
	- `GeneralSettings: Auto Start Countdown Seconds` -> `0`
	- `MyJDownloaderSettings: Device Name` -> enter an individual name
- Click "JD restart" (under Settings -> General) to make sure your settings got saved. Recent setting changes might get lost if a container is stopped/restarted through the docker cli.
- Proceed the same way with your other new instances.

## - Olivetin configuration

Open the `vscode` container's WebUI, navigate the explorer to `/mnt/olivetin_config`, create a new file called `config.yaml` (next to `installation-id.txt`) with the content

```yaml title="config.yaml"
actions:
  - title: restart jd2 stack [1]
    icon: '<img src = "https://jdownloader.org/_media/knowledge/wiki/jdownloader.png" width = "48px"/>'
    shell: docker restart vpn_1  jd2_1
    timeout: 30

  - title: restart jd2 stack [2]
    icon: '<img src = "https://jdownloader.org/_media/knowledge/wiki/jdownloader.png" width = "48px"/>'
    shell: docker restart vpn_2 jd2_2
    timeout: 30
```

See the [documentation](https://docs.olivetin.app/) for more options. The container `vscode` can (and should) be stopped now.

## - Syncthing configuration

...

- General
	- set a fitting folder label, like `jd2_${SYNCTHING_HOSTNAME}`
	- Folder Path: `/data1`
- Sharing
	- select your desired (home) Syncthing instance
- File Versioning
	- `No File Versioning`
- Ignore Patterns
	- set as follows:
    ```
    *.part
    jd_accessCheck_*
    <jd:default>
    ```
- Advanced
	- ...

-> folder structure for `.dlc` files

```
/data1
 ├── .stfolder
 ├── D
 └── watch
     ├── 0
     ├── 1
     ├── 2
     └── all
         └── added
             └── added
```

# Additional topics

## - Browser setup, useful Windows software

...

## - Solve captcha with 9kw.eu integration

...

## - Download workflow

...

# - Improvement ideas

Just some bullet points of improvement ideas:

- automatically split download links best between containers
- reduce required browser interaction
- remove the need for https://my.jdownloader.org/ (maybe through only local connections?)
- build a script to detect idle containers (maybe by network load?) and restart the associated containers
- script to identify (and resolve) problems related to `<jd:default>`
- script to identify (and resolve) problems related to too long filenames (Synology problem?)
- 