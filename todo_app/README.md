# Exercise

Switch to using Ingress instead of NodePort to access the project. You can delete the Ingress of the "Log output" application so they don't interfere with this exercise. We'll look more into paths and routing in the next exercise, and at that point, you can configure the project to run with the "Log output" application side by side.



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