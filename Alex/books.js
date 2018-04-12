function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            var section = document.getElementById('titulo');
            var doc = xhttp.responseXML;
            var books = doc.getElementsByTagName("book");
            var authors = doc.getElementsByTagName("author");
            var title = doc.getElementsByTagName("title");
            var genres = doc.getElementsByTagName("genre");
            var prices = doc.getElementsByTagName("price");
            var dates = doc.getElementsByTagName("publish_date");
            for(var i = 0; i < books.length; i++){
                for(var j = 0; j < books[i].children.length; j++){
                section.innerHTML += '<h3>Genero: ' + books[i].children[0].childNodes[0].nodeValue + '</h3>' + 
                '<h3>Fecha: ' + books[i].children[1].childNodes[0].nodeValue + '</h3>' + 
                '<h3>Precio: ' + books[i].children[2].childNodes[0].nodeValue + '</h3>' + 
                '<h3>Sinopsis: '+ books[i].children[3].childNodes[0].nodeValue + '</h3>';
            }
            }
            }
    };
    xhttp.open("GET", "books.xml", true);
    xhttp.send();
}