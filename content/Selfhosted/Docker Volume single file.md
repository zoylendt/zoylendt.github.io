---
title: 
date: 2024-06-12
publishDate: 2024-06-12
updated: 2024-06-12
draft: true
tags:
  - note
  - unfinished
  - docker
---
 
Some dockerized applications require a single config file to be mounted instead of a whole directory.

(Example)

While it is possible to create a single-file volume, it has some [big limitations](https://github.com/moby/moby/issues/30310#issue-202111327)


Apparently the "subpath mount" [feature](https://github.com/moby/moby/issues/32582) has been [implemented](https://github.com/moby/moby/pull/45687).

This works in Podman ([claimed here](https://github.com/moby/moby/issues/32582#issuecomment-1286695383)):
- https://github.com/containers/podman/issues/20661
- 

---

- https://www.baeldung.com/ops/docker-mount-single-file-in-volume
- https://stackoverflow.com/questions/42248198/how-to-mount-a-single-file-in-a-volume
- https://unix.stackexchange.com/questions/651198/podman-volume-mounts-when-to-use-the-z-or-z-suffix
- 