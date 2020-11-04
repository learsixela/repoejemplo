/** 1 **/
function a(x, y) {
    return 5;
}
console.log(a(9, 23456785)); //función devuelve 5
//Rspt:5


/** 2 **/
function a(x, y) { //x=6;y=8;
    z = [] //creacion de un arreglo vacio
        //z=[6,8,5]
    z.push(x); //push, agrega al final del arreglo el elemento
    z.push(y);
    z.push(5);
    console.log(z); //[6,8,5]
    return z;
}
b = a(2, 2) //b = [2,2,5]
console.log(b); // [2,2,5]
console.log(a(6, 8)); //console.log([6,8,5]);//[6,8,5]
//Rspt: [2,2,5],[2,2,5],[6,8,5],[6,8,5]


/** 3 **/
function a(x) { //x=2
    z = []; //arreglo vacio
    //z=[2,2]
    z.push(x);
    z.pop(); //elimina el ultimo elemento
    z.push(x);
    z.push(x);
    return z; //return [2,2]
}
y = a(2); //y= [2,2]
y.push(5); //y= [2,2,5]
console.log(y);
//rpst:[2,2,5]


/** 4 **/
function a(x) { //x=[2, 3, 4, 5]; x.length=4
    if (x[0] < x[1]) { //2<3->true
        return true;
    } else {
        return false;
    }
}
b = a([2, 3, 4, 5]); //b = true
console.log(b); //true
//Rspt: true


/** 5 **/
function a(x) { //x=[1, 2, 3, 4]; x.length=4

    for (var i = 0; i < x.length; i++) { //i=0>1>2>3>4
        if (x[i] > 0) { //4>0
            x[i] = "Coding";
        }    
    }    
    //x=["Coding","Coding","Coding","Coding"]
    return x; // return ["Coding","Coding","Coding","Coding"]
}
console.log(a([1, 2, 3, 4])); //console.log(["Coding","Coding","Coding","Coding"])
//Rpst:["Coding","Coding","Coding","Coding"]


/** 6 **/
function a(x) { //x=[5, 7, -1, 4];x.length=4

    for (var i = 0; i < x.length; i++) { //i=0>1>2>3>4
        if (x[i] > 5) { //4>5
            x[i] = "Coding";
        } else if (x[i] < 0) { //4<0
            x[i] = "Dojo";
        }    
    }    
    //x = [5, "Coding", "Dojo", 4]
    return x; // return [5, "Coding", "Dojo", 4]
}
console.log(a([5, 7, -1, 4])); //console.log([5, "Coding", "Dojo", 4])
//Rspt:[5, "Coding", "Dojo", 4]


/** 7 **/
function a(x) { //x[0]=>15; x[1]=12
    if (x[0] > x[1]) { //15>12
        return x[1];
    }
    return 10;
}
b = a([15, 12]) //b= 12
console.log(b);
//Rspt:12


/** 8 **/
function sum(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}
//Rspt:undefined
var v = [1, 2, 3, 4, 5]; //v.length=5
for (var w = 0; w < v.length; w++) { //w= 0>1 >2>3
    v.pop();
}
console.log(v); //v=[1,2]


/**Parte 2**/
//1) Analiza los valores de un array y 
//obtén el promedio (average) de esos valores:

function printAverage(x) {
    sum = 0; //acumulador
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    } //suma de todos / por la cantidad
    //var promedio = sum/x.length;
    return sum / x.length; //promedio
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5



//2) Crea un array con todos los enteros impares (odd integers) 
//entre 1 y 255 (inclusive)

function returnOddArray() {
    var arreglo = []; //[1,3,5,7...,253,255]

    for (var i = 1; i <= 255; i += 2) { //i=1>3>5>7>...>253>255>257
        arreglo.push(i);
    }
    //console.log(arreglo);//[1,3,5,7...,253,255]
    return arreglo

}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]
//undefined



//3) Cuadra cada valor con un array dado, 
//obteniendo el mismo array con valores cambiados..

function squareValue(x) { //x= [1, 2, 3]; x.length=3

    for (var i = 0; i < x.length; i++) { //i=0>1>2>3
        //x[i] = -> si existre lo reemplaza
        x[i] = x[i] * x[i]; //x[2] = 3*3
    }
    return x; //[1,4,9]
}

y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]



/**
 * [20,30,40,50,60,70] ->[20,30,70]   2,4
 */
function removeRange(arreglo, inicio, final) { //arreglo=[20,30,40,50,60,70];
    // inicio=2 ; final=4 ; arreglo.length=6
    var arrAux = []; //[20,30,70]
    for (var i = 0; i < arreglo.length; i++) { //i=0>1>2>3>4>5>6

        if (i < inicio || i > final) { //5 < 2 o 5 >4  FoV=V
            arrAux.push(arreglo[i])
        }

        /*     [ 2,4 ] 2,3,4
        ]2,4] 3,4
        ]2,4[ 3
        0,1,2,3,4,5 
*/
        /*
        if (i < inicio) {
                
        }
        if (i > final) {

        } */

        /** tabla de verdad
         *  V y V = V 
         *  V y F = F
         *  F y V = F
         *  F y F = F
         * 
         *  V o V = V
         *  V o F = V
         *  F o V = V
         *  F o F = F
         * 
         * V y V = V
         * F o F = F
         */

    }
    return arrAux; //return [20,30,70]

}

b = removeRange([20, 30, 40, 50, 60, 70], 1, 3); //b= [20,30,70]
console.log(b); //[20,30,70]


if (sexo == "F" && edad > 18) {

} else if (sexo == "M" && edad > 18) {

}

/**
 * los pasos para cambiar la rueda de un vehiculo
 */