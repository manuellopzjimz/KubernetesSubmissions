# Exercise

Use a NodePort Service to enable access to the project.

# Commands to run this exercise

## Create cluster exposing port 8080

```
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
```

## Deploy app into a K8S cluster with NodePort service

```
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml
```

Now you can access web page browsing localhost:8082