---
title: 
date: 2025-01-14
publishDate: 2025-01-14
updated: 2025-01-19
draft: true
tags:
  - note
  - unfinished
---

# Page Structure

https://quartz.jzhao.xyz/layout

![https://quartz.jzhao.xyz/images/quartz-layout-desktop.png](https://quartz.jzhao.xyz/images/quartz-layout-desktop.png)

General considerations (features I want to add to my blog):
  - search and darkmode in same line
  - Homepage specific setup:
    - no ToC
    - no Backlinks
    - only here: RecentNotes (on right side) -> SOLVED
  - mobile view needs better navigation -> "Map" page (and maybe icon on top)
    - Overview of main categories (manually)
    - List of all tags
    - List of recently changed files
    - (optional) dynamically generate Dataview tables
  - mobile view needs ToC on top of page
    - beautiful, but complicated solution: https://turntrout.com/launch
    - idea: add as mobile only to pageBody
      - -> add `Component.MobileOnly(Component.TableOfContents()),` to the end of `beforeBody` to `quartz.layout.ts`
      - problem: expanded by default (I didn't manage to separately configure the two ToC on each page)
  - modify ToC to better distinguish entries that take more than 1 line
    - example: https://turntrout.com/launch
  - links to Code/Raw.md/History on top
    - (source, blame & history): https://quartz.eilleeenz.com/ -> https://github.com/fanteastick/quartz-test/blob/v4/quartz/components/ContentMeta.tsx
    - (Blame + History): https://notes.yxy.ninja/AWS/Storage/AWS-Parameter-Store -> https://github.com/xy-241/CS-Notes/blob/v4/quartz/components/ContentMeta.tsx
  - hide specific tagged pages from explorer/graph: https://quartz.eilleeenz.com/meta/Hiding-tags-from-various-components
  - 

- left
  - Blog title
  - Icons
    - Map
    - Dark Mode
    - Search
    - BurgerMenu -> opens NavBar (only in mobile view?)
  - Links (with description, only in desktop mode) -> https://github.com/ellie/notes/blob/v4/quartz/components/Links.tsx
    - ...
  - Explorer (only in desktop mode, on first page)
  - Recent Notes ("Recent Updates", only in desktop mode, on first page)
- right
  - Recent listening (only in desktop mode) -> better not to include here, instead only in a page
  - GraphView (only in desktop mode)
  - ToC (collapsed in mobile view -> https://turntrout.com/launch)
  - 
- beforeBody
  - breadcrumbs (without page title)
  - AboutThisPage
    - created
    - updated
    - GitHub links
  - Tags
- pageBody
  - ...
- afterbody
  - 2 columns, like https://be-far.com/ (not on first page)
    - Graph view
    - Backlinks
- footer
  - Links
  - Scroll to top
  - random page

# File Structure
 
```
- Braindump/Thoughts/Misc
	...
- Craft/Life/Brewing
	...
- Guides/Tutorials/Projects
	...
- Notes/Resources
	...
- Posts
	...
- tags
	...
- templates
	...

About Me
Contact
Status
Map

---

notes/posts


---

-> Backlinks below text
-> no ToC on start Page
-> Start Page specific settings:
	- no ToC
	- only here: Recent Notes/Posts
	- only here: Explorer

---

Folders:
- tags
- Braindump
    Unstructured, mostly short ideas
- Life
    Cooking, brewing, personal stuff
- Posts
    Longer guides, tutorials & resources.
- Projects
    Complete writeups of projects, meta-notes (like quartz starting page)
    ---------------------------------

Required Main Tags:
- coding
- homelab / selfhosted / devops 
- brewing
- media
- personal

Meta Tags:
- internal
- unfinished
- barebone
- untested
```

# Frontmatter

```
---
permalink: welcome
publish: "true"
hide_metadata: "true"
title: The Pond
hide_title: "true"
aliases:
  - index
  - home
  - welcome
hideSubscriptionLinks: true
description: Writings on AI, self-improvement, and living a good life.
date_published: 2024-10-27 19:14:04.653922
date_updated: 2024-11-17 10:03:38.936163
tags:
  - website
---


---
title: 
permalink: 
publish: false
no_dropcap: "false"
tags: 
description: ""
authors: Alex Turner
hideSubscriptionLinks: false
card_image: 
aliases:
---



```