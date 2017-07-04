// server.js
// where your node app starts

// init project
const express = require('express'),
      fs = require('fs'),
      fileUpload = require('express-fileupload');
var app = express();

app.use(fileUpload());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', function(req ,res){
  var file = req.files.sampleFile;
  var stats = fs.statSync(file);
  var fileSize = stats.size;
  res.end(fileSize);
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
