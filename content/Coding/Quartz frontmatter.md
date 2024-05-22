---
title: 
date: 2024-05-20
publishDate: 2024-05-20
updated: 2024-05-22
draft: true
tags:
  - note
  - quartz
  - markdown
---

Documentation of the Quartz frontmatter implementation: [Here](https://quartz.jzhao.xyz/plugins/Frontmatter)



```
title: 
aliases:
  - alias1
description: <Description of the page used for link previews>
date: 2024-05-20
publishDate: 2024-05-20
updated: 2024-05-20
draft: true
publish: false
enableToc: true
tags:
  - note
  - changeme
```

components without any effect:

```
aliases:
  - alias1
description: <Description of the page used for link previews>
publishDate: 2024-05-20
publish: false
```

# not allowed (or GitHub Action fails)

- `:` in title
	- fails: `title: movie: 123`
	- works: `title: "movie: 123"`
- 

# My default frontmatter (Obsidian template)

```
---
title: 
date: {{date}} 
publishDate: {{date}} 
updated: {{date}} 
draft: true
tags:
  - note
  - unfinished
---
```