---
title: Building Quartz With Docker
date: 2024-02-05
updated: 2024-05-18
publishDate: 2024-02-05
draft: false
enableToc: true
tags:
  - note
  - quartz
  - docker
  - unfinished
---

> [!warning]
> This note is highly unfinished!
 
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

If the blog fails to start (for example because a misformatted line in the frontmatter of a .md file), the container log can be viewed with

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
```
Expand-Archive '.\quartz-4.zip' .
cd '.\quartz-4\'
New-Item .\content\index.md
...
```
- 