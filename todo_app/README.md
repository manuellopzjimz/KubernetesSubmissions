# Exercise

Create a deployment.yaml for the course project (that you started in Exercise 1.2.)

You won't have access to the port yet but that'll come soon.

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

