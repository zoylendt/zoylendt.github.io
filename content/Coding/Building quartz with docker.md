---
title: Building Quartz With Docker
date: 2024-02-05
updated: 2024-06-15
publishDate: 2024-02-05
draft: false
enableToc: true
tags:
  - note
  - quartz
  - docker
  - windows
  - powershell
  - unfinished
---

> [!tip] Associated notes
> This note is part of a series about how this blog is set up.
> See [[Quartz starting page|here]] for an overview.
 
You want to locally build a preview of your Quartz website or want to locally host your notes without exposing them to the general web, but installing the required versions of `node` and `npm` is to bothersome?

However somehow you have already installed `Docker` on your machine? 

```shell title="First Start in Windows PowerShell"
cd "path\to\cloned\quartz\repo"
docker build -qt blog .
docker run -dp 8071:8080 --name blog blog
```

>[!note]
> Here it is assumed that there is no previous local image or container with the name "blog", and that port 8071 is unused. These variables can be changed of course.

The website is now reachable locally at "localhost:8071"

After making a change (a config file or inside /content), you can remove and recreate container and image (assuming you're still in the same directory in PowerShell):

```shell title="Recreating in Windows PowerShell"
docker rm -f blog
docker image rm blog
docker build -qt blog .
docker run -dp 8071:8080 --name blog blog
```

If the blog fails to start (for example caused by a misformatted line in the frontmatter of a .md file), the container log can be viewed with

```shell
docker logs blog
```

---

- [Download recent Quartz](https://github.com/jackyzha0/quartz/archive/refs/heads/v4.zip)
- extract
- `[Win]+[x],[i]`, `cd "$env:USERPROFILE\Downloads\quartz-4"`
```shell
cd "$env:USERPROFILE\Downloads\quartz-4"
```
- `Expand-Archive '.\quartz-4.zip' .`
```powershell
Expand-Archive '.\quartz-4.zip' .
cd '.\quartz-4\'
New-Item .\content\index.md
...
Start-Process "http:localhost:8071"
```

---

`[Win]+[x],[i]`

```powershell title="Powershell-oneliner: download & depoly dummy blog"
cd "$env:USERPROFILE\Downloads\" ; Invoke-WebRequest "https://github.com/jackyzha0/quartz/archive/refs/heads/v4.zip" -OutFile quartz-4.zip ; Expand-Archive '.\quartz-4.zip' . ; cd '.\quartz-4\' ; New-Item .\content\index.md ; docker rm -f blog ; docker image rm blog ; docker build -qt blog . ; docker run -dp 8071:8080 --name blog blog ; Start-Sleep -Seconds 5 ; Start-Process "http:localhost:8071"
```

```powershell title="Powershell-oneliner: download & depoly documentation blog"
cd "$env:USERPROFILE\Downloads\" ; Invoke-WebRequest "https://github.com/jackyzha0/quartz/archive/refs/heads/v4.zip" -OutFile quartz-4.zip ; Expand-Archive '.\quartz-4.zip' . ; cd '.\quartz-4\' ; Copy-Item -Path ".\docs\*" -Destination ".\content" -Recurse ; docker rm -f blog ; docker image rm blog ; docker build -qt blog . ; docker run -dp 8071:8080 --name blog blog ; Start-Sleep -Seconds 8 ; Start-Process "http:localhost:8071"
```

```powershell title="Powershell-oneliner: rebuild blog"
cd "$env:USERPROFILE\Downloads\quartz-4\" ; docker rm -f blog ; docker image rm blog ; docker build -qt blog . ; docker run -dp 8071:8080 --name blog blog ; Start-Sleep -Seconds 8 ; Start-Process "http:localhost:8071"
```

```powershell title="Powershell-oneliner: cleanup"
cd "$env:USERPROFILE\Downloads\" ; rm -r .\quartz-4.zip ; rm -r .\quartz-4\ ; docker rm -f blog ; docker image rm blog
```