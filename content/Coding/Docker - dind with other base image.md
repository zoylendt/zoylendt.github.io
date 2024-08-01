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
- access the host docker installation from within the main container (by bind-mounting the host docker socket into the main container)
- run 'docker:dind' alongside the main container and send commands to it -> makes setup more complicated compared to monolithic approach
- 

# Notes about default dind image

The 'docker:dind' image needs to be run privileged to run containers within it

- [Medium-Guide](https://medium.com/@gopesh3652/running-docker-in-docker-dind-a-comprehensive-guide-1fe2e328020)
- [6y-old blog post](https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/) -> [image](https://hub.docker.com/r/jpetazzo/dind)
- 

# Notes about adding dind to another base image

- Reddit:
	- [...](https://stackoverflow.com/questions/76667955/how-to-add-docker-dind-to-an-image-with-a-base)
	- [...](https://stackoverflow.com/questions/38602212/non-alpine-dind-docker-image)
	- [pre-pull image into main image while building it](https://stackoverflow.com/questions/58749344/pre-pull-images-in-docker-in-docker-dind)
	- [ubuntu-based image](https://github.com/cruizba/ubuntu-dind) (up-to-date, informative, with notes about running with sysbox instead of privileged)
	- 