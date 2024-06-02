---
title: 
date: 2024-06-01
publishDate: 2024-06-01
updated: 2024-06-02
draft: false
tags:
  - note
  - windows
---
 
[Chocolatey](https://chocolatey.org/) is a packet manager for Windows.

# Installation

[Guide for 'Individual Installation'](https://chocolatey.org/install#individual)

1. Open PowerShell as Admin -> `[Win]+[x],[a]`

2. "Run `Get-ExecutionPolicy`. If it returns `Restricted`, then run `Set-ExecutionPolicy AllSigned` or `Set-ExecutionPolicy Bypass -Scope Process`."

3. 

  ```shell
  Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
  ```

# Useful commands

- List all installed packages: `choco list`
- Search for packages at https://community.chocolatey.org/packages
- List of CLI commands: https://docs.chocolatey.org/en-us/choco/commands/
- Install new package with `choco install <packagename>`
  - Install a GUI for Chocolatey with `choco install chocolateygui`
- Search for updates of installed packages with `choco upgrade all --noop`
- Upgrade all installed packages with `choco upgrade all -y`

# Installed packages

The packages I use:
- [extractnow](https://extractnow.com/#/home) (no longer available in Chocolatey)
- chocolateygui
- everything
- jdownloader
- wiztree
- git.install
- github-desktop
- treesizefree
- kopiaui
- paint.net
- vscode
- pdf24

Install all at once:
  ```shell
  choco install -y 
  ```

Manually installed but also available on Chocolatey:
- synctrayzor
- anydesk
- obsidian
- spotify
- vlc
- telegram
- bitwarden
- teamspeak
- steam
- brave
- notepadplusplus
- putty
- tailscale
- rpi-imager
- win32diskimager
- sonos-controller
- alldup (outdated, last update: 29 Jun 2021)

