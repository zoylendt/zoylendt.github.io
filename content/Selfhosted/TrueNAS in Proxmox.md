---
title: 
date: 2024-05-22
publishDate: 2024-05-22
updated: 2024-06-12
draft: false
tags:
  - note
  - unfinished
  - proxmox
  - truenas
  - internal
---
 
How to set up a TrueNAS Vm on Proxmox 8, with a 2TB SSD passed through.

ISO: TrueNAS-SCALE-24.04.0.iso

# VM setup

(enable Advanced view)
- General
  - set a VM ID (here: 445)
  - set a Name (here: avalon)
  - enable Start at boot
- OS
  - select ISO
- System
  - Graphic card: SPICE
  - enable Qemu Agent
- Disks
  - add 64GB, enable Discard, enable SSD emulation
- CPU
  - select 2 cores
- Memory
  - 8192MB, diable Ballooning Device
- Network
  - change nothing
- Confirm
  - enable Start after created
(Finish)

# Initial Installation

Open console, wait, select "1 Install/Upgrade", select 64GB sda with [space], Yes, select "1 Administrative user (admin)", enter PW twice (and [tab]), create SWAP, allow EFI boot, wait, remove CD, enter, select "4 Shutdown System"

# Mount 2TB SSD

`qm set 445 -virtio1 /dev/disk/by-id/ata-CT2000BX500SSD1_2028E2B452EC`

edit it -> disable backup

# Creating shares

## Create Pool & Dataset

Storage -> Create Pool 
- General Info
  - enter name
  - enable encryption
- Data
  - Layout: Stripe
- skip all other steps
- Create Pool
- Download encryption key

## NFS shares

### Create Dataset for NFS share

Dataset -> select previously created Pool -> Add Dataset

- Name: ...
- Dataset Preset: Multiprotocol -> select only "Create NFS share"

### Additional NFS setup

...

## CIFS shares

### Create user/users 

Credentials -> Local Users -> Add

Example: testuser | g43fpgo9fauedb2c

### Create Dataset for CIFS share

...

### Additional CIFS setup

...