var express = require('express');
var fs = require('fs');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('src/public'));


// Routes //
app.get('/', function (req, res) {
  res.render("home.ejs");
});

// Serve the JSON data
app.get('/data', (req, res) => {
  const jsonData = readJSONFile();
  res.json(jsonData);
});

// Routes End //

app.listen(8080, function () {
  console.log("Loaded on localhost:8080");
});


// Read the JSON file
function readJSONFile() {

  const _spotted_group_id = "120363041877741739@g.us";
  let rawdata = JSON.parse(fs.readFileSync("../Casioh/cassiohcore/Commands/CommandsAssets/lastmessages.json").toString()).message_list;;


  let messages = rawdata.filter((el) => el.id == _spotted_group_id);


  return messages;
}