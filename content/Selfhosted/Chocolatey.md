---
title: 
date: 2024-06-01
publishDate: 2024-06-01
updated: 2024-06-05
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

A personal overview about which packages I use on which device:

c = Chocolatey
m = manually installed

|                  | m700 | x1y3 | zalman2 | prod400g5 | VM  |
| ---------------- | ---- | ---- | ------- | --------- | --- |
| extractnow       | c    |      |         |           |     |
| chocolateygui    | c    |      | c       |           |     |
| everything       | c    |      | m       |           |     |
| jdownloader      | c    |      |         |           |     |
| wiztree          | c    |      |         |           |     |
| git.install      | c    |      | m       |           |     |
| github-desktop   | c    |      | m       |           |     |
| treesizefree     | c    |      | c       |           |     |
| kopiaui          | c    |      | c       |           |     |
| paint.net        | c    |      |         |           |     |
| vscode           | c    |      |         |           |     |
| pdf24            | c    |      |         |           |     |
| calibre          | c    |      |         |           |     |
| synctrayzor      | m    |      |         |           |     |
| anydesk          | m    |      |         |           |     |
| obsidian         | m    |      |         |           |     |
| spotify          | m    |      |         |           |     |
| vlc              | m    |      |         |           |     |
| telegram         | m    |      |         |           |     |
| bitwarden        | m    |      |         |           |     |
| teamspeak        | m    |      |         |           |     |
| steam            | m    |      |         |           |     |
| brave            | m    |      |         |           |     |
| notepadplusplus  | m    |      |         |           |     |
| putty            | m    |      |         |           |     |
| tailscale        | m    |      |         |           |     |
| rpi-imager       | m    |      |         |           |     |
| win32diskimager  | m    |      |         |           |     |
| sonos-controller | m    |      |         |           |     |
| alldup           | m    |      |         |           |     |
| arduino          | c    |      |         |           |     |

Special notes:
- [extractnow](https://extractnow.com/#/home) (no longer available in Chocolatey)
- alldup (outdated, last update: 29 Jun 2021)

Install all at once:
  ```shell
  choco install -y 
  ```



