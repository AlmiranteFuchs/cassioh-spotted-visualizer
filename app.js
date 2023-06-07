var express = require('express');
var fs = require('fs');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Routes //
app.get('/',function(req,res){
    res.render("./home.ejs");
});

// Serve the JSON data
app.get('/data', (req, res) => {
    const jsonData = readJSONFile();
    res.json(jsonData);
  });

// Routes End //

app.listen(8080,function(){
    console.log("Servidor ativo no porto 8080");
});


// Read the JSON file
function readJSONFile() {
    const rawdata = fs.readFileSync('data.json');
    return JSON.parse(rawdata);
  }