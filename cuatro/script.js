// Generamos un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    const numeroUsuario = parseInt(document.getElementById("numero").value);

    if (isNaN(numeroUsuario)) {
        document.getElementById("resultado").textContent = "Por favor, introduce un número válido.";
        return;
    }

    if (numeroUsuario === numeroSecreto) {
        document.getElementById("resultado").textContent = "¡Felicidades! ¡Has adivinado el número!";
    } else if (numeroUsuario < numeroSecreto) {
        document.getElementById("resultado").textContent = "El número es mayor.";
    } else {
        document.getElementById("resultado").textContent = "El número es menor.";
    }
}
