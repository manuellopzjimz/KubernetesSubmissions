# Exercise

Make the project respond something to a GET request sent to the / url of the project. A simple HTML page is good, or you can deploy something more complex, like a single-page application.

Use kubectl port-forward to confirm that the project is accessible and works in the cluster by using a browser to access the project.

# Commands to run this exercise

## Deploy app into a K8S cluster

```
kubectl apply -f manifests/deployment.yaml
```

## Get running pod name

```
kubectl get pods
```

## Port forward pod port

```
kubectl port-forward <pod name> 3000:8080
```

