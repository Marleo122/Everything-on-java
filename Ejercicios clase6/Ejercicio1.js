// Mapa de meses
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Función para obtener el mes
function obtenerMes(numero) {
    if (numero >= 1 && numero <= 12) {
        return meses[numero - 1];
    } else {
        return "Número fuera de rango. Por favor, ingrese un número del 1 al 12.";
    }
}

// Solicitar al usuario el ingreso de un número
const numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 12:"));

// Mostrar el mes correspondiente en la consola
console.log(obtenerMes(numeroIngresado));
