let suma = 0;
let numero = 1;

while (numero !== 0) {
  numero = parseInt(prompt("Ingrese un número (0 para terminar):"));
  suma += numero;
}

console.log("La suma total es:", suma);
