---
title: Sync your Obsidian instance between multiple PCs
subtitle: 
description: 
permalink: 
date: 2024-05-22
publishDate: 2024-05-22
updated: 2025-01-23
draft: false
tags:
  - obsidian
  - git
  - unfinished
---
 
> [!tip] Associated notes
> This note is part of a series about how this blog is set up.
> See [[quartz starting page 2|here]] for an overview.

# Windows

> [!tip]- Installation with Chocolatey
> Git, Obsidian & GitHub Desktop can be installed using 
> ```shell
> ...
> ```

- Install git
- Install Obsidian, but don't create a new vault
- Install GitHub Desktop, select your private repo `obsidian-backup` and click "Clone `yourusername/obsidian-backup`"
- Change your `local path` to your liking and click "Clone"

Obsidian
 -> Open folder as vault
 -> select folder
 -> Trust and enable plugins

Git -> Sign in with your browser

## Required settings that are not synced

- Options -> Editor -> Behavior -> Spellcheck languages -> Add English
- Options -> Community plugins -> Git -> Commit message -> {{hostname}} placeholder replacement
- Open Source view: "Open command palette" -> "Git: Open source control view"

> [!warning]
> Empty folders are not saved to git, unless they contain a `.gitkeep` file (and are thus not empty, duh).