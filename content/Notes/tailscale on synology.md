---
title: 
subtitle: 
description: 
permalink: 
date: 2025-03-03
publishDate: 2025-03-03
updated: 2025-03-03
draft: true
tags:
  - unfinished
  - tailscale
  - synology
---
 
This post is about how I setup Tailscale on my Synology devices.

It mainly follows the [official guide](https://tailscale.com/kb/1131/synology).

# Installation & updates

Tailscale is available as an official app, no community repo is needed. If it doesn't open a login page after started, it has to be started from the command line: `tailscale up`.

The package is updated very ralely, so it's adviceable to auto-update with `tailscale update --yes` (steps copied from [here](https://tailscale.com/kb/1131/synology#schedule-automatic-updates)):

1. In Synology, go to **Control Panel** > **Task Scheduler**, select **Create**, and select **Scheduled Task**.
2. Select **User-defined script**.
3. In the **General Settings** tab, enter a task name and select the **User:** as `root`.
4. Go to the **Schedule** tab, select **Run on the following days**, then **Run on the follow days**, and choose an increment such as **Daily**.
5. Go to the **Task Settings** tab and enter the following for **User-defined script**:
    ```shell
    tailscale update --yes
    ```
6. Select **OK** to save the settings.

# Enable outbound connections

Follow [this steps](https://tailscale.com/kb/1131/synology#enable-outbound-connections) to enable outgoing connections on the latest DSM version (required for backups).

Note: I think this needs to be run after the package has been updeted too -> maybe add to update-script in previous chapter too?

# Enable TLS-certificates

[YT-Guide](https://www.youtube.com/watch?v=0o2EhK-QvmY&t=500s)

Requirements:
- enabled MagicDNS
- enabled HTTPS-certs (set custom tailnet name before that, if you want to)

