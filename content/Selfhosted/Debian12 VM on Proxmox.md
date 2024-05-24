---
title: 
date: 2024-05-25
publishDate: 2024-05-25
updated: 2024-05-25
draft: false
tags:
  - note
  - proxmox
  - linux
---
 
How to quickly set up a Debian12 VM on Proxmox 8 using [helper scripts](https://helper-scripts.com).

# Resources

- [Scripts](https://helper-scripts.com/scripts)
- [Userguides](https://github.com/tteck/Proxmox/blob/main/USER_SUBMITTED_GUIDES.md)
- [Debian12 script](https://helper-scripts.com/scripts?id=Debian+12)
- [Debian12 post-installation steps](https://github.com/tteck/Proxmox/discussions/1988)

# Installation steps

1. Open your Proxmox node's Shell and run

```shell
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/vm/debian-vm.sh)"
```

2. Configure settings to your liking
	1. (optional) Don't enable "Start after created" at the end.
	2. (optional) "RAM -> Balooning Device" is enabled, disable it under "VM -> Hardware -> Memory (Advanced)".
	3. Start VM.
3. Follow the desired [post-installation steps](https://github.com/tteck/Proxmox/discussions/1988)