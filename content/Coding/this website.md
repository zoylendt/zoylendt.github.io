---
title: Building This Website
description: link preview
date: 2024-05-06
updated: 2024-05-21
publishDate: 2024-05-06
draft: false
enableToc: true
tags:
  - note
  - markdown
  - selfhosted
---
 
# Introduction

## Other guides

- https://kanpov.github.io/articles/creating-blog-site-with-quartz4-obsidian
- https://zanca.dev/blog/quartz
- https://till-lieber.de/Anleitungen-quartz/
- 


# Basic Setup

## 1. Install Obsidian, GitHub Desktop & Git

 (Reasons for chosen programs)

GitHub Desktop includes a git client, however for [a number of reasons](https://github.com/desktop/desktop/issues/3708#issuecomment-354665183) we need another separate git installation for the Obsidian git plugin. -> https://github.com/desktop/desktop/issues/3801#issuecomment-357713357

[Git](https://git-scm.com/downloads), [Obsidian](https://obsidian.md/download)

## 2. GitHub Setup (Blog repository)

- Fork https://github.com/jackyzha0/quartz (name: GHUSERNAME.github.io)
- create new branch "upstream" (from v4, useful to compare changes that happen upstream which might require config changes)
- delete the folder "content" and the file README.md (and `Build and Test` workflow)
- follow https://quartz.jzhao.xyz/hosting#github-pages
- (optional) Instructions for use with a custom domain: https://quartz.jzhao.xyz/hosting#custom-domain

## 3. Initial Obsidian Settings

  - Options -> Appearance > Base color scheme -> Dark
  - Options -> Files and links -> Deleted files -> Move to Obsidian trash (.trash folder)
  - Options -> Files and links -> Detect all file extensions -> enable
  - Options -> Files and links -> Default location for new attachments -> in subfolder under current folder -> attachments
  - Options -> Files and links -> Default location for new notes -> In the folder specified below -> private
  - Options -> Editor -> Default editing mode -> Source mode
  - Options -> Editor -> Display -> Readable line length -> toggle off
  - Options -> Editor -> Behavior -> Spellcheck languages -> Add `English`

## Create required folder structure

### Minimal setup:

``` title="minimal folder structure"
C:\users\USERNAME\Obsidian\VAULTNAME\
 ├── .obsidian
 │   └── ...
 ├── .github
 │   ├── sync.yml
 │   └── workflows
 │       └── sync.yml
 ├── private
 │   └── .gitkeep
 └── public
 │   └── index.md
 └── .gitignore
```

Contents of `/.github/workflows/sync.yml` and `/.github/sync.yml`:

``` title="/.github/sync.yml"
zoylendt/zoylendt.github.io@v4:
  - source: public/
    dest: content/
    deleteOrphaned: true
```

``` title="/.github/workflows/sync.yml"
name: Sync Files
on:
  push:
    branches:
      - main
  workflow_dispatch:
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@master
      - name: Run GitHub File Sync
        uses: BetaHuhn/repo-file-sync-action@v1
        with:
          GH_PAT: ${{ secrets.GH_PAT }}
          SKIP_PR: true
```

The file `.gitignore` contains only one line:

``` title=".gitignore"
.obsidian/workspace.json
```

 (Explain .github files etc, [original file](https://github.com/BetaHuhn/repo-file-sync-action?tab=readme-ov-file#workflow) [add .gitignore retroactively](https://www.freecodecamp.org/news/gitignore-file-how-to-ignore-files-and-folders-in-git/))

   - "SKIP_PR: true" -> pushes directly to default branch, skips creating a pull request
   - "COMMIT_EACH_FILE: false" -> commit multiple file changes a a single commit
   - "main" instead of "master"

### (Optional) Suggested folder structure:

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
 │   ├── index.md
 │   ├── template.md
 │   ├── tags
 │   │   └── tag1.md
 │   ├── Topic1
 │   │   ├── blogpage1.md
 │   │   └── attachments
 │   │       └── image.png
 │   └── Topic2
 │       └── blogpage2.md
 └── .gitignore
```

 (Reasons for this structure)

## Initialize Obsidian folder as git repo (using GitHub Desktop)

Now we need to initialize the Obsidian vault directory as a git repo. Using GitHub Desktop this works as follows:
  - (Install GitHubDesktop and log in with your GitHub USERNAME)
  - GitHub Desktop -> "Add an Existing Repository from your local drive" -> choose Obsidian folder -> Click on blue "create a repository" within red warning text
    - Name: obsidian-backup
    - other settings unchanged
    - Path: (path of your Obsidian vault, named VAULTNAME)
  - -> "Create repository"
  - -> click the blue button "Publish repository"
    - -> name: obsidian-backup
    - -> "[x] Keep this code private"  <- IMPORTANT!
GitHub Desktop can be closed now. It's useful for resolving git issues if they occur.

## Create PAT (Personal Access Token) and store it as a Repository Secret in your obsidian-backup-repo

1. https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic

   Note: custom name, e.g. "sync contents to blog"
   Expiration: No expiration
   Scope: full repo scope (see image: https://github.com/BetaHuhn/repo-file-sync-action/discussions/31 )

Take note of the generated PAT for the next step! It looks like this: `ghp_xxxxxxxxxxxxxxxx`

2.
https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository

    Open your private obsidian-backup repo on gitHub
    Settings -> Security -> Secrets and variables -> Actions-> Secrets -> New repository secret

   Name: GH_PAT
   Secret: (PAT generated in the previous step)

3.
(Maybe better: use GH_INSTALLATION_TOKEN as described here: https://github.com/marketplace/actions/repo-file-sync-action#token )

## Obsidian Git Plugin

After making sure that we've installed Git and prepared the Obsidian vault as a git repo (with GitHub Desktop), we need to install and enable the Obsidian Git plugin:

   - Options -> Community Plugins -> Turn on community plugins -> Browse -> "Git by Vinzent, (Denis Olehov)" -> Install
   - Options -> Community Plugins -> Installed Plugins -> Git -> enable (slide to right)
   - Options -> Community Plugins -> Installed Plugins -> Git -> Options (kog)

...

   - Backup -> "Pull updates on startup" -> enable
   - Commit message -> "{{hostname}} placeholder replacement" -> enter your hostname
   - Commit message -> "Commit message on manual backup/commit" -> "manual backup: {{date}} from {{hostname}}, {{numFiles}} files"
   - Automatic -> "Commit message on auto backup/commit" -> "auto backup: {{date}} from {{hostname}}, {{numFiles}} files"
   - Miscellaneous -> "Show the count of modified files in the status bar" -> enable
   - Commit message -> "List filenames affected by commit in the commit body" -> enable
   - Automatic -> "Vault backup interval (minutes)" -> 10
   - Automatic -> "Auto pull interval (minutes)" -> 9

...

# Personalize you Quartz

## config changes
  - changes of layout
  - make **fat** text stand out more

## inspired by showcases

- https://jzhao.xyz/
  - different background
  - "recent notes" & "explorer" only on startpage

- https://www.chadly.net/ & https://notes.yxy.ninja/
  - "last updated at"
  - "History" -> link to github

# Working on multiple PCs

...

(add `.obsidian/workspace.json)` to local `.gitignore`) <- done

## Setup on new PC (Windows)

- Install git
- Install Obsidian, but don't create a new vault
- Install GitHub Desktop, select your private repo `obsidian-backup` and klick "Clone `yourusername/obsidian-backup`"
- Change your `local path` to your liking and click "Clone"