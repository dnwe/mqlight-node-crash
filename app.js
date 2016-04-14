var express = require('express'),
    http = require('http'),
    multer = require('multer'),
    mqlight = require('mqlight'),
    KB = 1024,
    MB = 1024 * KB;

var multerUpload = multer({
  storage: multer.memoryStorage(),
  limit: {
    fileSize: 10 * MB,
    files: 1
  }
}).single('uploadMe');

function sendMsg(){
  var msg = 'Time:' + new Date();
  mqClient.send('theQueue', msg);
}

var mqClient = mqlight.createClient( { service: 'amqp:localhost' } );
var app = express();

function onUploadRequest(req, res, next){

  function onUploadComplete(uploadError){
    if (uploadError){
      res.json({ status: 'error', error: uploadError});
      return;
    }
    res.json({status: 'ok' });
  }

  res.on('finish', sendMsg);

  multerUpload(req, res, onUploadComplete);
}
app.use(express.static('public'));
app.post('/upload', onUploadRequest);
app.get('/other', function(req, res, next){
  res.on('finish', sendMsg);
  res.json({status: 'other is ok'});
});

var server = require('http').Server(app);

server.listen(5000, 'localhost');
