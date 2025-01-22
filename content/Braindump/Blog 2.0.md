---
title: 
date: 2025-01-14
publishDate: 2025-01-14
updated: 2025-01-20
draft: true
tags:
  - note
  - unfinished
---

# Page Structure

https://quartz.jzhao.xyz/layout

![https://quartz.jzhao.xyz/images/quartz-layout-desktop.png](https://quartz.jzhao.xyz/images/quartz-layout-desktop.png)

General considerations (features I want to add to my blog):
  - search and darkmode in same line (optionally add map icon)
  - Homepage specific setup:
    - no ToC -> SOLVED
    - no Backlinks -> SOLVED
    - only here: RecentNotes (on right side) -> SOLVED
  - mobile view needs better navigation -> "Map" page (and maybe icon on top)
    - Overview of main categories (manually created text)
    - List of all tags -> https://turntrout.com/posts#explore-by-tag
    - List of recently changed files -> https://turntrout.com/posts#my-recent-posts
    - (optional) dynamically generate Dataview tables
  - mobile view needs ToC on top of page
    - beautiful, but complicated solution: https://turntrout.com/launch
    - idea: add as mobile only to pageBody
      - -> add `Component.MobileOnly(Component.TableOfContents()),` to the end of `beforeBody` to `quartz.layout.ts`
      - problem: expanded by default (I didn't manage to separately configure the two ToC on each page)
  - modify ToC to better distinguish entries that take more than 1 line -> like here https://turntrout.com/launch
    - Alternative idea: add "- " or a dot in front of each element in ToC
  - links to Code/Raw.md/History on top
    - (source, blame & history): https://quartz.eilleeenz.com/ -> https://github.com/fanteastick/quartz-test/blob/v4/quartz/components/ContentMeta.tsx
    - (Blame + History): https://notes.yxy.ninja/AWS/Storage/AWS-Parameter-Store -> https://github.com/xy-241/CS-Notes/blob/v4/quartz/components/ContentMeta.tsx
  - hide specific tagged pages from explorer/graph: https://quartz.eilleeenz.com/meta/Hiding-tags-from-various-components
  - remove strikethrough on checked off boxes -> https://quartz.eilleeenz.com/Quartz-customization-log#removing-strikethrough-on-checked-off-boxes
  - add divider right after page content -> https://quartz.eilleeenz.com/Quartz-customization-log#add-a-divider-right-after-page-content
  - make tags align to the right (and change color) -> https://be-far.com/Programs-I-Like/code-editors
  - Automatically increase permalink number > https://forum.obsidian.md/t/automatically-update-project-id-value-in-frontmatter/49674/2
  - ...

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

# Additional stuff

- [ ] add text animations (like [here](https://quartz.eilleeenz.com/meta/Code-tester)) -> https://github.com/Naraenda/quartz-ascone/commit/6c094df3ac0863d0f13690ca2136ad894943e76e & https://quartz.eilleeenz.com/Quartz-customization-log#copying-fancy-text-and-sticky-notes-from-naras-ascone
- [ ] document changed files -> https://github.com/zoylendt/zoylendt.github.io/compare/upstream...v4
- [ ] change favicon & banner image -> https://quartz.eilleeenz.com/Quartz-customization-log#changed-favicon-by-the-image-path-also-the-banner
- [x] restore full breadcrumbs but hide on mobile view (-> hiding on desktop view doesn't work somehow)
- [ ] modify footer
  - [ ] update footer with link to "Contact" (instead of pasting mail here)
  - [ ] add button/link to scroll to top
- [x] change CSS when permalink is copied to clipboard
- [ ] Fix links to/from footnotes (on long notes) -> https://quartz.eilleeenz.com/Quartz-customization-log#disabling-popover-on-footnotes-and-subtitles
- [ ] change color/opacity of "subtitle" & "permalink", mainly in LightMode
- [ ] change link in RecentNotes (to "Dataview" or to "All-files-chronologically-modified")
  - [ ] create [list of all notes chronologically modified](https://quartz.eilleeenz.com/meta/All-files-chronologically-modified) and add to map (with [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) and [Obsidian Dataview Serializer](https://github.com/dsebastien/obsidian-dataview-serializer))
  - [ ] add page "Dataview" (also list unpublished notes? can be found in git anyway)
- [ ] fix that "RecentNotes" appears twice on Home & Map (maybe add tags to RecentNotes in afterPage?)
- [ ] experiment with better graph settings (and colors)
- [ ] maybe show folder structure on Map in a "tree graph"?
- [ ] move Backlinks to afterPage (and hide when empty?)
- complicated: 
  - modify ToC to add "- " (or similar) in front of each element (and indent following lines by a few spaces)
  - move DarkMode button next to Search (in Desktop view) & add Map button to it -> https://quartz.eilleeenz.com/Quartz-customization-log#forcing-icons-into-a-row-in-the-top-corner
  - turn Search box into icon instead (maybe only on Mobile view)
  - use encrypted notes (not yet implemented): [PR #1481](https://github.com/jackyzha0/quartz/pull/1481) & [Issue #166](https://github.com/jackyzha0/quartz/issues/1636)
  - reduce empty space (in Mobile view) between ToC and pageBody
  - change how tables are rendered (best: make tables sortable)