const edad = 15;

if (edad > 18) {
    console.log('el puede entrar a la pelicula');
}else if (edad>13){
    console.log('Entra con supervision de un adulto'); // para usar un else siempre tiene que aver un if, pero para un if no es necesario tener un else
}else{
    console.log('No puede entrar a la pelicula')
}