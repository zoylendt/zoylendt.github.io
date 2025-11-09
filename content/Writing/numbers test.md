---
title: Numbers Test
subtitle: 
description: 
permalink: 
date: 2025-11-09
publishDate: 2025-11-09
updated: 2025-11-09
draft: false
publish: true
tags:
  - test
---

This is for testing the pririty of directories when resolving linked files.

Here is a number linked:

![[number.png]]

# Locations

- 1: in the same folder
- 2: in a subfolder 'attachments'
- 3: in the root folder
- 4: in a subfolder 'attachments' of the root folder
- 5: in braindump
- 6: in braindump/attachments
- 7: in life
- 8: in life/attachments

# Priority

| Priority     | Quartz        | Obsidian   |
| ------------ | ------------- | ---------- |
| 1            | 3             | 1          |
| 2            | -             | -          |
| 3            | -             | -          |
| 4            | -             | -          |
| 5            | -             | -          |
| 6            | -             | -          |
| 7            | -             | -          |
| 8            | -             | -          |

