---
title: 
date: 2024-05-23
publishDate: 2024-05-23
updated: 2024-05-23
draft: true
tags:
  - note
  - unfinished
  - raspi
  - docker
  - internal
---
 
This note is about how to use docker on a Raspberry Pi witch boots from a read-only µSD but has a attached USB drive.

(reasons, sub-sata)

---

# Basic setup

```
sudo apt update && sudo apt upgrade -y
sudo apt install -y fail2ban curl wget magic-wormhole

curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up

curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh --dry-run
sudo sh ./get-docker.sh
```

# Mount USB-SSD

`lsusb` -> Bus 002 Device 002: ID 14b0:0206 StarTech.com Ltd. ASMT105x

```
sudo parted
(parted) select /dev/sda
(parted) mklabel gpt
(parted) mkpart
(parted) q
sudo mkfs.ext4 -L ssd /dev/sda1
 -> Filesystem UUID: 61e34e00-c880-4237-98cb-71cb8257b1c2

sudo mkdir /mnt/ssd
sudo blkid
 -> /dev/sda1: LABEL="ssd-part" UUID="61e34e00-c880-4237-98cb-71cb8257b1c2" BLOCK_SIZE="4096" TYPE="ext4" PARTLABEL="ssd" PARTUUID="0d41eba1-78b9-4a47-8219-847ef01d2db6"
sudo nano /etc/fstab
 -> PARTUUID=0d41eba1-78b9-4a47-8219-847ef01d2db6 /mnt/ssd ext4 defaults,noatime 0 0

 https://mrkandreev.name/snippets/how_to_move_docker_data_to_another_location/
 https://docs.docker.com/config/daemon/
sudo service docker stop
sudo mkdir /mnt/ssd/docker-data
sudo nano /etc/docker/daemon.json
{
   "data-root": "/mnt/ssd/docker-data"
}
sudo rsync -aP /var/lib/docker/ /mnt/ssd/docker-data
sudo rm -rf /var/lib/docker
sudo service docker start
sudo docker run hello-world
```

# history

```
$ history
    1  lsblk
    2  sudo service docker stop
    3  sudo mkdir /mnt/ssd/docker-data
    4  sudo nano /etc/docker/daemon.json
    5  sudo rsync -aP /var/lib/docker/ /mnt/ssd/docker-data
    6  sudo rm -rf /var/lib/docker
    7  sudo service docker start
    8  sudo docker run hello-world
    9  ls /mnt/ssd/docker-data/
   10  sudo su
   11  sudo reboot
   12  sudo docker ps --all
   13  sudo docker rm 2c13
   14  sudo docker ps --all
   15  sudo raspi-config
   16  less /etc/fstab
   17  lsblk
   18  sudo systemctl status docker
   19  cat /etc/fstab
   20  sudo systemctl status docker
   21  sudo systemctl disable docker
   22  sudo systemctl status docker
   23  sudo systemctl stop docker
   24  sudo systemctl status docker
   25  sudo systemctl stop docker
   26  sudo reboot
   27  sudo systemctl status docker
   28  sudo nano /etc/fstab
   29  sudo reboot
   30  sudo systemctl status docker
   31  lsblk
   32  sudo mount -t ext4 -o defaults,noatime /dev/sda1 /mnt/ssd
   33  lsblk
   34  less /etc/fstab
   35  sudo systemctl daemon-reload
   36  sudo systemctl start docker
   37  sudo systemctl status docker
   38  sudo reboot
   39  lsblk
   40  sudo systemctl status docker
   41  sudo raspi-config
   42  lsblk
   43  nano docker-readonly.sh
   44  pwd
   45  chrontab -e
   46  crontab -e
   47  sudo reboot
   48  lsblk
   49  chrontab -e
   50  crontab -e
   51  nano /home/adrian/docker-readonly.sh
   52  chmod +r docker-readonly.sh
   53  sudo reboot
   54  lsblk
   55  ls
   56  ls -alh
   57  chmod +x docker-readonly.sh
   58  ls -alh
   59  ./docker-readonly.sh
   60  sudo systemctl daemon-reload
   61  lsblk
   62  sudo systemctl status docker
   63  sudo reboot
   64  lsblk
   65  sudo reboot
   66  lsblk
   67  sudo systemctl stop docker
   68  sudo umount /mnt/ssd
   69  sudo raspi-config
   70  lsblk
   71  sudo systemctl status docker
   72  ls
   73  ping google.de
   74  ping 192.168.178.1
   75  lsblk
   76  cd /mnt/ssd/
   77  ls
   78  mkdir git
   79  sudo su
```

```sh title="/home/adrian/docker-readonly.sh"
sudo mount -t ext4 -o defaults,noatime /dev/sda1 /mnt/ssd && sudo systemctl start docker
```

fixed ->

```sh title="/home/adrian/docker-readonly.sh"
sudo mount -t ext4 -o defaults,noatime /dev/disk/by-uuid/61e34e00-c880-4237-98cb-71cb8257b1c2 /mnt/ssd && sudo systemctl start docker
```

# Notes

 https://cdn-learn.adafruit.com/downloads/pdf/read-only-raspberry-pi.pdf
 
sudo raspi-config

# Problem

```
$ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sdb           8:16   0 476.9G  0 disk
└─sdb1        8:17   0 476.9G  0 part
mmcblk0     179:0    0  29.1G  0 disk
├─mmcblk0p1 179:1    0   512M  0 part /boot/firmware
└─mmcblk0p2 179:2    0  28.6G  0 part /media/root-ro

$ ls /mnt/ssd/
ls: reading directory '/mnt/ssd/': Input/output error
```

```Dockerfile title="/mnt/ssd/git/docker-sonos-web-arm/Dockerfile"
FROM node:16

RUN apt-get update && \
    apt-get install -y git && \
    apt-get clean autoclean && apt-get autoremove --yes && \
    rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/sonos-web/sonos-web

WORKDIR /sonos-web/client
RUN npm install && \
    npm run build && \
    mv dist ../server/

WORKDIR /sonos-web
RUN rm -rf client

WORKDIR /sonos-web/server
RUN npm install && \
        npm install https://github.com/stufisher/node-sonos#v1.15.0-test && \
    mv .env.production .env && \
    printf "\nREGION=EU\n" >> .env && \
    printf "\nENHANCE_METADATA=true\n" >> .env

EXPOSE 5050
CMD npm start
```