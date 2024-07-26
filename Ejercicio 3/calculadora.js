function calculate() {
    // Obtener los valores de los campos de entrada
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    
    let result;
    
    // Realizar la operación seleccionada
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = 'Error: División por cero';
            }
            break;
        default:
            result = 'Operación no válida';
    }
    
    // Mostrar el resultado
    document.getElementById('result').textContent = result;
}
