/**
 * 
 * Obtén del 1 al 255: 
 * Escribe una función que devuelve un array con todos los números del 1 al 255.
 */

function retorArray() {
    let array = [];
    for (let index = 1; index <= 255; index++) {
        array.push(index);
    }
    return array;
}
console.log(retorArray());

/**
 * Consigue pares hasta 1000: 
 * Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - 
 * Puedes usar un operador de módulo para este ejercicio.
 */

function numerosPares() {
    var pares = 0;
    for (let index = 1; index <= 1000; index++) {
        if (index % 2 == 0) {
            pares = pares + index;
        }
    }

    return pares;
}

console.log(numerosPares());

/**
 * 
 * Suma impares hasta 5000: 
 * Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 
 * (ej: 1+3+5+...+4997+4999).} array 
 */

function sumaImpares() {
    let suma = 0;
    let suma2 = 0;
    for (let index = 1; index < 5000; index++) {
        if (index % 2 != 0) {
            suma = suma + index;
        }
        if (index % 2 == 1) {
            suma2 = suma2 + index;
        }
    }
    return suma;
}
console.log(sumaImpares());

/**
 * Itera un array: 
 * Escribe una función que devuelva la suma de todos los valores 
 * dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).
 */

function sumaValArray(array) {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma = suma + array[index];
    }
    return suma;
}
console.log(sumaValArray([1, 2, 5]))
console.log(sumaValArray([-5, 2, 5, 12]))

/**
 * Encuentra el mayor (max): 
 * Dado un array con múltiples valores, escribe una función que devuelva el número mayor 
 * (ej: para [-3,3,5,7] el número mayor (max) es 7).
 */

function elMayor(array) { //array = [-3,3,5,7];array.length=4
    let numMayor = array[0]; //5

    for (let i = 0; i < array.length; i++) { //i=0>1>2>3>4

        if (numMayor < array[i]) { // 5 < 7
            numMayor = array[i] //numMayor = 7
        }

    }
    return numMayor;
}

console.log(elMayor([-3, 3, 5, 7])); //7

/**
 * Encuentra el promedio (avg): 
 * Dado un array con múltiples valores, 
 * escribe una función que devuelva el promedio de los valores 
 * (ej: para [1,3,5,7,20] el promedio es 7.2).
 * promedio= suma_de_elementos / cantidad_elementos
 * promedio= 36/5 => 7.2
 */

function obtenerPromedio(array) {
    let promedio = array[0];
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    promedio = suma / array.length;
    return promedio;
}

console.log(obtenerPromedio([1, 3, 5, 7, 20]));



/**
 * De Número a String: Escribe una función que tome un array de números y 
 * reemplace cualquier valor negativo por el string ‘Dojo’. 
 * Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
 */

function numeroString(array) { //array = array1=>[-1,-3,2]

    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            array[index] = "Dojo";
        }
    }

    return array;

}
var array1 = [-1, -3, 2];
console.log(numeroString(array1))