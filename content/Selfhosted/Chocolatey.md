---
title: 
date: 2024-06-01
publishDate: 2024-06-01
updated: 2024-10-16
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

c = installed through chocolatey  
m = manually installed  
\- = not installed  

|                                     | m700 | x1y3-2 | zalman2 | prod400g5 | VM  |
| ----------------------------------- | ---- | ------ | ------- | --------- | --- |
| 7zip.install                        |      | c      |         | c         |     |
| alldup                              | m    | c      | -       | -         |     |
| anydesk.install                     | m    | c      | m       | m         |     |
| arduino                             | c    |        | -       | -         |     |
| bitwarden                           | m    | c      | m       | m         |     |
| brave                               | m    | c      | m       | m         |     |
| calibre                             | c    |        | m       | -         |     |
| chocolateygui                       | c    |        | c       | -         |     |
| docker-desktop                      |      | c      |         | m         |     |
| everything                          | c    | c      | m       | c         |     |
| extractnow                          | c    |        | -       | -         |     |
| fastcopy                            |      | c      |         | c         |     |
| filebeat                            |      | c      |         | -         |     |
| foxitreader                         |      | c      |         | c         |     |
| git.install                         | c    | c      | m       | c         |     |
| github-desktop                      | c    | c      | m       | c         |     |
| handbrake                           |      | c      |         | c         |     |
| jdownloader                         | c    | c      |         | c         |     |
| kopiaui                             | c    | c      | c       | c         |     |
| metricbeat                          |      | c      |         | -         |     |
| notepadplusplus                     | m    | c      |         | c         |     |
| obsidian                            | m    | c      |         | c         |     |
| paint.net                           | c    | c      |         | -         |     |
| pdf24                               | c    | c      | c       | c         |     |
| prometheus-windows-exporter.install |      | c      |         | -         |     |
| putty                               | m    | c      |         | c         |     |
| pycharm-community                   |      | c      |         | c         |     |
| rpi-imager                          | m    |        | m       | -         |     |
| sonos-controller                    | m    |        | -       | c         |     |
| spotify                             | m    | c      | m       | c         |     |
| steam                               | m    | m      | m       | m         |     |
| synctrayzor                         | m    | c      | m       | m         |     |
| tailscale                           | m    | c      | m       | m         |     |
| teamspeak                           | m    | c      | m       | m         |     |
| telegram                            | m    | c      | m       | m         |     |
| treesizefree                        | c    | c      | c       | c         |     |
| vlc                                 | m    | c      |         | c         |     |
| vscode                              | c    | -      |         | -         |     |
| vscodium                            |      | c      |         | c         |     |
| win32diskimager                     | m    |        | m       | -         |     |
| wiztree                             | c    |        |         | -         |     |

Special notes:
- [extractnow](https://extractnow.com/#/home) (no longer available in Chocolatey)
- alldup (outdated, last update: 29 Jun 2021)

Install all at once:
  ```shell
  choco install -y 
  ```



