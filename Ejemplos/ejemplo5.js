let telefono = "12345!=-#67890";
let tel = Number(telefono);

console.log(telefono.replace("!",""));

// let telefono = "123-456!789#0"; // Esto para hacerlo con multiples productos pero seria mejor optimizarlo
// telefono = telefono.replace("!", "=").replace("-", "").replace("#", "");
// console.log(telefono); // Salida: 123456=7890