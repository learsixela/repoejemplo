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
//Rspt:



/**Parte 2**/
//1) Analiza los valores de un array y obtén el promedio (average) de esos valores:

function printAverage(x) {
    sum = 0;
    // your code here
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5



//2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)

function returnOddArray() {
    // your code here
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]



//3) Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..

function squareValue(x) {
    // your code here
    return x;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]