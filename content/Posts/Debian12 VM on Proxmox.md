---
title: Debian 12 VM on Proxmox
date: 2024-05-25
publishDate: 2024-05-25
updated: 2024-05-29
draft: false
tags:
  - note
  - proxmox
  - linux
---
 
How to quickly set up a Debian 12 VM on Proxmox 8 using [helper scripts](https://helper-scripts.com).

# Resources

- [helper-scripts.com Scripts](https://helper-scripts.com/scripts)
- [helper-scripts.com Userguides](https://github.com/tteck/Proxmox/blob/main/USER_SUBMITTED_GUIDES.md)
- [helper-scripts.com Debian12 script](https://helper-scripts.com/scripts?id=Debian+12)
- [helper-scripts.com Debian12 post-installation steps](https://github.com/tteck/Proxmox/discussions/1988)

# Installation steps

1. Open your Proxmox node's Shell and run

```shell
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/vm/debian-vm.sh)"
```

2. Configure settings to your liking
	1. (optional) Don't enable "Start after created" at the end.
	2. (optional) By default "RAM -> Balooning Device" is enabled, disable it under "VM -> Hardware -> Memory (Advanced)".
	3. Start VM.
3. Follow the desired [post-installation steps](https://github.com/tteck/Proxmox/discussions/1988)
4. Set your timezone (inside the VM) with 

```shell
timedatectl set-timezone Europe/Berlin
```

5. Install `quemu-guest-agent` with

```shell
apt-get update && apt-get install -y qemu-guest-agent
```

---

# Default settings

```shell
    ____       __    _                ______
   / __ \___  / /_  (_)___ _____     <  /__ \
  / / / / _ \/ __ \/ / __ `/ __ \    / /__/ /
 / /_/ /  __/ /_/ / / /_/ / / / /   / // __/
/_____/\___/_.___/_/\__,_/_/ /_/   /_//____/

Using Default Settings
Using Virtual Machine ID: 100
Using Machine Type: i440fx
Using Disk Cache: None
Using Hostname: debian
Using CPU Model: KVM64
Allocated Cores: 2
Allocated RAM: 2048
Using Bridge: vmbr0
Using MAC Address: 02:25:83:B4:2A:87
Using VLAN: Default
Using Interface MTU Size: Default
Start VM when completed: yes
Creating a Debian 12 VM using the above default settings
 ✓ Using local-lvm for Storage Location.
 ✓ Virtual Machine ID is 100.
 ✓ https://cloud.debian.org/images/cloud/bookworm/20231228-1609/debian-12-nocloud-amd64-20231228-1609.qcow2
 ✓ Downloaded debian-12-nocloud-amd64-20231228-1609.qcow2
 ✓ Created a Debian 12 VM (debian)
 ✓ Started Debian 12 VM
 ✓ Completed Successfully!

More Info at https://github.com/tteck/Proxmox/discussions/1988
```