# Exercise

Develop a second application that simply responds with "pong 0" to a GET request and increases a counter (the 0) so that you can see how many requests have been sent. The counter should be in memory so it may reset at some point. Create a new deployment for it and have it share ingress with "Log output" application. Route requests directed '/pingpong' to it.

# Commands to run this exercise

## Create cluster exposing port 8080

```
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
```

## Deploy app into a K8S cluster with ClusterIP service

```
kubectl apply -f manifests
```

## Create ingress with both log-output and ping-pong apps

We assume you are in /ping-pong directory:

```
cd ../log_output
kubectl apply -f manifests
```

Now you can access web page browsing localhost:8081/pingpong
