---
title: 
date: 2024-05-30
publishDate: 2024-05-30
updated: 2024-05-30
draft: true
tags:
  - note
  - unfinished
---
 
This guide is about how to set up a [Kopia](https://kopia.io/) repository server with docker and connect Kopia instances on other PCs to it.

(What is Kopia)

# Resources

...

# My usecase

> [!warning]
> All credentials and IPs in this guide **must be changed** before you deploy it yourself, they're only written out for demonstration purposes!

I have set up a dockerized Kopia server on my Synology NAS, which doesn't create new snapshots but only accept remote ones. On my NAS I created a shared folder "backups" as a place for Kopia and other tools to deposit their data. Inside this folder I created 