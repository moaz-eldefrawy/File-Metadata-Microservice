// server.js
// where your node app starts

// init project
const express = require('express'),
      fs = require('fs'),
      formidable = require('formidable'),            
      fileUpload = require('express-fileupload');
var app = express();

app.use(fileUpload());

app.post('/upload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        // `file` is the name of the <input> field of type `file`
        var file_size = files.sampleFile.size;
    
        res.end(file_size);
    });
  res.end(123);
});
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
