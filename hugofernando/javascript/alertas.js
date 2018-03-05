var x = "hola";
var y = "alex";
var z = x;

mostrarHolaSinParametro();
mostrarHolaConParametro(x,y);
mostrarHolaConParametro("hola","emmanuel");
z= x;
x= "hello";
y= "meme";
mostrarHolaConParametro(x, y);
mostrarHolaConParametro(z, y);

function mostrarHolaSinParametro()
{
 alert("hola orli")
}

function mostrarHolaConParametro(mensaje, nombre)
{
 //hola - alex
 var alerta = mensaje +" "+ nombre;
 alert(alerta);
}
