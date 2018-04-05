var carro = {
    modelo: "tsuru", 
    año: 2017
};
console.log(JSON.stringify(carro));



//Metodo GET para obtener dato
$ajax({
    url:""
}) .done(function(response){

}) .catch(function(error){

});

var token = 'AJDFKJSANFKJNABSJKFCNSFS';
//Metodo POST para crear
var configDeLlamada = {
    method: 'POST',
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
}
headers: {
    "Content-type": "application/json; charset-UTF-8",
    "Authorization": token
}