---
title: 
aliases:
  - alias2
description: <Description of the page used for link previews>
date: 2024-05-19
publishDate: 2024-05-19
updated: 2024-05-19
draft: false
tags:
  - note
  - docker
  - unfinished
---
 
Here I describe the setup I came up with in order to use multiple jDownloader2 instances in parallel on the same machine. With it you can bypass the by many [One-click hosters](https://en.wikipedia.org/wiki/File-hosting_service#One-click_hosting) enforced limit that prevents multiple simultaneous downloads (or enforces a waiting period between downloads).

I use currently five to six parallel jd2 instances, each behind its own VPN container. In theory I could use ten instances, since my [ProtonVPN plan](https://protonvpn.com/de/pricing) allows up to ten simultaneous connections. However there is nothing from preventing one to use other VPN providers or mix multiple providers.

# Docker containers utilized

The following different containers are part of this setup:

- `walt3rl/proton-privoxy` ([GitHub](https://github.com/walterl/proton-privoxy), [DockerHub](https://hub.docker.com/r/walt3rl/proton-privoxy)) -> I use this sine my VPN provider is ProtonVPN, however they plan to [sunset the method used here soon(ish)](https://github.com/Rafficer/linux-cli-community/issues/365#issuecomment-1994194066), as discussed [here](https://github.com/walterl/proton-privoxy/issues/46) for `walt3rl/proton-privoxy`, including a [fix](https://github.com/walterl/proton-privoxy/pull/47). In the future some other container might be required, maybe [gluetun](https://github.com/qdm12/gluetun). In order to work best, this setup requires a VPN container that selects an exit server at random upon restart.
- `plusminus/jdownloader2-headless` ([GitHub](https://github.com/PlusMinus0/headless-jd2-docker), [DockerHub](https://hub.docker.com/r/plusminus/jdownloader2-headless)) -> Despite not been updated in a long time, this container worked best for me. The regular updates of jD2 are installed upon container restart.
- `lscr.io/linuxserver/syncthing` ([LinuxServer.io](https://docs.linuxserver.io/images/docker-adguardhome-sync/)) -> I run the setup on a [VPS](https://en.wikipedia.org/wiki/Virtual_private_server) to circumvent disconnections caused by my [ISP](https://en.wikipedia.org/wiki/Internet_service_provider), so I need some tool to retrieve successfully downloaded files.
- `jamesread/olivetin` ([GitHub](https://github.com/OliveTin/OliveTin), [DockerHub](https://hub.docker.com/r/jamesread/olivetin)) -> Used to restart individual components of the setup without requiring to log into the server's shell, Portainer or something similar.
- `lscr.io/linuxserver/code-server` ([LinuxServer.io](https://docs.linuxserver.io/images/docker-code-server/)) -> Only required to edit the config file of `jamesread/olivetin`, can be omitted/replaced as needed.

# Docker-compose file

...

# Configuration of each jd2 instance

...

# Olivetin configuration

...

# Syncthing configuration

...

# Browser setup, useful Windows software

...

# Solve captcha with 9kw.eu integration

...

# Improvement ideas

Just some bullet points of improvement ideas:

- automatically split download links best between containers
- reduce required browser interaction
- remove the need for https://my.jdownloader.org/ (maybe through only local connections?)
- build a script to detect idle containers (maybe by network load?) and restart the associated containers