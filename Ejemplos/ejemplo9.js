//let nombre = "Leo";
//console.log(eval(new String("Juan"))); // Juan // complemento funciona en web.

let numeros = '1234567890';

let numerosApilados = eval(new String(numeros));

for (let i = 0; i < numerosApilados.length; i++) {
    console.log(numerosApilados[i]);
}