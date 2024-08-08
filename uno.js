// Solicitar 20 números del usuario
let numeros = [];
for (let i = 0; i < 20; i++) {
    let num = prompt(`Ingrese el número ${i + 1}:`);
    numeros.push(parseInt(num));
}

// Mostrar la matriz de 5 por 4
console.log("Matriz de 5 por 4:");
for (let i = 0; i < 5; i++) {
    let fila = "";
    for (let j = 0; j < 4; j++) {
        fila += numeros[i * 4 + j].toString().padStart(4, ' ') + " ";
    }
    console.log(fila);
}
