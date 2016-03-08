var express = require('express');
var items = require('./routes/items');
var parser = require('body-parser');


var app = new express();

app
    .get('/', function(req, res) {
        res.render('./../app/index.ejs', {});
    })
    .use(express.static(__dirname+'/../.tmp'))
    .listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

items(app);