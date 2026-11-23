# Exercise

Let's get started!

Create a web server that outputs "Server started in port NNNN" when it is started and deploy it into your Kubernetes cluster. Please make it so that an environment variable PORT can be used to choose the used port. You may call the server todo app since it will, amongst other things, provide the functionality of a todo application pretty soon.

You will not have access to the port when it is running in Kubernetes yet. We will configure the access when we get to networking.

# Commands to run this exercise

## Deploy app into a K8S cluster

```
kubectl create deployment todo-app --image=manulopez/todo_app:1.2
```

## Get running pod name

```
kubectl get pods
```

## Get running pod's logs

```
kubectl logs <pod_name>
```

