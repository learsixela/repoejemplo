/*Configura un array para que los valores negativos se transformen en 0. 
Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].*/

function resetNegativos(arreglo) {

    for (var i = 0; i < arreglo.length; i++) { // el indice o posición i=0
        if (arreglo[i] < 0) {
            //arreglo[i] = arreglo[i] * 0; //opcion 1
            //arreglo[i] = arreglo[i] + (arreglo[i] * -1);//opcion 2
            //arreglo[i] = arreglo[i] - arreglo[i];//opcion 3
            arreglo[i] = 0; //opcion 4
        }
    }
    return arreglo;
}

var resultado = resetNegativos([1, 2, -1, -3]);
console.log(resultado);

/* 2 .- Dado un array, mueve todos los valores un espacio de derecha a izquierda 
eliminando el primer valor 
y dejando un 0 para el último valor. 
Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].
[2,4,6,8] -> [4,6,8,0]
*/

function moverAdelante(arreglo) { //arreglo.length =  3 ; arreglo[arreglo.length-1] = 0
    let nuevoArreglo = []; //[]
    for (let i = 1; i < arreglo.length; i++) { //i=1
        //nuevoArreglo[i-1]=arreglo[i];
        nuevoArreglo.push(arreglo[i])
    }
    nuevoArreglo.push(0); //[2,3,0]
    return nuevoArreglo;
}

console.log(moverAdelante([2, 4, 6, 8]));

function moverAdelante2(arreglo) { //arreglo = [2,4,6,8]; //arreglo.length = 4 ; arreglo[arreglo.length-1] = 0
    for (let i = 1; i < arreglo.length; i++) { //i=1>2>3
        arreglo[i - 1] = arreglo[i];
    }
    //SIEMPRE la ultima posicion de un arrelo es x[x.length-1]
    arreglo[arreglo.length - 1] = 0; //arreglo[4-2]
    return arreglo;
}
console.log(moverAdelante2([2, 4, 6, 8])); //0,1,2,3;


/*Configura un array para que el resultado sean los valores en el orden contrario. 
Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].*/





/*Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/