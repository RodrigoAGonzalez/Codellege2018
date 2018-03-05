    var x="hola";
    var y="Tere";
    var z=x;
     MostrarHolaSinParametros();
     MostrarHolaConParametros(x , y);
    function MostrarHolaSinParametros()
    {
      alert("Hola Mundo");
    }
    z=x;
    x="Hello";
    y="Meme";
     MostrarHolaConParametros(z,y);
     Hola();
      function Hola(mensaje, nombre)
    {
      alert("Seguro que desea salir?");
    }
    function  MostrarHolaConParametros(mensaje, nombre)
    {
      var alerta=mensaje + "" + nombre;
  alert(alerta);
    //         "Hola - Alex"    //
    }
