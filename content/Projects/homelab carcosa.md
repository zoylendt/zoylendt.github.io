---
title: "Homelab 2.0: 'Carcosa'"
subtitle: 
description: 
permalink: 
date: 2025-01-31
publishDate: 2025-01-31
updated: 2025-02-11
draft: true
tags:
  - unfinished
  - homelab
---
 
# Introduction

...

# Machines

At first I planned to deploy everything with IaC tools like Terraform, however some machines are way easier to setup manually, mainly the PVE hosts which run most VMs, the VMs on the NAS systems Synology and Unraid (at least for Unraid there seems to be no good IaC support to deploy VMs) and noticeably the VM from which the whole setup is initially build (of course this could also be done from any PC, but I wanted to have a dedicated VM for this).

I plan to deploy all other nodes (on PVE and in the cloud) using IaC tools (Ansible, Terraform, OpenTofu).

Overview of planned machines:
- 1x control VM (on PVE `titan`)
- 2x mass-storage VMs (on PVE `vanadium` & `neodym` since they have a 2TB SSD each)
- 2x VMs for directly accessing NAS files (virtualized on Synology `ds918zoy` & Unraid `datengrab` respectively)
  - the VM on `datengrab` has also access to a GPU
- 1x VM on VPS (intended to be always accessible and to manage public traffic)
- various master/worker nodes on the three PVE hosts (enough to have a working quorum setup)


| ID                | Location       |     |
| ----------------- | -------------- | --- |
| carcosa-control   | VM @ titan     |     |
| carcosa-ds918oy   | VM @ ds918zoy  |     |
| carcosa-datengrab | VM @ datengrab |     |
| carcosa-strato    | VPS            |     |
| carcosa-storage-1 | VM @ vanadium  |     |
| carcosa-storage-2 | VM @ neodym    |     |
| carcosa-1         | VM @ titan     |     |
| carcosa-2         | VM @ vanadium  |     |
| carcosa-3         | VM @ neodym    |     |


## Manually deployed machines

### carcosa-control (VM on titan)

This is the VM to control the whole setup. Besides the initial setup it's intended to be only started when a manual change is necessary.


### carcosa-ds918zoy (VM on ds918zoy)

...

<details>
  <summary>[Click me] Initial VM settings</summary>
  
[guide](https://gist.github.com/pierrejoubert73/902cc94d79424356a8d20be2b382e1ab)  
text a  
```shell {3-4} title="quartz.layout.ts"
line 1
line 2
line 3
line 4
line 5
```
text b
</details>

### carcosa-datengrab (VM on datengrab)

ISO: `debian12.9.0-amd64-netinst.iso`
...

## Automatically deployed machines

The following machines are deployed from the control VM.
### carcosa-strato (Node in strato cloud)

...

### (additional nodes on PVE hosts)

...

