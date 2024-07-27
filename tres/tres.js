function generarYVerificarNumeros() {
    let numero = Math.floor(Math.random() * 100); // Genera números aleatorios entre 0 y 99
    console.log("Número generado: " + numero);
  
    while (numero !== 0) {
      if (numero % 2 === 0) {
        console.log(numero + " es par.");
      } else {
        console.log(numero + " es impar.");
      }
  
      numero = Math.floor(Math.random() * 100); // Genera números aleatorio
      console.log("Número generado: " + numero);
    }
    console.log("Se ha introducido un 0. Fin del programa.");
  }
  
  generarYVerificarNumeros();
  