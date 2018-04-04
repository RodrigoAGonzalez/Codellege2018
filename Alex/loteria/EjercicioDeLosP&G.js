function Tamagochi() {
    this.hambriento = false;
    this.adormecido = false;
    this.aburrido = true;
    this.edad = 0;

    this.alimentar = function () {
        if(this.hambriento == true){
            this.hambriento = false;
            this.adormecido = true;
        } 
    };

    this.dormir = function (){
        if (this.adormecido == true) {
            this.adormecido = false;
            this.aburrido = true;
            this.edad++;
        }
    };
    this.jugar = function(){
        if (this.aburrido == true){
            this.aburrido = false;
            this.hambrienro = true;
        }
    };
    this.aumentarEdad = function(){
        this.edad++;
    };
};
//Perro
var perro = new Tamagochi();
perro.afuera = false
ladrar = function(){
    console.log('ladrido');
};
dejarAfuera = function(){
    if(afuera == false){
        afuera = true;
        ladrar();
    }
};

dejarAdentro = function(){
    if (afuera == true) {
        afuera = false
    }
};


var gato = new Tamagochi();
this.calidadDeCasa = 100;




