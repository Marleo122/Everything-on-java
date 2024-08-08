class persona {
    cui
    nombre
    apellido
    fecha_nacimiento
    genero
    estatura

    constructor(cui, nombre, genero){
        this.cui = cui
        this.nombre = nombre
        this.genero = genero
        this.saludar()
    }

    saludar (){
        console.log("Hola me llamo ", this.nombre)
    }

    velocidad(distancia,tiempo){
        const vel = distancia/tiempo;
        return vel;
    }

    static saltar(){
        console.log("La persona salta")
    }
}

let persona1 = new persona();
persona1.cui = 1010101010;
persona1.nombre = "Roberto";
persona1.apellido = "Giron";
persona1.estatura = 1.40;
persona1.fecha_nacimiento = '15-01-2000';
persona1.saludar()
console.log(persona1.velocidad(10,5));

console.log(Math.floor);
