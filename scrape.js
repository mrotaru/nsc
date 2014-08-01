var request = require('request');

var spider_path = ('./spiders');

var spider_name =process.argv[2];
var Spider = require(spider_path + '/' + spider_name + '.js');
var spider = new Spider();

console.log(spider.name);
var start_url = typeof spider.start_url == 'undefined' ? 'http://wwww.' + spider.name : spider.start_url;

console.log('scraping: ', start_url);   
request({
    uri: start_url,
    }, function(err, resp, body) {
       if (!err && resp.statusCode == 200) {
            spider.parse(body);
        }
    }
)
