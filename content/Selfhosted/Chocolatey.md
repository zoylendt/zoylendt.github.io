---
title: 
date: 2024-06-01
publishDate: 2024-06-01
updated: 2024-10-14
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
\- = not installed  

|                   | m700 | x1y3-2 | zalman2 | prod400g5 | VM  |
| ----------------- | ---- | ------ | ------- | --------- | --- |
| alldup            | m    | c      | -       |           |     |
| anydesk           | m    |        | m       |           |     |
| arduino           | c    |        | -       |           |     |
| bitwarden         | m    | c      | m       |           |     |
| brave             | m    | c      | m       |           |     |
| calibre           | c    |        | m       |           |     |
| chocolateygui     | c    |        | c       |           |     |
| docker-desktop    |      | c      |         |           |     |
| everything        | c    | c      | m       |           |     |
| extractnow        | c    |        | -       |           |     |
| fastcopy          |      | c      |         |           |     |
| foxitreader       |      | c      |         |           |     |
| git.install       | c    | c      | m       |           |     |
| github-desktop    | c    | c      | m       |           |     |
| handbrake         |      | c      |         |           |     |
| jdownloader       | c    |        |         |           |     |
| kopiaui           | c    | c      | c       |           |     |
| notepadplusplus   | m    | c      |         |           |     |
| obsidian          | m    | c      |         |           |     |
| paint.net         | c    |        |         |           |     |
| pdf24             | c    | c      | c       |           |     |
| putty             | m    | c      |         |           |     |
| pycharm-community |      | c      |         |           |     |
| rpi-imager        | m    |        | m       |           |     |
| sonos-controller  | m    |        | -       |           |     |
| spotify           | m    | c      | m       |           |     |
| steam             | m    | m      | m       |           |     |
| synctrayzor       | m    | c      | m       |           |     |
| tailscale         | m    | c      | m       |           |     |
| teamspeak         | m    | c      | m       |           |     |
| telegram          | m    | c      | m       |           |     |
| treesizefree      | c    | c      | c       |           |     |
| vlc               | m    | c      |         |           |     |
| vscode            | c    |        |         |           |     |
| win32diskimager   | m    |        | m       |           |     |
| wiztree           | c    |        |         |           |     |


Special notes:
- [extractnow](https://extractnow.com/#/home) (no longer available in Chocolatey)
- alldup (outdated, last update: 29 Jun 2021)

Install all at once:
  ```shell
  choco install -y 
  ```



