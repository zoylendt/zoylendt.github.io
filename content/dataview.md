---
title: Dataview
subtitle: 
description: 
permalink: 
date: 2025-01-29
publishDate: 2025-01-29
updated: 2025-02-12
draft: true
tags:
  - unfinished
  - graph-exclude
  - explorer-exclude
  - backlinks-exclude
  - recents-exclude
---
A page which generates dataview tables about pages in the blog.

# Resources

- [Blacksmith](https://blacksmithgu.github.io/obsidian-dataview/)
- [example vault](https://github.com/s-blu/obsidian_dataview_example_vault)
- [obsidian-dataview-serializer](https://github.com/dsebastien/obsidian-dataview-serializer) -> like it's used here: https://quartz.eilleeenz.com/meta/All-files-chronologically-modified
- 

# Ideas for tables

- [x] lists of all published/unpublished pages
- [ ] list pages without backlinks (graph looks weird for these)
- [ ] tables for all published & unpublished notes
- [x] list/table of all tags, sorted by frequency
    - [ ] limit to correct folders
    - [ ] exclude specific tags (but not exclude notes with this tags?)
    - [ ] exclude unpublished notes
- [ ] display latest time when this page has been updated-> Today is **`= date(today)`**, and it's **`= dateformat(date(now), "HH:MM")`**.
- [ ] list all perma links
- [ ] 
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

as list: [source](https://www.reddit.com/r/ObsidianMD/comments/1bhq8cp/listing_tags_with_counts_in_a_single_dataview_line/)
```dataview
TABLE WITHOUT ID
count,
join(rows.tags, ", ") as Tags
WHERE tags
FLATTEN tags
GROUP BY tags
GROUP BY length(rows.rows) as count
SORT count DESC
```

with clickable tags:
```dataview
TABLE WITHOUT ID
count, "#" + join((rows.tags), ", #") as Tags
WHERE tags
FLATTEN tags
GROUP BY tags
GROUP BY length(rows.rows) as count
SORT count DESC
```

modified links:

`[#docker](https://zoylendt.github.io/tags/docker)` -> [#docker](https://zoylendt.github.io/tags/docker)
```dataview
TABLE WITHOUT ID
count, "[#" + (rows.tags) + "](https://zoylendt.github.io/tags/" + (rows.tags) + ")" as Tags
WHERE tags
FLATTEN tags
GROUP BY tags
GROUP BY length(rows.rows) as count
SORT count DESC
```