# Exercise

"Log output" application currently outputs a timestamp and a random string (that it creates on startup) to the logs.

Add an endpoint to request the current status (timestamp and the random string) and an Ingress so that you can access it with a browser.

You can just store the random string to the memory.

# Commands to run this exercise

## Create cluster exposing port 8080

```
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
```

## Deploy app into a K8S cluster with NodePort service

```
kubectl apply -f manifests
```

Now you can access web page browsing localhost:8081