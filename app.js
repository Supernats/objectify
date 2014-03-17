var express = require('express');
var app = express();
var port = 3000;
var DomCollector = require('./dom_collector')

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  // console.log("here's the url " + request.query.url);
  var domCollector = new DomCollector(request.query.url);
  //console.log(domCollector.scrape());
  response.send(domCollector.scrape());
});

app.listen(port);
