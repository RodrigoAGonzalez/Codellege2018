$(document).ready(function(){
    function getRandomInteger(min, max) {
        //get a random floating point between 0 and 1;
        var floatingPoint = Math.random();
        //create random integer between min-max range
        var floatingPointInRange = floatingPoint * (max - min + 1) + min;
        // use Math.floor to transform floatingPointInRange
        return Math.floor(floatingPointInRange);
    };

    getRandomInteger(5, 10)
    // regresa un numero aleatorio entre el 5 y el 10

    //Cambiar foto de la baraja en cada click
    $('.carton_baraja').on('click', function(){
        var randomBarajaImagen = 'baraja/' + getRandomInteger(2, 54)  + '.jpg';
        $(this).attr('src', randomBarajaImagen);
    });

    //Por cada "espacio de loteria" o elemento con clase "carton_loteria" corre una funcion
    $('.carton_loteria').each(function(){
        $(this).children('img').attr('src', 'baraja/' + getRandomInteger(2, 54) + '.jpg');
        $(this).children('div').append('<img src="10_centavos.png" />');
    });
    $('.carton_loteria > img').click(function(){
        $(this).siblings().show();
    });
    $('.carton_loteria > div').click(function(){
        $(this).hide();
    });
            
});