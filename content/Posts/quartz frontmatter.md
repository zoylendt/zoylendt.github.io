---
title: Quartz frontmatter
subtitle: 
description: 
permalink: 
date: 2024-05-20
publishDate: 2024-05-20
updated: 2025-01-20
draft: false
tags:
  - quartz
  - markdown
  - unfinished
---

> [!tip] Associated notes
> This note is part of a series about how this blog is set up.
> See [[quartz starting page|here]] for an overview.

Documentation of the Quartz frontmatter implementation: [Here](https://quartz.jzhao.xyz/plugins/Frontmatter)

Frontmatter example:

```md
---
title: 
subtitle: An alternative title for the note
aliases:
  - alias1
  - alias2
description: 
permalink: perma/9266641
date: 2024-05-20
publishDate: 2024-05-20
updated: 2024-05-20
draft: false
enableToc: true
tags:
  - note
  - unfinished
  - graph-exclude
  - explorer-exclude
  - backlinks-exclude
  - recents-exclude
---
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
subtitle: 
description: 
permalink: 
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

- `draft: flase` (sic!) gets treated as (the default?) `draft: true`