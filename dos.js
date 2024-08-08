// Crear el tablero de 8x8 con los números del 1 al 64
let tablero = [];
let contador = 1;
for (let i = 0; i < 8; i++) {
    let fila = [];
    for (let j = 0; j < 8; j++) {
        fila.push(contador++);
    }
    tablero.push(fila);
}

// Posiciones de las marcas #
let marcas = [
    [0, 4], [0, 5], 
    [1, 0], [1, 7], 
    [3, 6], 
    [4, 3]
];

// Función para verificar si una posición tiene una marca #
function tieneMarca(fila, col) {
    for (let i = 0; i < marcas.length; i++) {
        if (marcas[i][0] === fila && marcas[i][1] === col) {
            return true;
        }
    }
    return false;
}

// Imprimir el tablero con el formato especificado
console.log("Bienvenido al juego, iniciarás en la casilla 1. Suerte");
console.log("-----------------------------------");
for (let fila = 0; fila < 8; fila++) {
    let lineaNumeros = "";
    let lineaMarcas = "";
    for (let col = 0; col < 8; col++) {
        lineaNumeros += `| ${tablero[fila][col].toString().padStart(2, ' ')} `;
        if (tieneMarca(fila, col)) {
            lineaMarcas += "|  # ";
        } else {
            lineaMarcas += "|    ";
        }
    }
    console.log(lineaNumeros + "|");
    console.log(lineaMarcas + "|");
    console.log("-----------------------------------");
}
