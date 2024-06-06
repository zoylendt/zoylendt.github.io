---
title: 
date: 2024-05-20
publishDate: 2024-05-20
updated: 2024-06-06
draft: false
tags:
  - note
  - untested
  - unfinished
  - docker
  - k3s
---
 
Some resources about using K3S in a homelab environment, possibly on multiple locations, connected via Tailscale.

- [K3S Cluster for Rancher](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher)
- [K3S with K3D](https://akyriako.medium.com/provision-a-high-availability-k3s-cluster-with-k3d-a7519f476c9c)
- [K3S on Oracle ARM VM](https://medium.com/@danbowden/deploying-kubernetes-k3s-to-an-arm-based-vm-on-oracle-with-argocd-cert-manager-gitlabs-ci-and-2ff7e01cbbeb)
- [K8S/K3S introduction tips](https://www.reddit.com/r/kubernetes/s/hCaFyqwCXA)
- 

# General K3S guides

- [YT: K3S + Ansible](https://www.youtube.com/watch?v=CbkEWcUZ7zM&pp=ygUNazNzIHRhaWxzY2FsZQ%3D%3D)
- [YT: K3S introduction](https://www.youtube.com/watch?v=UoOcLXfa8EU&pp=ygUNazNzIHRhaWxzY2FsZQ%3D%3D)
- [YT: K3S introduction](https://www.youtube.com/watch?v=UdjhFLV1yt8&pp=ygUNazNzIHRhaWxzY2FsZQ%3D%3D)
- 

# K3S + Proxmox

- [Proxmox + Synology + K3S](https://community.veeam.com/kubernetes-korner-90/creating-a-pks-home-lab-proxmox-synology-k3s-6706)
- [Install K3s on Proxmox Using Ansible](https://dev.to/algo7/install-k3s-on-proxmox-using-ansible-20j1)
- [K3S in LXC](https://betterprogramming.pub/rancher-k3s-kubernetes-on-proxmox-containers-2228100e2d13)
- [K3S in LXC, 2020](https://gist.github.com/triangletodd/02f595cd4c0dc9aac5f7763ca2264185)
- https://blog.rymcg.tech/blog/virtual-proxmox/01-virtual-proxmox/
- https://canthonyscott.com/setting-up-a-k3s-kubernetes-cluster-within-proxmox/
- K8S in LXC: [Part 1](https://kevingoos.medium.com/kubernetes-inside-proxmox-lxc-cce5c9927942), [Part 2](https://kevingoos.medium.com/installing-k3s-in-an-lxc-container-2fc24b655b93)
- 

# K3S + Tailscale

- [YT: Tailscale in Docker](https://www.youtube.com/watch?v=tqvvZhGrciQ&pp=ygUNazNzIHRhaWxzY2FsZQ%3D%3D)
- [GH issue at K3S](https://github.com/k3s-io/k3s/issues/7353)
- https://tailscale.com/kb/1236/kubernetes-operator
- https://docs.k3s.io/networking/distributed-multicloud#integration-with-the-tailscale-vpn-provider-experimental
- [Guide: Use Tailscale to connect to K3S cluster](https://haseebmajid.dev/posts/2023-12-20-til-how-to-use-tailscale-to-connect-to-k3s-pi-cluster/)
- [Guide from 2020](https://weberc2.github.io/posts/k3s-tailscale.html)
- [Tailscale on Kubernetes](https://tailscale.com/kb/1185/kubernetes)
- [K8S Ingress controller for Tailscale](https://github.com/valentinalexeev/tailscale-ingress-controller)
- https://tailscale.com/blog/kubecon-21
- 