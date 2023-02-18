// Encontrar el numero n de una figura piramidal triangular (tetrahedron
// (nivel) -> cantidad de numeritos

function numerosPiramidales(nivel){

    let n3 = 0;
    let n4 = 0;
    
    for(i=0; i<=nivel; i++){
/*         for(j=nivel; j>1 ; j--){
            console.log(i);
            console.log(j);
            n3 += j*i;
            console.log('-------------');
        } */
        n4 += (nivel-i)*(1+i);
    }

    return n4;
}

console.log(numerosPiramidales(4));




// Crear una funcion que tome el nombre de un pais y su area // (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

const areaPercentCalc = (country, area) =>{
    const totalArea = 100*(17098242/11.48);
    let countryPercent = 100*(area/totalArea);
    return `${country} is ${countryPercent.toFixed(2)}%`
}

console.log(areaPercentCalc('Russia', 17098242));
console.log(areaPercentCalc("USA", 9372610));



// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0 // No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

function magicFunction(index){
    let magicArray = [1, 0];
    return magicArray[index];
}

console.log(magicFunction(0));
console.log(magicFunction(1));



// Messenger bzzz // (0 ) n // Si no hay nadie -> "No hay nadie en linea" 
// Si hay 1 persona -> "user1 esta en linea" 
// Si hay 2 personas -> "user1 y user2 estan en linea" 
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

function bzzz(peopleOnline){
    let message = 'No hay nadie en linea';
    switch(true){
        case (peopleOnline == 1):
            message = 'user1 esta en linea'
            break;
        case (peopleOnline == 2):
            message = 'user1 y user2 esta en linea'
            break;
        case (peopleOnline>2):
            message = `user1 y ${peopleOnline-1} mas estan en linea`;
            break;
        default:
            message = 'No hay nadie en linea';
            break;
    }
    return message;
}

console.log(bzzz(5));