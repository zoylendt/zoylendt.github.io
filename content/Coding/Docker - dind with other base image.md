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
	- [reddit](https://www.reddit.com/r/docker/comments/12vsf4a/what_is_the_preferred_way_to_send_a_command_from/)
- 

# Notes about default dind image

The 'docker:dind' image needs to be run privileged to run containers within it

- [Medium-Guide](https://medium.com/@gopesh3652/running-docker-in-docker-dind-a-comprehensive-guide-1fe2e328020)
- [6y-old blog post](https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/) -> [image](https://hub.docker.com/r/jpetazzo/dind)
- general guides: 
	- [...](https://shisho.dev/blog/posts/docker-in-docker/)
	- [...](https://devopscube.com/run-docker-in-docker/)
	- [socket/dind/sysbox](https://kodekloud.com/blog/run-docker-in-docker-container/#3-using-nestybox-sysbox-runtime)
	- 
- [...](https://engineering.99x.io/docker-in-docker-dind-41df61550b6f)

# Notes about adding dind to another base image

- Reddit:
	- [...](https://stackoverflow.com/questions/76667955/how-to-add-docker-dind-to-an-image-with-a-base)
	- [...](https://stackoverflow.com/questions/38602212/non-alpine-dind-docker-image)
	- [pre-pull image into main image while building it](https://stackoverflow.com/questions/58749344/pre-pull-images-in-docker-in-docker-dind)
	- [ubuntu-based image](https://github.com/cruizba/ubuntu-dind) (up-to-date, informative, with notes about running with sysbox instead of privileged)
	- [notes about composer integration](https://forum.gitlab.com/t/how-can-i-use-dind-inside-an-image-that-im-building/51830)
	- [questionable, short Medium guide](https://engineering.99x.io/docker-in-docker-dind-41df61550b6f)

# General docker notes

- devopscycle.com
	- [Cheat Sheet](https://devopscycle.com/blog/the-ultimate-docker-cheat-sheet/) incl. Dockerfile guide
	- [Docker Compose cheat sheet](https://devopscycle.com/blog/the-ultimate-docker-compose-cheat-sheet/) incl YAML guide
	- [Base image considerations](https://devopscycle.com/blog/how-do-you-choose-a-docker-base-image/)