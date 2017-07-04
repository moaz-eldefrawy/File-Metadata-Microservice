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
        var file_size = files.file.size;
    
        res.end(file_size);
    });
});
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', function(req ,res){
  var file = req.files.sampleFile;
  //var stats = fs.statSync(file);
  //var fileSize = stats.size;
  res.writeHead(200, {'Content-Type': 'application/JSON'});
  console.log(req.headers);
  res.end();
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
rt);
});
