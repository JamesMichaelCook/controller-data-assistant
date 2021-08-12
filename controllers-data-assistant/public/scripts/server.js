// Load Node Modules 
var express = require ('express');
// Initialise Express
var app = express();
// Render static files 
app.use(express.static('public'));
// Port website runs on, Goldsmiths virtual server
app.listen(8000);