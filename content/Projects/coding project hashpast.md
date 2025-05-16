---
title: "Coding project: HashPast"
subtitle: 
description: 
permalink: perma/hashpast
date: 2024-10-09
publishDate: 2024-10-09
updated: 2025-05-16
draft: true
tags:
  - github
  - coding
  - python
  - docker
  - unfinished
---
 
>[!info] Basic concept
> I needed a small tool for identifying duplicate files before adding them to a folder.
> But instead of comparing the new files (located in `import`) and the current files (located in `main`) I also want to reject files that have previously been in `main`.
> HashPast creates a DB (okay, just two CSV files) of all files that are currently in `main` or have previously been observed there and checks all files from `import` against those.

-> https://dev.to/willvelida/pushing-container-images-to-github-container-registry-with-github-actions-1m6b
-> https://github.com/marketplace/actions/push-to-ghcr
-> https://docs.github.com/de/repositories/releasing-projects-on-github/managing-releases-in-a-repository

>[!info] Planned features
> - [ ] automatically create a container and push it to ghcr.io
> - [ ] read settings from container environment (and also from config file?)
> - [ ] customizable UID/GID (and preserve UID/GID of moved files)
> - [ ] switch from CSV to SQLite (with migration tool)
> - [ ] properly log processed files (summary in separate log file?)
> - [ ] build to run continuously (or with custom schedule)
> - [ ] add notifications (eMail/SMTP?)

- Rewrite to use SQLAlchemy and SQLite instead of CSV files -> practice for ExHex