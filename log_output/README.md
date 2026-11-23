# Exercise

In your "Log output" application, create a folder for manifests and move your deployment into a declarative file.

Make sure everything still works by restarting and following logs.

# Commands to run this exercise

## Deploy app into a K8S cluster

```
kubectl apply -f manifests/deployment.yaml
```

## Get running pod name

```
kubectl get pods
```

## Get running pod's logs

```
kubectl logs <pod_name>
```
