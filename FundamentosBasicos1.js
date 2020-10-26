function looping(x, y) { //x= 3; y=3

    for (var i = 0; i < x; i++) { //i=0>1>2>3

        for (var j = 0; j < x; j++) { //j=0>1>2>3
            console.log(i * j); //0,0,0,0,1,2,0,2,4
        }

    }
}
z = looping(3, 3);
console.log(z); //undefined


/** */
function printSumArray(x) { //x=[1,2,3] //x.length=3
    var sum = 0; //1>3>6

    for (var i = 0; i < x.length; i++) { //i=0>1>2>3
        sum = sum + x[i]; // 3+3
    }
    return sum; //6
}
console.log(printSumArray([1, 2, 3])); // debería imprimir 6
console.log(6); //6

/** */
function looping(x, y) { //x=3; y=5;
    for (var i = 0; i < x; i++) { //i=0>1>2>3

        for (var j = 0; j < y; j++) { //j=0>1>2>3>4>5
            console.log(i * j); //0,0,0,0,0,0,1,2,3,4,0,2,4,6,8
        }
    }
    return x * y; //3*5=15
}
z = looping(3, 5); //15; 
console.log(z); //15

/** */
function printUpTo(x) {
    if (x < 0) {
        return false;
    }
    for (var i = 1; i <= x; i++) { //i=1>2>3
        console.log(i) //1,2
    }
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-1); // debería imprimir false
console.log(y); // debería imprimir false

/**
 * Dado un array y su respectivo índice, 
 * remueve los valores en el rango del índice dado
 * (acortando el array). 
 * Por ejemplo, removerRango([20,30,40,50,60,70],2,4)
 * debiera devolver [20,30,70].
 * * */
//arreglo.length=6
function removerRango(arreglo, inicio, fin) { //inicio=2, fin =4
    var arrAux = []; //[20,30,70]
    for (var i = 0; i < arreglo.length; i++) { //i=0>1>2>3>4>5>6

        if (i < inicio || i > fin) { // i <[2,3,4]< i
            arrAux.push(arreglo[i])
        }
    }

    return arrAux;
}
arreglo = [20, 30, 40, 50, 60, 70]
z = removerRango(arreglo, 2, 4)
console.log(z) //[20,30,70]

/**
 * Dado un array con múltiples valores, 
 * escribe una función que devuelva un nuevo array 
 * que solo contenga el valor mayor (max), menor (min) 
 * y promedio (avg) del array original (ej: [1,5,10,-2] 
 * devolverá [10,-2,3.5]).
 */

function multiple(arreglo) {
    var arrAux = []
    var max = 0;
    var min = 0;
    var suma = 0;

    for (var index = 0; index < arreglo.length; index++) {
        suma = suma + arreglo[i];
        if (arreglo[i] > max) {
            max = arreglo[i];
        }
        if (arreglo[i] < min) {
            min = arreglo[i];
        }
    }
    var promedio = suma / arreglo.length;
    arrAux.push(max);
    arrAux.push(min);
    arrAux.push(promedio);

    return arrAux;
}

z = multiple([1, 5, 10, -2]);
console.log(z);

/**
 * Crea una función que acepte un array. 
 * Cada vez que ese array tenga 3 valores impares seguidos, 
 * imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, 
 * imprime (print) “¡Es para bien!”.
 **/
//[1,2,5,7,9,-1,0], length 7
function paresImpares(arreglo) {
    var pares = 0; //1>0>1
    var impares = 0; //1>0>1>2>3>4>0
    for (let index = 0; index < arreglo.length; index++) { //index=0>1>2>3>4>5>6>7

        if (arreglo[index] % 2 == 0) { //par
            pares = pares + 1
            impares = 0
            if (pares == 3) {
                console.log("¡Es para bien!");
            }
        } else { //impar
            impares = impares + 1;
            pares = 0
            if (impares == 3) {
                console.log("¡Qué imparcial!");
            }
        }
    }
}

paresImpares([1, 2, 5, 7, 9, -1, 0]);


/**
 * los pasos para cambiar la rueda de un auto
 */

//contexto: auto 4 ruedas, estacionado en casa, la rueda es la derecha delantera, 
//tenemos todas las herramientas, tenemos rueda de repuesto en buen estado y la tenemos a mano


