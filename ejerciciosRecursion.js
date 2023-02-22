// Escribir una funcion que regrese la cantidad de valores true que hay en un array 
/* countTrue([true, false, false, true, false]) ➞ 2 countTrue([false, false, false, false]) ➞ 0 countTrue([]) ➞ 0 */ 
// Regresar 0 si el array es vacio

let trueCounter = 0;
let i=0;
function countTrue(array){
    if(array[i]){
        trueCounter++;
    }
    if(i<array.length){
        i++;
        countTrue(array)
    }      
        return `El array tiene ${trueCounter} true's`;
}

// Test arrays
let testArray1 = [true, false, false, true, false]; // 2
let testArray2 = [false, false, false, false]; // 0
let testArray3 = []; // 0

console.log(countTrue(testArray1)); 
console.log(countTrue(testArray2)); 





// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

let divisoresNum1 = [];
let divisoresNum2 = [];
let arrayDivisores = [];
let k = 0;

// Falta: Revisar como hacer return correctamente de los valores

// Funcion para encontrar todos los numeros divisores desde 0 hasta el numero objetivo
function calculadorDivisores(num){
    if(k<=num){
        if(num%k==0){
            arrayDivisores.push(k);
        }
        k++;
        calculadorDivisores(num)
    }
        return arrayDivisores;
}

let h = 0;

// Array2 pertenece al numero mas grande
// Revisa si un elemento del array mas peque;o se encuentra en el array mas grande,
// empezando desde el ultimo numero 
function encontrarElementoEnArray(array1, array2){

    if(h<=array1.length){
        
        if(array2.includes(array1[array1.length-h])){
            console.log('MCD Encontrado:');
            console.log(array1[array1.length-h])
             return array1[array1.length-h];
        }
        h++;
        encontrarElementoEnArray(array1, array2); 
    }

}

// Esta funcion llama a las funciones para calcular los divisores y generar arrays de cada numero
// Revisa cual de los dos numeros es mas grande y manda a llamar a la funcion encontrarElementoEnArray()
function numberInput(num1, num2){

    divisoresNum1 = calculadorDivisores(num1);
    console.log(`Divisores de ${num1}: ${divisoresNum1}`);
  
    arrayDivisores = [];
    k=0;
    h=0;

    divisoresNum2 = calculadorDivisores(num2);
    console.log(`Divisiores de ${num2}: ${divisoresNum2}`);

    if(num1<num2){
        console.log(encontrarElementoEnArray(divisoresNum1, divisoresNum2));
    } else{
        console.log(encontrarElementoEnArray(divisoresNum2, divisoresNum1));
    }
    k=0;
    h=0;
    arrayDivisores = [];
    divisoresNum1 = []
    divisoresNum2 = []
}

numberInput(54, 24);
numberInput(68, 15);
numberInput(144, 12);





// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion

let n1 = 0;
let n2 = 1;
let n3;
let j = 0;
let secuencia = '';


function nFibonacci(n){
    if(j<n){
        j++;
        secuencia += `${n2}, `;
        n3 = n1+n2;
        n1 = n2;
        n2 = n3;
        nFibonacci(n)
    }
    else if (n==0){
        console.log(`Secuncia Fibonacci hasta la posicion ${0}:\n 0`);
    }
    else{
        console.log(`Secuncia Fibonacci hasta la posicion ${n}:\n ${secuencia}`);
    }
    
}

function fibonacciCaller(n){
    let n1 = 0;
    let n2 = 1;
    let n3;
    let j = 0;
    let secuencia = '';
    
}

nFibonacci(15);




