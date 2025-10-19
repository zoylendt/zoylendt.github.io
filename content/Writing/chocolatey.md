---
title: Chocolately
subtitle: 
description: 
permalink: 
date: 2024-06-01
publishDate: 2024-06-01
updated: 2025-10-19
draft: false
tags:
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

c = installed through chocolatey  
m = manually installed  
\- = not installed  

|                                     | m700 | x1y3-2 | zalman3 | prod400g5 | VM  |
| ----------------------------------- | ---- | ------ | ------- | --------- | --- |
| 7zip.install                        |      | c      |         | c         |     |
| alldup                              | m    | c      | -       | -         |     |
| anydesk                             | m    | c      | -       | c         |     |
| arduino                             | c    |        | -       | -         |     |
| audioswitcher                       | m    | c      | -       | c         |     |
| bitwarden                           | m    | c      | -       | c         |     |
| brave                               | m    | c      | c       | c         |     |
| calibre                             | c    |        | -       | -         |     |
| chocolateygui                       | c    |        | -       | -         |     |
| discord.install                     |      | c      |         | c         |     |
| docker-desktop                      |      | c      |         | c         |     |
| everything                          | c    | c      | -       | c         |     |
| extractnow                          | c    |        | -       | -         |     |
| fastcopy                            |      | c      |         | c         |     |
| filebeat                            |      | c      |         | -         |     |
| foxitreader                         |      | c      |         | c         |     |
| git.install                         | c    | c      | -       | c         |     |
| github-desktop                      | c    | c      | -       | c         |     |
| handbrake                           |      | c      |         | -         |     |
| jdownloader                         | c    | c      |         | c         |     |
| kopiaui                             | c    | c      | -       | c         |     |
| metricbeat                          |      | c      |         | -         |     |
| notepadplusplus                     | m    | c      |         | c         |     |
| obsidian                            | m    | c      |         | c         |     |
| paint.net                           | c    | c      |         | c         |     |
| pdf24                               | c    | c      | -       | c         |     |
| prometheus-windows-exporter.install |      | c      |         | -         |     |
| putty                               | m    | c      |         | c         |     |
| pycharm-community                   |      | c      |         | -         |     |
| rpi-imager                          | m    | c      | -       | c         |     |
| sonos-controller                    | m    |        | -       | c         |     |
| spotify                             | m    | c      | -       | c         |     |
| steam                               | m    | m      | c       | c         |     |
| synctrayzor                         | m    | c      | -       | c         |     |
| tailscale                           | m    | c      | -       | c         |     |
| teamspeak                           | m    | c      | c       | c         |     |
| telegram                            | m    | c      | -       | c         |     |
| treesizefree                        | c    | c      | -       | -         |     |
| vlc                                 | m    | c      |         | c         |     |
| vscode                              | c    | -      |         | c         |     |
| vscodium                            |      | c      |         | -         |     |
| win32diskimager                     | m    |        | -       | -         |     |
| wiztree                             | c    |        |         | -         |     |

Special notes:
- [extractnow](https://extractnow.com/#/home) (no longer available in Chocolatey)
- alldup (outdated, last update: 29 Jun 2021)
- audioswitcher (doesn't work under Win11?)

Install all at once:
  ```shell
  choco install -y <pkg1> <pkg2>
  ```