//dejar a mano las herramientas
//poner gata(herramienta) bajo el auto en el lugar indicado
//soltar o aflojar las tuercas
//levantar el auto con la gata
//quitar las turcas
//sacar la rueda
//reemplazar la rueda por la de repuesto
//poner lar turcas
//bajar el auto
//apretamos las tuercas
//Retirar la gata





function calculoMatematico(x, y, z) {
    return x * y;
}
console.log(calculoMatematico(5, 5, 4));

function a(x, y) { //x=2;y=2
    var z = [] //[2,2]
    z.push(x);
    z.push(y);
    z.push(5);
    z.pop();
    console.log(z); //[2,2]
    return z;
}
b = a(2, 2) //b = [2,2]
b.push(5) //[2,2,5]
console.log(b); //[2,2,5]

console.log(a(6, 8)); //console.log([6,8,5])//[6,8,5]

//[2,2,5],[2,2,5],[6,8,5],[6,8,5]


function a(x) { //x=[4,3]
    if (x[0] < x[1]) { //4 < 3
        return true;
    } else {
        return false;
    }
}
b = a([2, 3, 4, 5]) //b= true
console.log(b) //true

c = a([4, 3]) //c= false


function a(x) { //x= [1,2,3,4] //x.length=4
    for (var i = 0; i < x.length; i++) { //i=0>1>2>3>4

        if (x[i] > 0) { //4>0
            x[i] = "Coding";
        }    
    }    
    return x; //["Coding","Coding","Coding","Coding"]
}
console.log(a([1, 2, 3, 4]))
    //console.log(["Coding","Coding","Coding","Coding"])
    //["Coding","Coding","Coding","Coding"]
a([1, 2, 3, 4]) = ["Coding", "Coding", "Coding", "Coding"]

x = [1, "coding", 3, 4]
x[0] = 1
x[1] = "coding"
x[2] = 3
x[3] = 4
x[-1] = 4
x[-2] = 3
x[-3] = "coding"
x[-4] = 1


function sum(x) { //x=[3,1,2];x.length=3
    sum = 0; //3>4>6
    for (var i = 0; i < x.length; i++) { //i=0>1>2>3
        sum = sum + x[i]; //sum= 4+2
        console.log(sum); //6
    }
    return sum;
}

console.log(sum([3, 1, 2])) //console.log(6);//6
    //3,4,6,6


function maxminprom(arreglo) { //arreglo=[3,7,1] ; 3->length
    var arrAux = [];
    var suma = 0; //3>10>9
    var promedio = 0; //3
    var minimo = arreglo[0]; //-1
    var maximo = arreglo[0]; //3>7

    for (var i = 0; i < arreglo.length; i++) { //i=0>1>2>3
        //valor maximo
        if (maximo < arreglo[i]) {
            maximo = arreglo[i]
        }
        //valir minimo
        if (minimo > arreglo[i]) {
            minimo = arreglo[i]
        }
        suma = suma + arreglo[i]
    }
    promedio = suma / arreglo.length
    arrAux.push(maximo)
    arrAux.push(minimo)
    arrAux.push(promedio)

    return arrAux

}

b = maxminprom([3, 7, -1])
console.log(b) //[7,-1,3]


//[3,1,2]
//[-1,-4,0]
function maximominimoprom(arreglo) {

    var arregloAuxiliar = []
    var minimo = arreglo[0] //-1> -4
    var maximo = arreglo[0]
    var suma = 0
    var promedio = 0

    for (var i = 0; i < arreglo.length; i++) {
        if (minimo > arreglo[i]) {
            minimo = arreglo[i]
        }

    }



    return arregloAuxiliar
}

//Escribe una función que intercambie el primer y el último valor de cualquier array. 
//La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).
//[1,5,10,-2]
function invertirArray(arreglo) { //arreglo.length=4
    var nuevoArreglo = [] //[-2,10,5,1]
    for (let index = arreglo.length - 1; index >= 0; index--) { //index=3>2>1>0>-1

        nuevoArreglo.push(arreglo[index]);
    }
    return nuevoArreglo
}

console.log(invertirArray([1, 5, 10, -2]))