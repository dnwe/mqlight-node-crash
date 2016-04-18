var express = require('express'),
    http = require('http'),
    mqlight = require('mqlight'),
    busboy = require('connect-busboy'),
    mqClient = mqlight.createClient( { service: 'amqp:localhost' } ),
    app = express(),
    server = http.Server(app);

function sendMsg(){
  var msg = 'Time:' + new Date();
  mqClient.send('theQueue', msg);
}
app.use(busboy());
function onUploadRequestBusboy(req, res, next){
  res.on('finish', sendMsg);
  req.pipe(req.busboy);
  req.busboy.on('finish', function(){
    res.json({ status: 'ok'});
  });
}
app.post('/upload', onUploadRequestBusboy);
server.listen(5000, 'localhost');
