---
title: 
subtitle: 
description: 
permalink: 
date: 2025-02-22
publishDate: 2025-02-22
updated: 2025-02-22
draft: true
tags:
  - unfinished
  - proxmox
  - homelab
---
 
- [ ] install OPNsense VM in Proxmox
    - [ ] create network
- [ ] x
- [ ] install QEMU-guest-agent plugin
- [ ] change LAN IP
- [ ] install Tailscale plugin
- [ ] install AdGuard plugin

# Introduction

...

# OPNsense VM setup in Proxmox

## Create new network

`Datacenter` -> `$HOSTNAME` -> `System` -> `Network` -> `Create` -> `Linux Bridge`

Create a new network interface next to the default `vmbr0`.

## Get newest OPNsense ISO

This installation guide uses `OPNsense-25.1-dvd-amd64.iso` under Proxmox 8.3.4

## VM resources


| Tab     | Type          | Value  |
| ------- | ------------- | ------ |
| General | Start at boot | enable |
| OS      |               |        |
