var request = require('request');

var DomCollector = function(url) {
  this.scrape = function() {
    return request(url, function(error, response, body) {
      console.log(body);
      return body;
    });
  };
};



module.exports = DomCollector;
