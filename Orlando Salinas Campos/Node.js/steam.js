var http = require('http');
var fs = require('fs');
var dirname = "C:\\User\\rodrigoa.gonzalez\\Codellege\\NodeJS\\NodeJSPresentaciones\\day1\\";

var texto = "<h2>Continuo la ejecucion del programa...</h2>";
var stream;
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'text/html; charset=UTF-16'});
    res.write("<h2>Leyenda el archivo...</h2>");
    stream = fs.createReadStream(dirname + 'data.txt');
    stream.pipe(res);
    res.write("<h2>Termine de leer el archivo...</h2>");
    res.write(texto);
    imprimeTexto(res);
});

function imprimeTexto(res){
    setTimeout(()=> res.write("<h2>Procesando mas cosas...</h2>"),10); 
}

server.listen(8000);
