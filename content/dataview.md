---
title: Dataview
subtitle: 
description: 
permalink: 
date: 2025-01-29
publishDate: 2025-01-29
updated: 2025-02-01
draft: true
tags:
  - unfinished
  - graph-exclude
  - explorer-exclude
  - backlinks-exclude
  - recents-exclude
---
 
Ideas:
- [ ] pages without backlinks

# Complete

## All published notes

Published & unpublished, with folder & update date.
```dataview
TABLE WITHOUT ID
link(file.name, title) AS "Title", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder", dateformat(updated, "yyyy-MM-dd") AS "Updated" 
FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Posts" OR "public/Projects"
SORT updated DESC 
WHERE file.name != this.file.name AND draft != "true" AND file.folder != "public/zzz_static_files/my quartz config files" AND draft = false
```

## All unpublished notes

Published & unpublished, with folder & update date.
```dataview
TABLE WITHOUT ID
link(file.name, title) AS "Title", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder", dateformat(updated, "yyyy-MM-dd") AS "Updated" 
FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Posts" OR "public/Projects"
SORT updated DESC 
WHERE file.name != this.file.name AND draft != "true" AND file.folder != "public/zzz_static_files/my quartz config files" AND draft = true
```

## All tags by 