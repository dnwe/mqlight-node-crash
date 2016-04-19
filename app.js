var express = require('express'),
    http = require('http'),
    mqlight = require('mqlight'),
    busboy = require('connect-busboy'),
    mqClient = mqlight.createClient( { service: 'amqp://127.0.0.1:5672' } ),
    app = express(),
    server = http.Server(app),
    count = 0;

function sendMsg(){
  var msg = 'Time:' + new Date();
  mqClient.send('theQueue', msg);
}
app.use(busboy());
function onUploadRequestBusboy(req, res, next){
  console.log(++count);
  res.on('finish', sendMsg);
  req.pipe(req.busboy);
  req.busboy.on('finish', function(){
    res.json({ status: 'ok'});
  });
}
app.post('/upload', onUploadRequestBusboy);
server.listen(5000, '127.0.0.1');

