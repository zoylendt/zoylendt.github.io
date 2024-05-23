---
title: 
date: 2024-05-23
publishDate: 2024-05-23
updated: 2024-05-23
draft: false
tags:
  - note
  - internal
  - docker
  - synology
---
 
A quick note about how to run MakeMKV in Docker on Synology (not needed).

Used to convert .VOB into .MKV.

1. Create folders in Synology webUI (or terminal):

```
mkdir /volume1/temp/input && mkdir /volume1/temp/output
```

2. Run in terminal:

```
docker run --rm -d --name=makemkv -p 9400:5800 -v /volume1/temp/input:/storage:ro -v /volume1/temp/output:/output:rw -e USER_ID=0 -e GROUP_ID=0 jlesage/makemkv
```

3. Connect browser to port 9400
4. Cleanup

```
docker stop makemkv
```

