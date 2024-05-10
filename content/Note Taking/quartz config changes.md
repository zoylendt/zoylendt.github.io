---
title: Quartz Personalization
date: 2024-02-07
draft: false
enableToc: true
tags:
  - post
  - markdown
  - self hosted
---
 
This post's topic are the changes I made of my Quartz instance, in order to differentiate its appearance from the default config.

The main drawback of changing core components of Quartz is, that an upstream update might break your installation (if you incorporate it without looking closely).

# Planned changes

The inspirations for this changes come from the [Quartz Showcases](https://quartz.jzhao.xyz/showcase), mainly the following ones:
  - Change the [Layout](https://quartz.jzhao.xyz/layout) for all pages
	  - Change the blog name
	  - Change the default footer
	  - Compress the search bar to fit the light/dark mode toggle switch next to it instead of under it
  - Remove the [Explorer](https://quartz.jzhao.xyz/features/explorer) from all but the `index.md` page
  - Show `Last updated at` and `History` (link to github file history) next to `Published at` and `Reading time`, like here: https://www.chadly.net/ & https://notes.yxy.ninja/
  - Change the background from plain white, like here: https://jzhao.xyz/ & https://mwalton.me/ -> [GitHub](https://github.com/jackyzha0/jackyzha0.github.io/blob/db58591f9291df6f789e80294a343c5ffd424918/quartz/styles/custom.scss#L20)
  - Exclude some pages, like `tags`, from the [Graph View](https://quartz.jzhao.xyz/features/graph-view)
  - (optional) Change the width at which the left and right layout parts get removed
  - Make **fat text** more stand out (noticeable in dark mode)
  - Link to `all tags` next to search and mode toggle, like here: https://glossary.airbyte.com/
  - `Recent Updates` part at start page, like here: https://glossary.airbyte.com/
  - Have some links on the top of each page, like here: https://notes.camargomau.com/ -> [GitHub](https://github.com/camargomau/notkesto-site/blob/7b8a7c5069fb78401022481631223b7e9acb39fe/quartz/components/LinksHeader.tsx#L15)
  - Change font (and make chapter titles all uppercase), like here: https://www.pmcf.xyz/topo-da-mente/ -> front name: [Lexend](https://www.lexend.com/)
  - Show `Most recent notes` in left layout part, like here: https://www.pmcf.xyz/topo-da-mente/
  - ...

Sadly, some Quartz blogs haven't documented their changes:

  - Animated image when hovering over, like here: https://www.pmcf.xyz/topo-da-mente/ (not documented)
  - Move tags to right layout part, like here: https://www.pmcf.xyz/topo-da-mente/ (not documented)

# Modified files

## quartz.config.ts

In `quartz.config.ts` ...

Changes:
   - Line `6`: The blog's title, displayed on each page's top left corner.
   - Line `10`: Disabling analytics.
   - Line `12`: The blog's base URL, very important!
   - Line `54`: I changed the LaTEX rendering engine because the default, `katex`, didn't work properly sometimes.

```ts {6,10,12,54} title="quartz.config.ts"
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "☣ Zoyblog",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "null",
    },
    baseUrl: "zoylendt.github.io/blog",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "mathjax" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
```

## quartz.layout.ts

In `quartz.layout.ts` ...

Changes:
   - Line `11-12`: Links in the footer of each site.
   - Line `3, 28-51`: Changes of elements in the left column:
      - ...
      - ...
   - Line `54-61`: Changes of elements in the right column:
      - ...
      - ...

... (important text block!)

```ts {3,11-12,28-51,54-61} title="quartz.layout.ts"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/zoylendt/blog",
      "Contact": "https://discord.gg/---",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
	Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Posts",
        limit: 4,
        filter: (f) =>
          !f.frontmatter?.noindex,
        linkToMore: "tags/post" as SimpleSlug,
      }),
    ),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer({
  mapFn: (node) => {
    // dont change name of root node
    if (node.depth > 0) {
      // set emoji for file/folder
      if (node.file) {
        node.displayName = "📄 " + node.displayName
      } else {
        node.displayName = "📁 " + node.displayName
      }
      }
      },
    })),
  ],
  right: [
    Component.Graph({
      localGraph: {
        showTags: false,
      },
      globalGraph: {
        showTags: false,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
```

## /quartz/styles/custom.scss

...

## /quartz/static

...

## /quartz/components

...


# Original files

The unaltered config files are included here, in order to make it easier to compare them.

> [!abstract]- `quartz.config.ts`
> 
> ...

<details>
  <summary>Click me</summary>
  
  ### Heading
  1. Foo
  2. Bar
     * Baz
     * Qux

  ### Some Javascript
  ```js
  function logSomething(something) {
    console.log('Something', something);
  }
  ```
</details>


# ...



| :exclamation:  This is very important   |
|-----------------------------------------|


| :zap:        Ignore at your own risk!   |
|-----------------------------------------|



| :memo:        | Take note of this       |
|---------------|:------------------------|


| :point_up:    | Remember to not forget! |
|---------------|:------------------------|



| :warning: WARNING          |
|:---------------------------|
| I should warn you ...      |


| :boom: DANGER              |
|:---------------------------|
| Will explode when clicked! |



<table>
  <thead>
    <tr>
      <td align="left">
        :information_source: Information
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <ul>
          <li>Tis not true.</li>
          <li>I won't explode.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
