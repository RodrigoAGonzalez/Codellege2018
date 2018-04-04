function Monito(nombre, profesion, genero, edad, fuerza, hp) {
   this.nombre = nombre;
   this.profesion = profesion;
   this.genero = genero;
   this.edad = edad;
   this.fuerza = fuerza;
   this.hp = hp; 

   //metodos
   this.mostrarStatus = function(){
    //imprimir propiedades usando console.log
   }

   this.estaVivo = function(){
    //añadir condicional sobre la propiedad "hp"
    // añadir mensajes de "esta vivo" o "no esta vivo" usando console.log
    // regresar un booleano
   }

   this.attack = function(character2){
       // restar del parametro character2.hp la cantida de ki de tu personaje
   }

   this.levelUp = function(){
       //Aumentar la edad +1
       //Aumentar el ki +5
       //aumentar el hp +25
   }
}

