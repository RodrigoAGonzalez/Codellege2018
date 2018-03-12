var x = addNumbers( 1, 2 );
mostrarHolaConParametro( "Suma:", x );

x = subNumbers(126, 120);
mostrarHolaConParametro("resta:", x);

x  = multiNumbers(a, b);
mostrarHolaConParametro("multi:", x);

function addNumbers( a, b )
{
  var suma = a + b;
  return suma;
}
function subNumbers (a, b )
{
  var resta = a - b;
  return resta;
}
function multiNumbers (a, b)
{
  var multi = a*b;

  return multi;
}
function divNumbers (a, b)
{
  var div = a/b;

  return div;
}
