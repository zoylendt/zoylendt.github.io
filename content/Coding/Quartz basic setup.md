---
title: 
date: 2024-05-22
publishDate: 2024-05-22
updated: 2024-05-22
draft: false
tags:
  - note
  - quartz
  - github
---

> [!tip] Associated notes
> This note is part of a series about how this blog is set up.
> See [[Quartz starting page|here]] for an overview.

This note is about how to spin up your own quartz instance, hosted on [GitHub Pages](https://pages.github.com/). It's a minimal setup that will look like the [Quartz documentation](https://quartz.jzhao.xyz/)) and it's the starting point for [[Quartz customizations|additional customizations]].

In this guide we'll host Quartz on GitHub Pages, however there are [other options](https://quartz.jzhao.xyz/hosting). This basic setup requires no locally installed software, you can work entirely on the GitHub website.

- Fork https://github.com/jackyzha0/quartz into your GitHub account.
	- Your blog can be reachable at `GHUSERNAME.github.io` (fork as `GHUSERNAME.github.io`) or a subdomain, like `GHUSERNAME.github.io/blog` (fork as `blog`).  You only need to fork the branch `v4`.
- (optional) Create new branch "upstream" 
	- From branch `v4`, useful to compare changes that happen upstream, see [[Quartz sync fork|this note]] for more details.
- (optional) Delete the files `README.md` and `.github/workflows/ci.yaml`
- Create a new file `content/index.md`. 
	- The file can be empty (for now), look [here](https://github.com/jackyzha0/quartz/blob/v4/docs/index.md) for inspirations.
- Follow the [[Quartz customizations#Minimal required config changes]]:
	- See the start of `quartz.config.ts` 
- Create a new file `.github/workflows/deploy.yml`, for the contents see https://quartz.jzhao.xyz/hosting#github-pages
- Head to “Settings” tab of your forked repository and in the sidebar, click “Pages”. Under “Source”, select “GitHub Actions”.
- (optional) Follow the instructions for use with a [custom domain](https://quartz.jzhao.xyz/hosting#custom-domain) if you don't want your URL to contain `github.io`

New blog posts can be created by creating new files in the folder `content` (or in a subdirectory of this folder).

```ts {11,18} title="quartz.config.ts"
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
```

---

delete the folder "content" and the file README.md (and `Build and Test` workflow)