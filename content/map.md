---
title: Map
subtitle: 
description: 
permalink: 
date: 2025-01-20
publishDate: 2025-01-20
updated: 2025-02-07
draft: false
enableToc: false
tags:
  - unfinished
  - blog
  - meta
---
 
Folders:
  - [[Braindump]]: Unstructured, mostly short ideas
  - [[Life]]: Cooking, brewing, personal stuff
  - [[Notes]]: Short pages, collections of web resources
  - [[Projects]]: Complete write-ups of projects, meta/overview notes
  - [[Writing]]: Longer guides & tutorials

---

<!-- QueryToSerialize: 
TABLE WITHOUT ID
link(file.name, title) AS "Title", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS "Folder", dateformat(updated, "yyyy-MM-dd") AS "Updated" 
FROM "public/Braindump" OR "public/Life" OR "public/Notes" OR "public/Posts" OR "public/Projects"
SORT updated DESC 
WHERE file.name != this.file.name AND draft != "true" AND file.folder != "public/zzz_static_files/my quartz config files" AND draft = false
-->

---

<!-- QueryToSerialize: 
TABLE WITHOUT ID
count,
"#" + join((rows.tags), ", #") as Tags
WHERE tags
FLATTEN tags
GROUP BY tags
GROUP BY length(rows.rows) as count
SORT count DESC
-->