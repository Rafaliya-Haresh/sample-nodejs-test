var cpuCount = require('os').cpus().length;

var bodyParser = require('body-parser')

var cluster = require('cluster');

var express = require('express');

var vash = require('vash');

var app = express();    

app.set("view engine", "vash");

app.use(express.static(__dirname + '/public', {
  maxAge: 86400000,
  setHeaders: function (res, path) {
    res.setHeader("Expires", new Date(Date.now() + 2592000000 * 30).toUTCString());
  }
}));

app.use(bodyParser.json())

var controller = require("./controller");

controller.init(app);

var t = process.env.PORT || 5000;
console.log(t)

app.listen(t);
