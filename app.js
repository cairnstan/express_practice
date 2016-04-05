var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
  console.log('We have made a request');
  res.send('MEOW');
})
app.listen(port, function(){
  console.log('Listening for requests on port:', port);
});
