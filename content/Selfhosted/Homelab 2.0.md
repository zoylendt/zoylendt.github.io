---
title: 
date: 2024-11-01
publishDate: 2024-11-01
updated: 2024-12-27
draft: false
tags:
  - note
  - unfinished
---
 
Plans for my new homelab structure (server & software).

# Target

My goal is to implement IaC & GitOps in order to create a reproducible setup.

- [ ] **IaC & GitOps** 
      Control/Update the stack through a git repo
- [ ] **FQDN**
      Each service' subdomain should be externally accessible through a reverse proxy

# Inspirations

| **ID**                                     | **Links**                                                                                                                                                                                             | **Topics**                                                        | **Note**                                                                                                                            |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Khue's Homelab                             | [GH](https://github.com/khuedoan/homelab)                                                                                                                                                             |                                                                   | +                                                                                                                                   |
| Vinetos' Infrastructure                    | [GH](https://github.com/Vinetos/infrastructure)                                                                                                                                                       | Proxmox, OPNsense, OpenTofu, Ansible                              | +                                                                                                                                   |
| Lordthorzonus' homelab                     | [GH](https://github.com/lordthorzonus/homelab-provisioning)                                                                                                                                           | Ansible, Terraform, K8S                                           | Not a detailed guide                                                                                                                |
| Dan Manners' Homelab                       | [GH](https://github.com/danmanners/homelab-kube-cluster)                                                                                                                                              | K8S, Kustomize, ArgoCD                                            | Not a detailed guide                                                                                                                |
| Luis' IaC & K8S homelab                    | [Blog](https://luislogs.com/posts/re-engineering-the-homelab-with-iac-and-kubernetes-an-overview/), [GH](https://github.com/luifrancisco/k3s-ha)                                                      | Proxmox, Terraform, Ansible, K3S, Longhorn, Traefik, Cert-manager | +                                                                                                                                   |
| Ansible-Proxmox-Automation                 | [GH](https://github.com/Dilden/Ansible-Proxmox-Automation)                                                                                                                                            | Proxmox, Ansible                                                  | Ansible-playbooks for Proxmox                                                                                                       |
| ansible-k3s-argocd-renovate                | [GH](https://github.com/reefland/ansible-k3s-argocd-renovate)                                                                                                                                         | K3S, ArgoCD, Ansible, ZFS, Renovate                               | -> Uptime-Labels on GH-pages                                                                                                        |
| ChristianLempa's homelab                   | [GH](https://github.com/ChristianLempa/homelab), [YT](https://www.youtube.com/@christianlempa)                                                                                                        |                                                                   | also: [Boilerplate](https://github.com/christianlempa/boilerplates) & [Cheat Sheet](https://github.com/christianlempa/cheat-sheets) |
| Pezhore Proxmox-Home-Lab                   | [GH](https://github.com/pezhore/Proxmox-Home-Lab)                                                                                                                                                     | Proxmox, Terraform, Ansible, Vault, Packer                        | Ansible vs Terraform                                                                                                                |
| Lisenet kubernetes-homelab                 | [GH](https://github.com/lisenet/kubernetes-homelab), [Blog](https://www.lisenet.com/2021/install-and-configure-a-multi-master-ha-kubernetes-cluster-with-kubeadm-haproxy-and-keepalived-on-centos-7/) | Istio, TrueNAS, K8S, Ansible, Terraform, ...                      | +, Very extensive                                                                                                                   |
| Gruberdev's Homelab                        | [GH](https://github.com/gruberdev/homelab)                                                                                                                                                            | ArgoCD, K8S, Terraform, Tailscale                                 | Not a detailed guide, interesting cluster utilities, see also [local-gitops](https://github.com/gruberdev/local-gitops)             |
| Ultimate Kubernetes Homelab Guide          | [Blog](https://datastrophic.io/kubernetes-homelab-with-proxmox-kubeadm-calico-openebs-and-metallb/), [GH](https://github.com/datastrophic/kubernetes-deployment)                                      | Proxmox, K8S, Ansible, Istio                                      | 2021                                                                                                                                |
| Configuring Istio with OIDC authentication | [Blog](https://homelab.blog/blog/devops/Istio-OIDC-Config/)                                                                                                                                           | Istio                                                             | only about Istio, 2020                                                                                                              |
| Provisioning with GitHub Runners           | [Blog](https://fredrickb.com/2024/10/14/using-terraform-ansible-and-github-actions-to-automate-provisioning-and-configuration-of-workloads-in-the-homelab/)                                           | Terraform, Ansible, GitHub  Actions, Proxmox, K3S                 | many other good posts in blog                                                                                                       |
|                                            |                                                                                                                                                                                                       |                                                                   |                                                                                                                                     |
https://luislogs.com/
https://www.lisenet.com/
https://thedatabaseme.de/
https://datastrophic.io/
https://homelab.blog/
https://fredrickb.com/
https://aviitala.com/posts/

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
	- TrueNAS Scale 24.10+ with 2TB SSD (2x, on vanadium & neodym) 
		- -> not planned anymore, use instead for CEPH or as additional LVM

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
		- Diskover (File Indexing -> aggregate to central instance)
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
	- Ansible
	- Terraform (or OpenTofu)
	- K3S
	- standalone Docker on some hosts?
	- ArgoCD with Hashicorp Vault
	- Linux VMs under Proxmox (with NixOS?)
	- Longhorn

# Planned Project Steps

Steps required to implement Homelab 2.0

- Stage 1: Proxmox
  - [ ] Automate Proxmox bare metal node setup with Terraform/OpenTofu (optional since I already have them set up)
    - [ ] Create a Debian VM template
    - [ ] 
  - [ ] Document 'ControlVM', from where commands are run
  - [ ] Customize Proxmox installation (e.g. Tailscale)
    - Tailscale
    - mount 2TB SSDs as additional storage (LVM or LVM-thin - or CEPH?) (vanadium & neodym)
  - [ ] Deploy VMs for K3S with Terraform/OpenTofu (or Ansible)
- Stage 2: K3S
  - [ ] (Idea) a K3S worker node as VM in unraid with mounted folders (& GPU?) for local actions
  - [ ] ...
- Stage 3: external Services (outside of K3S cluster)
  - HomeAssistant (VM on PVE 'titan')
    - [ ] InfluxDB (on separate partition?)
    - [ ] (Idea) separate 'hassio-helper' VM as docker-host (InfluxDB, Unifi-Controller, AdGuardHome)
	- [ ] monitor power usage of homelab
	- [ ] monitor FritzBox
  - Synology NAS 'ds918oy'
    - [ ] ...
  - unraid NAS 'datengrab'
    - [ ] Jellyfin
    - [ ] ...
  - other devices & services
    - [ ] WebUI's of PVE hosts
    - [ ] Nous A5T WebUI
    - [ ] Unifi Controller
    - [ ] AdGuardHome-VM



- [ ] iPhone
	- [ ] Sync Obsidioan-git with iPhone [with iSh](https://forum.obsidian.md/t/mobile-sync-with-git-on-ios-for-free-using-ish/20861)
	- [ ] ...
- [ ] .

# Resources

## K8S and Tailscale

- https://tailscale.com/kb/1185/kubernetes
- 

## K3S and Tailscale

- https://devops.stackexchange.com/questions/19394/how-to-setup-a-k3s-cluster-on-netbird-or-tailscale
- https://www.reddit.com/r/k3s/comments/18x370t/cross_cloud_k3s_cluster/
  - https://itnext.io/how-to-deploy-a-single-kubernetes-cluster-across-multiple-clouds-using-k3s-and-wireguard-a5ae176a6e81
- https://angrydome.com/posts/k3s_tailscale/
- https://docs.k3s.io/networking/distributed-multicloud#integration-with-the-tailscale-vpn-provider-experimental
- https://blog.dsb.dev/posts/accessing-my-k3s-cluster-from-anywhere-with-tailscale/
- https://jamhed.net/tech/self-hosting/k3s/
- https://haseebmajid.dev/posts/2023-12-20-til-how-to-use-tailscale-to-connect-to-k3s-pi-cluster/

## General K3S resources

- https://docs.k3s.io/architecture

## Other notes

- https://github.com/tailscale/terraform-provider-tailscale