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

Create a (dockerized) implementation of the '[Dominion](https://cdn.1j1ju.com/medias/59/e6/c2-dominion-rulebook.pdf)' base game with NiceGUI.
Desired functions:
	- [ ] single page (to simplify) - > maybe like [this](https://github.com/zauberzeug/nicegui/tree/main/examples/single_page_app)?
	- [ ] no login required, dynamic player assignment based on ip
	- [ ] text chat
	- [ ] background music
	- [ ] use [fastAPI websockets](https://fastapi.tiangolo.com/advanced/websockets/)?

# Resources

- NiceGUI Documentation: 
	- [Pages & Routing](https://nicegui.io/documentation/section_pages_routing)
		- Very important: [ui.page](https://nicegui.io/documentation/page#page)
	- [Storage](https://nicegui.io/documentation/storage)
	- [Audio](https://nicegui.io/documentation/audio)
- SQLite: 
	- GitHub: 
		- [Sqlite for AsyncIO](https://github.com/omnilib/aiosqlite) -> [Documentation](https://aiosqlite.omnilib.dev/en/stable/)
		- [sqlitedict](https://github.com/piskvorky/sqlitedict)
	- YouTube: [NiceGUI Tutorial - Create CRUD Sqlite Database](https://www.youtube.com/watch?v=n2Z0pflkZQU)
	- Reddit: [database connectors for NiceGUI](https://www.reddit.com/r/nicegui/comments/11roz3a/database_connectors_for_nicegui/) -> [App](https://github.com/LucasCarman/ShoppingList/blob/main/main.py)
	- [Medium: Store RealTime Data into SQLite3, using Python / Asyncio and Binance Websocket](https://medium.com/@euricopaes/store-realtime-data-into-sqlite3-using-python-asyncio-and-binance-websocket-c2ea8d3f11f8)
- Other NiceGUI apps/examples:
	- [Multi-User Chat App](https://gist.github.com/rodja/2e891556a1a2c2af4ee542e03003ea1a) -> possible starting point
	- List: [Community Projects](https://github.com/zauberzeug/nicegui/wiki#community-projects)
	- List: Official examples [GitHub](https://github.com/zauberzeug/nicegui/tree/main/examples), [Website](https://nicegui.io/#examples)
	- [Scoreborad](https://github.com/bdaene/Scoreboard) (with tortoise)
- Dockerize a NiceGUI app:
	- [simple example](https://github.com/zauberzeug/nicegui/wiki/Cloud-Run-Deployment#step-2-dockerize-app) (run on CloudRun)
	- Example dockerized apps:
		- [Slaanesh](https://github.com/h-quer/Slaanesh/blob/main/Dockerfile) (interesting python structure, stores data in [feather](https://arrow.apache.org/docs/python/feather.html) files)
		- [hush](https://github.com/natankeddem/hush/blob/main/Dockerfile)
		- [pinger](https://github.com/dyipon/pinger/blob/main/Dockerfile)
		- [beaverhabits](https://github.com/daya0576/beaverhabits/blob/main/Dockerfile) (uses uvicorn server instead of NiceGUI directly)

# NiceGUI tips
- import & reference local files: [GH issue](https://github.com/zauberzeug/nicegui/issues/869#issuecomment-1529608750)
- manage game logic: [reddit](https://www.reddit.com/r/nicegui/comments/1cu56j4/state_management/)

# Ideas 

- save data in feather files -> https://pandas.pydata.org/docs/reference/api/pandas.read_feather.html
- 