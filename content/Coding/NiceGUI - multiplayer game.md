---
title: Building a multiplayer game with NiceGUI
date: 2024-08-01
publishDate: 2024-08-01
updated: 2024-08-01
draft: true
tags:
  - note
  - unfinished
  - python
---
 
# Goal

...

# Resources

- [Multi-User Chat App](https://gist.github.com/rodja/2e891556a1a2c2af4ee542e03003ea1a)
- NiceGUI Documentation: 
	- [Pages & Routing](https://nicegui.io/documentation/section_pages_routing)
	- [Storage](https://nicegui.io/documentation/storage)
	- [Audio](https://nicegui.io/documentation/audio)
	- Very important: [ui.page](https://nicegui.io/documentation/page#page)
- SQLite: 
	- GitHub: 
		- [Sqlite for AsyncIO](https://github.com/omnilib/aiosqlite)
		- [sqlitedict](https://github.com/piskvorky/sqlitedict)
	- YouTube: [NiceGUI Tutorial - Create CRUD Sqlite Database](https://www.youtube.com/watch?v=n2Z0pflkZQU)
	- Reddit: [database connectors for NiceGUI](https://www.reddit.com/r/nicegui/comments/11roz3a/database_connectors_for_nicegui/) -> [App](https://github.com/LucasCarman/ShoppingList/blob/main/main.py)
- Other NiceGUI apps/examples:
	- List: [Community Projects](https://github.com/zauberzeug/nicegui/wiki#community-projects)
	- List: Official examples [GitHub](https://github.com/zauberzeug/nicegui/tree/main/examples), [Website](https://nicegui.io/#examples)
	- [Scoreborad](https://github.com/bdaene/Scoreboard) (with tortoise)
- Dockerize a NiceGUI app:
	- [simple example](https://github.com/zauberzeug/nicegui/wiki/Cloud-Run-Deployment#step-2-dockerize-app) (run on CloudRun)
	- Example Apps:
		- [Slaanesh](https://github.com/h-quer/Slaanesh/blob/main/Dockerfile) (interesting python structure, stores data in feather files)
		- [hush](https://github.com/natankeddem/hush/blob/main/Dockerfile)
		- [pinger](https://github.com/dyipon/pinger/blob/main/Dockerfile)
		- [beaverhabits](https://github.com/daya0576/beaverhabits/blob/main/Dockerfile) (uses uvicorn server instead of NiceGUI directly)