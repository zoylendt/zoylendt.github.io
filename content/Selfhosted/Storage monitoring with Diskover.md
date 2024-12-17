---
title: 
date: 2024-12-16
publishDate: 2024-12-16
updated: 2024-12-17
draft: false
tags:
  - note
  - unfinished
  - synology
---


<details>
  <summary>[Click me] docker-compose.yaml</summary>
  
[original docker-compose.yaml from linuxserver.io](https://docs.linuxserver.io/images/docker-diskover/#docker-compose-recommended-click-here-for-more-info)  
text a  
```yaml {6-8,12-14,16,29-31,37-39,41} title="docker-compose.yaml"
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
      - /volume1/share1:/data/share1:ro
      - /volume1/share2:/data/share2:ro
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
</details>

# First start

The default username is `diskover` with the password `darkdata`, a custom password must be set upon first login.

## Manually creating indices

After starting the stack, at least one index has to be created manually as described in the [Application Setup](https://docs.linuxserver.io/images/docker-diskover/#application-setup). In our case we create two indices by running the following commands from the host:
```shell
docker exec -u abc -it diskover python3 /app/diskover/diskover.py -i diskover-index_share1 /data/share1
docker exec -u abc -it diskover python3 /app/diskover/diskover.py -i diskover-index_share2 /data/share2
```

## Update indices via cronjob