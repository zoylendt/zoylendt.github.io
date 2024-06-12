---
title: 
date: 2024-06-12
publishDate: 2024-06-12
updated: 2024-06-12
draft: true
tags:
  - note
  - unfinished
---
 
Some dockerized applications require a single config file to be mounted instead of a whole directory.

(Example)

While it is possible to create a single-file volume, it has some [big limitations](https://github.com/moby/moby/issues/30310#issue-202111327)


Apparently the "subpath mount" feature has 