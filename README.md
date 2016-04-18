# mqlight-node-crash
Code required to recreate a node crash using mqlight

## Steps to reproduce
1. Download and install MQLight https://developer.ibm.com/messaging/mq-light/ and run mqstart.exe
2. Clone this repo then run `npm install`
2. In one console window run `node app.js`
3. In another window run `upload.sh`
4. Wait

The crash should occur with a minute or 2.

