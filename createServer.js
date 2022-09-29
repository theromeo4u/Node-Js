var http = require('http');
http.createServer(function(req,res){
    console.log('It is an Request');
    res.write("Hello Romeo");
    res.end();
}).listen(8080);