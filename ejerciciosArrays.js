// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ 
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR 
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR
// Primero ordenar los nombres, A->Z, sacar la primera letra de cada elemento

const secretSociety1 = ["Felipe", "Fer", "Zabdiel"]; //-> FFZ 
const secretSociety2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']; // -> CJMPRR 
const secretSociety3 = ['Harry', 'Ron', 'Hermione']; //-> HHR

const secretName = array =>{
    // Crear una variable donde se ira concatenando el nombre
    let nameBuilder = '';
    let array2 = [...array]; //Para copiar el array a uno nuevo, y no modificar el original
    array2.sort();
    array2.forEach(element => {
        // Para cada elemento del array tomar la primera letra y concatenarla en la variable nameBuilder;
        nameBuilder = nameBuilder + element.slice(0,1);        
    });
    return `Para una sociedad secreta con miembros ${array}, su nombre secreto sería: ${nameBuilder}`;
}

console.log(secretName(secretSociety1));
console.log(secretName(secretSociety2));
console.log(secretName(secretSociety3));

console.log('--------------------------------------------')


// igual que el de chat del otro dia
// Messenger bzzz // (0 ) n // Si no hay nadie -> "No hay nadie en linea" 
// Si hay 1 persona -> "user1 esta en linea" 
// Si hay 2 personas -> "user1 y user2 estan en linea" 
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'
// Crear una función que tome 2 parámetros, (numero, longitud) y regresa un array de longitud cantidad de numeros multiplos del numero por parámetro 
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102] 

const onlineUsers = ['mockIng99', 'J0eyPunch', 'glassedFer', 'test name'];

function onlineStatus(array){

// Switch case usando la longitud del array para seleccionar los diferentes casos    
    let peopleOnline = array.length;

    let message = 'No one is online :(';
    switch(true){
        case (peopleOnline == 1):
            message = `${array[0]} is online.`
            break;
        case (peopleOnline == 2):
            message = `${array[0]}, and ${array} are online.`
            break;
        case (peopleOnline>2):
            message = `${array[0]}, ${array[1]}, and ${array.length-2} more are online`;
            break;
        default:
            message = 'No one is online :(';
            break;
    }
    return message;
}

console.log(onlineStatus(onlineUsers));

console.log('--------------------------------------------')


// Escribir una función que descubra si el array es dominante positivo 
// Un array es positivo dominante cuando la mayoría de sus elementos son positivos -> [1, -2, 55, 10] 
// positiveDom([-1, -3, -5, 4, 6767]) -> false 
// FIltrar 2 arrays, obtener longitud y comprarar, revisar si 0 es positivo: 0 no es ni negativo ni positivo <0, >0

const testArray1 = [1, -2, 55, 10] //true
const testArray2 = [-5, -8, -511, 4, 6767]; //false

const positiveDom = array =>{

    // Crear 2 arrays separados, uno para elementos que sean numeros positivos y otro para numeros negativos 
    const positiveNumbers = array.filter(element =>{return element>0});
    const negativeNumbers = array.filter(element =>{return element<0});

    return positiveNumbers.length>negativeNumbers.length? `El array ${array} si es dominante positivo` : `El array ${array} no es dominante positivo`;
}

console.log(positiveDom(testArray1));
console.log(positiveDom(testArray2));

console.log('--------------------------------------------')


// Promedio antipode 
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos: 
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales 
// - Sumar cada numero de la primera parte con los números inversos de la segunda parte 
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8] 
// - Dividir cada numero del array final entre 2 -> [3.5, 12, 4]

// Dividir entre 2 la longitud del array, si no es entero, borrar el elemento   (longitud/2)redondeado para abajo + 1
// Crear 2 arrays nuevos con array.slice 
// Reverse al 2do array
// Ciclo for(), arrayResultados = array1[i] + array2[i]

const antipodeArray1 = [1, 2, 3, 5, 22, 6] // -> [3.5, 12, 4]
const antipodeArray2 = [1, 2, 3, 4, 5, 6, 7, 15, 123, 9, 10] // -> [5.5, 5.5, 63, 9.5, 6]

const averageAntipode = array =>{

    // Crear nuestras variables locales
    let arrayResultados = [];
    let leftArray = [];
    let rightArray = [];

    // Si el resultado de dividir la longitud del array entre 2 no es entero, quiere decir que tenemos un numero impar
    if(!Number.isInteger(array.length/2)){
        console.log('No es integral')
        // Tomamos el primer array de la izquierda desde 0 hasta la (longitud del array)/2,
        // el resultado redondeado hacia abajo
        leftArray = array.slice(0, Math.floor(array.length/2))   
        // Segundo array desde (longitud del array)/2, redondeado hacia arriba, hasta la longitud del array  
        rightArray = array.slice(Math.ceil(array.length/2), array.length)
        // Acomodamos al reves el array
        rightArray.reverse();
    }
    else {

        console.log('Si es integral')
        leftArray = array.slice(0, array.length/2)
        rightArray = array.slice(array.length/2, array.length)
        rightArray.reverse();
    }

    // Ciclo para sumar los resultados en un tercer array
    for(let i=0; i<= leftArray.length-1; i++){
        arrayResultados[i] = leftArray[i]/2 + rightArray[i]/2;
    }
    return arrayResultados;
}

console.log(averageAntipode(antipodeArray1));
console.log(averageAntipode(antipodeArray2));

