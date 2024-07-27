// Lista de numeros ya predefinida
let numeros = [5, -3, 12, -7, 0];

// Determina si un número es positivo, negativo o cero
function determinarSigno(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

// Iterar sobre la lista de números y determinar el signo de cada uno
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    let resultado = determinarSigno(numero);
    console.log(`El número ${numero} es ${resultado}.`);
    if (numero === 0) {
        break;
    }
}
