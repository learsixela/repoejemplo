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


/*3.- Configura un array para que el resultado sean los valores en el orden contrario. 
Por ejemplo, returnReverso([1,2,3,4]) debe dar [4,3,2,1].*/
function returnReverso(array) { //array= [1,2,3,4]; array.length = 4; 
    let nuevoArreglo = []; //[4,3,2,1]
    for (let i = array.length - 1; i >= 0; i--) { //i =3>2>1>0>-1
        nuevoArreglo.push(array[i]);
    }
    return nuevoArreglo;
}

console.log(returnReverso([1, 2, 3, 4])); //[4,3,2,1]

function returnReverso2(array) { //array= [1,2,3,4]; array.length = 4; 
    let nuevoArreglo = []; //[4,3,2,1]
    for (let i = 0; i < array.length; i++) { //i=0>1>2>3>4
        //array[array.length-1];
        var posicionUltimoElemento = array.length - 1
        nuevoArreglo.push(array[posicionUltimoElemento - i]); //array[ 4-(1+3) ] => array[0]
    }
    return nuevoArreglo;
}

console.log(returnReverso2([1, 2, 3, 4]));

/*Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) 
debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/

function repetirValores(array) { //array = [4, "Ulysses", 42, false]; array.length=4;
    let nuevoarray = []; //[4,4,"Ulysses","Ulysses",42,42,false,false]
    for (let i = 0; i < array.length; i++) { //i=0>1>2>3>4
        nuevoarray.push(array[i]); //elemento en el arreglo en la pposicion
        nuevoarray.push(array[i]);
    }
    return nuevoarray;

}

var resultado = repetirValores([4, "Ulysses", 42, false]);
console.log(resultado);


//[4,”Ulysses”, 42, false]->[4,4,"Ulysses","Ulysses",42,42,false,false]
function repetirValores(array) { //array.length = 4

    for (var i = array.length - 1; i >= 0; i--) { //i= 3>2>1>0>-1
        //array = [4,4, "Ulysses", "Ulysses",42,42,false,false]

        array[2 * i + 1] = array[i]; //array[2*0+1]=>array[1]=4
        array[2 * i] = array[i]; //array[0]=4

    }
    return array;
}

var resultado = repetirValores([4, "Ulysses", 42, false]);


for (let i = 0; i < array.length; i++) {
    //desde la posicion 0 en adelante
}

for (var i = array.length - 1; i >= 0; i--) {
    // desde el ultimo elemento hasta la posicion 0
}


// si la asignacion a un espacio del arreglo no existe:
//lo asigna
// en caso de existir, lo reemplaza
//ejemplo
// var arreglo= []
// arreglo[9]= 77 -> no existia , lo creó y asignó
// arreglo[9]= 78 -> como existe, lo reemplaza


/* 
var users = [
    {name: "Michael", age:37}, 
    {name: "John", age:30}, 
    {name: "David", age:27}
];
*/
// users[0]->{name: "Michael", age:37}



// users[1]->{name: "John", age:30}
// users[users.length-1]->{name: "David", age:27}
// users[2]->{name: "David", age:27}

for (let i = 0; i < array.length; i++) {
    console.log(users[i].name);
    console.log(users[i].age);
}