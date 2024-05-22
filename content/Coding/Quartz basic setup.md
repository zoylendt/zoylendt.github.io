---
title: 
date: 2024-05-22
publishDate: 2024-05-22
updated: 2024-05-22
draft: true
tags:
  - note
  - quartz
  - github
  - unfinished
---

> [!tip] Associated notes
> This note is part of a series about how this blog is set up.
> See [[Quartz starting page|here]] for an overview.

This note is about how to spin up your own quartz instance, hosted on [GitHub Pages](https://pages.github.com/). It's a minimal setup that will look like the [Quartz documentation](https://quartz.jzhao.xyz/)) and it's the starting point for [[Quartz customizations|additional customizations]].

In this guide we'll host Quartz on GitHub Pages, however there are [other options](https://quartz.jzhao.xyz/hosting). 


- Fork https://github.com/jackyzha0/quartz (name: GHUSERNAME.github.io)
- create new branch "upstream" (from v4, useful to compare changes that happen upstream which might require config changes)
- delete the folder "content" and the file README.md (and `Build and Test` workflow)
- follow https://quartz.jzhao.xyz/hosting#github-pages
- (optional) Instructions for use with a custom domain: https://quartz.jzhao.xyz/hosting#custom-domain