---
title: 
date: 2024-12-16
publishDate: 2024-12-16
updated: 2024-12-16
draft: false
tags:
  - note
  - unfinished
  - synology
---


<details>
  <summary>[Click me] default</summary>
  
[guide](https://gist.github.com/pierrejoubert73/902cc94d79424356a8d20be2b382e1ab)  
text a  
```yaml {3-4} title="docker-compose.yaml"
services:
  diskover:
    image: lscr.io/linuxserver/diskover
    container_name: diskover
    environment:
      - PUID=1068
      - PGID=100
      - TZ=Europe/Berlin
      - ES_HOST=elasticsearch
      - ES_PORT=9200
    volumes:
      - /volume1/docker/diskover/config:/config
      - /volume1/docker:/data/docker:ro
    ports:
      - 9206:80
    mem_limit: 4096m
    restart: unless-stopped
    depends_on:
      - elasticsearch
  elasticsearch:
    container_name: elasticsearch
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.22
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1g -Xmx1g"
#      - PUID=1068
#      - PGID=100
      - cluster.routing.allocation.disk.watermark.low=600mb         # https://stackoverflow.com/a/78486057
      - cluster.routing.allocation.disk.watermark.high=500mb
      - cluster.routing.allocation.disk.watermark.flood_stage=400mb
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
#      - /volume1/docker/diskover/esdata:/usr/share/elasticsearch/data
#      - /volume1/docker/diskover/esdata:/var/lib/elasticsearch/data
      - diskover_esdata:/usr/share/elasticsearch/data
    ports:
      - 9205:9200
    depends_on:
      - elasticsearch-helper
    restart: unless-stopped
  elasticsearch-helper:
    image: alpine
    command: sh -c "sysctl -w vm.max_map_count=262144"
    privileged: true
    
volumes:
  diskover_esdata:
    driver: local
    name: diskover_esdata
```
text b
</details>