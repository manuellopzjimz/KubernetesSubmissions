# Exercise

Split the "Log output" application into two different containers within a single pod:

- One generates a random string on startup and writes a line with the random string and timestamp every 5 seconds into a file.
- The other reads that file and provides the content in the HTTP GET endpoint for the user to see

# Commands to run this exercise

## Create cluster exposing port 8080

```
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
```

## Deploy app into a K8S cluster with ClusterIP service

```
kubectl apply -f manifests
```

Now you can access web page browsing localhost:8081