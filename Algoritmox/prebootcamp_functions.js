//crear funcion
function nombre_de_funcion(parametro) { //parametro puede ir o no

    return nuevoResultado;
}

//formas de llamar a la funcion
nombre_de_funcion(4)
console.log(nombre_de_funcion(4))
    //otra forma de llamar a la funcion
var num1 = 4
nombre_de_funcion(num1)
console.log(nombre_de_funcion(num1))

/** */
function a(n) { //n=5
    console.log('n is', n);
    y = n * 2; //y = 5*2= 10
    return y; //return 10;
}

var x = a(3) + a(5); //var x = 6 + a(5) => var x = 6 + 10 ; x = 16
console.log('x is', x); // 'x is 16'
//rspt: 'n is 3', 'n is 5','x is 16'




var textoNumero = "esto es texto/" + 1 + "/otro texto"

console.log(textoNumero)