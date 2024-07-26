const edad = 18;

switch (edad) { // el switch no varia // el switch es como una conditional en un form
    case 5: // case son las codiciones
        console.log('Tienes 5 años');
        break;

        case 10:
            console.log('Tienes 10 años')
            break; // para detener entre casos
       
        default:
            console.log('No tienes 5 ni 10 años')
            break;
}