# Demo of how to autoscale to zero on Fly.io

This is just a simple Typescript ([Remix](https://remix.run/)) app. Except it exits after a certain time: it happens [here](app/server/sleep.ts). That's all it takes to automatically stop the machine your app is running on (= scale to 0). Fly proxy will take care of restarting it when a request comes in.

[🚀 Demo here](https://autoscale-to-zero-demo.fly.dev/)
