---
title: 
date: 2024-06-13
publishDate: 2024-06-13
updated: 2024-06-13
draft: true
tags:
  - note
  - unfinished
  - docker
---
 
Here I want to compare some monitoring tools to centrally monitor my [[Selfhosted/My Hardware|computer systems]].

# Requirements

- Monitor Linux and Windows hosts, arm64 possibly too
- Monitor unraid and Synology HDD health (with Scrutiny?)
- Monitor docker hosts (custom, unraid and synology)
- Monitor Proxmox (PVE has support for InfluxDB and Graphite) -> [Guide](https://medium.com/@nykogabriel/how-to-monitor-proxmox-with-grafana-and-influxdb-e55116081867)
- Save to InfluxDB (or similar) with backup
- View stats through WebUI (like netdata or grafana)
- Export information to dashboard (like dashy or homepage)
- Collect logs -> https://github.com/awesome-foss/awesome-sysadmin#log-management

# App candidates

List of different monitoring tools:
	- https://github.com/petersem/dockerholics?tab=readme-ov-file#monitoring-and-management
	- https://github.com/veggiemonk/awesome-docker?tab=readme-ov-file#monitoring
	- https://github.com/awesome-foss/awesome-sysadmin#monitoring
	- https://github.com/awesome-foss/awesome-sysadmin#metrics--metric-collection
	- https://github.com/wmariuss/awesome-devops?tab=readme-ov-file#observability--monitoring

# Setup idea

- VM on PVE titan as InfluxDB target for all three PVE hosts
	- run dashy and grafana there too
	- save DB backups to VM on PVE neodym
- ...