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