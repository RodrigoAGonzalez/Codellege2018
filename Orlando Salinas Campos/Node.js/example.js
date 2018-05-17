var http = require('http');
var fs = require ('fs');

var server = http.vreateServer(function(req,res){
	res.writeHead(200,{"content-type" : "application/json; charset=utf-8"});
	res.write('primero preparo los datos\n\n');
	fs.readFile('sample.txt', function (err,data){
	res.write('termina de procesar los datos :3\n\n');
	res.end('\n\nlei los datos: ' + data);
	});
	res.write('procesando datos... \n\n');
});
server.listen(3000);