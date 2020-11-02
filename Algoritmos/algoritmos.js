/** 1 **/
/* las funciones nunca se ejecutan solas, solamente cuando son llamadas */
function a() {
    console.log('hello');
}
console.log('Dojo');
//rspt:'Dojo',

/** 2 las funciones pueden o no retornar valor*/
function a() {
    console.log('hello');
    return 15;
}
//definicion de variable
x = a(); //x = 15
console.log('x is', x); // 'x is 15'
//rspt:'hello','x is 15'

/** */
function a(n) { //n=3
    console.log('n is', n);
    return n + 15; //18
}
x = a(3); //x = 18
console.log('x is', x);

//rspt:'n is 3','x is 18'

/** */
function a(n) { //n=5
    console.log('n is', n);
    y = n * 2; //10
    return y; //return 10
}
x = a(3) + a(5); //x = 6 + 10 > x= 16
console.log('x is', x);
//rspt:'n is 3','n is 5','x is 16'

/**
 *  5
 */
function op(a, b) { //a=3;b=5
    c = a + b; //c = 8
    console.log('c is', c);
    return c; //return 8
}
x = op(2, 3) + op(3, 5); //x= 5 + 8 > x  = 13
console.log('x is', x);

//rspt: 'c is 5','c is 8','x is 13'

/** */
function op(a, b) { //a=; b= 
    c = a + b; //c = 
    console.log('c is', c);
    return c; // return 
}
x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
//x= 5+ op(3, 3)+ op(op(2, 1), op(2, 3))
//x= 5 + 6 + op(3,5) 
//x= 5+6+8 >19 ; x= 19
console.log('x is', x)

//rspt: 'c is 5','c is 3','c is 6','c is 3','c is 5','c is 8','x is 19'

/**
 * 7
 */

var x = 15;

function a() {
    // nace y muere dentro de la funcion, distinta de la ota variable llamada x
    var x = 10;
}
console.log(x);
a(); //solamente llamando a la funcion
console.log(x);
//rspt: 15,15

/**
 * 8
 */
function multiply(x, y) { //x= 2, y =3
    console.log(x);
    console.log(y);
}
b = multiply(2, 3); //b= undefined
console.log(b);
//rpst: 2,3, undefined

/**
 * 9
 */

function multiply(x, y) { //x=5,y=2
    return x * y; //return 5*2
}
b = multiply(2, 3); //b= 6
console.log(b);
console.log(multiply(5, 2)); //console.log(10) > 10
//rspt: 6,10

/**
 * 10
 */
//arreglo: conjunto de datos ordenado , segun su ingreso, separdos por coma (,)
//el tamaño del arreglo de obtiene,por cantidad de datos, o nombre_del_arreglo.length
//ejemplo  x.length = 6
//todos los arreglos comienzan por el indice cero(0)
//ejemplo x[0]=> 1;x[3]=> 4; x[5]=>10
//el ultimo elemento de la lista = x.length-1 //6-1 = 5
// x[x.length -1] => 10
var x = [1, 2, 3, 4, 5, 10]; //x= []
for (var i = 0; i < 5; i++) { //i=0>3>4>7>8 ;    i = i+1 > i+=1 >i++
    i = i + 3; //
    console.log(i);
}

//rspt:3,7