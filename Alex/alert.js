
  var a;
  var x = "Hola";
  var y = "Alex";
  var z = x;

  mostrarHolaSinParametro();
  mostrarHolaConParametro( x, y );
  mostrarHolaConParametro( "Hola", "Emmanuel");
  z = x;
  x = "Hello";
  y = " Meme ";
  mostrarHolaConParametro( x, y );
  mostrarHolaConParametro( z, y );

  function mostrarHolaSinParametro()
  {
     alert( "Hola Orli");
  }

  function mostrarHolaConParametro( mensaje, nombre )
  {
     // "Hola" - "Alex"
     var alerta = mensaje + " - " + nombre;
     alert( alerta );
  }
