import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  footer: Component.Footer({
    links: {
      "This site's GitHub repo": "https://github.com/zoylendt/zoylendt.github.io",
//      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
//    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.MobileOnly(Component.Darkmode()),
//    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
        // set emoji for file/folder
        if (node.file) {
          node.displayName = "📄 " + node.displayName
        } else {
          node.displayName = "📁 " + node.displayName
        }}},})),
    Component.DesktopOnly(Component.RecentNotes({
        title: "Recent Notes",
        limit: 4,
        filter: (f) =>
          !f.frontmatter?.noindex,
        linkToMore: "tags/note" as SimpleSlug,
      }),),
  ],
  right: [
    Component.DesktopOnly(Component.Darkmode()),
    Component.TagList(),
    Component.Graph({
      localGraph: {
        showTags: false,
        scale: 1.1, // default view scal -> 1.1
        fontSize: 0.6, // what size should the node labels be? -> 0.6
        opacityScale: 2, // how quickly do we fade out the labels when zooming out? -> 1
      },
      globalGraph: {
//        showTags: true,
        removeTags: [], // what tags to remove from the graph
        scale: 1.5, // default view scal -> 0.9
        fontSize: 0.6, // what size should the node labels be? -> 0.6
        opacityScale: 2, // how quickly do we fade out the labels when zooming out? -> 1
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
