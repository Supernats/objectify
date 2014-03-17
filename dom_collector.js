var request = require('request');

var DomCollector = function(url) {
  this.scrape = function() {
    var out = request(url, function(error, response, body) {
      console.log(body);
      return body;
    });
    return out;
  };
};



module.exports = DomCollector;
