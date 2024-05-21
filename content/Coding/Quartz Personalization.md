---
title: Quartz Personalization
date: 2024-02-07
updated: 2024-05-21
publishDate: 2024-02-07
draft: false
enableToc: true
tags:
  - note
  - markdown
  - quartz
  - selfhosted
---
 
This post's topic are the changes I made of my Quartz instance in order to differentiate its appearance from the default config.

The main drawback of changing core components of Quartz is, that upstream changes might break your installation (if you incorporate them without looking closely).

-> add callout with version info

> [!tip]
> The instructions here might be outdated, please check the [official instructions](https://quartz.jzhao.xyz/configuration) first!
> 

# Inspirations

The inspirations for this changes come from the [Quartz Showcases](https://quartz.jzhao.xyz/showcase), mainly the following ones:
  - Change the [Layout](https://quartz.jzhao.xyz/layout) for all pages
	  - Change the blog name
	  - Change the default footer
	  - Compress the search bar to fit the light/dark mode toggle switch next to it instead of under it
  - Remove the [Explorer](https://quartz.jzhao.xyz/features/explorer) from all but the `index.md` page
  - Change the Image shown in the browser tab, default: [Quartz image](https://github.com/jackyzha0/quartz/blob/v4/quartz/static/icon.png)
  - Show folder emoji in the explorer, see [here](https://quartz.jzhao.xyz/features/explorer#add-emoji-prefix)
  - Show `Last updated at` and `History` (link to github file history) next to `Published at` and `Reading time`, like here: https://www.chadly.net/ & https://notes.yxy.ninja/
  - Change the background from plain white, like here: https://jzhao.xyz/ & https://mwalton.me/ -> [GitHub](https://github.com/jackyzha0/jackyzha0.github.io/blob/db58591f9291df6f789e80294a343c5ffd424918/quartz/styles/custom.scss#L20)
  - Exclude some pages, like `tags`, from the [Graph View](https://quartz.jzhao.xyz/features/graph-view)
  - (optional) Change the width at which the left and right layout parts get removed
  - Make **fat text** more stand out (noticeable in dark mode)
  - Link to `all tags` next to search and mode toggle, like here: https://glossary.airbyte.com/
  - `Recent Updates` part at start page, like here: https://glossary.airbyte.com/ & https://www.ssp.sh/brain/
  - Have some links on the top of each page, like here: https://notes.camargomau.com/ -> [GitHub](https://github.com/camargomau/notkesto-site/blob/7b8a7c5069fb78401022481631223b7e9acb39fe/quartz/components/LinksHeader.tsx#L15)
  - Change font (and make chapter titles all uppercase), like here: https://www.pmcf.xyz/topo-da-mente/ -> front name: [Lexend](https://www.lexend.com/)
  - Show `Most recent notes` in left layout part, like here: https://www.pmcf.xyz/topo-da-mente/
  - Move Darkmode toggle to right layout part, like here: https://notes.yxy.ninja/
  - remove only tag #note from global graph
  - move tags to right column
  - remove tags from 'Recent Notes'
  - remove specific tagged notes from recent notes: https://zanca.dev/blog/quartz#setting-up-quartz
  - ...

Sadly, some Quartz blogs haven't documented their changes:

  - Animated image when hovering over, like here: https://www.pmcf.xyz/topo-da-mente/ (not documented) -> https://github.com/search?q=repo%3Afreenandes%2Ftopo-da-mente%20gate%20svg&type=code
  - Move tags to right layout part, like here: https://www.pmcf.xyz/topo-da-mente/ (not documented)
  - -> https://github.com/freenandes/topo-da-mente 

Idea for new folder structure:
- /contents/notes/[Brewing Coding etc]
- 
```
C:\users\USERNAME\Obsidian\VAULTNAME\
 ├── .git
 │   └── ...
 ├── .obsidian
 │   └── ...
 ├── .github
 │   ├── sync.yml
 │   └── workflows
 │       └── sync.yml
 ├── .trash
 │   └── .gitkeep
 ├── private
 │   └── .gitkeep
 └── public
 │   └── blog (or "notes"?)
 │       ├── index.md
 │       ├── template.md
 │       ├── tags
 │       │   └── tag1.md
 │       ├── Topic1
 │       │   ├── blogpage1.md
 │       │   └── attachments
 │       │       └── image.png
 │       └── Topic2
 │           └── blogpage2.md
 └── .gitignore
```

missing:
  - graph- und explorer exclude
  - folder emoji (index.md)
  - browser tab image
  - footer links
  - folder structure
  - tag structure
  - note template
  - enhancement ideas and bugs 
	  - add `-`, `->` or `/cdot` in front of chapters in ToC, in order to enhance readability
		  - (or some default emoji, if none is present already)
		  - `->` renders in ToC as `<span>&rarr;</span>`
	  - searching for `foo.bar` returns sites containing `foo` and `bar` separately as well
	  - specify a part of .md file that doesn't get parsed into quartz (e.g. for `dataview`, like [here](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/#List_unlinked_files))
	  - check for dead (internal) links

# Individual Changes

Finished:
  - Required:  [[Quartz Personalization#Minimal required config changes|Blog title, base URL]]
  - Analytics, fonts, colors
  - Footer links
  - Recent notes
  - Explorer customization
  - Graph customization
  - Desktop and mobile specific layout changes
  - LinksHeader -> [GitHub](https://github.com/search?q=repo%3Acamargomau%2Fnotkesto-site%20linksheader&type=code)
  - 

Missing:
  - `Last updated` & `History`
  - Browser tab image
  - Compress search bar (or add `all tags` next to darkmode toggle)
  - enable RSS
  - move DarkModeToggle to right, like here: https://notes.camargomau.com/
  - add explorer and recent posts to mobile layout
  - remove the page itself from its own backlinks

## Minimal required config changes

These are the only strictly required config changes: modify the `pageTitle` & `baseURL` in `quartz.config.ts`. Follow [this instructions](https://quartz.jzhao.xyz/configuration#general-configuration) for the `baseURL`.

Emojis might render differently depending on the end device, for example 🪴 (from the [Quartz Documentation Blog](https://quartz.jzhao.xyz/)) renders as a [potted plant](https://emojipedia.org/potted-plant) in iOS, but the Brave browser under Windows shows just a square. [Here](https://emojipedia.org/) can some renderings be compared.

Emoji examples: 🍺🍻🧠🌌🌊🪐🌠⚛☣🔖🏷🗺🐳📚📖📋🚧🛑⚠💾📌🗃📝

## RSS

The RSS feed is enabled by default, it's reachable at https://zoylendt.github.io/index.xml. It uses the previously set `pageTitle`.

## Analytics, fonts, colors

This are the other changes that happen entirely within `quartz.config.ts`.

The analytics can be switched off with 

```ts {2} title="quartz.config.ts"
  analytics: {
    provider: "null",
  },
```

For the general site theme the next code block is relevant, you can experiment with fonts from [Google Fonts](https://fonts.google.com/) by referencing them by name.

```ts {5-7} title="quartz.config.ts"
  theme: {
    fontOrigin: "googleFonts",
    cdnCaching: true,
    typography: {
      header: "Sedan SC",
      body: "Lexend",
      code: "JetBrains Mono",
    },
```

The white page color in the default lightMode was not to my liking, so I changed it like in [this blog](https://mwalton.me/) (there he also set `lightgray: "#646464",`, which was not to my liking since it made code snippets harder to read).

```ts {3-4} title="quartz.config.ts"
    colors: {
      lightMode: {
        //light: "#faf8f8",
        light: "#d8cfc4",
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
```

In theory it's possible to set a custom background image, like in [jzhao.xyz/](https://jzhao.xyz/), but I couldn't get that to work.

## Footer links

Now we need to edit the file `quartz.layout.ts`. The default footer links are defined at the start:

```ts {3-4} title="quartz.layout.ts"
footer: Component.Footer({
  links: {
    GitHub: "https://github.com/jackyzha0/quartz",
    "Discord Community": "https://discord.gg/cRFFHYye7t",
  },
}),
```

## Recent notes

To create a list of the latest four new posts above the Explorer in the left part of the page's layout, we add this code block

```ts title="quartz.layout.ts"
  Component.DesktopOnly(Component.RecentNotes({
        title: "Recent Notes",
        limit: 4,
        filter: (f) =>
          !f.frontmatter?.noindex,
        linkToMore: "tags/note" as SimpleSlug,
      }),),
```

right after this:

```ts title="quartz.layout.ts"
left: [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Search(),
  Component.Darkmode(),
```

Also, add `import { SimpleSlug } from "./quartz/util/path"` at the beginning of `quartz.layout.ts`. And take care where `linkToMore` points. [Here](https://quartz.jzhao.xyz/features/recent-notes) are the config options for this plugin listed.

One remaining issue: this plugin does not show up when I open one of the folders, like [[Braindump]] or [[Brewing/]]. The [[Quartz Personalization#Explorer customization]] also don't take effect here.

## Explorer customization

The Explorer can also be [configured in many ways](https://quartz.jzhao.xyz/features/explorer). I used the example code to [add emoji prefix to files](https://quartz.jzhao.xyz/features/explorer#add-emoji-prefix), but without changing the folder icons (they can be individualized for each folder with a `index.md` inside that folder).

I changed `Component.DesktopOnly(Component.Explorer()),` to

```ts title="quartz.layout.ts"
Component.DesktopOnly(Component.Explorer({
  mapFn: (node) => {
    // dont change name of root node
    if (node.depth > 0) {
      // set emoji for file/folder
      if (node.file) {
        node.displayName = "📄 " + node.displayName
      } else {
        node.displayName = node.displayName
      }
    }
  },
}))
```

## Graph customization

The graph-view on the right side is also [highly customizable](https://quartz.jzhao.xyz/features/graph-view), I just removed the tags from the local and global graph:

```ts {2-9} title="quartz.layout.ts"
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
```

## Desktop and mobile layout

You can change the order of plugins, if they appear right or left and if they are only on the desktop (`Component.DesktopOnly(...),`) or the mobile view (`Component.MobileOnly(...),`), otherwise they appear in both.

## LinksHeader

This change, together with [[Quartz Personalization#Last updated & History]], involves probably the most code modifications. Its target is to create a row with six links in the `beforeBody`-part of the layout (above the breadcrumbs). This can be viewed in action on the site of its (apparent) creator: https://notes.camargomau.com/

After some digging in his GitHub repo, I identified the corresponding [changes](https://github.com/search?q=repo%3Acamargomau%2Fnotkesto-site%20linksheader&type=code). We need to create two new files, [quartz/components/LinksHeader.tsx](https://github.com/camargomau/notkesto-site/blob/7b8a7c5069fb78401022481631223b7e9acb39fe/quartz/components/LinksHeader.tsx#L2) & [quartz/components/styles/linksHeader.scss](https://github.com/camargomau/notkesto-site/blob/7b8a7c5069fb78401022481631223b7e9acb39fe/quartz/components/styles/linksHeader.scss#L4), and modify two other, [quartz.layout.ts](https://github.com/camargomau/notkesto-site/blob/7b8a7c5069fb78401022481631223b7e9acb39fe/quartz.layout.ts#L7) & [quartz/components/index.ts](https://github.com/camargomau/notkesto-site/blob/7b8a7c5069fb78401022481631223b7e9acb39fe/quartz/components/index.ts#L22).

The first new file, [quartz/components/LinksHeader.tsx](https://github.com/camargomau/notkesto-site/blob/7b8a7c5069fb78401022481631223b7e9acb39fe/quartz/components/LinksHeader.tsx#L2), contains the links and images, so we need to modify it to suit our needs.

One advantage of this "plugin" is, that it renders well on the mobile layout (as two rows with 3 elements each), where it can be used to browse the folders (if configured in this way), since the mobile layout per default no Explorer has. 

```tsx title="quartz/components/LinksHeader.tsx"
import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Brain/Color/brain_color.svg"></img>
            <a href="/Braindump">Braindump</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Keyboard/Color/keyboard_color.svg"></img>
            <a href="/Coding">Coding</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Beer%20mug/Color/beer_mug_color.svg"></img>
            <a href="/Brewing">Brewing</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Atom%20symbol/Color/atom_symbol_color.svg"></img>
            <a href="/Physics">Physics</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Open%20book/Color/open_book_color.svg"></img>
            <a href="/Media">Media</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Spouting%20whale/Color/spouting_whale_color.svg"></img>
            <a href="/Selfhosted">Selfhosted</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
```

```scss title="quartz/components/styles/linksHeader.scss"
@use "../../styles/variables.scss" as *;

header {
  display: block;
  margin-top: 1rem;
}

#links-header {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1em;
  font-size: 1.2em;
  justify-content: space-between;
  margin: 0 0.2em;

  span {
    margin-top: 0.75em;
  }

  img {
    height: 1em;
    margin: 0 0.3em 0 0;
    vertical-align: sub;
  }

  a {
    color: var(--dark);
  }
}

@media (max-width: $mobileBreakpoint) {
  #links-header > * {
    width: calc(33.33% - 0.67em); /* 33.33% width with some gap */
  }

  #links-header > *:nth-child(3n-1) {
    text-align: center;
  }

  #links-header > *:nth-child(3n) {
    text-align: right;
  }
}
```

In `quartz.layout.ts` change `header: [],` to `header: [Component.LinksHeader()],` like this:

```ts {2} title="quartz.layout.ts"
  head: Component.Head(),
  header: [Component.LinksHeader()],
  footer: Component.Footer({
```

In `quartz/components/index.ts` add `import LinksHeader from "./LinksHeader"` to the start and `LinksHeader,` to the export list, like this:

```ts {22,46} title="quartz/components/index.ts"
import Content from "./pages/Content"
import TagContent from "./pages/TagContent"
import FolderContent from "./pages/FolderContent"
import NotFound from "./pages/404"
import ArticleTitle from "./ArticleTitle"
import Darkmode from "./Darkmode"
import Head from "./Head"
import PageTitle from "./PageTitle"
import ContentMeta from "./ContentMeta"
import Spacer from "./Spacer"
import TableOfContents from "./TableOfContents"
import Explorer from "./Explorer"
import TagList from "./TagList"
import Graph from "./Graph"
import Backlinks from "./Backlinks"
import Search from "./Search"
import Footer from "./Footer"
import DesktopOnly from "./DesktopOnly"
import MobileOnly from "./MobileOnly"
import RecentNotes from "./RecentNotes"
import Breadcrumbs from "./Breadcrumbs"
import LinksHeader from "./LinksHeader"

export {
  ArticleTitle,
  Content,
  TagContent,
  FolderContent,
  Darkmode,
  Head,
  PageTitle,
  ContentMeta,
  Spacer,
  TableOfContents,
  Explorer,
  TagList,
  Graph,
  Backlinks,
  Search,
  Footer,
  DesktopOnly,
  MobileOnly,
  RecentNotes,
  NotFound,
  Breadcrumbs,
  LinksHeader,
}
```

## Last updated & History

This feature was implemented differently by two blogs, https://www.chadly.net/ & https://notes.yxy.ninja/. I replaced the default `quartz/components/ContentMeta.tsx` with a modified version of [this file](https://github.com/xy-241/CS-Notes/blob/v4/quartz/components/ContentMeta.tsx), so it looks like this:

```tsx title="/quartz/components/ContentMeta.tsx"
import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      var modifiedSegment: string = ""
      var createdSegment: string = ""
      const fileRelativePath = fileData.filePath
      //const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        const cfgDefaultDataType = cfg.defaultDateType // For backward compatibility, just in case this is used somewhere else by the original author

        if (fileData.dates.created) {
          cfg.defaultDateType = "created"
          createdSegment = formatDate(getDate(cfg, fileData)!)
        }

        if (fileData.dates.modified) {
          cfg.defaultDateType = "modified"
          modifiedSegment = formatDate(getDate(cfg, fileData)!)
        }

        cfg.defaultDateType = cfgDefaultDataType
      }


      // Display reading time if enabled
      var readingTimeStr: string = ""
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        // segments.push(displayedTime)
        readingTimeStr = `${_words} words, ${displayedTime}`
      }

      //Created: &nbsp;{createdSegment} <br /> 
      return (
        <p class={classNames(displayClass, "content-meta")}>
          {readingTimeStr} <br />
          Created {createdSegment} & updated {modifiedSegment} <br /> 
          🌟 <a href={`https://github.com/zoylendt/zoylendt.github.io/blame/v4/${fileRelativePath}`} class={classNames(displayClass, "external")} target={"_blank"} style={"font-weight:400"}>
            View Source<svg class="external-icon" viewBox="0 0 512 512"><path d="M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"></path></svg>
          </a> &nbsp;
          🗓️ <a href={`https://github.com/zoylendt/zoylendt.github.io/commits/v4/${fileRelativePath}`} class={classNames(displayClass, "external")} target={"_blank"} style={"font-weight:400"}>
            Commit history<svg class="external-icon" viewBox="0 0 512 512"><path d="M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"></path></svg>
          </a>
        </p>
      )

      /*const segmentsElements = segments.map((segment) => <span>{segment}</span>)
      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )*/
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
```

# My own config

The original files and my custom changed files have I documented [[My quartz config files|here]].

They are also included in [this blog's GitHub repo](https://github.com/zoylendt/zoylendt.github.io/tree/v4/content/zzz/my%20quartz%20config%20files).

In total, this files were modified or newly created:

- `quartz.config.ts`
- `quartz.layout.ts`
- `/quartz/components/ContentMeta.tsx`
- `/quartz/components/index.ts`
- `/quartz/components/LinksHeader.tsx`
- `/quartz/components/styles/linksHeader.scss`
- `/quartz/static/icon.png` (not yet changed)

