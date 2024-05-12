---
title: My Own Quartz Config
description: 
date: 2024-05-12
publishDate: 2024-05-12
updated: 2024-05-12
publish: true
tags:
  - note
  - quartz
  - git
  - github
---
 
# My own config

This should help to rebuild the blog, if needed.

## Modified files

<details>
  <summary>[Click me] custom quartz.config.ts</summary>
  
  ```ts {11,15,18,59} title="quartz.config.ts"
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🍺ZoyBlog📚",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "null",
    },
    locale: "en-US",
    baseUrl: "zoylendt.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Sedan SC",
        body: "Lexend",
        code: "JetBrains Mono",
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
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
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
</details>


<details>
  <summary>[Click me] custom quartz.layout.ts</summary>
  
  ```ts {3,11-12,30-49,52-59} title="quartz.layout.ts"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
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
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.RecentNotes({
        title: "Recent Notes",
        limit: 4,
        filter: (f) =>
          !f.frontmatter?.noindex,
        linkToMore: "tags/note" as SimpleSlug,
      }),),
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
</details>



<details>
  <summary>[Click me] new /quartz/components/LinksHeader.tsx</summary>
  
  ```tsx title="/quartz/components/LinksHeader.tsx"
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
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Beer%20mug/Color/beer_mug_color.svg"></img>
            <a href="/Brewing">Brewing</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Keyboard/Color/keyboard_color.svg"></img>
            <a href="/Coding">Coding</a>
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
</details>



<details>
  <summary>[Click me] new /quartz/components/styles/LinksHeader.scss</summary>
  
  ```scss title="/quartz/components/styles/LinksHeader.scss"
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
</details>


<details>
  <summary>[Click me] custom /quartz/components/ContentMeta.tsx</summary>
  
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
</details>



<details>
  <summary>[Click me] custom /quartz/components/index.ts</summary>
  
  ```ts title="/quartz/components/index.ts"
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
</details>

## Original files

The unaltered config files are included here, in order to make it easier to compare them.

<details>
  <summary>[Click me] default quartz.config.ts</summary>
  
  ```ts title="quartz.config.ts"
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Quartz 4.0",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
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
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
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
</details>


<details>
  <summary>[Click me] default quartz.layout.ts</summary>
  
  ```ts title="quartz.layout.ts"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
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
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
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
</details>


<details>
  <summary>[Click me] default /quartz/components/ContentMeta.tsx</summary>
  
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
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
```
</details>


<details>
  <summary>[Click me] default /quartz/components/index.ts</summary>
  
  ```ts title="/quartz/components/index.ts"
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
}
```
</details>

