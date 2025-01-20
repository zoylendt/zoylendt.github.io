import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode";
import { SimpleSlug } from "./quartz/util/path";
import { QuartzPluginData } from "./quartz/plugins/vfile"

// Constants for config that are reused a lot
const homepageTitle = "Welcome to my blog ^_^"
const modifiedListTitle = "All-files-chronologically-modified"
const mapTitle = "Map2"
const GraphOnMap = {
  localGraph: {
    drag: true, // whether to allow panning the view around
    zoom: true, // whether to allow zooming in and out
    depth: -1, // how many hops of notes to display
    scale: 1.1, // default view scale
    repelForce: 0.5, // how much nodes should repel each other
    centerForce: 0.3, // how much force to use when trying to center the nodes
    linkDistance: 30, // how long should the links be by default?
    fontSize: 0.6, // what size should the node labels be?
    opacityScale: 1, // how quickly do we fade out the labels when zooming out?
    removeTags: [], // what tags to remove from the graph
    showTags: true, // whether to show tags in the graph
  },
}
const tagsToRemove = ["graph-exclude", "explorer-exclude", "backlinks-exclude", "recents-exclude"]
const defaultGraphConfig = {
  localGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"],
    showTags: false,
    opacityScale: 2,
  },
  globalGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"],
    showTags: true,
    scale: 1.5,
    fontSize: 0.6,
    opacityScale: 2,
  }
};
const tagListConfig = { 
  excludeTags: tagsToRemove
}
const explorerConfig = {
  filterFn: (node: FileNode) => node.name !== "tags" &&
  !(node.file?.frontmatter?.tags?.includes("explorer-exclude") === true),
  mapFn: (node) => {
    // dont change name of root node
    if (node.depth > 0) {
    // set emoji for file/folder
    if (node.file) {
      node.displayName = "📄 " + node.displayName
    } else {
      node.displayName = "📁 " + node.displayName
    }
}}}
const recentNotesConfig = { 
  showTags: false, 
  title: "Recently edited notes:", 
  limit: 4,
  showDate: true,
  linkToMore: "meta/" + modifiedListTitle as SimpleSlug,
  excludeTags: ["recents-exclude"],
  filter: (f: QuartzPluginData) => !f.slug!.startsWith("tags/")
}
const backlinksConfig = {
  excludeTags: ["backlinks-exclude"],
  hideWhenEmpty: false
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.OnlyFor(
      { titles: [homepageTitle, mapTitle] },
      Component.RecentNotes(recentNotesConfig)
    )
  ],
  footer: Component.Footer({
    links: {
      Main: "https://zoylendt.github.io",
      GitHub: "https://github.com/zoylendt/zoylendt",
      "eMail (base64): em95bGVuZHRAcHJvdG9uLm1l": "https://www.base64decode.org/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(tagListConfig),
    Component.MobileOnly(Component.TableOfContents()),
    Component.OnlyFor({titles: [mapTitle]}, Component.Graph(GraphOnMap)),
    Component.MobileOnly(Component.OnlyFor({titles: [mapTitle]}, Component.Explorer(explorerConfig))),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer(explorerConfig)),
  ],
  right: [
    Component.NotFor({titles: [mapTitle]}, Component.Graph(defaultGraphConfig)),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.NotFor({titles: [homepageTitle]}, Component.Backlinks(backlinksConfig)),
    Component.OnlyFor({titles: [homepageTitle, mapTitle]}, Component.RecentNotes(recentNotesConfig))
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
