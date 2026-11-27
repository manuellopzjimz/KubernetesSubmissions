# Exercise

Let's share data between "Ping-pong" and "Log output" applications using persistent volumes. Create both a PersistentVolume and PersistentVolumeClaim and alter the Deployment to utilize it. As PersistentVolumes are often maintained by cluster administrators rather than developers and those are not application specific you should keep the definition for those separated, perhaps in own folder.


Save the number of requests to the "Ping-pong" application into a file in the volume and output it with the timestamp and the random string when sending a request to our "Log output" application. In the end, the two pods should share a persistent volume between the two applications. So the browser should display the following when accessing the "Log output" application:

```
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43.
Ping / Pongs: 3
```

# Commands to run this exercise

## Create cluster exposing port 8080 and create temp folder in node

```
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube
```

## Create persistent volume and persistent volume claim

We assume you are in log_output folder

```
kubectl apply -f ../manifests
```

## Deploy log_output app into a K8S cluster with ClusterIP service

```
kubectl apply -f manifests
```

## Deploy ping-pong app into a K8S cluster with ClusterIP service 

We assume you are in log_output folder

```
kubectl apply -f ../ping-pong/manifests
```

Now you can access log_output web page browsing localhost:8081 and localhost:8081/pingpong for ping_pong app