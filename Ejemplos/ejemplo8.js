//cantidades enteras Json normal
// let cantidadbultos = "55.2 bultos";
// let edadParseada = parseFloat(cantidadbultos);
// let json = '{"nombre":"Juan","edad": 50}';

// console.log(JSON.parse(json));

let nombre = '"Alexander"'; // JSON jalando informacion desde un let
let edad = 99;
let json = `{"nombre":${nombre},"edad":${edad}}`;

console.log(JSON.parse(json));