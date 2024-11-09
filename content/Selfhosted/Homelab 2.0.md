---
title: 
date: 2024-11-01
publishDate: 2024-11-01
updated: 2024-11-09
draft: true
tags:
  - note
  - unfinished
---
 
Plans for new homelab structure (server & software)

Sites/Locations:
  - KV (main)
  - KD (office -> neodym & abcnas)
  - KA (Karlsruhe -> RasPi)
  - CD (Cloud -> ceres)

Server:
	- 3x PVE hosts (titan, vanadium, neodym)
	- 1x unraid NAS (datengrab)
	- 3x Synology NAS (ds918zoy, bernstein218, abcnas)
	- 1x VPS (ceres)
	- 2x RasPi

VMs & Services (not containerized):
	- HomeAssistantOS VM (on titan)
	- TrueNAS Scale 24.10+ with 2TB SSD (2x, on vanadium & neodym)

Dockerized Services:
	- Media Services (should run on a specific server, for fast local file access)
		- Jellyfin (movies & series, @datengrab)
		- Stash (other movies, @datengrab)
		- Audiobookshelf (audiobooks, @ds918zoy)
		- Navidrome or [similar service](https://github.com/basings/selfhosted-music-overview) (music, @ds918zoy)
		- (multiple?) eBook/Comic/Manga server -> Possible services: [1](https://github.com/awesome-selfhosted/awesome-selfhosted?tab=readme-ov-file#document-management---e-books)
			- ebooks -> Calibre & Calibre-web
			- Comics
			- Manga
			- PDF-Magazines 
				- -> [Komga](https://komga.org/) -> use for everything except ebooks
				- or maybe [Inkheart](https://gitlab.com/Nystik/inkheart) (poor performance for big libraries?)
				- DMS like [Teedy](https://github.com/sismics/docs), [Papermerge](https://github.com/ciur/papermerge) or [Docspell](https://github.com/eikek/docspell)
			- exhex
		- File Indexing
	- Monitoring
	- 