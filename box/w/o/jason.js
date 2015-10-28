console.log('hi')
var http = require("http");

http.createServer(function(request, response) {

    console.log('!!!')

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8080, function(){

    console.log('listening')
})


