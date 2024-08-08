class CuentaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    abonar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Se han abonado ${valor.toFixed(2)} a la cuenta. Nuevo saldo: ${this.saldo.toFixed(2)}`);
        } else {
            console.log("El valor para abonar debe ser mayor que cero.");
        }
    }

    debitar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Se han debitado ${valor.toFixed(2)} de la cuenta. Nuevo saldo: ${this.saldo.toFixed(2)}`);
        } else {
            console.log("El valor para debitar debe ser mayor que cero y no exceder el saldo actual.");
        }
    }

    consultarSaldo() {
        return this.saldo.toFixed(2);
    }
}

const cuenta1 = new CuentaBancaria(500.00);
const cuenta2 = new CuentaBancaria(300.00);

console.log(`Saldo de la cuenta No 1: ${cuenta1.consultarSaldo()}`);
console.log(`Saldo de la cuenta No 2: ${cuenta2.consultarSaldo()}`);

// Función para simular la entrada del usuario
function solicitarEntrada(mensaje) {
    let valor = prompt(mensaje);
    return parseFloat(valor);
}

let valorAbonoCuenta1 = solicitarEntrada("Ingrese un valor para abonar a la cuenta No. 1:");
cuenta1.abonar(valorAbonoCuenta1);

console.log(`Saldo de la cuenta No 1: ${cuenta1.consultarSaldo()}`);
console.log(`Saldo de la cuenta No 2: ${cuenta2.consultarSaldo()}`);

let valorAbonoCuenta2 = solicitarEntrada("Ingrese un valor para abonar a la cuenta No. 2:");
cuenta2.abonar(valorAbonoCuenta2);

console.log(`Saldo de la cuenta No 1: ${cuenta1.consultarSaldo()}`);
console.log(`Saldo de la cuenta No 2: ${cuenta2.consultarSaldo()}`);

// Aquí puedes seguir añadiendo más operaciones, como debitar y consultar saldos.
