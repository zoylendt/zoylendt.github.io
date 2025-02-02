---
title: Dataview
subtitle: 
description: 
permalink: 
date: 2025-01-29
publishDate: 2025-01-29
updated: 2025-02-02
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

Today is **`= date(today)`**, and it's **`= dateformat(date(now), "HH:MM")`**.
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

## Tags by frequency

```dataview
TABLE WITHOUT ID (tag + "(" + length(rows.file.link) + ")") AS Tags
FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Posts" OR "public/Projects"
WHERE file.tags 
FLATTEN file.tags AS tag 
GROUP BY tag
SORT length(rows.file.link) DESC
```

as List:

```dataview
TABLE WITHOUT ID
count,
join("#" + rows.tags, ", #") as Tags
WHERE tags
FLATTEN tags
GROUP BY tags
GROUP BY length(rows.rows) as count
SORT count DESC
```


