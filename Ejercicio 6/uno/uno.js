let numeros = [4, 7, -3, 10]; // aca introduje los numeros

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero < 0) {
        console.log("Número negativo encontrado. Hasta luego crack.");
        break;
    }
    let cuadrado = numero * numero;
    console.log(`El cuadrado de ${numero} es ${cuadrado}`);
}
