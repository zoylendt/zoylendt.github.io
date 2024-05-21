---
title: 
date: 2024-05-16
publishDate: 2024-05-16
updated: 2024-05-22
draft: false
tags:
  - note
  - quartz
---

A collection of Quartz bugs I noticed, and some improvement Ideas I came up with.

# Bugs

- [Graph config](https://quartz.jzhao.xyz/features/graph-view): `removeTags: [], // what tags to remove from the graph` (at least in the global graph) doesn't work, like here: `removeTags: [note],`
	- (I use `#note` on all posts -> `linkToAll` in the `RecentNotes` plugin to link to all notes created)

![[Pasted image 20240522010806.png]]

- searching for `foo.bar` returns sites containing `foo` and `bar` separately as well -> should only return sites containing `foo.bar`
- if the string `#foo` appears in a .md file outside of the frontmatter, it gets added to the list of tags despite not being present in the frontmatter
- 

# Enhancement ideas

- add `-`, `->` or `/cdot` in front of chapters in ToC, in order to enhance readability
	- (or some default emoji, if none is present already)
	- `->` renders in ToC as `<span>&rarr;</span>`
- specify a part of .md file that doesn't get parsed into quartz (e.g. for `dataview`, in order to use [this](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#List_unlinked_files))
- check for dead (internal) links
- GitHub-commit-history-style history in the last year -> like https://github.com/Platane/snk but only for commits to your blog
- 
