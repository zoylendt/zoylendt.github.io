---
title: 
aliases:
  - alias2
description: <Description of the page used for link previews>
date: 2024-05-19
publishDate: 2024-05-19
updated: 2024-05-19
draft: true
publish: false
tags:
  - note
  - changeme
---
 
Here I describe the setup I came up with in order to use multiple jDownloader2 instances in parallel on the same machine. With it you can bypass the by many [One-click hosters](https://en.wikipedia.org/wiki/File-hosting_service#One-click_hosting) enforced limit that prevents multiple simultaneous downloads (or enforces a waiting period between downloads).

I use currently five to six parallel jd2 instances, each behind its own VPN container. In theory I could use ten instances, since my [ProtonVPN plan](https://protonvpn.com/de/pricing) allows up to ten simultaneous connections. However there is nothing from preventing one to use other VPN providers or mix multiple providers.

# Docker containers utilized

The following different containers are part of this setup:

- [walterl/proton-privoxy](https://github.com/walterl/proton-privoxy)
- `plusminus/jdownloader2-headless` ([GitHub](https://github.com/PlusMinus0/headless-jd2-docker), [DockerHub](https://hub.docker.com/r/plusminus/jdownloader2-headless)) -> 
- 