function Monito(nombre, profesion, genero, edad, ki, hp) {
   this.nombre = nombre;
   this.profesion = profesion;
   this.genero = genero;
   this.edad = edad;
   this.ki = ki;
   this.hp = hp; 

   //metodos
   this.mostrarStatus = function(){
    //imprimir propiedades usando console.log
    //Nombre: nombre, Profesion: profesion, Genero: genero, Edad: edad, Ki: ki, Hp: hp
    console.log('Nombre: ' + this.nombre + ', Profession: ' + this.profesion + ', Genero: ' + this.genero + ', Edad: ' + this.edad + ', Ki: ' + this.ki + ', Hp: ' + this.hp );
   }

   this.estaVivo = function(){
    //añadir condicional sobre la propiedad "hp"
    // añadir mensajes de "esta vivo" o "no esta vivo" usando console.log
    // regresar un booleano
    if (this.hp <= 0) {       
        console.log('no esta vivo');
        return false
    }
    else{      
        console.log('esta vivo');
        return true
    };
   }

   this.attack = function(monito2){
       // restar del parametro character2.hp la cantida de ki de tu personaje
       monito2.hp -= this.ki;
   }

   this.levelUp = function(){
       //Aumentar la edad +1
       //Aumentar el ki +5
       //aumentar el hp +25
       //console.log('Edad: ' + this.edad + 1 + ', Ki: ' + this.ki + ', Hp: ' + this.hp);
       this.edad++;
       this.ki += 5;
       this.hp += 25;
   }
}

var cholo = new Monito('Kevin', 'Cholo de la indepe', 'hombre', 14, 90, 200);
var fresa = new Monito('Paps', 'Fresa de san pedro', 'hombre', 18, 20, 1000);

//imprimir estadisticas de los 2 monitos
cholo.mostrarStatus();
fresa.mostrarStatus();
//hacer que cholo ataque al fresa

cholo.attack(fresa);

//imprimir estadisticas del fresa
fresa.mostrarStatus();
//revisar si el fresa sigue vivo
fresa.estaVivo();

//hacer que el cholo suba de nivel
cholo.levelUp();
//imprimir estadisticas del cholo
cholo.mostrarStatus();

//hacer un loop "while" mientras los 2 monitos sigan vivos

//dentro del loop los monitos se atacan el uno al otro
//y se impriman las estadisticasde cada uno
while (cholo.estaVivo() && fresa.estaVivo()) {
    cholo.attack(fresa);
    fresa.attack(cholo);
    cholo.mostrarStatus();
    fresa.mostrarStatus();
    
}

