---
title: 
date: 2025-01-14
publishDate: 2025-01-14
updated: 2025-01-14
draft: true
tags:
  - note
  - unfinished
---

# Page Structure

![https://quartz.jzhao.xyz/images/quartz-layout-desktop.png](https://quartz.jzhao.xyz/images/quartz-layout-desktop.png)

- left
  - Blog title
  - Search
- right
  - ...
- beforeBody
  - ...
- pageBody
  - ...
- afterbody
  - ...
- footer
  - ...

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
    Complete writeups of projects
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