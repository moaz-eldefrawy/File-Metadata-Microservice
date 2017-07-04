// server.js
// where your node app starts

// init project
const express = require('express'),
      fs = require('fs'),
      formidable = require('formidable'),            
      fileUpload = require('express-fileupload'),
      path = require('path');
var app = express();

app.use(fileUpload());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', function(req ,res){
  var fileName = req.files.sampleFile.name,
      type = req.files.sampleFile.mimetype,
      data = req.files.sampleFile.data;
  var sampleFile = req.files.sampleFile;
  var place = path.join (__dirname , fileName );
 sampleFile.mv(  place , function(err) {
    if (err)
      return res.status(500).send(err);
  });
  const stats = fs.statSync(fileName);
  var fileSizeInBytes = stats.size;
  res.end(fileSizeInBytes);
  //res.end(fileName + type );
})
 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
