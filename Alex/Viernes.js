function obtenerDatos() {
    //esta funcion debe de tener un return
    //y regresa un objeto AJAX
    return $.ajax('https://jsonplaceholder.typicode.com/posts')
}

//hacer un loop por cada dato en la variable datos
    //imprime la informacion de cada uno de los datos
    // obten el elemento #template, clonalo y borra el atributo id
    //busca dentro de este elemento clonado los elementos para añadir el titulo y el body

    //busca el elemento .post__titulo y añade la propiedad"title" del objeto "post"
    //busca el elemento .post__body y añade la propiedad "body" del objeto "post"
function imprimirDatos(datos) {
    for (var i = 0; i < datos.length; i++) {
        var post = datos[i];
        var elemento = $('#template').clone().removeAttr('id');

        elemento.children('').text()   
        $('.post__titulo').
    }  
}

var titulo = datos[i].title;
    $(elemento).children('post__titulo').text()

obtenerDatos()
.done(function(response){
    imprimirDatos(response);

})
.fail(function(error){
    console.error('Error en la applicacion', error);
});