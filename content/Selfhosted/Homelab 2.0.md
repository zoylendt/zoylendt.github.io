---
title: 
date: 2024-11-01
publishDate: 2024-11-01
updated: 2024-11-18
draft: true
tags:
  - note
  - unfinished
---
 
Plans for new homelab structure (server & software).

# Inspirations

| ID                         | Links                                                                                                                                            | Topics                                                            | Note                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ----------------------------- |
| Khue's Homelab             | [GH](https://github.com/khuedoan/homelab)                                                                                                        |                                                                   | +                             |
| Vinetos' Infrastructure    | [GH](https://github.com/Vinetos/infrastructure)                                                                                                  | Proxmox, OPNsense, OpenTofu, Ansible                              | +                             |
| Lordthorzonus' homelab     | [GH](https://github.com/lordthorzonus/homelab-provisioning)                                                                                      | Ansible, Terraform, K8S                                           | Not a detailed guide          |
| Dan Manners' Homelab       | [GH](https://github.com/danmanners/homelab-kube-cluster)                                                                                         | K8S, Kustomize, ArgoCD                                            | Not a detailed guide          |
| Luis' IaC & K8S homelab    | [Blog](https://luislogs.com/posts/re-engineering-the-homelab-with-iac-and-kubernetes-an-overview/), [GH](https://github.com/luifrancisco/k3s-ha) | Proxmox, Terraform, Ansible, K3S, Longhorn, Traefik, Cert-manager | +                             |
| Ansible-Proxmox-Automation | [GH](https://github.com/Dilden/Ansible-Proxmox-Automation)                                                                                       | Proxmox, Ansible                                                  | Ansible-playbooks for Proxmox |
|                            |                                                                                                                                                  |                                                                   |                               |
https://luislogs.com/


# Planned Setup

Sites/Locations:
  - KV (main)
  - KD (office -> neodym & abcnas)
  - KA (Karlsruhe -> RasPi)
  - CD (Cloud -> ceres)

Server:
	- 3x PVE hosts (titan, vanadium, neodym)
		- titan -> always-on, for critical services
		- vanadium -> main place for worker nodes
		- neodym -> off-site backup
	- 1x unraid NAS (datengrab)
	- 3x Synology NAS (ds918zoy, bernstein218, abcnas)
	- 1x VPS (ceres)
	- 2x RasPi

VMs & Services (not containerized):
	- ControlVM (run Ansible/Terraform/etc from here)
	- HomeAssistantOS VM (on titan)
	- TrueNAS Scale 24.10+ with 2TB SSD (2x, on vanadium & neodym) -> not planned anymore

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
		- File Indexing -> aggregate to central instance
		- File manager
			- FileBrowser
			- 
	- Monitoring
		- HDD-monitoring with scrutiny
		- monitor performance with Prometheus
		- monitor logs with Loki or ELK
	- Backup
		- Use Offen/docker-volume-backup to pCloud (?)
	- Homepage
		- ...
	- other services
		- Tailscale
		- FactorioServerManager
		- 

# Software

GOAL: IaC -> pull from private GitHub Repo (or public Repo + private secrets?)

Tools:
	- Ansible and/or Terraform (or OpenTofu)
	- K3S
	- standalone Docker on some hosts?
	- ArgoCD
	- Linux VMs under Proxmox (with NixOS?)

# Planned Projects

Steps required to implement Homelab 2.0

- [ ] Proxmox
	- [ ] mount 2TB SSDs as additional storage (LVM or LVM-thin) (vanadium & neodym)
- [ ] HomeAssistant
	- [ ] InfluxDB (on separate partition?)
	- [ ] monitor  power usage
	- [ ] ...
- [ ] iPhone
	- [ ] Sync Obsidioan-git with iPhone [with iSh](https://forum.obsidian.md/t/mobile-sync-with-git-on-ios-for-free-using-ish/20861)
	- [ ] ...
- [ ] 