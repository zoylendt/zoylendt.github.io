---
title: Run DockerInDocker within another base image
date: 2024-08-01
publishDate: 2024-08-01
updated: 2024-08-01
draft: true
tags:
  - note
  - unfinished
  - docker
---
 
The goal of this guide is to show how to run DockerInDocker ("dind) within another base image. 
I've run into this problem because I've wanted to run docker images within a container controlled by [python](https://github.com/docker/docker-py).

Alternative Ideas:
- 
- run 'docker:dind' alongside the main container and send commands to it

# Notes about default dind image

The 'docker:dind' image needs to be run privileged to run containers within it

- [Medium-Guide](https://medium.com/@gopesh3652/running-docker-in-docker-dind-a-comprehensive-guide-1fe2e328020)

# Notes about adding dind to another base image

- Reddit:
	- [...](https://stackoverflow.com/questions/76667955/how-to-add-docker-dind-to-an-image-with-a-base)