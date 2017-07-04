// server.js
// where your node app starts

// init project
const express = require('express'),
      fs = require('fs'),
      formidable = require('formidable'),            
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
  var fileName = req.files.sampleFile.name,
      type = req.files.sampleFile.mimetype,
      data = req.files.sampleFile.data;
  fs.writeFile('assets/message.js', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');  
    res.end(fileName + type);
  });
  //res.end(fileName + type );
})
 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
