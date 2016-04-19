# mqlight-node-crash
Code required to recreate a node crash using mqlight

## Steps to reproduce
1. Either download and run MQ Light standalone
   https://developer.ibm.com/messaging/mq-light/ or start up a container
   `docker run --rm -it -e LICENSE=accept -p 5672:5672 ibmcom/mqlight`
2. Clone this repo then run `npm install`
2. In one terminal run `node app.js`
3. In another terminal run `./upload.sh`
4. Wait

The crash should occur with a minute or 2. The console output is as follows:
```
node.js:342
          callback = tock.callback;
                         ^

TypeError: Cannot read property 'callback' of undefined
    at process._tickCallback (node.js:342:26)
```    

