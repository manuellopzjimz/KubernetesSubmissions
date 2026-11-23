# Exercise

Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp. e.g.

```
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
2020-03-30T12:15:22.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
```

Deploy it into your Kubernetes cluster and confirm that it's running with kubectl logs ...

# Commands to run this exercise

## Deploy app into a K8S cluster

```
kubectl create deployment log-output --image=manulopez/log_output:1.1
```

## Get running pod name

```
kubectl get pods
```

## Get running pod's logs

```
kubectl logs <pod_name>
```
