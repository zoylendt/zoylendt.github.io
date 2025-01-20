---
title: 
date: 2024-05-20
publishDate: 2024-05-20
updated: 2024-05-22
draft: false
tags:
  - note
  - quartz
  - markdown
  - unfinished
---

> [!tip] Associated notes
> This note is part of a series about how this blog is set up.
> See [[Quartz starting page|here]] for an overview.

Documentation of the Quartz frontmatter implementation: [Here](https://quartz.jzhao.xyz/plugins/Frontmatter)

Frontmatter example:

```md
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

Apparently by Quartz ignored components:

```md
aliases:
  - alias1
description: <Description of the page used for link previews>
publishDate: 2024-05-20
publish: false
```

# not allowed (or GitHub Action fails)

> [!warning]
> A wrongly formatted frontmatter can prevent Quartz from compiling successfully!

- `:` in title
	- fails: `title: movie: 123`
	- works: `title: "movie: 123"`

# My default frontmatter (Obsidian template)

```md
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


# Notes

- `draft: flase` gets treated as (the default?) `draft: true`