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