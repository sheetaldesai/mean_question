var express     = require("express");
var path        = require('path');
var app         = express();
var bodyParser  = require('body-parser');

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, "./client/static")));
app.use(express.static(path.join(__dirname, "../client/dist")));
require('./config/setup.js');
var route = require('./config/routes.js')(app);

app.listen(8000,function(){
    console.log("Listening on port 8000");
});